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
  DurationValueGetOptionalParams,
  DurationValuePutOptionalParams,
} from "../../models/options.js";

export function _durationValueGetSend(
  context: Client,
  options: DurationValueGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/array/duration")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _durationValueGetDeserialize(
  result: PathUncheckedResponse,
): Promise<string[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function durationValueGet(
  context: Client,
  options: DurationValueGetOptionalParams = { requestOptions: {} },
): Promise<string[]> {
  const result = await _durationValueGetSend(context, options);
  return _durationValueGetDeserialize(result);
}

export function _durationValuePutSend(
  context: Client,
  body: string[],
  options: DurationValuePutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/array/duration")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _durationValuePutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function durationValuePut(
  context: Client,
  body: string[],
  options: DurationValuePutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _durationValuePutSend(context, body, options);
  return _durationValuePutDeserialize(result);
}
