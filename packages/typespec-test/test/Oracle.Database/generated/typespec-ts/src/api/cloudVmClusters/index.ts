// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  CloudVmClusterListResult,
  CloudVmCluster,
  CloudVmClusterUpdate,
  AddRemoveDbNode,
  PrivateIpAddressesFilter,
  PrivateIpAddressProperties,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  DatabaseContext as Client,
  CloudVmClustersAddVms200Response,
  CloudVmClustersAddVms202Response,
  CloudVmClustersAddVmsDefaultResponse,
  CloudVmClustersAddVmsLogicalResponse,
  CloudVmClustersCreateOrUpdate200Response,
  CloudVmClustersCreateOrUpdate201Response,
  CloudVmClustersCreateOrUpdateDefaultResponse,
  CloudVmClustersCreateOrUpdateLogicalResponse,
  CloudVmClustersDelete202Response,
  CloudVmClustersDelete204Response,
  CloudVmClustersDeleteDefaultResponse,
  CloudVmClustersDeleteLogicalResponse,
  CloudVmClustersGet200Response,
  CloudVmClustersGetDefaultResponse,
  CloudVmClustersListByResourceGroup200Response,
  CloudVmClustersListByResourceGroupDefaultResponse,
  CloudVmClustersListBySubscription200Response,
  CloudVmClustersListBySubscriptionDefaultResponse,
  CloudVmClustersListPrivateIpAddresses200Response,
  CloudVmClustersListPrivateIpAddressesDefaultResponse,
  CloudVmClustersRemoveVms200Response,
  CloudVmClustersRemoveVms202Response,
  CloudVmClustersRemoveVmsDefaultResponse,
  CloudVmClustersRemoveVmsLogicalResponse,
  CloudVmClustersUpdate200Response,
  CloudVmClustersUpdate202Response,
  CloudVmClustersUpdateDefaultResponse,
  CloudVmClustersUpdateLogicalResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  CloudVmClustersListBySubscriptionOptionalParams,
  CloudVmClustersCreateOrUpdateOptionalParams,
  CloudVmClustersGetOptionalParams,
  CloudVmClustersUpdateOptionalParams,
  CloudVmClustersDeleteOptionalParams,
  CloudVmClustersListByResourceGroupOptionalParams,
  CloudVmClustersAddVmsOptionalParams,
  CloudVmClustersRemoveVmsOptionalParams,
  CloudVmClustersListPrivateIpAddressesOptionalParams,
} from "../../models/options.js";

