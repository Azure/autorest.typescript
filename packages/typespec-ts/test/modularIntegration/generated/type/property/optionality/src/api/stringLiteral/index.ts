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
} from "../options.js";

export function _getAllSend(
  context: Client,
  options: StringLiteralGetAllOptionalParams = { requestOptions: {} },
): StreamableMethod<StringLiteralGetAll200Response> {
  return context
    .path("/type/property/optional/string/literal/all")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getAllDeserialize(
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
export async function getAll(
  context: Client,
  options: StringLiteralGetAllOptionalParams = { requestOptions: {} },
): Promise<StringLiteralProperty> {
  const result = await _getAllSend(context, options);
  return _getAllDeserialize(result);
}

export function _getDefaultSend(
  context: Client,
  options: StringLiteralGetDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod<StringLiteralGetDefault200Response> {
  return context
    .path("/type/property/optional/string/literal/default")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDefaultDeserialize(
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
export async function getDefault(
  context: Client,
  options: StringLiteralGetDefaultOptionalParams = { requestOptions: {} },
): Promise<StringLiteralProperty> {
  const result = await _getDefaultSend(context, options);
  return _getDefaultDeserialize(result);
}

export function _putAllSend(
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

export async function _putAllDeserialize(
  result: StringLiteralPutAll204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function putAll(
  context: Client,
  body: StringLiteralProperty,
  options: StringLiteralPutAllOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putAllSend(context, body, options);
  return _putAllDeserialize(result);
}

export function _putDefaultSend(
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

export async function _putDefaultDeserialize(
  result: StringLiteralPutDefault204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function putDefault(
  context: Client,
  body: StringLiteralProperty,
  options: StringLiteralPutDefaultOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putDefaultSend(context, body, options);
  return _putDefaultDeserialize(result);
}
