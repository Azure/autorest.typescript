// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DatetimeProperty } from "../../models/models.js";
import {
  DatetimeGetNonNull200Response,
  DatetimeGetNull200Response,
  DatetimePatchNonNull204Response,
  DatetimePatchNull204Response,
  NullableContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  DatetimeGetNonNullOptions,
  DatetimeGetNullOptions,
  DatetimePatchNonNullOptions,
  DatetimePatchNullOptions,
} from "../../models/options.js";

export function _datetimeGetNonNullSend(
  context: Client,
  options: DatetimeGetNonNullOptions = { requestOptions: {} },
): StreamableMethod<DatetimeGetNonNull200Response> {
  return context
    .path("/type/property/nullable/datetime/non-null")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _datetimeGetNonNullDeserialize(
  result: DatetimeGetNonNull200Response,
): Promise<DatetimeProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    requiredProperty: result.body["requiredProperty"],
    nullableProperty:
      result.body["nullableProperty"] === null
        ? null
        : new Date(result.body["nullableProperty"]),
  };
}

/** Get models that will return all properties in the model */
export async function datetimeGetNonNull(
  context: Client,
  options: DatetimeGetNonNullOptions = { requestOptions: {} },
): Promise<DatetimeProperty> {
  const result = await _datetimeGetNonNullSend(context, options);
  return _datetimeGetNonNullDeserialize(result);
}

export function _datetimeGetNullSend(
  context: Client,
  options: DatetimeGetNullOptions = { requestOptions: {} },
): StreamableMethod<DatetimeGetNull200Response> {
  return context
    .path("/type/property/nullable/datetime/null")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _datetimeGetNullDeserialize(
  result: DatetimeGetNull200Response,
): Promise<DatetimeProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    requiredProperty: result.body["requiredProperty"],
    nullableProperty:
      result.body["nullableProperty"] === null
        ? null
        : new Date(result.body["nullableProperty"]),
  };
}

/** Get models that will return the default object */
export async function datetimeGetNull(
  context: Client,
  options: DatetimeGetNullOptions = { requestOptions: {} },
): Promise<DatetimeProperty> {
  const result = await _datetimeGetNullSend(context, options);
  return _datetimeGetNullDeserialize(result);
}

export function _datetimePatchNonNullSend(
  context: Client,
  body: DatetimeProperty,
  options: DatetimePatchNonNullOptions = { requestOptions: {} },
): StreamableMethod<DatetimePatchNonNull204Response> {
  return context
    .path("/type/property/nullable/datetime/non-null")
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: {
        requiredProperty: body["requiredProperty"],
        nullableProperty: body["nullableProperty"].toISOString(),
      },
    });
}

export async function _datetimePatchNonNullDeserialize(
  result: DatetimePatchNonNull204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function datetimePatchNonNull(
  context: Client,
  body: DatetimeProperty,
  options: DatetimePatchNonNullOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _datetimePatchNonNullSend(context, body, options);
  return _datetimePatchNonNullDeserialize(result);
}

export function _datetimePatchNullSend(
  context: Client,
  body: DatetimeProperty,
  options: DatetimePatchNullOptions = { requestOptions: {} },
): StreamableMethod<DatetimePatchNull204Response> {
  return context
    .path("/type/property/nullable/datetime/null")
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: {
        requiredProperty: body["requiredProperty"],
        nullableProperty: body["nullableProperty"].toISOString(),
      },
    });
}

export async function _datetimePatchNullDeserialize(
  result: DatetimePatchNull204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function datetimePatchNull(
  context: Client,
  body: DatetimeProperty,
  options: DatetimePatchNullOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _datetimePatchNullSend(context, body, options);
  return _datetimePatchNullDeserialize(result);
}
