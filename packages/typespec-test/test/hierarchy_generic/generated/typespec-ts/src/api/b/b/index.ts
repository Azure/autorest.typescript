// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BA } from "../../../models/models.js";
import { BbOp1204Response, FooContext as Client } from "../../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { BBOp1Options } from "../../../models/options.js";

export function _bBOp1Send(
  context: Client,
  body: BA,
  options: BBOp1Options = { requestOptions: {} }
): StreamableMethod<BbOp1204Response> {
  return context
    .path("/b")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop2: body["prop2"] },
    });
}

export async function _bBOp1Deserialize(
  result: BbOp1204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function bbOp1(
  context: Client,
  body: BA,
  options: BBOp1Options = { requestOptions: {} }
): Promise<void> {
  const result = await _bBOp1Send(context, body, options);
  return _bBOp1Deserialize(result);
}
