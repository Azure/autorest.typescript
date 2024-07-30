// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  SpecialWordsContext as Client,
  ParametersWithAnd204Response,
  ParametersWithAs204Response,
  ParametersWithAssert204Response,
  ParametersWithAsync204Response,
  ParametersWithAwait204Response,
  ParametersWithBreak204Response,
  ParametersWithCancellationToken204Response,
  ParametersWithClass204Response,
  ParametersWithConstructor204Response,
  ParametersWithContinue204Response,
  ParametersWithDef204Response,
  ParametersWithDel204Response,
  ParametersWithElif204Response,
  ParametersWithElse204Response,
  ParametersWithExcept204Response,
  ParametersWithExec204Response,
  ParametersWithFinally204Response,
  ParametersWithFor204Response,
  ParametersWithFrom204Response,
  ParametersWithGlobal204Response,
  ParametersWithIf204Response,
  ParametersWithImport204Response,
  ParametersWithIn204Response,
  ParametersWithIs204Response,
  ParametersWithLambda204Response,
  ParametersWithNot204Response,
  ParametersWithOr204Response,
  ParametersWithPass204Response,
  ParametersWithRaise204Response,
  ParametersWithReturn204Response,
  ParametersWithTry204Response,
  ParametersWithWhile204Response,
  ParametersWithWith204Response,
  ParametersWithYield204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
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

export function _parametersWithAndSend(
  context: Client,
  and: string,
  options: ParametersWithAndOptionalParams = { requestOptions: {} },
): StreamableMethod<ParametersWithAnd204Response> {
  return context
    .path("/special-words/parameters/and")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { and: and },
    });
}

export async function _parametersWithAndDeserialize(
  result: ParametersWithAnd204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function parametersWithAnd(
  context: Client,
  and: string,
  options: ParametersWithAndOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _parametersWithAndSend(context, and, options);
  return _parametersWithAndDeserialize(result);
}

export function _parametersWithAsSend(
  context: Client,
  asParam: string,
  options: ParametersWithAsOptionalParams = { requestOptions: {} },
): StreamableMethod<ParametersWithAs204Response> {
  return context
    .path("/special-words/parameters/as")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { as: asParam },
    });
}

export async function _parametersWithAsDeserialize(
  result: ParametersWithAs204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function parametersWithAs(
  context: Client,
  asParam: string,
  options: ParametersWithAsOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _parametersWithAsSend(context, asParam, options);
  return _parametersWithAsDeserialize(result);
}

export function _parametersWithAssertSend(
  context: Client,
  assertParam: string,
  options: ParametersWithAssertOptionalParams = { requestOptions: {} },
): StreamableMethod<ParametersWithAssert204Response> {
  return context
    .path("/special-words/parameters/assert")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { assert: assertParam },
    });
}

export async function _parametersWithAssertDeserialize(
  result: ParametersWithAssert204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function parametersWithAssert(
  context: Client,
  assertParam: string,
  options: ParametersWithAssertOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _parametersWithAssertSend(context, assertParam, options);
  return _parametersWithAssertDeserialize(result);
}

export function _parametersWithAsyncSend(
  context: Client,
  asyncParam: string,
  options: ParametersWithAsyncOptionalParams = { requestOptions: {} },
): StreamableMethod<ParametersWithAsync204Response> {
  return context
    .path("/special-words/parameters/async")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { async: asyncParam },
    });
}

export async function _parametersWithAsyncDeserialize(
  result: ParametersWithAsync204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function parametersWithAsync(
  context: Client,
  asyncParam: string,
  options: ParametersWithAsyncOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _parametersWithAsyncSend(context, asyncParam, options);
  return _parametersWithAsyncDeserialize(result);
}

export function _parametersWithAwaitSend(
  context: Client,
  awaitParam: string,
  options: ParametersWithAwaitOptionalParams = { requestOptions: {} },
): StreamableMethod<ParametersWithAwait204Response> {
  return context
    .path("/special-words/parameters/await")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { await: awaitParam },
    });
}

