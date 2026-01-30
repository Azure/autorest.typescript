// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** Request of the entire or last anomaly detection. */
export interface UnivariateUnivariateDetectionOptions {
  /**
   * Time series data points. Points should be sorted by time stamp in ascending
   * order to match the anomaly detection result. If the data is not sorted
   * correctly or there's a duplicated time stamp, the API won't work. In such
   * a case, an error message is returned.
   */
  series: UnivariateTimeSeriesPoint[];
  /**
   * Argument that indicates time granularity. If granularity is not present, the value
   * is none by default. If granularity is none, the time stamp property in the time
   * series point can be absent.
   */
  granularity?: UnivariateTimeGranularity;
  /**
   * A custom interval is used to set a nonstandard time interval. For example, if the
   * series is 5 minutes, the request can be set as {"granularity":"minutely",
   * "customInterval":5}.
   */
  customInterval?: number;
  /**
   * Argument that indicates the periodic value of a time series. If the value is null or
   * is not present, the API determines the period automatically.
   */
  period?: number;
  /** Argument that indicates an advanced model parameter. It's the maximum anomaly ratio in a time series. */
  maxAnomalyRatio?: number;
  /**
   * Argument that indicates an advanced model parameter between 0 and 99. The lower the value
   * is, the larger the margin value is, which means fewer anomalies will be
   * accepted.
   */
  sensitivity?: number;
  /**
   * Specifies how to deal with missing values in the input series. It's used
   * when granularity is not "none".
   */
  imputeMode?: UnivariateImputeMode;
  /**
   * Specifies the value to fill. It's used when granularity is not "none"
   * and imputeMode is "fixed".
   */
  imputeFixedValue?: number;
}

export function univariateUnivariateDetectionOptionsSerializer(
  item: UnivariateUnivariateDetectionOptions,
): any {
  return {
    series: univariateTimeSeriesPointArraySerializer(item["series"]),
    granularity: item["granularity"],
    customInterval: item["customInterval"],
    period: item["period"],
    maxAnomalyRatio: item["maxAnomalyRatio"],
    sensitivity: item["sensitivity"],
    imputeMode: item["imputeMode"],
    imputeFixedValue: item["imputeFixedValue"],
  };
}

export function univariateTimeSeriesPointArraySerializer(
  result: Array<UnivariateTimeSeriesPoint>,
): any[] {
  return result.map((item) => {
    return univariateTimeSeriesPointSerializer(item);
  });
}

/** Definition of input time series points. */
export interface UnivariateTimeSeriesPoint {
  /** Argument that indicates the time stamp of a data point (ISO8601 format). */
  timestamp?: Date;
  /** Measurement of that point. */
  value: number;
}

export function univariateTimeSeriesPointSerializer(item: UnivariateTimeSeriesPoint): any {
  return {
    timestamp: !item["timestamp"] ? item["timestamp"] : item["timestamp"].toISOString(),
    value: item["value"],
  };
}

/** Type of UnivariateTimeGranularity */
export type UnivariateTimeGranularity =
  | "yearly"
  | "monthly"
  | "weekly"
  | "daily"
  | "hourly"
  | "minutely"
  | "secondly"
  | "microsecond"
  | "none";
/** Type of UnivariateImputeMode */
export type UnivariateImputeMode = "auto" | "previous" | "linear" | "fixed" | "zero" | "notFill";

