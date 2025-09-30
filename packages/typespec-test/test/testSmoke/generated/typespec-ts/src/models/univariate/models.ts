// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Request of the entire or last anomaly detection. */
export interface UnivariateDetectionOptions {
  /**
   * Time series data points. Points should be sorted by time stamp in ascending
   * order to match the anomaly detection result. If the data is not sorted
   * correctly or there's a duplicated time stamp, the API won't work. In such
   * a case, an error message is returned.
   */
  series: TimeSeriesPoint[];
  /**
   * Argument that indicates time granularity. If granularity is not present, the value
   * is none by default. If granularity is none, the time stamp property in the time
   * series point can be absent.
   */
  granularity?: TimeGranularity;
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
  imputeMode?: ImputeMode;
  /**
   * Specifies the value to fill. It's used when granularity is not "none"
   * and imputeMode is "fixed".
   */
  imputeFixedValue?: number;
}

export function univariateDetectionOptionsSerializer(
  item: UnivariateDetectionOptions,
): any {
  return {
    series: timeSeriesPointArraySerializer(item["series"]),
    granularity: item["granularity"],
    customInterval: item["customInterval"],
    period: item["period"],
    maxAnomalyRatio: item["maxAnomalyRatio"],
    sensitivity: item["sensitivity"],
    imputeMode: item["imputeMode"],
    imputeFixedValue: item["imputeFixedValue"],
  };
}

export function timeSeriesPointArraySerializer(
  result: Array<TimeSeriesPoint>,
): any[] {
  return result.map((item) => {
    return timeSeriesPointSerializer(item);
  });
}

/** Definition of input time series points. */
export interface TimeSeriesPoint {
  /** Argument that indicates the time stamp of a data point (ISO8601 format). */
  timestamp?: Date;
  /** Measurement of that point. */
  value: number;
}

export function timeSeriesPointSerializer(item: TimeSeriesPoint): any {
  return {
    timestamp: !item["timestamp"]
      ? item["timestamp"]
      : item["timestamp"].toISOString(),
    value: item["value"],
  };
}

/** Type of TimeGranularity */
export type TimeGranularity =
  | "yearly"
  | "monthly"
  | "weekly"
  | "daily"
  | "hourly"
  | "minutely"
  | "secondly"
  | "microsecond"
  | "none";
/** Type of ImputeMode */
export type ImputeMode =
  | "auto"
  | "previous"
  | "linear"
  | "fixed"
  | "zero"
  | "notFill";

/** Error information that the API returned. */
export interface AnomalyDetectorError {
  /** Error code. */
  code: AnomalyDetectorErrorCodes;
  /** Message that explains the error that the service reported. */
  message: string;
}

export function anomalyDetectorErrorDeserializer(
  item: any,
): AnomalyDetectorError {
  return {
    code: item["code"],
    message: item["message"],
  };
}

/** Type of AnomalyDetectorErrorCodes */
export type AnomalyDetectorErrorCodes =
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
export interface UnivariateLastDetectionResult {
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

export function univariateLastDetectionResultDeserializer(
  item: any,
): UnivariateLastDetectionResult {
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
export interface UnivariateChangePointDetectionOptions {
  /**
   * Time series data points. Points should be sorted by time stamp in ascending
   * order to match the change point detection result.
   */
  series: TimeSeriesPoint[];
  /** Granularity is used to verify whether the input series is valid. */
  granularity: TimeGranularity;
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

export function univariateChangePointDetectionOptionsSerializer(
  item: UnivariateChangePointDetectionOptions,
): any {
  return {
    series: timeSeriesPointArraySerializer(item["series"]),
    granularity: item["granularity"],
    customInterval: item["customInterval"],
    period: item["period"],
    stableTrendWindow: item["stableTrendWindow"],
    threshold: item["threshold"],
  };
}

/** Response of change point detection. */
export interface UnivariateChangePointDetectionResult {
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

export function univariateChangePointDetectionResultDeserializer(
  item: any,
): UnivariateChangePointDetectionResult {
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
