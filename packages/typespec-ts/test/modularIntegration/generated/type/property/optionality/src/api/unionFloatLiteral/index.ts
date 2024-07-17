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
} from "../options.js";

export function _getAllSend(
  context: Client,
  options: UnionFloatLiteralGetAllOptionalParams = { requestOptions: {} },
): StreamableMethod<UnionFloatLiteralGetAll200Response> {
  return context
    .path("/type/property/optional/union/float/literal/all")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getAllDeserialize(
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
export async function getAll(
  context: Client,
  options: UnionFloatLiteralGetAllOptionalParams = { requestOptions: {} },
): Promise<UnionFloatLiteralProperty> {
  const result = await _getAllSend(context, options);
  return _getAllDeserialize(result);
}

export function _getDefaultSend(
  context: Client,
  options: UnionFloatLiteralGetDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod<UnionFloatLiteralGetDefault200Response> {
  return context
    .path("/type/property/optional/union/float/literal/default")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDefaultDeserialize(
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
export async function getDefault(
  context: Client,
  options: UnionFloatLiteralGetDefaultOptionalParams = { requestOptions: {} },
): Promise<UnionFloatLiteralProperty> {
  const result = await _getDefaultSend(context, options);
  return _getDefaultDeserialize(result);
}

export function _putAllSend(
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

export async function _putAllDeserialize(
  result: UnionFloatLiteralPutAll204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function putAll(
  context: Client,
  body: UnionFloatLiteralProperty,
  options: UnionFloatLiteralPutAllOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putAllSend(context, body, options);
  return _putAllDeserialize(result);
}

export function _putDefaultSend(
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

export async function _putDefaultDeserialize(
  result: UnionFloatLiteralPutDefault204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function putDefault(
  context: Client,
  body: UnionFloatLiteralProperty,
  options: UnionFloatLiteralPutDefaultOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putDefaultSend(context, body, options);
  return _putDefaultDeserialize(result);
}
