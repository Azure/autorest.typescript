// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  buildCsvCollection,
  BytesContext as Client,
  HeaderBase64204Response,
  HeaderBase64url204Response,
  HeaderBase64urlArray204Response,
  HeaderDefault204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { uint8ArrayToString } from "@azure/core-util";
import {
  HeaderDefaultOptions,
  HeaderBase64Options,
  HeaderBase64urlOptions,
  HeaderBase64urlArrayOptions,
} from "../../models/options.js";

export function _headerDefaultSend(
  context: Client,
  value: Uint8Array,
  options: HeaderDefaultOptions = { requestOptions: {} },
): StreamableMethod<HeaderDefault204Response> {
  return context
    .path("/encode/bytes/header/default")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { value: uint8ArrayToString(value, "base64") },
    });
}

export async function _headerDefaultDeserialize(
  result: HeaderDefault204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function headerDefault(
  context: Client,
  value: Uint8Array,
  options: HeaderDefaultOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _headerDefaultSend(context, value, options);
  return _headerDefaultDeserialize(result);
}

export function _headerBase64Send(
  context: Client,
  value: Uint8Array,
  options: HeaderBase64Options = { requestOptions: {} },
): StreamableMethod<HeaderBase64204Response> {
  return context
    .path("/encode/bytes/header/base64")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { value: uint8ArrayToString(value, "base64") },
    });
}

export async function _headerBase64Deserialize(
  result: HeaderBase64204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function headerBase64(
  context: Client,
  value: Uint8Array,
  options: HeaderBase64Options = { requestOptions: {} },
): Promise<void> {
  const result = await _headerBase64Send(context, value, options);
  return _headerBase64Deserialize(result);
}

export function _headerBase64urlSend(
  context: Client,
  value: Uint8Array,
  options: HeaderBase64urlOptions = { requestOptions: {} },
): StreamableMethod<HeaderBase64url204Response> {
  return context
    .path("/encode/bytes/header/base64url")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { value: uint8ArrayToString(value, "base64url") },
    });
}

export async function _headerBase64urlDeserialize(
  result: HeaderBase64url204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function headerBase64url(
  context: Client,
  value: Uint8Array,
  options: HeaderBase64urlOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _headerBase64urlSend(context, value, options);
  return _headerBase64urlDeserialize(result);
}

export function _headerBase64urlArraySend(
  context: Client,
  value: Uint8Array[],
  options: HeaderBase64urlArrayOptions = { requestOptions: {} },
): StreamableMethod<HeaderBase64urlArray204Response> {
  return context
    .path("/encode/bytes/header/base64url-array")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        value: buildCsvCollection(
          value.map((p) => uint8ArrayToString(p, "base64url")),
        ),
      },
    });
}

export async function _headerBase64urlArrayDeserialize(
  result: HeaderBase64urlArray204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function headerBase64urlArray(
  context: Client,
  value: Uint8Array[],
  options: HeaderBase64urlArrayOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _headerBase64urlArraySend(context, value, options);
  return _headerBase64urlArrayDeserialize(result);
}
