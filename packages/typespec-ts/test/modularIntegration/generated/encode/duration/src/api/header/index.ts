// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  buildCsvCollection,
  DurationContext as Client,
  HeaderDefault204Response,
  HeaderFloatSeconds204Response,
  HeaderInt32Seconds204Response,
  HeaderIso8601204Response,
  HeaderIso8601Array204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  HeaderDefaultOptions,
  HeaderIso8601Options,
  HeaderIso8601ArrayOptions,
  HeaderInt32SecondsOptions,
  HeaderFloatSecondsOptions,
} from "../../models/options.js";

export function _headerDefaultSend(
  context: Client,
  duration: string,
  options: HeaderDefaultOptions = { requestOptions: {} },
): StreamableMethod<HeaderDefault204Response> {
  return context
    .path("/encode/duration/header/default")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { duration: duration },
    });
}

export async function _headerDefaultDeserialize(
  result: HeaderDefault204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function headerDefault(
  context: Client,
  duration: string,
  options: HeaderDefaultOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _headerDefaultSend(context, duration, options);
  return _headerDefaultDeserialize(result);
}

export function _headerIso8601Send(
  context: Client,
  duration: string,
  options: HeaderIso8601Options = { requestOptions: {} },
): StreamableMethod<HeaderIso8601204Response> {
  return context
    .path("/encode/duration/header/iso8601")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { duration: duration },
    });
}

export async function _headerIso8601Deserialize(
  result: HeaderIso8601204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function headerIso8601(
  context: Client,
  duration: string,
  options: HeaderIso8601Options = { requestOptions: {} },
): Promise<void> {
  const result = await _headerIso8601Send(context, duration, options);
  return _headerIso8601Deserialize(result);
}

export function _headerIso8601ArraySend(
  context: Client,
  duration: string[],
  options: HeaderIso8601ArrayOptions = { requestOptions: {} },
): StreamableMethod<HeaderIso8601Array204Response> {
  return context
    .path("/encode/duration/header/iso8601-array")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { duration: buildCsvCollection(duration) },
    });
}

export async function _headerIso8601ArrayDeserialize(
  result: HeaderIso8601Array204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function headerIso8601Array(
  context: Client,
  duration: string[],
  options: HeaderIso8601ArrayOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _headerIso8601ArraySend(context, duration, options);
  return _headerIso8601ArrayDeserialize(result);
}

export function _headerInt32SecondsSend(
  context: Client,
  duration: number,
  options: HeaderInt32SecondsOptions = { requestOptions: {} },
): StreamableMethod<HeaderInt32Seconds204Response> {
  return context
    .path("/encode/duration/header/int32-seconds")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { duration: duration },
    });
}

export async function _headerInt32SecondsDeserialize(
  result: HeaderInt32Seconds204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function headerInt32Seconds(
  context: Client,
  duration: number,
  options: HeaderInt32SecondsOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _headerInt32SecondsSend(context, duration, options);
  return _headerInt32SecondsDeserialize(result);
}

export function _headerFloatSecondsSend(
  context: Client,
  duration: number,
  options: HeaderFloatSecondsOptions = { requestOptions: {} },
): StreamableMethod<HeaderFloatSeconds204Response> {
  return context
    .path("/encode/duration/header/float-seconds")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { duration: duration },
    });
}

export async function _headerFloatSecondsDeserialize(
  result: HeaderFloatSeconds204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function headerFloatSeconds(
  context: Client,
  duration: number,
  options: HeaderFloatSecondsOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _headerFloatSecondsSend(context, duration, options);
  return _headerFloatSecondsDeserialize(result);
}
