// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { A, BA, BEA } from "../models/models.js";
import { FooContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { Op1OptionalParams } from "../models/options.js";

export function _op1Send(
  context: Client,
  body: A,
  options: Op1OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop1: body["prop1"] },
    });
}

export async function _op1Deserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function op1(
  context: Client,
  body: A,
  options: Op1OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _op1Send(context, body, options);
  return _op1Deserialize(result);
}

export function _op1Send(
  context: Client,
  body: BA,
  options: Op1OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/b")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop2: body["prop2"] },
    });
}

export async function _op1Deserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function op1(
  context: Client,
  body: BA,
  options: Op1OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _op1Send(context, body, options);
  return _op1Deserialize(result);
}

export function _op1Send(
  context: Client,
  body: BEA,
  options: Op1OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/b/e")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop3: body["prop3"] },
    });
}

export async function _op1Deserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function op1(
  context: Client,
  body: BEA,
  options: Op1OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _op1Send(context, body, options);
  return _op1Deserialize(result);
}

export function _op1Send(
  context: Client,
  body: BA,
  options: Op1OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/b/c")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop2: body["prop2"] },
    });
}

export async function _op1Deserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function op1(
  context: Client,
  body: BA,
  options: Op1OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _op1Send(context, body, options);
  return _op1Deserialize(result);
}

export function _op1Send(
  context: Client,
  body: A,
  options: Op1OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/d")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop1: body["prop1"] },
    });
}

export async function _op1Deserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function op1(
  context: Client,
  body: A,
  options: Op1OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _op1Send(context, body, options);
  return _op1Deserialize(result);
}
