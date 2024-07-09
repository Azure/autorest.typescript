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
  UnionStringLiteralGetAllOptionalParams,
  UnionStringLiteralGetDefaultOptionalParams,
  UnionStringLiteralPutAllOptionalParams,
  UnionStringLiteralPutDefaultOptionalParams,
} from "../../models/options.js";

export function _getAllSend(
  context: Client,
  options: UnionStringLiteralGetAllOptionalParams = { requestOptions: {} },
): StreamableMethod<UnionStringLiteralGetAll200Response> {
  return context
    .path("/type/property/optional/union/string/literal/all")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getAllDeserialize(
  result: UnionStringLiteralGetAll200Response,
): Promise<UnionStringLiteralProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as UnionStringLiteralGetAll200Response;
  return {
    property: _result.body["property"],
  };
}

/** Get models that will return all properties in the model */
export async function getAll(
  context: Client,
  options: UnionStringLiteralGetAllOptionalParams = { requestOptions: {} },
): Promise<UnionStringLiteralProperty> {
  const result = await _getAllSend(context, options);
  return _getAllDeserialize(result);
}

export function _getDefaultSend(
  context: Client,
  options: UnionStringLiteralGetDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod<UnionStringLiteralGetDefault200Response> {
  return context
    .path("/type/property/optional/union/string/literal/default")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDefaultDeserialize(
  result: UnionStringLiteralGetDefault200Response,
): Promise<UnionStringLiteralProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as UnionStringLiteralGetDefault200Response;
  return {
    property: _result.body["property"],
  };
}

/** Get models that will return the default object */
export async function getDefault(
  context: Client,
  options: UnionStringLiteralGetDefaultOptionalParams = { requestOptions: {} },
): Promise<UnionStringLiteralProperty> {
  const result = await _getDefaultSend(context, options);
  return _getDefaultDeserialize(result);
}

export function _putAllSend(
  context: Client,
  body: UnionStringLiteralProperty,
  options: UnionStringLiteralPutAllOptionalParams = { requestOptions: {} },
): StreamableMethod<UnionStringLiteralPutAll204Response> {
  return context
    .path("/type/property/optional/union/string/literal/all")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _putAllDeserialize(
  result: UnionStringLiteralPutAll204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function putAll(
  context: Client,
  body: UnionStringLiteralProperty,
  options: UnionStringLiteralPutAllOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putAllSend(context, body, options);
  return _putAllDeserialize(result);
}

export function _putDefaultSend(
  context: Client,
  body: UnionStringLiteralProperty,
  options: UnionStringLiteralPutDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod<UnionStringLiteralPutDefault204Response> {
  return context
    .path("/type/property/optional/union/string/literal/default")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _putDefaultDeserialize(
  result: UnionStringLiteralPutDefault204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function putDefault(
  context: Client,
  body: UnionStringLiteralProperty,
  options: UnionStringLiteralPutDefaultOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putDefaultSend(context, body, options);
  return _putDefaultDeserialize(result);
}