export function _listBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: CloudVmClustersListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | CloudVmClustersListBySubscription200Response
  | CloudVmClustersListBySubscriptionDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/cloudVmClusters",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listBySubscriptionDeserialize(
  result:
    | CloudVmClustersListBySubscription200Response
    | CloudVmClustersListBySubscriptionDefaultResponse,
): Promise<CloudVmClusterListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      location: p["location"],
      tags: p["tags"],
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
            listenerPort: p.properties?.["listenerPort"],
            nodeCount: p.properties?.["nodeCount"],
            storageSizeInGbs: p.properties?.["storageSizeInGbs"],
            dataStorageSizeInTbs: p.properties?.["dataStorageSizeInTbs"],
            dbNodeStorageSizeInGbs: p.properties?.["dbNodeStorageSizeInGbs"],
            memorySizeInGbs: p.properties?.["memorySizeInGbs"],
            timeCreated:
              p.properties?.["timeCreated"] !== undefined
                ? new Date(p.properties?.["timeCreated"])
                : undefined,
            lifecycleDetails: p.properties?.["lifecycleDetails"],
            timeZone: p.properties?.["timeZone"],
            zoneId: p.properties?.["zoneId"],
            hostname: p.properties?.["hostname"],
            domain: p.properties?.["domain"],
            cpuCoreCount: p.properties?.["cpuCoreCount"],
            ocpuCount: p.properties?.["ocpuCount"],
            clusterName: p.properties?.["clusterName"],
            dataStoragePercentage: p.properties?.["dataStoragePercentage"],
            isLocalBackupEnabled: p.properties?.["isLocalBackupEnabled"],
            cloudExadataInfrastructureId:
              p.properties?.["cloudExadataInfrastructureId"],
            isSparseDiskgroupEnabled:
              p.properties?.["isSparseDiskgroupEnabled"],
            systemVersion: p.properties?.["systemVersion"],
            sshPublicKeys: p.properties?.["sshPublicKeys"],
            licenseModel: p.properties?.["licenseModel"],
            diskRedundancy: p.properties?.["diskRedundancy"],
            scanIpIds: p.properties?.["scanIpIds"],
            vipIds: p.properties?.["vipIds"],
            scanDnsName: p.properties?.["scanDnsName"],
            scanListenerPortTcp: p.properties?.["scanListenerPortTcp"],
            scanListenerPortTcpSsl: p.properties?.["scanListenerPortTcpSsl"],
            scanDnsRecordId: p.properties?.["scanDnsRecordId"],
            shape: p.properties?.["shape"],
            provisioningState: p.properties?.["provisioningState"],
            lifecycleState: p.properties?.["lifecycleState"],
            vnetId: p.properties?.["vnetId"],
            giVersion: p.properties?.["giVersion"],
            ociUrl: p.properties?.["ociUrl"],
            nsgUrl: p.properties?.["nsgUrl"],
            subnetId: p.properties?.["subnetId"],
            backupSubnetCidr: p.properties?.["backupSubnetCidr"],
            nsgCidrs:
              p.properties?.["nsgCidrs"] === undefined
                ? p.properties?.["nsgCidrs"]
                : p.properties?.["nsgCidrs"].map((p) => ({
                    source: p["source"],
                    destinationPortRange: !p.destinationPortRange
                      ? undefined
                      : {
                          min: p.destinationPortRange?.["min"],
                          max: p.destinationPortRange?.["max"],
                        },
                  })),
            dataCollectionOptions: !p.properties?.dataCollectionOptions
              ? undefined
              : {
                  isDiagnosticsEventsEnabled:
                    p.properties?.dataCollectionOptions?.[
                      "isDiagnosticsEventsEnabled"
                    ],
                  isHealthMonitoringEnabled:
                    p.properties?.dataCollectionOptions?.[
                      "isHealthMonitoringEnabled"
                    ],
                  isIncidentLogsEnabled:
                    p.properties?.dataCollectionOptions?.[
                      "isIncidentLogsEnabled"
                    ],
                },
            displayName: p.properties?.["displayName"],
            computeNodes: p.properties?.["computeNodes"],
            iormConfigCache: !p.properties?.iormConfigCache
              ? undefined
              : {
                  dbPlans:
                    p.properties?.iormConfigCache?.["dbPlans"] === undefined
                      ? p.properties?.iormConfigCache?.["dbPlans"]
                      : p.properties?.iormConfigCache?.["dbPlans"].map((p) => ({
                          dbName: p["dbName"],
                          flashCacheLimit: p["flashCacheLimit"],
                          share: p["share"],
                        })),
                  lifecycleDetails:
                    p.properties?.iormConfigCache?.["lifecycleDetails"],
                  lifecycleState:
                    p.properties?.iormConfigCache?.["lifecycleState"],
                  objective: p.properties?.iormConfigCache?.["objective"],
                },
            lastUpdateHistoryEntryId:
              p.properties?.["lastUpdateHistoryEntryId"],
            dbServers: p.properties?.["dbServers"],
            compartmentId: p.properties?.["compartmentId"],
            subnetOcid: p.properties?.["subnetOcid"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List CloudVmCluster resources by subscription ID */
export function listBySubscription(
  context: Client,
  subscriptionId: string,
  options: CloudVmClustersListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<CloudVmCluster> {
  return buildPagedAsyncIterator(
    context,
    () => _listBySubscriptionSend(context, subscriptionId, options),
    _listBySubscriptionDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _createOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  resource: CloudVmCluster,
  options: CloudVmClustersCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | CloudVmClustersCreateOrUpdate200Response
  | CloudVmClustersCreateOrUpdate201Response
  | CloudVmClustersCreateOrUpdateDefaultResponse
  | CloudVmClustersCreateOrUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        location: resource["location"],
        tags: resource["tags"],
        properties: !resource.properties
          ? undefined
          : {
              storageSizeInGbs: resource.properties?.["storageSizeInGbs"],
              dataStorageSizeInTbs:
                resource.properties?.["dataStorageSizeInTbs"],
              dbNodeStorageSizeInGbs:
                resource.properties?.["dbNodeStorageSizeInGbs"],
              memorySizeInGbs: resource.properties?.["memorySizeInGbs"],
              timeZone: resource.properties?.["timeZone"],
              zoneId: resource.properties?.["zoneId"],
              hostname: resource.properties?.["hostname"],
              domain: resource.properties?.["domain"],
              cpuCoreCount: resource.properties?.["cpuCoreCount"],
              ocpuCount: resource.properties?.["ocpuCount"],
              clusterName: resource.properties?.["clusterName"],
              dataStoragePercentage:
                resource.properties?.["dataStoragePercentage"],
              isLocalBackupEnabled:
                resource.properties?.["isLocalBackupEnabled"],
              cloudExadataInfrastructureId:
                resource.properties?.["cloudExadataInfrastructureId"],
              isSparseDiskgroupEnabled:
                resource.properties?.["isSparseDiskgroupEnabled"],
              systemVersion: resource.properties?.["systemVersion"],
              sshPublicKeys: resource.properties?.["sshPublicKeys"],
              licenseModel: resource.properties?.["licenseModel"],
              scanListenerPortTcp: resource.properties?.["scanListenerPortTcp"],
              scanListenerPortTcpSsl:
                resource.properties?.["scanListenerPortTcpSsl"],
              vnetId: resource.properties?.["vnetId"],
              giVersion: resource.properties?.["giVersion"],
              subnetId: resource.properties?.["subnetId"],
              backupSubnetCidr: resource.properties?.["backupSubnetCidr"],
              nsgCidrs:
                resource.properties?.["nsgCidrs"] === undefined
                  ? resource.properties?.["nsgCidrs"]
                  : resource.properties?.["nsgCidrs"].map((p) => ({
                      source: p["source"],
                      destinationPortRange: !p.destinationPortRange
                        ? undefined
                        : {
                            min: p.destinationPortRange?.["min"],
                            max: p.destinationPortRange?.["max"],
                          },
                    })),
              dataCollectionOptions: !resource.properties?.dataCollectionOptions
                ? undefined
                : {
                    isDiagnosticsEventsEnabled:
                      resource.properties?.dataCollectionOptions?.[
                        "isDiagnosticsEventsEnabled"
                      ],
                    isHealthMonitoringEnabled:
                      resource.properties?.dataCollectionOptions?.[
                        "isHealthMonitoringEnabled"
                      ],
                    isIncidentLogsEnabled:
                      resource.properties?.dataCollectionOptions?.[
                        "isIncidentLogsEnabled"
                      ],
                  },
              displayName: resource.properties?.["displayName"],
              computeNodes: resource.properties?.["computeNodes"],
              dbServers: resource.properties?.["dbServers"],
            },
      },
    });
}

