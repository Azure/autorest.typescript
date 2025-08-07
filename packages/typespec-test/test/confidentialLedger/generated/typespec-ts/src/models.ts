// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Details about a ledger entry. */
export interface LedgerEntry {
  /** Contents of the ledger entry. */
  contents: string;
}

/** Details about a Confidential ledger user. */
export interface LedgerUser {
  /** The user's assigned role. */
  assignedRole: LedgerUserRole;
}

/** Represents an assignable role. */
export type LedgerUserRole = "Administrator" | "Contributor" | "Reader";
