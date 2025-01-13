// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OpenAIContext } from "../../api/openAIContext.js";
import { $delete, retrieve, list } from "../../api/models/index.js";
import {
  ListModelsResponse,
  Model,
  DeleteModelResponse,
} from "../../models/models.js";
import {
  ModelsDeleteOptionalParams,
  ModelsRetrieveOptionalParams,
  ModelsListOptionalParams,
} from "../../api/options.js";

/** Interface representing a Models operations. */
export interface ModelsOperations {
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    model: string,
    options?: ModelsDeleteOptionalParams,
  ) => Promise<DeleteModelResponse>;
  retrieve: (
    model: string,
    options?: ModelsRetrieveOptionalParams,
  ) => Promise<Model>;
  list: (options?: ModelsListOptionalParams) => Promise<ListModelsResponse>;
}

function _getModels(context: OpenAIContext) {
  return {
    delete: (model: string, options?: ModelsDeleteOptionalParams) =>
      $delete(context, model, options),
    retrieve: (model: string, options?: ModelsRetrieveOptionalParams) =>
      retrieve(context, model, options),
    list: (options?: ModelsListOptionalParams) => list(context, options),
  };
}

export function getModelsOperations(context: OpenAIContext): ModelsOperations {
  return {
    ..._getModels(context),
  };
}
