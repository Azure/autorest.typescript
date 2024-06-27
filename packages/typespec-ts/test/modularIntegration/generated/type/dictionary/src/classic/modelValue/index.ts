// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DictionaryContext } from "../../api/dictionaryContext.js";
import { InnerModel } from "../../models/models.js";
import { get, put } from "../../api/modelValue/index.js";
import {
  ModelValueGetOptionalParams,
  ModelValuePutOptionalParams,
} from "../../models/options.js";

export interface ModelValueOperations {
  get: (
    options?: ModelValueGetOptionalParams,
  ) => Promise<Record<string, InnerModel>>;
  put: (
    body: Record<string, InnerModel>,
    options?: ModelValuePutOptionalParams,
  ) => Promise<void>;
}

export function getModelValue(context: DictionaryContext) {
  return {
    get: (options?: ModelValueGetOptionalParams) => get(context, options),
    put: (
      body: Record<string, InnerModel>,
      options?: ModelValuePutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getModelValueOperations(
  context: DictionaryContext,
): ModelValueOperations {
  return {
    ...getModelValue(context),
  };
}
