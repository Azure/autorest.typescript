// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  univariateTimeSeriesPointSerializer,
  UnivariateUnivariateDetectionOptions,
  UnivariateUnivariateEntireDetectionResult,
  UnivariateUnivariateLastDetectionResult,
  UnivariateUnivariateChangePointDetectionOptions,
  UnivariateUnivariateChangePointDetectionResult,
} from "../../models/models.js";
import {
  isUnexpected,
  AnomalyDetectorContext as Client,
  DetectUnivariateChangePoint200Response,
  DetectUnivariateChangePointDefaultResponse,
  DetectUnivariateEntireSeries200Response,
  DetectUnivariateEntireSeriesDefaultResponse,
  DetectUnivariateLastPoint200Response,
  DetectUnivariateLastPointDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  UnivariateDetectUnivariateEntireSeriesOptionalParams,
  UnivariateDetectUnivariateLastPointOptionalParams,
  UnivariateDetectUnivariateChangePointOptionalParams,
} from "../../models/options.js";

export function _detectUnivariateEntireSeriesSend(
  context: Client,
  options: UnivariateUnivariateDetectionOptions,
  optionalParams: UnivariateDetectUnivariateEntireSeriesOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | DetectUnivariateEntireSeries200Response
  | DetectUnivariateEntireSeriesDefaultResponse
> {
  return context
    .path("/timeseries/entire/detect")
    .post({
      ...operationOptionsToRequestParameters(optionalParams),
      body: {
        series: options["series"].map(univariateTimeSeriesPointSerializer),
        granularity: options["granularity"],
        customInterval: options["customInterval"],
        period: options["period"],
        maxAnomalyRatio: options["maxAnomalyRatio"],
        sensitivity: options["sensitivity"],
        imputeMode: options["imputeMode"],
        imputeFixedValue: options["imputeFixedValue"],
      },
    });
}

export async function _detectUnivariateEntireSeriesDeserialize(
  result:
    | DetectUnivariateEntireSeries200Response
    | DetectUnivariateEntireSeriesDefaultResponse,
): Promise<UnivariateUnivariateEntireDetectionResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const _result = result as unknown as DetectUnivariateEntireSeries200Response;
  return {
    period: _result.body["period"],
    expectedValues: _result.body["expectedValues"],
    upperMargins: _result.body["upperMargins"],
    lowerMargins: _result.body["lowerMargins"],
    isAnomaly: _result.body["isAnomaly"],
    isNegativeAnomaly: _result.body["isNegativeAnomaly"],
    isPositiveAnomaly: _result.body["isPositiveAnomaly"],
    severity: _result.body["severity"],
  };
}

/**
 * This operation generates a model with an entire series, each point is detected
 * with the same model. With this method, points before and after a certain point
 * are used to determine whether it is an anomaly. The entire detection can give
 * user an overall status of the time series.
 */
export async function detectUnivariateEntireSeries(
  context: Client,
  options: UnivariateUnivariateDetectionOptions,
  optionalParams: UnivariateDetectUnivariateEntireSeriesOptionalParams = {
    requestOptions: {},
  },
): Promise<UnivariateUnivariateEntireDetectionResult> {
  const result = await _detectUnivariateEntireSeriesSend(
    context,
    options,
    optionalParams,
  );
  return _detectUnivariateEntireSeriesDeserialize(result);
}

export function _detectUnivariateLastPointSend(
  context: Client,
  options: UnivariateUnivariateDetectionOptions,
  optionalParams: UnivariateDetectUnivariateLastPointOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | DetectUnivariateLastPoint200Response
  | DetectUnivariateLastPointDefaultResponse
> {
  return context
    .path("/timeseries/last/detect")
    .post({
      ...operationOptionsToRequestParameters(optionalParams),
      body: {
        series: options["series"].map(univariateTimeSeriesPointSerializer),
        granularity: options["granularity"],
        customInterval: options["customInterval"],
        period: options["period"],
        maxAnomalyRatio: options["maxAnomalyRatio"],
        sensitivity: options["sensitivity"],
        imputeMode: options["imputeMode"],
        imputeFixedValue: options["imputeFixedValue"],
      },
    });
}

export async function _detectUnivariateLastPointDeserialize(
  result:
    | DetectUnivariateLastPoint200Response
    | DetectUnivariateLastPointDefaultResponse,
): Promise<UnivariateUnivariateLastDetectionResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const _result = result as unknown as DetectUnivariateLastPoint200Response;
  return {
    period: _result.body["period"],
    suggestedWindow: _result.body["suggestedWindow"],
    expectedValue: _result.body["expectedValue"],
    upperMargin: _result.body["upperMargin"],
    lowerMargin: _result.body["lowerMargin"],
    isAnomaly: _result.body["isAnomaly"],
    isNegativeAnomaly: _result.body["isNegativeAnomaly"],
    isPositiveAnomaly: _result.body["isPositiveAnomaly"],
    severity: _result.body["severity"],
  };
}

/**
 * This operation generates a model using the points that you sent into the API,
 * and based on all data to determine whether the last point is anomalous.
 */
export async function detectUnivariateLastPoint(
  context: Client,
  options: UnivariateUnivariateDetectionOptions,
  optionalParams: UnivariateDetectUnivariateLastPointOptionalParams = {
    requestOptions: {},
  },
): Promise<UnivariateUnivariateLastDetectionResult> {
  const result = await _detectUnivariateLastPointSend(
    context,
    options,
    optionalParams,
  );
  return _detectUnivariateLastPointDeserialize(result);
}

export function _detectUnivariateChangePointSend(
  context: Client,
  options: UnivariateUnivariateChangePointDetectionOptions,
  optionalParams: UnivariateDetectUnivariateChangePointOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | DetectUnivariateChangePoint200Response
  | DetectUnivariateChangePointDefaultResponse
> {
  return context
    .path("/timeseries/changepoint/detect")
    .post({
      ...operationOptionsToRequestParameters(optionalParams),
      body: {
        series: options["series"].map(univariateTimeSeriesPointSerializer),
        granularity: options["granularity"],
        customInterval: options["customInterval"],
        period: options["period"],
        stableTrendWindow: options["stableTrendWindow"],
        threshold: options["threshold"],
      },
    });
}

export async function _detectUnivariateChangePointDeserialize(
  result:
    | DetectUnivariateChangePoint200Response
    | DetectUnivariateChangePointDefaultResponse,
): Promise<UnivariateUnivariateChangePointDetectionResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const _result = result as unknown as DetectUnivariateChangePoint200Response;
  return {
    period: _result.body["period"],
    isChangePoint: _result.body["isChangePoint"],
    confidenceScores: _result.body["confidenceScores"],
  };
}

/** Evaluate change point score of every series point */
export async function detectUnivariateChangePoint(
  context: Client,
  options: UnivariateUnivariateChangePointDetectionOptions,
  optionalParams: UnivariateDetectUnivariateChangePointOptionalParams = {
    requestOptions: {},
  },
): Promise<UnivariateUnivariateChangePointDetectionResult> {
  const result = await _detectUnivariateChangePointSend(
    context,
    options,
    optionalParams,
  );
  return _detectUnivariateChangePointDeserialize(result);
}
