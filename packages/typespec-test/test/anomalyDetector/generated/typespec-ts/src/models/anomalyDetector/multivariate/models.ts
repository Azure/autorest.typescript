// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Detection results for the resultId value. */
export interface AnomalyDetectorMultivariateMultivariateDetectionResult {
  /** Result identifier that's used to fetch the results of an inference call. */
  resultId: string;
  /** Multivariate anomaly detection status. */
  summary: AnomalyDetectorMultivariateMultivariateBatchDetectionResultSummary;
  /** Detection result for each time stamp. */
  results: AnomalyDetectorMultivariateAnomalyState[];
}

export function anomalyDetectorMultivariateMultivariateDetectionResultDeserializer(
  item: any,
): AnomalyDetectorMultivariateMultivariateDetectionResult {
  return {
    resultId: item["resultId"],
    summary:
      anomalyDetectorMultivariateMultivariateBatchDetectionResultSummaryDeserializer(
        item["summary"],
      ),
    results: anomalyDetectorMultivariateAnomalyStateArrayDeserializer(
      item["results"],
    ),
  };
}

/** Multivariate anomaly detection status. */
export interface AnomalyDetectorMultivariateMultivariateBatchDetectionResultSummary {
  /** Status of detection results. */
  status: AnomalyDetectorMultivariateMultivariateBatchDetectionStatus;
  /** Error message when detection fails. */
  errors?: AnomalyDetectorMultivariateErrorResponse[];
  /** Variable status. */
  variableStates?: AnomalyDetectorMultivariateVariableState[];
  /**
   * Detection request for batch inference. This is an asynchronous inference that
   * will need another API to get detection results.
   */
  setupInfo: AnomalyDetectorMultivariateMultivariateBatchDetectionOptions;
}

export function anomalyDetectorMultivariateMultivariateBatchDetectionResultSummaryDeserializer(
  item: any,
): AnomalyDetectorMultivariateMultivariateBatchDetectionResultSummary {
  return {
    status: item["status"],
    errors: !item["errors"]
      ? item["errors"]
      : anomalyDetectorMultivariateErrorResponseArrayDeserializer(
          item["errors"],
        ),
    variableStates: !item["variableStates"]
      ? item["variableStates"]
      : anomalyDetectorMultivariateVariableStateArrayDeserializer(
          item["variableStates"],
        ),
    setupInfo:
      anomalyDetectorMultivariateMultivariateBatchDetectionOptionsDeserializer(
        item["setupInfo"],
      ),
  };
}

/** Type of AnomalyDetectorMultivariateMultivariateBatchDetectionStatus */
export type AnomalyDetectorMultivariateMultivariateBatchDetectionStatus =
  | "CREATED"
  | "RUNNING"
  | "READY"
  | "FAILED";

export function anomalyDetectorMultivariateErrorResponseArrayDeserializer(
  result: Array<AnomalyDetectorMultivariateErrorResponse>,
): any[] {
  return result.map((item) => {
    return anomalyDetectorMultivariateErrorResponseDeserializer(item);
  });
}

/** Error information that the API returned. */
export interface AnomalyDetectorMultivariateErrorResponse {
  /** Error code. */
  code: string;
  /** Message that explains the error that the service reported. */
  message: string;
}

export function anomalyDetectorMultivariateErrorResponseDeserializer(
  item: any,
): AnomalyDetectorMultivariateErrorResponse {
  return {
    code: item["code"],
    message: item["message"],
  };
}

export function anomalyDetectorMultivariateVariableStateArrayDeserializer(
  result: Array<AnomalyDetectorMultivariateVariableState>,
): any[] {
  return result.map((item) => {
    return anomalyDetectorMultivariateVariableStateDeserializer(item);
  });
}

