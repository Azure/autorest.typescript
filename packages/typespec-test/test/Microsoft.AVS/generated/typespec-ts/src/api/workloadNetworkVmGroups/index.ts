// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  workloadNetworkVMGroupPropertiesSerializer,
  CreatedByType,
  WorkloadNetworkVMGroup,
  VMGroupStatusEnum,
  _WorkloadNetworkVMGroupsList,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  AVSContext as Client,
  WorkloadNetworkVmGroupsCreate200Response,
  WorkloadNetworkVmGroupsCreate201Response,
  WorkloadNetworkVmGroupsCreateDefaultResponse,
  WorkloadNetworkVmGroupsCreateLogicalResponse,
  WorkloadNetworkVmGroupsDelete200Response,
  WorkloadNetworkVmGroupsDelete202Response,
  WorkloadNetworkVmGroupsDelete204Response,
  WorkloadNetworkVmGroupsDeleteDefaultResponse,
  WorkloadNetworkVmGroupsDeleteLogicalResponse,
  WorkloadNetworkVmGroupsGet200Response,
  WorkloadNetworkVmGroupsGetDefaultResponse,
  WorkloadNetworkVmGroupsListByWorkloadNetwork200Response,
  WorkloadNetworkVmGroupsListByWorkloadNetworkDefaultResponse,
  WorkloadNetworkVmGroupsUpdate200Response,
  WorkloadNetworkVmGroupsUpdate202Response,
  WorkloadNetworkVmGroupsUpdateDefaultResponse,
  WorkloadNetworkVmGroupsUpdateLogicalResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  WorkloadNetworkVmGroupsListByWorkloadNetworkOptionalParams,
  WorkloadNetworkVmGroupsGetOptionalParams,
  WorkloadNetworkVmGroupsCreateOptionalParams,
  WorkloadNetworkVmGroupsUpdateOptionalParams,
  WorkloadNetworkVmGroupsDeleteOptionalParams,
} from "../../models/options.js";

export function _listByWorkloadNetworkSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkVmGroupsListByWorkloadNetworkOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | WorkloadNetworkVmGroupsListByWorkloadNetwork200Response
  | WorkloadNetworkVmGroupsListByWorkloadNetworkDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByWorkloadNetworkDeserialize(
  result:
    | WorkloadNetworkVmGroupsListByWorkloadNetwork200Response
    | WorkloadNetworkVmGroupsListByWorkloadNetworkDefaultResponse,
): Promise<_WorkloadNetworkVMGroupsList> {
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
              displayName: p.properties?.["displayName"],
              members: p.properties?.["members"],
              status: p.properties?.["status"] as VMGroupStatusEnum,
              provisioningState: p.properties?.["provisioningState"] as any,
              revision: p.properties?.["revision"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List WorkloadNetworkVMGroup resources by WorkloadNetwork */
export function listByWorkloadNetwork(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkVmGroupsListByWorkloadNetworkOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<WorkloadNetworkVMGroup> {
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
  vmGroupId: string,
  options: WorkloadNetworkVmGroupsGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | WorkloadNetworkVmGroupsGet200Response
  | WorkloadNetworkVmGroupsGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups/{vmGroupId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      vmGroupId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result:
    | WorkloadNetworkVmGroupsGet200Response
    | WorkloadNetworkVmGroupsGetDefaultResponse,
): Promise<WorkloadNetworkVMGroup> {
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
          displayName: result.body.properties?.["displayName"],
          members: result.body.properties?.["members"],
          status: result.body.properties?.["status"] as VMGroupStatusEnum,
          provisioningState: result.body.properties?.[
            "provisioningState"
          ] as any,
          revision: result.body.properties?.["revision"],
        },
  };
}

/** Get a WorkloadNetworkVMGroup */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  vmGroupId: string,
  options: WorkloadNetworkVmGroupsGetOptionalParams = { requestOptions: {} },
): Promise<WorkloadNetworkVMGroup> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    vmGroupId,
    options,
  );
  return _getDeserialize(result);
}

export function _createSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  vmGroupId: string,
  resource: WorkloadNetworkVMGroup,
  options: WorkloadNetworkVmGroupsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | WorkloadNetworkVmGroupsCreate200Response
  | WorkloadNetworkVmGroupsCreate201Response
  | WorkloadNetworkVmGroupsCreateDefaultResponse
  | WorkloadNetworkVmGroupsCreateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups/{vmGroupId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      vmGroupId,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? resource.properties
          : workloadNetworkVMGroupPropertiesSerializer(resource.properties),
      },
    });
}

