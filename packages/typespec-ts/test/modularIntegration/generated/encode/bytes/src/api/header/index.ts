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
import { buildCsvCollection } from "../../static-helpers/serialization/build-csv-collection.js";
import {
  HeaderDefaultOptionalParams,
  HeaderBase64OptionalParams,
  HeaderBase64urlOptionalParams,
  HeaderBase64urlArrayOptionalParams,
} from "../../models/options.js";

export function _headerDefaultSend(
  context: Client,
  value: Uint8Array,
  options: HeaderDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/bytes/header/default")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { value: uint8ArrayToString(value, "base64") },
    });
}

export async function _headerDefaultDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function headerDefault(
  context: Client,
  value: Uint8Array,
  options: HeaderDefaultOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _headerDefaultSend(context, value, options);
  return _headerDefaultDeserialize(result);
}

export function _headerBase64Send(
  context: Client,
  value: Uint8Array,
  options: HeaderBase64OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/bytes/header/base64")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { value: uint8ArrayToString(value, "base64") },
    });
}

export async function _headerBase64Deserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function headerBase64(
  context: Client,
  value: Uint8Array,
  options: HeaderBase64OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _headerBase64Send(context, value, options);
  return _headerBase64Deserialize(result);
}

export function _headerBase64urlSend(
  context: Client,
  value: Uint8Array,
  options: HeaderBase64urlOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/bytes/header/base64url")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { value: uint8ArrayToString(value, "base64url") },
    });
}

export async function _headerBase64urlDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function headerBase64url(
  context: Client,
  value: Uint8Array,
  options: HeaderBase64urlOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _headerBase64urlSend(context, value, options);
  return _headerBase64urlDeserialize(result);
}

export function _headerBase64urlArraySend(
  context: Client,
  value: Uint8Array[],
  options: HeaderBase64urlArrayOptionalParams = { requestOptions: {} },
): StreamableMethod {
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
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function headerBase64urlArray(
  context: Client,
  value: Uint8Array[],
  options: HeaderBase64urlArrayOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _headerBase64urlArraySend(context, value, options);
  return _headerBase64urlArrayDeserialize(result);
}
