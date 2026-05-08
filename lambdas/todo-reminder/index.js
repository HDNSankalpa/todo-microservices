import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({ region: process.env.AWS_REGION || "ap-south-1" });

export const handler = async (event) => {
  console.log("todo-reminder received event", JSON.stringify(event));
  try {
    const detail = typeof event.detail === "string" ? JSON.parse(event.detail) : event.detail || event;
    const todo = detail.data || detail;
    const to = todo.email || detail.email || process.env.FALLBACK_REMINDER_EMAIL;
    const subject = "Todo due soon: " + (todo.title || "Untitled todo");
    const body = "Reminder: your todo is due within 24 hours.\n\nTitle: " + (todo.title || "Untitled") + "\nDue: " + (todo.dueDate || "not set");
    if (!to || !process.env.SES_FROM_EMAIL) {
      console.log("SES not configured; reminder email fallback", { to, subject, body });
      return { statusCode: 200, body: JSON.stringify({ delivered: false, fallback: true }) };
    }
    await ses.send(new SendEmailCommand({
      Source: process.env.SES_FROM_EMAIL,
      Destination: { ToAddresses: [to] },
      Message: { Subject: { Data: subject }, Body: { Text: { Data: body } } }
    }));
    console.log("Reminder email sent", { to, subject });
    return { statusCode: 200, body: JSON.stringify({ delivered: true }) };
  } catch (error) {
    console.error("todo-reminder failed", error);
    throw error;
  }
};
