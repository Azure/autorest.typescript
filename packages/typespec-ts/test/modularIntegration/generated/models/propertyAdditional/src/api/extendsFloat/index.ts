// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ExtendsFloatAdditionalProperties } from "../../models/models.js";
import {
  AdditionalPropertiesContext as Client,
  ExtendsFloatGet200Response,
  ExtendsFloatPut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  ExtendsFloatGetOptionalParams,
  ExtendsFloatPutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: ExtendsFloatGetOptionalParams = { requestOptions: {} },
): StreamableMethod<ExtendsFloatGet200Response> {
  return context
    .path("/type/property/additionalProperties/extendsRecordFloat")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: ExtendsFloatGet200Response,
): Promise<ExtendsFloatAdditionalProperties> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

/** Get call */
export async function get(
  context: Client,
  options: ExtendsFloatGetOptionalParams = { requestOptions: {} },
): Promise<ExtendsFloatAdditionalProperties> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: ExtendsFloatAdditionalProperties,
  options: ExtendsFloatPutOptionalParams = { requestOptions: {} },
): StreamableMethod<ExtendsFloatPut204Response> {
  return context
    .path("/type/property/additionalProperties/extendsRecordFloat")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _putDeserialize(
  result: ExtendsFloatPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function put(
  context: Client,
  body: ExtendsFloatAdditionalProperties,
  options: ExtendsFloatPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
