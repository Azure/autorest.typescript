// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Details about a user. */
export interface User {
  /** The user's id. */
  readonly id: number;
  /** The user's name. */
  name: string;
  /** The user's order list */
  orders?: UserOrder[];
  /** The entity tag for this resource. */
  readonly etag: string;
}

/** UserOrder for testing list with expand. */
export interface UserOrder {
  /** The user's id. */
  readonly id: number;
  /** The user's id. */
  userId: number;
  /** The user's order detail */
  detail: string;
}

export interface UserListResults {
  /** List of items. */
  items: User[];
  /** Link to fetch more items. */
  nextLink?: string;
}

/** Paged collection of User items */
export interface PagedUser {
  /** The User items on this page */
  value: User[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Paged collection of User items */
export interface PagedUser {
  /** The User items on this page */
  value: User[];
  /** The link to the next page of items */
  nextLink?: string;
}
