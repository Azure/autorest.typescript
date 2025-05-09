// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DataReplicationContext } from "../../api/dataReplicationContext.js";
import { PrivateLinkResource } from "../../models/models.js";
import {
  PrivateLinkResourcesListOptionalParams,
  PrivateLinkResourcesGetOptionalParams,
} from "../../api/privateLinkResources/options.js";
import { list, get } from "../../api/privateLinkResources/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a PrivateLinkResources operations. */
export interface PrivateLinkResourcesOperations {
  /** Gets the list of private link resources. */
  list: (
    resourceGroupName: string,
    vaultName: string,
    options?: PrivateLinkResourcesListOptionalParams,
  ) => PagedAsyncIterableIterator<PrivateLinkResource>;
  /** Gets the details of site recovery private link resource. */
  get: (
    resourceGroupName: string,
    vaultName: string,
    privateLinkResourceName: string,
    options?: PrivateLinkResourcesGetOptionalParams,
  ) => Promise<PrivateLinkResource>;
}

function _getPrivateLinkResources(context: DataReplicationContext) {
  return {
    list: (
      resourceGroupName: string,
      vaultName: string,
      options?: PrivateLinkResourcesListOptionalParams,
    ) => list(context, resourceGroupName, vaultName, options),
    get: (
      resourceGroupName: string,
      vaultName: string,
      privateLinkResourceName: string,
      options?: PrivateLinkResourcesGetOptionalParams,
    ) =>
      get(
        context,
        resourceGroupName,
        vaultName,
        privateLinkResourceName,
        options,
      ),
  };
}

export function _getPrivateLinkResourcesOperations(
  context: DataReplicationContext,
): PrivateLinkResourcesOperations {
  return {
    ..._getPrivateLinkResources(context),
  };
}
