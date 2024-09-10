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
import { COpBECOptionalParams } from "../../models/options.js";

export function _cOpBECSend(
  context: Client,
  body: BEA,
  options: COpBECOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/b/e/bec")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop3: body["prop3"] },
    });
}

export async function _cOpBECDeserialize(
  result: PathUncheckedResponse,
): Promise<Record<string, any>> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body as any;
}

export async function cOpBEC(
  context: Client,
  body: BEA,
  options: COpBECOptionalParams = { requestOptions: {} },
): Promise<Record<string, any>> {
  const result = await _cOpBECSend(context, body, options);
  return _cOpBECDeserialize(result);
}
