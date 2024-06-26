// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  CreatedByType,
  OsType,
  LimitCpuForMigration,
  DynamicMemoryEnabled,
  IsHighlyAvailable,
  AllocationMethod,
  CreateDiffDisk,
  VirtualMachineTemplate,
  IsCustomizable,
  VirtualMachineTemplateTagsUpdate,
  VirtualMachineTemplateListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  ScVmmContext as Client,
  VirtualMachineTemplatesCreateOrUpdate200Response,
  VirtualMachineTemplatesCreateOrUpdate201Response,
  VirtualMachineTemplatesCreateOrUpdateDefaultResponse,
  VirtualMachineTemplatesCreateOrUpdateLogicalResponse,
  VirtualMachineTemplatesDelete202Response,
  VirtualMachineTemplatesDelete204Response,
  VirtualMachineTemplatesDeleteDefaultResponse,
  VirtualMachineTemplatesDeleteLogicalResponse,
  VirtualMachineTemplatesGet200Response,
  VirtualMachineTemplatesGetDefaultResponse,
  VirtualMachineTemplatesListByResourceGroup200Response,
  VirtualMachineTemplatesListByResourceGroupDefaultResponse,
  VirtualMachineTemplatesListBySubscription200Response,
  VirtualMachineTemplatesListBySubscriptionDefaultResponse,
  VirtualMachineTemplatesUpdate200Response,
  VirtualMachineTemplatesUpdate202Response,
  VirtualMachineTemplatesUpdateDefaultResponse,
  VirtualMachineTemplatesUpdateLogicalResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  VirtualMachineTemplatesGetOptionalParams,
  VirtualMachineTemplatesCreateOrUpdateOptionalParams,
  VirtualMachineTemplatesUpdateOptionalParams,
  VirtualMachineTemplatesDeleteOptionalParams,
  VirtualMachineTemplatesListByResourceGroupOptionalParams,
  VirtualMachineTemplatesListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualMachineTemplateName: string,
  options: VirtualMachineTemplatesGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | VirtualMachineTemplatesGet200Response
  | VirtualMachineTemplatesGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates/{virtualMachineTemplateName}",
      subscriptionId,
      resourceGroupName,
      virtualMachineTemplateName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result:
    | VirtualMachineTemplatesGet200Response
    | VirtualMachineTemplatesGetDefaultResponse,
): Promise<VirtualMachineTemplate> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    tags: result.body["tags"],
    location: result.body["location"],
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
          inventoryItemId: result.body.properties?.["inventoryItemId"],
          uuid: result.body.properties?.["uuid"],
          vmmServerId: result.body.properties?.["vmmServerId"],
          osType: result.body.properties?.["osType"] as OsType,
          osName: result.body.properties?.["osName"],
          computerName: result.body.properties?.["computerName"],
          memoryMB: result.body.properties?.["memoryMB"],
          cpuCount: result.body.properties?.["cpuCount"],
          limitCpuForMigration: result.body.properties?.[
            "limitCpuForMigration"
          ] as LimitCpuForMigration,
          dynamicMemoryEnabled: result.body.properties?.[
            "dynamicMemoryEnabled"
          ] as DynamicMemoryEnabled,
          isCustomizable: result.body.properties?.[
            "isCustomizable"
          ] as IsCustomizable,
          dynamicMemoryMaxMB: result.body.properties?.["dynamicMemoryMaxMB"],
          dynamicMemoryMinMB: result.body.properties?.["dynamicMemoryMinMB"],
          isHighlyAvailable: result.body.properties?.[
            "isHighlyAvailable"
          ] as IsHighlyAvailable,
          generation: result.body.properties?.["generation"],
          networkInterfaces:
            result.body.properties?.["networkInterfaces"] === undefined
              ? result.body.properties?.["networkInterfaces"]
              : result.body.properties?.["networkInterfaces"].map((p) => ({
                  name: p["name"],
                  displayName: p["displayName"],
                  ipv4Addresses: p["ipv4Addresses"],
                  ipv6Addresses: p["ipv6Addresses"],
                  macAddress: p["macAddress"],
                  virtualNetworkId: p["virtualNetworkId"],
                  networkName: p["networkName"],
                  ipv4AddressType: p["ipv4AddressType"] as AllocationMethod,
                  ipv6AddressType: p["ipv6AddressType"] as AllocationMethod,
                  macAddressType: p["macAddressType"] as AllocationMethod,
                  nicId: p["nicId"],
                })),
          disks:
            result.body.properties?.["disks"] === undefined
              ? result.body.properties?.["disks"]
              : result.body.properties?.["disks"].map((p) => ({
                  name: p["name"],
                  displayName: p["displayName"],
                  diskId: p["diskId"],
                  diskSizeGB: p["diskSizeGB"],
                  maxDiskSizeGB: p["maxDiskSizeGB"],
                  bus: p["bus"],
                  lun: p["lun"],
                  busType: p["busType"],
                  vhdType: p["vhdType"],
                  volumeType: p["volumeType"],
                  vhdFormatType: p["vhdFormatType"],
                  templateDiskId: p["templateDiskId"],
                  storageQosPolicy: !p.storageQoSPolicy
                    ? undefined
                    : {
                        name: p.storageQoSPolicy?.["name"],
                        id: p.storageQoSPolicy?.["id"],
                      },
                  createDiffDisk: p["createDiffDisk"] as CreateDiffDisk,
                })),
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Implements VirtualMachineTemplate GET method. */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualMachineTemplateName: string,
  options: VirtualMachineTemplatesGetOptionalParams = { requestOptions: {} },
): Promise<VirtualMachineTemplate> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    virtualMachineTemplateName,
    options,
  );
  return _getDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualMachineTemplateName: string,
  resource: VirtualMachineTemplate,
  options: VirtualMachineTemplatesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | VirtualMachineTemplatesCreateOrUpdate200Response
  | VirtualMachineTemplatesCreateOrUpdate201Response
  | VirtualMachineTemplatesCreateOrUpdateDefaultResponse
  | VirtualMachineTemplatesCreateOrUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates/{virtualMachineTemplateName}",
      subscriptionId,
      resourceGroupName,
      virtualMachineTemplateName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: resource["tags"],
        location: resource["location"],
        properties: !resource.properties
          ? undefined
          : {
              inventoryItemId: resource.properties?.["inventoryItemId"],
              uuid: resource.properties?.["uuid"],
              vmmServerId: resource.properties?.["vmmServerId"],
            },
        extendedLocation: {
          type: resource.extendedLocation["type"],
          name: resource.extendedLocation["name"],
        },
      },
    });
}

