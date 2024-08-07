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
  UnknownValueGetOptionalParams,
  UnknownValuePutOptionalParams,
} from "../../models/options.js";

export function _unknownValueGetSend(
  context: Client,
  options: UnknownValueGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/array/unknown")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _unknownValueGetDeserialize(
  result: PathUncheckedResponse,
): Promise<any[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function unknownValueGet(
  context: Client,
  options: UnknownValueGetOptionalParams = { requestOptions: {} },
): Promise<any[]> {
  const result = await _unknownValueGetSend(context, options);
  return _unknownValueGetDeserialize(result);
}

export function _unknownValuePutSend(
  context: Client,
  body: any[],
  options: UnknownValuePutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/array/unknown")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _unknownValuePutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function unknownValuePut(
  context: Client,
  body: any[],
  options: UnknownValuePutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _unknownValuePutSend(context, body, options);
  return _unknownValuePutDeserialize(result);
}
