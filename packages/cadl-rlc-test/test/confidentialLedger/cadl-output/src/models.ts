/** The template for adding updateable properties. */
export interface UpdateablePropertiesDefaultKeyVisibility {
  /** Contents of the ledger entry. */
  contents: string;
}

/** The template for adding optional properties. */
export interface OptionalPropertiesUpdateableProperties {
  /**
   * The user's assigned role.
   *
   * Possible values: Administrator, Contributor, Reader
   */
  assignedRole?: string;
}