export async function _createOrUpdateDeserialize(
  result:
    | VirtualMachineTemplatesCreateOrUpdate200Response
    | VirtualMachineTemplatesCreateOrUpdate201Response
    | VirtualMachineTemplatesCreateOrUpdateDefaultResponse
    | VirtualMachineTemplatesCreateOrUpdateLogicalResponse,
): Promise<VirtualMachineTemplate> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as VirtualMachineTemplatesCreateOrUpdateLogicalResponse;
  return {
    tags: result.body["tags"],
    location: result.body["location"],
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
          inventoryItemId: result.body.properties?.["inventoryItemId"],
          uuid: result.body.properties?.["uuid"],
          vmmServerId: result.body.properties?.["vmmServerId"],
          osType: result.body.properties?.["osType"] as OsType,
          osName: result.body.properties?.["osName"],
          computerName: result.body.properties?.["computerName"],
          memoryMB: result.body.properties?.["memoryMB"],
          cpuCount: result.body.properties?.["cpuCount"],
          limitCpuForMigration: result.body.properties?.[
            "limitCpuForMigration"
          ] as LimitCpuForMigration,
          dynamicMemoryEnabled: result.body.properties?.[
            "dynamicMemoryEnabled"
          ] as DynamicMemoryEnabled,
          isCustomizable: result.body.properties?.[
            "isCustomizable"
          ] as IsCustomizable,
          dynamicMemoryMaxMB: result.body.properties?.["dynamicMemoryMaxMB"],
          dynamicMemoryMinMB: result.body.properties?.["dynamicMemoryMinMB"],
          isHighlyAvailable: result.body.properties?.[
            "isHighlyAvailable"
          ] as IsHighlyAvailable,
          generation: result.body.properties?.["generation"],
          networkInterfaces:
            result.body.properties?.["networkInterfaces"] === undefined
              ? result.body.properties?.["networkInterfaces"]
              : result.body.properties?.["networkInterfaces"].map((p) => ({
                  name: p["name"],
                  displayName: p["displayName"],
                  ipv4Addresses: p["ipv4Addresses"],
                  ipv6Addresses: p["ipv6Addresses"],
                  macAddress: p["macAddress"],
                  virtualNetworkId: p["virtualNetworkId"],
                  networkName: p["networkName"],
                  ipv4AddressType: p["ipv4AddressType"] as AllocationMethod,
                  ipv6AddressType: p["ipv6AddressType"] as AllocationMethod,
                  macAddressType: p["macAddressType"] as AllocationMethod,
                  nicId: p["nicId"],
                })),
          disks:
            result.body.properties?.["disks"] === undefined
              ? result.body.properties?.["disks"]
              : result.body.properties?.["disks"].map((p) => ({
                  name: p["name"],
                  displayName: p["displayName"],
                  diskId: p["diskId"],
                  diskSizeGB: p["diskSizeGB"],
                  maxDiskSizeGB: p["maxDiskSizeGB"],
                  bus: p["bus"],
                  lun: p["lun"],
                  busType: p["busType"],
                  vhdType: p["vhdType"],
                  volumeType: p["volumeType"],
                  vhdFormatType: p["vhdFormatType"],
                  templateDiskId: p["templateDiskId"],
                  storageQosPolicy: !p.storageQoSPolicy
                    ? undefined
                    : {
                        name: p.storageQoSPolicy?.["name"],
                        id: p.storageQoSPolicy?.["id"],
                      },
                  createDiffDisk: p["createDiffDisk"] as CreateDiffDisk,
                })),
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Onboards the ScVmm VM Template as an Azure VM Template resource. */
export function createOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualMachineTemplateName: string,
  resource: VirtualMachineTemplate,
  options: VirtualMachineTemplatesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<VirtualMachineTemplate>, VirtualMachineTemplate> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        subscriptionId,
        resourceGroupName,
        virtualMachineTemplateName,
        resource,
        options,
      ),
  }) as PollerLike<
    OperationState<VirtualMachineTemplate>,
    VirtualMachineTemplate
  >;
}

