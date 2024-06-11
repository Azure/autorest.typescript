// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  WorkloadNetworkSegmentListResult,
  WorkloadNetworkSegment,
  WorkloadNetworkSegmentUpdate,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  AVSContext as Client,
  WorkloadNetworkSegmentsCreate200Response,
  WorkloadNetworkSegmentsCreate201Response,
  WorkloadNetworkSegmentsCreateDefaultResponse,
  WorkloadNetworkSegmentsCreateLogicalResponse,
  WorkloadNetworkSegmentsDeleteSegment200Response,
  WorkloadNetworkSegmentsDeleteSegment202Response,
  WorkloadNetworkSegmentsDeleteSegment204Response,
  WorkloadNetworkSegmentsDeleteSegmentDefaultResponse,
  WorkloadNetworkSegmentsDeleteSegmentLogicalResponse,
  WorkloadNetworkSegmentsGet200Response,
  WorkloadNetworkSegmentsGetDefaultResponse,
  WorkloadNetworkSegmentsListByWorkloadNetwork200Response,
  WorkloadNetworkSegmentsListByWorkloadNetworkDefaultResponse,
  WorkloadNetworkSegmentsUpdate200Response,
  WorkloadNetworkSegmentsUpdate202Response,
  WorkloadNetworkSegmentsUpdateDefaultResponse,
  WorkloadNetworkSegmentsUpdateLogicalResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  WorkloadNetworkSegmentsListByWorkloadNetworkOptionalParams,
  WorkloadNetworkSegmentsGetOptionalParams,
  WorkloadNetworkSegmentsCreateOptionalParams,
  WorkloadNetworkSegmentsUpdateOptionalParams,
  WorkloadNetworkSegmentsDeleteSegmentOptionalParams,
} from "../../models/options.js";

export function _listByWorkloadNetworkSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkSegmentsListByWorkloadNetworkOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | WorkloadNetworkSegmentsListByWorkloadNetwork200Response
  | WorkloadNetworkSegmentsListByWorkloadNetworkDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByWorkloadNetworkDeserialize(
  result:
    | WorkloadNetworkSegmentsListByWorkloadNetwork200Response
    | WorkloadNetworkSegmentsListByWorkloadNetworkDefaultResponse,
): Promise<WorkloadNetworkSegmentListResult> {
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
            displayName: p.properties?.["displayName"],
            connectedGateway: p.properties?.["connectedGateway"],
            subnet: !p.properties?.subnet
              ? undefined
              : {
                  dhcpRanges: p.properties?.subnet?.["dhcpRanges"],
                  gatewayAddress: p.properties?.subnet?.["gatewayAddress"],
                },
            portVif:
              p.properties?.["portVif"] === undefined
                ? p.properties?.["portVif"]
                : p.properties?.["portVif"].map((p) => ({
                    portName: p["portName"],
                  })),
            status: p.properties?.["status"],
            provisioningState: p.properties?.["provisioningState"],
            revision: p.properties?.["revision"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List WorkloadNetworkSegment resources by WorkloadNetwork */
export function listByWorkloadNetwork(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkSegmentsListByWorkloadNetworkOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<WorkloadNetworkSegment> {
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
  segmentId: string,
  options: WorkloadNetworkSegmentsGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | WorkloadNetworkSegmentsGet200Response
  | WorkloadNetworkSegmentsGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments/{segmentId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      segmentId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result:
    | WorkloadNetworkSegmentsGet200Response
    | WorkloadNetworkSegmentsGetDefaultResponse,
): Promise<WorkloadNetworkSegment> {
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
          displayName: result.body.properties?.["displayName"],
          connectedGateway: result.body.properties?.["connectedGateway"],
          subnet: !result.body.properties?.subnet
            ? undefined
            : {
                dhcpRanges: result.body.properties?.subnet?.["dhcpRanges"],
                gatewayAddress:
                  result.body.properties?.subnet?.["gatewayAddress"],
              },
          portVif:
            result.body.properties?.["portVif"] === undefined
              ? result.body.properties?.["portVif"]
              : result.body.properties?.["portVif"].map((p) => ({
                  portName: p["portName"],
                })),
          status: result.body.properties?.["status"],
          provisioningState: result.body.properties?.["provisioningState"],
          revision: result.body.properties?.["revision"],
        },
  };
}

/** Get a WorkloadNetworkSegment */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  segmentId: string,
  options: WorkloadNetworkSegmentsGetOptionalParams = { requestOptions: {} },
): Promise<WorkloadNetworkSegment> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    segmentId,
    options,
  );
  return _getDeserialize(result);
}

export function _createSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  segmentId: string,
  workloadNetworkSegment: WorkloadNetworkSegment,
  options: WorkloadNetworkSegmentsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | WorkloadNetworkSegmentsCreate200Response
  | WorkloadNetworkSegmentsCreate201Response
  | WorkloadNetworkSegmentsCreateDefaultResponse
  | WorkloadNetworkSegmentsCreateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments/{segmentId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      segmentId,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !workloadNetworkSegment.properties
          ? undefined
          : {
              displayName: workloadNetworkSegment.properties?.["displayName"],
              connectedGateway:
                workloadNetworkSegment.properties?.["connectedGateway"],
              subnet: !workloadNetworkSegment.properties?.subnet
                ? undefined
                : {
                    dhcpRanges:
                      workloadNetworkSegment.properties?.subnet?.["dhcpRanges"],
                    gatewayAddress:
                      workloadNetworkSegment.properties?.subnet?.[
                        "gatewayAddress"
                      ],
                  },
              revision: workloadNetworkSegment.properties?.["revision"],
            },
      },
    });
}