export async function _parametersWithAwaitDeserialize(
  result: ParametersWithAwait204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function parametersWithAwait(
  context: Client,
  awaitParam: string,
  options: ParametersWithAwaitOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _parametersWithAwaitSend(context, awaitParam, options);
  return _parametersWithAwaitDeserialize(result);
}

export function _parametersWithBreakSend(
  context: Client,
  breakParam: string,
  options: ParametersWithBreakOptionalParams = { requestOptions: {} },
): StreamableMethod<ParametersWithBreak204Response> {
  return context
    .path("/special-words/parameters/break")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { break: breakParam },
    });
}

export async function _parametersWithBreakDeserialize(
  result: ParametersWithBreak204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function parametersWithBreak(
  context: Client,
  breakParam: string,
  options: ParametersWithBreakOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _parametersWithBreakSend(context, breakParam, options);
  return _parametersWithBreakDeserialize(result);
}

export function _parametersWithClassSend(
  context: Client,
  classParam: string,
  options: ParametersWithClassOptionalParams = { requestOptions: {} },
): StreamableMethod<ParametersWithClass204Response> {
  return context
    .path("/special-words/parameters/class")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { class: classParam },
    });
}

export async function _parametersWithClassDeserialize(
  result: ParametersWithClass204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function parametersWithClass(
  context: Client,
  classParam: string,
  options: ParametersWithClassOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _parametersWithClassSend(context, classParam, options);
  return _parametersWithClassDeserialize(result);
}

export function _parametersWithConstructorSend(
  context: Client,
  constructorParam: string,
  options: ParametersWithConstructorOptionalParams = { requestOptions: {} },
): StreamableMethod<ParametersWithConstructor204Response> {
  return context
    .path("/special-words/parameters/constructor")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { constructor: constructorParam as any },
    });
}

export async function _parametersWithConstructorDeserialize(
  result: ParametersWithConstructor204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function parametersWithConstructor(
  context: Client,
  constructorParam: string,
  options: ParametersWithConstructorOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _parametersWithConstructorSend(
    context,
    constructorParam,
    options,
  );
  return _parametersWithConstructorDeserialize(result);
}

export function _parametersWithContinueSend(
  context: Client,
  continueParam: string,
  options: ParametersWithContinueOptionalParams = { requestOptions: {} },
): StreamableMethod<ParametersWithContinue204Response> {
  return context
    .path("/special-words/parameters/continue")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { continue: continueParam },
    });
}

export async function _parametersWithContinueDeserialize(
  result: ParametersWithContinue204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function parametersWithContinue(
  context: Client,
  continueParam: string,
  options: ParametersWithContinueOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _parametersWithContinueSend(
    context,
    continueParam,
    options,
  );
  return _parametersWithContinueDeserialize(result);
}

export function _parametersWithDefSend(
  context: Client,
  def: string,
  options: ParametersWithDefOptionalParams = { requestOptions: {} },
): StreamableMethod<ParametersWithDef204Response> {
  return context
    .path("/special-words/parameters/def")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { def: def },
    });
}

export async function _parametersWithDefDeserialize(
  result: ParametersWithDef204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function parametersWithDef(
  context: Client,
  def: string,
  options: ParametersWithDefOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _parametersWithDefSend(context, def, options);
  return _parametersWithDefDeserialize(result);
}

export function _parametersWithDelSend(
  context: Client,
  del: string,
  options: ParametersWithDelOptionalParams = { requestOptions: {} },
): StreamableMethod<ParametersWithDel204Response> {
  return context
    .path("/special-words/parameters/del")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { del: del },
    });
}

export async function _parametersWithDelDeserialize(
  result: ParametersWithDel204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function parametersWithDel(
  context: Client,
  del: string,
  options: ParametersWithDelOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _parametersWithDelSend(context, del, options);
  return _parametersWithDelDeserialize(result);
}

export function _parametersWithElifSend(
  context: Client,
  elif: string,
  options: ParametersWithElifOptionalParams = { requestOptions: {} },
): StreamableMethod<ParametersWithElif204Response> {
  return context
    .path("/special-words/parameters/elif")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { elif: elif },
    });
}

export async function _parametersWithElifDeserialize(
  result: ParametersWithElif204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function parametersWithElif(
  context: Client,
  elif: string,
  options: ParametersWithElifOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _parametersWithElifSend(context, elif, options);
  return _parametersWithElifDeserialize(result);
}

export function _parametersWithElseSend(
  context: Client,
  elseParam: string,
  options: ParametersWithElseOptionalParams = { requestOptions: {} },
): StreamableMethod<ParametersWithElse204Response> {
  return context
    .path("/special-words/parameters/else")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { else: elseParam },
    });
}

