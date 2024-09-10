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
import { DOpDOptionalParams } from "../../models/options.js";

export function _dOpDSend(
  context: Client,
  body: A,
  options: DOpDOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/d")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop1: body["prop1"] },
    });
}

export async function _dOpDDeserialize(
  result: PathUncheckedResponse,
): Promise<Record<string, any>> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body as any;
}

/** show example opD */
export async function dOpD(
  context: Client,
  body: A,
  options: DOpDOptionalParams = { requestOptions: {} },
): Promise<Record<string, any>> {
  const result = await _dOpDSend(context, body, options);
  return _dOpDDeserialize(result);
}
