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
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  Int32ValueGetOptionalParams,
  Int32ValuePutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: Int32ValueGetOptionalParams = { requestOptions: {} },
): StreamableMethod<Int32ValueGet200Response> {
  return context
    .path("/type/dictionary/int32")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: Int32ValueGet200Response,
): Promise<Record<string, number>> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as Int32ValueGet200Response;
  return _result.body as any;
}

export async function get(
  context: Client,
  options: Int32ValueGetOptionalParams = { requestOptions: {} },
): Promise<Record<string, number>> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: Record<string, number>,
  options: Int32ValuePutOptionalParams = { requestOptions: {} },
): StreamableMethod<Int32ValuePut204Response> {
  return context
    .path("/type/dictionary/int32")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: serializeRecord(body as any) as any,
    });
}

export async function _putDeserialize(
  result: Int32ValuePut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function put(
  context: Client,
  body: Record<string, number>,
  options: Int32ValuePutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
