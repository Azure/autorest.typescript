// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ArrayContext as Client,
  NullableFloatValueGet200Response,
  NullableFloatValuePut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  NullableFloatValueGetOptionalParams,
  NullableFloatValuePutOptionalParams,
} from "../../models/options.js";

export function _nullableFloatValueGetSend(
  context: Client,
  options: NullableFloatValueGetOptionalParams = { requestOptions: {} },
): StreamableMethod<NullableFloatValueGet200Response> {
  return context
    .path("/type/array/nullable-float")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _nullableFloatValueGetDeserialize(
  result: NullableFloatValueGet200Response,
): Promise<(number | null)[]> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

export async function nullableFloatValueGet(
  context: Client,
  options: NullableFloatValueGetOptionalParams = { requestOptions: {} },
): Promise<(number | null)[]> {
  const result = await _nullableFloatValueGetSend(context, options);
  return _nullableFloatValueGetDeserialize(result);
}

export function _nullableFloatValuePutSend(
  context: Client,
  body: (number | null)[],
  options: NullableFloatValuePutOptionalParams = { requestOptions: {} },
): StreamableMethod<NullableFloatValuePut204Response> {
  return context
    .path("/type/array/nullable-float")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _nullableFloatValuePutDeserialize(
  result: NullableFloatValuePut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function nullableFloatValuePut(
  context: Client,
  body: (number | null)[],
  options: NullableFloatValuePutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _nullableFloatValuePutSend(context, body, options);
  return _nullableFloatValuePutDeserialize(result);
}
