// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { CollectionsByteProperty } from "../../models/models.js";
import {
  CollectionsByteGetNonNull200Response,
  CollectionsByteGetNull200Response,
  CollectionsBytePatchNonNull204Response,
  CollectionsBytePatchNull204Response,
  NullableContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { stringToUint8Array, uint8ArrayToString } from "@azure/core-util";
import {
  CollectionsByteGetNonNullOptions,
  CollectionsByteGetNullOptions,
  CollectionsBytePatchNonNullOptions,
  CollectionsBytePatchNullOptions,
} from "../../models/options.js";

export function _collectionsByteGetNonNullSend(
  context: Client,
  options: CollectionsByteGetNonNullOptions = { requestOptions: {} },
): StreamableMethod<CollectionsByteGetNonNull200Response> {
  return context
    .path("/type/property/nullable/collections/bytes/non-null")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _collectionsByteGetNonNullDeserialize(
  result: CollectionsByteGetNonNull200Response,
): Promise<CollectionsByteProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    requiredProperty: result.body["requiredProperty"],
    nullableProperty: !result.body["nullableProperty"]
      ? result.body["nullableProperty"]
      : result.body["nullableProperty"].map((p) =>
          typeof p === "string" ? stringToUint8Array(p, "base64") : p,
        ),
  };
}

/** Get models that will return all properties in the model */
export async function collectionsByteGetNonNull(
  context: Client,
  options: CollectionsByteGetNonNullOptions = { requestOptions: {} },
): Promise<CollectionsByteProperty> {
  const result = await _collectionsByteGetNonNullSend(context, options);
  return _collectionsByteGetNonNullDeserialize(result);
}

export function _collectionsByteGetNullSend(
  context: Client,
  options: CollectionsByteGetNullOptions = { requestOptions: {} },
): StreamableMethod<CollectionsByteGetNull200Response> {
  return context
    .path("/type/property/nullable/collections/bytes/null")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _collectionsByteGetNullDeserialize(
  result: CollectionsByteGetNull200Response,
): Promise<CollectionsByteProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    requiredProperty: result.body["requiredProperty"],
    nullableProperty: !result.body["nullableProperty"]
      ? result.body["nullableProperty"]
      : result.body["nullableProperty"].map((p) =>
          typeof p === "string" ? stringToUint8Array(p, "base64") : p,
        ),
  };
}

/** Get models that will return the default object */
export async function collectionsByteGetNull(
  context: Client,
  options: CollectionsByteGetNullOptions = { requestOptions: {} },
): Promise<CollectionsByteProperty> {
  const result = await _collectionsByteGetNullSend(context, options);
  return _collectionsByteGetNullDeserialize(result);
}

export function _collectionsBytePatchNonNullSend(
  context: Client,
  body: CollectionsByteProperty,
  options: CollectionsBytePatchNonNullOptions = { requestOptions: {} },
): StreamableMethod<CollectionsBytePatchNonNull204Response> {
  return context
    .path("/type/property/nullable/collections/bytes/non-null")
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: {
        requiredProperty: body["requiredProperty"],
        nullableProperty: !body["nullableProperty"]
          ? body["nullableProperty"]
          : body["nullableProperty"].map((p) =>
              uint8ArrayToString(p, "base64"),
            ),
      },
    });
}

export async function _collectionsBytePatchNonNullDeserialize(
  result: CollectionsBytePatchNonNull204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function collectionsBytePatchNonNull(
  context: Client,
  body: CollectionsByteProperty,
  options: CollectionsBytePatchNonNullOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _collectionsBytePatchNonNullSend(context, body, options);
  return _collectionsBytePatchNonNullDeserialize(result);
}

export function _collectionsBytePatchNullSend(
  context: Client,
  body: CollectionsByteProperty,
  options: CollectionsBytePatchNullOptions = { requestOptions: {} },
): StreamableMethod<CollectionsBytePatchNull204Response> {
  return context
    .path("/type/property/nullable/collections/bytes/null")
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: {
        requiredProperty: body["requiredProperty"],
        nullableProperty: !body["nullableProperty"]
          ? body["nullableProperty"]
          : body["nullableProperty"].map((p) =>
              uint8ArrayToString(p, "base64"),
            ),
      },
    });
}

export async function _collectionsBytePatchNullDeserialize(
  result: CollectionsBytePatchNull204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function collectionsBytePatchNull(
  context: Client,
  body: CollectionsByteProperty,
  options: CollectionsBytePatchNullOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _collectionsBytePatchNullSend(context, body, options);
  return _collectionsBytePatchNullDeserialize(result);
}
