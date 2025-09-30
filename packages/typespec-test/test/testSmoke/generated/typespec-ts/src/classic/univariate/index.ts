// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AnomalyDetectorContext } from "../../api/anomalyDetectorContext.js";
import {
  detectUnivariateChangePoint,
  detectUnivariateLastPoint,
  detectUnivariateEntireSeries,
} from "../../api/univariate/operations.js";
import {
  UnivariateDetectUnivariateChangePointOptionalParams,
  UnivariateDetectUnivariateLastPointOptionalParams,
  UnivariateDetectUnivariateEntireSeriesOptionalParams,
} from "../../api/univariate/options.js";
import {
  UnivariateDetectionOptions,
  UnivariateLastDetectionResult,
  UnivariateChangePointDetectionOptions,
  UnivariateChangePointDetectionResult,
} from "../../models/univariate/models.js";

/** Interface representing a Univariate operations. */
export interface UnivariateOperations {
  /** Evaluate the change point score of every series point. */
  detectUnivariateChangePoint: (
    options: UnivariateChangePointDetectionOptions,
    optionalParams?: UnivariateDetectUnivariateChangePointOptionalParams,
  ) => Promise<UnivariateChangePointDetectionResult>;
  /**
   * This operation generates a model by using the points that you sent in to the API
   * and based on all data to determine whether the last point is anomalous.
   */
  detectUnivariateLastPoint: (
    options: UnivariateDetectionOptions,
    optionalParams?: UnivariateDetectUnivariateLastPointOptionalParams,
  ) => Promise<UnivariateLastDetectionResult>;
  /**
   * This operation generates a model with an entire series. Each point is detected
   * with the same model. With this method, points before and after a certain point
   * are used to determine whether it's an anomaly. The entire detection can give the
   * user an overall status of the time series.
   */
  detectUnivariateEntireSeries: (
    options: UnivariateDetectionOptions,
    optionalParams?: UnivariateDetectUnivariateEntireSeriesOptionalParams,
  ) => Promise<__PLACEHOLDER_o81__>;
}

function _getUnivariate(context: AnomalyDetectorContext) {
  return {
    detectUnivariateChangePoint: (
      options: UnivariateChangePointDetectionOptions,
      optionalParams?: UnivariateDetectUnivariateChangePointOptionalParams,
    ) => detectUnivariateChangePoint(context, options, optionalParams),
    detectUnivariateLastPoint: (
      options: UnivariateDetectionOptions,
      optionalParams?: UnivariateDetectUnivariateLastPointOptionalParams,
    ) => detectUnivariateLastPoint(context, options, optionalParams),
    detectUnivariateEntireSeries: (
      options: UnivariateDetectionOptions,
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
