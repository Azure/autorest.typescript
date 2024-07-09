// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DictionaryContext as Client,
  StringValueGet200Response,
  StringValuePut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  StringValueGetOptionalParams,
  StringValuePutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: StringValueGetOptionalParams = { requestOptions: {} },
): StreamableMethod<StringValueGet200Response> {
  return context
    .path("/type/dictionary/string")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: StringValueGet200Response,
): Promise<Record<string, string>> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as StringValueGet200Response;
  return _result.body as any;
}

export async function get(
  context: Client,
  options: StringValueGetOptionalParams = { requestOptions: {} },
): Promise<Record<string, string>> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: Record<string, string>,
  options: StringValuePutOptionalParams = { requestOptions: {} },
): StreamableMethod<StringValuePut204Response> {
  return context
    .path("/type/dictionary/string")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: serializeRecord(body as any) as any,
    });
}

export async function _putDeserialize(
  result: StringValuePut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function put(
  context: Client,
  body: Record<string, string>,
  options: StringValuePutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
