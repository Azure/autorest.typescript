// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { ModelProperty } from "../../models/models.js";
import { modelGet, modelPut } from "../../api/model/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface ModelOperations {
  get: (options?: GetOptions) => Promise<ModelProperty>;
  put: (body: ModelProperty, options?: PutOptions) => Promise<void>;
}

export function getModel(context: ValueTypesContext) {
  return {
    get: (options?: GetOptions) => modelGet(context, options),
    put: (body: ModelProperty, options?: PutOptions) =>
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
