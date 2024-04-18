// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ModelForRecord } from "../../models/models.js";
import {
  AdditionalPropertiesContext as Client,
  IsModelArrayGet200Response,
  IsModelArrayPut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  IsModelArrayGetOptionalParams,
  IsModelArrayPutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: IsModelArrayGetOptionalParams = { requestOptions: {} },
): StreamableMethod<IsModelArrayGet200Response> {
  return context
    .path("/type/property/additionalProperties/isRecordModelArray")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: IsModelArrayGet200Response,
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
  options: IsModelArrayGetOptionalParams = { requestOptions: {} },
): Promise<Record<string, ModelForRecord[]>> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: Record<string, ModelForRecord[]>,
  options: IsModelArrayPutOptionalParams = { requestOptions: {} },
): StreamableMethod<IsModelArrayPut204Response> {
  return context
    .path("/type/property/additionalProperties/isRecordModelArray")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _putDeserialize(
  result: IsModelArrayPut204Response,
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
  options: IsModelArrayPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
