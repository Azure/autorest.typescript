// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ArrayContext } from "../../api/ArrayContext.js";
import { InnerModel } from "../../models/models.js";
import { modelValueGet, modelValuePut } from "../../api/modelValue/index.js";
import {
  ModelValueGetOptions,
  ModelValuePutOptions,
} from "../../models/options.js";

export interface ModelValueOperations {
  get: (options?: ModelValueGetOptions) => Promise<InnerModel[]>;
  put: (body: InnerModel[], options?: ModelValuePutOptions) => Promise<void>;
}

export function getModelValue(context: ArrayContext) {
  return {
    get: (options?: ModelValueGetOptions) => modelValueGet(context, options),
    put: (body: InnerModel[], options?: ModelValuePutOptions) =>
      modelValuePut(context, body, options),
  };
}

export function getModelValueOperations(
  context: ArrayContext,
): ModelValueOperations {
  return {
    ...getModelValue(context),
  };
}
