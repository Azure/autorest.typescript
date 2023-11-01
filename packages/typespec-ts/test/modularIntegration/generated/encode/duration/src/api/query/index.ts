// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Default204Response,
  DurationContext as Client,
  FloatSeconds204Response,
  Int32Seconds204Response,
  Int32SecondsArray204Response,
  Iso8601204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  QueryQueryDefaultOptions,
  QueryQueryIso8601Options,
  QueryQueryInt32SecondsOptions,
  QueryQueryFloatSecondsOptions,
  QueryQueryInt32SecondsArrayOptions,
} from "../../models/options.js";

export function _queryDefaultSend(
  context: Client,
  input: string,
  options: QueryQueryDefaultOptions = { requestOptions: {} }
): StreamableMethod<Default204Response> {
  return context
    .path("/encode/duration/query/default")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { input: input },
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
  input: string,
  options: QueryQueryDefaultOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _queryDefaultSend(context, input, options);
  return _queryDefaultDeserialize(result);
}

export function _queryIso8601Send(
  context: Client,
  input: string,
  options: QueryQueryIso8601Options = { requestOptions: {} }
): StreamableMethod<Iso8601204Response> {
  return context
    .path("/encode/duration/query/iso8601")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { input: input },
    });
}

export async function _queryIso8601Deserialize(
  result: Iso8601204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function queryIso8601(
  context: Client,
  input: string,
  options: QueryQueryIso8601Options = { requestOptions: {} }
): Promise<void> {
  const result = await _queryIso8601Send(context, input, options);
  return _queryIso8601Deserialize(result);
}

export function _queryInt32SecondsSend(
  context: Client,
  input: number,
  options: QueryQueryInt32SecondsOptions = { requestOptions: {} }
): StreamableMethod<Int32Seconds204Response> {
  return context
    .path("/encode/duration/query/int32-seconds")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { input: input },
    });
}

export async function _queryInt32SecondsDeserialize(
  result: Int32Seconds204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function queryInt32Seconds(
  context: Client,
  input: number,
  options: QueryQueryInt32SecondsOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _queryInt32SecondsSend(context, input, options);
  return _queryInt32SecondsDeserialize(result);
}

export function _queryFloatSecondsSend(
  context: Client,
  input: number,
  options: QueryQueryFloatSecondsOptions = { requestOptions: {} }
): StreamableMethod<FloatSeconds204Response> {
  return context
    .path("/encode/duration/query/float-seconds")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { input: input },
    });
}

export async function _queryFloatSecondsDeserialize(
  result: FloatSeconds204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function queryFloatSeconds(
  context: Client,
  input: number,
  options: QueryQueryFloatSecondsOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _queryFloatSecondsSend(context, input, options);
  return _queryFloatSecondsDeserialize(result);
}

export function _queryInt32SecondsArraySend(
  context: Client,
  input: number[],
  options: QueryQueryInt32SecondsArrayOptions = { requestOptions: {} }
): StreamableMethod<Int32SecondsArray204Response> {
  return context
    .path("/encode/duration/query/int32-seconds-array")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { input: input },
    });
}

export async function _queryInt32SecondsArrayDeserialize(
  result: Int32SecondsArray204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function queryInt32SecondsArray(
  context: Client,
  input: number[],
  options: QueryQueryInt32SecondsArrayOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _queryInt32SecondsArraySend(context, input, options);
  return _queryInt32SecondsArrayDeserialize(result);
}
