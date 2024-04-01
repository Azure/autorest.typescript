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
import { BooleanGetOptions, BooleanPutOptions } from "../../models/options.js";

export function _booleanGetSend(
  context: Client,
  options: BooleanGetOptions = { requestOptions: {} },
): StreamableMethod<BooleanModelGet200Response> {
  return context
    .path("/type/scalar/boolean")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _booleanGetDeserialize(
  result: BooleanModelGet200Response,
): Promise<boolean> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

/** get boolean value */
export async function booleanGet(
  context: Client,
  options: BooleanGetOptions = { requestOptions: {} },
): Promise<boolean> {
  const result = await _booleanGetSend(context, options);
  return _booleanGetDeserialize(result);
}

export function _booleanPutSend(
  context: Client,
  body: boolean,
  options: BooleanPutOptions = { requestOptions: {} },
): StreamableMethod<BooleanModelPut204Response> {
  return context
    .path("/type/scalar/boolean")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _booleanPutDeserialize(
  result: BooleanModelPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** put boolean value */
export async function booleanPut(
  context: Client,
  body: boolean,
  options: BooleanPutOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _booleanPutSend(context, body, options);
  return _booleanPutDeserialize(result);
}
