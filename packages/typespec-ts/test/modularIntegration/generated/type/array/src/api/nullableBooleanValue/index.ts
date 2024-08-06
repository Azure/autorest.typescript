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
  NullableBooleanValueGetOptionalParams,
  NullableBooleanValuePutOptionalParams,
} from "../../models/options.js";

export function _nullableBooleanValueGetSend(
  context: Client,
  options: NullableBooleanValueGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/array/nullable-boolean")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _nullableBooleanValueGetDeserialize(
  result: PathUncheckedResponse,
): Promise<(boolean | null)[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function nullableBooleanValueGet(
  context: Client,
  options: NullableBooleanValueGetOptionalParams = { requestOptions: {} },
): Promise<(boolean | null)[]> {
  const result = await _nullableBooleanValueGetSend(context, options);
  return _nullableBooleanValueGetDeserialize(result);
}

export function _nullableBooleanValuePutSend(
  context: Client,
  body: (boolean | null)[],
  options: NullableBooleanValuePutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/array/nullable-boolean")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _nullableBooleanValuePutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function nullableBooleanValuePut(
  context: Client,
  body: (boolean | null)[],
  options: NullableBooleanValuePutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _nullableBooleanValuePutSend(context, body, options);
  return _nullableBooleanValuePutDeserialize(result);
}
