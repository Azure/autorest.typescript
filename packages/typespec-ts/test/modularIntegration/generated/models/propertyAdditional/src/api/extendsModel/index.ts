// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ExtendsModelAdditionalProperties } from "../../models/models.js";
import {
  AdditionalPropertiesContext as Client,
  ExtendsModelGet200Response,
  ExtendsModelPut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  ExtendsModelGetOptionalParams,
  ExtendsModelPutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: ExtendsModelGetOptionalParams = { requestOptions: {} },
): StreamableMethod<ExtendsModelGet200Response> {
  return context
    .path("/type/property/additionalProperties/extendsRecordModel")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: ExtendsModelGet200Response,
): Promise<ExtendsModelAdditionalProperties> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    knownProp: { state: result.body.knownProp["state"] },
  };
}

/** Get call */
export async function get(
  context: Client,
  options: ExtendsModelGetOptionalParams = { requestOptions: {} },
): Promise<ExtendsModelAdditionalProperties> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: ExtendsModelAdditionalProperties,
  options: ExtendsModelPutOptionalParams = { requestOptions: {} },
): StreamableMethod<ExtendsModelPut204Response> {
  return context
    .path("/type/property/additionalProperties/extendsRecordModel")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { knownProp: { state: body.knownProp["state"] } },
    });
}

export async function _putDeserialize(
  result: ExtendsModelPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function put(
  context: Client,
  body: ExtendsModelAdditionalProperties,
  options: ExtendsModelPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
