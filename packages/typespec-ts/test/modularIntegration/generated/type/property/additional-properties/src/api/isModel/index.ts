// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { IsModelAdditionalProperties } from "../../models/models.js";
import {
  AdditionalPropertiesContext as Client,
  IsModelGet200Response,
  IsModelPut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  IsModelGetOptionalParams,
  IsModelPutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: IsModelGetOptionalParams = { requestOptions: {} },
): StreamableMethod<IsModelGet200Response> {
  return context
    .path("/type/property/additionalProperties/isRecordModel")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: IsModelGet200Response,
): Promise<IsModelAdditionalProperties> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

/** Get call */
export async function get(
  context: Client,
  options: IsModelGetOptionalParams = { requestOptions: {} },
): Promise<IsModelAdditionalProperties> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: IsModelAdditionalProperties,
  options: IsModelPutOptionalParams = { requestOptions: {} },
): StreamableMethod<IsModelPut204Response> {
  return context
    .path("/type/property/additionalProperties/isRecordModel")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _putDeserialize(
  result: IsModelPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function put(
  context: Client,
  body: IsModelAdditionalProperties,
  options: IsModelPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
