// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BA } from "../../models/models.js";
import { BOp1204Response, FooContext as Client } from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  OperationOptions,
} from "@azure-rest/core-client";

export function _op1Send(
  context: Client,
  body: BA,
  options: Op1Options = { requestOptions: {} }
): StreamableMethod<BOp1204Response> {
  return context
    .path("/b")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop2: body["prop2"] },
    });
}

export async function _op1Deserialize(result: BOp1204Response): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function op1(
  context: Client,
  body: BA,
  options: Op1Options = { requestOptions: {} }
): Promise<void> {
  const result = await _op1Send(context, body, options);
  return _op1Deserialize(result);
}

export interface Op1Options extends OperationOptions {}
