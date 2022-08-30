export interface ProjectOutput {
  projectName: string;
  /** The project kind. */
  projectKind:
    | "CustomSingleLabelClassification"
    | "CustomMultiLabelClassification"
    | "CustomEntityRecognition";
  /** The storage container name. */
  storageInputContainerName: string;
  /** Represents the settings used to define the project behavior. */
  settings?: Record<string, unknown>;
  multilingual?: boolean;
  /** The project description. */
  description?: string;
  /** The project language. This is BCP-47 representation of a language. For example, use "en" for English, "en-gb" for English (UK), "es" for Spanish etc. */
  language: string;
  /** Represents the project creation datetime. */
  createdDateTime: string;
  /** Represents the project last modification datetime. */
  lastModifiedDateTime: string;
  /** Represents the project last training datetime. */
  lastTrainedDateTime: string;
  /** Represents the project last deployment datetime. */
  lastDeployedDateTime: string;
}

export interface OperationStatusOutput {
  /** The unique ID of the operation. */
  id: string;
  /** The status of the operation */
  status: "InProgress" | "Succeeded" | "Failed" | "Canceled";
  /** The error object. */
  error?: ErrorModelOutput;
}

export interface ErrorResponseOutput {
  /** The error object. */
  error: ErrorModelOutput;
}

export interface ErrorModelOutput {
  /** One of a server-defined set of error codes. */
  code: string;
  /** A human-readable representation of the error. */
  message: string;
  /** The target of the error. */
  target?: string;
  details: Array<ErrorModelOutput>;
  /** An object containing more specific information about the error. As per Microsoft One API guidelines - https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md#7102-error-condition-responses. */
  innererror?: InnerErrorOutput;
}

export interface InnerErrorOutput {
  /** One of a server-defined set of error codes. */
  code: string;
  /** An object containing more specific information about the error. As per Microsoft One API guidelines - https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md#7102-error-condition-responses. */
  innererror?: InnerErrorOutput;
}

export interface CustomPageProjectOutput {
  value: Array<ProjectOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

export interface DeploymentOutput {
  name: string;
}

export interface CustomPageDeploymentOutput {
  value: Array<DeploymentOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

export interface DeploymentJobOutput {
  /** The job ID. */
  jobId: string;
  /** The creation date time of the job. */
  createdDateTime: string;
  /** The the last date time the job was updated. */
  lastUpdatedDateTime: string;
  /** The expiration date time of the job. */
  expirationDateTime: string;
  /** The job status. */
  status:
    | "notStarted"
    | "running"
    | "succeeded"
    | "failed"
    | "cancelled"
    | "cancelling"
    | "partiallyCompleted";
  warnings: Array<JobWarningOutput>;
  /** The error object. */
  errors: ErrorModelOutput;
  id: string;
}

export interface JobWarningOutput {
  /** The warning code. */
  code: string;
  /** The warning message. */
  message: string;
}

export interface SwapDeploymentsJobOutput {
  /** The job ID. */
  jobId: string;
  /** The creation date time of the job. */
  createdDateTime: string;
  /** The the last date time the job was updated. */
  lastUpdatedDateTime: string;
  /** The expiration date time of the job. */
  expirationDateTime: string;
  /** The job status. */
  status:
    | "notStarted"
    | "running"
    | "succeeded"
    | "failed"
    | "cancelled"
    | "cancelling"
    | "partiallyCompleted";
  warnings: Array<JobWarningOutput>;
  /** The error object. */
  errors: ErrorModelOutput;
  id: string;
}

export interface PagedSupportedLanguageOutput {
  value: Array<SupportedLanguageOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

export interface SupportedLanguageOutput {
  /** The language name. */
  languageName: string;
  /** The language code. This is BCP-47 representation of a language. For example, "en" for English, "en-gb" for English (UK), "es" for Spanish etc. */
  languageCode: string;
}

export interface PagedTrainingConfigVersionOutput {
  value: Array<TrainingConfigVersionOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

export interface TrainingConfigVersionOutput {
  /** Represents the version of the config. */
  trainingConfigVersion: string;
  modelExpirationDate: string;
}
