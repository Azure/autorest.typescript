// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DefaultDatetimeProperty,
  Rfc3339DatetimeProperty,
  Rfc7231DatetimeProperty,
  UnixTimestampDatetimeProperty,
  UnixTimestampArrayDatetimeProperty,
} from "../models/models.js";
import {
  DatetimeContext as Client,
  PropertyDefault200Response,
  PropertyRfc3339200Response,
  PropertyRfc7231200Response,
  PropertyUnixTimestamp200Response,
  PropertyUnixTimestampArray200Response,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  PropertyDefaultOptions,
  PropertyRfc3339Options,
  PropertyRfc7231Options,
  PropertyUnixTimestampOptions,
  PropertyUnixTimestampArrayOptions,
} from "../models/options.js";

export function _propertyDefaultSend(
  context: Client,
  value: Date,
  options: PropertyDefaultOptions = { requestOptions: {} }
): StreamableMethod<PropertyDefault200Response> {
  return context
    .path("/encode/datetime/property/default")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: value.toISOString() },
    });
}

export async function _propertyDefaultDeserialize(
  result: PropertyDefault200Response
): Promise<DefaultDatetimeProperty> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    value: new Date(result.body["value"]),
  };
}

export async function propertyDefault(
  context: Client,
  value: Date,
  options: PropertyDefaultOptions = { requestOptions: {} }
): Promise<DefaultDatetimeProperty> {
  const result = await _propertyDefaultSend(context, value, options);
  return _propertyDefaultDeserialize(result);
}

export function _propertyRfc3339Send(
  context: Client,
  value: Date,
  options: PropertyRfc3339Options = { requestOptions: {} }
): StreamableMethod<PropertyRfc3339200Response> {
  return context
    .path("/encode/datetime/property/rfc3339")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: value.toISOString() },
    });
}

export async function _propertyRfc3339Deserialize(
  result: PropertyRfc3339200Response
): Promise<Rfc3339DatetimeProperty> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    value: new Date(result.body["value"]),
  };
}

export async function propertyRfc3339(
  context: Client,
  value: Date,
  options: PropertyRfc3339Options = { requestOptions: {} }
): Promise<Rfc3339DatetimeProperty> {
  const result = await _propertyRfc3339Send(context, value, options);
  return _propertyRfc3339Deserialize(result);
}

export function _propertyRfc7231Send(
  context: Client,
  value: Date,
  options: PropertyRfc7231Options = { requestOptions: {} }
): StreamableMethod<PropertyRfc7231200Response> {
  return context
    .path("/encode/datetime/property/rfc7231")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: value.toISOString() },
    });
}

export async function _propertyRfc7231Deserialize(
  result: PropertyRfc7231200Response
): Promise<Rfc7231DatetimeProperty> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    value: new Date(result.body["value"]),
  };
}

export async function propertyRfc7231(
  context: Client,
  value: Date,
  options: PropertyRfc7231Options = { requestOptions: {} }
): Promise<Rfc7231DatetimeProperty> {
  const result = await _propertyRfc7231Send(context, value, options);
  return _propertyRfc7231Deserialize(result);
}

export function _propertyUnixTimestampSend(
  context: Client,
  value: Date,
  options: PropertyUnixTimestampOptions = { requestOptions: {} }
): StreamableMethod<PropertyUnixTimestamp200Response> {
  return context
    .path("/encode/datetime/property/unix-timestamp")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: value.toISOString() },
    });
}

export async function _propertyUnixTimestampDeserialize(
  result: PropertyUnixTimestamp200Response
): Promise<UnixTimestampDatetimeProperty> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    value: new Date(result.body["value"]),
  };
}

export async function propertyUnixTimestamp(
  context: Client,
  value: Date,
  options: PropertyUnixTimestampOptions = { requestOptions: {} }
): Promise<UnixTimestampDatetimeProperty> {
  const result = await _propertyUnixTimestampSend(context, value, options);
  return _propertyUnixTimestampDeserialize(result);
}

export function _propertyUnixTimestampArraySend(
  context: Client,
  value: Date[],
  options: PropertyUnixTimestampArrayOptions = { requestOptions: {} }
): StreamableMethod<PropertyUnixTimestampArray200Response> {
  return context
    .path("/encode/datetime/property/unix-timestamp-array")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: (value ?? []).map((p) => p.toISOString()) },
    });
}

export async function _propertyUnixTimestampArrayDeserialize(
  result: PropertyUnixTimestampArray200Response
): Promise<UnixTimestampArrayDatetimeProperty> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    value: (result.body["value"] ?? []).map((p) => new Date(p)),
  };
}

export async function propertyUnixTimestampArray(
  context: Client,
  value: Date[],
  options: PropertyUnixTimestampArrayOptions = { requestOptions: {} }
): Promise<UnixTimestampArrayDatetimeProperty> {
  const result = await _propertyUnixTimestampArraySend(context, value, options);
  return _propertyUnixTimestampArrayDeserialize(result);
}