export async function _createOrUpdateDeserialize(
  result:
    | CloudVmClustersCreateOrUpdate200Response
    | CloudVmClustersCreateOrUpdate201Response
    | CloudVmClustersCreateOrUpdateDefaultResponse
    | CloudVmClustersCreateOrUpdateLogicalResponse,
): Promise<CloudVmCluster> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as CloudVmClustersCreateOrUpdateLogicalResponse;
  return {
    location: result.body["location"],
    tags: result.body["tags"],
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
          listenerPort: result.body.properties?.["listenerPort"],
          nodeCount: result.body.properties?.["nodeCount"],
          storageSizeInGbs: result.body.properties?.["storageSizeInGbs"],
          dataStorageSizeInTbs:
            result.body.properties?.["dataStorageSizeInTbs"],
          dbNodeStorageSizeInGbs:
            result.body.properties?.["dbNodeStorageSizeInGbs"],
          memorySizeInGbs: result.body.properties?.["memorySizeInGbs"],
          timeCreated:
            result.body.properties?.["timeCreated"] !== undefined
              ? new Date(result.body.properties?.["timeCreated"])
              : undefined,
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          timeZone: result.body.properties?.["timeZone"],
          zoneId: result.body.properties?.["zoneId"],
          hostname: result.body.properties?.["hostname"],
          domain: result.body.properties?.["domain"],
          cpuCoreCount: result.body.properties?.["cpuCoreCount"],
          ocpuCount: result.body.properties?.["ocpuCount"],
          clusterName: result.body.properties?.["clusterName"],
          dataStoragePercentage:
            result.body.properties?.["dataStoragePercentage"],
          isLocalBackupEnabled:
            result.body.properties?.["isLocalBackupEnabled"],
          cloudExadataInfrastructureId:
            result.body.properties?.["cloudExadataInfrastructureId"],
          isSparseDiskgroupEnabled:
            result.body.properties?.["isSparseDiskgroupEnabled"],
          systemVersion: result.body.properties?.["systemVersion"],
          sshPublicKeys: result.body.properties?.["sshPublicKeys"],
          licenseModel: result.body.properties?.["licenseModel"],
          diskRedundancy: result.body.properties?.["diskRedundancy"],
          scanIpIds: result.body.properties?.["scanIpIds"],
          vipIds: result.body.properties?.["vipIds"],
          scanDnsName: result.body.properties?.["scanDnsName"],
          scanListenerPortTcp: result.body.properties?.["scanListenerPortTcp"],
          scanListenerPortTcpSsl:
            result.body.properties?.["scanListenerPortTcpSsl"],
          scanDnsRecordId: result.body.properties?.["scanDnsRecordId"],
          shape: result.body.properties?.["shape"],
          provisioningState: result.body.properties?.["provisioningState"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          vnetId: result.body.properties?.["vnetId"],
          giVersion: result.body.properties?.["giVersion"],
          ociUrl: result.body.properties?.["ociUrl"],
          nsgUrl: result.body.properties?.["nsgUrl"],
          subnetId: result.body.properties?.["subnetId"],
          backupSubnetCidr: result.body.properties?.["backupSubnetCidr"],
          nsgCidrs:
            result.body.properties?.["nsgCidrs"] === undefined
              ? result.body.properties?.["nsgCidrs"]
              : result.body.properties?.["nsgCidrs"].map((p) => ({
                  source: p["source"],
                  destinationPortRange: !p.destinationPortRange
                    ? undefined
                    : {
                        min: p.destinationPortRange?.["min"],
                        max: p.destinationPortRange?.["max"],
                      },
                })),
          dataCollectionOptions: !result.body.properties?.dataCollectionOptions
            ? undefined
            : {
                isDiagnosticsEventsEnabled:
                  result.body.properties?.dataCollectionOptions?.[
                    "isDiagnosticsEventsEnabled"
                  ],
                isHealthMonitoringEnabled:
                  result.body.properties?.dataCollectionOptions?.[
                    "isHealthMonitoringEnabled"
                  ],
                isIncidentLogsEnabled:
                  result.body.properties?.dataCollectionOptions?.[
                    "isIncidentLogsEnabled"
                  ],
              },
          displayName: result.body.properties?.["displayName"],
          computeNodes: result.body.properties?.["computeNodes"],
          iormConfigCache: !result.body.properties?.iormConfigCache
            ? undefined
            : {
                dbPlans:
                  result.body.properties?.iormConfigCache?.["dbPlans"] ===
                  undefined
                    ? result.body.properties?.iormConfigCache?.["dbPlans"]
                    : result.body.properties?.iormConfigCache?.["dbPlans"].map(
                        (p) => ({
                          dbName: p["dbName"],
                          flashCacheLimit: p["flashCacheLimit"],
                          share: p["share"],
                        }),
                      ),
                lifecycleDetails:
                  result.body.properties?.iormConfigCache?.["lifecycleDetails"],
                lifecycleState:
                  result.body.properties?.iormConfigCache?.["lifecycleState"],
                objective:
                  result.body.properties?.iormConfigCache?.["objective"],
              },
          lastUpdateHistoryEntryId:
            result.body.properties?.["lastUpdateHistoryEntryId"],
          dbServers: result.body.properties?.["dbServers"],
          compartmentId: result.body.properties?.["compartmentId"],
          subnetOcid: result.body.properties?.["subnetOcid"],
        },
  };
}

