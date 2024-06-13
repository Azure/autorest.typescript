// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  VirtualMachineInstance,
  VirtualMachineInstanceUpdate,
  VirtualMachineInstanceListResult,
  StopVirtualMachineOptions,
  VirtualMachineCreateCheckpoint,
  VirtualMachineDeleteCheckpoint,
  VirtualMachineRestoreCheckpoint,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  ScVmmContext as Client,
  VirtualMachineInstancesCreateCheckpoint202Response,
  VirtualMachineInstancesCreateCheckpointDefaultResponse,
  VirtualMachineInstancesCreateCheckpointLogicalResponse,
  VirtualMachineInstancesCreateOrUpdate200Response,
  VirtualMachineInstancesCreateOrUpdate201Response,
  VirtualMachineInstancesCreateOrUpdateDefaultResponse,
  VirtualMachineInstancesCreateOrUpdateLogicalResponse,
  VirtualMachineInstancesDelete202Response,
  VirtualMachineInstancesDelete204Response,
  VirtualMachineInstancesDeleteCheckpoint202Response,
  VirtualMachineInstancesDeleteCheckpointDefaultResponse,
  VirtualMachineInstancesDeleteCheckpointLogicalResponse,
  VirtualMachineInstancesDeleteDefaultResponse,
  VirtualMachineInstancesDeleteLogicalResponse,
  VirtualMachineInstancesGet200Response,
  VirtualMachineInstancesGetDefaultResponse,
  VirtualMachineInstancesList200Response,
  VirtualMachineInstancesListDefaultResponse,
  VirtualMachineInstancesRestart202Response,
  VirtualMachineInstancesRestartDefaultResponse,
  VirtualMachineInstancesRestartLogicalResponse,
  VirtualMachineInstancesRestoreCheckpoint202Response,
  VirtualMachineInstancesRestoreCheckpointDefaultResponse,
  VirtualMachineInstancesRestoreCheckpointLogicalResponse,
  VirtualMachineInstancesStart202Response,
  VirtualMachineInstancesStartDefaultResponse,
  VirtualMachineInstancesStartLogicalResponse,
  VirtualMachineInstancesStop202Response,
  VirtualMachineInstancesStopDefaultResponse,
  VirtualMachineInstancesStopLogicalResponse,
  VirtualMachineInstancesUpdate200Response,
  VirtualMachineInstancesUpdate202Response,
  VirtualMachineInstancesUpdateDefaultResponse,
  VirtualMachineInstancesUpdateLogicalResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  VirtualMachineInstancesGetOptionalParams,
  VirtualMachineInstancesCreateOrUpdateOptionalParams,
  VirtualMachineInstancesUpdateOptionalParams,
  VirtualMachineInstancesDeleteOptionalParams,
  VirtualMachineInstancesListOptionalParams,
  VirtualMachineInstancesStopOptionalParams,
  VirtualMachineInstancesStartOptionalParams,
  VirtualMachineInstancesRestartOptionalParams,
  VirtualMachineInstancesCreateCheckpointOptionalParams,
  VirtualMachineInstancesDeleteCheckpointOptionalParams,
  VirtualMachineInstancesRestoreCheckpointOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  resourceUri: string,
  options: VirtualMachineInstancesGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | VirtualMachineInstancesGet200Response
  | VirtualMachineInstancesGetDefaultResponse
