// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DifferentSpreadModelDerived } from "../../models/models.js";
import {
  AdditionalPropertiesContext as Client,
  ExtendsDifferentSpreadModelGet200Response,
  ExtendsDifferentSpreadModelPut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  ExtendsDifferentSpreadModelGetOptionalParams,
  ExtendsDifferentSpreadModelPutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: ExtendsDifferentSpreadModelGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<ExtendsDifferentSpreadModelGet200Response> {
  return context
    .path("/type/property/additionalProperties/extendsDifferentSpreadModel")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: ExtendsDifferentSpreadModelGet200Response,
): Promise<DifferentSpreadModelDerived> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    knownProp: result.body["knownProp"],
    derivedProp: { state: result.body.derivedProp["state"] },
  };
}

/** Get call */
export async function get(
  context: Client,
  options: ExtendsDifferentSpreadModelGetOptionalParams = {
    requestOptions: {},
  },
): Promise<DifferentSpreadModelDerived> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: DifferentSpreadModelDerived,
  options: ExtendsDifferentSpreadModelPutOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<ExtendsDifferentSpreadModelPut204Response> {
  return context
    .path("/type/property/additionalProperties/extendsDifferentSpreadModel")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        knownProp: body["knownProp"],
        derivedProp: { state: body.derivedProp["state"] },
      },
    });
}

export async function _putDeserialize(
  result: ExtendsDifferentSpreadModelPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function put(
  context: Client,
  body: DifferentSpreadModelDerived,
  options: ExtendsDifferentSpreadModelPutOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
