// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ArrayContext as Client,
  DurationValueGet200Response,
  DurationValuePut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  DurationValueGetOptions,
  DurationValuePutOptions,
} from "../../models/options.js";

export function _durationValueGetSend(
  context: Client,
  options: DurationValueGetOptions = { requestOptions: {} },
): StreamableMethod<DurationValueGet200Response> {
  return context
    .path("/type/array/duration")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _durationValueGetDeserialize(
  result: DurationValueGet200Response,
): Promise<string[]> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

export async function durationValueGet(
  context: Client,
  options: DurationValueGetOptions = { requestOptions: {} },
): Promise<string[]> {
  const result = await _durationValueGetSend(context, options);
  return _durationValueGetDeserialize(result);
}

export function _durationValuePutSend(
  context: Client,
  body: string[],
  options: DurationValuePutOptions = { requestOptions: {} },
): StreamableMethod<DurationValuePut204Response> {
  return context
    .path("/type/array/duration")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _durationValuePutDeserialize(
  result: DurationValuePut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function durationValuePut(
  context: Client,
  body: string[],
  options: DurationValuePutOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _durationValuePutSend(context, body, options);
  return _durationValuePutDeserialize(result);
}
