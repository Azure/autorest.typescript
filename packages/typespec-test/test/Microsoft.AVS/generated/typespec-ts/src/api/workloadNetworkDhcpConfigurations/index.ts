// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  WorkloadNetworkDhcpListResult,
  WorkloadNetworkDhcp,
  WorkloadNetworkDhcpUpdate,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  AVSContext as Client,
  WorkloadNetworkDhcpConfigurationsCreate200Response,
  WorkloadNetworkDhcpConfigurationsCreate201Response,
  WorkloadNetworkDhcpConfigurationsCreateDefaultResponse,
  WorkloadNetworkDhcpConfigurationsCreateLogicalResponse,
  WorkloadNetworkDhcpConfigurationsDelete200Response,
  WorkloadNetworkDhcpConfigurationsDelete202Response,
  WorkloadNetworkDhcpConfigurationsDelete204Response,
  WorkloadNetworkDhcpConfigurationsDeleteDefaultResponse,
  WorkloadNetworkDhcpConfigurationsDeleteLogicalResponse,
  WorkloadNetworkDhcpConfigurationsGet200Response,
  WorkloadNetworkDhcpConfigurationsGetDefaultResponse,
  WorkloadNetworkDhcpConfigurationsListByWorkloadNetwork200Response,
  WorkloadNetworkDhcpConfigurationsListByWorkloadNetworkDefaultResponse,
  WorkloadNetworkDhcpConfigurationsUpdate200Response,
  WorkloadNetworkDhcpConfigurationsUpdate202Response,
  WorkloadNetworkDhcpConfigurationsUpdateDefaultResponse,
  WorkloadNetworkDhcpConfigurationsUpdateLogicalResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  WorkloadNetworkDhcpConfigurationsListByWorkloadNetworkOptionalParams,
  WorkloadNetworkDhcpConfigurationsGetOptionalParams,
  WorkloadNetworkDhcpConfigurationsCreateOptionalParams,
  WorkloadNetworkDhcpConfigurationsUpdateOptionalParams,
  WorkloadNetworkDhcpConfigurationsDeleteOptionalParams,
} from "../../models/options.js";

export function _listByWorkloadNetworkSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkDhcpConfigurationsListByWorkloadNetworkOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | WorkloadNetworkDhcpConfigurationsListByWorkloadNetwork200Response
  | WorkloadNetworkDhcpConfigurationsListByWorkloadNetworkDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dhcpConfigurations",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByWorkloadNetworkDeserialize(
  result:
    | WorkloadNetworkDhcpConfigurationsListByWorkloadNetwork200Response
    | WorkloadNetworkDhcpConfigurationsListByWorkloadNetworkDefaultResponse,
): Promise<WorkloadNetworkDhcpListResult> {
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
            dhcpType: p.properties?.["dhcpType"],
            displayName: p.properties?.["displayName"],
            segments: p.properties?.["segments"],
            provisioningState: p.properties?.["provisioningState"],
            revision: p.properties?.["revision"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List WorkloadNetworkDhcp resources by WorkloadNetwork */
export function listByWorkloadNetwork(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkDhcpConfigurationsListByWorkloadNetworkOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<WorkloadNetworkDhcp> {
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
  dhcpId: string,
  privateCloudName: string,
  options: WorkloadNetworkDhcpConfigurationsGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | WorkloadNetworkDhcpConfigurationsGet200Response
  | WorkloadNetworkDhcpConfigurationsGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dhcpConfigurations/{dhcpId}",
      subscriptionId,
      resourceGroupName,
      dhcpId,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result:
    | WorkloadNetworkDhcpConfigurationsGet200Response
    | WorkloadNetworkDhcpConfigurationsGetDefaultResponse,
): Promise<WorkloadNetworkDhcp> {
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
          dhcpType: result.body.properties?.["dhcpType"],
          displayName: result.body.properties?.["displayName"],
          segments: result.body.properties?.["segments"],
          provisioningState: result.body.properties?.["provisioningState"],
          revision: result.body.properties?.["revision"],
        },
  };
}

/** Get a WorkloadNetworkDhcp */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dhcpId: string,
  privateCloudName: string,
  options: WorkloadNetworkDhcpConfigurationsGetOptionalParams = {
    requestOptions: {},
  },
): Promise<WorkloadNetworkDhcp> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    dhcpId,
    privateCloudName,
    options,
  );
  return _getDeserialize(result);
}