/** Response of the entire anomaly detection. */
export interface UnivariateUnivariateEntireDetectionResult {
  /**
   * Frequency extracted from the series. Zero means no recurrent pattern has been
   * found.
   */
  period: number;
  /**
   * Expected value for each input point. The index of the
   * array is consistent with the input series.
   */
  expectedValues: number[];
  /**
   * Upper margin of each input point. UpperMargin is used to
   * calculate upperBoundary, which is equal to expectedValue + (100 -
   * marginScale)*upperMargin. Anomalies in the response can be filtered by
   * upperBoundary and lowerBoundary. Adjusting the marginScale value can help filter less
   * significant anomalies on the client side. The index of the array is
   * consistent with the input series.
   */
  upperMargins: number[];
  /**
   * Lower margin of each input point. LowerMargin is used to
   * calculate lowerBoundary, which is equal to expectedValue - (100 -
   * marginScale)*lowerMargin. Points between the boundary can be marked as normal
   * ones on the client side. The index of the array is consistent with the input
   * series.
   */
  lowerMargins: number[];
  /**
   * Anomaly properties for each input point. True means an
   * anomaly (either negative or positive) has been detected. The index of the array
   * is consistent with the input series.
   */
  isAnomaly: boolean[];
  /**
   * Anomaly status in a negative direction for each input
   * point. True means a negative anomaly has been detected. A negative anomaly
   * means the point is detected as an anomaly and its real value is smaller than
   * the expected one. The index of the array is consistent with the input series.
   */
  isNegativeAnomaly: boolean[];
  /**
   * Anomaly status in a positive direction for each input
   * point. True means a positive anomaly has been detected. A positive anomaly
   * means the point is detected as an anomaly and its real value is larger than the
   * expected one. The index of the array is consistent with the input series.
   */
  isPositiveAnomaly: boolean[];
  /**
   * Severity score for each input point. The larger the value is, the more
   * severe the anomaly is. For normal points, the severity is always 0.
   */
  severity?: number[];
}

export function univariateUnivariateEntireDetectionResultDeserializer(
  item: any,
): UnivariateUnivariateEntireDetectionResult {
  return {
    period: item["period"],
    expectedValues: item["expectedValues"].map((p: any) => {
      return p;
    }),
    upperMargins: item["upperMargins"].map((p: any) => {
      return p;
    }),
    lowerMargins: item["lowerMargins"].map((p: any) => {
      return p;
    }),
    isAnomaly: item["isAnomaly"].map((p: any) => {
      return p;
    }),
    isNegativeAnomaly: item["isNegativeAnomaly"].map((p: any) => {
      return p;
    }),
    isPositiveAnomaly: item["isPositiveAnomaly"].map((p: any) => {
      return p;
    }),
    severity: !item["severity"]
      ? item["severity"]
      : item["severity"].map((p: any) => {
          return p;
        }),
  };
}

/** Error information that the API returned. */
export interface UnivariateAnomalyDetectorError {
  /** Error code. */
  msErrorCode?: string;
  /** Error code. */
  code: UnivariateAnomalyDetectorErrorCodes;
  /** Message that explains the error that the service reported. */
  message: string;
}

export function univariateAnomalyDetectorErrorDeserializer(
  item: any,
  headers?: any,
): UnivariateAnomalyDetectorError {
  return {
    code: item["code"],
    message: item["message"],
    msErrorCode: headers?.["x-ms-error-code"],
  };
}

/** Type of UnivariateAnomalyDetectorErrorCodes */
export type UnivariateAnomalyDetectorErrorCodes =
  | "InvalidCustomInterval"
  | "BadArgument"
  | "InvalidGranularity"
  | "InvalidPeriod"
  | "InvalidModelArgument"
  | "InvalidSeries"
  | "InvalidJsonFormat"
  | "RequiredGranularity"
  | "RequiredSeries"
  | "InvalidImputeMode"
  | "InvalidImputeFixedValue";

