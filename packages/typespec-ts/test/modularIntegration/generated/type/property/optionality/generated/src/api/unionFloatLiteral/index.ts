// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionFloatLiteralProperty } from "../../models/models.js";
import {
  OptionalContext as Client,
  UnionFloatLiteralGetAll200Response,
  UnionFloatLiteralGetDefault200Response,
  UnionFloatLiteralPutAll204Response,
  UnionFloatLiteralPutDefault204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  UnionFloatLiteralGetAllOptionalParams,
  UnionFloatLiteralGetDefaultOptionalParams,
  UnionFloatLiteralPutAllOptionalParams,
  UnionFloatLiteralPutDefaultOptionalParams,
} from "../../models/options.js";

export function _unionFloatLiteralGetAllSend(
  context: Client,
  options: UnionFloatLiteralGetAllOptionalParams = { requestOptions: {} },
): StreamableMethod<UnionFloatLiteralGetAll200Response> {
  return context
    .path("/type/property/optional/union/float/literal/all")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _unionFloatLiteralGetAllDeserialize(
  result: UnionFloatLiteralGetAll200Response,
): Promise<UnionFloatLiteralProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get models that will return all properties in the model */
export async function unionFloatLiteralGetAll(
  context: Client,
  options: UnionFloatLiteralGetAllOptionalParams = { requestOptions: {} },
): Promise<UnionFloatLiteralProperty> {
  const result = await _unionFloatLiteralGetAllSend(context, options);
  return _unionFloatLiteralGetAllDeserialize(result);
}

export function _unionFloatLiteralGetDefaultSend(
  context: Client,
  options: UnionFloatLiteralGetDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod<UnionFloatLiteralGetDefault200Response> {
  return context
    .path("/type/property/optional/union/float/literal/default")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _unionFloatLiteralGetDefaultDeserialize(
  result: UnionFloatLiteralGetDefault200Response,
): Promise<UnionFloatLiteralProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get models that will return the default object */
export async function unionFloatLiteralGetDefault(
  context: Client,
  options: UnionFloatLiteralGetDefaultOptionalParams = { requestOptions: {} },
): Promise<UnionFloatLiteralProperty> {
  const result = await _unionFloatLiteralGetDefaultSend(context, options);
  return _unionFloatLiteralGetDefaultDeserialize(result);
}

export function _unionFloatLiteralPutAllSend(
  context: Client,
  body: UnionFloatLiteralProperty,
  options: UnionFloatLiteralPutAllOptionalParams = { requestOptions: {} },
): StreamableMethod<UnionFloatLiteralPutAll204Response> {
  return context
    .path("/type/property/optional/union/float/literal/all")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _unionFloatLiteralPutAllDeserialize(
  result: UnionFloatLiteralPutAll204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function unionFloatLiteralPutAll(
  context: Client,
  body: UnionFloatLiteralProperty,
  options: UnionFloatLiteralPutAllOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _unionFloatLiteralPutAllSend(context, body, options);
  return _unionFloatLiteralPutAllDeserialize(result);
}

export function _unionFloatLiteralPutDefaultSend(
  context: Client,
  body: UnionFloatLiteralProperty,
  options: UnionFloatLiteralPutDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod<UnionFloatLiteralPutDefault204Response> {
  return context
    .path("/type/property/optional/union/float/literal/default")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _unionFloatLiteralPutDefaultDeserialize(
  result: UnionFloatLiteralPutDefault204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function unionFloatLiteralPutDefault(
  context: Client,
  body: UnionFloatLiteralProperty,
  options: UnionFloatLiteralPutDefaultOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _unionFloatLiteralPutDefaultSend(context, body, options);
  return _unionFloatLiteralPutDefaultDeserialize(result);
}
