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
  Int32ValueGetOptionalParams,
  Int32ValuePutOptionalParams,
} from "../../models/options.js";

export function _int32ValueGetSend(
  context: Client,
  options: Int32ValueGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/array/int32")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _int32ValueGetDeserialize(
  result: PathUncheckedResponse,
): Promise<number[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function int32ValueGet(
  context: Client,
  options: Int32ValueGetOptionalParams = { requestOptions: {} },
): Promise<number[]> {
  const result = await _int32ValueGetSend(context, options);
  return _int32ValueGetDeserialize(result);
}

export function _int32ValuePutSend(
  context: Client,
  body: number[],
  options: Int32ValuePutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/array/int32")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _int32ValuePutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function int32ValuePut(
  context: Client,
  body: number[],
  options: Int32ValuePutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _int32ValuePutSend(context, body, options);
  return _int32ValuePutDeserialize(result);
}
