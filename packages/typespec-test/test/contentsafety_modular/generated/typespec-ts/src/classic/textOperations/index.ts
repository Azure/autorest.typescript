// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ContentSafetyContext } from "../../api/ContentSafetyContext.js";
import { AnalyzeTextOptions, AnalyzeTextResult } from "../../models/models.js";
import { analyzeText } from "../../api/textOperations/index.js";
import { TextOperationsAnalyzeTextOptions } from "../../models/options.js";

export interface TextOperationsOperations {
  analyzeText: (
    body: AnalyzeTextOptions,
    options?: TextOperationsAnalyzeTextOptions,
  ) => Promise<AnalyzeTextResult>;
}

export function getTextOperations(context: ContentSafetyContext) {
  return {
    analyzeText: (
      body: AnalyzeTextOptions,
      options?: TextOperationsAnalyzeTextOptions,
    ) => analyzeText(context, body, options),
  };
}

export function getTextOperationsOperations(
  context: ContentSafetyContext,
): TextOperationsOperations {
  return {
    ...getTextOperations(context),
  };
}
