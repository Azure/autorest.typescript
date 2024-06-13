// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  VirtualNetworkAddress,
  VirtualNetworkAddressListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  DatabaseContext as Client,
  VirtualNetworkAddressesCreateOrUpdate200Response,
  VirtualNetworkAddressesCreateOrUpdate201Response,
  VirtualNetworkAddressesCreateOrUpdateDefaultResponse,
  VirtualNetworkAddressesCreateOrUpdateLogicalResponse,
  VirtualNetworkAddressesDelete202Response,
  VirtualNetworkAddressesDelete204Response,
  VirtualNetworkAddressesDeleteDefaultResponse,
  VirtualNetworkAddressesDeleteLogicalResponse,
  VirtualNetworkAddressesGet200Response,
  VirtualNetworkAddressesGetDefaultResponse,
  VirtualNetworkAddressesListByCloudVmCluster200Response,
  VirtualNetworkAddressesListByCloudVmClusterDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  VirtualNetworkAddressesCreateOrUpdateOptionalParams,
  VirtualNetworkAddressesGetOptionalParams,
  VirtualNetworkAddressesDeleteOptionalParams,
  VirtualNetworkAddressesListByCloudVmClusterOptionalParams,
} from "../../models/options.js";

export function _createOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  virtualnetworkaddressname: string,
  resource: VirtualNetworkAddress,
  options: VirtualNetworkAddressesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | VirtualNetworkAddressesCreateOrUpdate200Response
  | VirtualNetworkAddressesCreateOrUpdate201Response
  | VirtualNetworkAddressesCreateOrUpdateDefaultResponse
  | VirtualNetworkAddressesCreateOrUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/virtualNetworkAddresses/{virtualnetworkaddressname}",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
      virtualnetworkaddressname,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? undefined
          : {
              ipAddress: resource.properties?.["ipAddress"],
              vmOcid: resource.properties?.["vmOcid"],
            },
      },
    });
}

export async function _createOrUpdateDeserialize(
  result:
    | VirtualNetworkAddressesCreateOrUpdate200Response
    | VirtualNetworkAddressesCreateOrUpdate201Response
    | VirtualNetworkAddressesCreateOrUpdateDefaultResponse
    | VirtualNetworkAddressesCreateOrUpdateLogicalResponse,
): Promise<VirtualNetworkAddress> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as VirtualNetworkAddressesCreateOrUpdateLogicalResponse;
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
          ipAddress: result.body.properties?.["ipAddress"],
          vmOcid: result.body.properties?.["vmOcid"],
          ocid: result.body.properties?.["ocid"],
          domain: result.body.properties?.["domain"],
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          provisioningState: result.body.properties?.["provisioningState"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          timeAssigned:
            result.body.properties?.["timeAssigned"] !== undefined
              ? new Date(result.body.properties?.["timeAssigned"])
              : undefined,
        },
  };
}

/** Create a VirtualNetworkAddress */
export function createOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  virtualnetworkaddressname: string,
  resource: VirtualNetworkAddress,
  options: VirtualNetworkAddressesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<VirtualNetworkAddress>, VirtualNetworkAddress> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        virtualnetworkaddressname,
        resource,
        options,
      ),
  }) as PollerLike<
    OperationState<VirtualNetworkAddress>,
    VirtualNetworkAddress
  >;
}

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  virtualnetworkaddressname: string,
  options: VirtualNetworkAddressesGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | VirtualNetworkAddressesGet200Response
  | VirtualNetworkAddressesGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/virtualNetworkAddresses/{virtualnetworkaddressname}",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
      virtualnetworkaddressname,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result:
    | VirtualNetworkAddressesGet200Response
    | VirtualNetworkAddressesGetDefaultResponse,
): Promise<VirtualNetworkAddress> {
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
          ipAddress: result.body.properties?.["ipAddress"],
          vmOcid: result.body.properties?.["vmOcid"],
          ocid: result.body.properties?.["ocid"],
          domain: result.body.properties?.["domain"],
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          provisioningState: result.body.properties?.["provisioningState"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          timeAssigned:
            result.body.properties?.["timeAssigned"] !== undefined
              ? new Date(result.body.properties?.["timeAssigned"])
              : undefined,
        },
  };
}

/** Get a VirtualNetworkAddress */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  virtualnetworkaddressname: string,
  options: VirtualNetworkAddressesGetOptionalParams = { requestOptions: {} },
): Promise<VirtualNetworkAddress> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    cloudvmclustername,
    virtualnetworkaddressname,
    options,
  );
  return _getDeserialize(result);
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  virtualnetworkaddressname: string,
  options: VirtualNetworkAddressesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | VirtualNetworkAddressesDelete202Response
  | VirtualNetworkAddressesDelete204Response
  | VirtualNetworkAddressesDeleteDefaultResponse
  | VirtualNetworkAddressesDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/virtualNetworkAddresses/{virtualnetworkaddressname}",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
      virtualnetworkaddressname,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | VirtualNetworkAddressesDelete202Response
    | VirtualNetworkAddressesDelete204Response
    | VirtualNetworkAddressesDeleteDefaultResponse
    | VirtualNetworkAddressesDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as VirtualNetworkAddressesDeleteLogicalResponse;
  return;
}

/** Delete a VirtualNetworkAddress */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  virtualnetworkaddressname: string,
  options: VirtualNetworkAddressesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        virtualnetworkaddressname,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}

export function _listByCloudVmClusterSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  options: VirtualNetworkAddressesListByCloudVmClusterOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | VirtualNetworkAddressesListByCloudVmCluster200Response
  | VirtualNetworkAddressesListByCloudVmClusterDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/virtualNetworkAddresses",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByCloudVmClusterDeserialize(
  result:
    | VirtualNetworkAddressesListByCloudVmCluster200Response
    | VirtualNetworkAddressesListByCloudVmClusterDefaultResponse,
): Promise<VirtualNetworkAddressListResult> {
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
            ipAddress: p.properties?.["ipAddress"],
            vmOcid: p.properties?.["vmOcid"],
            ocid: p.properties?.["ocid"],
            domain: p.properties?.["domain"],
            lifecycleDetails: p.properties?.["lifecycleDetails"],
            provisioningState: p.properties?.["provisioningState"],
            lifecycleState: p.properties?.["lifecycleState"],
            timeAssigned:
              p.properties?.["timeAssigned"] !== undefined
                ? new Date(p.properties?.["timeAssigned"])
                : undefined,
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List VirtualNetworkAddress resources by CloudVmCluster */
export function listByCloudVmCluster(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  options: VirtualNetworkAddressesListByCloudVmClusterOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<VirtualNetworkAddress> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByCloudVmClusterSend(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        options,
      ),
    _listByCloudVmClusterDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
