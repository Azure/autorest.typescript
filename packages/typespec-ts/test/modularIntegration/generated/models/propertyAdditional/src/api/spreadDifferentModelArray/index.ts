// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ModelForRecord } from "../../models/models.js";
import {
  AdditionalPropertiesContext as Client,
  SpreadDifferentModelArrayGet200Response,
  SpreadDifferentModelArrayPut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  SpreadDifferentModelArrayGetOptionalParams,
  SpreadDifferentModelArrayPutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: SpreadDifferentModelArrayGetOptionalParams = { requestOptions: {} },
): StreamableMethod<SpreadDifferentModelArrayGet200Response> {
  return context
    .path("/type/property/additionalProperties/spreadDifferentRecordModelArray")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: SpreadDifferentModelArrayGet200Response,
): Promise<Record<string, ModelForRecord[]>> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    knownProp: result.body["knownProp"],
  };
}

/** Get call */
export async function get(
  context: Client,
  options: SpreadDifferentModelArrayGetOptionalParams = { requestOptions: {} },
): Promise<Record<string, ModelForRecord[]>> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: Record<string, ModelForRecord[]>,
  options: SpreadDifferentModelArrayPutOptionalParams = { requestOptions: {} },
): StreamableMethod<SpreadDifferentModelArrayPut204Response> {
  return context
    .path("/type/property/additionalProperties/spreadDifferentRecordModelArray")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _putDeserialize(
  result: SpreadDifferentModelArrayPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function put(
  context: Client,
  body: Record<string, ModelForRecord[]>,
  options: SpreadDifferentModelArrayPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
