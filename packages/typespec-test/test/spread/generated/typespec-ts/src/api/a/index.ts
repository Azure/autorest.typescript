// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Test } from "../../models/models.js";
import {
  DemoServiceContext as Client,
  Test1204Response,
  Test2204Response,
  Test3204Response,
  Test4204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  ATest1OptionalParams,
  ATest2OptionalParams,
  ATest3OptionalParams,
  ATest4OptionalParams,
} from "../../models/options.js";

export function _test1Send(
  context: Client,
  a: string,
  b: string,
  c: string,
  options: ATest1OptionalParams = { requestOptions: {} },
): StreamableMethod<Test1204Response> {
  return context
    .path("/test1")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { a: a, b: b, c: c },
    });
}

export async function _test1Deserialize(
  result: Test1204Response,
): Promise<void> {
  if (result.status !== "204") {
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
  body: Test,
  options: ATest2OptionalParams = { requestOptions: {} },
): StreamableMethod<Test2204Response> {
  return context
    .path("/test2")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop: body["prop"] },
    });
}

export async function _test2Deserialize(
  result: Test2204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function test2(
  context: Client,
  body: Test,
  options: ATest2OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _test2Send(context, body, options);
  return _test2Deserialize(result);
}

export function _test3Send(
  context: Client,
  prop: string,
  options: ATest3OptionalParams = { requestOptions: {} },
): StreamableMethod<Test3204Response> {
  return context
    .path("/test3")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop: prop },
    });
}

export async function _test3Deserialize(
  result: Test3204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function test3(
  context: Client,
  prop: string,
  options: ATest3OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _test3Send(context, prop, options);
  return _test3Deserialize(result);
}

export function _test4Send(
  context: Client,
  body: Test,
  options: ATest4OptionalParams = { requestOptions: {} },
): StreamableMethod<Test4204Response> {
  return context
    .path("/test4")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop: body["prop"] },
    });
}

export async function _test4Deserialize(
  result: Test4204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function test4(
  context: Client,
  body: Test,
  options: ATest4OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _test4Send(context, body, options);
  return _test4Deserialize(result);
}
