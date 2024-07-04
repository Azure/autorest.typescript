// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { DifferentSpreadModelRecord } from "../../models/models.js";
import { get, put } from "../../api/spreadDifferentModel/index.js";
import {
  SpreadDifferentModelGetOptionalParams,
  SpreadDifferentModelPutOptionalParams,
} from "../../models/options.js";

/** Interface representing a SpreadDifferentModel operations. */
export interface SpreadDifferentModelOperations {
  /** Get call */
  get: (
    options?: SpreadDifferentModelGetOptionalParams,
  ) => Promise<DifferentSpreadModelRecord>;
  /** Put operation */
  put: (
    body: DifferentSpreadModelRecord,
    options?: SpreadDifferentModelPutOptionalParams,
  ) => Promise<void>;
}

export function getSpreadDifferentModel(context: AdditionalPropertiesContext) {
  return {
    get: (options?: SpreadDifferentModelGetOptionalParams) =>
      get(context, options),
    put: (
      body: DifferentSpreadModelRecord,
      options?: SpreadDifferentModelPutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getSpreadDifferentModelOperations(
  context: AdditionalPropertiesContext,
): SpreadDifferentModelOperations {
  return {
    ...getSpreadDifferentModel(context),
  };
}
