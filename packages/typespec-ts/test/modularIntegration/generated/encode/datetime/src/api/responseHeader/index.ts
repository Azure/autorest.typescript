// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DatetimeContext as Client,
  ResponseHeaderDefault204Response,
  ResponseHeaderRfc3339204Response,
  ResponseHeaderRfc7231204Response,
  ResponseHeaderUnixTimestamp204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  ResponseHeaderDefaultOptions,
  ResponseHeaderRfc3339Options,
  ResponseHeaderRfc7231Options,
  ResponseHeaderUnixTimestampOptions,
} from "../../models/options.js";

export function _responseHeaderDefaultSend(
  context: Client,
  options: ResponseHeaderDefaultOptions = { requestOptions: {} },
): StreamableMethod<ResponseHeaderDefault204Response> {
  return context
    .path("/encode/datetime/responseheader/default")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _responseHeaderDefaultDeserialize(
  result: ResponseHeaderDefault204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function responseHeaderDefault(
  context: Client,
  options: ResponseHeaderDefaultOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _responseHeaderDefaultSend(context, options);
  return _responseHeaderDefaultDeserialize(result);
}

export function _responseHeaderRfc3339Send(
  context: Client,
  options: ResponseHeaderRfc3339Options = { requestOptions: {} },
): StreamableMethod<ResponseHeaderRfc3339204Response> {
  return context
    .path("/encode/datetime/responseheader/rfc3339")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _responseHeaderRfc3339Deserialize(
  result: ResponseHeaderRfc3339204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function responseHeaderRfc3339(
  context: Client,
  options: ResponseHeaderRfc3339Options = { requestOptions: {} },
): Promise<void> {
  const result = await _responseHeaderRfc3339Send(context, options);
  return _responseHeaderRfc3339Deserialize(result);
}

export function _responseHeaderRfc7231Send(
  context: Client,
  options: ResponseHeaderRfc7231Options = { requestOptions: {} },
): StreamableMethod<ResponseHeaderRfc7231204Response> {
  return context
    .path("/encode/datetime/responseheader/rfc7231")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _responseHeaderRfc7231Deserialize(
  result: ResponseHeaderRfc7231204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function responseHeaderRfc7231(
  context: Client,
  options: ResponseHeaderRfc7231Options = { requestOptions: {} },
): Promise<void> {
  const result = await _responseHeaderRfc7231Send(context, options);
  return _responseHeaderRfc7231Deserialize(result);
}

export function _responseHeaderUnixTimestampSend(
  context: Client,
  options: ResponseHeaderUnixTimestampOptions = { requestOptions: {} },
): StreamableMethod<ResponseHeaderUnixTimestamp204Response> {
  return context
    .path("/encode/datetime/responseheader/unix-timestamp")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _responseHeaderUnixTimestampDeserialize(
  result: ResponseHeaderUnixTimestamp204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function responseHeaderUnixTimestamp(
  context: Client,
  options: ResponseHeaderUnixTimestampOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _responseHeaderUnixTimestampSend(context, options);
  return _responseHeaderUnixTimestampDeserialize(result);
}
