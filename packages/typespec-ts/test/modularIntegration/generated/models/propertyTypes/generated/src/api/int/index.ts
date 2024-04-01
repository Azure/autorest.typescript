// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { IntProperty } from "../../models/models.js";
import {
  IntGet200Response,
  IntPut204Response,
  ValueTypesContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { IntGetOptions, IntPutOptions } from "../../models/options.js";

export function _intGetSend(
  context: Client,
  options: IntGetOptions = { requestOptions: {} },
): StreamableMethod<IntGet200Response> {
  return context
    .path("/type/property/value-types/int")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _intGetDeserialize(
  result: IntGet200Response,
): Promise<IntProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function intGet(
  context: Client,
  options: IntGetOptions = { requestOptions: {} },
): Promise<IntProperty> {
  const result = await _intGetSend(context, options);
  return _intGetDeserialize(result);
}

export function _intPutSend(
  context: Client,
  body: IntProperty,
  options: IntPutOptions = { requestOptions: {} },
): StreamableMethod<IntPut204Response> {
  return context
    .path("/type/property/value-types/int")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _intPutDeserialize(
  result: IntPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function intPut(
  context: Client,
  body: IntProperty,
  options: IntPutOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _intPutSend(context, body, options);
  return _intPutDeserialize(result);
}
