// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DictionaryContext } from "../../api/dictionaryContext.js";
import { InnerModel } from "../../models/models.js";
import { get, put } from "../../api/recursiveModelValue/index.js";
import {
  RecursiveModelValueGetOptionalParams,
  RecursiveModelValuePutOptionalParams,
} from "../../models/options.js";

export interface RecursiveModelValueOperations {
  get: (
    options?: RecursiveModelValueGetOptionalParams,
  ) => Promise<Record<string, InnerModel>>;
  put: (
    body: Record<string, InnerModel>,
    options?: RecursiveModelValuePutOptionalParams,
  ) => Promise<void>;
}

export function getRecursiveModelValue(context: DictionaryContext) {
  return {
    get: (options?: RecursiveModelValueGetOptionalParams) =>
      get(context, options),
    put: (
      body: Record<string, InnerModel>,
      options?: RecursiveModelValuePutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getRecursiveModelValueOperations(
  context: DictionaryContext,
): RecursiveModelValueOperations {
  return {
    ...getRecursiveModelValue(context),
  };
}
