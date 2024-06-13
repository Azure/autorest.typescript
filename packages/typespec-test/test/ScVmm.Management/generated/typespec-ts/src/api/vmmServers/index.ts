// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  VmmServer,
  VmmServerTagsUpdate,
  VmmServerListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  ScVmmContext as Client,
  VmmServersCreateOrUpdate200Response,
  VmmServersCreateOrUpdate201Response,
  VmmServersCreateOrUpdateDefaultResponse,
  VmmServersCreateOrUpdateLogicalResponse,
  VmmServersDelete202Response,
  VmmServersDelete204Response,
  VmmServersDeleteDefaultResponse,
  VmmServersDeleteLogicalResponse,
  VmmServersGet200Response,
  VmmServersGetDefaultResponse,
  VmmServersListByResourceGroup200Response,
  VmmServersListByResourceGroupDefaultResponse,
  VmmServersListBySubscription200Response,
  VmmServersListBySubscriptionDefaultResponse,
  VmmServersUpdate200Response,
  VmmServersUpdate202Response,
  VmmServersUpdateDefaultResponse,
  VmmServersUpdateLogicalResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  VmmServersGetOptionalParams,
  VmmServersCreateOrUpdateOptionalParams,
  VmmServersUpdateOptionalParams,
  VmmServersDeleteOptionalParams,
  VmmServersListByResourceGroupOptionalParams,
  VmmServersListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmmServerName: string,
  options: VmmServersGetOptionalParams = { requestOptions: {} },
): StreamableMethod<VmmServersGet200Response | VmmServersGetDefaultResponse> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}",
      subscriptionId,
      resourceGroupName,
      vmmServerName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: VmmServersGet200Response | VmmServersGetDefaultResponse,
): Promise<VmmServer> {
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
          credentials: !result.body.properties?.credentials
            ? undefined
            : {
                username: result.body.properties?.credentials?.["username"],
                password: result.body.properties?.credentials?.["password"],
              },
          fqdn: result.body.properties?.["fqdn"],
          port: result.body.properties?.["port"],
          connectionStatus: result.body.properties?.["connectionStatus"],
          errorMessage: result.body.properties?.["errorMessage"],
          uuid: result.body.properties?.["uuid"],
          version: result.body.properties?.["version"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Implements VmmServer GET method. */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmmServerName: string,
  options: VmmServersGetOptionalParams = { requestOptions: {} },
): Promise<VmmServer> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    vmmServerName,
    options,
  );
  return _getDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmmServerName: string,
  resource: VmmServer,
  options: VmmServersCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | VmmServersCreateOrUpdate200Response
  | VmmServersCreateOrUpdate201Response
  | VmmServersCreateOrUpdateDefaultResponse
  | VmmServersCreateOrUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}",
      subscriptionId,
      resourceGroupName,
      vmmServerName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        location: resource["location"],
        tags: resource["tags"],
        properties: !resource.properties
          ? undefined
          : {
              credentials: !resource.properties?.credentials
                ? undefined
                : {
                    username: resource.properties?.credentials?.["username"],
                    password: resource.properties?.credentials?.["password"],
                  },
              fqdn: resource.properties?.["fqdn"],
              port: resource.properties?.["port"],
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
    | VmmServersCreateOrUpdate200Response
    | VmmServersCreateOrUpdate201Response
    | VmmServersCreateOrUpdateDefaultResponse
    | VmmServersCreateOrUpdateLogicalResponse,
): Promise<VmmServer> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as VmmServersCreateOrUpdateLogicalResponse;
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
          credentials: !result.body.properties?.credentials
            ? undefined
            : {
                username: result.body.properties?.credentials?.["username"],
                password: result.body.properties?.credentials?.["password"],
              },
          fqdn: result.body.properties?.["fqdn"],
          port: result.body.properties?.["port"],
          connectionStatus: result.body.properties?.["connectionStatus"],
          errorMessage: result.body.properties?.["errorMessage"],
          uuid: result.body.properties?.["uuid"],
          version: result.body.properties?.["version"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Onboards the SCVmm fabric as an Azure VmmServer resource. */
export function createOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmmServerName: string,
  resource: VmmServer,
  options: VmmServersCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<VmmServer>, VmmServer> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        subscriptionId,
        resourceGroupName,
        vmmServerName,
        resource,
        options,
      ),
  }) as PollerLike<OperationState<VmmServer>, VmmServer>;
}

