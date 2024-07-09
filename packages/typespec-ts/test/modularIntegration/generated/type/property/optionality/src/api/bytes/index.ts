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
  BytesGetAllOptionalParams,
  BytesGetDefaultOptionalParams,
  BytesPutAllOptionalParams,
  BytesPutDefaultOptionalParams,
} from "../../models/options.js";

export function _getAllSend(
  context: Client,
  options: BytesGetAllOptionalParams = { requestOptions: {} },
): StreamableMethod<BytesGetAll200Response> {
  return context
    .path("/type/property/optional/bytes/all")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getAllDeserialize(
  result: BytesGetAll200Response,
): Promise<BytesProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as BytesGetAll200Response;
  return {
    property:
      typeof _result.body["property"] === "string"
        ? stringToUint8Array(_result.body["property"], "base64")
        : _result.body["property"],
  };
}

/** Get models that will return all properties in the model */
export async function getAll(
  context: Client,
  options: BytesGetAllOptionalParams = { requestOptions: {} },
): Promise<BytesProperty> {
  const result = await _getAllSend(context, options);
  return _getAllDeserialize(result);
}

export function _getDefaultSend(
  context: Client,
  options: BytesGetDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod<BytesGetDefault200Response> {
  return context
    .path("/type/property/optional/bytes/default")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDefaultDeserialize(
  result: BytesGetDefault200Response,
): Promise<BytesProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as BytesGetDefault200Response;
  return {
    property:
      typeof _result.body["property"] === "string"
        ? stringToUint8Array(_result.body["property"], "base64")
        : _result.body["property"],
  };
}

/** Get models that will return the default object */
export async function getDefault(
  context: Client,
  options: BytesGetDefaultOptionalParams = { requestOptions: {} },
): Promise<BytesProperty> {
  const result = await _getDefaultSend(context, options);
  return _getDefaultDeserialize(result);
}

export function _putAllSend(
  context: Client,
  body: BytesProperty,
  options: BytesPutAllOptionalParams = { requestOptions: {} },
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

export async function _putAllDeserialize(
  result: BytesPutAll204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function putAll(
  context: Client,
  body: BytesProperty,
  options: BytesPutAllOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putAllSend(context, body, options);
  return _putAllDeserialize(result);
}

export function _putDefaultSend(
  context: Client,
  body: BytesProperty,
  options: BytesPutDefaultOptionalParams = { requestOptions: {} },
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

export async function _putDefaultDeserialize(
  result: BytesPutDefault204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function putDefault(
  context: Client,
  body: BytesProperty,
  options: BytesPutDefaultOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putDefaultSend(context, body, options);
  return _putDefaultDeserialize(result);
}