/** Create a CloudVmCluster */
export function createOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  resource: CloudVmCluster,
  options: CloudVmClustersCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<CloudVmCluster>, CloudVmCluster> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        resource,
        options,
      ),
  }) as PollerLike<OperationState<CloudVmCluster>, CloudVmCluster>;
}

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  options: CloudVmClustersGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  CloudVmClustersGet200Response | CloudVmClustersGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: CloudVmClustersGet200Response | CloudVmClustersGetDefaultResponse,
): Promise<CloudVmCluster> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    location: result.body["location"],
    tags: result.body["tags"],
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
          listenerPort: result.body.properties?.["listenerPort"],
          nodeCount: result.body.properties?.["nodeCount"],
          storageSizeInGbs: result.body.properties?.["storageSizeInGbs"],
          dataStorageSizeInTbs:
            result.body.properties?.["dataStorageSizeInTbs"],
          dbNodeStorageSizeInGbs:
            result.body.properties?.["dbNodeStorageSizeInGbs"],
          memorySizeInGbs: result.body.properties?.["memorySizeInGbs"],
          timeCreated:
            result.body.properties?.["timeCreated"] !== undefined
              ? new Date(result.body.properties?.["timeCreated"])
              : undefined,
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          timeZone: result.body.properties?.["timeZone"],
          zoneId: result.body.properties?.["zoneId"],
          hostname: result.body.properties?.["hostname"],
          domain: result.body.properties?.["domain"],
          cpuCoreCount: result.body.properties?.["cpuCoreCount"],
          ocpuCount: result.body.properties?.["ocpuCount"],
          clusterName: result.body.properties?.["clusterName"],
          dataStoragePercentage:
            result.body.properties?.["dataStoragePercentage"],
          isLocalBackupEnabled:
            result.body.properties?.["isLocalBackupEnabled"],
          cloudExadataInfrastructureId:
            result.body.properties?.["cloudExadataInfrastructureId"],
          isSparseDiskgroupEnabled:
            result.body.properties?.["isSparseDiskgroupEnabled"],
          systemVersion: result.body.properties?.["systemVersion"],
          sshPublicKeys: result.body.properties?.["sshPublicKeys"],
          licenseModel: result.body.properties?.["licenseModel"],
          diskRedundancy: result.body.properties?.["diskRedundancy"],
          scanIpIds: result.body.properties?.["scanIpIds"],
          vipIds: result.body.properties?.["vipIds"],
          scanDnsName: result.body.properties?.["scanDnsName"],
          scanListenerPortTcp: result.body.properties?.["scanListenerPortTcp"],
          scanListenerPortTcpSsl:
            result.body.properties?.["scanListenerPortTcpSsl"],
          scanDnsRecordId: result.body.properties?.["scanDnsRecordId"],
          shape: result.body.properties?.["shape"],
          provisioningState: result.body.properties?.["provisioningState"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          vnetId: result.body.properties?.["vnetId"],
          giVersion: result.body.properties?.["giVersion"],
          ociUrl: result.body.properties?.["ociUrl"],
          nsgUrl: result.body.properties?.["nsgUrl"],
          subnetId: result.body.properties?.["subnetId"],
          backupSubnetCidr: result.body.properties?.["backupSubnetCidr"],
          nsgCidrs:
            result.body.properties?.["nsgCidrs"] === undefined
              ? result.body.properties?.["nsgCidrs"]
              : result.body.properties?.["nsgCidrs"].map((p) => ({
                  source: p["source"],
                  destinationPortRange: !p.destinationPortRange
                    ? undefined
                    : {
                        min: p.destinationPortRange?.["min"],
                        max: p.destinationPortRange?.["max"],
                      },
                })),
          dataCollectionOptions: !result.body.properties?.dataCollectionOptions
            ? undefined
            : {
                isDiagnosticsEventsEnabled:
                  result.body.properties?.dataCollectionOptions?.[
                    "isDiagnosticsEventsEnabled"
                  ],
                isHealthMonitoringEnabled:
                  result.body.properties?.dataCollectionOptions?.[
                    "isHealthMonitoringEnabled"
                  ],
                isIncidentLogsEnabled:
                  result.body.properties?.dataCollectionOptions?.[
                    "isIncidentLogsEnabled"
                  ],
              },
          displayName: result.body.properties?.["displayName"],
          computeNodes: result.body.properties?.["computeNodes"],
          iormConfigCache: !result.body.properties?.iormConfigCache
            ? undefined
            : {
                dbPlans:
                  result.body.properties?.iormConfigCache?.["dbPlans"] ===
                  undefined
                    ? result.body.properties?.iormConfigCache?.["dbPlans"]
                    : result.body.properties?.iormConfigCache?.["dbPlans"].map(
                        (p) => ({
                          dbName: p["dbName"],
                          flashCacheLimit: p["flashCacheLimit"],
                          share: p["share"],
                        }),
                      ),
                lifecycleDetails:
                  result.body.properties?.iormConfigCache?.["lifecycleDetails"],
                lifecycleState:
                  result.body.properties?.iormConfigCache?.["lifecycleState"],
                objective:
                  result.body.properties?.iormConfigCache?.["objective"],
              },
          lastUpdateHistoryEntryId:
            result.body.properties?.["lastUpdateHistoryEntryId"],
          dbServers: result.body.properties?.["dbServers"],
          compartmentId: result.body.properties?.["compartmentId"],
          subnetOcid: result.body.properties?.["subnetOcid"],
        },
  };
}

/** Get a CloudVmCluster */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  options: CloudVmClustersGetOptionalParams = { requestOptions: {} },
): Promise<CloudVmCluster> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    cloudvmclustername,
    options,
  );
  return _getDeserialize(result);
}

export function _updateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  properties: CloudVmClusterUpdate,
  options: CloudVmClustersUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | CloudVmClustersUpdate200Response
  | CloudVmClustersUpdate202Response
  | CloudVmClustersUpdateDefaultResponse
  | CloudVmClustersUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: properties["tags"],
        properties: !properties.properties
          ? undefined
          : {
              storageSizeInGbs: properties.properties?.["storageSizeInGbs"],
              dataStorageSizeInTbs:
                properties.properties?.["dataStorageSizeInTbs"],
              dbNodeStorageSizeInGbs:
                properties.properties?.["dbNodeStorageSizeInGbs"],
              memorySizeInGbs: properties.properties?.["memorySizeInGbs"],
              cpuCoreCount: properties.properties?.["cpuCoreCount"],
              ocpuCount: properties.properties?.["ocpuCount"],
              sshPublicKeys: properties.properties?.["sshPublicKeys"],
              licenseModel: properties.properties?.["licenseModel"],
              dataCollectionOptions: !properties.properties
                ?.dataCollectionOptions
                ? undefined
                : {
                    isDiagnosticsEventsEnabled:
                      properties.properties?.dataCollectionOptions?.[
                        "isDiagnosticsEventsEnabled"
                      ],
                    isHealthMonitoringEnabled:
                      properties.properties?.dataCollectionOptions?.[
                        "isHealthMonitoringEnabled"
                      ],
                    isIncidentLogsEnabled:
                      properties.properties?.dataCollectionOptions?.[
                        "isIncidentLogsEnabled"
                      ],
                  },
              displayName: properties.properties?.["displayName"],
              computeNodes: properties.properties?.["computeNodes"],
            },
      },
    });
}

