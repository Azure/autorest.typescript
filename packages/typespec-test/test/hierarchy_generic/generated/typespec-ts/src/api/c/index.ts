// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BA, BEA } from "../../models/models.js";
import { FooContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { COp1OptionalParams } from "../../models/options.js";

export function _cOp1Send(
  context: Client,
  body: BEA,
  options: COp1OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/b/e")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop3: body["prop3"] },
    });
}

export async function _cOp1Deserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function cOp1(
  context: Client,
  body: BEA,
  options: COp1OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _cOp1Send(context, body, options);
  return _cOp1Deserialize(result);
}

export function _cOp1Send(
  context: Client,
  body: BA,
  options: COp1OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/b/c")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop2: body["prop2"] },
    });
}

export async function _cOp1Deserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function cOp1(
  context: Client,
  body: BA,
  options: COp1OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _cOp1Send(context, body, options);
  return _cOp1Deserialize(result);
}