> {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default",
      resourceUri,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result:
    | VirtualMachineInstancesGet200Response
    | VirtualMachineInstancesGetDefaultResponse,
): Promise<VirtualMachineInstance> {
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
          availabilitySets:
            result.body.properties?.["availabilitySets"] === undefined
              ? result.body.properties?.["availabilitySets"]
              : result.body.properties?.["availabilitySets"].map((p) => ({
                  id: p["id"],
                  name: p["name"],
                })),
          osProfile: !result.body.properties?.osProfile
            ? undefined
            : {
                adminPassword:
                  result.body.properties?.osProfile?.["adminPassword"],
                computerName:
                  result.body.properties?.osProfile?.["computerName"],
                osType: result.body.properties?.osProfile?.["osType"],
                osSku: result.body.properties?.osProfile?.["osSku"],
                osVersion: result.body.properties?.osProfile?.["osVersion"],
              },
          hardwareProfile: !result.body.properties?.hardwareProfile
            ? undefined
            : {
                memoryMB: result.body.properties?.hardwareProfile?.["memoryMB"],
                cpuCount: result.body.properties?.hardwareProfile?.["cpuCount"],
                limitCpuForMigration:
                  result.body.properties?.hardwareProfile?.[
                    "limitCpuForMigration"
                  ],
                dynamicMemoryEnabled:
                  result.body.properties?.hardwareProfile?.[
                    "dynamicMemoryEnabled"
                  ],
                dynamicMemoryMaxMB:
                  result.body.properties?.hardwareProfile?.[
                    "dynamicMemoryMaxMB"
                  ],
                dynamicMemoryMinMB:
                  result.body.properties?.hardwareProfile?.[
                    "dynamicMemoryMinMB"
                  ],
                isHighlyAvailable:
                  result.body.properties?.hardwareProfile?.[
                    "isHighlyAvailable"
                  ],
              },
          networkProfile: !result.body.properties?.networkProfile
            ? undefined
            : {
                networkInterfaces:
                  result.body.properties?.networkProfile?.[
                    "networkInterfaces"
                  ] === undefined
                    ? result.body.properties?.networkProfile?.[
                        "networkInterfaces"
                      ]
                    : result.body.properties?.networkProfile?.[
                        "networkInterfaces"
                      ].map((p) => ({
                        name: p["name"],
                        displayName: p["displayName"],
                        ipv4Addresses: p["ipv4Addresses"],
                        ipv6Addresses: p["ipv6Addresses"],
                        macAddress: p["macAddress"],
                        virtualNetworkId: p["virtualNetworkId"],
                        networkName: p["networkName"],
                        ipv4AddressType: p["ipv4AddressType"],
                        ipv6AddressType: p["ipv6AddressType"],
                        macAddressType: p["macAddressType"],
                        nicId: p["nicId"],
                      })),
              },
          storageProfile: !result.body.properties?.storageProfile
            ? undefined
            : {
                disks:
                  result.body.properties?.storageProfile?.["disks"] ===
                  undefined
                    ? result.body.properties?.storageProfile?.["disks"]
                    : result.body.properties?.storageProfile?.["disks"].map(
                        (p) => ({
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
                          createDiffDisk: p["createDiffDisk"],
                        }),
                      ),
              },
          infrastructureProfile: !result.body.properties?.infrastructureProfile
            ? undefined
            : {
                inventoryItemId:
                  result.body.properties?.infrastructureProfile?.[
                    "inventoryItemId"
                  ],
                vmmServerId:
                  result.body.properties?.infrastructureProfile?.[
                    "vmmServerId"
                  ],
                cloudId:
                  result.body.properties?.infrastructureProfile?.["cloudId"],
                templateId:
                  result.body.properties?.infrastructureProfile?.["templateId"],
                vmName:
                  result.body.properties?.infrastructureProfile?.["vmName"],
                uuid: result.body.properties?.infrastructureProfile?.["uuid"],
                lastRestoredVmCheckpoint: !result.body.properties
                  ?.infrastructureProfile?.lastRestoredVMCheckpoint
                  ? undefined
                  : {
                      parentCheckpointId:
                        result.body.properties?.infrastructureProfile
                          ?.lastRestoredVMCheckpoint?.["parentCheckpointID"],
                      checkpointId:
                        result.body.properties?.infrastructureProfile
                          ?.lastRestoredVMCheckpoint?.["checkpointID"],
                      name: result.body.properties?.infrastructureProfile
                        ?.lastRestoredVMCheckpoint?.["name"],
                      description:
                        result.body.properties?.infrastructureProfile
                          ?.lastRestoredVMCheckpoint?.["description"],
                    },
                checkpoints:
                  result.body.properties?.infrastructureProfile?.[
                    "checkpoints"
                  ] === undefined
                    ? result.body.properties?.infrastructureProfile?.[
                        "checkpoints"
                      ]
                    : result.body.properties?.infrastructureProfile?.[
                        "checkpoints"
                      ].map((p) => ({
                        parentCheckpointId: p["parentCheckpointID"],
                        checkpointId: p["checkpointID"],
                        name: p["name"],
                        description: p["description"],
                      })),
                checkpointType:
                  result.body.properties?.infrastructureProfile?.[
                    "checkpointType"
                  ],
                generation:
                  result.body.properties?.infrastructureProfile?.["generation"],
                biosGuid:
                  result.body.properties?.infrastructureProfile?.["biosGuid"],
              },
          powerState: result.body.properties?.["powerState"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Retrieves information about a virtual machine instance. */
export async function get(
  context: Client,
  resourceUri: string,
  options: VirtualMachineInstancesGetOptionalParams = { requestOptions: {} },
): Promise<VirtualMachineInstance> {
  const result = await _getSend(context, resourceUri, options);
  return _getDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  resourceUri: string,
  resource: VirtualMachineInstance,
  options: VirtualMachineInstancesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | VirtualMachineInstancesCreateOrUpdate200Response
  | VirtualMachineInstancesCreateOrUpdate201Response
  | VirtualMachineInstancesCreateOrUpdateDefaultResponse
  | VirtualMachineInstancesCreateOrUpdateLogicalResponse
> {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default",
      resourceUri,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? undefined
          : {
              availabilitySets:
                resource.properties?.["availabilitySets"] === undefined
                  ? resource.properties?.["availabilitySets"]
                  : resource.properties?.["availabilitySets"].map((p) => ({
                      id: p["id"],
                      name: p["name"],
                    })),
              osProfile: !resource.properties?.osProfile
                ? undefined
                : {
                    adminPassword:
                      resource.properties?.osProfile?.["adminPassword"],
                    computerName:
                      resource.properties?.osProfile?.["computerName"],
                  },
              hardwareProfile: !resource.properties?.hardwareProfile
                ? undefined
                : {
                    memoryMB:
                      resource.properties?.hardwareProfile?.["memoryMB"],
                    cpuCount:
                      resource.properties?.hardwareProfile?.["cpuCount"],
                    limitCpuForMigration:
                      resource.properties?.hardwareProfile?.[
                        "limitCpuForMigration"
                      ],
                    dynamicMemoryEnabled:
                      resource.properties?.hardwareProfile?.[
                        "dynamicMemoryEnabled"
                      ],
                    dynamicMemoryMaxMB:
                      resource.properties?.hardwareProfile?.[
                        "dynamicMemoryMaxMB"
                      ],
                    dynamicMemoryMinMB:
                      resource.properties?.hardwareProfile?.[
                        "dynamicMemoryMinMB"
                      ],
                  },
              networkProfile: !resource.properties?.networkProfile
                ? undefined
                : {
                    networkInterfaces:
                      resource.properties?.networkProfile?.[
                        "networkInterfaces"
                      ] === undefined
                        ? resource.properties?.networkProfile?.[
                            "networkInterfaces"
                          ]
                        : resource.properties?.networkProfile?.[
                            "networkInterfaces"
                          ].map((p) => ({
                            name: p["name"],
                            macAddress: p["macAddress"],
                            virtualNetworkId: p["virtualNetworkId"],
                            ipv4AddressType: p["ipv4AddressType"],
                            ipv6AddressType: p["ipv6AddressType"],
                            macAddressType: p["macAddressType"],
                            nicId: p["nicId"],
                          })),
                  },
              storageProfile: !resource.properties?.storageProfile
                ? undefined
                : {
                    disks:
                      resource.properties?.storageProfile?.["disks"] ===
                      undefined
                        ? resource.properties?.storageProfile?.["disks"]
                        : resource.properties?.storageProfile?.["disks"].map(
                            (p) => ({
                              name: p["name"],
                              diskId: p["diskId"],
                              diskSizeGB: p["diskSizeGB"],
                              bus: p["bus"],
                              lun: p["lun"],
                              busType: p["busType"],
                              vhdType: p["vhdType"],
                              templateDiskId: p["templateDiskId"],
                              storageQoSPolicy: !p.storageQosPolicy
                                ? undefined
                                : {
                                    name: p.storageQosPolicy?.["name"],
                                    id: p.storageQosPolicy?.["id"],
                                  },
                              createDiffDisk: p["createDiffDisk"],
                            }),
                          ),
                  },
              infrastructureProfile: !resource.properties?.infrastructureProfile
                ? undefined
                : {
                    inventoryItemId:
                      resource.properties?.infrastructureProfile?.[
                        "inventoryItemId"
                      ],
                    vmmServerId:
                      resource.properties?.infrastructureProfile?.[
                        "vmmServerId"
                      ],
                    cloudId:
                      resource.properties?.infrastructureProfile?.["cloudId"],
                    templateId:
                      resource.properties?.infrastructureProfile?.[
                        "templateId"
                      ],
                    vmName:
                      resource.properties?.infrastructureProfile?.["vmName"],
                    uuid: resource.properties?.infrastructureProfile?.["uuid"],
                    checkpointType:
                      resource.properties?.infrastructureProfile?.[
                        "checkpointType"
                      ],
                    generation:
                      resource.properties?.infrastructureProfile?.[
                        "generation"
                      ],
                    biosGuid:
                      resource.properties?.infrastructureProfile?.["biosGuid"],
                  },
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
    | VirtualMachineInstancesCreateOrUpdate200Response
    | VirtualMachineInstancesCreateOrUpdate201Response
    | VirtualMachineInstancesCreateOrUpdateDefaultResponse
    | VirtualMachineInstancesCreateOrUpdateLogicalResponse,
): Promise<VirtualMachineInstance> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as VirtualMachineInstancesCreateOrUpdateLogicalResponse;
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
          availabilitySets:
            result.body.properties?.["availabilitySets"] === undefined
              ? result.body.properties?.["availabilitySets"]
              : result.body.properties?.["availabilitySets"].map((p) => ({
                  id: p["id"],
                  name: p["name"],
                })),
          osProfile: !result.body.properties?.osProfile
            ? undefined
            : {
                adminPassword:
                  result.body.properties?.osProfile?.["adminPassword"],
                computerName:
                  result.body.properties?.osProfile?.["computerName"],
                osType: result.body.properties?.osProfile?.["osType"],
                osSku: result.body.properties?.osProfile?.["osSku"],
                osVersion: result.body.properties?.osProfile?.["osVersion"],
              },
          hardwareProfile: !result.body.properties?.hardwareProfile
            ? undefined
            : {
                memoryMB: result.body.properties?.hardwareProfile?.["memoryMB"],
                cpuCount: result.body.properties?.hardwareProfile?.["cpuCount"],
                limitCpuForMigration:
                  result.body.properties?.hardwareProfile?.[
                    "limitCpuForMigration"
                  ],
                dynamicMemoryEnabled:
                  result.body.properties?.hardwareProfile?.[
                    "dynamicMemoryEnabled"
                  ],
                dynamicMemoryMaxMB:
                  result.body.properties?.hardwareProfile?.[
                    "dynamicMemoryMaxMB"
                  ],
                dynamicMemoryMinMB:
                  result.body.properties?.hardwareProfile?.[
                    "dynamicMemoryMinMB"
                  ],
                isHighlyAvailable:
                  result.body.properties?.hardwareProfile?.[
                    "isHighlyAvailable"
                  ],
              },
          networkProfile: !result.body.properties?.networkProfile
            ? undefined
            : {
                networkInterfaces:
                  result.body.properties?.networkProfile?.[
                    "networkInterfaces"
                  ] === undefined
                    ? result.body.properties?.networkProfile?.[
                        "networkInterfaces"
                      ]
                    : result.body.properties?.networkProfile?.[
                        "networkInterfaces"
                      ].map((p) => ({
                        name: p["name"],
                        displayName: p["displayName"],
                        ipv4Addresses: p["ipv4Addresses"],
                        ipv6Addresses: p["ipv6Addresses"],
                        macAddress: p["macAddress"],
                        virtualNetworkId: p["virtualNetworkId"],
                        networkName: p["networkName"],
                        ipv4AddressType: p["ipv4AddressType"],
                        ipv6AddressType: p["ipv6AddressType"],
                        macAddressType: p["macAddressType"],
                        nicId: p["nicId"],
                      })),
              },
          storageProfile: !result.body.properties?.storageProfile
            ? undefined
            : {
                disks:
                  result.body.properties?.storageProfile?.["disks"] ===
                  undefined
                    ? result.body.properties?.storageProfile?.["disks"]
                    : result.body.properties?.storageProfile?.["disks"].map(
                        (p) => ({
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
                          createDiffDisk: p["createDiffDisk"],
                        }),
                      ),
              },
          infrastructureProfile: !result.body.properties?.infrastructureProfile
            ? undefined
            : {
                inventoryItemId:
                  result.body.properties?.infrastructureProfile?.[
                    "inventoryItemId"
                  ],
                vmmServerId:
                  result.body.properties?.infrastructureProfile?.[
                    "vmmServerId"
                  ],
                cloudId:
                  result.body.properties?.infrastructureProfile?.["cloudId"],
                templateId:
                  result.body.properties?.infrastructureProfile?.["templateId"],
                vmName:
                  result.body.properties?.infrastructureProfile?.["vmName"],
                uuid: result.body.properties?.infrastructureProfile?.["uuid"],
                lastRestoredVmCheckpoint: !result.body.properties
                  ?.infrastructureProfile?.lastRestoredVMCheckpoint
                  ? undefined
                  : {
                      parentCheckpointId:
                        result.body.properties?.infrastructureProfile
                          ?.lastRestoredVMCheckpoint?.["parentCheckpointID"],
                      checkpointId:
                        result.body.properties?.infrastructureProfile
                          ?.lastRestoredVMCheckpoint?.["checkpointID"],
                      name: result.body.properties?.infrastructureProfile
                        ?.lastRestoredVMCheckpoint?.["name"],
                      description:
                        result.body.properties?.infrastructureProfile
                          ?.lastRestoredVMCheckpoint?.["description"],
                    },
                checkpoints:
                  result.body.properties?.infrastructureProfile?.[
                    "checkpoints"
                  ] === undefined
                    ? result.body.properties?.infrastructureProfile?.[
                        "checkpoints"
                      ]
                    : result.body.properties?.infrastructureProfile?.[
                        "checkpoints"
                      ].map((p) => ({
                        parentCheckpointId: p["parentCheckpointID"],
                        checkpointId: p["checkpointID"],
                        name: p["name"],
                        description: p["description"],
                      })),
                checkpointType:
                  result.body.properties?.infrastructureProfile?.[
                    "checkpointType"
                  ],
                generation:
                  result.body.properties?.infrastructureProfile?.["generation"],
                biosGuid:
                  result.body.properties?.infrastructureProfile?.["biosGuid"],
              },
          powerState: result.body.properties?.["powerState"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** The operation to create or update a virtual machine instance. Please note some properties can be set only during virtual machine instance creation. */
export function createOrUpdate(
  context: Client,
  resourceUri: string,
  resource: VirtualMachineInstance,
  options: VirtualMachineInstancesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<VirtualMachineInstance>, VirtualMachineInstance> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(context, resourceUri, resource, options),
  }) as PollerLike<
    OperationState<VirtualMachineInstance>,
    VirtualMachineInstance
  >;
}

export function _updateSend(
  context: Client,
  resourceUri: string,
  properties: VirtualMachineInstanceUpdate,
  options: VirtualMachineInstancesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | VirtualMachineInstancesUpdate200Response
  | VirtualMachineInstancesUpdate202Response
  | VirtualMachineInstancesUpdateDefaultResponse
  | VirtualMachineInstancesUpdateLogicalResponse
> {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default",
      resourceUri,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !properties.properties
          ? undefined
          : {
              availabilitySets:
                properties.properties?.["availabilitySets"] === undefined
                  ? properties.properties?.["availabilitySets"]
                  : properties.properties?.["availabilitySets"].map((p) => ({
                      id: p["id"],
                      name: p["name"],
                    })),
              hardwareProfile: !properties.properties?.hardwareProfile
                ? undefined
                : {
                    memoryMB:
                      properties.properties?.hardwareProfile?.["memoryMB"],
                    cpuCount:
                      properties.properties?.hardwareProfile?.["cpuCount"],
                    limitCpuForMigration:
                      properties.properties?.hardwareProfile?.[
                        "limitCpuForMigration"
                      ],
                    dynamicMemoryEnabled:
                      properties.properties?.hardwareProfile?.[
                        "dynamicMemoryEnabled"
                      ],
                    dynamicMemoryMaxMB:
                      properties.properties?.hardwareProfile?.[
                        "dynamicMemoryMaxMB"
                      ],
                    dynamicMemoryMinMB:
                      properties.properties?.hardwareProfile?.[
                        "dynamicMemoryMinMB"
                      ],
                  },
              networkProfile: !properties.properties?.networkProfile
                ? undefined
                : {
                    networkInterfaces:
                      properties.properties?.networkProfile?.[
                        "networkInterfaces"
                      ] === undefined
                        ? properties.properties?.networkProfile?.[
                            "networkInterfaces"
                          ]
                        : properties.properties?.networkProfile?.[
                            "networkInterfaces"
                          ].map((p) => ({
                            name: p["name"],
                            macAddress: p["macAddress"],
                            virtualNetworkId: p["virtualNetworkId"],
                            ipv4AddressType: p["ipv4AddressType"],
                            ipv6AddressType: p["ipv6AddressType"],
                            macAddressType: p["macAddressType"],
                            nicId: p["nicId"],
                          })),
                  },
              storageProfile: !properties.properties?.storageProfile
                ? undefined
                : {
                    disks:
                      properties.properties?.storageProfile?.["disks"] ===
                      undefined
                        ? properties.properties?.storageProfile?.["disks"]
                        : properties.properties?.storageProfile?.["disks"].map(
                            (p) => ({
                              name: p["name"],
                              diskId: p["diskId"],
                              diskSizeGB: p["diskSizeGB"],
                              bus: p["bus"],
                              lun: p["lun"],
                              busType: p["busType"],
                              vhdType: p["vhdType"],
                              storageQoSPolicy: !p.storageQosPolicy
                                ? undefined
                                : {
                                    name: p.storageQosPolicy?.["name"],
                                    id: p.storageQosPolicy?.["id"],
                                  },
                            }),
                          ),
                  },
              infrastructureProfile: !properties.properties
                ?.infrastructureProfile
                ? undefined
                : {
                    checkpointType:
                      properties.properties?.infrastructureProfile?.[
                        "checkpointType"
                      ],
                  },
            },
      },
    });
}

export async function _updateDeserialize(
  result:
    | VirtualMachineInstancesUpdate200Response
    | VirtualMachineInstancesUpdate202Response
    | VirtualMachineInstancesUpdateDefaultResponse
    | VirtualMachineInstancesUpdateLogicalResponse,
): Promise<VirtualMachineInstance> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as VirtualMachineInstancesUpdateLogicalResponse;
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
          availabilitySets:
            result.body.properties?.["availabilitySets"] === undefined
              ? result.body.properties?.["availabilitySets"]
              : result.body.properties?.["availabilitySets"].map((p) => ({
                  id: p["id"],
                  name: p["name"],
                })),
          osProfile: !result.body.properties?.osProfile
            ? undefined
            : {
                adminPassword:
                  result.body.properties?.osProfile?.["adminPassword"],
                computerName:
                  result.body.properties?.osProfile?.["computerName"],
                osType: result.body.properties?.osProfile?.["osType"],
                osSku: result.body.properties?.osProfile?.["osSku"],
                osVersion: result.body.properties?.osProfile?.["osVersion"],
              },
          hardwareProfile: !result.body.properties?.hardwareProfile
            ? undefined
            : {
                memoryMB: result.body.properties?.hardwareProfile?.["memoryMB"],
                cpuCount: result.body.properties?.hardwareProfile?.["cpuCount"],
                limitCpuForMigration:
                  result.body.properties?.hardwareProfile?.[
                    "limitCpuForMigration"
                  ],
                dynamicMemoryEnabled:
                  result.body.properties?.hardwareProfile?.[
                    "dynamicMemoryEnabled"
                  ],
                dynamicMemoryMaxMB:
                  result.body.properties?.hardwareProfile?.[
                    "dynamicMemoryMaxMB"
                  ],
                dynamicMemoryMinMB:
                  result.body.properties?.hardwareProfile?.[
                    "dynamicMemoryMinMB"
                  ],
                isHighlyAvailable:
                  result.body.properties?.hardwareProfile?.[
                    "isHighlyAvailable"
                  ],
              },
          networkProfile: !result.body.properties?.networkProfile
            ? undefined
            : {
                networkInterfaces:
                  result.body.properties?.networkProfile?.[
                    "networkInterfaces"
                  ] === undefined
                    ? result.body.properties?.networkProfile?.[
                        "networkInterfaces"
                      ]
                    : result.body.properties?.networkProfile?.[
                        "networkInterfaces"
                      ].map((p) => ({
                        name: p["name"],
                        displayName: p["displayName"],
                        ipv4Addresses: p["ipv4Addresses"],
                        ipv6Addresses: p["ipv6Addresses"],
                        macAddress: p["macAddress"],
                        virtualNetworkId: p["virtualNetworkId"],
                        networkName: p["networkName"],
                        ipv4AddressType: p["ipv4AddressType"],
                        ipv6AddressType: p["ipv6AddressType"],
                        macAddressType: p["macAddressType"],
                        nicId: p["nicId"],
                      })),
              },
          storageProfile: !result.body.properties?.storageProfile
            ? undefined
            : {
                disks:
                  result.body.properties?.storageProfile?.["disks"] ===
                  undefined
                    ? result.body.properties?.storageProfile?.["disks"]
                    : result.body.properties?.storageProfile?.["disks"].map(
                        (p) => ({
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
                          createDiffDisk: p["createDiffDisk"],
                        }),
                      ),
              },
          infrastructureProfile: !result.body.properties?.infrastructureProfile
            ? undefined
            : {
                inventoryItemId:
                  result.body.properties?.infrastructureProfile?.[
                    "inventoryItemId"
                  ],
                vmmServerId:
                  result.body.properties?.infrastructureProfile?.[
                    "vmmServerId"
                  ],
                cloudId:
                  result.body.properties?.infrastructureProfile?.["cloudId"],
                templateId:
                  result.body.properties?.infrastructureProfile?.["templateId"],
                vmName:
                  result.body.properties?.infrastructureProfile?.["vmName"],
                uuid: result.body.properties?.infrastructureProfile?.["uuid"],
                lastRestoredVmCheckpoint: !result.body.properties
                  ?.infrastructureProfile?.lastRestoredVMCheckpoint
                  ? undefined
                  : {
                      parentCheckpointId:
                        result.body.properties?.infrastructureProfile
                          ?.lastRestoredVMCheckpoint?.["parentCheckpointID"],
                      checkpointId:
                        result.body.properties?.infrastructureProfile
                          ?.lastRestoredVMCheckpoint?.["checkpointID"],
                      name: result.body.properties?.infrastructureProfile
                        ?.lastRestoredVMCheckpoint?.["name"],
                      description:
                        result.body.properties?.infrastructureProfile
                          ?.lastRestoredVMCheckpoint?.["description"],
                    },
                checkpoints:
                  result.body.properties?.infrastructureProfile?.[
                    "checkpoints"
                  ] === undefined
                    ? result.body.properties?.infrastructureProfile?.[
                        "checkpoints"
                      ]
                    : result.body.properties?.infrastructureProfile?.[
                        "checkpoints"
                      ].map((p) => ({
                        parentCheckpointId: p["parentCheckpointID"],
                        checkpointId: p["checkpointID"],
                        name: p["name"],
                        description: p["description"],
                      })),
                checkpointType:
                  result.body.properties?.infrastructureProfile?.[
                    "checkpointType"
                  ],
                generation:
                  result.body.properties?.infrastructureProfile?.["generation"],
                biosGuid:
                  result.body.properties?.infrastructureProfile?.["biosGuid"],
              },
          powerState: result.body.properties?.["powerState"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** The operation to update a virtual machine instance. */
export function update(
  context: Client,
  resourceUri: string,
  properties: VirtualMachineInstanceUpdate,
  options: VirtualMachineInstancesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<VirtualMachineInstance>, VirtualMachineInstance> {
  return getLongRunningPoller(context, _updateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(context, resourceUri, properties, options),
  }) as PollerLike<
    OperationState<VirtualMachineInstance>,
    VirtualMachineInstance
  >;
}

export function _$deleteSend(
  context: Client,
  resourceUri: string,
  options: VirtualMachineInstancesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | VirtualMachineInstancesDelete202Response
  | VirtualMachineInstancesDelete204Response
  | VirtualMachineInstancesDeleteDefaultResponse
  | VirtualMachineInstancesDeleteLogicalResponse
> {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default",
      resourceUri,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        force: options?.force,
        deleteFromHost: options?.deleteFromHost,
      },
    });
}

