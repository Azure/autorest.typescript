// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface ListOptionalParams extends OperationOptions {
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}
