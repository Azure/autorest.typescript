// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BA } from "../../models/models.js";
import { FooContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { BOp1OptionalParams } from "../../models/options.js";

export function _bOp1Send(
  context: Client,
  body: BA,
  options: BOp1OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/b")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop2: body["prop2"] },
    });
}

export async function _bOp1Deserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function bOp1(
  context: Client,
  body: BA,
  options: BOp1OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _bOp1Send(context, body, options);
  return _bOp1Deserialize(result);
}
