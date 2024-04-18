// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { WidgetData2, WidgetData1 } from "../../models/models.js";
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
  ) => Promise<Record<string, WidgetData2[] | WidgetData1>>;
  put: (
    body: Record<string, WidgetData2[] | WidgetData1>,
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
      body: Record<string, WidgetData2[] | WidgetData1>,
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
