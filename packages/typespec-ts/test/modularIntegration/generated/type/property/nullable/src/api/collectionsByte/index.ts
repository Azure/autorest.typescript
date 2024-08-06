// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { CollectionsByteProperty } from "../../models/models.js";
import { NullableContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { stringToUint8Array, uint8ArrayToString } from "@azure/core-util";
import {
  CollectionsByteGetNonNullOptionalParams,
  CollectionsByteGetNullOptionalParams,
  CollectionsBytePatchNonNullOptionalParams,
  CollectionsBytePatchNullOptionalParams,
} from "../../models/options.js";

export function _getNonNullSend(
  context: Client,
  options: CollectionsByteGetNonNullOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/nullable/collections/bytes/non-null")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getNonNullDeserialize(
  result: PathUncheckedResponse,
): Promise<CollectionsByteProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    requiredProperty: result.body["requiredProperty"],
    nullableProperty:
      result.body["nullableProperty"] === null
        ? result.body["nullableProperty"]
        : result.body["nullableProperty"].map((p: any) =>
            typeof p === "string" ? stringToUint8Array(p, "base64") : p,
          ),
  };
}

/** Get models that will return all properties in the model */
export async function getNonNull(
  context: Client,
  options: CollectionsByteGetNonNullOptionalParams = { requestOptions: {} },
): Promise<CollectionsByteProperty> {
  const result = await _getNonNullSend(context, options);
  return _getNonNullDeserialize(result);
}

export function _getNullSend(
  context: Client,
  options: CollectionsByteGetNullOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/nullable/collections/bytes/null")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getNullDeserialize(
  result: PathUncheckedResponse,
): Promise<CollectionsByteProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    requiredProperty: result.body["requiredProperty"],
    nullableProperty:
      result.body["nullableProperty"] === null
        ? result.body["nullableProperty"]
        : result.body["nullableProperty"].map((p: any) =>
            typeof p === "string" ? stringToUint8Array(p, "base64") : p,
          ),
  };
}

/** Get models that will return the default object */
export async function getNull(
  context: Client,
  options: CollectionsByteGetNullOptionalParams = { requestOptions: {} },
): Promise<CollectionsByteProperty> {
  const result = await _getNullSend(context, options);
  return _getNullDeserialize(result);
}

export function _patchNonNullSend(
  context: Client,
  body: CollectionsByteProperty,
  options: CollectionsBytePatchNonNullOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/nullable/collections/bytes/non-null")
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: {
        requiredProperty: body["requiredProperty"],
        nullableProperty:
          body["nullableProperty"] === null
            ? body["nullableProperty"]
            : body["nullableProperty"].map((p) =>
                uint8ArrayToString(p, "base64"),
              ),
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
  body: CollectionsByteProperty,
  options: CollectionsBytePatchNonNullOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _patchNonNullSend(context, body, options);
  return _patchNonNullDeserialize(result);
}

export function _patchNullSend(
  context: Client,
  body: CollectionsByteProperty,
  options: CollectionsBytePatchNullOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/nullable/collections/bytes/null")
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: {
        requiredProperty: body["requiredProperty"],
        nullableProperty:
          body["nullableProperty"] === null
            ? body["nullableProperty"]
            : body["nullableProperty"].map((p) =>
                uint8ArrayToString(p, "base64"),
              ),
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
  body: CollectionsByteProperty,
  options: CollectionsBytePatchNullOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _patchNullSend(context, body, options);
  return _patchNullDeserialize(result);
}
