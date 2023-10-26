// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { A } from "../../models/models.js";
import { DOp1204Response, FooContext as Client } from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  OperationOptions,
} from "@azure-rest/core-client";

export function _op1Send(
  context: Client,
  body: A,
  options: Op1Options = { requestOptions: {} }
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
    throw result.body;
  }

  return;
}

export async function op1(
  context: Client,
  body: A,
  options: Op1Options = { requestOptions: {} }
): Promise<void> {
  const result = await _op1Send(context, body, options);
  return _op1Deserialize(result);
}

export interface Op1Options extends OperationOptions {}
