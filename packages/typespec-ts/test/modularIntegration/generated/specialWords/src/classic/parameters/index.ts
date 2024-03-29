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
  WithCancellationTokenOptions,
} from "../../models/options.js";

export interface ParametersOperations {
  withAnd: (and: string, options?: WithAndOptions) => Promise<void>;
  withAs: (asParam: string, options?: WithAsOptions) => Promise<void>;
  withAssert: (
    assertParam: string,
    options?: WithAssertOptions,
  ) => Promise<void>;
  withAsync: (asyncParam: string, options?: WithAsyncOptions) => Promise<void>;
  withAwait: (awaitParam: string, options?: WithAwaitOptions) => Promise<void>;
  withBreak: (breakParam: string, options?: WithBreakOptions) => Promise<void>;
  withClass: (classParam: string, options?: WithClassOptions) => Promise<void>;
  withConstructor: (
    constructorParam: string,
    options?: WithConstructorOptions,
  ) => Promise<void>;
  withContinue: (
    continueParam: string,
    options?: WithContinueOptions,
  ) => Promise<void>;
  withDef: (def: string, options?: WithDefOptions) => Promise<void>;
  withDel: (del: string, options?: WithDelOptions) => Promise<void>;
  withElif: (elif: string, options?: WithElifOptions) => Promise<void>;
  withElse: (elseParam: string, options?: WithElseOptions) => Promise<void>;
  withExcept: (except: string, options?: WithExceptOptions) => Promise<void>;
  withExec: (exec: string, options?: WithExecOptions) => Promise<void>;
  withFinally: (
    finallyParam: string,
    options?: WithFinallyOptions,
  ) => Promise<void>;
  withFor: (forParam: string, options?: WithForOptions) => Promise<void>;
  withFrom: (fromParam: string, options?: WithFromOptions) => Promise<void>;
  withGlobal: (global: string, options?: WithGlobalOptions) => Promise<void>;
  withIf: (ifParam: string, options?: WithIfOptions) => Promise<void>;
  withImport: (
    importParam: string,
    options?: WithImportOptions,
  ) => Promise<void>;
  withIn: (inParam: string, options?: WithInOptions) => Promise<void>;
  withIs: (is: string, options?: WithIsOptions) => Promise<void>;
  withLambda: (lambda: string, options?: WithLambdaOptions) => Promise<void>;
  withNot: (not: string, options?: WithNotOptions) => Promise<void>;
  withOr: (or: string, options?: WithOrOptions) => Promise<void>;
  withPass: (pass: string, options?: WithPassOptions) => Promise<void>;
  withRaise: (raise: string, options?: WithRaiseOptions) => Promise<void>;
  withReturn: (
    returnParam: string,
    options?: WithReturnOptions,
  ) => Promise<void>;
  withTry: (tryParam: string, options?: WithTryOptions) => Promise<void>;
  withWhile: (whileParam: string, options?: WithWhileOptions) => Promise<void>;
  withWith: (withParam: string, options?: WithWithOptions) => Promise<void>;
  withYield: (yieldParam: string, options?: WithYieldOptions) => Promise<void>;
  withCancellationToken: (
    cancellationToken: string,
    options?: WithCancellationTokenOptions,
  ) => Promise<void>;
}

export function getParameters(context: SpecialWordsContext) {
  return {
    withAnd: (and: string, options?: WithAndOptions) =>
      parametersWithAnd(context, and, options),
    withAs: (asParam: string, options?: WithAsOptions) =>
      parametersWithAs(context, asParam, options),
    withAssert: (assertParam: string, options?: WithAssertOptions) =>
      parametersWithAssert(context, assertParam, options),
    withAsync: (asyncParam: string, options?: WithAsyncOptions) =>
      parametersWithAsync(context, asyncParam, options),
    withAwait: (awaitParam: string, options?: WithAwaitOptions) =>
      parametersWithAwait(context, awaitParam, options),
    withBreak: (breakParam: string, options?: WithBreakOptions) =>
      parametersWithBreak(context, breakParam, options),
    withClass: (classParam: string, options?: WithClassOptions) =>
      parametersWithClass(context, classParam, options),
    withConstructor: (
      constructorParam: string,
      options?: WithConstructorOptions,
    ) => parametersWithConstructor(context, constructorParam, options),
    withContinue: (continueParam: string, options?: WithContinueOptions) =>
      parametersWithContinue(context, continueParam, options),
    withDef: (def: string, options?: WithDefOptions) =>
      parametersWithDef(context, def, options),
    withDel: (del: string, options?: WithDelOptions) =>
      parametersWithDel(context, del, options),
    withElif: (elif: string, options?: WithElifOptions) =>
      parametersWithElif(context, elif, options),
    withElse: (elseParam: string, options?: WithElseOptions) =>
      parametersWithElse(context, elseParam, options),
    withExcept: (except: string, options?: WithExceptOptions) =>
      parametersWithExcept(context, except, options),
    withExec: (exec: string, options?: WithExecOptions) =>
      parametersWithExec(context, exec, options),
    withFinally: (finallyParam: string, options?: WithFinallyOptions) =>
      parametersWithFinally(context, finallyParam, options),
    withFor: (forParam: string, options?: WithForOptions) =>
      parametersWithFor(context, forParam, options),
    withFrom: (fromParam: string, options?: WithFromOptions) =>
      parametersWithFrom(context, fromParam, options),
    withGlobal: (global: string, options?: WithGlobalOptions) =>
      parametersWithGlobal(context, global, options),
    withIf: (ifParam: string, options?: WithIfOptions) =>
      parametersWithIf(context, ifParam, options),
    withImport: (importParam: string, options?: WithImportOptions) =>
      parametersWithImport(context, importParam, options),
    withIn: (inParam: string, options?: WithInOptions) =>
      parametersWithIn(context, inParam, options),
    withIs: (is: string, options?: WithIsOptions) =>
      parametersWithIs(context, is, options),
    withLambda: (lambda: string, options?: WithLambdaOptions) =>
      parametersWithLambda(context, lambda, options),
    withNot: (not: string, options?: WithNotOptions) =>
      parametersWithNot(context, not, options),
    withOr: (or: string, options?: WithOrOptions) =>
      parametersWithOr(context, or, options),
    withPass: (pass: string, options?: WithPassOptions) =>
      parametersWithPass(context, pass, options),
    withRaise: (raise: string, options?: WithRaiseOptions) =>
      parametersWithRaise(context, raise, options),
    withReturn: (returnParam: string, options?: WithReturnOptions) =>
      parametersWithReturn(context, returnParam, options),
    withTry: (tryParam: string, options?: WithTryOptions) =>
      parametersWithTry(context, tryParam, options),
    withWhile: (whileParam: string, options?: WithWhileOptions) =>
      parametersWithWhile(context, whileParam, options),
    withWith: (withParam: string, options?: WithWithOptions) =>
      parametersWithWith(context, withParam, options),
    withYield: (yieldParam: string, options?: WithYieldOptions) =>
      parametersWithYield(context, yieldParam, options),
    withCancellationToken: (
      cancellationToken: string,
      options?: WithCancellationTokenOptions,
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