export async function _updateDeserialize(
  result:
    | CloudVmClustersUpdate200Response
    | CloudVmClustersUpdate202Response
    | CloudVmClustersUpdateDefaultResponse
    | CloudVmClustersUpdateLogicalResponse,
): Promise<CloudVmCluster> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as CloudVmClustersUpdateLogicalResponse;
  return {
    location: result.body["location"],
    tags: result.body["tags"],
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
          listenerPort: result.body.properties?.["listenerPort"],
          nodeCount: result.body.properties?.["nodeCount"],
          storageSizeInGbs: result.body.properties?.["storageSizeInGbs"],
          dataStorageSizeInTbs:
            result.body.properties?.["dataStorageSizeInTbs"],
          dbNodeStorageSizeInGbs:
            result.body.properties?.["dbNodeStorageSizeInGbs"],
          memorySizeInGbs: result.body.properties?.["memorySizeInGbs"],
          timeCreated:
            result.body.properties?.["timeCreated"] !== undefined
              ? new Date(result.body.properties?.["timeCreated"])
              : undefined,
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          timeZone: result.body.properties?.["timeZone"],
          zoneId: result.body.properties?.["zoneId"],
          hostname: result.body.properties?.["hostname"],
          domain: result.body.properties?.["domain"],
          cpuCoreCount: result.body.properties?.["cpuCoreCount"],
          ocpuCount: result.body.properties?.["ocpuCount"],
          clusterName: result.body.properties?.["clusterName"],
          dataStoragePercentage:
            result.body.properties?.["dataStoragePercentage"],
          isLocalBackupEnabled:
            result.body.properties?.["isLocalBackupEnabled"],
          cloudExadataInfrastructureId:
            result.body.properties?.["cloudExadataInfrastructureId"],
          isSparseDiskgroupEnabled:
            result.body.properties?.["isSparseDiskgroupEnabled"],
          systemVersion: result.body.properties?.["systemVersion"],
          sshPublicKeys: result.body.properties?.["sshPublicKeys"],
          licenseModel: result.body.properties?.["licenseModel"],
          diskRedundancy: result.body.properties?.["diskRedundancy"],
          scanIpIds: result.body.properties?.["scanIpIds"],
          vipIds: result.body.properties?.["vipIds"],
          scanDnsName: result.body.properties?.["scanDnsName"],
          scanListenerPortTcp: result.body.properties?.["scanListenerPortTcp"],
          scanListenerPortTcpSsl:
            result.body.properties?.["scanListenerPortTcpSsl"],
          scanDnsRecordId: result.body.properties?.["scanDnsRecordId"],
          shape: result.body.properties?.["shape"],
          provisioningState: result.body.properties?.["provisioningState"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          vnetId: result.body.properties?.["vnetId"],
          giVersion: result.body.properties?.["giVersion"],
          ociUrl: result.body.properties?.["ociUrl"],
          nsgUrl: result.body.properties?.["nsgUrl"],
          subnetId: result.body.properties?.["subnetId"],
          backupSubnetCidr: result.body.properties?.["backupSubnetCidr"],
          nsgCidrs:
            result.body.properties?.["nsgCidrs"] === undefined
              ? result.body.properties?.["nsgCidrs"]
              : result.body.properties?.["nsgCidrs"].map((p) => ({
                  source: p["source"],
                  destinationPortRange: !p.destinationPortRange
                    ? undefined
                    : {
                        min: p.destinationPortRange?.["min"],
                        max: p.destinationPortRange?.["max"],
                      },
                })),
          dataCollectionOptions: !result.body.properties?.dataCollectionOptions
            ? undefined
            : {
                isDiagnosticsEventsEnabled:
                  result.body.properties?.dataCollectionOptions?.[
                    "isDiagnosticsEventsEnabled"
                  ],
                isHealthMonitoringEnabled:
                  result.body.properties?.dataCollectionOptions?.[
                    "isHealthMonitoringEnabled"
                  ],
                isIncidentLogsEnabled:
                  result.body.properties?.dataCollectionOptions?.[
                    "isIncidentLogsEnabled"
                  ],
              },
          displayName: result.body.properties?.["displayName"],
          computeNodes: result.body.properties?.["computeNodes"],
          iormConfigCache: !result.body.properties?.iormConfigCache
            ? undefined
            : {
                dbPlans:
                  result.body.properties?.iormConfigCache?.["dbPlans"] ===
                  undefined
                    ? result.body.properties?.iormConfigCache?.["dbPlans"]
                    : result.body.properties?.iormConfigCache?.["dbPlans"].map(
                        (p) => ({
                          dbName: p["dbName"],
                          flashCacheLimit: p["flashCacheLimit"],
                          share: p["share"],
                        }),
                      ),
                lifecycleDetails:
                  result.body.properties?.iormConfigCache?.["lifecycleDetails"],
                lifecycleState:
                  result.body.properties?.iormConfigCache?.["lifecycleState"],
                objective:
                  result.body.properties?.iormConfigCache?.["objective"],
              },
          lastUpdateHistoryEntryId:
            result.body.properties?.["lastUpdateHistoryEntryId"],
          dbServers: result.body.properties?.["dbServers"],
          compartmentId: result.body.properties?.["compartmentId"],
          subnetOcid: result.body.properties?.["subnetOcid"],
        },
  };
}

/** Update a CloudVmCluster */
export function update(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  properties: CloudVmClusterUpdate,
  options: CloudVmClustersUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<CloudVmCluster>, CloudVmCluster> {
  return getLongRunningPoller(context, _updateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        properties,
        options,
      ),
  }) as PollerLike<OperationState<CloudVmCluster>, CloudVmCluster>;
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  options: CloudVmClustersDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | CloudVmClustersDelete202Response
  | CloudVmClustersDelete204Response
  | CloudVmClustersDeleteDefaultResponse
  | CloudVmClustersDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | CloudVmClustersDelete202Response
    | CloudVmClustersDelete204Response
    | CloudVmClustersDeleteDefaultResponse
    | CloudVmClustersDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as CloudVmClustersDeleteLogicalResponse;
  return;
}

/** Delete a CloudVmCluster */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  options: CloudVmClustersDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}