export function _updateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmmServerName: string,
  properties: VmmServerTagsUpdate,
  options: VmmServersUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | VmmServersUpdate200Response
  | VmmServersUpdate202Response
  | VmmServersUpdateDefaultResponse
  | VmmServersUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}",
      subscriptionId,
      resourceGroupName,
      vmmServerName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: { tags: properties["tags"] },
    });
}

export async function _updateDeserialize(
  result:
    | VmmServersUpdate200Response
    | VmmServersUpdate202Response
    | VmmServersUpdateDefaultResponse
    | VmmServersUpdateLogicalResponse,
): Promise<VmmServer> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as VmmServersUpdateLogicalResponse;
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
          credentials: !result.body.properties?.credentials
            ? undefined
            : {
                username: result.body.properties?.credentials?.["username"],
                password: result.body.properties?.credentials?.["password"],
              },
          fqdn: result.body.properties?.["fqdn"],
          port: result.body.properties?.["port"],
          connectionStatus: result.body.properties?.["connectionStatus"],
          errorMessage: result.body.properties?.["errorMessage"],
          uuid: result.body.properties?.["uuid"],
          version: result.body.properties?.["version"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Updates the VmmServers resource. */
export function update(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmmServerName: string,
  properties: VmmServerTagsUpdate,
  options: VmmServersUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<VmmServer>, VmmServer> {
  return getLongRunningPoller(context, _updateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(
        context,
        subscriptionId,
        resourceGroupName,
        vmmServerName,
        properties,
        options,
      ),
  }) as PollerLike<OperationState<VmmServer>, VmmServer>;
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmmServerName: string,
  options: VmmServersDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | VmmServersDelete202Response
  | VmmServersDelete204Response
  | VmmServersDeleteDefaultResponse
  | VmmServersDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}",
      subscriptionId,
      resourceGroupName,
      vmmServerName,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { force: options?.force },
    });
}

export async function _$deleteDeserialize(
  result:
    | VmmServersDelete202Response
    | VmmServersDelete204Response
    | VmmServersDeleteDefaultResponse
    | VmmServersDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as VmmServersDeleteLogicalResponse;
  return;
}

/** Removes the SCVmm fabric from Azure. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmmServerName: string,
  options: VmmServersDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(
        context,
        subscriptionId,
        resourceGroupName,
        vmmServerName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}

export function _listByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: VmmServersListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | VmmServersListByResourceGroup200Response
  | VmmServersListByResourceGroupDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByResourceGroupDeserialize(
  result:
    | VmmServersListByResourceGroup200Response
    | VmmServersListByResourceGroupDefaultResponse,
): Promise<VmmServerListResult> {
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
            credentials: !p.properties?.credentials
              ? undefined
              : {
                  username: p.properties?.credentials?.["username"],
                  password: p.properties?.credentials?.["password"],
                },
            fqdn: p.properties?.["fqdn"],
            port: p.properties?.["port"],
            connectionStatus: p.properties?.["connectionStatus"],
            errorMessage: p.properties?.["errorMessage"],
            uuid: p.properties?.["uuid"],
            version: p.properties?.["version"],
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

/** List of VmmServers in a resource group. */
export function listByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: VmmServersListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<VmmServer> {
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
  options: VmmServersListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | VmmServersListBySubscription200Response
  | VmmServersListBySubscriptionDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/vmmServers",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listBySubscriptionDeserialize(
  result:
    | VmmServersListBySubscription200Response
    | VmmServersListBySubscriptionDefaultResponse,
): Promise<VmmServerListResult> {
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
            credentials: !p.properties?.credentials
              ? undefined
              : {
                  username: p.properties?.credentials?.["username"],
                  password: p.properties?.credentials?.["password"],
                },
            fqdn: p.properties?.["fqdn"],
            port: p.properties?.["port"],
            connectionStatus: p.properties?.["connectionStatus"],
            errorMessage: p.properties?.["errorMessage"],
            uuid: p.properties?.["uuid"],
            version: p.properties?.["version"],
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

/** List of VmmServers in a subscription. */
export function listBySubscription(
  context: Client,
  subscriptionId: string,
  options: VmmServersListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<VmmServer> {
  return buildPagedAsyncIterator(
    context,
    () => _listBySubscriptionSend(context, subscriptionId, options),
    _listBySubscriptionDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
