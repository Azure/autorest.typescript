// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface StopTestProfileRunOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ListTestProfileRunsOptionalParams extends OperationOptions {
  /** Maximum number of results to include in a single response. */
  maxpagesize?: number;
  /** Minimum Start DateTime(RFC 3339 literal format) of the test profile runs to filter on. */
  minStartDateTime?: Date;
  /** Maximum Start DateTime(RFC 3339 literal format) of the test profile runs to filter on. */
  maxStartDateTime?: Date;
  /** Minimum End DateTime(RFC 3339 literal format) of the test profile runs to filter on. */
  minEndDateTime?: Date;
  /** Maximum End DateTime(RFC 3339 literal format) of the test profile runs to filter on. */
  maxEndDateTime?: Date;
  /** Start DateTime(RFC 3339 literal format) of the created time range to filter test profile runs. */
  createdDateStartTime?: Date;
  /** End DateTime(RFC 3339 literal format) of the created time range to filter test profile runs. */
  createdDateEndTime?: Date;
  /** Comma separated list of IDs of the test profile runs to filter. */
  testProfileRunIds?: string;
  /** Comma separated IDs of the test profiles which should be associated with the test profile runs to fetch. */
  testProfileIds?: string;
  /** Comma separated list of Statuses of the test profile runs to filter. */
  statuses?: string;
}

/** Optional parameters. */
export interface GetTestProfileRunOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface DeleteTestProfileRunOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface CreateOrUpdateTestProfileRunOptionalParams
  extends OperationOptions {}
