// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DictionaryContext as Client,
  NullableFloatValueGet200Response,
  NullableFloatValuePut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  NullableFloatValueGetOptionalParams,
  NullableFloatValuePutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: NullableFloatValueGetOptionalParams = { requestOptions: {} },
): StreamableMethod<NullableFloatValueGet200Response> {
  return context
    .path("/type/dictionary/nullable-float")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: NullableFloatValueGet200Response,
): Promise<Record<string, number | null>> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as NullableFloatValueGet200Response;
  return _result.body as any;
}

export async function get(
  context: Client,
  options: NullableFloatValueGetOptionalParams = { requestOptions: {} },
): Promise<Record<string, number | null>> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: Record<string, number | null>,
  options: NullableFloatValuePutOptionalParams = { requestOptions: {} },
): StreamableMethod<NullableFloatValuePut204Response> {
  return context
    .path("/type/dictionary/nullable-float")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: serializeRecord(body as any) as any,
    });
}

export async function _putDeserialize(
  result: NullableFloatValuePut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function put(
  context: Client,
  body: Record<string, number | null>,
  options: NullableFloatValuePutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
