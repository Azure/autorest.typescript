// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ArrayContext } from "../../api/arrayContext.js";
import {
  nullableInt32ValueGet,
  nullableInt32ValuePut,
} from "../../api/nullableInt32Value/index.js";
import {
  NullableInt32ValueGetOptionalParams,
  NullableInt32ValuePutOptionalParams,
} from "../../api/options.js";

/** Interface representing a NullableInt32Value operations. */
export interface NullableInt32ValueOperations {
  get: (
    options?: NullableInt32ValueGetOptionalParams,
  ) => Promise<(number | null)[]>;
  put: (
    body: (number | null)[],
    options?: NullableInt32ValuePutOptionalParams,
  ) => Promise<void>;
}

export function getNullableInt32Value(context: ArrayContext) {
  return {
    get: (options?: NullableInt32ValueGetOptionalParams) =>
      nullableInt32ValueGet(context, options),
    put: (
      body: (number | null)[],
      options?: NullableInt32ValuePutOptionalParams,
    ) => nullableInt32ValuePut(context, body, options),
  };
}

export function getNullableInt32ValueOperations(
  context: ArrayContext,
): NullableInt32ValueOperations {
  return {
    ...getNullableInt32Value(context),
  };
}
