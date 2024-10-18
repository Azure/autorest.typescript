// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ATest1OptionalParams,
  ATest2OptionalParams,
  ATest3OptionalParams,
  ATest4OptionalParams,
  DemoServiceContext as Client,
} from "../index.js";
import {
  _test3RequestSerializer,
  _test4RequestSerializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _test1Send(
  context: Client,
  a: string,
  b: string,
  c: string,
  options: ATest1OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/test1")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { a: a, b: b, c: c },
    });
}

export async function _test1Deserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function test1(
  context: Client,
  a: string,
  b: string,
  c: string,
  options: ATest1OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _test1Send(context, a, b, c, options);
  return _test1Deserialize(result);
}

export function _test2Send(
  context: Client,
  prop: string,
  options: ATest2OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/test2")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop: prop },
    });
}

export async function _test2Deserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function test2(
  context: Client,
  prop: string,
  options: ATest2OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _test2Send(context, prop, options);
  return _test2Deserialize(result);
}

export function _test3Send(
  context: Client,
  body: { prop: string },
  options: ATest3OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/test3")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: _test3RequestSerializer(body),
    });
}

export async function _test3Deserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function test3(
  context: Client,
  body: { prop: string },
  options: ATest3OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _test3Send(context, body, options);
  return _test3Deserialize(result);
}

export function _test4Send(
  context: Client,
  body: { prop: string },
  options: ATest4OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/test4")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: _test4RequestSerializer(body),
    });
}

export async function _test4Deserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function test4(
  context: Client,
  body: { prop: string },
  options: ATest4OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _test4Send(context, body, options);
  return _test4Deserialize(result);
}
