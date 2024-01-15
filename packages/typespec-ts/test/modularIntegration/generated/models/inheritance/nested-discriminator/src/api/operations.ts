// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { FishUnion } from "../models/models.js";
import {
  GetMissingDiscriminator200Response,
  GetModel200Response,
  GetRecursiveModel200Response,
  GetWrongDiscriminator200Response,
  NestedDiscriminatorContext as Client,
  PutModel204Response,
  PutRecursiveModel204Response,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  GetModelOptions,
  PutModelOptions,
  GetRecursiveModelOptions,
  PutRecursiveModelOptions,
  GetMissingDiscriminatorOptions,
  GetWrongDiscriminatorOptions,
} from "../models/options.js";

export function _getModelSend(
  context: Client,
  options: GetModelOptions = { requestOptions: {} },
): StreamableMethod<GetModel200Response> {
  return context
    .path("/type/model/inheritance/nested-discriminator/model")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getModelDeserialize(
  result: GetModel200Response,
): Promise<FishUnion> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

export async function getModel(
  context: Client,
  options: GetModelOptions = { requestOptions: {} },
): Promise<FishUnion> {
  const result = await _getModelSend(context, options);
  return _getModelDeserialize(result);
}

export function _putModelSend(
  context: Client,
  input: FishUnion,
  options: PutModelOptions = { requestOptions: {} },
): StreamableMethod<PutModel204Response> {
  return context
    .path("/type/model/inheritance/nested-discriminator/model")
    .put({ ...operationOptionsToRequestParameters(options), body: input });
}

export async function _putModelDeserialize(
  result: PutModel204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function putModel(
  context: Client,
  input: FishUnion,
  options: PutModelOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _putModelSend(context, input, options);
  return _putModelDeserialize(result);
}

export function _getRecursiveModelSend(
  context: Client,
  options: GetRecursiveModelOptions = { requestOptions: {} },
): StreamableMethod<GetRecursiveModel200Response> {
  return context
    .path("/type/model/inheritance/nested-discriminator/recursivemodel")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getRecursiveModelDeserialize(
  result: GetRecursiveModel200Response,
): Promise<FishUnion> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

export async function getRecursiveModel(
  context: Client,
  options: GetRecursiveModelOptions = { requestOptions: {} },
): Promise<FishUnion> {
  const result = await _getRecursiveModelSend(context, options);
  return _getRecursiveModelDeserialize(result);
}

export function _putRecursiveModelSend(
  context: Client,
  input: FishUnion,
  options: PutRecursiveModelOptions = { requestOptions: {} },
): StreamableMethod<PutRecursiveModel204Response> {
  return context
    .path("/type/model/inheritance/nested-discriminator/recursivemodel")
    .put({ ...operationOptionsToRequestParameters(options), body: input });
}

export async function _putRecursiveModelDeserialize(
  result: PutRecursiveModel204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function putRecursiveModel(
  context: Client,
  input: FishUnion,
  options: PutRecursiveModelOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _putRecursiveModelSend(context, input, options);
  return _putRecursiveModelDeserialize(result);
}

export function _getMissingDiscriminatorSend(
  context: Client,
  options: GetMissingDiscriminatorOptions = { requestOptions: {} },
): StreamableMethod<GetMissingDiscriminator200Response> {
  return context
    .path("/type/model/inheritance/nested-discriminator/missingdiscriminator")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getMissingDiscriminatorDeserialize(
  result: GetMissingDiscriminator200Response,
): Promise<FishUnion> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

export async function getMissingDiscriminator(
  context: Client,
  options: GetMissingDiscriminatorOptions = { requestOptions: {} },
): Promise<FishUnion> {
  const result = await _getMissingDiscriminatorSend(context, options);
  return _getMissingDiscriminatorDeserialize(result);
}

export function _getWrongDiscriminatorSend(
  context: Client,
  options: GetWrongDiscriminatorOptions = { requestOptions: {} },
): StreamableMethod<GetWrongDiscriminator200Response> {
  return context
    .path("/type/model/inheritance/nested-discriminator/wrongdiscriminator")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getWrongDiscriminatorDeserialize(
  result: GetWrongDiscriminator200Response,
): Promise<FishUnion> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

export async function getWrongDiscriminator(
  context: Client,
  options: GetWrongDiscriminatorOptions = { requestOptions: {} },
): Promise<FishUnion> {
  const result = await _getWrongDiscriminatorSend(context, options);
  return _getWrongDiscriminatorDeserialize(result);
}
