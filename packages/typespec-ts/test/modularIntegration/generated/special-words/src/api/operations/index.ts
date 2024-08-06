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
  OperationsAndOptionalParams,
  OperationsAsOptionalParams,
  OperationsAssertOptionalParams,
  OperationsAsyncOptionalParams,
  OperationsAwaitOptionalParams,
  OperationsBreakOptionalParams,
  OperationsClassOptionalParams,
  OperationsConstructorOptionalParams,
  OperationsContinueOptionalParams,
  OperationsDefOptionalParams,
  OperationsDelOptionalParams,
  OperationsElifOptionalParams,
  OperationsElseOptionalParams,
  OperationsExceptOptionalParams,
  OperationsExecOptionalParams,
  OperationsFinallyOptionalParams,
  OperationsForOptionalParams,
  OperationsFromOptionalParams,
  OperationsGlobalOptionalParams,
  OperationsIfOptionalParams,
  OperationsImportOptionalParams,
  OperationsInOptionalParams,
  OperationsIsOptionalParams,
  OperationsLambdaOptionalParams,
  OperationsNotOptionalParams,
  OperationsOrOptionalParams,
  OperationsPassOptionalParams,
  OperationsRaiseOptionalParams,
  OperationsReturnOptionalParams,
  OperationsTryOptionalParams,
  OperationsWhileOptionalParams,
  OperationsWithOptionalParams,
  OperationsYieldOptionalParams,
} from "../../models/options.js";

export function _operationsAndSend(
  context: Client,
  options: OperationsAndOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/operations/and")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsAndDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function operationsAnd(
  context: Client,
  options: OperationsAndOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _operationsAndSend(context, options);
  return _operationsAndDeserialize(result);
}

export function _operationsAsSend(
  context: Client,
  options: OperationsAsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/operations/as")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsAsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function operationsAs(
  context: Client,
  options: OperationsAsOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _operationsAsSend(context, options);
  return _operationsAsDeserialize(result);
}

export function _operationsAssertSend(
  context: Client,
  options: OperationsAssertOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/operations/assert")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsAssertDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function operationsAssert(
  context: Client,
  options: OperationsAssertOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _operationsAssertSend(context, options);
  return _operationsAssertDeserialize(result);
}

export function _operationsAsyncSend(
  context: Client,
  options: OperationsAsyncOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/operations/async")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsAsyncDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function operationsAsync(
  context: Client,
  options: OperationsAsyncOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _operationsAsyncSend(context, options);
  return _operationsAsyncDeserialize(result);
}

export function _operationsAwaitSend(
  context: Client,
  options: OperationsAwaitOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/operations/await")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsAwaitDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function operationsAwait(
  context: Client,
  options: OperationsAwaitOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _operationsAwaitSend(context, options);
  return _operationsAwaitDeserialize(result);
}

export function _operationsBreakSend(
  context: Client,
  options: OperationsBreakOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/operations/break")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsBreakDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function operationsBreak(
  context: Client,
  options: OperationsBreakOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _operationsBreakSend(context, options);
  return _operationsBreakDeserialize(result);
}

export function _operationsClassSend(
  context: Client,
  options: OperationsClassOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/operations/class")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsClassDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function operationsClass(
  context: Client,
  options: OperationsClassOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _operationsClassSend(context, options);
  return _operationsClassDeserialize(result);
}

export function _operationsConstructorSend(
  context: Client,
  options: OperationsConstructorOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/operations/constructor")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsConstructorDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function operationsConstructor(
  context: Client,
  options: OperationsConstructorOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _operationsConstructorSend(context, options);
  return _operationsConstructorDeserialize(result);
}

export function _operationsContinueSend(
  context: Client,
  options: OperationsContinueOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/operations/continue")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsContinueDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function operationsContinue(
  context: Client,
  options: OperationsContinueOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _operationsContinueSend(context, options);
  return _operationsContinueDeserialize(result);
}

export function _operationsDefSend(
  context: Client,
  options: OperationsDefOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/operations/def")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsDefDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function operationsDef(
  context: Client,
  options: OperationsDefOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _operationsDefSend(context, options);
  return _operationsDefDeserialize(result);
}

export function _operationsDelSend(
  context: Client,
  options: OperationsDelOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/operations/del")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsDelDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function operationsDel(
  context: Client,
  options: OperationsDelOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _operationsDelSend(context, options);
  return _operationsDelDeserialize(result);
}

export function _operationsElifSend(
  context: Client,
  options: OperationsElifOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/operations/elif")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsElifDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function operationsElif(
  context: Client,
  options: OperationsElifOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _operationsElifSend(context, options);
  return _operationsElifDeserialize(result);
}

export function _operationsElseSend(
  context: Client,
  options: OperationsElseOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/operations/else")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsElseDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function operationsElse(
  context: Client,
  options: OperationsElseOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _operationsElseSend(context, options);
  return _operationsElseDeserialize(result);
}

export function _operationsExceptSend(
  context: Client,
  options: OperationsExceptOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/operations/except")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsExceptDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function operationsExcept(
  context: Client,
  options: OperationsExceptOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _operationsExceptSend(context, options);
  return _operationsExceptDeserialize(result);
}

