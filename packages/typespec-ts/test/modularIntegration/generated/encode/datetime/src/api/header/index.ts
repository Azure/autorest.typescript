// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  buildCsvCollection,
  DatetimeContext as Client,
  HeaderDefault204Response,
  HeaderRfc3339204Response,
  HeaderRfc7231204Response,
  HeaderUnixTimestamp204Response,
  HeaderUnixTimestampArray204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  HeaderDefaultOptions,
  HeaderRfc3339Options,
  HeaderRfc7231Options,
  HeaderUnixTimestampOptions,
  HeaderUnixTimestampArrayOptions,
} from "../../models/options.js";

export function _headerDefaultSend(
  context: Client,
  value: Date,
  options: HeaderDefaultOptions = { requestOptions: {} }
): StreamableMethod<HeaderDefault204Response> {
  return context
    .path("/encode/datetime/header/default")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { value: value.toUTCString() },
    });
}

export async function _headerDefaultDeserialize(
  result: HeaderDefault204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function headerDefault(
  context: Client,
  value: Date,
  options: HeaderDefaultOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _headerDefaultSend(context, value, options);
  return _headerDefaultDeserialize(result);
}

export function _headerRfc3339Send(
  context: Client,
  value: Date,
  options: HeaderRfc3339Options = { requestOptions: {} }
): StreamableMethod<HeaderRfc3339204Response> {
  return context
    .path("/encode/datetime/header/rfc3339")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { value: value.toISOString() },
    });
}

export async function _headerRfc3339Deserialize(
  result: HeaderRfc3339204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function headerRfc3339(
  context: Client,
  value: Date,
  options: HeaderRfc3339Options = { requestOptions: {} }
): Promise<void> {
  const result = await _headerRfc3339Send(context, value, options);
  return _headerRfc3339Deserialize(result);
}

export function _headerRfc7231Send(
  context: Client,
  value: Date,
  options: HeaderRfc7231Options = { requestOptions: {} }
): StreamableMethod<HeaderRfc7231204Response> {
  return context
    .path("/encode/datetime/header/rfc7231")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { value: value.toUTCString() },
    });
}

export async function _headerRfc7231Deserialize(
  result: HeaderRfc7231204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function headerRfc7231(
  context: Client,
  value: Date,
  options: HeaderRfc7231Options = { requestOptions: {} }
): Promise<void> {
  const result = await _headerRfc7231Send(context, value, options);
  return _headerRfc7231Deserialize(result);
}

export function _headerUnixTimestampSend(
  context: Client,
  value: Date,
  options: HeaderUnixTimestampOptions = { requestOptions: {} }
): StreamableMethod<HeaderUnixTimestamp204Response> {
  return context
    .path("/encode/datetime/header/unix-timestamp")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { value: value.getTime() },
    });
}

export async function _headerUnixTimestampDeserialize(
  result: HeaderUnixTimestamp204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function headerUnixTimestamp(
  context: Client,
  value: Date,
  options: HeaderUnixTimestampOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _headerUnixTimestampSend(context, value, options);
  return _headerUnixTimestampDeserialize(result);
}

export function _headerUnixTimestampArraySend(
  context: Client,
  value: Date[],
  options: HeaderUnixTimestampArrayOptions = { requestOptions: {} }
): StreamableMethod<HeaderUnixTimestampArray204Response> {
  return context
    .path("/encode/datetime/header/unix-timestamp-array")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { value: buildCsvCollection(value.map((p) => p.getTime())) },
    });
}

export async function _headerUnixTimestampArrayDeserialize(
  result: HeaderUnixTimestampArray204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function headerUnixTimestampArray(
  context: Client,
  value: Date[],
  options: HeaderUnixTimestampArrayOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _headerUnixTimestampArraySend(context, value, options);
  return _headerUnixTimestampArrayDeserialize(result);
}
