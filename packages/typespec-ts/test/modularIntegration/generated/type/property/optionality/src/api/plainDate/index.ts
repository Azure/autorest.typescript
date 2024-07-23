// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { PlainDateProperty } from "../../models/models.js";
import {
  OptionalContext as Client,
  PlainDateGetAll200Response,
  PlainDateGetDefault200Response,
  PlainDatePutAll204Response,
  PlainDatePutDefault204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  PlainDateGetAllOptionalParams,
  PlainDateGetDefaultOptionalParams,
  PlainDatePutAllOptionalParams,
  PlainDatePutDefaultOptionalParams,
} from "../../models/options.js";

export function _getAllSend(
  context: Client,
  options: PlainDateGetAllOptionalParams = { requestOptions: {} },
): StreamableMethod<PlainDateGetAll200Response> {
  return context
    .path("/type/property/optional/plainDate/all")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getAllDeserialize(
  result: PlainDateGetAll200Response,
): Promise<PlainDateProperty> {
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
  options: PlainDateGetAllOptionalParams = { requestOptions: {} },
): Promise<PlainDateProperty> {
  const result = await _getAllSend(context, options);
  return _getAllDeserialize(result);
}

export function _getDefaultSend(
  context: Client,
  options: PlainDateGetDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod<PlainDateGetDefault200Response> {
  return context
    .path("/type/property/optional/plainDate/default")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDefaultDeserialize(
  result: PlainDateGetDefault200Response,
): Promise<PlainDateProperty> {
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
  options: PlainDateGetDefaultOptionalParams = { requestOptions: {} },
): Promise<PlainDateProperty> {
  const result = await _getDefaultSend(context, options);
  return _getDefaultDeserialize(result);
}

export function _putAllSend(
  context: Client,
  body: PlainDateProperty,
  options: PlainDatePutAllOptionalParams = { requestOptions: {} },
): StreamableMethod<PlainDatePutAll204Response> {
  return context
    .path("/type/property/optional/plainDate/all")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"]?.toDateString() },
    });
}

export async function _putAllDeserialize(
  result: PlainDatePutAll204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function putAll(
  context: Client,
  body: PlainDateProperty,
  options: PlainDatePutAllOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putAllSend(context, body, options);
  return _putAllDeserialize(result);
}

export function _putDefaultSend(
  context: Client,
  body: PlainDateProperty,
  options: PlainDatePutDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod<PlainDatePutDefault204Response> {
  return context
    .path("/type/property/optional/plainDate/default")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"]?.toDateString() },
    });
}

export async function _putDefaultDeserialize(
  result: PlainDatePutDefault204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function putDefault(
  context: Client,
  body: PlainDateProperty,
  options: PlainDatePutDefaultOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putDefaultSend(context, body, options);
  return _putDefaultDeserialize(result);
}
