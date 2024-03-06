// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BytesProperty } from "../../models/models.js";
import {
  BytesGetAll200Response,
  BytesGetDefault200Response,
  BytesPutAll204Response,
  BytesPutDefault204Response,
  OptionalContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { stringToUint8Array, uint8ArrayToString } from "@azure/core-util";
import {
  BytesGetAllOptions,
  BytesGetDefaultOptions,
  BytesPutAllOptions,
  BytesPutDefaultOptions,
} from "../../models/options.js";

export function _bytesGetAllSend(
  context: Client,
  options: BytesGetAllOptions = { requestOptions: {} },
): StreamableMethod<BytesGetAll200Response> {
  return context
    .path("/type/property/optional/bytes/all")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _bytesGetAllDeserialize(
  result: BytesGetAll200Response,
): Promise<BytesProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property:
      typeof result.body["property"] === "string"
        ? stringToUint8Array(result.body["property"], "base64")
        : result.body["property"],
  };
}

/** Get models that will return all properties in the model */
export async function bytesGetAll(
  context: Client,
  options: BytesGetAllOptions = { requestOptions: {} },
): Promise<BytesProperty> {
  const result = await _bytesGetAllSend(context, options);
  return _bytesGetAllDeserialize(result);
}

export function _bytesGetDefaultSend(
  context: Client,
  options: BytesGetDefaultOptions = { requestOptions: {} },
): StreamableMethod<BytesGetDefault200Response> {
  return context
    .path("/type/property/optional/bytes/default")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _bytesGetDefaultDeserialize(
  result: BytesGetDefault200Response,
): Promise<BytesProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property:
      typeof result.body["property"] === "string"
        ? stringToUint8Array(result.body["property"], "base64")
        : result.body["property"],
  };
}

/** Get models that will return the default object */
export async function bytesGetDefault(
  context: Client,
  options: BytesGetDefaultOptions = { requestOptions: {} },
): Promise<BytesProperty> {
  const result = await _bytesGetDefaultSend(context, options);
  return _bytesGetDefaultDeserialize(result);
}

export function _bytesPutAllSend(
  context: Client,
  body: BytesProperty,
  options: BytesPutAllOptions = { requestOptions: {} },
): StreamableMethod<BytesPutAll204Response> {
  return context
    .path("/type/property/optional/bytes/all")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        property:
          body["property"] !== undefined
            ? uint8ArrayToString(body["property"], "base64")
            : undefined,
      },
    });
}

export async function _bytesPutAllDeserialize(
  result: BytesPutAll204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function bytesPutAll(
  context: Client,
  body: BytesProperty,
  options: BytesPutAllOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _bytesPutAllSend(context, body, options);
  return _bytesPutAllDeserialize(result);
}

export function _bytesPutDefaultSend(
  context: Client,
  body: BytesProperty,
  options: BytesPutDefaultOptions = { requestOptions: {} },
): StreamableMethod<BytesPutDefault204Response> {
  return context
    .path("/type/property/optional/bytes/default")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        property:
          body["property"] !== undefined
            ? uint8ArrayToString(body["property"], "base64")
            : undefined,
      },
    });
}

export async function _bytesPutDefaultDeserialize(
  result: BytesPutDefault204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function bytesPutDefault(
  context: Client,
  body: BytesProperty,
  options: BytesPutDefaultOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _bytesPutDefaultSend(context, body, options);
  return _bytesPutDefaultDeserialize(result);
}
