// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DictionaryContext as Client,
  Int32ValueGet200Response,
  Int32ValuePut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  Int32ValueGetOptions,
  Int32ValuePutOptions,
} from "../../models/options.js";

export function _int32ValueGetSend(
  context: Client,
  options: Int32ValueGetOptions = { requestOptions: {} },
): StreamableMethod<Int32ValueGet200Response> {
  return context
    .path("/type/dictionary/int32")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _int32ValueGetDeserialize(
  result: Int32ValueGet200Response,
): Promise<Record<string, number>> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

export async function int32ValueGet(
  context: Client,
  options: Int32ValueGetOptions = { requestOptions: {} },
): Promise<Record<string, number>> {
  const result = await _int32ValueGetSend(context, options);
  return _int32ValueGetDeserialize(result);
}

export function _int32ValuePutSend(
  context: Client,
  body: Record<string, number>,
  options: Int32ValuePutOptions = { requestOptions: {} },
): StreamableMethod<Int32ValuePut204Response> {
  return context
    .path("/type/dictionary/int32")
    .put({ ...operationOptionsToRequestParameters(options) });
}

export async function _int32ValuePutDeserialize(
  result: Int32ValuePut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function int32ValuePut(
  context: Client,
  body: Record<string, number>,
  options: Int32ValuePutOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _int32ValuePutSend(context, body, options);
  return _int32ValuePutDeserialize(result);
}
