// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface EvaluatedSqlEntitiesOperationsListByParentOptionalParams
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
export interface EvaluatedSqlEntitiesOperationsGetOptionalParams
  extends OperationOptions {}
