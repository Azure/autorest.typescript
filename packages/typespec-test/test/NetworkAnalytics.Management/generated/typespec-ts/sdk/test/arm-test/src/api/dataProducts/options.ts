// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface DataProductsListBySubscriptionOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface DataProductsListByResourceGroupOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface DataProductsListRolesAssignmentsOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface DataProductsRemoveUserRoleOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface DataProductsAddUserRoleOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface DataProductsRotateKeyOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface DataProductsGenerateStorageAccountSasTokenOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface DataProductsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface DataProductsUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface DataProductsGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface DataProductsCreateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}
