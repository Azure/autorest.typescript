// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Detection results for the given resultId. */
export interface MultivariateMultivariateDetectionResult {
  /** Result identifier, which is used to fetch the results of an inference call. */
  readonly resultId: string;
  /** Multivariate anomaly detection status. */
  summary: MultivariateMultivariateBatchDetectionResultSummary;
  /** Detection result for each timestamp. */
  results: MultivariateAnomalyState[];
}

export function multivariateMultivariateDetectionResultDeserializer(
  item: any,
): MultivariateMultivariateDetectionResult {
  return {
    resultId: item["resultId"],
    summary: multivariateMultivariateBatchDetectionResultSummaryDeserializer(
      item["summary"],
    ),
    results: multivariateAnomalyStateArrayDeserializer(item["results"]),
  };
}

/** Multivariate anomaly detection status. */
export interface MultivariateMultivariateBatchDetectionResultSummary {
  /** Status of detection results. One of CREATED, RUNNING, READY, and FAILED. */
  status: MultivariateMultivariateBatchDetectionStatus;
  /** Error message when detection is failed. */
  errors?: MultivariateErrorResponse[];
  /** Variable Status. */
  variableStates?: MultivariateVariableState[];
  /**
   * Detection request for batch inference. This is an asynchronous inference which
   * will need another API to get detection results.
   */
  setupInfo: MultivariateMultivariateBatchDetectionOptions;
}

export function multivariateMultivariateBatchDetectionResultSummaryDeserializer(
  item: any,
): MultivariateMultivariateBatchDetectionResultSummary {
  return {
    status: item["status"],
    errors: !item["errors"]
      ? item["errors"]
      : multivariateErrorResponseArrayDeserializer(item["errors"]),
    variableStates: !item["variableStates"]
      ? item["variableStates"]
      : multivariateVariableStateArrayDeserializer(item["variableStates"]),
    setupInfo: multivariateMultivariateBatchDetectionOptionsDeserializer(
      item["setupInfo"],
    ),
  };
}

/** Type of MultivariateMultivariateBatchDetectionStatus */
export type MultivariateMultivariateBatchDetectionStatus =
  | "CREATED"
  | "RUNNING"
  | "READY"
  | "FAILED";

export function multivariateErrorResponseArrayDeserializer(
  result: Array<MultivariateErrorResponse>,
): any[] {
  return result.map((item) => {
    return multivariateErrorResponseDeserializer(item);
  });
}

/** ErrorResponse contains code and message that shows the error information. */
export interface MultivariateErrorResponse {
  /** The error code. */
  code: string;
  /** The message explaining the error reported by the service. */
  message: string;
}

export function multivariateErrorResponseDeserializer(
  item: any,
): MultivariateErrorResponse {
  return {
    code: item["code"],
    message: item["message"],
  };
}

export function multivariateVariableStateArraySerializer(
  result: Array<MultivariateVariableState>,
): any[] {
  return result.map((item) => {
    return multivariateVariableStateSerializer(item);
  });
}

export function multivariateVariableStateArrayDeserializer(
  result: Array<MultivariateVariableState>,
): any[] {
  return result.map((item) => {
    return multivariateVariableStateDeserializer(item);
  });
}

/** Variable Status. */
export interface MultivariateVariableState {
  /** Variable name in variable states. */
  variable?: string;
  /** Proportion of missing values that need to be filled by fillNAMethod. */
  filledNARatio?: number;
  /** Number of effective data points before applying fillNAMethod. */
  effectiveCount?: number;
  /** First valid timestamp with value of input data. */
  firstTimestamp?: Date;
  /** Last valid timestamp with value of input data. */
  lastTimestamp?: Date;
}

export function multivariateVariableStateSerializer(
  item: MultivariateVariableState,
): any {
  return {
    variable: item["variable"],
    filledNARatio: item["filledNARatio"],
    effectiveCount: item["effectiveCount"],
    firstTimestamp: item["firstTimestamp"]?.toISOString(),
    lastTimestamp: item["lastTimestamp"]?.toISOString(),
  };
}

export function multivariateVariableStateDeserializer(
  item: any,
): MultivariateVariableState {
  return {
    variable: item["variable"],
    filledNARatio: item["filledNARatio"],
    effectiveCount: item["effectiveCount"],
    firstTimestamp: !item["firstTimestamp"]
      ? item["firstTimestamp"]
      : new Date(item["firstTimestamp"]),
    lastTimestamp: !item["lastTimestamp"]
      ? item["lastTimestamp"]
      : new Date(item["lastTimestamp"]),
  };
}

