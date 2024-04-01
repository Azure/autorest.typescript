// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SpecialWordsContext } from "../../api/SpecialWordsContext.js";
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
  ParametersWithAndOptions,
  ParametersWithAsOptions,
  ParametersWithAssertOptions,
  ParametersWithAsyncOptions,
  ParametersWithAwaitOptions,
  ParametersWithBreakOptions,
  ParametersWithClassOptions,
  ParametersWithConstructorOptions,
  ParametersWithContinueOptions,
  ParametersWithDefOptions,
  ParametersWithDelOptions,
  ParametersWithElifOptions,
  ParametersWithElseOptions,
  ParametersWithExceptOptions,
  ParametersWithExecOptions,
  ParametersWithFinallyOptions,
  ParametersWithForOptions,
  ParametersWithFromOptions,
  ParametersWithGlobalOptions,
  ParametersWithIfOptions,
  ParametersWithImportOptions,
  ParametersWithInOptions,
  ParametersWithIsOptions,
  ParametersWithLambdaOptions,
  ParametersWithNotOptions,
  ParametersWithOrOptions,
  ParametersWithPassOptions,
  ParametersWithRaiseOptions,
  ParametersWithReturnOptions,
  ParametersWithTryOptions,
  ParametersWithWhileOptions,
  ParametersWithWithOptions,
  ParametersWithYieldOptions,
  ParametersWithCancellationTokenOptions,
} from "../../models/options.js";

export interface ParametersOperations {
  withAnd: (and: string, options?: ParametersWithAndOptions) => Promise<void>;
  withAs: (asParam: string, options?: ParametersWithAsOptions) => Promise<void>;
  withAssert: (
    assertParam: string,
    options?: ParametersWithAssertOptions,
  ) => Promise<void>;
  withAsync: (
    asyncParam: string,
    options?: ParametersWithAsyncOptions,
  ) => Promise<void>;
  withAwait: (
    awaitParam: string,
    options?: ParametersWithAwaitOptions,
  ) => Promise<void>;
  withBreak: (
    breakParam: string,
    options?: ParametersWithBreakOptions,
  ) => Promise<void>;
  withClass: (
    classParam: string,
    options?: ParametersWithClassOptions,
  ) => Promise<void>;
  withConstructor: (
    constructorParam: string,
    options?: ParametersWithConstructorOptions,
  ) => Promise<void>;
  withContinue: (
    continueParam: string,
    options?: ParametersWithContinueOptions,
  ) => Promise<void>;
  withDef: (def: string, options?: ParametersWithDefOptions) => Promise<void>;
  withDel: (del: string, options?: ParametersWithDelOptions) => Promise<void>;
  withElif: (
    elif: string,
    options?: ParametersWithElifOptions,
  ) => Promise<void>;
  withElse: (
    elseParam: string,
    options?: ParametersWithElseOptions,
  ) => Promise<void>;
  withExcept: (
    except: string,
    options?: ParametersWithExceptOptions,
  ) => Promise<void>;
  withExec: (
    exec: string,
    options?: ParametersWithExecOptions,
  ) => Promise<void>;
  withFinally: (
    finallyParam: string,
    options?: ParametersWithFinallyOptions,
  ) => Promise<void>;
  withFor: (
    forParam: string,
    options?: ParametersWithForOptions,
  ) => Promise<void>;
  withFrom: (
    fromParam: string,
    options?: ParametersWithFromOptions,
  ) => Promise<void>;
  withGlobal: (
    global: string,
    options?: ParametersWithGlobalOptions,
  ) => Promise<void>;
  withIf: (ifParam: string, options?: ParametersWithIfOptions) => Promise<void>;
  withImport: (
    importParam: string,
    options?: ParametersWithImportOptions,
  ) => Promise<void>;
  withIn: (inParam: string, options?: ParametersWithInOptions) => Promise<void>;
  withIs: (is: string, options?: ParametersWithIsOptions) => Promise<void>;
  withLambda: (
    lambda: string,
    options?: ParametersWithLambdaOptions,
  ) => Promise<void>;
  withNot: (not: string, options?: ParametersWithNotOptions) => Promise<void>;
  withOr: (or: string, options?: ParametersWithOrOptions) => Promise<void>;
  withPass: (
    pass: string,
    options?: ParametersWithPassOptions,
  ) => Promise<void>;
  withRaise: (
    raise: string,
    options?: ParametersWithRaiseOptions,
  ) => Promise<void>;
  withReturn: (
    returnParam: string,
    options?: ParametersWithReturnOptions,
  ) => Promise<void>;
  withTry: (
    tryParam: string,
    options?: ParametersWithTryOptions,
  ) => Promise<void>;
  withWhile: (
    whileParam: string,
    options?: ParametersWithWhileOptions,
  ) => Promise<void>;
  withWith: (
    withParam: string,
    options?: ParametersWithWithOptions,
  ) => Promise<void>;
  withYield: (
    yieldParam: string,
    options?: ParametersWithYieldOptions,
  ) => Promise<void>;
  withCancellationToken: (
    cancellationToken: string,
    options?: ParametersWithCancellationTokenOptions,
  ) => Promise<void>;
}

