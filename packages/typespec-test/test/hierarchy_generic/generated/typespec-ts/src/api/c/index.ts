// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FooContext as Client, COp1OptionalParams } from "../index.js";
import { Ba, baSerializer } from "../../models/b/models.js";
import { Bea, beaSerializer } from "../../models/b/e/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _cOp1Send(
  context: Client,
  body: Ba,
  options: COp1OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/b/c")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      body: baSerializer(body),
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
  body: Ba,
  options: COp1OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _cOp1Send(context, body, options);
  return _cOp1Deserialize(result);
}

export function _cOp1Send(
  context: Client,
  body: Bea,
  options: COp1OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/b/e")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      body: beaSerializer(body),
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
  body: Bea,
  options: COp1OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _cOp1Send(context, body, options);
  return _cOp1Deserialize(result);
}
