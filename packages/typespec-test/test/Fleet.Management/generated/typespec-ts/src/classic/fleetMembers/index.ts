// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ContainerServiceContext } from "../../api/containerServiceContext.js";
import { FleetMember, FleetMemberUpdate } from "../../models/models.js";
import {
  get,
  create,
  updateAsync,
  $delete,
  listByFleet,
} from "../../api/fleetMembers/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  FleetMembersGetOptionalParams,
  FleetMembersCreateOptionalParams,
  FleetMembersUpdateAsyncOptionalParams,
  FleetMembersDeleteOptionalParams,
  FleetMembersListByFleetOptionalParams,
} from "../../models/options.js";

export interface FleetMembersOperations {
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
    fleetMemberName: string,
    options?: FleetMembersGetOptionalParams,
  ) => Promise<FleetMember>;
  create: (
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
    fleetMemberName: string,
    resource: FleetMember,
    options?: FleetMembersCreateOptionalParams,
  ) => PollerLike<OperationState<FleetMember>, FleetMember>;
  updateAsync: (
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
    fleetMemberName: string,
    properties: FleetMemberUpdate,
    options?: FleetMembersUpdateAsyncOptionalParams,
  ) => PollerLike<OperationState<FleetMember>, FleetMember>;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
    fleetMemberName: string,
    options?: FleetMembersDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  listByFleet: (
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
    options?: FleetMembersListByFleetOptionalParams,
  ) => PagedAsyncIterableIterator<FleetMember>;
}

export function getFleetMembers(context: ContainerServiceContext) {
  return {
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      fleetName: string,
      fleetMemberName: string,
      options?: FleetMembersGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        fleetMemberName,
        options,
      ),
    create: (
      subscriptionId: string,
      resourceGroupName: string,
      fleetName: string,
      fleetMemberName: string,
      resource: FleetMember,
      options?: FleetMembersCreateOptionalParams,
    ) =>
      create(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        fleetMemberName,
        resource,
        options,
      ),
    updateAsync: (
      subscriptionId: string,
      resourceGroupName: string,
      fleetName: string,
      fleetMemberName: string,
      properties: FleetMemberUpdate,
      options?: FleetMembersUpdateAsyncOptionalParams,
    ) =>
      updateAsync(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        fleetMemberName,
        properties,
        options,
      ),
    delete: (
      subscriptionId: string,
      resourceGroupName: string,
      fleetName: string,
      fleetMemberName: string,
      options?: FleetMembersDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        fleetMemberName,
        options,
      ),
    listByFleet: (
      subscriptionId: string,
      resourceGroupName: string,
      fleetName: string,
      options?: FleetMembersListByFleetOptionalParams,
    ) =>
      listByFleet(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        options,
      ),
  };
}

export function getFleetMembersOperations(
  context: ContainerServiceContext,
): FleetMembersOperations {
  return {
    ...getFleetMembers(context),
  };
}
