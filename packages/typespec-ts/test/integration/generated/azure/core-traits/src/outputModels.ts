// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Sample Model */
export interface UserOutput {
  /** The user's id. */
  readonly id: number;
  /** The user's name. */
  name?: string;
}

/** User action response */
export interface UserActionResponseOutput {
  /** User action result. */
  userActionResult: string;
}

/** Alias for RepeatabilityResultOutput */
export type RepeatabilityResultOutput = "accepted" | "rejected";
