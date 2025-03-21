// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AnomalyDetectorContext } from "../../api/anomalyDetectorContext.js";
import {
  AnomalyDetectorUnivariateUnivariateDetectionOptions,
  AnomalyDetectorUnivariateUnivariateEntireDetectionResult,
  AnomalyDetectorUnivariateUnivariateLastDetectionResult,
  AnomalyDetectorUnivariateUnivariateChangePointDetectionOptions,
  AnomalyDetectorUnivariateUnivariateChangePointDetectionResult,
} from "../../models/anomalyDetector/univariate/models.js";
import {
  UnivariateDetectUnivariateChangePointOptionalParams,
  UnivariateDetectUnivariateLastPointOptionalParams,
  UnivariateDetectUnivariateEntireSeriesOptionalParams,
} from "../../api/univariate/options.js";
import {
  detectUnivariateChangePoint,
  detectUnivariateLastPoint,
  detectUnivariateEntireSeries,
} from "../../api/univariate/operations.js";

/** Interface representing a Univariate operations. */
export interface UnivariateOperations {
  /** Evaluate change point score of every series point */
  detectUnivariateChangePoint: (
    options: AnomalyDetectorUnivariateUnivariateChangePointDetectionOptions,
    optionalParams?: UnivariateDetectUnivariateChangePointOptionalParams,
  ) => Promise<AnomalyDetectorUnivariateUnivariateChangePointDetectionResult>;
  /**
   * This operation generates a model using the points that you sent into the API,
   * and based on all data to determine whether the last point is anomalous.
   */
  detectUnivariateLastPoint: (
    options: AnomalyDetectorUnivariateUnivariateDetectionOptions,
    optionalParams?: UnivariateDetectUnivariateLastPointOptionalParams,
  ) => Promise<AnomalyDetectorUnivariateUnivariateLastDetectionResult>;
  /**
   * This operation generates a model with an entire series, each point is detected
   * with the same model. With this method, points before and after a certain point
   * are used to determine whether it is an anomaly. The entire detection can give
   * user an overall status of the time series.
   */
  detectUnivariateEntireSeries: (
    options: AnomalyDetectorUnivariateUnivariateDetectionOptions,
    optionalParams?: UnivariateDetectUnivariateEntireSeriesOptionalParams,
  ) => Promise<AnomalyDetectorUnivariateUnivariateEntireDetectionResult>;
}

function _getUnivariate(context: AnomalyDetectorContext) {
  return {
    detectUnivariateChangePoint: (
      options: AnomalyDetectorUnivariateUnivariateChangePointDetectionOptions,
      optionalParams?: UnivariateDetectUnivariateChangePointOptionalParams,
    ) => detectUnivariateChangePoint(context, options, optionalParams),
    detectUnivariateLastPoint: (
      options: AnomalyDetectorUnivariateUnivariateDetectionOptions,
      optionalParams?: UnivariateDetectUnivariateLastPointOptionalParams,
    ) => detectUnivariateLastPoint(context, options, optionalParams),
    detectUnivariateEntireSeries: (
      options: AnomalyDetectorUnivariateUnivariateDetectionOptions,
      optionalParams?: UnivariateDetectUnivariateEntireSeriesOptionalParams,
    ) => detectUnivariateEntireSeries(context, options, optionalParams),
  };
}

export function _getUnivariateOperations(
  context: AnomalyDetectorContext,
): UnivariateOperations {
  return {
    ..._getUnivariate(context),
  };
}
