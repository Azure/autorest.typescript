// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Detection results for the given resultId. */
export interface DetectionResultOutput {
  /**
   * Result identifier, which is used to fetch the results of an inference call.
   *
   * Value may contain a UUID
   */
  resultId: string;
  /** Multivariate anomaly detection status. */
  summary: DetectionResultSummaryOutput;
  /** Detection result for each timestamp. */
  results: Array<AnomalyStateOutput>;
}

/** Multivariate anomaly detection status. */
export interface DetectionResultSummaryOutput {
  /** Status of detection results. One of CREATED, RUNNING, READY, and FAILED. */
  status: "CREATED" | "RUNNING" | "READY" | "FAILED";
  /** Error message when detection is failed. */
  errors?: Array<ErrorResponseOutput>;
  variableStates?: Array<VariableStateOutput>;
  /** Detection request for batch inference. This is an asynchronous inference which will need another API to get detection results. */
  setupInfo: DetectionRequestOutput;
}

export interface ErrorResponseOutput {
  /** The error code. */
  code: string;
  /** The message explaining the error reported by the service. */
  message: string;
}

export interface VariableStateOutput {
  /** Variable name in variable states. */
  variable?: string;
  /** Proportion of missing values that need to be filled by fillNAMethod. */
  filledNARatio?: number;
  /** Number of effective data points before applying fillNAMethod. */
  effectiveCount?: number;
  /** First valid timestamp with value of input data. */
  firstTimestamp?: string;
  /** Last valid timestamp with value of input data. */
  lastTimestamp?: string;
}

/** Detection request for batch inference. This is an asynchronous inference which will need another API to get detection results. */
export interface DetectionRequestOutput {
  /** Source link to the input data to indicate an accessible Azure storage Uri, either pointed to an Azure blob storage folder, or pointed to a CSV file in Azure blob storage based on you data schema selection. The data schema should be exactly the same with those used in the training phase. */
  dataSource: string;
  /** An optional field, which is used to specify the number of top contributed variables for one anomalous timestamp in the response. The default number is 10. */
  topContributorCount: number;
  /** A required field, indicating the start time of data for detection, which should be date-time of ISO 8601 format. */
  startTime: string;
  /** A required field, indicating the end time of data for detection, which should be date-time of ISO 8601 format. */
  endTime: string;
}

export interface AnomalyStateOutput {
  /** The timestamp for this anomaly. */
  timestamp: string;
  value?: AnomalyValueOutput;
  /** Error message for the current timestamp. */
  errors?: Array<ErrorResponseOutput>;
}

export interface AnomalyValueOutput {
  /** True if an anomaly is detected at the current timestamp. */
  isAnomaly: boolean;
  /** Indicates the significance of the anomaly. The higher the severity, the more significant the anomaly is. */
  severity: number;
  /** Raw anomaly score of severity, will help indicate the degree of abnormality as well. */
  score: number;
  interpretation?: Array<AnomalyValueInterpretationItemOutput>;
}

/** Interpretation contains more details of the anomaly, which will help with root cause analysis. */
export interface AnomalyValueInterpretationItemOutput
  extends AnomalyInterpretationOutput {}

export interface AnomalyInterpretationOutput {
  /** Variable. */
  variable?: string;
  /** This score shows the percentage contributing to the anomalous timestamp. A number between 0 and 1. */
  contributionScore?: number;
  correlationChanges?: CorrelationChangesOutput;
}

export interface CorrelationChangesOutput {
  /** The correlated variables that have correlation changes under an anomaly. */
  changedVariables?: Array<string>;
}

/** Training result of a model including its status, errors and diagnostics information. */
export interface ModelInfoOutput {
  /** Source link to the input data to indicate an accessible Azure storage Uri, either pointed to an Azure blob storage folder, or pointed to a CSV file in Azure blob storage based on you data schema selection. */
  dataSource: string;
  /** Data schema of input data source: OneTable or MultiTable. The default DataSchema is OneTable. */
  dataSchema?: "OneTable" | "MultiTable";
  /** A required field, indicating the start time of training data, which should be date-time of ISO 8601 format. */
  startTime: string;
  /** A required field, indicating the end time of training data, which should be date-time of ISO 8601 format. */
  endTime: string;
  /** An optional field. The display name of the model whose maximum length is 24 characters. */
  displayName?: string;
  /** An optional field, indicating how many previous timestamps will be used to detect whether the timestamp is anomaly or not. */
  slidingWindow?: number;
  /** An optional field, indicating the manner to align multiple variables. */
  alignPolicy?: AlignPolicyOutput;
  /** Model status. One of CREATED, RUNNING, READY, and FAILED. */
  status?: "CREATED" | "RUNNING" | "READY" | "FAILED";
  /** Error messages when failed to create a model. */
  errors?: Array<ErrorResponseOutput>;
  /** Diagnostics information to help inspect the states of model or variable. */
  diagnosticsInfo?: DiagnosticsInfoOutput;
}

/** An optional field, indicating the manner to align multiple variables. */
export interface AlignPolicyOutput {
  /** An optional field, indicating how to align different variables to the same time-range. Either Inner or Outer. */
  alignMode?: "Inner" | "Outer";
  /** An optional field, indicating how missing values will be filled. One of Previous, Subsequent, Linear, Zero, Fixed. */
  fillNAMethod?: "Previous" | "Subsequent" | "Linear" | "Zero" | "Fixed";
  /** An optional field. Required when fillNAMethod is Fixed. */
  paddingValue?: number;
}

/** Diagnostics information to help inspect the states of model or variable. */
export interface DiagnosticsInfoOutput {
  modelState?: ModelStateOutput;
  variableStates?: Array<VariableStateOutput>;
}

export interface ModelStateOutput {
  /** This indicates the number of passes of the entire training dataset the algorithm has completed. */
  epochIds?: Array<number>;
  /** List of metrics used to assess how the model fits the training data for each epoch. */
  trainLosses?: Array<number>;
  /** List of metrics used to assess how the model fits the validation set for each epoch. */
  validationLosses?: Array<number>;
  /** Latency for each epoch. */
  latenciesInSeconds?: Array<number>;
}

/** Response of getting a model. */
export interface ModelOutput {
  /**
   * Model identifier.
   *
   * Value may contain a UUID
   */
  modelId: string;
  /** Date and time (UTC) when the model was created. */
  createdTime: string;
  /** Date and time (UTC) when the model was last updated. */
  lastUpdatedTime: string;
  /** Training result of a model including its status, errors and diagnostics information. */
  modelInfo?: ModelInfoOutput;
}

/** Response of listing models. */
export interface ModelListOutput {
  /** List of models. */
  models: Array<ModelOutput>;
  /** Number of trained multivariate models. */
  currentCount: number;
  /** Maximum number of models that can be trained for this Anomaly Detector resource. */
  maxCount: number;
  /** The link to fetch more models. */
  nextLink?: string;
}

export interface LastDetectionResultOutput {
  variableStates?: Array<VariableStateOutput>;
  results?: Array<AnomalyStateOutput>;
}
