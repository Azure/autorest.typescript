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
import {
  ModelsWithAnd204Response,
  ModelsWithAs204Response,
  ModelsWithAssert204Response,
  ModelsWithAsync204Response,
  ModelsWithAwait204Response,
  ModelsWithBreak204Response,
  ModelsWithClass204Response,
  ModelsWithConstructor204Response,
  ModelsWithContinue204Response,
  ModelsWithDef204Response,
  ModelsWithDel204Response,
  ModelsWithElif204Response,
  ModelsWithElse204Response,
  ModelsWithExcept204Response,
  ModelsWithExec204Response,
  ModelsWithFinally204Response,
  ModelsWithFor204Response,
  ModelsWithFrom204Response,
  ModelsWithGlobal204Response,
  ModelsWithIf204Response,
  ModelsWithImport204Response,
  ModelsWithIn204Response,
  ModelsWithIs204Response,
  ModelsWithLambda204Response,
  ModelsWithNot204Response,
  ModelsWithOr204Response,
  ModelsWithPass204Response,
  ModelsWithRaise204Response,
  ModelsWithReturn204Response,
  ModelsWithTry204Response,
  ModelsWithWhile204Response,
  ModelsWithWith204Response,
  ModelsWithYield204Response,
  SpecialWordsContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
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

export function _modelsWithAndSend(
  context: Client,
  body: And,
  options: ModelsWithAndOptions = { requestOptions: {} },
): StreamableMethod<ModelsWithAnd204Response> {
  return context
    .path("/special-words/models/and")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithAndDeserialize(
  result: ModelsWithAnd204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithAnd(
  context: Client,
  body: And,
  options: ModelsWithAndOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithAndSend(context, body, options);
  return _modelsWithAndDeserialize(result);
}

export function _modelsWithAsSend(
  context: Client,
  body: As,
  options: ModelsWithAsOptions = { requestOptions: {} },
): StreamableMethod<ModelsWithAs204Response> {
  return context
    .path("/special-words/models/as")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithAsDeserialize(
  result: ModelsWithAs204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithAs(
  context: Client,
  body: As,
  options: ModelsWithAsOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithAsSend(context, body, options);
  return _modelsWithAsDeserialize(result);
}

export function _modelsWithAssertSend(
  context: Client,
  body: Assert,
  options: ModelsWithAssertOptions = { requestOptions: {} },
): StreamableMethod<ModelsWithAssert204Response> {
  return context
    .path("/special-words/models/assert")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithAssertDeserialize(
  result: ModelsWithAssert204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithAssert(
  context: Client,
  body: Assert,
  options: ModelsWithAssertOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithAssertSend(context, body, options);
  return _modelsWithAssertDeserialize(result);
}

export function _modelsWithAsyncSend(
  context: Client,
  body: Async,
  options: ModelsWithAsyncOptions = { requestOptions: {} },
): StreamableMethod<ModelsWithAsync204Response> {
  return context
    .path("/special-words/models/async")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithAsyncDeserialize(
  result: ModelsWithAsync204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithAsync(
  context: Client,
  body: Async,
  options: ModelsWithAsyncOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithAsyncSend(context, body, options);
  return _modelsWithAsyncDeserialize(result);
}

export function _modelsWithAwaitSend(
  context: Client,
  body: Await,
  options: ModelsWithAwaitOptions = { requestOptions: {} },
): StreamableMethod<ModelsWithAwait204Response> {
  return context
    .path("/special-words/models/await")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithAwaitDeserialize(
  result: ModelsWithAwait204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithAwait(
  context: Client,
  body: Await,
  options: ModelsWithAwaitOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithAwaitSend(context, body, options);
  return _modelsWithAwaitDeserialize(result);
}

export function _modelsWithBreakSend(
  context: Client,
  body: Break,
  options: ModelsWithBreakOptions = { requestOptions: {} },
): StreamableMethod<ModelsWithBreak204Response> {
  return context
    .path("/special-words/models/break")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithBreakDeserialize(
  result: ModelsWithBreak204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithBreak(
  context: Client,
  body: Break,
  options: ModelsWithBreakOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithBreakSend(context, body, options);
  return _modelsWithBreakDeserialize(result);
}

export function _modelsWithClassSend(
  context: Client,
  body: Class,
  options: ModelsWithClassOptions = { requestOptions: {} },
): StreamableMethod<ModelsWithClass204Response> {
  return context
    .path("/special-words/models/class")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithClassDeserialize(
  result: ModelsWithClass204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithClass(
  context: Client,
  body: Class,
  options: ModelsWithClassOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithClassSend(context, body, options);
  return _modelsWithClassDeserialize(result);
}

export function _modelsWithConstructorSend(
  context: Client,
  body: Constructor,
  options: ModelsWithConstructorOptions = { requestOptions: {} },
): StreamableMethod<ModelsWithConstructor204Response> {
  return context
    .path("/special-words/models/constructor")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithConstructorDeserialize(
  result: ModelsWithConstructor204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithConstructor(
  context: Client,
  body: Constructor,
  options: ModelsWithConstructorOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithConstructorSend(context, body, options);
  return _modelsWithConstructorDeserialize(result);
}

export function _modelsWithContinueSend(
  context: Client,
  body: Continue,
  options: ModelsWithContinueOptions = { requestOptions: {} },
): StreamableMethod<ModelsWithContinue204Response> {
  return context
    .path("/special-words/models/continue")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithContinueDeserialize(
  result: ModelsWithContinue204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithContinue(
  context: Client,
  body: Continue,
  options: ModelsWithContinueOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithContinueSend(context, body, options);
  return _modelsWithContinueDeserialize(result);
}

export function _modelsWithDefSend(
  context: Client,
  body: Def,
  options: ModelsWithDefOptions = { requestOptions: {} },
): StreamableMethod<ModelsWithDef204Response> {
  return context
    .path("/special-words/models/def")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithDefDeserialize(
  result: ModelsWithDef204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithDef(
  context: Client,
  body: Def,
  options: ModelsWithDefOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithDefSend(context, body, options);
  return _modelsWithDefDeserialize(result);
}

export function _modelsWithDelSend(
  context: Client,
  body: Del,
  options: ModelsWithDelOptions = { requestOptions: {} },
): StreamableMethod<ModelsWithDel204Response> {
  return context
    .path("/special-words/models/del")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithDelDeserialize(
  result: ModelsWithDel204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithDel(
  context: Client,
  body: Del,
  options: ModelsWithDelOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithDelSend(context, body, options);
  return _modelsWithDelDeserialize(result);
}

export function _modelsWithElifSend(
  context: Client,
  body: Elif,
  options: ModelsWithElifOptions = { requestOptions: {} },
): StreamableMethod<ModelsWithElif204Response> {
  return context
    .path("/special-words/models/elif")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithElifDeserialize(
  result: ModelsWithElif204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithElif(
  context: Client,
  body: Elif,
  options: ModelsWithElifOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithElifSend(context, body, options);
  return _modelsWithElifDeserialize(result);
}

export function _modelsWithElseSend(
  context: Client,
  body: Else,
  options: ModelsWithElseOptions = { requestOptions: {} },
): StreamableMethod<ModelsWithElse204Response> {
  return context
    .path("/special-words/models/else")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithElseDeserialize(
  result: ModelsWithElse204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithElse(
  context: Client,
  body: Else,
  options: ModelsWithElseOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithElseSend(context, body, options);
  return _modelsWithElseDeserialize(result);
}

export function _modelsWithExceptSend(
  context: Client,
  body: Except,
  options: ModelsWithExceptOptions = { requestOptions: {} },
): StreamableMethod<ModelsWithExcept204Response> {
  return context
    .path("/special-words/models/except")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithExceptDeserialize(
  result: ModelsWithExcept204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithExcept(
  context: Client,
  body: Except,
  options: ModelsWithExceptOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithExceptSend(context, body, options);
  return _modelsWithExceptDeserialize(result);
}

export function _modelsWithExecSend(
  context: Client,
  body: Exec,
  options: ModelsWithExecOptions = { requestOptions: {} },
): StreamableMethod<ModelsWithExec204Response> {
  return context
    .path("/special-words/models/exec")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithExecDeserialize(
  result: ModelsWithExec204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithExec(
  context: Client,
  body: Exec,
  options: ModelsWithExecOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithExecSend(context, body, options);
  return _modelsWithExecDeserialize(result);
}

export function _modelsWithFinallySend(
  context: Client,
  body: Finally,
  options: ModelsWithFinallyOptions = { requestOptions: {} },
): StreamableMethod<ModelsWithFinally204Response> {
  return context
    .path("/special-words/models/finally")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithFinallyDeserialize(
  result: ModelsWithFinally204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithFinally(
  context: Client,
  body: Finally,
  options: ModelsWithFinallyOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithFinallySend(context, body, options);
  return _modelsWithFinallyDeserialize(result);
}

export function _modelsWithForSend(
  context: Client,
  body: For,
  options: ModelsWithForOptions = { requestOptions: {} },
): StreamableMethod<ModelsWithFor204Response> {
  return context
    .path("/special-words/models/for")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithForDeserialize(
  result: ModelsWithFor204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithFor(
  context: Client,
  body: For,
  options: ModelsWithForOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithForSend(context, body, options);
  return _modelsWithForDeserialize(result);
}

export function _modelsWithFromSend(
  context: Client,
  body: From,
  options: ModelsWithFromOptions = { requestOptions: {} },
): StreamableMethod<ModelsWithFrom204Response> {
  return context
    .path("/special-words/models/from")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithFromDeserialize(
  result: ModelsWithFrom204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithFrom(
  context: Client,
  body: From,
  options: ModelsWithFromOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithFromSend(context, body, options);
  return _modelsWithFromDeserialize(result);
}

export function _modelsWithGlobalSend(
  context: Client,
  body: Global,
  options: ModelsWithGlobalOptions = { requestOptions: {} },
): StreamableMethod<ModelsWithGlobal204Response> {
  return context
    .path("/special-words/models/global")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithGlobalDeserialize(
  result: ModelsWithGlobal204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithGlobal(
  context: Client,
  body: Global,
  options: ModelsWithGlobalOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithGlobalSend(context, body, options);
  return _modelsWithGlobalDeserialize(result);
}

export function _modelsWithIfSend(
  context: Client,
  body: If,
  options: ModelsWithIfOptions = { requestOptions: {} },
): StreamableMethod<ModelsWithIf204Response> {
  return context
    .path("/special-words/models/if")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithIfDeserialize(
  result: ModelsWithIf204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithIf(
  context: Client,
  body: If,
  options: ModelsWithIfOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithIfSend(context, body, options);
  return _modelsWithIfDeserialize(result);
}

export function _modelsWithImportSend(
  context: Client,
  body: Import,
  options: ModelsWithImportOptions = { requestOptions: {} },
): StreamableMethod<ModelsWithImport204Response> {
  return context
    .path("/special-words/models/import")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithImportDeserialize(
  result: ModelsWithImport204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithImport(
  context: Client,
  body: Import,
  options: ModelsWithImportOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithImportSend(context, body, options);
  return _modelsWithImportDeserialize(result);
}

export function _modelsWithInSend(
  context: Client,
  body: In,
  options: ModelsWithInOptions = { requestOptions: {} },
): StreamableMethod<ModelsWithIn204Response> {
  return context
    .path("/special-words/models/in")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithInDeserialize(
  result: ModelsWithIn204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithIn(
  context: Client,
  body: In,
  options: ModelsWithInOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithInSend(context, body, options);
  return _modelsWithInDeserialize(result);
}

export function _modelsWithIsSend(
  context: Client,
  body: Is,
  options: ModelsWithIsOptions = { requestOptions: {} },
): StreamableMethod<ModelsWithIs204Response> {
  return context
    .path("/special-words/models/is")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithIsDeserialize(
  result: ModelsWithIs204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithIs(
  context: Client,
  body: Is,
  options: ModelsWithIsOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithIsSend(context, body, options);
  return _modelsWithIsDeserialize(result);
}

export function _modelsWithLambdaSend(
  context: Client,
  body: Lambda,
  options: ModelsWithLambdaOptions = { requestOptions: {} },
): StreamableMethod<ModelsWithLambda204Response> {
  return context
    .path("/special-words/models/lambda")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithLambdaDeserialize(
  result: ModelsWithLambda204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithLambda(
  context: Client,
  body: Lambda,
  options: ModelsWithLambdaOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithLambdaSend(context, body, options);
  return _modelsWithLambdaDeserialize(result);
}

export function _modelsWithNotSend(
  context: Client,
  body: Not,
  options: ModelsWithNotOptions = { requestOptions: {} },
): StreamableMethod<ModelsWithNot204Response> {
  return context
    .path("/special-words/models/not")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithNotDeserialize(
  result: ModelsWithNot204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithNot(
  context: Client,
  body: Not,
  options: ModelsWithNotOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithNotSend(context, body, options);
  return _modelsWithNotDeserialize(result);
}

export function _modelsWithOrSend(
  context: Client,
  body: Or,
  options: ModelsWithOrOptions = { requestOptions: {} },
): StreamableMethod<ModelsWithOr204Response> {
  return context
    .path("/special-words/models/or")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithOrDeserialize(
  result: ModelsWithOr204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithOr(
  context: Client,
  body: Or,
  options: ModelsWithOrOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithOrSend(context, body, options);
  return _modelsWithOrDeserialize(result);
}

export function _modelsWithPassSend(
  context: Client,
  body: Pass,
  options: ModelsWithPassOptions = { requestOptions: {} },
): StreamableMethod<ModelsWithPass204Response> {
  return context
    .path("/special-words/models/pass")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithPassDeserialize(
  result: ModelsWithPass204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithPass(
  context: Client,
  body: Pass,
  options: ModelsWithPassOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithPassSend(context, body, options);
  return _modelsWithPassDeserialize(result);
}

export function _modelsWithRaiseSend(
  context: Client,
  body: Raise,
  options: ModelsWithRaiseOptions = { requestOptions: {} },
): StreamableMethod<ModelsWithRaise204Response> {
  return context
    .path("/special-words/models/raise")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithRaiseDeserialize(
  result: ModelsWithRaise204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithRaise(
  context: Client,
  body: Raise,
  options: ModelsWithRaiseOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithRaiseSend(context, body, options);
  return _modelsWithRaiseDeserialize(result);
}

export function _modelsWithReturnSend(
  context: Client,
  body: Return,
  options: ModelsWithReturnOptions = { requestOptions: {} },
): StreamableMethod<ModelsWithReturn204Response> {
  return context
    .path("/special-words/models/return")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithReturnDeserialize(
  result: ModelsWithReturn204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithReturn(
  context: Client,
  body: Return,
  options: ModelsWithReturnOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithReturnSend(context, body, options);
  return _modelsWithReturnDeserialize(result);
}

export function _modelsWithTrySend(
  context: Client,
  body: Try,
  options: ModelsWithTryOptions = { requestOptions: {} },
): StreamableMethod<ModelsWithTry204Response> {
  return context
    .path("/special-words/models/try")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithTryDeserialize(
  result: ModelsWithTry204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithTry(
  context: Client,
  body: Try,
  options: ModelsWithTryOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithTrySend(context, body, options);
  return _modelsWithTryDeserialize(result);
}

export function _modelsWithWhileSend(
  context: Client,
  body: While,
  options: ModelsWithWhileOptions = { requestOptions: {} },
): StreamableMethod<ModelsWithWhile204Response> {
  return context
    .path("/special-words/models/while")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithWhileDeserialize(
  result: ModelsWithWhile204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithWhile(
  context: Client,
  body: While,
  options: ModelsWithWhileOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithWhileSend(context, body, options);
  return _modelsWithWhileDeserialize(result);
}

export function _modelsWithWithSend(
  context: Client,
  body: With,
  options: ModelsWithWithOptions = { requestOptions: {} },
): StreamableMethod<ModelsWithWith204Response> {
  return context
    .path("/special-words/models/with")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithWithDeserialize(
  result: ModelsWithWith204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithWith(
  context: Client,
  body: With,
  options: ModelsWithWithOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithWithSend(context, body, options);
  return _modelsWithWithDeserialize(result);
}

export function _modelsWithYieldSend(
  context: Client,
  body: Yield,
  options: ModelsWithYieldOptions = { requestOptions: {} },
): StreamableMethod<ModelsWithYield204Response> {
  return context
    .path("/special-words/models/yield")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelsWithYieldDeserialize(
  result: ModelsWithYield204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelsWithYield(
  context: Client,
  body: Yield,
  options: ModelsWithYieldOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsWithYieldSend(context, body, options);
  return _modelsWithYieldDeserialize(result);
}
