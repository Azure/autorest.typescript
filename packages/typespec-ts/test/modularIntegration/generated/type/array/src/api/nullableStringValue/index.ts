// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ArrayContext as Client,
  NullableStringValueGet200Response,
  NullableStringValuePut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  NullableStringValueGetOptionalParams,
  NullableStringValuePutOptionalParams,
} from "../../models/options.js";

export function _nullableStringValueGetSend(
  context: Client,
  options: NullableStringValueGetOptionalParams = { requestOptions: {} },
): StreamableMethod<NullableStringValueGet200Response> {
  return context
    .path("/type/array/nullable-string")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _nullableStringValueGetDeserialize(
  result: NullableStringValueGet200Response,
): Promise<(string | null)[]> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as NullableStringValueGet200Response;
  return _result.body;
}

export async function nullableStringValueGet(
  context: Client,
  options: NullableStringValueGetOptionalParams = { requestOptions: {} },
): Promise<(string | null)[]> {
  const result = await _nullableStringValueGetSend(context, options);
  return _nullableStringValueGetDeserialize(result);
}

export function _nullableStringValuePutSend(
  context: Client,
  body: (string | null)[],
  options: NullableStringValuePutOptionalParams = { requestOptions: {} },
): StreamableMethod<NullableStringValuePut204Response> {
  return context
    .path("/type/array/nullable-string")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _nullableStringValuePutDeserialize(
  result: NullableStringValuePut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function nullableStringValuePut(
  context: Client,
  body: (string | null)[],
  options: NullableStringValuePutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _nullableStringValuePutSend(context, body, options);
  return _nullableStringValuePutDeserialize(result);
}
