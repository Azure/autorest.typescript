// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  buildCsvCollection,
  DurationContext as Client,
  HeaderDefault204Response,
  HeaderFloat64Seconds204Response,
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
  HeaderDefaultOptionalParams,
  HeaderIso8601OptionalParams,
  HeaderIso8601ArrayOptionalParams,
  HeaderInt32SecondsOptionalParams,
  HeaderFloatSecondsOptionalParams,
  HeaderFloat64SecondsOptionalParams,
} from "../options.js";

export function _headerDefaultSend(
  context: Client,
  duration: string,
  options: HeaderDefaultOptionalParams = { requestOptions: {} },
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
  options: HeaderDefaultOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _headerDefaultSend(context, duration, options);
  return _headerDefaultDeserialize(result);
}

export function _headerIso8601Send(
  context: Client,
  duration: string,
  options: HeaderIso8601OptionalParams = { requestOptions: {} },
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
  options: HeaderIso8601OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _headerIso8601Send(context, duration, options);
  return _headerIso8601Deserialize(result);
}

export function _headerIso8601ArraySend(
  context: Client,
  duration: string[],
  options: HeaderIso8601ArrayOptionalParams = { requestOptions: {} },
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
  options: HeaderIso8601ArrayOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _headerIso8601ArraySend(context, duration, options);
  return _headerIso8601ArrayDeserialize(result);
}

export function _headerInt32SecondsSend(
  context: Client,
  duration: number,
  options: HeaderInt32SecondsOptionalParams = { requestOptions: {} },
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
  options: HeaderInt32SecondsOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _headerInt32SecondsSend(context, duration, options);
  return _headerInt32SecondsDeserialize(result);
}

export function _headerFloatSecondsSend(
  context: Client,
  duration: number,
  options: HeaderFloatSecondsOptionalParams = { requestOptions: {} },
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
  options: HeaderFloatSecondsOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _headerFloatSecondsSend(context, duration, options);
  return _headerFloatSecondsDeserialize(result);
}

export function _headerFloat64SecondsSend(
  context: Client,
  duration: number,
  options: HeaderFloat64SecondsOptionalParams = { requestOptions: {} },
): StreamableMethod<HeaderFloat64Seconds204Response> {
  return context
    .path("/encode/duration/header/float64-seconds")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { duration: duration },
    });
}

export async function _headerFloat64SecondsDeserialize(
  result: HeaderFloat64Seconds204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function headerFloat64Seconds(
  context: Client,
  duration: number,
  options: HeaderFloat64SecondsOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _headerFloat64SecondsSend(context, duration, options);
  return _headerFloat64SecondsDeserialize(result);
}
