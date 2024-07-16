// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { A1 } from "../../../models/models.js";
import { BcOp1204Response, FooContext as Client } from "../../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { BCOp1OptionalParams } from "../../options.js";

export function _op1Send(
  context: Client,
  body: A1,
  options: BCOp1OptionalParams = { requestOptions: {} },
): StreamableMethod<BcOp1204Response> {
  return context
    .path("/b/c")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop2: body["prop2"] },
    });
}

export async function _op1Deserialize(result: BcOp1204Response): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function op1(
  context: Client,
  body: A1,
  options: BCOp1OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _op1Send(context, body, options);
  return _op1Deserialize(result);
}
