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

/** Interface representing a PlacementPolicies operations. */
export interface PlacementPoliciesOperations {
  /** List PlacementPolicy resources by Cluster */
  listByCluster: (
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    options?: PlacementPoliciesListByClusterOptionalParams,
  ) => PagedAsyncIterableIterator<PlacementPolicy>;
  /** Get a PlacementPolicy */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    placementPolicyName: string,
    options?: PlacementPoliciesGetOptionalParams,
  ) => Promise<PlacementPolicy>;
  /** Create a PlacementPolicy */
  createOrUpdate: (
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    placementPolicyName: string,
    placementPolicy: PlacementPolicy,
    options?: PlacementPoliciesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<PlacementPolicy>, PlacementPolicy>;
  /** Update a PlacementPolicy */
  update: (
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    placementPolicyName: string,
    placementPolicyUpdate: PlacementPolicyUpdate,
    options?: PlacementPoliciesUpdateOptionalParams,
  ) => Promise<PlacementPolicy>;
  /** Delete a PlacementPolicy */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    placementPolicyName: string,
    options?: PlacementPoliciesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getPlacementPolicies(
  context: AVSContext,
  subscriptionId: string,
) {
  return {
    listByCluster: (
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
  subscriptionId: string,
): PlacementPoliciesOperations {
  return {
    ...getPlacementPolicies(context, subscriptionId),
  };
}
