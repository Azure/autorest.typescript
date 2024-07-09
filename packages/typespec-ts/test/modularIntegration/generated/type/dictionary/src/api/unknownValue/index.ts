// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DictionaryContext as Client,
  UnknownValueGet200Response,
  UnknownValuePut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  UnknownValueGetOptionalParams,
  UnknownValuePutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: UnknownValueGetOptionalParams = { requestOptions: {} },
): StreamableMethod<UnknownValueGet200Response> {
  return context
    .path("/type/dictionary/unknown")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: UnknownValueGet200Response,
): Promise<Record<string, any>> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as UnknownValueGet200Response;
  return _result.body as any;
}

export async function get(
  context: Client,
  options: UnknownValueGetOptionalParams = { requestOptions: {} },
): Promise<Record<string, any>> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: Record<string, any>,
  options: UnknownValuePutOptionalParams = { requestOptions: {} },
): StreamableMethod<UnknownValuePut204Response> {
  return context
    .path("/type/dictionary/unknown")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: serializeRecord(body as any) as any,
    });
}

export async function _putDeserialize(
  result: UnknownValuePut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function put(
  context: Client,
  body: Record<string, any>,
  options: UnknownValuePutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
