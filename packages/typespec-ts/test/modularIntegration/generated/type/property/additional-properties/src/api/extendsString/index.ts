// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ExtendsStringAdditionalProperties } from "../../models/models.js";
import {
  AdditionalPropertiesContext as Client,
  ExtendsStringGet200Response,
  ExtendsStringPut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  ExtendsStringGetOptionalParams,
  ExtendsStringPutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: ExtendsStringGetOptionalParams = { requestOptions: {} },
): StreamableMethod<ExtendsStringGet200Response> {
  return context
    .path("/type/property/additionalProperties/extendsRecordString")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: ExtendsStringGet200Response,
): Promise<ExtendsStringAdditionalProperties> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

/** Get call */
export async function get(
  context: Client,
  options: ExtendsStringGetOptionalParams = { requestOptions: {} },
): Promise<ExtendsStringAdditionalProperties> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: ExtendsStringAdditionalProperties,
  options: ExtendsStringPutOptionalParams = { requestOptions: {} },
): StreamableMethod<ExtendsStringPut204Response> {
  return context
    .path("/type/property/additionalProperties/extendsRecordString")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _putDeserialize(
  result: ExtendsStringPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function put(
  context: Client,
  body: ExtendsStringAdditionalProperties,
  options: ExtendsStringPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
