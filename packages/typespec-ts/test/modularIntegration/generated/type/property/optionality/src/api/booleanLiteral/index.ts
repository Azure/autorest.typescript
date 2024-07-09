// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BooleanLiteralProperty } from "../../models/models.js";
import {
  BooleanLiteralGetAll200Response,
  BooleanLiteralGetDefault200Response,
  BooleanLiteralPutAll204Response,
  BooleanLiteralPutDefault204Response,
  OptionalContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  BooleanLiteralGetAllOptionalParams,
  BooleanLiteralGetDefaultOptionalParams,
  BooleanLiteralPutAllOptionalParams,
  BooleanLiteralPutDefaultOptionalParams,
} from "../../models/options.js";

export function _getAllSend(
  context: Client,
  options: BooleanLiteralGetAllOptionalParams = { requestOptions: {} },
): StreamableMethod<BooleanLiteralGetAll200Response> {
  return context
    .path("/type/property/optional/boolean/literal/all")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getAllDeserialize(
  result: BooleanLiteralGetAll200Response,
): Promise<BooleanLiteralProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as BooleanLiteralGetAll200Response;
  return {
    property: _result.body["property"],
  };
}

/** Get models that will return all properties in the model */
export async function getAll(
  context: Client,
  options: BooleanLiteralGetAllOptionalParams = { requestOptions: {} },
): Promise<BooleanLiteralProperty> {
  const result = await _getAllSend(context, options);
  return _getAllDeserialize(result);
}

export function _getDefaultSend(
  context: Client,
  options: BooleanLiteralGetDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod<BooleanLiteralGetDefault200Response> {
  return context
    .path("/type/property/optional/boolean/literal/default")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDefaultDeserialize(
  result: BooleanLiteralGetDefault200Response,
): Promise<BooleanLiteralProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as BooleanLiteralGetDefault200Response;
  return {
    property: _result.body["property"],
  };
}

/** Get models that will return the default object */
export async function getDefault(
  context: Client,
  options: BooleanLiteralGetDefaultOptionalParams = { requestOptions: {} },
): Promise<BooleanLiteralProperty> {
  const result = await _getDefaultSend(context, options);
  return _getDefaultDeserialize(result);
}

export function _putAllSend(
  context: Client,
  body: BooleanLiteralProperty,
  options: BooleanLiteralPutAllOptionalParams = { requestOptions: {} },
): StreamableMethod<BooleanLiteralPutAll204Response> {
  return context
    .path("/type/property/optional/boolean/literal/all")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _putAllDeserialize(
  result: BooleanLiteralPutAll204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function putAll(
  context: Client,
  body: BooleanLiteralProperty,
  options: BooleanLiteralPutAllOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putAllSend(context, body, options);
  return _putAllDeserialize(result);
}

export function _putDefaultSend(
  context: Client,
  body: BooleanLiteralProperty,
  options: BooleanLiteralPutDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod<BooleanLiteralPutDefault204Response> {
  return context
    .path("/type/property/optional/boolean/literal/default")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _putDefaultDeserialize(
  result: BooleanLiteralPutDefault204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function putDefault(
  context: Client,
  body: BooleanLiteralProperty,
  options: BooleanLiteralPutDefaultOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putDefaultSend(context, body, options);
  return _putDefaultDeserialize(result);
}
