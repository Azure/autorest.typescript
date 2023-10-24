// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ListModelsResponse,
  Model,
  DeleteModelResponse,
} from "../../models/models.js";
import {
  DeleteOperation200Response,
  DeleteOperationDefaultResponse,
  isUnexpected,
  ListModels200Response,
  ListModelsDefaultResponse,
  OpenAIContext as Client,
  Retrieve200Response,
  RetrieveDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  ListModelsOptions,
  RetrieveOptions,
  DeleteOptions,
} from "../../models/options.js";

export function _listModelsSend(
  context: Client,
  options: ListModelsOptions = { requestOptions: {} }
): StreamableMethod<ListModels200Response | ListModelsDefaultResponse> {
  return context
    .path("/models")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listModelsDeserialize(
  result: ListModels200Response | ListModelsDefaultResponse
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

export async function listModels(
  context: Client,
  options: ListModelsOptions = { requestOptions: {} }
): Promise<ListModelsResponse> {
  const result = await _listModelsSend(context, options);
  return _listModelsDeserialize(result);
}

export function _retrieveSend(
  context: Client,
  model: string,
  options: RetrieveOptions = { requestOptions: {} }
): StreamableMethod<Retrieve200Response | RetrieveDefaultResponse> {
  return context
    .path("/models/{model}", model)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _retrieveDeserialize(
  result: Retrieve200Response | RetrieveDefaultResponse
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

export async function retrieve(
  context: Client,
  model: string,
  options: RetrieveOptions = { requestOptions: {} }
): Promise<Model> {
  const result = await _retrieveSend(context, model, options);
  return _retrieveDeserialize(result);
}

export function _deleteOperationSend(
  context: Client,
  model: string,
  options: DeleteOptions = { requestOptions: {} }
): StreamableMethod<
  DeleteOperation200Response | DeleteOperationDefaultResponse
> {
  return context
    .path("/models/{model}", model)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteOperationDeserialize(
  result: DeleteOperation200Response | DeleteOperationDefaultResponse
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

/**
 *  @fixme delete is a reserved word that cannot be used as an operation name. Please add @projectedName(
 *       "javascript", "<JS-Specific-Name>") to the operation to override the generated name.
 */
export async function deleteOperation(
  context: Client,
  model: string,
  options: DeleteOptions = { requestOptions: {} }
): Promise<DeleteModelResponse> {
  const result = await _deleteOperationSend(context, model, options);
  return _deleteOperationDeserialize(result);
}
