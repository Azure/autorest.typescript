// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ErrorModel } from "@azure-rest/core-client";

/** A collection of SupportedLanguage resources. */
export interface PagedSupportedLanguage {
  /** The SupportedLanguage items on this page */
  value: SupportedLanguage[];
  /** The link to the next page of items */
  readonly nextLink?: string;
}

/** Represents a supported language. */
export interface SupportedLanguage {
  /** The language name. */
  languageName: string;
  /** The language code. This is BCP-47 representation of a language. For example, "en" for English, "en-gb" for English (UK), "es" for Spanish etc. */
  languageCode: string;
}

/** A collection of TrainingConfigVersion resources. */
export interface PagedTrainingConfigVersion {
  /** The TrainingConfigVersion items on this page */
  value: TrainingConfigVersion[];
  /** The link to the next page of items */
  readonly nextLink?: string;
}

/** Represents a training config version. */
export interface TrainingConfigVersion {
  /** Represents the version of the config. */
  trainingConfigVersion: string;
  /** Represents the training config version expiration date. */
  modelExpirationDate: Date;
}

/** The details of a deployment job. */
export interface DeploymentJob {
  /** The job ID. */
  jobId: string;
  /** The creation date time of the job. */
  readonly createdDateTime: Date;
  /** The the last date time the job was updated. */
  readonly lastUpdatedDateTime: Date;
  /** The expiration date time of the job. */
  readonly expirationDateTime: Date;
  /** The job status. */
  status: JobStatus;
  /** The warnings that were encountered while executing the job. */
  warnings: JobWarning[];
  /** The errors encountered while executing the job. */
  errors: ErrorModel;
  /** The job ID. */
  readonly id: string;
}

/** Represents the job status. */
/** */
export type JobStatus =
  | "notStarted"
  | "running"
  | "succeeded"
  | "failed"
  | "cancelled"
  | "cancelling"
  | "partiallyCompleted";

/** Represents a warning that was encountered while executing the request. */
export interface JobWarning {
  /** The warning code. */
  code: string;
  /** The warning message. */
  message: string;
}

/** The details of a swap deployments job. */
export interface SwapDeploymentsJob {
  /** The job ID. */
  jobId: string;
  /** The creation date time of the job. */
  readonly createdDateTime: Date;
  /** The the last date time the job was updated. */
  readonly lastUpdatedDateTime: Date;
  /** The expiration date time of the job. */
  readonly expirationDateTime: Date;
  /** The job status. */
  status: JobStatus;
  /** The warnings that were encountered while executing the job. */
  warnings: JobWarning[];
  /** The errors encountered while executing the job. */
  errors: ErrorModel;
  /** The job ID. */
  readonly id: string;
}

/** The details of a project deployment. */
export interface Deployment {
  /** The name of the deployment. */
  readonly name: string;
}

/** Swap deployment options. */
export interface SwapDeploymentsOptions {
  /** Represents the first deployment name. */
  firstDeploymentName: string;
  /** Represents the second deployment name. */
  secondDeploymentName: string;
}

/** The details of a project. */
export interface Project {
  /** The project name. */
  readonly projectName: string;
  /** The project kind. */
  projectKind: ProjectKind;
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
  readonly createdDateTime: Date;
  /** Represents the project last modification datetime. */
  readonly lastModifiedDateTime: Date;
  /** Represents the project last training datetime. */
  readonly lastTrainedDateTime: Date;
  /** Represents the project last deployment datetime. */
  readonly lastDeployedDateTime: Date;
}

/** Represents the project kind. */
/** */
export type ProjectKind =
  | "CustomSingleLabelClassification"
  | "CustomMultiLabelClassification"
  | "CustomEntityRecognition";

/** Training job parameters. */
export interface TrainingJobOptions {
  /** The model label. */
  modelLabel: string;
}

export interface OperationStatus {
  /** The unique ID of the operation. */
  id: string;
  /** The status of the operation */
  status: OperationState;
  /** Error object that describes the error when status is "Failed". */
  error?: ErrorModel;
}

/** Enum describing allowed operation states. */
/** "NotStarted", "Running", "Succeeded", "Failed", "Canceled" */
export type OperationState = string;

/** Paged collection of Project items */
export interface PagedProject {
  /** The Project items on this page */
  value: Project[];
  /** The link to the next page of items */
  readonly nextLink?: string;
}

/** Paged collection of Deployment items */
export interface PagedDeployment {
  /** The Deployment items on this page */
  value: Deployment[];
  /** The link to the next page of items */
  readonly nextLink?: string;
}
