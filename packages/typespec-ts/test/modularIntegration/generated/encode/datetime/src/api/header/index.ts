// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DatetimeContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { buildCsvCollection } from "../../static-helpers/serialization/build-csv-collection.js";
import {
  HeaderDefaultOptionalParams,
  HeaderRfc3339OptionalParams,
  HeaderRfc7231OptionalParams,
  HeaderUnixTimestampOptionalParams,
  HeaderUnixTimestampArrayOptionalParams,
} from "../../models/options.js";

export function _headerDefaultSend(
  context: Client,
  value: Date,
  options: HeaderDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/datetime/header/default")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { value: value.toUTCString() },
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
  value: Date,
  options: HeaderDefaultOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _headerDefaultSend(context, value, options);
  return _headerDefaultDeserialize(result);
}

export function _headerRfc3339Send(
  context: Client,
  value: Date,
  options: HeaderRfc3339OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/datetime/header/rfc3339")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { value: value.toISOString() },
    });
}

export async function _headerRfc3339Deserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function headerRfc3339(
  context: Client,
  value: Date,
  options: HeaderRfc3339OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _headerRfc3339Send(context, value, options);
  return _headerRfc3339Deserialize(result);
}

export function _headerRfc7231Send(
  context: Client,
  value: Date,
  options: HeaderRfc7231OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/datetime/header/rfc7231")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { value: value.toUTCString() },
    });
}

export async function _headerRfc7231Deserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function headerRfc7231(
  context: Client,
  value: Date,
  options: HeaderRfc7231OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _headerRfc7231Send(context, value, options);
  return _headerRfc7231Deserialize(result);
}

export function _headerUnixTimestampSend(
  context: Client,
  value: Date,
  options: HeaderUnixTimestampOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/datetime/header/unix-timestamp")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { value: value.getTime() },
    });
}

export async function _headerUnixTimestampDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function headerUnixTimestamp(
  context: Client,
  value: Date,
  options: HeaderUnixTimestampOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _headerUnixTimestampSend(context, value, options);
  return _headerUnixTimestampDeserialize(result);
}

export function _headerUnixTimestampArraySend(
  context: Client,
  value: Date[],
  options: HeaderUnixTimestampArrayOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/datetime/header/unix-timestamp-array")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { value: buildCsvCollection(value.map((p) => p.getTime())) },
    });
}

export async function _headerUnixTimestampArrayDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function headerUnixTimestampArray(
  context: Client,
  value: Date[],
  options: HeaderUnixTimestampArrayOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _headerUnixTimestampArraySend(context, value, options);
  return _headerUnixTimestampArrayDeserialize(result);
}
