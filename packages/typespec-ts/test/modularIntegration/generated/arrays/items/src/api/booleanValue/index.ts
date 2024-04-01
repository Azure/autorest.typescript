// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ArrayContext as Client,
  BooleanValueGet200Response,
  BooleanValuePut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  BooleanValueGetOptions,
  BooleanValuePutOptions,
} from "../../models/options.js";

export function _booleanValueGetSend(
  context: Client,
  options: BooleanValueGetOptions = { requestOptions: {} },
): StreamableMethod<BooleanValueGet200Response> {
  return context
    .path("/type/array/boolean")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _booleanValueGetDeserialize(
  result: BooleanValueGet200Response,
): Promise<boolean[]> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

export async function booleanValueGet(
  context: Client,
  options: BooleanValueGetOptions = { requestOptions: {} },
): Promise<boolean[]> {
  const result = await _booleanValueGetSend(context, options);
  return _booleanValueGetDeserialize(result);
}

export function _booleanValuePutSend(
  context: Client,
  body: boolean[],
  options: BooleanValuePutOptions = { requestOptions: {} },
): StreamableMethod<BooleanValuePut204Response> {
  return context
    .path("/type/array/boolean")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _booleanValuePutDeserialize(
  result: BooleanValuePut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function booleanValuePut(
  context: Client,
  body: boolean[],
  options: BooleanValuePutOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _booleanValuePutSend(context, body, options);
  return _booleanValuePutDeserialize(result);
}
