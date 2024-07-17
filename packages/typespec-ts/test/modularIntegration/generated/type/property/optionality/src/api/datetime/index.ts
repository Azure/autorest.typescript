// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DatetimeProperty } from "../../models/models.js";
import {
  DatetimeGetAll200Response,
  DatetimeGetDefault200Response,
  DatetimePutAll204Response,
  DatetimePutDefault204Response,
  OptionalContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  DatetimeGetAllOptionalParams,
  DatetimeGetDefaultOptionalParams,
  DatetimePutAllOptionalParams,
  DatetimePutDefaultOptionalParams,
} from "../options.js";

export function _getAllSend(
  context: Client,
  options: DatetimeGetAllOptionalParams = { requestOptions: {} },
): StreamableMethod<DatetimeGetAll200Response> {
  return context
    .path("/type/property/optional/datetime/all")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getAllDeserialize(
  result: DatetimeGetAll200Response,
): Promise<DatetimeProperty> {
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
  options: DatetimeGetAllOptionalParams = { requestOptions: {} },
): Promise<DatetimeProperty> {
  const result = await _getAllSend(context, options);
  return _getAllDeserialize(result);
}

export function _getDefaultSend(
  context: Client,
  options: DatetimeGetDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod<DatetimeGetDefault200Response> {
  return context
    .path("/type/property/optional/datetime/default")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDefaultDeserialize(
  result: DatetimeGetDefault200Response,
): Promise<DatetimeProperty> {
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
  options: DatetimeGetDefaultOptionalParams = { requestOptions: {} },
): Promise<DatetimeProperty> {
  const result = await _getDefaultSend(context, options);
  return _getDefaultDeserialize(result);
}

export function _putAllSend(
  context: Client,
  body: DatetimeProperty,
  options: DatetimePutAllOptionalParams = { requestOptions: {} },
): StreamableMethod<DatetimePutAll204Response> {
  return context
    .path("/type/property/optional/datetime/all")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"]?.toISOString() },
    });
}

export async function _putAllDeserialize(
  result: DatetimePutAll204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function putAll(
  context: Client,
  body: DatetimeProperty,
  options: DatetimePutAllOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putAllSend(context, body, options);
  return _putAllDeserialize(result);
}

export function _putDefaultSend(
  context: Client,
  body: DatetimeProperty,
  options: DatetimePutDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod<DatetimePutDefault204Response> {
  return context
    .path("/type/property/optional/datetime/default")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"]?.toISOString() },
    });
}

export async function _putDefaultDeserialize(
  result: DatetimePutDefault204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function putDefault(
  context: Client,
  body: DatetimeProperty,
  options: DatetimePutDefaultOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putDefaultSend(context, body, options);
  return _putDefaultDeserialize(result);
}
