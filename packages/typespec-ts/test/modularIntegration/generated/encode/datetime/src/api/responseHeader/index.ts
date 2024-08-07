// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DatetimeContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  ResponseHeaderDefaultOptionalParams,
  ResponseHeaderRfc3339OptionalParams,
  ResponseHeaderRfc7231OptionalParams,
  ResponseHeaderUnixTimestampOptionalParams,
} from "../../models/options.js";

export function _responseHeaderDefaultSend(
  context: Client,
  options: ResponseHeaderDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/datetime/responseheader/default")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _responseHeaderDefaultDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function responseHeaderDefault(
  context: Client,
  options: ResponseHeaderDefaultOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _responseHeaderDefaultSend(context, options);
  return _responseHeaderDefaultDeserialize(result);
}

export function _responseHeaderRfc3339Send(
  context: Client,
  options: ResponseHeaderRfc3339OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/datetime/responseheader/rfc3339")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _responseHeaderRfc3339Deserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function responseHeaderRfc3339(
  context: Client,
  options: ResponseHeaderRfc3339OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _responseHeaderRfc3339Send(context, options);
  return _responseHeaderRfc3339Deserialize(result);
}

export function _responseHeaderRfc7231Send(
  context: Client,
  options: ResponseHeaderRfc7231OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/datetime/responseheader/rfc7231")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _responseHeaderRfc7231Deserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function responseHeaderRfc7231(
  context: Client,
  options: ResponseHeaderRfc7231OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _responseHeaderRfc7231Send(context, options);
  return _responseHeaderRfc7231Deserialize(result);
}

export function _responseHeaderUnixTimestampSend(
  context: Client,
  options: ResponseHeaderUnixTimestampOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/datetime/responseheader/unix-timestamp")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _responseHeaderUnixTimestampDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function responseHeaderUnixTimestamp(
  context: Client,
  options: ResponseHeaderUnixTimestampOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _responseHeaderUnixTimestampSend(context, options);
  return _responseHeaderUnixTimestampDeserialize(result);
}
