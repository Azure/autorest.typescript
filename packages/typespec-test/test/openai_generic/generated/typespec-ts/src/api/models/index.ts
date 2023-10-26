// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ListModelsResponse,
  Model,
  DeleteModelResponse,
} from "../../models/models.js";
import {
  isUnexpected,
  ModelsDeleteOperation200Response,
  ModelsDeleteOperationDefaultResponse,
  ModelsList200Response,
  ModelsListDefaultResponse,
  ModelsRetrieve200Response,
  ModelsRetrieveDefaultResponse,
  OpenAIContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  ModelsListOptions,
  ModelsRetrieveOptions,
  ModelsDeleteOptions,
} from "../../models/options.js";

export function _modelsListSend(
  context: Client,
  options: ModelsListOptions = { requestOptions: {} }
): StreamableMethod<ModelsList200Response | ModelsListDefaultResponse> {
  return context
    .path("/models")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _modelsListDeserialize(
  result: ModelsList200Response | ModelsListDefaultResponse
): Promise<ListModelsResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    object: result.body["object"],
    data: (result.body["data"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      created: new Date(p["created"]),
      ownedBy: p["owned_by"],
    })),
  };
}

export async function modelsList(
  context: Client,
  options: ModelsListOptions = { requestOptions: {} }
): Promise<ListModelsResponse> {
  const result = await _modelsListSend(context, options);
  return _modelsListDeserialize(result);
}

export function _modelsRetrieveSend(
  context: Client,
  model: string,
  options: ModelsRetrieveOptions = { requestOptions: {} }
): StreamableMethod<ModelsRetrieve200Response | ModelsRetrieveDefaultResponse> {
  return context
    .path("/models/{model}", model)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _modelsRetrieveDeserialize(
  result: ModelsRetrieve200Response | ModelsRetrieveDefaultResponse
): Promise<Model> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    created: new Date(result.body["created"]),
    ownedBy: result.body["owned_by"],
  };
}

export async function modelsRetrieve(
  context: Client,
  model: string,
  options: ModelsRetrieveOptions = { requestOptions: {} }
): Promise<Model> {
  const result = await _modelsRetrieveSend(context, model, options);
  return _modelsRetrieveDeserialize(result);
}

export function _modelsDeleteSend(
  context: Client,
  model: string,
  options: ModelsDeleteOptions = { requestOptions: {} }
): StreamableMethod<
  ModelsDeleteOperation200Response | ModelsDeleteOperationDefaultResponse
> {
  return context
    .path("/models/{model}", model)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _modelsDeleteDeserialize(
  result:
    | ModelsDeleteOperation200Response
    | ModelsDeleteOperationDefaultResponse
): Promise<DeleteModelResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    deleted: result.body["deleted"],
  };
}

export async function modelsDelete(
  context: Client,
  model: string,
  options: ModelsDeleteOptions = { requestOptions: {} }
): Promise<DeleteModelResponse> {
  const result = await _modelsDeleteSend(context, model, options);
  return _modelsDeleteDeserialize(result);
}
