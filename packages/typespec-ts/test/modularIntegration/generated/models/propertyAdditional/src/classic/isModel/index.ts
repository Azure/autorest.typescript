// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { ModelForRecord } from "../../models/models.js";
import { get, put } from "../../api/isModel/index.js";
import {
  IsModelGetOptionalParams,
  IsModelPutOptionalParams,
} from "../../models/options.js";

export interface IsModelOperations {
  get: (
    options?: IsModelGetOptionalParams,
  ) => Promise<Record<string, ModelForRecord>>;
  put: (
    body: Record<string, ModelForRecord>,
    options?: IsModelPutOptionalParams,
  ) => Promise<void>;
}

export function getIsModel(context: AdditionalPropertiesContext) {
  return {
    get: (options?: IsModelGetOptionalParams) => get(context, options),
    put: (
      body: Record<string, ModelForRecord>,
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
