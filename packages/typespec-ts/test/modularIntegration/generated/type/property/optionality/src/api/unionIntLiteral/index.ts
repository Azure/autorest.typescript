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
  UnionIntLiteralGetAllOptionalParams,
  UnionIntLiteralGetDefaultOptionalParams,
  UnionIntLiteralPutAllOptionalParams,
  UnionIntLiteralPutDefaultOptionalParams,
} from "../../models/options.js";

export function _getAllSend(
  context: Client,
  options: UnionIntLiteralGetAllOptionalParams = { requestOptions: {} },
): StreamableMethod<UnionIntLiteralGetAll200Response> {
  return context
    .path("/type/property/optional/union/int/literal/all")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getAllDeserialize(
  result: UnionIntLiteralGetAll200Response,
): Promise<UnionIntLiteralProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get models that will return all properties in the model */
export async function getAll(
  context: Client,
  options: UnionIntLiteralGetAllOptionalParams = { requestOptions: {} },
): Promise<UnionIntLiteralProperty> {
  const result = await _getAllSend(context, options);
  return _getAllDeserialize(result);
}

export function _getDefaultSend(
  context: Client,
  options: UnionIntLiteralGetDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod<UnionIntLiteralGetDefault200Response> {
  return context
    .path("/type/property/optional/union/int/literal/default")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDefaultDeserialize(
  result: UnionIntLiteralGetDefault200Response,
): Promise<UnionIntLiteralProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get models that will return the default object */
export async function getDefault(
  context: Client,
  options: UnionIntLiteralGetDefaultOptionalParams = { requestOptions: {} },
): Promise<UnionIntLiteralProperty> {
  const result = await _getDefaultSend(context, options);
  return _getDefaultDeserialize(result);
}

export function _putAllSend(
  context: Client,
  body: UnionIntLiteralProperty,
  options: UnionIntLiteralPutAllOptionalParams = { requestOptions: {} },
): StreamableMethod<UnionIntLiteralPutAll204Response> {
  return context
    .path("/type/property/optional/union/int/literal/all")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _putAllDeserialize(
  result: UnionIntLiteralPutAll204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function putAll(
  context: Client,
  body: UnionIntLiteralProperty,
  options: UnionIntLiteralPutAllOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putAllSend(context, body, options);
  return _putAllDeserialize(result);
}

export function _putDefaultSend(
  context: Client,
  body: UnionIntLiteralProperty,
  options: UnionIntLiteralPutDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod<UnionIntLiteralPutDefault204Response> {
  return context
    .path("/type/property/optional/union/int/literal/default")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _putDefaultDeserialize(
  result: UnionIntLiteralPutDefault204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function putDefault(
  context: Client,
  body: UnionIntLiteralProperty,
  options: UnionIntLiteralPutDefaultOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putDefaultSend(context, body, options);
  return _putDefaultDeserialize(result);
}