export function _listByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: CloudVmClustersListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | CloudVmClustersListByResourceGroup200Response
  | CloudVmClustersListByResourceGroupDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByResourceGroupDeserialize(
  result:
    | CloudVmClustersListByResourceGroup200Response
    | CloudVmClustersListByResourceGroupDefaultResponse,
): Promise<CloudVmClusterListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      location: p["location"],
      tags: p["tags"],
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
            listenerPort: p.properties?.["listenerPort"],
            nodeCount: p.properties?.["nodeCount"],
            storageSizeInGbs: p.properties?.["storageSizeInGbs"],
            dataStorageSizeInTbs: p.properties?.["dataStorageSizeInTbs"],
            dbNodeStorageSizeInGbs: p.properties?.["dbNodeStorageSizeInGbs"],
            memorySizeInGbs: p.properties?.["memorySizeInGbs"],
            timeCreated:
              p.properties?.["timeCreated"] !== undefined
                ? new Date(p.properties?.["timeCreated"])
                : undefined,
            lifecycleDetails: p.properties?.["lifecycleDetails"],
            timeZone: p.properties?.["timeZone"],
            zoneId: p.properties?.["zoneId"],
            hostname: p.properties?.["hostname"],
            domain: p.properties?.["domain"],
            cpuCoreCount: p.properties?.["cpuCoreCount"],
            ocpuCount: p.properties?.["ocpuCount"],
            clusterName: p.properties?.["clusterName"],
            dataStoragePercentage: p.properties?.["dataStoragePercentage"],
            isLocalBackupEnabled: p.properties?.["isLocalBackupEnabled"],
            cloudExadataInfrastructureId:
              p.properties?.["cloudExadataInfrastructureId"],
            isSparseDiskgroupEnabled:
              p.properties?.["isSparseDiskgroupEnabled"],
            systemVersion: p.properties?.["systemVersion"],
            sshPublicKeys: p.properties?.["sshPublicKeys"],
            licenseModel: p.properties?.["licenseModel"],
            diskRedundancy: p.properties?.["diskRedundancy"],
            scanIpIds: p.properties?.["scanIpIds"],
            vipIds: p.properties?.["vipIds"],
            scanDnsName: p.properties?.["scanDnsName"],
            scanListenerPortTcp: p.properties?.["scanListenerPortTcp"],
            scanListenerPortTcpSsl: p.properties?.["scanListenerPortTcpSsl"],
            scanDnsRecordId: p.properties?.["scanDnsRecordId"],
            shape: p.properties?.["shape"],
            provisioningState: p.properties?.["provisioningState"],
            lifecycleState: p.properties?.["lifecycleState"],
            vnetId: p.properties?.["vnetId"],
            giVersion: p.properties?.["giVersion"],
            ociUrl: p.properties?.["ociUrl"],
            nsgUrl: p.properties?.["nsgUrl"],
            subnetId: p.properties?.["subnetId"],
            backupSubnetCidr: p.properties?.["backupSubnetCidr"],
            nsgCidrs:
              p.properties?.["nsgCidrs"] === undefined
                ? p.properties?.["nsgCidrs"]
                : p.properties?.["nsgCidrs"].map((p) => ({
                    source: p["source"],
                    destinationPortRange: !p.destinationPortRange
                      ? undefined
                      : {
                          min: p.destinationPortRange?.["min"],
                          max: p.destinationPortRange?.["max"],
                        },
                  })),
            dataCollectionOptions: !p.properties?.dataCollectionOptions
              ? undefined
              : {
                  isDiagnosticsEventsEnabled:
                    p.properties?.dataCollectionOptions?.[
                      "isDiagnosticsEventsEnabled"
                    ],
                  isHealthMonitoringEnabled:
                    p.properties?.dataCollectionOptions?.[
                      "isHealthMonitoringEnabled"
                    ],
                  isIncidentLogsEnabled:
                    p.properties?.dataCollectionOptions?.[
                      "isIncidentLogsEnabled"
                    ],
                },
            displayName: p.properties?.["displayName"],
            computeNodes: p.properties?.["computeNodes"],
            iormConfigCache: !p.properties?.iormConfigCache
              ? undefined
              : {
                  dbPlans:
                    p.properties?.iormConfigCache?.["dbPlans"] === undefined
                      ? p.properties?.iormConfigCache?.["dbPlans"]
                      : p.properties?.iormConfigCache?.["dbPlans"].map((p) => ({
                          dbName: p["dbName"],
                          flashCacheLimit: p["flashCacheLimit"],
                          share: p["share"],
                        })),
                  lifecycleDetails:
                    p.properties?.iormConfigCache?.["lifecycleDetails"],
                  lifecycleState:
                    p.properties?.iormConfigCache?.["lifecycleState"],
                  objective: p.properties?.iormConfigCache?.["objective"],
                },
            lastUpdateHistoryEntryId:
              p.properties?.["lastUpdateHistoryEntryId"],
            dbServers: p.properties?.["dbServers"],
            compartmentId: p.properties?.["compartmentId"],
            subnetOcid: p.properties?.["subnetOcid"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List CloudVmCluster resources by resource group */
export function listByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: CloudVmClustersListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<CloudVmCluster> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _listByResourceGroupDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _addVmsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  body: AddRemoveDbNode,
  options: CloudVmClustersAddVmsOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | CloudVmClustersAddVms200Response
  | CloudVmClustersAddVms202Response
  | CloudVmClustersAddVmsDefaultResponse
  | CloudVmClustersAddVmsLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/addVms",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { dbServers: body["dbServers"] },
    });
}

