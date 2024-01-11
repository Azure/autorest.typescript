// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { A } from "../../models/models.js";
import { DOp1204Response, FooContext as Client } from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { DOp1Options } from "../../models/options.js";

export function _op1Send(
  context: Client,
  body: A,
  options: DOp1Options = { requestOptions: {} },
): StreamableMethod<DOp1204Response> {
  return context
    .path("/d")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop1: body["prop1"] },
    });
}

export async function _op1Deserialize(result: DOp1204Response): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function op1(
  context: Client,
  body: A,
  options: DOp1Options = { requestOptions: {} },
): Promise<void> {
  const result = await _op1Send(context, body, options);
  return _op1Deserialize(result);
}
