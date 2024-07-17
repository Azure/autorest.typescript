// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ArrayContext } from "../../api/arrayContext.js";
import { InnerModel } from "../../models/models.js";
import {
  nullableModelValueGet,
  nullableModelValuePut,
} from "../../api/nullableModelValue/index.js";
import {
  NullableModelValueGetOptionalParams,
  NullableModelValuePutOptionalParams,
} from "../../api/options.js";

/** Interface representing a NullableModelValue operations. */
export interface NullableModelValueOperations {
  get: (
    options?: NullableModelValueGetOptionalParams,
  ) => Promise<(InnerModel | null)[]>;
  put: (
    body: (InnerModel | null)[],
    options?: NullableModelValuePutOptionalParams,
  ) => Promise<void>;
}

export function getNullableModelValue(context: ArrayContext) {
  return {
    get: (options?: NullableModelValueGetOptionalParams) =>
      nullableModelValueGet(context, options),
    put: (
      body: (InnerModel | null)[],
      options?: NullableModelValuePutOptionalParams,
    ) => nullableModelValuePut(context, body, options),
  };
}

export function getNullableModelValueOperations(
  context: ArrayContext,
): NullableModelValueOperations {
  return {
    ...getNullableModelValue(context),
  };
}
