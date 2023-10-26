// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIContext } from "../../api/OpenAIContext.js";
import {
  list,
  retrieve,
  deleteOperation,
  ListOptions,
  RetrieveOptions,
  DeleteOptions,
} from "../../api/models/index.js";
import {
  ListModelsResponse,
  Model,
  DeleteModelResponse,
} from "../../models/models.js";

export interface ModelsOperations {
  models: {
    list: (options?: ListOptions) => Promise<ListModelsResponse>;
    retrieve: (model: string, options?: RetrieveOptions) => Promise<Model>;
    deleteOperation: (
      model: string,
      options?: DeleteOptions
    ) => Promise<DeleteModelResponse>;
  };
}

export function getModels(context: OpenAIContext) {
  return {
    list: (options?: ListOptions) => list(context, options),
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
