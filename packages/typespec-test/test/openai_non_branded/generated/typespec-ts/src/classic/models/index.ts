// Licensed under the MIT license.

import { OpenAIContext } from "../../api/OpenAIContext.js";
import {
  ListModelsResponse,
  Model,
  DeleteModelResponse,
} from "../../models/models.js";
import { list, retrieve, $delete } from "../../api/models/index.js";
import {
  ModelsListOptions,
  ModelsRetrieveOptions,
  ModelsDeleteOptions,
} from "../../models/options.js";

export interface ModelsOperations {
  list: (options?: ModelsListOptions) => Promise<ListModelsResponse>;
  retrieve: (model: string, options?: ModelsRetrieveOptions) => Promise<Model>;
  delete: (
    model: string,
    options?: ModelsDeleteOptions,
  ) => Promise<DeleteModelResponse>;
}

export function getModels(context: OpenAIContext) {
  return {
    list: (options?: ModelsListOptions) => list(context, options),
    retrieve: (model: string, options?: ModelsRetrieveOptions) =>
      retrieve(context, model, options),
    delete: (model: string, options?: ModelsDeleteOptions) =>
      $delete(context, model, options),
  };
}

export function getModelsOperations(context: OpenAIContext): ModelsOperations {
  return {
    ...getModels(context),
  };
}
