// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  FleetMember,
  FleetMemberUpdate,
  FleetMemberListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  ContainerServiceContext as Client,
  FleetMembersCreate200Response,
  FleetMembersCreate201Response,
  FleetMembersCreateDefaultResponse,
  FleetMembersCreateLogicalResponse,
  FleetMembersDelete200Response,
  FleetMembersDelete202Response,
  FleetMembersDelete204Response,
  FleetMembersDeleteDefaultResponse,
  FleetMembersDeleteLogicalResponse,
  FleetMembersGet200Response,
  FleetMembersGetDefaultResponse,
  FleetMembersListByFleet200Response,
  FleetMembersListByFleetDefaultResponse,
  FleetMembersUpdateAsync200Response,
  FleetMembersUpdateAsync202Response,
  FleetMembersUpdateAsyncDefaultResponse,
  FleetMembersUpdateAsyncLogicalResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  FleetMembersGetOptionalParams,
  FleetMembersCreateOptionalParams,
  FleetMembersUpdateAsyncOptionalParams,
  FleetMembersDeleteOptionalParams,
  FleetMembersListByFleetOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  fleetMemberName: string,
  options: FleetMembersGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  FleetMembersGet200Response | FleetMembersGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/members/{fleetMemberName}",
      subscriptionId,
      resourceGroupName,
      fleetName,
      fleetMemberName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: FleetMembersGet200Response | FleetMembersGetDefaultResponse,
): Promise<FleetMember> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          clusterResourceId: result.body.properties?.["clusterResourceId"],
          group: result.body.properties?.["group"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    eTag: result.body["eTag"],
  };
}

/** Get a FleetMember */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  fleetMemberName: string,
  options: FleetMembersGetOptionalParams = { requestOptions: {} },
): Promise<FleetMember> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    fleetName,
    fleetMemberName,
    options,
  );
  return _getDeserialize(result);
}

export function _createSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  fleetMemberName: string,
  resource: FleetMember,
  options: FleetMembersCreateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | FleetMembersCreate200Response
  | FleetMembersCreate201Response
  | FleetMembersCreateDefaultResponse
  | FleetMembersCreateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/members/{fleetMemberName}",
      subscriptionId,
      resourceGroupName,
      fleetName,
      fleetMemberName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "If-Match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "If-None-Match": options?.ifNoneMatch }
          : {}),
      },
      body: {
        properties: !resource.properties
          ? undefined
          : {
              clusterResourceId: resource.properties?.["clusterResourceId"],
              group: resource.properties?.["group"],
            },
      },
    });
}

export async function _createDeserialize(
  result:
    | FleetMembersCreate200Response
    | FleetMembersCreate201Response
    | FleetMembersCreateDefaultResponse
    | FleetMembersCreateLogicalResponse,
): Promise<FleetMember> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as FleetMembersCreateLogicalResponse;
  return {
    id: result.body["id"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          clusterResourceId: result.body.properties?.["clusterResourceId"],
          group: result.body.properties?.["group"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    eTag: result.body["eTag"],
  };
}

/** Create a FleetMember */
export function create(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  fleetMemberName: string,
  resource: FleetMember,
  options: FleetMembersCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<FleetMember>, FleetMember> {
  return getLongRunningPoller(context, _createDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createSend(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        fleetMemberName,
        resource,
        options,
      ),
  }) as PollerLike<OperationState<FleetMember>, FleetMember>;
}

export function _updateAsyncSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  fleetMemberName: string,
  properties: FleetMemberUpdate,
  options: FleetMembersUpdateAsyncOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | FleetMembersUpdateAsync200Response
  | FleetMembersUpdateAsync202Response
  | FleetMembersUpdateAsyncDefaultResponse
  | FleetMembersUpdateAsyncLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/members/{fleetMemberName}",
      subscriptionId,
      resourceGroupName,
      fleetName,
      fleetMemberName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "If-Match": options?.ifMatch }
          : {}),
      },
      body: {
        properties: !properties.properties
          ? undefined
          : { group: properties.properties?.["group"] },
      },
    }) as StreamableMethod<
    | FleetMembersUpdateAsync200Response
    | FleetMembersUpdateAsync202Response
    | FleetMembersUpdateAsyncDefaultResponse
    | FleetMembersUpdateAsyncLogicalResponse
  >;
}

