// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BEA } from "../../../../models/models.js";
import {
  BecOp1204Response,
  FooContext as Client,
} from "../../../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { BECOp1Options } from "../../../../models/options.js";

export function _op1Send(
  context: Client,
  body: BEA,
  options: BECOp1Options = { requestOptions: {} },
): StreamableMethod<BecOp1204Response> {
  return context
    .path("/b/e")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop3: body["prop3"] },
    });
}

export async function _op1Deserialize(
  result: BecOp1204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function op1(
  context: Client,
  body: BEA,
  options: BECOp1Options = { requestOptions: {} },
): Promise<void> {
  const result = await _op1Send(context, body, options);
  return _op1Deserialize(result);
}
