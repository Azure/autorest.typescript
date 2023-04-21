// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Paged } from "@azure/core-paging";
import { ErrorModel } from "@azure-rest/core-client";

/** The details of a project. */
export interface ProjectOutput {
  /** The project name. */
  readonly projectName: string;
  /** The project kind. */
  projectKind:
    | "CustomSingleLabelClassification"
    | "CustomMultiLabelClassification"
    | "CustomEntityRecognition";
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
}

/** The details of a project deployment. */
export interface DeploymentOutput {
  /** The name of the deployment. */
  readonly name: string;
}

/** The details of a deployment job. */
export interface DeploymentJobOutput {
  /** The job ID. */
  jobId: string;
  /** The creation date time of the job. */
  readonly createdDateTime: string;
  /** The the last date time the job was updated. */
  readonly lastUpdatedDateTime: string;
  /** The expiration date time of the job. */
  readonly expirationDateTime: string;
  /** The job status. */
  status:
    | "notStarted"
    | "running"
    | "succeeded"
    | "failed"
    | "cancelled"
    | "cancelling"
    | "partiallyCompleted";
  /** The warnings that were encountered while executing the job. */
  warnings: Array<JobWarningOutput>;
  /** The errors encountered while executing the job. */
  errors: ErrorModel;
  /** The job ID. */
  readonly id: string;
}

/** Represents a warning that was encountered while executing the request. */
export interface JobWarningOutput {
  /** The warning code. */
  code: string;
  /** The warning message. */
  message: string;
}

/** The details of a swap deployments job. */
export interface SwapDeploymentsJobOutput {
  /** The job ID. */
  jobId: string;
  /** The creation date time of the job. */
  readonly createdDateTime: string;
  /** The the last date time the job was updated. */
  readonly lastUpdatedDateTime: string;
  /** The expiration date time of the job. */
  readonly expirationDateTime: string;
  /** The job status. */
  status:
    | "notStarted"
    | "running"
    | "succeeded"
    | "failed"
    | "cancelled"
    | "cancelling"
    | "partiallyCompleted";
  /** The warnings that were encountered while executing the job. */
  warnings: Array<JobWarningOutput>;
  /** The errors encountered while executing the job. */
  errors: ErrorModel;
  /** The job ID. */
  readonly id: string;
}

/** Represents a supported language. */
export interface SupportedLanguageOutput {
  /** The language name. */
  languageName: string;
  /** The language code. This is BCP-47 representation of a language. For example, "en" for English, "en-gb" for English (UK), "es" for Spanish etc. */
  languageCode: string;
}

/** Represents a training config version. */
export interface TrainingConfigVersionOutput {
  /** Represents the version of the config. */
  trainingConfigVersion: string;
  /** Represents the training config version expiration date. */
  modelExpirationDate: string;
}

/** Paged collection of Project items */
export type ProjectListOutput = Paged<ProjectOutput>;
/** Paged collection of Deployment items */
export type DeploymentListOutput = Paged<DeploymentOutput>;
/** A collection of SupportedLanguage resources. */
export type PagedSupportedLanguageOutput = Paged<SupportedLanguageOutput>;
/** A collection of TrainingConfigVersion resources. */
export type PagedTrainingConfigVersionOutput =
  Paged<TrainingConfigVersionOutput>;
