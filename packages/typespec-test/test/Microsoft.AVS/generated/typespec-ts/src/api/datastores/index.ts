// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { DatastoreListResult, Datastore } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  AVSContext as Client,
  DatastoresCreateOrUpdate200Response,
  DatastoresCreateOrUpdate201Response,
  DatastoresCreateOrUpdateDefaultResponse,
  DatastoresCreateOrUpdateLogicalResponse,
  DatastoresDelete200Response,
  DatastoresDelete202Response,
  DatastoresDelete204Response,
  DatastoresDeleteDefaultResponse,
  DatastoresDeleteLogicalResponse,
  DatastoresGet200Response,
  DatastoresGetDefaultResponse,
  DatastoresListByCluster200Response,
  DatastoresListByClusterDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  DatastoresListByClusterOptionalParams,
  DatastoresGetOptionalParams,
  DatastoresCreateOrUpdateOptionalParams,
  DatastoresDeleteOptionalParams,
} from "../../models/options.js";

export function _listByClusterSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  options: DatastoresListByClusterOptionalParams = { requestOptions: {} },
): StreamableMethod<
  DatastoresListByCluster200Response | DatastoresListByClusterDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/datastores",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByClusterDeserialize(
  result:
    | DatastoresListByCluster200Response
    | DatastoresListByClusterDefaultResponse,
): Promise<DatastoreListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      id: p["id"],
      name: p["name"],
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
            provisioningState: p.properties?.["provisioningState"],
            netAppVolume: !p.properties?.netAppVolume
              ? undefined
              : { id: p.properties?.netAppVolume?.["id"] },
            diskPoolVolume: !p.properties?.diskPoolVolume
              ? undefined
              : {
                  targetId: p.properties?.diskPoolVolume?.["targetId"],
                  lunName: p.properties?.diskPoolVolume?.["lunName"],
                  mountOption: p.properties?.diskPoolVolume?.["mountOption"],
                  path: p.properties?.diskPoolVolume?.["path"],
                },
            elasticSanVolume: !p.properties?.elasticSanVolume
              ? undefined
              : { targetId: p.properties?.elasticSanVolume?.["targetId"] },
            status: p.properties?.["status"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List Datastore resources by Cluster */
export function listByCluster(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  options: DatastoresListByClusterOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Datastore> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByClusterSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        options,
      ),
    _listByClusterDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  datastoreName: string,
  options: DatastoresGetOptionalParams = { requestOptions: {} },
): StreamableMethod<DatastoresGet200Response | DatastoresGetDefaultResponse> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/datastores/{datastoreName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
      datastoreName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: DatastoresGet200Response | DatastoresGetDefaultResponse,
): Promise<Datastore> {
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
          provisioningState: result.body.properties?.["provisioningState"],
          netAppVolume: !result.body.properties?.netAppVolume
            ? undefined
            : { id: result.body.properties?.netAppVolume?.["id"] },
          diskPoolVolume: !result.body.properties?.diskPoolVolume
            ? undefined
            : {
                targetId: result.body.properties?.diskPoolVolume?.["targetId"],
                lunName: result.body.properties?.diskPoolVolume?.["lunName"],
                mountOption:
                  result.body.properties?.diskPoolVolume?.["mountOption"],
                path: result.body.properties?.diskPoolVolume?.["path"],
              },
          elasticSanVolume: !result.body.properties?.elasticSanVolume
            ? undefined
            : {
                targetId:
                  result.body.properties?.elasticSanVolume?.["targetId"],
              },
          status: result.body.properties?.["status"],
        },
  };
}

/** Get a Datastore */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  datastoreName: string,
  options: DatastoresGetOptionalParams = { requestOptions: {} },
): Promise<Datastore> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    clusterName,
    datastoreName,
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
  datastoreName: string,
  datastore: Datastore,
  options: DatastoresCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | DatastoresCreateOrUpdate200Response
  | DatastoresCreateOrUpdate201Response
  | DatastoresCreateOrUpdateDefaultResponse
  | DatastoresCreateOrUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/datastores/{datastoreName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
      datastoreName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !datastore.properties
          ? undefined
          : {
              netAppVolume: !datastore.properties?.netAppVolume
                ? undefined
                : { id: datastore.properties?.netAppVolume?.["id"] },
              diskPoolVolume: !datastore.properties?.diskPoolVolume
                ? undefined
                : {
                    targetId:
                      datastore.properties?.diskPoolVolume?.["targetId"],
                    lunName: datastore.properties?.diskPoolVolume?.["lunName"],
                    mountOption:
                      datastore.properties?.diskPoolVolume?.["mountOption"],
                  },
              elasticSanVolume: !datastore.properties?.elasticSanVolume
                ? undefined
                : {
                    targetId:
                      datastore.properties?.elasticSanVolume?.["targetId"],
                  },
            },
      },
    });
}

export async function _createOrUpdateDeserialize(
  result:
    | DatastoresCreateOrUpdate200Response
    | DatastoresCreateOrUpdate201Response
    | DatastoresCreateOrUpdateDefaultResponse
    | DatastoresCreateOrUpdateLogicalResponse,
): Promise<Datastore> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as DatastoresCreateOrUpdateLogicalResponse;
  return {
    id: result.body["id"],
    name: result.body["name"],
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
          provisioningState: result.body.properties?.["provisioningState"],
          netAppVolume: !result.body.properties?.netAppVolume
            ? undefined
            : { id: result.body.properties?.netAppVolume?.["id"] },
          diskPoolVolume: !result.body.properties?.diskPoolVolume
            ? undefined
            : {
                targetId: result.body.properties?.diskPoolVolume?.["targetId"],
                lunName: result.body.properties?.diskPoolVolume?.["lunName"],
                mountOption:
                  result.body.properties?.diskPoolVolume?.["mountOption"],
                path: result.body.properties?.diskPoolVolume?.["path"],
              },
          elasticSanVolume: !result.body.properties?.elasticSanVolume
            ? undefined
            : {
                targetId:
                  result.body.properties?.elasticSanVolume?.["targetId"],
              },
          status: result.body.properties?.["status"],
        },
  };
}

/** Create a Datastore */
export function createOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  datastoreName: string,
  datastore: Datastore,
  options: DatastoresCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Datastore>, Datastore> {
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
        datastoreName,
        datastore,
        options,
      ),
  }) as PollerLike<OperationState<Datastore>, Datastore>;
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  datastoreName: string,
  options: DatastoresDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | DatastoresDelete200Response
  | DatastoresDelete202Response
  | DatastoresDelete204Response
  | DatastoresDeleteDefaultResponse
  | DatastoresDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/datastores/{datastoreName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
      datastoreName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | DatastoresDelete200Response
    | DatastoresDelete202Response
    | DatastoresDelete204Response
    | DatastoresDeleteDefaultResponse
    | DatastoresDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as DatastoresDeleteLogicalResponse;
  return;
}

/** Delete a Datastore */
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
  datastoreName: string,
  options: DatastoresDeleteOptionalParams = { requestOptions: {} },
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
        datastoreName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}
