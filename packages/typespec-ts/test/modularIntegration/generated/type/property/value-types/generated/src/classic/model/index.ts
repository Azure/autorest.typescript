// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/valueTypesContext.js";
import { ModelProperty } from "../../models/models.js";
import { modelGet, modelPut } from "../../api/model/index.js";
import {
  ModelGetOptionalParams,
  ModelPutOptionalParams,
} from "../../api/options.js";

/** Interface representing a Model operations. */
export interface ModelOperations {
  /** Get call */
  get: (options?: ModelGetOptionalParams) => Promise<ModelProperty>;
  /** Put operation */
  put: (body: ModelProperty, options?: ModelPutOptionalParams) => Promise<void>;
}

export function getModel(context: ValueTypesContext) {
  return {
    get: (options?: ModelGetOptionalParams) => modelGet(context, options),
    put: (body: ModelProperty, options?: ModelPutOptionalParams) =>
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
