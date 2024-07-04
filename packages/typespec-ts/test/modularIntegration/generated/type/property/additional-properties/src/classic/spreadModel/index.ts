// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { SpreadModelRecord } from "../../models/models.js";
import { get, put } from "../../api/spreadModel/index.js";
import {
  SpreadModelGetOptionalParams,
  SpreadModelPutOptionalParams,
} from "../../models/options.js";

/** Interface representing a SpreadModel operations. */
export interface SpreadModelOperations {
  /** Get call */
  get: (options?: SpreadModelGetOptionalParams) => Promise<SpreadModelRecord>;
  /** Put operation */
  put: (
    body: SpreadModelRecord,
    options?: SpreadModelPutOptionalParams,
  ) => Promise<void>;
}

export function getSpreadModel(context: AdditionalPropertiesContext) {
  return {
    get: (options?: SpreadModelGetOptionalParams) => get(context, options),
    put: (body: SpreadModelRecord, options?: SpreadModelPutOptionalParams) =>
      put(context, body, options),
  };
}

export function getSpreadModelOperations(
  context: AdditionalPropertiesContext,
): SpreadModelOperations {
  return {
    ...getSpreadModel(context),
  };
}
