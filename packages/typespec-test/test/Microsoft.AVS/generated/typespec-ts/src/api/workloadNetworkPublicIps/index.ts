// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  workloadNetworkPublicIPPropertiesSerializer,
  CreatedByType,
  WorkloadNetworkPublicIP,
  _WorkloadNetworkPublicIPsList,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  AVSContext as Client,
  WorkloadNetworkPublicIpsCreate200Response,
  WorkloadNetworkPublicIpsCreate201Response,
  WorkloadNetworkPublicIpsCreateDefaultResponse,
  WorkloadNetworkPublicIpsCreateLogicalResponse,
  WorkloadNetworkPublicIpsDelete200Response,
  WorkloadNetworkPublicIpsDelete202Response,
  WorkloadNetworkPublicIpsDelete204Response,
  WorkloadNetworkPublicIpsDeleteDefaultResponse,
  WorkloadNetworkPublicIpsDeleteLogicalResponse,
  WorkloadNetworkPublicIpsGet200Response,
  WorkloadNetworkPublicIpsGetDefaultResponse,
  WorkloadNetworkPublicIpsListByWorkloadNetwork200Response,
  WorkloadNetworkPublicIpsListByWorkloadNetworkDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  WorkloadNetworkPublicIpsListByWorkloadNetworkOptionalParams,
  WorkloadNetworkPublicIpsGetOptionalParams,
  WorkloadNetworkPublicIpsCreateOptionalParams,
  WorkloadNetworkPublicIpsDeleteOptionalParams,
} from "../../models/options.js";

export function _listByWorkloadNetworkSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkPublicIpsListByWorkloadNetworkOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | WorkloadNetworkPublicIpsListByWorkloadNetwork200Response
  | WorkloadNetworkPublicIpsListByWorkloadNetworkDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/publicIPs",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByWorkloadNetworkDeserialize(
  result:
    | WorkloadNetworkPublicIpsListByWorkloadNetwork200Response
    | WorkloadNetworkPublicIpsListByWorkloadNetworkDefaultResponse,
): Promise<_WorkloadNetworkPublicIPsList> {
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
              numberOfPublicIPs: p.properties?.["numberOfPublicIPs"],
              publicIPBlock: p.properties?.["publicIPBlock"],
              provisioningState: p.properties?.["provisioningState"] as any,
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List WorkloadNetworkPublicIP resources by WorkloadNetwork */
export function listByWorkloadNetwork(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkPublicIpsListByWorkloadNetworkOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<WorkloadNetworkPublicIP> {
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
  publicIPId: string,
  options: WorkloadNetworkPublicIpsGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | WorkloadNetworkPublicIpsGet200Response
  | WorkloadNetworkPublicIpsGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/publicIPs/{publicIPId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      publicIPId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result:
    | WorkloadNetworkPublicIpsGet200Response
    | WorkloadNetworkPublicIpsGetDefaultResponse,
): Promise<WorkloadNetworkPublicIP> {
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
          numberOfPublicIPs: result.body.properties?.["numberOfPublicIPs"],
          publicIPBlock: result.body.properties?.["publicIPBlock"],
          provisioningState: result.body.properties?.[
            "provisioningState"
          ] as any,
        },
  };
}

/** Get a WorkloadNetworkPublicIP */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  publicIPId: string,
  options: WorkloadNetworkPublicIpsGetOptionalParams = { requestOptions: {} },
): Promise<WorkloadNetworkPublicIP> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    publicIPId,
    options,
  );
  return _getDeserialize(result);
}

export function _createSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  publicIPId: string,
  workloadNetworkPublicIP: WorkloadNetworkPublicIP,
  options: WorkloadNetworkPublicIpsCreateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | WorkloadNetworkPublicIpsCreate200Response
  | WorkloadNetworkPublicIpsCreate201Response
  | WorkloadNetworkPublicIpsCreateDefaultResponse
  | WorkloadNetworkPublicIpsCreateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/publicIPs/{publicIPId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      publicIPId,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !workloadNetworkPublicIP.properties
          ? workloadNetworkPublicIP.properties
          : workloadNetworkPublicIPPropertiesSerializer(
              workloadNetworkPublicIP.properties,
            ),
      },
    });
}

export async function _createDeserialize(
  result:
    | WorkloadNetworkPublicIpsCreate200Response
    | WorkloadNetworkPublicIpsCreate201Response
    | WorkloadNetworkPublicIpsCreateDefaultResponse
    | WorkloadNetworkPublicIpsCreateLogicalResponse,
): Promise<WorkloadNetworkPublicIP> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as WorkloadNetworkPublicIpsCreateLogicalResponse;
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
          numberOfPublicIPs: result.body.properties?.["numberOfPublicIPs"],
          publicIPBlock: result.body.properties?.["publicIPBlock"],
          provisioningState: result.body.properties?.[
            "provisioningState"
          ] as any,
        },
  };
}

/** Create a WorkloadNetworkPublicIP */
export function create(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  publicIPId: string,
  workloadNetworkPublicIP: WorkloadNetworkPublicIP,
  options: WorkloadNetworkPublicIpsCreateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<WorkloadNetworkPublicIP>,
  WorkloadNetworkPublicIP
> {
  return getLongRunningPoller(context, _createDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        publicIPId,
        workloadNetworkPublicIP,
        options,
      ),
  }) as PollerLike<
    OperationState<WorkloadNetworkPublicIP>,
    WorkloadNetworkPublicIP
  >;
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  publicIPId: string,
  privateCloudName: string,
  options: WorkloadNetworkPublicIpsDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | WorkloadNetworkPublicIpsDelete200Response
  | WorkloadNetworkPublicIpsDelete202Response
  | WorkloadNetworkPublicIpsDelete204Response
  | WorkloadNetworkPublicIpsDeleteDefaultResponse
  | WorkloadNetworkPublicIpsDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/publicIPs/{publicIPId}",
      subscriptionId,
      resourceGroupName,
      publicIPId,
      privateCloudName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | WorkloadNetworkPublicIpsDelete200Response
    | WorkloadNetworkPublicIpsDelete202Response
    | WorkloadNetworkPublicIpsDelete204Response
    | WorkloadNetworkPublicIpsDeleteDefaultResponse
    | WorkloadNetworkPublicIpsDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as WorkloadNetworkPublicIpsDeleteLogicalResponse;
  return;
}

/** Delete a WorkloadNetworkPublicIP */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  publicIPId: string,
  privateCloudName: string,
  options: WorkloadNetworkPublicIpsDeleteOptionalParams = {
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
        publicIPId,
        privateCloudName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}
