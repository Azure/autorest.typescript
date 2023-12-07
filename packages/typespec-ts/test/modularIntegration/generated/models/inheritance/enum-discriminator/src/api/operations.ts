// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Dog, Snake } from "../models/models.js";
import {
  EnumDiscriminatorContext as Client,
  GetExtensibleModel200Response,
  GetExtensibleModelMissingDiscriminator200Response,
  GetExtensibleModelWrongDiscriminator200Response,
  GetFixedModel200Response,
  GetFixedModelMissingDiscriminator200Response,
  GetFixedModelWrongDiscriminator200Response,
  PutExtensibleModel204Response,
  PutFixedModel204Response,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  GetExtensibleModelOptions,
  PutExtensibleModelOptions,
  GetExtensibleModelMissingDiscriminatorOptions,
  GetExtensibleModelWrongDiscriminatorOptions,
  GetFixedModelOptions,
  PutFixedModelOptions,
  GetFixedModelMissingDiscriminatorOptions,
  GetFixedModelWrongDiscriminatorOptions,
} from "../models/options.js";

export function _getExtensibleModelSend(
  context: Client,
  options: GetExtensibleModelOptions = { requestOptions: {} }
): StreamableMethod<GetExtensibleModel200Response> {
  return context
    .path("/type/model/inheritance/enum-discriminator/extensible-enum")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getExtensibleModelDeserialize(
  result: GetExtensibleModel200Response
): Promise<Dog> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

/** Receive model with extensible enum discriminator type. */
export async function getExtensibleModel(
  context: Client,
  options: GetExtensibleModelOptions = { requestOptions: {} }
): Promise<Dog> {
  const result = await _getExtensibleModelSend(context, options);
  return _getExtensibleModelDeserialize(result);
}

export function _putExtensibleModelSend(
  context: Client,
  input: Dog,
  options: PutExtensibleModelOptions = { requestOptions: {} }
): StreamableMethod<PutExtensibleModel204Response> {
  return context
    .path("/type/model/inheritance/enum-discriminator/extensible-enum")
    .put({ ...operationOptionsToRequestParameters(options), body: input });
}

export async function _putExtensibleModelDeserialize(
  result: PutExtensibleModel204Response
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Send model with extensible enum discriminator type. */
export async function putExtensibleModel(
  context: Client,
  input: Dog,
  options: PutExtensibleModelOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _putExtensibleModelSend(context, input, options);
  return _putExtensibleModelDeserialize(result);
}

export function _getExtensibleModelMissingDiscriminatorSend(
  context: Client,
  options: GetExtensibleModelMissingDiscriminatorOptions = {
    requestOptions: {},
  }
): StreamableMethod<GetExtensibleModelMissingDiscriminator200Response> {
  return context
    .path(
      "/type/model/inheritance/enum-discriminator/extensible-enum/missingdiscriminator"
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getExtensibleModelMissingDiscriminatorDeserialize(
  result: GetExtensibleModelMissingDiscriminator200Response
): Promise<Dog> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

/** Get a model omitting the discriminator. */
export async function getExtensibleModelMissingDiscriminator(
  context: Client,
  options: GetExtensibleModelMissingDiscriminatorOptions = {
    requestOptions: {},
  }
): Promise<Dog> {
  const result = await _getExtensibleModelMissingDiscriminatorSend(
    context,
    options
  );
  return _getExtensibleModelMissingDiscriminatorDeserialize(result);
}

export function _getExtensibleModelWrongDiscriminatorSend(
  context: Client,
  options: GetExtensibleModelWrongDiscriminatorOptions = { requestOptions: {} }
): StreamableMethod<GetExtensibleModelWrongDiscriminator200Response> {
  return context
    .path(
      "/type/model/inheritance/enum-discriminator/extensible-enum/wrongdiscriminator"
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getExtensibleModelWrongDiscriminatorDeserialize(
  result: GetExtensibleModelWrongDiscriminator200Response
): Promise<Dog> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

/** Get a model containing discriminator value never defined. */
export async function getExtensibleModelWrongDiscriminator(
  context: Client,
  options: GetExtensibleModelWrongDiscriminatorOptions = { requestOptions: {} }
): Promise<Dog> {
  const result = await _getExtensibleModelWrongDiscriminatorSend(
    context,
    options
  );
  return _getExtensibleModelWrongDiscriminatorDeserialize(result);
}

export function _getFixedModelSend(
  context: Client,
  options: GetFixedModelOptions = { requestOptions: {} }
): StreamableMethod<GetFixedModel200Response> {
  return context
    .path("/type/model/inheritance/enum-discriminator/fixed-enum")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getFixedModelDeserialize(
  result: GetFixedModel200Response
): Promise<Snake> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

/** Receive model with fixed enum discriminator type. */
export async function getFixedModel(
  context: Client,
  options: GetFixedModelOptions = { requestOptions: {} }
): Promise<Snake> {
  const result = await _getFixedModelSend(context, options);
  return _getFixedModelDeserialize(result);
}

export function _putFixedModelSend(
  context: Client,
  input: Snake,
  options: PutFixedModelOptions = { requestOptions: {} }
): StreamableMethod<PutFixedModel204Response> {
  return context
    .path("/type/model/inheritance/enum-discriminator/fixed-enum")
    .put({ ...operationOptionsToRequestParameters(options), body: input });
}

export async function _putFixedModelDeserialize(
  result: PutFixedModel204Response
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Send model with fixed enum discriminator type. */
export async function putFixedModel(
  context: Client,
  input: Snake,
  options: PutFixedModelOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _putFixedModelSend(context, input, options);
  return _putFixedModelDeserialize(result);
}

export function _getFixedModelMissingDiscriminatorSend(
  context: Client,
  options: GetFixedModelMissingDiscriminatorOptions = { requestOptions: {} }
): StreamableMethod<GetFixedModelMissingDiscriminator200Response> {
  return context
    .path(
      "/type/model/inheritance/enum-discriminator/fixed-enum/missingdiscriminator"
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getFixedModelMissingDiscriminatorDeserialize(
  result: GetFixedModelMissingDiscriminator200Response
): Promise<Snake> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

/** Get a model omitting the discriminator. */
export async function getFixedModelMissingDiscriminator(
  context: Client,
  options: GetFixedModelMissingDiscriminatorOptions = { requestOptions: {} }
): Promise<Snake> {
  const result = await _getFixedModelMissingDiscriminatorSend(context, options);
  return _getFixedModelMissingDiscriminatorDeserialize(result);
}

export function _getFixedModelWrongDiscriminatorSend(
  context: Client,
  options: GetFixedModelWrongDiscriminatorOptions = { requestOptions: {} }
): StreamableMethod<GetFixedModelWrongDiscriminator200Response> {
  return context
    .path(
      "/type/model/inheritance/enum-discriminator/fixed-enum/wrongdiscriminator"
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getFixedModelWrongDiscriminatorDeserialize(
  result: GetFixedModelWrongDiscriminator200Response
): Promise<Snake> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

/** Get a model containing discriminator value never defined. */
export async function getFixedModelWrongDiscriminator(
  context: Client,
  options: GetFixedModelWrongDiscriminatorOptions = { requestOptions: {} }
): Promise<Snake> {
  const result = await _getFixedModelWrongDiscriminatorSend(context, options);
  return _getFixedModelWrongDiscriminatorDeserialize(result);
}
