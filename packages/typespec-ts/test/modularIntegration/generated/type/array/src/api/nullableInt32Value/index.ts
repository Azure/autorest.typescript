// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ArrayContext as Client,
  NullableInt32ValueGet200Response,
  NullableInt32ValuePut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  NullableInt32ValueGetOptionalParams,
  NullableInt32ValuePutOptionalParams,
} from "../../models/options.js";

export function _nullableInt32ValueGetSend(
  context: Client,
  options: NullableInt32ValueGetOptionalParams = { requestOptions: {} },
): StreamableMethod<NullableInt32ValueGet200Response> {
  return context
    .path("/type/array/nullable-int32")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _nullableInt32ValueGetDeserialize(
  result: NullableInt32ValueGet200Response,
): Promise<(number | null)[]> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as NullableInt32ValueGet200Response;
  return _result.body;
}

export async function nullableInt32ValueGet(
  context: Client,
  options: NullableInt32ValueGetOptionalParams = { requestOptions: {} },
): Promise<(number | null)[]> {
  const result = await _nullableInt32ValueGetSend(context, options);
  return _nullableInt32ValueGetDeserialize(result);
}

export function _nullableInt32ValuePutSend(
  context: Client,
  body: (number | null)[],
  options: NullableInt32ValuePutOptionalParams = { requestOptions: {} },
): StreamableMethod<NullableInt32ValuePut204Response> {
  return context
    .path("/type/array/nullable-int32")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _nullableInt32ValuePutDeserialize(
  result: NullableInt32ValuePut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function nullableInt32ValuePut(
  context: Client,
  body: (number | null)[],
  options: NullableInt32ValuePutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _nullableInt32ValuePutSend(context, body, options);
  return _nullableInt32ValuePutDeserialize(result);
}