export async function _addVmsDeserialize(
  result:
    | CloudVmClustersAddVms200Response
    | CloudVmClustersAddVms202Response
    | CloudVmClustersAddVmsDefaultResponse
    | CloudVmClustersAddVmsLogicalResponse,
): Promise<CloudVmCluster> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as CloudVmClustersAddVmsLogicalResponse;
  return {
    location: result.body["location"],
    tags: result.body["tags"],
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
          listenerPort: result.body.properties?.["listenerPort"],
          nodeCount: result.body.properties?.["nodeCount"],
          storageSizeInGbs: result.body.properties?.["storageSizeInGbs"],
          dataStorageSizeInTbs:
            result.body.properties?.["dataStorageSizeInTbs"],
          dbNodeStorageSizeInGbs:
            result.body.properties?.["dbNodeStorageSizeInGbs"],
          memorySizeInGbs: result.body.properties?.["memorySizeInGbs"],
          timeCreated:
            result.body.properties?.["timeCreated"] !== undefined
              ? new Date(result.body.properties?.["timeCreated"])
              : undefined,
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          timeZone: result.body.properties?.["timeZone"],
          zoneId: result.body.properties?.["zoneId"],
          hostname: result.body.properties?.["hostname"],
          domain: result.body.properties?.["domain"],
          cpuCoreCount: result.body.properties?.["cpuCoreCount"],
          ocpuCount: result.body.properties?.["ocpuCount"],
          clusterName: result.body.properties?.["clusterName"],
          dataStoragePercentage:
            result.body.properties?.["dataStoragePercentage"],
          isLocalBackupEnabled:
            result.body.properties?.["isLocalBackupEnabled"],
          cloudExadataInfrastructureId:
            result.body.properties?.["cloudExadataInfrastructureId"],
          isSparseDiskgroupEnabled:
            result.body.properties?.["isSparseDiskgroupEnabled"],
          systemVersion: result.body.properties?.["systemVersion"],
          sshPublicKeys: result.body.properties?.["sshPublicKeys"],
          licenseModel: result.body.properties?.["licenseModel"],
          diskRedundancy: result.body.properties?.["diskRedundancy"],
          scanIpIds: result.body.properties?.["scanIpIds"],
          vipIds: result.body.properties?.["vipIds"],
          scanDnsName: result.body.properties?.["scanDnsName"],
          scanListenerPortTcp: result.body.properties?.["scanListenerPortTcp"],
          scanListenerPortTcpSsl:
            result.body.properties?.["scanListenerPortTcpSsl"],
          scanDnsRecordId: result.body.properties?.["scanDnsRecordId"],
          shape: result.body.properties?.["shape"],
          provisioningState: result.body.properties?.["provisioningState"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          vnetId: result.body.properties?.["vnetId"],
          giVersion: result.body.properties?.["giVersion"],
          ociUrl: result.body.properties?.["ociUrl"],
          nsgUrl: result.body.properties?.["nsgUrl"],
          subnetId: result.body.properties?.["subnetId"],
          backupSubnetCidr: result.body.properties?.["backupSubnetCidr"],
          nsgCidrs:
            result.body.properties?.["nsgCidrs"] === undefined
              ? result.body.properties?.["nsgCidrs"]
              : result.body.properties?.["nsgCidrs"].map((p) => ({
                  source: p["source"],
                  destinationPortRange: !p.destinationPortRange
                    ? undefined
                    : {
                        min: p.destinationPortRange?.["min"],
                        max: p.destinationPortRange?.["max"],
                      },
                })),
          dataCollectionOptions: !result.body.properties?.dataCollectionOptions
            ? undefined
            : {
                isDiagnosticsEventsEnabled:
                  result.body.properties?.dataCollectionOptions?.[
                    "isDiagnosticsEventsEnabled"
                  ],
                isHealthMonitoringEnabled:
                  result.body.properties?.dataCollectionOptions?.[
                    "isHealthMonitoringEnabled"
                  ],
                isIncidentLogsEnabled:
                  result.body.properties?.dataCollectionOptions?.[
                    "isIncidentLogsEnabled"
                  ],
              },
          displayName: result.body.properties?.["displayName"],
          computeNodes: result.body.properties?.["computeNodes"],
          iormConfigCache: !result.body.properties?.iormConfigCache
            ? undefined
            : {
                dbPlans:
                  result.body.properties?.iormConfigCache?.["dbPlans"] ===
                  undefined
                    ? result.body.properties?.iormConfigCache?.["dbPlans"]
                    : result.body.properties?.iormConfigCache?.["dbPlans"].map(
                        (p) => ({
                          dbName: p["dbName"],
                          flashCacheLimit: p["flashCacheLimit"],
                          share: p["share"],
                        }),
                      ),
                lifecycleDetails:
                  result.body.properties?.iormConfigCache?.["lifecycleDetails"],
                lifecycleState:
                  result.body.properties?.iormConfigCache?.["lifecycleState"],
                objective:
                  result.body.properties?.iormConfigCache?.["objective"],
              },
          lastUpdateHistoryEntryId:
            result.body.properties?.["lastUpdateHistoryEntryId"],
          dbServers: result.body.properties?.["dbServers"],
          compartmentId: result.body.properties?.["compartmentId"],
          subnetOcid: result.body.properties?.["subnetOcid"],
        },
  };
}

/** Add VMs to the VM Cluster */
export function addVms(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  body: AddRemoveDbNode,
  options: CloudVmClustersAddVmsOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<CloudVmCluster>, CloudVmCluster> {
  return getLongRunningPoller(context, _addVmsDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _addVmsSend(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        body,
        options,
      ),
  }) as PollerLike<OperationState<CloudVmCluster>, CloudVmCluster>;
}

export function _removeVmsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  body: AddRemoveDbNode,
  options: CloudVmClustersRemoveVmsOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | CloudVmClustersRemoveVms200Response
  | CloudVmClustersRemoveVms202Response
  | CloudVmClustersRemoveVmsDefaultResponse
  | CloudVmClustersRemoveVmsLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/removeVms",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { dbServers: body["dbServers"] },
    });
}

