// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreatedByType,
  WorkloadNetworkGateway,
  _WorkloadNetworkGatewayList,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  AVSContext as Client,
  WorkloadNetworkGatewaysGet200Response,
  WorkloadNetworkGatewaysGetDefaultResponse,
  WorkloadNetworkGatewaysListByWorkloadNetwork200Response,
  WorkloadNetworkGatewaysListByWorkloadNetworkDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  WorkloadNetworkGatewaysListByWorkloadNetworkOptionalParams,
  WorkloadNetworkGatewaysGetOptionalParams,
} from "../../models/options.js";

export function _listByWorkloadNetworkSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkGatewaysListByWorkloadNetworkOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | WorkloadNetworkGatewaysListByWorkloadNetwork200Response
  | WorkloadNetworkGatewaysListByWorkloadNetworkDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/gateways",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByWorkloadNetworkDeserialize(
  result:
    | WorkloadNetworkGatewaysListByWorkloadNetwork200Response
    | WorkloadNetworkGatewaysListByWorkloadNetworkDefaultResponse,
): Promise<_WorkloadNetworkGatewayList> {
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
              path: p.properties?.["path"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List WorkloadNetworkGateway resources by WorkloadNetwork */
export function listByWorkloadNetwork(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkGatewaysListByWorkloadNetworkOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<WorkloadNetworkGateway> {
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
  gatewayId: string,
  options: WorkloadNetworkGatewaysGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | WorkloadNetworkGatewaysGet200Response
  | WorkloadNetworkGatewaysGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/gateways/{gatewayId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      gatewayId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result:
    | WorkloadNetworkGatewaysGet200Response
    | WorkloadNetworkGatewaysGetDefaultResponse,
): Promise<WorkloadNetworkGateway> {
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
          path: result.body.properties?.["path"],
        },
  };
}

/** Get a WorkloadNetworkGateway */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  gatewayId: string,
  options: WorkloadNetworkGatewaysGetOptionalParams = { requestOptions: {} },
): Promise<WorkloadNetworkGateway> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    gatewayId,
    options,
  );
  return _getDeserialize(result);
}
