// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** The details of a project deployment. */
export interface DeploymentOutput {
  /** The name of the deployment. */
  name: string;
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

/** A response containing error details. */
export interface ErrorResponseOutput {
  /** The error object. */
  error: ErrorModelOutput;
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
