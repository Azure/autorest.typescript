// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { IsStringAdditionalProperties } from "../../models/models.js";
import { get, put } from "../../api/isString/index.js";
import {
  IsStringGetOptionalParams,
  IsStringPutOptionalParams,
} from "../../models/options.js";

/** Interface representing a IsString operations. */
export interface IsStringOperations {
  /** Get call */
  get: (
    options?: IsStringGetOptionalParams,
  ) => Promise<IsStringAdditionalProperties>;
  /** Put operation */
  put: (
    body: IsStringAdditionalProperties,
    options?: IsStringPutOptionalParams,
  ) => Promise<void>;
}

export function getIsString(context: AdditionalPropertiesContext) {
  return {
    get: (options?: IsStringGetOptionalParams) => get(context, options),
    put: (
      body: IsStringAdditionalProperties,
      options?: IsStringPutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getIsStringOperations(
  context: AdditionalPropertiesContext,
): IsStringOperations {
  return {
    ...getIsString(context),
  };
}
