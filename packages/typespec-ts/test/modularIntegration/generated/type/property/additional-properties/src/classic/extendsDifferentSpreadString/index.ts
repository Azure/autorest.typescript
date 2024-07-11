// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { DifferentSpreadStringDerived } from "../../models/models.js";
import { get, put } from "../../api/extendsDifferentSpreadString/index.js";
import {
  ExtendsDifferentSpreadStringGetOptionalParams,
  ExtendsDifferentSpreadStringPutOptionalParams,
} from "../../api/options.js";

/** Interface representing a ExtendsDifferentSpreadString operations. */
export interface ExtendsDifferentSpreadStringOperations {
  /** Get call */
  get: (
    options?: ExtendsDifferentSpreadStringGetOptionalParams,
  ) => Promise<DifferentSpreadStringDerived>;
  /** Put operation */
  put: (
    body: DifferentSpreadStringDerived,
    options?: ExtendsDifferentSpreadStringPutOptionalParams,
  ) => Promise<void>;
}

export function getExtendsDifferentSpreadString(
  context: AdditionalPropertiesContext,
) {
  return {
    get: (options?: ExtendsDifferentSpreadStringGetOptionalParams) =>
      get(context, options),
    put: (
      body: DifferentSpreadStringDerived,
      options?: ExtendsDifferentSpreadStringPutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getExtendsDifferentSpreadStringOperations(
  context: AdditionalPropertiesContext,
): ExtendsDifferentSpreadStringOperations {
  return {
    ...getExtendsDifferentSpreadString(context),
  };
}
