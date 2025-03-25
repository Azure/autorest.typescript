// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmContext } from "../../api/scVmmContext.js";
import { Cloud, CloudTagsUpdate } from "../../models/models.js";
import {
  CloudsListBySubscriptionOptionalParams,
  CloudsListByResourceGroupOptionalParams,
  CloudsDeleteOptionalParams,
  CloudsUpdateOptionalParams,
  CloudsCreateOrUpdateOptionalParams,
  CloudsGetOptionalParams,
} from "../../api/clouds/options.js";
import {
  cloudsListBySubscription,
  cloudsListByResourceGroup,
  cloudsDelete,
  cloudsUpdate,
  cloudsCreateOrUpdate,
  cloudsGet,
} from "../../api/clouds/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Clouds operations. */
export interface CloudsOperations {
  /** List of Clouds in a subscription. */
  listBySubscription: (
    options?: CloudsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<Cloud>;
  /** List of Clouds in a resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: CloudsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Cloud>;
  /** Deregisters the ScVmm fabric cloud from Azure. */
  delete: (
    resourceGroupName: string,
    cloudResourceName: string,
    options?: CloudsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Updates the Clouds resource. */
  update: (
    resourceGroupName: string,
    cloudResourceName: string,
    properties: CloudTagsUpdate,
    options?: CloudsUpdateOptionalParams,
  ) => PollerLike<OperationState<Cloud>, Cloud>;
  /** Onboards the ScVmm fabric cloud as an Azure cloud resource. */
  createOrUpdate: (
    resourceGroupName: string,
    cloudResourceName: string,
    resource: Cloud,
    options?: CloudsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Cloud>, Cloud>;
  /** Implements Cloud GET method. */
  get: (
    resourceGroupName: string,
    cloudResourceName: string,
    options?: CloudsGetOptionalParams,
  ) => Promise<Cloud>;
}

function _getClouds(context: ScVmmContext) {
  return {
    listBySubscription: (options?: CloudsListBySubscriptionOptionalParams) =>
      cloudsListBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: CloudsListByResourceGroupOptionalParams,
    ) => cloudsListByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      cloudResourceName: string,
      options?: CloudsDeleteOptionalParams,
    ) => cloudsDelete(context, resourceGroupName, cloudResourceName, options),
    update: (
      resourceGroupName: string,
      cloudResourceName: string,
      properties: CloudTagsUpdate,
      options?: CloudsUpdateOptionalParams,
    ) =>
      cloudsUpdate(
        context,
        resourceGroupName,
        cloudResourceName,
        properties,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      cloudResourceName: string,
      resource: Cloud,
      options?: CloudsCreateOrUpdateOptionalParams,
    ) =>
      cloudsCreateOrUpdate(
        context,
        resourceGroupName,
        cloudResourceName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      cloudResourceName: string,
      options?: CloudsGetOptionalParams,
    ) => cloudsGet(context, resourceGroupName, cloudResourceName, options),
  };
}

export function _getCloudsOperations(context: ScVmmContext): CloudsOperations {
  return {
    ..._getClouds(context),
  };
}
