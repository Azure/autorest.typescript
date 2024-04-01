// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ArrayContext } from "../../api/ArrayContext.js";
import { InnerModel } from "../../models/models.js";
import { modelValueGet, modelValuePut } from "../../api/modelValue/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface ModelValueOperations {
  get: (options?: GetOptions) => Promise<InnerModel[]>;
  put: (body: InnerModel[], options?: PutOptions) => Promise<void>;
}

export function getModelValue(context: ArrayContext) {
  return {
    get: (options?: GetOptions) => modelValueGet(context, options),
    put: (body: InnerModel[], options?: PutOptions) =>
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
