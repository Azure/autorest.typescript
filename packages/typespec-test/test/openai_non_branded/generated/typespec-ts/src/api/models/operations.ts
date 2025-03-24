// Licensed under the MIT License.

import { OpenAIContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  ListModelsResponse,
  listModelsResponseDeserializer,
  Model,
  modelDeserializer,
  DeleteModelResponse,
  deleteModelResponseDeserializer,
} from "../../models/models.js";
import {
  ModelsDeleteOptionalParams,
  ModelsRetrieveOptionalParams,
  ModelsListOptionalParams,
} from "./options.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _$deleteSend(
  context: Client,
  model: string,
  options: ModelsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/models/{model}",
    {
      model: model,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _$deleteDeserialize(
  result: PathUncheckedResponse,
): Promise<DeleteModelResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return deleteModelResponseDeserializer(result.body);
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

export function _retrieveSend(
  context: Client,
  model: string,
  options: ModelsRetrieveOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/models/{model}",
    {
      model: model,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _retrieveDeserialize(
  result: PathUncheckedResponse,
): Promise<Model> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return modelDeserializer(result.body);
}

export async function retrieve(
  context: Client,
  model: string,
  options: ModelsRetrieveOptionalParams = { requestOptions: {} },
): Promise<Model> {
  const result = await _retrieveSend(context, model, options);
  return _retrieveDeserialize(result);
}

export function _listSend(
  context: Client,
  options: ModelsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/models")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<ListModelsResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return listModelsResponseDeserializer(result.body);
}

export async function list(
  context: Client,
  options: ModelsListOptionalParams = { requestOptions: {} },
): Promise<ListModelsResponse> {
  const result = await _listSend(context, options);
  return _listDeserialize(result);
}
