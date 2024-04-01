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
  ModelsWithAndOptions,
  ModelsWithAsOptions,
  ModelsWithAssertOptions,
  ModelsWithAsyncOptions,
  ModelsWithAwaitOptions,
  ModelsWithBreakOptions,
  ModelsWithClassOptions,
  ModelsWithConstructorOptions,
  ModelsWithContinueOptions,
  ModelsWithDefOptions,
  ModelsWithDelOptions,
  ModelsWithElifOptions,
  ModelsWithElseOptions,
  ModelsWithExceptOptions,
  ModelsWithExecOptions,
  ModelsWithFinallyOptions,
  ModelsWithForOptions,
  ModelsWithFromOptions,
  ModelsWithGlobalOptions,
  ModelsWithIfOptions,
  ModelsWithImportOptions,
  ModelsWithInOptions,
  ModelsWithIsOptions,
  ModelsWithLambdaOptions,
  ModelsWithNotOptions,
  ModelsWithOrOptions,
  ModelsWithPassOptions,
  ModelsWithRaiseOptions,
  ModelsWithReturnOptions,
  ModelsWithTryOptions,
  ModelsWithWhileOptions,
  ModelsWithWithOptions,
  ModelsWithYieldOptions,
} from "../../models/options.js";

export interface ModelsOperations {
  withAnd: (body: And, options?: ModelsWithAndOptions) => Promise<void>;
  withAs: (body: As, options?: ModelsWithAsOptions) => Promise<void>;
  withAssert: (
    body: Assert,
    options?: ModelsWithAssertOptions,
  ) => Promise<void>;
  withAsync: (body: Async, options?: ModelsWithAsyncOptions) => Promise<void>;
  withAwait: (body: Await, options?: ModelsWithAwaitOptions) => Promise<void>;
  withBreak: (body: Break, options?: ModelsWithBreakOptions) => Promise<void>;
  withClass: (body: Class, options?: ModelsWithClassOptions) => Promise<void>;
  withConstructor: (
    body: Constructor,
    options?: ModelsWithConstructorOptions,
  ) => Promise<void>;
  withContinue: (
    body: Continue,
    options?: ModelsWithContinueOptions,
  ) => Promise<void>;
  withDef: (body: Def, options?: ModelsWithDefOptions) => Promise<void>;
  withDel: (body: Del, options?: ModelsWithDelOptions) => Promise<void>;
  withElif: (body: Elif, options?: ModelsWithElifOptions) => Promise<void>;
  withElse: (body: Else, options?: ModelsWithElseOptions) => Promise<void>;
  withExcept: (
    body: Except,
    options?: ModelsWithExceptOptions,
  ) => Promise<void>;
  withExec: (body: Exec, options?: ModelsWithExecOptions) => Promise<void>;
  withFinally: (
    body: Finally,
    options?: ModelsWithFinallyOptions,
  ) => Promise<void>;
  withFor: (body: For, options?: ModelsWithForOptions) => Promise<void>;
  withFrom: (body: From, options?: ModelsWithFromOptions) => Promise<void>;
  withGlobal: (
    body: Global,
    options?: ModelsWithGlobalOptions,
  ) => Promise<void>;
  withIf: (body: If, options?: ModelsWithIfOptions) => Promise<void>;
  withImport: (
    body: Import,
    options?: ModelsWithImportOptions,
  ) => Promise<void>;
  withIn: (body: In, options?: ModelsWithInOptions) => Promise<void>;
  withIs: (body: Is, options?: ModelsWithIsOptions) => Promise<void>;
  withLambda: (
    body: Lambda,
    options?: ModelsWithLambdaOptions,
  ) => Promise<void>;
  withNot: (body: Not, options?: ModelsWithNotOptions) => Promise<void>;
  withOr: (body: Or, options?: ModelsWithOrOptions) => Promise<void>;
  withPass: (body: Pass, options?: ModelsWithPassOptions) => Promise<void>;
  withRaise: (body: Raise, options?: ModelsWithRaiseOptions) => Promise<void>;
  withReturn: (
    body: Return,
    options?: ModelsWithReturnOptions,
  ) => Promise<void>;
  withTry: (body: Try, options?: ModelsWithTryOptions) => Promise<void>;
  withWhile: (body: While, options?: ModelsWithWhileOptions) => Promise<void>;
  withWith: (body: With, options?: ModelsWithWithOptions) => Promise<void>;
  withYield: (body: Yield, options?: ModelsWithYieldOptions) => Promise<void>;
}

