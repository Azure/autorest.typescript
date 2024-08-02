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
  StringGetOptionalParams,
  StringPutOptionalParams,
} from "../../models/options.js";

export function _stringGetSend(
  context: Client,
  options: StringGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/scalar/string")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _stringGetDeserialize(
  result: PathUncheckedResponse,
): Promise<string> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

/** get string value */
export async function stringGet(
  context: Client,
  options: StringGetOptionalParams = { requestOptions: {} },
): Promise<string> {
  const result = await _stringGetSend(context, options);
  return _stringGetDeserialize(result);
}

export function _stringPutSend(
  context: Client,
  body: string,
  options: StringPutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/scalar/string")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _stringPutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** put string value */
export async function stringPut(
  context: Client,
  body: string,
  options: StringPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _stringPutSend(context, body, options);
  return _stringPutDeserialize(result);
}
