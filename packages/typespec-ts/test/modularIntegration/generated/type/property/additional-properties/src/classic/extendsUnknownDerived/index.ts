// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { ExtendsUnknownAdditionalPropertiesDerived } from "../../models/models.js";
import { get, put } from "../../api/extendsUnknownDerived/index.js";
import {
  ExtendsUnknownDerivedGetOptionalParams,
  ExtendsUnknownDerivedPutOptionalParams,
} from "../../models/options.js";

/** Interface representing a ExtendsUnknownDerived operations. */
export interface ExtendsUnknownDerivedOperations {
  /** Get call */
  get: (
    options?: ExtendsUnknownDerivedGetOptionalParams,
  ) => Promise<ExtendsUnknownAdditionalPropertiesDerived>;
  /** Put operation */
  put: (
    body: ExtendsUnknownAdditionalPropertiesDerived,
    options?: ExtendsUnknownDerivedPutOptionalParams,
  ) => Promise<void>;
}

export function getExtendsUnknownDerived(context: AdditionalPropertiesContext) {
  return {
    get: (options?: ExtendsUnknownDerivedGetOptionalParams) =>
      get(context, options),
    put: (
      body: ExtendsUnknownAdditionalPropertiesDerived,
      options?: ExtendsUnknownDerivedPutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getExtendsUnknownDerivedOperations(
  context: AdditionalPropertiesContext,
): ExtendsUnknownDerivedOperations {
  return {
    ...getExtendsUnknownDerived(context),
  };
}
