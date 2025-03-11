// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext } from "../../api/azureVMwareSolutionAPIContext.js";
import {
  ProvisionedNetworksGetOptionalParams,
  ProvisionedNetworksListOptionalParams,
} from "../../api/options.js";
import {
  provisionedNetworksGet,
  provisionedNetworksList,
} from "../../api/provisionedNetworks/index.js";
import { ProvisionedNetwork } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a ProvisionedNetworks operations. */
export interface ProvisionedNetworksOperations {
  /** Get a ProvisionedNetwork */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    provisionedNetworkName: string,
    options?: ProvisionedNetworksGetOptionalParams,
  ) => Promise<ProvisionedNetwork>;
  /** List ProvisionedNetwork resources by PrivateCloud */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: ProvisionedNetworksListOptionalParams,
  ) => PagedAsyncIterableIterator<ProvisionedNetwork>;
}

function _getProvisionedNetworks(context: AzureVMwareSolutionAPIContext) {
  return {
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      provisionedNetworkName: string,
      options?: ProvisionedNetworksGetOptionalParams,
    ) =>
      provisionedNetworksGet(
        context,
        resourceGroupName,
        privateCloudName,
        provisionedNetworkName,
        options,
      ),
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: ProvisionedNetworksListOptionalParams,
    ) =>
      provisionedNetworksList(
        context,
        resourceGroupName,
        privateCloudName,
        options,
      ),
  };
}

export function _getProvisionedNetworksOperations(
  context: AzureVMwareSolutionAPIContext,
): ProvisionedNetworksOperations {
  return {
    ..._getProvisionedNetworks(context),
  };
}
