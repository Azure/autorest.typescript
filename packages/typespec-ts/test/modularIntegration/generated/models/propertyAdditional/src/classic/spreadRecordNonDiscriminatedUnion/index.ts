// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { WidgetData1, WidgetData0 } from "../../models/models.js";
import { get, put } from "../../api/spreadRecordNonDiscriminatedUnion/index.js";
import {
  SpreadRecordNonDiscriminatedUnionGetOptionalParams,
  SpreadRecordNonDiscriminatedUnionPutOptionalParams,
} from "../../models/options.js";

export interface SpreadRecordNonDiscriminatedUnionOperations {
  get: (
    options?: SpreadRecordNonDiscriminatedUnionGetOptionalParams,
  ) => Promise<Record<string, WidgetData0 | WidgetData1>>;
  put: (
    body: Record<string, WidgetData0 | WidgetData1>,
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
      body: Record<string, WidgetData0 | WidgetData1>,
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
