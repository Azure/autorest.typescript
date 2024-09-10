// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BEA } from "../../../models/models.js";
import { FooContext as Client } from "../../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { BEFooOptionalParams } from "../../../models/options.js";

export function _fooSend(
  context: Client,
  body: BEA,
  options: BEFooOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/b/e")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop3: body["prop3"] },
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
  body: BEA,
  options: BEFooOptionalParams = { requestOptions: {} },
): Promise<Record<string, any>> {
  const result = await _fooSend(context, body, options);
  return _fooDeserialize(result);
}
