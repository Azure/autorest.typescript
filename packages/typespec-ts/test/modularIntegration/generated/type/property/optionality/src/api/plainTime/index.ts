// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { PlainTimeProperty } from "../../models/models.js";
import {
  OptionalContext as Client,
  PlainTimeGetAll200Response,
  PlainTimeGetDefault200Response,
  PlainTimePutAll204Response,
  PlainTimePutDefault204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  PlainTimeGetAllOptionalParams,
  PlainTimeGetDefaultOptionalParams,
  PlainTimePutAllOptionalParams,
  PlainTimePutDefaultOptionalParams,
} from "../../models/options.js";

export function _getAllSend(
  context: Client,
  options: PlainTimeGetAllOptionalParams = { requestOptions: {} },
): StreamableMethod<PlainTimeGetAll200Response> {
  return context
    .path("/type/property/optional/plainTime/all")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getAllDeserialize(
  result: PlainTimeGetAll200Response,
): Promise<PlainTimeProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property:
      result.body["property"] !== undefined
        ? new Date(result.body["property"])
        : undefined,
  };
}

/** Get models that will return all properties in the model */
export async function getAll(
  context: Client,
  options: PlainTimeGetAllOptionalParams = { requestOptions: {} },
): Promise<PlainTimeProperty> {
  const result = await _getAllSend(context, options);
  return _getAllDeserialize(result);
}

export function _getDefaultSend(
  context: Client,
  options: PlainTimeGetDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod<PlainTimeGetDefault200Response> {
  return context
    .path("/type/property/optional/plainTime/default")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDefaultDeserialize(
  result: PlainTimeGetDefault200Response,
): Promise<PlainTimeProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property:
      result.body["property"] !== undefined
        ? new Date(result.body["property"])
        : undefined,
  };
}

/** Get models that will return the default object */
export async function getDefault(
  context: Client,
  options: PlainTimeGetDefaultOptionalParams = { requestOptions: {} },
): Promise<PlainTimeProperty> {
  const result = await _getDefaultSend(context, options);
  return _getDefaultDeserialize(result);
}

export function _putAllSend(
  context: Client,
  body: PlainTimeProperty,
  options: PlainTimePutAllOptionalParams = { requestOptions: {} },
): StreamableMethod<PlainTimePutAll204Response> {
  return context
    .path("/type/property/optional/plainTime/all")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"]?.toTimeString() },
    });
}

export async function _putAllDeserialize(
  result: PlainTimePutAll204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function putAll(
  context: Client,
  body: PlainTimeProperty,
  options: PlainTimePutAllOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putAllSend(context, body, options);
  return _putAllDeserialize(result);
}

export function _putDefaultSend(
  context: Client,
  body: PlainTimeProperty,
  options: PlainTimePutDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod<PlainTimePutDefault204Response> {
  return context
    .path("/type/property/optional/plainTime/default")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"]?.toTimeString() },
    });
}

export async function _putDefaultDeserialize(
  result: PlainTimePutDefault204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function putDefault(
  context: Client,
  body: PlainTimeProperty,
  options: PlainTimePutDefaultOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putDefaultSend(context, body, options);
  return _putDefaultDeserialize(result);
}
