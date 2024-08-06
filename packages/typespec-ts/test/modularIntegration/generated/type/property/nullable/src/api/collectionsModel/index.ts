// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  innerModelSerializer,
  CollectionsModelProperty,
} from "../../models/models.js";
import { NullableContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  CollectionsModelGetNonNullOptionalParams,
  CollectionsModelGetNullOptionalParams,
  CollectionsModelPatchNonNullOptionalParams,
  CollectionsModelPatchNullOptionalParams,
} from "../../models/options.js";

export function _getNonNullSend(
  context: Client,
  options: CollectionsModelGetNonNullOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/nullable/collections/model/non-null")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getNonNullDeserialize(
  result: PathUncheckedResponse,
): Promise<CollectionsModelProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    requiredProperty: result.body["requiredProperty"],
    nullableProperty:
      result.body["nullableProperty"] === null
        ? result.body["nullableProperty"]
        : result.body["nullableProperty"].map((p: any) => {
            return { property: p["property"] };
          }),
  };
}

/** Get models that will return all properties in the model */
export async function getNonNull(
  context: Client,
  options: CollectionsModelGetNonNullOptionalParams = { requestOptions: {} },
): Promise<CollectionsModelProperty> {
  const result = await _getNonNullSend(context, options);
  return _getNonNullDeserialize(result);
}

export function _getNullSend(
  context: Client,
  options: CollectionsModelGetNullOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/nullable/collections/model/null")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getNullDeserialize(
  result: PathUncheckedResponse,
): Promise<CollectionsModelProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    requiredProperty: result.body["requiredProperty"],
    nullableProperty:
      result.body["nullableProperty"] === null
        ? result.body["nullableProperty"]
        : result.body["nullableProperty"].map((p: any) => {
            return { property: p["property"] };
          }),
  };
}

/** Get models that will return the default object */
export async function getNull(
  context: Client,
  options: CollectionsModelGetNullOptionalParams = { requestOptions: {} },
): Promise<CollectionsModelProperty> {
  const result = await _getNullSend(context, options);
  return _getNullDeserialize(result);
}

export function _patchNonNullSend(
  context: Client,
  body: CollectionsModelProperty,
  options: CollectionsModelPatchNonNullOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/nullable/collections/model/non-null")
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: {
        requiredProperty: body["requiredProperty"],
        nullableProperty:
          body["nullableProperty"] === null
            ? body["nullableProperty"]
            : body["nullableProperty"].map(innerModelSerializer),
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
  body: CollectionsModelProperty,
  options: CollectionsModelPatchNonNullOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _patchNonNullSend(context, body, options);
  return _patchNonNullDeserialize(result);
}

export function _patchNullSend(
  context: Client,
  body: CollectionsModelProperty,
  options: CollectionsModelPatchNullOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/nullable/collections/model/null")
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: {
        requiredProperty: body["requiredProperty"],
        nullableProperty:
          body["nullableProperty"] === null
            ? body["nullableProperty"]
            : body["nullableProperty"].map(innerModelSerializer),
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
  body: CollectionsModelProperty,
  options: CollectionsModelPatchNullOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _patchNullSend(context, body, options);
  return _patchNullDeserialize(result);
}
