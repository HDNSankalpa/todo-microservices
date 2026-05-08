
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Todo
 * 
 */
export type Todo = $Result.DefaultSelection<Prisma.$TodoPayload>
/**
 * Model TodoHistory
 * 
 */
export type TodoHistory = $Result.DefaultSelection<Prisma.$TodoHistoryPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model TodoTag
 * 
 */
export type TodoTag = $Result.DefaultSelection<Prisma.$TodoTagPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Priority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  URGENT: 'URGENT'
};

export type Priority = (typeof Priority)[keyof typeof Priority]


export const TodoStatus: {
  TODO: 'TODO',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
  ARCHIVED: 'ARCHIVED'
};

export type TodoStatus = (typeof TodoStatus)[keyof typeof TodoStatus]

}

export type Priority = $Enums.Priority

export const Priority: typeof $Enums.Priority

export type TodoStatus = $Enums.TodoStatus

export const TodoStatus: typeof $Enums.TodoStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Todos
 * const todos = await prisma.todo.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Todos
   * const todos = await prisma.todo.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.todo`: Exposes CRUD operations for the **Todo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Todos
    * const todos = await prisma.todo.findMany()
    * ```
    */
  get todo(): Prisma.TodoDelegate<ExtArgs>;

  /**
   * `prisma.todoHistory`: Exposes CRUD operations for the **TodoHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TodoHistories
    * const todoHistories = await prisma.todoHistory.findMany()
    * ```
    */
  get todoHistory(): Prisma.TodoHistoryDelegate<ExtArgs>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs>;

  /**
   * `prisma.todoTag`: Exposes CRUD operations for the **TodoTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TodoTags
    * const todoTags = await prisma.todoTag.findMany()
    * ```
    */
  get todoTag(): Prisma.TodoTagDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Todo: 'Todo',
    TodoHistory: 'TodoHistory',
    Tag: 'Tag',
    TodoTag: 'TodoTag'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "todo" | "todoHistory" | "tag" | "todoTag"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Todo: {
        payload: Prisma.$TodoPayload<ExtArgs>
        fields: Prisma.TodoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TodoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TodoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          findFirst: {
            args: Prisma.TodoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TodoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          findMany: {
            args: Prisma.TodoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>[]
          }
          create: {
            args: Prisma.TodoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          createMany: {
            args: Prisma.TodoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TodoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>[]
          }
          delete: {
            args: Prisma.TodoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          update: {
            args: Prisma.TodoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          deleteMany: {
            args: Prisma.TodoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TodoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TodoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          aggregate: {
            args: Prisma.TodoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTodo>
          }
          groupBy: {
            args: Prisma.TodoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TodoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TodoCountArgs<ExtArgs>
            result: $Utils.Optional<TodoCountAggregateOutputType> | number
          }
        }
      }
      TodoHistory: {
        payload: Prisma.$TodoHistoryPayload<ExtArgs>
        fields: Prisma.TodoHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TodoHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TodoHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoHistoryPayload>
          }
          findFirst: {
            args: Prisma.TodoHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TodoHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoHistoryPayload>
          }
          findMany: {
            args: Prisma.TodoHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoHistoryPayload>[]
          }
          create: {
            args: Prisma.TodoHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoHistoryPayload>
          }
          createMany: {
            args: Prisma.TodoHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TodoHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoHistoryPayload>[]
          }
          delete: {
            args: Prisma.TodoHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoHistoryPayload>
          }
          update: {
            args: Prisma.TodoHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoHistoryPayload>
          }
          deleteMany: {
            args: Prisma.TodoHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TodoHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TodoHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoHistoryPayload>
          }
          aggregate: {
            args: Prisma.TodoHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTodoHistory>
          }
          groupBy: {
            args: Prisma.TodoHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TodoHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TodoHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<TodoHistoryCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      TodoTag: {
        payload: Prisma.$TodoTagPayload<ExtArgs>
        fields: Prisma.TodoTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TodoTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TodoTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoTagPayload>
          }
          findFirst: {
            args: Prisma.TodoTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TodoTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoTagPayload>
          }
          findMany: {
            args: Prisma.TodoTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoTagPayload>[]
          }
          create: {
            args: Prisma.TodoTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoTagPayload>
          }
          createMany: {
            args: Prisma.TodoTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TodoTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoTagPayload>[]
          }
          delete: {
            args: Prisma.TodoTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoTagPayload>
          }
          update: {
            args: Prisma.TodoTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoTagPayload>
          }
          deleteMany: {
            args: Prisma.TodoTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TodoTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TodoTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoTagPayload>
          }
          aggregate: {
            args: Prisma.TodoTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTodoTag>
          }
          groupBy: {
            args: Prisma.TodoTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TodoTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TodoTagCountArgs<ExtArgs>
            result: $Utils.Optional<TodoTagCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TodoCountOutputType
   */

  export type TodoCountOutputType = {
    subtasks: number
    tags: number
    history: number
  }

  export type TodoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subtasks?: boolean | TodoCountOutputTypeCountSubtasksArgs
    tags?: boolean | TodoCountOutputTypeCountTagsArgs
    history?: boolean | TodoCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * TodoCountOutputType without action
   */
  export type TodoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoCountOutputType
     */
    select?: TodoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TodoCountOutputType without action
   */
  export type TodoCountOutputTypeCountSubtasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodoWhereInput
  }

  /**
   * TodoCountOutputType without action
   */
  export type TodoCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodoTagWhereInput
  }

  /**
   * TodoCountOutputType without action
   */
  export type TodoCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodoHistoryWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    todos: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    todos?: boolean | TagCountOutputTypeCountTodosArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountTodosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodoTagWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Todo
   */

  export type AggregateTodo = {
    _count: TodoCountAggregateOutputType | null
    _avg: TodoAvgAggregateOutputType | null
    _sum: TodoSumAggregateOutputType | null
    _min: TodoMinAggregateOutputType | null
    _max: TodoMaxAggregateOutputType | null
  }

  export type TodoAvgAggregateOutputType = {
    position: number | null
  }

  export type TodoSumAggregateOutputType = {
    position: number | null
  }

  export type TodoMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    priority: $Enums.Priority | null
    status: $Enums.TodoStatus | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    position: number | null
    parentId: string | null
  }

  export type TodoMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    priority: $Enums.Priority | null
    status: $Enums.TodoStatus | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    position: number | null
    parentId: string | null
  }

  export type TodoCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    description: number
    priority: number
    status: number
    dueDate: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    position: number
    parentId: number
    _all: number
  }


  export type TodoAvgAggregateInputType = {
    position?: true
  }

  export type TodoSumAggregateInputType = {
    position?: true
  }

  export type TodoMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    priority?: true
    status?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    position?: true
    parentId?: true
  }

  export type TodoMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    priority?: true
    status?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    position?: true
    parentId?: true
  }

  export type TodoCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    priority?: true
    status?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    position?: true
    parentId?: true
    _all?: true
  }

  export type TodoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Todo to aggregate.
     */
    where?: TodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todos to fetch.
     */
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Todos
    **/
    _count?: true | TodoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TodoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TodoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TodoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TodoMaxAggregateInputType
  }

  export type GetTodoAggregateType<T extends TodoAggregateArgs> = {
        [P in keyof T & keyof AggregateTodo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTodo[P]>
      : GetScalarType<T[P], AggregateTodo[P]>
  }




  export type TodoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodoWhereInput
    orderBy?: TodoOrderByWithAggregationInput | TodoOrderByWithAggregationInput[]
    by: TodoScalarFieldEnum[] | TodoScalarFieldEnum
    having?: TodoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TodoCountAggregateInputType | true
    _avg?: TodoAvgAggregateInputType
    _sum?: TodoSumAggregateInputType
    _min?: TodoMinAggregateInputType
    _max?: TodoMaxAggregateInputType
  }

  export type TodoGroupByOutputType = {
    id: string
    userId: string
    title: string
    description: string
    priority: $Enums.Priority
    status: $Enums.TodoStatus
    dueDate: Date | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    position: number
    parentId: string | null
    _count: TodoCountAggregateOutputType | null
    _avg: TodoAvgAggregateOutputType | null
    _sum: TodoSumAggregateOutputType | null
    _min: TodoMinAggregateOutputType | null
    _max: TodoMaxAggregateOutputType | null
  }

  type GetTodoGroupByPayload<T extends TodoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TodoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TodoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TodoGroupByOutputType[P]>
            : GetScalarType<T[P], TodoGroupByOutputType[P]>
        }
      >
    >


  export type TodoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    position?: boolean
    parentId?: boolean
    parent?: boolean | Todo$parentArgs<ExtArgs>
    subtasks?: boolean | Todo$subtasksArgs<ExtArgs>
    tags?: boolean | Todo$tagsArgs<ExtArgs>
    history?: boolean | Todo$historyArgs<ExtArgs>
    _count?: boolean | TodoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["todo"]>

  export type TodoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    position?: boolean
    parentId?: boolean
    parent?: boolean | Todo$parentArgs<ExtArgs>
  }, ExtArgs["result"]["todo"]>

  export type TodoSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    position?: boolean
    parentId?: boolean
  }

  export type TodoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Todo$parentArgs<ExtArgs>
    subtasks?: boolean | Todo$subtasksArgs<ExtArgs>
    tags?: boolean | Todo$tagsArgs<ExtArgs>
    history?: boolean | Todo$historyArgs<ExtArgs>
    _count?: boolean | TodoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TodoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Todo$parentArgs<ExtArgs>
  }

  export type $TodoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Todo"
    objects: {
      parent: Prisma.$TodoPayload<ExtArgs> | null
      subtasks: Prisma.$TodoPayload<ExtArgs>[]
      tags: Prisma.$TodoTagPayload<ExtArgs>[]
      history: Prisma.$TodoHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      description: string
      priority: $Enums.Priority
      status: $Enums.TodoStatus
      dueDate: Date | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      position: number
      parentId: string | null
    }, ExtArgs["result"]["todo"]>
    composites: {}
  }

  type TodoGetPayload<S extends boolean | null | undefined | TodoDefaultArgs> = $Result.GetResult<Prisma.$TodoPayload, S>

  type TodoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TodoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TodoCountAggregateInputType | true
    }

  export interface TodoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Todo'], meta: { name: 'Todo' } }
    /**
     * Find zero or one Todo that matches the filter.
     * @param {TodoFindUniqueArgs} args - Arguments to find a Todo
     * @example
     * // Get one Todo
     * const todo = await prisma.todo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TodoFindUniqueArgs>(args: SelectSubset<T, TodoFindUniqueArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Todo that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TodoFindUniqueOrThrowArgs} args - Arguments to find a Todo
     * @example
     * // Get one Todo
     * const todo = await prisma.todo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TodoFindUniqueOrThrowArgs>(args: SelectSubset<T, TodoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Todo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoFindFirstArgs} args - Arguments to find a Todo
     * @example
     * // Get one Todo
     * const todo = await prisma.todo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TodoFindFirstArgs>(args?: SelectSubset<T, TodoFindFirstArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Todo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoFindFirstOrThrowArgs} args - Arguments to find a Todo
     * @example
     * // Get one Todo
     * const todo = await prisma.todo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TodoFindFirstOrThrowArgs>(args?: SelectSubset<T, TodoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Todos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Todos
     * const todos = await prisma.todo.findMany()
     * 
     * // Get first 10 Todos
     * const todos = await prisma.todo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const todoWithIdOnly = await prisma.todo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TodoFindManyArgs>(args?: SelectSubset<T, TodoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Todo.
     * @param {TodoCreateArgs} args - Arguments to create a Todo.
     * @example
     * // Create one Todo
     * const Todo = await prisma.todo.create({
     *   data: {
     *     // ... data to create a Todo
     *   }
     * })
     * 
     */
    create<T extends TodoCreateArgs>(args: SelectSubset<T, TodoCreateArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Todos.
     * @param {TodoCreateManyArgs} args - Arguments to create many Todos.
     * @example
     * // Create many Todos
     * const todo = await prisma.todo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TodoCreateManyArgs>(args?: SelectSubset<T, TodoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Todos and returns the data saved in the database.
     * @param {TodoCreateManyAndReturnArgs} args - Arguments to create many Todos.
     * @example
     * // Create many Todos
     * const todo = await prisma.todo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Todos and only return the `id`
     * const todoWithIdOnly = await prisma.todo.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TodoCreateManyAndReturnArgs>(args?: SelectSubset<T, TodoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Todo.
     * @param {TodoDeleteArgs} args - Arguments to delete one Todo.
     * @example
     * // Delete one Todo
     * const Todo = await prisma.todo.delete({
     *   where: {
     *     // ... filter to delete one Todo
     *   }
     * })
     * 
     */
    delete<T extends TodoDeleteArgs>(args: SelectSubset<T, TodoDeleteArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Todo.
     * @param {TodoUpdateArgs} args - Arguments to update one Todo.
     * @example
     * // Update one Todo
     * const todo = await prisma.todo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TodoUpdateArgs>(args: SelectSubset<T, TodoUpdateArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Todos.
     * @param {TodoDeleteManyArgs} args - Arguments to filter Todos to delete.
     * @example
     * // Delete a few Todos
     * const { count } = await prisma.todo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TodoDeleteManyArgs>(args?: SelectSubset<T, TodoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Todos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Todos
     * const todo = await prisma.todo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TodoUpdateManyArgs>(args: SelectSubset<T, TodoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Todo.
     * @param {TodoUpsertArgs} args - Arguments to update or create a Todo.
     * @example
     * // Update or create a Todo
     * const todo = await prisma.todo.upsert({
     *   create: {
     *     // ... data to create a Todo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Todo we want to update
     *   }
     * })
     */
    upsert<T extends TodoUpsertArgs>(args: SelectSubset<T, TodoUpsertArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Todos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoCountArgs} args - Arguments to filter Todos to count.
     * @example
     * // Count the number of Todos
     * const count = await prisma.todo.count({
     *   where: {
     *     // ... the filter for the Todos we want to count
     *   }
     * })
    **/
    count<T extends TodoCountArgs>(
      args?: Subset<T, TodoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TodoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Todo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TodoAggregateArgs>(args: Subset<T, TodoAggregateArgs>): Prisma.PrismaPromise<GetTodoAggregateType<T>>

    /**
     * Group by Todo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TodoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TodoGroupByArgs['orderBy'] }
        : { orderBy?: TodoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TodoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTodoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Todo model
   */
  readonly fields: TodoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Todo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TodoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends Todo$parentArgs<ExtArgs> = {}>(args?: Subset<T, Todo$parentArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    subtasks<T extends Todo$subtasksArgs<ExtArgs> = {}>(args?: Subset<T, Todo$subtasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findMany"> | Null>
    tags<T extends Todo$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Todo$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodoTagPayload<ExtArgs>, T, "findMany"> | Null>
    history<T extends Todo$historyArgs<ExtArgs> = {}>(args?: Subset<T, Todo$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodoHistoryPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Todo model
   */ 
  interface TodoFieldRefs {
    readonly id: FieldRef<"Todo", 'String'>
    readonly userId: FieldRef<"Todo", 'String'>
    readonly title: FieldRef<"Todo", 'String'>
    readonly description: FieldRef<"Todo", 'String'>
    readonly priority: FieldRef<"Todo", 'Priority'>
    readonly status: FieldRef<"Todo", 'TodoStatus'>
    readonly dueDate: FieldRef<"Todo", 'DateTime'>
    readonly createdAt: FieldRef<"Todo", 'DateTime'>
    readonly updatedAt: FieldRef<"Todo", 'DateTime'>
    readonly deletedAt: FieldRef<"Todo", 'DateTime'>
    readonly position: FieldRef<"Todo", 'Int'>
    readonly parentId: FieldRef<"Todo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Todo findUnique
   */
  export type TodoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * Filter, which Todo to fetch.
     */
    where: TodoWhereUniqueInput
  }

  /**
   * Todo findUniqueOrThrow
   */
  export type TodoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * Filter, which Todo to fetch.
     */
    where: TodoWhereUniqueInput
  }

  /**
   * Todo findFirst
   */
  export type TodoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * Filter, which Todo to fetch.
     */
    where?: TodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todos to fetch.
     */
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Todos.
     */
    cursor?: TodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Todos.
     */
    distinct?: TodoScalarFieldEnum | TodoScalarFieldEnum[]
  }

  /**
   * Todo findFirstOrThrow
   */
  export type TodoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * Filter, which Todo to fetch.
     */
    where?: TodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todos to fetch.
     */
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Todos.
     */
    cursor?: TodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Todos.
     */
    distinct?: TodoScalarFieldEnum | TodoScalarFieldEnum[]
  }

  /**
   * Todo findMany
   */
  export type TodoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * Filter, which Todos to fetch.
     */
    where?: TodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todos to fetch.
     */
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Todos.
     */
    cursor?: TodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todos.
     */
    skip?: number
    distinct?: TodoScalarFieldEnum | TodoScalarFieldEnum[]
  }

  /**
   * Todo create
   */
  export type TodoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * The data needed to create a Todo.
     */
    data: XOR<TodoCreateInput, TodoUncheckedCreateInput>
  }

  /**
   * Todo createMany
   */
  export type TodoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Todos.
     */
    data: TodoCreateManyInput | TodoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Todo createManyAndReturn
   */
  export type TodoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Todos.
     */
    data: TodoCreateManyInput | TodoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Todo update
   */
  export type TodoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * The data needed to update a Todo.
     */
    data: XOR<TodoUpdateInput, TodoUncheckedUpdateInput>
    /**
     * Choose, which Todo to update.
     */
    where: TodoWhereUniqueInput
  }

  /**
   * Todo updateMany
   */
  export type TodoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Todos.
     */
    data: XOR<TodoUpdateManyMutationInput, TodoUncheckedUpdateManyInput>
    /**
     * Filter which Todos to update
     */
    where?: TodoWhereInput
  }

  /**
   * Todo upsert
   */
  export type TodoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * The filter to search for the Todo to update in case it exists.
     */
    where: TodoWhereUniqueInput
    /**
     * In case the Todo found by the `where` argument doesn't exist, create a new Todo with this data.
     */
    create: XOR<TodoCreateInput, TodoUncheckedCreateInput>
    /**
     * In case the Todo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TodoUpdateInput, TodoUncheckedUpdateInput>
  }

  /**
   * Todo delete
   */
  export type TodoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * Filter which Todo to delete.
     */
    where: TodoWhereUniqueInput
  }

  /**
   * Todo deleteMany
   */
  export type TodoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Todos to delete
     */
    where?: TodoWhereInput
  }

  /**
   * Todo.parent
   */
  export type Todo$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    where?: TodoWhereInput
  }

  /**
   * Todo.subtasks
   */
  export type Todo$subtasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    where?: TodoWhereInput
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    cursor?: TodoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TodoScalarFieldEnum | TodoScalarFieldEnum[]
  }

  /**
   * Todo.tags
   */
  export type Todo$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoTag
     */
    select?: TodoTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoTagInclude<ExtArgs> | null
    where?: TodoTagWhereInput
    orderBy?: TodoTagOrderByWithRelationInput | TodoTagOrderByWithRelationInput[]
    cursor?: TodoTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TodoTagScalarFieldEnum | TodoTagScalarFieldEnum[]
  }

  /**
   * Todo.history
   */
  export type Todo$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoHistory
     */
    select?: TodoHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoHistoryInclude<ExtArgs> | null
    where?: TodoHistoryWhereInput
    orderBy?: TodoHistoryOrderByWithRelationInput | TodoHistoryOrderByWithRelationInput[]
    cursor?: TodoHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TodoHistoryScalarFieldEnum | TodoHistoryScalarFieldEnum[]
  }

  /**
   * Todo without action
   */
  export type TodoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
  }


  /**
   * Model TodoHistory
   */

  export type AggregateTodoHistory = {
    _count: TodoHistoryCountAggregateOutputType | null
    _min: TodoHistoryMinAggregateOutputType | null
    _max: TodoHistoryMaxAggregateOutputType | null
  }

  export type TodoHistoryMinAggregateOutputType = {
    id: string | null
    todoId: string | null
    createdAt: Date | null
  }

  export type TodoHistoryMaxAggregateOutputType = {
    id: string | null
    todoId: string | null
    createdAt: Date | null
  }

  export type TodoHistoryCountAggregateOutputType = {
    id: number
    todoId: number
    snapshot: number
    createdAt: number
    _all: number
  }


  export type TodoHistoryMinAggregateInputType = {
    id?: true
    todoId?: true
    createdAt?: true
  }

  export type TodoHistoryMaxAggregateInputType = {
    id?: true
    todoId?: true
    createdAt?: true
  }

  export type TodoHistoryCountAggregateInputType = {
    id?: true
    todoId?: true
    snapshot?: true
    createdAt?: true
    _all?: true
  }

  export type TodoHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TodoHistory to aggregate.
     */
    where?: TodoHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TodoHistories to fetch.
     */
    orderBy?: TodoHistoryOrderByWithRelationInput | TodoHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TodoHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TodoHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TodoHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TodoHistories
    **/
    _count?: true | TodoHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TodoHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TodoHistoryMaxAggregateInputType
  }

  export type GetTodoHistoryAggregateType<T extends TodoHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTodoHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTodoHistory[P]>
      : GetScalarType<T[P], AggregateTodoHistory[P]>
  }




  export type TodoHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodoHistoryWhereInput
    orderBy?: TodoHistoryOrderByWithAggregationInput | TodoHistoryOrderByWithAggregationInput[]
    by: TodoHistoryScalarFieldEnum[] | TodoHistoryScalarFieldEnum
    having?: TodoHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TodoHistoryCountAggregateInputType | true
    _min?: TodoHistoryMinAggregateInputType
    _max?: TodoHistoryMaxAggregateInputType
  }

  export type TodoHistoryGroupByOutputType = {
    id: string
    todoId: string
    snapshot: JsonValue
    createdAt: Date
    _count: TodoHistoryCountAggregateOutputType | null
    _min: TodoHistoryMinAggregateOutputType | null
    _max: TodoHistoryMaxAggregateOutputType | null
  }

  type GetTodoHistoryGroupByPayload<T extends TodoHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TodoHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TodoHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TodoHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], TodoHistoryGroupByOutputType[P]>
        }
      >
    >


  export type TodoHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    todoId?: boolean
    snapshot?: boolean
    createdAt?: boolean
    todo?: boolean | TodoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["todoHistory"]>

  export type TodoHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    todoId?: boolean
    snapshot?: boolean
    createdAt?: boolean
    todo?: boolean | TodoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["todoHistory"]>

  export type TodoHistorySelectScalar = {
    id?: boolean
    todoId?: boolean
    snapshot?: boolean
    createdAt?: boolean
  }

  export type TodoHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    todo?: boolean | TodoDefaultArgs<ExtArgs>
  }
  export type TodoHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    todo?: boolean | TodoDefaultArgs<ExtArgs>
  }

  export type $TodoHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TodoHistory"
    objects: {
      todo: Prisma.$TodoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      todoId: string
      snapshot: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["todoHistory"]>
    composites: {}
  }

  type TodoHistoryGetPayload<S extends boolean | null | undefined | TodoHistoryDefaultArgs> = $Result.GetResult<Prisma.$TodoHistoryPayload, S>

  type TodoHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TodoHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TodoHistoryCountAggregateInputType | true
    }

  export interface TodoHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TodoHistory'], meta: { name: 'TodoHistory' } }
    /**
     * Find zero or one TodoHistory that matches the filter.
     * @param {TodoHistoryFindUniqueArgs} args - Arguments to find a TodoHistory
     * @example
     * // Get one TodoHistory
     * const todoHistory = await prisma.todoHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TodoHistoryFindUniqueArgs>(args: SelectSubset<T, TodoHistoryFindUniqueArgs<ExtArgs>>): Prisma__TodoHistoryClient<$Result.GetResult<Prisma.$TodoHistoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TodoHistory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TodoHistoryFindUniqueOrThrowArgs} args - Arguments to find a TodoHistory
     * @example
     * // Get one TodoHistory
     * const todoHistory = await prisma.todoHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TodoHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TodoHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TodoHistoryClient<$Result.GetResult<Prisma.$TodoHistoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TodoHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoHistoryFindFirstArgs} args - Arguments to find a TodoHistory
     * @example
     * // Get one TodoHistory
     * const todoHistory = await prisma.todoHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TodoHistoryFindFirstArgs>(args?: SelectSubset<T, TodoHistoryFindFirstArgs<ExtArgs>>): Prisma__TodoHistoryClient<$Result.GetResult<Prisma.$TodoHistoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TodoHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoHistoryFindFirstOrThrowArgs} args - Arguments to find a TodoHistory
     * @example
     * // Get one TodoHistory
     * const todoHistory = await prisma.todoHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TodoHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TodoHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TodoHistoryClient<$Result.GetResult<Prisma.$TodoHistoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TodoHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TodoHistories
     * const todoHistories = await prisma.todoHistory.findMany()
     * 
     * // Get first 10 TodoHistories
     * const todoHistories = await prisma.todoHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const todoHistoryWithIdOnly = await prisma.todoHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TodoHistoryFindManyArgs>(args?: SelectSubset<T, TodoHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodoHistoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TodoHistory.
     * @param {TodoHistoryCreateArgs} args - Arguments to create a TodoHistory.
     * @example
     * // Create one TodoHistory
     * const TodoHistory = await prisma.todoHistory.create({
     *   data: {
     *     // ... data to create a TodoHistory
     *   }
     * })
     * 
     */
    create<T extends TodoHistoryCreateArgs>(args: SelectSubset<T, TodoHistoryCreateArgs<ExtArgs>>): Prisma__TodoHistoryClient<$Result.GetResult<Prisma.$TodoHistoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TodoHistories.
     * @param {TodoHistoryCreateManyArgs} args - Arguments to create many TodoHistories.
     * @example
     * // Create many TodoHistories
     * const todoHistory = await prisma.todoHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TodoHistoryCreateManyArgs>(args?: SelectSubset<T, TodoHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TodoHistories and returns the data saved in the database.
     * @param {TodoHistoryCreateManyAndReturnArgs} args - Arguments to create many TodoHistories.
     * @example
     * // Create many TodoHistories
     * const todoHistory = await prisma.todoHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TodoHistories and only return the `id`
     * const todoHistoryWithIdOnly = await prisma.todoHistory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TodoHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, TodoHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodoHistoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TodoHistory.
     * @param {TodoHistoryDeleteArgs} args - Arguments to delete one TodoHistory.
     * @example
     * // Delete one TodoHistory
     * const TodoHistory = await prisma.todoHistory.delete({
     *   where: {
     *     // ... filter to delete one TodoHistory
     *   }
     * })
     * 
     */
    delete<T extends TodoHistoryDeleteArgs>(args: SelectSubset<T, TodoHistoryDeleteArgs<ExtArgs>>): Prisma__TodoHistoryClient<$Result.GetResult<Prisma.$TodoHistoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TodoHistory.
     * @param {TodoHistoryUpdateArgs} args - Arguments to update one TodoHistory.
     * @example
     * // Update one TodoHistory
     * const todoHistory = await prisma.todoHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TodoHistoryUpdateArgs>(args: SelectSubset<T, TodoHistoryUpdateArgs<ExtArgs>>): Prisma__TodoHistoryClient<$Result.GetResult<Prisma.$TodoHistoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TodoHistories.
     * @param {TodoHistoryDeleteManyArgs} args - Arguments to filter TodoHistories to delete.
     * @example
     * // Delete a few TodoHistories
     * const { count } = await prisma.todoHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TodoHistoryDeleteManyArgs>(args?: SelectSubset<T, TodoHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TodoHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TodoHistories
     * const todoHistory = await prisma.todoHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TodoHistoryUpdateManyArgs>(args: SelectSubset<T, TodoHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TodoHistory.
     * @param {TodoHistoryUpsertArgs} args - Arguments to update or create a TodoHistory.
     * @example
     * // Update or create a TodoHistory
     * const todoHistory = await prisma.todoHistory.upsert({
     *   create: {
     *     // ... data to create a TodoHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TodoHistory we want to update
     *   }
     * })
     */
    upsert<T extends TodoHistoryUpsertArgs>(args: SelectSubset<T, TodoHistoryUpsertArgs<ExtArgs>>): Prisma__TodoHistoryClient<$Result.GetResult<Prisma.$TodoHistoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TodoHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoHistoryCountArgs} args - Arguments to filter TodoHistories to count.
     * @example
     * // Count the number of TodoHistories
     * const count = await prisma.todoHistory.count({
     *   where: {
     *     // ... the filter for the TodoHistories we want to count
     *   }
     * })
    **/
    count<T extends TodoHistoryCountArgs>(
      args?: Subset<T, TodoHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TodoHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TodoHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TodoHistoryAggregateArgs>(args: Subset<T, TodoHistoryAggregateArgs>): Prisma.PrismaPromise<GetTodoHistoryAggregateType<T>>

    /**
     * Group by TodoHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TodoHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TodoHistoryGroupByArgs['orderBy'] }
        : { orderBy?: TodoHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TodoHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTodoHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TodoHistory model
   */
  readonly fields: TodoHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TodoHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TodoHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    todo<T extends TodoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TodoDefaultArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TodoHistory model
   */ 
  interface TodoHistoryFieldRefs {
    readonly id: FieldRef<"TodoHistory", 'String'>
    readonly todoId: FieldRef<"TodoHistory", 'String'>
    readonly snapshot: FieldRef<"TodoHistory", 'Json'>
    readonly createdAt: FieldRef<"TodoHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TodoHistory findUnique
   */
  export type TodoHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoHistory
     */
    select?: TodoHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TodoHistory to fetch.
     */
    where: TodoHistoryWhereUniqueInput
  }

  /**
   * TodoHistory findUniqueOrThrow
   */
  export type TodoHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoHistory
     */
    select?: TodoHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TodoHistory to fetch.
     */
    where: TodoHistoryWhereUniqueInput
  }

  /**
   * TodoHistory findFirst
   */
  export type TodoHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoHistory
     */
    select?: TodoHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TodoHistory to fetch.
     */
    where?: TodoHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TodoHistories to fetch.
     */
    orderBy?: TodoHistoryOrderByWithRelationInput | TodoHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TodoHistories.
     */
    cursor?: TodoHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TodoHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TodoHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TodoHistories.
     */
    distinct?: TodoHistoryScalarFieldEnum | TodoHistoryScalarFieldEnum[]
  }

  /**
   * TodoHistory findFirstOrThrow
   */
  export type TodoHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoHistory
     */
    select?: TodoHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TodoHistory to fetch.
     */
    where?: TodoHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TodoHistories to fetch.
     */
    orderBy?: TodoHistoryOrderByWithRelationInput | TodoHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TodoHistories.
     */
    cursor?: TodoHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TodoHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TodoHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TodoHistories.
     */
    distinct?: TodoHistoryScalarFieldEnum | TodoHistoryScalarFieldEnum[]
  }

  /**
   * TodoHistory findMany
   */
  export type TodoHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoHistory
     */
    select?: TodoHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TodoHistories to fetch.
     */
    where?: TodoHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TodoHistories to fetch.
     */
    orderBy?: TodoHistoryOrderByWithRelationInput | TodoHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TodoHistories.
     */
    cursor?: TodoHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TodoHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TodoHistories.
     */
    skip?: number
    distinct?: TodoHistoryScalarFieldEnum | TodoHistoryScalarFieldEnum[]
  }

  /**
   * TodoHistory create
   */
  export type TodoHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoHistory
     */
    select?: TodoHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TodoHistory.
     */
    data: XOR<TodoHistoryCreateInput, TodoHistoryUncheckedCreateInput>
  }

  /**
   * TodoHistory createMany
   */
  export type TodoHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TodoHistories.
     */
    data: TodoHistoryCreateManyInput | TodoHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TodoHistory createManyAndReturn
   */
  export type TodoHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoHistory
     */
    select?: TodoHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TodoHistories.
     */
    data: TodoHistoryCreateManyInput | TodoHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TodoHistory update
   */
  export type TodoHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoHistory
     */
    select?: TodoHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TodoHistory.
     */
    data: XOR<TodoHistoryUpdateInput, TodoHistoryUncheckedUpdateInput>
    /**
     * Choose, which TodoHistory to update.
     */
    where: TodoHistoryWhereUniqueInput
  }

  /**
   * TodoHistory updateMany
   */
  export type TodoHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TodoHistories.
     */
    data: XOR<TodoHistoryUpdateManyMutationInput, TodoHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TodoHistories to update
     */
    where?: TodoHistoryWhereInput
  }

  /**
   * TodoHistory upsert
   */
  export type TodoHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoHistory
     */
    select?: TodoHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TodoHistory to update in case it exists.
     */
    where: TodoHistoryWhereUniqueInput
    /**
     * In case the TodoHistory found by the `where` argument doesn't exist, create a new TodoHistory with this data.
     */
    create: XOR<TodoHistoryCreateInput, TodoHistoryUncheckedCreateInput>
    /**
     * In case the TodoHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TodoHistoryUpdateInput, TodoHistoryUncheckedUpdateInput>
  }

  /**
   * TodoHistory delete
   */
  export type TodoHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoHistory
     */
    select?: TodoHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoHistoryInclude<ExtArgs> | null
    /**
     * Filter which TodoHistory to delete.
     */
    where: TodoHistoryWhereUniqueInput
  }

  /**
   * TodoHistory deleteMany
   */
  export type TodoHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TodoHistories to delete
     */
    where?: TodoHistoryWhereInput
  }

  /**
   * TodoHistory without action
   */
  export type TodoHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoHistory
     */
    select?: TodoHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    userId: string
    name: string
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    todos?: boolean | Tag$todosArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
  }

  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    todos?: boolean | Tag$todosArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      todos: Prisma.$TodoTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    todos<T extends Tag$todosArgs<ExtArgs> = {}>(args?: Subset<T, Tag$todosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodoTagPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */ 
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly userId: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
  }

  /**
   * Tag.todos
   */
  export type Tag$todosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoTag
     */
    select?: TodoTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoTagInclude<ExtArgs> | null
    where?: TodoTagWhereInput
    orderBy?: TodoTagOrderByWithRelationInput | TodoTagOrderByWithRelationInput[]
    cursor?: TodoTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TodoTagScalarFieldEnum | TodoTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model TodoTag
   */

  export type AggregateTodoTag = {
    _count: TodoTagCountAggregateOutputType | null
    _min: TodoTagMinAggregateOutputType | null
    _max: TodoTagMaxAggregateOutputType | null
  }

  export type TodoTagMinAggregateOutputType = {
    todoId: string | null
    tagId: string | null
  }

  export type TodoTagMaxAggregateOutputType = {
    todoId: string | null
    tagId: string | null
  }

  export type TodoTagCountAggregateOutputType = {
    todoId: number
    tagId: number
    _all: number
  }


  export type TodoTagMinAggregateInputType = {
    todoId?: true
    tagId?: true
  }

  export type TodoTagMaxAggregateInputType = {
    todoId?: true
    tagId?: true
  }

  export type TodoTagCountAggregateInputType = {
    todoId?: true
    tagId?: true
    _all?: true
  }

  export type TodoTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TodoTag to aggregate.
     */
    where?: TodoTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TodoTags to fetch.
     */
    orderBy?: TodoTagOrderByWithRelationInput | TodoTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TodoTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TodoTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TodoTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TodoTags
    **/
    _count?: true | TodoTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TodoTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TodoTagMaxAggregateInputType
  }

  export type GetTodoTagAggregateType<T extends TodoTagAggregateArgs> = {
        [P in keyof T & keyof AggregateTodoTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTodoTag[P]>
      : GetScalarType<T[P], AggregateTodoTag[P]>
  }




  export type TodoTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodoTagWhereInput
    orderBy?: TodoTagOrderByWithAggregationInput | TodoTagOrderByWithAggregationInput[]
    by: TodoTagScalarFieldEnum[] | TodoTagScalarFieldEnum
    having?: TodoTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TodoTagCountAggregateInputType | true
    _min?: TodoTagMinAggregateInputType
    _max?: TodoTagMaxAggregateInputType
  }

  export type TodoTagGroupByOutputType = {
    todoId: string
    tagId: string
    _count: TodoTagCountAggregateOutputType | null
    _min: TodoTagMinAggregateOutputType | null
    _max: TodoTagMaxAggregateOutputType | null
  }

  type GetTodoTagGroupByPayload<T extends TodoTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TodoTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TodoTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TodoTagGroupByOutputType[P]>
            : GetScalarType<T[P], TodoTagGroupByOutputType[P]>
        }
      >
    >


  export type TodoTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    todoId?: boolean
    tagId?: boolean
    todo?: boolean | TodoDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["todoTag"]>

  export type TodoTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    todoId?: boolean
    tagId?: boolean
    todo?: boolean | TodoDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["todoTag"]>

  export type TodoTagSelectScalar = {
    todoId?: boolean
    tagId?: boolean
  }

  export type TodoTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    todo?: boolean | TodoDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type TodoTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    todo?: boolean | TodoDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $TodoTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TodoTag"
    objects: {
      todo: Prisma.$TodoPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      todoId: string
      tagId: string
    }, ExtArgs["result"]["todoTag"]>
    composites: {}
  }

  type TodoTagGetPayload<S extends boolean | null | undefined | TodoTagDefaultArgs> = $Result.GetResult<Prisma.$TodoTagPayload, S>

  type TodoTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TodoTagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TodoTagCountAggregateInputType | true
    }

  export interface TodoTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TodoTag'], meta: { name: 'TodoTag' } }
    /**
     * Find zero or one TodoTag that matches the filter.
     * @param {TodoTagFindUniqueArgs} args - Arguments to find a TodoTag
     * @example
     * // Get one TodoTag
     * const todoTag = await prisma.todoTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TodoTagFindUniqueArgs>(args: SelectSubset<T, TodoTagFindUniqueArgs<ExtArgs>>): Prisma__TodoTagClient<$Result.GetResult<Prisma.$TodoTagPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TodoTag that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TodoTagFindUniqueOrThrowArgs} args - Arguments to find a TodoTag
     * @example
     * // Get one TodoTag
     * const todoTag = await prisma.todoTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TodoTagFindUniqueOrThrowArgs>(args: SelectSubset<T, TodoTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TodoTagClient<$Result.GetResult<Prisma.$TodoTagPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TodoTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoTagFindFirstArgs} args - Arguments to find a TodoTag
     * @example
     * // Get one TodoTag
     * const todoTag = await prisma.todoTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TodoTagFindFirstArgs>(args?: SelectSubset<T, TodoTagFindFirstArgs<ExtArgs>>): Prisma__TodoTagClient<$Result.GetResult<Prisma.$TodoTagPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TodoTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoTagFindFirstOrThrowArgs} args - Arguments to find a TodoTag
     * @example
     * // Get one TodoTag
     * const todoTag = await prisma.todoTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TodoTagFindFirstOrThrowArgs>(args?: SelectSubset<T, TodoTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TodoTagClient<$Result.GetResult<Prisma.$TodoTagPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TodoTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TodoTags
     * const todoTags = await prisma.todoTag.findMany()
     * 
     * // Get first 10 TodoTags
     * const todoTags = await prisma.todoTag.findMany({ take: 10 })
     * 
     * // Only select the `todoId`
     * const todoTagWithTodoIdOnly = await prisma.todoTag.findMany({ select: { todoId: true } })
     * 
     */
    findMany<T extends TodoTagFindManyArgs>(args?: SelectSubset<T, TodoTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodoTagPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TodoTag.
     * @param {TodoTagCreateArgs} args - Arguments to create a TodoTag.
     * @example
     * // Create one TodoTag
     * const TodoTag = await prisma.todoTag.create({
     *   data: {
     *     // ... data to create a TodoTag
     *   }
     * })
     * 
     */
    create<T extends TodoTagCreateArgs>(args: SelectSubset<T, TodoTagCreateArgs<ExtArgs>>): Prisma__TodoTagClient<$Result.GetResult<Prisma.$TodoTagPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TodoTags.
     * @param {TodoTagCreateManyArgs} args - Arguments to create many TodoTags.
     * @example
     * // Create many TodoTags
     * const todoTag = await prisma.todoTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TodoTagCreateManyArgs>(args?: SelectSubset<T, TodoTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TodoTags and returns the data saved in the database.
     * @param {TodoTagCreateManyAndReturnArgs} args - Arguments to create many TodoTags.
     * @example
     * // Create many TodoTags
     * const todoTag = await prisma.todoTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TodoTags and only return the `todoId`
     * const todoTagWithTodoIdOnly = await prisma.todoTag.createManyAndReturn({ 
     *   select: { todoId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TodoTagCreateManyAndReturnArgs>(args?: SelectSubset<T, TodoTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodoTagPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TodoTag.
     * @param {TodoTagDeleteArgs} args - Arguments to delete one TodoTag.
     * @example
     * // Delete one TodoTag
     * const TodoTag = await prisma.todoTag.delete({
     *   where: {
     *     // ... filter to delete one TodoTag
     *   }
     * })
     * 
     */
    delete<T extends TodoTagDeleteArgs>(args: SelectSubset<T, TodoTagDeleteArgs<ExtArgs>>): Prisma__TodoTagClient<$Result.GetResult<Prisma.$TodoTagPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TodoTag.
     * @param {TodoTagUpdateArgs} args - Arguments to update one TodoTag.
     * @example
     * // Update one TodoTag
     * const todoTag = await prisma.todoTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TodoTagUpdateArgs>(args: SelectSubset<T, TodoTagUpdateArgs<ExtArgs>>): Prisma__TodoTagClient<$Result.GetResult<Prisma.$TodoTagPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TodoTags.
     * @param {TodoTagDeleteManyArgs} args - Arguments to filter TodoTags to delete.
     * @example
     * // Delete a few TodoTags
     * const { count } = await prisma.todoTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TodoTagDeleteManyArgs>(args?: SelectSubset<T, TodoTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TodoTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TodoTags
     * const todoTag = await prisma.todoTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TodoTagUpdateManyArgs>(args: SelectSubset<T, TodoTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TodoTag.
     * @param {TodoTagUpsertArgs} args - Arguments to update or create a TodoTag.
     * @example
     * // Update or create a TodoTag
     * const todoTag = await prisma.todoTag.upsert({
     *   create: {
     *     // ... data to create a TodoTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TodoTag we want to update
     *   }
     * })
     */
    upsert<T extends TodoTagUpsertArgs>(args: SelectSubset<T, TodoTagUpsertArgs<ExtArgs>>): Prisma__TodoTagClient<$Result.GetResult<Prisma.$TodoTagPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TodoTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoTagCountArgs} args - Arguments to filter TodoTags to count.
     * @example
     * // Count the number of TodoTags
     * const count = await prisma.todoTag.count({
     *   where: {
     *     // ... the filter for the TodoTags we want to count
     *   }
     * })
    **/
    count<T extends TodoTagCountArgs>(
      args?: Subset<T, TodoTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TodoTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TodoTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TodoTagAggregateArgs>(args: Subset<T, TodoTagAggregateArgs>): Prisma.PrismaPromise<GetTodoTagAggregateType<T>>

    /**
     * Group by TodoTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TodoTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TodoTagGroupByArgs['orderBy'] }
        : { orderBy?: TodoTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TodoTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTodoTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TodoTag model
   */
  readonly fields: TodoTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TodoTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TodoTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    todo<T extends TodoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TodoDefaultArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TodoTag model
   */ 
  interface TodoTagFieldRefs {
    readonly todoId: FieldRef<"TodoTag", 'String'>
    readonly tagId: FieldRef<"TodoTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TodoTag findUnique
   */
  export type TodoTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoTag
     */
    select?: TodoTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoTagInclude<ExtArgs> | null
    /**
     * Filter, which TodoTag to fetch.
     */
    where: TodoTagWhereUniqueInput
  }

  /**
   * TodoTag findUniqueOrThrow
   */
  export type TodoTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoTag
     */
    select?: TodoTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoTagInclude<ExtArgs> | null
    /**
     * Filter, which TodoTag to fetch.
     */
    where: TodoTagWhereUniqueInput
  }

  /**
   * TodoTag findFirst
   */
  export type TodoTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoTag
     */
    select?: TodoTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoTagInclude<ExtArgs> | null
    /**
     * Filter, which TodoTag to fetch.
     */
    where?: TodoTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TodoTags to fetch.
     */
    orderBy?: TodoTagOrderByWithRelationInput | TodoTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TodoTags.
     */
    cursor?: TodoTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TodoTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TodoTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TodoTags.
     */
    distinct?: TodoTagScalarFieldEnum | TodoTagScalarFieldEnum[]
  }

  /**
   * TodoTag findFirstOrThrow
   */
  export type TodoTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoTag
     */
    select?: TodoTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoTagInclude<ExtArgs> | null
    /**
     * Filter, which TodoTag to fetch.
     */
    where?: TodoTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TodoTags to fetch.
     */
    orderBy?: TodoTagOrderByWithRelationInput | TodoTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TodoTags.
     */
    cursor?: TodoTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TodoTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TodoTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TodoTags.
     */
    distinct?: TodoTagScalarFieldEnum | TodoTagScalarFieldEnum[]
  }

  /**
   * TodoTag findMany
   */
  export type TodoTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoTag
     */
    select?: TodoTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoTagInclude<ExtArgs> | null
    /**
     * Filter, which TodoTags to fetch.
     */
    where?: TodoTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TodoTags to fetch.
     */
    orderBy?: TodoTagOrderByWithRelationInput | TodoTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TodoTags.
     */
    cursor?: TodoTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TodoTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TodoTags.
     */
    skip?: number
    distinct?: TodoTagScalarFieldEnum | TodoTagScalarFieldEnum[]
  }

  /**
   * TodoTag create
   */
  export type TodoTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoTag
     */
    select?: TodoTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoTagInclude<ExtArgs> | null
    /**
     * The data needed to create a TodoTag.
     */
    data: XOR<TodoTagCreateInput, TodoTagUncheckedCreateInput>
  }

  /**
   * TodoTag createMany
   */
  export type TodoTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TodoTags.
     */
    data: TodoTagCreateManyInput | TodoTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TodoTag createManyAndReturn
   */
  export type TodoTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoTag
     */
    select?: TodoTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TodoTags.
     */
    data: TodoTagCreateManyInput | TodoTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TodoTag update
   */
  export type TodoTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoTag
     */
    select?: TodoTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoTagInclude<ExtArgs> | null
    /**
     * The data needed to update a TodoTag.
     */
    data: XOR<TodoTagUpdateInput, TodoTagUncheckedUpdateInput>
    /**
     * Choose, which TodoTag to update.
     */
    where: TodoTagWhereUniqueInput
  }

  /**
   * TodoTag updateMany
   */
  export type TodoTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TodoTags.
     */
    data: XOR<TodoTagUpdateManyMutationInput, TodoTagUncheckedUpdateManyInput>
    /**
     * Filter which TodoTags to update
     */
    where?: TodoTagWhereInput
  }

  /**
   * TodoTag upsert
   */
  export type TodoTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoTag
     */
    select?: TodoTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoTagInclude<ExtArgs> | null
    /**
     * The filter to search for the TodoTag to update in case it exists.
     */
    where: TodoTagWhereUniqueInput
    /**
     * In case the TodoTag found by the `where` argument doesn't exist, create a new TodoTag with this data.
     */
    create: XOR<TodoTagCreateInput, TodoTagUncheckedCreateInput>
    /**
     * In case the TodoTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TodoTagUpdateInput, TodoTagUncheckedUpdateInput>
  }

  /**
   * TodoTag delete
   */
  export type TodoTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoTag
     */
    select?: TodoTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoTagInclude<ExtArgs> | null
    /**
     * Filter which TodoTag to delete.
     */
    where: TodoTagWhereUniqueInput
  }

  /**
   * TodoTag deleteMany
   */
  export type TodoTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TodoTags to delete
     */
    where?: TodoTagWhereInput
  }

  /**
   * TodoTag without action
   */
  export type TodoTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoTag
     */
    select?: TodoTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoTagInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TodoScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    description: 'description',
    priority: 'priority',
    status: 'status',
    dueDate: 'dueDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    position: 'position',
    parentId: 'parentId'
  };

  export type TodoScalarFieldEnum = (typeof TodoScalarFieldEnum)[keyof typeof TodoScalarFieldEnum]


  export const TodoHistoryScalarFieldEnum: {
    id: 'id',
    todoId: 'todoId',
    snapshot: 'snapshot',
    createdAt: 'createdAt'
  };

  export type TodoHistoryScalarFieldEnum = (typeof TodoHistoryScalarFieldEnum)[keyof typeof TodoHistoryScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const TodoTagScalarFieldEnum: {
    todoId: 'todoId',
    tagId: 'tagId'
  };

  export type TodoTagScalarFieldEnum = (typeof TodoTagScalarFieldEnum)[keyof typeof TodoTagScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Priority'
   */
  export type EnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority'>
    


  /**
   * Reference to a field of type 'Priority[]'
   */
  export type ListEnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority[]'>
    


  /**
   * Reference to a field of type 'TodoStatus'
   */
  export type EnumTodoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TodoStatus'>
    


  /**
   * Reference to a field of type 'TodoStatus[]'
   */
  export type ListEnumTodoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TodoStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TodoWhereInput = {
    AND?: TodoWhereInput | TodoWhereInput[]
    OR?: TodoWhereInput[]
    NOT?: TodoWhereInput | TodoWhereInput[]
    id?: StringFilter<"Todo"> | string
    userId?: StringFilter<"Todo"> | string
    title?: StringFilter<"Todo"> | string
    description?: StringFilter<"Todo"> | string
    priority?: EnumPriorityFilter<"Todo"> | $Enums.Priority
    status?: EnumTodoStatusFilter<"Todo"> | $Enums.TodoStatus
    dueDate?: DateTimeNullableFilter<"Todo"> | Date | string | null
    createdAt?: DateTimeFilter<"Todo"> | Date | string
    updatedAt?: DateTimeFilter<"Todo"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Todo"> | Date | string | null
    position?: IntFilter<"Todo"> | number
    parentId?: StringNullableFilter<"Todo"> | string | null
    parent?: XOR<TodoNullableRelationFilter, TodoWhereInput> | null
    subtasks?: TodoListRelationFilter
    tags?: TodoTagListRelationFilter
    history?: TodoHistoryListRelationFilter
  }

  export type TodoOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    position?: SortOrder
    parentId?: SortOrderInput | SortOrder
    parent?: TodoOrderByWithRelationInput
    subtasks?: TodoOrderByRelationAggregateInput
    tags?: TodoTagOrderByRelationAggregateInput
    history?: TodoHistoryOrderByRelationAggregateInput
  }

  export type TodoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TodoWhereInput | TodoWhereInput[]
    OR?: TodoWhereInput[]
    NOT?: TodoWhereInput | TodoWhereInput[]
    userId?: StringFilter<"Todo"> | string
    title?: StringFilter<"Todo"> | string
    description?: StringFilter<"Todo"> | string
    priority?: EnumPriorityFilter<"Todo"> | $Enums.Priority
    status?: EnumTodoStatusFilter<"Todo"> | $Enums.TodoStatus
    dueDate?: DateTimeNullableFilter<"Todo"> | Date | string | null
    createdAt?: DateTimeFilter<"Todo"> | Date | string
    updatedAt?: DateTimeFilter<"Todo"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Todo"> | Date | string | null
    position?: IntFilter<"Todo"> | number
    parentId?: StringNullableFilter<"Todo"> | string | null
    parent?: XOR<TodoNullableRelationFilter, TodoWhereInput> | null
    subtasks?: TodoListRelationFilter
    tags?: TodoTagListRelationFilter
    history?: TodoHistoryListRelationFilter
  }, "id">

  export type TodoOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    position?: SortOrder
    parentId?: SortOrderInput | SortOrder
    _count?: TodoCountOrderByAggregateInput
    _avg?: TodoAvgOrderByAggregateInput
    _max?: TodoMaxOrderByAggregateInput
    _min?: TodoMinOrderByAggregateInput
    _sum?: TodoSumOrderByAggregateInput
  }

  export type TodoScalarWhereWithAggregatesInput = {
    AND?: TodoScalarWhereWithAggregatesInput | TodoScalarWhereWithAggregatesInput[]
    OR?: TodoScalarWhereWithAggregatesInput[]
    NOT?: TodoScalarWhereWithAggregatesInput | TodoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Todo"> | string
    userId?: StringWithAggregatesFilter<"Todo"> | string
    title?: StringWithAggregatesFilter<"Todo"> | string
    description?: StringWithAggregatesFilter<"Todo"> | string
    priority?: EnumPriorityWithAggregatesFilter<"Todo"> | $Enums.Priority
    status?: EnumTodoStatusWithAggregatesFilter<"Todo"> | $Enums.TodoStatus
    dueDate?: DateTimeNullableWithAggregatesFilter<"Todo"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Todo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Todo"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Todo"> | Date | string | null
    position?: IntWithAggregatesFilter<"Todo"> | number
    parentId?: StringNullableWithAggregatesFilter<"Todo"> | string | null
  }

  export type TodoHistoryWhereInput = {
    AND?: TodoHistoryWhereInput | TodoHistoryWhereInput[]
    OR?: TodoHistoryWhereInput[]
    NOT?: TodoHistoryWhereInput | TodoHistoryWhereInput[]
    id?: StringFilter<"TodoHistory"> | string
    todoId?: StringFilter<"TodoHistory"> | string
    snapshot?: JsonFilter<"TodoHistory">
    createdAt?: DateTimeFilter<"TodoHistory"> | Date | string
    todo?: XOR<TodoRelationFilter, TodoWhereInput>
  }

  export type TodoHistoryOrderByWithRelationInput = {
    id?: SortOrder
    todoId?: SortOrder
    snapshot?: SortOrder
    createdAt?: SortOrder
    todo?: TodoOrderByWithRelationInput
  }

  export type TodoHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TodoHistoryWhereInput | TodoHistoryWhereInput[]
    OR?: TodoHistoryWhereInput[]
    NOT?: TodoHistoryWhereInput | TodoHistoryWhereInput[]
    todoId?: StringFilter<"TodoHistory"> | string
    snapshot?: JsonFilter<"TodoHistory">
    createdAt?: DateTimeFilter<"TodoHistory"> | Date | string
    todo?: XOR<TodoRelationFilter, TodoWhereInput>
  }, "id">

  export type TodoHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    todoId?: SortOrder
    snapshot?: SortOrder
    createdAt?: SortOrder
    _count?: TodoHistoryCountOrderByAggregateInput
    _max?: TodoHistoryMaxOrderByAggregateInput
    _min?: TodoHistoryMinOrderByAggregateInput
  }

  export type TodoHistoryScalarWhereWithAggregatesInput = {
    AND?: TodoHistoryScalarWhereWithAggregatesInput | TodoHistoryScalarWhereWithAggregatesInput[]
    OR?: TodoHistoryScalarWhereWithAggregatesInput[]
    NOT?: TodoHistoryScalarWhereWithAggregatesInput | TodoHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TodoHistory"> | string
    todoId?: StringWithAggregatesFilter<"TodoHistory"> | string
    snapshot?: JsonWithAggregatesFilter<"TodoHistory">
    createdAt?: DateTimeWithAggregatesFilter<"TodoHistory"> | Date | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    userId?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    todos?: TodoTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    todos?: TodoTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_name?: TagUserIdNameCompoundUniqueInput
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    userId?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    todos?: TodoTagListRelationFilter
  }, "id" | "userId_name">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    userId?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type TodoTagWhereInput = {
    AND?: TodoTagWhereInput | TodoTagWhereInput[]
    OR?: TodoTagWhereInput[]
    NOT?: TodoTagWhereInput | TodoTagWhereInput[]
    todoId?: StringFilter<"TodoTag"> | string
    tagId?: StringFilter<"TodoTag"> | string
    todo?: XOR<TodoRelationFilter, TodoWhereInput>
    tag?: XOR<TagRelationFilter, TagWhereInput>
  }

  export type TodoTagOrderByWithRelationInput = {
    todoId?: SortOrder
    tagId?: SortOrder
    todo?: TodoOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type TodoTagWhereUniqueInput = Prisma.AtLeast<{
    todoId_tagId?: TodoTagTodoIdTagIdCompoundUniqueInput
    AND?: TodoTagWhereInput | TodoTagWhereInput[]
    OR?: TodoTagWhereInput[]
    NOT?: TodoTagWhereInput | TodoTagWhereInput[]
    todoId?: StringFilter<"TodoTag"> | string
    tagId?: StringFilter<"TodoTag"> | string
    todo?: XOR<TodoRelationFilter, TodoWhereInput>
    tag?: XOR<TagRelationFilter, TagWhereInput>
  }, "todoId_tagId">

  export type TodoTagOrderByWithAggregationInput = {
    todoId?: SortOrder
    tagId?: SortOrder
    _count?: TodoTagCountOrderByAggregateInput
    _max?: TodoTagMaxOrderByAggregateInput
    _min?: TodoTagMinOrderByAggregateInput
  }

  export type TodoTagScalarWhereWithAggregatesInput = {
    AND?: TodoTagScalarWhereWithAggregatesInput | TodoTagScalarWhereWithAggregatesInput[]
    OR?: TodoTagScalarWhereWithAggregatesInput[]
    NOT?: TodoTagScalarWhereWithAggregatesInput | TodoTagScalarWhereWithAggregatesInput[]
    todoId?: StringWithAggregatesFilter<"TodoTag"> | string
    tagId?: StringWithAggregatesFilter<"TodoTag"> | string
  }

  export type TodoCreateInput = {
    id?: string
    userId: string
    title: string
    description?: string
    priority?: $Enums.Priority
    status?: $Enums.TodoStatus
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    position?: number
    parent?: TodoCreateNestedOneWithoutSubtasksInput
    subtasks?: TodoCreateNestedManyWithoutParentInput
    tags?: TodoTagCreateNestedManyWithoutTodoInput
    history?: TodoHistoryCreateNestedManyWithoutTodoInput
  }

  export type TodoUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    description?: string
    priority?: $Enums.Priority
    status?: $Enums.TodoStatus
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    position?: number
    parentId?: string | null
    subtasks?: TodoUncheckedCreateNestedManyWithoutParentInput
    tags?: TodoTagUncheckedCreateNestedManyWithoutTodoInput
    history?: TodoHistoryUncheckedCreateNestedManyWithoutTodoInput
  }

  export type TodoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTodoStatusFieldUpdateOperationsInput | $Enums.TodoStatus
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: IntFieldUpdateOperationsInput | number
    parent?: TodoUpdateOneWithoutSubtasksNestedInput
    subtasks?: TodoUpdateManyWithoutParentNestedInput
    tags?: TodoTagUpdateManyWithoutTodoNestedInput
    history?: TodoHistoryUpdateManyWithoutTodoNestedInput
  }

  export type TodoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTodoStatusFieldUpdateOperationsInput | $Enums.TodoStatus
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    subtasks?: TodoUncheckedUpdateManyWithoutParentNestedInput
    tags?: TodoTagUncheckedUpdateManyWithoutTodoNestedInput
    history?: TodoHistoryUncheckedUpdateManyWithoutTodoNestedInput
  }

  export type TodoCreateManyInput = {
    id?: string
    userId: string
    title: string
    description?: string
    priority?: $Enums.Priority
    status?: $Enums.TodoStatus
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    position?: number
    parentId?: string | null
  }

  export type TodoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTodoStatusFieldUpdateOperationsInput | $Enums.TodoStatus
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: IntFieldUpdateOperationsInput | number
  }

  export type TodoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTodoStatusFieldUpdateOperationsInput | $Enums.TodoStatus
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TodoHistoryCreateInput = {
    id?: string
    snapshot: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    todo: TodoCreateNestedOneWithoutHistoryInput
  }

  export type TodoHistoryUncheckedCreateInput = {
    id?: string
    todoId: string
    snapshot: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TodoHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshot?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todo?: TodoUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type TodoHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    todoId?: StringFieldUpdateOperationsInput | string
    snapshot?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoHistoryCreateManyInput = {
    id?: string
    todoId: string
    snapshot: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TodoHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshot?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    todoId?: StringFieldUpdateOperationsInput | string
    snapshot?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagCreateInput = {
    id?: string
    userId: string
    name: string
    todos?: TodoTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    todos?: TodoTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    todos?: TodoTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    todos?: TodoTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    userId: string
    name: string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TodoTagCreateInput = {
    todo: TodoCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutTodosInput
  }

  export type TodoTagUncheckedCreateInput = {
    todoId: string
    tagId: string
  }

  export type TodoTagUpdateInput = {
    todo?: TodoUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutTodosNestedInput
  }

  export type TodoTagUncheckedUpdateInput = {
    todoId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type TodoTagCreateManyInput = {
    todoId: string
    tagId: string
  }

  export type TodoTagUpdateManyMutationInput = {

  }

  export type TodoTagUncheckedUpdateManyInput = {
    todoId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type EnumTodoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TodoStatus | EnumTodoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TodoStatus[] | ListEnumTodoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TodoStatus[] | ListEnumTodoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTodoStatusFilter<$PrismaModel> | $Enums.TodoStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TodoNullableRelationFilter = {
    is?: TodoWhereInput | null
    isNot?: TodoWhereInput | null
  }

  export type TodoListRelationFilter = {
    every?: TodoWhereInput
    some?: TodoWhereInput
    none?: TodoWhereInput
  }

  export type TodoTagListRelationFilter = {
    every?: TodoTagWhereInput
    some?: TodoTagWhereInput
    none?: TodoTagWhereInput
  }

  export type TodoHistoryListRelationFilter = {
    every?: TodoHistoryWhereInput
    some?: TodoHistoryWhereInput
    none?: TodoHistoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TodoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TodoTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TodoHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TodoCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    position?: SortOrder
    parentId?: SortOrder
  }

  export type TodoAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type TodoMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    position?: SortOrder
    parentId?: SortOrder
  }

  export type TodoMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    position?: SortOrder
    parentId?: SortOrder
  }

  export type TodoSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type EnumTodoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TodoStatus | EnumTodoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TodoStatus[] | ListEnumTodoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TodoStatus[] | ListEnumTodoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTodoStatusWithAggregatesFilter<$PrismaModel> | $Enums.TodoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTodoStatusFilter<$PrismaModel>
    _max?: NestedEnumTodoStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TodoRelationFilter = {
    is?: TodoWhereInput
    isNot?: TodoWhereInput
  }

  export type TodoHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    todoId?: SortOrder
    snapshot?: SortOrder
    createdAt?: SortOrder
  }

  export type TodoHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    todoId?: SortOrder
    createdAt?: SortOrder
  }

  export type TodoHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    todoId?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type TagUserIdNameCompoundUniqueInput = {
    userId: string
    name: string
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
  }

  export type TagRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type TodoTagTodoIdTagIdCompoundUniqueInput = {
    todoId: string
    tagId: string
  }

  export type TodoTagCountOrderByAggregateInput = {
    todoId?: SortOrder
    tagId?: SortOrder
  }

  export type TodoTagMaxOrderByAggregateInput = {
    todoId?: SortOrder
    tagId?: SortOrder
  }

  export type TodoTagMinOrderByAggregateInput = {
    todoId?: SortOrder
    tagId?: SortOrder
  }

  export type TodoCreateNestedOneWithoutSubtasksInput = {
    create?: XOR<TodoCreateWithoutSubtasksInput, TodoUncheckedCreateWithoutSubtasksInput>
    connectOrCreate?: TodoCreateOrConnectWithoutSubtasksInput
    connect?: TodoWhereUniqueInput
  }

  export type TodoCreateNestedManyWithoutParentInput = {
    create?: XOR<TodoCreateWithoutParentInput, TodoUncheckedCreateWithoutParentInput> | TodoCreateWithoutParentInput[] | TodoUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutParentInput | TodoCreateOrConnectWithoutParentInput[]
    createMany?: TodoCreateManyParentInputEnvelope
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
  }

  export type TodoTagCreateNestedManyWithoutTodoInput = {
    create?: XOR<TodoTagCreateWithoutTodoInput, TodoTagUncheckedCreateWithoutTodoInput> | TodoTagCreateWithoutTodoInput[] | TodoTagUncheckedCreateWithoutTodoInput[]
    connectOrCreate?: TodoTagCreateOrConnectWithoutTodoInput | TodoTagCreateOrConnectWithoutTodoInput[]
    createMany?: TodoTagCreateManyTodoInputEnvelope
    connect?: TodoTagWhereUniqueInput | TodoTagWhereUniqueInput[]
  }

  export type TodoHistoryCreateNestedManyWithoutTodoInput = {
    create?: XOR<TodoHistoryCreateWithoutTodoInput, TodoHistoryUncheckedCreateWithoutTodoInput> | TodoHistoryCreateWithoutTodoInput[] | TodoHistoryUncheckedCreateWithoutTodoInput[]
    connectOrCreate?: TodoHistoryCreateOrConnectWithoutTodoInput | TodoHistoryCreateOrConnectWithoutTodoInput[]
    createMany?: TodoHistoryCreateManyTodoInputEnvelope
    connect?: TodoHistoryWhereUniqueInput | TodoHistoryWhereUniqueInput[]
  }

  export type TodoUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<TodoCreateWithoutParentInput, TodoUncheckedCreateWithoutParentInput> | TodoCreateWithoutParentInput[] | TodoUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutParentInput | TodoCreateOrConnectWithoutParentInput[]
    createMany?: TodoCreateManyParentInputEnvelope
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
  }

  export type TodoTagUncheckedCreateNestedManyWithoutTodoInput = {
    create?: XOR<TodoTagCreateWithoutTodoInput, TodoTagUncheckedCreateWithoutTodoInput> | TodoTagCreateWithoutTodoInput[] | TodoTagUncheckedCreateWithoutTodoInput[]
    connectOrCreate?: TodoTagCreateOrConnectWithoutTodoInput | TodoTagCreateOrConnectWithoutTodoInput[]
    createMany?: TodoTagCreateManyTodoInputEnvelope
    connect?: TodoTagWhereUniqueInput | TodoTagWhereUniqueInput[]
  }

  export type TodoHistoryUncheckedCreateNestedManyWithoutTodoInput = {
    create?: XOR<TodoHistoryCreateWithoutTodoInput, TodoHistoryUncheckedCreateWithoutTodoInput> | TodoHistoryCreateWithoutTodoInput[] | TodoHistoryUncheckedCreateWithoutTodoInput[]
    connectOrCreate?: TodoHistoryCreateOrConnectWithoutTodoInput | TodoHistoryCreateOrConnectWithoutTodoInput[]
    createMany?: TodoHistoryCreateManyTodoInputEnvelope
    connect?: TodoHistoryWhereUniqueInput | TodoHistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumPriorityFieldUpdateOperationsInput = {
    set?: $Enums.Priority
  }

  export type EnumTodoStatusFieldUpdateOperationsInput = {
    set?: $Enums.TodoStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TodoUpdateOneWithoutSubtasksNestedInput = {
    create?: XOR<TodoCreateWithoutSubtasksInput, TodoUncheckedCreateWithoutSubtasksInput>
    connectOrCreate?: TodoCreateOrConnectWithoutSubtasksInput
    upsert?: TodoUpsertWithoutSubtasksInput
    disconnect?: TodoWhereInput | boolean
    delete?: TodoWhereInput | boolean
    connect?: TodoWhereUniqueInput
    update?: XOR<XOR<TodoUpdateToOneWithWhereWithoutSubtasksInput, TodoUpdateWithoutSubtasksInput>, TodoUncheckedUpdateWithoutSubtasksInput>
  }

  export type TodoUpdateManyWithoutParentNestedInput = {
    create?: XOR<TodoCreateWithoutParentInput, TodoUncheckedCreateWithoutParentInput> | TodoCreateWithoutParentInput[] | TodoUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutParentInput | TodoCreateOrConnectWithoutParentInput[]
    upsert?: TodoUpsertWithWhereUniqueWithoutParentInput | TodoUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: TodoCreateManyParentInputEnvelope
    set?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    disconnect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    delete?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    update?: TodoUpdateWithWhereUniqueWithoutParentInput | TodoUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: TodoUpdateManyWithWhereWithoutParentInput | TodoUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: TodoScalarWhereInput | TodoScalarWhereInput[]
  }

  export type TodoTagUpdateManyWithoutTodoNestedInput = {
    create?: XOR<TodoTagCreateWithoutTodoInput, TodoTagUncheckedCreateWithoutTodoInput> | TodoTagCreateWithoutTodoInput[] | TodoTagUncheckedCreateWithoutTodoInput[]
    connectOrCreate?: TodoTagCreateOrConnectWithoutTodoInput | TodoTagCreateOrConnectWithoutTodoInput[]
    upsert?: TodoTagUpsertWithWhereUniqueWithoutTodoInput | TodoTagUpsertWithWhereUniqueWithoutTodoInput[]
    createMany?: TodoTagCreateManyTodoInputEnvelope
    set?: TodoTagWhereUniqueInput | TodoTagWhereUniqueInput[]
    disconnect?: TodoTagWhereUniqueInput | TodoTagWhereUniqueInput[]
    delete?: TodoTagWhereUniqueInput | TodoTagWhereUniqueInput[]
    connect?: TodoTagWhereUniqueInput | TodoTagWhereUniqueInput[]
    update?: TodoTagUpdateWithWhereUniqueWithoutTodoInput | TodoTagUpdateWithWhereUniqueWithoutTodoInput[]
    updateMany?: TodoTagUpdateManyWithWhereWithoutTodoInput | TodoTagUpdateManyWithWhereWithoutTodoInput[]
    deleteMany?: TodoTagScalarWhereInput | TodoTagScalarWhereInput[]
  }

  export type TodoHistoryUpdateManyWithoutTodoNestedInput = {
    create?: XOR<TodoHistoryCreateWithoutTodoInput, TodoHistoryUncheckedCreateWithoutTodoInput> | TodoHistoryCreateWithoutTodoInput[] | TodoHistoryUncheckedCreateWithoutTodoInput[]
    connectOrCreate?: TodoHistoryCreateOrConnectWithoutTodoInput | TodoHistoryCreateOrConnectWithoutTodoInput[]
    upsert?: TodoHistoryUpsertWithWhereUniqueWithoutTodoInput | TodoHistoryUpsertWithWhereUniqueWithoutTodoInput[]
    createMany?: TodoHistoryCreateManyTodoInputEnvelope
    set?: TodoHistoryWhereUniqueInput | TodoHistoryWhereUniqueInput[]
    disconnect?: TodoHistoryWhereUniqueInput | TodoHistoryWhereUniqueInput[]
    delete?: TodoHistoryWhereUniqueInput | TodoHistoryWhereUniqueInput[]
    connect?: TodoHistoryWhereUniqueInput | TodoHistoryWhereUniqueInput[]
    update?: TodoHistoryUpdateWithWhereUniqueWithoutTodoInput | TodoHistoryUpdateWithWhereUniqueWithoutTodoInput[]
    updateMany?: TodoHistoryUpdateManyWithWhereWithoutTodoInput | TodoHistoryUpdateManyWithWhereWithoutTodoInput[]
    deleteMany?: TodoHistoryScalarWhereInput | TodoHistoryScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TodoUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<TodoCreateWithoutParentInput, TodoUncheckedCreateWithoutParentInput> | TodoCreateWithoutParentInput[] | TodoUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutParentInput | TodoCreateOrConnectWithoutParentInput[]
    upsert?: TodoUpsertWithWhereUniqueWithoutParentInput | TodoUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: TodoCreateManyParentInputEnvelope
    set?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    disconnect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    delete?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    update?: TodoUpdateWithWhereUniqueWithoutParentInput | TodoUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: TodoUpdateManyWithWhereWithoutParentInput | TodoUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: TodoScalarWhereInput | TodoScalarWhereInput[]
  }

  export type TodoTagUncheckedUpdateManyWithoutTodoNestedInput = {
    create?: XOR<TodoTagCreateWithoutTodoInput, TodoTagUncheckedCreateWithoutTodoInput> | TodoTagCreateWithoutTodoInput[] | TodoTagUncheckedCreateWithoutTodoInput[]
    connectOrCreate?: TodoTagCreateOrConnectWithoutTodoInput | TodoTagCreateOrConnectWithoutTodoInput[]
    upsert?: TodoTagUpsertWithWhereUniqueWithoutTodoInput | TodoTagUpsertWithWhereUniqueWithoutTodoInput[]
    createMany?: TodoTagCreateManyTodoInputEnvelope
    set?: TodoTagWhereUniqueInput | TodoTagWhereUniqueInput[]
    disconnect?: TodoTagWhereUniqueInput | TodoTagWhereUniqueInput[]
    delete?: TodoTagWhereUniqueInput | TodoTagWhereUniqueInput[]
    connect?: TodoTagWhereUniqueInput | TodoTagWhereUniqueInput[]
    update?: TodoTagUpdateWithWhereUniqueWithoutTodoInput | TodoTagUpdateWithWhereUniqueWithoutTodoInput[]
    updateMany?: TodoTagUpdateManyWithWhereWithoutTodoInput | TodoTagUpdateManyWithWhereWithoutTodoInput[]
    deleteMany?: TodoTagScalarWhereInput | TodoTagScalarWhereInput[]
  }

  export type TodoHistoryUncheckedUpdateManyWithoutTodoNestedInput = {
    create?: XOR<TodoHistoryCreateWithoutTodoInput, TodoHistoryUncheckedCreateWithoutTodoInput> | TodoHistoryCreateWithoutTodoInput[] | TodoHistoryUncheckedCreateWithoutTodoInput[]
    connectOrCreate?: TodoHistoryCreateOrConnectWithoutTodoInput | TodoHistoryCreateOrConnectWithoutTodoInput[]
    upsert?: TodoHistoryUpsertWithWhereUniqueWithoutTodoInput | TodoHistoryUpsertWithWhereUniqueWithoutTodoInput[]
    createMany?: TodoHistoryCreateManyTodoInputEnvelope
    set?: TodoHistoryWhereUniqueInput | TodoHistoryWhereUniqueInput[]
    disconnect?: TodoHistoryWhereUniqueInput | TodoHistoryWhereUniqueInput[]
    delete?: TodoHistoryWhereUniqueInput | TodoHistoryWhereUniqueInput[]
    connect?: TodoHistoryWhereUniqueInput | TodoHistoryWhereUniqueInput[]
    update?: TodoHistoryUpdateWithWhereUniqueWithoutTodoInput | TodoHistoryUpdateWithWhereUniqueWithoutTodoInput[]
    updateMany?: TodoHistoryUpdateManyWithWhereWithoutTodoInput | TodoHistoryUpdateManyWithWhereWithoutTodoInput[]
    deleteMany?: TodoHistoryScalarWhereInput | TodoHistoryScalarWhereInput[]
  }

  export type TodoCreateNestedOneWithoutHistoryInput = {
    create?: XOR<TodoCreateWithoutHistoryInput, TodoUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: TodoCreateOrConnectWithoutHistoryInput
    connect?: TodoWhereUniqueInput
  }

  export type TodoUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<TodoCreateWithoutHistoryInput, TodoUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: TodoCreateOrConnectWithoutHistoryInput
    upsert?: TodoUpsertWithoutHistoryInput
    connect?: TodoWhereUniqueInput
    update?: XOR<XOR<TodoUpdateToOneWithWhereWithoutHistoryInput, TodoUpdateWithoutHistoryInput>, TodoUncheckedUpdateWithoutHistoryInput>
  }

  export type TodoTagCreateNestedManyWithoutTagInput = {
    create?: XOR<TodoTagCreateWithoutTagInput, TodoTagUncheckedCreateWithoutTagInput> | TodoTagCreateWithoutTagInput[] | TodoTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TodoTagCreateOrConnectWithoutTagInput | TodoTagCreateOrConnectWithoutTagInput[]
    createMany?: TodoTagCreateManyTagInputEnvelope
    connect?: TodoTagWhereUniqueInput | TodoTagWhereUniqueInput[]
  }

  export type TodoTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<TodoTagCreateWithoutTagInput, TodoTagUncheckedCreateWithoutTagInput> | TodoTagCreateWithoutTagInput[] | TodoTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TodoTagCreateOrConnectWithoutTagInput | TodoTagCreateOrConnectWithoutTagInput[]
    createMany?: TodoTagCreateManyTagInputEnvelope
    connect?: TodoTagWhereUniqueInput | TodoTagWhereUniqueInput[]
  }

  export type TodoTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<TodoTagCreateWithoutTagInput, TodoTagUncheckedCreateWithoutTagInput> | TodoTagCreateWithoutTagInput[] | TodoTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TodoTagCreateOrConnectWithoutTagInput | TodoTagCreateOrConnectWithoutTagInput[]
    upsert?: TodoTagUpsertWithWhereUniqueWithoutTagInput | TodoTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: TodoTagCreateManyTagInputEnvelope
    set?: TodoTagWhereUniqueInput | TodoTagWhereUniqueInput[]
    disconnect?: TodoTagWhereUniqueInput | TodoTagWhereUniqueInput[]
    delete?: TodoTagWhereUniqueInput | TodoTagWhereUniqueInput[]
    connect?: TodoTagWhereUniqueInput | TodoTagWhereUniqueInput[]
    update?: TodoTagUpdateWithWhereUniqueWithoutTagInput | TodoTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: TodoTagUpdateManyWithWhereWithoutTagInput | TodoTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: TodoTagScalarWhereInput | TodoTagScalarWhereInput[]
  }

  export type TodoTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<TodoTagCreateWithoutTagInput, TodoTagUncheckedCreateWithoutTagInput> | TodoTagCreateWithoutTagInput[] | TodoTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TodoTagCreateOrConnectWithoutTagInput | TodoTagCreateOrConnectWithoutTagInput[]
    upsert?: TodoTagUpsertWithWhereUniqueWithoutTagInput | TodoTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: TodoTagCreateManyTagInputEnvelope
    set?: TodoTagWhereUniqueInput | TodoTagWhereUniqueInput[]
    disconnect?: TodoTagWhereUniqueInput | TodoTagWhereUniqueInput[]
    delete?: TodoTagWhereUniqueInput | TodoTagWhereUniqueInput[]
    connect?: TodoTagWhereUniqueInput | TodoTagWhereUniqueInput[]
    update?: TodoTagUpdateWithWhereUniqueWithoutTagInput | TodoTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: TodoTagUpdateManyWithWhereWithoutTagInput | TodoTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: TodoTagScalarWhereInput | TodoTagScalarWhereInput[]
  }

  export type TodoCreateNestedOneWithoutTagsInput = {
    create?: XOR<TodoCreateWithoutTagsInput, TodoUncheckedCreateWithoutTagsInput>
    connectOrCreate?: TodoCreateOrConnectWithoutTagsInput
    connect?: TodoWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutTodosInput = {
    create?: XOR<TagCreateWithoutTodosInput, TagUncheckedCreateWithoutTodosInput>
    connectOrCreate?: TagCreateOrConnectWithoutTodosInput
    connect?: TagWhereUniqueInput
  }

  export type TodoUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<TodoCreateWithoutTagsInput, TodoUncheckedCreateWithoutTagsInput>
    connectOrCreate?: TodoCreateOrConnectWithoutTagsInput
    upsert?: TodoUpsertWithoutTagsInput
    connect?: TodoWhereUniqueInput
    update?: XOR<XOR<TodoUpdateToOneWithWhereWithoutTagsInput, TodoUpdateWithoutTagsInput>, TodoUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutTodosNestedInput = {
    create?: XOR<TagCreateWithoutTodosInput, TagUncheckedCreateWithoutTodosInput>
    connectOrCreate?: TagCreateOrConnectWithoutTodosInput
    upsert?: TagUpsertWithoutTodosInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutTodosInput, TagUpdateWithoutTodosInput>, TagUncheckedUpdateWithoutTodosInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type NestedEnumTodoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TodoStatus | EnumTodoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TodoStatus[] | ListEnumTodoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TodoStatus[] | ListEnumTodoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTodoStatusFilter<$PrismaModel> | $Enums.TodoStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type NestedEnumTodoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TodoStatus | EnumTodoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TodoStatus[] | ListEnumTodoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TodoStatus[] | ListEnumTodoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTodoStatusWithAggregatesFilter<$PrismaModel> | $Enums.TodoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTodoStatusFilter<$PrismaModel>
    _max?: NestedEnumTodoStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TodoCreateWithoutSubtasksInput = {
    id?: string
    userId: string
    title: string
    description?: string
    priority?: $Enums.Priority
    status?: $Enums.TodoStatus
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    position?: number
    parent?: TodoCreateNestedOneWithoutSubtasksInput
    tags?: TodoTagCreateNestedManyWithoutTodoInput
    history?: TodoHistoryCreateNestedManyWithoutTodoInput
  }

  export type TodoUncheckedCreateWithoutSubtasksInput = {
    id?: string
    userId: string
    title: string
    description?: string
    priority?: $Enums.Priority
    status?: $Enums.TodoStatus
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    position?: number
    parentId?: string | null
    tags?: TodoTagUncheckedCreateNestedManyWithoutTodoInput
    history?: TodoHistoryUncheckedCreateNestedManyWithoutTodoInput
  }

  export type TodoCreateOrConnectWithoutSubtasksInput = {
    where: TodoWhereUniqueInput
    create: XOR<TodoCreateWithoutSubtasksInput, TodoUncheckedCreateWithoutSubtasksInput>
  }

  export type TodoCreateWithoutParentInput = {
    id?: string
    userId: string
    title: string
    description?: string
    priority?: $Enums.Priority
    status?: $Enums.TodoStatus
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    position?: number
    subtasks?: TodoCreateNestedManyWithoutParentInput
    tags?: TodoTagCreateNestedManyWithoutTodoInput
    history?: TodoHistoryCreateNestedManyWithoutTodoInput
  }

  export type TodoUncheckedCreateWithoutParentInput = {
    id?: string
    userId: string
    title: string
    description?: string
    priority?: $Enums.Priority
    status?: $Enums.TodoStatus
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    position?: number
    subtasks?: TodoUncheckedCreateNestedManyWithoutParentInput
    tags?: TodoTagUncheckedCreateNestedManyWithoutTodoInput
    history?: TodoHistoryUncheckedCreateNestedManyWithoutTodoInput
  }

  export type TodoCreateOrConnectWithoutParentInput = {
    where: TodoWhereUniqueInput
    create: XOR<TodoCreateWithoutParentInput, TodoUncheckedCreateWithoutParentInput>
  }

  export type TodoCreateManyParentInputEnvelope = {
    data: TodoCreateManyParentInput | TodoCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type TodoTagCreateWithoutTodoInput = {
    tag: TagCreateNestedOneWithoutTodosInput
  }

  export type TodoTagUncheckedCreateWithoutTodoInput = {
    tagId: string
  }

  export type TodoTagCreateOrConnectWithoutTodoInput = {
    where: TodoTagWhereUniqueInput
    create: XOR<TodoTagCreateWithoutTodoInput, TodoTagUncheckedCreateWithoutTodoInput>
  }

  export type TodoTagCreateManyTodoInputEnvelope = {
    data: TodoTagCreateManyTodoInput | TodoTagCreateManyTodoInput[]
    skipDuplicates?: boolean
  }

  export type TodoHistoryCreateWithoutTodoInput = {
    id?: string
    snapshot: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TodoHistoryUncheckedCreateWithoutTodoInput = {
    id?: string
    snapshot: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TodoHistoryCreateOrConnectWithoutTodoInput = {
    where: TodoHistoryWhereUniqueInput
    create: XOR<TodoHistoryCreateWithoutTodoInput, TodoHistoryUncheckedCreateWithoutTodoInput>
  }

  export type TodoHistoryCreateManyTodoInputEnvelope = {
    data: TodoHistoryCreateManyTodoInput | TodoHistoryCreateManyTodoInput[]
    skipDuplicates?: boolean
  }

  export type TodoUpsertWithoutSubtasksInput = {
    update: XOR<TodoUpdateWithoutSubtasksInput, TodoUncheckedUpdateWithoutSubtasksInput>
    create: XOR<TodoCreateWithoutSubtasksInput, TodoUncheckedCreateWithoutSubtasksInput>
    where?: TodoWhereInput
  }

  export type TodoUpdateToOneWithWhereWithoutSubtasksInput = {
    where?: TodoWhereInput
    data: XOR<TodoUpdateWithoutSubtasksInput, TodoUncheckedUpdateWithoutSubtasksInput>
  }

  export type TodoUpdateWithoutSubtasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTodoStatusFieldUpdateOperationsInput | $Enums.TodoStatus
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: IntFieldUpdateOperationsInput | number
    parent?: TodoUpdateOneWithoutSubtasksNestedInput
    tags?: TodoTagUpdateManyWithoutTodoNestedInput
    history?: TodoHistoryUpdateManyWithoutTodoNestedInput
  }

  export type TodoUncheckedUpdateWithoutSubtasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTodoStatusFieldUpdateOperationsInput | $Enums.TodoStatus
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TodoTagUncheckedUpdateManyWithoutTodoNestedInput
    history?: TodoHistoryUncheckedUpdateManyWithoutTodoNestedInput
  }

  export type TodoUpsertWithWhereUniqueWithoutParentInput = {
    where: TodoWhereUniqueInput
    update: XOR<TodoUpdateWithoutParentInput, TodoUncheckedUpdateWithoutParentInput>
    create: XOR<TodoCreateWithoutParentInput, TodoUncheckedCreateWithoutParentInput>
  }

  export type TodoUpdateWithWhereUniqueWithoutParentInput = {
    where: TodoWhereUniqueInput
    data: XOR<TodoUpdateWithoutParentInput, TodoUncheckedUpdateWithoutParentInput>
  }

  export type TodoUpdateManyWithWhereWithoutParentInput = {
    where: TodoScalarWhereInput
    data: XOR<TodoUpdateManyMutationInput, TodoUncheckedUpdateManyWithoutParentInput>
  }

  export type TodoScalarWhereInput = {
    AND?: TodoScalarWhereInput | TodoScalarWhereInput[]
    OR?: TodoScalarWhereInput[]
    NOT?: TodoScalarWhereInput | TodoScalarWhereInput[]
    id?: StringFilter<"Todo"> | string
    userId?: StringFilter<"Todo"> | string
    title?: StringFilter<"Todo"> | string
    description?: StringFilter<"Todo"> | string
    priority?: EnumPriorityFilter<"Todo"> | $Enums.Priority
    status?: EnumTodoStatusFilter<"Todo"> | $Enums.TodoStatus
    dueDate?: DateTimeNullableFilter<"Todo"> | Date | string | null
    createdAt?: DateTimeFilter<"Todo"> | Date | string
    updatedAt?: DateTimeFilter<"Todo"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Todo"> | Date | string | null
    position?: IntFilter<"Todo"> | number
    parentId?: StringNullableFilter<"Todo"> | string | null
  }

  export type TodoTagUpsertWithWhereUniqueWithoutTodoInput = {
    where: TodoTagWhereUniqueInput
    update: XOR<TodoTagUpdateWithoutTodoInput, TodoTagUncheckedUpdateWithoutTodoInput>
    create: XOR<TodoTagCreateWithoutTodoInput, TodoTagUncheckedCreateWithoutTodoInput>
  }

  export type TodoTagUpdateWithWhereUniqueWithoutTodoInput = {
    where: TodoTagWhereUniqueInput
    data: XOR<TodoTagUpdateWithoutTodoInput, TodoTagUncheckedUpdateWithoutTodoInput>
  }

  export type TodoTagUpdateManyWithWhereWithoutTodoInput = {
    where: TodoTagScalarWhereInput
    data: XOR<TodoTagUpdateManyMutationInput, TodoTagUncheckedUpdateManyWithoutTodoInput>
  }

  export type TodoTagScalarWhereInput = {
    AND?: TodoTagScalarWhereInput | TodoTagScalarWhereInput[]
    OR?: TodoTagScalarWhereInput[]
    NOT?: TodoTagScalarWhereInput | TodoTagScalarWhereInput[]
    todoId?: StringFilter<"TodoTag"> | string
    tagId?: StringFilter<"TodoTag"> | string
  }

  export type TodoHistoryUpsertWithWhereUniqueWithoutTodoInput = {
    where: TodoHistoryWhereUniqueInput
    update: XOR<TodoHistoryUpdateWithoutTodoInput, TodoHistoryUncheckedUpdateWithoutTodoInput>
    create: XOR<TodoHistoryCreateWithoutTodoInput, TodoHistoryUncheckedCreateWithoutTodoInput>
  }

  export type TodoHistoryUpdateWithWhereUniqueWithoutTodoInput = {
    where: TodoHistoryWhereUniqueInput
    data: XOR<TodoHistoryUpdateWithoutTodoInput, TodoHistoryUncheckedUpdateWithoutTodoInput>
  }

  export type TodoHistoryUpdateManyWithWhereWithoutTodoInput = {
    where: TodoHistoryScalarWhereInput
    data: XOR<TodoHistoryUpdateManyMutationInput, TodoHistoryUncheckedUpdateManyWithoutTodoInput>
  }

  export type TodoHistoryScalarWhereInput = {
    AND?: TodoHistoryScalarWhereInput | TodoHistoryScalarWhereInput[]
    OR?: TodoHistoryScalarWhereInput[]
    NOT?: TodoHistoryScalarWhereInput | TodoHistoryScalarWhereInput[]
    id?: StringFilter<"TodoHistory"> | string
    todoId?: StringFilter<"TodoHistory"> | string
    snapshot?: JsonFilter<"TodoHistory">
    createdAt?: DateTimeFilter<"TodoHistory"> | Date | string
  }

  export type TodoCreateWithoutHistoryInput = {
    id?: string
    userId: string
    title: string
    description?: string
    priority?: $Enums.Priority
    status?: $Enums.TodoStatus
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    position?: number
    parent?: TodoCreateNestedOneWithoutSubtasksInput
    subtasks?: TodoCreateNestedManyWithoutParentInput
    tags?: TodoTagCreateNestedManyWithoutTodoInput
  }

  export type TodoUncheckedCreateWithoutHistoryInput = {
    id?: string
    userId: string
    title: string
    description?: string
    priority?: $Enums.Priority
    status?: $Enums.TodoStatus
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    position?: number
    parentId?: string | null
    subtasks?: TodoUncheckedCreateNestedManyWithoutParentInput
    tags?: TodoTagUncheckedCreateNestedManyWithoutTodoInput
  }

  export type TodoCreateOrConnectWithoutHistoryInput = {
    where: TodoWhereUniqueInput
    create: XOR<TodoCreateWithoutHistoryInput, TodoUncheckedCreateWithoutHistoryInput>
  }

  export type TodoUpsertWithoutHistoryInput = {
    update: XOR<TodoUpdateWithoutHistoryInput, TodoUncheckedUpdateWithoutHistoryInput>
    create: XOR<TodoCreateWithoutHistoryInput, TodoUncheckedCreateWithoutHistoryInput>
    where?: TodoWhereInput
  }

  export type TodoUpdateToOneWithWhereWithoutHistoryInput = {
    where?: TodoWhereInput
    data: XOR<TodoUpdateWithoutHistoryInput, TodoUncheckedUpdateWithoutHistoryInput>
  }

  export type TodoUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTodoStatusFieldUpdateOperationsInput | $Enums.TodoStatus
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: IntFieldUpdateOperationsInput | number
    parent?: TodoUpdateOneWithoutSubtasksNestedInput
    subtasks?: TodoUpdateManyWithoutParentNestedInput
    tags?: TodoTagUpdateManyWithoutTodoNestedInput
  }

  export type TodoUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTodoStatusFieldUpdateOperationsInput | $Enums.TodoStatus
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    subtasks?: TodoUncheckedUpdateManyWithoutParentNestedInput
    tags?: TodoTagUncheckedUpdateManyWithoutTodoNestedInput
  }

  export type TodoTagCreateWithoutTagInput = {
    todo: TodoCreateNestedOneWithoutTagsInput
  }

  export type TodoTagUncheckedCreateWithoutTagInput = {
    todoId: string
  }

  export type TodoTagCreateOrConnectWithoutTagInput = {
    where: TodoTagWhereUniqueInput
    create: XOR<TodoTagCreateWithoutTagInput, TodoTagUncheckedCreateWithoutTagInput>
  }

  export type TodoTagCreateManyTagInputEnvelope = {
    data: TodoTagCreateManyTagInput | TodoTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type TodoTagUpsertWithWhereUniqueWithoutTagInput = {
    where: TodoTagWhereUniqueInput
    update: XOR<TodoTagUpdateWithoutTagInput, TodoTagUncheckedUpdateWithoutTagInput>
    create: XOR<TodoTagCreateWithoutTagInput, TodoTagUncheckedCreateWithoutTagInput>
  }

  export type TodoTagUpdateWithWhereUniqueWithoutTagInput = {
    where: TodoTagWhereUniqueInput
    data: XOR<TodoTagUpdateWithoutTagInput, TodoTagUncheckedUpdateWithoutTagInput>
  }

  export type TodoTagUpdateManyWithWhereWithoutTagInput = {
    where: TodoTagScalarWhereInput
    data: XOR<TodoTagUpdateManyMutationInput, TodoTagUncheckedUpdateManyWithoutTagInput>
  }

  export type TodoCreateWithoutTagsInput = {
    id?: string
    userId: string
    title: string
    description?: string
    priority?: $Enums.Priority
    status?: $Enums.TodoStatus
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    position?: number
    parent?: TodoCreateNestedOneWithoutSubtasksInput
    subtasks?: TodoCreateNestedManyWithoutParentInput
    history?: TodoHistoryCreateNestedManyWithoutTodoInput
  }

  export type TodoUncheckedCreateWithoutTagsInput = {
    id?: string
    userId: string
    title: string
    description?: string
    priority?: $Enums.Priority
    status?: $Enums.TodoStatus
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    position?: number
    parentId?: string | null
    subtasks?: TodoUncheckedCreateNestedManyWithoutParentInput
    history?: TodoHistoryUncheckedCreateNestedManyWithoutTodoInput
  }

  export type TodoCreateOrConnectWithoutTagsInput = {
    where: TodoWhereUniqueInput
    create: XOR<TodoCreateWithoutTagsInput, TodoUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutTodosInput = {
    id?: string
    userId: string
    name: string
  }

  export type TagUncheckedCreateWithoutTodosInput = {
    id?: string
    userId: string
    name: string
  }

  export type TagCreateOrConnectWithoutTodosInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutTodosInput, TagUncheckedCreateWithoutTodosInput>
  }

  export type TodoUpsertWithoutTagsInput = {
    update: XOR<TodoUpdateWithoutTagsInput, TodoUncheckedUpdateWithoutTagsInput>
    create: XOR<TodoCreateWithoutTagsInput, TodoUncheckedCreateWithoutTagsInput>
    where?: TodoWhereInput
  }

  export type TodoUpdateToOneWithWhereWithoutTagsInput = {
    where?: TodoWhereInput
    data: XOR<TodoUpdateWithoutTagsInput, TodoUncheckedUpdateWithoutTagsInput>
  }

  export type TodoUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTodoStatusFieldUpdateOperationsInput | $Enums.TodoStatus
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: IntFieldUpdateOperationsInput | number
    parent?: TodoUpdateOneWithoutSubtasksNestedInput
    subtasks?: TodoUpdateManyWithoutParentNestedInput
    history?: TodoHistoryUpdateManyWithoutTodoNestedInput
  }

  export type TodoUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTodoStatusFieldUpdateOperationsInput | $Enums.TodoStatus
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    subtasks?: TodoUncheckedUpdateManyWithoutParentNestedInput
    history?: TodoHistoryUncheckedUpdateManyWithoutTodoNestedInput
  }

  export type TagUpsertWithoutTodosInput = {
    update: XOR<TagUpdateWithoutTodosInput, TagUncheckedUpdateWithoutTodosInput>
    create: XOR<TagCreateWithoutTodosInput, TagUncheckedCreateWithoutTodosInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutTodosInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutTodosInput, TagUncheckedUpdateWithoutTodosInput>
  }

  export type TagUpdateWithoutTodosInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateWithoutTodosInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TodoCreateManyParentInput = {
    id?: string
    userId: string
    title: string
    description?: string
    priority?: $Enums.Priority
    status?: $Enums.TodoStatus
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    position?: number
  }

  export type TodoTagCreateManyTodoInput = {
    tagId: string
  }

  export type TodoHistoryCreateManyTodoInput = {
    id?: string
    snapshot: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TodoUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTodoStatusFieldUpdateOperationsInput | $Enums.TodoStatus
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: IntFieldUpdateOperationsInput | number
    subtasks?: TodoUpdateManyWithoutParentNestedInput
    tags?: TodoTagUpdateManyWithoutTodoNestedInput
    history?: TodoHistoryUpdateManyWithoutTodoNestedInput
  }

  export type TodoUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTodoStatusFieldUpdateOperationsInput | $Enums.TodoStatus
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: IntFieldUpdateOperationsInput | number
    subtasks?: TodoUncheckedUpdateManyWithoutParentNestedInput
    tags?: TodoTagUncheckedUpdateManyWithoutTodoNestedInput
    history?: TodoHistoryUncheckedUpdateManyWithoutTodoNestedInput
  }

  export type TodoUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTodoStatusFieldUpdateOperationsInput | $Enums.TodoStatus
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: IntFieldUpdateOperationsInput | number
  }

  export type TodoTagUpdateWithoutTodoInput = {
    tag?: TagUpdateOneRequiredWithoutTodosNestedInput
  }

  export type TodoTagUncheckedUpdateWithoutTodoInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type TodoTagUncheckedUpdateManyWithoutTodoInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type TodoHistoryUpdateWithoutTodoInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshot?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoHistoryUncheckedUpdateWithoutTodoInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshot?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoHistoryUncheckedUpdateManyWithoutTodoInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshot?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoTagCreateManyTagInput = {
    todoId: string
  }

  export type TodoTagUpdateWithoutTagInput = {
    todo?: TodoUpdateOneRequiredWithoutTagsNestedInput
  }

  export type TodoTagUncheckedUpdateWithoutTagInput = {
    todoId?: StringFieldUpdateOperationsInput | string
  }

  export type TodoTagUncheckedUpdateManyWithoutTagInput = {
    todoId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use TodoCountOutputTypeDefaultArgs instead
     */
    export type TodoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TodoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagCountOutputTypeDefaultArgs instead
     */
    export type TagCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TodoDefaultArgs instead
     */
    export type TodoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TodoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TodoHistoryDefaultArgs instead
     */
    export type TodoHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TodoHistoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagDefaultArgs instead
     */
    export type TagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TodoTagDefaultArgs instead
     */
    export type TodoTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TodoTagDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}