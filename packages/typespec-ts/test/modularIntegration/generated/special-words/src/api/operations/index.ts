// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  OperationsAnd204Response,
  OperationsAs204Response,
  OperationsAssert204Response,
  OperationsAsync204Response,
  OperationsAwait204Response,
  OperationsBreak204Response,
  OperationsClass204Response,
  OperationsConstructor204Response,
  OperationsContinue204Response,
  OperationsDef204Response,
  OperationsDel204Response,
  OperationsElif204Response,
  OperationsElse204Response,
  OperationsExcept204Response,
  OperationsExec204Response,
  OperationsFinally204Response,
  OperationsFor204Response,
  OperationsFrom204Response,
  OperationsGlobal204Response,
  OperationsIf204Response,
  OperationsImport204Response,
  OperationsIn204Response,
  OperationsIs204Response,
  OperationsLambda204Response,
  OperationsNot204Response,
  OperationsOr204Response,
  OperationsPass204Response,
  OperationsRaise204Response,
  OperationsReturn204Response,
  OperationsTry204Response,
  OperationsWhile204Response,
  OperationsWith204Response,
  OperationsYield204Response,
  SpecialWordsContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
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
} from "../options.js";

export function _operationsAndSend(
  context: Client,
  options: OperationsAndOptionalParams = { requestOptions: {} },
): StreamableMethod<OperationsAnd204Response> {
  return context
    .path("/special-words/operations/and")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsAndDeserialize(
  result: OperationsAnd204Response,
): Promise<void> {
  if (result.status !== "204") {
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
): StreamableMethod<OperationsAs204Response> {
  return context
    .path("/special-words/operations/as")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsAsDeserialize(
  result: OperationsAs204Response,
): Promise<void> {
  if (result.status !== "204") {
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
): StreamableMethod<OperationsAssert204Response> {
  return context
    .path("/special-words/operations/assert")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsAssertDeserialize(
  result: OperationsAssert204Response,
): Promise<void> {
  if (result.status !== "204") {
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
): StreamableMethod<OperationsAsync204Response> {
  return context
    .path("/special-words/operations/async")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsAsyncDeserialize(
  result: OperationsAsync204Response,
): Promise<void> {
  if (result.status !== "204") {
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
): StreamableMethod<OperationsAwait204Response> {
  return context
    .path("/special-words/operations/await")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsAwaitDeserialize(
  result: OperationsAwait204Response,
): Promise<void> {
  if (result.status !== "204") {
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
): StreamableMethod<OperationsBreak204Response> {
  return context
    .path("/special-words/operations/break")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsBreakDeserialize(
  result: OperationsBreak204Response,
): Promise<void> {
  if (result.status !== "204") {
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
): StreamableMethod<OperationsClass204Response> {
  return context
    .path("/special-words/operations/class")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsClassDeserialize(
  result: OperationsClass204Response,
): Promise<void> {
  if (result.status !== "204") {
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
): StreamableMethod<OperationsConstructor204Response> {
  return context
    .path("/special-words/operations/constructor")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsConstructorDeserialize(
  result: OperationsConstructor204Response,
): Promise<void> {
  if (result.status !== "204") {
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
): StreamableMethod<OperationsContinue204Response> {
  return context
    .path("/special-words/operations/continue")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsContinueDeserialize(
  result: OperationsContinue204Response,
): Promise<void> {
  if (result.status !== "204") {
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
): StreamableMethod<OperationsDef204Response> {
  return context
    .path("/special-words/operations/def")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsDefDeserialize(
  result: OperationsDef204Response,
): Promise<void> {
  if (result.status !== "204") {
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
): StreamableMethod<OperationsDel204Response> {
  return context
    .path("/special-words/operations/del")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsDelDeserialize(
  result: OperationsDel204Response,
): Promise<void> {
  if (result.status !== "204") {
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
): StreamableMethod<OperationsElif204Response> {
  return context
    .path("/special-words/operations/elif")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsElifDeserialize(
  result: OperationsElif204Response,
): Promise<void> {
  if (result.status !== "204") {
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
): StreamableMethod<OperationsElse204Response> {
  return context
    .path("/special-words/operations/else")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsElseDeserialize(
  result: OperationsElse204Response,
): Promise<void> {
  if (result.status !== "204") {
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
): StreamableMethod<OperationsExcept204Response> {
  return context
    .path("/special-words/operations/except")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsExceptDeserialize(
  result: OperationsExcept204Response,
): Promise<void> {
  if (result.status !== "204") {
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
): StreamableMethod<OperationsExec204Response> {
  return context
    .path("/special-words/operations/exec")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsExecDeserialize(
  result: OperationsExec204Response,
): Promise<void> {
  if (result.status !== "204") {
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
): StreamableMethod<OperationsFinally204Response> {
  return context
    .path("/special-words/operations/finally")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsFinallyDeserialize(
  result: OperationsFinally204Response,
): Promise<void> {
  if (result.status !== "204") {
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
): StreamableMethod<OperationsFor204Response> {
  return context
    .path("/special-words/operations/for")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsForDeserialize(
  result: OperationsFor204Response,
): Promise<void> {
  if (result.status !== "204") {
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
): StreamableMethod<OperationsFrom204Response> {
  return context
    .path("/special-words/operations/from")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsFromDeserialize(
  result: OperationsFrom204Response,
): Promise<void> {
  if (result.status !== "204") {
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
): StreamableMethod<OperationsGlobal204Response> {
  return context
    .path("/special-words/operations/global")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsGlobalDeserialize(
  result: OperationsGlobal204Response,
): Promise<void> {
  if (result.status !== "204") {
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
): StreamableMethod<OperationsIf204Response> {
  return context
    .path("/special-words/operations/if")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsIfDeserialize(
  result: OperationsIf204Response,
): Promise<void> {
  if (result.status !== "204") {
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
): StreamableMethod<OperationsImport204Response> {
  return context
    .path("/special-words/operations/import")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsImportDeserialize(
  result: OperationsImport204Response,
): Promise<void> {
  if (result.status !== "204") {
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
): StreamableMethod<OperationsIn204Response> {
  return context
    .path("/special-words/operations/in")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsInDeserialize(
  result: OperationsIn204Response,
): Promise<void> {
  if (result.status !== "204") {
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
): StreamableMethod<OperationsIs204Response> {
  return context
    .path("/special-words/operations/is")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsIsDeserialize(
  result: OperationsIs204Response,
): Promise<void> {
  if (result.status !== "204") {
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
): StreamableMethod<OperationsLambda204Response> {
  return context
    .path("/special-words/operations/lambda")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsLambdaDeserialize(
  result: OperationsLambda204Response,
): Promise<void> {
  if (result.status !== "204") {
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
): StreamableMethod<OperationsNot204Response> {
  return context
    .path("/special-words/operations/not")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsNotDeserialize(
  result: OperationsNot204Response,
): Promise<void> {
  if (result.status !== "204") {
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
): StreamableMethod<OperationsOr204Response> {
  return context
    .path("/special-words/operations/or")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsOrDeserialize(
  result: OperationsOr204Response,
): Promise<void> {
  if (result.status !== "204") {
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
): StreamableMethod<OperationsPass204Response> {
  return context
    .path("/special-words/operations/pass")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsPassDeserialize(
  result: OperationsPass204Response,
): Promise<void> {
  if (result.status !== "204") {
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
): StreamableMethod<OperationsRaise204Response> {
  return context
    .path("/special-words/operations/raise")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsRaiseDeserialize(
  result: OperationsRaise204Response,
): Promise<void> {
  if (result.status !== "204") {
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
): StreamableMethod<OperationsReturn204Response> {
  return context
    .path("/special-words/operations/return")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsReturnDeserialize(
  result: OperationsReturn204Response,
): Promise<void> {
  if (result.status !== "204") {
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
): StreamableMethod<OperationsTry204Response> {
  return context
    .path("/special-words/operations/try")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsTryDeserialize(
  result: OperationsTry204Response,
): Promise<void> {
  if (result.status !== "204") {
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
): StreamableMethod<OperationsWhile204Response> {
  return context
    .path("/special-words/operations/while")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsWhileDeserialize(
  result: OperationsWhile204Response,
): Promise<void> {
  if (result.status !== "204") {
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
): StreamableMethod<OperationsWith204Response> {
  return context
    .path("/special-words/operations/with")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsWithDeserialize(
  result: OperationsWith204Response,
): Promise<void> {
  if (result.status !== "204") {
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
): StreamableMethod<OperationsYield204Response> {
  return context
    .path("/special-words/operations/yield")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationsYieldDeserialize(
  result: OperationsYield204Response,
): Promise<void> {
  if (result.status !== "204") {
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
