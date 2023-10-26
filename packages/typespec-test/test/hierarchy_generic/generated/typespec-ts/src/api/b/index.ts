// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BA } from "../../models/models.js";
import { BOp1204Response, FooContext as Client } from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { BOp1Options } from "../../models/options.js";

export function _bOp1Send(
  context: Client,
  body: BA,
  options: BOp1Options = { requestOptions: {} }
): StreamableMethod<BOp1204Response> {
  return context
    .path("/b")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop2: body["prop2"] },
    });
}

export async function _bOp1Deserialize(result: BOp1204Response): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function bOp1(
  context: Client,
  body: BA,
  options: BOp1Options = { requestOptions: {} }
): Promise<void> {
  const result = await _bOp1Send(context, body, options);
  return _bOp1Deserialize(result);
}
