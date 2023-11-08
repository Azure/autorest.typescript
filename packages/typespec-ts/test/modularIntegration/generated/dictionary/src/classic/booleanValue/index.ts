// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DictionaryContext } from "../../api/DictionaryContext.js";
import {
  booleanValueGet,
  booleanValuePut,
} from "../../api/booleanValue/index.js";
import {
  BooleanValueGetOptions,
  BooleanValuePutOptions,
} from "../../models/options.js";

export interface BooleanValueOperations {
  get: (options?: BooleanValueGetOptions) => Promise<Record<string, boolean>>;
  put: (
    body: Record<string, boolean>,
    options?: BooleanValuePutOptions
  ) => Promise<void>;
}

export function getBooleanValue(context: DictionaryContext) {
  return {
    get: (options?: BooleanValueGetOptions) =>
      booleanValueGet(context, options),
    put: (body: Record<string, boolean>, options?: BooleanValuePutOptions) =>
      booleanValuePut(context, body, options),
  };
}

export function getBooleanValueOperations(
  context: DictionaryContext
): BooleanValueOperations {
  return {
    ...getBooleanValue(context),
  };
}
