// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DurationProperty } from "../../models/models.js";
import { NullableContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  DurationGetNonNullOptionalParams,
  DurationGetNullOptionalParams,
  DurationPatchNonNullOptionalParams,
  DurationPatchNullOptionalParams,
} from "../../models/options.js";

export function _getNonNullSend(
  context: Client,
  options: DurationGetNonNullOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/nullable/duration/non-null")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getNonNullDeserialize(
  result: PathUncheckedResponse,
): Promise<DurationProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    requiredProperty: result.body["requiredProperty"],
    nullableProperty: result.body["nullableProperty"],
  };
}

/** Get models that will return all properties in the model */
export async function getNonNull(
  context: Client,
  options: DurationGetNonNullOptionalParams = { requestOptions: {} },
): Promise<DurationProperty> {
  const result = await _getNonNullSend(context, options);
  return _getNonNullDeserialize(result);
}

export function _getNullSend(
  context: Client,
  options: DurationGetNullOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/nullable/duration/null")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getNullDeserialize(
  result: PathUncheckedResponse,
): Promise<DurationProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    requiredProperty: result.body["requiredProperty"],
    nullableProperty: result.body["nullableProperty"],
  };
}

/** Get models that will return the default object */
export async function getNull(
  context: Client,
  options: DurationGetNullOptionalParams = { requestOptions: {} },
): Promise<DurationProperty> {
  const result = await _getNullSend(context, options);
  return _getNullDeserialize(result);
}

export function _patchNonNullSend(
  context: Client,
  body: DurationProperty,
  options: DurationPatchNonNullOptionalParams = { requestOptions: {} },
): StreamableMethod {
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

export async function _patchNonNullDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function patchNonNull(
  context: Client,
  body: DurationProperty,
  options: DurationPatchNonNullOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _patchNonNullSend(context, body, options);
  return _patchNonNullDeserialize(result);
}

export function _patchNullSend(
  context: Client,
  body: DurationProperty,
  options: DurationPatchNullOptionalParams = { requestOptions: {} },
): StreamableMethod {
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

export async function _patchNullDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function patchNull(
  context: Client,
  body: DurationProperty,
  options: DurationPatchNullOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _patchNullSend(context, body, options);
  return _patchNullDeserialize(result);
}
