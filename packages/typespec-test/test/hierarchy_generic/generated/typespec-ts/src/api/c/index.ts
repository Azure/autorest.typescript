// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BA, BEA } from "../../models/models.js";
import { COp1204Response, FooContext as Client } from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { COp1Options } from "../../models/options.js";

export function _op1Send(
  context: Client,
  body: BEA,
  options: COp1Options = { requestOptions: {} }
): StreamableMethod<COp1204Response> {
  return context
    .path("/b/e")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop3: body["prop3"] },
    });
}

export async function _op1Deserialize(result: COp1204Response): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function op1(
  context: Client,
  body: BEA,
  options: COp1Options = { requestOptions: {} }
): Promise<void> {
  const result = await _op1Send(context, body, options);
  return _op1Deserialize(result);
}

export function _op1Send(
  context: Client,
  body: BA,
  options: COp1Options = { requestOptions: {} }
): StreamableMethod<COp1204Response> {
  return context
    .path("/b/c")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop2: body["prop2"] },
    });
}

export async function _op1Deserialize(result: COp1204Response): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function op1(
  context: Client,
  body: BA,
  options: COp1Options = { requestOptions: {} }
): Promise<void> {
  const result = await _op1Send(context, body, options);
  return _op1Deserialize(result);
}
