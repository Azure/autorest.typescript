// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DatetimeContext as Client,
  Default204Response,
  Rfc3339204Response,
  Rfc7231204Response,
  UnixTimestamp204Response,
  UnixTimestampArray204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  QueryQueryDefaultOptions,
  QueryQueryRfc3339Options,
  QueryQueryRfc7231Options,
  QueryQueryUnixTimestampOptions,
  QueryQueryUnixTimestampArrayOptions,
} from "../../models/options.js";

export function _queryDefaultSend(
  context: Client,
  value: Date,
  options: QueryQueryDefaultOptions = { requestOptions: {} }
): StreamableMethod<Default204Response> {
  return context
    .path("/encode/datetime/query/default")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { value: value.toISOString() },
    });
}

export async function _queryDefaultDeserialize(
  result: Default204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function queryDefault(
  context: Client,
  value: Date,
  options: QueryQueryDefaultOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _queryDefaultSend(context, value, options);
  return _queryDefaultDeserialize(result);
}

export function _queryRfc3339Send(
  context: Client,
  value: Date,
  options: QueryQueryRfc3339Options = { requestOptions: {} }
): StreamableMethod<Rfc3339204Response> {
  return context
    .path("/encode/datetime/query/rfc3339")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { value: value.toISOString() },
    });
}

export async function _queryRfc3339Deserialize(
  result: Rfc3339204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function queryRfc3339(
  context: Client,
  value: Date,
  options: QueryQueryRfc3339Options = { requestOptions: {} }
): Promise<void> {
  const result = await _queryRfc3339Send(context, value, options);
  return _queryRfc3339Deserialize(result);
}

export function _queryRfc7231Send(
  context: Client,
  value: Date,
  options: QueryQueryRfc7231Options = { requestOptions: {} }
): StreamableMethod<Rfc7231204Response> {
  return context
    .path("/encode/datetime/query/rfc7231")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { value: value.toUTCString() },
    });
}

export async function _queryRfc7231Deserialize(
  result: Rfc7231204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function queryRfc7231(
  context: Client,
  value: Date,
  options: QueryQueryRfc7231Options = { requestOptions: {} }
): Promise<void> {
  const result = await _queryRfc7231Send(context, value, options);
  return _queryRfc7231Deserialize(result);
}

export function _queryUnixTimestampSend(
  context: Client,
  value: Date,
  options: QueryQueryUnixTimestampOptions = { requestOptions: {} }
): StreamableMethod<UnixTimestamp204Response> {
  return context
    .path("/encode/datetime/query/unix-timestamp")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { value: value.getTime() },
    });
}

export async function _queryUnixTimestampDeserialize(
  result: UnixTimestamp204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function queryUnixTimestamp(
  context: Client,
  value: Date,
  options: QueryQueryUnixTimestampOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _queryUnixTimestampSend(context, value, options);
  return _queryUnixTimestampDeserialize(result);
}

export function _queryUnixTimestampArraySend(
  context: Client,
  value: Date[],
  options: QueryQueryUnixTimestampArrayOptions = { requestOptions: {} }
): StreamableMethod<UnixTimestampArray204Response> {
  return context
    .path("/encode/datetime/query/unix-timestamp-array")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { value: (value ?? []).map((p) => p.getTime()) },
    });
}

export async function _queryUnixTimestampArrayDeserialize(
  result: UnixTimestampArray204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function queryUnixTimestampArray(
  context: Client,
  value: Date[],
  options: QueryQueryUnixTimestampArrayOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _queryUnixTimestampArraySend(context, value, options);
  return _queryUnixTimestampArrayDeserialize(result);
}
