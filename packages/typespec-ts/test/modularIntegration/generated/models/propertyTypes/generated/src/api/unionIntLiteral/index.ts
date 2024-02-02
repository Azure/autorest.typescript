// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionIntLiteralProperty } from "../../models/models.js";
import {
  UnionIntLiteralGet200Response,
  UnionIntLiteralPut204Response,
  ValueTypesContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  UnionIntLiteralGetOptions,
  UnionIntLiteralPutOptions,
} from "../../models/options.js";

export function _unionIntLiteralGetSend(
  context: Client,
  options: UnionIntLiteralGetOptions = { requestOptions: {} },
): StreamableMethod<UnionIntLiteralGet200Response> {
  return context
    .path("/type/property/value-types/union/int/literal")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _unionIntLiteralGetDeserialize(
  result: UnionIntLiteralGet200Response,
): Promise<UnionIntLiteralProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function unionIntLiteralGet(
  context: Client,
  options: UnionIntLiteralGetOptions = { requestOptions: {} },
): Promise<UnionIntLiteralProperty> {
  const result = await _unionIntLiteralGetSend(context, options);
  return _unionIntLiteralGetDeserialize(result);
}

export function _unionIntLiteralPutSend(
  context: Client,
  body: UnionIntLiteralProperty,
  options: UnionIntLiteralPutOptions = { requestOptions: {} },
): StreamableMethod<UnionIntLiteralPut204Response> {
  return context
    .path("/type/property/value-types/union/int/literal")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _unionIntLiteralPutDeserialize(
  result: UnionIntLiteralPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function unionIntLiteralPut(
  context: Client,
  body: UnionIntLiteralProperty,
  options: UnionIntLiteralPutOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _unionIntLiteralPutSend(context, body, options);
  return _unionIntLiteralPutDeserialize(result);
}