export function _updateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualMachineTemplateName: string,
  properties: VirtualMachineTemplateTagsUpdate,
  options: VirtualMachineTemplatesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | VirtualMachineTemplatesUpdate200Response
  | VirtualMachineTemplatesUpdate202Response
  | VirtualMachineTemplatesUpdateDefaultResponse
  | VirtualMachineTemplatesUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates/{virtualMachineTemplateName}",
      subscriptionId,
      resourceGroupName,
      virtualMachineTemplateName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: { tags: properties["tags"] },
    });
}

export async function _updateDeserialize(
  result:
    | VirtualMachineTemplatesUpdate200Response
    | VirtualMachineTemplatesUpdate202Response
    | VirtualMachineTemplatesUpdateDefaultResponse
    | VirtualMachineTemplatesUpdateLogicalResponse,
): Promise<VirtualMachineTemplate> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as VirtualMachineTemplatesUpdateLogicalResponse;
  return {
    tags: result.body["tags"],
    location: result.body["location"],
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
          inventoryItemId: result.body.properties?.["inventoryItemId"],
          uuid: result.body.properties?.["uuid"],
          vmmServerId: result.body.properties?.["vmmServerId"],
          osType: result.body.properties?.["osType"] as OsType,
          osName: result.body.properties?.["osName"],
          computerName: result.body.properties?.["computerName"],
          memoryMB: result.body.properties?.["memoryMB"],
          cpuCount: result.body.properties?.["cpuCount"],
          limitCpuForMigration: result.body.properties?.[
            "limitCpuForMigration"
          ] as LimitCpuForMigration,
          dynamicMemoryEnabled: result.body.properties?.[
            "dynamicMemoryEnabled"
          ] as DynamicMemoryEnabled,
          isCustomizable: result.body.properties?.[
            "isCustomizable"
          ] as IsCustomizable,
          dynamicMemoryMaxMB: result.body.properties?.["dynamicMemoryMaxMB"],
          dynamicMemoryMinMB: result.body.properties?.["dynamicMemoryMinMB"],
          isHighlyAvailable: result.body.properties?.[
            "isHighlyAvailable"
          ] as IsHighlyAvailable,
          generation: result.body.properties?.["generation"],
          networkInterfaces:
            result.body.properties?.["networkInterfaces"] === undefined
              ? result.body.properties?.["networkInterfaces"]
              : result.body.properties?.["networkInterfaces"].map((p) => ({
                  name: p["name"],
                  displayName: p["displayName"],
                  ipv4Addresses: p["ipv4Addresses"],
                  ipv6Addresses: p["ipv6Addresses"],
                  macAddress: p["macAddress"],
                  virtualNetworkId: p["virtualNetworkId"],
                  networkName: p["networkName"],
                  ipv4AddressType: p["ipv4AddressType"] as AllocationMethod,
                  ipv6AddressType: p["ipv6AddressType"] as AllocationMethod,
                  macAddressType: p["macAddressType"] as AllocationMethod,
                  nicId: p["nicId"],
                })),
          disks:
            result.body.properties?.["disks"] === undefined
              ? result.body.properties?.["disks"]
              : result.body.properties?.["disks"].map((p) => ({
                  name: p["name"],
                  displayName: p["displayName"],
                  diskId: p["diskId"],
                  diskSizeGB: p["diskSizeGB"],
                  maxDiskSizeGB: p["maxDiskSizeGB"],
                  bus: p["bus"],
                  lun: p["lun"],
                  busType: p["busType"],
                  vhdType: p["vhdType"],
                  volumeType: p["volumeType"],
                  vhdFormatType: p["vhdFormatType"],
                  templateDiskId: p["templateDiskId"],
                  storageQosPolicy: !p.storageQoSPolicy
                    ? undefined
                    : {
                        name: p.storageQoSPolicy?.["name"],
                        id: p.storageQoSPolicy?.["id"],
                      },
                  createDiffDisk: p["createDiffDisk"] as CreateDiffDisk,
                })),
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Updates the VirtualMachineTemplate resource. */
export function update(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualMachineTemplateName: string,
  properties: VirtualMachineTemplateTagsUpdate,
  options: VirtualMachineTemplatesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<VirtualMachineTemplate>, VirtualMachineTemplate> {
  return getLongRunningPoller(context, _updateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(
        context,
        subscriptionId,
        resourceGroupName,
        virtualMachineTemplateName,
        properties,
        options,
      ),
  }) as PollerLike<
    OperationState<VirtualMachineTemplate>,
    VirtualMachineTemplate
  >;
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualMachineTemplateName: string,
  options: VirtualMachineTemplatesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | VirtualMachineTemplatesDelete202Response
  | VirtualMachineTemplatesDelete204Response
  | VirtualMachineTemplatesDeleteDefaultResponse
  | VirtualMachineTemplatesDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates/{virtualMachineTemplateName}",
      subscriptionId,
      resourceGroupName,
      virtualMachineTemplateName,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { force: options?.force },
    });
}

