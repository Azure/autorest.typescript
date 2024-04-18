// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ExtendsUnknownAdditionalPropertiesDerived } from "../../models/models.js";
import {
  AdditionalPropertiesContext as Client,
  ExtendsUnknownDerivedGet200Response,
  ExtendsUnknownDerivedPut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  ExtendsUnknownDerivedGetOptionalParams,
  ExtendsUnknownDerivedPutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: ExtendsUnknownDerivedGetOptionalParams = { requestOptions: {} },
): StreamableMethod<ExtendsUnknownDerivedGet200Response> {
  return context
    .path("/type/property/additionalProperties/extendsRecordUnknownDerived")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: ExtendsUnknownDerivedGet200Response,
): Promise<ExtendsUnknownAdditionalPropertiesDerived> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    name: result.body["name"],
    index: result.body["index"],
    age: result.body["age"],
  };
}

/** Get call */
export async function get(
  context: Client,
  options: ExtendsUnknownDerivedGetOptionalParams = { requestOptions: {} },
): Promise<ExtendsUnknownAdditionalPropertiesDerived> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: ExtendsUnknownAdditionalPropertiesDerived,
  options: ExtendsUnknownDerivedPutOptionalParams = { requestOptions: {} },
): StreamableMethod<ExtendsUnknownDerivedPut204Response> {
  return context
    .path("/type/property/additionalProperties/extendsRecordUnknownDerived")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"], index: body["index"], age: body["age"] },
    });
}

export async function _putDeserialize(
  result: ExtendsUnknownDerivedPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function put(
  context: Client,
  body: ExtendsUnknownAdditionalPropertiesDerived,
  options: ExtendsUnknownDerivedPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
