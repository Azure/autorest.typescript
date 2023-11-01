// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Base64204Response,
  Base64url204Response,
  Base64urlArray204Response,
  buildCsvCollection,
  BytesContext as Client,
  Default204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { uint8ArrayToString } from "@azure/core-util";
import {
  HeaderHeaderDefaultOptions,
  HeaderHeaderBase64Options,
  HeaderHeaderBase64urlOptions,
  HeaderHeaderBase64urlArrayOptions,
} from "../../models/options.js";

export function _headerDefaultSend(
  context: Client,
  value: Uint8Array,
  options: HeaderHeaderDefaultOptions = { requestOptions: {} }
): StreamableMethod<Default204Response> {
  return context
    .path("/encode/bytes/header/default")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { value: uint8ArrayToString(value, "base64") },
    });
}

export async function _headerDefaultDeserialize(
  result: Default204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function headerDefault(
  context: Client,
  value: Uint8Array,
  options: HeaderHeaderDefaultOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _headerDefaultSend(context, value, options);
  return _headerDefaultDeserialize(result);
}

export function _headerBase64Send(
  context: Client,
  value: Uint8Array,
  options: HeaderHeaderBase64Options = { requestOptions: {} }
): StreamableMethod<Base64204Response> {
  return context
    .path("/encode/bytes/header/base64")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { value: uint8ArrayToString(value, "base64") },
    });
}

export async function _headerBase64Deserialize(
  result: Base64204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function headerBase64(
  context: Client,
  value: Uint8Array,
  options: HeaderHeaderBase64Options = { requestOptions: {} }
): Promise<void> {
  const result = await _headerBase64Send(context, value, options);
  return _headerBase64Deserialize(result);
}

export function _headerBase64urlSend(
  context: Client,
  value: Uint8Array,
  options: HeaderHeaderBase64urlOptions = { requestOptions: {} }
): StreamableMethod<Base64url204Response> {
  return context
    .path("/encode/bytes/header/base64url")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { value: uint8ArrayToString(value, "base64url") },
    });
}

export async function _headerBase64urlDeserialize(
  result: Base64url204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function headerBase64url(
  context: Client,
  value: Uint8Array,
  options: HeaderHeaderBase64urlOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _headerBase64urlSend(context, value, options);
  return _headerBase64urlDeserialize(result);
}

export function _headerBase64urlArraySend(
  context: Client,
  value: Uint8Array[],
  options: HeaderHeaderBase64urlArrayOptions = { requestOptions: {} }
): StreamableMethod<Base64urlArray204Response> {
  return context
    .path("/encode/bytes/header/base64url-array")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        value: buildCsvCollection(
          (value ?? []).map((p) => uint8ArrayToString(p, "base64url"))
        ),
      },
    });
}

export async function _headerBase64urlArrayDeserialize(
  result: Base64urlArray204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function headerBase64urlArray(
  context: Client,
  value: Uint8Array[],
  options: HeaderHeaderBase64urlArrayOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _headerBase64urlArraySend(context, value, options);
  return _headerBase64urlArrayDeserialize(result);
}