export async function _$deleteDeserialize(
  result:
    | VirtualMachineInstancesDelete202Response
    | VirtualMachineInstancesDelete204Response
    | VirtualMachineInstancesDeleteDefaultResponse
    | VirtualMachineInstancesDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as VirtualMachineInstancesDeleteLogicalResponse;
  return;
}

/** The operation to delete a virtual machine instance. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  resourceUri: string,
  options: VirtualMachineInstancesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _$deleteSend(context, resourceUri, options),
  }) as PollerLike<OperationState<void>, void>;
}

export function _listSend(
  context: Client,
  resourceUri: string,
  options: VirtualMachineInstancesListOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | VirtualMachineInstancesList200Response
  | VirtualMachineInstancesListDefaultResponse
> {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances",
      resourceUri,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listDeserialize(
  result:
    | VirtualMachineInstancesList200Response
    | VirtualMachineInstancesListDefaultResponse,
): Promise<VirtualMachineInstanceListResult> {
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
            availabilitySets:
              p.properties?.["availabilitySets"] === undefined
                ? p.properties?.["availabilitySets"]
                : p.properties?.["availabilitySets"].map((p) => ({
                    id: p["id"],
                    name: p["name"],
                  })),
            osProfile: !p.properties?.osProfile
              ? undefined
              : {
                  adminPassword: p.properties?.osProfile?.["adminPassword"],
                  computerName: p.properties?.osProfile?.["computerName"],
                  osType: p.properties?.osProfile?.["osType"],
                  osSku: p.properties?.osProfile?.["osSku"],
                  osVersion: p.properties?.osProfile?.["osVersion"],
                },
            hardwareProfile: !p.properties?.hardwareProfile
              ? undefined
              : {
                  memoryMB: p.properties?.hardwareProfile?.["memoryMB"],
                  cpuCount: p.properties?.hardwareProfile?.["cpuCount"],
                  limitCpuForMigration:
                    p.properties?.hardwareProfile?.["limitCpuForMigration"],
                  dynamicMemoryEnabled:
                    p.properties?.hardwareProfile?.["dynamicMemoryEnabled"],
                  dynamicMemoryMaxMB:
                    p.properties?.hardwareProfile?.["dynamicMemoryMaxMB"],
                  dynamicMemoryMinMB:
                    p.properties?.hardwareProfile?.["dynamicMemoryMinMB"],
                  isHighlyAvailable:
                    p.properties?.hardwareProfile?.["isHighlyAvailable"],
                },
            networkProfile: !p.properties?.networkProfile
              ? undefined
              : {
                  networkInterfaces:
                    p.properties?.networkProfile?.["networkInterfaces"] ===
                    undefined
                      ? p.properties?.networkProfile?.["networkInterfaces"]
                      : p.properties?.networkProfile?.["networkInterfaces"].map(
                          (p) => ({
                            name: p["name"],
                            displayName: p["displayName"],
                            ipv4Addresses: p["ipv4Addresses"],
                            ipv6Addresses: p["ipv6Addresses"],
                            macAddress: p["macAddress"],
                            virtualNetworkId: p["virtualNetworkId"],
                            networkName: p["networkName"],
                            ipv4AddressType: p["ipv4AddressType"],
                            ipv6AddressType: p["ipv6AddressType"],
                            macAddressType: p["macAddressType"],
                            nicId: p["nicId"],
                          }),
                        ),
                },
            storageProfile: !p.properties?.storageProfile
              ? undefined
              : {
                  disks:
                    p.properties?.storageProfile?.["disks"] === undefined
                      ? p.properties?.storageProfile?.["disks"]
                      : p.properties?.storageProfile?.["disks"].map((p) => ({
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
                          createDiffDisk: p["createDiffDisk"],
                        })),
                },
            infrastructureProfile: !p.properties?.infrastructureProfile
              ? undefined
              : {
                  inventoryItemId:
                    p.properties?.infrastructureProfile?.["inventoryItemId"],
                  vmmServerId:
                    p.properties?.infrastructureProfile?.["vmmServerId"],
                  cloudId: p.properties?.infrastructureProfile?.["cloudId"],
                  templateId:
                    p.properties?.infrastructureProfile?.["templateId"],
                  vmName: p.properties?.infrastructureProfile?.["vmName"],
                  uuid: p.properties?.infrastructureProfile?.["uuid"],
                  lastRestoredVmCheckpoint: !p.properties?.infrastructureProfile
                    ?.lastRestoredVMCheckpoint
                    ? undefined
                    : {
                        parentCheckpointId:
                          p.properties?.infrastructureProfile
                            ?.lastRestoredVMCheckpoint?.["parentCheckpointID"],
                        checkpointId:
                          p.properties?.infrastructureProfile
                            ?.lastRestoredVMCheckpoint?.["checkpointID"],
                        name: p.properties?.infrastructureProfile
                          ?.lastRestoredVMCheckpoint?.["name"],
                        description:
                          p.properties?.infrastructureProfile
                            ?.lastRestoredVMCheckpoint?.["description"],
                      },
                  checkpoints:
                    p.properties?.infrastructureProfile?.["checkpoints"] ===
                    undefined
                      ? p.properties?.infrastructureProfile?.["checkpoints"]
                      : p.properties?.infrastructureProfile?.[
                          "checkpoints"
                        ].map((p) => ({
                          parentCheckpointId: p["parentCheckpointID"],
                          checkpointId: p["checkpointID"],
                          name: p["name"],
                          description: p["description"],
                        })),
                  checkpointType:
                    p.properties?.infrastructureProfile?.["checkpointType"],
                  generation:
                    p.properties?.infrastructureProfile?.["generation"],
                  biosGuid: p.properties?.infrastructureProfile?.["biosGuid"],
                },
            powerState: p.properties?.["powerState"],
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

/** Lists all of the virtual machine instances within the specified parent resource. */
export function list(
  context: Client,
  resourceUri: string,
  options: VirtualMachineInstancesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<VirtualMachineInstance> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, resourceUri, options),
    _listDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _stopSend(
  context: Client,
  resourceUri: string,
  body: StopVirtualMachineOptions,
  options: VirtualMachineInstancesStopOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | VirtualMachineInstancesStop202Response
  | VirtualMachineInstancesStopDefaultResponse
  | VirtualMachineInstancesStopLogicalResponse
> {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/stop",
      resourceUri,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { skipShutdown: body["skipShutdown"] },
    });
}

