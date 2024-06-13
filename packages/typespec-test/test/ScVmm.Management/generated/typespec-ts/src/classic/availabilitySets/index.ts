// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ScVmmContext } from "../../api/scVmmContext.js";
import {
  AvailabilitySet,
  AvailabilitySetTagsUpdate,
} from "../../models/models.js";
import {
  get,
  createOrUpdate,
  update,
  $delete,
  listByResourceGroup,
  listBySubscription,
} from "../../api/availabilitySets/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  AvailabilitySetsGetOptionalParams,
  AvailabilitySetsCreateOrUpdateOptionalParams,
  AvailabilitySetsUpdateOptionalParams,
  AvailabilitySetsDeleteOptionalParams,
  AvailabilitySetsListByResourceGroupOptionalParams,
  AvailabilitySetsListBySubscriptionOptionalParams,
} from "../../models/options.js";

export interface AvailabilitySetsOperations {
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    availabilitySetResourceName: string,
    options?: AvailabilitySetsGetOptionalParams,
  ) => Promise<AvailabilitySet>;
  createOrUpdate: (
    subscriptionId: string,
    resourceGroupName: string,
    availabilitySetResourceName: string,
    resource: AvailabilitySet,
    options?: AvailabilitySetsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<AvailabilitySet>, AvailabilitySet>;
  update: (
    subscriptionId: string,
    resourceGroupName: string,
    availabilitySetResourceName: string,
    properties: AvailabilitySetTagsUpdate,
    options?: AvailabilitySetsUpdateOptionalParams,
  ) => PollerLike<OperationState<AvailabilitySet>, AvailabilitySet>;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    availabilitySetResourceName: string,
    options?: AvailabilitySetsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  listByResourceGroup: (
    subscriptionId: string,
    resourceGroupName: string,
    options?: AvailabilitySetsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<AvailabilitySet>;
  listBySubscription: (
    subscriptionId: string,
    options?: AvailabilitySetsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<AvailabilitySet>;
}

export function getAvailabilitySets(context: ScVmmContext) {
  return {
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      availabilitySetResourceName: string,
      options?: AvailabilitySetsGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        availabilitySetResourceName,
        options,
      ),
    createOrUpdate: (
      subscriptionId: string,
      resourceGroupName: string,
      availabilitySetResourceName: string,
      resource: AvailabilitySet,
      options?: AvailabilitySetsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        availabilitySetResourceName,
        resource,
        options,
      ),
    update: (
      subscriptionId: string,
      resourceGroupName: string,
      availabilitySetResourceName: string,
      properties: AvailabilitySetTagsUpdate,
      options?: AvailabilitySetsUpdateOptionalParams,
    ) =>
      update(
        context,
        subscriptionId,
        resourceGroupName,
        availabilitySetResourceName,
        properties,
        options,
      ),
    delete: (
      subscriptionId: string,
      resourceGroupName: string,
      availabilitySetResourceName: string,
      options?: AvailabilitySetsDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        availabilitySetResourceName,
        options,
      ),
    listByResourceGroup: (
      subscriptionId: string,
      resourceGroupName: string,
      options?: AvailabilitySetsListByResourceGroupOptionalParams,
    ) =>
      listByResourceGroup(context, subscriptionId, resourceGroupName, options),
    listBySubscription: (
      subscriptionId: string,
      options?: AvailabilitySetsListBySubscriptionOptionalParams,
    ) => listBySubscription(context, subscriptionId, options),
  };
}

export function getAvailabilitySetsOperations(
  context: ScVmmContext,
): AvailabilitySetsOperations {
  return {
    ...getAvailabilitySets(context),
  };
}
