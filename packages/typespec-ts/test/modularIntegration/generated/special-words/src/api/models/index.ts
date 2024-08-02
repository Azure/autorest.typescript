// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

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
import { SpecialWordsContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
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
} from "../../models/options.js";

export function _modelsWithAndSend(
  context: Client,
  body: And,
  options: ModelsWithAndOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/models/and")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithAndDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithAnd(
  context: Client,
  body: And,
  options: ModelsWithAndOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithAndSend(context, body, options);
  return _modelsWithAndDeserialize(result);
}

export function _modelsWithAsSend(
  context: Client,
  body: As,
  options: ModelsWithAsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/models/as")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithAsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithAs(
  context: Client,
  body: As,
  options: ModelsWithAsOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithAsSend(context, body, options);
  return _modelsWithAsDeserialize(result);
}

export function _modelsWithAssertSend(
  context: Client,
  body: Assert,
  options: ModelsWithAssertOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/models/assert")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithAssertDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithAssert(
  context: Client,
  body: Assert,
  options: ModelsWithAssertOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithAssertSend(context, body, options);
  return _modelsWithAssertDeserialize(result);
}

export function _modelsWithAsyncSend(
  context: Client,
  body: Async,
  options: ModelsWithAsyncOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/models/async")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithAsyncDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithAsync(
  context: Client,
  body: Async,
  options: ModelsWithAsyncOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithAsyncSend(context, body, options);
  return _modelsWithAsyncDeserialize(result);
}

export function _modelsWithAwaitSend(
  context: Client,
  body: Await,
  options: ModelsWithAwaitOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/models/await")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithAwaitDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithAwait(
  context: Client,
  body: Await,
  options: ModelsWithAwaitOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithAwaitSend(context, body, options);
  return _modelsWithAwaitDeserialize(result);
}

export function _modelsWithBreakSend(
  context: Client,
  body: Break,
  options: ModelsWithBreakOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/models/break")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithBreakDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithBreak(
  context: Client,
  body: Break,
  options: ModelsWithBreakOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithBreakSend(context, body, options);
  return _modelsWithBreakDeserialize(result);
}

export function _modelsWithClassSend(
  context: Client,
  body: Class,
  options: ModelsWithClassOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/models/class")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithClassDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithClass(
  context: Client,
  body: Class,
  options: ModelsWithClassOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithClassSend(context, body, options);
  return _modelsWithClassDeserialize(result);
}

export function _modelsWithConstructorSend(
  context: Client,
  body: Constructor,
  options: ModelsWithConstructorOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/models/constructor")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithConstructorDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithConstructor(
  context: Client,
  body: Constructor,
  options: ModelsWithConstructorOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithConstructorSend(context, body, options);
  return _modelsWithConstructorDeserialize(result);
}

export function _modelsWithContinueSend(
  context: Client,
  body: Continue,
  options: ModelsWithContinueOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/models/continue")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithContinueDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithContinue(
  context: Client,
  body: Continue,
  options: ModelsWithContinueOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithContinueSend(context, body, options);
  return _modelsWithContinueDeserialize(result);
}

export function _modelsWithDefSend(
  context: Client,
  body: Def,
  options: ModelsWithDefOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/models/def")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithDefDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithDef(
  context: Client,
  body: Def,
  options: ModelsWithDefOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithDefSend(context, body, options);
  return _modelsWithDefDeserialize(result);
}

export function _modelsWithDelSend(
  context: Client,
  body: Del,
  options: ModelsWithDelOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/models/del")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithDelDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithDel(
  context: Client,
  body: Del,
  options: ModelsWithDelOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithDelSend(context, body, options);
  return _modelsWithDelDeserialize(result);
}

export function _modelsWithElifSend(
  context: Client,
  body: Elif,
  options: ModelsWithElifOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/models/elif")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithElifDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithElif(
  context: Client,
  body: Elif,
  options: ModelsWithElifOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithElifSend(context, body, options);
  return _modelsWithElifDeserialize(result);
}

export function _modelsWithElseSend(
  context: Client,
  body: Else,
  options: ModelsWithElseOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/models/else")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithElseDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithElse(
  context: Client,
  body: Else,
  options: ModelsWithElseOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithElseSend(context, body, options);
  return _modelsWithElseDeserialize(result);
}

export function _modelsWithExceptSend(
  context: Client,
  body: Except,
  options: ModelsWithExceptOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/models/except")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithExceptDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithExcept(
  context: Client,
  body: Except,
  options: ModelsWithExceptOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithExceptSend(context, body, options);
  return _modelsWithExceptDeserialize(result);
}

export function _modelsWithExecSend(
  context: Client,
  body: Exec,
  options: ModelsWithExecOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/models/exec")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithExecDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithExec(
  context: Client,
  body: Exec,
  options: ModelsWithExecOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithExecSend(context, body, options);
  return _modelsWithExecDeserialize(result);
}

export function _modelsWithFinallySend(
  context: Client,
  body: Finally,
  options: ModelsWithFinallyOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/models/finally")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithFinallyDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithFinally(
  context: Client,
  body: Finally,
  options: ModelsWithFinallyOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithFinallySend(context, body, options);
  return _modelsWithFinallyDeserialize(result);
}

