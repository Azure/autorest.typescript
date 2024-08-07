// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DurationContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { buildCsvCollection } from "../../helpers/serializerHelpers.js";
import {
  HeaderDefaultOptionalParams,
  HeaderIso8601OptionalParams,
  HeaderIso8601ArrayOptionalParams,
  HeaderInt32SecondsOptionalParams,
  HeaderFloatSecondsOptionalParams,
  HeaderFloat64SecondsOptionalParams,
} from "../../models/options.js";

export function _headerDefaultSend(
  context: Client,
  duration: string,
  options: HeaderDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/duration/header/default")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { duration: duration },
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
): StreamableMethod {
  return context
    .path("/encode/duration/header/iso8601")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { duration: duration },
    });
}

export async function _headerIso8601Deserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/encode/duration/header/iso8601-array")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { duration: buildCsvCollection(duration) },
    });
}

export async function _headerIso8601ArrayDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/encode/duration/header/int32-seconds")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { duration: duration },
    });
}

export async function _headerInt32SecondsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/encode/duration/header/float-seconds")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { duration: duration },
    });
}

export async function _headerFloatSecondsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/encode/duration/header/float64-seconds")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { duration: duration },
    });
}

export async function _headerFloat64SecondsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
