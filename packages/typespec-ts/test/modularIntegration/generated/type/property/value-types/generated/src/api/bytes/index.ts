// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BytesProperty } from "../../models/models.js";
import { ValueTypesContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { stringToUint8Array, uint8ArrayToString } from "@azure/core-util";
import {
  BytesGetOptionalParams,
  BytesPutOptionalParams,
} from "../../models/options.js";

export function _bytesGetSend(
  context: Client,
  options: BytesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/bytes")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _bytesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<BytesProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
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
  options: BytesGetOptionalParams = { requestOptions: {} },
): Promise<BytesProperty> {
  const result = await _bytesGetSend(context, options);
  return _bytesGetDeserialize(result);
}

export function _bytesPutSend(
  context: Client,
  body: BytesProperty,
  options: BytesPutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/bytes")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: uint8ArrayToString(body["property"], "base64") },
    });
}

export async function _bytesPutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function bytesPut(
  context: Client,
  body: BytesProperty,
  options: BytesPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _bytesPutSend(context, body, options);
  return _bytesPutDeserialize(result);
}
