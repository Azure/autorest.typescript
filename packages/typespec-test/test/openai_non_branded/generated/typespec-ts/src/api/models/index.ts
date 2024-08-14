// Licensed under the MIT license.

import {
  ListModelsResponse,
  Model,
  DeleteModelResponse,
} from "../../models/models.js";
import {
  OpenAIContext as Client,
  ModelsDeleteOptionalParams,
  ModelsListOptionalParams,
  ModelsRetrieveOptionalParams,
} from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@typespec/ts-http-runtime";

export function _listSend(
  context: Client,
  options: ModelsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/models")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<ListModelsResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    object: result.body["object"],
    data: result.body["data"].map((p: any) => {
      return {
        id: p["id"],
        object: p["object"],
        created: new Date(p["created"]),
        ownedBy: p["owned_by"],
      };
    }),
  };
}

export async function list(
  context: Client,
  options: ModelsListOptionalParams = { requestOptions: {} },
): Promise<ListModelsResponse> {
  const result = await _listSend(context, options);
  return _listDeserialize(result);
}

export function _retrieveSend(
  context: Client,
  model: string,
  options: ModelsRetrieveOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/models/{model}", model)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _retrieveDeserialize(
  result: PathUncheckedResponse,
): Promise<Model> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
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
  options: ModelsRetrieveOptionalParams = { requestOptions: {} },
): Promise<Model> {
  const result = await _retrieveSend(context, model, options);
  return _retrieveDeserialize(result);
}

export function _$deleteSend(
  context: Client,
  model: string,
  options: ModelsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/models/{model}", model)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result: PathUncheckedResponse,
): Promise<DeleteModelResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
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
  options: ModelsDeleteOptionalParams = { requestOptions: {} },
): Promise<DeleteModelResponse> {
  const result = await _$deleteSend(context, model, options);
  return _$deleteDeserialize(result);
}
