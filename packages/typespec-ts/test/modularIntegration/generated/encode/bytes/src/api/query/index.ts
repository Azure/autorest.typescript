// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BytesContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { uint8ArrayToString } from "@azure/core-util";
import {
  QueryDefaultOptionalParams,
  QueryBase64OptionalParams,
  QueryBase64urlOptionalParams,
  QueryBase64urlArrayOptionalParams,
} from "../../models/options.js";

export function _queryDefaultSend(
  context: Client,
  value: Uint8Array,
  options: QueryDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/bytes/query/default")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { value: uint8ArrayToString(value, "base64") },
    });
}

export async function _queryDefaultDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function queryDefault(
  context: Client,
  value: Uint8Array,
  options: QueryDefaultOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _queryDefaultSend(context, value, options);
  return _queryDefaultDeserialize(result);
}

export function _queryBase64Send(
  context: Client,
  value: Uint8Array,
  options: QueryBase64OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/bytes/query/base64")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { value: uint8ArrayToString(value, "base64") },
    });
}

export async function _queryBase64Deserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function queryBase64(
  context: Client,
  value: Uint8Array,
  options: QueryBase64OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _queryBase64Send(context, value, options);
  return _queryBase64Deserialize(result);
}

export function _queryBase64urlSend(
  context: Client,
  value: Uint8Array,
  options: QueryBase64urlOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/bytes/query/base64url")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { value: uint8ArrayToString(value, "base64url") },
    });
}

export async function _queryBase64urlDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function queryBase64url(
  context: Client,
  value: Uint8Array,
  options: QueryBase64urlOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _queryBase64urlSend(context, value, options);
  return _queryBase64urlDeserialize(result);
}

export function _queryBase64urlArraySend(
  context: Client,
  value: Uint8Array[],
  options: QueryBase64urlArrayOptionalParams = { requestOptions: {} },
): StreamableMethod {
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
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function queryBase64urlArray(
  context: Client,
  value: Uint8Array[],
  options: QueryBase64urlArrayOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _queryBase64urlArraySend(context, value, options);
  return _queryBase64urlArrayDeserialize(result);
}
