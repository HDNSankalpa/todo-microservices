import amqp from "amqplib";
import type { ConsumeMessage, Options } from "amqplib";
import { Kafka } from "kafkajs";

type RabbitChannel = Awaited<ReturnType<typeof amqp.connect>> extends infer C
  ? C extends { createChannel: () => Promise<infer Ch> }
    ? Ch
    : any
  : any;
type RabbitConnection = Awaited<ReturnType<typeof amqp.connect>>;

let connection: RabbitConnection | null = null;
let channel: RabbitChannel | null = null;
let connecting: Promise<RabbitChannel> | null = null;

const url = () => process.env.RABBITMQ_URL ?? "amqp://guest:guest@localhost:5672";

export type EventMessage<T = unknown> = { type: string; userId?: string; data: T; timestamp: string; requestId?: string };
export const isConnected = () => connection !== null;

export async function createConnection(): Promise<RabbitChannel> {
  if (channel) return channel;
  if (connecting) return connecting;
  connecting = (async () => {
    const conn = await amqp.connect(url());
    connection = conn;
    conn.on("close", () => { connection = null; channel = null; connecting = null; setTimeout(() => void createConnection().catch(console.error), 2000); });
    conn.on("error", console.error);
    const ch = await conn.createChannel();
    channel = ch;
    await ch.assertExchange("todo.direct", "direct", { durable: true });
    await ch.assertExchange("todo.topic", "topic", { durable: true });
    await ch.assertExchange("todo.audit", "fanout", { durable: true });
    await ch.assertExchange("todo.dlx", "direct", { durable: true });
    await ch.assertQueue("todo.dlq", { durable: true });
    await ch.bindQueue("todo.dlq", "todo.dlx", "dead");
    return ch;
  })();
  return connecting;
}

export async function publish(exchange: string, routingKey: string, message: EventMessage | Record<string, unknown>) {
  const ch = await createConnection();
  const payload = Buffer.from(JSON.stringify(message));
  const options: Options.Publish = { persistent: true, contentType: "application/json", timestamp: Date.now() };
  ch.publish(exchange, routingKey, payload, options);
  ch.publish("todo.audit", "", payload, options);
}

export async function subscribe(
  exchange: string,
  routingKey: string,
  queueName: string,
  handler: (message: EventMessage, raw: ConsumeMessage) => Promise<void>
) {
  const ch = await createConnection();
  await ch.assertQueue(queueName, {
    durable: true,
    arguments: { "x-dead-letter-exchange": "todo.dlx", "x-dead-letter-routing-key": "dead" }
  });
  await ch.bindQueue(queueName, exchange, routingKey);
  await ch.prefetch(Number(process.env.RABBITMQ_PREFETCH ?? 10));
  await ch.consume(queueName, async (msg: ConsumeMessage | null) => {
    if (!msg) return;
    try {
      await handler(JSON.parse(msg.content.toString()), msg);
      ch.ack(msg);
    } catch (error) {
      console.error(error);
      ch.nack(msg, false, false);
    }
  });
}

export const createKafka = () =>
  new Kafka({ clientId: process.env.KAFKA_CLIENT_ID ?? "todo-app", brokers: (process.env.KAFKA_BROKERS ?? "localhost:9092").split(",") });

export async function kafkaPublish(topic: string, message: EventMessage | Record<string, unknown>) {
  const producer = createKafka().producer();
  await producer.connect();
  await producer.send({ topic, messages: [{ key: "event", value: JSON.stringify(message) }] });
  await producer.disconnect();
}

export async function kafkaSubscribe(groupId: string, topic: string, handler: (message: EventMessage) => Promise<void>) {
  const consumer = createKafka().consumer({ groupId });
  await consumer.connect();
  await consumer.subscribe({ topic, fromBeginning: false });
  await consumer.run({ eachMessage: async ({ message }) => {
    if (message.value) await handler(JSON.parse(message.value.toString()));
  }});
}
