// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  CreatedByType,
  Cloud,
  CloudTagsUpdate,
  CloudListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  CloudsCreateOrUpdate200Response,
  CloudsCreateOrUpdate201Response,
  CloudsCreateOrUpdateDefaultResponse,
  CloudsCreateOrUpdateLogicalResponse,
  CloudsDelete202Response,
  CloudsDelete204Response,
  CloudsDeleteDefaultResponse,
  CloudsDeleteLogicalResponse,
  CloudsGet200Response,
  CloudsGetDefaultResponse,
  CloudsListByResourceGroup200Response,
  CloudsListByResourceGroupDefaultResponse,
  CloudsListBySubscription200Response,
  CloudsListBySubscriptionDefaultResponse,
  CloudsUpdate200Response,
  CloudsUpdate202Response,
  CloudsUpdateDefaultResponse,
  CloudsUpdateLogicalResponse,
  isUnexpected,
  ScVmmContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  CloudsGetOptionalParams,
  CloudsCreateOrUpdateOptionalParams,
  CloudsUpdateOptionalParams,
  CloudsDeleteOptionalParams,
  CloudsListByResourceGroupOptionalParams,
  CloudsListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudResourceName: string,
  options: CloudsGetOptionalParams = { requestOptions: {} },
): StreamableMethod<CloudsGet200Response | CloudsGetDefaultResponse> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds/{cloudResourceName}",
      subscriptionId,
      resourceGroupName,
      cloudResourceName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: CloudsGet200Response | CloudsGetDefaultResponse,
): Promise<Cloud> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    tags: result.body["tags"],
    location: result.body["location"],
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
          inventoryItemId: result.body.properties?.["inventoryItemId"],
          uuid: result.body.properties?.["uuid"],
          vmmServerId: result.body.properties?.["vmmServerId"],
          cloudName: result.body.properties?.["cloudName"],
          cloudCapacity: !result.body.properties?.cloudCapacity
            ? undefined
            : {
                cpuCount: result.body.properties?.cloudCapacity?.["cpuCount"],
                memoryMB: result.body.properties?.cloudCapacity?.["memoryMB"],
                vmCount: result.body.properties?.cloudCapacity?.["vmCount"],
              },
          storageQosPolicies:
            result.body.properties?.["storageQoSPolicies"] === undefined
              ? result.body.properties?.["storageQoSPolicies"]
              : result.body.properties?.["storageQoSPolicies"].map((p) => ({
                  name: p["name"],
                  id: p["id"],
                  iopsMaximum: p["iopsMaximum"],
                  iopsMinimum: p["iopsMinimum"],
                  bandwidthLimit: p["bandwidthLimit"],
                  policyId: p["policyId"],
                })),
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Implements Cloud GET method. */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudResourceName: string,
  options: CloudsGetOptionalParams = { requestOptions: {} },
): Promise<Cloud> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    cloudResourceName,
    options,
  );
  return _getDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudResourceName: string,
  resource: Cloud,
  options: CloudsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | CloudsCreateOrUpdate200Response
  | CloudsCreateOrUpdate201Response
  | CloudsCreateOrUpdateDefaultResponse
  | CloudsCreateOrUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds/{cloudResourceName}",
      subscriptionId,
      resourceGroupName,
      cloudResourceName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: resource["tags"],
        location: resource["location"],
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
    | CloudsCreateOrUpdate200Response
    | CloudsCreateOrUpdate201Response
    | CloudsCreateOrUpdateDefaultResponse
    | CloudsCreateOrUpdateLogicalResponse,
): Promise<Cloud> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as CloudsCreateOrUpdateLogicalResponse;
  return {
    tags: result.body["tags"],
    location: result.body["location"],
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
          inventoryItemId: result.body.properties?.["inventoryItemId"],
          uuid: result.body.properties?.["uuid"],
          vmmServerId: result.body.properties?.["vmmServerId"],
          cloudName: result.body.properties?.["cloudName"],
          cloudCapacity: !result.body.properties?.cloudCapacity
            ? undefined
            : {
                cpuCount: result.body.properties?.cloudCapacity?.["cpuCount"],
                memoryMB: result.body.properties?.cloudCapacity?.["memoryMB"],
                vmCount: result.body.properties?.cloudCapacity?.["vmCount"],
              },
          storageQosPolicies:
            result.body.properties?.["storageQoSPolicies"] === undefined
              ? result.body.properties?.["storageQoSPolicies"]
              : result.body.properties?.["storageQoSPolicies"].map((p) => ({
                  name: p["name"],
                  id: p["id"],
                  iopsMaximum: p["iopsMaximum"],
                  iopsMinimum: p["iopsMinimum"],
                  bandwidthLimit: p["bandwidthLimit"],
                  policyId: p["policyId"],
                })),
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Onboards the ScVmm fabric cloud as an Azure cloud resource. */
export function createOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudResourceName: string,
  resource: Cloud,
  options: CloudsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Cloud>, Cloud> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        subscriptionId,
        resourceGroupName,
        cloudResourceName,
        resource,
        options,
      ),
  }) as PollerLike<OperationState<Cloud>, Cloud>;
}

export function _updateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudResourceName: string,
  properties: CloudTagsUpdate,
  options: CloudsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | CloudsUpdate200Response
  | CloudsUpdate202Response
  | CloudsUpdateDefaultResponse
  | CloudsUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds/{cloudResourceName}",
      subscriptionId,
      resourceGroupName,
      cloudResourceName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: { tags: properties["tags"] },
    });
}

