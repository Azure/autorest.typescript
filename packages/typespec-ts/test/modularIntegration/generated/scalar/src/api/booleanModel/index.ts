// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  BooleanModelGet200Response,
  BooleanModelPut204Response,
  ScalarContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { GetOptions, PutOptions } from "../../models/options.js";

export function _booleanModelGetSend(
  context: Client,
  options: GetOptions = { requestOptions: {} },
): StreamableMethod<BooleanModelGet200Response> {
  return context
    .path("/type/scalar/boolean")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _booleanModelGetDeserialize(
  result: BooleanModelGet200Response,
): Promise<boolean> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

/** get boolean value */
export async function booleanModelGet(
  context: Client,
  options: GetOptions = { requestOptions: {} },
): Promise<boolean> {
  const result = await _booleanModelGetSend(context, options);
  return _booleanModelGetDeserialize(result);
}

export function _booleanModelPutSend(
  context: Client,
  body: boolean,
  options: PutOptions = { requestOptions: {} },
): StreamableMethod<BooleanModelPut204Response> {
  return context
    .path("/type/scalar/boolean")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _booleanModelPutDeserialize(
  result: BooleanModelPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** put boolean value */
export async function booleanModelPut(
  context: Client,
  body: boolean,
  options: PutOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _booleanModelPutSend(context, body, options);
  return _booleanModelPutDeserialize(result);
}