/**
 * Detection request for batch inference. This is an asynchronous inference which
 * will need another API to get detection results.
 */
export interface MultivariateMultivariateBatchDetectionOptions {
  /**
   * Source link to the input data to indicate an accessible Azure storage Uri,
   * either pointed to an Azure blob storage folder, or pointed to a CSV file in
   * Azure blob storage based on you data schema selection. The data schema should
   * be exactly the same with those used in the training phase.
   */
  dataSource: string;
  /**
   * An optional field, which is used to specify the number of top contributed
   * variables for one anomalous timestamp in the response. The default number is
   * 10.
   */
  topContributorCount: number;
  /**
   * A required field, indicating the start time of data for detection, which should
   * be date-time of ISO 8601 format.
   */
  startTime: Date;
  /**
   * A required field, indicating the end time of data for detection, which should
   * be date-time of ISO 8601 format.
   */
  endTime: Date;
}

export function multivariateMultivariateBatchDetectionOptionsSerializer(
  item: MultivariateMultivariateBatchDetectionOptions,
): any {
  return {
    dataSource: item["dataSource"],
    topContributorCount: item["topContributorCount"],
    startTime: item["startTime"].toISOString(),
    endTime: item["endTime"].toISOString(),
  };
}

export function multivariateMultivariateBatchDetectionOptionsDeserializer(
  item: any,
): MultivariateMultivariateBatchDetectionOptions {
  return {
    dataSource: item["dataSource"],
    topContributorCount: item["topContributorCount"],
    startTime: new Date(item["startTime"]),
    endTime: new Date(item["endTime"]),
  };
}

export function multivariateAnomalyStateArrayDeserializer(
  result: Array<MultivariateAnomalyState>,
): any[] {
  return result.map((item) => {
    return multivariateAnomalyStateDeserializer(item);
  });
}

/** Anomaly status and information. */
export interface MultivariateAnomalyState {
  /** The timestamp for this anomaly. */
  timestamp: Date;
  /** The detailed value of this anomalous timestamp. */
  value?: MultivariateAnomalyValue;
  /** Error message for the current timestamp. */
  errors?: MultivariateErrorResponse[];
}

export function multivariateAnomalyStateDeserializer(
  item: any,
): MultivariateAnomalyState {
  return {
    timestamp: new Date(item["timestamp"]),
    value: !item["value"]
      ? item["value"]
      : multivariateAnomalyValueDeserializer(item["value"]),
    errors: !item["errors"]
      ? item["errors"]
      : multivariateErrorResponseArrayDeserializer(item["errors"]),
  };
}

/** Detailed information of the anomalous timestamp. */
export interface MultivariateAnomalyValue {
  /** True if an anomaly is detected at the current timestamp. */
  isAnomaly: boolean;
  /**
   * Indicates the significance of the anomaly. The higher the severity, the more
   * significant the anomaly is.
   */
  severity: number;
  /**
   * Raw anomaly score of severity, will help indicate the degree of abnormality as
   * well.
   */
  score: number;
  /** Interpretation of this anomalous timestamp. */
  interpretation?: MultivariateAnomalyInterpretation[];
}

export function multivariateAnomalyValueDeserializer(
  item: any,
): MultivariateAnomalyValue {
  return {
    isAnomaly: item["isAnomaly"],
    severity: item["severity"],
    score: item["score"],
    interpretation: !item["interpretation"]
      ? item["interpretation"]
      : multivariateAnomalyInterpretationArrayDeserializer(
          item["interpretation"],
        ),
  };
}

export function multivariateAnomalyInterpretationArrayDeserializer(
  result: Array<MultivariateAnomalyInterpretation>,
): any[] {
  return result.map((item) => {
    return multivariateAnomalyInterpretationDeserializer(item);
  });
}

/** Interpretation of the anomalous timestamp. */
export interface MultivariateAnomalyInterpretation {
  /** Variable. */
  variable?: string;
  /**
   * This score shows the percentage contributing to the anomalous timestamp. A
   * number between 0 and 1.
   */
  contributionScore?: number;
  /** Correlation changes among the anomalous variables */
  correlationChanges?: MultivariateCorrelationChanges;
}

