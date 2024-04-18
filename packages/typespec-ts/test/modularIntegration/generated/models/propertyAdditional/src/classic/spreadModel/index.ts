// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { ModelForRecord } from "../../models/models.js";
import { get, put } from "../../api/spreadModel/index.js";
import {
  SpreadModelGetOptionalParams,
  SpreadModelPutOptionalParams,
} from "../../models/options.js";

export interface SpreadModelOperations {
  get: (
    options?: SpreadModelGetOptionalParams,
  ) => Promise<Record<string, ModelForRecord>>;
  put: (
    body: Record<string, ModelForRecord>,
    options?: SpreadModelPutOptionalParams,
  ) => Promise<void>;
}

export function getSpreadModel(context: AdditionalPropertiesContext) {
  return {
    get: (options?: SpreadModelGetOptionalParams) => get(context, options),
    put: (
      body: Record<string, ModelForRecord>,
      options?: SpreadModelPutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getSpreadModelOperations(
  context: AdditionalPropertiesContext,
): SpreadModelOperations {
  return {
    ...getSpreadModel(context),
  };
}
