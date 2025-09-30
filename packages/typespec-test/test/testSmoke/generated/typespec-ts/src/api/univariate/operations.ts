// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AnomalyDetectorContext as Client } from "../index.js";
import {
  UnivariateDetectionOptions,
  univariateDetectionOptionsSerializer,
  anomalyDetectorErrorDeserializer,
  UnivariateLastDetectionResult,
  univariateLastDetectionResultDeserializer,
  UnivariateChangePointDetectionOptions,
  univariateChangePointDetectionOptionsSerializer,
  UnivariateChangePointDetectionResult,
  univariateChangePointDetectionResultDeserializer,
} from "../../models/univariate/models.js";
import {
  UnivariateDetectUnivariateChangePointOptionalParams,
  UnivariateDetectUnivariateLastPointOptionalParams,
  UnivariateDetectUnivariateEntireSeriesOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

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
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...optionalParams.requestOptions?.headers,
      },
      body: univariateChangePointDetectionOptionsSerializer(options),
    });
}

export async function _detectUnivariateChangePointDeserialize(
  result: PathUncheckedResponse,
): Promise<UnivariateChangePointDetectionResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = anomalyDetectorErrorDeserializer(result.body);
    throw error;
  }

  return univariateChangePointDetectionResultDeserializer(result.body);
}

/** Evaluate the change point score of every series point. */
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
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...optionalParams.requestOptions?.headers,
      },
      body: univariateDetectionOptionsSerializer(options),
    });
}

export async function _detectUnivariateLastPointDeserialize(
  result: PathUncheckedResponse,
): Promise<UnivariateLastDetectionResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = anomalyDetectorErrorDeserializer(result.body);
    throw error;
  }

  return univariateLastDetectionResultDeserializer(result.body);
}

/**
 * This operation generates a model by using the points that you sent in to the API
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
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...optionalParams.requestOptions?.headers,
      },
      body: univariateDetectionOptionsSerializer(options),
    });
}

export async function _detectUnivariateEntireSeriesDeserialize(
  result: PathUncheckedResponse,
): Promise<__PLACEHOLDER_o81__> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = anomalyDetectorErrorDeserializer(result.body);
    throw error;
  }

  return {
    period: ["period"],
    expectedValues: ["expectedValues"].map((p: any) => {
      return p;
    }),
    upperMargins: ["upperMargins"].map((p: any) => {
      return p;
    }),
    lowerMargins: ["lowerMargins"].map((p: any) => {
      return p;
    }),
    isAnomaly: ["isAnomaly"].map((p: any) => {
      return p;
    }),
    isNegativeAnomaly: ["isNegativeAnomaly"].map((p: any) => {
      return p;
    }),
    isPositiveAnomaly: ["isPositiveAnomaly"].map((p: any) => {
      return p;
    }),
    severity: !["severity"]
      ? ["severity"]
      : ["severity"].map((p: any) => {
          return p;
        }),
  };
}

/**
 * This operation generates a model with an entire series. Each point is detected
 * with the same model. With this method, points before and after a certain point
 * are used to determine whether it's an anomaly. The entire detection can give the
 * user an overall status of the time series.
 */
export async function detectUnivariateEntireSeries(
  context: Client,
  options: UnivariateDetectionOptions,
  optionalParams: UnivariateDetectUnivariateEntireSeriesOptionalParams = {
    requestOptions: {},
  },
): Promise<__PLACEHOLDER_o81__> {
  const result = await _detectUnivariateEntireSeriesSend(
    context,
    options,
    optionalParams,
  );
  return _detectUnivariateEntireSeriesDeserialize(result);
}
