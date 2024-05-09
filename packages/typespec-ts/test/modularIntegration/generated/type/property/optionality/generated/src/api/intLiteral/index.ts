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

export function _intLiteralGetAllSend(
  context: Client,
  options: IntLiteralGetAllOptionalParams = { requestOptions: {} },
): StreamableMethod<IntLiteralGetAll200Response> {
  return context
    .path("/type/property/optional/int/literal/all")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _intLiteralGetAllDeserialize(
  result: IntLiteralGetAll200Response,
): Promise<IntLiteralProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get models that will return all properties in the model */
export async function intLiteralGetAll(
  context: Client,
  options: IntLiteralGetAllOptionalParams = { requestOptions: {} },
): Promise<IntLiteralProperty> {
  const result = await _intLiteralGetAllSend(context, options);
  return _intLiteralGetAllDeserialize(result);
}

export function _intLiteralGetDefaultSend(
  context: Client,
  options: IntLiteralGetDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod<IntLiteralGetDefault200Response> {
  return context
    .path("/type/property/optional/int/literal/default")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _intLiteralGetDefaultDeserialize(
  result: IntLiteralGetDefault200Response,
): Promise<IntLiteralProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get models that will return the default object */
export async function intLiteralGetDefault(
  context: Client,
  options: IntLiteralGetDefaultOptionalParams = { requestOptions: {} },
): Promise<IntLiteralProperty> {
  const result = await _intLiteralGetDefaultSend(context, options);
  return _intLiteralGetDefaultDeserialize(result);
}

export function _intLiteralPutAllSend(
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

export async function _intLiteralPutAllDeserialize(
  result: IntLiteralPutAll204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function intLiteralPutAll(
  context: Client,
  body: IntLiteralProperty,
  options: IntLiteralPutAllOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _intLiteralPutAllSend(context, body, options);
  return _intLiteralPutAllDeserialize(result);
}

export function _intLiteralPutDefaultSend(
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

export async function _intLiteralPutDefaultDeserialize(
  result: IntLiteralPutDefault204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function intLiteralPutDefault(
  context: Client,
  body: IntLiteralProperty,
  options: IntLiteralPutDefaultOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _intLiteralPutDefaultSend(context, body, options);
  return _intLiteralPutDefaultDeserialize(result);
}
