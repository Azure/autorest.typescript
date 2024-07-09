// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { FloatLiteralProperty } from "../../models/models.js";
import {
  FloatLiteralGetAll200Response,
  FloatLiteralGetDefault200Response,
  FloatLiteralPutAll204Response,
  FloatLiteralPutDefault204Response,
  OptionalContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  FloatLiteralGetAllOptionalParams,
  FloatLiteralGetDefaultOptionalParams,
  FloatLiteralPutAllOptionalParams,
  FloatLiteralPutDefaultOptionalParams,
} from "../../models/options.js";

export function _getAllSend(
  context: Client,
  options: FloatLiteralGetAllOptionalParams = { requestOptions: {} },
): StreamableMethod<FloatLiteralGetAll200Response> {
  return context
    .path("/type/property/optional/float/literal/all")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getAllDeserialize(
  result: FloatLiteralGetAll200Response,
): Promise<FloatLiteralProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as FloatLiteralGetAll200Response;
  return {
    property: _result.body["property"],
  };
}

/** Get models that will return all properties in the model */
export async function getAll(
  context: Client,
  options: FloatLiteralGetAllOptionalParams = { requestOptions: {} },
): Promise<FloatLiteralProperty> {
  const result = await _getAllSend(context, options);
  return _getAllDeserialize(result);
}

export function _getDefaultSend(
  context: Client,
  options: FloatLiteralGetDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod<FloatLiteralGetDefault200Response> {
  return context
    .path("/type/property/optional/float/literal/default")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDefaultDeserialize(
  result: FloatLiteralGetDefault200Response,
): Promise<FloatLiteralProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as FloatLiteralGetDefault200Response;
  return {
    property: _result.body["property"],
  };
}

/** Get models that will return the default object */
export async function getDefault(
  context: Client,
  options: FloatLiteralGetDefaultOptionalParams = { requestOptions: {} },
): Promise<FloatLiteralProperty> {
  const result = await _getDefaultSend(context, options);
  return _getDefaultDeserialize(result);
}

export function _putAllSend(
  context: Client,
  body: FloatLiteralProperty,
  options: FloatLiteralPutAllOptionalParams = { requestOptions: {} },
): StreamableMethod<FloatLiteralPutAll204Response> {
  return context
    .path("/type/property/optional/float/literal/all")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _putAllDeserialize(
  result: FloatLiteralPutAll204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function putAll(
  context: Client,
  body: FloatLiteralProperty,
  options: FloatLiteralPutAllOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putAllSend(context, body, options);
  return _putAllDeserialize(result);
}

export function _putDefaultSend(
  context: Client,
  body: FloatLiteralProperty,
  options: FloatLiteralPutDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod<FloatLiteralPutDefault204Response> {
  return context
    .path("/type/property/optional/float/literal/default")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _putDefaultDeserialize(
  result: FloatLiteralPutDefault204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function putDefault(
  context: Client,
  body: FloatLiteralProperty,
  options: FloatLiteralPutDefaultOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putDefaultSend(context, body, options);
  return _putDefaultDeserialize(result);
}
