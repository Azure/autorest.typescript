// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  extendsUnknownAdditionalPropertiesSerializer,
  ExtendsUnknownAdditionalProperties,
} from "../../models/models.js";
import {
  AdditionalPropertiesContext as Client,
  ExtendsUnknownGet200Response,
  ExtendsUnknownPut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  ExtendsUnknownGetOptionalParams,
  ExtendsUnknownPutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: ExtendsUnknownGetOptionalParams = { requestOptions: {} },
): StreamableMethod<ExtendsUnknownGet200Response> {
  return context
    .path("/type/property/additionalProperties/extendsRecordUnknown")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: ExtendsUnknownGet200Response,
): Promise<ExtendsUnknownAdditionalProperties> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body as any;
}

/** Get call */
export async function get(
  context: Client,
  options: ExtendsUnknownGetOptionalParams = { requestOptions: {} },
): Promise<ExtendsUnknownAdditionalProperties> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: ExtendsUnknownAdditionalProperties,
  options: ExtendsUnknownPutOptionalParams = { requestOptions: {} },
): StreamableMethod<ExtendsUnknownPut204Response> {
  return context
    .path("/type/property/additionalProperties/extendsRecordUnknown")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: extendsUnknownAdditionalPropertiesSerializer(body),
    });
}

export async function _putDeserialize(
  result: ExtendsUnknownPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function put(
  context: Client,
  body: ExtendsUnknownAdditionalProperties,
  options: ExtendsUnknownPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