export async function _updateDeserialize(
  result:
    | CloudsUpdate200Response
    | CloudsUpdate202Response
    | CloudsUpdateDefaultResponse
    | CloudsUpdateLogicalResponse,
): Promise<Cloud> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as CloudsUpdateLogicalResponse;
  return {
    tags: result.body["tags"],
    location: result.body["location"],
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
          inventoryItemId: result.body.properties?.["inventoryItemId"],
          uuid: result.body.properties?.["uuid"],
          vmmServerId: result.body.properties?.["vmmServerId"],
          cloudName: result.body.properties?.["cloudName"],
          cloudCapacity: !result.body.properties?.cloudCapacity
            ? undefined
            : {
                cpuCount: result.body.properties?.cloudCapacity?.["cpuCount"],
                memoryMB: result.body.properties?.cloudCapacity?.["memoryMB"],
                vmCount: result.body.properties?.cloudCapacity?.["vmCount"],
              },
          storageQosPolicies:
            result.body.properties?.["storageQoSPolicies"] === undefined
              ? result.body.properties?.["storageQoSPolicies"]
              : result.body.properties?.["storageQoSPolicies"].map((p) => ({
                  name: p["name"],
                  id: p["id"],
                  iopsMaximum: p["iopsMaximum"],
                  iopsMinimum: p["iopsMinimum"],
                  bandwidthLimit: p["bandwidthLimit"],
                  policyId: p["policyId"],
                })),
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Updates the Clouds resource. */
export function update(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudResourceName: string,
  properties: CloudTagsUpdate,
  options: CloudsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Cloud>, Cloud> {
  return getLongRunningPoller(context, _updateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(
        context,
        subscriptionId,
        resourceGroupName,
        cloudResourceName,
        properties,
        options,
      ),
  }) as PollerLike<OperationState<Cloud>, Cloud>;
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudResourceName: string,
  options: CloudsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | CloudsDelete202Response
  | CloudsDelete204Response
  | CloudsDeleteDefaultResponse
  | CloudsDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds/{cloudResourceName}",
      subscriptionId,
      resourceGroupName,
      cloudResourceName,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { force: options?.force },
    });
}

export async function _$deleteDeserialize(
  result:
    | CloudsDelete202Response
    | CloudsDelete204Response
    | CloudsDeleteDefaultResponse
    | CloudsDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as CloudsDeleteLogicalResponse;
  return;
}

/** Deregisters the ScVmm fabric cloud from Azure. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudResourceName: string,
  options: CloudsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(
        context,
        subscriptionId,
        resourceGroupName,
        cloudResourceName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}

export function _listByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: CloudsListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | CloudsListByResourceGroup200Response
  | CloudsListByResourceGroupDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByResourceGroupDeserialize(
  result:
    | CloudsListByResourceGroup200Response
    | CloudsListByResourceGroupDefaultResponse,
): Promise<CloudListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      tags: p["tags"],
      location: p["location"],
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
            inventoryItemId: p.properties?.["inventoryItemId"],
            uuid: p.properties?.["uuid"],
            vmmServerId: p.properties?.["vmmServerId"],
            cloudName: p.properties?.["cloudName"],
            cloudCapacity: !p.properties?.cloudCapacity
              ? undefined
              : {
                  cpuCount: p.properties?.cloudCapacity?.["cpuCount"],
                  memoryMB: p.properties?.cloudCapacity?.["memoryMB"],
                  vmCount: p.properties?.cloudCapacity?.["vmCount"],
                },
            storageQosPolicies:
              p.properties?.["storageQoSPolicies"] === undefined
                ? p.properties?.["storageQoSPolicies"]
                : p.properties?.["storageQoSPolicies"].map((p) => ({
                    name: p["name"],
                    id: p["id"],
                    iopsMaximum: p["iopsMaximum"],
                    iopsMinimum: p["iopsMinimum"],
                    bandwidthLimit: p["bandwidthLimit"],
                    policyId: p["policyId"],
                  })),
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

/** List of Clouds in a resource group. */
export function listByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: CloudsListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Cloud> {
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
  options: CloudsListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod<
  CloudsListBySubscription200Response | CloudsListBySubscriptionDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/clouds",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listBySubscriptionDeserialize(
  result:
    | CloudsListBySubscription200Response
    | CloudsListBySubscriptionDefaultResponse,
): Promise<CloudListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      tags: p["tags"],
      location: p["location"],
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
            inventoryItemId: p.properties?.["inventoryItemId"],
            uuid: p.properties?.["uuid"],
            vmmServerId: p.properties?.["vmmServerId"],
            cloudName: p.properties?.["cloudName"],
            cloudCapacity: !p.properties?.cloudCapacity
              ? undefined
              : {
                  cpuCount: p.properties?.cloudCapacity?.["cpuCount"],
                  memoryMB: p.properties?.cloudCapacity?.["memoryMB"],
                  vmCount: p.properties?.cloudCapacity?.["vmCount"],
                },
            storageQosPolicies:
              p.properties?.["storageQoSPolicies"] === undefined
                ? p.properties?.["storageQoSPolicies"]
                : p.properties?.["storageQoSPolicies"].map((p) => ({
                    name: p["name"],
                    id: p["id"],
                    iopsMaximum: p["iopsMaximum"],
                    iopsMinimum: p["iopsMinimum"],
                    bandwidthLimit: p["bandwidthLimit"],
                    policyId: p["policyId"],
                  })),
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

/** List of Clouds in a subscription. */
export function listBySubscription(
  context: Client,
  subscriptionId: string,
  options: CloudsListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Cloud> {
  return buildPagedAsyncIterator(
    context,
    () => _listBySubscriptionSend(context, subscriptionId, options),
    _listBySubscriptionDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