export async function _$deleteDeserialize(
  result:
    | VirtualMachineTemplatesDelete202Response
    | VirtualMachineTemplatesDelete204Response
    | VirtualMachineTemplatesDeleteDefaultResponse
    | VirtualMachineTemplatesDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as VirtualMachineTemplatesDeleteLogicalResponse;
  return;
}

/** Deregisters the ScVmm VM Template from Azure. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualMachineTemplateName: string,
  options: VirtualMachineTemplatesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(
        context,
        subscriptionId,
        resourceGroupName,
        virtualMachineTemplateName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}

export function _listByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: VirtualMachineTemplatesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | VirtualMachineTemplatesListByResourceGroup200Response
  | VirtualMachineTemplatesListByResourceGroupDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByResourceGroupDeserialize(
  result:
    | VirtualMachineTemplatesListByResourceGroup200Response
    | VirtualMachineTemplatesListByResourceGroupDefaultResponse,
): Promise<VirtualMachineTemplateListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      tags: p["tags"],
      location: p["location"],
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
            inventoryItemId: p.properties?.["inventoryItemId"],
            uuid: p.properties?.["uuid"],
            vmmServerId: p.properties?.["vmmServerId"],
            osType: p.properties?.["osType"] as OsType,
            osName: p.properties?.["osName"],
            computerName: p.properties?.["computerName"],
            memoryMB: p.properties?.["memoryMB"],
            cpuCount: p.properties?.["cpuCount"],
            limitCpuForMigration: p.properties?.[
              "limitCpuForMigration"
            ] as LimitCpuForMigration,
            dynamicMemoryEnabled: p.properties?.[
              "dynamicMemoryEnabled"
            ] as DynamicMemoryEnabled,
            isCustomizable: p.properties?.["isCustomizable"] as IsCustomizable,
            dynamicMemoryMaxMB: p.properties?.["dynamicMemoryMaxMB"],
            dynamicMemoryMinMB: p.properties?.["dynamicMemoryMinMB"],
            isHighlyAvailable: p.properties?.[
              "isHighlyAvailable"
            ] as IsHighlyAvailable,
            generation: p.properties?.["generation"],
            networkInterfaces:
              p.properties?.["networkInterfaces"] === undefined
                ? p.properties?.["networkInterfaces"]
                : p.properties?.["networkInterfaces"].map((p) => ({
                    name: p["name"],
                    displayName: p["displayName"],
                    ipv4Addresses: p["ipv4Addresses"],
                    ipv6Addresses: p["ipv6Addresses"],
                    macAddress: p["macAddress"],
                    virtualNetworkId: p["virtualNetworkId"],
                    networkName: p["networkName"],
                    ipv4AddressType: p["ipv4AddressType"] as AllocationMethod,
                    ipv6AddressType: p["ipv6AddressType"] as AllocationMethod,
                    macAddressType: p["macAddressType"] as AllocationMethod,
                    nicId: p["nicId"],
                  })),
            disks:
              p.properties?.["disks"] === undefined
                ? p.properties?.["disks"]
                : p.properties?.["disks"].map((p) => ({
                    name: p["name"],
                    displayName: p["displayName"],
                    diskId: p["diskId"],
                    diskSizeGB: p["diskSizeGB"],
                    maxDiskSizeGB: p["maxDiskSizeGB"],
                    bus: p["bus"],
                    lun: p["lun"],
                    busType: p["busType"],
                    vhdType: p["vhdType"],
                    volumeType: p["volumeType"],
                    vhdFormatType: p["vhdFormatType"],
                    templateDiskId: p["templateDiskId"],
                    storageQosPolicy: !p.storageQoSPolicy
                      ? undefined
                      : {
                          name: p.storageQoSPolicy?.["name"],
                          id: p.storageQoSPolicy?.["id"],
                        },
                    createDiffDisk: p["createDiffDisk"] as CreateDiffDisk,
                  })),
            provisioningState: p.properties?.["provisioningState"],
          },
      extendedLocation: {
        type: p.extendedLocation["type"],
        name: p.extendedLocation["name"],
      },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List of VirtualMachineTemplates in a resource group. */