export function multivariateAnomalyInterpretationDeserializer(
  item: any,
): MultivariateAnomalyInterpretation {
  return {
    variable: item["variable"],
    contributionScore: item["contributionScore"],
    correlationChanges: !item["correlationChanges"]
      ? item["correlationChanges"]
      : multivariateCorrelationChangesDeserializer(item["correlationChanges"]),
  };
}

/** Correlation changes among the anomalous variables */
export interface MultivariateCorrelationChanges {
  /** The correlated variables that have correlation changes under an anomaly. */
  changedVariables?: string[];
}

export function multivariateCorrelationChangesDeserializer(
  item: any,
): MultivariateCorrelationChanges {
  return {
    changedVariables: !item["changedVariables"]
      ? item["changedVariables"]
      : item["changedVariables"].map((p: any) => {
          return p;
        }),
  };
}

/**
 * Training result of a model including its status, errors and diagnostics
 * information.
 */
export interface MultivariateModelInfo {
  /**
   * Source link to the input data to indicate an accessible Azure storage Uri,
   * either pointed to an Azure blob storage folder, or pointed to a CSV file in
   * Azure blob storage based on you data schema selection.
   */
  dataSource: string;
  /**
   * Data schema of input data source: OneTable or MultiTable. The default
   * DataSchema is OneTable.
   */
  dataSchema?: MultivariateDataSchema;
  /**
   * A required field, indicating the start time of training data, which should be
   * date-time of ISO 8601 format.
   */
  startTime: Date;
  /**
   * A required field, indicating the end time of training data, which should be
   * date-time of ISO 8601 format.
   */
  endTime: Date;
  /**
   * An optional field. The display name of the model whose maximum length is 24
   * characters.
   */
  displayName?: string;
  /**
   * An optional field, indicating how many previous timestamps will be used to
   * detect whether the timestamp is anomaly or not.
   */
  slidingWindow?: number;
  /** An optional field, indicating the manner to align multiple variables. */
  alignPolicy?: MultivariateAlignPolicy;
  /** Model status. One of CREATED, RUNNING, READY, and FAILED. */
  status?: MultivariateModelStatus;
  /** Error messages when failed to create a model. */
  readonly errors?: MultivariateErrorResponse[];
  /** Diagnostics information to help inspect the states of model or variable. */
  diagnosticsInfo?: MultivariateDiagnosticsInfo;
}

export function multivariateModelInfoSerializer(
  item: MultivariateModelInfo,
): any {
  return {
    dataSource: item["dataSource"],
    dataSchema: item["dataSchema"],
    startTime: item["startTime"].toISOString(),
    endTime: item["endTime"].toISOString(),
    displayName: item["displayName"],
    slidingWindow: item["slidingWindow"],
    alignPolicy: !item["alignPolicy"]
      ? item["alignPolicy"]
      : multivariateAlignPolicySerializer(item["alignPolicy"]),
    status: item["status"],
    diagnosticsInfo: !item["diagnosticsInfo"]
      ? item["diagnosticsInfo"]
      : multivariateDiagnosticsInfoSerializer(item["diagnosticsInfo"]),
  };
}

export function multivariateModelInfoDeserializer(
  item: any,
): MultivariateModelInfo {
  return {
    dataSource: item["dataSource"],
    dataSchema: item["dataSchema"],
    startTime: new Date(item["startTime"]),
    endTime: new Date(item["endTime"]),
    displayName: item["displayName"],
    slidingWindow: item["slidingWindow"],
    alignPolicy: !item["alignPolicy"]
      ? item["alignPolicy"]
      : multivariateAlignPolicyDeserializer(item["alignPolicy"]),
    status: item["status"],
    errors: !item["errors"]
      ? item["errors"]
      : multivariateErrorResponseArrayDeserializer(item["errors"]),
    diagnosticsInfo: !item["diagnosticsInfo"]
      ? item["diagnosticsInfo"]
      : multivariateDiagnosticsInfoDeserializer(item["diagnosticsInfo"]),
  };
}

/** Data schema of input data source: OneTable or MultiTable. The default DataSchema is OneTable. */
export type MultivariateDataSchema = "OneTable" | "MultiTable";

