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
  DurationGetAllOptions,
  DurationGetDefaultOptions,
  DurationPutAllOptions,
  DurationPutDefaultOptions,
} from "../../models/options.js";

export function _durationGetAllSend(
  context: Client,
  options: DurationGetAllOptions = { requestOptions: {} },
): StreamableMethod<DurationGetAll200Response> {
  return context
    .path("/type/property/optional/duration/all")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _durationGetAllDeserialize(
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
export async function durationGetAll(
  context: Client,
  options: DurationGetAllOptions = { requestOptions: {} },
): Promise<DurationProperty> {
  const result = await _durationGetAllSend(context, options);
  return _durationGetAllDeserialize(result);
}

export function _durationGetDefaultSend(
  context: Client,
  options: DurationGetDefaultOptions = { requestOptions: {} },
): StreamableMethod<DurationGetDefault200Response> {
  return context
    .path("/type/property/optional/duration/default")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _durationGetDefaultDeserialize(
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
export async function durationGetDefault(
  context: Client,
  options: DurationGetDefaultOptions = { requestOptions: {} },
): Promise<DurationProperty> {
  const result = await _durationGetDefaultSend(context, options);
  return _durationGetDefaultDeserialize(result);
}

export function _durationPutAllSend(
  context: Client,
  body: DurationProperty,
  options: DurationPutAllOptions = { requestOptions: {} },
): StreamableMethod<DurationPutAll204Response> {
  return context
    .path("/type/property/optional/duration/all")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _durationPutAllDeserialize(
  result: DurationPutAll204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function durationPutAll(
  context: Client,
  body: DurationProperty,
  options: DurationPutAllOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _durationPutAllSend(context, body, options);
  return _durationPutAllDeserialize(result);
}

export function _durationPutDefaultSend(
  context: Client,
  body: DurationProperty,
  options: DurationPutDefaultOptions = { requestOptions: {} },
): StreamableMethod<DurationPutDefault204Response> {
  return context
    .path("/type/property/optional/duration/default")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _durationPutDefaultDeserialize(
  result: DurationPutDefault204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function durationPutDefault(
  context: Client,
  body: DurationProperty,
  options: DurationPutDefaultOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _durationPutDefaultSend(context, body, options);
  return _durationPutDefaultDeserialize(result);
}
