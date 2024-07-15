// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DictionaryContext as Client,
  Int64ValueGet200Response,
  Int64ValuePut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  Int64ValueGetOptionalParams,
  Int64ValuePutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: Int64ValueGetOptionalParams = { requestOptions: {} },
): StreamableMethod<Int64ValueGet200Response> {
  return context
    .path("/type/dictionary/int64")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: Int64ValueGet200Response,
): Promise<Record<string, number>> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body as any;
}

export async function get(
  context: Client,
  options: Int64ValueGetOptionalParams = { requestOptions: {} },
): Promise<Record<string, number>> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: Record<string, number>,
  options: Int64ValuePutOptionalParams = { requestOptions: {} },
): StreamableMethod<Int64ValuePut204Response> {
  return context
    .path("/type/dictionary/int64")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: serializeRecord(body as any) as any,
    });
}

export async function _putDeserialize(
  result: Int64ValuePut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function put(
  context: Client,
  body: Record<string, number>,
  options: Int64ValuePutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
