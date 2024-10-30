// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OpenAIContext } from "../../api/openAiContext.js";
import { list, retrieve, $delete } from "../../api/models/index.js";
import {
  ModelsListOptionalParams,
  ModelsRetrieveOptionalParams,
  ModelsDeleteOptionalParams,
} from "../../api/options.js";
import {
  ListModelsResponse,
  Model,
  DeleteModelResponse,
} from "../../models/models.js";

/** Interface representing a Models operations. */
export interface ModelsOperations {
  list: (options?: ModelsListOptionalParams) => Promise<ListModelsResponse>;
  retrieve: (
    model: string,
    options?: ModelsRetrieveOptionalParams,
  ) => Promise<Model>;
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    model: string,
    options?: ModelsDeleteOptionalParams,
  ) => Promise<DeleteModelResponse>;
}

export function getModels(context: OpenAIContext) {
  return {
    list: (options?: ModelsListOptionalParams) => list(context, options),
    retrieve: (model: string, options?: ModelsRetrieveOptionalParams) =>
      retrieve(context, model, options),
    delete: (model: string, options?: ModelsDeleteOptionalParams) =>
      $delete(context, model, options),
  };
}

export function getModelsOperations(context: OpenAIContext): ModelsOperations {
  return {
    ...getModels(context),
  };
}
