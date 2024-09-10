// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BEA } from "../../models/models.js";
import { FooContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { EFooOptionalParams } from "../../models/options.js";

export function _eFooSend(
  context: Client,
  body: BEA,
  options: EFooOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/b/e")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop3: body["prop3"] },
    });
}

export async function _eFooDeserialize(
  result: PathUncheckedResponse,
): Promise<Record<string, any>> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body as any;
}

export async function eFoo(
  context: Client,
  body: BEA,
  options: EFooOptionalParams = { requestOptions: {} },
): Promise<Record<string, any>> {
  const result = await _eFooSend(context, body, options);
  return _eFooDeserialize(result);
}
