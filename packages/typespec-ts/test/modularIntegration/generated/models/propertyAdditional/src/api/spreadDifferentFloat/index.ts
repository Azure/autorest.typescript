// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  AdditionalPropertiesContext as Client,
  SpreadDifferentFloatGet200Response,
  SpreadDifferentFloatPut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  SpreadDifferentFloatGetOptionalParams,
  SpreadDifferentFloatPutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: SpreadDifferentFloatGetOptionalParams = { requestOptions: {} },
): StreamableMethod<SpreadDifferentFloatGet200Response> {
  return context
    .path("/type/property/additionalProperties/spreadDifferentRecordFloat")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: SpreadDifferentFloatGet200Response,
): Promise<Record<string, number>> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    name: result.body["name"],
  };
}

/** Get call */
export async function get(
  context: Client,
  options: SpreadDifferentFloatGetOptionalParams = { requestOptions: {} },
): Promise<Record<string, number>> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: Record<string, number>,
  options: SpreadDifferentFloatPutOptionalParams = { requestOptions: {} },
): StreamableMethod<SpreadDifferentFloatPut204Response> {
  return context
    .path("/type/property/additionalProperties/spreadDifferentRecordFloat")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _putDeserialize(
  result: SpreadDifferentFloatPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function put(
  context: Client,
  body: Record<string, number>,
  options: SpreadDifferentFloatPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