export function _modelsWithForSend(
  context: Client,
  body: For,
  options: ModelsWithForOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/models/for")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithForDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithFor(
  context: Client,
  body: For,
  options: ModelsWithForOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithForSend(context, body, options);
  return _modelsWithForDeserialize(result);
}

export function _modelsWithFromSend(
  context: Client,
  body: From,
  options: ModelsWithFromOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/models/from")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithFromDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithFrom(
  context: Client,
  body: From,
  options: ModelsWithFromOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithFromSend(context, body, options);
  return _modelsWithFromDeserialize(result);
}

export function _modelsWithGlobalSend(
  context: Client,
  body: Global,
  options: ModelsWithGlobalOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/models/global")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithGlobalDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithGlobal(
  context: Client,
  body: Global,
  options: ModelsWithGlobalOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithGlobalSend(context, body, options);
  return _modelsWithGlobalDeserialize(result);
}

export function _modelsWithIfSend(
  context: Client,
  body: If,
  options: ModelsWithIfOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/models/if")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithIfDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithIf(
  context: Client,
  body: If,
  options: ModelsWithIfOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithIfSend(context, body, options);
  return _modelsWithIfDeserialize(result);
}

export function _modelsWithImportSend(
  context: Client,
  body: Import,
  options: ModelsWithImportOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/models/import")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithImportDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithImport(
  context: Client,
  body: Import,
  options: ModelsWithImportOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithImportSend(context, body, options);
  return _modelsWithImportDeserialize(result);
}

export function _modelsWithInSend(
  context: Client,
  body: In,
  options: ModelsWithInOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/models/in")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithInDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithIn(
  context: Client,
  body: In,
  options: ModelsWithInOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithInSend(context, body, options);
  return _modelsWithInDeserialize(result);
}

export function _modelsWithIsSend(
  context: Client,
  body: Is,
  options: ModelsWithIsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/models/is")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithIsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithIs(
  context: Client,
  body: Is,
  options: ModelsWithIsOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithIsSend(context, body, options);
  return _modelsWithIsDeserialize(result);
}

export function _modelsWithLambdaSend(
  context: Client,
  body: Lambda,
  options: ModelsWithLambdaOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/models/lambda")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithLambdaDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithLambda(
  context: Client,
  body: Lambda,
  options: ModelsWithLambdaOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithLambdaSend(context, body, options);
  return _modelsWithLambdaDeserialize(result);
}

export function _modelsWithNotSend(
  context: Client,
  body: Not,
  options: ModelsWithNotOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/models/not")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithNotDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithNot(
  context: Client,
  body: Not,
  options: ModelsWithNotOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithNotSend(context, body, options);
  return _modelsWithNotDeserialize(result);
}

export function _modelsWithOrSend(
  context: Client,
  body: Or,
  options: ModelsWithOrOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/models/or")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithOrDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithOr(
  context: Client,
  body: Or,
  options: ModelsWithOrOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithOrSend(context, body, options);
  return _modelsWithOrDeserialize(result);
}

export function _modelsWithPassSend(
  context: Client,
  body: Pass,
  options: ModelsWithPassOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/models/pass")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithPassDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithPass(
  context: Client,
  body: Pass,
  options: ModelsWithPassOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithPassSend(context, body, options);
  return _modelsWithPassDeserialize(result);
}

export function _modelsWithRaiseSend(
  context: Client,
  body: Raise,
  options: ModelsWithRaiseOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/models/raise")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithRaiseDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithRaise(
  context: Client,
  body: Raise,
  options: ModelsWithRaiseOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithRaiseSend(context, body, options);
  return _modelsWithRaiseDeserialize(result);
}

export function _modelsWithReturnSend(
  context: Client,
  body: Return,
  options: ModelsWithReturnOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/models/return")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithReturnDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithReturn(
  context: Client,
  body: Return,
  options: ModelsWithReturnOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithReturnSend(context, body, options);
  return _modelsWithReturnDeserialize(result);
}

export function _modelsWithTrySend(
  context: Client,
  body: Try,
  options: ModelsWithTryOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/models/try")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithTryDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithTry(
  context: Client,
  body: Try,
  options: ModelsWithTryOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithTrySend(context, body, options);
  return _modelsWithTryDeserialize(result);
}

export function _modelsWithWhileSend(
  context: Client,
  body: While,
  options: ModelsWithWhileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/models/while")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithWhileDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithWhile(
  context: Client,
  body: While,
  options: ModelsWithWhileOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithWhileSend(context, body, options);
  return _modelsWithWhileDeserialize(result);
}

export function _modelsWithWithSend(
  context: Client,
  body: With,
  options: ModelsWithWithOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/models/with")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithWithDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithWith(
  context: Client,
  body: With,
  options: ModelsWithWithOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithWithSend(context, body, options);
  return _modelsWithWithDeserialize(result);
}

export function _modelsWithYieldSend(
  context: Client,
  body: Yield,
  options: ModelsWithYieldOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/models/yield")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithYieldDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithYield(
  context: Client,
  body: Yield,
  options: ModelsWithYieldOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithYieldSend(context, body, options);
  return _modelsWithYieldDeserialize(result);
}
