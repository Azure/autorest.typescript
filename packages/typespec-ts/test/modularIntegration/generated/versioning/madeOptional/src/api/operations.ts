// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TestModel } from "../models/models.js";
import {
  MadeOptionalContext as Client,
  Test200Response,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { TestOptionalParams } from "../models/options.js";

export function _testSend(
  context: Client,
  body: TestModel,
  options: TestOptionalParams = { requestOptions: {} },
): StreamableMethod<Test200Response> {
  return context
    .path("/test")
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { param: options?.param },
      body: { prop: body["prop"], changedProp: body["changedProp"] },
    });
}

export async function _testDeserialize(
  result: Test200Response,
): Promise<TestModel> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as Test200Response;
  return {
    prop: _result.body["prop"],
    changedProp: _result.body["changedProp"],
  };
}

export async function test(
  context: Client,
  body: TestModel,
  options: TestOptionalParams = { requestOptions: {} },
): Promise<TestModel> {
  const result = await _testSend(context, body, options);
  return _testDeserialize(result);
}
