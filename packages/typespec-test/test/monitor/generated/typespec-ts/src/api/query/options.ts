// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface QueryBatchOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface QueryExecuteWithResourceIdOptionalParams
  extends OperationOptions {
  /**
   * Optional. The prefer header to set server timeout, query statistics and
   * visualization information.
   */
  prefer?: string;
}

/** Optional parameters. */
export interface QueryGetWithResourceIdOptionalParams extends OperationOptions {
  /**
   * Optional. The timespan over which to query data. This is an ISO8601 time period
   * value.  This timespan is applied in addition to any that are specified in the
   * query expression.
   */
  timespan?: string;
}

/** Optional parameters. */
export interface QueryExecuteOptionalParams extends OperationOptions {
  /** Optional. The prefer header to set server timeout, query statistics and visualization information. */
  prefer?: string;
}

/** Optional parameters. */
export interface QueryGetOptionalParams extends OperationOptions {
  /**
   * Optional. The timespan over which to query data. This is an ISO8601 time period
   * value.  This timespan is applied in addition to any that are specified in the
   * query expression.
   */
  timespan?: string;
}
