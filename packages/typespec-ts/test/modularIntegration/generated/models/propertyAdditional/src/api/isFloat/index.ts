// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { IsFloatAdditionalProperties } from "../../models/models.js";
import {
  AdditionalPropertiesContext as Client,
  IsFloatGet200Response,
  IsFloatPut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  IsFloatGetOptionalParams,
  IsFloatPutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: IsFloatGetOptionalParams = { requestOptions: {} },
): StreamableMethod<IsFloatGet200Response> {
  return context
    .path("/type/property/additionalProperties/isRecordFloat")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: IsFloatGet200Response,
): Promise<IsFloatAdditionalProperties> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
  };
}

/** Get call */
export async function get(
  context: Client,
  options: IsFloatGetOptionalParams = { requestOptions: {} },
): Promise<IsFloatAdditionalProperties> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: IsFloatAdditionalProperties,
  options: IsFloatPutOptionalParams = { requestOptions: {} },
): StreamableMethod<IsFloatPut204Response> {
  return context
    .path("/type/property/additionalProperties/isRecordFloat")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _putDeserialize(
  result: IsFloatPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function put(
  context: Client,
  body: IsFloatAdditionalProperties,
  options: IsFloatPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
