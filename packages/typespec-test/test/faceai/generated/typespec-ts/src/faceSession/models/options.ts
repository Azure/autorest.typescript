// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface CreateLivenessSessionOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface DeleteLivenessSessionOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GetLivenessSessionResultOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface GetLivenessSessionsOptionalParams extends OperationOptions {
  /** List resources greater than the "start". It contains no more than 64 characters. Default is empty. */
  start?: string;
  /** The number of items to list, ranging in [1, 1000]. Default is 1000. */
  top?: number;
}

/** Optional parameters. */
export interface GetLivenessSessionAuditEntriesOptionalParams
  extends OperationOptions {
  /** List resources greater than the "start". It contains no more than 64 characters. Default is empty. */
  start?: string;
  /** The number of items to list, ranging in [1, 1000]. Default is 1000. */
  top?: number;
}

/** Optional parameters. */
export interface CreateLivenessWithVerifySessionOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface CreateLivenessWithVerifySessionWithVerifyImageOptionalParams
  extends OperationOptions {
  /** The content type for the operation. Always multipart/form-data for this operation. */
  contentType?: string;
}

/** Optional parameters. */
export interface DeleteLivenessWithVerifySessionOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface GetLivenessWithVerifySessionResultOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface GetLivenessWithVerifySessionsOptionalParams
  extends OperationOptions {
  /** List resources greater than the "start". It contains no more than 64 characters. Default is empty. */
  start?: string;
  /** The number of items to list, ranging in [1, 1000]. Default is 1000. */
  top?: number;
}

/** Optional parameters. */
export interface GetLivenessWithVerifySessionAuditEntriesOptionalParams
  extends OperationOptions {
  /** List resources greater than the "start". It contains no more than 64 characters. Default is empty. */
  start?: string;
  /** The number of items to list, ranging in [1, 1000]. Default is 1000. */
  top?: number;
}
