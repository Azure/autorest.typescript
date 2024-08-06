// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Siamese } from "../models/models.js";
import { NotDiscriminatedContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  PostValidOptionalParams,
  GetValidOptionalParams,
  PutValidOptionalParams,
} from "../models/options.js";

export function _postValidSend(
  context: Client,
  input: Siamese,
  options: PostValidOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/model/inheritance/not-discriminated/valid")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { age: input["age"], name: input["name"], smart: input["smart"] },
    });
}

export async function _postValidDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function postValid(
  context: Client,
  input: Siamese,
  options: PostValidOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _postValidSend(context, input, options);
  return _postValidDeserialize(result);
}

export function _getValidSend(
  context: Client,
  options: GetValidOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/model/inheritance/not-discriminated/valid")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getValidDeserialize(
  result: PathUncheckedResponse,
): Promise<Siamese> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    age: result.body["age"],
    name: result.body["name"],
    smart: result.body["smart"],
  };
}

export async function getValid(
  context: Client,
  options: GetValidOptionalParams = { requestOptions: {} },
): Promise<Siamese> {
  const result = await _getValidSend(context, options);
  return _getValidDeserialize(result);
}

export function _putValidSend(
  context: Client,
  input: Siamese,
  options: PutValidOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/model/inheritance/not-discriminated/valid")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { age: input["age"], name: input["name"], smart: input["smart"] },
    });
}

export async function _putValidDeserialize(
  result: PathUncheckedResponse,
): Promise<Siamese> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    age: result.body["age"],
    name: result.body["name"],
    smart: result.body["smart"],
  };
}

export async function putValid(
  context: Client,
  input: Siamese,
  options: PutValidOptionalParams = { requestOptions: {} },
): Promise<Siamese> {
  const result = await _putValidSend(context, input, options);
  return _putValidDeserialize(result);
}
