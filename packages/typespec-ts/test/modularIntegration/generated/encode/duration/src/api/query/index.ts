// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DurationContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  QueryDefaultOptionalParams,
  QueryIso8601OptionalParams,
  QueryInt32SecondsOptionalParams,
  QueryFloatSecondsOptionalParams,
  QueryFloat64SecondsOptionalParams,
  QueryInt32SecondsArrayOptionalParams,
} from "../../models/options.js";

export function _queryDefaultSend(
  context: Client,
  input: string,
  options: QueryDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/duration/query/default")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { input: input },
    });
}

export async function _queryDefaultDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function queryDefault(
  context: Client,
  input: string,
  options: QueryDefaultOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _queryDefaultSend(context, input, options);
  return _queryDefaultDeserialize(result);
}

export function _queryIso8601Send(
  context: Client,
  input: string,
  options: QueryIso8601OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/duration/query/iso8601")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { input: input },
    });
}

export async function _queryIso8601Deserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function queryIso8601(
  context: Client,
  input: string,
  options: QueryIso8601OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _queryIso8601Send(context, input, options);
  return _queryIso8601Deserialize(result);
}

export function _queryInt32SecondsSend(
  context: Client,
  input: number,
  options: QueryInt32SecondsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/duration/query/int32-seconds")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { input: input },
    });
}

export async function _queryInt32SecondsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function queryInt32Seconds(
  context: Client,
  input: number,
  options: QueryInt32SecondsOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _queryInt32SecondsSend(context, input, options);
  return _queryInt32SecondsDeserialize(result);
}

export function _queryFloatSecondsSend(
  context: Client,
  input: number,
  options: QueryFloatSecondsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/duration/query/float-seconds")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { input: input },
    });
}

export async function _queryFloatSecondsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function queryFloatSeconds(
  context: Client,
  input: number,
  options: QueryFloatSecondsOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _queryFloatSecondsSend(context, input, options);
  return _queryFloatSecondsDeserialize(result);
}

export function _queryFloat64SecondsSend(
  context: Client,
  input: number,
  options: QueryFloat64SecondsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/duration/query/float64-seconds")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { input: input },
    });
}

export async function _queryFloat64SecondsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function queryFloat64Seconds(
  context: Client,
  input: number,
  options: QueryFloat64SecondsOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _queryFloat64SecondsSend(context, input, options);
  return _queryFloat64SecondsDeserialize(result);
}

export function _queryInt32SecondsArraySend(
  context: Client,
  input: number[],
  options: QueryInt32SecondsArrayOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/duration/query/int32-seconds-array")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { input: input },
    });
}

export async function _queryInt32SecondsArrayDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function queryInt32SecondsArray(
  context: Client,
  input: number[],
  options: QueryInt32SecondsArrayOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _queryInt32SecondsArraySend(context, input, options);
  return _queryInt32SecondsArrayDeserialize(result);
}
