// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ModelForRecord } from "../../models/models.js";
import {
  AdditionalPropertiesContext as Client,
  SpreadModelArrayGet200Response,
  SpreadModelArrayPut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  SpreadModelArrayGetOptionalParams,
  SpreadModelArrayPutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: SpreadModelArrayGetOptionalParams = { requestOptions: {} },
): StreamableMethod<SpreadModelArrayGet200Response> {
  return context
    .path("/type/property/additionalProperties/spreadRecordModelArray")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: SpreadModelArrayGet200Response,
): Promise<Record<string, ModelForRecord[]>> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    knownProp: result.body["knownProp"].map((p) => ({ state: p["state"] })),
  };
}

/** Get call */
export async function get(
  context: Client,
  options: SpreadModelArrayGetOptionalParams = { requestOptions: {} },
): Promise<Record<string, ModelForRecord[]>> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: Record<string, ModelForRecord[]>,
  options: SpreadModelArrayPutOptionalParams = { requestOptions: {} },
): StreamableMethod<SpreadModelArrayPut204Response> {
  return context
    .path("/type/property/additionalProperties/spreadRecordModelArray")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _putDeserialize(
  result: SpreadModelArrayPut204Response,
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
  options: SpreadModelArrayPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