export function getParameters(context: SpecialWordsContext) {
  return {
    withAnd: (and: string, options?: ParametersWithAndOptions) =>
      parametersWithAnd(context, and, options),
    withAs: (asParam: string, options?: ParametersWithAsOptions) =>
      parametersWithAs(context, asParam, options),
    withAssert: (assertParam: string, options?: ParametersWithAssertOptions) =>
      parametersWithAssert(context, assertParam, options),
    withAsync: (asyncParam: string, options?: ParametersWithAsyncOptions) =>
      parametersWithAsync(context, asyncParam, options),
    withAwait: (awaitParam: string, options?: ParametersWithAwaitOptions) =>
      parametersWithAwait(context, awaitParam, options),
    withBreak: (breakParam: string, options?: ParametersWithBreakOptions) =>
      parametersWithBreak(context, breakParam, options),
    withClass: (classParam: string, options?: ParametersWithClassOptions) =>
      parametersWithClass(context, classParam, options),
    withConstructor: (
      constructorParam: string,
      options?: ParametersWithConstructorOptions,
    ) => parametersWithConstructor(context, constructorParam, options),
    withContinue: (
      continueParam: string,
      options?: ParametersWithContinueOptions,
    ) => parametersWithContinue(context, continueParam, options),
    withDef: (def: string, options?: ParametersWithDefOptions) =>
      parametersWithDef(context, def, options),
    withDel: (del: string, options?: ParametersWithDelOptions) =>
      parametersWithDel(context, del, options),
    withElif: (elif: string, options?: ParametersWithElifOptions) =>
      parametersWithElif(context, elif, options),
    withElse: (elseParam: string, options?: ParametersWithElseOptions) =>
      parametersWithElse(context, elseParam, options),
    withExcept: (except: string, options?: ParametersWithExceptOptions) =>
      parametersWithExcept(context, except, options),
    withExec: (exec: string, options?: ParametersWithExecOptions) =>
      parametersWithExec(context, exec, options),
    withFinally: (
      finallyParam: string,
      options?: ParametersWithFinallyOptions,
    ) => parametersWithFinally(context, finallyParam, options),
    withFor: (forParam: string, options?: ParametersWithForOptions) =>
      parametersWithFor(context, forParam, options),
    withFrom: (fromParam: string, options?: ParametersWithFromOptions) =>
      parametersWithFrom(context, fromParam, options),
    withGlobal: (global: string, options?: ParametersWithGlobalOptions) =>
      parametersWithGlobal(context, global, options),
    withIf: (ifParam: string, options?: ParametersWithIfOptions) =>
      parametersWithIf(context, ifParam, options),
    withImport: (importParam: string, options?: ParametersWithImportOptions) =>
      parametersWithImport(context, importParam, options),
    withIn: (inParam: string, options?: ParametersWithInOptions) =>
      parametersWithIn(context, inParam, options),
    withIs: (is: string, options?: ParametersWithIsOptions) =>
      parametersWithIs(context, is, options),
    withLambda: (lambda: string, options?: ParametersWithLambdaOptions) =>
      parametersWithLambda(context, lambda, options),
    withNot: (not: string, options?: ParametersWithNotOptions) =>
      parametersWithNot(context, not, options),
    withOr: (or: string, options?: ParametersWithOrOptions) =>
      parametersWithOr(context, or, options),
    withPass: (pass: string, options?: ParametersWithPassOptions) =>
      parametersWithPass(context, pass, options),
    withRaise: (raise: string, options?: ParametersWithRaiseOptions) =>
      parametersWithRaise(context, raise, options),
    withReturn: (returnParam: string, options?: ParametersWithReturnOptions) =>
      parametersWithReturn(context, returnParam, options),
    withTry: (tryParam: string, options?: ParametersWithTryOptions) =>
      parametersWithTry(context, tryParam, options),
    withWhile: (whileParam: string, options?: ParametersWithWhileOptions) =>
      parametersWithWhile(context, whileParam, options),
    withWith: (withParam: string, options?: ParametersWithWithOptions) =>
      parametersWithWith(context, withParam, options),
    withYield: (yieldParam: string, options?: ParametersWithYieldOptions) =>
      parametersWithYield(context, yieldParam, options),
    withCancellationToken: (
      cancellationToken: string,
      options?: ParametersWithCancellationTokenOptions,
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
