// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SpecialWordsContext } from "../../api/specialWordsContext.js";
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
  ModelsWithAndOptionalParams,
  ModelsWithAsOptionalParams,
  ModelsWithAssertOptionalParams,
  ModelsWithAsyncOptionalParams,
  ModelsWithAwaitOptionalParams,
  ModelsWithBreakOptionalParams,
  ModelsWithClassOptionalParams,
  ModelsWithConstructorOptionalParams,
  ModelsWithContinueOptionalParams,
  ModelsWithDefOptionalParams,
  ModelsWithDelOptionalParams,
  ModelsWithElifOptionalParams,
  ModelsWithElseOptionalParams,
  ModelsWithExceptOptionalParams,
  ModelsWithExecOptionalParams,
  ModelsWithFinallyOptionalParams,
  ModelsWithForOptionalParams,
  ModelsWithFromOptionalParams,
  ModelsWithGlobalOptionalParams,
  ModelsWithIfOptionalParams,
  ModelsWithImportOptionalParams,
  ModelsWithInOptionalParams,
  ModelsWithIsOptionalParams,
  ModelsWithLambdaOptionalParams,
  ModelsWithNotOptionalParams,
  ModelsWithOrOptionalParams,
  ModelsWithPassOptionalParams,
  ModelsWithRaiseOptionalParams,
  ModelsWithReturnOptionalParams,
  ModelsWithTryOptionalParams,
  ModelsWithWhileOptionalParams,
  ModelsWithWithOptionalParams,
  ModelsWithYieldOptionalParams,
} from "../../api/options.js";

/** Interface representing a Models operations. */
export interface ModelsOperations {
  withAnd: (body: And, options?: ModelsWithAndOptionalParams) => Promise<void>;
  withAs: (body: As, options?: ModelsWithAsOptionalParams) => Promise<void>;
  withAssert: (
    body: Assert,
    options?: ModelsWithAssertOptionalParams,
  ) => Promise<void>;
  withAsync: (
    body: Async,
    options?: ModelsWithAsyncOptionalParams,
  ) => Promise<void>;
  withAwait: (
    body: Await,
    options?: ModelsWithAwaitOptionalParams,
  ) => Promise<void>;
  withBreak: (
    body: Break,
    options?: ModelsWithBreakOptionalParams,
  ) => Promise<void>;
  withClass: (
    body: Class,
    options?: ModelsWithClassOptionalParams,
  ) => Promise<void>;
  withConstructor: (
    body: Constructor,
    options?: ModelsWithConstructorOptionalParams,
  ) => Promise<void>;
  withContinue: (
    body: Continue,
    options?: ModelsWithContinueOptionalParams,
  ) => Promise<void>;
  withDef: (body: Def, options?: ModelsWithDefOptionalParams) => Promise<void>;
  withDel: (body: Del, options?: ModelsWithDelOptionalParams) => Promise<void>;
  withElif: (
    body: Elif,
    options?: ModelsWithElifOptionalParams,
  ) => Promise<void>;
  withElse: (
    body: Else,
    options?: ModelsWithElseOptionalParams,
  ) => Promise<void>;
  withExcept: (
    body: Except,
    options?: ModelsWithExceptOptionalParams,
  ) => Promise<void>;
  withExec: (
    body: Exec,
    options?: ModelsWithExecOptionalParams,
  ) => Promise<void>;
  withFinally: (
    body: Finally,
    options?: ModelsWithFinallyOptionalParams,
  ) => Promise<void>;
  withFor: (body: For, options?: ModelsWithForOptionalParams) => Promise<void>;
  withFrom: (
    body: From,
    options?: ModelsWithFromOptionalParams,
  ) => Promise<void>;
  withGlobal: (
    body: Global,
    options?: ModelsWithGlobalOptionalParams,
  ) => Promise<void>;
  withIf: (body: If, options?: ModelsWithIfOptionalParams) => Promise<void>;
  withImport: (
    body: Import,
    options?: ModelsWithImportOptionalParams,
  ) => Promise<void>;
  withIn: (body: In, options?: ModelsWithInOptionalParams) => Promise<void>;
  withIs: (body: Is, options?: ModelsWithIsOptionalParams) => Promise<void>;
  withLambda: (
    body: Lambda,
    options?: ModelsWithLambdaOptionalParams,
  ) => Promise<void>;
  withNot: (body: Not, options?: ModelsWithNotOptionalParams) => Promise<void>;
  withOr: (body: Or, options?: ModelsWithOrOptionalParams) => Promise<void>;
  withPass: (
    body: Pass,
    options?: ModelsWithPassOptionalParams,
  ) => Promise<void>;
  withRaise: (
    body: Raise,
    options?: ModelsWithRaiseOptionalParams,
  ) => Promise<void>;
  withReturn: (
    body: Return,
    options?: ModelsWithReturnOptionalParams,
  ) => Promise<void>;
  withTry: (body: Try, options?: ModelsWithTryOptionalParams) => Promise<void>;
  withWhile: (
    body: While,
    options?: ModelsWithWhileOptionalParams,
  ) => Promise<void>;
  withWith: (
    body: With,
    options?: ModelsWithWithOptionalParams,
  ) => Promise<void>;
  withYield: (
    body: Yield,
    options?: ModelsWithYieldOptionalParams,
  ) => Promise<void>;
}