export async function _stopDeserialize(
  result:
    | VirtualMachineInstancesStop202Response
    | VirtualMachineInstancesStopDefaultResponse
    | VirtualMachineInstancesStopLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as VirtualMachineInstancesStopLogicalResponse;
  return;
}

/** The operation to power off (stop) a virtual machine instance. */
export function stop(
  context: Client,
  resourceUri: string,
  body: StopVirtualMachineOptions,
  options: VirtualMachineInstancesStopOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _stopDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _stopSend(context, resourceUri, body, options),
  }) as PollerLike<OperationState<void>, void>;
}

export function _startSend(
  context: Client,
  resourceUri: string,
  options: VirtualMachineInstancesStartOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | VirtualMachineInstancesStart202Response
  | VirtualMachineInstancesStartDefaultResponse
  | VirtualMachineInstancesStartLogicalResponse
> {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/start",
      resourceUri,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _startDeserialize(
  result:
    | VirtualMachineInstancesStart202Response
    | VirtualMachineInstancesStartDefaultResponse
    | VirtualMachineInstancesStartLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as VirtualMachineInstancesStartLogicalResponse;
  return;
}

/** The operation to start a virtual machine instance. */
export function start(
  context: Client,
  resourceUri: string,
  options: VirtualMachineInstancesStartOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _startDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _startSend(context, resourceUri, options),
  }) as PollerLike<OperationState<void>, void>;
}

