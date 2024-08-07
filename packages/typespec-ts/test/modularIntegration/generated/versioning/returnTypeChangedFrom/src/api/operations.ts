// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ReturnTypeChangedFromContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { TestOptionalParams } from "../models/options.js";

export function _testSend(
  context: Client,
  body: string,
  options: TestOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/test")
    .post({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _testDeserialize(
  result: PathUncheckedResponse,
): Promise<string> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
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
