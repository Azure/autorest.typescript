// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { IsModelAdditionalProperties } from "../../models/models.js";
import { get, put } from "../../api/isModel/index.js";
import {
  IsModelGetOptionalParams,
  IsModelPutOptionalParams,
} from "../../models/options.js";

/** Interface representing a IsModel operations. */
export interface IsModelOperations {
  /** Get call */
  get: (
    options?: IsModelGetOptionalParams,
  ) => Promise<IsModelAdditionalProperties>;
  /** Put operation */
  put: (
    body: IsModelAdditionalProperties,
    options?: IsModelPutOptionalParams,
  ) => Promise<void>;
}

export function getIsModel(context: AdditionalPropertiesContext) {
  return {
    get: (options?: IsModelGetOptionalParams) => get(context, options),
    put: (
      body: IsModelAdditionalProperties,
      options?: IsModelPutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getIsModelOperations(
  context: AdditionalPropertiesContext,
): IsModelOperations {
  return {
    ...getIsModel(context),
  };
}