export function _restartSend(
  context: Client,
  resourceUri: string,
  options: VirtualMachineInstancesRestartOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | VirtualMachineInstancesRestart202Response
  | VirtualMachineInstancesRestartDefaultResponse
  | VirtualMachineInstancesRestartLogicalResponse
> {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/restart",
      resourceUri,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _restartDeserialize(
  result:
    | VirtualMachineInstancesRestart202Response
    | VirtualMachineInstancesRestartDefaultResponse
    | VirtualMachineInstancesRestartLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as VirtualMachineInstancesRestartLogicalResponse;
  return;
}

/** The operation to restart a virtual machine instance. */
export function restart(
  context: Client,
  resourceUri: string,
  options: VirtualMachineInstancesRestartOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _restartDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _restartSend(context, resourceUri, options),
  }) as PollerLike<OperationState<void>, void>;
}

export function _createCheckpointSend(
  context: Client,
  resourceUri: string,
  body: VirtualMachineCreateCheckpoint,
  options: VirtualMachineInstancesCreateCheckpointOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | VirtualMachineInstancesCreateCheckpoint202Response
  | VirtualMachineInstancesCreateCheckpointDefaultResponse
  | VirtualMachineInstancesCreateCheckpointLogicalResponse
> {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/createCheckpoint",
      resourceUri,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"], description: body["description"] },
    });
}

