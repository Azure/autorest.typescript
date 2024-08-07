// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { fishUnionSerializer, FishUnion } from "../models/models.js";
import { NestedDiscriminatorContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  GetModelOptionalParams,
  PutModelOptionalParams,
  GetRecursiveModelOptionalParams,
  PutRecursiveModelOptionalParams,
  GetMissingDiscriminatorOptionalParams,
  GetWrongDiscriminatorOptionalParams,
} from "../models/options.js";

export function _getModelSend(
  context: Client,
  options: GetModelOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/model/inheritance/nested-discriminator/model")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getModelDeserialize(
  result: PathUncheckedResponse,
): Promise<FishUnion> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function getModel(
  context: Client,
  options: GetModelOptionalParams = { requestOptions: {} },
): Promise<FishUnion> {
  const result = await _getModelSend(context, options);
  return _getModelDeserialize(result);
}

export function _putModelSend(
  context: Client,
  input: FishUnion,
  options: PutModelOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/model/inheritance/nested-discriminator/model")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: fishUnionSerializer(input),
    });
}

export async function _putModelDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function putModel(
  context: Client,
  input: FishUnion,
  options: PutModelOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putModelSend(context, input, options);
  return _putModelDeserialize(result);
}

export function _getRecursiveModelSend(
  context: Client,
  options: GetRecursiveModelOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/model/inheritance/nested-discriminator/recursivemodel")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getRecursiveModelDeserialize(
  result: PathUncheckedResponse,
): Promise<FishUnion> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function getRecursiveModel(
  context: Client,
  options: GetRecursiveModelOptionalParams = { requestOptions: {} },
): Promise<FishUnion> {
  const result = await _getRecursiveModelSend(context, options);
  return _getRecursiveModelDeserialize(result);
}

export function _putRecursiveModelSend(
  context: Client,
  input: FishUnion,
  options: PutRecursiveModelOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/model/inheritance/nested-discriminator/recursivemodel")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: fishUnionSerializer(input),
    });
}

export async function _putRecursiveModelDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function putRecursiveModel(
  context: Client,
  input: FishUnion,
  options: PutRecursiveModelOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putRecursiveModelSend(context, input, options);
  return _putRecursiveModelDeserialize(result);
}

export function _getMissingDiscriminatorSend(
  context: Client,
  options: GetMissingDiscriminatorOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/model/inheritance/nested-discriminator/missingdiscriminator")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getMissingDiscriminatorDeserialize(
  result: PathUncheckedResponse,
): Promise<FishUnion> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function getMissingDiscriminator(
  context: Client,
  options: GetMissingDiscriminatorOptionalParams = { requestOptions: {} },
): Promise<FishUnion> {
  const result = await _getMissingDiscriminatorSend(context, options);
  return _getMissingDiscriminatorDeserialize(result);
}

export function _getWrongDiscriminatorSend(
  context: Client,
  options: GetWrongDiscriminatorOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/model/inheritance/nested-discriminator/wrongdiscriminator")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getWrongDiscriminatorDeserialize(
  result: PathUncheckedResponse,
): Promise<FishUnion> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function getWrongDiscriminator(
  context: Client,
  options: GetWrongDiscriminatorOptionalParams = { requestOptions: {} },
): Promise<FishUnion> {
  const result = await _getWrongDiscriminatorSend(context, options);
  return _getWrongDiscriminatorDeserialize(result);
}
