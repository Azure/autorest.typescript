// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AnomalyDetectorContext as Client,
  UnivariateDetectUnivariateChangePointOptionalParams,
  UnivariateDetectUnivariateEntireSeriesOptionalParams,
  UnivariateDetectUnivariateLastPointOptionalParams,
} from "../index.js";
import {
  UnivariateUnivariateDetectionOptions,
  univariateUnivariateDetectionOptionsSerializer,
  UnivariateUnivariateEntireDetectionResult,
  univariateUnivariateEntireDetectionResultDeserializer,
  UnivariateUnivariateLastDetectionResult,
  univariateUnivariateLastDetectionResultDeserializer,
  UnivariateUnivariateChangePointDetectionOptions,
  univariateUnivariateChangePointDetectionOptionsSerializer,
  UnivariateUnivariateChangePointDetectionResult,
  univariateUnivariateChangePointDetectionResultDeserializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

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
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...optionalParams.requestOptions?.headers,
      },
      body: univariateUnivariateChangePointDetectionOptionsSerializer(options),
    });
}

export async function _detectUnivariateChangePointDeserialize(
  result: PathUncheckedResponse,
): Promise<UnivariateUnivariateChangePointDetectionResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return univariateUnivariateChangePointDetectionResultDeserializer(
    result.body,
  );
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
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...optionalParams.requestOptions?.headers,
      },
      body: univariateUnivariateDetectionOptionsSerializer(options),
    });
}

export async function _detectUnivariateLastPointDeserialize(
  result: PathUncheckedResponse,
): Promise<UnivariateUnivariateLastDetectionResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return univariateUnivariateLastDetectionResultDeserializer(result.body);
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
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...optionalParams.requestOptions?.headers,
      },
      body: univariateUnivariateDetectionOptionsSerializer(options),
    });
}

export async function _detectUnivariateEntireSeriesDeserialize(
  result: PathUncheckedResponse,
): Promise<UnivariateUnivariateEntireDetectionResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return univariateUnivariateEntireDetectionResultDeserializer(result.body);
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