export async function _updateAsyncDeserialize(
  result:
    | FleetMembersUpdateAsync200Response
    | FleetMembersUpdateAsync202Response
    | FleetMembersUpdateAsyncDefaultResponse
    | FleetMembersUpdateAsyncLogicalResponse,
): Promise<FleetMember> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as FleetMembersUpdateAsyncLogicalResponse;
  return {
    id: result.body["id"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          clusterResourceId: result.body.properties?.["clusterResourceId"],
          group: result.body.properties?.["group"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    eTag: result.body["eTag"],
  };
}

/** Update a FleetMember */
export function updateAsync(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  fleetMemberName: string,
  properties: FleetMemberUpdate,
  options: FleetMembersUpdateAsyncOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<FleetMember>, FleetMember> {
  return getLongRunningPoller(context, _updateAsyncDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateAsyncSend(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        fleetMemberName,
        properties,
        options,
      ),
  }) as PollerLike<OperationState<FleetMember>, FleetMember>;
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  fleetMemberName: string,
  options: FleetMembersDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | FleetMembersDelete200Response
  | FleetMembersDelete202Response
  | FleetMembersDelete204Response
  | FleetMembersDeleteDefaultResponse
  | FleetMembersDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/members/{fleetMemberName}",
      subscriptionId,
      resourceGroupName,
      fleetName,
      fleetMemberName,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "If-Match": options?.ifMatch }
          : {}),
      },
    }) as StreamableMethod<
    | FleetMembersDelete200Response
    | FleetMembersDelete202Response
    | FleetMembersDelete204Response
    | FleetMembersDeleteDefaultResponse
    | FleetMembersDeleteLogicalResponse
  >;
}

export async function _$deleteDeserialize(
  result:
    | FleetMembersDelete200Response
    | FleetMembersDelete202Response
    | FleetMembersDelete204Response
    | FleetMembersDeleteDefaultResponse
    | FleetMembersDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as FleetMembersDeleteLogicalResponse;
  return;
}

/** Delete a FleetMember */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  fleetMemberName: string,
  options: FleetMembersDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        fleetMemberName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}

export function _listByFleetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  options: FleetMembersListByFleetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  FleetMembersListByFleet200Response | FleetMembersListByFleetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/members",
      subscriptionId,
      resourceGroupName,
      fleetName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByFleetDeserialize(
  result:
    | FleetMembersListByFleet200Response
    | FleetMembersListByFleetDefaultResponse,
): Promise<FleetMemberListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      id: p["id"],
      type: p["type"],
      systemData: !p.systemData
        ? undefined
        : {
            createdBy: p.systemData?.["createdBy"],
            createdByType: p.systemData?.["createdByType"],
            createdAt:
              p.systemData?.["createdAt"] !== undefined
                ? new Date(p.systemData?.["createdAt"])
                : undefined,
            lastModifiedBy: p.systemData?.["lastModifiedBy"],
            lastModifiedByType: p.systemData?.["lastModifiedByType"],
            lastModifiedAt:
              p.systemData?.["lastModifiedAt"] !== undefined
                ? new Date(p.systemData?.["lastModifiedAt"])
                : undefined,
          },
      properties: !p.properties
        ? undefined
        : {
            clusterResourceId: p.properties?.["clusterResourceId"],
            group: p.properties?.["group"],
            provisioningState: p.properties?.["provisioningState"],
          },
      eTag: p["eTag"],
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List FleetMember resources by Fleet */
export function listByFleet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  options: FleetMembersListByFleetOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<FleetMember> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByFleetSend(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        options,
      ),
    _listByFleetDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
