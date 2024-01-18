// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DictionaryContext } from "../../api/DictionaryContext.js";
import { InnerModel } from "../../models/models.js";
import { modelValueGet, modelValuePut } from "../../api/modelValue/index.js";
import {
  ModelValueGetOptions,
  ModelValuePutOptions,
} from "../../models/options.js";

export interface ModelValueOperations {
  get: (options?: ModelValueGetOptions) => Promise<Record<string, InnerModel>>;
  put: (
    body: Record<string, InnerModel>,
    options?: ModelValuePutOptions,
  ) => Promise<void>;
}

export function getModelValue(context: DictionaryContext) {
  return {
    get: (options?: ModelValueGetOptions) => modelValueGet(context, options),
    put: (body: Record<string, InnerModel>, options?: ModelValuePutOptions) =>
      modelValuePut(context, body, options),
  };
}

export function getModelValueOperations(
  context: DictionaryContext,
): ModelValueOperations {
  return {
    ...getModelValue(context),
  };
}
