// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BytesProperty } from "../../models/models.js";
import { NullableContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { stringToUint8Array, uint8ArrayToString } from "@azure/core-util";
import {
  BytesGetNonNullOptionalParams,
  BytesGetNullOptionalParams,
  BytesPatchNonNullOptionalParams,
  BytesPatchNullOptionalParams,
} from "../../models/options.js";

export function _getNonNullSend(
  context: Client,
  options: BytesGetNonNullOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/nullable/bytes/non-null")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getNonNullDeserialize(
  result: PathUncheckedResponse,
): Promise<BytesProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    requiredProperty: result.body["requiredProperty"],
    nullableProperty:
      typeof result.body["nullableProperty"] === "string"
        ? stringToUint8Array(result.body["nullableProperty"], "base64")
        : result.body["nullableProperty"],
  };
}

/** Get models that will return all properties in the model */
export async function getNonNull(
  context: Client,
  options: BytesGetNonNullOptionalParams = { requestOptions: {} },
): Promise<BytesProperty> {
  const result = await _getNonNullSend(context, options);
  return _getNonNullDeserialize(result);
}

export function _getNullSend(
  context: Client,
  options: BytesGetNullOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/nullable/bytes/null")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getNullDeserialize(
  result: PathUncheckedResponse,
): Promise<BytesProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    requiredProperty: result.body["requiredProperty"],
    nullableProperty:
      typeof result.body["nullableProperty"] === "string"
        ? stringToUint8Array(result.body["nullableProperty"], "base64")
        : result.body["nullableProperty"],
  };
}

/** Get models that will return the default object */
export async function getNull(
  context: Client,
  options: BytesGetNullOptionalParams = { requestOptions: {} },
): Promise<BytesProperty> {
  const result = await _getNullSend(context, options);
  return _getNullDeserialize(result);
}

export function _patchNonNullSend(
  context: Client,
  body: BytesProperty,
  options: BytesPatchNonNullOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/nullable/bytes/non-null")
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: {
        requiredProperty: body["requiredProperty"],
        nullableProperty:
          body["nullableProperty"] === null
            ? null
            : uint8ArrayToString(body["nullableProperty"], "base64"),
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
  body: BytesProperty,
  options: BytesPatchNonNullOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _patchNonNullSend(context, body, options);
  return _patchNonNullDeserialize(result);
}

export function _patchNullSend(
  context: Client,
  body: BytesProperty,
  options: BytesPatchNullOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/nullable/bytes/null")
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: {
        requiredProperty: body["requiredProperty"],
        nullableProperty:
          body["nullableProperty"] === null
            ? null
            : uint8ArrayToString(body["nullableProperty"], "base64"),
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
  body: BytesProperty,
  options: BytesPatchNullOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _patchNullSend(context, body, options);
  return _patchNullDeserialize(result);
}
