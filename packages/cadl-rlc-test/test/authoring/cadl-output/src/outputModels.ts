export interface ProjectOutput {
  projectName: string;
  /**
   * The project kind.
   *
   * Possible values: CustomSingleLabelClassification, CustomMultiLabelClassification, CustomEntityRecognition
   */
  projectKind: string;
  /** The storage container name. */
  storageInputContainerName: string;
  /** The project settings. */
  settings?: Record<string, string>;
  /** Whether the project would be used for multiple languages or not. */
  multilingual?: boolean;
  /** The project description. */
  description?: string;
  /** The project language. This is BCP-47 representation of a language. For example, use "en" for English, "en-gb" for English (UK), "es" for Spanish etc. */
  language: string;
  /** Represents the project creation datetime. */
  readonly createdDateTime: string;
  /** Represents the project last modification datetime. */
  readonly lastModifiedDateTime: string;
  /** Represents the project last training datetime. */
  readonly lastTrainedDateTime: string;
  /** Represents the project last deployment datetime. */
  readonly lastDeployedDateTime: string;
}

/** Provides status details for long running operations. */
export interface OperationStatusOutput {
  /** The unique ID of the operation. */
  id: string;
  /**
   * The status of the operation
   *
   * Possible values: InProgress, Succeeded, Failed, Canceled
   */
  status: string;
  /** Error object that describes the error when status is "Failed". */
  error?: ErrorModel;
  /** The result of the operation. */
  result?: never;
}

/** The error object. */
export interface ErrorModelOutput {
  /** One of a server-defined set of error codes. */
  code: string;
  /** A human-readable representation of the error. */
  message: string;
  /** The target of the error. */
  target?: string;
  /** An array of details about specific errors that led to this reported error. */
  details: Array<ErrorModelOutput>;
  /** An object containing more specific information than the current object about the error. */
  innererror?: InnerErrorOutput;
}

/** An object containing more specific information about the error. As per Microsoft One API guidelines - https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md#7102-error-condition-responses. */
export interface InnerErrorOutput {
  /** One of a server-defined set of error codes. */
  code: string;
  /** Inner error. */
  innererror?: InnerErrorOutput;
}

/** Paged collection of Project items */
export interface ProjectListOutput {
  /** The Project items on this page */
  value: Array<ProjectOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

export interface DeploymentOutput {
  name: string;
}

/** Paged collection of Deployment items */
export interface DeploymentListOutput {
  /** The Deployment items on this page */
  value: Array<DeploymentOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

export interface DeploymentJobOutput {
  /** The job ID. */
  jobId: string;
  /** The creation date time of the job. */
  readonly createdDateTime: string;
  /** The the last date time the job was updated. */
  readonly lastUpdatedDateTime: string;
  /** The expiration date time of the job. */
  readonly expirationDateTime: string;
  /**
   * The job status.
   *
   * Possible values: notStarted, running, succeeded, failed, cancelled, cancelling, partiallyCompleted
   */
  status: string;
  /** The warnings that were encountered while executing the job. */
  warnings: Array<JobWarningOutput>;
  /** The errors encountered while executing the job. */
  errors: ErrorModelOutput;
  id: string;
}

/** Represents a warning that was encountered while executing the request. */
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
  readonly createdDateTime: string;
  /** The the last date time the job was updated. */
  readonly lastUpdatedDateTime: string;
  /** The expiration date time of the job. */
  readonly expirationDateTime: string;
  /**
   * The job status.
   *
   * Possible values: notStarted, running, succeeded, failed, cancelled, cancelling, partiallyCompleted
   */
  status: string;
  /** The warnings that were encountered while executing the job. */
  warnings: Array<JobWarningOutput>;
  /** The errors encountered while executing the job. */
  errors: ErrorModelOutput;
  id: string;
}

/** Paged collection of SupportedLanguage items */
export interface PagedSupportedLanguageOutput {
  /** The SupportedLanguage items on this page */
  value: Array<SupportedLanguageOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Represents a supported language. */
export interface SupportedLanguageOutput {
  /** The language name. */
  languageName: string;
  /** The language code. This is BCP-47 representation of a language. For example, "en" for English, "en-gb" for English (UK), "es" for Spanish etc. */
  languageCode: string;
}

/** Paged collection of TrainingConfigVersion items */
export interface PagedTrainingConfigVersionOutput {
  /** The TrainingConfigVersion items on this page */
  value: Array<TrainingConfigVersionOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Represents a training config version. */
export interface TrainingConfigVersionOutput {
  /** Represents the version of the config. */
  trainingConfigVersion: string;
  /** Represents the training config version expiration date. */
  modelExpirationDate: string;
}
