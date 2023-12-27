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
  createRestError,
} from "@typespec/ts-http-runtime";
import { reshape } from "@azure/core-util";
import {
  ModelsListOptions,
  ModelsRetrieveOptions,
  ModelsDeleteOperationOptions,
} from "../../models/options.js";

export function _listSend(
  context: Client,
  options: ModelsListOptions = { requestOptions: {} }
): StreamableMethod<ModelsList200Response | ModelsListDefaultResponse> {
  return context
    .path("/models")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listDeserialize(
  result: ModelsList200Response | ModelsListDefaultResponse
): Promise<ListModelsResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  let deserializedResponse: unknown = result.body;
  deserializedResponse = reshape(
    deserializedResponse,
    "data[].created",
    (value) => new Date(value as string)
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "data[].owned_by",
    "ownedBy"
  );
  return deserializedResponse as ListModelsResponse;
}

export async function list(
  context: Client,
  options: ModelsListOptions = { requestOptions: {} }
): Promise<ListModelsResponse> {
  const result = await _listSend(context, options);
  return _listDeserialize(result);
}

export function _retrieveSend(
  context: Client,
  model: string,
  options: ModelsRetrieveOptions = { requestOptions: {} }
): StreamableMethod<ModelsRetrieve200Response | ModelsRetrieveDefaultResponse> {
  return context
    .path("/models/{model}", model)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _retrieveDeserialize(
  result: ModelsRetrieve200Response | ModelsRetrieveDefaultResponse
): Promise<Model> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  let deserializedResponse: unknown = result.body;
  deserializedResponse = reshape(
    deserializedResponse,
    "created",
    (value) => new Date(value as string)
  );
  deserializedResponse = reshape(deserializedResponse, "owned_by", "ownedBy");
  return deserializedResponse as Model;
}

export async function retrieve(
  context: Client,
  model: string,
  options: ModelsRetrieveOptions = { requestOptions: {} }
): Promise<Model> {
  const result = await _retrieveSend(context, model, options);
  return _retrieveDeserialize(result);
}

export function _deleteOperationSend(
  context: Client,
  model: string,
  options: ModelsDeleteOperationOptions = { requestOptions: {} }
): StreamableMethod<
  ModelsDeleteOperation200Response | ModelsDeleteOperationDefaultResponse
> {
  return context
    .path("/models/{model}", model)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteOperationDeserialize(
  result:
    | ModelsDeleteOperation200Response
    | ModelsDeleteOperationDefaultResponse
): Promise<DeleteModelResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  let deserializedResponse: unknown = result.body;
  return deserializedResponse as DeleteModelResponse;
}

export async function deleteOperation(
  context: Client,
  model: string,
  options: ModelsDeleteOperationOptions = { requestOptions: {} }
): Promise<DeleteModelResponse> {
  const result = await _deleteOperationSend(context, model, options);
  return _deleteOperationDeserialize(result);
}
