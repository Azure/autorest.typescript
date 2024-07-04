// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { SpreadRecordForDiscriminatedUnion } from "../../models/models.js";
import { get, put } from "../../api/spreadRecordDiscriminatedUnion/index.js";
import {
  SpreadRecordDiscriminatedUnionGetOptionalParams,
  SpreadRecordDiscriminatedUnionPutOptionalParams,
} from "../../models/options.js";

/** Interface representing a SpreadRecordDiscriminatedUnion operations. */
export interface SpreadRecordDiscriminatedUnionOperations {
  /** Get call */
  get: (
    options?: SpreadRecordDiscriminatedUnionGetOptionalParams,
  ) => Promise<SpreadRecordForDiscriminatedUnion>;
  /** Put operation */
  put: (
    body: SpreadRecordForDiscriminatedUnion,
    options?: SpreadRecordDiscriminatedUnionPutOptionalParams,
  ) => Promise<void>;
}

export function getSpreadRecordDiscriminatedUnion(
  context: AdditionalPropertiesContext,
) {
  return {
    get: (options?: SpreadRecordDiscriminatedUnionGetOptionalParams) =>
      get(context, options),
    put: (
      body: SpreadRecordForDiscriminatedUnion,
      options?: SpreadRecordDiscriminatedUnionPutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getSpreadRecordDiscriminatedUnionOperations(
  context: AdditionalPropertiesContext,
): SpreadRecordDiscriminatedUnionOperations {
  return {
    ...getSpreadRecordDiscriminatedUnion(context),
  };
}