/** An optional field, indicating the manner to align multiple variables. */
export interface MultivariateAlignPolicy {
  /**
   * An optional field, indicating how to align different variables to the same
   * time-range. Either Inner or Outer.
   */
  alignMode?: MultivariateAlignMode;
  /**
   * An optional field, indicating how missing values will be filled. One of
   * Previous, Subsequent, Linear, Zero, Fixed.
   */
  fillNAMethod?: MultivariateFillNAMethod;
  /** An optional field. Required when fillNAMethod is Fixed. */
  paddingValue?: number;
}

export function multivariateAlignPolicySerializer(
  item: MultivariateAlignPolicy,
): any {
  return {
    alignMode: item["alignMode"],
    fillNAMethod: item["fillNAMethod"],
    paddingValue: item["paddingValue"],
  };
}

export function multivariateAlignPolicyDeserializer(
  item: any,
): MultivariateAlignPolicy {
  return {
    alignMode: item["alignMode"],
    fillNAMethod: item["fillNAMethod"],
    paddingValue: item["paddingValue"],
  };
}

/** Type of MultivariateAlignMode */
export type MultivariateAlignMode = "Inner" | "Outer";
/** An optional field, indicating how missing values will be filled. One of Previous, Subsequent, Linear, Zero, Fixed. */
export type MultivariateFillNAMethod =
  | "Previous"
  | "Subsequent"
  | "Linear"
  | "Zero"
  | "Fixed";
/** Type of MultivariateModelStatus */
export type MultivariateModelStatus =
  | "CREATED"
  | "RUNNING"
  | "READY"
  | "FAILED";

/** Diagnostics information to help inspect the states of model or variable. */
export interface MultivariateDiagnosticsInfo {
  /** Model status. */
  modelState?: MultivariateModelState;
  /** Variable Status. */
  variableStates?: MultivariateVariableState[];
}

export function multivariateDiagnosticsInfoSerializer(
  item: MultivariateDiagnosticsInfo,
): any {
  return {
    modelState: !item["modelState"]
      ? item["modelState"]
      : multivariateModelStateSerializer(item["modelState"]),
    variableStates: !item["variableStates"]
      ? item["variableStates"]
      : multivariateVariableStateArraySerializer(item["variableStates"]),
  };
}

export function multivariateDiagnosticsInfoDeserializer(
  item: any,
): MultivariateDiagnosticsInfo {
  return {
    modelState: !item["modelState"]
      ? item["modelState"]
      : multivariateModelStateDeserializer(item["modelState"]),
    variableStates: !item["variableStates"]
      ? item["variableStates"]
      : multivariateVariableStateArrayDeserializer(item["variableStates"]),
  };
}

/** Model status. */
export interface MultivariateModelState {
  /**
   * This indicates the number of passes of the entire training dataset the
   * algorithm has completed.
   */
  epochIds?: number[];
  /**
   * List of metrics used to assess how the model fits the training data for each
   * epoch.
   */
  trainLosses?: number[];
  /**
   * List of metrics used to assess how the model fits the validation set for each
   * epoch.
   */
  validationLosses?: number[];
  /** Latency for each epoch. */
  latenciesInSeconds?: number[];
}

export function multivariateModelStateSerializer(
  item: MultivariateModelState,
): any {
  return {
    epochIds: !item["epochIds"]
      ? item["epochIds"]
      : item["epochIds"].map((p: any) => {
          return p;
        }),
    trainLosses: !item["trainLosses"]
      ? item["trainLosses"]
      : item["trainLosses"].map((p: any) => {
          return p;
        }),
    validationLosses: !item["validationLosses"]
      ? item["validationLosses"]
      : item["validationLosses"].map((p: any) => {
          return p;
        }),
    latenciesInSeconds: !item["latenciesInSeconds"]
      ? item["latenciesInSeconds"]
      : item["latenciesInSeconds"].map((p: any) => {
          return p;
        }),
  };
}

export function multivariateModelStateDeserializer(
  item: any,
): MultivariateModelState {
  return {
    epochIds: !item["epochIds"]
      ? item["epochIds"]
      : item["epochIds"].map((p: any) => {
          return p;
        }),
    trainLosses: !item["trainLosses"]
      ? item["trainLosses"]
      : item["trainLosses"].map((p: any) => {
          return p;
        }),
    validationLosses: !item["validationLosses"]
      ? item["validationLosses"]
      : item["validationLosses"].map((p: any) => {
          return p;
        }),
    latenciesInSeconds: !item["latenciesInSeconds"]
      ? item["latenciesInSeconds"]
      : item["latenciesInSeconds"].map((p: any) => {
          return p;
        }),
  };
}

