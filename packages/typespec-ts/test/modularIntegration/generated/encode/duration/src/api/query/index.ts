// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DurationContext as Client,
  QueryDefault204Response,
  QueryFloatSeconds204Response,
  QueryInt32Seconds204Response,
  QueryInt32SecondsArray204Response,
  QueryIso8601204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  QueryDefaultOptions,
  QueryIso8601Options,
  QueryInt32SecondsOptions,
  QueryFloatSecondsOptions,
  QueryInt32SecondsArrayOptions,
} from "../../models/options.js";

export function _queryDefaultSend(
  context: Client,
  input: string,
  options: QueryDefaultOptions = { requestOptions: {} },
): StreamableMethod<QueryDefault204Response> {
  return context
    .path("/encode/duration/query/default")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { input: input },
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
  input: string,
  options: QueryDefaultOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _queryDefaultSend(context, input, options);
  return _queryDefaultDeserialize(result);
}

export function _queryIso8601Send(
  context: Client,
  input: string,
  options: QueryIso8601Options = { requestOptions: {} },
): StreamableMethod<QueryIso8601204Response> {
  return context
    .path("/encode/duration/query/iso8601")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { input: input },
    });
}

export async function _queryIso8601Deserialize(
  result: QueryIso8601204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function queryIso8601(
  context: Client,
  input: string,
  options: QueryIso8601Options = { requestOptions: {} },
): Promise<void> {
  const result = await _queryIso8601Send(context, input, options);
  return _queryIso8601Deserialize(result);
}

export function _queryInt32SecondsSend(
  context: Client,
  input: number,
  options: QueryInt32SecondsOptions = { requestOptions: {} },
): StreamableMethod<QueryInt32Seconds204Response> {
  return context
    .path("/encode/duration/query/int32-seconds")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { input: input },
    });
}

export async function _queryInt32SecondsDeserialize(
  result: QueryInt32Seconds204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function queryInt32Seconds(
  context: Client,
  input: number,
  options: QueryInt32SecondsOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _queryInt32SecondsSend(context, input, options);
  return _queryInt32SecondsDeserialize(result);
}

export function _queryFloatSecondsSend(
  context: Client,
  input: number,
  options: QueryFloatSecondsOptions = { requestOptions: {} },
): StreamableMethod<QueryFloatSeconds204Response> {
  return context
    .path("/encode/duration/query/float-seconds")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { input: input },
    });
}

export async function _queryFloatSecondsDeserialize(
  result: QueryFloatSeconds204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function queryFloatSeconds(
  context: Client,
  input: number,
  options: QueryFloatSecondsOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _queryFloatSecondsSend(context, input, options);
  return _queryFloatSecondsDeserialize(result);
}

export function _queryInt32SecondsArraySend(
  context: Client,
  input: number[],
  options: QueryInt32SecondsArrayOptions = { requestOptions: {} },
): StreamableMethod<QueryInt32SecondsArray204Response> {
  return context
    .path("/encode/duration/query/int32-seconds-array")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { input: input },
    });
}

export async function _queryInt32SecondsArrayDeserialize(
  result: QueryInt32SecondsArray204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function queryInt32SecondsArray(
  context: Client,
  input: number[],
  options: QueryInt32SecondsArrayOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _queryInt32SecondsArraySend(context, input, options);
  return _queryInt32SecondsArrayDeserialize(result);
}
