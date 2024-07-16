// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  clusterPropertiesSerializer,
  skuSerializer,
  clusterUpdatePropertiesSerializer,
  CreatedByType,
  Cluster,
  ClusterUpdate,
  ClusterZoneList,
  _ClusterList,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  AVSContext as Client,
  ClustersCreateOrUpdate200Response,
  ClustersCreateOrUpdate201Response,
  ClustersCreateOrUpdateDefaultResponse,
  ClustersCreateOrUpdateLogicalResponse,
  ClustersDelete200Response,
  ClustersDelete202Response,
  ClustersDelete204Response,
  ClustersDeleteDefaultResponse,
  ClustersDeleteLogicalResponse,
  ClustersGet200Response,
  ClustersGetDefaultResponse,
  ClustersListByPrivateCloud200Response,
  ClustersListByPrivateCloudDefaultResponse,
  ClustersListZones200Response,
  ClustersListZonesDefaultResponse,
  ClustersUpdate200Response,
  ClustersUpdate201Response,
  ClustersUpdateDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  ClustersListByPrivateCloudOptionalParams,
  ClustersGetOptionalParams,
  ClustersCreateOrUpdateOptionalParams,
  ClustersUpdateOptionalParams,
  ClustersDeleteOptionalParams,
  ClustersListZonesOptionalParams,
} from "../../models/options.js";

export function _listByPrivateCloudSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: ClustersListByPrivateCloudOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | ClustersListByPrivateCloud200Response
  | ClustersListByPrivateCloudDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByPrivateCloudDeserialize(
  result:
    | ClustersListByPrivateCloud200Response
    | ClustersListByPrivateCloudDefaultResponse,
): Promise<_ClusterList> {
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
              clusterSize: p.properties?.["clusterSize"],
              provisioningState: p.properties?.["provisioningState"] as any,
              clusterId: p.properties?.["clusterId"],
              hosts: p.properties?.["hosts"],
              vsanDatastoreName: p.properties?.["vsanDatastoreName"],
            },
        sku: {
          name: p.sku["name"],
          tier: p.sku["tier"],
          size: p.sku["size"],
          family: p.sku["family"],
          capacity: p.sku["capacity"],
        },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List Cluster resources by PrivateCloud */
export function listByPrivateCloud(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: ClustersListByPrivateCloudOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Cluster> {
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
  clusterName: string,
  options: ClustersGetOptionalParams = { requestOptions: {} },
): StreamableMethod<ClustersGet200Response | ClustersGetDefaultResponse> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: ClustersGet200Response | ClustersGetDefaultResponse,
): Promise<Cluster> {
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
          clusterSize: result.body.properties?.["clusterSize"],
          provisioningState: result.body.properties?.[
            "provisioningState"
          ] as any,
          clusterId: result.body.properties?.["clusterId"],
          hosts: result.body.properties?.["hosts"],
          vsanDatastoreName: result.body.properties?.["vsanDatastoreName"],
        },
    sku: {
      name: result.body.sku["name"],
      tier: result.body.sku["tier"],
      size: result.body.sku["size"],
      family: result.body.sku["family"],
      capacity: result.body.sku["capacity"],
    },
  };
}

/** Get a Cluster */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  options: ClustersGetOptionalParams = { requestOptions: {} },
): Promise<Cluster> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    clusterName,
    options,
  );
  return _getDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  cluster: Cluster,
  options: ClustersCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | ClustersCreateOrUpdate200Response
  | ClustersCreateOrUpdate201Response
  | ClustersCreateOrUpdateDefaultResponse
  | ClustersCreateOrUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !cluster.properties
          ? cluster.properties
          : clusterPropertiesSerializer(cluster.properties),
        sku: skuSerializer(cluster.sku),
      },
    });
}

