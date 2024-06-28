// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DictionaryContext } from "../../api/dictionaryContext.js";
import { get, put } from "../../api/nullableFloatValue/index.js";
import {
  NullableFloatValueGetOptionalParams,
  NullableFloatValuePutOptionalParams,
} from "../../models/options.js";

export interface NullableFloatValueOperations {
  get: (
    options?: NullableFloatValueGetOptionalParams,
  ) => Promise<Record<string, number | null>>;
  put: (
    body: Record<string, number | null>,
    options?: NullableFloatValuePutOptionalParams,
  ) => Promise<void>;
}

export function getNullableFloatValue(context: DictionaryContext) {
  return {
    get: (options?: NullableFloatValueGetOptionalParams) =>
      get(context, options),
    put: (
      body: Record<string, number | null>,
      options?: NullableFloatValuePutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getNullableFloatValueOperations(
  context: DictionaryContext,
): NullableFloatValueOperations {
  return {
    ...getNullableFloatValue(context),
  };
}
