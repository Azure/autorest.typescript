// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Sample Model */
export interface User {
  /** The user's id. */
  readonly id: number;
  /** The user's name. */
  name?: string;
}

/** User action param */
export interface UserActionParam {
  /** User action value. */
  userActionValue: string;
}

/** User action response */
export interface UserActionResponse {
  /** User action result. */
  userActionResult: string;
}

/** Alias for RepeatabilityResult */
export type RepeatabilityResult = "accepted" | "rejected";
