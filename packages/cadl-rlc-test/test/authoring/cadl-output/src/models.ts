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

export type ProjectMergePatch = Partial<Omit<Project, "createdDateTime">>

/** Training job parameters. */
export interface TrainingJobOptions {
  modelLabel: string;
}

export interface SwapDeploymentsOptions {
  /** Represents the first deployment name. */
  firstDeploymentName: string;
  /** Represents the second deployment name. */
  secondDeploymentName: string;
}
