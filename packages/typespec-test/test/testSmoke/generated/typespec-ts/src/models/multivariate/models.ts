// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Detection results for the resultId value. */
export interface MultivariateDetectionResult {
  /** Result identifier that's used to fetch the results of an inference call. */
  resultId: string;
  /** Multivariate anomaly detection status. */
  summary: MultivariateBatchDetectionResultSummary;
  /** Detection result for each time stamp. */
  results: AnomalyState[];
}

export function multivariateDetectionResultDeserializer(
  item: any,
): MultivariateDetectionResult {
  return {
    resultId: item["resultId"],
    summary: multivariateBatchDetectionResultSummaryDeserializer(
      item["summary"],
    ),
    results: anomalyStateArrayDeserializer(item["results"]),
  };
}

/** Multivariate anomaly detection status. */
export interface MultivariateBatchDetectionResultSummary {
  /** Status of detection results. */
  status: MultivariateBatchDetectionStatus;
  /** Error message when detection fails. */
  errors?: ErrorResponse[];
  /** Variable status. */
  variableStates?: VariableState[];
  /**
   * Detection request for batch inference. This is an asynchronous inference that
   * will need another API to get detection results.
   */
  setupInfo: MultivariateBatchDetectionOptions;
}

export function multivariateBatchDetectionResultSummaryDeserializer(
  item: any,
): MultivariateBatchDetectionResultSummary {
  return {
    status: item["status"],
    errors: !item["errors"]
      ? item["errors"]
      : errorResponseArrayDeserializer(item["errors"]),
    variableStates: !item["variableStates"]
      ? item["variableStates"]
      : variableStateArrayDeserializer(item["variableStates"]),
    setupInfo: multivariateBatchDetectionOptionsDeserializer(item["setupInfo"]),
  };
}

/** Type of MultivariateBatchDetectionStatus */
export type MultivariateBatchDetectionStatus =
  | "CREATED"
  | "RUNNING"
  | "READY"
  | "FAILED";

export function errorResponseArrayDeserializer(
  result: Array<ErrorResponse>,
): any[] {
  return result.map((item) => {
    return errorResponseDeserializer(item);
  });
}

/** Error information that the API returned. */
export interface ErrorResponse {
  /** Error code. */
  code: string;
  /** Message that explains the error that the service reported. */
  message: string;
}

export function errorResponseDeserializer(item: any): ErrorResponse {
  return {
    code: item["code"],
    message: item["message"],
  };
}

export function variableStateArrayDeserializer(
  result: Array<VariableState>,
): any[] {
  return result.map((item) => {
    return variableStateDeserializer(item);
  });
}

