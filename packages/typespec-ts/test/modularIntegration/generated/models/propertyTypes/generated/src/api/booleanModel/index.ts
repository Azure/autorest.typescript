// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BooleanProperty } from "../../models/models.js";
import {
  BooleanModelGet200Response,
  BooleanModelPut204Response,
  ValueTypesContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { GetOptions, PutOptions } from "../../models/options.js";

export function _booleanModelGetSend(
  context: Client,
  options: GetOptions = { requestOptions: {} },
): StreamableMethod<BooleanModelGet200Response> {
  return context
    .path("/type/property/value-types/boolean")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _booleanModelGetDeserialize(
  result: BooleanModelGet200Response,
): Promise<BooleanProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function booleanModelGet(
  context: Client,
  options: GetOptions = { requestOptions: {} },
): Promise<BooleanProperty> {
  const result = await _booleanModelGetSend(context, options);
  return _booleanModelGetDeserialize(result);
}

export function _booleanModelPutSend(
  context: Client,
  body: BooleanProperty,
  options: PutOptions = { requestOptions: {} },
): StreamableMethod<BooleanModelPut204Response> {
  return context
    .path("/type/property/value-types/boolean")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _booleanModelPutDeserialize(
  result: BooleanModelPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function booleanModelPut(
  context: Client,
  body: BooleanProperty,
  options: PutOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _booleanModelPutSend(context, body, options);
  return _booleanModelPutDeserialize(result);
}
