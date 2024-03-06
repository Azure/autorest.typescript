// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionStringLiteralProperty } from "../../models/models.js";
import {
  UnionStringLiteralGet200Response,
  UnionStringLiteralPut204Response,
  ValueTypesContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  UnionStringLiteralGetOptions,
  UnionStringLiteralPutOptions,
} from "../../models/options.js";

export function _unionStringLiteralGetSend(
  context: Client,
  options: UnionStringLiteralGetOptions = { requestOptions: {} },
): StreamableMethod<UnionStringLiteralGet200Response> {
  return context
    .path("/type/property/value-types/union/string/literal")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _unionStringLiteralGetDeserialize(
  result: UnionStringLiteralGet200Response,
): Promise<UnionStringLiteralProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function unionStringLiteralGet(
  context: Client,
  options: UnionStringLiteralGetOptions = { requestOptions: {} },
): Promise<UnionStringLiteralProperty> {
  const result = await _unionStringLiteralGetSend(context, options);
  return _unionStringLiteralGetDeserialize(result);
}

export function _unionStringLiteralPutSend(
  context: Client,
  body: UnionStringLiteralProperty,
  options: UnionStringLiteralPutOptions = { requestOptions: {} },
): StreamableMethod<UnionStringLiteralPut204Response> {
  return context
    .path("/type/property/value-types/union/string/literal")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _unionStringLiteralPutDeserialize(
  result: UnionStringLiteralPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function unionStringLiteralPut(
  context: Client,
  body: UnionStringLiteralProperty,
  options: UnionStringLiteralPutOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _unionStringLiteralPutSend(context, body, options);
  return _unionStringLiteralPutDeserialize(result);
}
