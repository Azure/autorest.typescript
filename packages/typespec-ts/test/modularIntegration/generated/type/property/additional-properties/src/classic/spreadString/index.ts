// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { SpreadStringRecord } from "../../models/models.js";
import { get, put } from "../../api/spreadString/index.js";
import {
  SpreadStringGetOptionalParams,
  SpreadStringPutOptionalParams,
} from "../../models/options.js";

export interface SpreadStringOperations {
  get: (options?: SpreadStringGetOptionalParams) => Promise<SpreadStringRecord>;
  put: (
    body: SpreadStringRecord,
    options?: SpreadStringPutOptionalParams,
  ) => Promise<void>;
}

export function getSpreadString(context: AdditionalPropertiesContext) {
  return {
    get: (options?: SpreadStringGetOptionalParams) => get(context, options),
    put: (body: SpreadStringRecord, options?: SpreadStringPutOptionalParams) =>
      put(context, body, options),
  };
}

export function getSpreadStringOperations(
  context: AdditionalPropertiesContext,
): SpreadStringOperations {
  return {
    ...getSpreadString(context),
  };
}
