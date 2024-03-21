// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DurationProperty } from "../../models/models.js";
import {
  DurationGetNonNull200Response,
  DurationGetNull200Response,
  DurationPatchNonNull204Response,
  DurationPatchNull204Response,
  NullableContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  DurationGetNonNullOptions,
  DurationGetNullOptions,
  DurationPatchNonNullOptions,
  DurationPatchNullOptions,
} from "../../models/options.js";

export function _durationGetNonNullSend(
  context: Client,
  options: DurationGetNonNullOptions = { requestOptions: {} },
): StreamableMethod<DurationGetNonNull200Response> {
  return context
    .path("/type/property/nullable/duration/non-null")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _durationGetNonNullDeserialize(
  result: DurationGetNonNull200Response,
): Promise<DurationProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    requiredProperty: result.body["requiredProperty"],
    nullableProperty: result.body["nullableProperty"],
  };
}

/** Get models that will return all properties in the model */
export async function durationGetNonNull(
  context: Client,
  options: DurationGetNonNullOptions = { requestOptions: {} },
): Promise<DurationProperty> {
  const result = await _durationGetNonNullSend(context, options);
  return _durationGetNonNullDeserialize(result);
}

export function _durationGetNullSend(
  context: Client,
  options: DurationGetNullOptions = { requestOptions: {} },
): StreamableMethod<DurationGetNull200Response> {
  return context
    .path("/type/property/nullable/duration/null")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _durationGetNullDeserialize(
  result: DurationGetNull200Response,
): Promise<DurationProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    requiredProperty: result.body["requiredProperty"],
    nullableProperty: result.body["nullableProperty"],
  };
}

/** Get models that will return the default object */
export async function durationGetNull(
  context: Client,
  options: DurationGetNullOptions = { requestOptions: {} },
): Promise<DurationProperty> {
  const result = await _durationGetNullSend(context, options);
  return _durationGetNullDeserialize(result);
}

export function _durationPatchNonNullSend(
  context: Client,
  body: DurationProperty,
  options: DurationPatchNonNullOptions = { requestOptions: {} },
): StreamableMethod<DurationPatchNonNull204Response> {
  return context
    .path("/type/property/nullable/duration/non-null")
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: {
        requiredProperty: body["requiredProperty"],
        nullableProperty: body["nullableProperty"],
      },
    });
}

export async function _durationPatchNonNullDeserialize(
  result: DurationPatchNonNull204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function durationPatchNonNull(
  context: Client,
  body: DurationProperty,
  options: DurationPatchNonNullOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _durationPatchNonNullSend(context, body, options);
  return _durationPatchNonNullDeserialize(result);
}

export function _durationPatchNullSend(
  context: Client,
  body: DurationProperty,
  options: DurationPatchNullOptions = { requestOptions: {} },
): StreamableMethod<DurationPatchNull204Response> {
  return context
    .path("/type/property/nullable/duration/null")
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: {
        requiredProperty: body["requiredProperty"],
        nullableProperty: body["nullableProperty"],
      },
    });
}

export async function _durationPatchNullDeserialize(
  result: DurationPatchNull204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function durationPatchNull(
  context: Client,
  body: DurationProperty,
  options: DurationPatchNullOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _durationPatchNullSend(context, body, options);
  return _durationPatchNullDeserialize(result);
}
