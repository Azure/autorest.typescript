// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  extendsModelArrayAdditionalPropertiesSerializer,
  ExtendsModelArrayAdditionalProperties,
} from "../../models/models.js";
import {
  AdditionalPropertiesContext as Client,
  ExtendsModelArrayGet200Response,
  ExtendsModelArrayPut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  ExtendsModelArrayGetOptionalParams,
  ExtendsModelArrayPutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: ExtendsModelArrayGetOptionalParams = { requestOptions: {} },
): StreamableMethod<ExtendsModelArrayGet200Response> {
  return context
    .path("/type/property/additionalProperties/extendsRecordModelArray")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: ExtendsModelArrayGet200Response,
): Promise<ExtendsModelArrayAdditionalProperties> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body as any;
}

/** Get call */
export async function get(
  context: Client,
  options: ExtendsModelArrayGetOptionalParams = { requestOptions: {} },
): Promise<ExtendsModelArrayAdditionalProperties> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: ExtendsModelArrayAdditionalProperties,
  options: ExtendsModelArrayPutOptionalParams = { requestOptions: {} },
): StreamableMethod<ExtendsModelArrayPut204Response> {
  return context
    .path("/type/property/additionalProperties/extendsRecordModelArray")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: extendsModelArrayAdditionalPropertiesSerializer(body),
    });
}

export async function _putDeserialize(
  result: ExtendsModelArrayPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function put(
  context: Client,
  body: ExtendsModelArrayAdditionalProperties,
  options: ExtendsModelArrayPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
