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
  DatetimeGetNonNullOptionalParams,
  DatetimeGetNullOptionalParams,
  DatetimePatchNonNullOptionalParams,
  DatetimePatchNullOptionalParams,
} from "../../models/options.js";

export function _getNonNullSend(
  context: Client,
  options: DatetimeGetNonNullOptionalParams = { requestOptions: {} },
): StreamableMethod<DatetimeGetNonNull200Response> {
  return context
    .path("/type/property/nullable/datetime/non-null")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getNonNullDeserialize(
  result: DatetimeGetNonNull200Response,
): Promise<DatetimeProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as DatetimeGetNonNull200Response;
  return {
    requiredProperty: _result.body["requiredProperty"],
    nullableProperty:
      _result.body["nullableProperty"] === null
        ? null
        : new Date(_result.body["nullableProperty"]),
  };
}

/** Get models that will return all properties in the model */
export async function getNonNull(
  context: Client,
  options: DatetimeGetNonNullOptionalParams = { requestOptions: {} },
): Promise<DatetimeProperty> {
  const result = await _getNonNullSend(context, options);
  return _getNonNullDeserialize(result);
}

export function _getNullSend(
  context: Client,
  options: DatetimeGetNullOptionalParams = { requestOptions: {} },
): StreamableMethod<DatetimeGetNull200Response> {
  return context
    .path("/type/property/nullable/datetime/null")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getNullDeserialize(
  result: DatetimeGetNull200Response,
): Promise<DatetimeProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as DatetimeGetNull200Response;
  return {
    requiredProperty: _result.body["requiredProperty"],
    nullableProperty:
      _result.body["nullableProperty"] === null
        ? null
        : new Date(_result.body["nullableProperty"]),
  };
}

/** Get models that will return the default object */
export async function getNull(
  context: Client,
  options: DatetimeGetNullOptionalParams = { requestOptions: {} },
): Promise<DatetimeProperty> {
  const result = await _getNullSend(context, options);
  return _getNullDeserialize(result);
}

export function _patchNonNullSend(
  context: Client,
  body: DatetimeProperty,
  options: DatetimePatchNonNullOptionalParams = { requestOptions: {} },
): StreamableMethod<DatetimePatchNonNull204Response> {
  return context
    .path("/type/property/nullable/datetime/non-null")
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: {
        requiredProperty: body["requiredProperty"],
        nullableProperty:
          body["nullableProperty"] === null
            ? null
            : body["nullableProperty"].toISOString(),
      },
    });
}

export async function _patchNonNullDeserialize(
  result: DatetimePatchNonNull204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function patchNonNull(
  context: Client,
  body: DatetimeProperty,
  options: DatetimePatchNonNullOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _patchNonNullSend(context, body, options);
  return _patchNonNullDeserialize(result);
}

export function _patchNullSend(
  context: Client,
  body: DatetimeProperty,
  options: DatetimePatchNullOptionalParams = { requestOptions: {} },
): StreamableMethod<DatetimePatchNull204Response> {
  return context
    .path("/type/property/nullable/datetime/null")
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: {
        requiredProperty: body["requiredProperty"],
        nullableProperty:
          body["nullableProperty"] === null
            ? null
            : body["nullableProperty"].toISOString(),
      },
    });
}

export async function _patchNullDeserialize(
  result: DatetimePatchNull204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function patchNull(
  context: Client,
  body: DatetimeProperty,
  options: DatetimePatchNullOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _patchNullSend(context, body, options);
  return _patchNullDeserialize(result);
}
