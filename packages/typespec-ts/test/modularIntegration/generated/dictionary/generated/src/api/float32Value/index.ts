// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DictionaryContext as Client,
  Float32ValueGet200Response,
  Float32ValuePut204Response
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";
import {
  Float32ValueGetOptions,
  Float32ValuePutOptions
} from "../../models/options.js";

export function _float32ValueGetSend(
  context: Client,
  options: Float32ValueGetOptions = { requestOptions: {} }
): StreamableMethod<Float32ValueGet200Response> {
  return context
    .path("/type/dictionary/float32")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _float32ValueGetDeserialize(
  result: Float32ValueGet200Response
): Promise<Record<string, number>> {
  if (result.status !== "200") {
    throw result.body;
  }

  return result.body;
}

export async function float32ValueGet(
  context: Client,
  options: Float32ValueGetOptions = { requestOptions: {} }
): Promise<Record<string, number>> {
  const result = await _float32ValueGetSend(context, options);
  return _float32ValueGetDeserialize(result);
}

export function _float32ValuePutSend(
  context: Client,
  body: Record<string, number>,
  options: Float32ValuePutOptions = { requestOptions: {} }
): StreamableMethod<Float32ValuePut204Response> {
  return context
    .path("/type/dictionary/float32")
    .put({ ...operationOptionsToRequestParameters(options), body });
}

export async function _float32ValuePutDeserialize(
  result: Float32ValuePut204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function float32ValuePut(
  context: Client,
  body: Record<string, number>,
  options: Float32ValuePutOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _float32ValuePutSend(context, body, options);
  return _float32ValuePutDeserialize(result);
}
