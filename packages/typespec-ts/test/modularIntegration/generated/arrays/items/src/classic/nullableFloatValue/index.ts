// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ArrayContext } from "../../api/arrayContext.js";
import {
  nullableFloatValueGet,
  nullableFloatValuePut,
} from "../../api/nullableFloatValue/index.js";
import {
  NullableFloatValueGetOptionalParams,
  NullableFloatValuePutOptionalParams,
} from "../../models/options.js";

export interface NullableFloatValueOperations {
  get: (
    options?: NullableFloatValueGetOptionalParams,
  ) => Promise<(number | null)[]>;
  put: (
    body: (number | null)[],
    options?: NullableFloatValuePutOptionalParams,
  ) => Promise<void>;
}

export function getNullableFloatValue(context: ArrayContext) {
  return {
    get: (options?: NullableFloatValueGetOptionalParams) =>
      nullableFloatValueGet(context, options),
    put: (
      body: (number | null)[],
      options?: NullableFloatValuePutOptionalParams,
    ) => nullableFloatValuePut(context, body, options),
  };
}

export function getNullableFloatValueOperations(
  context: ArrayContext,
): NullableFloatValueOperations {
  return {
    ...getNullableFloatValue(context),
  };
}
