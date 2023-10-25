// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Client } from "@azure-rest/core-client";
import { listModels, retrieve, deleteOperation } from "../../api/models";
import {
  ListModelsOptions,
  ListModelsResponse,
  RetrieveOptions,
  Model,
  DeleteOptions,
  DeleteModelResponse,
} from "../../models";

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

export function getModels(context: Client) {
  return {
    listModels: (options?: ListModelsOptions) => listModels(context, options),
    retrieve: (model: string, options?: RetrieveOptions) =>
      retrieve(context, model, options),
    deleteOperation: (model: string, options?: DeleteOptions) =>
      deleteOperation(context, model, options),
  };
}

export function getModelsOperations(): ModelsOperations {
  return {
    models: getModels,
  };
}
