// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { CollectionsStringProperty } from "../../models/models.js";
import { NullableContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  CollectionsStringGetNonNullOptionalParams,
  CollectionsStringGetNullOptionalParams,
  CollectionsStringPatchNonNullOptionalParams,
  CollectionsStringPatchNullOptionalParams,
} from "../../models/options.js";

export function _getNonNullSend(
  context: Client,
  options: CollectionsStringGetNonNullOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/nullable/collections/string/non-null")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getNonNullDeserialize(
  result: PathUncheckedResponse,
): Promise<CollectionsStringProperty> {
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
  options: CollectionsStringGetNonNullOptionalParams = { requestOptions: {} },
): Promise<CollectionsStringProperty> {
  const result = await _getNonNullSend(context, options);
  return _getNonNullDeserialize(result);
}

export function _getNullSend(
  context: Client,
  options: CollectionsStringGetNullOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/nullable/collections/string/null")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getNullDeserialize(
  result: PathUncheckedResponse,
): Promise<CollectionsStringProperty> {
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
  options: CollectionsStringGetNullOptionalParams = { requestOptions: {} },
): Promise<CollectionsStringProperty> {
  const result = await _getNullSend(context, options);
  return _getNullDeserialize(result);
}

export function _patchNonNullSend(
  context: Client,
  body: CollectionsStringProperty,
  options: CollectionsStringPatchNonNullOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/nullable/collections/string/non-null")
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
  body: CollectionsStringProperty,
  options: CollectionsStringPatchNonNullOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _patchNonNullSend(context, body, options);
  return _patchNonNullDeserialize(result);
}

export function _patchNullSend(
  context: Client,
  body: CollectionsStringProperty,
  options: CollectionsStringPatchNullOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/nullable/collections/string/null")
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
  body: CollectionsStringProperty,
  options: CollectionsStringPatchNullOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _patchNullSend(context, body, options);
  return _patchNullDeserialize(result);
}
