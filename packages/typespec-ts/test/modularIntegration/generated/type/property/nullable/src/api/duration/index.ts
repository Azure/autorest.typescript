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
  DurationGetNonNullOptionalParams,
  DurationGetNullOptionalParams,
  DurationPatchNonNullOptionalParams,
  DurationPatchNullOptionalParams,
} from "../../models/options.js";

export function _getNonNullSend(
  context: Client,
  options: DurationGetNonNullOptionalParams = { requestOptions: {} },
): StreamableMethod<DurationGetNonNull200Response> {
  return context
    .path("/type/property/nullable/duration/non-null")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getNonNullDeserialize(
  result: DurationGetNonNull200Response,
): Promise<DurationProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as DurationGetNonNull200Response;
  return {
    requiredProperty: _result.body["requiredProperty"],
    nullableProperty: _result.body["nullableProperty"],
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
): StreamableMethod<DurationGetNull200Response> {
  return context
    .path("/type/property/nullable/duration/null")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getNullDeserialize(
  result: DurationGetNull200Response,
): Promise<DurationProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as DurationGetNull200Response;
  return {
    requiredProperty: _result.body["requiredProperty"],
    nullableProperty: _result.body["nullableProperty"],
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

export async function _patchNonNullDeserialize(
  result: DurationPatchNonNull204Response,
): Promise<void> {
  if (result.status !== "204") {
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

export async function _patchNullDeserialize(
  result: DurationPatchNull204Response,
): Promise<void> {
  if (result.status !== "204") {
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
