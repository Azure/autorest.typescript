// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ArrayContext } from "../../api/ArrayContext.js";
import {
  nullableFloatValueGet,
  nullableFloatValuePut,
} from "../../api/nullableFloatValue/index.js";
import {
  NullableFloatValueGetOptions,
  NullableFloatValuePutOptions,
} from "../../models/options.js";

export interface NullableFloatValueOperations {
  get: (options?: NullableFloatValueGetOptions) => Promise<(number | null)[]>;
  put: (
    body: (number | null)[],
    options?: NullableFloatValuePutOptions,
  ) => Promise<void>;
}

export function getNullableFloatValue(context: ArrayContext) {
  return {
    get: (options?: NullableFloatValueGetOptions) =>
      nullableFloatValueGet(context, options),
    put: (body: (number | null)[], options?: NullableFloatValuePutOptions) =>
      nullableFloatValuePut(context, body, options),
  };
}

export function getNullableFloatValueOperations(
  context: ArrayContext,
): NullableFloatValueOperations {
  return {
    ...getNullableFloatValue(context),
  };
}
