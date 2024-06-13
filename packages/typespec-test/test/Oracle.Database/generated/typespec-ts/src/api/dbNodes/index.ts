// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { DbNode, DbNodeListResult, DbNodeAction } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  DatabaseContext as Client,
  DbNodesAction200Response,
  DbNodesAction202Response,
  DbNodesActionDefaultResponse,
  DbNodesActionLogicalResponse,
  DbNodesGet200Response,
  DbNodesGetDefaultResponse,
  DbNodesListByCloudVmCluster200Response,
  DbNodesListByCloudVmClusterDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  DbNodesGetOptionalParams,
  DbNodesListByCloudVmClusterOptionalParams,
  DbNodesActionOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  dbnodeocid: string,
  options: DbNodesGetOptionalParams = { requestOptions: {} },
): StreamableMethod<DbNodesGet200Response | DbNodesGetDefaultResponse> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/dbNodes/{dbnodeocid}",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
      dbnodeocid,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: DbNodesGet200Response | DbNodesGetDefaultResponse,
): Promise<DbNode> {
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
          ocid: result.body.properties?.["ocid"],
          additionalDetails: result.body.properties?.["additionalDetails"],
          backupIpId: result.body.properties?.["backupIpId"],
          backupVnic2Id: result.body.properties?.["backupVnic2Id"],
          backupVnicId: result.body.properties?.["backupVnicId"],
          cpuCoreCount: result.body.properties?.["cpuCoreCount"],
          dbNodeStorageSizeInGbs:
            result.body.properties?.["dbNodeStorageSizeInGbs"],
          dbServerId: result.body.properties?.["dbServerId"],
          dbSystemId: result.body.properties?.["dbSystemId"],
          faultDomain: result.body.properties?.["faultDomain"],
          hostIpId: result.body.properties?.["hostIpId"],
          hostname: result.body.properties?.["hostname"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          maintenanceType: result.body.properties?.["maintenanceType"],
          memorySizeInGbs: result.body.properties?.["memorySizeInGbs"],
          softwareStorageSizeInGb:
            result.body.properties?.["softwareStorageSizeInGb"],
          timeCreated:
            result.body.properties?.["timeCreated"] !== undefined
              ? new Date(result.body.properties?.["timeCreated"])
              : undefined,
          timeMaintenanceWindowEnd:
            result.body.properties?.["timeMaintenanceWindowEnd"] !== undefined
              ? new Date(result.body.properties?.["timeMaintenanceWindowEnd"])
              : undefined,
          timeMaintenanceWindowStart:
            result.body.properties?.["timeMaintenanceWindowStart"] !== undefined
              ? new Date(result.body.properties?.["timeMaintenanceWindowStart"])
              : undefined,
          vnic2Id: result.body.properties?.["vnic2Id"],
          vnicId: result.body.properties?.["vnicId"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a DbNode */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  dbnodeocid: string,
  options: DbNodesGetOptionalParams = { requestOptions: {} },
): Promise<DbNode> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    cloudvmclustername,
    dbnodeocid,
    options,
  );
  return _getDeserialize(result);
}

