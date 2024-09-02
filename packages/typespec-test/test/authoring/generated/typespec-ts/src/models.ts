// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** The details of a project. */
export interface Project {
  /** The project kind. */
  projectKind: ProjectKind;
  /** The storage container name. */
  storageInputContainerName: string;
  /** The project settings. */
  settings?: ProjectSettings;
  /** Whether the project would be used for multiple languages or not. */
  multilingual?: boolean;
  /** The project description. */
  description?: string;
  /** The project language. This is BCP-47 representation of a language. For example, use "en" for English, "en-gb" for English (UK), "es" for Spanish etc. */
  language: string;
}

/** Represents the settings used to define the project behavior. */
export interface ProjectSettings extends Record<string, string> {}

/** Training job parameters. */
export interface TrainingJobOptions {
  /** The model label. */
  modelLabel: string;
}

/** The details of a project deployment. */
export interface Deployment {}

/** Swap deployment options. */
export interface SwapDeploymentsOptions {
  /** Represents the first deployment name. */
  firstDeploymentName: string;
  /** Represents the second deployment name. */
  secondDeploymentName: string;
}

/** Represents the project kind. */
export type ProjectKind =
  | "CustomSingleLabelClassification"
  | "CustomMultiLabelClassification"
  | "CustomEntityRecognition";
