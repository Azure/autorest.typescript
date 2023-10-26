// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  modelsList,
  modelsRetrieve,
  modelsDelete,
} from "../../api/models/index.js";
import { OpenAIContext } from "../../api/OpenAIContext.js";
import {
  ListModelsResponse,
  Model,
  DeleteModelResponse,
} from "../../models/models.js";
import {
  ModelsListOptions,
  ModelsRetrieveOptions,
  ModelsDeleteOptions,
} from "../../models/options.js";

export interface ModelsOperations {
  models: {
    list: (options?: ModelsListOptions) => Promise<ListModelsResponse>;
    retrieve: (
      model: string,
      options?: ModelsRetrieveOptions
    ) => Promise<Model>;
    delete: (
      model: string,
      options?: ModelsDeleteOptions
    ) => Promise<DeleteModelResponse>;
  };
}

export function getModels(context: OpenAIContext) {
  return {
    list: (options?: ModelsListOptions) => modelsList(context, options),
    retrieve: (model: string, options?: ModelsRetrieveOptions) =>
      modelsRetrieve(context, model, options),
    delete: (model: string, options?: ModelsDeleteOptions) =>
      modelsDelete(context, model, options),
  };
}

export function getModelsOperations(context: OpenAIContext): ModelsOperations {
  return {
    models: getModels(context),
  };
}
