// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SpecialWordsContext } from "../../api/SpecialWordsContext.js";
import {
  And,
  As,
  Assert,
  Async,
  Await,
  Break,
  Class,
  Constructor,
  Continue,
  Def,
  Del,
  Elif,
  Else,
  Except,
  Exec,
  Finally,
  For,
  From,
  Global,
  If,
  Import,
  In,
  Is,
  Lambda,
  Not,
  Or,
  Pass,
  Raise,
  Return,
  Try,
  While,
  With,
  Yield,
} from "../../models/models.js";
import {
  modelsWithAnd,
  modelsWithAs,
  modelsWithAssert,
  modelsWithAsync,
  modelsWithAwait,
  modelsWithBreak,
  modelsWithClass,
  modelsWithConstructor,
  modelsWithContinue,
  modelsWithDef,
  modelsWithDel,
  modelsWithElif,
  modelsWithElse,
  modelsWithExcept,
  modelsWithExec,
  modelsWithFinally,
  modelsWithFor,
  modelsWithFrom,
  modelsWithGlobal,
  modelsWithIf,
  modelsWithImport,
  modelsWithIn,
  modelsWithIs,
  modelsWithLambda,
  modelsWithNot,
  modelsWithOr,
  modelsWithPass,
  modelsWithRaise,
  modelsWithReturn,
  modelsWithTry,
  modelsWithWhile,
  modelsWithWith,
  modelsWithYield,
} from "../../api/models/index.js";
import {
  WithAndOptions,
  WithAsOptions,
  WithAssertOptions,
  WithAsyncOptions,
  WithAwaitOptions,
  WithBreakOptions,
  WithClassOptions,
  WithConstructorOptions,
  WithContinueOptions,
  WithDefOptions,
  WithDelOptions,
  WithElifOptions,
  WithElseOptions,
  WithExceptOptions,
  WithExecOptions,
  WithFinallyOptions,
  WithForOptions,
  WithFromOptions,
  WithGlobalOptions,
  WithIfOptions,
  WithImportOptions,
  WithInOptions,
  WithIsOptions,
  WithLambdaOptions,
  WithNotOptions,
  WithOrOptions,
  WithPassOptions,
  WithRaiseOptions,
  WithReturnOptions,
  WithTryOptions,
  WithWhileOptions,
  WithWithOptions,
  WithYieldOptions,
} from "../../models/options.js";

export interface ModelsOperations {
  withAnd: (body: And, options?: WithAndOptions) => Promise<void>;
  withAs: (body: As, options?: WithAsOptions) => Promise<void>;
  withAssert: (body: Assert, options?: WithAssertOptions) => Promise<void>;
  withAsync: (body: Async, options?: WithAsyncOptions) => Promise<void>;
  withAwait: (body: Await, options?: WithAwaitOptions) => Promise<void>;
  withBreak: (body: Break, options?: WithBreakOptions) => Promise<void>;
  withClass: (body: Class, options?: WithClassOptions) => Promise<void>;
  withConstructor: (
    body: Constructor,
    options?: WithConstructorOptions,
  ) => Promise<void>;
  withContinue: (
    body: Continue,
    options?: WithContinueOptions,
  ) => Promise<void>;
  withDef: (body: Def, options?: WithDefOptions) => Promise<void>;
  withDel: (body: Del, options?: WithDelOptions) => Promise<void>;
  withElif: (body: Elif, options?: WithElifOptions) => Promise<void>;
  withElse: (body: Else, options?: WithElseOptions) => Promise<void>;
  withExcept: (body: Except, options?: WithExceptOptions) => Promise<void>;
  withExec: (body: Exec, options?: WithExecOptions) => Promise<void>;
  withFinally: (body: Finally, options?: WithFinallyOptions) => Promise<void>;
  withFor: (body: For, options?: WithForOptions) => Promise<void>;
  withFrom: (body: From, options?: WithFromOptions) => Promise<void>;
  withGlobal: (body: Global, options?: WithGlobalOptions) => Promise<void>;
  withIf: (body: If, options?: WithIfOptions) => Promise<void>;
  withImport: (body: Import, options?: WithImportOptions) => Promise<void>;
  withIn: (body: In, options?: WithInOptions) => Promise<void>;
  withIs: (body: Is, options?: WithIsOptions) => Promise<void>;
  withLambda: (body: Lambda, options?: WithLambdaOptions) => Promise<void>;
  withNot: (body: Not, options?: WithNotOptions) => Promise<void>;
  withOr: (body: Or, options?: WithOrOptions) => Promise<void>;
  withPass: (body: Pass, options?: WithPassOptions) => Promise<void>;
  withRaise: (body: Raise, options?: WithRaiseOptions) => Promise<void>;
  withReturn: (body: Return, options?: WithReturnOptions) => Promise<void>;
  withTry: (body: Try, options?: WithTryOptions) => Promise<void>;
  withWhile: (body: While, options?: WithWhileOptions) => Promise<void>;
  withWith: (body: With, options?: WithWithOptions) => Promise<void>;
  withYield: (body: Yield, options?: WithYieldOptions) => Promise<void>;
}

