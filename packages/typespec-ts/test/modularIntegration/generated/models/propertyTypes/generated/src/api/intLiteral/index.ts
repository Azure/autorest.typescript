// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { IntLiteralProperty } from "../../models/models.js";
import {
  IntLiteralGet200Response,
  IntLiteralPut204Response,
  ValueTypesContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  IntLiteralGetOptions,
  IntLiteralPutOptions,
} from "../../models/options.js";

export function _intLiteralGetSend(
  context: Client,
  options: IntLiteralGetOptions = { requestOptions: {} },
): StreamableMethod<IntLiteralGet200Response> {
  return context
    .path("/type/property/value-types/int/literal")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _intLiteralGetDeserialize(
  result: IntLiteralGet200Response,
): Promise<IntLiteralProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function intLiteralGet(
  context: Client,
  options: IntLiteralGetOptions = { requestOptions: {} },
): Promise<IntLiteralProperty> {
  const result = await _intLiteralGetSend(context, options);
  return _intLiteralGetDeserialize(result);
}

export function _intLiteralPutSend(
  context: Client,
  body: IntLiteralProperty,
  options: IntLiteralPutOptions = { requestOptions: {} },
): StreamableMethod<IntLiteralPut204Response> {
  return context
    .path("/type/property/value-types/int/literal")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _intLiteralPutDeserialize(
  result: IntLiteralPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function intLiteralPut(
  context: Client,
  body: IntLiteralProperty,
  options: IntLiteralPutOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _intLiteralPutSend(context, body, options);
  return _intLiteralPutDeserialize(result);
}