export function _listByCloudVmClusterSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  options: DbNodesListByCloudVmClusterOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | DbNodesListByCloudVmCluster200Response
  | DbNodesListByCloudVmClusterDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/dbNodes",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByCloudVmClusterDeserialize(
  result:
    | DbNodesListByCloudVmCluster200Response
    | DbNodesListByCloudVmClusterDefaultResponse,
): Promise<DbNodeListResult> {
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
            ocid: p.properties?.["ocid"],
            additionalDetails: p.properties?.["additionalDetails"],
            backupIpId: p.properties?.["backupIpId"],
            backupVnic2Id: p.properties?.["backupVnic2Id"],
            backupVnicId: p.properties?.["backupVnicId"],
            cpuCoreCount: p.properties?.["cpuCoreCount"],
            dbNodeStorageSizeInGbs: p.properties?.["dbNodeStorageSizeInGbs"],
            dbServerId: p.properties?.["dbServerId"],
            dbSystemId: p.properties?.["dbSystemId"],
            faultDomain: p.properties?.["faultDomain"],
            hostIpId: p.properties?.["hostIpId"],
            hostname: p.properties?.["hostname"],
            lifecycleState: p.properties?.["lifecycleState"],
            lifecycleDetails: p.properties?.["lifecycleDetails"],
            maintenanceType: p.properties?.["maintenanceType"],
            memorySizeInGbs: p.properties?.["memorySizeInGbs"],
            softwareStorageSizeInGb: p.properties?.["softwareStorageSizeInGb"],
            timeCreated:
              p.properties?.["timeCreated"] !== undefined
                ? new Date(p.properties?.["timeCreated"])
                : undefined,
            timeMaintenanceWindowEnd:
              p.properties?.["timeMaintenanceWindowEnd"] !== undefined
                ? new Date(p.properties?.["timeMaintenanceWindowEnd"])
                : undefined,
            timeMaintenanceWindowStart:
              p.properties?.["timeMaintenanceWindowStart"] !== undefined
                ? new Date(p.properties?.["timeMaintenanceWindowStart"])
                : undefined,
            vnic2Id: p.properties?.["vnic2Id"],
            vnicId: p.properties?.["vnicId"],
            provisioningState: p.properties?.["provisioningState"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List DbNode resources by CloudVmCluster */
export function listByCloudVmCluster(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  options: DbNodesListByCloudVmClusterOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<DbNode> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByCloudVmClusterSend(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        options,
      ),
    _listByCloudVmClusterDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _actionSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  dbnodeocid: string,
  body: DbNodeAction,
  options: DbNodesActionOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | DbNodesAction200Response
  | DbNodesAction202Response
  | DbNodesActionDefaultResponse
  | DbNodesActionLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/dbNodes/{dbnodeocid}/action",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
      dbnodeocid,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { action: body["action"] },
    });
}

export async function _actionDeserialize(
  result:
    | DbNodesAction200Response
    | DbNodesAction202Response
    | DbNodesActionDefaultResponse
    | DbNodesActionLogicalResponse,
): Promise<DbNode> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as DbNodesActionLogicalResponse;
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
          ocid: result.body.properties?.["ocid"],
          additionalDetails: result.body.properties?.["additionalDetails"],
          backupIpId: result.body.properties?.["backupIpId"],
          backupVnic2Id: result.body.properties?.["backupVnic2Id"],
          backupVnicId: result.body.properties?.["backupVnicId"],
          cpuCoreCount: result.body.properties?.["cpuCoreCount"],
          dbNodeStorageSizeInGbs:
            result.body.properties?.["dbNodeStorageSizeInGbs"],
          dbServerId: result.body.properties?.["dbServerId"],
          dbSystemId: result.body.properties?.["dbSystemId"],
          faultDomain: result.body.properties?.["faultDomain"],
          hostIpId: result.body.properties?.["hostIpId"],
          hostname: result.body.properties?.["hostname"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          maintenanceType: result.body.properties?.["maintenanceType"],
          memorySizeInGbs: result.body.properties?.["memorySizeInGbs"],
          softwareStorageSizeInGb:
            result.body.properties?.["softwareStorageSizeInGb"],
          timeCreated:
            result.body.properties?.["timeCreated"] !== undefined
              ? new Date(result.body.properties?.["timeCreated"])
              : undefined,
          timeMaintenanceWindowEnd:
            result.body.properties?.["timeMaintenanceWindowEnd"] !== undefined
              ? new Date(result.body.properties?.["timeMaintenanceWindowEnd"])
              : undefined,
          timeMaintenanceWindowStart:
            result.body.properties?.["timeMaintenanceWindowStart"] !== undefined
              ? new Date(result.body.properties?.["timeMaintenanceWindowStart"])
              : undefined,
          vnic2Id: result.body.properties?.["vnic2Id"],
          vnicId: result.body.properties?.["vnicId"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** VM actions on DbNode of VM Cluster by the provided filter */
export function action(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  dbnodeocid: string,
  body: DbNodeAction,
  options: DbNodesActionOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<DbNode>, DbNode> {
  return getLongRunningPoller(context, _actionDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _actionSend(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        dbnodeocid,
        body,
        options,
      ),
  }) as PollerLike<OperationState<DbNode>, DbNode>;
}
