// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { SpreadRecordForNonDiscriminatedUnion3 } from "../../models/models.js";
import {
  get,
  put,
} from "../../api/spreadRecordNonDiscriminatedUnion3/index.js";
import {
  SpreadRecordNonDiscriminatedUnion3GetOptionalParams,
  SpreadRecordNonDiscriminatedUnion3PutOptionalParams,
} from "../../models/options.js";

export interface SpreadRecordNonDiscriminatedUnion3Operations {
  get: (
    options?: SpreadRecordNonDiscriminatedUnion3GetOptionalParams,
  ) => Promise<SpreadRecordForNonDiscriminatedUnion3>;
  put: (
    body: SpreadRecordForNonDiscriminatedUnion3,
    options?: SpreadRecordNonDiscriminatedUnion3PutOptionalParams,
  ) => Promise<void>;
}

export function getSpreadRecordNonDiscriminatedUnion3(
  context: AdditionalPropertiesContext,
) {
  return {
    get: (options?: SpreadRecordNonDiscriminatedUnion3GetOptionalParams) =>
      get(context, options),
    put: (
      body: SpreadRecordForNonDiscriminatedUnion3,
      options?: SpreadRecordNonDiscriminatedUnion3PutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getSpreadRecordNonDiscriminatedUnion3Operations(
  context: AdditionalPropertiesContext,
): SpreadRecordNonDiscriminatedUnion3Operations {
  return {
    ...getSpreadRecordNonDiscriminatedUnion3(context),
  };
}
