// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  BooleanValueGet200Response,
  BooleanValuePut204Response,
  DictionaryContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  BooleanValueGetOptionalParams,
  BooleanValuePutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: BooleanValueGetOptionalParams = { requestOptions: {} },
): StreamableMethod<BooleanValueGet200Response> {
  return context
    .path("/type/dictionary/boolean")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: BooleanValueGet200Response,
): Promise<Record<string, boolean>> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

export async function get(
  context: Client,
  options: BooleanValueGetOptionalParams = { requestOptions: {} },
): Promise<Record<string, boolean>> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: Record<string, boolean>,
  options: BooleanValuePutOptionalParams = { requestOptions: {} },
): StreamableMethod<BooleanValuePut204Response> {
  return context
    .path("/type/dictionary/boolean")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _putDeserialize(
  result: BooleanValuePut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function put(
  context: Client,
  body: Record<string, boolean>,
  options: BooleanValuePutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
