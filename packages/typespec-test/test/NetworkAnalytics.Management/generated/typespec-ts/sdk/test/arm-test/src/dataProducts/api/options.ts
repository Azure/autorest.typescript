// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface ListBySubscriptionOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ListByResourceGroupOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ListRolesAssignmentsOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface RemoveUserRoleOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface AddUserRoleOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface RotateKeyOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GenerateStorageAccountSasTokenOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface DeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface UpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface GetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface CreateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}
