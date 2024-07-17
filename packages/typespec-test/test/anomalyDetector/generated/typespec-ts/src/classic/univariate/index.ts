// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AnomalyDetectorContext } from "../../api/anomalyDetectorContext.js";
import {
  UnivariateDetectionOptions,
  UnivariateEntireDetectionResult,
  UnivariateLastDetectionResult,
  UnivariateChangePointDetectionOptions,
  UnivariateChangePointDetectionResult,
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
} from "../../api/options.js";

/** Interface representing a Univariate operations. */
export interface UnivariateOperations {
  /**
   * This operation generates a model with an entire series, each point is detected
   * with the same model. With this method, points before and after a certain point
   * are used to determine whether it is an anomaly. The entire detection can give
   * user an overall status of the time series.
   */
  detectUnivariateEntireSeries: (
    options: UnivariateDetectionOptions,
    optionalParams?: UnivariateDetectUnivariateEntireSeriesOptionalParams,
  ) => Promise<UnivariateEntireDetectionResult>;
  /**
   * This operation generates a model using the points that you sent into the API,
   * and based on all data to determine whether the last point is anomalous.
   */
  detectUnivariateLastPoint: (
    options: UnivariateDetectionOptions,
    optionalParams?: UnivariateDetectUnivariateLastPointOptionalParams,
  ) => Promise<UnivariateLastDetectionResult>;
  /** Evaluate change point score of every series point */
  detectUnivariateChangePoint: (
    options: UnivariateChangePointDetectionOptions,
    optionalParams?: UnivariateDetectUnivariateChangePointOptionalParams,
  ) => Promise<UnivariateChangePointDetectionResult>;
}

export function getUnivariate(context: AnomalyDetectorContext) {
  return {
    detectUnivariateEntireSeries: (
      options: UnivariateDetectionOptions,
      optionalParams?: UnivariateDetectUnivariateEntireSeriesOptionalParams,
    ) => detectUnivariateEntireSeries(context, options, optionalParams),
    detectUnivariateLastPoint: (
      options: UnivariateDetectionOptions,
      optionalParams?: UnivariateDetectUnivariateLastPointOptionalParams,
    ) => detectUnivariateLastPoint(context, options, optionalParams),
    detectUnivariateChangePoint: (
      options: UnivariateChangePointDetectionOptions,
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
