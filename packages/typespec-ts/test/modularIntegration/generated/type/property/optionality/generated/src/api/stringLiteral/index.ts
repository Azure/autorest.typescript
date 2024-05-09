// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { StringLiteralProperty } from "../../models/models.js";
import {
  OptionalContext as Client,
  StringLiteralGetAll200Response,
  StringLiteralGetDefault200Response,
  StringLiteralPutAll204Response,
  StringLiteralPutDefault204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  StringLiteralGetAllOptionalParams,
  StringLiteralGetDefaultOptionalParams,
  StringLiteralPutAllOptionalParams,
  StringLiteralPutDefaultOptionalParams,
} from "../../models/options.js";

export function _stringLiteralGetAllSend(
  context: Client,
  options: StringLiteralGetAllOptionalParams = { requestOptions: {} },
): StreamableMethod<StringLiteralGetAll200Response> {
  return context
    .path("/type/property/optional/string/literal/all")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _stringLiteralGetAllDeserialize(
  result: StringLiteralGetAll200Response,
): Promise<StringLiteralProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get models that will return all properties in the model */
export async function stringLiteralGetAll(
  context: Client,
  options: StringLiteralGetAllOptionalParams = { requestOptions: {} },
): Promise<StringLiteralProperty> {
  const result = await _stringLiteralGetAllSend(context, options);
  return _stringLiteralGetAllDeserialize(result);
}

export function _stringLiteralGetDefaultSend(
  context: Client,
  options: StringLiteralGetDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod<StringLiteralGetDefault200Response> {
  return context
    .path("/type/property/optional/string/literal/default")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _stringLiteralGetDefaultDeserialize(
  result: StringLiteralGetDefault200Response,
): Promise<StringLiteralProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get models that will return the default object */
export async function stringLiteralGetDefault(
  context: Client,
  options: StringLiteralGetDefaultOptionalParams = { requestOptions: {} },
): Promise<StringLiteralProperty> {
  const result = await _stringLiteralGetDefaultSend(context, options);
  return _stringLiteralGetDefaultDeserialize(result);
}

export function _stringLiteralPutAllSend(
  context: Client,
  body: StringLiteralProperty,
  options: StringLiteralPutAllOptionalParams = { requestOptions: {} },
): StreamableMethod<StringLiteralPutAll204Response> {
  return context
    .path("/type/property/optional/string/literal/all")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _stringLiteralPutAllDeserialize(
  result: StringLiteralPutAll204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function stringLiteralPutAll(
  context: Client,
  body: StringLiteralProperty,
  options: StringLiteralPutAllOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _stringLiteralPutAllSend(context, body, options);
  return _stringLiteralPutAllDeserialize(result);
}

export function _stringLiteralPutDefaultSend(
  context: Client,
  body: StringLiteralProperty,
  options: StringLiteralPutDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod<StringLiteralPutDefault204Response> {
  return context
    .path("/type/property/optional/string/literal/default")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _stringLiteralPutDefaultDeserialize(
  result: StringLiteralPutDefault204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function stringLiteralPutDefault(
  context: Client,
  body: StringLiteralProperty,
  options: StringLiteralPutDefaultOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _stringLiteralPutDefaultSend(context, body, options);
  return _stringLiteralPutDefaultDeserialize(result);
}
