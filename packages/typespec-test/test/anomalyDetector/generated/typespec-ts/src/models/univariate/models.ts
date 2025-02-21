// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** The request of entire or last anomaly detection. */
export interface UnivariateUnivariateDetectionOptions {
  /**
   * Time series data points. Points should be sorted by timestamp in ascending
   * order to match the anomaly detection result. If the data is not sorted
   * correctly or there is duplicated timestamp, the API will not work. In such
   * case, an error message will be returned.
   */
  series: UnivariateTimeSeriesPoint[];
  /**
   * Optional argument, can be one of yearly, monthly, weekly, daily, hourly,
   * minutely, secondly, microsecond or none. If granularity is not present, it will
   * be none by default. If granularity is none, the timestamp property in time
   * series point can be absent.
   */
  granularity?: UnivariateTimeGranularity;
  /**
   * Custom Interval is used to set non-standard time interval, for example, if the
   * series is 5 minutes, request can be set as {"granularity":"minutely",
   * "customInterval":5}.
   */
  customInterval?: number;
  /**
   * Optional argument, periodic value of a time series. If the value is null or
   * does not present, the API will determine the period automatically.
   */
  period?: number;
  /** Optional argument, advanced model parameter, max anomaly ratio in a time series. */
  maxAnomalyRatio?: number;
  /**
   * Optional argument, advanced model parameter, between 0-99, the lower the value
   * is, the larger the margin value will be which means less anomalies will be
   * accepted.
   */
  sensitivity?: number;
  /**
   * Used to specify how to deal with missing values in the input series, it's used
   * when granularity is not "none".
   */
  imputeMode?: UnivariateImputeMode;
  /**
   * Used to specify the value to fill, it's used when granularity is not "none"
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

/** The definition of input timeseries points. */
export interface UnivariateTimeSeriesPoint {
  /** Optional argument, timestamp of a data point (ISO8601 format). */
  timestamp?: Date;
  /** The measurement of that point, should be float. */
  value: number;
}

export function univariateTimeSeriesPointSerializer(
  item: UnivariateTimeSeriesPoint,
): any {
  return {
    timestamp: !item["timestamp"]
      ? item["timestamp"]
      : item["timestamp"].toISOString(),
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
export type UnivariateImputeMode =
  | "auto"
  | "previous"
  | "linear"
  | "fixed"
  | "zero"
  | "notFill";

/** The response of entire anomaly detection. */
export interface UnivariateUnivariateEntireDetectionResult {
  /**
   * Frequency extracted from the series, zero means no recurrent pattern has been
   * found.
   */
  period: number;
  /**
   * ExpectedValues contain expected value for each input point. The index of the
   * array is consistent with the input series.
   */
  expectedValues: number[];
  /**
   * UpperMargins contain upper margin of each input point. UpperMargin is used to
   * calculate upperBoundary, which equals to expectedValue + (100 -
   * marginScale)*upperMargin. Anomalies in response can be filtered by
   * upperBoundary and lowerBoundary. By adjusting marginScale value, less
   * significant anomalies can be filtered in client side. The index of the array is
   * consistent with the input series.
   */
  upperMargins: number[];
  /**
   * LowerMargins contain lower margin of each input point. LowerMargin is used to
   * calculate lowerBoundary, which equals to expectedValue - (100 -
   * marginScale)*lowerMargin. Points between the boundary can be marked as normal
   * ones in client side. The index of the array is consistent with the input
   * series.
   */
  lowerMargins: number[];
  /**
   * IsAnomaly contains anomaly properties for each input point. True means an
   * anomaly either negative or positive has been detected. The index of the array
   * is consistent with the input series.
   */
  isAnomaly: boolean[];
  /**
   * IsNegativeAnomaly contains anomaly status in negative direction for each input
   * point. True means a negative anomaly has been detected. A negative anomaly
   * means the point is detected as an anomaly and its real value is smaller than
   * the expected one. The index of the array is consistent with the input series.
   */
  isNegativeAnomaly: boolean[];
  /**
   * IsPositiveAnomaly contain anomaly status in positive direction for each input
   * point. True means a positive anomaly has been detected. A positive anomaly
   * means the point is detected as an anomaly and its real value is larger than the
   * expected one. The index of the array is consistent with the input series.
   */
  isPositiveAnomaly: boolean[];
  /**
   * The severity score for each input point. The larger the value is, the more
   * sever the anomaly is. For normal points, the "severity" is always 0.
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

/** Error information returned by the API. */
export interface UnivariateAnomalyDetectorError {
  /** The error code. */
  code?: UnivariateAnomalyDetectorErrorCodes;
  /** A message explaining the error reported by the service. */
  message?: string;
}

export function univariateAnomalyDetectorErrorDeserializer(
  item: any,
): UnivariateAnomalyDetectorError {
  return {
    code: item["code"],
    message: item["message"],
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

/** The response of last anomaly detection. */
export interface UnivariateUnivariateLastDetectionResult {
  /**
   * Frequency extracted from the series, zero means no recurrent pattern has been
   * found.
   */
  period: number;
  /** Suggested input series points needed for detecting the latest point. */
  suggestedWindow: number;
  /** Expected value of the latest point. */
  expectedValue: number;
  /**
   * Upper margin of the latest point. UpperMargin is used to calculate
   * upperBoundary, which equals to expectedValue + (100 - marginScale)*upperMargin.
   * If the value of latest point is between upperBoundary and lowerBoundary, it
   * should be treated as normal value. By adjusting marginScale value, anomaly
   * status of latest point can be changed.
   */
  upperMargin: number;
  /**
   * Lower margin of the latest point. LowerMargin is used to calculate
   * lowerBoundary, which equals to expectedValue - (100 - marginScale)*lowerMargin.
   *
   */
  lowerMargin: number;
  /**
   * Anomaly status of the latest point, true means the latest point is an anomaly
   * either in negative direction or positive direction.
   */
  isAnomaly: boolean;
  /**
   * Anomaly status in negative direction of the latest point. True means the latest
   * point is an anomaly and its real value is smaller than the expected one.
   */
  isNegativeAnomaly: boolean;
  /**
   * Anomaly status in positive direction of the latest point. True means the latest
   * point is an anomaly and its real value is larger than the expected one.
   */
  isPositiveAnomaly: boolean;
  /**
   * The severity score for the last input point. The larger the value is, the more
   * sever the anomaly is. For normal points, the "severity" is always 0.
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

/** The request of change point detection. */
export interface UnivariateUnivariateChangePointDetectionOptions {
  /**
   * Time series data points. Points should be sorted by timestamp in ascending
   * order to match the change point detection result.
   */
  series: UnivariateTimeSeriesPoint[];
  /**
   * Can only be one of yearly, monthly, weekly, daily, hourly, minutely or
   * secondly. Granularity is used for verify whether input series is valid.
   */
  granularity: UnivariateTimeGranularity;
  /**
   * Custom Interval is used to set non-standard time interval, for example, if the
   * series is 5 minutes, request can be set as {"granularity":"minutely",
   * "customInterval":5}.
   */
  customInterval?: number;
  /**
   * Optional argument, periodic value of a time series. If the value is null or
   * does not present, the API will determine the period automatically.
   */
  period?: number;
  /**
   * Optional argument, advanced model parameter, a default stableTrendWindow will
   * be used in detection.
   */
  stableTrendWindow?: number;
  /**
   * Optional argument, advanced model parameter, between 0.0-1.0, the lower the
   * value is, the larger the trend error will be which means less change point will
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

/** The response of change point detection. */
export interface UnivariateUnivariateChangePointDetectionResult {
  /**
   * Frequency extracted from the series, zero means no recurrent pattern has been
   * found.
   */
  readonly period?: number;
  /**
   * isChangePoint contains change point properties for each input point. True means
   * an anomaly either negative or positive has been detected. The index of the
   * array is consistent with the input series.
   */
  isChangePoint?: boolean[];
  /** the change point confidence of each point */
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
