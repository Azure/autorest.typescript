// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DifferentSpreadModelArrayDerived } from "../../models/models.js";
import {
  AdditionalPropertiesContext as Client,
  ExtendsDifferentSpreadModelArrayGet200Response,
  ExtendsDifferentSpreadModelArrayPut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  ExtendsDifferentSpreadModelArrayGetOptionalParams,
  ExtendsDifferentSpreadModelArrayPutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: ExtendsDifferentSpreadModelArrayGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<ExtendsDifferentSpreadModelArrayGet200Response> {
  return context
    .path(
      "/type/property/additionalProperties/extendsDifferentSpreadModelArray",
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: ExtendsDifferentSpreadModelArrayGet200Response,
): Promise<DifferentSpreadModelArrayDerived> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

/** Get call */
export async function get(
  context: Client,
  options: ExtendsDifferentSpreadModelArrayGetOptionalParams = {
    requestOptions: {},
  },
): Promise<DifferentSpreadModelArrayDerived> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: DifferentSpreadModelArrayDerived,
  options: ExtendsDifferentSpreadModelArrayPutOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<ExtendsDifferentSpreadModelArrayPut204Response> {
  return context
    .path(
      "/type/property/additionalProperties/extendsDifferentSpreadModelArray",
    )
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _putDeserialize(
  result: ExtendsDifferentSpreadModelArrayPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function put(
  context: Client,
  body: DifferentSpreadModelArrayDerived,
  options: ExtendsDifferentSpreadModelArrayPutOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
