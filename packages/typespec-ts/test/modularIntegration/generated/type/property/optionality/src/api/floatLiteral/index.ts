// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { FloatLiteralProperty } from "../../models/models.js";
import { OptionalContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
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
): StreamableMethod {
  return context
    .path("/type/property/optional/float/literal/all")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getAllDeserialize(
  result: PathUncheckedResponse,
): Promise<FloatLiteralProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
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
): StreamableMethod {
  return context
    .path("/type/property/optional/float/literal/default")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDefaultDeserialize(
  result: PathUncheckedResponse,
): Promise<FloatLiteralProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
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
): StreamableMethod {
  return context
    .path("/type/property/optional/float/literal/all")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _putAllDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/type/property/optional/float/literal/default")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _putDefaultDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