/** Variable status. */
export interface VariableState {
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

export function variableStateDeserializer(item: any): VariableState {
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
export interface MultivariateBatchDetectionOptions {
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

export function multivariateBatchDetectionOptionsSerializer(
  item: MultivariateBatchDetectionOptions,
): any {
  return {
    dataSource: item["dataSource"],
    topContributorCount: item["topContributorCount"],
    startTime: item["startTime"].toISOString(),
    endTime: item["endTime"].toISOString(),
  };
}

export function multivariateBatchDetectionOptionsDeserializer(
  item: any,
): MultivariateBatchDetectionOptions {
  return {
    dataSource: item["dataSource"],
    topContributorCount: item["topContributorCount"],
    startTime: new Date(item["startTime"]),
    endTime: new Date(item["endTime"]),
  };
}

export function anomalyStateArrayDeserializer(
  result: Array<AnomalyState>,
): any[] {
  return result.map((item) => {
    return anomalyStateDeserializer(item);
  });
}

/** Anomaly status and information. */
export interface AnomalyState {
  /** Time stamp for this anomaly. */
  timestamp: Date;
  /** Detailed value of this anomalous time stamp. */
  value?: AnomalyValue;
  /** Error message for the current time stamp. */
  errors?: ErrorResponse[];
}

export function anomalyStateDeserializer(item: any): AnomalyState {
  return {
    timestamp: new Date(item["timestamp"]),
    value: !item["value"]
      ? item["value"]
      : anomalyValueDeserializer(item["value"]),
    errors: !item["errors"]
      ? item["errors"]
      : errorResponseArrayDeserializer(item["errors"]),
  };
}

/** Detailed information of the anomalous time stamp. */
export interface AnomalyValue {
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
  interpretation?: AnomalyInterpretation[];
}

export function anomalyValueDeserializer(item: any): AnomalyValue {
  return {
    isAnomaly: item["isAnomaly"],
    severity: item["severity"],
    score: item["score"],
    interpretation: !item["interpretation"]
      ? item["interpretation"]
      : anomalyInterpretationArrayDeserializer(item["interpretation"]),
  };
}

export function anomalyInterpretationArrayDeserializer(
  result: Array<AnomalyInterpretation>,
): any[] {
  return result.map((item) => {
    return anomalyInterpretationDeserializer(item);
  });
}

/** Interpretation of the anomalous time stamp. */
export interface AnomalyInterpretation {
  /** Variable. */
  variable?: string;
  /**
   * This score shows the percentage that contributes to the anomalous time stamp. It's a
   * number between 0 and 1.
   */
  contributionScore?: number;
  /** Correlation changes among the anomalous variables. */
  correlationChanges?: CorrelationChanges;
}

export function anomalyInterpretationDeserializer(
  item: any,
): AnomalyInterpretation {
  return {
    variable: item["variable"],
    contributionScore: item["contributionScore"],
    correlationChanges: !item["correlationChanges"]
      ? item["correlationChanges"]
      : correlationChangesDeserializer(item["correlationChanges"]),
  };
}

/** Correlation changes among the anomalous variables. */
export interface CorrelationChanges {
  /** Correlated variables that have correlation changes under an anomaly. */
  changedVariables?: string[];
}

export function correlationChangesDeserializer(item: any): CorrelationChanges {
  return {
    changedVariables: !item["changedVariables"]
      ? item["changedVariables"]
      : item["changedVariables"].map((p: any) => {
          return p;
        }),
  };
}

/** Error response. */
export interface ResponseError {
  /** Error code. */
  code: string;
  /** Message that explains the error that the service reported. */
  message: string;
}

export function responseErrorDeserializer(item: any): ResponseError {
  return {
    code: item["code"],
    message: item["message"],
  };
}

/**
 * Training result of a model, including its status, errors, and diagnostics
 * information.
 */
export interface ModelInfo {
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
  dataSchema?: DataSchema;
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
  alignPolicy?: AlignPolicy;
  /** Model status. */
  readonly status?: ModelStatus;
  /** Error messages after failure to create a model. */
  readonly errors?: ErrorResponse[];
  /** Diagnostics information to help inspect the states of a model or variable. */
  readonly diagnosticsInfo?: DiagnosticsInfo;
}

export function modelInfoSerializer(item: ModelInfo): any {
  return {
    dataSource: item["dataSource"],
    dataSchema: item["dataSchema"],
    startTime: item["startTime"].toISOString(),
    endTime: item["endTime"].toISOString(),
    displayName: item["displayName"],
    slidingWindow: item["slidingWindow"],
    alignPolicy: !item["alignPolicy"]
      ? item["alignPolicy"]
      : alignPolicySerializer(item["alignPolicy"]),
  };
}

export function modelInfoDeserializer(item: any): ModelInfo {
  return {
    dataSource: item["dataSource"],
    dataSchema: item["dataSchema"],
    startTime: new Date(item["startTime"]),
    endTime: new Date(item["endTime"]),
    displayName: item["displayName"],
    slidingWindow: item["slidingWindow"],
    alignPolicy: !item["alignPolicy"]
      ? item["alignPolicy"]
      : alignPolicyDeserializer(item["alignPolicy"]),
    status: item["status"],
    errors: !item["errors"]
      ? item["errors"]
      : errorResponseArrayDeserializer(item["errors"]),
    diagnosticsInfo: !item["diagnosticsInfo"]
      ? item["diagnosticsInfo"]
      : diagnosticsInfoDeserializer(item["diagnosticsInfo"]),
  };
}

/** Data schema of the input data source. The default is OneTable. */
export type DataSchema = "OneTable" | "MultiTable";

/** Manner of aligning multiple variables. */
export interface AlignPolicy {
  /**
   * Field that indicates how to align different variables to the same
   * time range.
   */
  alignMode?: AlignMode;
  /** Field that indicates how missing values will be filled. */
  fillNAMethod?: FillNAMethod;
  /** Field that's required when fillNAMethod is Fixed. */
  paddingValue?: number;
}

export function alignPolicySerializer(item: AlignPolicy): any {
  return {
    alignMode: item["alignMode"],
    fillNAMethod: item["fillNAMethod"],
    paddingValue: item["paddingValue"],
  };
}

export function alignPolicyDeserializer(item: any): AlignPolicy {
  return {
    alignMode: item["alignMode"],
    fillNAMethod: item["fillNAMethod"],
    paddingValue: item["paddingValue"],
  };
}

/** Type of AlignMode */
export type AlignMode = "Inner" | "Outer";
/** Field that indicates how missing values will be filled. */
export type FillNAMethod =
  | "Previous"
  | "Subsequent"
  | "Linear"
  | "Zero"
  | "Fixed";
/** Type of ModelStatus */
export type ModelStatus = "CREATED" | "RUNNING" | "READY" | "FAILED";

/** Diagnostics information to help inspect the states of a model or variable. */
export interface DiagnosticsInfo {
  /** Model status. */
  modelState?: ModelState;
  /** Variable status. */
  variableStates?: VariableState[];
}

export function diagnosticsInfoDeserializer(item: any): DiagnosticsInfo {
  return {
    modelState: !item["modelState"]
      ? item["modelState"]
      : modelStateDeserializer(item["modelState"]),
    variableStates: !item["variableStates"]
      ? item["variableStates"]
      : variableStateArrayDeserializer(item["variableStates"]),
  };
}

/** Model status. */
export interface ModelState {
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

export function modelStateDeserializer(item: any): ModelState {
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
export interface AnomalyDetectionModel {
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
  modelInfo?: ModelInfo;
}

export function anomalyDetectionModelDeserializer(
  item: any,
): AnomalyDetectionModel {
  return {
    modelId: item["modelId"],
    createdTime: new Date(item["createdTime"]),
    lastUpdatedTime: new Date(item["lastUpdatedTime"]),
    modelInfo: !item["modelInfo"]
      ? item["modelInfo"]
      : modelInfoDeserializer(item["modelInfo"]),
  };
}

/** Response of listing models. */
export interface _ModelList {
  /** List of models. */
  models: AnomalyDetectionModel[];
  /** Number of trained multivariate models. */
  currentCount: number;
  /** Maximum number of models that can be trained for this Anomaly Detector resource. */
  maxCount: number;
  /** Link to fetch more models. */
  nextLink?: string;
}

export function _modelListDeserializer(item: any): _ModelList {
  return {
    models: anomalyDetectionModelArrayDeserializer(item["models"]),
    currentCount: item["currentCount"],
    maxCount: item["maxCount"],
    nextLink: item["nextLink"],
  };
}

export function anomalyDetectionModelArrayDeserializer(
  result: Array<AnomalyDetectionModel>,
): any[] {
  return result.map((item) => {
    return anomalyDetectionModelDeserializer(item);
  });
}

/** Request of the last detection. */
export interface MultivariateLastDetectionOptions {
  /**
   * Contains the inference data, including the name, time stamps (ISO 8601), and
   * values of variables.
   */
  variables: VariableValues[];
  /**
   * Number of top contributed
   * variables for one anomalous time stamp in the response. The default is
   * 10.
   */
  topContributorCount?: number;
}

export function multivariateLastDetectionOptionsSerializer(
  item: MultivariateLastDetectionOptions,
): any {
  return {
    variables: variableValuesArraySerializer(item["variables"]),
    topContributorCount: item["topContributorCount"],
  };
}

export function variableValuesArraySerializer(
  result: Array<VariableValues>,
): any[] {
  return result.map((item) => {
    return variableValuesSerializer(item);
  });
}

/** Variable values. */
export interface VariableValues {
  /** Variable name of the last detection request. */
  variable: string;
  /** Time stamps of the last detection request. */
  timestamps: string[];
  /** Values of variables. */
  values: number[];
}

export function variableValuesSerializer(item: VariableValues): any {
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
export interface MultivariateLastDetectionResult {
  /** Variable status. */
  variableStates?: VariableState[];
  /** Anomaly status and information. */
  results?: AnomalyState[];
}

export function multivariateLastDetectionResultDeserializer(
  item: any,
): MultivariateLastDetectionResult {
  return {
    variableStates: !item["variableStates"]
      ? item["variableStates"]
      : variableStateArrayDeserializer(item["variableStates"]),
    results: !item["results"]
      ? item["results"]
      : anomalyStateArrayDeserializer(item["results"]),
  };
}
