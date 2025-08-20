// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DeploymentStacksDeleteDetachEnum } from "../../models/models.js";
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface DeploymentStacksExportTemplateAtManagementGroupOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface DeploymentStacksDeleteAtManagementGroupOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** Flag to indicate delete rather than detach for unmanaged resources. */
  unmanageActionResources?: DeploymentStacksDeleteDetachEnum;
  /** Flag to indicate delete rather than detach for unmanaged resource groups. */
  unmanageActionResourceGroups?: DeploymentStacksDeleteDetachEnum;
  /** Flag to indicate delete rather than detach for unmanaged management groups. */
  unmanageActionManagementGroups?: DeploymentStacksDeleteDetachEnum;
  /** Flag to bypass service errors that indicate the stack resource list is not correctly synchronized. */
  bypassStackOutOfSyncError?: boolean;
}

/** Optional parameters. */
export interface DeploymentStacksCreateOrUpdateAtManagementGroupOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface DeploymentStacksValidateStackAtManagementGroupOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface DeploymentStacksListAtManagementGroupOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface DeploymentStacksGetAtManagementGroupOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface DeploymentStacksExportTemplateAtSubscriptionOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface DeploymentStacksDeleteAtSubscriptionOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** Flag to indicate delete rather than detach for unmanaged resources. */
  unmanageActionResources?: DeploymentStacksDeleteDetachEnum;
  /** Flag to indicate delete rather than detach for unmanaged resource groups. */
  unmanageActionResourceGroups?: DeploymentStacksDeleteDetachEnum;
  /** Flag to indicate delete rather than detach for unmanaged management groups. */
  unmanageActionManagementGroups?: DeploymentStacksDeleteDetachEnum;
  /** Flag to bypass service errors that indicate the stack resource list is not correctly synchronized. */
  bypassStackOutOfSyncError?: boolean;
}

/** Optional parameters. */
export interface DeploymentStacksCreateOrUpdateAtSubscriptionOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface DeploymentStacksValidateStackAtSubscriptionOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface DeploymentStacksListAtSubscriptionOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface DeploymentStacksGetAtSubscriptionOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface DeploymentStacksExportTemplateAtResourceGroupOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface DeploymentStacksDeleteAtResourceGroupOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** Flag to indicate delete rather than detach for unmanaged resources. */
  unmanageActionResources?: DeploymentStacksDeleteDetachEnum;
  /** Flag to indicate delete rather than detach for unmanaged resource groups. */
  unmanageActionResourceGroups?: DeploymentStacksDeleteDetachEnum;
  /** Flag to indicate delete rather than detach for unmanaged management groups. */
  unmanageActionManagementGroups?: DeploymentStacksDeleteDetachEnum;
  /** Flag to bypass service errors that indicate the stack resource list is not correctly synchronized. */
  bypassStackOutOfSyncError?: boolean;
}

/** Optional parameters. */
export interface DeploymentStacksCreateOrUpdateAtResourceGroupOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface DeploymentStacksValidateStackAtResourceGroupOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface DeploymentStacksListAtResourceGroupOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface DeploymentStacksGetAtResourceGroupOptionalParams
  extends OperationOptions {}