export function getModels(context: SpecialWordsContext) {
  return {
    withAnd: (body: And, options?: WithAndOptions) =>
      modelsWithAnd(context, body, options),
    withAs: (body: As, options?: WithAsOptions) =>
      modelsWithAs(context, body, options),
    withAssert: (body: Assert, options?: WithAssertOptions) =>
      modelsWithAssert(context, body, options),
    withAsync: (body: Async, options?: WithAsyncOptions) =>
      modelsWithAsync(context, body, options),
    withAwait: (body: Await, options?: WithAwaitOptions) =>
      modelsWithAwait(context, body, options),
    withBreak: (body: Break, options?: WithBreakOptions) =>
      modelsWithBreak(context, body, options),
    withClass: (body: Class, options?: WithClassOptions) =>
      modelsWithClass(context, body, options),
    withConstructor: (body: Constructor, options?: WithConstructorOptions) =>
      modelsWithConstructor(context, body, options),
    withContinue: (body: Continue, options?: WithContinueOptions) =>
      modelsWithContinue(context, body, options),
    withDef: (body: Def, options?: WithDefOptions) =>
      modelsWithDef(context, body, options),
    withDel: (body: Del, options?: WithDelOptions) =>
      modelsWithDel(context, body, options),
    withElif: (body: Elif, options?: WithElifOptions) =>
      modelsWithElif(context, body, options),
    withElse: (body: Else, options?: WithElseOptions) =>
      modelsWithElse(context, body, options),
    withExcept: (body: Except, options?: WithExceptOptions) =>
      modelsWithExcept(context, body, options),
    withExec: (body: Exec, options?: WithExecOptions) =>
      modelsWithExec(context, body, options),
    withFinally: (body: Finally, options?: WithFinallyOptions) =>
      modelsWithFinally(context, body, options),
    withFor: (body: For, options?: WithForOptions) =>
      modelsWithFor(context, body, options),
    withFrom: (body: From, options?: WithFromOptions) =>
      modelsWithFrom(context, body, options),
    withGlobal: (body: Global, options?: WithGlobalOptions) =>
      modelsWithGlobal(context, body, options),
    withIf: (body: If, options?: WithIfOptions) =>
      modelsWithIf(context, body, options),
    withImport: (body: Import, options?: WithImportOptions) =>
      modelsWithImport(context, body, options),
    withIn: (body: In, options?: WithInOptions) =>
      modelsWithIn(context, body, options),
    withIs: (body: Is, options?: WithIsOptions) =>
      modelsWithIs(context, body, options),
    withLambda: (body: Lambda, options?: WithLambdaOptions) =>
      modelsWithLambda(context, body, options),
    withNot: (body: Not, options?: WithNotOptions) =>
      modelsWithNot(context, body, options),
    withOr: (body: Or, options?: WithOrOptions) =>
      modelsWithOr(context, body, options),
    withPass: (body: Pass, options?: WithPassOptions) =>
      modelsWithPass(context, body, options),
    withRaise: (body: Raise, options?: WithRaiseOptions) =>
      modelsWithRaise(context, body, options),
    withReturn: (body: Return, options?: WithReturnOptions) =>
      modelsWithReturn(context, body, options),
    withTry: (body: Try, options?: WithTryOptions) =>
      modelsWithTry(context, body, options),
    withWhile: (body: While, options?: WithWhileOptions) =>
      modelsWithWhile(context, body, options),
    withWith: (body: With, options?: WithWithOptions) =>
      modelsWithWith(context, body, options),
    withYield: (body: Yield, options?: WithYieldOptions) =>
      modelsWithYield(context, body, options),
  };
}

export function getModelsOperations(
  context: SpecialWordsContext,
): ModelsOperations {
  return {
    ...getModels(context),
  };
}
