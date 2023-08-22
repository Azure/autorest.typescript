// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Paged } from "@azure/core-paging";

/** Details about a user. */
export interface UserOutput {
  /** The user's id. */
  readonly id: number;
  /** The user's name. */
  name: string;
  /** The user's order list */
  orders?: Array<UserOrderOutput>;
  /** The entity tag for this resource. */
  readonly etag: string;
}

/** UserOrder for testing list with expand. */
export interface UserOrderOutput {
  /** The user's id. */
  readonly id: number;
  /** The user's id. */
  userId: number;
  /** The user's order detail */
  detail: string;
}

export interface UserListResultsOutput {
  /** List of items. */
  items: Array<UserOutput>;
  /** Link to fetch more items. */
  nextLink?: string;
}

/** Paged collection of User items */
export type PagedUserOutput = Paged<UserOutput>;
