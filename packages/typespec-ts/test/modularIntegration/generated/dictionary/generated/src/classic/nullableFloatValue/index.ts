// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DictionaryContext } from "../../api/DictionaryContext.js";
import {
  nullableFloatValueGet,
  nullableFloatValuePut,
} from "../../api/nullableFloatValue/index.js";
import {
  NullableFloatValueGetOptions,
  NullableFloatValuePutOptions,
} from "../../models/options.js";

export interface NullableFloatValueOperations {
  get: (
    options?: NullableFloatValueGetOptions,
  ) => Promise<Record<string, number | null>>;
  put: (
    body: Record<string, number | null>,
    options?: NullableFloatValuePutOptions,
  ) => Promise<void>;
}

export function getNullableFloatValue(context: DictionaryContext) {
  return {
    get: (options?: NullableFloatValueGetOptions) =>
      nullableFloatValueGet(context, options),
    put: (
      body: Record<string, number | null>,
      options?: NullableFloatValuePutOptions,
    ) => nullableFloatValuePut(context, body, options),
  };
}

export function getNullableFloatValueOperations(
  context: DictionaryContext,
): NullableFloatValueOperations {
  return {
    ...getNullableFloatValue(context),
  };
}
