// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { A, BEA } from "../models/models.js";
import { FooContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  OpTopLevelOptionalParams,
  FooOptionalParams,
  OpBECOptionalParams,
  OpDOptionalParams,
} from "../models/options.js";

export function _opTopLevelSend(
  context: Client,
  body: A,
  options: OpTopLevelOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop1: body["prop1"] },
    });
}

export async function _opTopLevelDeserialize(
  result: PathUncheckedResponse,
): Promise<Record<string, any>> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body as any;
}

/** show example opTopLevel */
export async function opTopLevel(
  context: Client,
  body: A,
  options: OpTopLevelOptionalParams = { requestOptions: {} },
): Promise<Record<string, any>> {
  const result = await _opTopLevelSend(context, body, options);
  return _opTopLevelDeserialize(result);
}

export function _fooSend(
  context: Client,
  body: A,
  options: FooOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/b")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop1: body["prop1"] },
    });
}

export async function _fooDeserialize(
  result: PathUncheckedResponse,
): Promise<Record<string, any>> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body as any;
}

export async function foo(
  context: Client,
  body: A,
  options: FooOptionalParams = { requestOptions: {} },
): Promise<Record<string, any>> {
  const result = await _fooSend(context, body, options);
  return _fooDeserialize(result);
}

export function _fooSend(
  context: Client,
  body: BEA,
  options: FooOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/b/e")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop3: body["prop3"] },
    });
}

export async function _fooDeserialize(
  result: PathUncheckedResponse,
): Promise<Record<string, any>> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body as any;
}

export async function foo(
  context: Client,
  body: BEA,
  options: FooOptionalParams = { requestOptions: {} },
): Promise<Record<string, any>> {
  const result = await _fooSend(context, body, options);
  return _fooDeserialize(result);
}

export function _opBECSend(
  context: Client,
  body: BEA,
  options: OpBECOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/b/e/bec")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop3: body["prop3"] },
    });
}

export async function _opBECDeserialize(
  result: PathUncheckedResponse,
): Promise<Record<string, any>> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body as any;
}

export async function opBEC(
  context: Client,
  body: BEA,
  options: OpBECOptionalParams = { requestOptions: {} },
): Promise<Record<string, any>> {
  const result = await _opBECSend(context, body, options);
  return _opBECDeserialize(result);
}

export function _opDSend(
  context: Client,
  body: A,
  options: OpDOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/d")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop1: body["prop1"] },
    });
}

export async function _opDDeserialize(
  result: PathUncheckedResponse,
): Promise<Record<string, any>> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body as any;
}

/** show example opD */
export async function opD(
  context: Client,
  body: A,
  options: OpDOptionalParams = { requestOptions: {} },
): Promise<Record<string, any>> {
  const result = await _opDSend(context, body, options);
  return _opDDeserialize(result);
}
