// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AzureEmbeddingModel } from "../models/models.js";
import {
  Get200Response,
  ModelContext as Client,
  Post200Response,
  Put204Response,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  GetOptionalParams,
  PutOptionalParams,
  PostOptionalParams,
} from "../models/options.js";

export function _getSend(
  context: Client,
  options: GetOptionalParams = { requestOptions: {} },
): StreamableMethod<Get200Response> {
  return context
    .path("/azure/core/model/embeddingVector")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: Get200Response,
): Promise<number[]> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

/** get an embedding vector */
export async function get(
  context: Client,
  options: GetOptionalParams = { requestOptions: {} },
): Promise<number[]> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: number[],
  options: PutOptionalParams = { requestOptions: {} },
): StreamableMethod<Put204Response> {
  return context
    .path("/azure/core/model/embeddingVector")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _putDeserialize(result: Put204Response): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** put an embedding vector */
export async function put(
  context: Client,
  body: number[],
  options: PutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}

export function _postSend(
  context: Client,
  body: AzureEmbeddingModel,
  options: PostOptionalParams = { requestOptions: {} },
): StreamableMethod<Post200Response> {
  return context
    .path("/azure/core/model/embeddingVector")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { embedding: body["embedding"] },
    });
}

export async function _postDeserialize(
  result: Post200Response,
): Promise<AzureEmbeddingModel> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    embedding: result.body["embedding"],
  };
}

/** post a model which has an embeddingVector property */
export async function post(
  context: Client,
  body: AzureEmbeddingModel,
  options: PostOptionalParams = { requestOptions: {} },
): Promise<AzureEmbeddingModel> {
  const result = await _postSend(context, body, options);
  return _postDeserialize(result);
}
