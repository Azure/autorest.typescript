// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";
import { FileType } from "./models.js";

export interface AdministrationOperationsCreateOrUpdateTestOptions
  extends OperationOptions {
  contentType?: string;
}

export interface AdministrationOperationsCreateOrUpdateAppComponentsOptions
  extends OperationOptions {
  contentType?: string;
}

export interface AdministrationOperationsCreateOrUpdateServerMetricsConfigOptions
  extends OperationOptions {
  contentType?: string;
}

export interface AdministrationOperationsGetAppComponentsOptions
  extends OperationOptions {}

export interface AdministrationOperationsGetServerMetricsConfigOptions
  extends OperationOptions {}

export interface AdministrationOperationsGetTestOptions
  extends OperationOptions {}

export interface AdministrationOperationsGetTestFileOptions
  extends OperationOptions {}

export interface AdministrationOperationsListTestFilesOptions
  extends OperationOptions {}

export interface AdministrationOperationsListTestsOptions
  extends OperationOptions {
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

export interface AdministrationOperationsUploadTestFileOptions
  extends OperationOptions {
  contentType?: string;
  /** File type */
  fileType?: FileType;
}

export interface AdministrationOperationsDeleteTestFileOptions
  extends OperationOptions {}

export interface AdministrationOperationsDeleteTestOptions
  extends OperationOptions {}
