// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PrivateLinkResourcesListByVaultOptionalParams,
  PrivateLinkResourcesListByVaultResponse,
} from "../models/index.js";

/** Interface representing a PrivateLinkResources. */
export interface PrivateLinkResources {
  /**
   * Gets the private link resources supported for the key vault.
   * @param resourceGroupName Name of the resource group that contains the key vault.
   * @param vaultName The name of the key vault.
   * @param options The options parameters.
   */
  listByVault(
    resourceGroupName: string,
    vaultName: string,
    options?: PrivateLinkResourcesListByVaultOptionalParams,
  ): Promise<PrivateLinkResourcesListByVaultResponse>;
}