export function _operationsExecSend(
  context: Client,
  options: OperationsExecOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/operations/exec")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsExecDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function operationsExec(
  context: Client,
  options: OperationsExecOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _operationsExecSend(context, options);
  return _operationsExecDeserialize(result);
}

export function _operationsFinallySend(
  context: Client,
  options: OperationsFinallyOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/operations/finally")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsFinallyDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function operationsFinally(
  context: Client,
  options: OperationsFinallyOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _operationsFinallySend(context, options);
  return _operationsFinallyDeserialize(result);
}

export function _operationsForSend(
  context: Client,
  options: OperationsForOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/operations/for")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsForDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function operationsFor(
  context: Client,
  options: OperationsForOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _operationsForSend(context, options);
  return _operationsForDeserialize(result);
}

export function _operationsFromSend(
  context: Client,
  options: OperationsFromOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/operations/from")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsFromDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function operationsFrom(
  context: Client,
  options: OperationsFromOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _operationsFromSend(context, options);
  return _operationsFromDeserialize(result);
}

export function _operationsGlobalSend(
  context: Client,
  options: OperationsGlobalOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/operations/global")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsGlobalDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function operationsGlobal(
  context: Client,
  options: OperationsGlobalOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _operationsGlobalSend(context, options);
  return _operationsGlobalDeserialize(result);
}

export function _operationsIfSend(
  context: Client,
  options: OperationsIfOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/operations/if")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsIfDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function operationsIf(
  context: Client,
  options: OperationsIfOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _operationsIfSend(context, options);
  return _operationsIfDeserialize(result);
}

export function _operationsImportSend(
  context: Client,
  options: OperationsImportOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/operations/import")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsImportDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function operationsImport(
  context: Client,
  options: OperationsImportOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _operationsImportSend(context, options);
  return _operationsImportDeserialize(result);
}

export function _operationsInSend(
  context: Client,
  options: OperationsInOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/operations/in")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsInDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function operationsIn(
  context: Client,
  options: OperationsInOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _operationsInSend(context, options);
  return _operationsInDeserialize(result);
}

export function _operationsIsSend(
  context: Client,
  options: OperationsIsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/operations/is")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsIsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function operationsIs(
  context: Client,
  options: OperationsIsOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _operationsIsSend(context, options);
  return _operationsIsDeserialize(result);
}

export function _operationsLambdaSend(
  context: Client,
  options: OperationsLambdaOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/operations/lambda")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsLambdaDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function operationsLambda(
  context: Client,
  options: OperationsLambdaOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _operationsLambdaSend(context, options);
  return _operationsLambdaDeserialize(result);
}

export function _operationsNotSend(
  context: Client,
  options: OperationsNotOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/operations/not")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsNotDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function operationsNot(
  context: Client,
  options: OperationsNotOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _operationsNotSend(context, options);
  return _operationsNotDeserialize(result);
}

export function _operationsOrSend(
  context: Client,
  options: OperationsOrOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/operations/or")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsOrDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function operationsOr(
  context: Client,
  options: OperationsOrOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _operationsOrSend(context, options);
  return _operationsOrDeserialize(result);
}

export function _operationsPassSend(
  context: Client,
  options: OperationsPassOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/operations/pass")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsPassDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function operationsPass(
  context: Client,
  options: OperationsPassOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _operationsPassSend(context, options);
  return _operationsPassDeserialize(result);
}

export function _operationsRaiseSend(
  context: Client,
  options: OperationsRaiseOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/operations/raise")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsRaiseDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function operationsRaise(
  context: Client,
  options: OperationsRaiseOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _operationsRaiseSend(context, options);
  return _operationsRaiseDeserialize(result);
}

export function _operationsReturnSend(
  context: Client,
  options: OperationsReturnOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/operations/return")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsReturnDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function operationsReturn(
  context: Client,
  options: OperationsReturnOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _operationsReturnSend(context, options);
  return _operationsReturnDeserialize(result);
}

export function _operationsTrySend(
  context: Client,
  options: OperationsTryOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/operations/try")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsTryDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function operationsTry(
  context: Client,
  options: OperationsTryOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _operationsTrySend(context, options);
  return _operationsTryDeserialize(result);
}

export function _operationsWhileSend(
  context: Client,
  options: OperationsWhileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/operations/while")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsWhileDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function operationsWhile(
  context: Client,
  options: OperationsWhileOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _operationsWhileSend(context, options);
  return _operationsWhileDeserialize(result);
}

export function _operationsWithSend(
  context: Client,
  options: OperationsWithOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/operations/with")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsWithDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function operationsWith(
  context: Client,
  options: OperationsWithOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _operationsWithSend(context, options);
  return _operationsWithDeserialize(result);
}

export function _operationsYieldSend(
  context: Client,
  options: OperationsYieldOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-words/operations/yield")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsYieldDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function operationsYield(
  context: Client,
  options: OperationsYieldOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _operationsYieldSend(context, options);
  return _operationsYieldDeserialize(result);
}
