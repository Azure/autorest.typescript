// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Paged collection of User items */
export interface PagedUser {
  /** The User items on this page */
  value: User[];
  /** The link to the next page of items */
  readonly nextLink?: string;
}

/** User model */
export interface User {
  /** User name */
  name: string;
}
