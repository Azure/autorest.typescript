// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ScalarContext as Client,
  UnknownGet200Response,
  UnknownPut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { UnknownGetOptions, UnknownPutOptions } from "../../models/options.js";

export function _unknownGetSend(
  context: Client,
  options: UnknownGetOptions = { requestOptions: {} },
): StreamableMethod<UnknownGet200Response> {
  return context
    .path("/type/scalar/unknown")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _unknownGetDeserialize(
  result: UnknownGet200Response,
): Promise<unknown> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

/** get unknown value */
export async function unknownGet(
  context: Client,
  options: UnknownGetOptions = { requestOptions: {} },
): Promise<unknown> {
  const result = await _unknownGetSend(context, options);
  return _unknownGetDeserialize(result);
}

export function _unknownPutSend(
  context: Client,
  body: unknown,
  options: UnknownPutOptions = { requestOptions: {} },
): StreamableMethod<UnknownPut204Response> {
  return context
    .path("/type/scalar/unknown")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _unknownPutDeserialize(
  result: UnknownPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** put unknown value */
export async function unknownPut(
  context: Client,
  body: unknown,
  options: UnknownPutOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _unknownPutSend(context, body, options);
  return _unknownPutDeserialize(result);
}
