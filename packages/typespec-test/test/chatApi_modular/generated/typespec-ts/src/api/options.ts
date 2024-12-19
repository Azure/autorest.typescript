// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface CreateOptionalParams extends OperationOptions {
  /** Body parameter's content type. Known values are application/json */
  contentType?: "application/json";
}

/** Optional parameters. */
export interface CreateStreamingOptionalParams extends OperationOptions {
  /** Body parameter's content type. Known values are application/json */
  contentType?: "application/json";
}
