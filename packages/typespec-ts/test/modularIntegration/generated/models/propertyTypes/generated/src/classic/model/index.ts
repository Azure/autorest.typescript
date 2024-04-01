// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { ModelProperty } from "../../models/models.js";
import { modelGet, modelPut } from "../../api/model/index.js";
import { ModelGetOptions, ModelPutOptions } from "../../models/options.js";

export interface ModelOperations {
  get: (options?: ModelGetOptions) => Promise<ModelProperty>;
  put: (body: ModelProperty, options?: ModelPutOptions) => Promise<void>;
}

export function getModel(context: ValueTypesContext) {
  return {
    get: (options?: ModelGetOptions) => modelGet(context, options),
    put: (body: ModelProperty, options?: ModelPutOptions) =>
      modelPut(context, body, options),
  };
}

export function getModelOperations(
  context: ValueTypesContext,
): ModelOperations {
  return {
    ...getModel(context),
  };
}
