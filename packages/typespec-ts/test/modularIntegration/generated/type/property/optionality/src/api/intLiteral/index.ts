// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { IntLiteralProperty } from "../../models/models.js";
import {
  IntLiteralGetAll200Response,
  IntLiteralGetDefault200Response,
  IntLiteralPutAll204Response,
  IntLiteralPutDefault204Response,
  OptionalContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  IntLiteralGetAllOptionalParams,
  IntLiteralGetDefaultOptionalParams,
  IntLiteralPutAllOptionalParams,
  IntLiteralPutDefaultOptionalParams,
} from "../../models/options.js";

export function _getAllSend(
  context: Client,
  options: IntLiteralGetAllOptionalParams = { requestOptions: {} },
): StreamableMethod<IntLiteralGetAll200Response> {
  return context
    .path("/type/property/optional/int/literal/all")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getAllDeserialize(
  result: IntLiteralGetAll200Response,
): Promise<IntLiteralProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as IntLiteralGetAll200Response;
  return {
    property: _result.body["property"],
  };
}

/** Get models that will return all properties in the model */
export async function getAll(
  context: Client,
  options: IntLiteralGetAllOptionalParams = { requestOptions: {} },
): Promise<IntLiteralProperty> {
  const result = await _getAllSend(context, options);
  return _getAllDeserialize(result);
}

export function _getDefaultSend(
  context: Client,
  options: IntLiteralGetDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod<IntLiteralGetDefault200Response> {
  return context
    .path("/type/property/optional/int/literal/default")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDefaultDeserialize(
  result: IntLiteralGetDefault200Response,
): Promise<IntLiteralProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as IntLiteralGetDefault200Response;
  return {
    property: _result.body["property"],
  };
}

/** Get models that will return the default object */
export async function getDefault(
  context: Client,
  options: IntLiteralGetDefaultOptionalParams = { requestOptions: {} },
): Promise<IntLiteralProperty> {
  const result = await _getDefaultSend(context, options);
  return _getDefaultDeserialize(result);
}

export function _putAllSend(
  context: Client,
  body: IntLiteralProperty,
  options: IntLiteralPutAllOptionalParams = { requestOptions: {} },
): StreamableMethod<IntLiteralPutAll204Response> {
  return context
    .path("/type/property/optional/int/literal/all")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _putAllDeserialize(
  result: IntLiteralPutAll204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function putAll(
  context: Client,
  body: IntLiteralProperty,
  options: IntLiteralPutAllOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putAllSend(context, body, options);
  return _putAllDeserialize(result);
}

export function _putDefaultSend(
  context: Client,
  body: IntLiteralProperty,
  options: IntLiteralPutDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod<IntLiteralPutDefault204Response> {
  return context
    .path("/type/property/optional/int/literal/default")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _putDefaultDeserialize(
  result: IntLiteralPutDefault204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function putDefault(
  context: Client,
  body: IntLiteralProperty,
  options: IntLiteralPutDefaultOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putDefaultSend(context, body, options);
  return _putDefaultDeserialize(result);
}
