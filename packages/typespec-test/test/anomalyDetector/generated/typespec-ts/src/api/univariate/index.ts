// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AnomalyDetectorContext as Client } from "../index.js";
import {
  PathUncheckedResponse,
  StreamableMethod,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  _MultivariateModelList,
  UnivariateUnivariateDetectionOptions,
  univariateTimeSeriesPointSerializer,
  UnivariateUnivariateEntireDetectionResult,
  UnivariateUnivariateLastDetectionResult,
  UnivariateUnivariateChangePointDetectionOptions,
  UnivariateUnivariateChangePointDetectionResult,
} from "../../models/models.js";
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
): StreamableMethod {
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
  result: PathUncheckedResponse,
): Promise<UnivariateUnivariateEntireDetectionResult> {
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
): StreamableMethod {
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
  result: PathUncheckedResponse,
): Promise<UnivariateUnivariateLastDetectionResult> {
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
): StreamableMethod {
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
  result: PathUncheckedResponse,
): Promise<UnivariateUnivariateChangePointDetectionResult> {
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
