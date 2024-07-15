// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { A_2 } from "../../../../models/models.js";
import {
  BecOp1204Response,
  FooContext as Client,
} from "../../../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { BECOp1OptionalParams } from "../../../options.js";

export function _op1Send(
  context: Client,
  body: A_2,
  options: BECOp1OptionalParams = { requestOptions: {} },
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
  body: A_2,
  options: BECOp1OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _op1Send(context, body, options);
  return _op1Deserialize(result);
}
