// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SpecialWordsContext } from "../../api/specialWordsContext.js";
import {
  parametersWithAnd,
  parametersWithAs,
  parametersWithAssert,
  parametersWithAsync,
  parametersWithAwait,
  parametersWithBreak,
  parametersWithClass,
  parametersWithConstructor,
  parametersWithContinue,
  parametersWithDef,
  parametersWithDel,
  parametersWithElif,
  parametersWithElse,
  parametersWithExcept,
  parametersWithExec,
  parametersWithFinally,
  parametersWithFor,
  parametersWithFrom,
  parametersWithGlobal,
  parametersWithIf,
  parametersWithImport,
  parametersWithIn,
  parametersWithIs,
  parametersWithLambda,
  parametersWithNot,
  parametersWithOr,
  parametersWithPass,
  parametersWithRaise,
  parametersWithReturn,
  parametersWithTry,
  parametersWithWhile,
  parametersWithWith,
  parametersWithYield,
  parametersWithCancellationToken,
} from "../../api/parameters/index.js";
import {
  ParametersWithAndOptionalParams,
  ParametersWithAsOptionalParams,
  ParametersWithAssertOptionalParams,
  ParametersWithAsyncOptionalParams,
  ParametersWithAwaitOptionalParams,
  ParametersWithBreakOptionalParams,
  ParametersWithClassOptionalParams,
  ParametersWithConstructorOptionalParams,
  ParametersWithContinueOptionalParams,
  ParametersWithDefOptionalParams,
  ParametersWithDelOptionalParams,
  ParametersWithElifOptionalParams,
  ParametersWithElseOptionalParams,
  ParametersWithExceptOptionalParams,
  ParametersWithExecOptionalParams,
  ParametersWithFinallyOptionalParams,
  ParametersWithForOptionalParams,
  ParametersWithFromOptionalParams,
  ParametersWithGlobalOptionalParams,
  ParametersWithIfOptionalParams,
  ParametersWithImportOptionalParams,
  ParametersWithInOptionalParams,
  ParametersWithIsOptionalParams,
  ParametersWithLambdaOptionalParams,
  ParametersWithNotOptionalParams,
  ParametersWithOrOptionalParams,
  ParametersWithPassOptionalParams,
  ParametersWithRaiseOptionalParams,
  ParametersWithReturnOptionalParams,
  ParametersWithTryOptionalParams,
  ParametersWithWhileOptionalParams,
  ParametersWithWithOptionalParams,
  ParametersWithYieldOptionalParams,
  ParametersWithCancellationTokenOptionalParams,
} from "../../models/options.js";