export function _createSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  dhcpId: string,
  workloadNetworkDhcp: WorkloadNetworkDhcp,
  options: WorkloadNetworkDhcpConfigurationsCreateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | WorkloadNetworkDhcpConfigurationsCreate200Response
  | WorkloadNetworkDhcpConfigurationsCreate201Response
  | WorkloadNetworkDhcpConfigurationsCreateDefaultResponse
  | WorkloadNetworkDhcpConfigurationsCreateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dhcpConfigurations/{dhcpId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      dhcpId,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !workloadNetworkDhcp.properties
          ? undefined
          : {
              dhcpType: workloadNetworkDhcp.properties?.["dhcpType"],
              displayName: workloadNetworkDhcp.properties?.["displayName"],
              revision: workloadNetworkDhcp.properties?.["revision"],
            },
      },
    });
}

export async function _createDeserialize(
  result:
    | WorkloadNetworkDhcpConfigurationsCreate200Response
    | WorkloadNetworkDhcpConfigurationsCreate201Response
    | WorkloadNetworkDhcpConfigurationsCreateDefaultResponse
    | WorkloadNetworkDhcpConfigurationsCreateLogicalResponse,
): Promise<WorkloadNetworkDhcp> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as WorkloadNetworkDhcpConfigurationsCreateLogicalResponse;
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
          dhcpType: result.body.properties?.["dhcpType"],
          displayName: result.body.properties?.["displayName"],
          segments: result.body.properties?.["segments"],
          provisioningState: result.body.properties?.["provisioningState"],
          revision: result.body.properties?.["revision"],
        },
  };
}

/** Create a WorkloadNetworkDhcp */
export function create(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  dhcpId: string,
  workloadNetworkDhcp: WorkloadNetworkDhcp,
  options: WorkloadNetworkDhcpConfigurationsCreateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp> {
  return getLongRunningPoller(context, _createDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        dhcpId,
        workloadNetworkDhcp,
        options,
      ),
  }) as PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp>;
}

export function _updateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  dhcpId: string,
  workloadNetworkDhcp: WorkloadNetworkDhcpUpdate,
  options: WorkloadNetworkDhcpConfigurationsUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | WorkloadNetworkDhcpConfigurationsUpdate200Response
  | WorkloadNetworkDhcpConfigurationsUpdate202Response
  | WorkloadNetworkDhcpConfigurationsUpdateDefaultResponse
  | WorkloadNetworkDhcpConfigurationsUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dhcpConfigurations/{dhcpId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      dhcpId,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !workloadNetworkDhcp.properties
          ? undefined
          : {
              dhcpType: workloadNetworkDhcp.properties?.["dhcpType"],
              displayName: workloadNetworkDhcp.properties?.["displayName"],
              revision: workloadNetworkDhcp.properties?.["revision"],
            },
      },
    });
}

export async function _updateDeserialize(
  result:
    | WorkloadNetworkDhcpConfigurationsUpdate200Response
    | WorkloadNetworkDhcpConfigurationsUpdate202Response
    | WorkloadNetworkDhcpConfigurationsUpdateDefaultResponse
    | WorkloadNetworkDhcpConfigurationsUpdateLogicalResponse,
): Promise<WorkloadNetworkDhcp> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as WorkloadNetworkDhcpConfigurationsUpdateLogicalResponse;
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
          dhcpType: result.body.properties?.["dhcpType"],
          displayName: result.body.properties?.["displayName"],
          segments: result.body.properties?.["segments"],
          provisioningState: result.body.properties?.["provisioningState"],
          revision: result.body.properties?.["revision"],
        },
  };
}

/** Update a WorkloadNetworkDhcp */
export function update(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  dhcpId: string,
  workloadNetworkDhcp: WorkloadNetworkDhcpUpdate,
  options: WorkloadNetworkDhcpConfigurationsUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp> {
  return getLongRunningPoller(context, _updateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        dhcpId,
        workloadNetworkDhcp,
        options,
      ),
  }) as PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp>;
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  dhcpId: string,
  options: WorkloadNetworkDhcpConfigurationsDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | WorkloadNetworkDhcpConfigurationsDelete200Response
  | WorkloadNetworkDhcpConfigurationsDelete202Response
  | WorkloadNetworkDhcpConfigurationsDelete204Response
  | WorkloadNetworkDhcpConfigurationsDeleteDefaultResponse
  | WorkloadNetworkDhcpConfigurationsDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dhcpConfigurations/{dhcpId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      dhcpId,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | WorkloadNetworkDhcpConfigurationsDelete200Response
    | WorkloadNetworkDhcpConfigurationsDelete202Response
    | WorkloadNetworkDhcpConfigurationsDelete204Response
    | WorkloadNetworkDhcpConfigurationsDeleteDefaultResponse
    | WorkloadNetworkDhcpConfigurationsDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as WorkloadNetworkDhcpConfigurationsDeleteLogicalResponse;
  return;
}

/** Delete a WorkloadNetworkDhcp */
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
  dhcpId: string,
  options: WorkloadNetworkDhcpConfigurationsDeleteOptionalParams = {
    requestOptions: {},
  },
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
        dhcpId,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}