export function listByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: VirtualMachineTemplatesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<VirtualMachineTemplate> {
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

export function _listBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: VirtualMachineTemplatesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | VirtualMachineTemplatesListBySubscription200Response
  | VirtualMachineTemplatesListBySubscriptionDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/virtualMachineTemplates",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listBySubscriptionDeserialize(
  result:
    | VirtualMachineTemplatesListBySubscription200Response
    | VirtualMachineTemplatesListBySubscriptionDefaultResponse,
): Promise<VirtualMachineTemplateListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      tags: p["tags"],
      location: p["location"],
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
            inventoryItemId: p.properties?.["inventoryItemId"],
            uuid: p.properties?.["uuid"],
            vmmServerId: p.properties?.["vmmServerId"],
            osType: p.properties?.["osType"] as OsType,
            osName: p.properties?.["osName"],
            computerName: p.properties?.["computerName"],
            memoryMB: p.properties?.["memoryMB"],
            cpuCount: p.properties?.["cpuCount"],
            limitCpuForMigration: p.properties?.[
              "limitCpuForMigration"
            ] as LimitCpuForMigration,
            dynamicMemoryEnabled: p.properties?.[
              "dynamicMemoryEnabled"
            ] as DynamicMemoryEnabled,
            isCustomizable: p.properties?.["isCustomizable"] as IsCustomizable,
            dynamicMemoryMaxMB: p.properties?.["dynamicMemoryMaxMB"],
            dynamicMemoryMinMB: p.properties?.["dynamicMemoryMinMB"],
            isHighlyAvailable: p.properties?.[
              "isHighlyAvailable"
            ] as IsHighlyAvailable,
            generation: p.properties?.["generation"],
            networkInterfaces:
              p.properties?.["networkInterfaces"] === undefined
                ? p.properties?.["networkInterfaces"]
                : p.properties?.["networkInterfaces"].map((p) => ({
                    name: p["name"],
                    displayName: p["displayName"],
                    ipv4Addresses: p["ipv4Addresses"],
                    ipv6Addresses: p["ipv6Addresses"],
                    macAddress: p["macAddress"],
                    virtualNetworkId: p["virtualNetworkId"],
                    networkName: p["networkName"],
                    ipv4AddressType: p["ipv4AddressType"] as AllocationMethod,
                    ipv6AddressType: p["ipv6AddressType"] as AllocationMethod,
                    macAddressType: p["macAddressType"] as AllocationMethod,
                    nicId: p["nicId"],
                  })),
            disks:
              p.properties?.["disks"] === undefined
                ? p.properties?.["disks"]
                : p.properties?.["disks"].map((p) => ({
                    name: p["name"],
                    displayName: p["displayName"],
                    diskId: p["diskId"],
                    diskSizeGB: p["diskSizeGB"],
                    maxDiskSizeGB: p["maxDiskSizeGB"],
                    bus: p["bus"],
                    lun: p["lun"],
                    busType: p["busType"],
                    vhdType: p["vhdType"],
                    volumeType: p["volumeType"],
                    vhdFormatType: p["vhdFormatType"],
                    templateDiskId: p["templateDiskId"],
                    storageQosPolicy: !p.storageQoSPolicy
                      ? undefined
                      : {
                          name: p.storageQoSPolicy?.["name"],
                          id: p.storageQoSPolicy?.["id"],
                        },
                    createDiffDisk: p["createDiffDisk"] as CreateDiffDisk,
                  })),
            provisioningState: p.properties?.["provisioningState"],
          },
      extendedLocation: {
        type: p.extendedLocation["type"],
        name: p.extendedLocation["name"],
      },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List of VirtualMachineTemplates in a subscription. */
export function listBySubscription(
  context: Client,
  subscriptionId: string,
  options: VirtualMachineTemplatesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<VirtualMachineTemplate> {
  return buildPagedAsyncIterator(
    context,
    () => _listBySubscriptionSend(context, subscriptionId, options),
    _listBySubscriptionDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
