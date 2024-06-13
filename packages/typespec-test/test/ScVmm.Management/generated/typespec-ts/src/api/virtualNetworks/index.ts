// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  VirtualNetwork,
  VirtualNetworkTagsUpdate,
  VirtualNetworkListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  ScVmmContext as Client,
  VirtualNetworksCreateOrUpdate200Response,
  VirtualNetworksCreateOrUpdate201Response,
  VirtualNetworksCreateOrUpdateDefaultResponse,
  VirtualNetworksCreateOrUpdateLogicalResponse,
  VirtualNetworksDelete202Response,
  VirtualNetworksDelete204Response,
  VirtualNetworksDeleteDefaultResponse,
  VirtualNetworksDeleteLogicalResponse,
  VirtualNetworksGet200Response,
  VirtualNetworksGetDefaultResponse,
  VirtualNetworksListByResourceGroup200Response,
  VirtualNetworksListByResourceGroupDefaultResponse,
  VirtualNetworksListBySubscription200Response,
  VirtualNetworksListBySubscriptionDefaultResponse,
  VirtualNetworksUpdate200Response,
  VirtualNetworksUpdate202Response,
  VirtualNetworksUpdateDefaultResponse,
  VirtualNetworksUpdateLogicalResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  VirtualNetworksGetOptionalParams,
  VirtualNetworksCreateOrUpdateOptionalParams,
  VirtualNetworksUpdateOptionalParams,
  VirtualNetworksDeleteOptionalParams,
  VirtualNetworksListByResourceGroupOptionalParams,
  VirtualNetworksListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualNetworkName: string,
  options: VirtualNetworksGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  VirtualNetworksGet200Response | VirtualNetworksGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks/{virtualNetworkName}",
      subscriptionId,
      resourceGroupName,
      virtualNetworkName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: VirtualNetworksGet200Response | VirtualNetworksGetDefaultResponse,
): Promise<VirtualNetwork> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    location: result.body["location"],
    tags: result.body["tags"],
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
          inventoryItemId: result.body.properties?.["inventoryItemId"],
          uuid: result.body.properties?.["uuid"],
          vmmServerId: result.body.properties?.["vmmServerId"],
          networkName: result.body.properties?.["networkName"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Implements VirtualNetwork GET method. */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualNetworkName: string,
  options: VirtualNetworksGetOptionalParams = { requestOptions: {} },
): Promise<VirtualNetwork> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    virtualNetworkName,
    options,
  );
  return _getDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualNetworkName: string,
  resource: VirtualNetwork,
  options: VirtualNetworksCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | VirtualNetworksCreateOrUpdate200Response
  | VirtualNetworksCreateOrUpdate201Response
  | VirtualNetworksCreateOrUpdateDefaultResponse
  | VirtualNetworksCreateOrUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks/{virtualNetworkName}",
      subscriptionId,
      resourceGroupName,
      virtualNetworkName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        location: resource["location"],
        tags: resource["tags"],
        properties: !resource.properties
          ? undefined
          : {
              inventoryItemId: resource.properties?.["inventoryItemId"],
              uuid: resource.properties?.["uuid"],
              vmmServerId: resource.properties?.["vmmServerId"],
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
    | VirtualNetworksCreateOrUpdate200Response
    | VirtualNetworksCreateOrUpdate201Response
    | VirtualNetworksCreateOrUpdateDefaultResponse
    | VirtualNetworksCreateOrUpdateLogicalResponse,
): Promise<VirtualNetwork> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as VirtualNetworksCreateOrUpdateLogicalResponse;
  return {
    location: result.body["location"],
    tags: result.body["tags"],
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
          inventoryItemId: result.body.properties?.["inventoryItemId"],
          uuid: result.body.properties?.["uuid"],
          vmmServerId: result.body.properties?.["vmmServerId"],
          networkName: result.body.properties?.["networkName"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Onboards the ScVmm virtual network as an Azure virtual network resource. */
export function createOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualNetworkName: string,
  resource: VirtualNetwork,
  options: VirtualNetworksCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<VirtualNetwork>, VirtualNetwork> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        subscriptionId,
        resourceGroupName,
        virtualNetworkName,
        resource,
        options,
      ),
  }) as PollerLike<OperationState<VirtualNetwork>, VirtualNetwork>;
}

