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
  NullableInt32ValueGetOptionalParams,
  NullableInt32ValuePutOptionalParams,
} from "../../models/options.js";

export function _nullableInt32ValueGetSend(
  context: Client,
  options: NullableInt32ValueGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/array/nullable-int32")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _nullableInt32ValueGetDeserialize(
  result: PathUncheckedResponse,
): Promise<(number | null)[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
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
): StreamableMethod {
  return context
    .path("/type/array/nullable-int32")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _nullableInt32ValuePutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
