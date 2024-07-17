// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { IsUnknownAdditionalPropertiesDerived } from "../../models/models.js";
import { get, put } from "../../api/isUnknownDerived/index.js";
import {
  IsUnknownDerivedGetOptionalParams,
  IsUnknownDerivedPutOptionalParams,
} from "../../api/options.js";

/** Interface representing a IsUnknownDerived operations. */
export interface IsUnknownDerivedOperations {
  /** Get call */
  get: (
    options?: IsUnknownDerivedGetOptionalParams,
  ) => Promise<IsUnknownAdditionalPropertiesDerived>;
  /** Put operation */
  put: (
    body: IsUnknownAdditionalPropertiesDerived,
    options?: IsUnknownDerivedPutOptionalParams,
  ) => Promise<void>;
}

export function getIsUnknownDerived(context: AdditionalPropertiesContext) {
  return {
    get: (options?: IsUnknownDerivedGetOptionalParams) => get(context, options),
    put: (
      body: IsUnknownAdditionalPropertiesDerived,
      options?: IsUnknownDerivedPutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getIsUnknownDerivedOperations(
  context: AdditionalPropertiesContext,
): IsUnknownDerivedOperations {
  return {
    ...getIsUnknownDerived(context),
  };
}
