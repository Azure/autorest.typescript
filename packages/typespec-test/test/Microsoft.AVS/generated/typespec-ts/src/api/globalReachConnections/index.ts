// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  globalReachConnectionPropertiesSerializer,
  CreatedByType,
  GlobalReachConnection,
  GlobalReachConnectionStatus,
  _GlobalReachConnectionList,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  AVSContext as Client,
  GlobalReachConnectionsCreateOrUpdate200Response,
  GlobalReachConnectionsCreateOrUpdate201Response,
  GlobalReachConnectionsCreateOrUpdateDefaultResponse,
  GlobalReachConnectionsCreateOrUpdateLogicalResponse,
  GlobalReachConnectionsDelete200Response,
  GlobalReachConnectionsDelete202Response,
  GlobalReachConnectionsDelete204Response,
  GlobalReachConnectionsDeleteDefaultResponse,
  GlobalReachConnectionsDeleteLogicalResponse,
  GlobalReachConnectionsGet200Response,
  GlobalReachConnectionsGetDefaultResponse,
  GlobalReachConnectionsListByPrivateCloud200Response,
  GlobalReachConnectionsListByPrivateCloudDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  GlobalReachConnectionsListByPrivateCloudOptionalParams,
  GlobalReachConnectionsGetOptionalParams,
  GlobalReachConnectionsCreateOrUpdateOptionalParams,
  GlobalReachConnectionsDeleteOptionalParams,
} from "../../models/options.js";

export function _listByPrivateCloudSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: GlobalReachConnectionsListByPrivateCloudOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | GlobalReachConnectionsListByPrivateCloud200Response
  | GlobalReachConnectionsListByPrivateCloudDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/globalReachConnections",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByPrivateCloudDeserialize(
  result:
    | GlobalReachConnectionsListByPrivateCloud200Response
    | GlobalReachConnectionsListByPrivateCloudDefaultResponse,
): Promise<_GlobalReachConnectionList> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => {
      return {
        id: p["id"],
        name: p["name"],
        type: p["type"],
        systemData: !p.systemData
          ? undefined
          : {
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"] as CreatedByType,
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              lastModifiedBy: p.systemData?.["lastModifiedBy"],
              lastModifiedByType: p.systemData?.[
                "lastModifiedByType"
              ] as CreatedByType,
              lastModifiedAt:
                p.systemData?.["lastModifiedAt"] !== undefined
                  ? new Date(p.systemData?.["lastModifiedAt"])
                  : undefined,
            },
        properties: !p.properties
          ? undefined
          : {
              provisioningState: p.properties?.["provisioningState"] as any,
              addressPrefix: p.properties?.["addressPrefix"],
              authorizationKey: p.properties?.["authorizationKey"],
              circuitConnectionStatus: p.properties?.[
                "circuitConnectionStatus"
              ] as GlobalReachConnectionStatus,
              peerExpressRouteCircuit:
                p.properties?.["peerExpressRouteCircuit"],
              expressRouteId: p.properties?.["expressRouteId"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List GlobalReachConnection resources by PrivateCloud */
export function listByPrivateCloud(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: GlobalReachConnectionsListByPrivateCloudOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<GlobalReachConnection> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByPrivateCloudSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _listByPrivateCloudDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  globalReachConnectionName: string,
  options: GlobalReachConnectionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | GlobalReachConnectionsGet200Response
  | GlobalReachConnectionsGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/globalReachConnections/{globalReachConnectionName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      globalReachConnectionName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result:
    | GlobalReachConnectionsGet200Response
    | GlobalReachConnectionsGetDefaultResponse,
): Promise<GlobalReachConnection> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.[
            "createdByType"
          ] as CreatedByType,
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.[
            "lastModifiedByType"
          ] as CreatedByType,
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          provisioningState: result.body.properties?.[
            "provisioningState"
          ] as any,
          addressPrefix: result.body.properties?.["addressPrefix"],
          authorizationKey: result.body.properties?.["authorizationKey"],
          circuitConnectionStatus: result.body.properties?.[
            "circuitConnectionStatus"
          ] as GlobalReachConnectionStatus,
          peerExpressRouteCircuit:
            result.body.properties?.["peerExpressRouteCircuit"],
          expressRouteId: result.body.properties?.["expressRouteId"],
        },
  };
}

/** Get a GlobalReachConnection */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  globalReachConnectionName: string,
  options: GlobalReachConnectionsGetOptionalParams = { requestOptions: {} },
): Promise<GlobalReachConnection> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    globalReachConnectionName,
    options,
  );
  return _getDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  globalReachConnectionName: string,
  globalReachConnection: GlobalReachConnection,
  options: GlobalReachConnectionsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | GlobalReachConnectionsCreateOrUpdate200Response
  | GlobalReachConnectionsCreateOrUpdate201Response
  | GlobalReachConnectionsCreateOrUpdateDefaultResponse
  | GlobalReachConnectionsCreateOrUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/globalReachConnections/{globalReachConnectionName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      globalReachConnectionName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !globalReachConnection.properties
          ? globalReachConnection.properties
          : globalReachConnectionPropertiesSerializer(
              globalReachConnection.properties,
            ),
      },
    });
}

export async function _createOrUpdateDeserialize(
  result:
    | GlobalReachConnectionsCreateOrUpdate200Response
    | GlobalReachConnectionsCreateOrUpdate201Response
    | GlobalReachConnectionsCreateOrUpdateDefaultResponse
    | GlobalReachConnectionsCreateOrUpdateLogicalResponse,
): Promise<GlobalReachConnection> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as GlobalReachConnectionsCreateOrUpdateLogicalResponse;
  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.[
            "createdByType"
          ] as CreatedByType,
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.[
            "lastModifiedByType"
          ] as CreatedByType,
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          provisioningState: result.body.properties?.[
            "provisioningState"
          ] as any,
          addressPrefix: result.body.properties?.["addressPrefix"],
          authorizationKey: result.body.properties?.["authorizationKey"],
          circuitConnectionStatus: result.body.properties?.[
            "circuitConnectionStatus"
          ] as GlobalReachConnectionStatus,
          peerExpressRouteCircuit:
            result.body.properties?.["peerExpressRouteCircuit"],
          expressRouteId: result.body.properties?.["expressRouteId"],
        },
  };
}

/** Create a GlobalReachConnection */
export function createOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  globalReachConnectionName: string,
  globalReachConnection: GlobalReachConnection,
  options: GlobalReachConnectionsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<GlobalReachConnection>, GlobalReachConnection> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        globalReachConnectionName,
        globalReachConnection,
        options,
      ),
  }) as PollerLike<
    OperationState<GlobalReachConnection>,
    GlobalReachConnection
  >;
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  globalReachConnectionName: string,
  options: GlobalReachConnectionsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | GlobalReachConnectionsDelete200Response
  | GlobalReachConnectionsDelete202Response
  | GlobalReachConnectionsDelete204Response
  | GlobalReachConnectionsDeleteDefaultResponse
  | GlobalReachConnectionsDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/globalReachConnections/{globalReachConnectionName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      globalReachConnectionName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | GlobalReachConnectionsDelete200Response
    | GlobalReachConnectionsDelete202Response
    | GlobalReachConnectionsDelete204Response
    | GlobalReachConnectionsDeleteDefaultResponse
    | GlobalReachConnectionsDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as GlobalReachConnectionsDeleteLogicalResponse;
  return;
}

/** Delete a GlobalReachConnection */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  globalReachConnectionName: string,
  options: GlobalReachConnectionsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        globalReachConnectionName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}
