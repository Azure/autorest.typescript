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
  FloatLiteralGetAllOptions,
  FloatLiteralGetDefaultOptions,
  FloatLiteralPutAllOptions,
  FloatLiteralPutDefaultOptions,
} from "../../models/options.js";

export function _floatLiteralGetAllSend(
  context: Client,
  options: FloatLiteralGetAllOptions = { requestOptions: {} },
): StreamableMethod<FloatLiteralGetAll200Response> {
  return context
    .path("/type/property/optional/float/literal/all")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _floatLiteralGetAllDeserialize(
  result: FloatLiteralGetAll200Response,
): Promise<FloatLiteralProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get models that will return all properties in the model */
export async function floatLiteralGetAll(
  context: Client,
  options: FloatLiteralGetAllOptions = { requestOptions: {} },
): Promise<FloatLiteralProperty> {
  const result = await _floatLiteralGetAllSend(context, options);
  return _floatLiteralGetAllDeserialize(result);
}

export function _floatLiteralGetDefaultSend(
  context: Client,
  options: FloatLiteralGetDefaultOptions = { requestOptions: {} },
): StreamableMethod<FloatLiteralGetDefault200Response> {
  return context
    .path("/type/property/optional/float/literal/default")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _floatLiteralGetDefaultDeserialize(
  result: FloatLiteralGetDefault200Response,
): Promise<FloatLiteralProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get models that will return the default object */
export async function floatLiteralGetDefault(
  context: Client,
  options: FloatLiteralGetDefaultOptions = { requestOptions: {} },
): Promise<FloatLiteralProperty> {
  const result = await _floatLiteralGetDefaultSend(context, options);
  return _floatLiteralGetDefaultDeserialize(result);
}

export function _floatLiteralPutAllSend(
  context: Client,
  body: FloatLiteralProperty,
  options: FloatLiteralPutAllOptions = { requestOptions: {} },
): StreamableMethod<FloatLiteralPutAll204Response> {
  return context
    .path("/type/property/optional/float/literal/all")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _floatLiteralPutAllDeserialize(
  result: FloatLiteralPutAll204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function floatLiteralPutAll(
  context: Client,
  body: FloatLiteralProperty,
  options: FloatLiteralPutAllOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _floatLiteralPutAllSend(context, body, options);
  return _floatLiteralPutAllDeserialize(result);
}

export function _floatLiteralPutDefaultSend(
  context: Client,
  body: FloatLiteralProperty,
  options: FloatLiteralPutDefaultOptions = { requestOptions: {} },
): StreamableMethod<FloatLiteralPutDefault204Response> {
  return context
    .path("/type/property/optional/float/literal/default")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _floatLiteralPutDefaultDeserialize(
  result: FloatLiteralPutDefault204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function floatLiteralPutDefault(
  context: Client,
  body: FloatLiteralProperty,
  options: FloatLiteralPutDefaultOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _floatLiteralPutDefaultSend(context, body, options);
  return _floatLiteralPutDefaultDeserialize(result);
}