export async function _removeVmsDeserialize(
  result:
    | CloudVmClustersRemoveVms200Response
    | CloudVmClustersRemoveVms202Response
    | CloudVmClustersRemoveVmsDefaultResponse
    | CloudVmClustersRemoveVmsLogicalResponse,
): Promise<CloudVmCluster> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as CloudVmClustersRemoveVmsLogicalResponse;
  return {
    location: result.body["location"],
    tags: result.body["tags"],
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
          listenerPort: result.body.properties?.["listenerPort"],
          nodeCount: result.body.properties?.["nodeCount"],
          storageSizeInGbs: result.body.properties?.["storageSizeInGbs"],
          dataStorageSizeInTbs:
            result.body.properties?.["dataStorageSizeInTbs"],
          dbNodeStorageSizeInGbs:
            result.body.properties?.["dbNodeStorageSizeInGbs"],
          memorySizeInGbs: result.body.properties?.["memorySizeInGbs"],
          timeCreated:
            result.body.properties?.["timeCreated"] !== undefined
              ? new Date(result.body.properties?.["timeCreated"])
              : undefined,
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          timeZone: result.body.properties?.["timeZone"],
          zoneId: result.body.properties?.["zoneId"],
          hostname: result.body.properties?.["hostname"],
          domain: result.body.properties?.["domain"],
          cpuCoreCount: result.body.properties?.["cpuCoreCount"],
          ocpuCount: result.body.properties?.["ocpuCount"],
          clusterName: result.body.properties?.["clusterName"],
          dataStoragePercentage:
            result.body.properties?.["dataStoragePercentage"],
          isLocalBackupEnabled:
            result.body.properties?.["isLocalBackupEnabled"],
          cloudExadataInfrastructureId:
            result.body.properties?.["cloudExadataInfrastructureId"],
          isSparseDiskgroupEnabled:
            result.body.properties?.["isSparseDiskgroupEnabled"],
          systemVersion: result.body.properties?.["systemVersion"],
          sshPublicKeys: result.body.properties?.["sshPublicKeys"],
          licenseModel: result.body.properties?.["licenseModel"],
          diskRedundancy: result.body.properties?.["diskRedundancy"],
          scanIpIds: result.body.properties?.["scanIpIds"],
          vipIds: result.body.properties?.["vipIds"],
          scanDnsName: result.body.properties?.["scanDnsName"],
          scanListenerPortTcp: result.body.properties?.["scanListenerPortTcp"],
          scanListenerPortTcpSsl:
            result.body.properties?.["scanListenerPortTcpSsl"],
          scanDnsRecordId: result.body.properties?.["scanDnsRecordId"],
          shape: result.body.properties?.["shape"],
          provisioningState: result.body.properties?.["provisioningState"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          vnetId: result.body.properties?.["vnetId"],
          giVersion: result.body.properties?.["giVersion"],
          ociUrl: result.body.properties?.["ociUrl"],
          nsgUrl: result.body.properties?.["nsgUrl"],
          subnetId: result.body.properties?.["subnetId"],
          backupSubnetCidr: result.body.properties?.["backupSubnetCidr"],
          nsgCidrs:
            result.body.properties?.["nsgCidrs"] === undefined
              ? result.body.properties?.["nsgCidrs"]
              : result.body.properties?.["nsgCidrs"].map((p) => ({
                  source: p["source"],
                  destinationPortRange: !p.destinationPortRange
                    ? undefined
                    : {
                        min: p.destinationPortRange?.["min"],
                        max: p.destinationPortRange?.["max"],
                      },
                })),
          dataCollectionOptions: !result.body.properties?.dataCollectionOptions
            ? undefined
            : {
                isDiagnosticsEventsEnabled:
                  result.body.properties?.dataCollectionOptions?.[
                    "isDiagnosticsEventsEnabled"
                  ],
                isHealthMonitoringEnabled:
                  result.body.properties?.dataCollectionOptions?.[
                    "isHealthMonitoringEnabled"
                  ],
                isIncidentLogsEnabled:
                  result.body.properties?.dataCollectionOptions?.[
                    "isIncidentLogsEnabled"
                  ],
              },
          displayName: result.body.properties?.["displayName"],
          computeNodes: result.body.properties?.["computeNodes"],
          iormConfigCache: !result.body.properties?.iormConfigCache
            ? undefined
            : {
                dbPlans:
                  result.body.properties?.iormConfigCache?.["dbPlans"] ===
                  undefined
                    ? result.body.properties?.iormConfigCache?.["dbPlans"]
                    : result.body.properties?.iormConfigCache?.["dbPlans"].map(
                        (p) => ({
                          dbName: p["dbName"],
                          flashCacheLimit: p["flashCacheLimit"],
                          share: p["share"],
                        }),
                      ),
                lifecycleDetails:
                  result.body.properties?.iormConfigCache?.["lifecycleDetails"],
                lifecycleState:
                  result.body.properties?.iormConfigCache?.["lifecycleState"],
                objective:
                  result.body.properties?.iormConfigCache?.["objective"],
              },
          lastUpdateHistoryEntryId:
            result.body.properties?.["lastUpdateHistoryEntryId"],
          dbServers: result.body.properties?.["dbServers"],
          compartmentId: result.body.properties?.["compartmentId"],
          subnetOcid: result.body.properties?.["subnetOcid"],
        },
  };
}

/** Remove VMs from the VM Cluster */
export function removeVms(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  body: AddRemoveDbNode,
  options: CloudVmClustersRemoveVmsOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<CloudVmCluster>, CloudVmCluster> {
  return getLongRunningPoller(context, _removeVmsDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _removeVmsSend(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        body,
        options,
      ),
  }) as PollerLike<OperationState<CloudVmCluster>, CloudVmCluster>;
}

export function _listPrivateIpAddressesSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  body: PrivateIpAddressesFilter,
  options: CloudVmClustersListPrivateIpAddressesOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | CloudVmClustersListPrivateIpAddresses200Response
  | CloudVmClustersListPrivateIpAddressesDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/listPrivateIpAddresses",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { subnetId: body["subnetId"], vnicId: body["vnicId"] },
    });
}

export async function _listPrivateIpAddressesDeserialize(
  result:
    | CloudVmClustersListPrivateIpAddresses200Response
    | CloudVmClustersListPrivateIpAddressesDefaultResponse,
): Promise<PrivateIpAddressProperties[]> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body === undefined
    ? result.body
    : result.body.map((p) => ({
        displayName: p["displayName"],
        hostnameLabel: p["hostnameLabel"],
        ocid: p["ocid"],
        ipAddress: p["ipAddress"],
        subnetId: p["subnetId"],
      }));
}

/** List Private IP Addresses by the provided filter */
export async function listPrivateIpAddresses(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  body: PrivateIpAddressesFilter,
  options: CloudVmClustersListPrivateIpAddressesOptionalParams = {
    requestOptions: {},
  },
): Promise<PrivateIpAddressProperties[]> {
  const result = await _listPrivateIpAddressesSend(
    context,
    subscriptionId,
    resourceGroupName,
    cloudvmclustername,
    body,
    options,
  );
  return _listPrivateIpAddressesDeserialize(result);
}