export async function _parametersWithElseDeserialize(
  result: ParametersWithElse204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function parametersWithElse(
  context: Client,
  elseParam: string,
  options: ParametersWithElseOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _parametersWithElseSend(context, elseParam, options);
  return _parametersWithElseDeserialize(result);
}

export function _parametersWithExceptSend(
  context: Client,
  except: string,
  options: ParametersWithExceptOptionalParams = { requestOptions: {} },
): StreamableMethod<ParametersWithExcept204Response> {
  return context
    .path("/special-words/parameters/except")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { except: except },
    });
}

export async function _parametersWithExceptDeserialize(
  result: ParametersWithExcept204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function parametersWithExcept(
  context: Client,
  except: string,
  options: ParametersWithExceptOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _parametersWithExceptSend(context, except, options);
  return _parametersWithExceptDeserialize(result);
}

export function _parametersWithExecSend(
  context: Client,
  exec: string,
  options: ParametersWithExecOptionalParams = { requestOptions: {} },
): StreamableMethod<ParametersWithExec204Response> {
  return context
    .path("/special-words/parameters/exec")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { exec: exec },
    });
}

export async function _parametersWithExecDeserialize(
  result: ParametersWithExec204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function parametersWithExec(
  context: Client,
  exec: string,
  options: ParametersWithExecOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _parametersWithExecSend(context, exec, options);
  return _parametersWithExecDeserialize(result);
}

export function _parametersWithFinallySend(
  context: Client,
  finallyParam: string,
  options: ParametersWithFinallyOptionalParams = { requestOptions: {} },
): StreamableMethod<ParametersWithFinally204Response> {
  return context
    .path("/special-words/parameters/finally")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { finally: finallyParam },
    });
}

export async function _parametersWithFinallyDeserialize(
  result: ParametersWithFinally204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function parametersWithFinally(
  context: Client,
  finallyParam: string,
  options: ParametersWithFinallyOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _parametersWithFinallySend(
    context,
    finallyParam,
    options,
  );
  return _parametersWithFinallyDeserialize(result);
}

export function _parametersWithForSend(
  context: Client,
  forParam: string,
  options: ParametersWithForOptionalParams = { requestOptions: {} },
): StreamableMethod<ParametersWithFor204Response> {
  return context
    .path("/special-words/parameters/for")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { for: forParam },
    });
}

export async function _parametersWithForDeserialize(
  result: ParametersWithFor204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function parametersWithFor(
  context: Client,
  forParam: string,
  options: ParametersWithForOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _parametersWithForSend(context, forParam, options);
  return _parametersWithForDeserialize(result);
}

export function _parametersWithFromSend(
  context: Client,
  fromParam: string,
  options: ParametersWithFromOptionalParams = { requestOptions: {} },
): StreamableMethod<ParametersWithFrom204Response> {
  return context
    .path("/special-words/parameters/from")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { from: fromParam },
    });
}

export async function _parametersWithFromDeserialize(
  result: ParametersWithFrom204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function parametersWithFrom(
  context: Client,
  fromParam: string,
  options: ParametersWithFromOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _parametersWithFromSend(context, fromParam, options);
  return _parametersWithFromDeserialize(result);
}

export function _parametersWithGlobalSend(
  context: Client,
  global: string,
  options: ParametersWithGlobalOptionalParams = { requestOptions: {} },
): StreamableMethod<ParametersWithGlobal204Response> {
  return context
    .path("/special-words/parameters/global")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { global: global },
    });
}

export async function _parametersWithGlobalDeserialize(
  result: ParametersWithGlobal204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function parametersWithGlobal(
  context: Client,
  global: string,
  options: ParametersWithGlobalOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _parametersWithGlobalSend(context, global, options);
  return _parametersWithGlobalDeserialize(result);
}

export function _parametersWithIfSend(
  context: Client,
  ifParam: string,
  options: ParametersWithIfOptionalParams = { requestOptions: {} },
): StreamableMethod<ParametersWithIf204Response> {
  return context
    .path("/special-words/parameters/if")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { if: ifParam },
    });
}

