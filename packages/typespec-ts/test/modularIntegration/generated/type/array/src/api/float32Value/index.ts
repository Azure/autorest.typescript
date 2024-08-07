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
  Float32ValueGetOptionalParams,
  Float32ValuePutOptionalParams,
} from "../../models/options.js";

export function _float32ValueGetSend(
  context: Client,
  options: Float32ValueGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/array/float32")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _float32ValueGetDeserialize(
  result: PathUncheckedResponse,
): Promise<number[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function float32ValueGet(
  context: Client,
  options: Float32ValueGetOptionalParams = { requestOptions: {} },
): Promise<number[]> {
  const result = await _float32ValueGetSend(context, options);
  return _float32ValueGetDeserialize(result);
}

export function _float32ValuePutSend(
  context: Client,
  body: number[],
  options: Float32ValuePutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/array/float32")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _float32ValuePutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function float32ValuePut(
  context: Client,
  body: number[],
  options: Float32ValuePutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _float32ValuePutSend(context, body, options);
  return _float32ValuePutDeserialize(result);
}
