// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { SpreadRecordForNonDiscriminatedUnion } from "../../models/models.js";
import { get, put } from "../../api/spreadRecordNonDiscriminatedUnion/index.js";
import {
  SpreadRecordNonDiscriminatedUnionGetOptionalParams,
  SpreadRecordNonDiscriminatedUnionPutOptionalParams,
} from "../../models/options.js";

/** Interface representing a SpreadRecordNonDiscriminatedUnion operations. */
export interface SpreadRecordNonDiscriminatedUnionOperations {
  /** Get call */
  get: (
    options?: SpreadRecordNonDiscriminatedUnionGetOptionalParams,
  ) => Promise<SpreadRecordForNonDiscriminatedUnion>;
  /** Put operation */
  put: (
    body: SpreadRecordForNonDiscriminatedUnion,
    options?: SpreadRecordNonDiscriminatedUnionPutOptionalParams,
  ) => Promise<void>;
}

export function getSpreadRecordNonDiscriminatedUnion(
  context: AdditionalPropertiesContext,
) {
  return {
    get: (options?: SpreadRecordNonDiscriminatedUnionGetOptionalParams) =>
      get(context, options),
    put: (
      body: SpreadRecordForNonDiscriminatedUnion,
      options?: SpreadRecordNonDiscriminatedUnionPutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getSpreadRecordNonDiscriminatedUnionOperations(
  context: AdditionalPropertiesContext,
): SpreadRecordNonDiscriminatedUnionOperations {
  return {
    ...getSpreadRecordNonDiscriminatedUnion(context),
  };
}
