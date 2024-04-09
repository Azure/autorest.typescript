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
  UnivariateDetectUnivariateEntireSeriesOptionalParams,
  UnivariateDetectUnivariateLastPointOptionalParams,
  UnivariateDetectUnivariateChangePointOptionalParams,
} from "../../models/options.js";

export interface UnivariateOperations {
  detectUnivariateEntireSeries: (
    options: UnivariateUnivariateDetectionOptions,
    optionalParams?: UnivariateDetectUnivariateEntireSeriesOptionalParams,
  ) => Promise<UnivariateUnivariateEntireDetectionResult>;
  detectUnivariateLastPoint: (
    options: UnivariateUnivariateDetectionOptions,
    optionalParams?: UnivariateDetectUnivariateLastPointOptionalParams,
  ) => Promise<UnivariateUnivariateLastDetectionResult>;
  detectUnivariateChangePoint: (
    options: UnivariateUnivariateChangePointDetectionOptions,
    optionalParams?: UnivariateDetectUnivariateChangePointOptionalParams,
  ) => Promise<UnivariateUnivariateChangePointDetectionResult>;
}

export function getUnivariate(context: AnomalyDetectorContext) {
  return {
    detectUnivariateEntireSeries: (
      options: UnivariateUnivariateDetectionOptions,
      optionalParams?: UnivariateDetectUnivariateEntireSeriesOptionalParams,
    ) => detectUnivariateEntireSeries(context, options, optionalParams),
    detectUnivariateLastPoint: (
      options: UnivariateUnivariateDetectionOptions,
      optionalParams?: UnivariateDetectUnivariateLastPointOptionalParams,
    ) => detectUnivariateLastPoint(context, options, optionalParams),
    detectUnivariateChangePoint: (
      options: UnivariateUnivariateChangePointDetectionOptions,
      optionalParams?: UnivariateDetectUnivariateChangePointOptionalParams,
    ) => detectUnivariateChangePoint(context, options, optionalParams),
  };
}

export function getUnivariateOperations(
  context: AnomalyDetectorContext,
): UnivariateOperations {
  return {
    ...getUnivariate(context),
  };
}