/** Interface representing a Parameters operations. */
export interface ParametersOperations {
  withAnd: (
    and: string,
    options?: ParametersWithAndOptionalParams,
  ) => Promise<void>;
  withAs: (
    asParam: string,
    options?: ParametersWithAsOptionalParams,
  ) => Promise<void>;
  withAssert: (
    assertParam: string,
    options?: ParametersWithAssertOptionalParams,
  ) => Promise<void>;
  withAsync: (
    asyncParam: string,
    options?: ParametersWithAsyncOptionalParams,
  ) => Promise<void>;
  withAwait: (
    awaitParam: string,
    options?: ParametersWithAwaitOptionalParams,
  ) => Promise<void>;
  withBreak: (
    breakParam: string,
    options?: ParametersWithBreakOptionalParams,
  ) => Promise<void>;
  withClass: (
    classParam: string,
    options?: ParametersWithClassOptionalParams,
  ) => Promise<void>;
  withConstructor: (
    constructorParam: string,
    options?: ParametersWithConstructorOptionalParams,
  ) => Promise<void>;
  withContinue: (
    continueParam: string,
    options?: ParametersWithContinueOptionalParams,
  ) => Promise<void>;
  withDef: (
    def: string,
    options?: ParametersWithDefOptionalParams,
  ) => Promise<void>;
  withDel: (
    del: string,
    options?: ParametersWithDelOptionalParams,
  ) => Promise<void>;
  withElif: (
    elif: string,
    options?: ParametersWithElifOptionalParams,
  ) => Promise<void>;
  withElse: (
    elseParam: string,
    options?: ParametersWithElseOptionalParams,
  ) => Promise<void>;
  withExcept: (
    except: string,
    options?: ParametersWithExceptOptionalParams,
  ) => Promise<void>;
  withExec: (
    exec: string,
    options?: ParametersWithExecOptionalParams,
  ) => Promise<void>;
  withFinally: (
    finallyParam: string,
    options?: ParametersWithFinallyOptionalParams,
  ) => Promise<void>;
  withFor: (
    forParam: string,
    options?: ParametersWithForOptionalParams,
  ) => Promise<void>;
  withFrom: (
    fromParam: string,
    options?: ParametersWithFromOptionalParams,
  ) => Promise<void>;
  withGlobal: (
    global: string,
    options?: ParametersWithGlobalOptionalParams,
  ) => Promise<void>;
  withIf: (
    ifParam: string,
    options?: ParametersWithIfOptionalParams,
  ) => Promise<void>;
  withImport: (
    importParam: string,
    options?: ParametersWithImportOptionalParams,
  ) => Promise<void>;
  withIn: (
    inParam: string,
    options?: ParametersWithInOptionalParams,
  ) => Promise<void>;
  withIs: (
    is: string,
    options?: ParametersWithIsOptionalParams,
  ) => Promise<void>;
  withLambda: (
    lambda: string,
    options?: ParametersWithLambdaOptionalParams,
  ) => Promise<void>;
  withNot: (
    not: string,
    options?: ParametersWithNotOptionalParams,
  ) => Promise<void>;
  withOr: (
    or: string,
    options?: ParametersWithOrOptionalParams,
  ) => Promise<void>;
  withPass: (
    pass: string,
    options?: ParametersWithPassOptionalParams,
  ) => Promise<void>;
  withRaise: (
    raise: string,
    options?: ParametersWithRaiseOptionalParams,
  ) => Promise<void>;
  withReturn: (
    returnParam: string,
    options?: ParametersWithReturnOptionalParams,
  ) => Promise<void>;
  withTry: (
    tryParam: string,
    options?: ParametersWithTryOptionalParams,
  ) => Promise<void>;
  withWhile: (
    whileParam: string,
    options?: ParametersWithWhileOptionalParams,
  ) => Promise<void>;
  withWith: (
    withParam: string,
    options?: ParametersWithWithOptionalParams,
  ) => Promise<void>;
  withYield: (
    yieldParam: string,
    options?: ParametersWithYieldOptionalParams,
  ) => Promise<void>;
  withCancellationToken: (
    cancellationToken: string,
    options?: ParametersWithCancellationTokenOptionalParams,
  ) => Promise<void>;
}

