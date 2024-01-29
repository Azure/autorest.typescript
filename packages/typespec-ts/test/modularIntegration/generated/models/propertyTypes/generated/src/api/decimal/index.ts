// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DecimalProperty } from "../../models/models.js";
import {
  DecimalGet200Response,
  DecimalPut204Response,
  ValueTypesContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { DecimalGetOptions, DecimalPutOptions } from "../../models/options.js";

export function _decimalGetSend(
  context: Client,
  options: DecimalGetOptions = { requestOptions: {} },
): StreamableMethod<DecimalGet200Response> {
  return context
    .path("/type/property/value-types/decimal")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _decimalGetDeserialize(
  result: DecimalGet200Response,
): Promise<DecimalProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function decimalGet(
  context: Client,
  options: DecimalGetOptions = { requestOptions: {} },
): Promise<DecimalProperty> {
  const result = await _decimalGetSend(context, options);
  return _decimalGetDeserialize(result);
}

export function _decimalPutSend(
  context: Client,
  body: DecimalProperty,
  options: DecimalPutOptions = { requestOptions: {} },
): StreamableMethod<DecimalPut204Response> {
  return context
    .path("/type/property/value-types/decimal")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _decimalPutDeserialize(
  result: DecimalPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function decimalPut(
  context: Client,
  body: DecimalProperty,
  options: DecimalPutOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _decimalPutSend(context, body, options);
  return _decimalPutDeserialize(result);
}
