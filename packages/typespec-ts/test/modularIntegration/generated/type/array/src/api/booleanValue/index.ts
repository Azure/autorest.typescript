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
  BooleanValueGetOptionalParams,
  BooleanValuePutOptionalParams,
} from "../../models/options.js";

export function _booleanValueGetSend(
  context: Client,
  options: BooleanValueGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/array/boolean")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _booleanValueGetDeserialize(
  result: PathUncheckedResponse,
): Promise<boolean[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function booleanValueGet(
  context: Client,
  options: BooleanValueGetOptionalParams = { requestOptions: {} },
): Promise<boolean[]> {
  const result = await _booleanValueGetSend(context, options);
  return _booleanValueGetDeserialize(result);
}

export function _booleanValuePutSend(
  context: Client,
  body: boolean[],
  options: BooleanValuePutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/array/boolean")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _booleanValuePutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function booleanValuePut(
  context: Client,
  body: boolean[],
  options: BooleanValuePutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _booleanValuePutSend(context, body, options);
  return _booleanValuePutDeserialize(result);
}
