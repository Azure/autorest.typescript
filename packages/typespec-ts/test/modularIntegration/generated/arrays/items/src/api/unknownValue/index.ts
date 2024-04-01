// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ArrayContext as Client,
  UnknownValueGet200Response,
  UnknownValuePut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  UnknownValueGetOptions,
  UnknownValuePutOptions,
} from "../../models/options.js";

export function _unknownValueGetSend(
  context: Client,
  options: UnknownValueGetOptions = { requestOptions: {} },
): StreamableMethod<UnknownValueGet200Response> {
  return context
    .path("/type/array/unknown")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _unknownValueGetDeserialize(
  result: UnknownValueGet200Response,
): Promise<unknown[]> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

export async function unknownValueGet(
  context: Client,
  options: UnknownValueGetOptions = { requestOptions: {} },
): Promise<unknown[]> {
  const result = await _unknownValueGetSend(context, options);
  return _unknownValueGetDeserialize(result);
}

export function _unknownValuePutSend(
  context: Client,
  body: unknown[],
  options: UnknownValuePutOptions = { requestOptions: {} },
): StreamableMethod<UnknownValuePut204Response> {
  return context
    .path("/type/array/unknown")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _unknownValuePutDeserialize(
  result: UnknownValuePut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function unknownValuePut(
  context: Client,
  body: unknown[],
  options: UnknownValuePutOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _unknownValuePutSend(context, body, options);
  return _unknownValuePutDeserialize(result);
}
