// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DatetimeContext as Client,
  QueryDefault204Response,
  QueryRfc3339204Response,
  QueryRfc7231204Response,
  QueryUnixTimestamp204Response,
  QueryUnixTimestampArray204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  QueryDefaultOptions,
  QueryRfc3339Options,
  QueryRfc7231Options,
  QueryUnixTimestampOptions,
  QueryUnixTimestampArrayOptions,
} from "../../models/options.js";

export function _queryDefaultSend(
  context: Client,
  value: Date,
  options: QueryDefaultOptions = { requestOptions: {} },
): StreamableMethod<QueryDefault204Response> {
  return context
    .path("/encode/datetime/query/default")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { value: value.toISOString() },
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
  value: Date,
  options: QueryDefaultOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _queryDefaultSend(context, value, options);
  return _queryDefaultDeserialize(result);
}

export function _queryRfc3339Send(
  context: Client,
  value: Date,
  options: QueryRfc3339Options = { requestOptions: {} },
): StreamableMethod<QueryRfc3339204Response> {
  return context
    .path("/encode/datetime/query/rfc3339")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { value: value.toISOString() },
    });
}

export async function _queryRfc3339Deserialize(
  result: QueryRfc3339204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function queryRfc3339(
  context: Client,
  value: Date,
  options: QueryRfc3339Options = { requestOptions: {} },
): Promise<void> {
  const result = await _queryRfc3339Send(context, value, options);
  return _queryRfc3339Deserialize(result);
}

export function _queryRfc7231Send(
  context: Client,
  value: Date,
  options: QueryRfc7231Options = { requestOptions: {} },
): StreamableMethod<QueryRfc7231204Response> {
  return context
    .path("/encode/datetime/query/rfc7231")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { value: value.toUTCString() },
    });
}

export async function _queryRfc7231Deserialize(
  result: QueryRfc7231204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function queryRfc7231(
  context: Client,
  value: Date,
  options: QueryRfc7231Options = { requestOptions: {} },
): Promise<void> {
  const result = await _queryRfc7231Send(context, value, options);
  return _queryRfc7231Deserialize(result);
}

export function _queryUnixTimestampSend(
  context: Client,
  value: Date,
  options: QueryUnixTimestampOptions = { requestOptions: {} },
): StreamableMethod<QueryUnixTimestamp204Response> {
  return context
    .path("/encode/datetime/query/unix-timestamp")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { value: value.getTime() },
    });
}

export async function _queryUnixTimestampDeserialize(
  result: QueryUnixTimestamp204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function queryUnixTimestamp(
  context: Client,
  value: Date,
  options: QueryUnixTimestampOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _queryUnixTimestampSend(context, value, options);
  return _queryUnixTimestampDeserialize(result);
}

export function _queryUnixTimestampArraySend(
  context: Client,
  value: Date[],
  options: QueryUnixTimestampArrayOptions = { requestOptions: {} },
): StreamableMethod<QueryUnixTimestampArray204Response> {
  return context
    .path("/encode/datetime/query/unix-timestamp-array")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { value: value.map((p) => p.getTime()) },
    });
}

export async function _queryUnixTimestampArrayDeserialize(
  result: QueryUnixTimestampArray204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function queryUnixTimestampArray(
  context: Client,
  value: Date[],
  options: QueryUnixTimestampArrayOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _queryUnixTimestampArraySend(context, value, options);
  return _queryUnixTimestampArrayDeserialize(result);
}
