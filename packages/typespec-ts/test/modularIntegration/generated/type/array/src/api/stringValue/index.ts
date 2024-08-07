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
  StringValueGetOptionalParams,
  StringValuePutOptionalParams,
} from "../../models/options.js";

export function _stringValueGetSend(
  context: Client,
  options: StringValueGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/array/string")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _stringValueGetDeserialize(
  result: PathUncheckedResponse,
): Promise<string[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function stringValueGet(
  context: Client,
  options: StringValueGetOptionalParams = { requestOptions: {} },
): Promise<string[]> {
  const result = await _stringValueGetSend(context, options);
  return _stringValueGetDeserialize(result);
}

export function _stringValuePutSend(
  context: Client,
  body: string[],
  options: StringValuePutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/array/string")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _stringValuePutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function stringValuePut(
  context: Client,
  body: string[],
  options: StringValuePutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _stringValuePutSend(context, body, options);
  return _stringValuePutDeserialize(result);
}
