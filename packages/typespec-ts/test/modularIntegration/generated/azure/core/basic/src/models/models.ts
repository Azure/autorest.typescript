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

export function userSerializer(item: User): Record<string, unknown> {
  return {
    name: item["name"],
    orders:
      item["orders"] === undefined
        ? item["orders"]
        : item["orders"].map(userOrderSerializer),
  };
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

export function userOrderSerializer(item: UserOrder): Record<string, unknown> {
  return {
    userId: item["userId"],
    detail: item["detail"],
  };
}

/** The version of the API. */
export type Versions = "2022-12-01-preview";

/** Paged collection of User items */
export interface _PagedUser {
  /** The User items on this page */
  value: User[];
  /** The link to the next page of items */
  nextLink?: string;
}