export async function _createDeserialize(
  result:
    | WorkloadNetworkSegmentsCreate200Response
    | WorkloadNetworkSegmentsCreate201Response
    | WorkloadNetworkSegmentsCreateDefaultResponse
    | WorkloadNetworkSegmentsCreateLogicalResponse,
): Promise<WorkloadNetworkSegment> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as WorkloadNetworkSegmentsCreateLogicalResponse;
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
          displayName: result.body.properties?.["displayName"],
          connectedGateway: result.body.properties?.["connectedGateway"],
          subnet: !result.body.properties?.subnet
            ? undefined
            : {
                dhcpRanges: result.body.properties?.subnet?.["dhcpRanges"],
                gatewayAddress:
                  result.body.properties?.subnet?.["gatewayAddress"],
              },
          portVif:
            result.body.properties?.["portVif"] === undefined
              ? result.body.properties?.["portVif"]
              : result.body.properties?.["portVif"].map((p) => ({
                  portName: p["portName"],
                })),
          status: result.body.properties?.["status"],
          provisioningState: result.body.properties?.["provisioningState"],
          revision: result.body.properties?.["revision"],
        },
  };
}

/** Create a WorkloadNetworkSegment */
export function create(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  segmentId: string,
  workloadNetworkSegment: WorkloadNetworkSegment,
  options: WorkloadNetworkSegmentsCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<WorkloadNetworkSegment>, WorkloadNetworkSegment> {
  return getLongRunningPoller(context, _createDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        segmentId,
        workloadNetworkSegment,
        options,
      ),
  }) as PollerLike<
    OperationState<WorkloadNetworkSegment>,
    WorkloadNetworkSegment
  >;
}

export function _updateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  segmentId: string,
  properties: WorkloadNetworkSegmentUpdate,
  options: WorkloadNetworkSegmentsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | WorkloadNetworkSegmentsUpdate200Response
  | WorkloadNetworkSegmentsUpdate202Response
  | WorkloadNetworkSegmentsUpdateDefaultResponse
  | WorkloadNetworkSegmentsUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments/{segmentId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      segmentId,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !properties.properties
          ? undefined
          : {
              displayName: properties.properties?.["displayName"],
              connectedGateway: properties.properties?.["connectedGateway"],
              subnet: !properties.properties?.subnet
                ? undefined
                : {
                    dhcpRanges: properties.properties?.subnet?.["dhcpRanges"],
                    gatewayAddress:
                      properties.properties?.subnet?.["gatewayAddress"],
                  },
              revision: properties.properties?.["revision"],
            },
      },
    });
}

export async function _updateDeserialize(
  result:
    | WorkloadNetworkSegmentsUpdate200Response
    | WorkloadNetworkSegmentsUpdate202Response
    | WorkloadNetworkSegmentsUpdateDefaultResponse
    | WorkloadNetworkSegmentsUpdateLogicalResponse,
): Promise<WorkloadNetworkSegment> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as WorkloadNetworkSegmentsUpdateLogicalResponse;
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
          displayName: result.body.properties?.["displayName"],
          connectedGateway: result.body.properties?.["connectedGateway"],
          subnet: !result.body.properties?.subnet
            ? undefined
            : {
                dhcpRanges: result.body.properties?.subnet?.["dhcpRanges"],
                gatewayAddress:
                  result.body.properties?.subnet?.["gatewayAddress"],
              },
          portVif:
            result.body.properties?.["portVif"] === undefined
              ? result.body.properties?.["portVif"]
              : result.body.properties?.["portVif"].map((p) => ({
                  portName: p["portName"],
                })),
          status: result.body.properties?.["status"],
          provisioningState: result.body.properties?.["provisioningState"],
          revision: result.body.properties?.["revision"],
        },
  };
}

/** Update a WorkloadNetworkSegment */
export function update(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  segmentId: string,
  properties: WorkloadNetworkSegmentUpdate,
  options: WorkloadNetworkSegmentsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<WorkloadNetworkSegment>, WorkloadNetworkSegment> {
  return getLongRunningPoller(context, _updateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        segmentId,
        properties,
        options,
      ),
  }) as PollerLike<
    OperationState<WorkloadNetworkSegment>,
    WorkloadNetworkSegment
  >;
}

export function _deleteSegmentSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  segmentId: string,
  options: WorkloadNetworkSegmentsDeleteSegmentOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | WorkloadNetworkSegmentsDeleteSegment200Response
  | WorkloadNetworkSegmentsDeleteSegment202Response
  | WorkloadNetworkSegmentsDeleteSegment204Response
  | WorkloadNetworkSegmentsDeleteSegmentDefaultResponse
  | WorkloadNetworkSegmentsDeleteSegmentLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments/{segmentId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      segmentId,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteSegmentDeserialize(
  result:
    | WorkloadNetworkSegmentsDeleteSegment200Response
    | WorkloadNetworkSegmentsDeleteSegment202Response
    | WorkloadNetworkSegmentsDeleteSegment204Response
    | WorkloadNetworkSegmentsDeleteSegmentDefaultResponse
    | WorkloadNetworkSegmentsDeleteSegmentLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as WorkloadNetworkSegmentsDeleteSegmentLogicalResponse;
  return;
}

/** Delete a WorkloadNetworkSegment */
export function deleteSegment(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  segmentId: string,
  options: WorkloadNetworkSegmentsDeleteSegmentOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _deleteSegmentDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _deleteSegmentSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        segmentId,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}