export async function _parametersWithIfDeserialize(
  result: ParametersWithIf204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function parametersWithIf(
  context: Client,
  ifParam: string,
  options: ParametersWithIfOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _parametersWithIfSend(context, ifParam, options);
  return _parametersWithIfDeserialize(result);
}

export function _parametersWithImportSend(
  context: Client,
  importParam: string,
  options: ParametersWithImportOptionalParams = { requestOptions: {} },
): StreamableMethod<ParametersWithImport204Response> {
  return context
    .path("/special-words/parameters/import")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { import: importParam },
    });
}

export async function _parametersWithImportDeserialize(
  result: ParametersWithImport204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function parametersWithImport(
  context: Client,
  importParam: string,
  options: ParametersWithImportOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _parametersWithImportSend(context, importParam, options);
  return _parametersWithImportDeserialize(result);
}

export function _parametersWithInSend(
  context: Client,
  inParam: string,
  options: ParametersWithInOptionalParams = { requestOptions: {} },
): StreamableMethod<ParametersWithIn204Response> {
  return context
    .path("/special-words/parameters/in")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { in: inParam },
    });
}

export async function _parametersWithInDeserialize(
  result: ParametersWithIn204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function parametersWithIn(
  context: Client,
  inParam: string,
  options: ParametersWithInOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _parametersWithInSend(context, inParam, options);
  return _parametersWithInDeserialize(result);
}

export function _parametersWithIsSend(
  context: Client,
  is: string,
  options: ParametersWithIsOptionalParams = { requestOptions: {} },
): StreamableMethod<ParametersWithIs204Response> {
  return context
    .path("/special-words/parameters/is")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { is: is },
    });
}

export async function _parametersWithIsDeserialize(
  result: ParametersWithIs204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function parametersWithIs(
  context: Client,
  is: string,
  options: ParametersWithIsOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _parametersWithIsSend(context, is, options);
  return _parametersWithIsDeserialize(result);
}

export function _parametersWithLambdaSend(
  context: Client,
  lambda: string,
  options: ParametersWithLambdaOptionalParams = { requestOptions: {} },
): StreamableMethod<ParametersWithLambda204Response> {
  return context
    .path("/special-words/parameters/lambda")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { lambda: lambda },
    });
}

export async function _parametersWithLambdaDeserialize(
  result: ParametersWithLambda204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function parametersWithLambda(
  context: Client,
  lambda: string,
  options: ParametersWithLambdaOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _parametersWithLambdaSend(context, lambda, options);
  return _parametersWithLambdaDeserialize(result);
}

export function _parametersWithNotSend(
  context: Client,
  not: string,
  options: ParametersWithNotOptionalParams = { requestOptions: {} },
): StreamableMethod<ParametersWithNot204Response> {
  return context
    .path("/special-words/parameters/not")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { not: not },
    });
}

export async function _parametersWithNotDeserialize(
  result: ParametersWithNot204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function parametersWithNot(
  context: Client,
  not: string,
  options: ParametersWithNotOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _parametersWithNotSend(context, not, options);
  return _parametersWithNotDeserialize(result);
}

export function _parametersWithOrSend(
  context: Client,
  or: string,
  options: ParametersWithOrOptionalParams = { requestOptions: {} },
): StreamableMethod<ParametersWithOr204Response> {
  return context
    .path("/special-words/parameters/or")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { or: or },
    });
}

export async function _parametersWithOrDeserialize(
  result: ParametersWithOr204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function parametersWithOr(
  context: Client,
  or: string,
  options: ParametersWithOrOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _parametersWithOrSend(context, or, options);
  return _parametersWithOrDeserialize(result);
}

export function _parametersWithPassSend(
  context: Client,
  pass: string,
  options: ParametersWithPassOptionalParams = { requestOptions: {} },
): StreamableMethod<ParametersWithPass204Response> {
  return context
    .path("/special-words/parameters/pass")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { pass: pass },
    });
}

