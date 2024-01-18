// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DictionaryContext } from "../../api/DictionaryContext.js";
import { int64ValueGet, int64ValuePut } from "../../api/int64Value/index.js";
import {
  Int64ValueGetOptions,
  Int64ValuePutOptions,
} from "../../models/options.js";

export interface Int64ValueOperations {
  get: (options?: Int64ValueGetOptions) => Promise<Record<string, number>>;
  put: (
    body: Record<string, number>,
    options?: Int64ValuePutOptions,
  ) => Promise<void>;
}

export function getInt64Value(context: DictionaryContext) {
  return {
    get: (options?: Int64ValueGetOptions) => int64ValueGet(context, options),
    put: (body: Record<string, number>, options?: Int64ValuePutOptions) =>
      int64ValuePut(context, body, options),
  };
}

export function getInt64ValueOperations(
  context: DictionaryContext,
): Int64ValueOperations {
  return {
    ...getInt64Value(context),
  };
}
