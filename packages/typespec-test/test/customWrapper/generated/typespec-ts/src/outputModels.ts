// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** The details of a project deployment. */
export interface DeploymentOutput {
  /** The name of the deployment. */
  readonly name: string;
  /** The ID of the end-user, for use in tracking and rate-limiting. */
  user?: string;
  /** input type of embedding search to use */
  input_type?: string;
  /** ID of the model to use */
  model?: string;
  /**
   * An input to embed, encoded as a string, a list of strings, or a list of token
   * lists
   */
  input: string | string[] | number[] | number[][];
}
