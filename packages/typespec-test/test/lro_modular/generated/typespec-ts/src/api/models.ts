// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Details about a user. */
export interface User {
  /** The name of user. */
  readonly name: string;
  /** The role of user */
  role: string;
}

/** Enum describing allowed operation states. */
/** "InProgress", "Succeeded", "Failed", "Canceled" */
export type PollingOperationState = string;

/** The exported user data. */
export interface ExportedUser {
  /** The name of user. */
  name: string;
  /** The exported URI. */
  resourceUri: string;
}