/** Response of the last anomaly detection. */
export interface UnivariateUnivariateLastDetectionResult {
  /**
   * Frequency extracted from the series. Zero means no recurrent pattern has been
   * found.
   */
  period: number;
  /** Suggested input series points needed for detecting the latest point. */
  suggestedWindow: number;
  /** Expected value of the latest point. */
  expectedValue: number;
  /**
   * Upper margin of the latest point. UpperMargin is used to calculate
   * upperBoundary, which is equal to expectedValue + (100 - marginScale)*upperMargin.
   * If the value of latest point is between upperBoundary and lowerBoundary, it
   * should be treated as a normal value. Adjusting the marginScale value enables the anomaly
   * status of the latest point to be changed.
   */
  upperMargin: number;
  /**
   * Lower margin of the latest point. LowerMargin is used to calculate
   * lowerBoundary, which is equal to expectedValue - (100 - marginScale)*lowerMargin.
   */
  lowerMargin: number;
  /**
   * Anomaly status of the latest point. True means the latest point is an anomaly,
   * either in the negative direction or in the positive direction.
   */
  isAnomaly: boolean;
  /**
   * Anomaly status of the latest point in a negative direction. True means the latest
   * point is an anomaly and its real value is smaller than the expected one.
   */
  isNegativeAnomaly: boolean;
  /**
   * Anomaly status of the latest point in a positive direction. True means the latest
   * point is an anomaly and its real value is larger than the expected one.
   */
  isPositiveAnomaly: boolean;
  /**
   * Severity score for the last input point. The larger the value is, the more
   * severe the anomaly is. For normal points, the severity is always 0.
   */
  severity?: number;
}

export function univariateUnivariateLastDetectionResultDeserializer(
  item: any,
): UnivariateUnivariateLastDetectionResult {
  return {
    period: item["period"],
    suggestedWindow: item["suggestedWindow"],
    expectedValue: item["expectedValue"],
    upperMargin: item["upperMargin"],
    lowerMargin: item["lowerMargin"],
    isAnomaly: item["isAnomaly"],
    isNegativeAnomaly: item["isNegativeAnomaly"],
    isPositiveAnomaly: item["isPositiveAnomaly"],
    severity: item["severity"],
  };
}

/** Request of change point detection. */
export interface UnivariateUnivariateChangePointDetectionOptions {
  /**
   * Time series data points. Points should be sorted by time stamp in ascending
   * order to match the change point detection result.
   */
  series: UnivariateTimeSeriesPoint[];
  /** Granularity is used to verify whether the input series is valid. */
  granularity: UnivariateTimeGranularity;
  /**
   * A custom interval is used to set a nonstandard time interval. For example, if the
   * series is 5 minutes, the request can be set as {"granularity":"minutely",
   * "customInterval":5}.
   */
  customInterval?: number;
  /**
   * Argument that indicates the periodic value of a time series. If the value is null or
   * not present, the API will determine the period automatically.
   */
  period?: number;
  /**
   * Argument that indicates an advanced model parameter. A default stableTrendWindow value will
   * be used in detection.
   */
  stableTrendWindow?: number;
  /**
   * Argument that indicates an advanced model parameter between 0.0 and 1.0. The lower the
   * value is, the larger the trend error is, which means less change point will
   * be accepted.
   */
  threshold?: number;
}

export function univariateUnivariateChangePointDetectionOptionsSerializer(
  item: UnivariateUnivariateChangePointDetectionOptions,
): any {
  return {
    series: univariateTimeSeriesPointArraySerializer(item["series"]),
    granularity: item["granularity"],
    customInterval: item["customInterval"],
    period: item["period"],
    stableTrendWindow: item["stableTrendWindow"],
    threshold: item["threshold"],
  };
}

/** Response of change point detection. */
export interface UnivariateUnivariateChangePointDetectionResult {
  /**
   * Frequency extracted from the series. Zero means no recurrent pattern has been
   * found.
   */
  readonly period?: number;
  /**
   * Change point properties for each input point. True means
   * an anomaly (either negative or positive) has been detected. The index of the
   * array is consistent with the input series.
   */
  isChangePoint?: boolean[];
  /** Change point confidence of each point. */
  confidenceScores?: number[];
}

export function univariateUnivariateChangePointDetectionResultDeserializer(
  item: any,
): UnivariateUnivariateChangePointDetectionResult {
  return {
    period: item["period"],
    isChangePoint: !item["isChangePoint"]
      ? item["isChangePoint"]
      : item["isChangePoint"].map((p: any) => {
          return p;
        }),
    confidenceScores: !item["confidenceScores"]
      ? item["confidenceScores"]
      : item["confidenceScores"].map((p: any) => {
          return p;
        }),
  };
}
