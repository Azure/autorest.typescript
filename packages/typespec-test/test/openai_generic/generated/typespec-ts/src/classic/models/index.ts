// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIContext } from "../../api/OpenAIContext.js";
import {
  ListModelsResponse,
  Model,
  DeleteModelResponse,
} from "../../models/models.js";
import { list, retrieve, $delete } from "../../api/models/index.js";
import {
  ModelsListOptionalParams,
  ModelsRetrieveOptionalParams,
  ModelsDeleteOptionalParams,
} from "../../models/options.js";

export interface Models {
  list: (options?: ModelsListOptionalParams) => Promise<ListModelsResponse>;
  retrieve: (
    model: string,
    options?: ModelsRetrieveOptionalParams,
  ) => Promise<Model>;
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

export function getModelsOperations(context: OpenAIContext): Models {
  return {
    ...getModels(context),
  };
}
