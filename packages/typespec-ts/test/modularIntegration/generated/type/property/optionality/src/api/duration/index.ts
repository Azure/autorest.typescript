// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DurationProperty } from "../../models/models.js";
import {
  DurationGetAll200Response,
  DurationGetDefault200Response,
  DurationPutAll204Response,
  DurationPutDefault204Response,
  OptionalContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  DurationGetAllOptionalParams,
  DurationGetDefaultOptionalParams,
  DurationPutAllOptionalParams,
  DurationPutDefaultOptionalParams,
} from "../../models/options.js";

export function _getAllSend(
  context: Client,
  options: DurationGetAllOptionalParams = { requestOptions: {} },
): StreamableMethod<DurationGetAll200Response> {
  return context
    .path("/type/property/optional/duration/all")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getAllDeserialize(
  result: DurationGetAll200Response,
): Promise<DurationProperty> {
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
  options: DurationGetAllOptionalParams = { requestOptions: {} },
): Promise<DurationProperty> {
  const result = await _getAllSend(context, options);
  return _getAllDeserialize(result);
}

export function _getDefaultSend(
  context: Client,
  options: DurationGetDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod<DurationGetDefault200Response> {
  return context
    .path("/type/property/optional/duration/default")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDefaultDeserialize(
  result: DurationGetDefault200Response,
): Promise<DurationProperty> {
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
  options: DurationGetDefaultOptionalParams = { requestOptions: {} },
): Promise<DurationProperty> {
  const result = await _getDefaultSend(context, options);
  return _getDefaultDeserialize(result);
}

export function _putAllSend(
  context: Client,
  body: DurationProperty,
  options: DurationPutAllOptionalParams = { requestOptions: {} },
): StreamableMethod<DurationPutAll204Response> {
  return context
    .path("/type/property/optional/duration/all")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _putAllDeserialize(
  result: DurationPutAll204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function putAll(
  context: Client,
  body: DurationProperty,
  options: DurationPutAllOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putAllSend(context, body, options);
  return _putAllDeserialize(result);
}

export function _putDefaultSend(
  context: Client,
  body: DurationProperty,
  options: DurationPutDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod<DurationPutDefault204Response> {
  return context
    .path("/type/property/optional/duration/default")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _putDefaultDeserialize(
  result: DurationPutDefault204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function putDefault(
  context: Client,
  body: DurationProperty,
  options: DurationPutDefaultOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putDefaultSend(context, body, options);
  return _putDefaultDeserialize(result);
}
