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
  CollectionsByteGetNonNullOptionalParams,
  CollectionsByteGetNullOptionalParams,
  CollectionsBytePatchNonNullOptionalParams,
  CollectionsBytePatchNullOptionalParams,
} from "../options.js";

export function _getNonNullSend(
  context: Client,
  options: CollectionsByteGetNonNullOptionalParams = { requestOptions: {} },
): StreamableMethod<CollectionsByteGetNonNull200Response> {
  return context
    .path("/type/property/nullable/collections/bytes/non-null")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getNonNullDeserialize(
  result: CollectionsByteGetNonNull200Response,
): Promise<CollectionsByteProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    requiredProperty: result.body["requiredProperty"],
    nullableProperty:
      result.body["nullableProperty"] === null
        ? result.body["nullableProperty"]
        : result.body["nullableProperty"].map((p) =>
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
): StreamableMethod<CollectionsByteGetNull200Response> {
  return context
    .path("/type/property/nullable/collections/bytes/null")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getNullDeserialize(
  result: CollectionsByteGetNull200Response,
): Promise<CollectionsByteProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    requiredProperty: result.body["requiredProperty"],
    nullableProperty:
      result.body["nullableProperty"] === null
        ? result.body["nullableProperty"]
        : result.body["nullableProperty"].map((p) =>
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
): StreamableMethod<CollectionsBytePatchNonNull204Response> {
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
  result: CollectionsBytePatchNonNull204Response,
): Promise<void> {
  if (result.status !== "204") {
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
): StreamableMethod<CollectionsBytePatchNull204Response> {
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
  result: CollectionsBytePatchNull204Response,
): Promise<void> {
  if (result.status !== "204") {
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