/** Response of getting a model. */
export interface MultivariateAnomalyDetectionModel {
  /** Model identifier. */
  readonly modelId: string;
  /** Date and time (UTC) when the model was created. */
  createdTime: Date;
  /** Date and time (UTC) when the model was last updated. */
  lastUpdatedTime: Date;
  /**
   * Training result of a model including its status, errors and diagnostics
   * information.
   */
  modelInfo?: MultivariateModelInfo;
}

export function multivariateAnomalyDetectionModelDeserializer(
  item: any,
): MultivariateAnomalyDetectionModel {
  return {
    modelId: item["modelId"],
    createdTime: new Date(item["createdTime"]),
    lastUpdatedTime: new Date(item["lastUpdatedTime"]),
    modelInfo: !item["modelInfo"]
      ? item["modelInfo"]
      : multivariateModelInfoDeserializer(item["modelInfo"]),
  };
}

/** Response of listing models. */
export interface _MultivariateModelList {
  /** List of models. */
  models: MultivariateAnomalyDetectionModel[];
  /** Number of trained multivariate models. */
  currentCount: number;
  /** Maximum number of models that can be trained for this Anomaly Detector resource. */
  maxCount: number;
  /** The link to fetch more models. */
  nextLink?: string;
}

export function _multivariateModelListDeserializer(
  item: any,
): _MultivariateModelList {
  return {
    models: multivariateAnomalyDetectionModelArrayDeserializer(item["models"]),
    currentCount: item["currentCount"],
    maxCount: item["maxCount"],
    nextLink: item["nextLink"],
  };
}

export function multivariateAnomalyDetectionModelArrayDeserializer(
  result: Array<MultivariateAnomalyDetectionModel>,
): any[] {
  return result.map((item) => {
    return multivariateAnomalyDetectionModelDeserializer(item);
  });
}

/** Request of last detection. */
export interface MultivariateMultivariateLastDetectionOptions {
  /**
   * This contains the inference data, including the name, timestamps(ISO 8601) and
   * values of variables.
   */
  variables: MultivariateVariableValues[];
  /**
   * An optional field, which is used to specify the number of top contributed
   * variables for one anomalous timestamp in the response. The default number is
   * 10.
   */
  topContributorCount: number;
}

export function multivariateMultivariateLastDetectionOptionsSerializer(
  item: MultivariateMultivariateLastDetectionOptions,
): any {
  return {
    variables: multivariateVariableValuesArraySerializer(item["variables"]),
    topContributorCount: item["topContributorCount"],
  };
}

export function multivariateVariableValuesArraySerializer(
  result: Array<MultivariateVariableValues>,
): any[] {
  return result.map((item) => {
    return multivariateVariableValuesSerializer(item);
  });
}

/** Variable values. */
export interface MultivariateVariableValues {
  /** Variable name of last detection request. */
  variable: string;
  /** Timestamps of last detection request */
  timestamps: string[];
  /** Values of variables. */
  values: number[];
}

export function multivariateVariableValuesSerializer(
  item: MultivariateVariableValues,
): any {
  return {
    variable: item["variable"],
    timestamps: item["timestamps"].map((p: any) => {
      return p;
    }),
    values: item["values"].map((p: any) => {
      return p;
    }),
  };
}

/** Results of last detection. */
export interface MultivariateMultivariateLastDetectionResult {
  /** Variable Status. */
  variableStates?: MultivariateVariableState[];
  /** Anomaly status and information. */
  results?: MultivariateAnomalyState[];
}

export function multivariateMultivariateLastDetectionResultDeserializer(
  item: any,
): MultivariateMultivariateLastDetectionResult {
  return {
    variableStates: !item["variableStates"]
      ? item["variableStates"]
      : multivariateVariableStateArrayDeserializer(item["variableStates"]),
    results: !item["results"]
      ? item["results"]
      : multivariateAnomalyStateArrayDeserializer(item["results"]),
  };
}

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
  return { timestamp: item["timestamp"]?.toISOString(), value: item["value"] };
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

/** Known values of {@link Versions} that the service accepts. */
export enum KnownVersions {
  v1_1 = "v1.1",
}
