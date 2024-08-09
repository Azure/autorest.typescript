// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Details about a user. */
export interface User {
  /** The user's name. */
  name: string;
  /** The user's order list */
  orders?: Array<UserOrder>;
}

/** UserOrder for testing list with expand. */
export interface UserOrder {
  /** The user's id. */
  userId: number;
  /** The user's order detail */
  detail: string;
}
