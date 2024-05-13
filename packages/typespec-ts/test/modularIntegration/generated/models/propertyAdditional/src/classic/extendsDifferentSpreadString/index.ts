// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { DifferentSpreadStringDerived } from "../../models/models.js";
import { get, put } from "../../api/extendsDifferentSpreadString/index.js";
import {
  ExtendsDifferentSpreadStringGetOptionalParams,
  ExtendsDifferentSpreadStringPutOptionalParams,
} from "../../models/options.js";

export interface ExtendsDifferentSpreadStringOperations {
  get: (
    options?: ExtendsDifferentSpreadStringGetOptionalParams,
  ) => Promise<DifferentSpreadStringDerived>;
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
