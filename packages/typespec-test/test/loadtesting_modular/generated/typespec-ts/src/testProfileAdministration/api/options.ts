// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface ListTestProfilesOptionalParams extends OperationOptions {
  /** Maximum number of results to include in a single response. */
  maxpagesize?: number;
  /** Start DateTime(RFC 3339 literal format) of the last updated time range to filter test profiles. */
  lastModifiedStartTime?: Date;
  /** End DateTime(RFC 3339 literal format) of the last updated time range to filter test profiles. */
  lastModifiedEndTime?: Date;
  /** Comma separated list of IDs of the test profiles to filter. */
  testProfileIds?: string;
  /** Comma separated list IDs of the tests which should be associated with the test profiles to fetch. */
  testIds?: string;
}

/** Optional parameters. */
export interface GetTestProfileOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface DeleteTestProfileOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface CreateOrUpdateTestProfileOptionalParams
  extends OperationOptions {}
