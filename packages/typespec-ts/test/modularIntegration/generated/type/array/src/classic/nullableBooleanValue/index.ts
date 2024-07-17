// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ArrayContext } from "../../api/arrayContext.js";
import {
  nullableBooleanValueGet,
  nullableBooleanValuePut,
} from "../../api/nullableBooleanValue/index.js";
import {
  NullableBooleanValueGetOptionalParams,
  NullableBooleanValuePutOptionalParams,
} from "../../api/options.js";

/** Interface representing a NullableBooleanValue operations. */
export interface NullableBooleanValueOperations {
  get: (
    options?: NullableBooleanValueGetOptionalParams,
  ) => Promise<(boolean | null)[]>;
  put: (
    body: (boolean | null)[],
    options?: NullableBooleanValuePutOptionalParams,
  ) => Promise<void>;
}

export function getNullableBooleanValue(context: ArrayContext) {
  return {
    get: (options?: NullableBooleanValueGetOptionalParams) =>
      nullableBooleanValueGet(context, options),
    put: (
      body: (boolean | null)[],
      options?: NullableBooleanValuePutOptionalParams,
    ) => nullableBooleanValuePut(context, body, options),
  };
}

export function getNullableBooleanValueOperations(
  context: ArrayContext,
): NullableBooleanValueOperations {
  return {
    ...getNullableBooleanValue(context),
  };
}
