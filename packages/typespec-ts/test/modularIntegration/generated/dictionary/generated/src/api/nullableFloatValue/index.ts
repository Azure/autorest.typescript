// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DictionaryContext as Client,
  NullableFloatValueGet200Response,
  NullableFloatValuePut204Response
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";
import {
  NullableFloatValueGetOptions,
  NullableFloatValuePutOptions
} from "../../models/options.js";

export function _nullableFloatValueGetSend(
  context: Client,
  options: NullableFloatValueGetOptions = { requestOptions: {} }
): StreamableMethod<NullableFloatValueGet200Response> {
  return context
    .path("/type/dictionary/nullable-float")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _nullableFloatValueGetDeserialize(
  result: NullableFloatValueGet200Response
): Promise<Record<string, number | null>> {
  if (result.status !== "200") {
    throw result.body;
  }

  return result.body;
}

export async function nullableFloatValueGet(
  context: Client,
  options: NullableFloatValueGetOptions = { requestOptions: {} }
): Promise<Record<string, number | null>> {
  const result = await _nullableFloatValueGetSend(context, options);
  return _nullableFloatValueGetDeserialize(result);
}

export function _nullableFloatValuePutSend(
  context: Client,
  body: Record<string, number | null>,
  options: NullableFloatValuePutOptions = { requestOptions: {} }
): StreamableMethod<NullableFloatValuePut204Response> {
  return context
    .path("/type/dictionary/nullable-float")
    .put({ ...operationOptionsToRequestParameters(options), body });
}

export async function _nullableFloatValuePutDeserialize(
  result: NullableFloatValuePut204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function nullableFloatValuePut(
  context: Client,
  body: Record<string, number | null>,
  options: NullableFloatValuePutOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _nullableFloatValuePutSend(context, body, options);
  return _nullableFloatValuePutDeserialize(result);
}
