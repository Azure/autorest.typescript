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
  Int64ValueGetOptionalParams,
  Int64ValuePutOptionalParams,
} from "../../models/options.js";

export function _int64ValueGetSend(
  context: Client,
  options: Int64ValueGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/array/int64")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _int64ValueGetDeserialize(
  result: PathUncheckedResponse,
): Promise<number[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function int64ValueGet(
  context: Client,
  options: Int64ValueGetOptionalParams = { requestOptions: {} },
): Promise<number[]> {
  const result = await _int64ValueGetSend(context, options);
  return _int64ValueGetDeserialize(result);
}

export function _int64ValuePutSend(
  context: Client,
  body: number[],
  options: Int64ValuePutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/array/int64")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _int64ValuePutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function int64ValuePut(
  context: Client,
  body: number[],
  options: Int64ValuePutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _int64ValuePutSend(context, body, options);
  return _int64ValuePutDeserialize(result);
}
