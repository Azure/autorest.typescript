// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DefaultDatetimeProperty,
  Rfc3339DatetimeProperty,
  Rfc7231DatetimeProperty,
  UnixTimestampDatetimeProperty,
  UnixTimestampArrayDatetimeProperty,
} from "../../models/models.js";
import {
  DatetimeContext as Client,
  PropertyDefault200Response,
  PropertyRfc3339200Response,
  PropertyRfc7231200Response,
  PropertyUnixTimestamp200Response,
  PropertyUnixTimestampArray200Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
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
): StreamableMethod<PropertyDefault200Response> {
  return context
    .path("/encode/datetime/property/default")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: body["value"].toISOString() },
    });
}

export async function _propertyDefaultDeserialize(
  result: PropertyDefault200Response,
): Promise<DefaultDatetimeProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as PropertyDefault200Response;
  return {
    value: new Date(_result.body["value"]),
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
): StreamableMethod<PropertyRfc3339200Response> {
  return context
    .path("/encode/datetime/property/rfc3339")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: body["value"].toISOString() },
    });
}

export async function _propertyRfc3339Deserialize(
  result: PropertyRfc3339200Response,
): Promise<Rfc3339DatetimeProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as PropertyRfc3339200Response;
  return {
    value: new Date(_result.body["value"]),
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
): StreamableMethod<PropertyRfc7231200Response> {
  return context
    .path("/encode/datetime/property/rfc7231")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: body["value"].toUTCString() },
    });
}

export async function _propertyRfc7231Deserialize(
  result: PropertyRfc7231200Response,
): Promise<Rfc7231DatetimeProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as PropertyRfc7231200Response;
  return {
    value: new Date(_result.body["value"]),
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
): StreamableMethod<PropertyUnixTimestamp200Response> {
  return context
    .path("/encode/datetime/property/unix-timestamp")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: body["value"].getTime() },
    });
}

export async function _propertyUnixTimestampDeserialize(
  result: PropertyUnixTimestamp200Response,
): Promise<UnixTimestampDatetimeProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as PropertyUnixTimestamp200Response;
  return {
    value: new Date(_result.body["value"]),
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
): StreamableMethod<PropertyUnixTimestampArray200Response> {
  return context
    .path("/encode/datetime/property/unix-timestamp-array")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: body["value"].map((p) => p.getTime()) },
    });
}

export async function _propertyUnixTimestampArrayDeserialize(
  result: PropertyUnixTimestampArray200Response,
): Promise<UnixTimestampArrayDatetimeProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as PropertyUnixTimestampArray200Response;
  return {
    value: _result.body["value"].map((p) => new Date(p)),
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
