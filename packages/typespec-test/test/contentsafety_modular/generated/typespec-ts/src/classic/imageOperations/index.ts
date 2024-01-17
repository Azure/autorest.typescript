// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ContentSafetyContext } from "../../api/ContentSafetyContext.js";
import {
  AnalyzeImageOptions,
  AnalyzeImageResult,
} from "../../models/models.js";
import { analyzeImage } from "../../api/imageOperations/index.js";
import { ImageOperationsAnalyzeImageOptions } from "../../models/options.js";

export interface ImageOperationsOperations {
  analyzeImage: (
    body: AnalyzeImageOptions,
    options?: ImageOperationsAnalyzeImageOptions,
  ) => Promise<AnalyzeImageResult>;
}

export function getImageOperations(context: ContentSafetyContext) {
  return {
    analyzeImage: (
      body: AnalyzeImageOptions,
      options?: ImageOperationsAnalyzeImageOptions,
    ) => analyzeImage(context, body, options),
  };
}

export function getImageOperationsOperations(
  context: ContentSafetyContext,
): ImageOperationsOperations {
  return {
    ...getImageOperations(context),
  };
}
