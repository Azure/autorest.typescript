// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { EmptyInput, EmptyOutput, EmptyInputOutput } from "../models/models.js";
import { EmptyContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  PutEmptyOptionalParams,
  GetEmptyOptionalParams,
  PostRoundTripEmptyOptionalParams,
} from "../models/options.js";

export function _putEmptySend(
  context: Client,
  input: EmptyInput,
  options: PutEmptyOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/model/empty/alone")
    .put({ ...operationOptionsToRequestParameters(options), body: input });
}

export async function _putEmptyDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function putEmpty(
  context: Client,
  input: EmptyInput,
  options: PutEmptyOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putEmptySend(context, input, options);
  return _putEmptyDeserialize(result);
}

export function _getEmptySend(
  context: Client,
  options: GetEmptyOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/model/empty/alone")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getEmptyDeserialize(
  result: PathUncheckedResponse,
): Promise<EmptyOutput> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function getEmpty(
  context: Client,
  options: GetEmptyOptionalParams = { requestOptions: {} },
): Promise<EmptyOutput> {
  const result = await _getEmptySend(context, options);
  return _getEmptyDeserialize(result);
}

export function _postRoundTripEmptySend(
  context: Client,
  body: EmptyInputOutput,
  options: PostRoundTripEmptyOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/model/empty/round-trip")
    .post({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _postRoundTripEmptyDeserialize(
  result: PathUncheckedResponse,
): Promise<EmptyInputOutput> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function postRoundTripEmpty(
  context: Client,
  body: EmptyInputOutput,
  options: PostRoundTripEmptyOptionalParams = { requestOptions: {} },
): Promise<EmptyInputOutput> {
  const result = await _postRoundTripEmptySend(context, body, options);
  return _postRoundTripEmptyDeserialize(result);
}
