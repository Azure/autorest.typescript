// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DictionaryContext } from "../../api/DictionaryContext.js";
import { int32ValueGet, int32ValuePut } from "../../api/int32Value/index.js";
import {
  Int32ValueGetOptions,
  Int32ValuePutOptions,
} from "../../models/options.js";

export interface Int32ValueOperations {
  get: (options?: Int32ValueGetOptions) => Promise<Record<string, number>>;
  put: (
    body: Record<string, number>,
    options?: Int32ValuePutOptions
  ) => Promise<void>;
}

export function getInt32Value(context: DictionaryContext) {
  return {
    get: (options?: Int32ValueGetOptions) => int32ValueGet(context, options),
    put: (body: Record<string, number>, options?: Int32ValuePutOptions) =>
      int32ValuePut(context, body, options),
  };
}

export function getInt32ValueOperations(
  context: DictionaryContext
): Int32ValueOperations {
  return {
    ...getInt32Value(context),
  };
}
