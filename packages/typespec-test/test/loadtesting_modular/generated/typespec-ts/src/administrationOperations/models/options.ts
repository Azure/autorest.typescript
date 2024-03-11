// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";
import { FileType } from "./models.js";

export interface CreateOrUpdateTestOptions extends OperationOptions {
  contentType?: string;
}

export interface CreateOrUpdateAppComponentsOptions extends OperationOptions {
  contentType?: string;
}

export interface CreateOrUpdateServerMetricsConfigOptions
  extends OperationOptions {
  contentType?: string;
}

export interface GetAppComponentsOptions extends OperationOptions {}

export interface GetServerMetricsConfigOptions extends OperationOptions {}

export interface GetTestOptions extends OperationOptions {}

export interface GetTestFileOptions extends OperationOptions {}

export interface ListTestFilesOptions extends OperationOptions {}

export interface ListTestsOptions extends OperationOptions {
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
  /**
   * Start DateTime(ISO 8601 literal format) of the last updated time range to
   * filter tests.
   */
  lastModifiedStartTime?: string;
  /**
   * End DateTime(ISO 8601 literal format) of the last updated time range to filter
   * tests.
   */
  lastModifiedEndTime?: string;
  /** Number of results in response. */
  maxpagesize?: number;
}

export interface UploadTestFileOptions extends OperationOptions {
  contentType?: string;
  /** File type */
  fileType?: FileType;
}

export interface DeleteTestFileOptions extends OperationOptions {}

export interface DeleteTestOptions extends OperationOptions {}
