// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { get, put } from "../../api/spreadRecordUnion/index.js";
import {
  SpreadRecordUnionGetOptionalParams,
  SpreadRecordUnionPutOptionalParams,
} from "../../models/options.js";

export interface SpreadRecordUnionOperations {
  get: (
    options?: SpreadRecordUnionGetOptionalParams,
  ) => Promise<Record<string, string | number>>;
  put: (
    body: Record<string, string | number>,
    options?: SpreadRecordUnionPutOptionalParams,
  ) => Promise<void>;
}

export function getSpreadRecordUnion(context: AdditionalPropertiesContext) {
  return {
    get: (options?: SpreadRecordUnionGetOptionalParams) =>
      get(context, options),
    put: (
      body: Record<string, string | number>,
      options?: SpreadRecordUnionPutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getSpreadRecordUnionOperations(
  context: AdditionalPropertiesContext,
): SpreadRecordUnionOperations {
  return {
    ...getSpreadRecordUnion(context),
  };
}
