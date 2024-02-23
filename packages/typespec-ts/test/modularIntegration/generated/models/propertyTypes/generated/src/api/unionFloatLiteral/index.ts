// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionFloatLiteralProperty } from "../../models/models.js";
import {
  UnionFloatLiteralGet200Response,
  UnionFloatLiteralPut204Response,
  ValueTypesContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  UnionFloatLiteralGetOptions,
  UnionFloatLiteralPutOptions,
} from "../../models/options.js";

export function _unionFloatLiteralGetSend(
  context: Client,
  options: UnionFloatLiteralGetOptions = { requestOptions: {} },
): StreamableMethod<UnionFloatLiteralGet200Response> {
  return context
    .path("/type/property/value-types/union/float/literal")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _unionFloatLiteralGetDeserialize(
  result: UnionFloatLiteralGet200Response,
): Promise<UnionFloatLiteralProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function unionFloatLiteralGet(
  context: Client,
  options: UnionFloatLiteralGetOptions = { requestOptions: {} },
): Promise<UnionFloatLiteralProperty> {
  const result = await _unionFloatLiteralGetSend(context, options);
  return _unionFloatLiteralGetDeserialize(result);
}

export function _unionFloatLiteralPutSend(
  context: Client,
  body: UnionFloatLiteralProperty,
  options: UnionFloatLiteralPutOptions = { requestOptions: {} },
): StreamableMethod<UnionFloatLiteralPut204Response> {
  return context
    .path("/type/property/value-types/union/float/literal")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _unionFloatLiteralPutDeserialize(
  result: UnionFloatLiteralPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function unionFloatLiteralPut(
  context: Client,
  body: UnionFloatLiteralProperty,
  options: UnionFloatLiteralPutOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _unionFloatLiteralPutSend(context, body, options);
  return _unionFloatLiteralPutDeserialize(result);
}
