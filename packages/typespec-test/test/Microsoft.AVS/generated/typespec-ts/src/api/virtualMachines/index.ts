// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  CreatedByType,
  VirtualMachine,
  VirtualMachineRestrictMovementState,
  VirtualMachineRestrictMovement,
  _VirtualMachinesList,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  AVSContext as Client,
  VirtualMachinesGet200Response,
  VirtualMachinesGetDefaultResponse,
  VirtualMachinesListByCluster200Response,
  VirtualMachinesListByClusterDefaultResponse,
  VirtualMachinesRestrictMovement202Response,
  VirtualMachinesRestrictMovementDefaultResponse,
  VirtualMachinesRestrictMovementLogicalResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  VirtualMachinesListByClusterOptionalParams,
  VirtualMachinesGetOptionalParams,
  VirtualMachinesRestrictMovementOptionalParams,
} from "../../models/options.js";

export function _listByClusterSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  options: VirtualMachinesListByClusterOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | VirtualMachinesListByCluster200Response
  | VirtualMachinesListByClusterDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/virtualMachines",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByClusterDeserialize(
  result:
    | VirtualMachinesListByCluster200Response
    | VirtualMachinesListByClusterDefaultResponse,
): Promise<_VirtualMachinesList> {
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
              moRefId: p.properties?.["moRefId"],
              folderPath: p.properties?.["folderPath"],
              restrictMovement: p.properties?.[
                "restrictMovement"
              ] as VirtualMachineRestrictMovementState,
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List VirtualMachine resources by Cluster */
export function listByCluster(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  options: VirtualMachinesListByClusterOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<VirtualMachine> {
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
  virtualMachineId: string,
  options: VirtualMachinesGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  VirtualMachinesGet200Response | VirtualMachinesGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/virtualMachines/{virtualMachineId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
      virtualMachineId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: VirtualMachinesGet200Response | VirtualMachinesGetDefaultResponse,
): Promise<VirtualMachine> {
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
          moRefId: result.body.properties?.["moRefId"],
          folderPath: result.body.properties?.["folderPath"],
          restrictMovement: result.body.properties?.[
            "restrictMovement"
          ] as VirtualMachineRestrictMovementState,
        },
  };
}

/** Get a VirtualMachine */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  virtualMachineId: string,
  options: VirtualMachinesGetOptionalParams = { requestOptions: {} },
): Promise<VirtualMachine> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    clusterName,
    virtualMachineId,
    options,
  );
  return _getDeserialize(result);
}

export function _restrictMovementSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  virtualMachineId: string,
  restrictMovementParameter: VirtualMachineRestrictMovement,
  options: VirtualMachinesRestrictMovementOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | VirtualMachinesRestrictMovement202Response
  | VirtualMachinesRestrictMovementDefaultResponse
  | VirtualMachinesRestrictMovementLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/virtualMachines/{virtualMachineId}/restrictMovement",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
      virtualMachineId,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { restrictMovement: restrictMovementParameter["restrictMovement"] },
    });
}

export async function _restrictMovementDeserialize(
  result:
    | VirtualMachinesRestrictMovement202Response
    | VirtualMachinesRestrictMovementDefaultResponse
    | VirtualMachinesRestrictMovementLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as VirtualMachinesRestrictMovementLogicalResponse;
  return;
}

/** Enable or disable DRS-driven VM movement restriction */
export function restrictMovement(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  virtualMachineId: string,
  restrictMovementParameter: VirtualMachineRestrictMovement,
  options: VirtualMachinesRestrictMovementOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _restrictMovementDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _restrictMovementSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        virtualMachineId,
        restrictMovementParameter,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}
