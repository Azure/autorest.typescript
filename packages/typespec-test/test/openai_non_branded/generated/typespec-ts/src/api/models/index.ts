// Licensed under the MIT license.

import {
  ListModelsResponse,
  Model,
  DeleteModelResponse,
} from "../../models/models.js";
import {
  isUnexpected,
  ModelsDelete200Response,
  ModelsDeleteDefaultResponse,
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
import {
  ModelsListOptions,
  ModelsRetrieveOptions,
  ModelsDeleteOptions,
} from "../../models/options.js";

export function _listSend(
  context: Client,
  options: ModelsListOptions = { requestOptions: {} },
): StreamableMethod<ModelsList200Response | ModelsListDefaultResponse> {
  return context
    .path("/models")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listDeserialize(
  result: ModelsList200Response | ModelsListDefaultResponse,
): Promise<ListModelsResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    object: result.body["object"],
    data: result.body["data"].map((p) => ({
      id: p["id"],
      object: p["object"],
      created: new Date(p["created"]),
      ownedBy: p["owned_by"],
    })),
  };
}

export async function list(
  context: Client,
  options: ModelsListOptions = { requestOptions: {} },
): Promise<ListModelsResponse> {
  const result = await _listSend(context, options);
  return _listDeserialize(result);
}

export function _retrieveSend(
  context: Client,
  model: string,
  options: ModelsRetrieveOptions = { requestOptions: {} },
): StreamableMethod<ModelsRetrieve200Response | ModelsRetrieveDefaultResponse> {
  return context
    .path("/models/{model}", model)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _retrieveDeserialize(
  result: ModelsRetrieve200Response | ModelsRetrieveDefaultResponse,
): Promise<Model> {
  if (isUnexpected(result)) {
    throw createRestError(result);
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
  options: ModelsRetrieveOptions = { requestOptions: {} },
): Promise<Model> {
  const result = await _retrieveSend(context, model, options);
  return _retrieveDeserialize(result);
}

export function _$deleteSend(
  context: Client,
  model: string,
  options: ModelsDeleteOptions = { requestOptions: {} },
): StreamableMethod<ModelsDelete200Response | ModelsDeleteDefaultResponse> {
  return context
    .path("/models/{model}", model)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result: ModelsDelete200Response | ModelsDeleteDefaultResponse,
): Promise<DeleteModelResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    deleted: result.body["deleted"],
  };
}

/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  model: string,
  options: ModelsDeleteOptions = { requestOptions: {} },
): Promise<DeleteModelResponse> {
  const result = await _$deleteSend(context, model, options);
  return _$deleteDeserialize(result);
}
