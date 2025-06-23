// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface EvaluatedWebAppsOperationsListByParentOptionalParams
  extends OperationOptions {
  /** Filter query. */
  filter?: string;
  /** Optional parameter for page size. */
  pageSize?: number;
  /** Optional parameter for continuation token. */
  continuationToken?: string;
  /** Total record count. */
  totalRecordCount?: number;
}

/** Optional parameters. */
export interface EvaluatedWebAppsOperationsGetOptionalParams
  extends OperationOptions {}