export function _updateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualNetworkName: string,
  properties: VirtualNetworkTagsUpdate,
  options: VirtualNetworksUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | VirtualNetworksUpdate200Response
  | VirtualNetworksUpdate202Response
  | VirtualNetworksUpdateDefaultResponse
  | VirtualNetworksUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks/{virtualNetworkName}",
      subscriptionId,
      resourceGroupName,
      virtualNetworkName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: { tags: properties["tags"] },
    });
}

export async function _updateDeserialize(
  result:
    | VirtualNetworksUpdate200Response
    | VirtualNetworksUpdate202Response
    | VirtualNetworksUpdateDefaultResponse
    | VirtualNetworksUpdateLogicalResponse,
): Promise<VirtualNetwork> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as VirtualNetworksUpdateLogicalResponse;
  return {
    location: result.body["location"],
    tags: result.body["tags"],
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
          inventoryItemId: result.body.properties?.["inventoryItemId"],
          uuid: result.body.properties?.["uuid"],
          vmmServerId: result.body.properties?.["vmmServerId"],
          networkName: result.body.properties?.["networkName"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Updates the VirtualNetworks resource. */
export function update(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualNetworkName: string,
  properties: VirtualNetworkTagsUpdate,
  options: VirtualNetworksUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<VirtualNetwork>, VirtualNetwork> {
  return getLongRunningPoller(context, _updateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(
        context,
        subscriptionId,
        resourceGroupName,
        virtualNetworkName,
        properties,
        options,
      ),
  }) as PollerLike<OperationState<VirtualNetwork>, VirtualNetwork>;
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualNetworkName: string,
  options: VirtualNetworksDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | VirtualNetworksDelete202Response
  | VirtualNetworksDelete204Response
  | VirtualNetworksDeleteDefaultResponse
  | VirtualNetworksDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks/{virtualNetworkName}",
      subscriptionId,
      resourceGroupName,
      virtualNetworkName,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { force: options?.force },
    });
}

export async function _$deleteDeserialize(
  result:
    | VirtualNetworksDelete202Response
    | VirtualNetworksDelete204Response
    | VirtualNetworksDeleteDefaultResponse
    | VirtualNetworksDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as VirtualNetworksDeleteLogicalResponse;
  return;
}

/** Deregisters the ScVmm virtual network from Azure. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualNetworkName: string,
  options: VirtualNetworksDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(
        context,
        subscriptionId,
        resourceGroupName,
        virtualNetworkName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}

export function _listByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: VirtualNetworksListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | VirtualNetworksListByResourceGroup200Response
  | VirtualNetworksListByResourceGroupDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByResourceGroupDeserialize(
  result:
    | VirtualNetworksListByResourceGroup200Response
    | VirtualNetworksListByResourceGroupDefaultResponse,
): Promise<VirtualNetworkListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      location: p["location"],
      tags: p["tags"],
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
            inventoryItemId: p.properties?.["inventoryItemId"],
            uuid: p.properties?.["uuid"],
            vmmServerId: p.properties?.["vmmServerId"],
            networkName: p.properties?.["networkName"],
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

/** List of VirtualNetworks in a resource group. */
export function listByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: VirtualNetworksListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<VirtualNetwork> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _listByResourceGroupDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: VirtualNetworksListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | VirtualNetworksListBySubscription200Response
  | VirtualNetworksListBySubscriptionDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/virtualNetworks",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listBySubscriptionDeserialize(
  result:
    | VirtualNetworksListBySubscription200Response
    | VirtualNetworksListBySubscriptionDefaultResponse,
): Promise<VirtualNetworkListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      location: p["location"],
      tags: p["tags"],
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
            inventoryItemId: p.properties?.["inventoryItemId"],
            uuid: p.properties?.["uuid"],
            vmmServerId: p.properties?.["vmmServerId"],
            networkName: p.properties?.["networkName"],
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

/** List of VirtualNetworks in a subscription. */
export function listBySubscription(
  context: Client,
  subscriptionId: string,
  options: VirtualNetworksListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<VirtualNetwork> {
  return buildPagedAsyncIterator(
    context,
    () => _listBySubscriptionSend(context, subscriptionId, options),
    _listBySubscriptionDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
