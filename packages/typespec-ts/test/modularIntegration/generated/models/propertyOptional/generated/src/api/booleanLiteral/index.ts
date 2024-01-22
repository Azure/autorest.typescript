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
  BooleanLiteralGetAllOptions,
  BooleanLiteralGetDefaultOptions,
  BooleanLiteralPutAllOptions,
  BooleanLiteralPutDefaultOptions,
} from "../../models/options.js";

export function _booleanLiteralGetAllSend(
  context: Client,
  options: BooleanLiteralGetAllOptions = { requestOptions: {} },
): StreamableMethod<BooleanLiteralGetAll200Response> {
  return context
    .path("/type/property/optional/boolean/literal/all")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _booleanLiteralGetAllDeserialize(
  result: BooleanLiteralGetAll200Response,
): Promise<BooleanLiteralProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get models that will return all properties in the model */
export async function booleanLiteralGetAll(
  context: Client,
  options: BooleanLiteralGetAllOptions = { requestOptions: {} },
): Promise<BooleanLiteralProperty> {
  const result = await _booleanLiteralGetAllSend(context, options);
  return _booleanLiteralGetAllDeserialize(result);
}

export function _booleanLiteralGetDefaultSend(
  context: Client,
  options: BooleanLiteralGetDefaultOptions = { requestOptions: {} },
): StreamableMethod<BooleanLiteralGetDefault200Response> {
  return context
    .path("/type/property/optional/boolean/literal/default")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _booleanLiteralGetDefaultDeserialize(
  result: BooleanLiteralGetDefault200Response,
): Promise<BooleanLiteralProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get models that will return the default object */
export async function booleanLiteralGetDefault(
  context: Client,
  options: BooleanLiteralGetDefaultOptions = { requestOptions: {} },
): Promise<BooleanLiteralProperty> {
  const result = await _booleanLiteralGetDefaultSend(context, options);
  return _booleanLiteralGetDefaultDeserialize(result);
}

export function _booleanLiteralPutAllSend(
  context: Client,
  body: BooleanLiteralProperty,
  options: BooleanLiteralPutAllOptions = { requestOptions: {} },
): StreamableMethod<BooleanLiteralPutAll204Response> {
  return context
    .path("/type/property/optional/boolean/literal/all")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _booleanLiteralPutAllDeserialize(
  result: BooleanLiteralPutAll204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function booleanLiteralPutAll(
  context: Client,
  body: BooleanLiteralProperty,
  options: BooleanLiteralPutAllOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _booleanLiteralPutAllSend(context, body, options);
  return _booleanLiteralPutAllDeserialize(result);
}

export function _booleanLiteralPutDefaultSend(
  context: Client,
  body: BooleanLiteralProperty,
  options: BooleanLiteralPutDefaultOptions = { requestOptions: {} },
): StreamableMethod<BooleanLiteralPutDefault204Response> {
  return context
    .path("/type/property/optional/boolean/literal/default")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _booleanLiteralPutDefaultDeserialize(
  result: BooleanLiteralPutDefault204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function booleanLiteralPutDefault(
  context: Client,
  body: BooleanLiteralProperty,
  options: BooleanLiteralPutDefaultOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _booleanLiteralPutDefaultSend(context, body, options);
  return _booleanLiteralPutDefaultDeserialize(result);
}
