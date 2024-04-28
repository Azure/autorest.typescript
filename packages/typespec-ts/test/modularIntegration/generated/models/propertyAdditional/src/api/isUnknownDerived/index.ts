// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { IsUnknownAdditionalPropertiesDerived } from "../../models/models.js";
import {
  AdditionalPropertiesContext as Client,
  IsUnknownDerivedGet200Response,
  IsUnknownDerivedPut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  IsUnknownDerivedGetOptionalParams,
  IsUnknownDerivedPutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: IsUnknownDerivedGetOptionalParams = { requestOptions: {} },
): StreamableMethod<IsUnknownDerivedGet200Response> {
  return context
    .path("/type/property/additionalProperties/isRecordUnknownDerived")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: IsUnknownDerivedGet200Response,
): Promise<IsUnknownAdditionalPropertiesDerived> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

/** Get call */
export async function get(
  context: Client,
  options: IsUnknownDerivedGetOptionalParams = { requestOptions: {} },
): Promise<IsUnknownAdditionalPropertiesDerived> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: IsUnknownAdditionalPropertiesDerived,
  options: IsUnknownDerivedPutOptionalParams = { requestOptions: {} },
): StreamableMethod<IsUnknownDerivedPut204Response> {
  return context
    .path("/type/property/additionalProperties/isRecordUnknownDerived")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _putDeserialize(
  result: IsUnknownDerivedPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function put(
  context: Client,
  body: IsUnknownAdditionalPropertiesDerived,
  options: IsUnknownDerivedPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
