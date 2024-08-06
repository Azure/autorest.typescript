// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SpecialWordsContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
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
): StreamableMethod {
  return context
    .path("/special-words/parameters/and")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { and: and },
    });
}

export async function _parametersWithAndDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/special-words/parameters/as")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { as: asParam },
    });
}

export async function _parametersWithAsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/special-words/parameters/assert")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { assert: assertParam },
    });
}

export async function _parametersWithAssertDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/special-words/parameters/async")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { async: asyncParam },
    });
}

export async function _parametersWithAsyncDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/special-words/parameters/await")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { await: awaitParam },
    });
}

export async function _parametersWithAwaitDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/special-words/parameters/break")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { break: breakParam },
    });
}

export async function _parametersWithBreakDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/special-words/parameters/class")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { class: classParam },
    });
}

export async function _parametersWithClassDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/special-words/parameters/constructor")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { constructor: constructorParam as any },
    });
}

export async function _parametersWithConstructorDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/special-words/parameters/continue")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { continue: continueParam },
    });
}

export async function _parametersWithContinueDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/special-words/parameters/def")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { def: def },
    });
}

export async function _parametersWithDefDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/special-words/parameters/del")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { del: del },
    });
}

export async function _parametersWithDelDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/special-words/parameters/elif")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { elif: elif },
    });
}

export async function _parametersWithElifDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/special-words/parameters/else")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { else: elseParam },
    });
}

export async function _parametersWithElseDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/special-words/parameters/except")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { except: except },
    });
}

export async function _parametersWithExceptDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/special-words/parameters/exec")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { exec: exec },
    });
}

export async function _parametersWithExecDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/special-words/parameters/finally")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { finally: finallyParam },
    });
}

export async function _parametersWithFinallyDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/special-words/parameters/for")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { for: forParam },
    });
}

export async function _parametersWithForDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/special-words/parameters/from")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { from: fromParam },
    });
}

export async function _parametersWithFromDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/special-words/parameters/global")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { global: global },
    });
}

export async function _parametersWithGlobalDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/special-words/parameters/if")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { if: ifParam },
    });
}

export async function _parametersWithIfDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/special-words/parameters/import")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { import: importParam },
    });
}

export async function _parametersWithImportDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/special-words/parameters/in")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { in: inParam },
    });
}

export async function _parametersWithInDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/special-words/parameters/is")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { is: is },
    });
}

export async function _parametersWithIsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/special-words/parameters/lambda")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { lambda: lambda },
    });
}

export async function _parametersWithLambdaDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/special-words/parameters/not")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { not: not },
    });
}

export async function _parametersWithNotDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/special-words/parameters/or")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { or: or },
    });
}

export async function _parametersWithOrDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/special-words/parameters/pass")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { pass: pass },
    });
}

export async function _parametersWithPassDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/special-words/parameters/raise")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { raise: raise },
    });
}

export async function _parametersWithRaiseDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/special-words/parameters/return")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { return: returnParam },
    });
}

export async function _parametersWithReturnDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/special-words/parameters/try")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { try: tryParam },
    });
}

export async function _parametersWithTryDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/special-words/parameters/while")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { while: whileParam },
    });
}

export async function _parametersWithWhileDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/special-words/parameters/with")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { with: withParam },
    });
}

export async function _parametersWithWithDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/special-words/parameters/yield")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { yield: yieldParam },
    });
}

export async function _parametersWithYieldDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/special-words/parameters/cancellationToken")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { cancellationToken: cancellationToken },
    });
}

export async function _parametersWithCancellationTokenDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