export async function _createCheckpointDeserialize(
  result:
    | VirtualMachineInstancesCreateCheckpoint202Response
    | VirtualMachineInstancesCreateCheckpointDefaultResponse
    | VirtualMachineInstancesCreateCheckpointLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as VirtualMachineInstancesCreateCheckpointLogicalResponse;
  return;
}

/** Creates a checkpoint in virtual machine instance. */
export function createCheckpoint(
  context: Client,
  resourceUri: string,
  body: VirtualMachineCreateCheckpoint,
  options: VirtualMachineInstancesCreateCheckpointOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _createCheckpointDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createCheckpointSend(context, resourceUri, body, options),
  }) as PollerLike<OperationState<void>, void>;
}

export function _deleteCheckpointSend(
  context: Client,
  resourceUri: string,
  body: VirtualMachineDeleteCheckpoint,
  options: VirtualMachineInstancesDeleteCheckpointOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | VirtualMachineInstancesDeleteCheckpoint202Response
  | VirtualMachineInstancesDeleteCheckpointDefaultResponse
  | VirtualMachineInstancesDeleteCheckpointLogicalResponse
> {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/deleteCheckpoint",
      resourceUri,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { id: body["id"] },
    });
}

export async function _deleteCheckpointDeserialize(
  result:
    | VirtualMachineInstancesDeleteCheckpoint202Response
    | VirtualMachineInstancesDeleteCheckpointDefaultResponse
    | VirtualMachineInstancesDeleteCheckpointLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as VirtualMachineInstancesDeleteCheckpointLogicalResponse;
  return;
}

