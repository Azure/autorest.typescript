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
  DatetimeGetAllOptions,
  DatetimeGetDefaultOptions,
  DatetimePutAllOptions,
  DatetimePutDefaultOptions,
} from "../../models/options.js";

export function _datetimeGetAllSend(
  context: Client,
  options: DatetimeGetAllOptions = { requestOptions: {} },
): StreamableMethod<DatetimeGetAll200Response> {
  return context
    .path("/type/property/optional/datetime/all")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _datetimeGetAllDeserialize(
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
export async function datetimeGetAll(
  context: Client,
  options: DatetimeGetAllOptions = { requestOptions: {} },
): Promise<DatetimeProperty> {
  const result = await _datetimeGetAllSend(context, options);
  return _datetimeGetAllDeserialize(result);
}

export function _datetimeGetDefaultSend(
  context: Client,
  options: DatetimeGetDefaultOptions = { requestOptions: {} },
): StreamableMethod<DatetimeGetDefault200Response> {
  return context
    .path("/type/property/optional/datetime/default")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _datetimeGetDefaultDeserialize(
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
export async function datetimeGetDefault(
  context: Client,
  options: DatetimeGetDefaultOptions = { requestOptions: {} },
): Promise<DatetimeProperty> {
  const result = await _datetimeGetDefaultSend(context, options);
  return _datetimeGetDefaultDeserialize(result);
}

export function _datetimePutAllSend(
  context: Client,
  body: DatetimeProperty,
  options: DatetimePutAllOptions = { requestOptions: {} },
): StreamableMethod<DatetimePutAll204Response> {
  return context
    .path("/type/property/optional/datetime/all")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"]?.toISOString() },
    });
}

export async function _datetimePutAllDeserialize(
  result: DatetimePutAll204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function datetimePutAll(
  context: Client,
  body: DatetimeProperty,
  options: DatetimePutAllOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _datetimePutAllSend(context, body, options);
  return _datetimePutAllDeserialize(result);
}

export function _datetimePutDefaultSend(
  context: Client,
  body: DatetimeProperty,
  options: DatetimePutDefaultOptions = { requestOptions: {} },
): StreamableMethod<DatetimePutDefault204Response> {
  return context
    .path("/type/property/optional/datetime/default")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"]?.toISOString() },
    });
}

export async function _datetimePutDefaultDeserialize(
  result: DatetimePutDefault204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function datetimePutDefault(
  context: Client,
  body: DatetimeProperty,
  options: DatetimePutDefaultOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _datetimePutDefaultSend(context, body, options);
  return _datetimePutDefaultDeserialize(result);
}
