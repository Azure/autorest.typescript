// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DifferentSpreadStringDerived } from "../../models/models.js";
import {
  AdditionalPropertiesContext as Client,
  ExtendsDifferentSpreadStringGet200Response,
  ExtendsDifferentSpreadStringPut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  ExtendsDifferentSpreadStringGetOptionalParams,
  ExtendsDifferentSpreadStringPutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: ExtendsDifferentSpreadStringGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<ExtendsDifferentSpreadStringGet200Response> {
  return context
    .path("/type/property/additionalProperties/extendsDifferentSpreadString")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: ExtendsDifferentSpreadStringGet200Response,
): Promise<DifferentSpreadStringDerived> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    derivedProp: result.body["derivedProp"],
  };
}

/** Get call */
export async function get(
  context: Client,
  options: ExtendsDifferentSpreadStringGetOptionalParams = {
    requestOptions: {},
  },
): Promise<DifferentSpreadStringDerived> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: DifferentSpreadStringDerived,
  options: ExtendsDifferentSpreadStringPutOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<ExtendsDifferentSpreadStringPut204Response> {
  return context
    .path("/type/property/additionalProperties/extendsDifferentSpreadString")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { id: body["id"], derivedProp: body["derivedProp"] },
    });
}

export async function _putDeserialize(
  result: ExtendsDifferentSpreadStringPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function put(
  context: Client,
  body: DifferentSpreadStringDerived,
  options: ExtendsDifferentSpreadStringPutOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
