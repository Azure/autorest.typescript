// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AnomalyDetectorContext as Client } from "../index.js";
import {
  AnomalyDetectorUnivariateUnivariateDetectionOptions,
  anomalyDetectorUnivariateUnivariateDetectionOptionsSerializer,
  AnomalyDetectorUnivariateUnivariateEntireDetectionResult,
  anomalyDetectorUnivariateUnivariateEntireDetectionResultDeserializer,
  anomalyDetectorUnivariateAnomalyDetectorErrorDeserializer,
  AnomalyDetectorUnivariateUnivariateLastDetectionResult,
  anomalyDetectorUnivariateUnivariateLastDetectionResultDeserializer,
  AnomalyDetectorUnivariateUnivariateChangePointDetectionOptions,
  anomalyDetectorUnivariateUnivariateChangePointDetectionOptionsSerializer,
  AnomalyDetectorUnivariateUnivariateChangePointDetectionResult,
  anomalyDetectorUnivariateUnivariateChangePointDetectionResultDeserializer,
} from "../../models/anomalyDetector/univariate/models.js";
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
  options: AnomalyDetectorUnivariateUnivariateChangePointDetectionOptions,
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
      body: anomalyDetectorUnivariateUnivariateChangePointDetectionOptionsSerializer(
        options,
      ),
    });
}

export async function _detectUnivariateChangePointDeserialize(
  result: PathUncheckedResponse,
): Promise<AnomalyDetectorUnivariateUnivariateChangePointDetectionResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = anomalyDetectorUnivariateAnomalyDetectorErrorDeserializer(
      result.body,
    );
    throw error;
  }

  return anomalyDetectorUnivariateUnivariateChangePointDetectionResultDeserializer(
    result.body,
  );
}

/** Evaluate change point score of every series point */
export async function detectUnivariateChangePoint(
  context: Client,
  options: AnomalyDetectorUnivariateUnivariateChangePointDetectionOptions,
  optionalParams: UnivariateDetectUnivariateChangePointOptionalParams = {
    requestOptions: {},
  },
): Promise<AnomalyDetectorUnivariateUnivariateChangePointDetectionResult> {
  const result = await _detectUnivariateChangePointSend(
    context,
    options,
    optionalParams,
  );
  return _detectUnivariateChangePointDeserialize(result);
}

export function _detectUnivariateLastPointSend(
  context: Client,
  options: AnomalyDetectorUnivariateUnivariateDetectionOptions,
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
      body: anomalyDetectorUnivariateUnivariateDetectionOptionsSerializer(
        options,
      ),
    });
}

export async function _detectUnivariateLastPointDeserialize(
  result: PathUncheckedResponse,
): Promise<AnomalyDetectorUnivariateUnivariateLastDetectionResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = anomalyDetectorUnivariateAnomalyDetectorErrorDeserializer(
      result.body,
    );
    throw error;
  }

  return anomalyDetectorUnivariateUnivariateLastDetectionResultDeserializer(
    result.body,
  );
}

/**
 * This operation generates a model using the points that you sent into the API,
 * and based on all data to determine whether the last point is anomalous.
 */
export async function detectUnivariateLastPoint(
  context: Client,
  options: AnomalyDetectorUnivariateUnivariateDetectionOptions,
  optionalParams: UnivariateDetectUnivariateLastPointOptionalParams = {
    requestOptions: {},
  },
): Promise<AnomalyDetectorUnivariateUnivariateLastDetectionResult> {
  const result = await _detectUnivariateLastPointSend(
    context,
    options,
    optionalParams,
  );
  return _detectUnivariateLastPointDeserialize(result);
}

export function _detectUnivariateEntireSeriesSend(
  context: Client,
  options: AnomalyDetectorUnivariateUnivariateDetectionOptions,
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
      body: anomalyDetectorUnivariateUnivariateDetectionOptionsSerializer(
        options,
      ),
    });
}

export async function _detectUnivariateEntireSeriesDeserialize(
  result: PathUncheckedResponse,
): Promise<AnomalyDetectorUnivariateUnivariateEntireDetectionResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = anomalyDetectorUnivariateAnomalyDetectorErrorDeserializer(
      result.body,
    );
    throw error;
  }

  return anomalyDetectorUnivariateUnivariateEntireDetectionResultDeserializer(
    result.body,
  );
}

/**
 * This operation generates a model with an entire series, each point is detected
 * with the same model. With this method, points before and after a certain point
 * are used to determine whether it is an anomaly. The entire detection can give
 * user an overall status of the time series.
 */
export async function detectUnivariateEntireSeries(
  context: Client,
  options: AnomalyDetectorUnivariateUnivariateDetectionOptions,
  optionalParams: UnivariateDetectUnivariateEntireSeriesOptionalParams = {
    requestOptions: {},
  },
): Promise<AnomalyDetectorUnivariateUnivariateEntireDetectionResult> {
  const result = await _detectUnivariateEntireSeriesSend(
    context,
    options,
    optionalParams,
  );
  return _detectUnivariateEntireSeriesDeserialize(result);
}
