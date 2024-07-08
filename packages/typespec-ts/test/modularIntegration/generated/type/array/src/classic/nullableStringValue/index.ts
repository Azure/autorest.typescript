// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ArrayContext } from "../../api/arrayContext.js";
import {
  nullableStringValueGet,
  nullableStringValuePut,
} from "../../api/nullableStringValue/index.js";
import {
  NullableStringValueGetOptionalParams,
  NullableStringValuePutOptionalParams,
} from "../../models/options.js";

/** Interface representing a NullableStringValue operations. */
export interface NullableStringValueOperations {
  get: (
    options?: NullableStringValueGetOptionalParams,
  ) => Promise<(string | null)[]>;
  put: (
    body: (string | null)[],
    options?: NullableStringValuePutOptionalParams,
  ) => Promise<void>;
}

export function getNullableStringValue(context: ArrayContext) {
  return {
    get: (options?: NullableStringValueGetOptionalParams) =>
      nullableStringValueGet(context, options),
    put: (
      body: (string | null)[],
      options?: NullableStringValuePutOptionalParams,
    ) => nullableStringValuePut(context, body, options),
  };
}

export function getNullableStringValueOperations(
  context: ArrayContext,
): NullableStringValueOperations {
  return {
    ...getNullableStringValue(context),
  };
}
