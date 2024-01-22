// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { CollectionsModelProperty } from "../../models/models.js";
import {
  CollectionsModelGetNonNull200Response,
  CollectionsModelGetNull200Response,
  CollectionsModelPatchNonNull204Response,
  CollectionsModelPatchNull204Response,
  NullableContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  CollectionsModelGetNonNullOptions,
  CollectionsModelGetNullOptions,
  CollectionsModelPatchNonNullOptions,
  CollectionsModelPatchNullOptions,
} from "../../models/options.js";

export function _collectionsModelGetNonNullSend(
  context: Client,
  options: CollectionsModelGetNonNullOptions = { requestOptions: {} },
): StreamableMethod<CollectionsModelGetNonNull200Response> {
  return context
    .path("/type/property/nullable/collections/model/non-null")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _collectionsModelGetNonNullDeserialize(
  result: CollectionsModelGetNonNull200Response,
): Promise<CollectionsModelProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    requiredProperty: result.body["requiredProperty"],
    nullableProperty: !result.body["nullableProperty"]
      ? result.body["nullableProperty"]
      : result.body["nullableProperty"].map((p) => ({
          property: p["property"],
        })),
  };
}

/** Get models that will return all properties in the model */
export async function collectionsModelGetNonNull(
  context: Client,
  options: CollectionsModelGetNonNullOptions = { requestOptions: {} },
): Promise<CollectionsModelProperty> {
  const result = await _collectionsModelGetNonNullSend(context, options);
  return _collectionsModelGetNonNullDeserialize(result);
}

export function _collectionsModelGetNullSend(
  context: Client,
  options: CollectionsModelGetNullOptions = { requestOptions: {} },
): StreamableMethod<CollectionsModelGetNull200Response> {
  return context
    .path("/type/property/nullable/collections/model/null")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _collectionsModelGetNullDeserialize(
  result: CollectionsModelGetNull200Response,
): Promise<CollectionsModelProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    requiredProperty: result.body["requiredProperty"],
    nullableProperty: !result.body["nullableProperty"]
      ? result.body["nullableProperty"]
      : result.body["nullableProperty"].map((p) => ({
          property: p["property"],
        })),
  };
}

/** Get models that will return the default object */
export async function collectionsModelGetNull(
  context: Client,
  options: CollectionsModelGetNullOptions = { requestOptions: {} },
): Promise<CollectionsModelProperty> {
  const result = await _collectionsModelGetNullSend(context, options);
  return _collectionsModelGetNullDeserialize(result);
}

export function _collectionsModelPatchNonNullSend(
  context: Client,
  body: CollectionsModelProperty,
  options: CollectionsModelPatchNonNullOptions = { requestOptions: {} },
): StreamableMethod<CollectionsModelPatchNonNull204Response> {
  return context
    .path("/type/property/nullable/collections/model/non-null")
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: {
        requiredProperty: body["requiredProperty"],
        nullableProperty: !body["nullableProperty"]
          ? body["nullableProperty"]
          : body["nullableProperty"].map((p) => ({ property: p["property"] })),
      },
    });
}

export async function _collectionsModelPatchNonNullDeserialize(
  result: CollectionsModelPatchNonNull204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function collectionsModelPatchNonNull(
  context: Client,
  body: CollectionsModelProperty,
  options: CollectionsModelPatchNonNullOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _collectionsModelPatchNonNullSend(
    context,
    body,
    options,
  );
  return _collectionsModelPatchNonNullDeserialize(result);
}

export function _collectionsModelPatchNullSend(
  context: Client,
  body: CollectionsModelProperty,
  options: CollectionsModelPatchNullOptions = { requestOptions: {} },
): StreamableMethod<CollectionsModelPatchNull204Response> {
  return context
    .path("/type/property/nullable/collections/model/null")
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: {
        requiredProperty: body["requiredProperty"],
        nullableProperty: !body["nullableProperty"]
          ? body["nullableProperty"]
          : body["nullableProperty"].map((p) => ({ property: p["property"] })),
      },
    });
}

export async function _collectionsModelPatchNullDeserialize(
  result: CollectionsModelPatchNull204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function collectionsModelPatchNull(
  context: Client,
  body: CollectionsModelProperty,
  options: CollectionsModelPatchNullOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _collectionsModelPatchNullSend(context, body, options);
  return _collectionsModelPatchNullDeserialize(result);
}
