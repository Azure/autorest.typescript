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

/** The body of the input. */
export interface ListItemInputBody {
  /** The name of the input. */
  inputName: string;
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

/** Paged collection of FirstItem items */
export interface PagedFirstItem {
  /** The FirstItem items on this page */
  value: FirstItem[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** First item. */
export interface FirstItem {
  /** The id of the item. */
  readonly id: number;
}

/** Paged collection of SecondItem items */
export interface PagedSecondItem {
  /** The SecondItem items on this page */
  value: SecondItem[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Second item. */
export interface SecondItem {
  /** The name of the item. */
  readonly name: string;
}

/** Alias for ListItemInputExtensibleEnum */
export type ListItemInputExtensibleEnum = string | "First" | "Second";
