// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ReturnTypeChangedFromContext as Client,
  Test200Response,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { TestOptionalParams } from "./options.js";

export function _testSend(
  context: Client,
  body: string,
  options: TestOptionalParams = { requestOptions: {} },
): StreamableMethod<Test200Response> {
  return context
    .path("/test")
    .post({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _testDeserialize(
  result: Test200Response,
): Promise<string> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

export async function test(
  context: Client,
  body: string,
  options: TestOptionalParams = { requestOptions: {} },
): Promise<string> {
  const result = await _testSend(context, body, options);
  return _testDeserialize(result);
}