export function getParameters(context: SpecialWordsContext) {
  return {
    withAnd: (and: string, options?: ParametersWithAndOptionalParams) =>
      parametersWithAnd(context, and, options),
    withAs: (asParam: string, options?: ParametersWithAsOptionalParams) =>
      parametersWithAs(context, asParam, options),
    withAssert: (
      assertParam: string,
      options?: ParametersWithAssertOptionalParams,
    ) => parametersWithAssert(context, assertParam, options),
    withAsync: (
      asyncParam: string,
      options?: ParametersWithAsyncOptionalParams,
    ) => parametersWithAsync(context, asyncParam, options),
    withAwait: (
      awaitParam: string,
      options?: ParametersWithAwaitOptionalParams,
    ) => parametersWithAwait(context, awaitParam, options),
    withBreak: (
      breakParam: string,
      options?: ParametersWithBreakOptionalParams,
    ) => parametersWithBreak(context, breakParam, options),
    withClass: (
      classParam: string,
      options?: ParametersWithClassOptionalParams,
    ) => parametersWithClass(context, classParam, options),
    withConstructor: (
      constructorParam: string,
      options?: ParametersWithConstructorOptionalParams,
    ) => parametersWithConstructor(context, constructorParam, options),
    withContinue: (
      continueParam: string,
      options?: ParametersWithContinueOptionalParams,
    ) => parametersWithContinue(context, continueParam, options),
    withDef: (def: string, options?: ParametersWithDefOptionalParams) =>
      parametersWithDef(context, def, options),
    withDel: (del: string, options?: ParametersWithDelOptionalParams) =>
      parametersWithDel(context, del, options),
    withElif: (elif: string, options?: ParametersWithElifOptionalParams) =>
      parametersWithElif(context, elif, options),
    withElse: (elseParam: string, options?: ParametersWithElseOptionalParams) =>
      parametersWithElse(context, elseParam, options),
    withExcept: (
      except: string,
      options?: ParametersWithExceptOptionalParams,
    ) => parametersWithExcept(context, except, options),
    withExec: (exec: string, options?: ParametersWithExecOptionalParams) =>
      parametersWithExec(context, exec, options),
    withFinally: (
      finallyParam: string,
      options?: ParametersWithFinallyOptionalParams,
    ) => parametersWithFinally(context, finallyParam, options),
    withFor: (forParam: string, options?: ParametersWithForOptionalParams) =>
      parametersWithFor(context, forParam, options),
    withFrom: (fromParam: string, options?: ParametersWithFromOptionalParams) =>
      parametersWithFrom(context, fromParam, options),
    withGlobal: (
      global: string,
      options?: ParametersWithGlobalOptionalParams,
    ) => parametersWithGlobal(context, global, options),
    withIf: (ifParam: string, options?: ParametersWithIfOptionalParams) =>
      parametersWithIf(context, ifParam, options),
    withImport: (
      importParam: string,
      options?: ParametersWithImportOptionalParams,
    ) => parametersWithImport(context, importParam, options),
    withIn: (inParam: string, options?: ParametersWithInOptionalParams) =>
      parametersWithIn(context, inParam, options),
    withIs: (is: string, options?: ParametersWithIsOptionalParams) =>
      parametersWithIs(context, is, options),
    withLambda: (
      lambda: string,
      options?: ParametersWithLambdaOptionalParams,
    ) => parametersWithLambda(context, lambda, options),
    withNot: (not: string, options?: ParametersWithNotOptionalParams) =>
      parametersWithNot(context, not, options),
    withOr: (or: string, options?: ParametersWithOrOptionalParams) =>
      parametersWithOr(context, or, options),
    withPass: (pass: string, options?: ParametersWithPassOptionalParams) =>
      parametersWithPass(context, pass, options),
    withRaise: (raise: string, options?: ParametersWithRaiseOptionalParams) =>
      parametersWithRaise(context, raise, options),
    withReturn: (
      returnParam: string,
      options?: ParametersWithReturnOptionalParams,
    ) => parametersWithReturn(context, returnParam, options),
    withTry: (tryParam: string, options?: ParametersWithTryOptionalParams) =>
      parametersWithTry(context, tryParam, options),
    withWhile: (
      whileParam: string,
      options?: ParametersWithWhileOptionalParams,
    ) => parametersWithWhile(context, whileParam, options),
    withWith: (withParam: string, options?: ParametersWithWithOptionalParams) =>
      parametersWithWith(context, withParam, options),
    withYield: (
      yieldParam: string,
      options?: ParametersWithYieldOptionalParams,
    ) => parametersWithYield(context, yieldParam, options),
    withCancellationToken: (
      cancellationToken: string,
      options?: ParametersWithCancellationTokenOptionalParams,
    ) => parametersWithCancellationToken(context, cancellationToken, options),
  };
}

export function getParametersOperations(
  context: SpecialWordsContext,
): ParametersOperations {
  return {
    ...getParameters(context),
  };
}