export function getModels(context: SpecialWordsContext) {
  return {
    withAnd: (body: And, options?: ModelsWithAndOptionalParams) =>
      modelsWithAnd(context, body, options),
    withAs: (body: As, options?: ModelsWithAsOptionalParams) =>
      modelsWithAs(context, body, options),
    withAssert: (body: Assert, options?: ModelsWithAssertOptionalParams) =>
      modelsWithAssert(context, body, options),
    withAsync: (body: Async, options?: ModelsWithAsyncOptionalParams) =>
      modelsWithAsync(context, body, options),
    withAwait: (body: Await, options?: ModelsWithAwaitOptionalParams) =>
      modelsWithAwait(context, body, options),
    withBreak: (body: Break, options?: ModelsWithBreakOptionalParams) =>
      modelsWithBreak(context, body, options),
    withClass: (body: Class, options?: ModelsWithClassOptionalParams) =>
      modelsWithClass(context, body, options),
    withConstructor: (
      body: Constructor,
      options?: ModelsWithConstructorOptionalParams,
    ) => modelsWithConstructor(context, body, options),
    withContinue: (
      body: Continue,
      options?: ModelsWithContinueOptionalParams,
    ) => modelsWithContinue(context, body, options),
    withDef: (body: Def, options?: ModelsWithDefOptionalParams) =>
      modelsWithDef(context, body, options),
    withDel: (body: Del, options?: ModelsWithDelOptionalParams) =>
      modelsWithDel(context, body, options),
    withElif: (body: Elif, options?: ModelsWithElifOptionalParams) =>
      modelsWithElif(context, body, options),
    withElse: (body: Else, options?: ModelsWithElseOptionalParams) =>
      modelsWithElse(context, body, options),
    withExcept: (body: Except, options?: ModelsWithExceptOptionalParams) =>
      modelsWithExcept(context, body, options),
    withExec: (body: Exec, options?: ModelsWithExecOptionalParams) =>
      modelsWithExec(context, body, options),
    withFinally: (body: Finally, options?: ModelsWithFinallyOptionalParams) =>
      modelsWithFinally(context, body, options),
    withFor: (body: For, options?: ModelsWithForOptionalParams) =>
      modelsWithFor(context, body, options),
    withFrom: (body: From, options?: ModelsWithFromOptionalParams) =>
      modelsWithFrom(context, body, options),
    withGlobal: (body: Global, options?: ModelsWithGlobalOptionalParams) =>
      modelsWithGlobal(context, body, options),
    withIf: (body: If, options?: ModelsWithIfOptionalParams) =>
      modelsWithIf(context, body, options),
    withImport: (body: Import, options?: ModelsWithImportOptionalParams) =>
      modelsWithImport(context, body, options),
    withIn: (body: In, options?: ModelsWithInOptionalParams) =>
      modelsWithIn(context, body, options),
    withIs: (body: Is, options?: ModelsWithIsOptionalParams) =>
      modelsWithIs(context, body, options),
    withLambda: (body: Lambda, options?: ModelsWithLambdaOptionalParams) =>
      modelsWithLambda(context, body, options),
    withNot: (body: Not, options?: ModelsWithNotOptionalParams) =>
      modelsWithNot(context, body, options),
    withOr: (body: Or, options?: ModelsWithOrOptionalParams) =>
      modelsWithOr(context, body, options),
    withPass: (body: Pass, options?: ModelsWithPassOptionalParams) =>
      modelsWithPass(context, body, options),
    withRaise: (body: Raise, options?: ModelsWithRaiseOptionalParams) =>
      modelsWithRaise(context, body, options),
    withReturn: (body: Return, options?: ModelsWithReturnOptionalParams) =>
      modelsWithReturn(context, body, options),
    withTry: (body: Try, options?: ModelsWithTryOptionalParams) =>
      modelsWithTry(context, body, options),
    withWhile: (body: While, options?: ModelsWithWhileOptionalParams) =>
      modelsWithWhile(context, body, options),
    withWith: (body: With, options?: ModelsWithWithOptionalParams) =>
      modelsWithWith(context, body, options),
    withYield: (body: Yield, options?: ModelsWithYieldOptionalParams) =>
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
