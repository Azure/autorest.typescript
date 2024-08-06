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
  NullableStringValueGetOptionalParams,
  NullableStringValuePutOptionalParams,
} from "../../models/options.js";

export function _nullableStringValueGetSend(
  context: Client,
  options: NullableStringValueGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/array/nullable-string")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _nullableStringValueGetDeserialize(
  result: PathUncheckedResponse,
): Promise<(string | null)[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
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
): StreamableMethod {
  return context
    .path("/type/array/nullable-string")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _nullableStringValuePutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
