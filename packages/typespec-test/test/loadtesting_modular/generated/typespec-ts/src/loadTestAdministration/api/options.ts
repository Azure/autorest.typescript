// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FileType } from "../../models/models.js";
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface DeleteTestOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface DeleteTestFileOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface UploadTestFileOptionalParams extends OperationOptions {
  /** File type */
  fileType?: FileType;
}

/** Optional parameters. */
export interface ListTestsOptionalParams extends OperationOptions {
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
export interface ListTestFilesOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GetTestFileOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GetTestOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GetServerMetricsConfigOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface GetAppComponentsOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface CreateOrUpdateServerMetricsConfigOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface CreateOrUpdateAppComponentsOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface CreateOrUpdateTestOptionalParams extends OperationOptions {}
