// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionIntLiteralProperty } from "../../models/models.js";
import {
  OptionalContext as Client,
  UnionIntLiteralGetAll200Response,
  UnionIntLiteralGetDefault200Response,
  UnionIntLiteralPutAll204Response,
  UnionIntLiteralPutDefault204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  UnionIntLiteralGetAllOptions,
  UnionIntLiteralGetDefaultOptions,
  UnionIntLiteralPutAllOptions,
  UnionIntLiteralPutDefaultOptions,
} from "../../models/options.js";

export function _unionIntLiteralGetAllSend(
  context: Client,
  options: UnionIntLiteralGetAllOptions = { requestOptions: {} },
): StreamableMethod<UnionIntLiteralGetAll200Response> {
  return context
    .path("/type/property/optional/union/int/literal/all")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _unionIntLiteralGetAllDeserialize(
  result: UnionIntLiteralGetAll200Response,
): Promise<UnionIntLiteralProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"] as any,
  };
}

/** Get models that will return all properties in the model */
export async function unionIntLiteralGetAll(
  context: Client,
  options: UnionIntLiteralGetAllOptions = { requestOptions: {} },
): Promise<UnionIntLiteralProperty> {
  const result = await _unionIntLiteralGetAllSend(context, options);
  return _unionIntLiteralGetAllDeserialize(result);
}

export function _unionIntLiteralGetDefaultSend(
  context: Client,
  options: UnionIntLiteralGetDefaultOptions = { requestOptions: {} },
): StreamableMethod<UnionIntLiteralGetDefault200Response> {
  return context
    .path("/type/property/optional/union/int/literal/default")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _unionIntLiteralGetDefaultDeserialize(
  result: UnionIntLiteralGetDefault200Response,
): Promise<UnionIntLiteralProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"] as any,
  };
}

/** Get models that will return the default object */
export async function unionIntLiteralGetDefault(
  context: Client,
  options: UnionIntLiteralGetDefaultOptions = { requestOptions: {} },
): Promise<UnionIntLiteralProperty> {
  const result = await _unionIntLiteralGetDefaultSend(context, options);
  return _unionIntLiteralGetDefaultDeserialize(result);
}

export function _unionIntLiteralPutAllSend(
  context: Client,
  body: UnionIntLiteralProperty,
  options: UnionIntLiteralPutAllOptions = { requestOptions: {} },
): StreamableMethod<UnionIntLiteralPutAll204Response> {
  return context
    .path("/type/property/optional/union/int/literal/all")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _unionIntLiteralPutAllDeserialize(
  result: UnionIntLiteralPutAll204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function unionIntLiteralPutAll(
  context: Client,
  body: UnionIntLiteralProperty,
  options: UnionIntLiteralPutAllOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _unionIntLiteralPutAllSend(context, body, options);
  return _unionIntLiteralPutAllDeserialize(result);
}

export function _unionIntLiteralPutDefaultSend(
  context: Client,
  body: UnionIntLiteralProperty,
  options: UnionIntLiteralPutDefaultOptions = { requestOptions: {} },
): StreamableMethod<UnionIntLiteralPutDefault204Response> {
  return context
    .path("/type/property/optional/union/int/literal/default")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _unionIntLiteralPutDefaultDeserialize(
  result: UnionIntLiteralPutDefault204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function unionIntLiteralPutDefault(
  context: Client,
  body: UnionIntLiteralProperty,
  options: UnionIntLiteralPutDefaultOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _unionIntLiteralPutDefaultSend(context, body, options);
  return _unionIntLiteralPutDefaultDeserialize(result);
}
