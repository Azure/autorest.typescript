// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TestModel } from "../models/models.js";
import { TypeChangedFromContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { TestOptionalParams } from "../models/options.js";

export function _testSend(
  context: Client,
  param: string,
  body: TestModel,
  options: TestOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/test")
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { param: param },
      body: { prop: body["prop"], changedProp: body["changedProp"] },
    });
}

export async function _testDeserialize(
  result: PathUncheckedResponse,
): Promise<TestModel> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    prop: result.body["prop"],
    changedProp: result.body["changedProp"],
  };
}

export async function test(
  context: Client,
  param: string,
  body: TestModel,
  options: TestOptionalParams = { requestOptions: {} },
): Promise<TestModel> {
  const result = await _testSend(context, param, body, options);
  return _testDeserialize(result);
}
