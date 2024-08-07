// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  dogUnionSerializer,
  snakeUnionSerializer,
  DogUnion,
  SnakeUnion,
} from "../models/models.js";
import { EnumDiscriminatorContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  GetExtensibleModelOptionalParams,
  PutExtensibleModelOptionalParams,
  GetExtensibleModelMissingDiscriminatorOptionalParams,
  GetExtensibleModelWrongDiscriminatorOptionalParams,
  GetFixedModelOptionalParams,
  PutFixedModelOptionalParams,
  GetFixedModelMissingDiscriminatorOptionalParams,
  GetFixedModelWrongDiscriminatorOptionalParams,
} from "../models/options.js";

export function _getExtensibleModelSend(
  context: Client,
  options: GetExtensibleModelOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/model/inheritance/enum-discriminator/extensible-enum")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getExtensibleModelDeserialize(
  result: PathUncheckedResponse,
): Promise<DogUnion> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body as DogUnion;
}

/** Receive model with extensible enum discriminator type. */
export async function getExtensibleModel(
  context: Client,
  options: GetExtensibleModelOptionalParams = { requestOptions: {} },
): Promise<DogUnion> {
  const result = await _getExtensibleModelSend(context, options);
  return _getExtensibleModelDeserialize(result);
}

export function _putExtensibleModelSend(
  context: Client,
  input: DogUnion,
  options: PutExtensibleModelOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/model/inheritance/enum-discriminator/extensible-enum")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: dogUnionSerializer(input),
    });
}

export async function _putExtensibleModelDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Send model with extensible enum discriminator type. */
export async function putExtensibleModel(
  context: Client,
  input: DogUnion,
  options: PutExtensibleModelOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putExtensibleModelSend(context, input, options);
  return _putExtensibleModelDeserialize(result);
}

export function _getExtensibleModelMissingDiscriminatorSend(
  context: Client,
  options: GetExtensibleModelMissingDiscriminatorOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/type/model/inheritance/enum-discriminator/extensible-enum/missingdiscriminator",
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getExtensibleModelMissingDiscriminatorDeserialize(
  result: PathUncheckedResponse,
): Promise<DogUnion> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body as DogUnion;
}

/** Get a model omitting the discriminator. */
export async function getExtensibleModelMissingDiscriminator(
  context: Client,
  options: GetExtensibleModelMissingDiscriminatorOptionalParams = {
    requestOptions: {},
  },
): Promise<DogUnion> {
  const result = await _getExtensibleModelMissingDiscriminatorSend(
    context,
    options,
  );
  return _getExtensibleModelMissingDiscriminatorDeserialize(result);
}

export function _getExtensibleModelWrongDiscriminatorSend(
  context: Client,
  options: GetExtensibleModelWrongDiscriminatorOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/type/model/inheritance/enum-discriminator/extensible-enum/wrongdiscriminator",
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getExtensibleModelWrongDiscriminatorDeserialize(
  result: PathUncheckedResponse,
): Promise<DogUnion> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body as DogUnion;
}

/** Get a model containing discriminator value never defined. */
export async function getExtensibleModelWrongDiscriminator(
  context: Client,
  options: GetExtensibleModelWrongDiscriminatorOptionalParams = {
    requestOptions: {},
  },
): Promise<DogUnion> {
  const result = await _getExtensibleModelWrongDiscriminatorSend(
    context,
    options,
  );
  return _getExtensibleModelWrongDiscriminatorDeserialize(result);
}

export function _getFixedModelSend(
  context: Client,
  options: GetFixedModelOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/model/inheritance/enum-discriminator/fixed-enum")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getFixedModelDeserialize(
  result: PathUncheckedResponse,
): Promise<SnakeUnion> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

/** Receive model with fixed enum discriminator type. */
export async function getFixedModel(
  context: Client,
  options: GetFixedModelOptionalParams = { requestOptions: {} },
): Promise<SnakeUnion> {
  const result = await _getFixedModelSend(context, options);
  return _getFixedModelDeserialize(result);
}

export function _putFixedModelSend(
  context: Client,
  input: SnakeUnion,
  options: PutFixedModelOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/model/inheritance/enum-discriminator/fixed-enum")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: snakeUnionSerializer(input),
    });
}

export async function _putFixedModelDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Send model with fixed enum discriminator type. */
export async function putFixedModel(
  context: Client,
  input: SnakeUnion,
  options: PutFixedModelOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putFixedModelSend(context, input, options);
  return _putFixedModelDeserialize(result);
}

export function _getFixedModelMissingDiscriminatorSend(
  context: Client,
  options: GetFixedModelMissingDiscriminatorOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/type/model/inheritance/enum-discriminator/fixed-enum/missingdiscriminator",
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getFixedModelMissingDiscriminatorDeserialize(
  result: PathUncheckedResponse,
): Promise<SnakeUnion> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

/** Get a model omitting the discriminator. */
export async function getFixedModelMissingDiscriminator(
  context: Client,
  options: GetFixedModelMissingDiscriminatorOptionalParams = {
    requestOptions: {},
  },
): Promise<SnakeUnion> {
  const result = await _getFixedModelMissingDiscriminatorSend(context, options);
  return _getFixedModelMissingDiscriminatorDeserialize(result);
}

export function _getFixedModelWrongDiscriminatorSend(
  context: Client,
  options: GetFixedModelWrongDiscriminatorOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/type/model/inheritance/enum-discriminator/fixed-enum/wrongdiscriminator",
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getFixedModelWrongDiscriminatorDeserialize(
  result: PathUncheckedResponse,
): Promise<SnakeUnion> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

/** Get a model containing discriminator value never defined. */
export async function getFixedModelWrongDiscriminator(
  context: Client,
  options: GetFixedModelWrongDiscriminatorOptionalParams = {
    requestOptions: {},
  },
): Promise<SnakeUnion> {
  const result = await _getFixedModelWrongDiscriminatorSend(context, options);
  return _getFixedModelWrongDiscriminatorDeserialize(result);
}
