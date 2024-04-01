// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ArrayContext } from "../../api/ArrayContext.js";
import {
  nullableFloatValueGet,
  nullableFloatValuePut,
} from "../../api/nullableFloatValue/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface NullableFloatValueOperations {
  get: (options?: GetOptions) => Promise<(number | null)[]>;
  put: (body: (number | null)[], options?: PutOptions) => Promise<void>;
}

export function getNullableFloatValue(context: ArrayContext) {
  return {
    get: (options?: GetOptions) => nullableFloatValueGet(context, options),
    put: (body: (number | null)[], options?: PutOptions) =>
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
