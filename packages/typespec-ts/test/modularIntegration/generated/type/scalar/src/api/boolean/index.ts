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
  BooleanGetOptionalParams,
  BooleanPutOptionalParams,
} from "../../models/options.js";

export function _booleanGetSend(
  context: Client,
  options: BooleanGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/scalar/boolean")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _booleanGetDeserialize(
  result: PathUncheckedResponse,
): Promise<boolean> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

/** get boolean value */
export async function booleanGet(
  context: Client,
  options: BooleanGetOptionalParams = { requestOptions: {} },
): Promise<boolean> {
  const result = await _booleanGetSend(context, options);
  return _booleanGetDeserialize(result);
}

export function _booleanPutSend(
  context: Client,
  body: boolean,
  options: BooleanPutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/scalar/boolean")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _booleanPutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** put boolean value */
export async function booleanPut(
  context: Client,
  body: boolean,
  options: BooleanPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _booleanPutSend(context, body, options);
  return _booleanPutDeserialize(result);
}
