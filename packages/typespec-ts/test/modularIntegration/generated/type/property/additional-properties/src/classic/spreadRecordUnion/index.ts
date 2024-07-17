// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { SpreadRecordForUnion } from "../../models/models.js";
import { get, put } from "../../api/spreadRecordUnion/index.js";
import {
  SpreadRecordUnionGetOptionalParams,
  SpreadRecordUnionPutOptionalParams,
} from "../../api/options.js";

/** Interface representing a SpreadRecordUnion operations. */
export interface SpreadRecordUnionOperations {
  /** Get call */
  get: (
    options?: SpreadRecordUnionGetOptionalParams,
  ) => Promise<SpreadRecordForUnion>;
  /** Put operation */
  put: (
    body: SpreadRecordForUnion,
    options?: SpreadRecordUnionPutOptionalParams,
  ) => Promise<void>;
}

export function getSpreadRecordUnion(context: AdditionalPropertiesContext) {
  return {
    get: (options?: SpreadRecordUnionGetOptionalParams) =>
      get(context, options),
    put: (
      body: SpreadRecordForUnion,
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