/** Variable status. */
export interface AnomalyDetectorMultivariateVariableState {
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

export function anomalyDetectorMultivariateVariableStateDeserializer(
  item: any,
): AnomalyDetectorMultivariateVariableState {
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
export interface AnomalyDetectorMultivariateMultivariateBatchDetectionOptions {
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

export function anomalyDetectorMultivariateMultivariateBatchDetectionOptionsSerializer(
  item: AnomalyDetectorMultivariateMultivariateBatchDetectionOptions,
): any {
  return {
    dataSource: item["dataSource"],
    topContributorCount: item["topContributorCount"],
    startTime: item["startTime"].toISOString(),
    endTime: item["endTime"].toISOString(),
  };
}

export function anomalyDetectorMultivariateMultivariateBatchDetectionOptionsDeserializer(
  item: any,
): AnomalyDetectorMultivariateMultivariateBatchDetectionOptions {
  return {
    dataSource: item["dataSource"],
    topContributorCount: item["topContributorCount"],
    startTime: new Date(item["startTime"]),
    endTime: new Date(item["endTime"]),
  };
}

export function anomalyDetectorMultivariateAnomalyStateArrayDeserializer(
  result: Array<AnomalyDetectorMultivariateAnomalyState>,
): any[] {
  return result.map((item) => {
    return anomalyDetectorMultivariateAnomalyStateDeserializer(item);
  });
}

/** Anomaly status and information. */
export interface AnomalyDetectorMultivariateAnomalyState {
  /** Time stamp for this anomaly. */
  timestamp: Date;
  /** Detailed value of this anomalous time stamp. */
  value?: AnomalyDetectorMultivariateAnomalyValue;
  /** Error message for the current time stamp. */
  errors?: AnomalyDetectorMultivariateErrorResponse[];
}

export function anomalyDetectorMultivariateAnomalyStateDeserializer(
  item: any,
): AnomalyDetectorMultivariateAnomalyState {
  return {
    timestamp: new Date(item["timestamp"]),
    value: !item["value"]
      ? item["value"]
      : anomalyDetectorMultivariateAnomalyValueDeserializer(item["value"]),
    errors: !item["errors"]
      ? item["errors"]
      : anomalyDetectorMultivariateErrorResponseArrayDeserializer(
          item["errors"],
        ),
  };
}

/** Detailed information of the anomalous time stamp. */
export interface AnomalyDetectorMultivariateAnomalyValue {
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
  interpretation?: AnomalyDetectorMultivariateAnomalyInterpretation[];
}

export function anomalyDetectorMultivariateAnomalyValueDeserializer(
  item: any,
): AnomalyDetectorMultivariateAnomalyValue {
  return {
    isAnomaly: item["isAnomaly"],
    severity: item["severity"],
    score: item["score"],
    interpretation: !item["interpretation"]
      ? item["interpretation"]
      : anomalyDetectorMultivariateAnomalyInterpretationArrayDeserializer(
          item["interpretation"],
        ),
  };
}

export function anomalyDetectorMultivariateAnomalyInterpretationArrayDeserializer(
  result: Array<AnomalyDetectorMultivariateAnomalyInterpretation>,
): any[] {
  return result.map((item) => {
    return anomalyDetectorMultivariateAnomalyInterpretationDeserializer(item);
  });
}

/** Interpretation of the anomalous time stamp. */
export interface AnomalyDetectorMultivariateAnomalyInterpretation {
  /** Variable. */
  variable?: string;
  /**
   * This score shows the percentage that contributes to the anomalous time stamp. It's a
   * number between 0 and 1.
   */
  contributionScore?: number;
  /** Correlation changes among the anomalous variables. */
  correlationChanges?: AnomalyDetectorMultivariateCorrelationChanges;
}

export function anomalyDetectorMultivariateAnomalyInterpretationDeserializer(
  item: any,
): AnomalyDetectorMultivariateAnomalyInterpretation {
  return {
    variable: item["variable"],
    contributionScore: item["contributionScore"],
    correlationChanges: !item["correlationChanges"]
      ? item["correlationChanges"]
      : anomalyDetectorMultivariateCorrelationChangesDeserializer(
          item["correlationChanges"],
        ),
  };
}

/** Correlation changes among the anomalous variables. */
export interface AnomalyDetectorMultivariateCorrelationChanges {
  /** Correlated variables that have correlation changes under an anomaly. */
  changedVariables?: string[];
}

export function anomalyDetectorMultivariateCorrelationChangesDeserializer(
  item: any,
): AnomalyDetectorMultivariateCorrelationChanges {
  return {
    changedVariables: !item["changedVariables"]
      ? item["changedVariables"]
      : item["changedVariables"].map((p: any) => {
          return p;
        }),
  };
}

/** Error response. */
export interface AnomalyDetectorMultivariateResponseError {
  /** Error code. */
  code: string;
  /** Message that explains the error that the service reported. */
  message: string;
}

export function anomalyDetectorMultivariateResponseErrorDeserializer(
  item: any,
): AnomalyDetectorMultivariateResponseError {
  return {
    code: item["code"],
    message: item["message"],
  };
}

/**
 * Training result of a model, including its status, errors, and diagnostics
 * information.
 */
export interface AnomalyDetectorMultivariateModelInfo {
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
  dataSchema?: AnomalyDetectorMultivariateDataSchema;
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
  alignPolicy?: AnomalyDetectorMultivariateAlignPolicy;
  /** Model status. */
  readonly status?: AnomalyDetectorMultivariateModelStatus;
  /** Error messages after failure to create a model. */
  readonly errors?: AnomalyDetectorMultivariateErrorResponse[];
  /** Diagnostics information to help inspect the states of a model or variable. */
  readonly diagnosticsInfo?: AnomalyDetectorMultivariateDiagnosticsInfo;
}

export function anomalyDetectorMultivariateModelInfoSerializer(
  item: AnomalyDetectorMultivariateModelInfo,
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
      : anomalyDetectorMultivariateAlignPolicySerializer(item["alignPolicy"]),
  };
}

export function anomalyDetectorMultivariateModelInfoDeserializer(
  item: any,
): AnomalyDetectorMultivariateModelInfo {
  return {
    dataSource: item["dataSource"],
    dataSchema: item["dataSchema"],
    startTime: new Date(item["startTime"]),
    endTime: new Date(item["endTime"]),
    displayName: item["displayName"],
    slidingWindow: item["slidingWindow"],
    alignPolicy: !item["alignPolicy"]
      ? item["alignPolicy"]
      : anomalyDetectorMultivariateAlignPolicyDeserializer(item["alignPolicy"]),
    status: item["status"],
    errors: !item["errors"]
      ? item["errors"]
      : anomalyDetectorMultivariateErrorResponseArrayDeserializer(
          item["errors"],
        ),
    diagnosticsInfo: !item["diagnosticsInfo"]
      ? item["diagnosticsInfo"]
      : anomalyDetectorMultivariateDiagnosticsInfoDeserializer(
          item["diagnosticsInfo"],
        ),
  };
}

/** Data schema of the input data source. The default is OneTable. */
export type AnomalyDetectorMultivariateDataSchema = "OneTable" | "MultiTable";

/** Manner of aligning multiple variables. */
export interface AnomalyDetectorMultivariateAlignPolicy {
  /**
   * Field that indicates how to align different variables to the same
   * time range.
   */
  alignMode?: AnomalyDetectorMultivariateAlignMode;
  /** Field that indicates how missing values will be filled. */
  fillNAMethod?: AnomalyDetectorMultivariateFillNAMethod;
  /** Field that's required when fillNAMethod is Fixed. */
  paddingValue?: number;
}

export function anomalyDetectorMultivariateAlignPolicySerializer(
  item: AnomalyDetectorMultivariateAlignPolicy,
): any {
  return {
    alignMode: item["alignMode"],
    fillNAMethod: item["fillNAMethod"],
    paddingValue: item["paddingValue"],
  };
}

export function anomalyDetectorMultivariateAlignPolicyDeserializer(
  item: any,
): AnomalyDetectorMultivariateAlignPolicy {
  return {
    alignMode: item["alignMode"],
    fillNAMethod: item["fillNAMethod"],
    paddingValue: item["paddingValue"],
  };
}

/** Type of AnomalyDetectorMultivariateAlignMode */
export type AnomalyDetectorMultivariateAlignMode = "Inner" | "Outer";
/** Field that indicates how missing values will be filled. */
export type AnomalyDetectorMultivariateFillNAMethod =
  | "Previous"
  | "Subsequent"
  | "Linear"
  | "Zero"
  | "Fixed";
/** Type of AnomalyDetectorMultivariateModelStatus */
export type AnomalyDetectorMultivariateModelStatus =
  | "CREATED"
  | "RUNNING"
  | "READY"
  | "FAILED";

/** Diagnostics information to help inspect the states of a model or variable. */
export interface AnomalyDetectorMultivariateDiagnosticsInfo {
  /** Model status. */
  modelState?: AnomalyDetectorMultivariateModelState;
  /** Variable status. */
  variableStates?: AnomalyDetectorMultivariateVariableState[];
}

export function anomalyDetectorMultivariateDiagnosticsInfoDeserializer(
  item: any,
): AnomalyDetectorMultivariateDiagnosticsInfo {
  return {
    modelState: !item["modelState"]
      ? item["modelState"]
      : anomalyDetectorMultivariateModelStateDeserializer(item["modelState"]),
    variableStates: !item["variableStates"]
      ? item["variableStates"]
      : anomalyDetectorMultivariateVariableStateArrayDeserializer(
          item["variableStates"],
        ),
  };
}

/** Model status. */
export interface AnomalyDetectorMultivariateModelState {
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

export function anomalyDetectorMultivariateModelStateDeserializer(
  item: any,
): AnomalyDetectorMultivariateModelState {
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
export interface AnomalyDetectorMultivariateAnomalyDetectionModel {
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
  modelInfo?: AnomalyDetectorMultivariateModelInfo;
}

export function anomalyDetectorMultivariateAnomalyDetectionModelDeserializer(
  item: any,
): AnomalyDetectorMultivariateAnomalyDetectionModel {
  return {
    modelId: item["modelId"],
    createdTime: new Date(item["createdTime"]),
    lastUpdatedTime: new Date(item["lastUpdatedTime"]),
    modelInfo: !item["modelInfo"]
      ? item["modelInfo"]
      : anomalyDetectorMultivariateModelInfoDeserializer(item["modelInfo"]),
  };
}

/** Response of listing models. */
export interface _AnomalyDetectorMultivariateModelList {
  /** List of models. */
  models: AnomalyDetectorMultivariateAnomalyDetectionModel[];
  /** Number of trained multivariate models. */
  currentCount: number;
  /** Maximum number of models that can be trained for this Anomaly Detector resource. */
  maxCount: number;
  /** Link to fetch more models. */
  nextLink?: string;
}

export function _anomalyDetectorMultivariateModelListDeserializer(
  item: any,
): _AnomalyDetectorMultivariateModelList {
  return {
    models: anomalyDetectorMultivariateAnomalyDetectionModelArrayDeserializer(
      item["models"],
    ),
    currentCount: item["currentCount"],
    maxCount: item["maxCount"],
    nextLink: item["nextLink"],
  };
}

export function anomalyDetectorMultivariateAnomalyDetectionModelArrayDeserializer(
  result: Array<AnomalyDetectorMultivariateAnomalyDetectionModel>,
): any[] {
  return result.map((item) => {
    return anomalyDetectorMultivariateAnomalyDetectionModelDeserializer(item);
  });
}

/** Request of the last detection. */
export interface AnomalyDetectorMultivariateMultivariateLastDetectionOptions {
  /**
   * Contains the inference data, including the name, time stamps (ISO 8601), and
   * values of variables.
   */
  variables: AnomalyDetectorMultivariateVariableValues[];
  /**
   * Number of top contributed
   * variables for one anomalous time stamp in the response. The default is
   * 10.
   */
  topContributorCount?: number;
}

export function anomalyDetectorMultivariateMultivariateLastDetectionOptionsSerializer(
  item: AnomalyDetectorMultivariateMultivariateLastDetectionOptions,
): any {
  return {
    variables: anomalyDetectorMultivariateVariableValuesArraySerializer(
      item["variables"],
    ),
    topContributorCount: item["topContributorCount"],
  };
}

export function anomalyDetectorMultivariateVariableValuesArraySerializer(
  result: Array<AnomalyDetectorMultivariateVariableValues>,
): any[] {
  return result.map((item) => {
    return anomalyDetectorMultivariateVariableValuesSerializer(item);
  });
}

/** Variable values. */
export interface AnomalyDetectorMultivariateVariableValues {
  /** Variable name of the last detection request. */
  variable: string;
  /** Time stamps of the last detection request. */
  timestamps: string[];
  /** Values of variables. */
  values: number[];
}

export function anomalyDetectorMultivariateVariableValuesSerializer(
  item: AnomalyDetectorMultivariateVariableValues,
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
export interface AnomalyDetectorMultivariateMultivariateLastDetectionResult {
  /** Variable status. */
  variableStates?: AnomalyDetectorMultivariateVariableState[];
  /** Anomaly status and information. */
  results?: AnomalyDetectorMultivariateAnomalyState[];
}

export function anomalyDetectorMultivariateMultivariateLastDetectionResultDeserializer(
  item: any,
): AnomalyDetectorMultivariateMultivariateLastDetectionResult {
  return {
    variableStates: !item["variableStates"]
      ? item["variableStates"]
      : anomalyDetectorMultivariateVariableStateArrayDeserializer(
          item["variableStates"],
        ),
    results: !item["results"]
      ? item["results"]
      : anomalyDetectorMultivariateAnomalyStateArrayDeserializer(
          item["results"],
        ),
  };
}
