// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** The details of a project. */
export interface Project {
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
}

/** Training job parameters. */
export interface TrainingJobOptions {
  /** The model label. */
  modelLabel: string;
}

/** Swap deployment options. */
export interface SwapDeploymentsOptions {
  /** Represents the first deployment name. */
  firstDeploymentName: string;
  /** Represents the second deployment name. */
  secondDeploymentName: string;
}
