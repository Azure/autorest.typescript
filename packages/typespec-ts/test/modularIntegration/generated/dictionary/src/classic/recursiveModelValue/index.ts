// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DictionaryContext } from "../../api/DictionaryContext.js";
import { InnerModel } from "../../models/models.js";
import {
  recursiveModelValueGet,
  recursiveModelValuePut,
} from "../../api/recursiveModelValue/index.js";
import {
  RecursiveModelValueGetOptions,
  RecursiveModelValuePutOptions,
} from "../../models/options.js";

export interface RecursiveModelValueOperations {
  get: (
    options?: RecursiveModelValueGetOptions
  ) => Promise<Record<string, InnerModel>>;
  put: (
    body: Record<string, InnerModel>,
    options?: RecursiveModelValuePutOptions
  ) => Promise<void>;
}

export function getRecursiveModelValue(context: DictionaryContext) {
  return {
    get: (options?: RecursiveModelValueGetOptions) =>
      recursiveModelValueGet(context, options),
    put: (
      body: Record<string, InnerModel>,
      options?: RecursiveModelValuePutOptions
    ) => recursiveModelValuePut(context, body, options),
  };
}

export function getRecursiveModelValueOperations(
  context: DictionaryContext
): RecursiveModelValueOperations {
  return {
    ...getRecursiveModelValue(context),
  };
}
