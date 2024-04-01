// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { FloatLiteralProperty } from "../../models/models.js";
import {
  FloatLiteralGet200Response,
  FloatLiteralPut204Response,
  ValueTypesContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  FloatLiteralGetOptions,
  FloatLiteralPutOptions,
} from "../../models/options.js";

export function _floatLiteralGetSend(
  context: Client,
  options: FloatLiteralGetOptions = { requestOptions: {} },
): StreamableMethod<FloatLiteralGet200Response> {
  return context
    .path("/type/property/value-types/float/literal")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _floatLiteralGetDeserialize(
  result: FloatLiteralGet200Response,
): Promise<FloatLiteralProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function floatLiteralGet(
  context: Client,
  options: FloatLiteralGetOptions = { requestOptions: {} },
): Promise<FloatLiteralProperty> {
  const result = await _floatLiteralGetSend(context, options);
  return _floatLiteralGetDeserialize(result);
}

export function _floatLiteralPutSend(
  context: Client,
  body: FloatLiteralProperty,
  options: FloatLiteralPutOptions = { requestOptions: {} },
): StreamableMethod<FloatLiteralPut204Response> {
  return context
    .path("/type/property/value-types/float/literal")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _floatLiteralPutDeserialize(
  result: FloatLiteralPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function floatLiteralPut(
  context: Client,
  body: FloatLiteralProperty,
  options: FloatLiteralPutOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _floatLiteralPutSend(context, body, options);
  return _floatLiteralPutDeserialize(result);
}
