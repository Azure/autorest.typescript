// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  BytesContext as Client,
  QueryBase64204Response,
  QueryBase64url204Response,
  QueryBase64urlArray204Response,
  QueryDefault204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { uint8ArrayToString } from "@azure/core-util";
import {
  QueryDefaultOptions,
  QueryBase64Options,
  QueryBase64urlOptions,
  QueryBase64urlArrayOptions,
} from "../../models/options.js";

export function _queryDefaultSend(
  context: Client,
  value: Uint8Array,
  options: QueryDefaultOptions = { requestOptions: {} },
): StreamableMethod<QueryDefault204Response> {
  return context
    .path("/encode/bytes/query/default")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { value: uint8ArrayToString(value, "base64") },
    });
}

export async function _queryDefaultDeserialize(
  result: QueryDefault204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function queryDefault(
  context: Client,
  value: Uint8Array,
  options: QueryDefaultOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _queryDefaultSend(context, value, options);
  return _queryDefaultDeserialize(result);
}

export function _queryBase64Send(
  context: Client,
  value: Uint8Array,
  options: QueryBase64Options = { requestOptions: {} },
): StreamableMethod<QueryBase64204Response> {
  return context
    .path("/encode/bytes/query/base64")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { value: uint8ArrayToString(value, "base64") },
    });
}

export async function _queryBase64Deserialize(
  result: QueryBase64204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function queryBase64(
  context: Client,
  value: Uint8Array,
  options: QueryBase64Options = { requestOptions: {} },
): Promise<void> {
  const result = await _queryBase64Send(context, value, options);
  return _queryBase64Deserialize(result);
}

export function _queryBase64urlSend(
  context: Client,
  value: Uint8Array,
  options: QueryBase64urlOptions = { requestOptions: {} },
): StreamableMethod<QueryBase64url204Response> {
  return context
    .path("/encode/bytes/query/base64url")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { value: uint8ArrayToString(value, "base64url") },
    });
}

export async function _queryBase64urlDeserialize(
  result: QueryBase64url204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function queryBase64url(
  context: Client,
  value: Uint8Array,
  options: QueryBase64urlOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _queryBase64urlSend(context, value, options);
  return _queryBase64urlDeserialize(result);
}

export function _queryBase64urlArraySend(
  context: Client,
  value: Uint8Array[],
  options: QueryBase64urlArrayOptions = { requestOptions: {} },
): StreamableMethod<QueryBase64urlArray204Response> {
  return context
    .path("/encode/bytes/query/base64url-array")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        value: value.map((p) => uint8ArrayToString(p, "base64url")),
      },
    });
}

export async function _queryBase64urlArrayDeserialize(
  result: QueryBase64urlArray204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function queryBase64urlArray(
  context: Client,
  value: Uint8Array[],
  options: QueryBase64urlArrayOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _queryBase64urlArraySend(context, value, options);
  return _queryBase64urlArrayDeserialize(result);
}
