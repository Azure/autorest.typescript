// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AnomalyDetectorContext } from "../../api/AnomalyDetectorContext.js";
import {
  UnivariateUnivariateDetectionOptions,
  UnivariateUnivariateEntireDetectionResult,
  UnivariateUnivariateLastDetectionResult,
  UnivariateUnivariateChangePointDetectionOptions,
  UnivariateUnivariateChangePointDetectionResult,
} from "../../models/models.js";
import {
  detectUnivariateEntireSeries,
  detectUnivariateLastPoint,
  detectUnivariateChangePoint,
} from "../../api/univariate/index.js";
import {
  UnivariateDetectUnivariateEntireSeriesOptions,
  UnivariateDetectUnivariateLastPointOptions,
  UnivariateDetectUnivariateChangePointOptions,
} from "../../models/options.js";

export interface UnivariateOperations {
  detectUnivariateEntireSeries: (
    options?: UnivariateUnivariateDetectionOptions,
    options?: UnivariateDetectUnivariateEntireSeriesOptions,
  ) => Promise<UnivariateUnivariateEntireDetectionResult>;
  detectUnivariateLastPoint: (
    options?: UnivariateUnivariateDetectionOptions,
    options?: UnivariateDetectUnivariateLastPointOptions,
  ) => Promise<UnivariateUnivariateLastDetectionResult>;
  detectUnivariateChangePoint: (
    options?: UnivariateUnivariateChangePointDetectionOptions,
    options?: UnivariateDetectUnivariateChangePointOptions,
  ) => Promise<UnivariateUnivariateChangePointDetectionResult>;
}

export function getUnivariate(context: AnomalyDetectorContext) {
  return {
    detectUnivariateEntireSeries: (
      options?: UnivariateUnivariateDetectionOptions,
      options?: UnivariateDetectUnivariateEntireSeriesOptions,
    ) => detectUnivariateEntireSeries(context, options, options),
    detectUnivariateLastPoint: (
      options?: UnivariateUnivariateDetectionOptions,
      options?: UnivariateDetectUnivariateLastPointOptions,
    ) => detectUnivariateLastPoint(context, options, options),
    detectUnivariateChangePoint: (
      options?: UnivariateUnivariateChangePointDetectionOptions,
      options?: UnivariateDetectUnivariateChangePointOptions,
    ) => detectUnivariateChangePoint(context, options, options),
  };
}

export function getUnivariateOperations(
  context: AnomalyDetectorContext,
): UnivariateOperations {
  return {
    ...getUnivariate(context),
  };
}
