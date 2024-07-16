// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreatedByType,
  WorkloadNetworkVirtualMachine,
  VMTypeEnum,
  _WorkloadNetworkVirtualMachinesList,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  AVSContext as Client,
  WorkloadNetworkVirtualMachinesGet200Response,
  WorkloadNetworkVirtualMachinesGetDefaultResponse,
  WorkloadNetworkVirtualMachinesListByWorkloadNetwork200Response,
  WorkloadNetworkVirtualMachinesListByWorkloadNetworkDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  WorkloadNetworkVirtualMachinesListByWorkloadNetworkOptionalParams,
  WorkloadNetworkVirtualMachinesGetOptionalParams,
} from "../../models/options.js";

export function _listByWorkloadNetworkSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkVirtualMachinesListByWorkloadNetworkOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | WorkloadNetworkVirtualMachinesListByWorkloadNetwork200Response
  | WorkloadNetworkVirtualMachinesListByWorkloadNetworkDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/virtualMachines",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByWorkloadNetworkDeserialize(
  result:
    | WorkloadNetworkVirtualMachinesListByWorkloadNetwork200Response
    | WorkloadNetworkVirtualMachinesListByWorkloadNetworkDefaultResponse,
): Promise<_WorkloadNetworkVirtualMachinesList> {
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
              displayName: p.properties?.["displayName"],
              vmType: p.properties?.["vmType"] as VMTypeEnum,
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List WorkloadNetworkVirtualMachine resources by WorkloadNetwork */
export function listByWorkloadNetwork(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkVirtualMachinesListByWorkloadNetworkOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<WorkloadNetworkVirtualMachine> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByWorkloadNetworkSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _listByWorkloadNetworkDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  virtualMachineId: string,
  options: WorkloadNetworkVirtualMachinesGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | WorkloadNetworkVirtualMachinesGet200Response
  | WorkloadNetworkVirtualMachinesGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/virtualMachines/{virtualMachineId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      virtualMachineId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result:
    | WorkloadNetworkVirtualMachinesGet200Response
    | WorkloadNetworkVirtualMachinesGetDefaultResponse,
): Promise<WorkloadNetworkVirtualMachine> {
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
          displayName: result.body.properties?.["displayName"],
          vmType: result.body.properties?.["vmType"] as VMTypeEnum,
        },
  };
}

/** Get a WorkloadNetworkVirtualMachine */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  virtualMachineId: string,
  options: WorkloadNetworkVirtualMachinesGetOptionalParams = {
    requestOptions: {},
  },
): Promise<WorkloadNetworkVirtualMachine> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    virtualMachineId,
    options,
  );
  return _getDeserialize(result);
}
