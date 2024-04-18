// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { ModelForRecord } from "../../models/models.js";
import { get, put } from "../../api/spreadDifferentModel/index.js";
import {
  SpreadDifferentModelGetOptionalParams,
  SpreadDifferentModelPutOptionalParams,
} from "../../models/options.js";

export interface SpreadDifferentModelOperations {
  get: (
    options?: SpreadDifferentModelGetOptionalParams,
  ) => Promise<Record<string, ModelForRecord>>;
  put: (
    body: Record<string, ModelForRecord>,
    options?: SpreadDifferentModelPutOptionalParams,
  ) => Promise<void>;
}

export function getSpreadDifferentModel(context: AdditionalPropertiesContext) {
  return {
    get: (options?: SpreadDifferentModelGetOptionalParams) =>
      get(context, options),
    put: (
      body: Record<string, ModelForRecord>,
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
