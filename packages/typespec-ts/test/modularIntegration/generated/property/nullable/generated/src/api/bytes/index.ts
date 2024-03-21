// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BytesProperty } from "../../models/models.js";
import {
  BytesGetNonNull200Response,
  BytesGetNull200Response,
  BytesPatchNonNull204Response,
  BytesPatchNull204Response,
  NullableContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { stringToUint8Array, uint8ArrayToString } from "@azure/core-util";
import {
  BytesGetNonNullOptions,
  BytesGetNullOptions,
  BytesPatchNonNullOptions,
  BytesPatchNullOptions,
} from "../../models/options.js";

export function _bytesGetNonNullSend(
  context: Client,
  options: BytesGetNonNullOptions = { requestOptions: {} },
): StreamableMethod<BytesGetNonNull200Response> {
  return context
    .path("/type/property/nullable/bytes/non-null")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _bytesGetNonNullDeserialize(
  result: BytesGetNonNull200Response,
): Promise<BytesProperty> {
  if (result.status !== "200") {
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
export async function bytesGetNonNull(
  context: Client,
  options: BytesGetNonNullOptions = { requestOptions: {} },
): Promise<BytesProperty> {
  const result = await _bytesGetNonNullSend(context, options);
  return _bytesGetNonNullDeserialize(result);
}

export function _bytesGetNullSend(
  context: Client,
  options: BytesGetNullOptions = { requestOptions: {} },
): StreamableMethod<BytesGetNull200Response> {
  return context
    .path("/type/property/nullable/bytes/null")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _bytesGetNullDeserialize(
  result: BytesGetNull200Response,
): Promise<BytesProperty> {
  if (result.status !== "200") {
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
export async function bytesGetNull(
  context: Client,
  options: BytesGetNullOptions = { requestOptions: {} },
): Promise<BytesProperty> {
  const result = await _bytesGetNullSend(context, options);
  return _bytesGetNullDeserialize(result);
}

export function _bytesPatchNonNullSend(
  context: Client,
  body: BytesProperty,
  options: BytesPatchNonNullOptions = { requestOptions: {} },
): StreamableMethod<BytesPatchNonNull204Response> {
  return context
    .path("/type/property/nullable/bytes/non-null")
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: {
        requiredProperty: body["requiredProperty"],
        nullableProperty: uint8ArrayToString(
          body["nullableProperty"],
          "base64",
        ),
      },
    });
}

export async function _bytesPatchNonNullDeserialize(
  result: BytesPatchNonNull204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function bytesPatchNonNull(
  context: Client,
  body: BytesProperty,
  options: BytesPatchNonNullOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _bytesPatchNonNullSend(context, body, options);
  return _bytesPatchNonNullDeserialize(result);
}

export function _bytesPatchNullSend(
  context: Client,
  body: BytesProperty,
  options: BytesPatchNullOptions = { requestOptions: {} },
): StreamableMethod<BytesPatchNull204Response> {
  return context
    .path("/type/property/nullable/bytes/null")
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: {
        requiredProperty: body["requiredProperty"],
        nullableProperty: uint8ArrayToString(
          body["nullableProperty"],
          "base64",
        ),
      },
    });
}

export async function _bytesPatchNullDeserialize(
  result: BytesPatchNull204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function bytesPatchNull(
  context: Client,
  body: BytesProperty,
  options: BytesPatchNullOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _bytesPatchNullSend(context, body, options);
  return _bytesPatchNullDeserialize(result);
}
