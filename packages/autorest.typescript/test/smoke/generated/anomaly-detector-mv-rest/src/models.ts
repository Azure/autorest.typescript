// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export interface ErrorResponse {
  /** The error code. */
  code: string;
  /** The message explaining the error reported by the service. */
  message: string;
}

export interface VariableState {
  /** Variable name in variable states. */
  variable?: string;
  /** Proportion of missing values that need to be filled by fillNAMethod. */
  filledNARatio?: number;
  /** Number of effective data points before applying fillNAMethod. */
  effectiveCount?: number;
  /** First valid timestamp with value of input data. */
  firstTimestamp?: Date | string;
  /** Last valid timestamp with value of input data. */
  lastTimestamp?: Date | string;
}

/** Detection request for batch inference. This is an asynchronous inference which will need another API to get detection results. */
export interface DetectionRequest {
  /** Source link to the input data to indicate an accessible Azure storage Uri, either pointed to an Azure blob storage folder, or pointed to a CSV file in Azure blob storage based on you data schema selection. The data schema should be exactly the same with those used in the training phase. */
  dataSource: string;
  /** An optional field, which is used to specify the number of top contributed variables for one anomalous timestamp in the response. The default number is 10. */
  topContributorCount: number;
  /** A required field, indicating the start time of data for detection, which should be date-time of ISO 8601 format. */
  startTime: Date | string;
  /** A required field, indicating the end time of data for detection, which should be date-time of ISO 8601 format. */
  endTime: Date | string;
}

/** Training result of a model including its status, errors and diagnostics information. */
export interface ModelInfo {
  /** Source link to the input data to indicate an accessible Azure storage Uri, either pointed to an Azure blob storage folder, or pointed to a CSV file in Azure blob storage based on you data schema selection. */
  dataSource: string;
  /** Data schema of input data source: OneTable or MultiTable. The default DataSchema is OneTable. */
  dataSchema?: "OneTable" | "MultiTable";
  /** A required field, indicating the start time of training data, which should be date-time of ISO 8601 format. */
  startTime: Date | string;
  /** A required field, indicating the end time of training data, which should be date-time of ISO 8601 format. */
  endTime: Date | string;
  /** An optional field. The display name of the model whose maximum length is 24 characters. */
  displayName?: string;
  /** An optional field, indicating how many previous timestamps will be used to detect whether the timestamp is anomaly or not. */
  slidingWindow?: number;
  /** An optional field, indicating the manner to align multiple variables. */
  alignPolicy?: AlignPolicy;
  /** Model status. One of CREATED, RUNNING, READY, and FAILED. */
  status?: "CREATED" | "RUNNING" | "READY" | "FAILED";
  /** Error messages when failed to create a model. */
  errors?: Array<ErrorResponse>;
  /** Diagnostics information to help inspect the states of model or variable. */
  diagnosticsInfo?: DiagnosticsInfo;
}

/** An optional field, indicating the manner to align multiple variables. */
export interface AlignPolicy {
  /** An optional field, indicating how to align different variables to the same time-range. Either Inner or Outer. */
  alignMode?: "Inner" | "Outer";
  /** An optional field, indicating how missing values will be filled. One of Previous, Subsequent, Linear, Zero, Fixed. */
  fillNAMethod?: "Previous" | "Subsequent" | "Linear" | "Zero" | "Fixed";
  /** An optional field. Required when fillNAMethod is Fixed. */
  paddingValue?: number;
}

/** Diagnostics information to help inspect the states of model or variable. */
export interface DiagnosticsInfo {
  modelState?: ModelState;
  variableStates?: Array<VariableState>;
}

export interface ModelState {
  /** This indicates the number of passes of the entire training dataset the algorithm has completed. */
  epochIds?: Array<number>;
  /** List of metrics used to assess how the model fits the training data for each epoch. */
  trainLosses?: Array<number>;
  /** List of metrics used to assess how the model fits the validation set for each epoch. */
  validationLosses?: Array<number>;
  /** Latency for each epoch. */
  latenciesInSeconds?: Array<number>;
}

export interface LastDetectionRequest {
  /** This contains the inference data, including the name, timestamps(ISO 8601) and values of variables. */
  variables: Array<VariableValues>;
  /** An optional field, which is used to specify the number of top contributed variables for one anomalous timestamp in the response. The default number is 10. */
  topContributorCount: number;
}

export interface VariableValues {
  /** Variable name of last detection request. */
  variable: string;
  /** Timestamps of last detection request */
  timestamps: Array<string>;
  /** Values of variables. */
  values: Array<number>;
}
