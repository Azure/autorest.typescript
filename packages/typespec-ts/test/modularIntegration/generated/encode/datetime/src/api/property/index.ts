// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DefaultDatetimeProperty,
  Rfc3339DatetimeProperty,
  Rfc7231DatetimeProperty,
  UnixTimestampDatetimeProperty,
  UnixTimestampArrayDatetimeProperty,
} from "../../models/models.js";
import { DatetimeContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  PropertyDefaultOptionalParams,
  PropertyRfc3339OptionalParams,
  PropertyRfc7231OptionalParams,
  PropertyUnixTimestampOptionalParams,
  PropertyUnixTimestampArrayOptionalParams,
} from "../../models/options.js";

export function _propertyDefaultSend(
  context: Client,
  body: DefaultDatetimeProperty,
  options: PropertyDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/datetime/property/default")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: body["value"].toISOString() },
    });
}

export async function _propertyDefaultDeserialize(
  result: PathUncheckedResponse,
): Promise<DefaultDatetimeProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: new Date(result.body["value"]),
  };
}

export async function propertyDefault(
  context: Client,
  body: DefaultDatetimeProperty,
  options: PropertyDefaultOptionalParams = { requestOptions: {} },
): Promise<DefaultDatetimeProperty> {
  const result = await _propertyDefaultSend(context, body, options);
  return _propertyDefaultDeserialize(result);
}

export function _propertyRfc3339Send(
  context: Client,
  body: Rfc3339DatetimeProperty,
  options: PropertyRfc3339OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/datetime/property/rfc3339")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: body["value"].toISOString() },
    });
}

export async function _propertyRfc3339Deserialize(
  result: PathUncheckedResponse,
): Promise<Rfc3339DatetimeProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: new Date(result.body["value"]),
  };
}

export async function propertyRfc3339(
  context: Client,
  body: Rfc3339DatetimeProperty,
  options: PropertyRfc3339OptionalParams = { requestOptions: {} },
): Promise<Rfc3339DatetimeProperty> {
  const result = await _propertyRfc3339Send(context, body, options);
  return _propertyRfc3339Deserialize(result);
}

export function _propertyRfc7231Send(
  context: Client,
  body: Rfc7231DatetimeProperty,
  options: PropertyRfc7231OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/datetime/property/rfc7231")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: body["value"].toUTCString() },
    });
}

export async function _propertyRfc7231Deserialize(
  result: PathUncheckedResponse,
): Promise<Rfc7231DatetimeProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: new Date(result.body["value"]),
  };
}

export async function propertyRfc7231(
  context: Client,
  body: Rfc7231DatetimeProperty,
  options: PropertyRfc7231OptionalParams = { requestOptions: {} },
): Promise<Rfc7231DatetimeProperty> {
  const result = await _propertyRfc7231Send(context, body, options);
  return _propertyRfc7231Deserialize(result);
}

export function _propertyUnixTimestampSend(
  context: Client,
  body: UnixTimestampDatetimeProperty,
  options: PropertyUnixTimestampOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/datetime/property/unix-timestamp")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: body["value"].getTime() },
    });
}

export async function _propertyUnixTimestampDeserialize(
  result: PathUncheckedResponse,
): Promise<UnixTimestampDatetimeProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: new Date(result.body["value"]),
  };
}

export async function propertyUnixTimestamp(
  context: Client,
  body: UnixTimestampDatetimeProperty,
  options: PropertyUnixTimestampOptionalParams = { requestOptions: {} },
): Promise<UnixTimestampDatetimeProperty> {
  const result = await _propertyUnixTimestampSend(context, body, options);
  return _propertyUnixTimestampDeserialize(result);
}

export function _propertyUnixTimestampArraySend(
  context: Client,
  body: UnixTimestampArrayDatetimeProperty,
  options: PropertyUnixTimestampArrayOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/datetime/property/unix-timestamp-array")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: body["value"].map((p) => p.getTime()) },
    });
}

export async function _propertyUnixTimestampArrayDeserialize(
  result: PathUncheckedResponse,
): Promise<UnixTimestampArrayDatetimeProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => new Date(p)),
  };
}

export async function propertyUnixTimestampArray(
  context: Client,
  body: UnixTimestampArrayDatetimeProperty,
  options: PropertyUnixTimestampArrayOptionalParams = { requestOptions: {} },
): Promise<UnixTimestampArrayDatetimeProperty> {
  const result = await _propertyUnixTimestampArraySend(context, body, options);
  return _propertyUnixTimestampArrayDeserialize(result);
}
