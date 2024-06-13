// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DatabaseContext } from "../../api/databaseContext.js";
import {
  CloudExadataInfrastructure,
  CloudExadataInfrastructureUpdate,
} from "../../models/models.js";
import {
  listBySubscription,
  createOrUpdate,
  get,
  update,
  $delete,
  listByResourceGroup,
  addStorageCapacity,
} from "../../api/cloudExadataInfrastructures/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  CloudExadataInfrastructuresListBySubscriptionOptionalParams,
  CloudExadataInfrastructuresCreateOrUpdateOptionalParams,
  CloudExadataInfrastructuresGetOptionalParams,
  CloudExadataInfrastructuresUpdateOptionalParams,
  CloudExadataInfrastructuresDeleteOptionalParams,
  CloudExadataInfrastructuresListByResourceGroupOptionalParams,
  CloudExadataInfrastructuresAddStorageCapacityOptionalParams,
} from "../../models/options.js";

export interface CloudExadataInfrastructuresOperations {
  listBySubscription: (
    subscriptionId: string,
    options?: CloudExadataInfrastructuresListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<CloudExadataInfrastructure>;
  createOrUpdate: (
    subscriptionId: string,
    resourceGroupName: string,
    cloudexadatainfrastructurename: string,
    resource: CloudExadataInfrastructure,
    options?: CloudExadataInfrastructuresCreateOrUpdateOptionalParams,
  ) => PollerLike<
    OperationState<CloudExadataInfrastructure>,
    CloudExadataInfrastructure
  >;
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    cloudexadatainfrastructurename: string,
    options?: CloudExadataInfrastructuresGetOptionalParams,
  ) => Promise<CloudExadataInfrastructure>;
  update: (
    subscriptionId: string,
    resourceGroupName: string,
    cloudexadatainfrastructurename: string,
    properties: CloudExadataInfrastructureUpdate,
    options?: CloudExadataInfrastructuresUpdateOptionalParams,
  ) => PollerLike<
    OperationState<CloudExadataInfrastructure>,
    CloudExadataInfrastructure
  >;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    cloudexadatainfrastructurename: string,
    options?: CloudExadataInfrastructuresDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  listByResourceGroup: (
    subscriptionId: string,
    resourceGroupName: string,
    options?: CloudExadataInfrastructuresListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<CloudExadataInfrastructure>;
  addStorageCapacity: (
    subscriptionId: string,
    resourceGroupName: string,
    cloudexadatainfrastructurename: string,
    options?: CloudExadataInfrastructuresAddStorageCapacityOptionalParams,
  ) => PollerLike<
    OperationState<CloudExadataInfrastructure>,
    CloudExadataInfrastructure
  >;
}

export function getCloudExadataInfrastructures(context: DatabaseContext) {
  return {
    listBySubscription: (
      subscriptionId: string,
      options?: CloudExadataInfrastructuresListBySubscriptionOptionalParams,
    ) => listBySubscription(context, subscriptionId, options),
    createOrUpdate: (
      subscriptionId: string,
      resourceGroupName: string,
      cloudexadatainfrastructurename: string,
      resource: CloudExadataInfrastructure,
      options?: CloudExadataInfrastructuresCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        cloudexadatainfrastructurename,
        resource,
        options,
      ),
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      cloudexadatainfrastructurename: string,
      options?: CloudExadataInfrastructuresGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        cloudexadatainfrastructurename,
        options,
      ),
    update: (
      subscriptionId: string,
      resourceGroupName: string,
      cloudexadatainfrastructurename: string,
      properties: CloudExadataInfrastructureUpdate,
      options?: CloudExadataInfrastructuresUpdateOptionalParams,
    ) =>
      update(
        context,
        subscriptionId,
        resourceGroupName,
        cloudexadatainfrastructurename,
        properties,
        options,
      ),
    delete: (
      subscriptionId: string,
      resourceGroupName: string,
      cloudexadatainfrastructurename: string,
      options?: CloudExadataInfrastructuresDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        cloudexadatainfrastructurename,
        options,
      ),
    listByResourceGroup: (
      subscriptionId: string,
      resourceGroupName: string,
      options?: CloudExadataInfrastructuresListByResourceGroupOptionalParams,
    ) =>
      listByResourceGroup(context, subscriptionId, resourceGroupName, options),
    addStorageCapacity: (
      subscriptionId: string,
      resourceGroupName: string,
      cloudexadatainfrastructurename: string,
      options?: CloudExadataInfrastructuresAddStorageCapacityOptionalParams,
    ) =>
      addStorageCapacity(
        context,
        subscriptionId,
        resourceGroupName,
        cloudexadatainfrastructurename,
        options,
      ),
  };
}

export function getCloudExadataInfrastructuresOperations(
  context: DatabaseContext,
): CloudExadataInfrastructuresOperations {
  return {
    ...getCloudExadataInfrastructures(context),
  };
}
