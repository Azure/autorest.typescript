// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface PostIfMatchOptionalParams extends OperationOptions {
  /** The request should only proceed if an entity matches this string. */
  ifMatch?: string;
}

/** Optional parameters. */
export interface PostIfNoneMatchOptionalParams extends OperationOptions {
  /** The request should only proceed if no entity matches this string. */
  ifNoneMatch?: string;
}
