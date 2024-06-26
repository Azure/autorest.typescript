// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  WorkloadNetworkDnsServiceListResult,
  WorkloadNetworkDnsService,
  WorkloadNetworkDnsServiceUpdate,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  AVSContext as Client,
  WorkloadNetworkDnsServicesCreate200Response,
  WorkloadNetworkDnsServicesCreate201Response,
  WorkloadNetworkDnsServicesCreateDefaultResponse,
  WorkloadNetworkDnsServicesCreateLogicalResponse,
  WorkloadNetworkDnsServicesDelete200Response,
  WorkloadNetworkDnsServicesDelete202Response,
  WorkloadNetworkDnsServicesDelete204Response,
  WorkloadNetworkDnsServicesDeleteDefaultResponse,
  WorkloadNetworkDnsServicesDeleteLogicalResponse,
  WorkloadNetworkDnsServicesGet200Response,
  WorkloadNetworkDnsServicesGetDefaultResponse,
  WorkloadNetworkDnsServicesListByWorkloadNetwork200Response,
  WorkloadNetworkDnsServicesListByWorkloadNetworkDefaultResponse,
  WorkloadNetworkDnsServicesUpdate200Response,
  WorkloadNetworkDnsServicesUpdate202Response,
  WorkloadNetworkDnsServicesUpdateDefaultResponse,
  WorkloadNetworkDnsServicesUpdateLogicalResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  WorkloadNetworkDnsServicesListByWorkloadNetworkOptionalParams,
  WorkloadNetworkDnsServicesGetOptionalParams,
  WorkloadNetworkDnsServicesCreateOptionalParams,
  WorkloadNetworkDnsServicesUpdateOptionalParams,
  WorkloadNetworkDnsServicesDeleteOptionalParams,
} from "../../models/options.js";

export function _listByWorkloadNetworkSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkDnsServicesListByWorkloadNetworkOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | WorkloadNetworkDnsServicesListByWorkloadNetwork200Response
  | WorkloadNetworkDnsServicesListByWorkloadNetworkDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByWorkloadNetworkDeserialize(
  result:
    | WorkloadNetworkDnsServicesListByWorkloadNetwork200Response
    | WorkloadNetworkDnsServicesListByWorkloadNetworkDefaultResponse,
): Promise<WorkloadNetworkDnsServiceListResult> {
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
            dnsServiceIp: p.properties?.["dnsServiceIp"],
            defaultDnsZone: p.properties?.["defaultDnsZone"],
            fqdnZones: p.properties?.["fqdnZones"],
            logLevel: p.properties?.["logLevel"],
            status: p.properties?.["status"],
            provisioningState: p.properties?.["provisioningState"],
            revision: p.properties?.["revision"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List WorkloadNetworkDnsService resources by WorkloadNetwork */
export function listByWorkloadNetwork(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkDnsServicesListByWorkloadNetworkOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<WorkloadNetworkDnsService> {
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
  dnsServiceId: string,
  options: WorkloadNetworkDnsServicesGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | WorkloadNetworkDnsServicesGet200Response
  | WorkloadNetworkDnsServicesGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      dnsServiceId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result:
    | WorkloadNetworkDnsServicesGet200Response
    | WorkloadNetworkDnsServicesGetDefaultResponse,
): Promise<WorkloadNetworkDnsService> {
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
          dnsServiceIp: result.body.properties?.["dnsServiceIp"],
          defaultDnsZone: result.body.properties?.["defaultDnsZone"],
          fqdnZones: result.body.properties?.["fqdnZones"],
          logLevel: result.body.properties?.["logLevel"],
          status: result.body.properties?.["status"],
          provisioningState: result.body.properties?.["provisioningState"],
          revision: result.body.properties?.["revision"],
        },
  };
}

/** Get a WorkloadNetworkDnsService */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  dnsServiceId: string,
  options: WorkloadNetworkDnsServicesGetOptionalParams = { requestOptions: {} },
): Promise<WorkloadNetworkDnsService> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    dnsServiceId,
    options,
  );
  return _getDeserialize(result);
}

export function _createSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  dnsServiceId: string,
  workloadNetworkDnsService: WorkloadNetworkDnsService,
  options: WorkloadNetworkDnsServicesCreateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | WorkloadNetworkDnsServicesCreate200Response
  | WorkloadNetworkDnsServicesCreate201Response
  | WorkloadNetworkDnsServicesCreateDefaultResponse
  | WorkloadNetworkDnsServicesCreateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      dnsServiceId,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !workloadNetworkDnsService.properties
          ? undefined
          : {
              displayName:
                workloadNetworkDnsService.properties?.["displayName"],
              dnsServiceIp:
                workloadNetworkDnsService.properties?.["dnsServiceIp"],
              defaultDnsZone:
                workloadNetworkDnsService.properties?.["defaultDnsZone"],
              fqdnZones: workloadNetworkDnsService.properties?.["fqdnZones"],
              logLevel: workloadNetworkDnsService.properties?.["logLevel"],
              revision: workloadNetworkDnsService.properties?.["revision"],
            },
      },
    });
}

