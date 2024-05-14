// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { IsUnknownAdditionalPropertiesDerived } from "../../models/models.js";
import { get, put } from "../../api/isUnknownDerived/index.js";
import {
  IsUnknownDerivedGetOptionalParams,
  IsUnknownDerivedPutOptionalParams,
} from "../../models/options.js";

export interface IsUnknownDerivedOperations {
  get: (
    options?: IsUnknownDerivedGetOptionalParams,
  ) => Promise<IsUnknownAdditionalPropertiesDerived>;
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
