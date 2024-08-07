// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ScalarContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  UnknownGetOptionalParams,
  UnknownPutOptionalParams,
} from "../../models/options.js";

export function _unknownGetSend(
  context: Client,
  options: UnknownGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/scalar/unknown")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _unknownGetDeserialize(
  result: PathUncheckedResponse,
): Promise<any> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

/** get unknown value */
export async function unknownGet(
  context: Client,
  options: UnknownGetOptionalParams = { requestOptions: {} },
): Promise<any> {
  const result = await _unknownGetSend(context, options);
  return _unknownGetDeserialize(result);
}

export function _unknownPutSend(
  context: Client,
  body: any,
  options: UnknownPutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/scalar/unknown")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _unknownPutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** put unknown value */
export async function unknownPut(
  context: Client,
  body: any,
  options: UnknownPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _unknownPutSend(context, body, options);
  return _unknownPutDeserialize(result);
}
