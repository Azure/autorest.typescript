export interface Project {
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
  createdDateTime: Date | string;
  /** Represents the project last modification datetime. */
  lastModifiedDateTime: Date | string;
  /** Represents the project last training datetime. */
  lastTrainedDateTime: Date | string;
  /** Represents the project last deployment datetime. */
  lastDeployedDateTime: Date | string;
}

/** The error object. */
export interface ErrorModel {
  /** One of a server-defined set of error codes. */
  code: string;
  /** A human-readable representation of the error. */
  message: string;
  /** The target of the error. */
  target?: string;
  /** An array of details about specific errors that led to this reported error. */
  details: Array<ErrorModel>;
  /** An object containing more specific information than the current object about the error. */
  innererror?: InnerError;
}

/** An object containing more specific information about the error. As per Microsoft One API guidelines - https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md#7102-error-condition-responses. */
export interface InnerError {
  /** One of a server-defined set of error codes. */
  code: string;
  /** Inner error. */
  innererror?: InnerError;
}

/** Training job parameters. */
export interface TrainingJobOptions {
  modelLabel: string;
}

export interface Deployment {
  name: string;
}

export interface SwapDeploymentsOptions {
  /** Represents the first deployment name. */
  firstDeploymentName: string;
  /** Represents the second deployment name. */
  secondDeploymentName: string;
}

export interface DeploymentJob {
  /** The job ID. */
  jobId: string;
  /** The creation date time of the job. */
  createdDateTime: Date | string;
  /** The the last date time the job was updated. */
  lastUpdatedDateTime: Date | string;
  /** The expiration date time of the job. */
  expirationDateTime: Date | string;
  /**
   * The job status.
   *
   * Possible values: notStarted, running, succeeded, failed, cancelled, cancelling, partiallyCompleted
   */
  status: string;
  /** The warnings that were encountered while executing the job. */
  warnings: Array<JobWarning>;
  /** The errors encountered while executing the job. */
  errors: ErrorModel;
  id: string;
}

/** Represents a warning that was encountered while executing the request. */
export interface JobWarning {
  /** The warning code. */
  code: string;
  /** The warning message. */
  message: string;
}

export interface SwapDeploymentsJob {
  /** The job ID. */
  jobId: string;
  /** The creation date time of the job. */
  createdDateTime: Date | string;
  /** The the last date time the job was updated. */
  lastUpdatedDateTime: Date | string;
  /** The expiration date time of the job. */
  expirationDateTime: Date | string;
  /**
   * The job status.
   *
   * Possible values: notStarted, running, succeeded, failed, cancelled, cancelling, partiallyCompleted
   */
  status: string;
  /** The warnings that were encountered while executing the job. */
  warnings: Array<JobWarning>;
  /** The errors encountered while executing the job. */
  errors: ErrorModel;
  id: string;
}
