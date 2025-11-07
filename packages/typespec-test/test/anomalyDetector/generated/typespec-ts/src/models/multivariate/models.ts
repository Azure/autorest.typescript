// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** Detection results for the resultId value. */
export interface MultivariateMultivariateDetectionResult {
  /** Result identifier that's used to fetch the results of an inference call. */
  resultId: string;
  /** Multivariate anomaly detection status. */
  summary: MultivariateMultivariateBatchDetectionResultSummary;
  /** Detection result for each time stamp. */
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
  /** Status of detection results. */
  status: MultivariateMultivariateBatchDetectionStatus;
  /** Error message when detection fails. */
  errors?: MultivariateErrorResponse[];
  /** Variable status. */
  variableStates?: MultivariateVariableState[];
  /**
   * Detection request for batch inference. This is an asynchronous inference that
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

/** Error information that the API returned. */
export interface MultivariateErrorResponse {
  /** Error code. */
  code: string;
  /** Message that explains the error that the service reported. */
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

export function multivariateVariableStateArrayDeserializer(
  result: Array<MultivariateVariableState>,
): any[] {
  return result.map((item) => {
    return multivariateVariableStateDeserializer(item);
  });
}

/** Variable status. */
export interface MultivariateVariableState {
  /** Variable name in variable states. */
  variable?: string;
  /** Proportion of missing values that need to be filled by fillNAMethod. */
  filledNARatio?: number;
  /** Number of effective data points before fillNAMethod is applied. */
  effectiveCount?: number;
  /** First valid time stamp with a value of input data. */
  firstTimestamp?: Date;
  /** Last valid time stamp with a value of input data. */
  lastTimestamp?: Date;
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
 * Detection request for batch inference. This is an asynchronous inference that
 * will need another API to get detection results.
 */
export interface MultivariateMultivariateBatchDetectionOptions {
  /**
   * Source link to the input data to indicate an accessible Azure Storage URI.
   * It either points to an Azure Blob Storage folder or points to a CSV file in
   * Azure Blob Storage, based on your data schema selection. The data schema should
   * be exactly the same as those used in the training phase. The input data must
   * contain at least slidingWindow entries preceding the start time of the data
   * to be detected.
   */
  dataSource: string;
  /** Number of top contributed variables for one anomalous time stamp in the response. */
  topContributorCount?: number;
  /**
   * Start date/time of data for detection, which should
   * be in ISO 8601 format.
   */
  startTime: Date;
  /**
   * End date/time of data for detection, which should
   * be in ISO 8601 format.
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
  /** Time stamp for this anomaly. */
  timestamp: Date;
  /** Detailed value of this anomalous time stamp. */
  value?: MultivariateAnomalyValue;
  /** Error message for the current time stamp. */
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

/** Detailed information of the anomalous time stamp. */
export interface MultivariateAnomalyValue {
  /** True if an anomaly is detected at the current time stamp. */
  isAnomaly: boolean;
  /**
   * Indicates the significance of the anomaly. The higher the severity, the more
   * significant the anomaly is.
   */
  severity: number;
  /** Raw anomaly score of severity, to help indicate the degree of abnormality. */
  score: number;
  /** Interpretation of this anomalous time stamp. */
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

/** Interpretation of the anomalous time stamp. */
export interface MultivariateAnomalyInterpretation {
  /** Variable. */
  variable?: string;
  /**
   * This score shows the percentage that contributes to the anomalous time stamp. It's a
   * number between 0 and 1.
   */
  contributionScore?: number;
  /** Correlation changes among the anomalous variables. */
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

/** Correlation changes among the anomalous variables. */
export interface MultivariateCorrelationChanges {
  /** Correlated variables that have correlation changes under an anomaly. */
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

/** Error response. */
export interface MultivariateResponseError {
  /** Error code. */
  code: string;
  /** Message that explains the error that the service reported. */
  message: string;
}

export function multivariateResponseErrorDeserializer(
  item: any,
): MultivariateResponseError {
  return {
    code: item["code"],
    message: item["message"],
  };
}

/**
 * Training result of a model, including its status, errors, and diagnostics
 * information.
 */
export interface MultivariateModelInfo {
  /**
   * Source link to the input data to indicate an accessible Azure Storage URI.
   * It either points to an Azure Blob Storage folder or points to a CSV file in
   * Azure Blob Storage, based on your data schema selection.
   */
  dataSource: string;
  /**
   * Data schema of the input data source. The default
   * is OneTable.
   */
  dataSchema?: MultivariateDataSchema;
  /**
   * Start date/time of training data, which should be
   * in ISO 8601 format.
   */
  startTime: Date;
  /**
   * End date/time of training data, which should be
   * in ISO 8601 format.
   */
  endTime: Date;
  /**
   * Display name of the model. Maximum length is 24
   * characters.
   */
  displayName?: string;
  /**
   * Number of previous time stamps that will be used to
   * detect whether the time stamp is an anomaly or not.
   */
  slidingWindow?: number;
  /** Manner of aligning multiple variables. */
  alignPolicy?: MultivariateAlignPolicy;
  /** Model status. */
  readonly status?: MultivariateModelStatus;
  /** Error messages after failure to create a model. */
  readonly errors?: MultivariateErrorResponse[];
  /** Diagnostics information to help inspect the states of a model or variable. */
  readonly diagnosticsInfo?: MultivariateDiagnosticsInfo;
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

/** Data schema of the input data source. The default is OneTable. */
export type MultivariateDataSchema = "OneTable" | "MultiTable";

/** Manner of aligning multiple variables. */
export interface MultivariateAlignPolicy {
  /**
   * Field that indicates how to align different variables to the same
   * time range.
   */
  alignMode?: MultivariateAlignMode;
  /** Field that indicates how missing values will be filled. */
  fillNAMethod?: MultivariateFillNAMethod;
  /** Field that's required when fillNAMethod is Fixed. */
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
/** Field that indicates how missing values will be filled. */
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

/** Diagnostics information to help inspect the states of a model or variable. */
export interface MultivariateDiagnosticsInfo {
  /** Model status. */
  modelState?: MultivariateModelState;
  /** Variable status. */
  variableStates?: MultivariateVariableState[];
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
   * Number of passes of the entire training dataset that the
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
  modelId: string;
  /** Date and time (UTC) when the model was created. */
  createdTime: Date;
  /** Date and time (UTC) when the model was last updated. */
  lastUpdatedTime: Date;
  /**
   * Training result of a model, including its status, errors, and diagnostics
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
  /** Link to fetch more models. */
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

/** Request of the last detection. */
export interface MultivariateMultivariateLastDetectionOptions {
  /**
   * Contains the inference data, including the name, time stamps (ISO 8601), and
   * values of variables.
   */
  variables: MultivariateVariableValues[];
  /**
   * Number of top contributed
   * variables for one anomalous time stamp in the response. The default is
   * 10.
   */
  topContributorCount?: number;
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
  /** Variable name of the last detection request. */
  variable: string;
  /** Time stamps of the last detection request. */
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

/** Results of the last detection. */
export interface MultivariateMultivariateLastDetectionResult {
  /** Variable status. */
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
