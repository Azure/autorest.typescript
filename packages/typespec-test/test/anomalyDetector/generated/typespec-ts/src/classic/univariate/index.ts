// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AnomalyDetectorContext } from "../../api/anomalyDetectorContext.js";
import {
  UnivariateDetectUnivariateChangePointOptionalParams,
  UnivariateDetectUnivariateLastPointOptionalParams,
  UnivariateDetectUnivariateEntireSeriesOptionalParams,
} from "../../api/options.js";
import {
  detectUnivariateChangePoint,
  detectUnivariateLastPoint,
  detectUnivariateEntireSeries,
} from "../../api/univariate/index.js";
import {
  UnivariateUnivariateDetectionOptions,
  UnivariateUnivariateEntireDetectionResult,
  UnivariateUnivariateLastDetectionResult,
  UnivariateUnivariateChangePointDetectionOptions,
  UnivariateUnivariateChangePointDetectionResult,
} from "../../models/models.js";

/** Interface representing a Univariate operations. */
export interface UnivariateOperations {
  /** Evaluate change point score of every series point */
  detectUnivariateChangePoint: (
    options: UnivariateUnivariateChangePointDetectionOptions,
    optionalParams?: UnivariateDetectUnivariateChangePointOptionalParams,
  ) => Promise<UnivariateUnivariateChangePointDetectionResult>;
  /**
   * This operation generates a model using the points that you sent into the API,
   * and based on all data to determine whether the last point is anomalous.
   */
  detectUnivariateLastPoint: (
    options: UnivariateUnivariateDetectionOptions,
    optionalParams?: UnivariateDetectUnivariateLastPointOptionalParams,
  ) => Promise<UnivariateUnivariateLastDetectionResult>;
  /**
   * This operation generates a model with an entire series, each point is detected
   * with the same model. With this method, points before and after a certain point
   * are used to determine whether it is an anomaly. The entire detection can give
   * user an overall status of the time series.
   */
  detectUnivariateEntireSeries: (
    options: UnivariateUnivariateDetectionOptions,
    optionalParams?: UnivariateDetectUnivariateEntireSeriesOptionalParams,
  ) => Promise<UnivariateUnivariateEntireDetectionResult>;
}

export function getUnivariate(context: AnomalyDetectorContext) {
  return {
    detectUnivariateChangePoint: (
      options: UnivariateUnivariateChangePointDetectionOptions,
      optionalParams?: UnivariateDetectUnivariateChangePointOptionalParams,
    ) => detectUnivariateChangePoint(context, options, optionalParams),
    detectUnivariateLastPoint: (
      options: UnivariateUnivariateDetectionOptions,
      optionalParams?: UnivariateDetectUnivariateLastPointOptionalParams,
    ) => detectUnivariateLastPoint(context, options, optionalParams),
    detectUnivariateEntireSeries: (
      options: UnivariateUnivariateDetectionOptions,
      optionalParams?: UnivariateDetectUnivariateEntireSeriesOptionalParams,
    ) => detectUnivariateEntireSeries(context, options, optionalParams),
  };
}

export function getUnivariateOperations(
  context: AnomalyDetectorContext,
): UnivariateOperations {
  return {
    ...getUnivariate(context),
  };
}
