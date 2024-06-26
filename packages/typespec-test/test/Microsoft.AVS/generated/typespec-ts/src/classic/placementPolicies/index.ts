// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AVSContext } from "../../api/aVSContext.js";
import { PlacementPolicy, PlacementPolicyUpdate } from "../../models/models.js";
import {
  listByCluster,
  get,
  createOrUpdate,
  update,
  $delete,
} from "../../api/placementPolicies/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  PlacementPoliciesListByClusterOptionalParams,
  PlacementPoliciesGetOptionalParams,
  PlacementPoliciesCreateOrUpdateOptionalParams,
  PlacementPoliciesUpdateOptionalParams,
  PlacementPoliciesDeleteOptionalParams,
} from "../../models/options.js";

export interface PlacementPoliciesOperations {
  listByCluster: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    options?: PlacementPoliciesListByClusterOptionalParams,
  ) => PagedAsyncIterableIterator<PlacementPolicy>;
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    placementPolicyName: string,
    options?: PlacementPoliciesGetOptionalParams,
  ) => Promise<PlacementPolicy>;
  createOrUpdate: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    placementPolicyName: string,
    placementPolicy: PlacementPolicy,
    options?: PlacementPoliciesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<PlacementPolicy>, PlacementPolicy>;
  update: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    placementPolicyName: string,
    placementPolicyUpdate: PlacementPolicyUpdate,
    options?: PlacementPoliciesUpdateOptionalParams,
  ) => Promise<PlacementPolicy>;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    placementPolicyName: string,
    options?: PlacementPoliciesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getPlacementPolicies(context: AVSContext) {
  return {
    listByCluster: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      options?: PlacementPoliciesListByClusterOptionalParams,
    ) =>
      listByCluster(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        options,
      ),
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      placementPolicyName: string,
      options?: PlacementPoliciesGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        placementPolicyName,
        options,
      ),
    createOrUpdate: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      placementPolicyName: string,
      placementPolicy: PlacementPolicy,
      options?: PlacementPoliciesCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        placementPolicyName,
        placementPolicy,
        options,
      ),
    update: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      placementPolicyName: string,
      placementPolicyUpdate: PlacementPolicyUpdate,
      options?: PlacementPoliciesUpdateOptionalParams,
    ) =>
      update(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        placementPolicyName,
        placementPolicyUpdate,
        options,
      ),
    delete: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      placementPolicyName: string,
      options?: PlacementPoliciesDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        placementPolicyName,
        options,
      ),
  };
}

export function getPlacementPoliciesOperations(
  context: AVSContext,
): PlacementPoliciesOperations {
  return {
    ...getPlacementPolicies(context),
  };
}
