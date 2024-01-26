// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BytesProperty } from "../../models/models.js";
import {
  BytesGet200Response,
  BytesPut204Response,
  ValueTypesContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { stringToUint8Array, uint8ArrayToString } from "@azure/core-util";
import { BytesGetOptions, BytesPutOptions } from "../../models/options.js";

export function _bytesGetSend(
  context: Client,
  options: BytesGetOptions = { requestOptions: {} },
): StreamableMethod<BytesGet200Response> {
  return context
    .path("/type/property/value-types/bytes")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _bytesGetDeserialize(
  result: BytesGet200Response,
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

/** Get call */
export async function bytesGet(
  context: Client,
  options: BytesGetOptions = { requestOptions: {} },
): Promise<BytesProperty> {
  const result = await _bytesGetSend(context, options);
  return _bytesGetDeserialize(result);
}

export function _bytesPutSend(
  context: Client,
  body: BytesProperty,
  options: BytesPutOptions = { requestOptions: {} },
): StreamableMethod<BytesPut204Response> {
  return context
    .path("/type/property/value-types/bytes")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: uint8ArrayToString(body["property"], "base64") },
    });
}

export async function _bytesPutDeserialize(
  result: BytesPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function bytesPut(
  context: Client,
  body: BytesProperty,
  options: BytesPutOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _bytesPutSend(context, body, options);
  return _bytesPutDeserialize(result);
}
