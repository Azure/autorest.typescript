// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  listModels,
  retrieve,
  deleteOperation,
} from "../../api/models/index.js";
import { OpenAIContext } from "../../api/OpenAIContext.js";
import {
  ListModelsResponse,
  Model,
  DeleteModelResponse,
} from "../../models/models.js";
import {
  ListModelsOptions,
  RetrieveOptions,
  DeleteOptions,
} from "../../models/options.js";

export interface ModelsOperations {
  models: {
    listModels: (options?: ListModelsOptions) => Promise<ListModelsResponse>;
    retrieve: (model: string, options?: RetrieveOptions) => Promise<Model>;
    deleteOperation: (
      model: string,
      options?: DeleteOptions
    ) => Promise<DeleteModelResponse>;
  };
}

export function getModels(context: OpenAIContext) {
  return {
    listModels: (options?: ListModelsOptions) => listModels(context, options),
    retrieve: (model: string, options?: RetrieveOptions) =>
      retrieve(context, model, options),
    deleteOperation: (model: string, options?: DeleteOptions) =>
      deleteOperation(context, model, options),
  };
}

export function getModelsOperations(context: OpenAIContext): ModelsOperations {
  return {
    models: getModels(context),
  };
}
