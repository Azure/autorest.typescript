// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** User model */
export interface User {
  /** User name */
  name: string;
}

/** Paged collection of User items */
export interface PagedUser {
  /** The User items on this page */
  value: User[];
  /** The link to the next page of items */
  nextLink?: string;
}