export async function _parametersWithPassDeserialize(
  result: ParametersWithPass204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function parametersWithPass(
  context: Client,
  pass: string,
  options: ParametersWithPassOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _parametersWithPassSend(context, pass, options);
  return _parametersWithPassDeserialize(result);
}

export function _parametersWithRaiseSend(
  context: Client,
  raise: string,
  options: ParametersWithRaiseOptionalParams = { requestOptions: {} },
): StreamableMethod<ParametersWithRaise204Response> {
  return context
    .path("/special-words/parameters/raise")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { raise: raise },
    });
}

export async function _parametersWithRaiseDeserialize(
  result: ParametersWithRaise204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function parametersWithRaise(
  context: Client,
  raise: string,
  options: ParametersWithRaiseOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _parametersWithRaiseSend(context, raise, options);
  return _parametersWithRaiseDeserialize(result);
}

export function _parametersWithReturnSend(
  context: Client,
  returnParam: string,
  options: ParametersWithReturnOptionalParams = { requestOptions: {} },
): StreamableMethod<ParametersWithReturn204Response> {
  return context
    .path("/special-words/parameters/return")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { return: returnParam },
    });
}

export async function _parametersWithReturnDeserialize(
  result: ParametersWithReturn204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function parametersWithReturn(
  context: Client,
  returnParam: string,
  options: ParametersWithReturnOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _parametersWithReturnSend(context, returnParam, options);
  return _parametersWithReturnDeserialize(result);
}

export function _parametersWithTrySend(
  context: Client,
  tryParam: string,
  options: ParametersWithTryOptionalParams = { requestOptions: {} },
): StreamableMethod<ParametersWithTry204Response> {
  return context
    .path("/special-words/parameters/try")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { try: tryParam },
    });
}

export async function _parametersWithTryDeserialize(
  result: ParametersWithTry204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function parametersWithTry(
  context: Client,
  tryParam: string,
  options: ParametersWithTryOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _parametersWithTrySend(context, tryParam, options);
  return _parametersWithTryDeserialize(result);
}

export function _parametersWithWhileSend(
  context: Client,
  whileParam: string,
  options: ParametersWithWhileOptionalParams = { requestOptions: {} },
): StreamableMethod<ParametersWithWhile204Response> {
  return context
    .path("/special-words/parameters/while")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { while: whileParam },
    });
}

export async function _parametersWithWhileDeserialize(
  result: ParametersWithWhile204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function parametersWithWhile(
  context: Client,
  whileParam: string,
  options: ParametersWithWhileOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _parametersWithWhileSend(context, whileParam, options);
  return _parametersWithWhileDeserialize(result);
}

export function _parametersWithWithSend(
  context: Client,
  withParam: string,
  options: ParametersWithWithOptionalParams = { requestOptions: {} },
): StreamableMethod<ParametersWithWith204Response> {
  return context
    .path("/special-words/parameters/with")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { with: withParam },
    });
}

export async function _parametersWithWithDeserialize(
  result: ParametersWithWith204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function parametersWithWith(
  context: Client,
  withParam: string,
  options: ParametersWithWithOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _parametersWithWithSend(context, withParam, options);
  return _parametersWithWithDeserialize(result);
}

export function _parametersWithYieldSend(
  context: Client,
  yieldParam: string,
  options: ParametersWithYieldOptionalParams = { requestOptions: {} },
): StreamableMethod<ParametersWithYield204Response> {
  return context
    .path("/special-words/parameters/yield")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { yield: yieldParam },
    });
}

export async function _parametersWithYieldDeserialize(
  result: ParametersWithYield204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function parametersWithYield(
  context: Client,
  yieldParam: string,
  options: ParametersWithYieldOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _parametersWithYieldSend(context, yieldParam, options);
  return _parametersWithYieldDeserialize(result);
}

export function _parametersWithCancellationTokenSend(
  context: Client,
  cancellationToken: string,
  options: ParametersWithCancellationTokenOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<ParametersWithCancellationToken204Response> {
  return context
    .path("/special-words/parameters/cancellationToken")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { cancellationToken: cancellationToken },
    });
}

export async function _parametersWithCancellationTokenDeserialize(
  result: ParametersWithCancellationToken204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function parametersWithCancellationToken(
  context: Client,
  cancellationToken: string,
  options: ParametersWithCancellationTokenOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _parametersWithCancellationTokenSend(
    context,
    cancellationToken,
    options,
  );
  return _parametersWithCancellationTokenDeserialize(result);
}
