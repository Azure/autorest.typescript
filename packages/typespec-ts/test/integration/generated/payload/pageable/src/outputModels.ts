// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Paged } from "@azure/core-paging";

/** User model */
export interface UserOutput {
  /** User name */
  name: string;
}

/** Paged collection of User items */
export type PagedUserOutput = Paged<UserOutput>;