export async function _createOrUpdateDeserialize(
  result:
    | ClustersCreateOrUpdate200Response
    | ClustersCreateOrUpdate201Response
    | ClustersCreateOrUpdateDefaultResponse
    | ClustersCreateOrUpdateLogicalResponse,
): Promise<Cluster> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as ClustersCreateOrUpdateLogicalResponse;
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
          clusterSize: result.body.properties?.["clusterSize"],
          provisioningState: result.body.properties?.[
            "provisioningState"
          ] as any,
          clusterId: result.body.properties?.["clusterId"],
          hosts: result.body.properties?.["hosts"],
          vsanDatastoreName: result.body.properties?.["vsanDatastoreName"],
        },
    sku: {
      name: result.body.sku["name"],
      tier: result.body.sku["tier"],
      size: result.body.sku["size"],
      family: result.body.sku["family"],
      capacity: result.body.sku["capacity"],
    },
  };
}

/** Create a Cluster */
export function createOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  cluster: Cluster,
  options: ClustersCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Cluster>, Cluster> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        cluster,
        options,
      ),
  }) as PollerLike<OperationState<Cluster>, Cluster>;
}

export function _updateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  clusterUpdate: ClusterUpdate,
  options: ClustersUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | ClustersUpdate200Response
  | ClustersUpdate201Response
  | ClustersUpdateDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        sku: !clusterUpdate.sku
          ? clusterUpdate.sku
          : skuSerializer(clusterUpdate.sku),
        properties: !clusterUpdate.properties
          ? clusterUpdate.properties
          : clusterUpdatePropertiesSerializer(clusterUpdate.properties),
      },
    });
}

export async function _updateDeserialize(
  result:
    | ClustersUpdate200Response
    | ClustersUpdate201Response
    | ClustersUpdateDefaultResponse,
): Promise<Cluster> {
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
          clusterSize: result.body.properties?.["clusterSize"],
          provisioningState: result.body.properties?.[
            "provisioningState"
          ] as any,
          clusterId: result.body.properties?.["clusterId"],
          hosts: result.body.properties?.["hosts"],
          vsanDatastoreName: result.body.properties?.["vsanDatastoreName"],
        },
    sku: {
      name: result.body.sku["name"],
      tier: result.body.sku["tier"],
      size: result.body.sku["size"],
      family: result.body.sku["family"],
      capacity: result.body.sku["capacity"],
    },
  };
}

/** Update a Cluster */
export async function update(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  clusterUpdate: ClusterUpdate,
  options: ClustersUpdateOptionalParams = { requestOptions: {} },
): Promise<Cluster> {
  const result = await _updateSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    clusterName,
    clusterUpdate,
    options,
  );
  return _updateDeserialize(result);
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  options: ClustersDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | ClustersDelete200Response
  | ClustersDelete202Response
  | ClustersDelete204Response
  | ClustersDeleteDefaultResponse
  | ClustersDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | ClustersDelete200Response
    | ClustersDelete202Response
    | ClustersDelete204Response
    | ClustersDeleteDefaultResponse
    | ClustersDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as ClustersDeleteLogicalResponse;
  return;
}

/** Delete a Cluster */
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
  clusterName: string,
  options: ClustersDeleteOptionalParams = { requestOptions: {} },
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
        clusterName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}

export function _listZonesSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  options: ClustersListZonesOptionalParams = { requestOptions: {} },
): StreamableMethod<
  ClustersListZones200Response | ClustersListZonesDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/listZones",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _listZonesDeserialize(
  result: ClustersListZones200Response | ClustersListZonesDefaultResponse,
): Promise<ClusterZoneList> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    zones:
      result.body["zones"] === undefined
        ? result.body["zones"]
        : result.body["zones"].map((p) => {
            return { hosts: p["hosts"], zone: p["zone"] };
          }),
  };
}

/** List hosts by zone in a cluster */
export async function listZones(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  options: ClustersListZonesOptionalParams = { requestOptions: {} },
): Promise<ClusterZoneList> {
  const result = await _listZonesSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    clusterName,
    options,
  );
  return _listZonesDeserialize(result);
}