export async function _createDeserialize(
  result:
    | WorkloadNetworkVmGroupsCreate200Response
    | WorkloadNetworkVmGroupsCreate201Response
    | WorkloadNetworkVmGroupsCreateDefaultResponse
    | WorkloadNetworkVmGroupsCreateLogicalResponse,
): Promise<WorkloadNetworkVMGroup> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as WorkloadNetworkVmGroupsCreateLogicalResponse;
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
          displayName: result.body.properties?.["displayName"],
          members: result.body.properties?.["members"],
          status: result.body.properties?.["status"] as VMGroupStatusEnum,
          provisioningState: result.body.properties?.[
            "provisioningState"
          ] as any,
          revision: result.body.properties?.["revision"],
        },
  };
}

/** Create a WorkloadNetworkVMGroup */
export function create(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  vmGroupId: string,
  resource: WorkloadNetworkVMGroup,
  options: WorkloadNetworkVmGroupsCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<WorkloadNetworkVMGroup>, WorkloadNetworkVMGroup> {
  return getLongRunningPoller(context, _createDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        vmGroupId,
        resource,
        options,
      ),
  }) as PollerLike<
    OperationState<WorkloadNetworkVMGroup>,
    WorkloadNetworkVMGroup
  >;
}

export function _updateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  vmGroupId: string,
  workloadNetworkVMGroup: WorkloadNetworkVMGroup,
  options: WorkloadNetworkVmGroupsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | WorkloadNetworkVmGroupsUpdate200Response
  | WorkloadNetworkVmGroupsUpdate202Response
  | WorkloadNetworkVmGroupsUpdateDefaultResponse
  | WorkloadNetworkVmGroupsUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups/{vmGroupId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      vmGroupId,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !workloadNetworkVMGroup.properties
          ? workloadNetworkVMGroup.properties
          : workloadNetworkVMGroupPropertiesSerializer(
              workloadNetworkVMGroup.properties,
            ),
      },
    });
}

export async function _updateDeserialize(
  result:
    | WorkloadNetworkVmGroupsUpdate200Response
    | WorkloadNetworkVmGroupsUpdate202Response
    | WorkloadNetworkVmGroupsUpdateDefaultResponse
    | WorkloadNetworkVmGroupsUpdateLogicalResponse,
): Promise<WorkloadNetworkVMGroup> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as WorkloadNetworkVmGroupsUpdateLogicalResponse;
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
          displayName: result.body.properties?.["displayName"],
          members: result.body.properties?.["members"],
          status: result.body.properties?.["status"] as VMGroupStatusEnum,
          provisioningState: result.body.properties?.[
            "provisioningState"
          ] as any,
          revision: result.body.properties?.["revision"],
        },
  };
}

/** Update a WorkloadNetworkVMGroup */
export function update(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  vmGroupId: string,
  workloadNetworkVMGroup: WorkloadNetworkVMGroup,
  options: WorkloadNetworkVmGroupsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<WorkloadNetworkVMGroup>, WorkloadNetworkVMGroup> {
  return getLongRunningPoller(context, _updateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        vmGroupId,
        workloadNetworkVMGroup,
        options,
      ),
  }) as PollerLike<
    OperationState<WorkloadNetworkVMGroup>,
    WorkloadNetworkVMGroup
  >;
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmGroupId: string,
  privateCloudName: string,
  options: WorkloadNetworkVmGroupsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | WorkloadNetworkVmGroupsDelete200Response
  | WorkloadNetworkVmGroupsDelete202Response
  | WorkloadNetworkVmGroupsDelete204Response
  | WorkloadNetworkVmGroupsDeleteDefaultResponse
  | WorkloadNetworkVmGroupsDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups/{vmGroupId}",
      subscriptionId,
      resourceGroupName,
      vmGroupId,
      privateCloudName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | WorkloadNetworkVmGroupsDelete200Response
    | WorkloadNetworkVmGroupsDelete202Response
    | WorkloadNetworkVmGroupsDelete204Response
    | WorkloadNetworkVmGroupsDeleteDefaultResponse
    | WorkloadNetworkVmGroupsDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as WorkloadNetworkVmGroupsDeleteLogicalResponse;
  return;
}

/** Delete a WorkloadNetworkVMGroup */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmGroupId: string,
  privateCloudName: string,
  options: WorkloadNetworkVmGroupsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(
        context,
        subscriptionId,
        resourceGroupName,
        vmGroupId,
        privateCloudName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}
