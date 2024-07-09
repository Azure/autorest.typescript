// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DictionaryContext as Client,
  Float32ValueGet200Response,
  Float32ValuePut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  Float32ValueGetOptionalParams,
  Float32ValuePutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: Float32ValueGetOptionalParams = { requestOptions: {} },
): StreamableMethod<Float32ValueGet200Response> {
  return context
    .path("/type/dictionary/float32")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: Float32ValueGet200Response,
): Promise<Record<string, number>> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as Float32ValueGet200Response;
  return _result.body as any;
}

export async function get(
  context: Client,
  options: Float32ValueGetOptionalParams = { requestOptions: {} },
): Promise<Record<string, number>> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: Record<string, number>,
  options: Float32ValuePutOptionalParams = { requestOptions: {} },
): StreamableMethod<Float32ValuePut204Response> {
  return context
    .path("/type/dictionary/float32")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: serializeRecord(body as any) as any,
    });
}

export async function _putDeserialize(
  result: Float32ValuePut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function put(
  context: Client,
  body: Record<string, number>,
  options: Float32ValuePutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
