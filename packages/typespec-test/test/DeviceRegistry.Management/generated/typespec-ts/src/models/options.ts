// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface OperationsListOptionalParams extends OperationOptions {}

export interface OperationStatusGetOptionalParams extends OperationOptions {}

export interface AssetsGetOptionalParams extends OperationOptions {}

export interface AssetsCreateOrReplaceOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface AssetsUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface AssetsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface AssetsListByResourceGroupOptionalParams
  extends OperationOptions {}

export interface AssetsListBySubscriptionOptionalParams
  extends OperationOptions {}

export interface AssetEndpointProfilesGetOptionalParams
  extends OperationOptions {}

export interface AssetEndpointProfilesCreateOrReplaceOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface AssetEndpointProfilesUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface AssetEndpointProfilesDeleteOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface AssetEndpointProfilesListByResourceGroupOptionalParams
  extends OperationOptions {}

export interface AssetEndpointProfilesListBySubscriptionOptionalParams
  extends OperationOptions {}
