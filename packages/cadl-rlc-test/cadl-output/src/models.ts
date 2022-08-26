export interface LedgerEntry {
  contents: string;
  collectionId: string;
  transactionId: string;
}

export interface LedgerUser {
  /** Represents an assignable role */
  assignedRole: "Administrator" | "Contributor" | "Reader";
  userId: string;
}
