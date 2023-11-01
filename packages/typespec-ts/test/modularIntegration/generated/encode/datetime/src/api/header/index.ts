// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  buildCsvCollection,
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
  HeaderHeaderDefaultOptions,
  HeaderHeaderRfc3339Options,
  HeaderHeaderRfc7231Options,
  HeaderHeaderUnixTimestampOptions,
  HeaderHeaderUnixTimestampArrayOptions,
} from "../../models/options.js";

export function _headerDefaultSend(
  context: Client,
  value: Date,
  options: HeaderHeaderDefaultOptions = { requestOptions: {} }
): StreamableMethod<Default204Response> {
  return context
    .path("/encode/datetime/header/default")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { value: value.toUTCString() },
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
  value: Date,
  options: HeaderHeaderDefaultOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _headerDefaultSend(context, value, options);
  return _headerDefaultDeserialize(result);
}

export function _headerRfc3339Send(
  context: Client,
  value: Date,
  options: HeaderHeaderRfc3339Options = { requestOptions: {} }
): StreamableMethod<Rfc3339204Response> {
  return context
    .path("/encode/datetime/header/rfc3339")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { value: value.toISOString() },
    });
}

export async function _headerRfc3339Deserialize(
  result: Rfc3339204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function headerRfc3339(
  context: Client,
  value: Date,
  options: HeaderHeaderRfc3339Options = { requestOptions: {} }
): Promise<void> {
  const result = await _headerRfc3339Send(context, value, options);
  return _headerRfc3339Deserialize(result);
}

export function _headerRfc7231Send(
  context: Client,
  value: Date,
  options: HeaderHeaderRfc7231Options = { requestOptions: {} }
): StreamableMethod<Rfc7231204Response> {
  return context
    .path("/encode/datetime/header/rfc7231")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { value: value.toUTCString() },
    });
}

export async function _headerRfc7231Deserialize(
  result: Rfc7231204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function headerRfc7231(
  context: Client,
  value: Date,
  options: HeaderHeaderRfc7231Options = { requestOptions: {} }
): Promise<void> {
  const result = await _headerRfc7231Send(context, value, options);
  return _headerRfc7231Deserialize(result);
}

export function _headerUnixTimestampSend(
  context: Client,
  value: Date,
  options: HeaderHeaderUnixTimestampOptions = { requestOptions: {} }
): StreamableMethod<UnixTimestamp204Response> {
  return context
    .path("/encode/datetime/header/unix-timestamp")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { value: value.getTime() },
    });
}

export async function _headerUnixTimestampDeserialize(
  result: UnixTimestamp204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function headerUnixTimestamp(
  context: Client,
  value: Date,
  options: HeaderHeaderUnixTimestampOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _headerUnixTimestampSend(context, value, options);
  return _headerUnixTimestampDeserialize(result);
}

export function _headerUnixTimestampArraySend(
  context: Client,
  value: Date[],
  options: HeaderHeaderUnixTimestampArrayOptions = { requestOptions: {} }
): StreamableMethod<UnixTimestampArray204Response> {
  return context
    .path("/encode/datetime/header/unix-timestamp-array")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        value: buildCsvCollection((value ?? []).map((p) => p.getTime())),
      },
    });
}

export async function _headerUnixTimestampArrayDeserialize(
  result: UnixTimestampArray204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function headerUnixTimestampArray(
  context: Client,
  value: Date[],
  options: HeaderHeaderUnixTimestampArrayOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _headerUnixTimestampArraySend(context, value, options);
  return _headerUnixTimestampArrayDeserialize(result);
}
