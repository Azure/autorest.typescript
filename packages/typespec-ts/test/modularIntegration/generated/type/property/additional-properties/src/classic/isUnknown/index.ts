// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { IsUnknownAdditionalProperties } from "../../models/models.js";
import { get, put } from "../../api/isUnknown/index.js";
import {
  IsUnknownGetOptionalParams,
  IsUnknownPutOptionalParams,
} from "../../models/options.js";

/** Interface representing a IsUnknown operations. */
export interface IsUnknownOperations {
  /** Get call */
  get: (
    options?: IsUnknownGetOptionalParams,
  ) => Promise<IsUnknownAdditionalProperties>;
  /** Put operation */
  put: (
    body: IsUnknownAdditionalProperties,
    options?: IsUnknownPutOptionalParams,
  ) => Promise<void>;
}

export function getIsUnknown(context: AdditionalPropertiesContext) {
  return {
    get: (options?: IsUnknownGetOptionalParams) => get(context, options),
    put: (
      body: IsUnknownAdditionalProperties,
      options?: IsUnknownPutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getIsUnknownOperations(
  context: AdditionalPropertiesContext,
): IsUnknownOperations {
  return {
    ...getIsUnknown(context),
  };
}