/** Deletes a checkpoint in virtual machine instance. */
export function deleteCheckpoint(
  context: Client,
  resourceUri: string,
  body: VirtualMachineDeleteCheckpoint,
  options: VirtualMachineInstancesDeleteCheckpointOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _deleteCheckpointDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _deleteCheckpointSend(context, resourceUri, body, options),
  }) as PollerLike<OperationState<void>, void>;
}

export function _restoreCheckpointSend(
  context: Client,
  resourceUri: string,
  body: VirtualMachineRestoreCheckpoint,
  options: VirtualMachineInstancesRestoreCheckpointOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | VirtualMachineInstancesRestoreCheckpoint202Response
  | VirtualMachineInstancesRestoreCheckpointDefaultResponse
  | VirtualMachineInstancesRestoreCheckpointLogicalResponse
> {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/restoreCheckpoint",
      resourceUri,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { id: body["id"] },
    });
}

export async function _restoreCheckpointDeserialize(
  result:
    | VirtualMachineInstancesRestoreCheckpoint202Response
    | VirtualMachineInstancesRestoreCheckpointDefaultResponse
    | VirtualMachineInstancesRestoreCheckpointLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as VirtualMachineInstancesRestoreCheckpointLogicalResponse;
  return;
}

/** Restores to a checkpoint in virtual machine instance. */
export function restoreCheckpoint(
  context: Client,
  resourceUri: string,
  body: VirtualMachineRestoreCheckpoint,
  options: VirtualMachineInstancesRestoreCheckpointOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _restoreCheckpointDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _restoreCheckpointSend(context, resourceUri, body, options),
  }) as PollerLike<OperationState<void>, void>;
}
