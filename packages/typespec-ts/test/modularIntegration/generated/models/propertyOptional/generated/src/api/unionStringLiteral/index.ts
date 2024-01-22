// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionStringLiteralProperty } from "../../models/models.js";
import {
  OptionalContext as Client,
  UnionStringLiteralGetAll200Response,
  UnionStringLiteralGetDefault200Response,
  UnionStringLiteralPutAll204Response,
  UnionStringLiteralPutDefault204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  UnionStringLiteralGetAllOptions,
  UnionStringLiteralGetDefaultOptions,
  UnionStringLiteralPutAllOptions,
  UnionStringLiteralPutDefaultOptions,
} from "../../models/options.js";

export function _unionStringLiteralGetAllSend(
  context: Client,
  options: UnionStringLiteralGetAllOptions = { requestOptions: {} },
): StreamableMethod<UnionStringLiteralGetAll200Response> {
  return context
    .path("/type/property/optional/union/string/literal/all")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _unionStringLiteralGetAllDeserialize(
  result: UnionStringLiteralGetAll200Response,
): Promise<UnionStringLiteralProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"] as any,
  };
}

/** Get models that will return all properties in the model */
export async function unionStringLiteralGetAll(
  context: Client,
  options: UnionStringLiteralGetAllOptions = { requestOptions: {} },
): Promise<UnionStringLiteralProperty> {
  const result = await _unionStringLiteralGetAllSend(context, options);
  return _unionStringLiteralGetAllDeserialize(result);
}

export function _unionStringLiteralGetDefaultSend(
  context: Client,
  options: UnionStringLiteralGetDefaultOptions = { requestOptions: {} },
): StreamableMethod<UnionStringLiteralGetDefault200Response> {
  return context
    .path("/type/property/optional/union/string/literal/default")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _unionStringLiteralGetDefaultDeserialize(
  result: UnionStringLiteralGetDefault200Response,
): Promise<UnionStringLiteralProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"] as any,
  };
}

/** Get models that will return the default object */
export async function unionStringLiteralGetDefault(
  context: Client,
  options: UnionStringLiteralGetDefaultOptions = { requestOptions: {} },
): Promise<UnionStringLiteralProperty> {
  const result = await _unionStringLiteralGetDefaultSend(context, options);
  return _unionStringLiteralGetDefaultDeserialize(result);
}

export function _unionStringLiteralPutAllSend(
  context: Client,
  body: UnionStringLiteralProperty,
  options: UnionStringLiteralPutAllOptions = { requestOptions: {} },
): StreamableMethod<UnionStringLiteralPutAll204Response> {
  return context
    .path("/type/property/optional/union/string/literal/all")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _unionStringLiteralPutAllDeserialize(
  result: UnionStringLiteralPutAll204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function unionStringLiteralPutAll(
  context: Client,
  body: UnionStringLiteralProperty,
  options: UnionStringLiteralPutAllOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _unionStringLiteralPutAllSend(context, body, options);
  return _unionStringLiteralPutAllDeserialize(result);
}

export function _unionStringLiteralPutDefaultSend(
  context: Client,
  body: UnionStringLiteralProperty,
  options: UnionStringLiteralPutDefaultOptions = { requestOptions: {} },
): StreamableMethod<UnionStringLiteralPutDefault204Response> {
  return context
    .path("/type/property/optional/union/string/literal/default")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _unionStringLiteralPutDefaultDeserialize(
  result: UnionStringLiteralPutDefault204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function unionStringLiteralPutDefault(
  context: Client,
  body: UnionStringLiteralProperty,
  options: UnionStringLiteralPutDefaultOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _unionStringLiteralPutDefaultSend(
    context,
    body,
    options,
  );
  return _unionStringLiteralPutDefaultDeserialize(result);
}
