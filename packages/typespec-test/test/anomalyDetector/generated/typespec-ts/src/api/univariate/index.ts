// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  timeSeriesPointSerializer,
  UnivariateDetectionOptions,
  UnivariateEntireDetectionResult,
  UnivariateLastDetectionResult,
  UnivariateChangePointDetectionOptions,
  UnivariateChangePointDetectionResult,
} from "../../models/models.js";
import {
  AnomalyDetectorContext as Client,
  UnivariateDetectUnivariateChangePointOptionalParams,
  UnivariateDetectUnivariateEntireSeriesOptionalParams,
  UnivariateDetectUnivariateLastPointOptionalParams,
} from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";

export function _detectUnivariateEntireSeriesSend(
  context: Client,
  options: UnivariateDetectionOptions,
  optionalParams: UnivariateDetectUnivariateEntireSeriesOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/timeseries/entire/detect")
    .post({
      ...operationOptionsToRequestParameters(optionalParams),
      body: {
        series: options["series"].map(timeSeriesPointSerializer),
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
  result: PathUncheckedResponse,
): Promise<UnivariateEntireDetectionResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    period: result.body["period"],
    expectedValues: result.body["expectedValues"],
    upperMargins: result.body["upperMargins"],
    lowerMargins: result.body["lowerMargins"],
    isAnomaly: result.body["isAnomaly"],
    isNegativeAnomaly: result.body["isNegativeAnomaly"],
    isPositiveAnomaly: result.body["isPositiveAnomaly"],
    severity: result.body["severity"],
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
  options: UnivariateDetectionOptions,
  optionalParams: UnivariateDetectUnivariateEntireSeriesOptionalParams = {
    requestOptions: {},
  },
): Promise<UnivariateEntireDetectionResult> {
  const result = await _detectUnivariateEntireSeriesSend(
    context,
    options,
    optionalParams,
  );
  return _detectUnivariateEntireSeriesDeserialize(result);
}

export function _detectUnivariateLastPointSend(
  context: Client,
  options: UnivariateDetectionOptions,
  optionalParams: UnivariateDetectUnivariateLastPointOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/timeseries/last/detect")
    .post({
      ...operationOptionsToRequestParameters(optionalParams),
      body: {
        series: options["series"].map(timeSeriesPointSerializer),
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
  result: PathUncheckedResponse,
): Promise<UnivariateLastDetectionResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    period: result.body["period"],
    suggestedWindow: result.body["suggestedWindow"],
    expectedValue: result.body["expectedValue"],
    upperMargin: result.body["upperMargin"],
    lowerMargin: result.body["lowerMargin"],
    isAnomaly: result.body["isAnomaly"],
    isNegativeAnomaly: result.body["isNegativeAnomaly"],
    isPositiveAnomaly: result.body["isPositiveAnomaly"],
    severity: result.body["severity"],
  };
}

/**
 * This operation generates a model using the points that you sent into the API,
 * and based on all data to determine whether the last point is anomalous.
 */
export async function detectUnivariateLastPoint(
  context: Client,
  options: UnivariateDetectionOptions,
  optionalParams: UnivariateDetectUnivariateLastPointOptionalParams = {
    requestOptions: {},
  },
): Promise<UnivariateLastDetectionResult> {
  const result = await _detectUnivariateLastPointSend(
    context,
    options,
    optionalParams,
  );
  return _detectUnivariateLastPointDeserialize(result);
}

export function _detectUnivariateChangePointSend(
  context: Client,
  options: UnivariateChangePointDetectionOptions,
  optionalParams: UnivariateDetectUnivariateChangePointOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/timeseries/changepoint/detect")
    .post({
      ...operationOptionsToRequestParameters(optionalParams),
      body: {
        series: options["series"].map(timeSeriesPointSerializer),
        granularity: options["granularity"],
        customInterval: options["customInterval"],
        period: options["period"],
        stableTrendWindow: options["stableTrendWindow"],
        threshold: options["threshold"],
      },
    });
}

export async function _detectUnivariateChangePointDeserialize(
  result: PathUncheckedResponse,
): Promise<UnivariateChangePointDetectionResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    period: result.body["period"],
    isChangePoint: result.body["isChangePoint"],
    confidenceScores: result.body["confidenceScores"],
  };
}

/** Evaluate change point score of every series point */
export async function detectUnivariateChangePoint(
  context: Client,
  options: UnivariateChangePointDetectionOptions,
  optionalParams: UnivariateDetectUnivariateChangePointOptionalParams = {
    requestOptions: {},
  },
): Promise<UnivariateChangePointDetectionResult> {
  const result = await _detectUnivariateChangePointSend(
    context,
    options,
    optionalParams,
  );
  return _detectUnivariateChangePointDeserialize(result);
}
