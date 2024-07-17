// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { DifferentSpreadModelArrayDerived } from "../../models/models.js";
import { get, put } from "../../api/extendsDifferentSpreadModelArray/index.js";
import {
  ExtendsDifferentSpreadModelArrayGetOptionalParams,
  ExtendsDifferentSpreadModelArrayPutOptionalParams,
} from "../../api/options.js";

/** Interface representing a ExtendsDifferentSpreadModelArray operations. */
export interface ExtendsDifferentSpreadModelArrayOperations {
  /** Get call */
  get: (
    options?: ExtendsDifferentSpreadModelArrayGetOptionalParams,
  ) => Promise<DifferentSpreadModelArrayDerived>;
  /** Put operation */
  put: (
    body: DifferentSpreadModelArrayDerived,
    options?: ExtendsDifferentSpreadModelArrayPutOptionalParams,
  ) => Promise<void>;
}

export function getExtendsDifferentSpreadModelArray(
  context: AdditionalPropertiesContext,
) {
  return {
    get: (options?: ExtendsDifferentSpreadModelArrayGetOptionalParams) =>
      get(context, options),
    put: (
      body: DifferentSpreadModelArrayDerived,
      options?: ExtendsDifferentSpreadModelArrayPutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getExtendsDifferentSpreadModelArrayOperations(
  context: AdditionalPropertiesContext,
): ExtendsDifferentSpreadModelArrayOperations {
  return {
    ...getExtendsDifferentSpreadModelArray(context),
  };
}
