// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FileType } from "../../models/models.js";
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface LoadTestAdministrationGetServerMetricsConfigOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface LoadTestAdministrationCreateOrUpdateServerMetricsConfigOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface LoadTestAdministrationGetAppComponentsOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface LoadTestAdministrationCreateOrUpdateAppComponentsOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface LoadTestAdministrationListTestFilesOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface LoadTestAdministrationDeleteTestFileOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface LoadTestAdministrationGetTestFileOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface LoadTestAdministrationUploadTestFileOptionalParams extends OperationOptions {
  /** File type */
  fileType?: FileType;
}

/** Optional parameters. */
export interface LoadTestAdministrationListTestsOptionalParams extends OperationOptions {
  /**
   * Sort on the supported fields in (field asc/desc) format. eg:
   * lastModifiedDateTime asc. Supported fields - lastModifiedDateTime
   */
  orderby?: string;
  /**
   * Prefix based, case sensitive search on searchable fields - displayName,
   * createdBy. For example, to search for a test, with display name is Login Test,
   * the search parameter can be Login.
   */
  search?: string;
  /** Start DateTime(RFC 3339 literal format) of the last updated time range to filter tests. */
  lastModifiedStartTime?: Date;
  /** End DateTime(RFC 3339 literal format) of the last updated time range to filter tests. */
  lastModifiedEndTime?: Date;
  /** Number of results in response. */
  maxpagesize?: number;
}

/** Optional parameters. */
export interface LoadTestAdministrationGetTestOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface LoadTestAdministrationDeleteTestOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface LoadTestAdministrationCreateOrUpdateTestOptionalParams extends OperationOptions {}
