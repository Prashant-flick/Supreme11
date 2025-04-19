
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserTeams
 * 
 */
export type UserTeams = $Result.DefaultSelection<Prisma.$UserTeamsPayload>
/**
 * Model UserTeamPlayers
 * 
 */
export type UserTeamPlayers = $Result.DefaultSelection<Prisma.$UserTeamPlayersPayload>
/**
 * Model Squad
 * 
 */
export type Squad = $Result.DefaultSelection<Prisma.$SquadPayload>
/**
 * Model Players
 * 
 */
export type Players = $Result.DefaultSelection<Prisma.$PlayersPayload>
/**
 * Model PlayerScore
 * 
 */
export type PlayerScore = $Result.DefaultSelection<Prisma.$PlayerScorePayload>
/**
 * Model Matches
 * 
 */
export type Matches = $Result.DefaultSelection<Prisma.$MatchesPayload>
/**
 * Model Inning
 * 
 */
export type Inning = $Result.DefaultSelection<Prisma.$InningPayload>
/**
 * Model Balls
 * 
 */
export type Balls = $Result.DefaultSelection<Prisma.$BallsPayload>
/**
 * Model Tournament
 * 
 */
export type Tournament = $Result.DefaultSelection<Prisma.$TournamentPayload>
/**
 * Model TournamentJoinedTeams
 * 
 */
export type TournamentJoinedTeams = $Result.DefaultSelection<Prisma.$TournamentJoinedTeamsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const WhatHappend: {
  wd: 'wd',
  six: 'six',
  four: 'four',
  dot: 'dot',
  runout: 'runout',
  catch: 'catch',
  bowled: 'bowled',
  nb: 'nb',
  fh: 'fh',
  zero: 'zero',
  one: 'one',
  two: 'two',
  three: 'three',
  lbw: 'lbw'
};

export type WhatHappend = (typeof WhatHappend)[keyof typeof WhatHappend]


export const WhichInning: {
  first: 'first',
  second: 'second'
};

export type WhichInning = (typeof WhichInning)[keyof typeof WhichInning]


export const TournamentStatus: {
  upcoming: 'upcoming',
  started: 'started',
  ended: 'ended'
};

export type TournamentStatus = (typeof TournamentStatus)[keyof typeof TournamentStatus]


export const MatchTossElection: {
  ball: 'ball',
  bat: 'bat',
  tobeDeclared: 'tobeDeclared'
};

export type MatchTossElection = (typeof MatchTossElection)[keyof typeof MatchTossElection]


export const MatchesWinner: {
  team1: 'team1',
  team2: 'team2',
  tobeDeclared: 'tobeDeclared'
};

export type MatchesWinner = (typeof MatchesWinner)[keyof typeof MatchesWinner]


export const PlayerRole: {
  batsman: 'batsman',
  bowler: 'bowler',
  wk: 'wk',
  ar: 'ar'
};

export type PlayerRole = (typeof PlayerRole)[keyof typeof PlayerRole]


export const PlayerDexture: {
  right: 'right',
  left: 'left'
};

export type PlayerDexture = (typeof PlayerDexture)[keyof typeof PlayerDexture]


export const PlayerPlayingStatus: {
  playing: 'playing',
  substitute: 'substitute',
  notPlaying: 'notPlaying'
};

export type PlayerPlayingStatus = (typeof PlayerPlayingStatus)[keyof typeof PlayerPlayingStatus]


export const PlayerCountryStatus: {
  indian: 'indian',
  foreign: 'foreign'
};

export type PlayerCountryStatus = (typeof PlayerCountryStatus)[keyof typeof PlayerCountryStatus]


export const UserRole: {
  user: 'user',
  admin: 'admin'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type WhatHappend = $Enums.WhatHappend

export const WhatHappend: typeof $Enums.WhatHappend

export type WhichInning = $Enums.WhichInning

export const WhichInning: typeof $Enums.WhichInning

export type TournamentStatus = $Enums.TournamentStatus

export const TournamentStatus: typeof $Enums.TournamentStatus

export type MatchTossElection = $Enums.MatchTossElection

export const MatchTossElection: typeof $Enums.MatchTossElection

export type MatchesWinner = $Enums.MatchesWinner

export const MatchesWinner: typeof $Enums.MatchesWinner

export type PlayerRole = $Enums.PlayerRole

export const PlayerRole: typeof $Enums.PlayerRole

export type PlayerDexture = $Enums.PlayerDexture

export const PlayerDexture: typeof $Enums.PlayerDexture

export type PlayerPlayingStatus = $Enums.PlayerPlayingStatus

export const PlayerPlayingStatus: typeof $Enums.PlayerPlayingStatus

export type PlayerCountryStatus = $Enums.PlayerCountryStatus

export const PlayerCountryStatus: typeof $Enums.PlayerCountryStatus

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userTeams`: Exposes CRUD operations for the **UserTeams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserTeams
    * const userTeams = await prisma.userTeams.findMany()
    * ```
    */
  get userTeams(): Prisma.UserTeamsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userTeamPlayers`: Exposes CRUD operations for the **UserTeamPlayers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserTeamPlayers
    * const userTeamPlayers = await prisma.userTeamPlayers.findMany()
    * ```
    */
  get userTeamPlayers(): Prisma.UserTeamPlayersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.squad`: Exposes CRUD operations for the **Squad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Squads
    * const squads = await prisma.squad.findMany()
    * ```
    */
  get squad(): Prisma.SquadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.players`: Exposes CRUD operations for the **Players** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.players.findMany()
    * ```
    */
  get players(): Prisma.PlayersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playerScore`: Exposes CRUD operations for the **PlayerScore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerScores
    * const playerScores = await prisma.playerScore.findMany()
    * ```
    */
  get playerScore(): Prisma.PlayerScoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matches`: Exposes CRUD operations for the **Matches** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.matches.findMany()
    * ```
    */
  get matches(): Prisma.MatchesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inning`: Exposes CRUD operations for the **Inning** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Innings
    * const innings = await prisma.inning.findMany()
    * ```
    */
  get inning(): Prisma.InningDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.balls`: Exposes CRUD operations for the **Balls** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Balls
    * const balls = await prisma.balls.findMany()
    * ```
    */
  get balls(): Prisma.BallsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tournament`: Exposes CRUD operations for the **Tournament** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tournaments
    * const tournaments = await prisma.tournament.findMany()
    * ```
    */
  get tournament(): Prisma.TournamentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tournamentJoinedTeams`: Exposes CRUD operations for the **TournamentJoinedTeams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TournamentJoinedTeams
    * const tournamentJoinedTeams = await prisma.tournamentJoinedTeams.findMany()
    * ```
    */
  get tournamentJoinedTeams(): Prisma.TournamentJoinedTeamsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    UserTeams: 'UserTeams',
    UserTeamPlayers: 'UserTeamPlayers',
    Squad: 'Squad',
    Players: 'Players',
    PlayerScore: 'PlayerScore',
    Matches: 'Matches',
    Inning: 'Inning',
    Balls: 'Balls',
    Tournament: 'Tournament',
    TournamentJoinedTeams: 'TournamentJoinedTeams'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userTeams" | "userTeamPlayers" | "squad" | "players" | "playerScore" | "matches" | "inning" | "balls" | "tournament" | "tournamentJoinedTeams"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserTeams: {
        payload: Prisma.$UserTeamsPayload<ExtArgs>
        fields: Prisma.UserTeamsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserTeamsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTeamsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserTeamsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTeamsPayload>
          }
          findFirst: {
            args: Prisma.UserTeamsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTeamsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserTeamsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTeamsPayload>
          }
          findMany: {
            args: Prisma.UserTeamsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTeamsPayload>[]
          }
          create: {
            args: Prisma.UserTeamsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTeamsPayload>
          }
          createMany: {
            args: Prisma.UserTeamsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserTeamsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTeamsPayload>[]
          }
          delete: {
            args: Prisma.UserTeamsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTeamsPayload>
          }
          update: {
            args: Prisma.UserTeamsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTeamsPayload>
          }
          deleteMany: {
            args: Prisma.UserTeamsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserTeamsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserTeamsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTeamsPayload>[]
          }
          upsert: {
            args: Prisma.UserTeamsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTeamsPayload>
          }
          aggregate: {
            args: Prisma.UserTeamsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserTeams>
          }
          groupBy: {
            args: Prisma.UserTeamsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserTeamsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserTeamsCountArgs<ExtArgs>
            result: $Utils.Optional<UserTeamsCountAggregateOutputType> | number
          }
        }
      }
      UserTeamPlayers: {
        payload: Prisma.$UserTeamPlayersPayload<ExtArgs>
        fields: Prisma.UserTeamPlayersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserTeamPlayersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTeamPlayersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserTeamPlayersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTeamPlayersPayload>
          }
          findFirst: {
            args: Prisma.UserTeamPlayersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTeamPlayersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserTeamPlayersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTeamPlayersPayload>
          }
          findMany: {
            args: Prisma.UserTeamPlayersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTeamPlayersPayload>[]
          }
          create: {
            args: Prisma.UserTeamPlayersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTeamPlayersPayload>
          }
          createMany: {
            args: Prisma.UserTeamPlayersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserTeamPlayersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTeamPlayersPayload>[]
          }
          delete: {
            args: Prisma.UserTeamPlayersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTeamPlayersPayload>
          }
          update: {
            args: Prisma.UserTeamPlayersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTeamPlayersPayload>
          }
          deleteMany: {
            args: Prisma.UserTeamPlayersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserTeamPlayersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserTeamPlayersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTeamPlayersPayload>[]
          }
          upsert: {
            args: Prisma.UserTeamPlayersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTeamPlayersPayload>
          }
          aggregate: {
            args: Prisma.UserTeamPlayersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserTeamPlayers>
          }
          groupBy: {
            args: Prisma.UserTeamPlayersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserTeamPlayersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserTeamPlayersCountArgs<ExtArgs>
            result: $Utils.Optional<UserTeamPlayersCountAggregateOutputType> | number
          }
        }
      }
      Squad: {
        payload: Prisma.$SquadPayload<ExtArgs>
        fields: Prisma.SquadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SquadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SquadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SquadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SquadPayload>
          }
          findFirst: {
            args: Prisma.SquadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SquadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SquadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SquadPayload>
          }
          findMany: {
            args: Prisma.SquadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SquadPayload>[]
          }
          create: {
            args: Prisma.SquadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SquadPayload>
          }
          createMany: {
            args: Prisma.SquadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SquadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SquadPayload>[]
          }
          delete: {
            args: Prisma.SquadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SquadPayload>
          }
          update: {
            args: Prisma.SquadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SquadPayload>
          }
          deleteMany: {
            args: Prisma.SquadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SquadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SquadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SquadPayload>[]
          }
          upsert: {
            args: Prisma.SquadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SquadPayload>
          }
          aggregate: {
            args: Prisma.SquadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSquad>
          }
          groupBy: {
            args: Prisma.SquadGroupByArgs<ExtArgs>
            result: $Utils.Optional<SquadGroupByOutputType>[]
          }
          count: {
            args: Prisma.SquadCountArgs<ExtArgs>
            result: $Utils.Optional<SquadCountAggregateOutputType> | number
          }
        }
      }
      Players: {
        payload: Prisma.$PlayersPayload<ExtArgs>
        fields: Prisma.PlayersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          findFirst: {
            args: Prisma.PlayersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          findMany: {
            args: Prisma.PlayersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>[]
          }
          create: {
            args: Prisma.PlayersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          createMany: {
            args: Prisma.PlayersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>[]
          }
          delete: {
            args: Prisma.PlayersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          update: {
            args: Prisma.PlayersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          deleteMany: {
            args: Prisma.PlayersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>[]
          }
          upsert: {
            args: Prisma.PlayersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          aggregate: {
            args: Prisma.PlayersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayers>
          }
          groupBy: {
            args: Prisma.PlayersGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayersGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayersCountArgs<ExtArgs>
            result: $Utils.Optional<PlayersCountAggregateOutputType> | number
          }
        }
      }
      PlayerScore: {
        payload: Prisma.$PlayerScorePayload<ExtArgs>
        fields: Prisma.PlayerScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerScorePayload>
          }
          findFirst: {
            args: Prisma.PlayerScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerScorePayload>
          }
          findMany: {
            args: Prisma.PlayerScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerScorePayload>[]
          }
          create: {
            args: Prisma.PlayerScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerScorePayload>
          }
          createMany: {
            args: Prisma.PlayerScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerScorePayload>[]
          }
          delete: {
            args: Prisma.PlayerScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerScorePayload>
          }
          update: {
            args: Prisma.PlayerScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerScorePayload>
          }
          deleteMany: {
            args: Prisma.PlayerScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerScoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerScorePayload>[]
          }
          upsert: {
            args: Prisma.PlayerScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerScorePayload>
          }
          aggregate: {
            args: Prisma.PlayerScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayerScore>
          }
          groupBy: {
            args: Prisma.PlayerScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerScoreCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerScoreCountAggregateOutputType> | number
          }
        }
      }
      Matches: {
        payload: Prisma.$MatchesPayload<ExtArgs>
        fields: Prisma.MatchesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchesPayload>
          }
          findFirst: {
            args: Prisma.MatchesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchesPayload>
          }
          findMany: {
            args: Prisma.MatchesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchesPayload>[]
          }
          create: {
            args: Prisma.MatchesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchesPayload>
          }
          createMany: {
            args: Prisma.MatchesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchesPayload>[]
          }
          delete: {
            args: Prisma.MatchesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchesPayload>
          }
          update: {
            args: Prisma.MatchesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchesPayload>
          }
          deleteMany: {
            args: Prisma.MatchesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchesPayload>[]
          }
          upsert: {
            args: Prisma.MatchesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchesPayload>
          }
          aggregate: {
            args: Prisma.MatchesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatches>
          }
          groupBy: {
            args: Prisma.MatchesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchesGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchesCountArgs<ExtArgs>
            result: $Utils.Optional<MatchesCountAggregateOutputType> | number
          }
        }
      }
      Inning: {
        payload: Prisma.$InningPayload<ExtArgs>
        fields: Prisma.InningFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InningFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InningPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InningFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InningPayload>
          }
          findFirst: {
            args: Prisma.InningFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InningPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InningFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InningPayload>
          }
          findMany: {
            args: Prisma.InningFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InningPayload>[]
          }
          create: {
            args: Prisma.InningCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InningPayload>
          }
          createMany: {
            args: Prisma.InningCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InningCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InningPayload>[]
          }
          delete: {
            args: Prisma.InningDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InningPayload>
          }
          update: {
            args: Prisma.InningUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InningPayload>
          }
          deleteMany: {
            args: Prisma.InningDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InningUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InningUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InningPayload>[]
          }
          upsert: {
            args: Prisma.InningUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InningPayload>
          }
          aggregate: {
            args: Prisma.InningAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInning>
          }
          groupBy: {
            args: Prisma.InningGroupByArgs<ExtArgs>
            result: $Utils.Optional<InningGroupByOutputType>[]
          }
          count: {
            args: Prisma.InningCountArgs<ExtArgs>
            result: $Utils.Optional<InningCountAggregateOutputType> | number
          }
        }
      }
      Balls: {
        payload: Prisma.$BallsPayload<ExtArgs>
        fields: Prisma.BallsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BallsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BallsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BallsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BallsPayload>
          }
          findFirst: {
            args: Prisma.BallsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BallsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BallsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BallsPayload>
          }
          findMany: {
            args: Prisma.BallsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BallsPayload>[]
          }
          create: {
            args: Prisma.BallsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BallsPayload>
          }
          createMany: {
            args: Prisma.BallsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BallsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BallsPayload>[]
          }
          delete: {
            args: Prisma.BallsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BallsPayload>
          }
          update: {
            args: Prisma.BallsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BallsPayload>
          }
          deleteMany: {
            args: Prisma.BallsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BallsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BallsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BallsPayload>[]
          }
          upsert: {
            args: Prisma.BallsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BallsPayload>
          }
          aggregate: {
            args: Prisma.BallsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBalls>
          }
          groupBy: {
            args: Prisma.BallsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BallsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BallsCountArgs<ExtArgs>
            result: $Utils.Optional<BallsCountAggregateOutputType> | number
          }
        }
      }
      Tournament: {
        payload: Prisma.$TournamentPayload<ExtArgs>
        fields: Prisma.TournamentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TournamentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TournamentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          findFirst: {
            args: Prisma.TournamentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TournamentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          findMany: {
            args: Prisma.TournamentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
          }
          create: {
            args: Prisma.TournamentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          createMany: {
            args: Prisma.TournamentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TournamentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
          }
          delete: {
            args: Prisma.TournamentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          update: {
            args: Prisma.TournamentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          deleteMany: {
            args: Prisma.TournamentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TournamentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TournamentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
          }
          upsert: {
            args: Prisma.TournamentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          aggregate: {
            args: Prisma.TournamentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTournament>
          }
          groupBy: {
            args: Prisma.TournamentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TournamentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TournamentCountArgs<ExtArgs>
            result: $Utils.Optional<TournamentCountAggregateOutputType> | number
          }
        }
      }
      TournamentJoinedTeams: {
        payload: Prisma.$TournamentJoinedTeamsPayload<ExtArgs>
        fields: Prisma.TournamentJoinedTeamsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TournamentJoinedTeamsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentJoinedTeamsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TournamentJoinedTeamsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentJoinedTeamsPayload>
          }
          findFirst: {
            args: Prisma.TournamentJoinedTeamsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentJoinedTeamsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TournamentJoinedTeamsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentJoinedTeamsPayload>
          }
          findMany: {
            args: Prisma.TournamentJoinedTeamsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentJoinedTeamsPayload>[]
          }
          create: {
            args: Prisma.TournamentJoinedTeamsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentJoinedTeamsPayload>
          }
          createMany: {
            args: Prisma.TournamentJoinedTeamsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TournamentJoinedTeamsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentJoinedTeamsPayload>[]
          }
          delete: {
            args: Prisma.TournamentJoinedTeamsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentJoinedTeamsPayload>
          }
          update: {
            args: Prisma.TournamentJoinedTeamsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentJoinedTeamsPayload>
          }
          deleteMany: {
            args: Prisma.TournamentJoinedTeamsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TournamentJoinedTeamsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TournamentJoinedTeamsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentJoinedTeamsPayload>[]
          }
          upsert: {
            args: Prisma.TournamentJoinedTeamsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentJoinedTeamsPayload>
          }
          aggregate: {
            args: Prisma.TournamentJoinedTeamsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTournamentJoinedTeams>
          }
          groupBy: {
            args: Prisma.TournamentJoinedTeamsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TournamentJoinedTeamsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TournamentJoinedTeamsCountArgs<ExtArgs>
            result: $Utils.Optional<TournamentJoinedTeamsCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userTeams?: UserTeamsOmit
    userTeamPlayers?: UserTeamPlayersOmit
    squad?: SquadOmit
    players?: PlayersOmit
    playerScore?: PlayerScoreOmit
    matches?: MatchesOmit
    inning?: InningOmit
    balls?: BallsOmit
    tournament?: TournamentOmit
    tournamentJoinedTeams?: TournamentJoinedTeamsOmit
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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    teams: number
    tournaments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | UserCountOutputTypeCountTeamsArgs
    tournaments?: boolean | UserCountOutputTypeCountTournamentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTeamsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTournamentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentWhereInput
  }


  /**
   * Count Type UserTeamsCountOutputType
   */

  export type UserTeamsCountOutputType = {
    players: number
    tournamentsJoined: number
  }

  export type UserTeamsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | UserTeamsCountOutputTypeCountPlayersArgs
    tournamentsJoined?: boolean | UserTeamsCountOutputTypeCountTournamentsJoinedArgs
  }

  // Custom InputTypes
  /**
   * UserTeamsCountOutputType without action
   */
  export type UserTeamsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeamsCountOutputType
     */
    select?: UserTeamsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserTeamsCountOutputType without action
   */
  export type UserTeamsCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTeamPlayersWhereInput
  }

  /**
   * UserTeamsCountOutputType without action
   */
  export type UserTeamsCountOutputTypeCountTournamentsJoinedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentJoinedTeamsWhereInput
  }


  /**
   * Count Type SquadCountOutputType
   */

  export type SquadCountOutputType = {
    players: number
  }

  export type SquadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | SquadCountOutputTypeCountPlayersArgs
  }

  // Custom InputTypes
  /**
   * SquadCountOutputType without action
   */
  export type SquadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SquadCountOutputType
     */
    select?: SquadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SquadCountOutputType without action
   */
  export type SquadCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayersWhereInput
  }


  /**
   * Count Type PlayersCountOutputType
   */

  export type PlayersCountOutputType = {
    userTeamPlayers: number
    score: number
  }

  export type PlayersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userTeamPlayers?: boolean | PlayersCountOutputTypeCountUserTeamPlayersArgs
    score?: boolean | PlayersCountOutputTypeCountScoreArgs
  }

  // Custom InputTypes
  /**
   * PlayersCountOutputType without action
   */
  export type PlayersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayersCountOutputType
     */
    select?: PlayersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlayersCountOutputType without action
   */
  export type PlayersCountOutputTypeCountUserTeamPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTeamPlayersWhereInput
  }

  /**
   * PlayersCountOutputType without action
   */
  export type PlayersCountOutputTypeCountScoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerScoreWhereInput
  }


  /**
   * Count Type MatchesCountOutputType
   */

  export type MatchesCountOutputType = {
    innings: number
    playerScore: number
  }

  export type MatchesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    innings?: boolean | MatchesCountOutputTypeCountInningsArgs
    playerScore?: boolean | MatchesCountOutputTypeCountPlayerScoreArgs
  }

  // Custom InputTypes
  /**
   * MatchesCountOutputType without action
   */
  export type MatchesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchesCountOutputType
     */
    select?: MatchesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MatchesCountOutputType without action
   */
  export type MatchesCountOutputTypeCountInningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InningWhereInput
  }

  /**
   * MatchesCountOutputType without action
   */
  export type MatchesCountOutputTypeCountPlayerScoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerScoreWhereInput
  }


  /**
   * Count Type InningCountOutputType
   */

  export type InningCountOutputType = {
    balls: number
  }

  export type InningCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    balls?: boolean | InningCountOutputTypeCountBallsArgs
  }

  // Custom InputTypes
  /**
   * InningCountOutputType without action
   */
  export type InningCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InningCountOutputType
     */
    select?: InningCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InningCountOutputType without action
   */
  export type InningCountOutputTypeCountBallsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BallsWhereInput
  }


  /**
   * Count Type TournamentCountOutputType
   */

  export type TournamentCountOutputType = {
    tournamentJoinedTeams: number
  }

  export type TournamentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournamentJoinedTeams?: boolean | TournamentCountOutputTypeCountTournamentJoinedTeamsArgs
  }

  // Custom InputTypes
  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentCountOutputType
     */
    select?: TournamentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeCountTournamentJoinedTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentJoinedTeamsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    publicKey: string | null
    role: $Enums.UserRole | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    publicKey: string | null
    role: $Enums.UserRole | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    publicKey: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    publicKey?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    publicKey?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    publicKey?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    publicKey: string | null
    role: $Enums.UserRole
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    publicKey?: boolean
    role?: boolean
    teams?: boolean | User$teamsArgs<ExtArgs>
    tournaments?: boolean | User$tournamentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    publicKey?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    publicKey?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    publicKey?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "publicKey" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | User$teamsArgs<ExtArgs>
    tournaments?: boolean | User$tournamentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      teams: Prisma.$UserTeamsPayload<ExtArgs>[]
      tournaments: Prisma.$TournamentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      publicKey: string | null
      role: $Enums.UserRole
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teams<T extends User$teamsArgs<ExtArgs> = {}>(args?: Subset<T, User$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTeamsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tournaments<T extends User$tournamentsArgs<ExtArgs> = {}>(args?: Subset<T, User$tournamentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly publicKey: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.teams
   */
  export type User$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeams
     */
    select?: UserTeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeams
     */
    omit?: UserTeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamsInclude<ExtArgs> | null
    where?: UserTeamsWhereInput
    orderBy?: UserTeamsOrderByWithRelationInput | UserTeamsOrderByWithRelationInput[]
    cursor?: UserTeamsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTeamsScalarFieldEnum | UserTeamsScalarFieldEnum[]
  }

  /**
   * User.tournaments
   */
  export type User$tournamentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    where?: TournamentWhereInput
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    cursor?: TournamentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserTeams
   */

  export type AggregateUserTeams = {
    _count: UserTeamsCountAggregateOutputType | null
    _avg: UserTeamsAvgAggregateOutputType | null
    _sum: UserTeamsSumAggregateOutputType | null
    _min: UserTeamsMinAggregateOutputType | null
    _max: UserTeamsMaxAggregateOutputType | null
  }

  export type UserTeamsAvgAggregateOutputType = {
    fantasyPoints: number | null
  }

  export type UserTeamsSumAggregateOutputType = {
    fantasyPoints: number | null
  }

  export type UserTeamsMinAggregateOutputType = {
    id: string | null
    fantasyPoints: number | null
    captain: string | null
    viceCaptain: string | null
    userId: string | null
    disabled: boolean | null
  }

  export type UserTeamsMaxAggregateOutputType = {
    id: string | null
    fantasyPoints: number | null
    captain: string | null
    viceCaptain: string | null
    userId: string | null
    disabled: boolean | null
  }

  export type UserTeamsCountAggregateOutputType = {
    id: number
    fantasyPoints: number
    captain: number
    viceCaptain: number
    userId: number
    disabled: number
    _all: number
  }


  export type UserTeamsAvgAggregateInputType = {
    fantasyPoints?: true
  }

  export type UserTeamsSumAggregateInputType = {
    fantasyPoints?: true
  }

  export type UserTeamsMinAggregateInputType = {
    id?: true
    fantasyPoints?: true
    captain?: true
    viceCaptain?: true
    userId?: true
    disabled?: true
  }

  export type UserTeamsMaxAggregateInputType = {
    id?: true
    fantasyPoints?: true
    captain?: true
    viceCaptain?: true
    userId?: true
    disabled?: true
  }

  export type UserTeamsCountAggregateInputType = {
    id?: true
    fantasyPoints?: true
    captain?: true
    viceCaptain?: true
    userId?: true
    disabled?: true
    _all?: true
  }

  export type UserTeamsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTeams to aggregate.
     */
    where?: UserTeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTeams to fetch.
     */
    orderBy?: UserTeamsOrderByWithRelationInput | UserTeamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserTeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserTeams
    **/
    _count?: true | UserTeamsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserTeamsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserTeamsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserTeamsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserTeamsMaxAggregateInputType
  }

  export type GetUserTeamsAggregateType<T extends UserTeamsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserTeams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserTeams[P]>
      : GetScalarType<T[P], AggregateUserTeams[P]>
  }




  export type UserTeamsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTeamsWhereInput
    orderBy?: UserTeamsOrderByWithAggregationInput | UserTeamsOrderByWithAggregationInput[]
    by: UserTeamsScalarFieldEnum[] | UserTeamsScalarFieldEnum
    having?: UserTeamsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserTeamsCountAggregateInputType | true
    _avg?: UserTeamsAvgAggregateInputType
    _sum?: UserTeamsSumAggregateInputType
    _min?: UserTeamsMinAggregateInputType
    _max?: UserTeamsMaxAggregateInputType
  }

  export type UserTeamsGroupByOutputType = {
    id: string
    fantasyPoints: number
    captain: string
    viceCaptain: string
    userId: string
    disabled: boolean
    _count: UserTeamsCountAggregateOutputType | null
    _avg: UserTeamsAvgAggregateOutputType | null
    _sum: UserTeamsSumAggregateOutputType | null
    _min: UserTeamsMinAggregateOutputType | null
    _max: UserTeamsMaxAggregateOutputType | null
  }

  type GetUserTeamsGroupByPayload<T extends UserTeamsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserTeamsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserTeamsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserTeamsGroupByOutputType[P]>
            : GetScalarType<T[P], UserTeamsGroupByOutputType[P]>
        }
      >
    >


  export type UserTeamsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fantasyPoints?: boolean
    captain?: boolean
    viceCaptain?: boolean
    userId?: boolean
    disabled?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    players?: boolean | UserTeams$playersArgs<ExtArgs>
    tournamentsJoined?: boolean | UserTeams$tournamentsJoinedArgs<ExtArgs>
    _count?: boolean | UserTeamsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTeams"]>

  export type UserTeamsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fantasyPoints?: boolean
    captain?: boolean
    viceCaptain?: boolean
    userId?: boolean
    disabled?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTeams"]>

  export type UserTeamsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fantasyPoints?: boolean
    captain?: boolean
    viceCaptain?: boolean
    userId?: boolean
    disabled?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTeams"]>

  export type UserTeamsSelectScalar = {
    id?: boolean
    fantasyPoints?: boolean
    captain?: boolean
    viceCaptain?: boolean
    userId?: boolean
    disabled?: boolean
  }

  export type UserTeamsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fantasyPoints" | "captain" | "viceCaptain" | "userId" | "disabled", ExtArgs["result"]["userTeams"]>
  export type UserTeamsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    players?: boolean | UserTeams$playersArgs<ExtArgs>
    tournamentsJoined?: boolean | UserTeams$tournamentsJoinedArgs<ExtArgs>
    _count?: boolean | UserTeamsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserTeamsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserTeamsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserTeamsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserTeams"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      players: Prisma.$UserTeamPlayersPayload<ExtArgs>[]
      tournamentsJoined: Prisma.$TournamentJoinedTeamsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fantasyPoints: number
      captain: string
      viceCaptain: string
      userId: string
      disabled: boolean
    }, ExtArgs["result"]["userTeams"]>
    composites: {}
  }

  type UserTeamsGetPayload<S extends boolean | null | undefined | UserTeamsDefaultArgs> = $Result.GetResult<Prisma.$UserTeamsPayload, S>

  type UserTeamsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserTeamsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserTeamsCountAggregateInputType | true
    }

  export interface UserTeamsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserTeams'], meta: { name: 'UserTeams' } }
    /**
     * Find zero or one UserTeams that matches the filter.
     * @param {UserTeamsFindUniqueArgs} args - Arguments to find a UserTeams
     * @example
     * // Get one UserTeams
     * const userTeams = await prisma.userTeams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserTeamsFindUniqueArgs>(args: SelectSubset<T, UserTeamsFindUniqueArgs<ExtArgs>>): Prisma__UserTeamsClient<$Result.GetResult<Prisma.$UserTeamsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserTeams that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserTeamsFindUniqueOrThrowArgs} args - Arguments to find a UserTeams
     * @example
     * // Get one UserTeams
     * const userTeams = await prisma.userTeams.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserTeamsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserTeamsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserTeamsClient<$Result.GetResult<Prisma.$UserTeamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTeams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTeamsFindFirstArgs} args - Arguments to find a UserTeams
     * @example
     * // Get one UserTeams
     * const userTeams = await prisma.userTeams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserTeamsFindFirstArgs>(args?: SelectSubset<T, UserTeamsFindFirstArgs<ExtArgs>>): Prisma__UserTeamsClient<$Result.GetResult<Prisma.$UserTeamsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTeams that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTeamsFindFirstOrThrowArgs} args - Arguments to find a UserTeams
     * @example
     * // Get one UserTeams
     * const userTeams = await prisma.userTeams.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserTeamsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserTeamsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserTeamsClient<$Result.GetResult<Prisma.$UserTeamsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserTeams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTeamsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserTeams
     * const userTeams = await prisma.userTeams.findMany()
     * 
     * // Get first 10 UserTeams
     * const userTeams = await prisma.userTeams.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userTeamsWithIdOnly = await prisma.userTeams.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserTeamsFindManyArgs>(args?: SelectSubset<T, UserTeamsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTeamsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserTeams.
     * @param {UserTeamsCreateArgs} args - Arguments to create a UserTeams.
     * @example
     * // Create one UserTeams
     * const UserTeams = await prisma.userTeams.create({
     *   data: {
     *     // ... data to create a UserTeams
     *   }
     * })
     * 
     */
    create<T extends UserTeamsCreateArgs>(args: SelectSubset<T, UserTeamsCreateArgs<ExtArgs>>): Prisma__UserTeamsClient<$Result.GetResult<Prisma.$UserTeamsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserTeams.
     * @param {UserTeamsCreateManyArgs} args - Arguments to create many UserTeams.
     * @example
     * // Create many UserTeams
     * const userTeams = await prisma.userTeams.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserTeamsCreateManyArgs>(args?: SelectSubset<T, UserTeamsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserTeams and returns the data saved in the database.
     * @param {UserTeamsCreateManyAndReturnArgs} args - Arguments to create many UserTeams.
     * @example
     * // Create many UserTeams
     * const userTeams = await prisma.userTeams.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserTeams and only return the `id`
     * const userTeamsWithIdOnly = await prisma.userTeams.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserTeamsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserTeamsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTeamsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserTeams.
     * @param {UserTeamsDeleteArgs} args - Arguments to delete one UserTeams.
     * @example
     * // Delete one UserTeams
     * const UserTeams = await prisma.userTeams.delete({
     *   where: {
     *     // ... filter to delete one UserTeams
     *   }
     * })
     * 
     */
    delete<T extends UserTeamsDeleteArgs>(args: SelectSubset<T, UserTeamsDeleteArgs<ExtArgs>>): Prisma__UserTeamsClient<$Result.GetResult<Prisma.$UserTeamsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserTeams.
     * @param {UserTeamsUpdateArgs} args - Arguments to update one UserTeams.
     * @example
     * // Update one UserTeams
     * const userTeams = await prisma.userTeams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserTeamsUpdateArgs>(args: SelectSubset<T, UserTeamsUpdateArgs<ExtArgs>>): Prisma__UserTeamsClient<$Result.GetResult<Prisma.$UserTeamsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserTeams.
     * @param {UserTeamsDeleteManyArgs} args - Arguments to filter UserTeams to delete.
     * @example
     * // Delete a few UserTeams
     * const { count } = await prisma.userTeams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserTeamsDeleteManyArgs>(args?: SelectSubset<T, UserTeamsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTeamsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserTeams
     * const userTeams = await prisma.userTeams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserTeamsUpdateManyArgs>(args: SelectSubset<T, UserTeamsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTeams and returns the data updated in the database.
     * @param {UserTeamsUpdateManyAndReturnArgs} args - Arguments to update many UserTeams.
     * @example
     * // Update many UserTeams
     * const userTeams = await prisma.userTeams.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserTeams and only return the `id`
     * const userTeamsWithIdOnly = await prisma.userTeams.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserTeamsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserTeamsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTeamsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserTeams.
     * @param {UserTeamsUpsertArgs} args - Arguments to update or create a UserTeams.
     * @example
     * // Update or create a UserTeams
     * const userTeams = await prisma.userTeams.upsert({
     *   create: {
     *     // ... data to create a UserTeams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserTeams we want to update
     *   }
     * })
     */
    upsert<T extends UserTeamsUpsertArgs>(args: SelectSubset<T, UserTeamsUpsertArgs<ExtArgs>>): Prisma__UserTeamsClient<$Result.GetResult<Prisma.$UserTeamsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTeamsCountArgs} args - Arguments to filter UserTeams to count.
     * @example
     * // Count the number of UserTeams
     * const count = await prisma.userTeams.count({
     *   where: {
     *     // ... the filter for the UserTeams we want to count
     *   }
     * })
    **/
    count<T extends UserTeamsCountArgs>(
      args?: Subset<T, UserTeamsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserTeamsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTeamsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserTeamsAggregateArgs>(args: Subset<T, UserTeamsAggregateArgs>): Prisma.PrismaPromise<GetUserTeamsAggregateType<T>>

    /**
     * Group by UserTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTeamsGroupByArgs} args - Group by arguments.
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
      T extends UserTeamsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserTeamsGroupByArgs['orderBy'] }
        : { orderBy?: UserTeamsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserTeamsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserTeamsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserTeams model
   */
  readonly fields: UserTeamsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserTeams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserTeamsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    players<T extends UserTeams$playersArgs<ExtArgs> = {}>(args?: Subset<T, UserTeams$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTeamPlayersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tournamentsJoined<T extends UserTeams$tournamentsJoinedArgs<ExtArgs> = {}>(args?: Subset<T, UserTeams$tournamentsJoinedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentJoinedTeamsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UserTeams model
   */
  interface UserTeamsFieldRefs {
    readonly id: FieldRef<"UserTeams", 'String'>
    readonly fantasyPoints: FieldRef<"UserTeams", 'Int'>
    readonly captain: FieldRef<"UserTeams", 'String'>
    readonly viceCaptain: FieldRef<"UserTeams", 'String'>
    readonly userId: FieldRef<"UserTeams", 'String'>
    readonly disabled: FieldRef<"UserTeams", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * UserTeams findUnique
   */
  export type UserTeamsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeams
     */
    select?: UserTeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeams
     */
    omit?: UserTeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamsInclude<ExtArgs> | null
    /**
     * Filter, which UserTeams to fetch.
     */
    where: UserTeamsWhereUniqueInput
  }

  /**
   * UserTeams findUniqueOrThrow
   */
  export type UserTeamsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeams
     */
    select?: UserTeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeams
     */
    omit?: UserTeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamsInclude<ExtArgs> | null
    /**
     * Filter, which UserTeams to fetch.
     */
    where: UserTeamsWhereUniqueInput
  }

  /**
   * UserTeams findFirst
   */
  export type UserTeamsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeams
     */
    select?: UserTeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeams
     */
    omit?: UserTeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamsInclude<ExtArgs> | null
    /**
     * Filter, which UserTeams to fetch.
     */
    where?: UserTeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTeams to fetch.
     */
    orderBy?: UserTeamsOrderByWithRelationInput | UserTeamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTeams.
     */
    cursor?: UserTeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTeams.
     */
    distinct?: UserTeamsScalarFieldEnum | UserTeamsScalarFieldEnum[]
  }

  /**
   * UserTeams findFirstOrThrow
   */
  export type UserTeamsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeams
     */
    select?: UserTeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeams
     */
    omit?: UserTeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamsInclude<ExtArgs> | null
    /**
     * Filter, which UserTeams to fetch.
     */
    where?: UserTeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTeams to fetch.
     */
    orderBy?: UserTeamsOrderByWithRelationInput | UserTeamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTeams.
     */
    cursor?: UserTeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTeams.
     */
    distinct?: UserTeamsScalarFieldEnum | UserTeamsScalarFieldEnum[]
  }

  /**
   * UserTeams findMany
   */
  export type UserTeamsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeams
     */
    select?: UserTeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeams
     */
    omit?: UserTeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamsInclude<ExtArgs> | null
    /**
     * Filter, which UserTeams to fetch.
     */
    where?: UserTeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTeams to fetch.
     */
    orderBy?: UserTeamsOrderByWithRelationInput | UserTeamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserTeams.
     */
    cursor?: UserTeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTeams.
     */
    skip?: number
    distinct?: UserTeamsScalarFieldEnum | UserTeamsScalarFieldEnum[]
  }

  /**
   * UserTeams create
   */
  export type UserTeamsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeams
     */
    select?: UserTeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeams
     */
    omit?: UserTeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserTeams.
     */
    data: XOR<UserTeamsCreateInput, UserTeamsUncheckedCreateInput>
  }

  /**
   * UserTeams createMany
   */
  export type UserTeamsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserTeams.
     */
    data: UserTeamsCreateManyInput | UserTeamsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserTeams createManyAndReturn
   */
  export type UserTeamsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeams
     */
    select?: UserTeamsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeams
     */
    omit?: UserTeamsOmit<ExtArgs> | null
    /**
     * The data used to create many UserTeams.
     */
    data: UserTeamsCreateManyInput | UserTeamsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTeams update
   */
  export type UserTeamsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeams
     */
    select?: UserTeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeams
     */
    omit?: UserTeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserTeams.
     */
    data: XOR<UserTeamsUpdateInput, UserTeamsUncheckedUpdateInput>
    /**
     * Choose, which UserTeams to update.
     */
    where: UserTeamsWhereUniqueInput
  }

  /**
   * UserTeams updateMany
   */
  export type UserTeamsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserTeams.
     */
    data: XOR<UserTeamsUpdateManyMutationInput, UserTeamsUncheckedUpdateManyInput>
    /**
     * Filter which UserTeams to update
     */
    where?: UserTeamsWhereInput
    /**
     * Limit how many UserTeams to update.
     */
    limit?: number
  }

  /**
   * UserTeams updateManyAndReturn
   */
  export type UserTeamsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeams
     */
    select?: UserTeamsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeams
     */
    omit?: UserTeamsOmit<ExtArgs> | null
    /**
     * The data used to update UserTeams.
     */
    data: XOR<UserTeamsUpdateManyMutationInput, UserTeamsUncheckedUpdateManyInput>
    /**
     * Filter which UserTeams to update
     */
    where?: UserTeamsWhereInput
    /**
     * Limit how many UserTeams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTeams upsert
   */
  export type UserTeamsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeams
     */
    select?: UserTeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeams
     */
    omit?: UserTeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserTeams to update in case it exists.
     */
    where: UserTeamsWhereUniqueInput
    /**
     * In case the UserTeams found by the `where` argument doesn't exist, create a new UserTeams with this data.
     */
    create: XOR<UserTeamsCreateInput, UserTeamsUncheckedCreateInput>
    /**
     * In case the UserTeams was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserTeamsUpdateInput, UserTeamsUncheckedUpdateInput>
  }

  /**
   * UserTeams delete
   */
  export type UserTeamsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeams
     */
    select?: UserTeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeams
     */
    omit?: UserTeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamsInclude<ExtArgs> | null
    /**
     * Filter which UserTeams to delete.
     */
    where: UserTeamsWhereUniqueInput
  }

  /**
   * UserTeams deleteMany
   */
  export type UserTeamsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTeams to delete
     */
    where?: UserTeamsWhereInput
    /**
     * Limit how many UserTeams to delete.
     */
    limit?: number
  }

  /**
   * UserTeams.players
   */
  export type UserTeams$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeamPlayers
     */
    select?: UserTeamPlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeamPlayers
     */
    omit?: UserTeamPlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamPlayersInclude<ExtArgs> | null
    where?: UserTeamPlayersWhereInput
    orderBy?: UserTeamPlayersOrderByWithRelationInput | UserTeamPlayersOrderByWithRelationInput[]
    cursor?: UserTeamPlayersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTeamPlayersScalarFieldEnum | UserTeamPlayersScalarFieldEnum[]
  }

  /**
   * UserTeams.tournamentsJoined
   */
  export type UserTeams$tournamentsJoinedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentJoinedTeams
     */
    select?: TournamentJoinedTeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentJoinedTeams
     */
    omit?: TournamentJoinedTeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentJoinedTeamsInclude<ExtArgs> | null
    where?: TournamentJoinedTeamsWhereInput
    orderBy?: TournamentJoinedTeamsOrderByWithRelationInput | TournamentJoinedTeamsOrderByWithRelationInput[]
    cursor?: TournamentJoinedTeamsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TournamentJoinedTeamsScalarFieldEnum | TournamentJoinedTeamsScalarFieldEnum[]
  }

  /**
   * UserTeams without action
   */
  export type UserTeamsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeams
     */
    select?: UserTeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeams
     */
    omit?: UserTeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamsInclude<ExtArgs> | null
  }


  /**
   * Model UserTeamPlayers
   */

  export type AggregateUserTeamPlayers = {
    _count: UserTeamPlayersCountAggregateOutputType | null
    _min: UserTeamPlayersMinAggregateOutputType | null
    _max: UserTeamPlayersMaxAggregateOutputType | null
  }

  export type UserTeamPlayersMinAggregateOutputType = {
    id: string | null
    userTeamsId: string | null
    playersId: string | null
  }

  export type UserTeamPlayersMaxAggregateOutputType = {
    id: string | null
    userTeamsId: string | null
    playersId: string | null
  }

  export type UserTeamPlayersCountAggregateOutputType = {
    id: number
    userTeamsId: number
    playersId: number
    _all: number
  }


  export type UserTeamPlayersMinAggregateInputType = {
    id?: true
    userTeamsId?: true
    playersId?: true
  }

  export type UserTeamPlayersMaxAggregateInputType = {
    id?: true
    userTeamsId?: true
    playersId?: true
  }

  export type UserTeamPlayersCountAggregateInputType = {
    id?: true
    userTeamsId?: true
    playersId?: true
    _all?: true
  }

  export type UserTeamPlayersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTeamPlayers to aggregate.
     */
    where?: UserTeamPlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTeamPlayers to fetch.
     */
    orderBy?: UserTeamPlayersOrderByWithRelationInput | UserTeamPlayersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserTeamPlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTeamPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTeamPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserTeamPlayers
    **/
    _count?: true | UserTeamPlayersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserTeamPlayersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserTeamPlayersMaxAggregateInputType
  }

  export type GetUserTeamPlayersAggregateType<T extends UserTeamPlayersAggregateArgs> = {
        [P in keyof T & keyof AggregateUserTeamPlayers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserTeamPlayers[P]>
      : GetScalarType<T[P], AggregateUserTeamPlayers[P]>
  }




  export type UserTeamPlayersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTeamPlayersWhereInput
    orderBy?: UserTeamPlayersOrderByWithAggregationInput | UserTeamPlayersOrderByWithAggregationInput[]
    by: UserTeamPlayersScalarFieldEnum[] | UserTeamPlayersScalarFieldEnum
    having?: UserTeamPlayersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserTeamPlayersCountAggregateInputType | true
    _min?: UserTeamPlayersMinAggregateInputType
    _max?: UserTeamPlayersMaxAggregateInputType
  }

  export type UserTeamPlayersGroupByOutputType = {
    id: string
    userTeamsId: string
    playersId: string
    _count: UserTeamPlayersCountAggregateOutputType | null
    _min: UserTeamPlayersMinAggregateOutputType | null
    _max: UserTeamPlayersMaxAggregateOutputType | null
  }

  type GetUserTeamPlayersGroupByPayload<T extends UserTeamPlayersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserTeamPlayersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserTeamPlayersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserTeamPlayersGroupByOutputType[P]>
            : GetScalarType<T[P], UserTeamPlayersGroupByOutputType[P]>
        }
      >
    >


  export type UserTeamPlayersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userTeamsId?: boolean
    playersId?: boolean
    userTeams?: boolean | UserTeamsDefaultArgs<ExtArgs>
    players?: boolean | PlayersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTeamPlayers"]>

  export type UserTeamPlayersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userTeamsId?: boolean
    playersId?: boolean
    userTeams?: boolean | UserTeamsDefaultArgs<ExtArgs>
    players?: boolean | PlayersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTeamPlayers"]>

  export type UserTeamPlayersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userTeamsId?: boolean
    playersId?: boolean
    userTeams?: boolean | UserTeamsDefaultArgs<ExtArgs>
    players?: boolean | PlayersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTeamPlayers"]>

  export type UserTeamPlayersSelectScalar = {
    id?: boolean
    userTeamsId?: boolean
    playersId?: boolean
  }

  export type UserTeamPlayersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userTeamsId" | "playersId", ExtArgs["result"]["userTeamPlayers"]>
  export type UserTeamPlayersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userTeams?: boolean | UserTeamsDefaultArgs<ExtArgs>
    players?: boolean | PlayersDefaultArgs<ExtArgs>
  }
  export type UserTeamPlayersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userTeams?: boolean | UserTeamsDefaultArgs<ExtArgs>
    players?: boolean | PlayersDefaultArgs<ExtArgs>
  }
  export type UserTeamPlayersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userTeams?: boolean | UserTeamsDefaultArgs<ExtArgs>
    players?: boolean | PlayersDefaultArgs<ExtArgs>
  }

  export type $UserTeamPlayersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserTeamPlayers"
    objects: {
      userTeams: Prisma.$UserTeamsPayload<ExtArgs>
      players: Prisma.$PlayersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userTeamsId: string
      playersId: string
    }, ExtArgs["result"]["userTeamPlayers"]>
    composites: {}
  }

  type UserTeamPlayersGetPayload<S extends boolean | null | undefined | UserTeamPlayersDefaultArgs> = $Result.GetResult<Prisma.$UserTeamPlayersPayload, S>

  type UserTeamPlayersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserTeamPlayersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserTeamPlayersCountAggregateInputType | true
    }

  export interface UserTeamPlayersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserTeamPlayers'], meta: { name: 'UserTeamPlayers' } }
    /**
     * Find zero or one UserTeamPlayers that matches the filter.
     * @param {UserTeamPlayersFindUniqueArgs} args - Arguments to find a UserTeamPlayers
     * @example
     * // Get one UserTeamPlayers
     * const userTeamPlayers = await prisma.userTeamPlayers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserTeamPlayersFindUniqueArgs>(args: SelectSubset<T, UserTeamPlayersFindUniqueArgs<ExtArgs>>): Prisma__UserTeamPlayersClient<$Result.GetResult<Prisma.$UserTeamPlayersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserTeamPlayers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserTeamPlayersFindUniqueOrThrowArgs} args - Arguments to find a UserTeamPlayers
     * @example
     * // Get one UserTeamPlayers
     * const userTeamPlayers = await prisma.userTeamPlayers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserTeamPlayersFindUniqueOrThrowArgs>(args: SelectSubset<T, UserTeamPlayersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserTeamPlayersClient<$Result.GetResult<Prisma.$UserTeamPlayersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTeamPlayers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTeamPlayersFindFirstArgs} args - Arguments to find a UserTeamPlayers
     * @example
     * // Get one UserTeamPlayers
     * const userTeamPlayers = await prisma.userTeamPlayers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserTeamPlayersFindFirstArgs>(args?: SelectSubset<T, UserTeamPlayersFindFirstArgs<ExtArgs>>): Prisma__UserTeamPlayersClient<$Result.GetResult<Prisma.$UserTeamPlayersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTeamPlayers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTeamPlayersFindFirstOrThrowArgs} args - Arguments to find a UserTeamPlayers
     * @example
     * // Get one UserTeamPlayers
     * const userTeamPlayers = await prisma.userTeamPlayers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserTeamPlayersFindFirstOrThrowArgs>(args?: SelectSubset<T, UserTeamPlayersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserTeamPlayersClient<$Result.GetResult<Prisma.$UserTeamPlayersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserTeamPlayers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTeamPlayersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserTeamPlayers
     * const userTeamPlayers = await prisma.userTeamPlayers.findMany()
     * 
     * // Get first 10 UserTeamPlayers
     * const userTeamPlayers = await prisma.userTeamPlayers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userTeamPlayersWithIdOnly = await prisma.userTeamPlayers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserTeamPlayersFindManyArgs>(args?: SelectSubset<T, UserTeamPlayersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTeamPlayersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserTeamPlayers.
     * @param {UserTeamPlayersCreateArgs} args - Arguments to create a UserTeamPlayers.
     * @example
     * // Create one UserTeamPlayers
     * const UserTeamPlayers = await prisma.userTeamPlayers.create({
     *   data: {
     *     // ... data to create a UserTeamPlayers
     *   }
     * })
     * 
     */
    create<T extends UserTeamPlayersCreateArgs>(args: SelectSubset<T, UserTeamPlayersCreateArgs<ExtArgs>>): Prisma__UserTeamPlayersClient<$Result.GetResult<Prisma.$UserTeamPlayersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserTeamPlayers.
     * @param {UserTeamPlayersCreateManyArgs} args - Arguments to create many UserTeamPlayers.
     * @example
     * // Create many UserTeamPlayers
     * const userTeamPlayers = await prisma.userTeamPlayers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserTeamPlayersCreateManyArgs>(args?: SelectSubset<T, UserTeamPlayersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserTeamPlayers and returns the data saved in the database.
     * @param {UserTeamPlayersCreateManyAndReturnArgs} args - Arguments to create many UserTeamPlayers.
     * @example
     * // Create many UserTeamPlayers
     * const userTeamPlayers = await prisma.userTeamPlayers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserTeamPlayers and only return the `id`
     * const userTeamPlayersWithIdOnly = await prisma.userTeamPlayers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserTeamPlayersCreateManyAndReturnArgs>(args?: SelectSubset<T, UserTeamPlayersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTeamPlayersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserTeamPlayers.
     * @param {UserTeamPlayersDeleteArgs} args - Arguments to delete one UserTeamPlayers.
     * @example
     * // Delete one UserTeamPlayers
     * const UserTeamPlayers = await prisma.userTeamPlayers.delete({
     *   where: {
     *     // ... filter to delete one UserTeamPlayers
     *   }
     * })
     * 
     */
    delete<T extends UserTeamPlayersDeleteArgs>(args: SelectSubset<T, UserTeamPlayersDeleteArgs<ExtArgs>>): Prisma__UserTeamPlayersClient<$Result.GetResult<Prisma.$UserTeamPlayersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserTeamPlayers.
     * @param {UserTeamPlayersUpdateArgs} args - Arguments to update one UserTeamPlayers.
     * @example
     * // Update one UserTeamPlayers
     * const userTeamPlayers = await prisma.userTeamPlayers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserTeamPlayersUpdateArgs>(args: SelectSubset<T, UserTeamPlayersUpdateArgs<ExtArgs>>): Prisma__UserTeamPlayersClient<$Result.GetResult<Prisma.$UserTeamPlayersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserTeamPlayers.
     * @param {UserTeamPlayersDeleteManyArgs} args - Arguments to filter UserTeamPlayers to delete.
     * @example
     * // Delete a few UserTeamPlayers
     * const { count } = await prisma.userTeamPlayers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserTeamPlayersDeleteManyArgs>(args?: SelectSubset<T, UserTeamPlayersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTeamPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTeamPlayersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserTeamPlayers
     * const userTeamPlayers = await prisma.userTeamPlayers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserTeamPlayersUpdateManyArgs>(args: SelectSubset<T, UserTeamPlayersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTeamPlayers and returns the data updated in the database.
     * @param {UserTeamPlayersUpdateManyAndReturnArgs} args - Arguments to update many UserTeamPlayers.
     * @example
     * // Update many UserTeamPlayers
     * const userTeamPlayers = await prisma.userTeamPlayers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserTeamPlayers and only return the `id`
     * const userTeamPlayersWithIdOnly = await prisma.userTeamPlayers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserTeamPlayersUpdateManyAndReturnArgs>(args: SelectSubset<T, UserTeamPlayersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTeamPlayersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserTeamPlayers.
     * @param {UserTeamPlayersUpsertArgs} args - Arguments to update or create a UserTeamPlayers.
     * @example
     * // Update or create a UserTeamPlayers
     * const userTeamPlayers = await prisma.userTeamPlayers.upsert({
     *   create: {
     *     // ... data to create a UserTeamPlayers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserTeamPlayers we want to update
     *   }
     * })
     */
    upsert<T extends UserTeamPlayersUpsertArgs>(args: SelectSubset<T, UserTeamPlayersUpsertArgs<ExtArgs>>): Prisma__UserTeamPlayersClient<$Result.GetResult<Prisma.$UserTeamPlayersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserTeamPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTeamPlayersCountArgs} args - Arguments to filter UserTeamPlayers to count.
     * @example
     * // Count the number of UserTeamPlayers
     * const count = await prisma.userTeamPlayers.count({
     *   where: {
     *     // ... the filter for the UserTeamPlayers we want to count
     *   }
     * })
    **/
    count<T extends UserTeamPlayersCountArgs>(
      args?: Subset<T, UserTeamPlayersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserTeamPlayersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserTeamPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTeamPlayersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserTeamPlayersAggregateArgs>(args: Subset<T, UserTeamPlayersAggregateArgs>): Prisma.PrismaPromise<GetUserTeamPlayersAggregateType<T>>

    /**
     * Group by UserTeamPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTeamPlayersGroupByArgs} args - Group by arguments.
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
      T extends UserTeamPlayersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserTeamPlayersGroupByArgs['orderBy'] }
        : { orderBy?: UserTeamPlayersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserTeamPlayersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserTeamPlayersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserTeamPlayers model
   */
  readonly fields: UserTeamPlayersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserTeamPlayers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserTeamPlayersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userTeams<T extends UserTeamsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserTeamsDefaultArgs<ExtArgs>>): Prisma__UserTeamsClient<$Result.GetResult<Prisma.$UserTeamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    players<T extends PlayersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayersDefaultArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserTeamPlayers model
   */
  interface UserTeamPlayersFieldRefs {
    readonly id: FieldRef<"UserTeamPlayers", 'String'>
    readonly userTeamsId: FieldRef<"UserTeamPlayers", 'String'>
    readonly playersId: FieldRef<"UserTeamPlayers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserTeamPlayers findUnique
   */
  export type UserTeamPlayersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeamPlayers
     */
    select?: UserTeamPlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeamPlayers
     */
    omit?: UserTeamPlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamPlayersInclude<ExtArgs> | null
    /**
     * Filter, which UserTeamPlayers to fetch.
     */
    where: UserTeamPlayersWhereUniqueInput
  }

  /**
   * UserTeamPlayers findUniqueOrThrow
   */
  export type UserTeamPlayersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeamPlayers
     */
    select?: UserTeamPlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeamPlayers
     */
    omit?: UserTeamPlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamPlayersInclude<ExtArgs> | null
    /**
     * Filter, which UserTeamPlayers to fetch.
     */
    where: UserTeamPlayersWhereUniqueInput
  }

  /**
   * UserTeamPlayers findFirst
   */
  export type UserTeamPlayersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeamPlayers
     */
    select?: UserTeamPlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeamPlayers
     */
    omit?: UserTeamPlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamPlayersInclude<ExtArgs> | null
    /**
     * Filter, which UserTeamPlayers to fetch.
     */
    where?: UserTeamPlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTeamPlayers to fetch.
     */
    orderBy?: UserTeamPlayersOrderByWithRelationInput | UserTeamPlayersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTeamPlayers.
     */
    cursor?: UserTeamPlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTeamPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTeamPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTeamPlayers.
     */
    distinct?: UserTeamPlayersScalarFieldEnum | UserTeamPlayersScalarFieldEnum[]
  }

  /**
   * UserTeamPlayers findFirstOrThrow
   */
  export type UserTeamPlayersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeamPlayers
     */
    select?: UserTeamPlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeamPlayers
     */
    omit?: UserTeamPlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamPlayersInclude<ExtArgs> | null
    /**
     * Filter, which UserTeamPlayers to fetch.
     */
    where?: UserTeamPlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTeamPlayers to fetch.
     */
    orderBy?: UserTeamPlayersOrderByWithRelationInput | UserTeamPlayersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTeamPlayers.
     */
    cursor?: UserTeamPlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTeamPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTeamPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTeamPlayers.
     */
    distinct?: UserTeamPlayersScalarFieldEnum | UserTeamPlayersScalarFieldEnum[]
  }

  /**
   * UserTeamPlayers findMany
   */
  export type UserTeamPlayersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeamPlayers
     */
    select?: UserTeamPlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeamPlayers
     */
    omit?: UserTeamPlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamPlayersInclude<ExtArgs> | null
    /**
     * Filter, which UserTeamPlayers to fetch.
     */
    where?: UserTeamPlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTeamPlayers to fetch.
     */
    orderBy?: UserTeamPlayersOrderByWithRelationInput | UserTeamPlayersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserTeamPlayers.
     */
    cursor?: UserTeamPlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTeamPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTeamPlayers.
     */
    skip?: number
    distinct?: UserTeamPlayersScalarFieldEnum | UserTeamPlayersScalarFieldEnum[]
  }

  /**
   * UserTeamPlayers create
   */
  export type UserTeamPlayersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeamPlayers
     */
    select?: UserTeamPlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeamPlayers
     */
    omit?: UserTeamPlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamPlayersInclude<ExtArgs> | null
    /**
     * The data needed to create a UserTeamPlayers.
     */
    data: XOR<UserTeamPlayersCreateInput, UserTeamPlayersUncheckedCreateInput>
  }

  /**
   * UserTeamPlayers createMany
   */
  export type UserTeamPlayersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserTeamPlayers.
     */
    data: UserTeamPlayersCreateManyInput | UserTeamPlayersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserTeamPlayers createManyAndReturn
   */
  export type UserTeamPlayersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeamPlayers
     */
    select?: UserTeamPlayersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeamPlayers
     */
    omit?: UserTeamPlayersOmit<ExtArgs> | null
    /**
     * The data used to create many UserTeamPlayers.
     */
    data: UserTeamPlayersCreateManyInput | UserTeamPlayersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamPlayersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTeamPlayers update
   */
  export type UserTeamPlayersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeamPlayers
     */
    select?: UserTeamPlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeamPlayers
     */
    omit?: UserTeamPlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamPlayersInclude<ExtArgs> | null
    /**
     * The data needed to update a UserTeamPlayers.
     */
    data: XOR<UserTeamPlayersUpdateInput, UserTeamPlayersUncheckedUpdateInput>
    /**
     * Choose, which UserTeamPlayers to update.
     */
    where: UserTeamPlayersWhereUniqueInput
  }

  /**
   * UserTeamPlayers updateMany
   */
  export type UserTeamPlayersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserTeamPlayers.
     */
    data: XOR<UserTeamPlayersUpdateManyMutationInput, UserTeamPlayersUncheckedUpdateManyInput>
    /**
     * Filter which UserTeamPlayers to update
     */
    where?: UserTeamPlayersWhereInput
    /**
     * Limit how many UserTeamPlayers to update.
     */
    limit?: number
  }

  /**
   * UserTeamPlayers updateManyAndReturn
   */
  export type UserTeamPlayersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeamPlayers
     */
    select?: UserTeamPlayersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeamPlayers
     */
    omit?: UserTeamPlayersOmit<ExtArgs> | null
    /**
     * The data used to update UserTeamPlayers.
     */
    data: XOR<UserTeamPlayersUpdateManyMutationInput, UserTeamPlayersUncheckedUpdateManyInput>
    /**
     * Filter which UserTeamPlayers to update
     */
    where?: UserTeamPlayersWhereInput
    /**
     * Limit how many UserTeamPlayers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamPlayersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTeamPlayers upsert
   */
  export type UserTeamPlayersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeamPlayers
     */
    select?: UserTeamPlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeamPlayers
     */
    omit?: UserTeamPlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamPlayersInclude<ExtArgs> | null
    /**
     * The filter to search for the UserTeamPlayers to update in case it exists.
     */
    where: UserTeamPlayersWhereUniqueInput
    /**
     * In case the UserTeamPlayers found by the `where` argument doesn't exist, create a new UserTeamPlayers with this data.
     */
    create: XOR<UserTeamPlayersCreateInput, UserTeamPlayersUncheckedCreateInput>
    /**
     * In case the UserTeamPlayers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserTeamPlayersUpdateInput, UserTeamPlayersUncheckedUpdateInput>
  }

  /**
   * UserTeamPlayers delete
   */
  export type UserTeamPlayersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeamPlayers
     */
    select?: UserTeamPlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeamPlayers
     */
    omit?: UserTeamPlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamPlayersInclude<ExtArgs> | null
    /**
     * Filter which UserTeamPlayers to delete.
     */
    where: UserTeamPlayersWhereUniqueInput
  }

  /**
   * UserTeamPlayers deleteMany
   */
  export type UserTeamPlayersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTeamPlayers to delete
     */
    where?: UserTeamPlayersWhereInput
    /**
     * Limit how many UserTeamPlayers to delete.
     */
    limit?: number
  }

  /**
   * UserTeamPlayers without action
   */
  export type UserTeamPlayersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeamPlayers
     */
    select?: UserTeamPlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeamPlayers
     */
    omit?: UserTeamPlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamPlayersInclude<ExtArgs> | null
  }


  /**
   * Model Squad
   */

  export type AggregateSquad = {
    _count: SquadCountAggregateOutputType | null
    _min: SquadMinAggregateOutputType | null
    _max: SquadMaxAggregateOutputType | null
  }

  export type SquadMinAggregateOutputType = {
    id: string | null
    name: string | null
    logo: string | null
    captain: string | null
    viceCaptain: string | null
  }

  export type SquadMaxAggregateOutputType = {
    id: string | null
    name: string | null
    logo: string | null
    captain: string | null
    viceCaptain: string | null
  }

  export type SquadCountAggregateOutputType = {
    id: number
    name: number
    logo: number
    captain: number
    viceCaptain: number
    _all: number
  }


  export type SquadMinAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    captain?: true
    viceCaptain?: true
  }

  export type SquadMaxAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    captain?: true
    viceCaptain?: true
  }

  export type SquadCountAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    captain?: true
    viceCaptain?: true
    _all?: true
  }

  export type SquadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Squad to aggregate.
     */
    where?: SquadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Squads to fetch.
     */
    orderBy?: SquadOrderByWithRelationInput | SquadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SquadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Squads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Squads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Squads
    **/
    _count?: true | SquadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SquadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SquadMaxAggregateInputType
  }

  export type GetSquadAggregateType<T extends SquadAggregateArgs> = {
        [P in keyof T & keyof AggregateSquad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSquad[P]>
      : GetScalarType<T[P], AggregateSquad[P]>
  }




  export type SquadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SquadWhereInput
    orderBy?: SquadOrderByWithAggregationInput | SquadOrderByWithAggregationInput[]
    by: SquadScalarFieldEnum[] | SquadScalarFieldEnum
    having?: SquadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SquadCountAggregateInputType | true
    _min?: SquadMinAggregateInputType
    _max?: SquadMaxAggregateInputType
  }

  export type SquadGroupByOutputType = {
    id: string
    name: string
    logo: string
    captain: string
    viceCaptain: string
    _count: SquadCountAggregateOutputType | null
    _min: SquadMinAggregateOutputType | null
    _max: SquadMaxAggregateOutputType | null
  }

  type GetSquadGroupByPayload<T extends SquadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SquadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SquadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SquadGroupByOutputType[P]>
            : GetScalarType<T[P], SquadGroupByOutputType[P]>
        }
      >
    >


  export type SquadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    captain?: boolean
    viceCaptain?: boolean
    players?: boolean | Squad$playersArgs<ExtArgs>
    _count?: boolean | SquadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["squad"]>

  export type SquadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    captain?: boolean
    viceCaptain?: boolean
  }, ExtArgs["result"]["squad"]>

  export type SquadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    captain?: boolean
    viceCaptain?: boolean
  }, ExtArgs["result"]["squad"]>

  export type SquadSelectScalar = {
    id?: boolean
    name?: boolean
    logo?: boolean
    captain?: boolean
    viceCaptain?: boolean
  }

  export type SquadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "logo" | "captain" | "viceCaptain", ExtArgs["result"]["squad"]>
  export type SquadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | Squad$playersArgs<ExtArgs>
    _count?: boolean | SquadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SquadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SquadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SquadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Squad"
    objects: {
      players: Prisma.$PlayersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      logo: string
      captain: string
      viceCaptain: string
    }, ExtArgs["result"]["squad"]>
    composites: {}
  }

  type SquadGetPayload<S extends boolean | null | undefined | SquadDefaultArgs> = $Result.GetResult<Prisma.$SquadPayload, S>

  type SquadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SquadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SquadCountAggregateInputType | true
    }

  export interface SquadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Squad'], meta: { name: 'Squad' } }
    /**
     * Find zero or one Squad that matches the filter.
     * @param {SquadFindUniqueArgs} args - Arguments to find a Squad
     * @example
     * // Get one Squad
     * const squad = await prisma.squad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SquadFindUniqueArgs>(args: SelectSubset<T, SquadFindUniqueArgs<ExtArgs>>): Prisma__SquadClient<$Result.GetResult<Prisma.$SquadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Squad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SquadFindUniqueOrThrowArgs} args - Arguments to find a Squad
     * @example
     * // Get one Squad
     * const squad = await prisma.squad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SquadFindUniqueOrThrowArgs>(args: SelectSubset<T, SquadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SquadClient<$Result.GetResult<Prisma.$SquadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Squad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SquadFindFirstArgs} args - Arguments to find a Squad
     * @example
     * // Get one Squad
     * const squad = await prisma.squad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SquadFindFirstArgs>(args?: SelectSubset<T, SquadFindFirstArgs<ExtArgs>>): Prisma__SquadClient<$Result.GetResult<Prisma.$SquadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Squad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SquadFindFirstOrThrowArgs} args - Arguments to find a Squad
     * @example
     * // Get one Squad
     * const squad = await prisma.squad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SquadFindFirstOrThrowArgs>(args?: SelectSubset<T, SquadFindFirstOrThrowArgs<ExtArgs>>): Prisma__SquadClient<$Result.GetResult<Prisma.$SquadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Squads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SquadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Squads
     * const squads = await prisma.squad.findMany()
     * 
     * // Get first 10 Squads
     * const squads = await prisma.squad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const squadWithIdOnly = await prisma.squad.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SquadFindManyArgs>(args?: SelectSubset<T, SquadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SquadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Squad.
     * @param {SquadCreateArgs} args - Arguments to create a Squad.
     * @example
     * // Create one Squad
     * const Squad = await prisma.squad.create({
     *   data: {
     *     // ... data to create a Squad
     *   }
     * })
     * 
     */
    create<T extends SquadCreateArgs>(args: SelectSubset<T, SquadCreateArgs<ExtArgs>>): Prisma__SquadClient<$Result.GetResult<Prisma.$SquadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Squads.
     * @param {SquadCreateManyArgs} args - Arguments to create many Squads.
     * @example
     * // Create many Squads
     * const squad = await prisma.squad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SquadCreateManyArgs>(args?: SelectSubset<T, SquadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Squads and returns the data saved in the database.
     * @param {SquadCreateManyAndReturnArgs} args - Arguments to create many Squads.
     * @example
     * // Create many Squads
     * const squad = await prisma.squad.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Squads and only return the `id`
     * const squadWithIdOnly = await prisma.squad.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SquadCreateManyAndReturnArgs>(args?: SelectSubset<T, SquadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SquadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Squad.
     * @param {SquadDeleteArgs} args - Arguments to delete one Squad.
     * @example
     * // Delete one Squad
     * const Squad = await prisma.squad.delete({
     *   where: {
     *     // ... filter to delete one Squad
     *   }
     * })
     * 
     */
    delete<T extends SquadDeleteArgs>(args: SelectSubset<T, SquadDeleteArgs<ExtArgs>>): Prisma__SquadClient<$Result.GetResult<Prisma.$SquadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Squad.
     * @param {SquadUpdateArgs} args - Arguments to update one Squad.
     * @example
     * // Update one Squad
     * const squad = await prisma.squad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SquadUpdateArgs>(args: SelectSubset<T, SquadUpdateArgs<ExtArgs>>): Prisma__SquadClient<$Result.GetResult<Prisma.$SquadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Squads.
     * @param {SquadDeleteManyArgs} args - Arguments to filter Squads to delete.
     * @example
     * // Delete a few Squads
     * const { count } = await prisma.squad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SquadDeleteManyArgs>(args?: SelectSubset<T, SquadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Squads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SquadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Squads
     * const squad = await prisma.squad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SquadUpdateManyArgs>(args: SelectSubset<T, SquadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Squads and returns the data updated in the database.
     * @param {SquadUpdateManyAndReturnArgs} args - Arguments to update many Squads.
     * @example
     * // Update many Squads
     * const squad = await prisma.squad.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Squads and only return the `id`
     * const squadWithIdOnly = await prisma.squad.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SquadUpdateManyAndReturnArgs>(args: SelectSubset<T, SquadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SquadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Squad.
     * @param {SquadUpsertArgs} args - Arguments to update or create a Squad.
     * @example
     * // Update or create a Squad
     * const squad = await prisma.squad.upsert({
     *   create: {
     *     // ... data to create a Squad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Squad we want to update
     *   }
     * })
     */
    upsert<T extends SquadUpsertArgs>(args: SelectSubset<T, SquadUpsertArgs<ExtArgs>>): Prisma__SquadClient<$Result.GetResult<Prisma.$SquadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Squads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SquadCountArgs} args - Arguments to filter Squads to count.
     * @example
     * // Count the number of Squads
     * const count = await prisma.squad.count({
     *   where: {
     *     // ... the filter for the Squads we want to count
     *   }
     * })
    **/
    count<T extends SquadCountArgs>(
      args?: Subset<T, SquadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SquadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Squad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SquadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SquadAggregateArgs>(args: Subset<T, SquadAggregateArgs>): Prisma.PrismaPromise<GetSquadAggregateType<T>>

    /**
     * Group by Squad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SquadGroupByArgs} args - Group by arguments.
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
      T extends SquadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SquadGroupByArgs['orderBy'] }
        : { orderBy?: SquadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SquadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSquadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Squad model
   */
  readonly fields: SquadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Squad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SquadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    players<T extends Squad$playersArgs<ExtArgs> = {}>(args?: Subset<T, Squad$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Squad model
   */
  interface SquadFieldRefs {
    readonly id: FieldRef<"Squad", 'String'>
    readonly name: FieldRef<"Squad", 'String'>
    readonly logo: FieldRef<"Squad", 'String'>
    readonly captain: FieldRef<"Squad", 'String'>
    readonly viceCaptain: FieldRef<"Squad", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Squad findUnique
   */
  export type SquadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Squad
     */
    select?: SquadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Squad
     */
    omit?: SquadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SquadInclude<ExtArgs> | null
    /**
     * Filter, which Squad to fetch.
     */
    where: SquadWhereUniqueInput
  }

  /**
   * Squad findUniqueOrThrow
   */
  export type SquadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Squad
     */
    select?: SquadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Squad
     */
    omit?: SquadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SquadInclude<ExtArgs> | null
    /**
     * Filter, which Squad to fetch.
     */
    where: SquadWhereUniqueInput
  }

  /**
   * Squad findFirst
   */
  export type SquadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Squad
     */
    select?: SquadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Squad
     */
    omit?: SquadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SquadInclude<ExtArgs> | null
    /**
     * Filter, which Squad to fetch.
     */
    where?: SquadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Squads to fetch.
     */
    orderBy?: SquadOrderByWithRelationInput | SquadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Squads.
     */
    cursor?: SquadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Squads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Squads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Squads.
     */
    distinct?: SquadScalarFieldEnum | SquadScalarFieldEnum[]
  }

  /**
   * Squad findFirstOrThrow
   */
  export type SquadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Squad
     */
    select?: SquadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Squad
     */
    omit?: SquadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SquadInclude<ExtArgs> | null
    /**
     * Filter, which Squad to fetch.
     */
    where?: SquadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Squads to fetch.
     */
    orderBy?: SquadOrderByWithRelationInput | SquadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Squads.
     */
    cursor?: SquadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Squads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Squads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Squads.
     */
    distinct?: SquadScalarFieldEnum | SquadScalarFieldEnum[]
  }

  /**
   * Squad findMany
   */
  export type SquadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Squad
     */
    select?: SquadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Squad
     */
    omit?: SquadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SquadInclude<ExtArgs> | null
    /**
     * Filter, which Squads to fetch.
     */
    where?: SquadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Squads to fetch.
     */
    orderBy?: SquadOrderByWithRelationInput | SquadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Squads.
     */
    cursor?: SquadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Squads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Squads.
     */
    skip?: number
    distinct?: SquadScalarFieldEnum | SquadScalarFieldEnum[]
  }

  /**
   * Squad create
   */
  export type SquadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Squad
     */
    select?: SquadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Squad
     */
    omit?: SquadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SquadInclude<ExtArgs> | null
    /**
     * The data needed to create a Squad.
     */
    data: XOR<SquadCreateInput, SquadUncheckedCreateInput>
  }

  /**
   * Squad createMany
   */
  export type SquadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Squads.
     */
    data: SquadCreateManyInput | SquadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Squad createManyAndReturn
   */
  export type SquadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Squad
     */
    select?: SquadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Squad
     */
    omit?: SquadOmit<ExtArgs> | null
    /**
     * The data used to create many Squads.
     */
    data: SquadCreateManyInput | SquadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Squad update
   */
  export type SquadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Squad
     */
    select?: SquadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Squad
     */
    omit?: SquadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SquadInclude<ExtArgs> | null
    /**
     * The data needed to update a Squad.
     */
    data: XOR<SquadUpdateInput, SquadUncheckedUpdateInput>
    /**
     * Choose, which Squad to update.
     */
    where: SquadWhereUniqueInput
  }

  /**
   * Squad updateMany
   */
  export type SquadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Squads.
     */
    data: XOR<SquadUpdateManyMutationInput, SquadUncheckedUpdateManyInput>
    /**
     * Filter which Squads to update
     */
    where?: SquadWhereInput
    /**
     * Limit how many Squads to update.
     */
    limit?: number
  }

  /**
   * Squad updateManyAndReturn
   */
  export type SquadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Squad
     */
    select?: SquadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Squad
     */
    omit?: SquadOmit<ExtArgs> | null
    /**
     * The data used to update Squads.
     */
    data: XOR<SquadUpdateManyMutationInput, SquadUncheckedUpdateManyInput>
    /**
     * Filter which Squads to update
     */
    where?: SquadWhereInput
    /**
     * Limit how many Squads to update.
     */
    limit?: number
  }

  /**
   * Squad upsert
   */
  export type SquadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Squad
     */
    select?: SquadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Squad
     */
    omit?: SquadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SquadInclude<ExtArgs> | null
    /**
     * The filter to search for the Squad to update in case it exists.
     */
    where: SquadWhereUniqueInput
    /**
     * In case the Squad found by the `where` argument doesn't exist, create a new Squad with this data.
     */
    create: XOR<SquadCreateInput, SquadUncheckedCreateInput>
    /**
     * In case the Squad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SquadUpdateInput, SquadUncheckedUpdateInput>
  }

  /**
   * Squad delete
   */
  export type SquadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Squad
     */
    select?: SquadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Squad
     */
    omit?: SquadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SquadInclude<ExtArgs> | null
    /**
     * Filter which Squad to delete.
     */
    where: SquadWhereUniqueInput
  }

  /**
   * Squad deleteMany
   */
  export type SquadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Squads to delete
     */
    where?: SquadWhereInput
    /**
     * Limit how many Squads to delete.
     */
    limit?: number
  }

  /**
   * Squad.players
   */
  export type Squad$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    where?: PlayersWhereInput
    orderBy?: PlayersOrderByWithRelationInput | PlayersOrderByWithRelationInput[]
    cursor?: PlayersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayersScalarFieldEnum | PlayersScalarFieldEnum[]
  }

  /**
   * Squad without action
   */
  export type SquadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Squad
     */
    select?: SquadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Squad
     */
    omit?: SquadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SquadInclude<ExtArgs> | null
  }


  /**
   * Model Players
   */

  export type AggregatePlayers = {
    _count: PlayersCountAggregateOutputType | null
    _min: PlayersMinAggregateOutputType | null
    _max: PlayersMaxAggregateOutputType | null
  }

  export type PlayersMinAggregateOutputType = {
    id: string | null
    name: string | null
    role: $Enums.PlayerRole | null
    battingDexture: $Enums.PlayerDexture | null
    bowlingDexture: $Enums.PlayerDexture | null
    countryStatus: $Enums.PlayerCountryStatus | null
    squadId: string | null
    age: string | null
    img: string | null
  }

  export type PlayersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    role: $Enums.PlayerRole | null
    battingDexture: $Enums.PlayerDexture | null
    bowlingDexture: $Enums.PlayerDexture | null
    countryStatus: $Enums.PlayerCountryStatus | null
    squadId: string | null
    age: string | null
    img: string | null
  }

  export type PlayersCountAggregateOutputType = {
    id: number
    name: number
    role: number
    battingDexture: number
    bowlingDexture: number
    countryStatus: number
    squadId: number
    age: number
    img: number
    _all: number
  }


  export type PlayersMinAggregateInputType = {
    id?: true
    name?: true
    role?: true
    battingDexture?: true
    bowlingDexture?: true
    countryStatus?: true
    squadId?: true
    age?: true
    img?: true
  }

  export type PlayersMaxAggregateInputType = {
    id?: true
    name?: true
    role?: true
    battingDexture?: true
    bowlingDexture?: true
    countryStatus?: true
    squadId?: true
    age?: true
    img?: true
  }

  export type PlayersCountAggregateInputType = {
    id?: true
    name?: true
    role?: true
    battingDexture?: true
    bowlingDexture?: true
    countryStatus?: true
    squadId?: true
    age?: true
    img?: true
    _all?: true
  }

  export type PlayersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to aggregate.
     */
    where?: PlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayersOrderByWithRelationInput | PlayersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players
    **/
    _count?: true | PlayersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayersMaxAggregateInputType
  }

  export type GetPlayersAggregateType<T extends PlayersAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayers[P]>
      : GetScalarType<T[P], AggregatePlayers[P]>
  }




  export type PlayersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayersWhereInput
    orderBy?: PlayersOrderByWithAggregationInput | PlayersOrderByWithAggregationInput[]
    by: PlayersScalarFieldEnum[] | PlayersScalarFieldEnum
    having?: PlayersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayersCountAggregateInputType | true
    _min?: PlayersMinAggregateInputType
    _max?: PlayersMaxAggregateInputType
  }

  export type PlayersGroupByOutputType = {
    id: string
    name: string
    role: $Enums.PlayerRole
    battingDexture: $Enums.PlayerDexture
    bowlingDexture: $Enums.PlayerDexture
    countryStatus: $Enums.PlayerCountryStatus
    squadId: string
    age: string
    img: string
    _count: PlayersCountAggregateOutputType | null
    _min: PlayersMinAggregateOutputType | null
    _max: PlayersMaxAggregateOutputType | null
  }

  type GetPlayersGroupByPayload<T extends PlayersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayersGroupByOutputType[P]>
            : GetScalarType<T[P], PlayersGroupByOutputType[P]>
        }
      >
    >


  export type PlayersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    battingDexture?: boolean
    bowlingDexture?: boolean
    countryStatus?: boolean
    squadId?: boolean
    age?: boolean
    img?: boolean
    squad?: boolean | SquadDefaultArgs<ExtArgs>
    userTeamPlayers?: boolean | Players$userTeamPlayersArgs<ExtArgs>
    score?: boolean | Players$scoreArgs<ExtArgs>
    _count?: boolean | PlayersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["players"]>

  export type PlayersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    battingDexture?: boolean
    bowlingDexture?: boolean
    countryStatus?: boolean
    squadId?: boolean
    age?: boolean
    img?: boolean
    squad?: boolean | SquadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["players"]>

  export type PlayersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    battingDexture?: boolean
    bowlingDexture?: boolean
    countryStatus?: boolean
    squadId?: boolean
    age?: boolean
    img?: boolean
    squad?: boolean | SquadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["players"]>

  export type PlayersSelectScalar = {
    id?: boolean
    name?: boolean
    role?: boolean
    battingDexture?: boolean
    bowlingDexture?: boolean
    countryStatus?: boolean
    squadId?: boolean
    age?: boolean
    img?: boolean
  }

  export type PlayersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "role" | "battingDexture" | "bowlingDexture" | "countryStatus" | "squadId" | "age" | "img", ExtArgs["result"]["players"]>
  export type PlayersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    squad?: boolean | SquadDefaultArgs<ExtArgs>
    userTeamPlayers?: boolean | Players$userTeamPlayersArgs<ExtArgs>
    score?: boolean | Players$scoreArgs<ExtArgs>
    _count?: boolean | PlayersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlayersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    squad?: boolean | SquadDefaultArgs<ExtArgs>
  }
  export type PlayersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    squad?: boolean | SquadDefaultArgs<ExtArgs>
  }

  export type $PlayersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Players"
    objects: {
      squad: Prisma.$SquadPayload<ExtArgs>
      userTeamPlayers: Prisma.$UserTeamPlayersPayload<ExtArgs>[]
      score: Prisma.$PlayerScorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      role: $Enums.PlayerRole
      battingDexture: $Enums.PlayerDexture
      bowlingDexture: $Enums.PlayerDexture
      countryStatus: $Enums.PlayerCountryStatus
      squadId: string
      age: string
      img: string
    }, ExtArgs["result"]["players"]>
    composites: {}
  }

  type PlayersGetPayload<S extends boolean | null | undefined | PlayersDefaultArgs> = $Result.GetResult<Prisma.$PlayersPayload, S>

  type PlayersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayersCountAggregateInputType | true
    }

  export interface PlayersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Players'], meta: { name: 'Players' } }
    /**
     * Find zero or one Players that matches the filter.
     * @param {PlayersFindUniqueArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayersFindUniqueArgs>(args: SelectSubset<T, PlayersFindUniqueArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Players that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayersFindUniqueOrThrowArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayersFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersFindFirstArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayersFindFirstArgs>(args?: SelectSubset<T, PlayersFindFirstArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Players that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersFindFirstOrThrowArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayersFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayersFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.players.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.players.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playersWithIdOnly = await prisma.players.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayersFindManyArgs>(args?: SelectSubset<T, PlayersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Players.
     * @param {PlayersCreateArgs} args - Arguments to create a Players.
     * @example
     * // Create one Players
     * const Players = await prisma.players.create({
     *   data: {
     *     // ... data to create a Players
     *   }
     * })
     * 
     */
    create<T extends PlayersCreateArgs>(args: SelectSubset<T, PlayersCreateArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Players.
     * @param {PlayersCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const players = await prisma.players.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayersCreateManyArgs>(args?: SelectSubset<T, PlayersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Players and returns the data saved in the database.
     * @param {PlayersCreateManyAndReturnArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const players = await prisma.players.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Players and only return the `id`
     * const playersWithIdOnly = await prisma.players.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayersCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Players.
     * @param {PlayersDeleteArgs} args - Arguments to delete one Players.
     * @example
     * // Delete one Players
     * const Players = await prisma.players.delete({
     *   where: {
     *     // ... filter to delete one Players
     *   }
     * })
     * 
     */
    delete<T extends PlayersDeleteArgs>(args: SelectSubset<T, PlayersDeleteArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Players.
     * @param {PlayersUpdateArgs} args - Arguments to update one Players.
     * @example
     * // Update one Players
     * const players = await prisma.players.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayersUpdateArgs>(args: SelectSubset<T, PlayersUpdateArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Players.
     * @param {PlayersDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.players.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayersDeleteManyArgs>(args?: SelectSubset<T, PlayersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const players = await prisma.players.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayersUpdateManyArgs>(args: SelectSubset<T, PlayersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players and returns the data updated in the database.
     * @param {PlayersUpdateManyAndReturnArgs} args - Arguments to update many Players.
     * @example
     * // Update many Players
     * const players = await prisma.players.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Players and only return the `id`
     * const playersWithIdOnly = await prisma.players.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayersUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Players.
     * @param {PlayersUpsertArgs} args - Arguments to update or create a Players.
     * @example
     * // Update or create a Players
     * const players = await prisma.players.upsert({
     *   create: {
     *     // ... data to create a Players
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Players we want to update
     *   }
     * })
     */
    upsert<T extends PlayersUpsertArgs>(args: SelectSubset<T, PlayersUpsertArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.players.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayersCountArgs>(
      args?: Subset<T, PlayersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayersAggregateArgs>(args: Subset<T, PlayersAggregateArgs>): Prisma.PrismaPromise<GetPlayersAggregateType<T>>

    /**
     * Group by Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersGroupByArgs} args - Group by arguments.
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
      T extends PlayersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayersGroupByArgs['orderBy'] }
        : { orderBy?: PlayersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlayersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Players model
   */
  readonly fields: PlayersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Players.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    squad<T extends SquadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SquadDefaultArgs<ExtArgs>>): Prisma__SquadClient<$Result.GetResult<Prisma.$SquadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userTeamPlayers<T extends Players$userTeamPlayersArgs<ExtArgs> = {}>(args?: Subset<T, Players$userTeamPlayersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTeamPlayersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    score<T extends Players$scoreArgs<ExtArgs> = {}>(args?: Subset<T, Players$scoreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Players model
   */
  interface PlayersFieldRefs {
    readonly id: FieldRef<"Players", 'String'>
    readonly name: FieldRef<"Players", 'String'>
    readonly role: FieldRef<"Players", 'PlayerRole'>
    readonly battingDexture: FieldRef<"Players", 'PlayerDexture'>
    readonly bowlingDexture: FieldRef<"Players", 'PlayerDexture'>
    readonly countryStatus: FieldRef<"Players", 'PlayerCountryStatus'>
    readonly squadId: FieldRef<"Players", 'String'>
    readonly age: FieldRef<"Players", 'String'>
    readonly img: FieldRef<"Players", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Players findUnique
   */
  export type PlayersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where: PlayersWhereUniqueInput
  }

  /**
   * Players findUniqueOrThrow
   */
  export type PlayersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where: PlayersWhereUniqueInput
  }

  /**
   * Players findFirst
   */
  export type PlayersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayersOrderByWithRelationInput | PlayersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayersScalarFieldEnum | PlayersScalarFieldEnum[]
  }

  /**
   * Players findFirstOrThrow
   */
  export type PlayersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayersOrderByWithRelationInput | PlayersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayersScalarFieldEnum | PlayersScalarFieldEnum[]
  }

  /**
   * Players findMany
   */
  export type PlayersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayersOrderByWithRelationInput | PlayersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players.
     */
    cursor?: PlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    distinct?: PlayersScalarFieldEnum | PlayersScalarFieldEnum[]
  }

  /**
   * Players create
   */
  export type PlayersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * The data needed to create a Players.
     */
    data: XOR<PlayersCreateInput, PlayersUncheckedCreateInput>
  }

  /**
   * Players createMany
   */
  export type PlayersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Players.
     */
    data: PlayersCreateManyInput | PlayersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Players createManyAndReturn
   */
  export type PlayersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * The data used to create many Players.
     */
    data: PlayersCreateManyInput | PlayersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Players update
   */
  export type PlayersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * The data needed to update a Players.
     */
    data: XOR<PlayersUpdateInput, PlayersUncheckedUpdateInput>
    /**
     * Choose, which Players to update.
     */
    where: PlayersWhereUniqueInput
  }

  /**
   * Players updateMany
   */
  export type PlayersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Players.
     */
    data: XOR<PlayersUpdateManyMutationInput, PlayersUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayersWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
  }

  /**
   * Players updateManyAndReturn
   */
  export type PlayersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * The data used to update Players.
     */
    data: XOR<PlayersUpdateManyMutationInput, PlayersUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayersWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Players upsert
   */
  export type PlayersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * The filter to search for the Players to update in case it exists.
     */
    where: PlayersWhereUniqueInput
    /**
     * In case the Players found by the `where` argument doesn't exist, create a new Players with this data.
     */
    create: XOR<PlayersCreateInput, PlayersUncheckedCreateInput>
    /**
     * In case the Players was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayersUpdateInput, PlayersUncheckedUpdateInput>
  }

  /**
   * Players delete
   */
  export type PlayersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * Filter which Players to delete.
     */
    where: PlayersWhereUniqueInput
  }

  /**
   * Players deleteMany
   */
  export type PlayersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to delete
     */
    where?: PlayersWhereInput
    /**
     * Limit how many Players to delete.
     */
    limit?: number
  }

  /**
   * Players.userTeamPlayers
   */
  export type Players$userTeamPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeamPlayers
     */
    select?: UserTeamPlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeamPlayers
     */
    omit?: UserTeamPlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamPlayersInclude<ExtArgs> | null
    where?: UserTeamPlayersWhereInput
    orderBy?: UserTeamPlayersOrderByWithRelationInput | UserTeamPlayersOrderByWithRelationInput[]
    cursor?: UserTeamPlayersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTeamPlayersScalarFieldEnum | UserTeamPlayersScalarFieldEnum[]
  }

  /**
   * Players.score
   */
  export type Players$scoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerScore
     */
    select?: PlayerScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerScore
     */
    omit?: PlayerScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerScoreInclude<ExtArgs> | null
    where?: PlayerScoreWhereInput
    orderBy?: PlayerScoreOrderByWithRelationInput | PlayerScoreOrderByWithRelationInput[]
    cursor?: PlayerScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerScoreScalarFieldEnum | PlayerScoreScalarFieldEnum[]
  }

  /**
   * Players without action
   */
  export type PlayersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
  }


  /**
   * Model PlayerScore
   */

  export type AggregatePlayerScore = {
    _count: PlayerScoreCountAggregateOutputType | null
    _avg: PlayerScoreAvgAggregateOutputType | null
    _sum: PlayerScoreSumAggregateOutputType | null
    _min: PlayerScoreMinAggregateOutputType | null
    _max: PlayerScoreMaxAggregateOutputType | null
  }

  export type PlayerScoreAvgAggregateOutputType = {
    fantasyPoints: number | null
    run: number | null
    sixes: number | null
    fours: number | null
    others: number | null
    runsConceded: number | null
    wickets: number | null
    ballsBowled: number | null
    catches: number | null
    runout: number | null
    dotBall: number | null
  }

  export type PlayerScoreSumAggregateOutputType = {
    fantasyPoints: number | null
    run: number | null
    sixes: number | null
    fours: number | null
    others: number | null
    runsConceded: number | null
    wickets: number | null
    ballsBowled: number | null
    catches: number | null
    runout: number | null
    dotBall: number | null
  }

  export type PlayerScoreMinAggregateOutputType = {
    id: string | null
    playingStatus: $Enums.PlayerPlayingStatus | null
    fantasyPoints: number | null
    run: number | null
    sixes: number | null
    fours: number | null
    others: number | null
    runsConceded: number | null
    wickets: number | null
    ballsBowled: number | null
    catches: number | null
    runout: number | null
    dotBall: number | null
    playerId: string | null
    matchId: string | null
  }

  export type PlayerScoreMaxAggregateOutputType = {
    id: string | null
    playingStatus: $Enums.PlayerPlayingStatus | null
    fantasyPoints: number | null
    run: number | null
    sixes: number | null
    fours: number | null
    others: number | null
    runsConceded: number | null
    wickets: number | null
    ballsBowled: number | null
    catches: number | null
    runout: number | null
    dotBall: number | null
    playerId: string | null
    matchId: string | null
  }

  export type PlayerScoreCountAggregateOutputType = {
    id: number
    playingStatus: number
    fantasyPoints: number
    run: number
    sixes: number
    fours: number
    others: number
    runsConceded: number
    wickets: number
    ballsBowled: number
    catches: number
    runout: number
    dotBall: number
    playerId: number
    matchId: number
    _all: number
  }


  export type PlayerScoreAvgAggregateInputType = {
    fantasyPoints?: true
    run?: true
    sixes?: true
    fours?: true
    others?: true
    runsConceded?: true
    wickets?: true
    ballsBowled?: true
    catches?: true
    runout?: true
    dotBall?: true
  }

  export type PlayerScoreSumAggregateInputType = {
    fantasyPoints?: true
    run?: true
    sixes?: true
    fours?: true
    others?: true
    runsConceded?: true
    wickets?: true
    ballsBowled?: true
    catches?: true
    runout?: true
    dotBall?: true
  }

  export type PlayerScoreMinAggregateInputType = {
    id?: true
    playingStatus?: true
    fantasyPoints?: true
    run?: true
    sixes?: true
    fours?: true
    others?: true
    runsConceded?: true
    wickets?: true
    ballsBowled?: true
    catches?: true
    runout?: true
    dotBall?: true
    playerId?: true
    matchId?: true
  }

  export type PlayerScoreMaxAggregateInputType = {
    id?: true
    playingStatus?: true
    fantasyPoints?: true
    run?: true
    sixes?: true
    fours?: true
    others?: true
    runsConceded?: true
    wickets?: true
    ballsBowled?: true
    catches?: true
    runout?: true
    dotBall?: true
    playerId?: true
    matchId?: true
  }

  export type PlayerScoreCountAggregateInputType = {
    id?: true
    playingStatus?: true
    fantasyPoints?: true
    run?: true
    sixes?: true
    fours?: true
    others?: true
    runsConceded?: true
    wickets?: true
    ballsBowled?: true
    catches?: true
    runout?: true
    dotBall?: true
    playerId?: true
    matchId?: true
    _all?: true
  }

  export type PlayerScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerScore to aggregate.
     */
    where?: PlayerScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerScores to fetch.
     */
    orderBy?: PlayerScoreOrderByWithRelationInput | PlayerScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayerScores
    **/
    _count?: true | PlayerScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerScoreMaxAggregateInputType
  }

  export type GetPlayerScoreAggregateType<T extends PlayerScoreAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayerScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayerScore[P]>
      : GetScalarType<T[P], AggregatePlayerScore[P]>
  }




  export type PlayerScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerScoreWhereInput
    orderBy?: PlayerScoreOrderByWithAggregationInput | PlayerScoreOrderByWithAggregationInput[]
    by: PlayerScoreScalarFieldEnum[] | PlayerScoreScalarFieldEnum
    having?: PlayerScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerScoreCountAggregateInputType | true
    _avg?: PlayerScoreAvgAggregateInputType
    _sum?: PlayerScoreSumAggregateInputType
    _min?: PlayerScoreMinAggregateInputType
    _max?: PlayerScoreMaxAggregateInputType
  }

  export type PlayerScoreGroupByOutputType = {
    id: string
    playingStatus: $Enums.PlayerPlayingStatus
    fantasyPoints: number
    run: number
    sixes: number
    fours: number
    others: number
    runsConceded: number
    wickets: number
    ballsBowled: number
    catches: number
    runout: number
    dotBall: number
    playerId: string
    matchId: string
    _count: PlayerScoreCountAggregateOutputType | null
    _avg: PlayerScoreAvgAggregateOutputType | null
    _sum: PlayerScoreSumAggregateOutputType | null
    _min: PlayerScoreMinAggregateOutputType | null
    _max: PlayerScoreMaxAggregateOutputType | null
  }

  type GetPlayerScoreGroupByPayload<T extends PlayerScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerScoreGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerScoreGroupByOutputType[P]>
        }
      >
    >


  export type PlayerScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playingStatus?: boolean
    fantasyPoints?: boolean
    run?: boolean
    sixes?: boolean
    fours?: boolean
    others?: boolean
    runsConceded?: boolean
    wickets?: boolean
    ballsBowled?: boolean
    catches?: boolean
    runout?: boolean
    dotBall?: boolean
    playerId?: boolean
    matchId?: boolean
    player?: boolean | PlayersDefaultArgs<ExtArgs>
    match?: boolean | MatchesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerScore"]>

  export type PlayerScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playingStatus?: boolean
    fantasyPoints?: boolean
    run?: boolean
    sixes?: boolean
    fours?: boolean
    others?: boolean
    runsConceded?: boolean
    wickets?: boolean
    ballsBowled?: boolean
    catches?: boolean
    runout?: boolean
    dotBall?: boolean
    playerId?: boolean
    matchId?: boolean
    player?: boolean | PlayersDefaultArgs<ExtArgs>
    match?: boolean | MatchesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerScore"]>

  export type PlayerScoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playingStatus?: boolean
    fantasyPoints?: boolean
    run?: boolean
    sixes?: boolean
    fours?: boolean
    others?: boolean
    runsConceded?: boolean
    wickets?: boolean
    ballsBowled?: boolean
    catches?: boolean
    runout?: boolean
    dotBall?: boolean
    playerId?: boolean
    matchId?: boolean
    player?: boolean | PlayersDefaultArgs<ExtArgs>
    match?: boolean | MatchesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerScore"]>

  export type PlayerScoreSelectScalar = {
    id?: boolean
    playingStatus?: boolean
    fantasyPoints?: boolean
    run?: boolean
    sixes?: boolean
    fours?: boolean
    others?: boolean
    runsConceded?: boolean
    wickets?: boolean
    ballsBowled?: boolean
    catches?: boolean
    runout?: boolean
    dotBall?: boolean
    playerId?: boolean
    matchId?: boolean
  }

  export type PlayerScoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playingStatus" | "fantasyPoints" | "run" | "sixes" | "fours" | "others" | "runsConceded" | "wickets" | "ballsBowled" | "catches" | "runout" | "dotBall" | "playerId" | "matchId", ExtArgs["result"]["playerScore"]>
  export type PlayerScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayersDefaultArgs<ExtArgs>
    match?: boolean | MatchesDefaultArgs<ExtArgs>
  }
  export type PlayerScoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayersDefaultArgs<ExtArgs>
    match?: boolean | MatchesDefaultArgs<ExtArgs>
  }
  export type PlayerScoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayersDefaultArgs<ExtArgs>
    match?: boolean | MatchesDefaultArgs<ExtArgs>
  }

  export type $PlayerScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayerScore"
    objects: {
      player: Prisma.$PlayersPayload<ExtArgs>
      match: Prisma.$MatchesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      playingStatus: $Enums.PlayerPlayingStatus
      fantasyPoints: number
      run: number
      sixes: number
      fours: number
      others: number
      runsConceded: number
      wickets: number
      ballsBowled: number
      catches: number
      runout: number
      dotBall: number
      playerId: string
      matchId: string
    }, ExtArgs["result"]["playerScore"]>
    composites: {}
  }

  type PlayerScoreGetPayload<S extends boolean | null | undefined | PlayerScoreDefaultArgs> = $Result.GetResult<Prisma.$PlayerScorePayload, S>

  type PlayerScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerScoreCountAggregateInputType | true
    }

  export interface PlayerScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayerScore'], meta: { name: 'PlayerScore' } }
    /**
     * Find zero or one PlayerScore that matches the filter.
     * @param {PlayerScoreFindUniqueArgs} args - Arguments to find a PlayerScore
     * @example
     * // Get one PlayerScore
     * const playerScore = await prisma.playerScore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerScoreFindUniqueArgs>(args: SelectSubset<T, PlayerScoreFindUniqueArgs<ExtArgs>>): Prisma__PlayerScoreClient<$Result.GetResult<Prisma.$PlayerScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlayerScore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerScoreFindUniqueOrThrowArgs} args - Arguments to find a PlayerScore
     * @example
     * // Get one PlayerScore
     * const playerScore = await prisma.playerScore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerScoreClient<$Result.GetResult<Prisma.$PlayerScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerScore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerScoreFindFirstArgs} args - Arguments to find a PlayerScore
     * @example
     * // Get one PlayerScore
     * const playerScore = await prisma.playerScore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerScoreFindFirstArgs>(args?: SelectSubset<T, PlayerScoreFindFirstArgs<ExtArgs>>): Prisma__PlayerScoreClient<$Result.GetResult<Prisma.$PlayerScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerScore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerScoreFindFirstOrThrowArgs} args - Arguments to find a PlayerScore
     * @example
     * // Get one PlayerScore
     * const playerScore = await prisma.playerScore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerScoreClient<$Result.GetResult<Prisma.$PlayerScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlayerScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerScores
     * const playerScores = await prisma.playerScore.findMany()
     * 
     * // Get first 10 PlayerScores
     * const playerScores = await prisma.playerScore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerScoreWithIdOnly = await prisma.playerScore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerScoreFindManyArgs>(args?: SelectSubset<T, PlayerScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlayerScore.
     * @param {PlayerScoreCreateArgs} args - Arguments to create a PlayerScore.
     * @example
     * // Create one PlayerScore
     * const PlayerScore = await prisma.playerScore.create({
     *   data: {
     *     // ... data to create a PlayerScore
     *   }
     * })
     * 
     */
    create<T extends PlayerScoreCreateArgs>(args: SelectSubset<T, PlayerScoreCreateArgs<ExtArgs>>): Prisma__PlayerScoreClient<$Result.GetResult<Prisma.$PlayerScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlayerScores.
     * @param {PlayerScoreCreateManyArgs} args - Arguments to create many PlayerScores.
     * @example
     * // Create many PlayerScores
     * const playerScore = await prisma.playerScore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerScoreCreateManyArgs>(args?: SelectSubset<T, PlayerScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlayerScores and returns the data saved in the database.
     * @param {PlayerScoreCreateManyAndReturnArgs} args - Arguments to create many PlayerScores.
     * @example
     * // Create many PlayerScores
     * const playerScore = await prisma.playerScore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlayerScores and only return the `id`
     * const playerScoreWithIdOnly = await prisma.playerScore.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerScorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlayerScore.
     * @param {PlayerScoreDeleteArgs} args - Arguments to delete one PlayerScore.
     * @example
     * // Delete one PlayerScore
     * const PlayerScore = await prisma.playerScore.delete({
     *   where: {
     *     // ... filter to delete one PlayerScore
     *   }
     * })
     * 
     */
    delete<T extends PlayerScoreDeleteArgs>(args: SelectSubset<T, PlayerScoreDeleteArgs<ExtArgs>>): Prisma__PlayerScoreClient<$Result.GetResult<Prisma.$PlayerScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlayerScore.
     * @param {PlayerScoreUpdateArgs} args - Arguments to update one PlayerScore.
     * @example
     * // Update one PlayerScore
     * const playerScore = await prisma.playerScore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerScoreUpdateArgs>(args: SelectSubset<T, PlayerScoreUpdateArgs<ExtArgs>>): Prisma__PlayerScoreClient<$Result.GetResult<Prisma.$PlayerScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlayerScores.
     * @param {PlayerScoreDeleteManyArgs} args - Arguments to filter PlayerScores to delete.
     * @example
     * // Delete a few PlayerScores
     * const { count } = await prisma.playerScore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerScoreDeleteManyArgs>(args?: SelectSubset<T, PlayerScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerScores
     * const playerScore = await prisma.playerScore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerScoreUpdateManyArgs>(args: SelectSubset<T, PlayerScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerScores and returns the data updated in the database.
     * @param {PlayerScoreUpdateManyAndReturnArgs} args - Arguments to update many PlayerScores.
     * @example
     * // Update many PlayerScores
     * const playerScore = await prisma.playerScore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlayerScores and only return the `id`
     * const playerScoreWithIdOnly = await prisma.playerScore.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayerScoreUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerScoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerScorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlayerScore.
     * @param {PlayerScoreUpsertArgs} args - Arguments to update or create a PlayerScore.
     * @example
     * // Update or create a PlayerScore
     * const playerScore = await prisma.playerScore.upsert({
     *   create: {
     *     // ... data to create a PlayerScore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerScore we want to update
     *   }
     * })
     */
    upsert<T extends PlayerScoreUpsertArgs>(args: SelectSubset<T, PlayerScoreUpsertArgs<ExtArgs>>): Prisma__PlayerScoreClient<$Result.GetResult<Prisma.$PlayerScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlayerScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerScoreCountArgs} args - Arguments to filter PlayerScores to count.
     * @example
     * // Count the number of PlayerScores
     * const count = await prisma.playerScore.count({
     *   where: {
     *     // ... the filter for the PlayerScores we want to count
     *   }
     * })
    **/
    count<T extends PlayerScoreCountArgs>(
      args?: Subset<T, PlayerScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayerScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayerScoreAggregateArgs>(args: Subset<T, PlayerScoreAggregateArgs>): Prisma.PrismaPromise<GetPlayerScoreAggregateType<T>>

    /**
     * Group by PlayerScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerScoreGroupByArgs} args - Group by arguments.
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
      T extends PlayerScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerScoreGroupByArgs['orderBy'] }
        : { orderBy?: PlayerScoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlayerScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayerScore model
   */
  readonly fields: PlayerScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayerScore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends PlayersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayersDefaultArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    match<T extends MatchesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatchesDefaultArgs<ExtArgs>>): Prisma__MatchesClient<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PlayerScore model
   */
  interface PlayerScoreFieldRefs {
    readonly id: FieldRef<"PlayerScore", 'String'>
    readonly playingStatus: FieldRef<"PlayerScore", 'PlayerPlayingStatus'>
    readonly fantasyPoints: FieldRef<"PlayerScore", 'Int'>
    readonly run: FieldRef<"PlayerScore", 'Int'>
    readonly sixes: FieldRef<"PlayerScore", 'Int'>
    readonly fours: FieldRef<"PlayerScore", 'Int'>
    readonly others: FieldRef<"PlayerScore", 'Int'>
    readonly runsConceded: FieldRef<"PlayerScore", 'Int'>
    readonly wickets: FieldRef<"PlayerScore", 'Int'>
    readonly ballsBowled: FieldRef<"PlayerScore", 'Int'>
    readonly catches: FieldRef<"PlayerScore", 'Int'>
    readonly runout: FieldRef<"PlayerScore", 'Int'>
    readonly dotBall: FieldRef<"PlayerScore", 'Int'>
    readonly playerId: FieldRef<"PlayerScore", 'String'>
    readonly matchId: FieldRef<"PlayerScore", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PlayerScore findUnique
   */
  export type PlayerScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerScore
     */
    select?: PlayerScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerScore
     */
    omit?: PlayerScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerScoreInclude<ExtArgs> | null
    /**
     * Filter, which PlayerScore to fetch.
     */
    where: PlayerScoreWhereUniqueInput
  }

  /**
   * PlayerScore findUniqueOrThrow
   */
  export type PlayerScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerScore
     */
    select?: PlayerScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerScore
     */
    omit?: PlayerScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerScoreInclude<ExtArgs> | null
    /**
     * Filter, which PlayerScore to fetch.
     */
    where: PlayerScoreWhereUniqueInput
  }

  /**
   * PlayerScore findFirst
   */
  export type PlayerScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerScore
     */
    select?: PlayerScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerScore
     */
    omit?: PlayerScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerScoreInclude<ExtArgs> | null
    /**
     * Filter, which PlayerScore to fetch.
     */
    where?: PlayerScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerScores to fetch.
     */
    orderBy?: PlayerScoreOrderByWithRelationInput | PlayerScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerScores.
     */
    cursor?: PlayerScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerScores.
     */
    distinct?: PlayerScoreScalarFieldEnum | PlayerScoreScalarFieldEnum[]
  }

  /**
   * PlayerScore findFirstOrThrow
   */
  export type PlayerScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerScore
     */
    select?: PlayerScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerScore
     */
    omit?: PlayerScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerScoreInclude<ExtArgs> | null
    /**
     * Filter, which PlayerScore to fetch.
     */
    where?: PlayerScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerScores to fetch.
     */
    orderBy?: PlayerScoreOrderByWithRelationInput | PlayerScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerScores.
     */
    cursor?: PlayerScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerScores.
     */
    distinct?: PlayerScoreScalarFieldEnum | PlayerScoreScalarFieldEnum[]
  }

  /**
   * PlayerScore findMany
   */
  export type PlayerScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerScore
     */
    select?: PlayerScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerScore
     */
    omit?: PlayerScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerScoreInclude<ExtArgs> | null
    /**
     * Filter, which PlayerScores to fetch.
     */
    where?: PlayerScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerScores to fetch.
     */
    orderBy?: PlayerScoreOrderByWithRelationInput | PlayerScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayerScores.
     */
    cursor?: PlayerScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerScores.
     */
    skip?: number
    distinct?: PlayerScoreScalarFieldEnum | PlayerScoreScalarFieldEnum[]
  }

  /**
   * PlayerScore create
   */
  export type PlayerScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerScore
     */
    select?: PlayerScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerScore
     */
    omit?: PlayerScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a PlayerScore.
     */
    data: XOR<PlayerScoreCreateInput, PlayerScoreUncheckedCreateInput>
  }

  /**
   * PlayerScore createMany
   */
  export type PlayerScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerScores.
     */
    data: PlayerScoreCreateManyInput | PlayerScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayerScore createManyAndReturn
   */
  export type PlayerScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerScore
     */
    select?: PlayerScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerScore
     */
    omit?: PlayerScoreOmit<ExtArgs> | null
    /**
     * The data used to create many PlayerScores.
     */
    data: PlayerScoreCreateManyInput | PlayerScoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerScoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerScore update
   */
  export type PlayerScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerScore
     */
    select?: PlayerScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerScore
     */
    omit?: PlayerScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a PlayerScore.
     */
    data: XOR<PlayerScoreUpdateInput, PlayerScoreUncheckedUpdateInput>
    /**
     * Choose, which PlayerScore to update.
     */
    where: PlayerScoreWhereUniqueInput
  }

  /**
   * PlayerScore updateMany
   */
  export type PlayerScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerScores.
     */
    data: XOR<PlayerScoreUpdateManyMutationInput, PlayerScoreUncheckedUpdateManyInput>
    /**
     * Filter which PlayerScores to update
     */
    where?: PlayerScoreWhereInput
    /**
     * Limit how many PlayerScores to update.
     */
    limit?: number
  }

  /**
   * PlayerScore updateManyAndReturn
   */
  export type PlayerScoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerScore
     */
    select?: PlayerScoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerScore
     */
    omit?: PlayerScoreOmit<ExtArgs> | null
    /**
     * The data used to update PlayerScores.
     */
    data: XOR<PlayerScoreUpdateManyMutationInput, PlayerScoreUncheckedUpdateManyInput>
    /**
     * Filter which PlayerScores to update
     */
    where?: PlayerScoreWhereInput
    /**
     * Limit how many PlayerScores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerScoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerScore upsert
   */
  export type PlayerScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerScore
     */
    select?: PlayerScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerScore
     */
    omit?: PlayerScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the PlayerScore to update in case it exists.
     */
    where: PlayerScoreWhereUniqueInput
    /**
     * In case the PlayerScore found by the `where` argument doesn't exist, create a new PlayerScore with this data.
     */
    create: XOR<PlayerScoreCreateInput, PlayerScoreUncheckedCreateInput>
    /**
     * In case the PlayerScore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerScoreUpdateInput, PlayerScoreUncheckedUpdateInput>
  }

  /**
   * PlayerScore delete
   */
  export type PlayerScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerScore
     */
    select?: PlayerScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerScore
     */
    omit?: PlayerScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerScoreInclude<ExtArgs> | null
    /**
     * Filter which PlayerScore to delete.
     */
    where: PlayerScoreWhereUniqueInput
  }

  /**
   * PlayerScore deleteMany
   */
  export type PlayerScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerScores to delete
     */
    where?: PlayerScoreWhereInput
    /**
     * Limit how many PlayerScores to delete.
     */
    limit?: number
  }

  /**
   * PlayerScore without action
   */
  export type PlayerScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerScore
     */
    select?: PlayerScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerScore
     */
    omit?: PlayerScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerScoreInclude<ExtArgs> | null
  }


  /**
   * Model Matches
   */

  export type AggregateMatches = {
    _count: MatchesCountAggregateOutputType | null
    _min: MatchesMinAggregateOutputType | null
    _max: MatchesMaxAggregateOutputType | null
  }

  export type MatchesMinAggregateOutputType = {
    id: string | null
    team1Id: string | null
    team2Id: string | null
    venue: string | null
    date: Date | null
    winner: $Enums.MatchesWinner | null
    toss: $Enums.MatchesWinner | null
    elected: $Enums.MatchTossElection | null
    status: $Enums.TournamentStatus | null
  }

  export type MatchesMaxAggregateOutputType = {
    id: string | null
    team1Id: string | null
    team2Id: string | null
    venue: string | null
    date: Date | null
    winner: $Enums.MatchesWinner | null
    toss: $Enums.MatchesWinner | null
    elected: $Enums.MatchTossElection | null
    status: $Enums.TournamentStatus | null
  }

  export type MatchesCountAggregateOutputType = {
    id: number
    team1Id: number
    team2Id: number
    venue: number
    date: number
    winner: number
    toss: number
    elected: number
    status: number
    _all: number
  }


  export type MatchesMinAggregateInputType = {
    id?: true
    team1Id?: true
    team2Id?: true
    venue?: true
    date?: true
    winner?: true
    toss?: true
    elected?: true
    status?: true
  }

  export type MatchesMaxAggregateInputType = {
    id?: true
    team1Id?: true
    team2Id?: true
    venue?: true
    date?: true
    winner?: true
    toss?: true
    elected?: true
    status?: true
  }

  export type MatchesCountAggregateInputType = {
    id?: true
    team1Id?: true
    team2Id?: true
    venue?: true
    date?: true
    winner?: true
    toss?: true
    elected?: true
    status?: true
    _all?: true
  }

  export type MatchesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matches to aggregate.
     */
    where?: MatchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchesOrderByWithRelationInput | MatchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matches
    **/
    _count?: true | MatchesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchesMaxAggregateInputType
  }

  export type GetMatchesAggregateType<T extends MatchesAggregateArgs> = {
        [P in keyof T & keyof AggregateMatches]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatches[P]>
      : GetScalarType<T[P], AggregateMatches[P]>
  }




  export type MatchesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchesWhereInput
    orderBy?: MatchesOrderByWithAggregationInput | MatchesOrderByWithAggregationInput[]
    by: MatchesScalarFieldEnum[] | MatchesScalarFieldEnum
    having?: MatchesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchesCountAggregateInputType | true
    _min?: MatchesMinAggregateInputType
    _max?: MatchesMaxAggregateInputType
  }

  export type MatchesGroupByOutputType = {
    id: string
    team1Id: string
    team2Id: string
    venue: string
    date: Date
    winner: $Enums.MatchesWinner
    toss: $Enums.MatchesWinner
    elected: $Enums.MatchTossElection
    status: $Enums.TournamentStatus
    _count: MatchesCountAggregateOutputType | null
    _min: MatchesMinAggregateOutputType | null
    _max: MatchesMaxAggregateOutputType | null
  }

  type GetMatchesGroupByPayload<T extends MatchesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchesGroupByOutputType[P]>
            : GetScalarType<T[P], MatchesGroupByOutputType[P]>
        }
      >
    >


  export type MatchesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    team1Id?: boolean
    team2Id?: boolean
    venue?: boolean
    date?: boolean
    winner?: boolean
    toss?: boolean
    elected?: boolean
    status?: boolean
    innings?: boolean | Matches$inningsArgs<ExtArgs>
    playerScore?: boolean | Matches$playerScoreArgs<ExtArgs>
    _count?: boolean | MatchesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matches"]>

  export type MatchesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    team1Id?: boolean
    team2Id?: boolean
    venue?: boolean
    date?: boolean
    winner?: boolean
    toss?: boolean
    elected?: boolean
    status?: boolean
  }, ExtArgs["result"]["matches"]>

  export type MatchesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    team1Id?: boolean
    team2Id?: boolean
    venue?: boolean
    date?: boolean
    winner?: boolean
    toss?: boolean
    elected?: boolean
    status?: boolean
  }, ExtArgs["result"]["matches"]>

  export type MatchesSelectScalar = {
    id?: boolean
    team1Id?: boolean
    team2Id?: boolean
    venue?: boolean
    date?: boolean
    winner?: boolean
    toss?: boolean
    elected?: boolean
    status?: boolean
  }

  export type MatchesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "team1Id" | "team2Id" | "venue" | "date" | "winner" | "toss" | "elected" | "status", ExtArgs["result"]["matches"]>
  export type MatchesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    innings?: boolean | Matches$inningsArgs<ExtArgs>
    playerScore?: boolean | Matches$playerScoreArgs<ExtArgs>
    _count?: boolean | MatchesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MatchesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MatchesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MatchesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Matches"
    objects: {
      innings: Prisma.$InningPayload<ExtArgs>[]
      playerScore: Prisma.$PlayerScorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      team1Id: string
      team2Id: string
      venue: string
      date: Date
      winner: $Enums.MatchesWinner
      toss: $Enums.MatchesWinner
      elected: $Enums.MatchTossElection
      status: $Enums.TournamentStatus
    }, ExtArgs["result"]["matches"]>
    composites: {}
  }

  type MatchesGetPayload<S extends boolean | null | undefined | MatchesDefaultArgs> = $Result.GetResult<Prisma.$MatchesPayload, S>

  type MatchesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchesCountAggregateInputType | true
    }

  export interface MatchesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Matches'], meta: { name: 'Matches' } }
    /**
     * Find zero or one Matches that matches the filter.
     * @param {MatchesFindUniqueArgs} args - Arguments to find a Matches
     * @example
     * // Get one Matches
     * const matches = await prisma.matches.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchesFindUniqueArgs>(args: SelectSubset<T, MatchesFindUniqueArgs<ExtArgs>>): Prisma__MatchesClient<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Matches that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchesFindUniqueOrThrowArgs} args - Arguments to find a Matches
     * @example
     * // Get one Matches
     * const matches = await prisma.matches.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchesFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchesClient<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchesFindFirstArgs} args - Arguments to find a Matches
     * @example
     * // Get one Matches
     * const matches = await prisma.matches.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchesFindFirstArgs>(args?: SelectSubset<T, MatchesFindFirstArgs<ExtArgs>>): Prisma__MatchesClient<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Matches that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchesFindFirstOrThrowArgs} args - Arguments to find a Matches
     * @example
     * // Get one Matches
     * const matches = await prisma.matches.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchesFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchesFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchesClient<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.matches.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.matches.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchesWithIdOnly = await prisma.matches.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchesFindManyArgs>(args?: SelectSubset<T, MatchesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Matches.
     * @param {MatchesCreateArgs} args - Arguments to create a Matches.
     * @example
     * // Create one Matches
     * const Matches = await prisma.matches.create({
     *   data: {
     *     // ... data to create a Matches
     *   }
     * })
     * 
     */
    create<T extends MatchesCreateArgs>(args: SelectSubset<T, MatchesCreateArgs<ExtArgs>>): Prisma__MatchesClient<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matches.
     * @param {MatchesCreateManyArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const matches = await prisma.matches.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchesCreateManyArgs>(args?: SelectSubset<T, MatchesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matches and returns the data saved in the database.
     * @param {MatchesCreateManyAndReturnArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const matches = await prisma.matches.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matches and only return the `id`
     * const matchesWithIdOnly = await prisma.matches.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchesCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Matches.
     * @param {MatchesDeleteArgs} args - Arguments to delete one Matches.
     * @example
     * // Delete one Matches
     * const Matches = await prisma.matches.delete({
     *   where: {
     *     // ... filter to delete one Matches
     *   }
     * })
     * 
     */
    delete<T extends MatchesDeleteArgs>(args: SelectSubset<T, MatchesDeleteArgs<ExtArgs>>): Prisma__MatchesClient<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Matches.
     * @param {MatchesUpdateArgs} args - Arguments to update one Matches.
     * @example
     * // Update one Matches
     * const matches = await prisma.matches.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchesUpdateArgs>(args: SelectSubset<T, MatchesUpdateArgs<ExtArgs>>): Prisma__MatchesClient<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matches.
     * @param {MatchesDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.matches.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchesDeleteManyArgs>(args?: SelectSubset<T, MatchesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const matches = await prisma.matches.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchesUpdateManyArgs>(args: SelectSubset<T, MatchesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches and returns the data updated in the database.
     * @param {MatchesUpdateManyAndReturnArgs} args - Arguments to update many Matches.
     * @example
     * // Update many Matches
     * const matches = await prisma.matches.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Matches and only return the `id`
     * const matchesWithIdOnly = await prisma.matches.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatchesUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Matches.
     * @param {MatchesUpsertArgs} args - Arguments to update or create a Matches.
     * @example
     * // Update or create a Matches
     * const matches = await prisma.matches.upsert({
     *   create: {
     *     // ... data to create a Matches
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Matches we want to update
     *   }
     * })
     */
    upsert<T extends MatchesUpsertArgs>(args: SelectSubset<T, MatchesUpsertArgs<ExtArgs>>): Prisma__MatchesClient<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchesCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.matches.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends MatchesCountArgs>(
      args?: Subset<T, MatchesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchesAggregateArgs>(args: Subset<T, MatchesAggregateArgs>): Prisma.PrismaPromise<GetMatchesAggregateType<T>>

    /**
     * Group by Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchesGroupByArgs} args - Group by arguments.
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
      T extends MatchesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchesGroupByArgs['orderBy'] }
        : { orderBy?: MatchesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatchesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Matches model
   */
  readonly fields: MatchesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Matches.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    innings<T extends Matches$inningsArgs<ExtArgs> = {}>(args?: Subset<T, Matches$inningsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    playerScore<T extends Matches$playerScoreArgs<ExtArgs> = {}>(args?: Subset<T, Matches$playerScoreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Matches model
   */
  interface MatchesFieldRefs {
    readonly id: FieldRef<"Matches", 'String'>
    readonly team1Id: FieldRef<"Matches", 'String'>
    readonly team2Id: FieldRef<"Matches", 'String'>
    readonly venue: FieldRef<"Matches", 'String'>
    readonly date: FieldRef<"Matches", 'DateTime'>
    readonly winner: FieldRef<"Matches", 'MatchesWinner'>
    readonly toss: FieldRef<"Matches", 'MatchesWinner'>
    readonly elected: FieldRef<"Matches", 'MatchTossElection'>
    readonly status: FieldRef<"Matches", 'TournamentStatus'>
  }
    

  // Custom InputTypes
  /**
   * Matches findUnique
   */
  export type MatchesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where: MatchesWhereUniqueInput
  }

  /**
   * Matches findUniqueOrThrow
   */
  export type MatchesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where: MatchesWhereUniqueInput
  }

  /**
   * Matches findFirst
   */
  export type MatchesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchesOrderByWithRelationInput | MatchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchesScalarFieldEnum | MatchesScalarFieldEnum[]
  }

  /**
   * Matches findFirstOrThrow
   */
  export type MatchesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchesOrderByWithRelationInput | MatchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchesScalarFieldEnum | MatchesScalarFieldEnum[]
  }

  /**
   * Matches findMany
   */
  export type MatchesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchesOrderByWithRelationInput | MatchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matches.
     */
    cursor?: MatchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    distinct?: MatchesScalarFieldEnum | MatchesScalarFieldEnum[]
  }

  /**
   * Matches create
   */
  export type MatchesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesInclude<ExtArgs> | null
    /**
     * The data needed to create a Matches.
     */
    data: XOR<MatchesCreateInput, MatchesUncheckedCreateInput>
  }

  /**
   * Matches createMany
   */
  export type MatchesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matches.
     */
    data: MatchesCreateManyInput | MatchesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Matches createManyAndReturn
   */
  export type MatchesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * The data used to create many Matches.
     */
    data: MatchesCreateManyInput | MatchesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Matches update
   */
  export type MatchesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesInclude<ExtArgs> | null
    /**
     * The data needed to update a Matches.
     */
    data: XOR<MatchesUpdateInput, MatchesUncheckedUpdateInput>
    /**
     * Choose, which Matches to update.
     */
    where: MatchesWhereUniqueInput
  }

  /**
   * Matches updateMany
   */
  export type MatchesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchesUpdateManyMutationInput, MatchesUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchesWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
  }

  /**
   * Matches updateManyAndReturn
   */
  export type MatchesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchesUpdateManyMutationInput, MatchesUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchesWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
  }

  /**
   * Matches upsert
   */
  export type MatchesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesInclude<ExtArgs> | null
    /**
     * The filter to search for the Matches to update in case it exists.
     */
    where: MatchesWhereUniqueInput
    /**
     * In case the Matches found by the `where` argument doesn't exist, create a new Matches with this data.
     */
    create: XOR<MatchesCreateInput, MatchesUncheckedCreateInput>
    /**
     * In case the Matches was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchesUpdateInput, MatchesUncheckedUpdateInput>
  }

  /**
   * Matches delete
   */
  export type MatchesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesInclude<ExtArgs> | null
    /**
     * Filter which Matches to delete.
     */
    where: MatchesWhereUniqueInput
  }

  /**
   * Matches deleteMany
   */
  export type MatchesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matches to delete
     */
    where?: MatchesWhereInput
    /**
     * Limit how many Matches to delete.
     */
    limit?: number
  }

  /**
   * Matches.innings
   */
  export type Matches$inningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inning
     */
    select?: InningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inning
     */
    omit?: InningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InningInclude<ExtArgs> | null
    where?: InningWhereInput
    orderBy?: InningOrderByWithRelationInput | InningOrderByWithRelationInput[]
    cursor?: InningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InningScalarFieldEnum | InningScalarFieldEnum[]
  }

  /**
   * Matches.playerScore
   */
  export type Matches$playerScoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerScore
     */
    select?: PlayerScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerScore
     */
    omit?: PlayerScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerScoreInclude<ExtArgs> | null
    where?: PlayerScoreWhereInput
    orderBy?: PlayerScoreOrderByWithRelationInput | PlayerScoreOrderByWithRelationInput[]
    cursor?: PlayerScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerScoreScalarFieldEnum | PlayerScoreScalarFieldEnum[]
  }

  /**
   * Matches without action
   */
  export type MatchesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesInclude<ExtArgs> | null
  }


  /**
   * Model Inning
   */

  export type AggregateInning = {
    _count: InningCountAggregateOutputType | null
    _avg: InningAvgAggregateOutputType | null
    _sum: InningSumAggregateOutputType | null
    _min: InningMinAggregateOutputType | null
    _max: InningMaxAggregateOutputType | null
  }

  export type InningAvgAggregateOutputType = {
    score: number | null
    wickets: number | null
    extras: number | null
  }

  export type InningSumAggregateOutputType = {
    score: number | null
    wickets: number | null
    extras: number | null
  }

  export type InningMinAggregateOutputType = {
    id: string | null
    whichInning: $Enums.WhichInning | null
    score: number | null
    wickets: number | null
    extras: number | null
    batsman1: string | null
    batsman2: string | null
    bowler: string | null
    matchId: string | null
  }

  export type InningMaxAggregateOutputType = {
    id: string | null
    whichInning: $Enums.WhichInning | null
    score: number | null
    wickets: number | null
    extras: number | null
    batsman1: string | null
    batsman2: string | null
    bowler: string | null
    matchId: string | null
  }

  export type InningCountAggregateOutputType = {
    id: number
    whichInning: number
    score: number
    wickets: number
    extras: number
    batsman1: number
    batsman2: number
    bowler: number
    matchId: number
    _all: number
  }


  export type InningAvgAggregateInputType = {
    score?: true
    wickets?: true
    extras?: true
  }

  export type InningSumAggregateInputType = {
    score?: true
    wickets?: true
    extras?: true
  }

  export type InningMinAggregateInputType = {
    id?: true
    whichInning?: true
    score?: true
    wickets?: true
    extras?: true
    batsman1?: true
    batsman2?: true
    bowler?: true
    matchId?: true
  }

  export type InningMaxAggregateInputType = {
    id?: true
    whichInning?: true
    score?: true
    wickets?: true
    extras?: true
    batsman1?: true
    batsman2?: true
    bowler?: true
    matchId?: true
  }

  export type InningCountAggregateInputType = {
    id?: true
    whichInning?: true
    score?: true
    wickets?: true
    extras?: true
    batsman1?: true
    batsman2?: true
    bowler?: true
    matchId?: true
    _all?: true
  }

  export type InningAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inning to aggregate.
     */
    where?: InningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Innings to fetch.
     */
    orderBy?: InningOrderByWithRelationInput | InningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Innings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Innings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Innings
    **/
    _count?: true | InningCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InningAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InningSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InningMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InningMaxAggregateInputType
  }

  export type GetInningAggregateType<T extends InningAggregateArgs> = {
        [P in keyof T & keyof AggregateInning]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInning[P]>
      : GetScalarType<T[P], AggregateInning[P]>
  }




  export type InningGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InningWhereInput
    orderBy?: InningOrderByWithAggregationInput | InningOrderByWithAggregationInput[]
    by: InningScalarFieldEnum[] | InningScalarFieldEnum
    having?: InningScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InningCountAggregateInputType | true
    _avg?: InningAvgAggregateInputType
    _sum?: InningSumAggregateInputType
    _min?: InningMinAggregateInputType
    _max?: InningMaxAggregateInputType
  }

  export type InningGroupByOutputType = {
    id: string
    whichInning: $Enums.WhichInning
    score: number
    wickets: number
    extras: number
    batsman1: string | null
    batsman2: string | null
    bowler: string | null
    matchId: string
    _count: InningCountAggregateOutputType | null
    _avg: InningAvgAggregateOutputType | null
    _sum: InningSumAggregateOutputType | null
    _min: InningMinAggregateOutputType | null
    _max: InningMaxAggregateOutputType | null
  }

  type GetInningGroupByPayload<T extends InningGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InningGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InningGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InningGroupByOutputType[P]>
            : GetScalarType<T[P], InningGroupByOutputType[P]>
        }
      >
    >


  export type InningSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    whichInning?: boolean
    score?: boolean
    wickets?: boolean
    extras?: boolean
    batsman1?: boolean
    batsman2?: boolean
    bowler?: boolean
    matchId?: boolean
    match?: boolean | MatchesDefaultArgs<ExtArgs>
    balls?: boolean | Inning$ballsArgs<ExtArgs>
    _count?: boolean | InningCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inning"]>

  export type InningSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    whichInning?: boolean
    score?: boolean
    wickets?: boolean
    extras?: boolean
    batsman1?: boolean
    batsman2?: boolean
    bowler?: boolean
    matchId?: boolean
    match?: boolean | MatchesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inning"]>

  export type InningSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    whichInning?: boolean
    score?: boolean
    wickets?: boolean
    extras?: boolean
    batsman1?: boolean
    batsman2?: boolean
    bowler?: boolean
    matchId?: boolean
    match?: boolean | MatchesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inning"]>

  export type InningSelectScalar = {
    id?: boolean
    whichInning?: boolean
    score?: boolean
    wickets?: boolean
    extras?: boolean
    batsman1?: boolean
    batsman2?: boolean
    bowler?: boolean
    matchId?: boolean
  }

  export type InningOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "whichInning" | "score" | "wickets" | "extras" | "batsman1" | "batsman2" | "bowler" | "matchId", ExtArgs["result"]["inning"]>
  export type InningInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchesDefaultArgs<ExtArgs>
    balls?: boolean | Inning$ballsArgs<ExtArgs>
    _count?: boolean | InningCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InningIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchesDefaultArgs<ExtArgs>
  }
  export type InningIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchesDefaultArgs<ExtArgs>
  }

  export type $InningPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inning"
    objects: {
      match: Prisma.$MatchesPayload<ExtArgs>
      balls: Prisma.$BallsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      whichInning: $Enums.WhichInning
      score: number
      wickets: number
      extras: number
      batsman1: string | null
      batsman2: string | null
      bowler: string | null
      matchId: string
    }, ExtArgs["result"]["inning"]>
    composites: {}
  }

  type InningGetPayload<S extends boolean | null | undefined | InningDefaultArgs> = $Result.GetResult<Prisma.$InningPayload, S>

  type InningCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InningFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InningCountAggregateInputType | true
    }

  export interface InningDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inning'], meta: { name: 'Inning' } }
    /**
     * Find zero or one Inning that matches the filter.
     * @param {InningFindUniqueArgs} args - Arguments to find a Inning
     * @example
     * // Get one Inning
     * const inning = await prisma.inning.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InningFindUniqueArgs>(args: SelectSubset<T, InningFindUniqueArgs<ExtArgs>>): Prisma__InningClient<$Result.GetResult<Prisma.$InningPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inning that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InningFindUniqueOrThrowArgs} args - Arguments to find a Inning
     * @example
     * // Get one Inning
     * const inning = await prisma.inning.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InningFindUniqueOrThrowArgs>(args: SelectSubset<T, InningFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InningClient<$Result.GetResult<Prisma.$InningPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inning that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InningFindFirstArgs} args - Arguments to find a Inning
     * @example
     * // Get one Inning
     * const inning = await prisma.inning.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InningFindFirstArgs>(args?: SelectSubset<T, InningFindFirstArgs<ExtArgs>>): Prisma__InningClient<$Result.GetResult<Prisma.$InningPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inning that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InningFindFirstOrThrowArgs} args - Arguments to find a Inning
     * @example
     * // Get one Inning
     * const inning = await prisma.inning.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InningFindFirstOrThrowArgs>(args?: SelectSubset<T, InningFindFirstOrThrowArgs<ExtArgs>>): Prisma__InningClient<$Result.GetResult<Prisma.$InningPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Innings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InningFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Innings
     * const innings = await prisma.inning.findMany()
     * 
     * // Get first 10 Innings
     * const innings = await prisma.inning.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inningWithIdOnly = await prisma.inning.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InningFindManyArgs>(args?: SelectSubset<T, InningFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inning.
     * @param {InningCreateArgs} args - Arguments to create a Inning.
     * @example
     * // Create one Inning
     * const Inning = await prisma.inning.create({
     *   data: {
     *     // ... data to create a Inning
     *   }
     * })
     * 
     */
    create<T extends InningCreateArgs>(args: SelectSubset<T, InningCreateArgs<ExtArgs>>): Prisma__InningClient<$Result.GetResult<Prisma.$InningPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Innings.
     * @param {InningCreateManyArgs} args - Arguments to create many Innings.
     * @example
     * // Create many Innings
     * const inning = await prisma.inning.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InningCreateManyArgs>(args?: SelectSubset<T, InningCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Innings and returns the data saved in the database.
     * @param {InningCreateManyAndReturnArgs} args - Arguments to create many Innings.
     * @example
     * // Create many Innings
     * const inning = await prisma.inning.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Innings and only return the `id`
     * const inningWithIdOnly = await prisma.inning.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InningCreateManyAndReturnArgs>(args?: SelectSubset<T, InningCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InningPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inning.
     * @param {InningDeleteArgs} args - Arguments to delete one Inning.
     * @example
     * // Delete one Inning
     * const Inning = await prisma.inning.delete({
     *   where: {
     *     // ... filter to delete one Inning
     *   }
     * })
     * 
     */
    delete<T extends InningDeleteArgs>(args: SelectSubset<T, InningDeleteArgs<ExtArgs>>): Prisma__InningClient<$Result.GetResult<Prisma.$InningPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inning.
     * @param {InningUpdateArgs} args - Arguments to update one Inning.
     * @example
     * // Update one Inning
     * const inning = await prisma.inning.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InningUpdateArgs>(args: SelectSubset<T, InningUpdateArgs<ExtArgs>>): Prisma__InningClient<$Result.GetResult<Prisma.$InningPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Innings.
     * @param {InningDeleteManyArgs} args - Arguments to filter Innings to delete.
     * @example
     * // Delete a few Innings
     * const { count } = await prisma.inning.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InningDeleteManyArgs>(args?: SelectSubset<T, InningDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Innings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InningUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Innings
     * const inning = await prisma.inning.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InningUpdateManyArgs>(args: SelectSubset<T, InningUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Innings and returns the data updated in the database.
     * @param {InningUpdateManyAndReturnArgs} args - Arguments to update many Innings.
     * @example
     * // Update many Innings
     * const inning = await prisma.inning.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Innings and only return the `id`
     * const inningWithIdOnly = await prisma.inning.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InningUpdateManyAndReturnArgs>(args: SelectSubset<T, InningUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InningPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inning.
     * @param {InningUpsertArgs} args - Arguments to update or create a Inning.
     * @example
     * // Update or create a Inning
     * const inning = await prisma.inning.upsert({
     *   create: {
     *     // ... data to create a Inning
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inning we want to update
     *   }
     * })
     */
    upsert<T extends InningUpsertArgs>(args: SelectSubset<T, InningUpsertArgs<ExtArgs>>): Prisma__InningClient<$Result.GetResult<Prisma.$InningPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Innings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InningCountArgs} args - Arguments to filter Innings to count.
     * @example
     * // Count the number of Innings
     * const count = await prisma.inning.count({
     *   where: {
     *     // ... the filter for the Innings we want to count
     *   }
     * })
    **/
    count<T extends InningCountArgs>(
      args?: Subset<T, InningCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InningCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InningAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InningAggregateArgs>(args: Subset<T, InningAggregateArgs>): Prisma.PrismaPromise<GetInningAggregateType<T>>

    /**
     * Group by Inning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InningGroupByArgs} args - Group by arguments.
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
      T extends InningGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InningGroupByArgs['orderBy'] }
        : { orderBy?: InningGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InningGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInningGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inning model
   */
  readonly fields: InningFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inning.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InningClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    match<T extends MatchesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatchesDefaultArgs<ExtArgs>>): Prisma__MatchesClient<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    balls<T extends Inning$ballsArgs<ExtArgs> = {}>(args?: Subset<T, Inning$ballsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BallsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Inning model
   */
  interface InningFieldRefs {
    readonly id: FieldRef<"Inning", 'String'>
    readonly whichInning: FieldRef<"Inning", 'WhichInning'>
    readonly score: FieldRef<"Inning", 'Int'>
    readonly wickets: FieldRef<"Inning", 'Int'>
    readonly extras: FieldRef<"Inning", 'Int'>
    readonly batsman1: FieldRef<"Inning", 'String'>
    readonly batsman2: FieldRef<"Inning", 'String'>
    readonly bowler: FieldRef<"Inning", 'String'>
    readonly matchId: FieldRef<"Inning", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Inning findUnique
   */
  export type InningFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inning
     */
    select?: InningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inning
     */
    omit?: InningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InningInclude<ExtArgs> | null
    /**
     * Filter, which Inning to fetch.
     */
    where: InningWhereUniqueInput
  }

  /**
   * Inning findUniqueOrThrow
   */
  export type InningFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inning
     */
    select?: InningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inning
     */
    omit?: InningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InningInclude<ExtArgs> | null
    /**
     * Filter, which Inning to fetch.
     */
    where: InningWhereUniqueInput
  }

  /**
   * Inning findFirst
   */
  export type InningFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inning
     */
    select?: InningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inning
     */
    omit?: InningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InningInclude<ExtArgs> | null
    /**
     * Filter, which Inning to fetch.
     */
    where?: InningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Innings to fetch.
     */
    orderBy?: InningOrderByWithRelationInput | InningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Innings.
     */
    cursor?: InningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Innings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Innings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Innings.
     */
    distinct?: InningScalarFieldEnum | InningScalarFieldEnum[]
  }

  /**
   * Inning findFirstOrThrow
   */
  export type InningFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inning
     */
    select?: InningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inning
     */
    omit?: InningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InningInclude<ExtArgs> | null
    /**
     * Filter, which Inning to fetch.
     */
    where?: InningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Innings to fetch.
     */
    orderBy?: InningOrderByWithRelationInput | InningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Innings.
     */
    cursor?: InningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Innings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Innings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Innings.
     */
    distinct?: InningScalarFieldEnum | InningScalarFieldEnum[]
  }

  /**
   * Inning findMany
   */
  export type InningFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inning
     */
    select?: InningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inning
     */
    omit?: InningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InningInclude<ExtArgs> | null
    /**
     * Filter, which Innings to fetch.
     */
    where?: InningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Innings to fetch.
     */
    orderBy?: InningOrderByWithRelationInput | InningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Innings.
     */
    cursor?: InningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Innings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Innings.
     */
    skip?: number
    distinct?: InningScalarFieldEnum | InningScalarFieldEnum[]
  }

  /**
   * Inning create
   */
  export type InningCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inning
     */
    select?: InningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inning
     */
    omit?: InningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InningInclude<ExtArgs> | null
    /**
     * The data needed to create a Inning.
     */
    data: XOR<InningCreateInput, InningUncheckedCreateInput>
  }

  /**
   * Inning createMany
   */
  export type InningCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Innings.
     */
    data: InningCreateManyInput | InningCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inning createManyAndReturn
   */
  export type InningCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inning
     */
    select?: InningSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inning
     */
    omit?: InningOmit<ExtArgs> | null
    /**
     * The data used to create many Innings.
     */
    data: InningCreateManyInput | InningCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InningIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inning update
   */
  export type InningUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inning
     */
    select?: InningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inning
     */
    omit?: InningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InningInclude<ExtArgs> | null
    /**
     * The data needed to update a Inning.
     */
    data: XOR<InningUpdateInput, InningUncheckedUpdateInput>
    /**
     * Choose, which Inning to update.
     */
    where: InningWhereUniqueInput
  }

  /**
   * Inning updateMany
   */
  export type InningUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Innings.
     */
    data: XOR<InningUpdateManyMutationInput, InningUncheckedUpdateManyInput>
    /**
     * Filter which Innings to update
     */
    where?: InningWhereInput
    /**
     * Limit how many Innings to update.
     */
    limit?: number
  }

  /**
   * Inning updateManyAndReturn
   */
  export type InningUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inning
     */
    select?: InningSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inning
     */
    omit?: InningOmit<ExtArgs> | null
    /**
     * The data used to update Innings.
     */
    data: XOR<InningUpdateManyMutationInput, InningUncheckedUpdateManyInput>
    /**
     * Filter which Innings to update
     */
    where?: InningWhereInput
    /**
     * Limit how many Innings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InningIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inning upsert
   */
  export type InningUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inning
     */
    select?: InningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inning
     */
    omit?: InningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InningInclude<ExtArgs> | null
    /**
     * The filter to search for the Inning to update in case it exists.
     */
    where: InningWhereUniqueInput
    /**
     * In case the Inning found by the `where` argument doesn't exist, create a new Inning with this data.
     */
    create: XOR<InningCreateInput, InningUncheckedCreateInput>
    /**
     * In case the Inning was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InningUpdateInput, InningUncheckedUpdateInput>
  }

  /**
   * Inning delete
   */
  export type InningDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inning
     */
    select?: InningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inning
     */
    omit?: InningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InningInclude<ExtArgs> | null
    /**
     * Filter which Inning to delete.
     */
    where: InningWhereUniqueInput
  }

  /**
   * Inning deleteMany
   */
  export type InningDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Innings to delete
     */
    where?: InningWhereInput
    /**
     * Limit how many Innings to delete.
     */
    limit?: number
  }

  /**
   * Inning.balls
   */
  export type Inning$ballsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balls
     */
    select?: BallsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balls
     */
    omit?: BallsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BallsInclude<ExtArgs> | null
    where?: BallsWhereInput
    orderBy?: BallsOrderByWithRelationInput | BallsOrderByWithRelationInput[]
    cursor?: BallsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BallsScalarFieldEnum | BallsScalarFieldEnum[]
  }

  /**
   * Inning without action
   */
  export type InningDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inning
     */
    select?: InningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inning
     */
    omit?: InningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InningInclude<ExtArgs> | null
  }


  /**
   * Model Balls
   */

  export type AggregateBalls = {
    _count: BallsCountAggregateOutputType | null
    _avg: BallsAvgAggregateOutputType | null
    _sum: BallsSumAggregateOutputType | null
    _min: BallsMinAggregateOutputType | null
    _max: BallsMaxAggregateOutputType | null
  }

  export type BallsAvgAggregateOutputType = {
    ballNo: number | null
  }

  export type BallsSumAggregateOutputType = {
    ballNo: number | null
  }

  export type BallsMinAggregateOutputType = {
    id: string | null
    ballNo: number | null
    whatHappend: $Enums.WhatHappend | null
    bowler: string | null
    batsman: string | null
    catch: string | null
    runout: string | null
    inningId: string | null
  }

  export type BallsMaxAggregateOutputType = {
    id: string | null
    ballNo: number | null
    whatHappend: $Enums.WhatHappend | null
    bowler: string | null
    batsman: string | null
    catch: string | null
    runout: string | null
    inningId: string | null
  }

  export type BallsCountAggregateOutputType = {
    id: number
    ballNo: number
    whatHappend: number
    bowler: number
    batsman: number
    catch: number
    runout: number
    inningId: number
    _all: number
  }


  export type BallsAvgAggregateInputType = {
    ballNo?: true
  }

  export type BallsSumAggregateInputType = {
    ballNo?: true
  }

  export type BallsMinAggregateInputType = {
    id?: true
    ballNo?: true
    whatHappend?: true
    bowler?: true
    batsman?: true
    catch?: true
    runout?: true
    inningId?: true
  }

  export type BallsMaxAggregateInputType = {
    id?: true
    ballNo?: true
    whatHappend?: true
    bowler?: true
    batsman?: true
    catch?: true
    runout?: true
    inningId?: true
  }

  export type BallsCountAggregateInputType = {
    id?: true
    ballNo?: true
    whatHappend?: true
    bowler?: true
    batsman?: true
    catch?: true
    runout?: true
    inningId?: true
    _all?: true
  }

  export type BallsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Balls to aggregate.
     */
    where?: BallsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balls to fetch.
     */
    orderBy?: BallsOrderByWithRelationInput | BallsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BallsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Balls
    **/
    _count?: true | BallsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BallsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BallsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BallsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BallsMaxAggregateInputType
  }

  export type GetBallsAggregateType<T extends BallsAggregateArgs> = {
        [P in keyof T & keyof AggregateBalls]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBalls[P]>
      : GetScalarType<T[P], AggregateBalls[P]>
  }




  export type BallsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BallsWhereInput
    orderBy?: BallsOrderByWithAggregationInput | BallsOrderByWithAggregationInput[]
    by: BallsScalarFieldEnum[] | BallsScalarFieldEnum
    having?: BallsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BallsCountAggregateInputType | true
    _avg?: BallsAvgAggregateInputType
    _sum?: BallsSumAggregateInputType
    _min?: BallsMinAggregateInputType
    _max?: BallsMaxAggregateInputType
  }

  export type BallsGroupByOutputType = {
    id: string
    ballNo: number
    whatHappend: $Enums.WhatHappend
    bowler: string
    batsman: string
    catch: string | null
    runout: string | null
    inningId: string
    _count: BallsCountAggregateOutputType | null
    _avg: BallsAvgAggregateOutputType | null
    _sum: BallsSumAggregateOutputType | null
    _min: BallsMinAggregateOutputType | null
    _max: BallsMaxAggregateOutputType | null
  }

  type GetBallsGroupByPayload<T extends BallsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BallsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BallsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BallsGroupByOutputType[P]>
            : GetScalarType<T[P], BallsGroupByOutputType[P]>
        }
      >
    >


  export type BallsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ballNo?: boolean
    whatHappend?: boolean
    bowler?: boolean
    batsman?: boolean
    catch?: boolean
    runout?: boolean
    inningId?: boolean
    inning?: boolean | InningDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balls"]>

  export type BallsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ballNo?: boolean
    whatHappend?: boolean
    bowler?: boolean
    batsman?: boolean
    catch?: boolean
    runout?: boolean
    inningId?: boolean
    inning?: boolean | InningDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balls"]>

  export type BallsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ballNo?: boolean
    whatHappend?: boolean
    bowler?: boolean
    batsman?: boolean
    catch?: boolean
    runout?: boolean
    inningId?: boolean
    inning?: boolean | InningDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balls"]>

  export type BallsSelectScalar = {
    id?: boolean
    ballNo?: boolean
    whatHappend?: boolean
    bowler?: boolean
    batsman?: boolean
    catch?: boolean
    runout?: boolean
    inningId?: boolean
  }

  export type BallsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ballNo" | "whatHappend" | "bowler" | "batsman" | "catch" | "runout" | "inningId", ExtArgs["result"]["balls"]>
  export type BallsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inning?: boolean | InningDefaultArgs<ExtArgs>
  }
  export type BallsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inning?: boolean | InningDefaultArgs<ExtArgs>
  }
  export type BallsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inning?: boolean | InningDefaultArgs<ExtArgs>
  }

  export type $BallsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Balls"
    objects: {
      inning: Prisma.$InningPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ballNo: number
      whatHappend: $Enums.WhatHappend
      bowler: string
      batsman: string
      catch: string | null
      runout: string | null
      inningId: string
    }, ExtArgs["result"]["balls"]>
    composites: {}
  }

  type BallsGetPayload<S extends boolean | null | undefined | BallsDefaultArgs> = $Result.GetResult<Prisma.$BallsPayload, S>

  type BallsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BallsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BallsCountAggregateInputType | true
    }

  export interface BallsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Balls'], meta: { name: 'Balls' } }
    /**
     * Find zero or one Balls that matches the filter.
     * @param {BallsFindUniqueArgs} args - Arguments to find a Balls
     * @example
     * // Get one Balls
     * const balls = await prisma.balls.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BallsFindUniqueArgs>(args: SelectSubset<T, BallsFindUniqueArgs<ExtArgs>>): Prisma__BallsClient<$Result.GetResult<Prisma.$BallsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Balls that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BallsFindUniqueOrThrowArgs} args - Arguments to find a Balls
     * @example
     * // Get one Balls
     * const balls = await prisma.balls.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BallsFindUniqueOrThrowArgs>(args: SelectSubset<T, BallsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BallsClient<$Result.GetResult<Prisma.$BallsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Balls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BallsFindFirstArgs} args - Arguments to find a Balls
     * @example
     * // Get one Balls
     * const balls = await prisma.balls.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BallsFindFirstArgs>(args?: SelectSubset<T, BallsFindFirstArgs<ExtArgs>>): Prisma__BallsClient<$Result.GetResult<Prisma.$BallsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Balls that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BallsFindFirstOrThrowArgs} args - Arguments to find a Balls
     * @example
     * // Get one Balls
     * const balls = await prisma.balls.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BallsFindFirstOrThrowArgs>(args?: SelectSubset<T, BallsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BallsClient<$Result.GetResult<Prisma.$BallsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Balls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BallsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Balls
     * const balls = await prisma.balls.findMany()
     * 
     * // Get first 10 Balls
     * const balls = await prisma.balls.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ballsWithIdOnly = await prisma.balls.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BallsFindManyArgs>(args?: SelectSubset<T, BallsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BallsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Balls.
     * @param {BallsCreateArgs} args - Arguments to create a Balls.
     * @example
     * // Create one Balls
     * const Balls = await prisma.balls.create({
     *   data: {
     *     // ... data to create a Balls
     *   }
     * })
     * 
     */
    create<T extends BallsCreateArgs>(args: SelectSubset<T, BallsCreateArgs<ExtArgs>>): Prisma__BallsClient<$Result.GetResult<Prisma.$BallsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Balls.
     * @param {BallsCreateManyArgs} args - Arguments to create many Balls.
     * @example
     * // Create many Balls
     * const balls = await prisma.balls.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BallsCreateManyArgs>(args?: SelectSubset<T, BallsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Balls and returns the data saved in the database.
     * @param {BallsCreateManyAndReturnArgs} args - Arguments to create many Balls.
     * @example
     * // Create many Balls
     * const balls = await prisma.balls.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Balls and only return the `id`
     * const ballsWithIdOnly = await prisma.balls.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BallsCreateManyAndReturnArgs>(args?: SelectSubset<T, BallsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BallsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Balls.
     * @param {BallsDeleteArgs} args - Arguments to delete one Balls.
     * @example
     * // Delete one Balls
     * const Balls = await prisma.balls.delete({
     *   where: {
     *     // ... filter to delete one Balls
     *   }
     * })
     * 
     */
    delete<T extends BallsDeleteArgs>(args: SelectSubset<T, BallsDeleteArgs<ExtArgs>>): Prisma__BallsClient<$Result.GetResult<Prisma.$BallsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Balls.
     * @param {BallsUpdateArgs} args - Arguments to update one Balls.
     * @example
     * // Update one Balls
     * const balls = await prisma.balls.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BallsUpdateArgs>(args: SelectSubset<T, BallsUpdateArgs<ExtArgs>>): Prisma__BallsClient<$Result.GetResult<Prisma.$BallsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Balls.
     * @param {BallsDeleteManyArgs} args - Arguments to filter Balls to delete.
     * @example
     * // Delete a few Balls
     * const { count } = await prisma.balls.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BallsDeleteManyArgs>(args?: SelectSubset<T, BallsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Balls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BallsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Balls
     * const balls = await prisma.balls.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BallsUpdateManyArgs>(args: SelectSubset<T, BallsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Balls and returns the data updated in the database.
     * @param {BallsUpdateManyAndReturnArgs} args - Arguments to update many Balls.
     * @example
     * // Update many Balls
     * const balls = await prisma.balls.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Balls and only return the `id`
     * const ballsWithIdOnly = await prisma.balls.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BallsUpdateManyAndReturnArgs>(args: SelectSubset<T, BallsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BallsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Balls.
     * @param {BallsUpsertArgs} args - Arguments to update or create a Balls.
     * @example
     * // Update or create a Balls
     * const balls = await prisma.balls.upsert({
     *   create: {
     *     // ... data to create a Balls
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Balls we want to update
     *   }
     * })
     */
    upsert<T extends BallsUpsertArgs>(args: SelectSubset<T, BallsUpsertArgs<ExtArgs>>): Prisma__BallsClient<$Result.GetResult<Prisma.$BallsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Balls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BallsCountArgs} args - Arguments to filter Balls to count.
     * @example
     * // Count the number of Balls
     * const count = await prisma.balls.count({
     *   where: {
     *     // ... the filter for the Balls we want to count
     *   }
     * })
    **/
    count<T extends BallsCountArgs>(
      args?: Subset<T, BallsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BallsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Balls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BallsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BallsAggregateArgs>(args: Subset<T, BallsAggregateArgs>): Prisma.PrismaPromise<GetBallsAggregateType<T>>

    /**
     * Group by Balls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BallsGroupByArgs} args - Group by arguments.
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
      T extends BallsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BallsGroupByArgs['orderBy'] }
        : { orderBy?: BallsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BallsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBallsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Balls model
   */
  readonly fields: BallsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Balls.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BallsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inning<T extends InningDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InningDefaultArgs<ExtArgs>>): Prisma__InningClient<$Result.GetResult<Prisma.$InningPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Balls model
   */
  interface BallsFieldRefs {
    readonly id: FieldRef<"Balls", 'String'>
    readonly ballNo: FieldRef<"Balls", 'Int'>
    readonly whatHappend: FieldRef<"Balls", 'WhatHappend'>
    readonly bowler: FieldRef<"Balls", 'String'>
    readonly batsman: FieldRef<"Balls", 'String'>
    readonly catch: FieldRef<"Balls", 'String'>
    readonly runout: FieldRef<"Balls", 'String'>
    readonly inningId: FieldRef<"Balls", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Balls findUnique
   */
  export type BallsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balls
     */
    select?: BallsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balls
     */
    omit?: BallsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BallsInclude<ExtArgs> | null
    /**
     * Filter, which Balls to fetch.
     */
    where: BallsWhereUniqueInput
  }

  /**
   * Balls findUniqueOrThrow
   */
  export type BallsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balls
     */
    select?: BallsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balls
     */
    omit?: BallsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BallsInclude<ExtArgs> | null
    /**
     * Filter, which Balls to fetch.
     */
    where: BallsWhereUniqueInput
  }

  /**
   * Balls findFirst
   */
  export type BallsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balls
     */
    select?: BallsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balls
     */
    omit?: BallsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BallsInclude<ExtArgs> | null
    /**
     * Filter, which Balls to fetch.
     */
    where?: BallsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balls to fetch.
     */
    orderBy?: BallsOrderByWithRelationInput | BallsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Balls.
     */
    cursor?: BallsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Balls.
     */
    distinct?: BallsScalarFieldEnum | BallsScalarFieldEnum[]
  }

  /**
   * Balls findFirstOrThrow
   */
  export type BallsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balls
     */
    select?: BallsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balls
     */
    omit?: BallsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BallsInclude<ExtArgs> | null
    /**
     * Filter, which Balls to fetch.
     */
    where?: BallsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balls to fetch.
     */
    orderBy?: BallsOrderByWithRelationInput | BallsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Balls.
     */
    cursor?: BallsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Balls.
     */
    distinct?: BallsScalarFieldEnum | BallsScalarFieldEnum[]
  }

  /**
   * Balls findMany
   */
  export type BallsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balls
     */
    select?: BallsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balls
     */
    omit?: BallsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BallsInclude<ExtArgs> | null
    /**
     * Filter, which Balls to fetch.
     */
    where?: BallsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balls to fetch.
     */
    orderBy?: BallsOrderByWithRelationInput | BallsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Balls.
     */
    cursor?: BallsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balls.
     */
    skip?: number
    distinct?: BallsScalarFieldEnum | BallsScalarFieldEnum[]
  }

  /**
   * Balls create
   */
  export type BallsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balls
     */
    select?: BallsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balls
     */
    omit?: BallsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BallsInclude<ExtArgs> | null
    /**
     * The data needed to create a Balls.
     */
    data: XOR<BallsCreateInput, BallsUncheckedCreateInput>
  }

  /**
   * Balls createMany
   */
  export type BallsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Balls.
     */
    data: BallsCreateManyInput | BallsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Balls createManyAndReturn
   */
  export type BallsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balls
     */
    select?: BallsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Balls
     */
    omit?: BallsOmit<ExtArgs> | null
    /**
     * The data used to create many Balls.
     */
    data: BallsCreateManyInput | BallsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BallsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Balls update
   */
  export type BallsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balls
     */
    select?: BallsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balls
     */
    omit?: BallsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BallsInclude<ExtArgs> | null
    /**
     * The data needed to update a Balls.
     */
    data: XOR<BallsUpdateInput, BallsUncheckedUpdateInput>
    /**
     * Choose, which Balls to update.
     */
    where: BallsWhereUniqueInput
  }

  /**
   * Balls updateMany
   */
  export type BallsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Balls.
     */
    data: XOR<BallsUpdateManyMutationInput, BallsUncheckedUpdateManyInput>
    /**
     * Filter which Balls to update
     */
    where?: BallsWhereInput
    /**
     * Limit how many Balls to update.
     */
    limit?: number
  }

  /**
   * Balls updateManyAndReturn
   */
  export type BallsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balls
     */
    select?: BallsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Balls
     */
    omit?: BallsOmit<ExtArgs> | null
    /**
     * The data used to update Balls.
     */
    data: XOR<BallsUpdateManyMutationInput, BallsUncheckedUpdateManyInput>
    /**
     * Filter which Balls to update
     */
    where?: BallsWhereInput
    /**
     * Limit how many Balls to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BallsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Balls upsert
   */
  export type BallsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balls
     */
    select?: BallsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balls
     */
    omit?: BallsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BallsInclude<ExtArgs> | null
    /**
     * The filter to search for the Balls to update in case it exists.
     */
    where: BallsWhereUniqueInput
    /**
     * In case the Balls found by the `where` argument doesn't exist, create a new Balls with this data.
     */
    create: XOR<BallsCreateInput, BallsUncheckedCreateInput>
    /**
     * In case the Balls was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BallsUpdateInput, BallsUncheckedUpdateInput>
  }

  /**
   * Balls delete
   */
  export type BallsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balls
     */
    select?: BallsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balls
     */
    omit?: BallsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BallsInclude<ExtArgs> | null
    /**
     * Filter which Balls to delete.
     */
    where: BallsWhereUniqueInput
  }

  /**
   * Balls deleteMany
   */
  export type BallsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Balls to delete
     */
    where?: BallsWhereInput
    /**
     * Limit how many Balls to delete.
     */
    limit?: number
  }

  /**
   * Balls without action
   */
  export type BallsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balls
     */
    select?: BallsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balls
     */
    omit?: BallsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BallsInclude<ExtArgs> | null
  }


  /**
   * Model Tournament
   */

  export type AggregateTournament = {
    _count: TournamentCountAggregateOutputType | null
    _avg: TournamentAvgAggregateOutputType | null
    _sum: TournamentSumAggregateOutputType | null
    _min: TournamentMinAggregateOutputType | null
    _max: TournamentMaxAggregateOutputType | null
  }

  export type TournamentAvgAggregateOutputType = {
    maxLimit: number | null
    entryFee: number | null
    prizePool: number | null
    teamsJoined: number | null
  }

  export type TournamentSumAggregateOutputType = {
    maxLimit: number | null
    entryFee: number | null
    prizePool: number | null
    teamsJoined: number | null
  }

  export type TournamentMinAggregateOutputType = {
    id: string | null
    maxLimit: number | null
    entryFee: number | null
    prizePool: number | null
    winner: string | null
    ownerId: string | null
    teamsJoined: number | null
    status: $Enums.TournamentStatus | null
  }

  export type TournamentMaxAggregateOutputType = {
    id: string | null
    maxLimit: number | null
    entryFee: number | null
    prizePool: number | null
    winner: string | null
    ownerId: string | null
    teamsJoined: number | null
    status: $Enums.TournamentStatus | null
  }

  export type TournamentCountAggregateOutputType = {
    id: number
    maxLimit: number
    entryFee: number
    prizePool: number
    winner: number
    ownerId: number
    teamsJoined: number
    status: number
    _all: number
  }


  export type TournamentAvgAggregateInputType = {
    maxLimit?: true
    entryFee?: true
    prizePool?: true
    teamsJoined?: true
  }

  export type TournamentSumAggregateInputType = {
    maxLimit?: true
    entryFee?: true
    prizePool?: true
    teamsJoined?: true
  }

  export type TournamentMinAggregateInputType = {
    id?: true
    maxLimit?: true
    entryFee?: true
    prizePool?: true
    winner?: true
    ownerId?: true
    teamsJoined?: true
    status?: true
  }

  export type TournamentMaxAggregateInputType = {
    id?: true
    maxLimit?: true
    entryFee?: true
    prizePool?: true
    winner?: true
    ownerId?: true
    teamsJoined?: true
    status?: true
  }

  export type TournamentCountAggregateInputType = {
    id?: true
    maxLimit?: true
    entryFee?: true
    prizePool?: true
    winner?: true
    ownerId?: true
    teamsJoined?: true
    status?: true
    _all?: true
  }

  export type TournamentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tournament to aggregate.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tournaments
    **/
    _count?: true | TournamentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TournamentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TournamentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TournamentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TournamentMaxAggregateInputType
  }

  export type GetTournamentAggregateType<T extends TournamentAggregateArgs> = {
        [P in keyof T & keyof AggregateTournament]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTournament[P]>
      : GetScalarType<T[P], AggregateTournament[P]>
  }




  export type TournamentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentWhereInput
    orderBy?: TournamentOrderByWithAggregationInput | TournamentOrderByWithAggregationInput[]
    by: TournamentScalarFieldEnum[] | TournamentScalarFieldEnum
    having?: TournamentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TournamentCountAggregateInputType | true
    _avg?: TournamentAvgAggregateInputType
    _sum?: TournamentSumAggregateInputType
    _min?: TournamentMinAggregateInputType
    _max?: TournamentMaxAggregateInputType
  }

  export type TournamentGroupByOutputType = {
    id: string
    maxLimit: number
    entryFee: number
    prizePool: number | null
    winner: string | null
    ownerId: string
    teamsJoined: number
    status: $Enums.TournamentStatus
    _count: TournamentCountAggregateOutputType | null
    _avg: TournamentAvgAggregateOutputType | null
    _sum: TournamentSumAggregateOutputType | null
    _min: TournamentMinAggregateOutputType | null
    _max: TournamentMaxAggregateOutputType | null
  }

  type GetTournamentGroupByPayload<T extends TournamentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TournamentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TournamentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TournamentGroupByOutputType[P]>
            : GetScalarType<T[P], TournamentGroupByOutputType[P]>
        }
      >
    >


  export type TournamentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    maxLimit?: boolean
    entryFee?: boolean
    prizePool?: boolean
    winner?: boolean
    ownerId?: boolean
    teamsJoined?: boolean
    status?: boolean
    tournamentJoinedTeams?: boolean | Tournament$tournamentJoinedTeamsArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | TournamentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    maxLimit?: boolean
    entryFee?: boolean
    prizePool?: boolean
    winner?: boolean
    ownerId?: boolean
    teamsJoined?: boolean
    status?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    maxLimit?: boolean
    entryFee?: boolean
    prizePool?: boolean
    winner?: boolean
    ownerId?: boolean
    teamsJoined?: boolean
    status?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectScalar = {
    id?: boolean
    maxLimit?: boolean
    entryFee?: boolean
    prizePool?: boolean
    winner?: boolean
    ownerId?: boolean
    teamsJoined?: boolean
    status?: boolean
  }

  export type TournamentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "maxLimit" | "entryFee" | "prizePool" | "winner" | "ownerId" | "teamsJoined" | "status", ExtArgs["result"]["tournament"]>
  export type TournamentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournamentJoinedTeams?: boolean | Tournament$tournamentJoinedTeamsArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | TournamentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TournamentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TournamentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TournamentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tournament"
    objects: {
      tournamentJoinedTeams: Prisma.$TournamentJoinedTeamsPayload<ExtArgs>[]
      owner: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      maxLimit: number
      entryFee: number
      prizePool: number | null
      winner: string | null
      ownerId: string
      teamsJoined: number
      status: $Enums.TournamentStatus
    }, ExtArgs["result"]["tournament"]>
    composites: {}
  }

  type TournamentGetPayload<S extends boolean | null | undefined | TournamentDefaultArgs> = $Result.GetResult<Prisma.$TournamentPayload, S>

  type TournamentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TournamentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TournamentCountAggregateInputType | true
    }

  export interface TournamentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tournament'], meta: { name: 'Tournament' } }
    /**
     * Find zero or one Tournament that matches the filter.
     * @param {TournamentFindUniqueArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TournamentFindUniqueArgs>(args: SelectSubset<T, TournamentFindUniqueArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tournament that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TournamentFindUniqueOrThrowArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TournamentFindUniqueOrThrowArgs>(args: SelectSubset<T, TournamentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tournament that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindFirstArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TournamentFindFirstArgs>(args?: SelectSubset<T, TournamentFindFirstArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tournament that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindFirstOrThrowArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TournamentFindFirstOrThrowArgs>(args?: SelectSubset<T, TournamentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tournaments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tournaments
     * const tournaments = await prisma.tournament.findMany()
     * 
     * // Get first 10 Tournaments
     * const tournaments = await prisma.tournament.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tournamentWithIdOnly = await prisma.tournament.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TournamentFindManyArgs>(args?: SelectSubset<T, TournamentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tournament.
     * @param {TournamentCreateArgs} args - Arguments to create a Tournament.
     * @example
     * // Create one Tournament
     * const Tournament = await prisma.tournament.create({
     *   data: {
     *     // ... data to create a Tournament
     *   }
     * })
     * 
     */
    create<T extends TournamentCreateArgs>(args: SelectSubset<T, TournamentCreateArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tournaments.
     * @param {TournamentCreateManyArgs} args - Arguments to create many Tournaments.
     * @example
     * // Create many Tournaments
     * const tournament = await prisma.tournament.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TournamentCreateManyArgs>(args?: SelectSubset<T, TournamentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tournaments and returns the data saved in the database.
     * @param {TournamentCreateManyAndReturnArgs} args - Arguments to create many Tournaments.
     * @example
     * // Create many Tournaments
     * const tournament = await prisma.tournament.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tournaments and only return the `id`
     * const tournamentWithIdOnly = await prisma.tournament.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TournamentCreateManyAndReturnArgs>(args?: SelectSubset<T, TournamentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tournament.
     * @param {TournamentDeleteArgs} args - Arguments to delete one Tournament.
     * @example
     * // Delete one Tournament
     * const Tournament = await prisma.tournament.delete({
     *   where: {
     *     // ... filter to delete one Tournament
     *   }
     * })
     * 
     */
    delete<T extends TournamentDeleteArgs>(args: SelectSubset<T, TournamentDeleteArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tournament.
     * @param {TournamentUpdateArgs} args - Arguments to update one Tournament.
     * @example
     * // Update one Tournament
     * const tournament = await prisma.tournament.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TournamentUpdateArgs>(args: SelectSubset<T, TournamentUpdateArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tournaments.
     * @param {TournamentDeleteManyArgs} args - Arguments to filter Tournaments to delete.
     * @example
     * // Delete a few Tournaments
     * const { count } = await prisma.tournament.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TournamentDeleteManyArgs>(args?: SelectSubset<T, TournamentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tournaments
     * const tournament = await prisma.tournament.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TournamentUpdateManyArgs>(args: SelectSubset<T, TournamentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tournaments and returns the data updated in the database.
     * @param {TournamentUpdateManyAndReturnArgs} args - Arguments to update many Tournaments.
     * @example
     * // Update many Tournaments
     * const tournament = await prisma.tournament.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tournaments and only return the `id`
     * const tournamentWithIdOnly = await prisma.tournament.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TournamentUpdateManyAndReturnArgs>(args: SelectSubset<T, TournamentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tournament.
     * @param {TournamentUpsertArgs} args - Arguments to update or create a Tournament.
     * @example
     * // Update or create a Tournament
     * const tournament = await prisma.tournament.upsert({
     *   create: {
     *     // ... data to create a Tournament
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tournament we want to update
     *   }
     * })
     */
    upsert<T extends TournamentUpsertArgs>(args: SelectSubset<T, TournamentUpsertArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentCountArgs} args - Arguments to filter Tournaments to count.
     * @example
     * // Count the number of Tournaments
     * const count = await prisma.tournament.count({
     *   where: {
     *     // ... the filter for the Tournaments we want to count
     *   }
     * })
    **/
    count<T extends TournamentCountArgs>(
      args?: Subset<T, TournamentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TournamentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TournamentAggregateArgs>(args: Subset<T, TournamentAggregateArgs>): Prisma.PrismaPromise<GetTournamentAggregateType<T>>

    /**
     * Group by Tournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentGroupByArgs} args - Group by arguments.
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
      T extends TournamentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TournamentGroupByArgs['orderBy'] }
        : { orderBy?: TournamentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TournamentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tournament model
   */
  readonly fields: TournamentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tournament.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TournamentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tournamentJoinedTeams<T extends Tournament$tournamentJoinedTeamsArgs<ExtArgs> = {}>(args?: Subset<T, Tournament$tournamentJoinedTeamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentJoinedTeamsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Tournament model
   */
  interface TournamentFieldRefs {
    readonly id: FieldRef<"Tournament", 'String'>
    readonly maxLimit: FieldRef<"Tournament", 'Int'>
    readonly entryFee: FieldRef<"Tournament", 'Int'>
    readonly prizePool: FieldRef<"Tournament", 'Int'>
    readonly winner: FieldRef<"Tournament", 'String'>
    readonly ownerId: FieldRef<"Tournament", 'String'>
    readonly teamsJoined: FieldRef<"Tournament", 'Int'>
    readonly status: FieldRef<"Tournament", 'TournamentStatus'>
  }
    

  // Custom InputTypes
  /**
   * Tournament findUnique
   */
  export type TournamentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament findUniqueOrThrow
   */
  export type TournamentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament findFirst
   */
  export type TournamentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tournaments.
     */
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament findFirstOrThrow
   */
  export type TournamentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tournaments.
     */
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament findMany
   */
  export type TournamentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournaments to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament create
   */
  export type TournamentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The data needed to create a Tournament.
     */
    data: XOR<TournamentCreateInput, TournamentUncheckedCreateInput>
  }

  /**
   * Tournament createMany
   */
  export type TournamentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tournaments.
     */
    data: TournamentCreateManyInput | TournamentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tournament createManyAndReturn
   */
  export type TournamentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * The data used to create many Tournaments.
     */
    data: TournamentCreateManyInput | TournamentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tournament update
   */
  export type TournamentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The data needed to update a Tournament.
     */
    data: XOR<TournamentUpdateInput, TournamentUncheckedUpdateInput>
    /**
     * Choose, which Tournament to update.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament updateMany
   */
  export type TournamentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tournaments.
     */
    data: XOR<TournamentUpdateManyMutationInput, TournamentUncheckedUpdateManyInput>
    /**
     * Filter which Tournaments to update
     */
    where?: TournamentWhereInput
    /**
     * Limit how many Tournaments to update.
     */
    limit?: number
  }

  /**
   * Tournament updateManyAndReturn
   */
  export type TournamentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * The data used to update Tournaments.
     */
    data: XOR<TournamentUpdateManyMutationInput, TournamentUncheckedUpdateManyInput>
    /**
     * Filter which Tournaments to update
     */
    where?: TournamentWhereInput
    /**
     * Limit how many Tournaments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tournament upsert
   */
  export type TournamentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The filter to search for the Tournament to update in case it exists.
     */
    where: TournamentWhereUniqueInput
    /**
     * In case the Tournament found by the `where` argument doesn't exist, create a new Tournament with this data.
     */
    create: XOR<TournamentCreateInput, TournamentUncheckedCreateInput>
    /**
     * In case the Tournament was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TournamentUpdateInput, TournamentUncheckedUpdateInput>
  }

  /**
   * Tournament delete
   */
  export type TournamentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter which Tournament to delete.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament deleteMany
   */
  export type TournamentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tournaments to delete
     */
    where?: TournamentWhereInput
    /**
     * Limit how many Tournaments to delete.
     */
    limit?: number
  }

  /**
   * Tournament.tournamentJoinedTeams
   */
  export type Tournament$tournamentJoinedTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentJoinedTeams
     */
    select?: TournamentJoinedTeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentJoinedTeams
     */
    omit?: TournamentJoinedTeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentJoinedTeamsInclude<ExtArgs> | null
    where?: TournamentJoinedTeamsWhereInput
    orderBy?: TournamentJoinedTeamsOrderByWithRelationInput | TournamentJoinedTeamsOrderByWithRelationInput[]
    cursor?: TournamentJoinedTeamsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TournamentJoinedTeamsScalarFieldEnum | TournamentJoinedTeamsScalarFieldEnum[]
  }

  /**
   * Tournament without action
   */
  export type TournamentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
  }


  /**
   * Model TournamentJoinedTeams
   */

  export type AggregateTournamentJoinedTeams = {
    _count: TournamentJoinedTeamsCountAggregateOutputType | null
    _min: TournamentJoinedTeamsMinAggregateOutputType | null
    _max: TournamentJoinedTeamsMaxAggregateOutputType | null
  }

  export type TournamentJoinedTeamsMinAggregateOutputType = {
    id: string | null
    tournamentId: string | null
    userTeamId: string | null
  }

  export type TournamentJoinedTeamsMaxAggregateOutputType = {
    id: string | null
    tournamentId: string | null
    userTeamId: string | null
  }

  export type TournamentJoinedTeamsCountAggregateOutputType = {
    id: number
    tournamentId: number
    userTeamId: number
    _all: number
  }


  export type TournamentJoinedTeamsMinAggregateInputType = {
    id?: true
    tournamentId?: true
    userTeamId?: true
  }

  export type TournamentJoinedTeamsMaxAggregateInputType = {
    id?: true
    tournamentId?: true
    userTeamId?: true
  }

  export type TournamentJoinedTeamsCountAggregateInputType = {
    id?: true
    tournamentId?: true
    userTeamId?: true
    _all?: true
  }

  export type TournamentJoinedTeamsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TournamentJoinedTeams to aggregate.
     */
    where?: TournamentJoinedTeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentJoinedTeams to fetch.
     */
    orderBy?: TournamentJoinedTeamsOrderByWithRelationInput | TournamentJoinedTeamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TournamentJoinedTeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentJoinedTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentJoinedTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TournamentJoinedTeams
    **/
    _count?: true | TournamentJoinedTeamsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TournamentJoinedTeamsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TournamentJoinedTeamsMaxAggregateInputType
  }

  export type GetTournamentJoinedTeamsAggregateType<T extends TournamentJoinedTeamsAggregateArgs> = {
        [P in keyof T & keyof AggregateTournamentJoinedTeams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTournamentJoinedTeams[P]>
      : GetScalarType<T[P], AggregateTournamentJoinedTeams[P]>
  }




  export type TournamentJoinedTeamsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentJoinedTeamsWhereInput
    orderBy?: TournamentJoinedTeamsOrderByWithAggregationInput | TournamentJoinedTeamsOrderByWithAggregationInput[]
    by: TournamentJoinedTeamsScalarFieldEnum[] | TournamentJoinedTeamsScalarFieldEnum
    having?: TournamentJoinedTeamsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TournamentJoinedTeamsCountAggregateInputType | true
    _min?: TournamentJoinedTeamsMinAggregateInputType
    _max?: TournamentJoinedTeamsMaxAggregateInputType
  }

  export type TournamentJoinedTeamsGroupByOutputType = {
    id: string
    tournamentId: string
    userTeamId: string
    _count: TournamentJoinedTeamsCountAggregateOutputType | null
    _min: TournamentJoinedTeamsMinAggregateOutputType | null
    _max: TournamentJoinedTeamsMaxAggregateOutputType | null
  }

  type GetTournamentJoinedTeamsGroupByPayload<T extends TournamentJoinedTeamsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TournamentJoinedTeamsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TournamentJoinedTeamsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TournamentJoinedTeamsGroupByOutputType[P]>
            : GetScalarType<T[P], TournamentJoinedTeamsGroupByOutputType[P]>
        }
      >
    >


  export type TournamentJoinedTeamsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentId?: boolean
    userTeamId?: boolean
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    userTeam?: boolean | UserTeamsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournamentJoinedTeams"]>

  export type TournamentJoinedTeamsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentId?: boolean
    userTeamId?: boolean
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    userTeam?: boolean | UserTeamsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournamentJoinedTeams"]>

  export type TournamentJoinedTeamsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentId?: boolean
    userTeamId?: boolean
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    userTeam?: boolean | UserTeamsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournamentJoinedTeams"]>

  export type TournamentJoinedTeamsSelectScalar = {
    id?: boolean
    tournamentId?: boolean
    userTeamId?: boolean
  }

  export type TournamentJoinedTeamsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tournamentId" | "userTeamId", ExtArgs["result"]["tournamentJoinedTeams"]>
  export type TournamentJoinedTeamsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    userTeam?: boolean | UserTeamsDefaultArgs<ExtArgs>
  }
  export type TournamentJoinedTeamsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    userTeam?: boolean | UserTeamsDefaultArgs<ExtArgs>
  }
  export type TournamentJoinedTeamsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    userTeam?: boolean | UserTeamsDefaultArgs<ExtArgs>
  }

  export type $TournamentJoinedTeamsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TournamentJoinedTeams"
    objects: {
      tournament: Prisma.$TournamentPayload<ExtArgs>
      userTeam: Prisma.$UserTeamsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tournamentId: string
      userTeamId: string
    }, ExtArgs["result"]["tournamentJoinedTeams"]>
    composites: {}
  }

  type TournamentJoinedTeamsGetPayload<S extends boolean | null | undefined | TournamentJoinedTeamsDefaultArgs> = $Result.GetResult<Prisma.$TournamentJoinedTeamsPayload, S>

  type TournamentJoinedTeamsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TournamentJoinedTeamsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TournamentJoinedTeamsCountAggregateInputType | true
    }

  export interface TournamentJoinedTeamsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TournamentJoinedTeams'], meta: { name: 'TournamentJoinedTeams' } }
    /**
     * Find zero or one TournamentJoinedTeams that matches the filter.
     * @param {TournamentJoinedTeamsFindUniqueArgs} args - Arguments to find a TournamentJoinedTeams
     * @example
     * // Get one TournamentJoinedTeams
     * const tournamentJoinedTeams = await prisma.tournamentJoinedTeams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TournamentJoinedTeamsFindUniqueArgs>(args: SelectSubset<T, TournamentJoinedTeamsFindUniqueArgs<ExtArgs>>): Prisma__TournamentJoinedTeamsClient<$Result.GetResult<Prisma.$TournamentJoinedTeamsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TournamentJoinedTeams that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TournamentJoinedTeamsFindUniqueOrThrowArgs} args - Arguments to find a TournamentJoinedTeams
     * @example
     * // Get one TournamentJoinedTeams
     * const tournamentJoinedTeams = await prisma.tournamentJoinedTeams.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TournamentJoinedTeamsFindUniqueOrThrowArgs>(args: SelectSubset<T, TournamentJoinedTeamsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TournamentJoinedTeamsClient<$Result.GetResult<Prisma.$TournamentJoinedTeamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TournamentJoinedTeams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentJoinedTeamsFindFirstArgs} args - Arguments to find a TournamentJoinedTeams
     * @example
     * // Get one TournamentJoinedTeams
     * const tournamentJoinedTeams = await prisma.tournamentJoinedTeams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TournamentJoinedTeamsFindFirstArgs>(args?: SelectSubset<T, TournamentJoinedTeamsFindFirstArgs<ExtArgs>>): Prisma__TournamentJoinedTeamsClient<$Result.GetResult<Prisma.$TournamentJoinedTeamsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TournamentJoinedTeams that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentJoinedTeamsFindFirstOrThrowArgs} args - Arguments to find a TournamentJoinedTeams
     * @example
     * // Get one TournamentJoinedTeams
     * const tournamentJoinedTeams = await prisma.tournamentJoinedTeams.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TournamentJoinedTeamsFindFirstOrThrowArgs>(args?: SelectSubset<T, TournamentJoinedTeamsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TournamentJoinedTeamsClient<$Result.GetResult<Prisma.$TournamentJoinedTeamsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TournamentJoinedTeams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentJoinedTeamsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TournamentJoinedTeams
     * const tournamentJoinedTeams = await prisma.tournamentJoinedTeams.findMany()
     * 
     * // Get first 10 TournamentJoinedTeams
     * const tournamentJoinedTeams = await prisma.tournamentJoinedTeams.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tournamentJoinedTeamsWithIdOnly = await prisma.tournamentJoinedTeams.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TournamentJoinedTeamsFindManyArgs>(args?: SelectSubset<T, TournamentJoinedTeamsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentJoinedTeamsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TournamentJoinedTeams.
     * @param {TournamentJoinedTeamsCreateArgs} args - Arguments to create a TournamentJoinedTeams.
     * @example
     * // Create one TournamentJoinedTeams
     * const TournamentJoinedTeams = await prisma.tournamentJoinedTeams.create({
     *   data: {
     *     // ... data to create a TournamentJoinedTeams
     *   }
     * })
     * 
     */
    create<T extends TournamentJoinedTeamsCreateArgs>(args: SelectSubset<T, TournamentJoinedTeamsCreateArgs<ExtArgs>>): Prisma__TournamentJoinedTeamsClient<$Result.GetResult<Prisma.$TournamentJoinedTeamsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TournamentJoinedTeams.
     * @param {TournamentJoinedTeamsCreateManyArgs} args - Arguments to create many TournamentJoinedTeams.
     * @example
     * // Create many TournamentJoinedTeams
     * const tournamentJoinedTeams = await prisma.tournamentJoinedTeams.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TournamentJoinedTeamsCreateManyArgs>(args?: SelectSubset<T, TournamentJoinedTeamsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TournamentJoinedTeams and returns the data saved in the database.
     * @param {TournamentJoinedTeamsCreateManyAndReturnArgs} args - Arguments to create many TournamentJoinedTeams.
     * @example
     * // Create many TournamentJoinedTeams
     * const tournamentJoinedTeams = await prisma.tournamentJoinedTeams.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TournamentJoinedTeams and only return the `id`
     * const tournamentJoinedTeamsWithIdOnly = await prisma.tournamentJoinedTeams.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TournamentJoinedTeamsCreateManyAndReturnArgs>(args?: SelectSubset<T, TournamentJoinedTeamsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentJoinedTeamsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TournamentJoinedTeams.
     * @param {TournamentJoinedTeamsDeleteArgs} args - Arguments to delete one TournamentJoinedTeams.
     * @example
     * // Delete one TournamentJoinedTeams
     * const TournamentJoinedTeams = await prisma.tournamentJoinedTeams.delete({
     *   where: {
     *     // ... filter to delete one TournamentJoinedTeams
     *   }
     * })
     * 
     */
    delete<T extends TournamentJoinedTeamsDeleteArgs>(args: SelectSubset<T, TournamentJoinedTeamsDeleteArgs<ExtArgs>>): Prisma__TournamentJoinedTeamsClient<$Result.GetResult<Prisma.$TournamentJoinedTeamsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TournamentJoinedTeams.
     * @param {TournamentJoinedTeamsUpdateArgs} args - Arguments to update one TournamentJoinedTeams.
     * @example
     * // Update one TournamentJoinedTeams
     * const tournamentJoinedTeams = await prisma.tournamentJoinedTeams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TournamentJoinedTeamsUpdateArgs>(args: SelectSubset<T, TournamentJoinedTeamsUpdateArgs<ExtArgs>>): Prisma__TournamentJoinedTeamsClient<$Result.GetResult<Prisma.$TournamentJoinedTeamsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TournamentJoinedTeams.
     * @param {TournamentJoinedTeamsDeleteManyArgs} args - Arguments to filter TournamentJoinedTeams to delete.
     * @example
     * // Delete a few TournamentJoinedTeams
     * const { count } = await prisma.tournamentJoinedTeams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TournamentJoinedTeamsDeleteManyArgs>(args?: SelectSubset<T, TournamentJoinedTeamsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TournamentJoinedTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentJoinedTeamsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TournamentJoinedTeams
     * const tournamentJoinedTeams = await prisma.tournamentJoinedTeams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TournamentJoinedTeamsUpdateManyArgs>(args: SelectSubset<T, TournamentJoinedTeamsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TournamentJoinedTeams and returns the data updated in the database.
     * @param {TournamentJoinedTeamsUpdateManyAndReturnArgs} args - Arguments to update many TournamentJoinedTeams.
     * @example
     * // Update many TournamentJoinedTeams
     * const tournamentJoinedTeams = await prisma.tournamentJoinedTeams.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TournamentJoinedTeams and only return the `id`
     * const tournamentJoinedTeamsWithIdOnly = await prisma.tournamentJoinedTeams.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TournamentJoinedTeamsUpdateManyAndReturnArgs>(args: SelectSubset<T, TournamentJoinedTeamsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentJoinedTeamsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TournamentJoinedTeams.
     * @param {TournamentJoinedTeamsUpsertArgs} args - Arguments to update or create a TournamentJoinedTeams.
     * @example
     * // Update or create a TournamentJoinedTeams
     * const tournamentJoinedTeams = await prisma.tournamentJoinedTeams.upsert({
     *   create: {
     *     // ... data to create a TournamentJoinedTeams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TournamentJoinedTeams we want to update
     *   }
     * })
     */
    upsert<T extends TournamentJoinedTeamsUpsertArgs>(args: SelectSubset<T, TournamentJoinedTeamsUpsertArgs<ExtArgs>>): Prisma__TournamentJoinedTeamsClient<$Result.GetResult<Prisma.$TournamentJoinedTeamsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TournamentJoinedTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentJoinedTeamsCountArgs} args - Arguments to filter TournamentJoinedTeams to count.
     * @example
     * // Count the number of TournamentJoinedTeams
     * const count = await prisma.tournamentJoinedTeams.count({
     *   where: {
     *     // ... the filter for the TournamentJoinedTeams we want to count
     *   }
     * })
    **/
    count<T extends TournamentJoinedTeamsCountArgs>(
      args?: Subset<T, TournamentJoinedTeamsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TournamentJoinedTeamsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TournamentJoinedTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentJoinedTeamsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TournamentJoinedTeamsAggregateArgs>(args: Subset<T, TournamentJoinedTeamsAggregateArgs>): Prisma.PrismaPromise<GetTournamentJoinedTeamsAggregateType<T>>

    /**
     * Group by TournamentJoinedTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentJoinedTeamsGroupByArgs} args - Group by arguments.
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
      T extends TournamentJoinedTeamsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TournamentJoinedTeamsGroupByArgs['orderBy'] }
        : { orderBy?: TournamentJoinedTeamsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TournamentJoinedTeamsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentJoinedTeamsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TournamentJoinedTeams model
   */
  readonly fields: TournamentJoinedTeamsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TournamentJoinedTeams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TournamentJoinedTeamsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tournament<T extends TournamentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TournamentDefaultArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userTeam<T extends UserTeamsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserTeamsDefaultArgs<ExtArgs>>): Prisma__UserTeamsClient<$Result.GetResult<Prisma.$UserTeamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TournamentJoinedTeams model
   */
  interface TournamentJoinedTeamsFieldRefs {
    readonly id: FieldRef<"TournamentJoinedTeams", 'String'>
    readonly tournamentId: FieldRef<"TournamentJoinedTeams", 'String'>
    readonly userTeamId: FieldRef<"TournamentJoinedTeams", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TournamentJoinedTeams findUnique
   */
  export type TournamentJoinedTeamsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentJoinedTeams
     */
    select?: TournamentJoinedTeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentJoinedTeams
     */
    omit?: TournamentJoinedTeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentJoinedTeamsInclude<ExtArgs> | null
    /**
     * Filter, which TournamentJoinedTeams to fetch.
     */
    where: TournamentJoinedTeamsWhereUniqueInput
  }

  /**
   * TournamentJoinedTeams findUniqueOrThrow
   */
  export type TournamentJoinedTeamsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentJoinedTeams
     */
    select?: TournamentJoinedTeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentJoinedTeams
     */
    omit?: TournamentJoinedTeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentJoinedTeamsInclude<ExtArgs> | null
    /**
     * Filter, which TournamentJoinedTeams to fetch.
     */
    where: TournamentJoinedTeamsWhereUniqueInput
  }

  /**
   * TournamentJoinedTeams findFirst
   */
  export type TournamentJoinedTeamsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentJoinedTeams
     */
    select?: TournamentJoinedTeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentJoinedTeams
     */
    omit?: TournamentJoinedTeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentJoinedTeamsInclude<ExtArgs> | null
    /**
     * Filter, which TournamentJoinedTeams to fetch.
     */
    where?: TournamentJoinedTeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentJoinedTeams to fetch.
     */
    orderBy?: TournamentJoinedTeamsOrderByWithRelationInput | TournamentJoinedTeamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TournamentJoinedTeams.
     */
    cursor?: TournamentJoinedTeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentJoinedTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentJoinedTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TournamentJoinedTeams.
     */
    distinct?: TournamentJoinedTeamsScalarFieldEnum | TournamentJoinedTeamsScalarFieldEnum[]
  }

  /**
   * TournamentJoinedTeams findFirstOrThrow
   */
  export type TournamentJoinedTeamsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentJoinedTeams
     */
    select?: TournamentJoinedTeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentJoinedTeams
     */
    omit?: TournamentJoinedTeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentJoinedTeamsInclude<ExtArgs> | null
    /**
     * Filter, which TournamentJoinedTeams to fetch.
     */
    where?: TournamentJoinedTeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentJoinedTeams to fetch.
     */
    orderBy?: TournamentJoinedTeamsOrderByWithRelationInput | TournamentJoinedTeamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TournamentJoinedTeams.
     */
    cursor?: TournamentJoinedTeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentJoinedTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentJoinedTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TournamentJoinedTeams.
     */
    distinct?: TournamentJoinedTeamsScalarFieldEnum | TournamentJoinedTeamsScalarFieldEnum[]
  }

  /**
   * TournamentJoinedTeams findMany
   */
  export type TournamentJoinedTeamsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentJoinedTeams
     */
    select?: TournamentJoinedTeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentJoinedTeams
     */
    omit?: TournamentJoinedTeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentJoinedTeamsInclude<ExtArgs> | null
    /**
     * Filter, which TournamentJoinedTeams to fetch.
     */
    where?: TournamentJoinedTeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentJoinedTeams to fetch.
     */
    orderBy?: TournamentJoinedTeamsOrderByWithRelationInput | TournamentJoinedTeamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TournamentJoinedTeams.
     */
    cursor?: TournamentJoinedTeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentJoinedTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentJoinedTeams.
     */
    skip?: number
    distinct?: TournamentJoinedTeamsScalarFieldEnum | TournamentJoinedTeamsScalarFieldEnum[]
  }

  /**
   * TournamentJoinedTeams create
   */
  export type TournamentJoinedTeamsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentJoinedTeams
     */
    select?: TournamentJoinedTeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentJoinedTeams
     */
    omit?: TournamentJoinedTeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentJoinedTeamsInclude<ExtArgs> | null
    /**
     * The data needed to create a TournamentJoinedTeams.
     */
    data: XOR<TournamentJoinedTeamsCreateInput, TournamentJoinedTeamsUncheckedCreateInput>
  }

  /**
   * TournamentJoinedTeams createMany
   */
  export type TournamentJoinedTeamsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TournamentJoinedTeams.
     */
    data: TournamentJoinedTeamsCreateManyInput | TournamentJoinedTeamsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TournamentJoinedTeams createManyAndReturn
   */
  export type TournamentJoinedTeamsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentJoinedTeams
     */
    select?: TournamentJoinedTeamsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentJoinedTeams
     */
    omit?: TournamentJoinedTeamsOmit<ExtArgs> | null
    /**
     * The data used to create many TournamentJoinedTeams.
     */
    data: TournamentJoinedTeamsCreateManyInput | TournamentJoinedTeamsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentJoinedTeamsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TournamentJoinedTeams update
   */
  export type TournamentJoinedTeamsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentJoinedTeams
     */
    select?: TournamentJoinedTeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentJoinedTeams
     */
    omit?: TournamentJoinedTeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentJoinedTeamsInclude<ExtArgs> | null
    /**
     * The data needed to update a TournamentJoinedTeams.
     */
    data: XOR<TournamentJoinedTeamsUpdateInput, TournamentJoinedTeamsUncheckedUpdateInput>
    /**
     * Choose, which TournamentJoinedTeams to update.
     */
    where: TournamentJoinedTeamsWhereUniqueInput
  }

  /**
   * TournamentJoinedTeams updateMany
   */
  export type TournamentJoinedTeamsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TournamentJoinedTeams.
     */
    data: XOR<TournamentJoinedTeamsUpdateManyMutationInput, TournamentJoinedTeamsUncheckedUpdateManyInput>
    /**
     * Filter which TournamentJoinedTeams to update
     */
    where?: TournamentJoinedTeamsWhereInput
    /**
     * Limit how many TournamentJoinedTeams to update.
     */
    limit?: number
  }

  /**
   * TournamentJoinedTeams updateManyAndReturn
   */
  export type TournamentJoinedTeamsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentJoinedTeams
     */
    select?: TournamentJoinedTeamsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentJoinedTeams
     */
    omit?: TournamentJoinedTeamsOmit<ExtArgs> | null
    /**
     * The data used to update TournamentJoinedTeams.
     */
    data: XOR<TournamentJoinedTeamsUpdateManyMutationInput, TournamentJoinedTeamsUncheckedUpdateManyInput>
    /**
     * Filter which TournamentJoinedTeams to update
     */
    where?: TournamentJoinedTeamsWhereInput
    /**
     * Limit how many TournamentJoinedTeams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentJoinedTeamsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TournamentJoinedTeams upsert
   */
  export type TournamentJoinedTeamsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentJoinedTeams
     */
    select?: TournamentJoinedTeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentJoinedTeams
     */
    omit?: TournamentJoinedTeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentJoinedTeamsInclude<ExtArgs> | null
    /**
     * The filter to search for the TournamentJoinedTeams to update in case it exists.
     */
    where: TournamentJoinedTeamsWhereUniqueInput
    /**
     * In case the TournamentJoinedTeams found by the `where` argument doesn't exist, create a new TournamentJoinedTeams with this data.
     */
    create: XOR<TournamentJoinedTeamsCreateInput, TournamentJoinedTeamsUncheckedCreateInput>
    /**
     * In case the TournamentJoinedTeams was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TournamentJoinedTeamsUpdateInput, TournamentJoinedTeamsUncheckedUpdateInput>
  }

  /**
   * TournamentJoinedTeams delete
   */
  export type TournamentJoinedTeamsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentJoinedTeams
     */
    select?: TournamentJoinedTeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentJoinedTeams
     */
    omit?: TournamentJoinedTeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentJoinedTeamsInclude<ExtArgs> | null
    /**
     * Filter which TournamentJoinedTeams to delete.
     */
    where: TournamentJoinedTeamsWhereUniqueInput
  }

  /**
   * TournamentJoinedTeams deleteMany
   */
  export type TournamentJoinedTeamsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TournamentJoinedTeams to delete
     */
    where?: TournamentJoinedTeamsWhereInput
    /**
     * Limit how many TournamentJoinedTeams to delete.
     */
    limit?: number
  }

  /**
   * TournamentJoinedTeams without action
   */
  export type TournamentJoinedTeamsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentJoinedTeams
     */
    select?: TournamentJoinedTeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentJoinedTeams
     */
    omit?: TournamentJoinedTeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentJoinedTeamsInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    publicKey: 'publicKey',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserTeamsScalarFieldEnum: {
    id: 'id',
    fantasyPoints: 'fantasyPoints',
    captain: 'captain',
    viceCaptain: 'viceCaptain',
    userId: 'userId',
    disabled: 'disabled'
  };

  export type UserTeamsScalarFieldEnum = (typeof UserTeamsScalarFieldEnum)[keyof typeof UserTeamsScalarFieldEnum]


  export const UserTeamPlayersScalarFieldEnum: {
    id: 'id',
    userTeamsId: 'userTeamsId',
    playersId: 'playersId'
  };

  export type UserTeamPlayersScalarFieldEnum = (typeof UserTeamPlayersScalarFieldEnum)[keyof typeof UserTeamPlayersScalarFieldEnum]


  export const SquadScalarFieldEnum: {
    id: 'id',
    name: 'name',
    logo: 'logo',
    captain: 'captain',
    viceCaptain: 'viceCaptain'
  };

  export type SquadScalarFieldEnum = (typeof SquadScalarFieldEnum)[keyof typeof SquadScalarFieldEnum]


  export const PlayersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    role: 'role',
    battingDexture: 'battingDexture',
    bowlingDexture: 'bowlingDexture',
    countryStatus: 'countryStatus',
    squadId: 'squadId',
    age: 'age',
    img: 'img'
  };

  export type PlayersScalarFieldEnum = (typeof PlayersScalarFieldEnum)[keyof typeof PlayersScalarFieldEnum]


  export const PlayerScoreScalarFieldEnum: {
    id: 'id',
    playingStatus: 'playingStatus',
    fantasyPoints: 'fantasyPoints',
    run: 'run',
    sixes: 'sixes',
    fours: 'fours',
    others: 'others',
    runsConceded: 'runsConceded',
    wickets: 'wickets',
    ballsBowled: 'ballsBowled',
    catches: 'catches',
    runout: 'runout',
    dotBall: 'dotBall',
    playerId: 'playerId',
    matchId: 'matchId'
  };

  export type PlayerScoreScalarFieldEnum = (typeof PlayerScoreScalarFieldEnum)[keyof typeof PlayerScoreScalarFieldEnum]


  export const MatchesScalarFieldEnum: {
    id: 'id',
    team1Id: 'team1Id',
    team2Id: 'team2Id',
    venue: 'venue',
    date: 'date',
    winner: 'winner',
    toss: 'toss',
    elected: 'elected',
    status: 'status'
  };

  export type MatchesScalarFieldEnum = (typeof MatchesScalarFieldEnum)[keyof typeof MatchesScalarFieldEnum]


  export const InningScalarFieldEnum: {
    id: 'id',
    whichInning: 'whichInning',
    score: 'score',
    wickets: 'wickets',
    extras: 'extras',
    batsman1: 'batsman1',
    batsman2: 'batsman2',
    bowler: 'bowler',
    matchId: 'matchId'
  };

  export type InningScalarFieldEnum = (typeof InningScalarFieldEnum)[keyof typeof InningScalarFieldEnum]


  export const BallsScalarFieldEnum: {
    id: 'id',
    ballNo: 'ballNo',
    whatHappend: 'whatHappend',
    bowler: 'bowler',
    batsman: 'batsman',
    catch: 'catch',
    runout: 'runout',
    inningId: 'inningId'
  };

  export type BallsScalarFieldEnum = (typeof BallsScalarFieldEnum)[keyof typeof BallsScalarFieldEnum]


  export const TournamentScalarFieldEnum: {
    id: 'id',
    maxLimit: 'maxLimit',
    entryFee: 'entryFee',
    prizePool: 'prizePool',
    winner: 'winner',
    ownerId: 'ownerId',
    teamsJoined: 'teamsJoined',
    status: 'status'
  };

  export type TournamentScalarFieldEnum = (typeof TournamentScalarFieldEnum)[keyof typeof TournamentScalarFieldEnum]


  export const TournamentJoinedTeamsScalarFieldEnum: {
    id: 'id',
    tournamentId: 'tournamentId',
    userTeamId: 'userTeamId'
  };

  export type TournamentJoinedTeamsScalarFieldEnum = (typeof TournamentJoinedTeamsScalarFieldEnum)[keyof typeof TournamentJoinedTeamsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'PlayerRole'
   */
  export type EnumPlayerRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlayerRole'>
    


  /**
   * Reference to a field of type 'PlayerRole[]'
   */
  export type ListEnumPlayerRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlayerRole[]'>
    


  /**
   * Reference to a field of type 'PlayerDexture'
   */
  export type EnumPlayerDextureFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlayerDexture'>
    


  /**
   * Reference to a field of type 'PlayerDexture[]'
   */
  export type ListEnumPlayerDextureFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlayerDexture[]'>
    


  /**
   * Reference to a field of type 'PlayerCountryStatus'
   */
  export type EnumPlayerCountryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlayerCountryStatus'>
    


  /**
   * Reference to a field of type 'PlayerCountryStatus[]'
   */
  export type ListEnumPlayerCountryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlayerCountryStatus[]'>
    


  /**
   * Reference to a field of type 'PlayerPlayingStatus'
   */
  export type EnumPlayerPlayingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlayerPlayingStatus'>
    


  /**
   * Reference to a field of type 'PlayerPlayingStatus[]'
   */
  export type ListEnumPlayerPlayingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlayerPlayingStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'MatchesWinner'
   */
  export type EnumMatchesWinnerFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchesWinner'>
    


  /**
   * Reference to a field of type 'MatchesWinner[]'
   */
  export type ListEnumMatchesWinnerFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchesWinner[]'>
    


  /**
   * Reference to a field of type 'MatchTossElection'
   */
  export type EnumMatchTossElectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchTossElection'>
    


  /**
   * Reference to a field of type 'MatchTossElection[]'
   */
  export type ListEnumMatchTossElectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchTossElection[]'>
    


  /**
   * Reference to a field of type 'TournamentStatus'
   */
  export type EnumTournamentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TournamentStatus'>
    


  /**
   * Reference to a field of type 'TournamentStatus[]'
   */
  export type ListEnumTournamentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TournamentStatus[]'>
    


  /**
   * Reference to a field of type 'WhichInning'
   */
  export type EnumWhichInningFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WhichInning'>
    


  /**
   * Reference to a field of type 'WhichInning[]'
   */
  export type ListEnumWhichInningFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WhichInning[]'>
    


  /**
   * Reference to a field of type 'WhatHappend'
   */
  export type EnumWhatHappendFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WhatHappend'>
    


  /**
   * Reference to a field of type 'WhatHappend[]'
   */
  export type ListEnumWhatHappendFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WhatHappend[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    publicKey?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    teams?: UserTeamsListRelationFilter
    tournaments?: TournamentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    publicKey?: SortOrderInput | SortOrder
    role?: SortOrder
    teams?: UserTeamsOrderByRelationAggregateInput
    tournaments?: TournamentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    publicKey?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    teams?: UserTeamsListRelationFilter
    tournaments?: TournamentListRelationFilter
  }, "id" | "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    publicKey?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    publicKey?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
  }

  export type UserTeamsWhereInput = {
    AND?: UserTeamsWhereInput | UserTeamsWhereInput[]
    OR?: UserTeamsWhereInput[]
    NOT?: UserTeamsWhereInput | UserTeamsWhereInput[]
    id?: StringFilter<"UserTeams"> | string
    fantasyPoints?: IntFilter<"UserTeams"> | number
    captain?: StringFilter<"UserTeams"> | string
    viceCaptain?: StringFilter<"UserTeams"> | string
    userId?: StringFilter<"UserTeams"> | string
    disabled?: BoolFilter<"UserTeams"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    players?: UserTeamPlayersListRelationFilter
    tournamentsJoined?: TournamentJoinedTeamsListRelationFilter
  }

  export type UserTeamsOrderByWithRelationInput = {
    id?: SortOrder
    fantasyPoints?: SortOrder
    captain?: SortOrder
    viceCaptain?: SortOrder
    userId?: SortOrder
    disabled?: SortOrder
    user?: UserOrderByWithRelationInput
    players?: UserTeamPlayersOrderByRelationAggregateInput
    tournamentsJoined?: TournamentJoinedTeamsOrderByRelationAggregateInput
  }

  export type UserTeamsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserTeamsWhereInput | UserTeamsWhereInput[]
    OR?: UserTeamsWhereInput[]
    NOT?: UserTeamsWhereInput | UserTeamsWhereInput[]
    fantasyPoints?: IntFilter<"UserTeams"> | number
    captain?: StringFilter<"UserTeams"> | string
    viceCaptain?: StringFilter<"UserTeams"> | string
    userId?: StringFilter<"UserTeams"> | string
    disabled?: BoolFilter<"UserTeams"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    players?: UserTeamPlayersListRelationFilter
    tournamentsJoined?: TournamentJoinedTeamsListRelationFilter
  }, "id" | "id">

  export type UserTeamsOrderByWithAggregationInput = {
    id?: SortOrder
    fantasyPoints?: SortOrder
    captain?: SortOrder
    viceCaptain?: SortOrder
    userId?: SortOrder
    disabled?: SortOrder
    _count?: UserTeamsCountOrderByAggregateInput
    _avg?: UserTeamsAvgOrderByAggregateInput
    _max?: UserTeamsMaxOrderByAggregateInput
    _min?: UserTeamsMinOrderByAggregateInput
    _sum?: UserTeamsSumOrderByAggregateInput
  }

  export type UserTeamsScalarWhereWithAggregatesInput = {
    AND?: UserTeamsScalarWhereWithAggregatesInput | UserTeamsScalarWhereWithAggregatesInput[]
    OR?: UserTeamsScalarWhereWithAggregatesInput[]
    NOT?: UserTeamsScalarWhereWithAggregatesInput | UserTeamsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserTeams"> | string
    fantasyPoints?: IntWithAggregatesFilter<"UserTeams"> | number
    captain?: StringWithAggregatesFilter<"UserTeams"> | string
    viceCaptain?: StringWithAggregatesFilter<"UserTeams"> | string
    userId?: StringWithAggregatesFilter<"UserTeams"> | string
    disabled?: BoolWithAggregatesFilter<"UserTeams"> | boolean
  }

  export type UserTeamPlayersWhereInput = {
    AND?: UserTeamPlayersWhereInput | UserTeamPlayersWhereInput[]
    OR?: UserTeamPlayersWhereInput[]
    NOT?: UserTeamPlayersWhereInput | UserTeamPlayersWhereInput[]
    id?: StringFilter<"UserTeamPlayers"> | string
    userTeamsId?: StringFilter<"UserTeamPlayers"> | string
    playersId?: StringFilter<"UserTeamPlayers"> | string
    userTeams?: XOR<UserTeamsScalarRelationFilter, UserTeamsWhereInput>
    players?: XOR<PlayersScalarRelationFilter, PlayersWhereInput>
  }

  export type UserTeamPlayersOrderByWithRelationInput = {
    id?: SortOrder
    userTeamsId?: SortOrder
    playersId?: SortOrder
    userTeams?: UserTeamsOrderByWithRelationInput
    players?: PlayersOrderByWithRelationInput
  }

  export type UserTeamPlayersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserTeamPlayersWhereInput | UserTeamPlayersWhereInput[]
    OR?: UserTeamPlayersWhereInput[]
    NOT?: UserTeamPlayersWhereInput | UserTeamPlayersWhereInput[]
    userTeamsId?: StringFilter<"UserTeamPlayers"> | string
    playersId?: StringFilter<"UserTeamPlayers"> | string
    userTeams?: XOR<UserTeamsScalarRelationFilter, UserTeamsWhereInput>
    players?: XOR<PlayersScalarRelationFilter, PlayersWhereInput>
  }, "id" | "id">

  export type UserTeamPlayersOrderByWithAggregationInput = {
    id?: SortOrder
    userTeamsId?: SortOrder
    playersId?: SortOrder
    _count?: UserTeamPlayersCountOrderByAggregateInput
    _max?: UserTeamPlayersMaxOrderByAggregateInput
    _min?: UserTeamPlayersMinOrderByAggregateInput
  }

  export type UserTeamPlayersScalarWhereWithAggregatesInput = {
    AND?: UserTeamPlayersScalarWhereWithAggregatesInput | UserTeamPlayersScalarWhereWithAggregatesInput[]
    OR?: UserTeamPlayersScalarWhereWithAggregatesInput[]
    NOT?: UserTeamPlayersScalarWhereWithAggregatesInput | UserTeamPlayersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserTeamPlayers"> | string
    userTeamsId?: StringWithAggregatesFilter<"UserTeamPlayers"> | string
    playersId?: StringWithAggregatesFilter<"UserTeamPlayers"> | string
  }

  export type SquadWhereInput = {
    AND?: SquadWhereInput | SquadWhereInput[]
    OR?: SquadWhereInput[]
    NOT?: SquadWhereInput | SquadWhereInput[]
    id?: StringFilter<"Squad"> | string
    name?: StringFilter<"Squad"> | string
    logo?: StringFilter<"Squad"> | string
    captain?: StringFilter<"Squad"> | string
    viceCaptain?: StringFilter<"Squad"> | string
    players?: PlayersListRelationFilter
  }

  export type SquadOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    captain?: SortOrder
    viceCaptain?: SortOrder
    players?: PlayersOrderByRelationAggregateInput
  }

  export type SquadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: SquadWhereInput | SquadWhereInput[]
    OR?: SquadWhereInput[]
    NOT?: SquadWhereInput | SquadWhereInput[]
    logo?: StringFilter<"Squad"> | string
    captain?: StringFilter<"Squad"> | string
    viceCaptain?: StringFilter<"Squad"> | string
    players?: PlayersListRelationFilter
  }, "id" | "id" | "name">

  export type SquadOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    captain?: SortOrder
    viceCaptain?: SortOrder
    _count?: SquadCountOrderByAggregateInput
    _max?: SquadMaxOrderByAggregateInput
    _min?: SquadMinOrderByAggregateInput
  }

  export type SquadScalarWhereWithAggregatesInput = {
    AND?: SquadScalarWhereWithAggregatesInput | SquadScalarWhereWithAggregatesInput[]
    OR?: SquadScalarWhereWithAggregatesInput[]
    NOT?: SquadScalarWhereWithAggregatesInput | SquadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Squad"> | string
    name?: StringWithAggregatesFilter<"Squad"> | string
    logo?: StringWithAggregatesFilter<"Squad"> | string
    captain?: StringWithAggregatesFilter<"Squad"> | string
    viceCaptain?: StringWithAggregatesFilter<"Squad"> | string
  }

  export type PlayersWhereInput = {
    AND?: PlayersWhereInput | PlayersWhereInput[]
    OR?: PlayersWhereInput[]
    NOT?: PlayersWhereInput | PlayersWhereInput[]
    id?: StringFilter<"Players"> | string
    name?: StringFilter<"Players"> | string
    role?: EnumPlayerRoleFilter<"Players"> | $Enums.PlayerRole
    battingDexture?: EnumPlayerDextureFilter<"Players"> | $Enums.PlayerDexture
    bowlingDexture?: EnumPlayerDextureFilter<"Players"> | $Enums.PlayerDexture
    countryStatus?: EnumPlayerCountryStatusFilter<"Players"> | $Enums.PlayerCountryStatus
    squadId?: StringFilter<"Players"> | string
    age?: StringFilter<"Players"> | string
    img?: StringFilter<"Players"> | string
    squad?: XOR<SquadScalarRelationFilter, SquadWhereInput>
    userTeamPlayers?: UserTeamPlayersListRelationFilter
    score?: PlayerScoreListRelationFilter
  }

  export type PlayersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    battingDexture?: SortOrder
    bowlingDexture?: SortOrder
    countryStatus?: SortOrder
    squadId?: SortOrder
    age?: SortOrder
    img?: SortOrder
    squad?: SquadOrderByWithRelationInput
    userTeamPlayers?: UserTeamPlayersOrderByRelationAggregateInput
    score?: PlayerScoreOrderByRelationAggregateInput
  }

  export type PlayersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlayersWhereInput | PlayersWhereInput[]
    OR?: PlayersWhereInput[]
    NOT?: PlayersWhereInput | PlayersWhereInput[]
    name?: StringFilter<"Players"> | string
    role?: EnumPlayerRoleFilter<"Players"> | $Enums.PlayerRole
    battingDexture?: EnumPlayerDextureFilter<"Players"> | $Enums.PlayerDexture
    bowlingDexture?: EnumPlayerDextureFilter<"Players"> | $Enums.PlayerDexture
    countryStatus?: EnumPlayerCountryStatusFilter<"Players"> | $Enums.PlayerCountryStatus
    squadId?: StringFilter<"Players"> | string
    age?: StringFilter<"Players"> | string
    img?: StringFilter<"Players"> | string
    squad?: XOR<SquadScalarRelationFilter, SquadWhereInput>
    userTeamPlayers?: UserTeamPlayersListRelationFilter
    score?: PlayerScoreListRelationFilter
  }, "id" | "id">

  export type PlayersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    battingDexture?: SortOrder
    bowlingDexture?: SortOrder
    countryStatus?: SortOrder
    squadId?: SortOrder
    age?: SortOrder
    img?: SortOrder
    _count?: PlayersCountOrderByAggregateInput
    _max?: PlayersMaxOrderByAggregateInput
    _min?: PlayersMinOrderByAggregateInput
  }

  export type PlayersScalarWhereWithAggregatesInput = {
    AND?: PlayersScalarWhereWithAggregatesInput | PlayersScalarWhereWithAggregatesInput[]
    OR?: PlayersScalarWhereWithAggregatesInput[]
    NOT?: PlayersScalarWhereWithAggregatesInput | PlayersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Players"> | string
    name?: StringWithAggregatesFilter<"Players"> | string
    role?: EnumPlayerRoleWithAggregatesFilter<"Players"> | $Enums.PlayerRole
    battingDexture?: EnumPlayerDextureWithAggregatesFilter<"Players"> | $Enums.PlayerDexture
    bowlingDexture?: EnumPlayerDextureWithAggregatesFilter<"Players"> | $Enums.PlayerDexture
    countryStatus?: EnumPlayerCountryStatusWithAggregatesFilter<"Players"> | $Enums.PlayerCountryStatus
    squadId?: StringWithAggregatesFilter<"Players"> | string
    age?: StringWithAggregatesFilter<"Players"> | string
    img?: StringWithAggregatesFilter<"Players"> | string
  }

  export type PlayerScoreWhereInput = {
    AND?: PlayerScoreWhereInput | PlayerScoreWhereInput[]
    OR?: PlayerScoreWhereInput[]
    NOT?: PlayerScoreWhereInput | PlayerScoreWhereInput[]
    id?: StringFilter<"PlayerScore"> | string
    playingStatus?: EnumPlayerPlayingStatusFilter<"PlayerScore"> | $Enums.PlayerPlayingStatus
    fantasyPoints?: IntFilter<"PlayerScore"> | number
    run?: IntFilter<"PlayerScore"> | number
    sixes?: IntFilter<"PlayerScore"> | number
    fours?: IntFilter<"PlayerScore"> | number
    others?: IntFilter<"PlayerScore"> | number
    runsConceded?: IntFilter<"PlayerScore"> | number
    wickets?: IntFilter<"PlayerScore"> | number
    ballsBowled?: IntFilter<"PlayerScore"> | number
    catches?: IntFilter<"PlayerScore"> | number
    runout?: IntFilter<"PlayerScore"> | number
    dotBall?: IntFilter<"PlayerScore"> | number
    playerId?: StringFilter<"PlayerScore"> | string
    matchId?: StringFilter<"PlayerScore"> | string
    player?: XOR<PlayersScalarRelationFilter, PlayersWhereInput>
    match?: XOR<MatchesScalarRelationFilter, MatchesWhereInput>
  }

  export type PlayerScoreOrderByWithRelationInput = {
    id?: SortOrder
    playingStatus?: SortOrder
    fantasyPoints?: SortOrder
    run?: SortOrder
    sixes?: SortOrder
    fours?: SortOrder
    others?: SortOrder
    runsConceded?: SortOrder
    wickets?: SortOrder
    ballsBowled?: SortOrder
    catches?: SortOrder
    runout?: SortOrder
    dotBall?: SortOrder
    playerId?: SortOrder
    matchId?: SortOrder
    player?: PlayersOrderByWithRelationInput
    match?: MatchesOrderByWithRelationInput
  }

  export type PlayerScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    playerId?: string
    playerId_matchId?: PlayerScorePlayerIdMatchIdCompoundUniqueInput
    AND?: PlayerScoreWhereInput | PlayerScoreWhereInput[]
    OR?: PlayerScoreWhereInput[]
    NOT?: PlayerScoreWhereInput | PlayerScoreWhereInput[]
    playingStatus?: EnumPlayerPlayingStatusFilter<"PlayerScore"> | $Enums.PlayerPlayingStatus
    fantasyPoints?: IntFilter<"PlayerScore"> | number
    run?: IntFilter<"PlayerScore"> | number
    sixes?: IntFilter<"PlayerScore"> | number
    fours?: IntFilter<"PlayerScore"> | number
    others?: IntFilter<"PlayerScore"> | number
    runsConceded?: IntFilter<"PlayerScore"> | number
    wickets?: IntFilter<"PlayerScore"> | number
    ballsBowled?: IntFilter<"PlayerScore"> | number
    catches?: IntFilter<"PlayerScore"> | number
    runout?: IntFilter<"PlayerScore"> | number
    dotBall?: IntFilter<"PlayerScore"> | number
    matchId?: StringFilter<"PlayerScore"> | string
    player?: XOR<PlayersScalarRelationFilter, PlayersWhereInput>
    match?: XOR<MatchesScalarRelationFilter, MatchesWhereInput>
  }, "id" | "id" | "playerId" | "playerId_matchId">

  export type PlayerScoreOrderByWithAggregationInput = {
    id?: SortOrder
    playingStatus?: SortOrder
    fantasyPoints?: SortOrder
    run?: SortOrder
    sixes?: SortOrder
    fours?: SortOrder
    others?: SortOrder
    runsConceded?: SortOrder
    wickets?: SortOrder
    ballsBowled?: SortOrder
    catches?: SortOrder
    runout?: SortOrder
    dotBall?: SortOrder
    playerId?: SortOrder
    matchId?: SortOrder
    _count?: PlayerScoreCountOrderByAggregateInput
    _avg?: PlayerScoreAvgOrderByAggregateInput
    _max?: PlayerScoreMaxOrderByAggregateInput
    _min?: PlayerScoreMinOrderByAggregateInput
    _sum?: PlayerScoreSumOrderByAggregateInput
  }

  export type PlayerScoreScalarWhereWithAggregatesInput = {
    AND?: PlayerScoreScalarWhereWithAggregatesInput | PlayerScoreScalarWhereWithAggregatesInput[]
    OR?: PlayerScoreScalarWhereWithAggregatesInput[]
    NOT?: PlayerScoreScalarWhereWithAggregatesInput | PlayerScoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlayerScore"> | string
    playingStatus?: EnumPlayerPlayingStatusWithAggregatesFilter<"PlayerScore"> | $Enums.PlayerPlayingStatus
    fantasyPoints?: IntWithAggregatesFilter<"PlayerScore"> | number
    run?: IntWithAggregatesFilter<"PlayerScore"> | number
    sixes?: IntWithAggregatesFilter<"PlayerScore"> | number
    fours?: IntWithAggregatesFilter<"PlayerScore"> | number
    others?: IntWithAggregatesFilter<"PlayerScore"> | number
    runsConceded?: IntWithAggregatesFilter<"PlayerScore"> | number
    wickets?: IntWithAggregatesFilter<"PlayerScore"> | number
    ballsBowled?: IntWithAggregatesFilter<"PlayerScore"> | number
    catches?: IntWithAggregatesFilter<"PlayerScore"> | number
    runout?: IntWithAggregatesFilter<"PlayerScore"> | number
    dotBall?: IntWithAggregatesFilter<"PlayerScore"> | number
    playerId?: StringWithAggregatesFilter<"PlayerScore"> | string
    matchId?: StringWithAggregatesFilter<"PlayerScore"> | string
  }

  export type MatchesWhereInput = {
    AND?: MatchesWhereInput | MatchesWhereInput[]
    OR?: MatchesWhereInput[]
    NOT?: MatchesWhereInput | MatchesWhereInput[]
    id?: StringFilter<"Matches"> | string
    team1Id?: StringFilter<"Matches"> | string
    team2Id?: StringFilter<"Matches"> | string
    venue?: StringFilter<"Matches"> | string
    date?: DateTimeFilter<"Matches"> | Date | string
    winner?: EnumMatchesWinnerFilter<"Matches"> | $Enums.MatchesWinner
    toss?: EnumMatchesWinnerFilter<"Matches"> | $Enums.MatchesWinner
    elected?: EnumMatchTossElectionFilter<"Matches"> | $Enums.MatchTossElection
    status?: EnumTournamentStatusFilter<"Matches"> | $Enums.TournamentStatus
    innings?: InningListRelationFilter
    playerScore?: PlayerScoreListRelationFilter
  }

  export type MatchesOrderByWithRelationInput = {
    id?: SortOrder
    team1Id?: SortOrder
    team2Id?: SortOrder
    venue?: SortOrder
    date?: SortOrder
    winner?: SortOrder
    toss?: SortOrder
    elected?: SortOrder
    status?: SortOrder
    innings?: InningOrderByRelationAggregateInput
    playerScore?: PlayerScoreOrderByRelationAggregateInput
  }

  export type MatchesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchesWhereInput | MatchesWhereInput[]
    OR?: MatchesWhereInput[]
    NOT?: MatchesWhereInput | MatchesWhereInput[]
    team1Id?: StringFilter<"Matches"> | string
    team2Id?: StringFilter<"Matches"> | string
    venue?: StringFilter<"Matches"> | string
    date?: DateTimeFilter<"Matches"> | Date | string
    winner?: EnumMatchesWinnerFilter<"Matches"> | $Enums.MatchesWinner
    toss?: EnumMatchesWinnerFilter<"Matches"> | $Enums.MatchesWinner
    elected?: EnumMatchTossElectionFilter<"Matches"> | $Enums.MatchTossElection
    status?: EnumTournamentStatusFilter<"Matches"> | $Enums.TournamentStatus
    innings?: InningListRelationFilter
    playerScore?: PlayerScoreListRelationFilter
  }, "id" | "id">

  export type MatchesOrderByWithAggregationInput = {
    id?: SortOrder
    team1Id?: SortOrder
    team2Id?: SortOrder
    venue?: SortOrder
    date?: SortOrder
    winner?: SortOrder
    toss?: SortOrder
    elected?: SortOrder
    status?: SortOrder
    _count?: MatchesCountOrderByAggregateInput
    _max?: MatchesMaxOrderByAggregateInput
    _min?: MatchesMinOrderByAggregateInput
  }

  export type MatchesScalarWhereWithAggregatesInput = {
    AND?: MatchesScalarWhereWithAggregatesInput | MatchesScalarWhereWithAggregatesInput[]
    OR?: MatchesScalarWhereWithAggregatesInput[]
    NOT?: MatchesScalarWhereWithAggregatesInput | MatchesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Matches"> | string
    team1Id?: StringWithAggregatesFilter<"Matches"> | string
    team2Id?: StringWithAggregatesFilter<"Matches"> | string
    venue?: StringWithAggregatesFilter<"Matches"> | string
    date?: DateTimeWithAggregatesFilter<"Matches"> | Date | string
    winner?: EnumMatchesWinnerWithAggregatesFilter<"Matches"> | $Enums.MatchesWinner
    toss?: EnumMatchesWinnerWithAggregatesFilter<"Matches"> | $Enums.MatchesWinner
    elected?: EnumMatchTossElectionWithAggregatesFilter<"Matches"> | $Enums.MatchTossElection
    status?: EnumTournamentStatusWithAggregatesFilter<"Matches"> | $Enums.TournamentStatus
  }

  export type InningWhereInput = {
    AND?: InningWhereInput | InningWhereInput[]
    OR?: InningWhereInput[]
    NOT?: InningWhereInput | InningWhereInput[]
    id?: StringFilter<"Inning"> | string
    whichInning?: EnumWhichInningFilter<"Inning"> | $Enums.WhichInning
    score?: IntFilter<"Inning"> | number
    wickets?: IntFilter<"Inning"> | number
    extras?: IntFilter<"Inning"> | number
    batsman1?: StringNullableFilter<"Inning"> | string | null
    batsman2?: StringNullableFilter<"Inning"> | string | null
    bowler?: StringNullableFilter<"Inning"> | string | null
    matchId?: StringFilter<"Inning"> | string
    match?: XOR<MatchesScalarRelationFilter, MatchesWhereInput>
    balls?: BallsListRelationFilter
  }

  export type InningOrderByWithRelationInput = {
    id?: SortOrder
    whichInning?: SortOrder
    score?: SortOrder
    wickets?: SortOrder
    extras?: SortOrder
    batsman1?: SortOrderInput | SortOrder
    batsman2?: SortOrderInput | SortOrder
    bowler?: SortOrderInput | SortOrder
    matchId?: SortOrder
    match?: MatchesOrderByWithRelationInput
    balls?: BallsOrderByRelationAggregateInput
  }

  export type InningWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    matchId_whichInning?: InningMatchIdWhichInningCompoundUniqueInput
    AND?: InningWhereInput | InningWhereInput[]
    OR?: InningWhereInput[]
    NOT?: InningWhereInput | InningWhereInput[]
    whichInning?: EnumWhichInningFilter<"Inning"> | $Enums.WhichInning
    score?: IntFilter<"Inning"> | number
    wickets?: IntFilter<"Inning"> | number
    extras?: IntFilter<"Inning"> | number
    batsman1?: StringNullableFilter<"Inning"> | string | null
    batsman2?: StringNullableFilter<"Inning"> | string | null
    bowler?: StringNullableFilter<"Inning"> | string | null
    matchId?: StringFilter<"Inning"> | string
    match?: XOR<MatchesScalarRelationFilter, MatchesWhereInput>
    balls?: BallsListRelationFilter
  }, "id" | "id" | "matchId_whichInning">

  export type InningOrderByWithAggregationInput = {
    id?: SortOrder
    whichInning?: SortOrder
    score?: SortOrder
    wickets?: SortOrder
    extras?: SortOrder
    batsman1?: SortOrderInput | SortOrder
    batsman2?: SortOrderInput | SortOrder
    bowler?: SortOrderInput | SortOrder
    matchId?: SortOrder
    _count?: InningCountOrderByAggregateInput
    _avg?: InningAvgOrderByAggregateInput
    _max?: InningMaxOrderByAggregateInput
    _min?: InningMinOrderByAggregateInput
    _sum?: InningSumOrderByAggregateInput
  }

  export type InningScalarWhereWithAggregatesInput = {
    AND?: InningScalarWhereWithAggregatesInput | InningScalarWhereWithAggregatesInput[]
    OR?: InningScalarWhereWithAggregatesInput[]
    NOT?: InningScalarWhereWithAggregatesInput | InningScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Inning"> | string
    whichInning?: EnumWhichInningWithAggregatesFilter<"Inning"> | $Enums.WhichInning
    score?: IntWithAggregatesFilter<"Inning"> | number
    wickets?: IntWithAggregatesFilter<"Inning"> | number
    extras?: IntWithAggregatesFilter<"Inning"> | number
    batsman1?: StringNullableWithAggregatesFilter<"Inning"> | string | null
    batsman2?: StringNullableWithAggregatesFilter<"Inning"> | string | null
    bowler?: StringNullableWithAggregatesFilter<"Inning"> | string | null
    matchId?: StringWithAggregatesFilter<"Inning"> | string
  }

  export type BallsWhereInput = {
    AND?: BallsWhereInput | BallsWhereInput[]
    OR?: BallsWhereInput[]
    NOT?: BallsWhereInput | BallsWhereInput[]
    id?: StringFilter<"Balls"> | string
    ballNo?: IntFilter<"Balls"> | number
    whatHappend?: EnumWhatHappendFilter<"Balls"> | $Enums.WhatHappend
    bowler?: StringFilter<"Balls"> | string
    batsman?: StringFilter<"Balls"> | string
    catch?: StringNullableFilter<"Balls"> | string | null
    runout?: StringNullableFilter<"Balls"> | string | null
    inningId?: StringFilter<"Balls"> | string
    inning?: XOR<InningScalarRelationFilter, InningWhereInput>
  }

  export type BallsOrderByWithRelationInput = {
    id?: SortOrder
    ballNo?: SortOrder
    whatHappend?: SortOrder
    bowler?: SortOrder
    batsman?: SortOrder
    catch?: SortOrderInput | SortOrder
    runout?: SortOrderInput | SortOrder
    inningId?: SortOrder
    inning?: InningOrderByWithRelationInput
  }

  export type BallsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BallsWhereInput | BallsWhereInput[]
    OR?: BallsWhereInput[]
    NOT?: BallsWhereInput | BallsWhereInput[]
    ballNo?: IntFilter<"Balls"> | number
    whatHappend?: EnumWhatHappendFilter<"Balls"> | $Enums.WhatHappend
    bowler?: StringFilter<"Balls"> | string
    batsman?: StringFilter<"Balls"> | string
    catch?: StringNullableFilter<"Balls"> | string | null
    runout?: StringNullableFilter<"Balls"> | string | null
    inningId?: StringFilter<"Balls"> | string
    inning?: XOR<InningScalarRelationFilter, InningWhereInput>
  }, "id" | "id">

  export type BallsOrderByWithAggregationInput = {
    id?: SortOrder
    ballNo?: SortOrder
    whatHappend?: SortOrder
    bowler?: SortOrder
    batsman?: SortOrder
    catch?: SortOrderInput | SortOrder
    runout?: SortOrderInput | SortOrder
    inningId?: SortOrder
    _count?: BallsCountOrderByAggregateInput
    _avg?: BallsAvgOrderByAggregateInput
    _max?: BallsMaxOrderByAggregateInput
    _min?: BallsMinOrderByAggregateInput
    _sum?: BallsSumOrderByAggregateInput
  }

  export type BallsScalarWhereWithAggregatesInput = {
    AND?: BallsScalarWhereWithAggregatesInput | BallsScalarWhereWithAggregatesInput[]
    OR?: BallsScalarWhereWithAggregatesInput[]
    NOT?: BallsScalarWhereWithAggregatesInput | BallsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Balls"> | string
    ballNo?: IntWithAggregatesFilter<"Balls"> | number
    whatHappend?: EnumWhatHappendWithAggregatesFilter<"Balls"> | $Enums.WhatHappend
    bowler?: StringWithAggregatesFilter<"Balls"> | string
    batsman?: StringWithAggregatesFilter<"Balls"> | string
    catch?: StringNullableWithAggregatesFilter<"Balls"> | string | null
    runout?: StringNullableWithAggregatesFilter<"Balls"> | string | null
    inningId?: StringWithAggregatesFilter<"Balls"> | string
  }

  export type TournamentWhereInput = {
    AND?: TournamentWhereInput | TournamentWhereInput[]
    OR?: TournamentWhereInput[]
    NOT?: TournamentWhereInput | TournamentWhereInput[]
    id?: StringFilter<"Tournament"> | string
    maxLimit?: IntFilter<"Tournament"> | number
    entryFee?: IntFilter<"Tournament"> | number
    prizePool?: IntNullableFilter<"Tournament"> | number | null
    winner?: StringNullableFilter<"Tournament"> | string | null
    ownerId?: StringFilter<"Tournament"> | string
    teamsJoined?: IntFilter<"Tournament"> | number
    status?: EnumTournamentStatusFilter<"Tournament"> | $Enums.TournamentStatus
    tournamentJoinedTeams?: TournamentJoinedTeamsListRelationFilter
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TournamentOrderByWithRelationInput = {
    id?: SortOrder
    maxLimit?: SortOrder
    entryFee?: SortOrder
    prizePool?: SortOrderInput | SortOrder
    winner?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    teamsJoined?: SortOrder
    status?: SortOrder
    tournamentJoinedTeams?: TournamentJoinedTeamsOrderByRelationAggregateInput
    owner?: UserOrderByWithRelationInput
  }

  export type TournamentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TournamentWhereInput | TournamentWhereInput[]
    OR?: TournamentWhereInput[]
    NOT?: TournamentWhereInput | TournamentWhereInput[]
    maxLimit?: IntFilter<"Tournament"> | number
    entryFee?: IntFilter<"Tournament"> | number
    prizePool?: IntNullableFilter<"Tournament"> | number | null
    winner?: StringNullableFilter<"Tournament"> | string | null
    ownerId?: StringFilter<"Tournament"> | string
    teamsJoined?: IntFilter<"Tournament"> | number
    status?: EnumTournamentStatusFilter<"Tournament"> | $Enums.TournamentStatus
    tournamentJoinedTeams?: TournamentJoinedTeamsListRelationFilter
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "id">

  export type TournamentOrderByWithAggregationInput = {
    id?: SortOrder
    maxLimit?: SortOrder
    entryFee?: SortOrder
    prizePool?: SortOrderInput | SortOrder
    winner?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    teamsJoined?: SortOrder
    status?: SortOrder
    _count?: TournamentCountOrderByAggregateInput
    _avg?: TournamentAvgOrderByAggregateInput
    _max?: TournamentMaxOrderByAggregateInput
    _min?: TournamentMinOrderByAggregateInput
    _sum?: TournamentSumOrderByAggregateInput
  }

  export type TournamentScalarWhereWithAggregatesInput = {
    AND?: TournamentScalarWhereWithAggregatesInput | TournamentScalarWhereWithAggregatesInput[]
    OR?: TournamentScalarWhereWithAggregatesInput[]
    NOT?: TournamentScalarWhereWithAggregatesInput | TournamentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tournament"> | string
    maxLimit?: IntWithAggregatesFilter<"Tournament"> | number
    entryFee?: IntWithAggregatesFilter<"Tournament"> | number
    prizePool?: IntNullableWithAggregatesFilter<"Tournament"> | number | null
    winner?: StringNullableWithAggregatesFilter<"Tournament"> | string | null
    ownerId?: StringWithAggregatesFilter<"Tournament"> | string
    teamsJoined?: IntWithAggregatesFilter<"Tournament"> | number
    status?: EnumTournamentStatusWithAggregatesFilter<"Tournament"> | $Enums.TournamentStatus
  }

  export type TournamentJoinedTeamsWhereInput = {
    AND?: TournamentJoinedTeamsWhereInput | TournamentJoinedTeamsWhereInput[]
    OR?: TournamentJoinedTeamsWhereInput[]
    NOT?: TournamentJoinedTeamsWhereInput | TournamentJoinedTeamsWhereInput[]
    id?: StringFilter<"TournamentJoinedTeams"> | string
    tournamentId?: StringFilter<"TournamentJoinedTeams"> | string
    userTeamId?: StringFilter<"TournamentJoinedTeams"> | string
    tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>
    userTeam?: XOR<UserTeamsScalarRelationFilter, UserTeamsWhereInput>
  }

  export type TournamentJoinedTeamsOrderByWithRelationInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    userTeamId?: SortOrder
    tournament?: TournamentOrderByWithRelationInput
    userTeam?: UserTeamsOrderByWithRelationInput
  }

  export type TournamentJoinedTeamsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TournamentJoinedTeamsWhereInput | TournamentJoinedTeamsWhereInput[]
    OR?: TournamentJoinedTeamsWhereInput[]
    NOT?: TournamentJoinedTeamsWhereInput | TournamentJoinedTeamsWhereInput[]
    tournamentId?: StringFilter<"TournamentJoinedTeams"> | string
    userTeamId?: StringFilter<"TournamentJoinedTeams"> | string
    tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>
    userTeam?: XOR<UserTeamsScalarRelationFilter, UserTeamsWhereInput>
  }, "id" | "id">

  export type TournamentJoinedTeamsOrderByWithAggregationInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    userTeamId?: SortOrder
    _count?: TournamentJoinedTeamsCountOrderByAggregateInput
    _max?: TournamentJoinedTeamsMaxOrderByAggregateInput
    _min?: TournamentJoinedTeamsMinOrderByAggregateInput
  }

  export type TournamentJoinedTeamsScalarWhereWithAggregatesInput = {
    AND?: TournamentJoinedTeamsScalarWhereWithAggregatesInput | TournamentJoinedTeamsScalarWhereWithAggregatesInput[]
    OR?: TournamentJoinedTeamsScalarWhereWithAggregatesInput[]
    NOT?: TournamentJoinedTeamsScalarWhereWithAggregatesInput | TournamentJoinedTeamsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TournamentJoinedTeams"> | string
    tournamentId?: StringWithAggregatesFilter<"TournamentJoinedTeams"> | string
    userTeamId?: StringWithAggregatesFilter<"TournamentJoinedTeams"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    publicKey?: string | null
    role: $Enums.UserRole
    teams?: UserTeamsCreateNestedManyWithoutUserInput
    tournaments?: TournamentCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    publicKey?: string | null
    role: $Enums.UserRole
    teams?: UserTeamsUncheckedCreateNestedManyWithoutUserInput
    tournaments?: TournamentUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    teams?: UserTeamsUpdateManyWithoutUserNestedInput
    tournaments?: TournamentUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    teams?: UserTeamsUncheckedUpdateManyWithoutUserNestedInput
    tournaments?: TournamentUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    publicKey?: string | null
    role: $Enums.UserRole
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserTeamsCreateInput = {
    id?: string
    fantasyPoints: number
    captain: string
    viceCaptain: string
    disabled: boolean
    user: UserCreateNestedOneWithoutTeamsInput
    players?: UserTeamPlayersCreateNestedManyWithoutUserTeamsInput
    tournamentsJoined?: TournamentJoinedTeamsCreateNestedManyWithoutUserTeamInput
  }

  export type UserTeamsUncheckedCreateInput = {
    id?: string
    fantasyPoints: number
    captain: string
    viceCaptain: string
    userId: string
    disabled: boolean
    players?: UserTeamPlayersUncheckedCreateNestedManyWithoutUserTeamsInput
    tournamentsJoined?: TournamentJoinedTeamsUncheckedCreateNestedManyWithoutUserTeamInput
  }

  export type UserTeamsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fantasyPoints?: IntFieldUpdateOperationsInput | number
    captain?: StringFieldUpdateOperationsInput | string
    viceCaptain?: StringFieldUpdateOperationsInput | string
    disabled?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutTeamsNestedInput
    players?: UserTeamPlayersUpdateManyWithoutUserTeamsNestedInput
    tournamentsJoined?: TournamentJoinedTeamsUpdateManyWithoutUserTeamNestedInput
  }

  export type UserTeamsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fantasyPoints?: IntFieldUpdateOperationsInput | number
    captain?: StringFieldUpdateOperationsInput | string
    viceCaptain?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    disabled?: BoolFieldUpdateOperationsInput | boolean
    players?: UserTeamPlayersUncheckedUpdateManyWithoutUserTeamsNestedInput
    tournamentsJoined?: TournamentJoinedTeamsUncheckedUpdateManyWithoutUserTeamNestedInput
  }

  export type UserTeamsCreateManyInput = {
    id?: string
    fantasyPoints: number
    captain: string
    viceCaptain: string
    userId: string
    disabled: boolean
  }

  export type UserTeamsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fantasyPoints?: IntFieldUpdateOperationsInput | number
    captain?: StringFieldUpdateOperationsInput | string
    viceCaptain?: StringFieldUpdateOperationsInput | string
    disabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserTeamsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fantasyPoints?: IntFieldUpdateOperationsInput | number
    captain?: StringFieldUpdateOperationsInput | string
    viceCaptain?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    disabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserTeamPlayersCreateInput = {
    id?: string
    userTeams: UserTeamsCreateNestedOneWithoutPlayersInput
    players: PlayersCreateNestedOneWithoutUserTeamPlayersInput
  }

  export type UserTeamPlayersUncheckedCreateInput = {
    id?: string
    userTeamsId: string
    playersId: string
  }

  export type UserTeamPlayersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userTeams?: UserTeamsUpdateOneRequiredWithoutPlayersNestedInput
    players?: PlayersUpdateOneRequiredWithoutUserTeamPlayersNestedInput
  }

  export type UserTeamPlayersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userTeamsId?: StringFieldUpdateOperationsInput | string
    playersId?: StringFieldUpdateOperationsInput | string
  }

  export type UserTeamPlayersCreateManyInput = {
    id?: string
    userTeamsId: string
    playersId: string
  }

  export type UserTeamPlayersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type UserTeamPlayersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userTeamsId?: StringFieldUpdateOperationsInput | string
    playersId?: StringFieldUpdateOperationsInput | string
  }

  export type SquadCreateInput = {
    id?: string
    name: string
    logo: string
    captain: string
    viceCaptain: string
    players?: PlayersCreateNestedManyWithoutSquadInput
  }

  export type SquadUncheckedCreateInput = {
    id?: string
    name: string
    logo: string
    captain: string
    viceCaptain: string
    players?: PlayersUncheckedCreateNestedManyWithoutSquadInput
  }

  export type SquadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    captain?: StringFieldUpdateOperationsInput | string
    viceCaptain?: StringFieldUpdateOperationsInput | string
    players?: PlayersUpdateManyWithoutSquadNestedInput
  }

  export type SquadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    captain?: StringFieldUpdateOperationsInput | string
    viceCaptain?: StringFieldUpdateOperationsInput | string
    players?: PlayersUncheckedUpdateManyWithoutSquadNestedInput
  }

  export type SquadCreateManyInput = {
    id?: string
    name: string
    logo: string
    captain: string
    viceCaptain: string
  }

  export type SquadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    captain?: StringFieldUpdateOperationsInput | string
    viceCaptain?: StringFieldUpdateOperationsInput | string
  }

  export type SquadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    captain?: StringFieldUpdateOperationsInput | string
    viceCaptain?: StringFieldUpdateOperationsInput | string
  }

  export type PlayersCreateInput = {
    id?: string
    name: string
    role: $Enums.PlayerRole
    battingDexture: $Enums.PlayerDexture
    bowlingDexture: $Enums.PlayerDexture
    countryStatus: $Enums.PlayerCountryStatus
    age: string
    img: string
    squad: SquadCreateNestedOneWithoutPlayersInput
    userTeamPlayers?: UserTeamPlayersCreateNestedManyWithoutPlayersInput
    score?: PlayerScoreCreateNestedManyWithoutPlayerInput
  }

  export type PlayersUncheckedCreateInput = {
    id?: string
    name: string
    role: $Enums.PlayerRole
    battingDexture: $Enums.PlayerDexture
    bowlingDexture: $Enums.PlayerDexture
    countryStatus: $Enums.PlayerCountryStatus
    squadId: string
    age: string
    img: string
    userTeamPlayers?: UserTeamPlayersUncheckedCreateNestedManyWithoutPlayersInput
    score?: PlayerScoreUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumPlayerRoleFieldUpdateOperationsInput | $Enums.PlayerRole
    battingDexture?: EnumPlayerDextureFieldUpdateOperationsInput | $Enums.PlayerDexture
    bowlingDexture?: EnumPlayerDextureFieldUpdateOperationsInput | $Enums.PlayerDexture
    countryStatus?: EnumPlayerCountryStatusFieldUpdateOperationsInput | $Enums.PlayerCountryStatus
    age?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    squad?: SquadUpdateOneRequiredWithoutPlayersNestedInput
    userTeamPlayers?: UserTeamPlayersUpdateManyWithoutPlayersNestedInput
    score?: PlayerScoreUpdateManyWithoutPlayerNestedInput
  }

  export type PlayersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumPlayerRoleFieldUpdateOperationsInput | $Enums.PlayerRole
    battingDexture?: EnumPlayerDextureFieldUpdateOperationsInput | $Enums.PlayerDexture
    bowlingDexture?: EnumPlayerDextureFieldUpdateOperationsInput | $Enums.PlayerDexture
    countryStatus?: EnumPlayerCountryStatusFieldUpdateOperationsInput | $Enums.PlayerCountryStatus
    squadId?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    userTeamPlayers?: UserTeamPlayersUncheckedUpdateManyWithoutPlayersNestedInput
    score?: PlayerScoreUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayersCreateManyInput = {
    id?: string
    name: string
    role: $Enums.PlayerRole
    battingDexture: $Enums.PlayerDexture
    bowlingDexture: $Enums.PlayerDexture
    countryStatus: $Enums.PlayerCountryStatus
    squadId: string
    age: string
    img: string
  }

  export type PlayersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumPlayerRoleFieldUpdateOperationsInput | $Enums.PlayerRole
    battingDexture?: EnumPlayerDextureFieldUpdateOperationsInput | $Enums.PlayerDexture
    bowlingDexture?: EnumPlayerDextureFieldUpdateOperationsInput | $Enums.PlayerDexture
    countryStatus?: EnumPlayerCountryStatusFieldUpdateOperationsInput | $Enums.PlayerCountryStatus
    age?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
  }

  export type PlayersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumPlayerRoleFieldUpdateOperationsInput | $Enums.PlayerRole
    battingDexture?: EnumPlayerDextureFieldUpdateOperationsInput | $Enums.PlayerDexture
    bowlingDexture?: EnumPlayerDextureFieldUpdateOperationsInput | $Enums.PlayerDexture
    countryStatus?: EnumPlayerCountryStatusFieldUpdateOperationsInput | $Enums.PlayerCountryStatus
    squadId?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerScoreCreateInput = {
    id?: string
    playingStatus: $Enums.PlayerPlayingStatus
    fantasyPoints: number
    run: number
    sixes: number
    fours: number
    others: number
    runsConceded: number
    wickets: number
    ballsBowled: number
    catches: number
    runout: number
    dotBall: number
    player: PlayersCreateNestedOneWithoutScoreInput
    match: MatchesCreateNestedOneWithoutPlayerScoreInput
  }

  export type PlayerScoreUncheckedCreateInput = {
    id?: string
    playingStatus: $Enums.PlayerPlayingStatus
    fantasyPoints: number
    run: number
    sixes: number
    fours: number
    others: number
    runsConceded: number
    wickets: number
    ballsBowled: number
    catches: number
    runout: number
    dotBall: number
    playerId: string
    matchId: string
  }

  export type PlayerScoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playingStatus?: EnumPlayerPlayingStatusFieldUpdateOperationsInput | $Enums.PlayerPlayingStatus
    fantasyPoints?: IntFieldUpdateOperationsInput | number
    run?: IntFieldUpdateOperationsInput | number
    sixes?: IntFieldUpdateOperationsInput | number
    fours?: IntFieldUpdateOperationsInput | number
    others?: IntFieldUpdateOperationsInput | number
    runsConceded?: IntFieldUpdateOperationsInput | number
    wickets?: IntFieldUpdateOperationsInput | number
    ballsBowled?: IntFieldUpdateOperationsInput | number
    catches?: IntFieldUpdateOperationsInput | number
    runout?: IntFieldUpdateOperationsInput | number
    dotBall?: IntFieldUpdateOperationsInput | number
    player?: PlayersUpdateOneRequiredWithoutScoreNestedInput
    match?: MatchesUpdateOneRequiredWithoutPlayerScoreNestedInput
  }

  export type PlayerScoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playingStatus?: EnumPlayerPlayingStatusFieldUpdateOperationsInput | $Enums.PlayerPlayingStatus
    fantasyPoints?: IntFieldUpdateOperationsInput | number
    run?: IntFieldUpdateOperationsInput | number
    sixes?: IntFieldUpdateOperationsInput | number
    fours?: IntFieldUpdateOperationsInput | number
    others?: IntFieldUpdateOperationsInput | number
    runsConceded?: IntFieldUpdateOperationsInput | number
    wickets?: IntFieldUpdateOperationsInput | number
    ballsBowled?: IntFieldUpdateOperationsInput | number
    catches?: IntFieldUpdateOperationsInput | number
    runout?: IntFieldUpdateOperationsInput | number
    dotBall?: IntFieldUpdateOperationsInput | number
    playerId?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerScoreCreateManyInput = {
    id?: string
    playingStatus: $Enums.PlayerPlayingStatus
    fantasyPoints: number
    run: number
    sixes: number
    fours: number
    others: number
    runsConceded: number
    wickets: number
    ballsBowled: number
    catches: number
    runout: number
    dotBall: number
    playerId: string
    matchId: string
  }

  export type PlayerScoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    playingStatus?: EnumPlayerPlayingStatusFieldUpdateOperationsInput | $Enums.PlayerPlayingStatus
    fantasyPoints?: IntFieldUpdateOperationsInput | number
    run?: IntFieldUpdateOperationsInput | number
    sixes?: IntFieldUpdateOperationsInput | number
    fours?: IntFieldUpdateOperationsInput | number
    others?: IntFieldUpdateOperationsInput | number
    runsConceded?: IntFieldUpdateOperationsInput | number
    wickets?: IntFieldUpdateOperationsInput | number
    ballsBowled?: IntFieldUpdateOperationsInput | number
    catches?: IntFieldUpdateOperationsInput | number
    runout?: IntFieldUpdateOperationsInput | number
    dotBall?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerScoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    playingStatus?: EnumPlayerPlayingStatusFieldUpdateOperationsInput | $Enums.PlayerPlayingStatus
    fantasyPoints?: IntFieldUpdateOperationsInput | number
    run?: IntFieldUpdateOperationsInput | number
    sixes?: IntFieldUpdateOperationsInput | number
    fours?: IntFieldUpdateOperationsInput | number
    others?: IntFieldUpdateOperationsInput | number
    runsConceded?: IntFieldUpdateOperationsInput | number
    wickets?: IntFieldUpdateOperationsInput | number
    ballsBowled?: IntFieldUpdateOperationsInput | number
    catches?: IntFieldUpdateOperationsInput | number
    runout?: IntFieldUpdateOperationsInput | number
    dotBall?: IntFieldUpdateOperationsInput | number
    playerId?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
  }

  export type MatchesCreateInput = {
    id?: string
    team1Id: string
    team2Id: string
    venue: string
    date: Date | string
    winner: $Enums.MatchesWinner
    toss: $Enums.MatchesWinner
    elected: $Enums.MatchTossElection
    status: $Enums.TournamentStatus
    innings?: InningCreateNestedManyWithoutMatchInput
    playerScore?: PlayerScoreCreateNestedManyWithoutMatchInput
  }

  export type MatchesUncheckedCreateInput = {
    id?: string
    team1Id: string
    team2Id: string
    venue: string
    date: Date | string
    winner: $Enums.MatchesWinner
    toss: $Enums.MatchesWinner
    elected: $Enums.MatchTossElection
    status: $Enums.TournamentStatus
    innings?: InningUncheckedCreateNestedManyWithoutMatchInput
    playerScore?: PlayerScoreUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    team1Id?: StringFieldUpdateOperationsInput | string
    team2Id?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    winner?: EnumMatchesWinnerFieldUpdateOperationsInput | $Enums.MatchesWinner
    toss?: EnumMatchesWinnerFieldUpdateOperationsInput | $Enums.MatchesWinner
    elected?: EnumMatchTossElectionFieldUpdateOperationsInput | $Enums.MatchTossElection
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    innings?: InningUpdateManyWithoutMatchNestedInput
    playerScore?: PlayerScoreUpdateManyWithoutMatchNestedInput
  }

  export type MatchesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    team1Id?: StringFieldUpdateOperationsInput | string
    team2Id?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    winner?: EnumMatchesWinnerFieldUpdateOperationsInput | $Enums.MatchesWinner
    toss?: EnumMatchesWinnerFieldUpdateOperationsInput | $Enums.MatchesWinner
    elected?: EnumMatchTossElectionFieldUpdateOperationsInput | $Enums.MatchTossElection
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    innings?: InningUncheckedUpdateManyWithoutMatchNestedInput
    playerScore?: PlayerScoreUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchesCreateManyInput = {
    id?: string
    team1Id: string
    team2Id: string
    venue: string
    date: Date | string
    winner: $Enums.MatchesWinner
    toss: $Enums.MatchesWinner
    elected: $Enums.MatchTossElection
    status: $Enums.TournamentStatus
  }

  export type MatchesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    team1Id?: StringFieldUpdateOperationsInput | string
    team2Id?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    winner?: EnumMatchesWinnerFieldUpdateOperationsInput | $Enums.MatchesWinner
    toss?: EnumMatchesWinnerFieldUpdateOperationsInput | $Enums.MatchesWinner
    elected?: EnumMatchTossElectionFieldUpdateOperationsInput | $Enums.MatchTossElection
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
  }

  export type MatchesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    team1Id?: StringFieldUpdateOperationsInput | string
    team2Id?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    winner?: EnumMatchesWinnerFieldUpdateOperationsInput | $Enums.MatchesWinner
    toss?: EnumMatchesWinnerFieldUpdateOperationsInput | $Enums.MatchesWinner
    elected?: EnumMatchTossElectionFieldUpdateOperationsInput | $Enums.MatchTossElection
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
  }

  export type InningCreateInput = {
    id?: string
    whichInning: $Enums.WhichInning
    score: number
    wickets: number
    extras: number
    batsman1?: string | null
    batsman2?: string | null
    bowler?: string | null
    match: MatchesCreateNestedOneWithoutInningsInput
    balls?: BallsCreateNestedManyWithoutInningInput
  }

  export type InningUncheckedCreateInput = {
    id?: string
    whichInning: $Enums.WhichInning
    score: number
    wickets: number
    extras: number
    batsman1?: string | null
    batsman2?: string | null
    bowler?: string | null
    matchId: string
    balls?: BallsUncheckedCreateNestedManyWithoutInningInput
  }

  export type InningUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    whichInning?: EnumWhichInningFieldUpdateOperationsInput | $Enums.WhichInning
    score?: IntFieldUpdateOperationsInput | number
    wickets?: IntFieldUpdateOperationsInput | number
    extras?: IntFieldUpdateOperationsInput | number
    batsman1?: NullableStringFieldUpdateOperationsInput | string | null
    batsman2?: NullableStringFieldUpdateOperationsInput | string | null
    bowler?: NullableStringFieldUpdateOperationsInput | string | null
    match?: MatchesUpdateOneRequiredWithoutInningsNestedInput
    balls?: BallsUpdateManyWithoutInningNestedInput
  }

  export type InningUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    whichInning?: EnumWhichInningFieldUpdateOperationsInput | $Enums.WhichInning
    score?: IntFieldUpdateOperationsInput | number
    wickets?: IntFieldUpdateOperationsInput | number
    extras?: IntFieldUpdateOperationsInput | number
    batsman1?: NullableStringFieldUpdateOperationsInput | string | null
    batsman2?: NullableStringFieldUpdateOperationsInput | string | null
    bowler?: NullableStringFieldUpdateOperationsInput | string | null
    matchId?: StringFieldUpdateOperationsInput | string
    balls?: BallsUncheckedUpdateManyWithoutInningNestedInput
  }

  export type InningCreateManyInput = {
    id?: string
    whichInning: $Enums.WhichInning
    score: number
    wickets: number
    extras: number
    batsman1?: string | null
    batsman2?: string | null
    bowler?: string | null
    matchId: string
  }

  export type InningUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    whichInning?: EnumWhichInningFieldUpdateOperationsInput | $Enums.WhichInning
    score?: IntFieldUpdateOperationsInput | number
    wickets?: IntFieldUpdateOperationsInput | number
    extras?: IntFieldUpdateOperationsInput | number
    batsman1?: NullableStringFieldUpdateOperationsInput | string | null
    batsman2?: NullableStringFieldUpdateOperationsInput | string | null
    bowler?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InningUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    whichInning?: EnumWhichInningFieldUpdateOperationsInput | $Enums.WhichInning
    score?: IntFieldUpdateOperationsInput | number
    wickets?: IntFieldUpdateOperationsInput | number
    extras?: IntFieldUpdateOperationsInput | number
    batsman1?: NullableStringFieldUpdateOperationsInput | string | null
    batsman2?: NullableStringFieldUpdateOperationsInput | string | null
    bowler?: NullableStringFieldUpdateOperationsInput | string | null
    matchId?: StringFieldUpdateOperationsInput | string
  }

  export type BallsCreateInput = {
    id?: string
    ballNo: number
    whatHappend: $Enums.WhatHappend
    bowler: string
    batsman: string
    catch?: string | null
    runout?: string | null
    inning: InningCreateNestedOneWithoutBallsInput
  }

  export type BallsUncheckedCreateInput = {
    id?: string
    ballNo: number
    whatHappend: $Enums.WhatHappend
    bowler: string
    batsman: string
    catch?: string | null
    runout?: string | null
    inningId: string
  }

  export type BallsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ballNo?: IntFieldUpdateOperationsInput | number
    whatHappend?: EnumWhatHappendFieldUpdateOperationsInput | $Enums.WhatHappend
    bowler?: StringFieldUpdateOperationsInput | string
    batsman?: StringFieldUpdateOperationsInput | string
    catch?: NullableStringFieldUpdateOperationsInput | string | null
    runout?: NullableStringFieldUpdateOperationsInput | string | null
    inning?: InningUpdateOneRequiredWithoutBallsNestedInput
  }

  export type BallsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ballNo?: IntFieldUpdateOperationsInput | number
    whatHappend?: EnumWhatHappendFieldUpdateOperationsInput | $Enums.WhatHappend
    bowler?: StringFieldUpdateOperationsInput | string
    batsman?: StringFieldUpdateOperationsInput | string
    catch?: NullableStringFieldUpdateOperationsInput | string | null
    runout?: NullableStringFieldUpdateOperationsInput | string | null
    inningId?: StringFieldUpdateOperationsInput | string
  }

  export type BallsCreateManyInput = {
    id?: string
    ballNo: number
    whatHappend: $Enums.WhatHappend
    bowler: string
    batsman: string
    catch?: string | null
    runout?: string | null
    inningId: string
  }

  export type BallsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ballNo?: IntFieldUpdateOperationsInput | number
    whatHappend?: EnumWhatHappendFieldUpdateOperationsInput | $Enums.WhatHappend
    bowler?: StringFieldUpdateOperationsInput | string
    batsman?: StringFieldUpdateOperationsInput | string
    catch?: NullableStringFieldUpdateOperationsInput | string | null
    runout?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BallsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ballNo?: IntFieldUpdateOperationsInput | number
    whatHappend?: EnumWhatHappendFieldUpdateOperationsInput | $Enums.WhatHappend
    bowler?: StringFieldUpdateOperationsInput | string
    batsman?: StringFieldUpdateOperationsInput | string
    catch?: NullableStringFieldUpdateOperationsInput | string | null
    runout?: NullableStringFieldUpdateOperationsInput | string | null
    inningId?: StringFieldUpdateOperationsInput | string
  }

  export type TournamentCreateInput = {
    id?: string
    maxLimit: number
    entryFee: number
    prizePool?: number | null
    winner?: string | null
    teamsJoined: number
    status: $Enums.TournamentStatus
    tournamentJoinedTeams?: TournamentJoinedTeamsCreateNestedManyWithoutTournamentInput
    owner: UserCreateNestedOneWithoutTournamentsInput
  }

  export type TournamentUncheckedCreateInput = {
    id?: string
    maxLimit: number
    entryFee: number
    prizePool?: number | null
    winner?: string | null
    ownerId: string
    teamsJoined: number
    status: $Enums.TournamentStatus
    tournamentJoinedTeams?: TournamentJoinedTeamsUncheckedCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxLimit?: IntFieldUpdateOperationsInput | number
    entryFee?: IntFieldUpdateOperationsInput | number
    prizePool?: NullableIntFieldUpdateOperationsInput | number | null
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    teamsJoined?: IntFieldUpdateOperationsInput | number
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    tournamentJoinedTeams?: TournamentJoinedTeamsUpdateManyWithoutTournamentNestedInput
    owner?: UserUpdateOneRequiredWithoutTournamentsNestedInput
  }

  export type TournamentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxLimit?: IntFieldUpdateOperationsInput | number
    entryFee?: IntFieldUpdateOperationsInput | number
    prizePool?: NullableIntFieldUpdateOperationsInput | number | null
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    teamsJoined?: IntFieldUpdateOperationsInput | number
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    tournamentJoinedTeams?: TournamentJoinedTeamsUncheckedUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentCreateManyInput = {
    id?: string
    maxLimit: number
    entryFee: number
    prizePool?: number | null
    winner?: string | null
    ownerId: string
    teamsJoined: number
    status: $Enums.TournamentStatus
  }

  export type TournamentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxLimit?: IntFieldUpdateOperationsInput | number
    entryFee?: IntFieldUpdateOperationsInput | number
    prizePool?: NullableIntFieldUpdateOperationsInput | number | null
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    teamsJoined?: IntFieldUpdateOperationsInput | number
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
  }

  export type TournamentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxLimit?: IntFieldUpdateOperationsInput | number
    entryFee?: IntFieldUpdateOperationsInput | number
    prizePool?: NullableIntFieldUpdateOperationsInput | number | null
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    teamsJoined?: IntFieldUpdateOperationsInput | number
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
  }

  export type TournamentJoinedTeamsCreateInput = {
    id?: string
    tournament: TournamentCreateNestedOneWithoutTournamentJoinedTeamsInput
    userTeam: UserTeamsCreateNestedOneWithoutTournamentsJoinedInput
  }

  export type TournamentJoinedTeamsUncheckedCreateInput = {
    id?: string
    tournamentId: string
    userTeamId: string
  }

  export type TournamentJoinedTeamsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tournament?: TournamentUpdateOneRequiredWithoutTournamentJoinedTeamsNestedInput
    userTeam?: UserTeamsUpdateOneRequiredWithoutTournamentsJoinedNestedInput
  }

  export type TournamentJoinedTeamsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tournamentId?: StringFieldUpdateOperationsInput | string
    userTeamId?: StringFieldUpdateOperationsInput | string
  }

  export type TournamentJoinedTeamsCreateManyInput = {
    id?: string
    tournamentId: string
    userTeamId: string
  }

  export type TournamentJoinedTeamsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type TournamentJoinedTeamsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tournamentId?: StringFieldUpdateOperationsInput | string
    userTeamId?: StringFieldUpdateOperationsInput | string
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type UserTeamsListRelationFilter = {
    every?: UserTeamsWhereInput
    some?: UserTeamsWhereInput
    none?: UserTeamsWhereInput
  }

  export type TournamentListRelationFilter = {
    every?: TournamentWhereInput
    some?: TournamentWhereInput
    none?: TournamentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserTeamsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TournamentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    publicKey?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    publicKey?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    publicKey?: SortOrder
    role?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserTeamPlayersListRelationFilter = {
    every?: UserTeamPlayersWhereInput
    some?: UserTeamPlayersWhereInput
    none?: UserTeamPlayersWhereInput
  }

  export type TournamentJoinedTeamsListRelationFilter = {
    every?: TournamentJoinedTeamsWhereInput
    some?: TournamentJoinedTeamsWhereInput
    none?: TournamentJoinedTeamsWhereInput
  }

  export type UserTeamPlayersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TournamentJoinedTeamsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserTeamsCountOrderByAggregateInput = {
    id?: SortOrder
    fantasyPoints?: SortOrder
    captain?: SortOrder
    viceCaptain?: SortOrder
    userId?: SortOrder
    disabled?: SortOrder
  }

  export type UserTeamsAvgOrderByAggregateInput = {
    fantasyPoints?: SortOrder
  }

  export type UserTeamsMaxOrderByAggregateInput = {
    id?: SortOrder
    fantasyPoints?: SortOrder
    captain?: SortOrder
    viceCaptain?: SortOrder
    userId?: SortOrder
    disabled?: SortOrder
  }

  export type UserTeamsMinOrderByAggregateInput = {
    id?: SortOrder
    fantasyPoints?: SortOrder
    captain?: SortOrder
    viceCaptain?: SortOrder
    userId?: SortOrder
    disabled?: SortOrder
  }

  export type UserTeamsSumOrderByAggregateInput = {
    fantasyPoints?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserTeamsScalarRelationFilter = {
    is?: UserTeamsWhereInput
    isNot?: UserTeamsWhereInput
  }

  export type PlayersScalarRelationFilter = {
    is?: PlayersWhereInput
    isNot?: PlayersWhereInput
  }

  export type UserTeamPlayersCountOrderByAggregateInput = {
    id?: SortOrder
    userTeamsId?: SortOrder
    playersId?: SortOrder
  }

  export type UserTeamPlayersMaxOrderByAggregateInput = {
    id?: SortOrder
    userTeamsId?: SortOrder
    playersId?: SortOrder
  }

  export type UserTeamPlayersMinOrderByAggregateInput = {
    id?: SortOrder
    userTeamsId?: SortOrder
    playersId?: SortOrder
  }

  export type PlayersListRelationFilter = {
    every?: PlayersWhereInput
    some?: PlayersWhereInput
    none?: PlayersWhereInput
  }

  export type PlayersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SquadCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    captain?: SortOrder
    viceCaptain?: SortOrder
  }

  export type SquadMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    captain?: SortOrder
    viceCaptain?: SortOrder
  }

  export type SquadMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    captain?: SortOrder
    viceCaptain?: SortOrder
  }

  export type EnumPlayerRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.PlayerRole | EnumPlayerRoleFieldRefInput<$PrismaModel>
    in?: $Enums.PlayerRole[] | ListEnumPlayerRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlayerRole[] | ListEnumPlayerRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumPlayerRoleFilter<$PrismaModel> | $Enums.PlayerRole
  }

  export type EnumPlayerDextureFilter<$PrismaModel = never> = {
    equals?: $Enums.PlayerDexture | EnumPlayerDextureFieldRefInput<$PrismaModel>
    in?: $Enums.PlayerDexture[] | ListEnumPlayerDextureFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlayerDexture[] | ListEnumPlayerDextureFieldRefInput<$PrismaModel>
    not?: NestedEnumPlayerDextureFilter<$PrismaModel> | $Enums.PlayerDexture
  }

  export type EnumPlayerCountryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlayerCountryStatus | EnumPlayerCountryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlayerCountryStatus[] | ListEnumPlayerCountryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlayerCountryStatus[] | ListEnumPlayerCountryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlayerCountryStatusFilter<$PrismaModel> | $Enums.PlayerCountryStatus
  }

  export type SquadScalarRelationFilter = {
    is?: SquadWhereInput
    isNot?: SquadWhereInput
  }

  export type PlayerScoreListRelationFilter = {
    every?: PlayerScoreWhereInput
    some?: PlayerScoreWhereInput
    none?: PlayerScoreWhereInput
  }

  export type PlayerScoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    battingDexture?: SortOrder
    bowlingDexture?: SortOrder
    countryStatus?: SortOrder
    squadId?: SortOrder
    age?: SortOrder
    img?: SortOrder
  }

  export type PlayersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    battingDexture?: SortOrder
    bowlingDexture?: SortOrder
    countryStatus?: SortOrder
    squadId?: SortOrder
    age?: SortOrder
    img?: SortOrder
  }

  export type PlayersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    battingDexture?: SortOrder
    bowlingDexture?: SortOrder
    countryStatus?: SortOrder
    squadId?: SortOrder
    age?: SortOrder
    img?: SortOrder
  }

  export type EnumPlayerRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlayerRole | EnumPlayerRoleFieldRefInput<$PrismaModel>
    in?: $Enums.PlayerRole[] | ListEnumPlayerRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlayerRole[] | ListEnumPlayerRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumPlayerRoleWithAggregatesFilter<$PrismaModel> | $Enums.PlayerRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlayerRoleFilter<$PrismaModel>
    _max?: NestedEnumPlayerRoleFilter<$PrismaModel>
  }

  export type EnumPlayerDextureWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlayerDexture | EnumPlayerDextureFieldRefInput<$PrismaModel>
    in?: $Enums.PlayerDexture[] | ListEnumPlayerDextureFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlayerDexture[] | ListEnumPlayerDextureFieldRefInput<$PrismaModel>
    not?: NestedEnumPlayerDextureWithAggregatesFilter<$PrismaModel> | $Enums.PlayerDexture
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlayerDextureFilter<$PrismaModel>
    _max?: NestedEnumPlayerDextureFilter<$PrismaModel>
  }

  export type EnumPlayerCountryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlayerCountryStatus | EnumPlayerCountryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlayerCountryStatus[] | ListEnumPlayerCountryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlayerCountryStatus[] | ListEnumPlayerCountryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlayerCountryStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlayerCountryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlayerCountryStatusFilter<$PrismaModel>
    _max?: NestedEnumPlayerCountryStatusFilter<$PrismaModel>
  }

  export type EnumPlayerPlayingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlayerPlayingStatus | EnumPlayerPlayingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlayerPlayingStatus[] | ListEnumPlayerPlayingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlayerPlayingStatus[] | ListEnumPlayerPlayingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlayerPlayingStatusFilter<$PrismaModel> | $Enums.PlayerPlayingStatus
  }

  export type MatchesScalarRelationFilter = {
    is?: MatchesWhereInput
    isNot?: MatchesWhereInput
  }

  export type PlayerScorePlayerIdMatchIdCompoundUniqueInput = {
    playerId: string
    matchId: string
  }

  export type PlayerScoreCountOrderByAggregateInput = {
    id?: SortOrder
    playingStatus?: SortOrder
    fantasyPoints?: SortOrder
    run?: SortOrder
    sixes?: SortOrder
    fours?: SortOrder
    others?: SortOrder
    runsConceded?: SortOrder
    wickets?: SortOrder
    ballsBowled?: SortOrder
    catches?: SortOrder
    runout?: SortOrder
    dotBall?: SortOrder
    playerId?: SortOrder
    matchId?: SortOrder
  }

  export type PlayerScoreAvgOrderByAggregateInput = {
    fantasyPoints?: SortOrder
    run?: SortOrder
    sixes?: SortOrder
    fours?: SortOrder
    others?: SortOrder
    runsConceded?: SortOrder
    wickets?: SortOrder
    ballsBowled?: SortOrder
    catches?: SortOrder
    runout?: SortOrder
    dotBall?: SortOrder
  }

  export type PlayerScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    playingStatus?: SortOrder
    fantasyPoints?: SortOrder
    run?: SortOrder
    sixes?: SortOrder
    fours?: SortOrder
    others?: SortOrder
    runsConceded?: SortOrder
    wickets?: SortOrder
    ballsBowled?: SortOrder
    catches?: SortOrder
    runout?: SortOrder
    dotBall?: SortOrder
    playerId?: SortOrder
    matchId?: SortOrder
  }

  export type PlayerScoreMinOrderByAggregateInput = {
    id?: SortOrder
    playingStatus?: SortOrder
    fantasyPoints?: SortOrder
    run?: SortOrder
    sixes?: SortOrder
    fours?: SortOrder
    others?: SortOrder
    runsConceded?: SortOrder
    wickets?: SortOrder
    ballsBowled?: SortOrder
    catches?: SortOrder
    runout?: SortOrder
    dotBall?: SortOrder
    playerId?: SortOrder
    matchId?: SortOrder
  }

  export type PlayerScoreSumOrderByAggregateInput = {
    fantasyPoints?: SortOrder
    run?: SortOrder
    sixes?: SortOrder
    fours?: SortOrder
    others?: SortOrder
    runsConceded?: SortOrder
    wickets?: SortOrder
    ballsBowled?: SortOrder
    catches?: SortOrder
    runout?: SortOrder
    dotBall?: SortOrder
  }

  export type EnumPlayerPlayingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlayerPlayingStatus | EnumPlayerPlayingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlayerPlayingStatus[] | ListEnumPlayerPlayingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlayerPlayingStatus[] | ListEnumPlayerPlayingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlayerPlayingStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlayerPlayingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlayerPlayingStatusFilter<$PrismaModel>
    _max?: NestedEnumPlayerPlayingStatusFilter<$PrismaModel>
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

  export type EnumMatchesWinnerFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchesWinner | EnumMatchesWinnerFieldRefInput<$PrismaModel>
    in?: $Enums.MatchesWinner[] | ListEnumMatchesWinnerFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchesWinner[] | ListEnumMatchesWinnerFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchesWinnerFilter<$PrismaModel> | $Enums.MatchesWinner
  }

  export type EnumMatchTossElectionFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchTossElection | EnumMatchTossElectionFieldRefInput<$PrismaModel>
    in?: $Enums.MatchTossElection[] | ListEnumMatchTossElectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchTossElection[] | ListEnumMatchTossElectionFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchTossElectionFilter<$PrismaModel> | $Enums.MatchTossElection
  }

  export type EnumTournamentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TournamentStatus | EnumTournamentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTournamentStatusFilter<$PrismaModel> | $Enums.TournamentStatus
  }

  export type InningListRelationFilter = {
    every?: InningWhereInput
    some?: InningWhereInput
    none?: InningWhereInput
  }

  export type InningOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchesCountOrderByAggregateInput = {
    id?: SortOrder
    team1Id?: SortOrder
    team2Id?: SortOrder
    venue?: SortOrder
    date?: SortOrder
    winner?: SortOrder
    toss?: SortOrder
    elected?: SortOrder
    status?: SortOrder
  }

  export type MatchesMaxOrderByAggregateInput = {
    id?: SortOrder
    team1Id?: SortOrder
    team2Id?: SortOrder
    venue?: SortOrder
    date?: SortOrder
    winner?: SortOrder
    toss?: SortOrder
    elected?: SortOrder
    status?: SortOrder
  }

  export type MatchesMinOrderByAggregateInput = {
    id?: SortOrder
    team1Id?: SortOrder
    team2Id?: SortOrder
    venue?: SortOrder
    date?: SortOrder
    winner?: SortOrder
    toss?: SortOrder
    elected?: SortOrder
    status?: SortOrder
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

  export type EnumMatchesWinnerWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchesWinner | EnumMatchesWinnerFieldRefInput<$PrismaModel>
    in?: $Enums.MatchesWinner[] | ListEnumMatchesWinnerFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchesWinner[] | ListEnumMatchesWinnerFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchesWinnerWithAggregatesFilter<$PrismaModel> | $Enums.MatchesWinner
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchesWinnerFilter<$PrismaModel>
    _max?: NestedEnumMatchesWinnerFilter<$PrismaModel>
  }

  export type EnumMatchTossElectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchTossElection | EnumMatchTossElectionFieldRefInput<$PrismaModel>
    in?: $Enums.MatchTossElection[] | ListEnumMatchTossElectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchTossElection[] | ListEnumMatchTossElectionFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchTossElectionWithAggregatesFilter<$PrismaModel> | $Enums.MatchTossElection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchTossElectionFilter<$PrismaModel>
    _max?: NestedEnumMatchTossElectionFilter<$PrismaModel>
  }

  export type EnumTournamentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TournamentStatus | EnumTournamentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTournamentStatusWithAggregatesFilter<$PrismaModel> | $Enums.TournamentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTournamentStatusFilter<$PrismaModel>
    _max?: NestedEnumTournamentStatusFilter<$PrismaModel>
  }

  export type EnumWhichInningFilter<$PrismaModel = never> = {
    equals?: $Enums.WhichInning | EnumWhichInningFieldRefInput<$PrismaModel>
    in?: $Enums.WhichInning[] | ListEnumWhichInningFieldRefInput<$PrismaModel>
    notIn?: $Enums.WhichInning[] | ListEnumWhichInningFieldRefInput<$PrismaModel>
    not?: NestedEnumWhichInningFilter<$PrismaModel> | $Enums.WhichInning
  }

  export type BallsListRelationFilter = {
    every?: BallsWhereInput
    some?: BallsWhereInput
    none?: BallsWhereInput
  }

  export type BallsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InningMatchIdWhichInningCompoundUniqueInput = {
    matchId: string
    whichInning: $Enums.WhichInning
  }

  export type InningCountOrderByAggregateInput = {
    id?: SortOrder
    whichInning?: SortOrder
    score?: SortOrder
    wickets?: SortOrder
    extras?: SortOrder
    batsman1?: SortOrder
    batsman2?: SortOrder
    bowler?: SortOrder
    matchId?: SortOrder
  }

  export type InningAvgOrderByAggregateInput = {
    score?: SortOrder
    wickets?: SortOrder
    extras?: SortOrder
  }

  export type InningMaxOrderByAggregateInput = {
    id?: SortOrder
    whichInning?: SortOrder
    score?: SortOrder
    wickets?: SortOrder
    extras?: SortOrder
    batsman1?: SortOrder
    batsman2?: SortOrder
    bowler?: SortOrder
    matchId?: SortOrder
  }

  export type InningMinOrderByAggregateInput = {
    id?: SortOrder
    whichInning?: SortOrder
    score?: SortOrder
    wickets?: SortOrder
    extras?: SortOrder
    batsman1?: SortOrder
    batsman2?: SortOrder
    bowler?: SortOrder
    matchId?: SortOrder
  }

  export type InningSumOrderByAggregateInput = {
    score?: SortOrder
    wickets?: SortOrder
    extras?: SortOrder
  }

  export type EnumWhichInningWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WhichInning | EnumWhichInningFieldRefInput<$PrismaModel>
    in?: $Enums.WhichInning[] | ListEnumWhichInningFieldRefInput<$PrismaModel>
    notIn?: $Enums.WhichInning[] | ListEnumWhichInningFieldRefInput<$PrismaModel>
    not?: NestedEnumWhichInningWithAggregatesFilter<$PrismaModel> | $Enums.WhichInning
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWhichInningFilter<$PrismaModel>
    _max?: NestedEnumWhichInningFilter<$PrismaModel>
  }

  export type EnumWhatHappendFilter<$PrismaModel = never> = {
    equals?: $Enums.WhatHappend | EnumWhatHappendFieldRefInput<$PrismaModel>
    in?: $Enums.WhatHappend[] | ListEnumWhatHappendFieldRefInput<$PrismaModel>
    notIn?: $Enums.WhatHappend[] | ListEnumWhatHappendFieldRefInput<$PrismaModel>
    not?: NestedEnumWhatHappendFilter<$PrismaModel> | $Enums.WhatHappend
  }

  export type InningScalarRelationFilter = {
    is?: InningWhereInput
    isNot?: InningWhereInput
  }

  export type BallsCountOrderByAggregateInput = {
    id?: SortOrder
    ballNo?: SortOrder
    whatHappend?: SortOrder
    bowler?: SortOrder
    batsman?: SortOrder
    catch?: SortOrder
    runout?: SortOrder
    inningId?: SortOrder
  }

  export type BallsAvgOrderByAggregateInput = {
    ballNo?: SortOrder
  }

  export type BallsMaxOrderByAggregateInput = {
    id?: SortOrder
    ballNo?: SortOrder
    whatHappend?: SortOrder
    bowler?: SortOrder
    batsman?: SortOrder
    catch?: SortOrder
    runout?: SortOrder
    inningId?: SortOrder
  }

  export type BallsMinOrderByAggregateInput = {
    id?: SortOrder
    ballNo?: SortOrder
    whatHappend?: SortOrder
    bowler?: SortOrder
    batsman?: SortOrder
    catch?: SortOrder
    runout?: SortOrder
    inningId?: SortOrder
  }

  export type BallsSumOrderByAggregateInput = {
    ballNo?: SortOrder
  }

  export type EnumWhatHappendWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WhatHappend | EnumWhatHappendFieldRefInput<$PrismaModel>
    in?: $Enums.WhatHappend[] | ListEnumWhatHappendFieldRefInput<$PrismaModel>
    notIn?: $Enums.WhatHappend[] | ListEnumWhatHappendFieldRefInput<$PrismaModel>
    not?: NestedEnumWhatHappendWithAggregatesFilter<$PrismaModel> | $Enums.WhatHappend
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWhatHappendFilter<$PrismaModel>
    _max?: NestedEnumWhatHappendFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TournamentCountOrderByAggregateInput = {
    id?: SortOrder
    maxLimit?: SortOrder
    entryFee?: SortOrder
    prizePool?: SortOrder
    winner?: SortOrder
    ownerId?: SortOrder
    teamsJoined?: SortOrder
    status?: SortOrder
  }

  export type TournamentAvgOrderByAggregateInput = {
    maxLimit?: SortOrder
    entryFee?: SortOrder
    prizePool?: SortOrder
    teamsJoined?: SortOrder
  }

  export type TournamentMaxOrderByAggregateInput = {
    id?: SortOrder
    maxLimit?: SortOrder
    entryFee?: SortOrder
    prizePool?: SortOrder
    winner?: SortOrder
    ownerId?: SortOrder
    teamsJoined?: SortOrder
    status?: SortOrder
  }

  export type TournamentMinOrderByAggregateInput = {
    id?: SortOrder
    maxLimit?: SortOrder
    entryFee?: SortOrder
    prizePool?: SortOrder
    winner?: SortOrder
    ownerId?: SortOrder
    teamsJoined?: SortOrder
    status?: SortOrder
  }

  export type TournamentSumOrderByAggregateInput = {
    maxLimit?: SortOrder
    entryFee?: SortOrder
    prizePool?: SortOrder
    teamsJoined?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type TournamentScalarRelationFilter = {
    is?: TournamentWhereInput
    isNot?: TournamentWhereInput
  }

  export type TournamentJoinedTeamsCountOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    userTeamId?: SortOrder
  }

  export type TournamentJoinedTeamsMaxOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    userTeamId?: SortOrder
  }

  export type TournamentJoinedTeamsMinOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    userTeamId?: SortOrder
  }

  export type UserTeamsCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTeamsCreateWithoutUserInput, UserTeamsUncheckedCreateWithoutUserInput> | UserTeamsCreateWithoutUserInput[] | UserTeamsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTeamsCreateOrConnectWithoutUserInput | UserTeamsCreateOrConnectWithoutUserInput[]
    createMany?: UserTeamsCreateManyUserInputEnvelope
    connect?: UserTeamsWhereUniqueInput | UserTeamsWhereUniqueInput[]
  }

  export type TournamentCreateNestedManyWithoutOwnerInput = {
    create?: XOR<TournamentCreateWithoutOwnerInput, TournamentUncheckedCreateWithoutOwnerInput> | TournamentCreateWithoutOwnerInput[] | TournamentUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TournamentCreateOrConnectWithoutOwnerInput | TournamentCreateOrConnectWithoutOwnerInput[]
    createMany?: TournamentCreateManyOwnerInputEnvelope
    connect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
  }

  export type UserTeamsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTeamsCreateWithoutUserInput, UserTeamsUncheckedCreateWithoutUserInput> | UserTeamsCreateWithoutUserInput[] | UserTeamsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTeamsCreateOrConnectWithoutUserInput | UserTeamsCreateOrConnectWithoutUserInput[]
    createMany?: UserTeamsCreateManyUserInputEnvelope
    connect?: UserTeamsWhereUniqueInput | UserTeamsWhereUniqueInput[]
  }

  export type TournamentUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<TournamentCreateWithoutOwnerInput, TournamentUncheckedCreateWithoutOwnerInput> | TournamentCreateWithoutOwnerInput[] | TournamentUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TournamentCreateOrConnectWithoutOwnerInput | TournamentCreateOrConnectWithoutOwnerInput[]
    createMany?: TournamentCreateManyOwnerInputEnvelope
    connect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type UserTeamsUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTeamsCreateWithoutUserInput, UserTeamsUncheckedCreateWithoutUserInput> | UserTeamsCreateWithoutUserInput[] | UserTeamsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTeamsCreateOrConnectWithoutUserInput | UserTeamsCreateOrConnectWithoutUserInput[]
    upsert?: UserTeamsUpsertWithWhereUniqueWithoutUserInput | UserTeamsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTeamsCreateManyUserInputEnvelope
    set?: UserTeamsWhereUniqueInput | UserTeamsWhereUniqueInput[]
    disconnect?: UserTeamsWhereUniqueInput | UserTeamsWhereUniqueInput[]
    delete?: UserTeamsWhereUniqueInput | UserTeamsWhereUniqueInput[]
    connect?: UserTeamsWhereUniqueInput | UserTeamsWhereUniqueInput[]
    update?: UserTeamsUpdateWithWhereUniqueWithoutUserInput | UserTeamsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTeamsUpdateManyWithWhereWithoutUserInput | UserTeamsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTeamsScalarWhereInput | UserTeamsScalarWhereInput[]
  }

  export type TournamentUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<TournamentCreateWithoutOwnerInput, TournamentUncheckedCreateWithoutOwnerInput> | TournamentCreateWithoutOwnerInput[] | TournamentUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TournamentCreateOrConnectWithoutOwnerInput | TournamentCreateOrConnectWithoutOwnerInput[]
    upsert?: TournamentUpsertWithWhereUniqueWithoutOwnerInput | TournamentUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: TournamentCreateManyOwnerInputEnvelope
    set?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    disconnect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    delete?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    connect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    update?: TournamentUpdateWithWhereUniqueWithoutOwnerInput | TournamentUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: TournamentUpdateManyWithWhereWithoutOwnerInput | TournamentUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: TournamentScalarWhereInput | TournamentScalarWhereInput[]
  }

  export type UserTeamsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTeamsCreateWithoutUserInput, UserTeamsUncheckedCreateWithoutUserInput> | UserTeamsCreateWithoutUserInput[] | UserTeamsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTeamsCreateOrConnectWithoutUserInput | UserTeamsCreateOrConnectWithoutUserInput[]
    upsert?: UserTeamsUpsertWithWhereUniqueWithoutUserInput | UserTeamsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTeamsCreateManyUserInputEnvelope
    set?: UserTeamsWhereUniqueInput | UserTeamsWhereUniqueInput[]
    disconnect?: UserTeamsWhereUniqueInput | UserTeamsWhereUniqueInput[]
    delete?: UserTeamsWhereUniqueInput | UserTeamsWhereUniqueInput[]
    connect?: UserTeamsWhereUniqueInput | UserTeamsWhereUniqueInput[]
    update?: UserTeamsUpdateWithWhereUniqueWithoutUserInput | UserTeamsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTeamsUpdateManyWithWhereWithoutUserInput | UserTeamsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTeamsScalarWhereInput | UserTeamsScalarWhereInput[]
  }

  export type TournamentUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<TournamentCreateWithoutOwnerInput, TournamentUncheckedCreateWithoutOwnerInput> | TournamentCreateWithoutOwnerInput[] | TournamentUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TournamentCreateOrConnectWithoutOwnerInput | TournamentCreateOrConnectWithoutOwnerInput[]
    upsert?: TournamentUpsertWithWhereUniqueWithoutOwnerInput | TournamentUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: TournamentCreateManyOwnerInputEnvelope
    set?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    disconnect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    delete?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    connect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    update?: TournamentUpdateWithWhereUniqueWithoutOwnerInput | TournamentUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: TournamentUpdateManyWithWhereWithoutOwnerInput | TournamentUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: TournamentScalarWhereInput | TournamentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTeamsInput = {
    create?: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamsInput
    connect?: UserWhereUniqueInput
  }

  export type UserTeamPlayersCreateNestedManyWithoutUserTeamsInput = {
    create?: XOR<UserTeamPlayersCreateWithoutUserTeamsInput, UserTeamPlayersUncheckedCreateWithoutUserTeamsInput> | UserTeamPlayersCreateWithoutUserTeamsInput[] | UserTeamPlayersUncheckedCreateWithoutUserTeamsInput[]
    connectOrCreate?: UserTeamPlayersCreateOrConnectWithoutUserTeamsInput | UserTeamPlayersCreateOrConnectWithoutUserTeamsInput[]
    createMany?: UserTeamPlayersCreateManyUserTeamsInputEnvelope
    connect?: UserTeamPlayersWhereUniqueInput | UserTeamPlayersWhereUniqueInput[]
  }

  export type TournamentJoinedTeamsCreateNestedManyWithoutUserTeamInput = {
    create?: XOR<TournamentJoinedTeamsCreateWithoutUserTeamInput, TournamentJoinedTeamsUncheckedCreateWithoutUserTeamInput> | TournamentJoinedTeamsCreateWithoutUserTeamInput[] | TournamentJoinedTeamsUncheckedCreateWithoutUserTeamInput[]
    connectOrCreate?: TournamentJoinedTeamsCreateOrConnectWithoutUserTeamInput | TournamentJoinedTeamsCreateOrConnectWithoutUserTeamInput[]
    createMany?: TournamentJoinedTeamsCreateManyUserTeamInputEnvelope
    connect?: TournamentJoinedTeamsWhereUniqueInput | TournamentJoinedTeamsWhereUniqueInput[]
  }

  export type UserTeamPlayersUncheckedCreateNestedManyWithoutUserTeamsInput = {
    create?: XOR<UserTeamPlayersCreateWithoutUserTeamsInput, UserTeamPlayersUncheckedCreateWithoutUserTeamsInput> | UserTeamPlayersCreateWithoutUserTeamsInput[] | UserTeamPlayersUncheckedCreateWithoutUserTeamsInput[]
    connectOrCreate?: UserTeamPlayersCreateOrConnectWithoutUserTeamsInput | UserTeamPlayersCreateOrConnectWithoutUserTeamsInput[]
    createMany?: UserTeamPlayersCreateManyUserTeamsInputEnvelope
    connect?: UserTeamPlayersWhereUniqueInput | UserTeamPlayersWhereUniqueInput[]
  }

  export type TournamentJoinedTeamsUncheckedCreateNestedManyWithoutUserTeamInput = {
    create?: XOR<TournamentJoinedTeamsCreateWithoutUserTeamInput, TournamentJoinedTeamsUncheckedCreateWithoutUserTeamInput> | TournamentJoinedTeamsCreateWithoutUserTeamInput[] | TournamentJoinedTeamsUncheckedCreateWithoutUserTeamInput[]
    connectOrCreate?: TournamentJoinedTeamsCreateOrConnectWithoutUserTeamInput | TournamentJoinedTeamsCreateOrConnectWithoutUserTeamInput[]
    createMany?: TournamentJoinedTeamsCreateManyUserTeamInputEnvelope
    connect?: TournamentJoinedTeamsWhereUniqueInput | TournamentJoinedTeamsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutTeamsNestedInput = {
    create?: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamsInput
    upsert?: UserUpsertWithoutTeamsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeamsInput, UserUpdateWithoutTeamsInput>, UserUncheckedUpdateWithoutTeamsInput>
  }

  export type UserTeamPlayersUpdateManyWithoutUserTeamsNestedInput = {
    create?: XOR<UserTeamPlayersCreateWithoutUserTeamsInput, UserTeamPlayersUncheckedCreateWithoutUserTeamsInput> | UserTeamPlayersCreateWithoutUserTeamsInput[] | UserTeamPlayersUncheckedCreateWithoutUserTeamsInput[]
    connectOrCreate?: UserTeamPlayersCreateOrConnectWithoutUserTeamsInput | UserTeamPlayersCreateOrConnectWithoutUserTeamsInput[]
    upsert?: UserTeamPlayersUpsertWithWhereUniqueWithoutUserTeamsInput | UserTeamPlayersUpsertWithWhereUniqueWithoutUserTeamsInput[]
    createMany?: UserTeamPlayersCreateManyUserTeamsInputEnvelope
    set?: UserTeamPlayersWhereUniqueInput | UserTeamPlayersWhereUniqueInput[]
    disconnect?: UserTeamPlayersWhereUniqueInput | UserTeamPlayersWhereUniqueInput[]
    delete?: UserTeamPlayersWhereUniqueInput | UserTeamPlayersWhereUniqueInput[]
    connect?: UserTeamPlayersWhereUniqueInput | UserTeamPlayersWhereUniqueInput[]
    update?: UserTeamPlayersUpdateWithWhereUniqueWithoutUserTeamsInput | UserTeamPlayersUpdateWithWhereUniqueWithoutUserTeamsInput[]
    updateMany?: UserTeamPlayersUpdateManyWithWhereWithoutUserTeamsInput | UserTeamPlayersUpdateManyWithWhereWithoutUserTeamsInput[]
    deleteMany?: UserTeamPlayersScalarWhereInput | UserTeamPlayersScalarWhereInput[]
  }

  export type TournamentJoinedTeamsUpdateManyWithoutUserTeamNestedInput = {
    create?: XOR<TournamentJoinedTeamsCreateWithoutUserTeamInput, TournamentJoinedTeamsUncheckedCreateWithoutUserTeamInput> | TournamentJoinedTeamsCreateWithoutUserTeamInput[] | TournamentJoinedTeamsUncheckedCreateWithoutUserTeamInput[]
    connectOrCreate?: TournamentJoinedTeamsCreateOrConnectWithoutUserTeamInput | TournamentJoinedTeamsCreateOrConnectWithoutUserTeamInput[]
    upsert?: TournamentJoinedTeamsUpsertWithWhereUniqueWithoutUserTeamInput | TournamentJoinedTeamsUpsertWithWhereUniqueWithoutUserTeamInput[]
    createMany?: TournamentJoinedTeamsCreateManyUserTeamInputEnvelope
    set?: TournamentJoinedTeamsWhereUniqueInput | TournamentJoinedTeamsWhereUniqueInput[]
    disconnect?: TournamentJoinedTeamsWhereUniqueInput | TournamentJoinedTeamsWhereUniqueInput[]
    delete?: TournamentJoinedTeamsWhereUniqueInput | TournamentJoinedTeamsWhereUniqueInput[]
    connect?: TournamentJoinedTeamsWhereUniqueInput | TournamentJoinedTeamsWhereUniqueInput[]
    update?: TournamentJoinedTeamsUpdateWithWhereUniqueWithoutUserTeamInput | TournamentJoinedTeamsUpdateWithWhereUniqueWithoutUserTeamInput[]
    updateMany?: TournamentJoinedTeamsUpdateManyWithWhereWithoutUserTeamInput | TournamentJoinedTeamsUpdateManyWithWhereWithoutUserTeamInput[]
    deleteMany?: TournamentJoinedTeamsScalarWhereInput | TournamentJoinedTeamsScalarWhereInput[]
  }

  export type UserTeamPlayersUncheckedUpdateManyWithoutUserTeamsNestedInput = {
    create?: XOR<UserTeamPlayersCreateWithoutUserTeamsInput, UserTeamPlayersUncheckedCreateWithoutUserTeamsInput> | UserTeamPlayersCreateWithoutUserTeamsInput[] | UserTeamPlayersUncheckedCreateWithoutUserTeamsInput[]
    connectOrCreate?: UserTeamPlayersCreateOrConnectWithoutUserTeamsInput | UserTeamPlayersCreateOrConnectWithoutUserTeamsInput[]
    upsert?: UserTeamPlayersUpsertWithWhereUniqueWithoutUserTeamsInput | UserTeamPlayersUpsertWithWhereUniqueWithoutUserTeamsInput[]
    createMany?: UserTeamPlayersCreateManyUserTeamsInputEnvelope
    set?: UserTeamPlayersWhereUniqueInput | UserTeamPlayersWhereUniqueInput[]
    disconnect?: UserTeamPlayersWhereUniqueInput | UserTeamPlayersWhereUniqueInput[]
    delete?: UserTeamPlayersWhereUniqueInput | UserTeamPlayersWhereUniqueInput[]
    connect?: UserTeamPlayersWhereUniqueInput | UserTeamPlayersWhereUniqueInput[]
    update?: UserTeamPlayersUpdateWithWhereUniqueWithoutUserTeamsInput | UserTeamPlayersUpdateWithWhereUniqueWithoutUserTeamsInput[]
    updateMany?: UserTeamPlayersUpdateManyWithWhereWithoutUserTeamsInput | UserTeamPlayersUpdateManyWithWhereWithoutUserTeamsInput[]
    deleteMany?: UserTeamPlayersScalarWhereInput | UserTeamPlayersScalarWhereInput[]
  }

  export type TournamentJoinedTeamsUncheckedUpdateManyWithoutUserTeamNestedInput = {
    create?: XOR<TournamentJoinedTeamsCreateWithoutUserTeamInput, TournamentJoinedTeamsUncheckedCreateWithoutUserTeamInput> | TournamentJoinedTeamsCreateWithoutUserTeamInput[] | TournamentJoinedTeamsUncheckedCreateWithoutUserTeamInput[]
    connectOrCreate?: TournamentJoinedTeamsCreateOrConnectWithoutUserTeamInput | TournamentJoinedTeamsCreateOrConnectWithoutUserTeamInput[]
    upsert?: TournamentJoinedTeamsUpsertWithWhereUniqueWithoutUserTeamInput | TournamentJoinedTeamsUpsertWithWhereUniqueWithoutUserTeamInput[]
    createMany?: TournamentJoinedTeamsCreateManyUserTeamInputEnvelope
    set?: TournamentJoinedTeamsWhereUniqueInput | TournamentJoinedTeamsWhereUniqueInput[]
    disconnect?: TournamentJoinedTeamsWhereUniqueInput | TournamentJoinedTeamsWhereUniqueInput[]
    delete?: TournamentJoinedTeamsWhereUniqueInput | TournamentJoinedTeamsWhereUniqueInput[]
    connect?: TournamentJoinedTeamsWhereUniqueInput | TournamentJoinedTeamsWhereUniqueInput[]
    update?: TournamentJoinedTeamsUpdateWithWhereUniqueWithoutUserTeamInput | TournamentJoinedTeamsUpdateWithWhereUniqueWithoutUserTeamInput[]
    updateMany?: TournamentJoinedTeamsUpdateManyWithWhereWithoutUserTeamInput | TournamentJoinedTeamsUpdateManyWithWhereWithoutUserTeamInput[]
    deleteMany?: TournamentJoinedTeamsScalarWhereInput | TournamentJoinedTeamsScalarWhereInput[]
  }

  export type UserTeamsCreateNestedOneWithoutPlayersInput = {
    create?: XOR<UserTeamsCreateWithoutPlayersInput, UserTeamsUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: UserTeamsCreateOrConnectWithoutPlayersInput
    connect?: UserTeamsWhereUniqueInput
  }

  export type PlayersCreateNestedOneWithoutUserTeamPlayersInput = {
    create?: XOR<PlayersCreateWithoutUserTeamPlayersInput, PlayersUncheckedCreateWithoutUserTeamPlayersInput>
    connectOrCreate?: PlayersCreateOrConnectWithoutUserTeamPlayersInput
    connect?: PlayersWhereUniqueInput
  }

  export type UserTeamsUpdateOneRequiredWithoutPlayersNestedInput = {
    create?: XOR<UserTeamsCreateWithoutPlayersInput, UserTeamsUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: UserTeamsCreateOrConnectWithoutPlayersInput
    upsert?: UserTeamsUpsertWithoutPlayersInput
    connect?: UserTeamsWhereUniqueInput
    update?: XOR<XOR<UserTeamsUpdateToOneWithWhereWithoutPlayersInput, UserTeamsUpdateWithoutPlayersInput>, UserTeamsUncheckedUpdateWithoutPlayersInput>
  }

  export type PlayersUpdateOneRequiredWithoutUserTeamPlayersNestedInput = {
    create?: XOR<PlayersCreateWithoutUserTeamPlayersInput, PlayersUncheckedCreateWithoutUserTeamPlayersInput>
    connectOrCreate?: PlayersCreateOrConnectWithoutUserTeamPlayersInput
    upsert?: PlayersUpsertWithoutUserTeamPlayersInput
    connect?: PlayersWhereUniqueInput
    update?: XOR<XOR<PlayersUpdateToOneWithWhereWithoutUserTeamPlayersInput, PlayersUpdateWithoutUserTeamPlayersInput>, PlayersUncheckedUpdateWithoutUserTeamPlayersInput>
  }

  export type PlayersCreateNestedManyWithoutSquadInput = {
    create?: XOR<PlayersCreateWithoutSquadInput, PlayersUncheckedCreateWithoutSquadInput> | PlayersCreateWithoutSquadInput[] | PlayersUncheckedCreateWithoutSquadInput[]
    connectOrCreate?: PlayersCreateOrConnectWithoutSquadInput | PlayersCreateOrConnectWithoutSquadInput[]
    createMany?: PlayersCreateManySquadInputEnvelope
    connect?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
  }

  export type PlayersUncheckedCreateNestedManyWithoutSquadInput = {
    create?: XOR<PlayersCreateWithoutSquadInput, PlayersUncheckedCreateWithoutSquadInput> | PlayersCreateWithoutSquadInput[] | PlayersUncheckedCreateWithoutSquadInput[]
    connectOrCreate?: PlayersCreateOrConnectWithoutSquadInput | PlayersCreateOrConnectWithoutSquadInput[]
    createMany?: PlayersCreateManySquadInputEnvelope
    connect?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
  }

  export type PlayersUpdateManyWithoutSquadNestedInput = {
    create?: XOR<PlayersCreateWithoutSquadInput, PlayersUncheckedCreateWithoutSquadInput> | PlayersCreateWithoutSquadInput[] | PlayersUncheckedCreateWithoutSquadInput[]
    connectOrCreate?: PlayersCreateOrConnectWithoutSquadInput | PlayersCreateOrConnectWithoutSquadInput[]
    upsert?: PlayersUpsertWithWhereUniqueWithoutSquadInput | PlayersUpsertWithWhereUniqueWithoutSquadInput[]
    createMany?: PlayersCreateManySquadInputEnvelope
    set?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    disconnect?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    delete?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    connect?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    update?: PlayersUpdateWithWhereUniqueWithoutSquadInput | PlayersUpdateWithWhereUniqueWithoutSquadInput[]
    updateMany?: PlayersUpdateManyWithWhereWithoutSquadInput | PlayersUpdateManyWithWhereWithoutSquadInput[]
    deleteMany?: PlayersScalarWhereInput | PlayersScalarWhereInput[]
  }

  export type PlayersUncheckedUpdateManyWithoutSquadNestedInput = {
    create?: XOR<PlayersCreateWithoutSquadInput, PlayersUncheckedCreateWithoutSquadInput> | PlayersCreateWithoutSquadInput[] | PlayersUncheckedCreateWithoutSquadInput[]
    connectOrCreate?: PlayersCreateOrConnectWithoutSquadInput | PlayersCreateOrConnectWithoutSquadInput[]
    upsert?: PlayersUpsertWithWhereUniqueWithoutSquadInput | PlayersUpsertWithWhereUniqueWithoutSquadInput[]
    createMany?: PlayersCreateManySquadInputEnvelope
    set?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    disconnect?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    delete?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    connect?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    update?: PlayersUpdateWithWhereUniqueWithoutSquadInput | PlayersUpdateWithWhereUniqueWithoutSquadInput[]
    updateMany?: PlayersUpdateManyWithWhereWithoutSquadInput | PlayersUpdateManyWithWhereWithoutSquadInput[]
    deleteMany?: PlayersScalarWhereInput | PlayersScalarWhereInput[]
  }

  export type SquadCreateNestedOneWithoutPlayersInput = {
    create?: XOR<SquadCreateWithoutPlayersInput, SquadUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: SquadCreateOrConnectWithoutPlayersInput
    connect?: SquadWhereUniqueInput
  }

  export type UserTeamPlayersCreateNestedManyWithoutPlayersInput = {
    create?: XOR<UserTeamPlayersCreateWithoutPlayersInput, UserTeamPlayersUncheckedCreateWithoutPlayersInput> | UserTeamPlayersCreateWithoutPlayersInput[] | UserTeamPlayersUncheckedCreateWithoutPlayersInput[]
    connectOrCreate?: UserTeamPlayersCreateOrConnectWithoutPlayersInput | UserTeamPlayersCreateOrConnectWithoutPlayersInput[]
    createMany?: UserTeamPlayersCreateManyPlayersInputEnvelope
    connect?: UserTeamPlayersWhereUniqueInput | UserTeamPlayersWhereUniqueInput[]
  }

  export type PlayerScoreCreateNestedManyWithoutPlayerInput = {
    create?: XOR<PlayerScoreCreateWithoutPlayerInput, PlayerScoreUncheckedCreateWithoutPlayerInput> | PlayerScoreCreateWithoutPlayerInput[] | PlayerScoreUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerScoreCreateOrConnectWithoutPlayerInput | PlayerScoreCreateOrConnectWithoutPlayerInput[]
    createMany?: PlayerScoreCreateManyPlayerInputEnvelope
    connect?: PlayerScoreWhereUniqueInput | PlayerScoreWhereUniqueInput[]
  }

  export type UserTeamPlayersUncheckedCreateNestedManyWithoutPlayersInput = {
    create?: XOR<UserTeamPlayersCreateWithoutPlayersInput, UserTeamPlayersUncheckedCreateWithoutPlayersInput> | UserTeamPlayersCreateWithoutPlayersInput[] | UserTeamPlayersUncheckedCreateWithoutPlayersInput[]
    connectOrCreate?: UserTeamPlayersCreateOrConnectWithoutPlayersInput | UserTeamPlayersCreateOrConnectWithoutPlayersInput[]
    createMany?: UserTeamPlayersCreateManyPlayersInputEnvelope
    connect?: UserTeamPlayersWhereUniqueInput | UserTeamPlayersWhereUniqueInput[]
  }

  export type PlayerScoreUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<PlayerScoreCreateWithoutPlayerInput, PlayerScoreUncheckedCreateWithoutPlayerInput> | PlayerScoreCreateWithoutPlayerInput[] | PlayerScoreUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerScoreCreateOrConnectWithoutPlayerInput | PlayerScoreCreateOrConnectWithoutPlayerInput[]
    createMany?: PlayerScoreCreateManyPlayerInputEnvelope
    connect?: PlayerScoreWhereUniqueInput | PlayerScoreWhereUniqueInput[]
  }

  export type EnumPlayerRoleFieldUpdateOperationsInput = {
    set?: $Enums.PlayerRole
  }

  export type EnumPlayerDextureFieldUpdateOperationsInput = {
    set?: $Enums.PlayerDexture
  }

  export type EnumPlayerCountryStatusFieldUpdateOperationsInput = {
    set?: $Enums.PlayerCountryStatus
  }

  export type SquadUpdateOneRequiredWithoutPlayersNestedInput = {
    create?: XOR<SquadCreateWithoutPlayersInput, SquadUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: SquadCreateOrConnectWithoutPlayersInput
    upsert?: SquadUpsertWithoutPlayersInput
    connect?: SquadWhereUniqueInput
    update?: XOR<XOR<SquadUpdateToOneWithWhereWithoutPlayersInput, SquadUpdateWithoutPlayersInput>, SquadUncheckedUpdateWithoutPlayersInput>
  }

  export type UserTeamPlayersUpdateManyWithoutPlayersNestedInput = {
    create?: XOR<UserTeamPlayersCreateWithoutPlayersInput, UserTeamPlayersUncheckedCreateWithoutPlayersInput> | UserTeamPlayersCreateWithoutPlayersInput[] | UserTeamPlayersUncheckedCreateWithoutPlayersInput[]
    connectOrCreate?: UserTeamPlayersCreateOrConnectWithoutPlayersInput | UserTeamPlayersCreateOrConnectWithoutPlayersInput[]
    upsert?: UserTeamPlayersUpsertWithWhereUniqueWithoutPlayersInput | UserTeamPlayersUpsertWithWhereUniqueWithoutPlayersInput[]
    createMany?: UserTeamPlayersCreateManyPlayersInputEnvelope
    set?: UserTeamPlayersWhereUniqueInput | UserTeamPlayersWhereUniqueInput[]
    disconnect?: UserTeamPlayersWhereUniqueInput | UserTeamPlayersWhereUniqueInput[]
    delete?: UserTeamPlayersWhereUniqueInput | UserTeamPlayersWhereUniqueInput[]
    connect?: UserTeamPlayersWhereUniqueInput | UserTeamPlayersWhereUniqueInput[]
    update?: UserTeamPlayersUpdateWithWhereUniqueWithoutPlayersInput | UserTeamPlayersUpdateWithWhereUniqueWithoutPlayersInput[]
    updateMany?: UserTeamPlayersUpdateManyWithWhereWithoutPlayersInput | UserTeamPlayersUpdateManyWithWhereWithoutPlayersInput[]
    deleteMany?: UserTeamPlayersScalarWhereInput | UserTeamPlayersScalarWhereInput[]
  }

  export type PlayerScoreUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<PlayerScoreCreateWithoutPlayerInput, PlayerScoreUncheckedCreateWithoutPlayerInput> | PlayerScoreCreateWithoutPlayerInput[] | PlayerScoreUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerScoreCreateOrConnectWithoutPlayerInput | PlayerScoreCreateOrConnectWithoutPlayerInput[]
    upsert?: PlayerScoreUpsertWithWhereUniqueWithoutPlayerInput | PlayerScoreUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: PlayerScoreCreateManyPlayerInputEnvelope
    set?: PlayerScoreWhereUniqueInput | PlayerScoreWhereUniqueInput[]
    disconnect?: PlayerScoreWhereUniqueInput | PlayerScoreWhereUniqueInput[]
    delete?: PlayerScoreWhereUniqueInput | PlayerScoreWhereUniqueInput[]
    connect?: PlayerScoreWhereUniqueInput | PlayerScoreWhereUniqueInput[]
    update?: PlayerScoreUpdateWithWhereUniqueWithoutPlayerInput | PlayerScoreUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: PlayerScoreUpdateManyWithWhereWithoutPlayerInput | PlayerScoreUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: PlayerScoreScalarWhereInput | PlayerScoreScalarWhereInput[]
  }

  export type UserTeamPlayersUncheckedUpdateManyWithoutPlayersNestedInput = {
    create?: XOR<UserTeamPlayersCreateWithoutPlayersInput, UserTeamPlayersUncheckedCreateWithoutPlayersInput> | UserTeamPlayersCreateWithoutPlayersInput[] | UserTeamPlayersUncheckedCreateWithoutPlayersInput[]
    connectOrCreate?: UserTeamPlayersCreateOrConnectWithoutPlayersInput | UserTeamPlayersCreateOrConnectWithoutPlayersInput[]
    upsert?: UserTeamPlayersUpsertWithWhereUniqueWithoutPlayersInput | UserTeamPlayersUpsertWithWhereUniqueWithoutPlayersInput[]
    createMany?: UserTeamPlayersCreateManyPlayersInputEnvelope
    set?: UserTeamPlayersWhereUniqueInput | UserTeamPlayersWhereUniqueInput[]
    disconnect?: UserTeamPlayersWhereUniqueInput | UserTeamPlayersWhereUniqueInput[]
    delete?: UserTeamPlayersWhereUniqueInput | UserTeamPlayersWhereUniqueInput[]
    connect?: UserTeamPlayersWhereUniqueInput | UserTeamPlayersWhereUniqueInput[]
    update?: UserTeamPlayersUpdateWithWhereUniqueWithoutPlayersInput | UserTeamPlayersUpdateWithWhereUniqueWithoutPlayersInput[]
    updateMany?: UserTeamPlayersUpdateManyWithWhereWithoutPlayersInput | UserTeamPlayersUpdateManyWithWhereWithoutPlayersInput[]
    deleteMany?: UserTeamPlayersScalarWhereInput | UserTeamPlayersScalarWhereInput[]
  }

  export type PlayerScoreUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<PlayerScoreCreateWithoutPlayerInput, PlayerScoreUncheckedCreateWithoutPlayerInput> | PlayerScoreCreateWithoutPlayerInput[] | PlayerScoreUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerScoreCreateOrConnectWithoutPlayerInput | PlayerScoreCreateOrConnectWithoutPlayerInput[]
    upsert?: PlayerScoreUpsertWithWhereUniqueWithoutPlayerInput | PlayerScoreUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: PlayerScoreCreateManyPlayerInputEnvelope
    set?: PlayerScoreWhereUniqueInput | PlayerScoreWhereUniqueInput[]
    disconnect?: PlayerScoreWhereUniqueInput | PlayerScoreWhereUniqueInput[]
    delete?: PlayerScoreWhereUniqueInput | PlayerScoreWhereUniqueInput[]
    connect?: PlayerScoreWhereUniqueInput | PlayerScoreWhereUniqueInput[]
    update?: PlayerScoreUpdateWithWhereUniqueWithoutPlayerInput | PlayerScoreUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: PlayerScoreUpdateManyWithWhereWithoutPlayerInput | PlayerScoreUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: PlayerScoreScalarWhereInput | PlayerScoreScalarWhereInput[]
  }

  export type PlayersCreateNestedOneWithoutScoreInput = {
    create?: XOR<PlayersCreateWithoutScoreInput, PlayersUncheckedCreateWithoutScoreInput>
    connectOrCreate?: PlayersCreateOrConnectWithoutScoreInput
    connect?: PlayersWhereUniqueInput
  }

  export type MatchesCreateNestedOneWithoutPlayerScoreInput = {
    create?: XOR<MatchesCreateWithoutPlayerScoreInput, MatchesUncheckedCreateWithoutPlayerScoreInput>
    connectOrCreate?: MatchesCreateOrConnectWithoutPlayerScoreInput
    connect?: MatchesWhereUniqueInput
  }

  export type EnumPlayerPlayingStatusFieldUpdateOperationsInput = {
    set?: $Enums.PlayerPlayingStatus
  }

  export type PlayersUpdateOneRequiredWithoutScoreNestedInput = {
    create?: XOR<PlayersCreateWithoutScoreInput, PlayersUncheckedCreateWithoutScoreInput>
    connectOrCreate?: PlayersCreateOrConnectWithoutScoreInput
    upsert?: PlayersUpsertWithoutScoreInput
    connect?: PlayersWhereUniqueInput
    update?: XOR<XOR<PlayersUpdateToOneWithWhereWithoutScoreInput, PlayersUpdateWithoutScoreInput>, PlayersUncheckedUpdateWithoutScoreInput>
  }

  export type MatchesUpdateOneRequiredWithoutPlayerScoreNestedInput = {
    create?: XOR<MatchesCreateWithoutPlayerScoreInput, MatchesUncheckedCreateWithoutPlayerScoreInput>
    connectOrCreate?: MatchesCreateOrConnectWithoutPlayerScoreInput
    upsert?: MatchesUpsertWithoutPlayerScoreInput
    connect?: MatchesWhereUniqueInput
    update?: XOR<XOR<MatchesUpdateToOneWithWhereWithoutPlayerScoreInput, MatchesUpdateWithoutPlayerScoreInput>, MatchesUncheckedUpdateWithoutPlayerScoreInput>
  }

  export type InningCreateNestedManyWithoutMatchInput = {
    create?: XOR<InningCreateWithoutMatchInput, InningUncheckedCreateWithoutMatchInput> | InningCreateWithoutMatchInput[] | InningUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: InningCreateOrConnectWithoutMatchInput | InningCreateOrConnectWithoutMatchInput[]
    createMany?: InningCreateManyMatchInputEnvelope
    connect?: InningWhereUniqueInput | InningWhereUniqueInput[]
  }

  export type PlayerScoreCreateNestedManyWithoutMatchInput = {
    create?: XOR<PlayerScoreCreateWithoutMatchInput, PlayerScoreUncheckedCreateWithoutMatchInput> | PlayerScoreCreateWithoutMatchInput[] | PlayerScoreUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: PlayerScoreCreateOrConnectWithoutMatchInput | PlayerScoreCreateOrConnectWithoutMatchInput[]
    createMany?: PlayerScoreCreateManyMatchInputEnvelope
    connect?: PlayerScoreWhereUniqueInput | PlayerScoreWhereUniqueInput[]
  }

  export type InningUncheckedCreateNestedManyWithoutMatchInput = {
    create?: XOR<InningCreateWithoutMatchInput, InningUncheckedCreateWithoutMatchInput> | InningCreateWithoutMatchInput[] | InningUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: InningCreateOrConnectWithoutMatchInput | InningCreateOrConnectWithoutMatchInput[]
    createMany?: InningCreateManyMatchInputEnvelope
    connect?: InningWhereUniqueInput | InningWhereUniqueInput[]
  }

  export type PlayerScoreUncheckedCreateNestedManyWithoutMatchInput = {
    create?: XOR<PlayerScoreCreateWithoutMatchInput, PlayerScoreUncheckedCreateWithoutMatchInput> | PlayerScoreCreateWithoutMatchInput[] | PlayerScoreUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: PlayerScoreCreateOrConnectWithoutMatchInput | PlayerScoreCreateOrConnectWithoutMatchInput[]
    createMany?: PlayerScoreCreateManyMatchInputEnvelope
    connect?: PlayerScoreWhereUniqueInput | PlayerScoreWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumMatchesWinnerFieldUpdateOperationsInput = {
    set?: $Enums.MatchesWinner
  }

  export type EnumMatchTossElectionFieldUpdateOperationsInput = {
    set?: $Enums.MatchTossElection
  }

  export type EnumTournamentStatusFieldUpdateOperationsInput = {
    set?: $Enums.TournamentStatus
  }

  export type InningUpdateManyWithoutMatchNestedInput = {
    create?: XOR<InningCreateWithoutMatchInput, InningUncheckedCreateWithoutMatchInput> | InningCreateWithoutMatchInput[] | InningUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: InningCreateOrConnectWithoutMatchInput | InningCreateOrConnectWithoutMatchInput[]
    upsert?: InningUpsertWithWhereUniqueWithoutMatchInput | InningUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: InningCreateManyMatchInputEnvelope
    set?: InningWhereUniqueInput | InningWhereUniqueInput[]
    disconnect?: InningWhereUniqueInput | InningWhereUniqueInput[]
    delete?: InningWhereUniqueInput | InningWhereUniqueInput[]
    connect?: InningWhereUniqueInput | InningWhereUniqueInput[]
    update?: InningUpdateWithWhereUniqueWithoutMatchInput | InningUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: InningUpdateManyWithWhereWithoutMatchInput | InningUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: InningScalarWhereInput | InningScalarWhereInput[]
  }

  export type PlayerScoreUpdateManyWithoutMatchNestedInput = {
    create?: XOR<PlayerScoreCreateWithoutMatchInput, PlayerScoreUncheckedCreateWithoutMatchInput> | PlayerScoreCreateWithoutMatchInput[] | PlayerScoreUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: PlayerScoreCreateOrConnectWithoutMatchInput | PlayerScoreCreateOrConnectWithoutMatchInput[]
    upsert?: PlayerScoreUpsertWithWhereUniqueWithoutMatchInput | PlayerScoreUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: PlayerScoreCreateManyMatchInputEnvelope
    set?: PlayerScoreWhereUniqueInput | PlayerScoreWhereUniqueInput[]
    disconnect?: PlayerScoreWhereUniqueInput | PlayerScoreWhereUniqueInput[]
    delete?: PlayerScoreWhereUniqueInput | PlayerScoreWhereUniqueInput[]
    connect?: PlayerScoreWhereUniqueInput | PlayerScoreWhereUniqueInput[]
    update?: PlayerScoreUpdateWithWhereUniqueWithoutMatchInput | PlayerScoreUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: PlayerScoreUpdateManyWithWhereWithoutMatchInput | PlayerScoreUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: PlayerScoreScalarWhereInput | PlayerScoreScalarWhereInput[]
  }

  export type InningUncheckedUpdateManyWithoutMatchNestedInput = {
    create?: XOR<InningCreateWithoutMatchInput, InningUncheckedCreateWithoutMatchInput> | InningCreateWithoutMatchInput[] | InningUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: InningCreateOrConnectWithoutMatchInput | InningCreateOrConnectWithoutMatchInput[]
    upsert?: InningUpsertWithWhereUniqueWithoutMatchInput | InningUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: InningCreateManyMatchInputEnvelope
    set?: InningWhereUniqueInput | InningWhereUniqueInput[]
    disconnect?: InningWhereUniqueInput | InningWhereUniqueInput[]
    delete?: InningWhereUniqueInput | InningWhereUniqueInput[]
    connect?: InningWhereUniqueInput | InningWhereUniqueInput[]
    update?: InningUpdateWithWhereUniqueWithoutMatchInput | InningUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: InningUpdateManyWithWhereWithoutMatchInput | InningUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: InningScalarWhereInput | InningScalarWhereInput[]
  }

  export type PlayerScoreUncheckedUpdateManyWithoutMatchNestedInput = {
    create?: XOR<PlayerScoreCreateWithoutMatchInput, PlayerScoreUncheckedCreateWithoutMatchInput> | PlayerScoreCreateWithoutMatchInput[] | PlayerScoreUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: PlayerScoreCreateOrConnectWithoutMatchInput | PlayerScoreCreateOrConnectWithoutMatchInput[]
    upsert?: PlayerScoreUpsertWithWhereUniqueWithoutMatchInput | PlayerScoreUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: PlayerScoreCreateManyMatchInputEnvelope
    set?: PlayerScoreWhereUniqueInput | PlayerScoreWhereUniqueInput[]
    disconnect?: PlayerScoreWhereUniqueInput | PlayerScoreWhereUniqueInput[]
    delete?: PlayerScoreWhereUniqueInput | PlayerScoreWhereUniqueInput[]
    connect?: PlayerScoreWhereUniqueInput | PlayerScoreWhereUniqueInput[]
    update?: PlayerScoreUpdateWithWhereUniqueWithoutMatchInput | PlayerScoreUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: PlayerScoreUpdateManyWithWhereWithoutMatchInput | PlayerScoreUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: PlayerScoreScalarWhereInput | PlayerScoreScalarWhereInput[]
  }

  export type MatchesCreateNestedOneWithoutInningsInput = {
    create?: XOR<MatchesCreateWithoutInningsInput, MatchesUncheckedCreateWithoutInningsInput>
    connectOrCreate?: MatchesCreateOrConnectWithoutInningsInput
    connect?: MatchesWhereUniqueInput
  }

  export type BallsCreateNestedManyWithoutInningInput = {
    create?: XOR<BallsCreateWithoutInningInput, BallsUncheckedCreateWithoutInningInput> | BallsCreateWithoutInningInput[] | BallsUncheckedCreateWithoutInningInput[]
    connectOrCreate?: BallsCreateOrConnectWithoutInningInput | BallsCreateOrConnectWithoutInningInput[]
    createMany?: BallsCreateManyInningInputEnvelope
    connect?: BallsWhereUniqueInput | BallsWhereUniqueInput[]
  }

  export type BallsUncheckedCreateNestedManyWithoutInningInput = {
    create?: XOR<BallsCreateWithoutInningInput, BallsUncheckedCreateWithoutInningInput> | BallsCreateWithoutInningInput[] | BallsUncheckedCreateWithoutInningInput[]
    connectOrCreate?: BallsCreateOrConnectWithoutInningInput | BallsCreateOrConnectWithoutInningInput[]
    createMany?: BallsCreateManyInningInputEnvelope
    connect?: BallsWhereUniqueInput | BallsWhereUniqueInput[]
  }

  export type EnumWhichInningFieldUpdateOperationsInput = {
    set?: $Enums.WhichInning
  }

  export type MatchesUpdateOneRequiredWithoutInningsNestedInput = {
    create?: XOR<MatchesCreateWithoutInningsInput, MatchesUncheckedCreateWithoutInningsInput>
    connectOrCreate?: MatchesCreateOrConnectWithoutInningsInput
    upsert?: MatchesUpsertWithoutInningsInput
    connect?: MatchesWhereUniqueInput
    update?: XOR<XOR<MatchesUpdateToOneWithWhereWithoutInningsInput, MatchesUpdateWithoutInningsInput>, MatchesUncheckedUpdateWithoutInningsInput>
  }

  export type BallsUpdateManyWithoutInningNestedInput = {
    create?: XOR<BallsCreateWithoutInningInput, BallsUncheckedCreateWithoutInningInput> | BallsCreateWithoutInningInput[] | BallsUncheckedCreateWithoutInningInput[]
    connectOrCreate?: BallsCreateOrConnectWithoutInningInput | BallsCreateOrConnectWithoutInningInput[]
    upsert?: BallsUpsertWithWhereUniqueWithoutInningInput | BallsUpsertWithWhereUniqueWithoutInningInput[]
    createMany?: BallsCreateManyInningInputEnvelope
    set?: BallsWhereUniqueInput | BallsWhereUniqueInput[]
    disconnect?: BallsWhereUniqueInput | BallsWhereUniqueInput[]
    delete?: BallsWhereUniqueInput | BallsWhereUniqueInput[]
    connect?: BallsWhereUniqueInput | BallsWhereUniqueInput[]
    update?: BallsUpdateWithWhereUniqueWithoutInningInput | BallsUpdateWithWhereUniqueWithoutInningInput[]
    updateMany?: BallsUpdateManyWithWhereWithoutInningInput | BallsUpdateManyWithWhereWithoutInningInput[]
    deleteMany?: BallsScalarWhereInput | BallsScalarWhereInput[]
  }

  export type BallsUncheckedUpdateManyWithoutInningNestedInput = {
    create?: XOR<BallsCreateWithoutInningInput, BallsUncheckedCreateWithoutInningInput> | BallsCreateWithoutInningInput[] | BallsUncheckedCreateWithoutInningInput[]
    connectOrCreate?: BallsCreateOrConnectWithoutInningInput | BallsCreateOrConnectWithoutInningInput[]
    upsert?: BallsUpsertWithWhereUniqueWithoutInningInput | BallsUpsertWithWhereUniqueWithoutInningInput[]
    createMany?: BallsCreateManyInningInputEnvelope
    set?: BallsWhereUniqueInput | BallsWhereUniqueInput[]
    disconnect?: BallsWhereUniqueInput | BallsWhereUniqueInput[]
    delete?: BallsWhereUniqueInput | BallsWhereUniqueInput[]
    connect?: BallsWhereUniqueInput | BallsWhereUniqueInput[]
    update?: BallsUpdateWithWhereUniqueWithoutInningInput | BallsUpdateWithWhereUniqueWithoutInningInput[]
    updateMany?: BallsUpdateManyWithWhereWithoutInningInput | BallsUpdateManyWithWhereWithoutInningInput[]
    deleteMany?: BallsScalarWhereInput | BallsScalarWhereInput[]
  }

  export type InningCreateNestedOneWithoutBallsInput = {
    create?: XOR<InningCreateWithoutBallsInput, InningUncheckedCreateWithoutBallsInput>
    connectOrCreate?: InningCreateOrConnectWithoutBallsInput
    connect?: InningWhereUniqueInput
  }

  export type EnumWhatHappendFieldUpdateOperationsInput = {
    set?: $Enums.WhatHappend
  }

  export type InningUpdateOneRequiredWithoutBallsNestedInput = {
    create?: XOR<InningCreateWithoutBallsInput, InningUncheckedCreateWithoutBallsInput>
    connectOrCreate?: InningCreateOrConnectWithoutBallsInput
    upsert?: InningUpsertWithoutBallsInput
    connect?: InningWhereUniqueInput
    update?: XOR<XOR<InningUpdateToOneWithWhereWithoutBallsInput, InningUpdateWithoutBallsInput>, InningUncheckedUpdateWithoutBallsInput>
  }

  export type TournamentJoinedTeamsCreateNestedManyWithoutTournamentInput = {
    create?: XOR<TournamentJoinedTeamsCreateWithoutTournamentInput, TournamentJoinedTeamsUncheckedCreateWithoutTournamentInput> | TournamentJoinedTeamsCreateWithoutTournamentInput[] | TournamentJoinedTeamsUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TournamentJoinedTeamsCreateOrConnectWithoutTournamentInput | TournamentJoinedTeamsCreateOrConnectWithoutTournamentInput[]
    createMany?: TournamentJoinedTeamsCreateManyTournamentInputEnvelope
    connect?: TournamentJoinedTeamsWhereUniqueInput | TournamentJoinedTeamsWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutTournamentsInput = {
    create?: XOR<UserCreateWithoutTournamentsInput, UserUncheckedCreateWithoutTournamentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTournamentsInput
    connect?: UserWhereUniqueInput
  }

  export type TournamentJoinedTeamsUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: XOR<TournamentJoinedTeamsCreateWithoutTournamentInput, TournamentJoinedTeamsUncheckedCreateWithoutTournamentInput> | TournamentJoinedTeamsCreateWithoutTournamentInput[] | TournamentJoinedTeamsUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TournamentJoinedTeamsCreateOrConnectWithoutTournamentInput | TournamentJoinedTeamsCreateOrConnectWithoutTournamentInput[]
    createMany?: TournamentJoinedTeamsCreateManyTournamentInputEnvelope
    connect?: TournamentJoinedTeamsWhereUniqueInput | TournamentJoinedTeamsWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TournamentJoinedTeamsUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<TournamentJoinedTeamsCreateWithoutTournamentInput, TournamentJoinedTeamsUncheckedCreateWithoutTournamentInput> | TournamentJoinedTeamsCreateWithoutTournamentInput[] | TournamentJoinedTeamsUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TournamentJoinedTeamsCreateOrConnectWithoutTournamentInput | TournamentJoinedTeamsCreateOrConnectWithoutTournamentInput[]
    upsert?: TournamentJoinedTeamsUpsertWithWhereUniqueWithoutTournamentInput | TournamentJoinedTeamsUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: TournamentJoinedTeamsCreateManyTournamentInputEnvelope
    set?: TournamentJoinedTeamsWhereUniqueInput | TournamentJoinedTeamsWhereUniqueInput[]
    disconnect?: TournamentJoinedTeamsWhereUniqueInput | TournamentJoinedTeamsWhereUniqueInput[]
    delete?: TournamentJoinedTeamsWhereUniqueInput | TournamentJoinedTeamsWhereUniqueInput[]
    connect?: TournamentJoinedTeamsWhereUniqueInput | TournamentJoinedTeamsWhereUniqueInput[]
    update?: TournamentJoinedTeamsUpdateWithWhereUniqueWithoutTournamentInput | TournamentJoinedTeamsUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: TournamentJoinedTeamsUpdateManyWithWhereWithoutTournamentInput | TournamentJoinedTeamsUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: TournamentJoinedTeamsScalarWhereInput | TournamentJoinedTeamsScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutTournamentsNestedInput = {
    create?: XOR<UserCreateWithoutTournamentsInput, UserUncheckedCreateWithoutTournamentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTournamentsInput
    upsert?: UserUpsertWithoutTournamentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTournamentsInput, UserUpdateWithoutTournamentsInput>, UserUncheckedUpdateWithoutTournamentsInput>
  }

  export type TournamentJoinedTeamsUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<TournamentJoinedTeamsCreateWithoutTournamentInput, TournamentJoinedTeamsUncheckedCreateWithoutTournamentInput> | TournamentJoinedTeamsCreateWithoutTournamentInput[] | TournamentJoinedTeamsUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TournamentJoinedTeamsCreateOrConnectWithoutTournamentInput | TournamentJoinedTeamsCreateOrConnectWithoutTournamentInput[]
    upsert?: TournamentJoinedTeamsUpsertWithWhereUniqueWithoutTournamentInput | TournamentJoinedTeamsUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: TournamentJoinedTeamsCreateManyTournamentInputEnvelope
    set?: TournamentJoinedTeamsWhereUniqueInput | TournamentJoinedTeamsWhereUniqueInput[]
    disconnect?: TournamentJoinedTeamsWhereUniqueInput | TournamentJoinedTeamsWhereUniqueInput[]
    delete?: TournamentJoinedTeamsWhereUniqueInput | TournamentJoinedTeamsWhereUniqueInput[]
    connect?: TournamentJoinedTeamsWhereUniqueInput | TournamentJoinedTeamsWhereUniqueInput[]
    update?: TournamentJoinedTeamsUpdateWithWhereUniqueWithoutTournamentInput | TournamentJoinedTeamsUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: TournamentJoinedTeamsUpdateManyWithWhereWithoutTournamentInput | TournamentJoinedTeamsUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: TournamentJoinedTeamsScalarWhereInput | TournamentJoinedTeamsScalarWhereInput[]
  }

  export type TournamentCreateNestedOneWithoutTournamentJoinedTeamsInput = {
    create?: XOR<TournamentCreateWithoutTournamentJoinedTeamsInput, TournamentUncheckedCreateWithoutTournamentJoinedTeamsInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutTournamentJoinedTeamsInput
    connect?: TournamentWhereUniqueInput
  }

  export type UserTeamsCreateNestedOneWithoutTournamentsJoinedInput = {
    create?: XOR<UserTeamsCreateWithoutTournamentsJoinedInput, UserTeamsUncheckedCreateWithoutTournamentsJoinedInput>
    connectOrCreate?: UserTeamsCreateOrConnectWithoutTournamentsJoinedInput
    connect?: UserTeamsWhereUniqueInput
  }

  export type TournamentUpdateOneRequiredWithoutTournamentJoinedTeamsNestedInput = {
    create?: XOR<TournamentCreateWithoutTournamentJoinedTeamsInput, TournamentUncheckedCreateWithoutTournamentJoinedTeamsInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutTournamentJoinedTeamsInput
    upsert?: TournamentUpsertWithoutTournamentJoinedTeamsInput
    connect?: TournamentWhereUniqueInput
    update?: XOR<XOR<TournamentUpdateToOneWithWhereWithoutTournamentJoinedTeamsInput, TournamentUpdateWithoutTournamentJoinedTeamsInput>, TournamentUncheckedUpdateWithoutTournamentJoinedTeamsInput>
  }

  export type UserTeamsUpdateOneRequiredWithoutTournamentsJoinedNestedInput = {
    create?: XOR<UserTeamsCreateWithoutTournamentsJoinedInput, UserTeamsUncheckedCreateWithoutTournamentsJoinedInput>
    connectOrCreate?: UserTeamsCreateOrConnectWithoutTournamentsJoinedInput
    upsert?: UserTeamsUpsertWithoutTournamentsJoinedInput
    connect?: UserTeamsWhereUniqueInput
    update?: XOR<XOR<UserTeamsUpdateToOneWithWhereWithoutTournamentsJoinedInput, UserTeamsUpdateWithoutTournamentsJoinedInput>, UserTeamsUncheckedUpdateWithoutTournamentsJoinedInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPlayerRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.PlayerRole | EnumPlayerRoleFieldRefInput<$PrismaModel>
    in?: $Enums.PlayerRole[] | ListEnumPlayerRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlayerRole[] | ListEnumPlayerRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumPlayerRoleFilter<$PrismaModel> | $Enums.PlayerRole
  }

  export type NestedEnumPlayerDextureFilter<$PrismaModel = never> = {
    equals?: $Enums.PlayerDexture | EnumPlayerDextureFieldRefInput<$PrismaModel>
    in?: $Enums.PlayerDexture[] | ListEnumPlayerDextureFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlayerDexture[] | ListEnumPlayerDextureFieldRefInput<$PrismaModel>
    not?: NestedEnumPlayerDextureFilter<$PrismaModel> | $Enums.PlayerDexture
  }

  export type NestedEnumPlayerCountryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlayerCountryStatus | EnumPlayerCountryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlayerCountryStatus[] | ListEnumPlayerCountryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlayerCountryStatus[] | ListEnumPlayerCountryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlayerCountryStatusFilter<$PrismaModel> | $Enums.PlayerCountryStatus
  }

  export type NestedEnumPlayerRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlayerRole | EnumPlayerRoleFieldRefInput<$PrismaModel>
    in?: $Enums.PlayerRole[] | ListEnumPlayerRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlayerRole[] | ListEnumPlayerRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumPlayerRoleWithAggregatesFilter<$PrismaModel> | $Enums.PlayerRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlayerRoleFilter<$PrismaModel>
    _max?: NestedEnumPlayerRoleFilter<$PrismaModel>
  }

  export type NestedEnumPlayerDextureWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlayerDexture | EnumPlayerDextureFieldRefInput<$PrismaModel>
    in?: $Enums.PlayerDexture[] | ListEnumPlayerDextureFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlayerDexture[] | ListEnumPlayerDextureFieldRefInput<$PrismaModel>
    not?: NestedEnumPlayerDextureWithAggregatesFilter<$PrismaModel> | $Enums.PlayerDexture
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlayerDextureFilter<$PrismaModel>
    _max?: NestedEnumPlayerDextureFilter<$PrismaModel>
  }

  export type NestedEnumPlayerCountryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlayerCountryStatus | EnumPlayerCountryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlayerCountryStatus[] | ListEnumPlayerCountryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlayerCountryStatus[] | ListEnumPlayerCountryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlayerCountryStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlayerCountryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlayerCountryStatusFilter<$PrismaModel>
    _max?: NestedEnumPlayerCountryStatusFilter<$PrismaModel>
  }

  export type NestedEnumPlayerPlayingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlayerPlayingStatus | EnumPlayerPlayingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlayerPlayingStatus[] | ListEnumPlayerPlayingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlayerPlayingStatus[] | ListEnumPlayerPlayingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlayerPlayingStatusFilter<$PrismaModel> | $Enums.PlayerPlayingStatus
  }

  export type NestedEnumPlayerPlayingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlayerPlayingStatus | EnumPlayerPlayingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlayerPlayingStatus[] | ListEnumPlayerPlayingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlayerPlayingStatus[] | ListEnumPlayerPlayingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlayerPlayingStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlayerPlayingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlayerPlayingStatusFilter<$PrismaModel>
    _max?: NestedEnumPlayerPlayingStatusFilter<$PrismaModel>
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

  export type NestedEnumMatchesWinnerFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchesWinner | EnumMatchesWinnerFieldRefInput<$PrismaModel>
    in?: $Enums.MatchesWinner[] | ListEnumMatchesWinnerFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchesWinner[] | ListEnumMatchesWinnerFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchesWinnerFilter<$PrismaModel> | $Enums.MatchesWinner
  }

  export type NestedEnumMatchTossElectionFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchTossElection | EnumMatchTossElectionFieldRefInput<$PrismaModel>
    in?: $Enums.MatchTossElection[] | ListEnumMatchTossElectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchTossElection[] | ListEnumMatchTossElectionFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchTossElectionFilter<$PrismaModel> | $Enums.MatchTossElection
  }

  export type NestedEnumTournamentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TournamentStatus | EnumTournamentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTournamentStatusFilter<$PrismaModel> | $Enums.TournamentStatus
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

  export type NestedEnumMatchesWinnerWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchesWinner | EnumMatchesWinnerFieldRefInput<$PrismaModel>
    in?: $Enums.MatchesWinner[] | ListEnumMatchesWinnerFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchesWinner[] | ListEnumMatchesWinnerFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchesWinnerWithAggregatesFilter<$PrismaModel> | $Enums.MatchesWinner
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchesWinnerFilter<$PrismaModel>
    _max?: NestedEnumMatchesWinnerFilter<$PrismaModel>
  }

  export type NestedEnumMatchTossElectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchTossElection | EnumMatchTossElectionFieldRefInput<$PrismaModel>
    in?: $Enums.MatchTossElection[] | ListEnumMatchTossElectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchTossElection[] | ListEnumMatchTossElectionFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchTossElectionWithAggregatesFilter<$PrismaModel> | $Enums.MatchTossElection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchTossElectionFilter<$PrismaModel>
    _max?: NestedEnumMatchTossElectionFilter<$PrismaModel>
  }

  export type NestedEnumTournamentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TournamentStatus | EnumTournamentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTournamentStatusWithAggregatesFilter<$PrismaModel> | $Enums.TournamentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTournamentStatusFilter<$PrismaModel>
    _max?: NestedEnumTournamentStatusFilter<$PrismaModel>
  }

  export type NestedEnumWhichInningFilter<$PrismaModel = never> = {
    equals?: $Enums.WhichInning | EnumWhichInningFieldRefInput<$PrismaModel>
    in?: $Enums.WhichInning[] | ListEnumWhichInningFieldRefInput<$PrismaModel>
    notIn?: $Enums.WhichInning[] | ListEnumWhichInningFieldRefInput<$PrismaModel>
    not?: NestedEnumWhichInningFilter<$PrismaModel> | $Enums.WhichInning
  }

  export type NestedEnumWhichInningWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WhichInning | EnumWhichInningFieldRefInput<$PrismaModel>
    in?: $Enums.WhichInning[] | ListEnumWhichInningFieldRefInput<$PrismaModel>
    notIn?: $Enums.WhichInning[] | ListEnumWhichInningFieldRefInput<$PrismaModel>
    not?: NestedEnumWhichInningWithAggregatesFilter<$PrismaModel> | $Enums.WhichInning
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWhichInningFilter<$PrismaModel>
    _max?: NestedEnumWhichInningFilter<$PrismaModel>
  }

  export type NestedEnumWhatHappendFilter<$PrismaModel = never> = {
    equals?: $Enums.WhatHappend | EnumWhatHappendFieldRefInput<$PrismaModel>
    in?: $Enums.WhatHappend[] | ListEnumWhatHappendFieldRefInput<$PrismaModel>
    notIn?: $Enums.WhatHappend[] | ListEnumWhatHappendFieldRefInput<$PrismaModel>
    not?: NestedEnumWhatHappendFilter<$PrismaModel> | $Enums.WhatHappend
  }

  export type NestedEnumWhatHappendWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WhatHappend | EnumWhatHappendFieldRefInput<$PrismaModel>
    in?: $Enums.WhatHappend[] | ListEnumWhatHappendFieldRefInput<$PrismaModel>
    notIn?: $Enums.WhatHappend[] | ListEnumWhatHappendFieldRefInput<$PrismaModel>
    not?: NestedEnumWhatHappendWithAggregatesFilter<$PrismaModel> | $Enums.WhatHappend
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWhatHappendFilter<$PrismaModel>
    _max?: NestedEnumWhatHappendFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserTeamsCreateWithoutUserInput = {
    id?: string
    fantasyPoints: number
    captain: string
    viceCaptain: string
    disabled: boolean
    players?: UserTeamPlayersCreateNestedManyWithoutUserTeamsInput
    tournamentsJoined?: TournamentJoinedTeamsCreateNestedManyWithoutUserTeamInput
  }

  export type UserTeamsUncheckedCreateWithoutUserInput = {
    id?: string
    fantasyPoints: number
    captain: string
    viceCaptain: string
    disabled: boolean
    players?: UserTeamPlayersUncheckedCreateNestedManyWithoutUserTeamsInput
    tournamentsJoined?: TournamentJoinedTeamsUncheckedCreateNestedManyWithoutUserTeamInput
  }

  export type UserTeamsCreateOrConnectWithoutUserInput = {
    where: UserTeamsWhereUniqueInput
    create: XOR<UserTeamsCreateWithoutUserInput, UserTeamsUncheckedCreateWithoutUserInput>
  }

  export type UserTeamsCreateManyUserInputEnvelope = {
    data: UserTeamsCreateManyUserInput | UserTeamsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TournamentCreateWithoutOwnerInput = {
    id?: string
    maxLimit: number
    entryFee: number
    prizePool?: number | null
    winner?: string | null
    teamsJoined: number
    status: $Enums.TournamentStatus
    tournamentJoinedTeams?: TournamentJoinedTeamsCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUncheckedCreateWithoutOwnerInput = {
    id?: string
    maxLimit: number
    entryFee: number
    prizePool?: number | null
    winner?: string | null
    teamsJoined: number
    status: $Enums.TournamentStatus
    tournamentJoinedTeams?: TournamentJoinedTeamsUncheckedCreateNestedManyWithoutTournamentInput
  }

  export type TournamentCreateOrConnectWithoutOwnerInput = {
    where: TournamentWhereUniqueInput
    create: XOR<TournamentCreateWithoutOwnerInput, TournamentUncheckedCreateWithoutOwnerInput>
  }

  export type TournamentCreateManyOwnerInputEnvelope = {
    data: TournamentCreateManyOwnerInput | TournamentCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type UserTeamsUpsertWithWhereUniqueWithoutUserInput = {
    where: UserTeamsWhereUniqueInput
    update: XOR<UserTeamsUpdateWithoutUserInput, UserTeamsUncheckedUpdateWithoutUserInput>
    create: XOR<UserTeamsCreateWithoutUserInput, UserTeamsUncheckedCreateWithoutUserInput>
  }

  export type UserTeamsUpdateWithWhereUniqueWithoutUserInput = {
    where: UserTeamsWhereUniqueInput
    data: XOR<UserTeamsUpdateWithoutUserInput, UserTeamsUncheckedUpdateWithoutUserInput>
  }

  export type UserTeamsUpdateManyWithWhereWithoutUserInput = {
    where: UserTeamsScalarWhereInput
    data: XOR<UserTeamsUpdateManyMutationInput, UserTeamsUncheckedUpdateManyWithoutUserInput>
  }

  export type UserTeamsScalarWhereInput = {
    AND?: UserTeamsScalarWhereInput | UserTeamsScalarWhereInput[]
    OR?: UserTeamsScalarWhereInput[]
    NOT?: UserTeamsScalarWhereInput | UserTeamsScalarWhereInput[]
    id?: StringFilter<"UserTeams"> | string
    fantasyPoints?: IntFilter<"UserTeams"> | number
    captain?: StringFilter<"UserTeams"> | string
    viceCaptain?: StringFilter<"UserTeams"> | string
    userId?: StringFilter<"UserTeams"> | string
    disabled?: BoolFilter<"UserTeams"> | boolean
  }

  export type TournamentUpsertWithWhereUniqueWithoutOwnerInput = {
    where: TournamentWhereUniqueInput
    update: XOR<TournamentUpdateWithoutOwnerInput, TournamentUncheckedUpdateWithoutOwnerInput>
    create: XOR<TournamentCreateWithoutOwnerInput, TournamentUncheckedCreateWithoutOwnerInput>
  }

  export type TournamentUpdateWithWhereUniqueWithoutOwnerInput = {
    where: TournamentWhereUniqueInput
    data: XOR<TournamentUpdateWithoutOwnerInput, TournamentUncheckedUpdateWithoutOwnerInput>
  }

  export type TournamentUpdateManyWithWhereWithoutOwnerInput = {
    where: TournamentScalarWhereInput
    data: XOR<TournamentUpdateManyMutationInput, TournamentUncheckedUpdateManyWithoutOwnerInput>
  }

  export type TournamentScalarWhereInput = {
    AND?: TournamentScalarWhereInput | TournamentScalarWhereInput[]
    OR?: TournamentScalarWhereInput[]
    NOT?: TournamentScalarWhereInput | TournamentScalarWhereInput[]
    id?: StringFilter<"Tournament"> | string
    maxLimit?: IntFilter<"Tournament"> | number
    entryFee?: IntFilter<"Tournament"> | number
    prizePool?: IntNullableFilter<"Tournament"> | number | null
    winner?: StringNullableFilter<"Tournament"> | string | null
    ownerId?: StringFilter<"Tournament"> | string
    teamsJoined?: IntFilter<"Tournament"> | number
    status?: EnumTournamentStatusFilter<"Tournament"> | $Enums.TournamentStatus
  }

  export type UserCreateWithoutTeamsInput = {
    id?: string
    name: string
    email: string
    password: string
    publicKey?: string | null
    role: $Enums.UserRole
    tournaments?: TournamentCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutTeamsInput = {
    id?: string
    name: string
    email: string
    password: string
    publicKey?: string | null
    role: $Enums.UserRole
    tournaments?: TournamentUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutTeamsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
  }

  export type UserTeamPlayersCreateWithoutUserTeamsInput = {
    id?: string
    players: PlayersCreateNestedOneWithoutUserTeamPlayersInput
  }

  export type UserTeamPlayersUncheckedCreateWithoutUserTeamsInput = {
    id?: string
    playersId: string
  }

  export type UserTeamPlayersCreateOrConnectWithoutUserTeamsInput = {
    where: UserTeamPlayersWhereUniqueInput
    create: XOR<UserTeamPlayersCreateWithoutUserTeamsInput, UserTeamPlayersUncheckedCreateWithoutUserTeamsInput>
  }

  export type UserTeamPlayersCreateManyUserTeamsInputEnvelope = {
    data: UserTeamPlayersCreateManyUserTeamsInput | UserTeamPlayersCreateManyUserTeamsInput[]
    skipDuplicates?: boolean
  }

  export type TournamentJoinedTeamsCreateWithoutUserTeamInput = {
    id?: string
    tournament: TournamentCreateNestedOneWithoutTournamentJoinedTeamsInput
  }

  export type TournamentJoinedTeamsUncheckedCreateWithoutUserTeamInput = {
    id?: string
    tournamentId: string
  }

  export type TournamentJoinedTeamsCreateOrConnectWithoutUserTeamInput = {
    where: TournamentJoinedTeamsWhereUniqueInput
    create: XOR<TournamentJoinedTeamsCreateWithoutUserTeamInput, TournamentJoinedTeamsUncheckedCreateWithoutUserTeamInput>
  }

  export type TournamentJoinedTeamsCreateManyUserTeamInputEnvelope = {
    data: TournamentJoinedTeamsCreateManyUserTeamInput | TournamentJoinedTeamsCreateManyUserTeamInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTeamsInput = {
    update: XOR<UserUpdateWithoutTeamsInput, UserUncheckedUpdateWithoutTeamsInput>
    create: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeamsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeamsInput, UserUncheckedUpdateWithoutTeamsInput>
  }

  export type UserUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    tournaments?: TournamentUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    tournaments?: TournamentUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserTeamPlayersUpsertWithWhereUniqueWithoutUserTeamsInput = {
    where: UserTeamPlayersWhereUniqueInput
    update: XOR<UserTeamPlayersUpdateWithoutUserTeamsInput, UserTeamPlayersUncheckedUpdateWithoutUserTeamsInput>
    create: XOR<UserTeamPlayersCreateWithoutUserTeamsInput, UserTeamPlayersUncheckedCreateWithoutUserTeamsInput>
  }

  export type UserTeamPlayersUpdateWithWhereUniqueWithoutUserTeamsInput = {
    where: UserTeamPlayersWhereUniqueInput
    data: XOR<UserTeamPlayersUpdateWithoutUserTeamsInput, UserTeamPlayersUncheckedUpdateWithoutUserTeamsInput>
  }

  export type UserTeamPlayersUpdateManyWithWhereWithoutUserTeamsInput = {
    where: UserTeamPlayersScalarWhereInput
    data: XOR<UserTeamPlayersUpdateManyMutationInput, UserTeamPlayersUncheckedUpdateManyWithoutUserTeamsInput>
  }

  export type UserTeamPlayersScalarWhereInput = {
    AND?: UserTeamPlayersScalarWhereInput | UserTeamPlayersScalarWhereInput[]
    OR?: UserTeamPlayersScalarWhereInput[]
    NOT?: UserTeamPlayersScalarWhereInput | UserTeamPlayersScalarWhereInput[]
    id?: StringFilter<"UserTeamPlayers"> | string
    userTeamsId?: StringFilter<"UserTeamPlayers"> | string
    playersId?: StringFilter<"UserTeamPlayers"> | string
  }

  export type TournamentJoinedTeamsUpsertWithWhereUniqueWithoutUserTeamInput = {
    where: TournamentJoinedTeamsWhereUniqueInput
    update: XOR<TournamentJoinedTeamsUpdateWithoutUserTeamInput, TournamentJoinedTeamsUncheckedUpdateWithoutUserTeamInput>
    create: XOR<TournamentJoinedTeamsCreateWithoutUserTeamInput, TournamentJoinedTeamsUncheckedCreateWithoutUserTeamInput>
  }

  export type TournamentJoinedTeamsUpdateWithWhereUniqueWithoutUserTeamInput = {
    where: TournamentJoinedTeamsWhereUniqueInput
    data: XOR<TournamentJoinedTeamsUpdateWithoutUserTeamInput, TournamentJoinedTeamsUncheckedUpdateWithoutUserTeamInput>
  }

  export type TournamentJoinedTeamsUpdateManyWithWhereWithoutUserTeamInput = {
    where: TournamentJoinedTeamsScalarWhereInput
    data: XOR<TournamentJoinedTeamsUpdateManyMutationInput, TournamentJoinedTeamsUncheckedUpdateManyWithoutUserTeamInput>
  }

  export type TournamentJoinedTeamsScalarWhereInput = {
    AND?: TournamentJoinedTeamsScalarWhereInput | TournamentJoinedTeamsScalarWhereInput[]
    OR?: TournamentJoinedTeamsScalarWhereInput[]
    NOT?: TournamentJoinedTeamsScalarWhereInput | TournamentJoinedTeamsScalarWhereInput[]
    id?: StringFilter<"TournamentJoinedTeams"> | string
    tournamentId?: StringFilter<"TournamentJoinedTeams"> | string
    userTeamId?: StringFilter<"TournamentJoinedTeams"> | string
  }

  export type UserTeamsCreateWithoutPlayersInput = {
    id?: string
    fantasyPoints: number
    captain: string
    viceCaptain: string
    disabled: boolean
    user: UserCreateNestedOneWithoutTeamsInput
    tournamentsJoined?: TournamentJoinedTeamsCreateNestedManyWithoutUserTeamInput
  }

  export type UserTeamsUncheckedCreateWithoutPlayersInput = {
    id?: string
    fantasyPoints: number
    captain: string
    viceCaptain: string
    userId: string
    disabled: boolean
    tournamentsJoined?: TournamentJoinedTeamsUncheckedCreateNestedManyWithoutUserTeamInput
  }

  export type UserTeamsCreateOrConnectWithoutPlayersInput = {
    where: UserTeamsWhereUniqueInput
    create: XOR<UserTeamsCreateWithoutPlayersInput, UserTeamsUncheckedCreateWithoutPlayersInput>
  }

  export type PlayersCreateWithoutUserTeamPlayersInput = {
    id?: string
    name: string
    role: $Enums.PlayerRole
    battingDexture: $Enums.PlayerDexture
    bowlingDexture: $Enums.PlayerDexture
    countryStatus: $Enums.PlayerCountryStatus
    age: string
    img: string
    squad: SquadCreateNestedOneWithoutPlayersInput
    score?: PlayerScoreCreateNestedManyWithoutPlayerInput
  }

  export type PlayersUncheckedCreateWithoutUserTeamPlayersInput = {
    id?: string
    name: string
    role: $Enums.PlayerRole
    battingDexture: $Enums.PlayerDexture
    bowlingDexture: $Enums.PlayerDexture
    countryStatus: $Enums.PlayerCountryStatus
    squadId: string
    age: string
    img: string
    score?: PlayerScoreUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayersCreateOrConnectWithoutUserTeamPlayersInput = {
    where: PlayersWhereUniqueInput
    create: XOR<PlayersCreateWithoutUserTeamPlayersInput, PlayersUncheckedCreateWithoutUserTeamPlayersInput>
  }

  export type UserTeamsUpsertWithoutPlayersInput = {
    update: XOR<UserTeamsUpdateWithoutPlayersInput, UserTeamsUncheckedUpdateWithoutPlayersInput>
    create: XOR<UserTeamsCreateWithoutPlayersInput, UserTeamsUncheckedCreateWithoutPlayersInput>
    where?: UserTeamsWhereInput
  }

  export type UserTeamsUpdateToOneWithWhereWithoutPlayersInput = {
    where?: UserTeamsWhereInput
    data: XOR<UserTeamsUpdateWithoutPlayersInput, UserTeamsUncheckedUpdateWithoutPlayersInput>
  }

  export type UserTeamsUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    fantasyPoints?: IntFieldUpdateOperationsInput | number
    captain?: StringFieldUpdateOperationsInput | string
    viceCaptain?: StringFieldUpdateOperationsInput | string
    disabled?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutTeamsNestedInput
    tournamentsJoined?: TournamentJoinedTeamsUpdateManyWithoutUserTeamNestedInput
  }

  export type UserTeamsUncheckedUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    fantasyPoints?: IntFieldUpdateOperationsInput | number
    captain?: StringFieldUpdateOperationsInput | string
    viceCaptain?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    disabled?: BoolFieldUpdateOperationsInput | boolean
    tournamentsJoined?: TournamentJoinedTeamsUncheckedUpdateManyWithoutUserTeamNestedInput
  }

  export type PlayersUpsertWithoutUserTeamPlayersInput = {
    update: XOR<PlayersUpdateWithoutUserTeamPlayersInput, PlayersUncheckedUpdateWithoutUserTeamPlayersInput>
    create: XOR<PlayersCreateWithoutUserTeamPlayersInput, PlayersUncheckedCreateWithoutUserTeamPlayersInput>
    where?: PlayersWhereInput
  }

  export type PlayersUpdateToOneWithWhereWithoutUserTeamPlayersInput = {
    where?: PlayersWhereInput
    data: XOR<PlayersUpdateWithoutUserTeamPlayersInput, PlayersUncheckedUpdateWithoutUserTeamPlayersInput>
  }

  export type PlayersUpdateWithoutUserTeamPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumPlayerRoleFieldUpdateOperationsInput | $Enums.PlayerRole
    battingDexture?: EnumPlayerDextureFieldUpdateOperationsInput | $Enums.PlayerDexture
    bowlingDexture?: EnumPlayerDextureFieldUpdateOperationsInput | $Enums.PlayerDexture
    countryStatus?: EnumPlayerCountryStatusFieldUpdateOperationsInput | $Enums.PlayerCountryStatus
    age?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    squad?: SquadUpdateOneRequiredWithoutPlayersNestedInput
    score?: PlayerScoreUpdateManyWithoutPlayerNestedInput
  }

  export type PlayersUncheckedUpdateWithoutUserTeamPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumPlayerRoleFieldUpdateOperationsInput | $Enums.PlayerRole
    battingDexture?: EnumPlayerDextureFieldUpdateOperationsInput | $Enums.PlayerDexture
    bowlingDexture?: EnumPlayerDextureFieldUpdateOperationsInput | $Enums.PlayerDexture
    countryStatus?: EnumPlayerCountryStatusFieldUpdateOperationsInput | $Enums.PlayerCountryStatus
    squadId?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    score?: PlayerScoreUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayersCreateWithoutSquadInput = {
    id?: string
    name: string
    role: $Enums.PlayerRole
    battingDexture: $Enums.PlayerDexture
    bowlingDexture: $Enums.PlayerDexture
    countryStatus: $Enums.PlayerCountryStatus
    age: string
    img: string
    userTeamPlayers?: UserTeamPlayersCreateNestedManyWithoutPlayersInput
    score?: PlayerScoreCreateNestedManyWithoutPlayerInput
  }

  export type PlayersUncheckedCreateWithoutSquadInput = {
    id?: string
    name: string
    role: $Enums.PlayerRole
    battingDexture: $Enums.PlayerDexture
    bowlingDexture: $Enums.PlayerDexture
    countryStatus: $Enums.PlayerCountryStatus
    age: string
    img: string
    userTeamPlayers?: UserTeamPlayersUncheckedCreateNestedManyWithoutPlayersInput
    score?: PlayerScoreUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayersCreateOrConnectWithoutSquadInput = {
    where: PlayersWhereUniqueInput
    create: XOR<PlayersCreateWithoutSquadInput, PlayersUncheckedCreateWithoutSquadInput>
  }

  export type PlayersCreateManySquadInputEnvelope = {
    data: PlayersCreateManySquadInput | PlayersCreateManySquadInput[]
    skipDuplicates?: boolean
  }

  export type PlayersUpsertWithWhereUniqueWithoutSquadInput = {
    where: PlayersWhereUniqueInput
    update: XOR<PlayersUpdateWithoutSquadInput, PlayersUncheckedUpdateWithoutSquadInput>
    create: XOR<PlayersCreateWithoutSquadInput, PlayersUncheckedCreateWithoutSquadInput>
  }

  export type PlayersUpdateWithWhereUniqueWithoutSquadInput = {
    where: PlayersWhereUniqueInput
    data: XOR<PlayersUpdateWithoutSquadInput, PlayersUncheckedUpdateWithoutSquadInput>
  }

  export type PlayersUpdateManyWithWhereWithoutSquadInput = {
    where: PlayersScalarWhereInput
    data: XOR<PlayersUpdateManyMutationInput, PlayersUncheckedUpdateManyWithoutSquadInput>
  }

  export type PlayersScalarWhereInput = {
    AND?: PlayersScalarWhereInput | PlayersScalarWhereInput[]
    OR?: PlayersScalarWhereInput[]
    NOT?: PlayersScalarWhereInput | PlayersScalarWhereInput[]
    id?: StringFilter<"Players"> | string
    name?: StringFilter<"Players"> | string
    role?: EnumPlayerRoleFilter<"Players"> | $Enums.PlayerRole
    battingDexture?: EnumPlayerDextureFilter<"Players"> | $Enums.PlayerDexture
    bowlingDexture?: EnumPlayerDextureFilter<"Players"> | $Enums.PlayerDexture
    countryStatus?: EnumPlayerCountryStatusFilter<"Players"> | $Enums.PlayerCountryStatus
    squadId?: StringFilter<"Players"> | string
    age?: StringFilter<"Players"> | string
    img?: StringFilter<"Players"> | string
  }

  export type SquadCreateWithoutPlayersInput = {
    id?: string
    name: string
    logo: string
    captain: string
    viceCaptain: string
  }

  export type SquadUncheckedCreateWithoutPlayersInput = {
    id?: string
    name: string
    logo: string
    captain: string
    viceCaptain: string
  }

  export type SquadCreateOrConnectWithoutPlayersInput = {
    where: SquadWhereUniqueInput
    create: XOR<SquadCreateWithoutPlayersInput, SquadUncheckedCreateWithoutPlayersInput>
  }

  export type UserTeamPlayersCreateWithoutPlayersInput = {
    id?: string
    userTeams: UserTeamsCreateNestedOneWithoutPlayersInput
  }

  export type UserTeamPlayersUncheckedCreateWithoutPlayersInput = {
    id?: string
    userTeamsId: string
  }

  export type UserTeamPlayersCreateOrConnectWithoutPlayersInput = {
    where: UserTeamPlayersWhereUniqueInput
    create: XOR<UserTeamPlayersCreateWithoutPlayersInput, UserTeamPlayersUncheckedCreateWithoutPlayersInput>
  }

  export type UserTeamPlayersCreateManyPlayersInputEnvelope = {
    data: UserTeamPlayersCreateManyPlayersInput | UserTeamPlayersCreateManyPlayersInput[]
    skipDuplicates?: boolean
  }

  export type PlayerScoreCreateWithoutPlayerInput = {
    id?: string
    playingStatus: $Enums.PlayerPlayingStatus
    fantasyPoints: number
    run: number
    sixes: number
    fours: number
    others: number
    runsConceded: number
    wickets: number
    ballsBowled: number
    catches: number
    runout: number
    dotBall: number
    match: MatchesCreateNestedOneWithoutPlayerScoreInput
  }

  export type PlayerScoreUncheckedCreateWithoutPlayerInput = {
    id?: string
    playingStatus: $Enums.PlayerPlayingStatus
    fantasyPoints: number
    run: number
    sixes: number
    fours: number
    others: number
    runsConceded: number
    wickets: number
    ballsBowled: number
    catches: number
    runout: number
    dotBall: number
    matchId: string
  }

  export type PlayerScoreCreateOrConnectWithoutPlayerInput = {
    where: PlayerScoreWhereUniqueInput
    create: XOR<PlayerScoreCreateWithoutPlayerInput, PlayerScoreUncheckedCreateWithoutPlayerInput>
  }

  export type PlayerScoreCreateManyPlayerInputEnvelope = {
    data: PlayerScoreCreateManyPlayerInput | PlayerScoreCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type SquadUpsertWithoutPlayersInput = {
    update: XOR<SquadUpdateWithoutPlayersInput, SquadUncheckedUpdateWithoutPlayersInput>
    create: XOR<SquadCreateWithoutPlayersInput, SquadUncheckedCreateWithoutPlayersInput>
    where?: SquadWhereInput
  }

  export type SquadUpdateToOneWithWhereWithoutPlayersInput = {
    where?: SquadWhereInput
    data: XOR<SquadUpdateWithoutPlayersInput, SquadUncheckedUpdateWithoutPlayersInput>
  }

  export type SquadUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    captain?: StringFieldUpdateOperationsInput | string
    viceCaptain?: StringFieldUpdateOperationsInput | string
  }

  export type SquadUncheckedUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    captain?: StringFieldUpdateOperationsInput | string
    viceCaptain?: StringFieldUpdateOperationsInput | string
  }

  export type UserTeamPlayersUpsertWithWhereUniqueWithoutPlayersInput = {
    where: UserTeamPlayersWhereUniqueInput
    update: XOR<UserTeamPlayersUpdateWithoutPlayersInput, UserTeamPlayersUncheckedUpdateWithoutPlayersInput>
    create: XOR<UserTeamPlayersCreateWithoutPlayersInput, UserTeamPlayersUncheckedCreateWithoutPlayersInput>
  }

  export type UserTeamPlayersUpdateWithWhereUniqueWithoutPlayersInput = {
    where: UserTeamPlayersWhereUniqueInput
    data: XOR<UserTeamPlayersUpdateWithoutPlayersInput, UserTeamPlayersUncheckedUpdateWithoutPlayersInput>
  }

  export type UserTeamPlayersUpdateManyWithWhereWithoutPlayersInput = {
    where: UserTeamPlayersScalarWhereInput
    data: XOR<UserTeamPlayersUpdateManyMutationInput, UserTeamPlayersUncheckedUpdateManyWithoutPlayersInput>
  }

  export type PlayerScoreUpsertWithWhereUniqueWithoutPlayerInput = {
    where: PlayerScoreWhereUniqueInput
    update: XOR<PlayerScoreUpdateWithoutPlayerInput, PlayerScoreUncheckedUpdateWithoutPlayerInput>
    create: XOR<PlayerScoreCreateWithoutPlayerInput, PlayerScoreUncheckedCreateWithoutPlayerInput>
  }

  export type PlayerScoreUpdateWithWhereUniqueWithoutPlayerInput = {
    where: PlayerScoreWhereUniqueInput
    data: XOR<PlayerScoreUpdateWithoutPlayerInput, PlayerScoreUncheckedUpdateWithoutPlayerInput>
  }

  export type PlayerScoreUpdateManyWithWhereWithoutPlayerInput = {
    where: PlayerScoreScalarWhereInput
    data: XOR<PlayerScoreUpdateManyMutationInput, PlayerScoreUncheckedUpdateManyWithoutPlayerInput>
  }

  export type PlayerScoreScalarWhereInput = {
    AND?: PlayerScoreScalarWhereInput | PlayerScoreScalarWhereInput[]
    OR?: PlayerScoreScalarWhereInput[]
    NOT?: PlayerScoreScalarWhereInput | PlayerScoreScalarWhereInput[]
    id?: StringFilter<"PlayerScore"> | string
    playingStatus?: EnumPlayerPlayingStatusFilter<"PlayerScore"> | $Enums.PlayerPlayingStatus
    fantasyPoints?: IntFilter<"PlayerScore"> | number
    run?: IntFilter<"PlayerScore"> | number
    sixes?: IntFilter<"PlayerScore"> | number
    fours?: IntFilter<"PlayerScore"> | number
    others?: IntFilter<"PlayerScore"> | number
    runsConceded?: IntFilter<"PlayerScore"> | number
    wickets?: IntFilter<"PlayerScore"> | number
    ballsBowled?: IntFilter<"PlayerScore"> | number
    catches?: IntFilter<"PlayerScore"> | number
    runout?: IntFilter<"PlayerScore"> | number
    dotBall?: IntFilter<"PlayerScore"> | number
    playerId?: StringFilter<"PlayerScore"> | string
    matchId?: StringFilter<"PlayerScore"> | string
  }

  export type PlayersCreateWithoutScoreInput = {
    id?: string
    name: string
    role: $Enums.PlayerRole
    battingDexture: $Enums.PlayerDexture
    bowlingDexture: $Enums.PlayerDexture
    countryStatus: $Enums.PlayerCountryStatus
    age: string
    img: string
    squad: SquadCreateNestedOneWithoutPlayersInput
    userTeamPlayers?: UserTeamPlayersCreateNestedManyWithoutPlayersInput
  }

  export type PlayersUncheckedCreateWithoutScoreInput = {
    id?: string
    name: string
    role: $Enums.PlayerRole
    battingDexture: $Enums.PlayerDexture
    bowlingDexture: $Enums.PlayerDexture
    countryStatus: $Enums.PlayerCountryStatus
    squadId: string
    age: string
    img: string
    userTeamPlayers?: UserTeamPlayersUncheckedCreateNestedManyWithoutPlayersInput
  }

  export type PlayersCreateOrConnectWithoutScoreInput = {
    where: PlayersWhereUniqueInput
    create: XOR<PlayersCreateWithoutScoreInput, PlayersUncheckedCreateWithoutScoreInput>
  }

  export type MatchesCreateWithoutPlayerScoreInput = {
    id?: string
    team1Id: string
    team2Id: string
    venue: string
    date: Date | string
    winner: $Enums.MatchesWinner
    toss: $Enums.MatchesWinner
    elected: $Enums.MatchTossElection
    status: $Enums.TournamentStatus
    innings?: InningCreateNestedManyWithoutMatchInput
  }

  export type MatchesUncheckedCreateWithoutPlayerScoreInput = {
    id?: string
    team1Id: string
    team2Id: string
    venue: string
    date: Date | string
    winner: $Enums.MatchesWinner
    toss: $Enums.MatchesWinner
    elected: $Enums.MatchTossElection
    status: $Enums.TournamentStatus
    innings?: InningUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchesCreateOrConnectWithoutPlayerScoreInput = {
    where: MatchesWhereUniqueInput
    create: XOR<MatchesCreateWithoutPlayerScoreInput, MatchesUncheckedCreateWithoutPlayerScoreInput>
  }

  export type PlayersUpsertWithoutScoreInput = {
    update: XOR<PlayersUpdateWithoutScoreInput, PlayersUncheckedUpdateWithoutScoreInput>
    create: XOR<PlayersCreateWithoutScoreInput, PlayersUncheckedCreateWithoutScoreInput>
    where?: PlayersWhereInput
  }

  export type PlayersUpdateToOneWithWhereWithoutScoreInput = {
    where?: PlayersWhereInput
    data: XOR<PlayersUpdateWithoutScoreInput, PlayersUncheckedUpdateWithoutScoreInput>
  }

  export type PlayersUpdateWithoutScoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumPlayerRoleFieldUpdateOperationsInput | $Enums.PlayerRole
    battingDexture?: EnumPlayerDextureFieldUpdateOperationsInput | $Enums.PlayerDexture
    bowlingDexture?: EnumPlayerDextureFieldUpdateOperationsInput | $Enums.PlayerDexture
    countryStatus?: EnumPlayerCountryStatusFieldUpdateOperationsInput | $Enums.PlayerCountryStatus
    age?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    squad?: SquadUpdateOneRequiredWithoutPlayersNestedInput
    userTeamPlayers?: UserTeamPlayersUpdateManyWithoutPlayersNestedInput
  }

  export type PlayersUncheckedUpdateWithoutScoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumPlayerRoleFieldUpdateOperationsInput | $Enums.PlayerRole
    battingDexture?: EnumPlayerDextureFieldUpdateOperationsInput | $Enums.PlayerDexture
    bowlingDexture?: EnumPlayerDextureFieldUpdateOperationsInput | $Enums.PlayerDexture
    countryStatus?: EnumPlayerCountryStatusFieldUpdateOperationsInput | $Enums.PlayerCountryStatus
    squadId?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    userTeamPlayers?: UserTeamPlayersUncheckedUpdateManyWithoutPlayersNestedInput
  }

  export type MatchesUpsertWithoutPlayerScoreInput = {
    update: XOR<MatchesUpdateWithoutPlayerScoreInput, MatchesUncheckedUpdateWithoutPlayerScoreInput>
    create: XOR<MatchesCreateWithoutPlayerScoreInput, MatchesUncheckedCreateWithoutPlayerScoreInput>
    where?: MatchesWhereInput
  }

  export type MatchesUpdateToOneWithWhereWithoutPlayerScoreInput = {
    where?: MatchesWhereInput
    data: XOR<MatchesUpdateWithoutPlayerScoreInput, MatchesUncheckedUpdateWithoutPlayerScoreInput>
  }

  export type MatchesUpdateWithoutPlayerScoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    team1Id?: StringFieldUpdateOperationsInput | string
    team2Id?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    winner?: EnumMatchesWinnerFieldUpdateOperationsInput | $Enums.MatchesWinner
    toss?: EnumMatchesWinnerFieldUpdateOperationsInput | $Enums.MatchesWinner
    elected?: EnumMatchTossElectionFieldUpdateOperationsInput | $Enums.MatchTossElection
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    innings?: InningUpdateManyWithoutMatchNestedInput
  }

  export type MatchesUncheckedUpdateWithoutPlayerScoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    team1Id?: StringFieldUpdateOperationsInput | string
    team2Id?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    winner?: EnumMatchesWinnerFieldUpdateOperationsInput | $Enums.MatchesWinner
    toss?: EnumMatchesWinnerFieldUpdateOperationsInput | $Enums.MatchesWinner
    elected?: EnumMatchTossElectionFieldUpdateOperationsInput | $Enums.MatchTossElection
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    innings?: InningUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type InningCreateWithoutMatchInput = {
    id?: string
    whichInning: $Enums.WhichInning
    score: number
    wickets: number
    extras: number
    batsman1?: string | null
    batsman2?: string | null
    bowler?: string | null
    balls?: BallsCreateNestedManyWithoutInningInput
  }

  export type InningUncheckedCreateWithoutMatchInput = {
    id?: string
    whichInning: $Enums.WhichInning
    score: number
    wickets: number
    extras: number
    batsman1?: string | null
    batsman2?: string | null
    bowler?: string | null
    balls?: BallsUncheckedCreateNestedManyWithoutInningInput
  }

  export type InningCreateOrConnectWithoutMatchInput = {
    where: InningWhereUniqueInput
    create: XOR<InningCreateWithoutMatchInput, InningUncheckedCreateWithoutMatchInput>
  }

  export type InningCreateManyMatchInputEnvelope = {
    data: InningCreateManyMatchInput | InningCreateManyMatchInput[]
    skipDuplicates?: boolean
  }

  export type PlayerScoreCreateWithoutMatchInput = {
    id?: string
    playingStatus: $Enums.PlayerPlayingStatus
    fantasyPoints: number
    run: number
    sixes: number
    fours: number
    others: number
    runsConceded: number
    wickets: number
    ballsBowled: number
    catches: number
    runout: number
    dotBall: number
    player: PlayersCreateNestedOneWithoutScoreInput
  }

  export type PlayerScoreUncheckedCreateWithoutMatchInput = {
    id?: string
    playingStatus: $Enums.PlayerPlayingStatus
    fantasyPoints: number
    run: number
    sixes: number
    fours: number
    others: number
    runsConceded: number
    wickets: number
    ballsBowled: number
    catches: number
    runout: number
    dotBall: number
    playerId: string
  }

  export type PlayerScoreCreateOrConnectWithoutMatchInput = {
    where: PlayerScoreWhereUniqueInput
    create: XOR<PlayerScoreCreateWithoutMatchInput, PlayerScoreUncheckedCreateWithoutMatchInput>
  }

  export type PlayerScoreCreateManyMatchInputEnvelope = {
    data: PlayerScoreCreateManyMatchInput | PlayerScoreCreateManyMatchInput[]
    skipDuplicates?: boolean
  }

  export type InningUpsertWithWhereUniqueWithoutMatchInput = {
    where: InningWhereUniqueInput
    update: XOR<InningUpdateWithoutMatchInput, InningUncheckedUpdateWithoutMatchInput>
    create: XOR<InningCreateWithoutMatchInput, InningUncheckedCreateWithoutMatchInput>
  }

  export type InningUpdateWithWhereUniqueWithoutMatchInput = {
    where: InningWhereUniqueInput
    data: XOR<InningUpdateWithoutMatchInput, InningUncheckedUpdateWithoutMatchInput>
  }

  export type InningUpdateManyWithWhereWithoutMatchInput = {
    where: InningScalarWhereInput
    data: XOR<InningUpdateManyMutationInput, InningUncheckedUpdateManyWithoutMatchInput>
  }

  export type InningScalarWhereInput = {
    AND?: InningScalarWhereInput | InningScalarWhereInput[]
    OR?: InningScalarWhereInput[]
    NOT?: InningScalarWhereInput | InningScalarWhereInput[]
    id?: StringFilter<"Inning"> | string
    whichInning?: EnumWhichInningFilter<"Inning"> | $Enums.WhichInning
    score?: IntFilter<"Inning"> | number
    wickets?: IntFilter<"Inning"> | number
    extras?: IntFilter<"Inning"> | number
    batsman1?: StringNullableFilter<"Inning"> | string | null
    batsman2?: StringNullableFilter<"Inning"> | string | null
    bowler?: StringNullableFilter<"Inning"> | string | null
    matchId?: StringFilter<"Inning"> | string
  }

  export type PlayerScoreUpsertWithWhereUniqueWithoutMatchInput = {
    where: PlayerScoreWhereUniqueInput
    update: XOR<PlayerScoreUpdateWithoutMatchInput, PlayerScoreUncheckedUpdateWithoutMatchInput>
    create: XOR<PlayerScoreCreateWithoutMatchInput, PlayerScoreUncheckedCreateWithoutMatchInput>
  }

  export type PlayerScoreUpdateWithWhereUniqueWithoutMatchInput = {
    where: PlayerScoreWhereUniqueInput
    data: XOR<PlayerScoreUpdateWithoutMatchInput, PlayerScoreUncheckedUpdateWithoutMatchInput>
  }

  export type PlayerScoreUpdateManyWithWhereWithoutMatchInput = {
    where: PlayerScoreScalarWhereInput
    data: XOR<PlayerScoreUpdateManyMutationInput, PlayerScoreUncheckedUpdateManyWithoutMatchInput>
  }

  export type MatchesCreateWithoutInningsInput = {
    id?: string
    team1Id: string
    team2Id: string
    venue: string
    date: Date | string
    winner: $Enums.MatchesWinner
    toss: $Enums.MatchesWinner
    elected: $Enums.MatchTossElection
    status: $Enums.TournamentStatus
    playerScore?: PlayerScoreCreateNestedManyWithoutMatchInput
  }

  export type MatchesUncheckedCreateWithoutInningsInput = {
    id?: string
    team1Id: string
    team2Id: string
    venue: string
    date: Date | string
    winner: $Enums.MatchesWinner
    toss: $Enums.MatchesWinner
    elected: $Enums.MatchTossElection
    status: $Enums.TournamentStatus
    playerScore?: PlayerScoreUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchesCreateOrConnectWithoutInningsInput = {
    where: MatchesWhereUniqueInput
    create: XOR<MatchesCreateWithoutInningsInput, MatchesUncheckedCreateWithoutInningsInput>
  }

  export type BallsCreateWithoutInningInput = {
    id?: string
    ballNo: number
    whatHappend: $Enums.WhatHappend
    bowler: string
    batsman: string
    catch?: string | null
    runout?: string | null
  }

  export type BallsUncheckedCreateWithoutInningInput = {
    id?: string
    ballNo: number
    whatHappend: $Enums.WhatHappend
    bowler: string
    batsman: string
    catch?: string | null
    runout?: string | null
  }

  export type BallsCreateOrConnectWithoutInningInput = {
    where: BallsWhereUniqueInput
    create: XOR<BallsCreateWithoutInningInput, BallsUncheckedCreateWithoutInningInput>
  }

  export type BallsCreateManyInningInputEnvelope = {
    data: BallsCreateManyInningInput | BallsCreateManyInningInput[]
    skipDuplicates?: boolean
  }

  export type MatchesUpsertWithoutInningsInput = {
    update: XOR<MatchesUpdateWithoutInningsInput, MatchesUncheckedUpdateWithoutInningsInput>
    create: XOR<MatchesCreateWithoutInningsInput, MatchesUncheckedCreateWithoutInningsInput>
    where?: MatchesWhereInput
  }

  export type MatchesUpdateToOneWithWhereWithoutInningsInput = {
    where?: MatchesWhereInput
    data: XOR<MatchesUpdateWithoutInningsInput, MatchesUncheckedUpdateWithoutInningsInput>
  }

  export type MatchesUpdateWithoutInningsInput = {
    id?: StringFieldUpdateOperationsInput | string
    team1Id?: StringFieldUpdateOperationsInput | string
    team2Id?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    winner?: EnumMatchesWinnerFieldUpdateOperationsInput | $Enums.MatchesWinner
    toss?: EnumMatchesWinnerFieldUpdateOperationsInput | $Enums.MatchesWinner
    elected?: EnumMatchTossElectionFieldUpdateOperationsInput | $Enums.MatchTossElection
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    playerScore?: PlayerScoreUpdateManyWithoutMatchNestedInput
  }

  export type MatchesUncheckedUpdateWithoutInningsInput = {
    id?: StringFieldUpdateOperationsInput | string
    team1Id?: StringFieldUpdateOperationsInput | string
    team2Id?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    winner?: EnumMatchesWinnerFieldUpdateOperationsInput | $Enums.MatchesWinner
    toss?: EnumMatchesWinnerFieldUpdateOperationsInput | $Enums.MatchesWinner
    elected?: EnumMatchTossElectionFieldUpdateOperationsInput | $Enums.MatchTossElection
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    playerScore?: PlayerScoreUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type BallsUpsertWithWhereUniqueWithoutInningInput = {
    where: BallsWhereUniqueInput
    update: XOR<BallsUpdateWithoutInningInput, BallsUncheckedUpdateWithoutInningInput>
    create: XOR<BallsCreateWithoutInningInput, BallsUncheckedCreateWithoutInningInput>
  }

  export type BallsUpdateWithWhereUniqueWithoutInningInput = {
    where: BallsWhereUniqueInput
    data: XOR<BallsUpdateWithoutInningInput, BallsUncheckedUpdateWithoutInningInput>
  }

  export type BallsUpdateManyWithWhereWithoutInningInput = {
    where: BallsScalarWhereInput
    data: XOR<BallsUpdateManyMutationInput, BallsUncheckedUpdateManyWithoutInningInput>
  }

  export type BallsScalarWhereInput = {
    AND?: BallsScalarWhereInput | BallsScalarWhereInput[]
    OR?: BallsScalarWhereInput[]
    NOT?: BallsScalarWhereInput | BallsScalarWhereInput[]
    id?: StringFilter<"Balls"> | string
    ballNo?: IntFilter<"Balls"> | number
    whatHappend?: EnumWhatHappendFilter<"Balls"> | $Enums.WhatHappend
    bowler?: StringFilter<"Balls"> | string
    batsman?: StringFilter<"Balls"> | string
    catch?: StringNullableFilter<"Balls"> | string | null
    runout?: StringNullableFilter<"Balls"> | string | null
    inningId?: StringFilter<"Balls"> | string
  }

  export type InningCreateWithoutBallsInput = {
    id?: string
    whichInning: $Enums.WhichInning
    score: number
    wickets: number
    extras: number
    batsman1?: string | null
    batsman2?: string | null
    bowler?: string | null
    match: MatchesCreateNestedOneWithoutInningsInput
  }

  export type InningUncheckedCreateWithoutBallsInput = {
    id?: string
    whichInning: $Enums.WhichInning
    score: number
    wickets: number
    extras: number
    batsman1?: string | null
    batsman2?: string | null
    bowler?: string | null
    matchId: string
  }

  export type InningCreateOrConnectWithoutBallsInput = {
    where: InningWhereUniqueInput
    create: XOR<InningCreateWithoutBallsInput, InningUncheckedCreateWithoutBallsInput>
  }

  export type InningUpsertWithoutBallsInput = {
    update: XOR<InningUpdateWithoutBallsInput, InningUncheckedUpdateWithoutBallsInput>
    create: XOR<InningCreateWithoutBallsInput, InningUncheckedCreateWithoutBallsInput>
    where?: InningWhereInput
  }

  export type InningUpdateToOneWithWhereWithoutBallsInput = {
    where?: InningWhereInput
    data: XOR<InningUpdateWithoutBallsInput, InningUncheckedUpdateWithoutBallsInput>
  }

  export type InningUpdateWithoutBallsInput = {
    id?: StringFieldUpdateOperationsInput | string
    whichInning?: EnumWhichInningFieldUpdateOperationsInput | $Enums.WhichInning
    score?: IntFieldUpdateOperationsInput | number
    wickets?: IntFieldUpdateOperationsInput | number
    extras?: IntFieldUpdateOperationsInput | number
    batsman1?: NullableStringFieldUpdateOperationsInput | string | null
    batsman2?: NullableStringFieldUpdateOperationsInput | string | null
    bowler?: NullableStringFieldUpdateOperationsInput | string | null
    match?: MatchesUpdateOneRequiredWithoutInningsNestedInput
  }

  export type InningUncheckedUpdateWithoutBallsInput = {
    id?: StringFieldUpdateOperationsInput | string
    whichInning?: EnumWhichInningFieldUpdateOperationsInput | $Enums.WhichInning
    score?: IntFieldUpdateOperationsInput | number
    wickets?: IntFieldUpdateOperationsInput | number
    extras?: IntFieldUpdateOperationsInput | number
    batsman1?: NullableStringFieldUpdateOperationsInput | string | null
    batsman2?: NullableStringFieldUpdateOperationsInput | string | null
    bowler?: NullableStringFieldUpdateOperationsInput | string | null
    matchId?: StringFieldUpdateOperationsInput | string
  }

  export type TournamentJoinedTeamsCreateWithoutTournamentInput = {
    id?: string
    userTeam: UserTeamsCreateNestedOneWithoutTournamentsJoinedInput
  }

  export type TournamentJoinedTeamsUncheckedCreateWithoutTournamentInput = {
    id?: string
    userTeamId: string
  }

  export type TournamentJoinedTeamsCreateOrConnectWithoutTournamentInput = {
    where: TournamentJoinedTeamsWhereUniqueInput
    create: XOR<TournamentJoinedTeamsCreateWithoutTournamentInput, TournamentJoinedTeamsUncheckedCreateWithoutTournamentInput>
  }

  export type TournamentJoinedTeamsCreateManyTournamentInputEnvelope = {
    data: TournamentJoinedTeamsCreateManyTournamentInput | TournamentJoinedTeamsCreateManyTournamentInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutTournamentsInput = {
    id?: string
    name: string
    email: string
    password: string
    publicKey?: string | null
    role: $Enums.UserRole
    teams?: UserTeamsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTournamentsInput = {
    id?: string
    name: string
    email: string
    password: string
    publicKey?: string | null
    role: $Enums.UserRole
    teams?: UserTeamsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTournamentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTournamentsInput, UserUncheckedCreateWithoutTournamentsInput>
  }

  export type TournamentJoinedTeamsUpsertWithWhereUniqueWithoutTournamentInput = {
    where: TournamentJoinedTeamsWhereUniqueInput
    update: XOR<TournamentJoinedTeamsUpdateWithoutTournamentInput, TournamentJoinedTeamsUncheckedUpdateWithoutTournamentInput>
    create: XOR<TournamentJoinedTeamsCreateWithoutTournamentInput, TournamentJoinedTeamsUncheckedCreateWithoutTournamentInput>
  }

  export type TournamentJoinedTeamsUpdateWithWhereUniqueWithoutTournamentInput = {
    where: TournamentJoinedTeamsWhereUniqueInput
    data: XOR<TournamentJoinedTeamsUpdateWithoutTournamentInput, TournamentJoinedTeamsUncheckedUpdateWithoutTournamentInput>
  }

  export type TournamentJoinedTeamsUpdateManyWithWhereWithoutTournamentInput = {
    where: TournamentJoinedTeamsScalarWhereInput
    data: XOR<TournamentJoinedTeamsUpdateManyMutationInput, TournamentJoinedTeamsUncheckedUpdateManyWithoutTournamentInput>
  }

  export type UserUpsertWithoutTournamentsInput = {
    update: XOR<UserUpdateWithoutTournamentsInput, UserUncheckedUpdateWithoutTournamentsInput>
    create: XOR<UserCreateWithoutTournamentsInput, UserUncheckedCreateWithoutTournamentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTournamentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTournamentsInput, UserUncheckedUpdateWithoutTournamentsInput>
  }

  export type UserUpdateWithoutTournamentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    teams?: UserTeamsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTournamentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    teams?: UserTeamsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TournamentCreateWithoutTournamentJoinedTeamsInput = {
    id?: string
    maxLimit: number
    entryFee: number
    prizePool?: number | null
    winner?: string | null
    teamsJoined: number
    status: $Enums.TournamentStatus
    owner: UserCreateNestedOneWithoutTournamentsInput
  }

  export type TournamentUncheckedCreateWithoutTournamentJoinedTeamsInput = {
    id?: string
    maxLimit: number
    entryFee: number
    prizePool?: number | null
    winner?: string | null
    ownerId: string
    teamsJoined: number
    status: $Enums.TournamentStatus
  }

  export type TournamentCreateOrConnectWithoutTournamentJoinedTeamsInput = {
    where: TournamentWhereUniqueInput
    create: XOR<TournamentCreateWithoutTournamentJoinedTeamsInput, TournamentUncheckedCreateWithoutTournamentJoinedTeamsInput>
  }

  export type UserTeamsCreateWithoutTournamentsJoinedInput = {
    id?: string
    fantasyPoints: number
    captain: string
    viceCaptain: string
    disabled: boolean
    user: UserCreateNestedOneWithoutTeamsInput
    players?: UserTeamPlayersCreateNestedManyWithoutUserTeamsInput
  }

  export type UserTeamsUncheckedCreateWithoutTournamentsJoinedInput = {
    id?: string
    fantasyPoints: number
    captain: string
    viceCaptain: string
    userId: string
    disabled: boolean
    players?: UserTeamPlayersUncheckedCreateNestedManyWithoutUserTeamsInput
  }

  export type UserTeamsCreateOrConnectWithoutTournamentsJoinedInput = {
    where: UserTeamsWhereUniqueInput
    create: XOR<UserTeamsCreateWithoutTournamentsJoinedInput, UserTeamsUncheckedCreateWithoutTournamentsJoinedInput>
  }

  export type TournamentUpsertWithoutTournamentJoinedTeamsInput = {
    update: XOR<TournamentUpdateWithoutTournamentJoinedTeamsInput, TournamentUncheckedUpdateWithoutTournamentJoinedTeamsInput>
    create: XOR<TournamentCreateWithoutTournamentJoinedTeamsInput, TournamentUncheckedCreateWithoutTournamentJoinedTeamsInput>
    where?: TournamentWhereInput
  }

  export type TournamentUpdateToOneWithWhereWithoutTournamentJoinedTeamsInput = {
    where?: TournamentWhereInput
    data: XOR<TournamentUpdateWithoutTournamentJoinedTeamsInput, TournamentUncheckedUpdateWithoutTournamentJoinedTeamsInput>
  }

  export type TournamentUpdateWithoutTournamentJoinedTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxLimit?: IntFieldUpdateOperationsInput | number
    entryFee?: IntFieldUpdateOperationsInput | number
    prizePool?: NullableIntFieldUpdateOperationsInput | number | null
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    teamsJoined?: IntFieldUpdateOperationsInput | number
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    owner?: UserUpdateOneRequiredWithoutTournamentsNestedInput
  }

  export type TournamentUncheckedUpdateWithoutTournamentJoinedTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxLimit?: IntFieldUpdateOperationsInput | number
    entryFee?: IntFieldUpdateOperationsInput | number
    prizePool?: NullableIntFieldUpdateOperationsInput | number | null
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    teamsJoined?: IntFieldUpdateOperationsInput | number
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
  }

  export type UserTeamsUpsertWithoutTournamentsJoinedInput = {
    update: XOR<UserTeamsUpdateWithoutTournamentsJoinedInput, UserTeamsUncheckedUpdateWithoutTournamentsJoinedInput>
    create: XOR<UserTeamsCreateWithoutTournamentsJoinedInput, UserTeamsUncheckedCreateWithoutTournamentsJoinedInput>
    where?: UserTeamsWhereInput
  }

  export type UserTeamsUpdateToOneWithWhereWithoutTournamentsJoinedInput = {
    where?: UserTeamsWhereInput
    data: XOR<UserTeamsUpdateWithoutTournamentsJoinedInput, UserTeamsUncheckedUpdateWithoutTournamentsJoinedInput>
  }

  export type UserTeamsUpdateWithoutTournamentsJoinedInput = {
    id?: StringFieldUpdateOperationsInput | string
    fantasyPoints?: IntFieldUpdateOperationsInput | number
    captain?: StringFieldUpdateOperationsInput | string
    viceCaptain?: StringFieldUpdateOperationsInput | string
    disabled?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutTeamsNestedInput
    players?: UserTeamPlayersUpdateManyWithoutUserTeamsNestedInput
  }

  export type UserTeamsUncheckedUpdateWithoutTournamentsJoinedInput = {
    id?: StringFieldUpdateOperationsInput | string
    fantasyPoints?: IntFieldUpdateOperationsInput | number
    captain?: StringFieldUpdateOperationsInput | string
    viceCaptain?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    disabled?: BoolFieldUpdateOperationsInput | boolean
    players?: UserTeamPlayersUncheckedUpdateManyWithoutUserTeamsNestedInput
  }

  export type UserTeamsCreateManyUserInput = {
    id?: string
    fantasyPoints: number
    captain: string
    viceCaptain: string
    disabled: boolean
  }

  export type TournamentCreateManyOwnerInput = {
    id?: string
    maxLimit: number
    entryFee: number
    prizePool?: number | null
    winner?: string | null
    teamsJoined: number
    status: $Enums.TournamentStatus
  }

  export type UserTeamsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fantasyPoints?: IntFieldUpdateOperationsInput | number
    captain?: StringFieldUpdateOperationsInput | string
    viceCaptain?: StringFieldUpdateOperationsInput | string
    disabled?: BoolFieldUpdateOperationsInput | boolean
    players?: UserTeamPlayersUpdateManyWithoutUserTeamsNestedInput
    tournamentsJoined?: TournamentJoinedTeamsUpdateManyWithoutUserTeamNestedInput
  }

  export type UserTeamsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fantasyPoints?: IntFieldUpdateOperationsInput | number
    captain?: StringFieldUpdateOperationsInput | string
    viceCaptain?: StringFieldUpdateOperationsInput | string
    disabled?: BoolFieldUpdateOperationsInput | boolean
    players?: UserTeamPlayersUncheckedUpdateManyWithoutUserTeamsNestedInput
    tournamentsJoined?: TournamentJoinedTeamsUncheckedUpdateManyWithoutUserTeamNestedInput
  }

  export type UserTeamsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fantasyPoints?: IntFieldUpdateOperationsInput | number
    captain?: StringFieldUpdateOperationsInput | string
    viceCaptain?: StringFieldUpdateOperationsInput | string
    disabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TournamentUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxLimit?: IntFieldUpdateOperationsInput | number
    entryFee?: IntFieldUpdateOperationsInput | number
    prizePool?: NullableIntFieldUpdateOperationsInput | number | null
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    teamsJoined?: IntFieldUpdateOperationsInput | number
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    tournamentJoinedTeams?: TournamentJoinedTeamsUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxLimit?: IntFieldUpdateOperationsInput | number
    entryFee?: IntFieldUpdateOperationsInput | number
    prizePool?: NullableIntFieldUpdateOperationsInput | number | null
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    teamsJoined?: IntFieldUpdateOperationsInput | number
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    tournamentJoinedTeams?: TournamentJoinedTeamsUncheckedUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxLimit?: IntFieldUpdateOperationsInput | number
    entryFee?: IntFieldUpdateOperationsInput | number
    prizePool?: NullableIntFieldUpdateOperationsInput | number | null
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    teamsJoined?: IntFieldUpdateOperationsInput | number
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
  }

  export type UserTeamPlayersCreateManyUserTeamsInput = {
    id?: string
    playersId: string
  }

  export type TournamentJoinedTeamsCreateManyUserTeamInput = {
    id?: string
    tournamentId: string
  }

  export type UserTeamPlayersUpdateWithoutUserTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    players?: PlayersUpdateOneRequiredWithoutUserTeamPlayersNestedInput
  }

  export type UserTeamPlayersUncheckedUpdateWithoutUserTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    playersId?: StringFieldUpdateOperationsInput | string
  }

  export type UserTeamPlayersUncheckedUpdateManyWithoutUserTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    playersId?: StringFieldUpdateOperationsInput | string
  }

  export type TournamentJoinedTeamsUpdateWithoutUserTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    tournament?: TournamentUpdateOneRequiredWithoutTournamentJoinedTeamsNestedInput
  }

  export type TournamentJoinedTeamsUncheckedUpdateWithoutUserTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    tournamentId?: StringFieldUpdateOperationsInput | string
  }

  export type TournamentJoinedTeamsUncheckedUpdateManyWithoutUserTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    tournamentId?: StringFieldUpdateOperationsInput | string
  }

  export type PlayersCreateManySquadInput = {
    id?: string
    name: string
    role: $Enums.PlayerRole
    battingDexture: $Enums.PlayerDexture
    bowlingDexture: $Enums.PlayerDexture
    countryStatus: $Enums.PlayerCountryStatus
    age: string
    img: string
  }

  export type PlayersUpdateWithoutSquadInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumPlayerRoleFieldUpdateOperationsInput | $Enums.PlayerRole
    battingDexture?: EnumPlayerDextureFieldUpdateOperationsInput | $Enums.PlayerDexture
    bowlingDexture?: EnumPlayerDextureFieldUpdateOperationsInput | $Enums.PlayerDexture
    countryStatus?: EnumPlayerCountryStatusFieldUpdateOperationsInput | $Enums.PlayerCountryStatus
    age?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    userTeamPlayers?: UserTeamPlayersUpdateManyWithoutPlayersNestedInput
    score?: PlayerScoreUpdateManyWithoutPlayerNestedInput
  }

  export type PlayersUncheckedUpdateWithoutSquadInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumPlayerRoleFieldUpdateOperationsInput | $Enums.PlayerRole
    battingDexture?: EnumPlayerDextureFieldUpdateOperationsInput | $Enums.PlayerDexture
    bowlingDexture?: EnumPlayerDextureFieldUpdateOperationsInput | $Enums.PlayerDexture
    countryStatus?: EnumPlayerCountryStatusFieldUpdateOperationsInput | $Enums.PlayerCountryStatus
    age?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    userTeamPlayers?: UserTeamPlayersUncheckedUpdateManyWithoutPlayersNestedInput
    score?: PlayerScoreUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayersUncheckedUpdateManyWithoutSquadInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumPlayerRoleFieldUpdateOperationsInput | $Enums.PlayerRole
    battingDexture?: EnumPlayerDextureFieldUpdateOperationsInput | $Enums.PlayerDexture
    bowlingDexture?: EnumPlayerDextureFieldUpdateOperationsInput | $Enums.PlayerDexture
    countryStatus?: EnumPlayerCountryStatusFieldUpdateOperationsInput | $Enums.PlayerCountryStatus
    age?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
  }

  export type UserTeamPlayersCreateManyPlayersInput = {
    id?: string
    userTeamsId: string
  }

  export type PlayerScoreCreateManyPlayerInput = {
    id?: string
    playingStatus: $Enums.PlayerPlayingStatus
    fantasyPoints: number
    run: number
    sixes: number
    fours: number
    others: number
    runsConceded: number
    wickets: number
    ballsBowled: number
    catches: number
    runout: number
    dotBall: number
    matchId: string
  }

  export type UserTeamPlayersUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userTeams?: UserTeamsUpdateOneRequiredWithoutPlayersNestedInput
  }

  export type UserTeamPlayersUncheckedUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userTeamsId?: StringFieldUpdateOperationsInput | string
  }

  export type UserTeamPlayersUncheckedUpdateManyWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userTeamsId?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerScoreUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    playingStatus?: EnumPlayerPlayingStatusFieldUpdateOperationsInput | $Enums.PlayerPlayingStatus
    fantasyPoints?: IntFieldUpdateOperationsInput | number
    run?: IntFieldUpdateOperationsInput | number
    sixes?: IntFieldUpdateOperationsInput | number
    fours?: IntFieldUpdateOperationsInput | number
    others?: IntFieldUpdateOperationsInput | number
    runsConceded?: IntFieldUpdateOperationsInput | number
    wickets?: IntFieldUpdateOperationsInput | number
    ballsBowled?: IntFieldUpdateOperationsInput | number
    catches?: IntFieldUpdateOperationsInput | number
    runout?: IntFieldUpdateOperationsInput | number
    dotBall?: IntFieldUpdateOperationsInput | number
    match?: MatchesUpdateOneRequiredWithoutPlayerScoreNestedInput
  }

  export type PlayerScoreUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    playingStatus?: EnumPlayerPlayingStatusFieldUpdateOperationsInput | $Enums.PlayerPlayingStatus
    fantasyPoints?: IntFieldUpdateOperationsInput | number
    run?: IntFieldUpdateOperationsInput | number
    sixes?: IntFieldUpdateOperationsInput | number
    fours?: IntFieldUpdateOperationsInput | number
    others?: IntFieldUpdateOperationsInput | number
    runsConceded?: IntFieldUpdateOperationsInput | number
    wickets?: IntFieldUpdateOperationsInput | number
    ballsBowled?: IntFieldUpdateOperationsInput | number
    catches?: IntFieldUpdateOperationsInput | number
    runout?: IntFieldUpdateOperationsInput | number
    dotBall?: IntFieldUpdateOperationsInput | number
    matchId?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerScoreUncheckedUpdateManyWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    playingStatus?: EnumPlayerPlayingStatusFieldUpdateOperationsInput | $Enums.PlayerPlayingStatus
    fantasyPoints?: IntFieldUpdateOperationsInput | number
    run?: IntFieldUpdateOperationsInput | number
    sixes?: IntFieldUpdateOperationsInput | number
    fours?: IntFieldUpdateOperationsInput | number
    others?: IntFieldUpdateOperationsInput | number
    runsConceded?: IntFieldUpdateOperationsInput | number
    wickets?: IntFieldUpdateOperationsInput | number
    ballsBowled?: IntFieldUpdateOperationsInput | number
    catches?: IntFieldUpdateOperationsInput | number
    runout?: IntFieldUpdateOperationsInput | number
    dotBall?: IntFieldUpdateOperationsInput | number
    matchId?: StringFieldUpdateOperationsInput | string
  }

  export type InningCreateManyMatchInput = {
    id?: string
    whichInning: $Enums.WhichInning
    score: number
    wickets: number
    extras: number
    batsman1?: string | null
    batsman2?: string | null
    bowler?: string | null
  }

  export type PlayerScoreCreateManyMatchInput = {
    id?: string
    playingStatus: $Enums.PlayerPlayingStatus
    fantasyPoints: number
    run: number
    sixes: number
    fours: number
    others: number
    runsConceded: number
    wickets: number
    ballsBowled: number
    catches: number
    runout: number
    dotBall: number
    playerId: string
  }

  export type InningUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    whichInning?: EnumWhichInningFieldUpdateOperationsInput | $Enums.WhichInning
    score?: IntFieldUpdateOperationsInput | number
    wickets?: IntFieldUpdateOperationsInput | number
    extras?: IntFieldUpdateOperationsInput | number
    batsman1?: NullableStringFieldUpdateOperationsInput | string | null
    batsman2?: NullableStringFieldUpdateOperationsInput | string | null
    bowler?: NullableStringFieldUpdateOperationsInput | string | null
    balls?: BallsUpdateManyWithoutInningNestedInput
  }

  export type InningUncheckedUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    whichInning?: EnumWhichInningFieldUpdateOperationsInput | $Enums.WhichInning
    score?: IntFieldUpdateOperationsInput | number
    wickets?: IntFieldUpdateOperationsInput | number
    extras?: IntFieldUpdateOperationsInput | number
    batsman1?: NullableStringFieldUpdateOperationsInput | string | null
    batsman2?: NullableStringFieldUpdateOperationsInput | string | null
    bowler?: NullableStringFieldUpdateOperationsInput | string | null
    balls?: BallsUncheckedUpdateManyWithoutInningNestedInput
  }

  export type InningUncheckedUpdateManyWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    whichInning?: EnumWhichInningFieldUpdateOperationsInput | $Enums.WhichInning
    score?: IntFieldUpdateOperationsInput | number
    wickets?: IntFieldUpdateOperationsInput | number
    extras?: IntFieldUpdateOperationsInput | number
    batsman1?: NullableStringFieldUpdateOperationsInput | string | null
    batsman2?: NullableStringFieldUpdateOperationsInput | string | null
    bowler?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlayerScoreUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    playingStatus?: EnumPlayerPlayingStatusFieldUpdateOperationsInput | $Enums.PlayerPlayingStatus
    fantasyPoints?: IntFieldUpdateOperationsInput | number
    run?: IntFieldUpdateOperationsInput | number
    sixes?: IntFieldUpdateOperationsInput | number
    fours?: IntFieldUpdateOperationsInput | number
    others?: IntFieldUpdateOperationsInput | number
    runsConceded?: IntFieldUpdateOperationsInput | number
    wickets?: IntFieldUpdateOperationsInput | number
    ballsBowled?: IntFieldUpdateOperationsInput | number
    catches?: IntFieldUpdateOperationsInput | number
    runout?: IntFieldUpdateOperationsInput | number
    dotBall?: IntFieldUpdateOperationsInput | number
    player?: PlayersUpdateOneRequiredWithoutScoreNestedInput
  }

  export type PlayerScoreUncheckedUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    playingStatus?: EnumPlayerPlayingStatusFieldUpdateOperationsInput | $Enums.PlayerPlayingStatus
    fantasyPoints?: IntFieldUpdateOperationsInput | number
    run?: IntFieldUpdateOperationsInput | number
    sixes?: IntFieldUpdateOperationsInput | number
    fours?: IntFieldUpdateOperationsInput | number
    others?: IntFieldUpdateOperationsInput | number
    runsConceded?: IntFieldUpdateOperationsInput | number
    wickets?: IntFieldUpdateOperationsInput | number
    ballsBowled?: IntFieldUpdateOperationsInput | number
    catches?: IntFieldUpdateOperationsInput | number
    runout?: IntFieldUpdateOperationsInput | number
    dotBall?: IntFieldUpdateOperationsInput | number
    playerId?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerScoreUncheckedUpdateManyWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    playingStatus?: EnumPlayerPlayingStatusFieldUpdateOperationsInput | $Enums.PlayerPlayingStatus
    fantasyPoints?: IntFieldUpdateOperationsInput | number
    run?: IntFieldUpdateOperationsInput | number
    sixes?: IntFieldUpdateOperationsInput | number
    fours?: IntFieldUpdateOperationsInput | number
    others?: IntFieldUpdateOperationsInput | number
    runsConceded?: IntFieldUpdateOperationsInput | number
    wickets?: IntFieldUpdateOperationsInput | number
    ballsBowled?: IntFieldUpdateOperationsInput | number
    catches?: IntFieldUpdateOperationsInput | number
    runout?: IntFieldUpdateOperationsInput | number
    dotBall?: IntFieldUpdateOperationsInput | number
    playerId?: StringFieldUpdateOperationsInput | string
  }

  export type BallsCreateManyInningInput = {
    id?: string
    ballNo: number
    whatHappend: $Enums.WhatHappend
    bowler: string
    batsman: string
    catch?: string | null
    runout?: string | null
  }

  export type BallsUpdateWithoutInningInput = {
    id?: StringFieldUpdateOperationsInput | string
    ballNo?: IntFieldUpdateOperationsInput | number
    whatHappend?: EnumWhatHappendFieldUpdateOperationsInput | $Enums.WhatHappend
    bowler?: StringFieldUpdateOperationsInput | string
    batsman?: StringFieldUpdateOperationsInput | string
    catch?: NullableStringFieldUpdateOperationsInput | string | null
    runout?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BallsUncheckedUpdateWithoutInningInput = {
    id?: StringFieldUpdateOperationsInput | string
    ballNo?: IntFieldUpdateOperationsInput | number
    whatHappend?: EnumWhatHappendFieldUpdateOperationsInput | $Enums.WhatHappend
    bowler?: StringFieldUpdateOperationsInput | string
    batsman?: StringFieldUpdateOperationsInput | string
    catch?: NullableStringFieldUpdateOperationsInput | string | null
    runout?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BallsUncheckedUpdateManyWithoutInningInput = {
    id?: StringFieldUpdateOperationsInput | string
    ballNo?: IntFieldUpdateOperationsInput | number
    whatHappend?: EnumWhatHappendFieldUpdateOperationsInput | $Enums.WhatHappend
    bowler?: StringFieldUpdateOperationsInput | string
    batsman?: StringFieldUpdateOperationsInput | string
    catch?: NullableStringFieldUpdateOperationsInput | string | null
    runout?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TournamentJoinedTeamsCreateManyTournamentInput = {
    id?: string
    userTeamId: string
  }

  export type TournamentJoinedTeamsUpdateWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userTeam?: UserTeamsUpdateOneRequiredWithoutTournamentsJoinedNestedInput
  }

  export type TournamentJoinedTeamsUncheckedUpdateWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userTeamId?: StringFieldUpdateOperationsInput | string
  }

  export type TournamentJoinedTeamsUncheckedUpdateManyWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userTeamId?: StringFieldUpdateOperationsInput | string
  }



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