export async function _createDeserialize(
  result:
    | WorkloadNetworkDnsServicesCreate200Response
    | WorkloadNetworkDnsServicesCreate201Response
    | WorkloadNetworkDnsServicesCreateDefaultResponse
    | WorkloadNetworkDnsServicesCreateLogicalResponse,
): Promise<WorkloadNetworkDnsService> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as WorkloadNetworkDnsServicesCreateLogicalResponse;
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
          dnsServiceIp: result.body.properties?.["dnsServiceIp"],
          defaultDnsZone: result.body.properties?.["defaultDnsZone"],
          fqdnZones: result.body.properties?.["fqdnZones"],
          logLevel: result.body.properties?.["logLevel"],
          status: result.body.properties?.["status"],
          provisioningState: result.body.properties?.["provisioningState"],
          revision: result.body.properties?.["revision"],
        },
  };
}

/** Create a WorkloadNetworkDnsService */
export function create(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  dnsServiceId: string,
  workloadNetworkDnsService: WorkloadNetworkDnsService,
  options: WorkloadNetworkDnsServicesCreateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<WorkloadNetworkDnsService>,
  WorkloadNetworkDnsService
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
        dnsServiceId,
        workloadNetworkDnsService,
        options,
      ),
  }) as PollerLike<
    OperationState<WorkloadNetworkDnsService>,
    WorkloadNetworkDnsService
  >;
}

export function _updateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  dnsServiceId: string,
  workloadNetworkDnsService: WorkloadNetworkDnsServiceUpdate,
  options: WorkloadNetworkDnsServicesUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | WorkloadNetworkDnsServicesUpdate200Response
  | WorkloadNetworkDnsServicesUpdate202Response
  | WorkloadNetworkDnsServicesUpdateDefaultResponse
  | WorkloadNetworkDnsServicesUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      dnsServiceId,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !workloadNetworkDnsService.properties
          ? undefined
          : {
              displayName:
                workloadNetworkDnsService.properties?.["displayName"],
              dnsServiceIp:
                workloadNetworkDnsService.properties?.["dnsServiceIp"],
              defaultDnsZone:
                workloadNetworkDnsService.properties?.["defaultDnsZone"],
              fqdnZones: workloadNetworkDnsService.properties?.["fqdnZones"],
              logLevel: workloadNetworkDnsService.properties?.["logLevel"],
              revision: workloadNetworkDnsService.properties?.["revision"],
            },
      },
    });
}

export async function _updateDeserialize(
  result:
    | WorkloadNetworkDnsServicesUpdate200Response
    | WorkloadNetworkDnsServicesUpdate202Response
    | WorkloadNetworkDnsServicesUpdateDefaultResponse
    | WorkloadNetworkDnsServicesUpdateLogicalResponse,
): Promise<WorkloadNetworkDnsService> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as WorkloadNetworkDnsServicesUpdateLogicalResponse;
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
          dnsServiceIp: result.body.properties?.["dnsServiceIp"],
          defaultDnsZone: result.body.properties?.["defaultDnsZone"],
          fqdnZones: result.body.properties?.["fqdnZones"],
          logLevel: result.body.properties?.["logLevel"],
          status: result.body.properties?.["status"],
          provisioningState: result.body.properties?.["provisioningState"],
          revision: result.body.properties?.["revision"],
        },
  };
}

/** Update a WorkloadNetworkDnsService */
export function update(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  dnsServiceId: string,
  workloadNetworkDnsService: WorkloadNetworkDnsServiceUpdate,
  options: WorkloadNetworkDnsServicesUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<WorkloadNetworkDnsService>,
  WorkloadNetworkDnsService
> {
  return getLongRunningPoller(context, _updateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        dnsServiceId,
        workloadNetworkDnsService,
        options,
      ),
  }) as PollerLike<
    OperationState<WorkloadNetworkDnsService>,
    WorkloadNetworkDnsService
  >;
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dnsServiceId: string,
  privateCloudName: string,
  options: WorkloadNetworkDnsServicesDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | WorkloadNetworkDnsServicesDelete200Response
  | WorkloadNetworkDnsServicesDelete202Response
  | WorkloadNetworkDnsServicesDelete204Response
  | WorkloadNetworkDnsServicesDeleteDefaultResponse
  | WorkloadNetworkDnsServicesDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}",
      subscriptionId,
      resourceGroupName,
      dnsServiceId,
      privateCloudName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | WorkloadNetworkDnsServicesDelete200Response
    | WorkloadNetworkDnsServicesDelete202Response
    | WorkloadNetworkDnsServicesDelete204Response
    | WorkloadNetworkDnsServicesDeleteDefaultResponse
    | WorkloadNetworkDnsServicesDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as WorkloadNetworkDnsServicesDeleteLogicalResponse;
  return;
}

/** Delete a WorkloadNetworkDnsService */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dnsServiceId: string,
  privateCloudName: string,
  options: WorkloadNetworkDnsServicesDeleteOptionalParams = {
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
        dnsServiceId,
        privateCloudName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}