export function getModels(context: SpecialWordsContext) {
  return {
    withAnd: (body: And, options?: ModelsWithAndOptions) =>
      modelsWithAnd(context, body, options),
    withAs: (body: As, options?: ModelsWithAsOptions) =>
      modelsWithAs(context, body, options),
    withAssert: (body: Assert, options?: ModelsWithAssertOptions) =>
      modelsWithAssert(context, body, options),
    withAsync: (body: Async, options?: ModelsWithAsyncOptions) =>
      modelsWithAsync(context, body, options),
    withAwait: (body: Await, options?: ModelsWithAwaitOptions) =>
      modelsWithAwait(context, body, options),
    withBreak: (body: Break, options?: ModelsWithBreakOptions) =>
      modelsWithBreak(context, body, options),
    withClass: (body: Class, options?: ModelsWithClassOptions) =>
      modelsWithClass(context, body, options),
    withConstructor: (
      body: Constructor,
      options?: ModelsWithConstructorOptions,
    ) => modelsWithConstructor(context, body, options),
    withContinue: (body: Continue, options?: ModelsWithContinueOptions) =>
      modelsWithContinue(context, body, options),
    withDef: (body: Def, options?: ModelsWithDefOptions) =>
      modelsWithDef(context, body, options),
    withDel: (body: Del, options?: ModelsWithDelOptions) =>
      modelsWithDel(context, body, options),
    withElif: (body: Elif, options?: ModelsWithElifOptions) =>
      modelsWithElif(context, body, options),
    withElse: (body: Else, options?: ModelsWithElseOptions) =>
      modelsWithElse(context, body, options),
    withExcept: (body: Except, options?: ModelsWithExceptOptions) =>
      modelsWithExcept(context, body, options),
    withExec: (body: Exec, options?: ModelsWithExecOptions) =>
      modelsWithExec(context, body, options),
    withFinally: (body: Finally, options?: ModelsWithFinallyOptions) =>
      modelsWithFinally(context, body, options),
    withFor: (body: For, options?: ModelsWithForOptions) =>
      modelsWithFor(context, body, options),
    withFrom: (body: From, options?: ModelsWithFromOptions) =>
      modelsWithFrom(context, body, options),
    withGlobal: (body: Global, options?: ModelsWithGlobalOptions) =>
      modelsWithGlobal(context, body, options),
    withIf: (body: If, options?: ModelsWithIfOptions) =>
      modelsWithIf(context, body, options),
    withImport: (body: Import, options?: ModelsWithImportOptions) =>
      modelsWithImport(context, body, options),
    withIn: (body: In, options?: ModelsWithInOptions) =>
      modelsWithIn(context, body, options),
    withIs: (body: Is, options?: ModelsWithIsOptions) =>
      modelsWithIs(context, body, options),
    withLambda: (body: Lambda, options?: ModelsWithLambdaOptions) =>
      modelsWithLambda(context, body, options),
    withNot: (body: Not, options?: ModelsWithNotOptions) =>
      modelsWithNot(context, body, options),
    withOr: (body: Or, options?: ModelsWithOrOptions) =>
      modelsWithOr(context, body, options),
    withPass: (body: Pass, options?: ModelsWithPassOptions) =>
      modelsWithPass(context, body, options),
    withRaise: (body: Raise, options?: ModelsWithRaiseOptions) =>
      modelsWithRaise(context, body, options),
    withReturn: (body: Return, options?: ModelsWithReturnOptions) =>
      modelsWithReturn(context, body, options),
    withTry: (body: Try, options?: ModelsWithTryOptions) =>
      modelsWithTry(context, body, options),
    withWhile: (body: While, options?: ModelsWithWhileOptions) =>
      modelsWithWhile(context, body, options),
    withWith: (body: With, options?: ModelsWithWithOptions) =>
      modelsWithWith(context, body, options),
    withYield: (body: Yield, options?: ModelsWithYieldOptions) =>
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
