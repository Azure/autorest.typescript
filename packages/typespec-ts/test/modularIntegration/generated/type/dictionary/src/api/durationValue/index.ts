// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DictionaryContext as Client,
  DurationValueGet200Response,
  DurationValuePut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  DurationValueGetOptionalParams,
  DurationValuePutOptionalParams,
} from "../options.js";

export function _getSend(
  context: Client,
  options: DurationValueGetOptionalParams = { requestOptions: {} },
): StreamableMethod<DurationValueGet200Response> {
  return context
    .path("/type/dictionary/duration")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: DurationValueGet200Response,
): Promise<Record<string, string>> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body as any;
}

export async function get(
  context: Client,
  options: DurationValueGetOptionalParams = { requestOptions: {} },
): Promise<Record<string, string>> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: Record<string, string>,
  options: DurationValuePutOptionalParams = { requestOptions: {} },
): StreamableMethod<DurationValuePut204Response> {
  return context
    .path("/type/dictionary/duration")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: serializeRecord(body as any) as any,
    });
}

export async function _putDeserialize(
  result: DurationValuePut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function put(
  context: Client,
  body: Record<string, string>,
  options: DurationValuePutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
