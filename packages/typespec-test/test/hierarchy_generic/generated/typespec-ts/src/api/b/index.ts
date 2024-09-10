// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { A } from "../../models/models.js";
import { FooContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { BFooOptionalParams } from "../../models/options.js";

export function _fooSend(
  context: Client,
  body: A,
  options: BFooOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/b")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop1: body["prop1"] },
    });
}

export async function _fooDeserialize(
  result: PathUncheckedResponse,
): Promise<Record<string, any>> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body as any;
}

export async function foo(
  context: Client,
  body: A,
  options: BFooOptionalParams = { requestOptions: {} },
): Promise<Record<string, any>> {
  const result = await _fooSend(context, body, options);
  return _fooDeserialize(result);
}
