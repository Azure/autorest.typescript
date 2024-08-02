// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ArrayContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  NullableFloatValueGetOptionalParams,
  NullableFloatValuePutOptionalParams,
} from "../../models/options.js";

export function _nullableFloatValueGetSend(
  context: Client,
  options: NullableFloatValueGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/array/nullable-float")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _nullableFloatValueGetDeserialize(
  result: PathUncheckedResponse,
): Promise<(number | null)[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/type/array/nullable-float")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _nullableFloatValuePutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
