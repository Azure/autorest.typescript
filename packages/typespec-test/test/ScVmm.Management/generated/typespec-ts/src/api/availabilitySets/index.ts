// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  CreatedByType,
  AvailabilitySet,
  AvailabilitySetTagsUpdate,
  AvailabilitySetListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  AvailabilitySetsCreateOrUpdate200Response,
  AvailabilitySetsCreateOrUpdate201Response,
  AvailabilitySetsCreateOrUpdateDefaultResponse,
  AvailabilitySetsCreateOrUpdateLogicalResponse,
  AvailabilitySetsDelete202Response,
  AvailabilitySetsDelete204Response,
  AvailabilitySetsDeleteDefaultResponse,
  AvailabilitySetsDeleteLogicalResponse,
  AvailabilitySetsGet200Response,
  AvailabilitySetsGetDefaultResponse,
  AvailabilitySetsListByResourceGroup200Response,
  AvailabilitySetsListByResourceGroupDefaultResponse,
  AvailabilitySetsListBySubscription200Response,
  AvailabilitySetsListBySubscriptionDefaultResponse,
  AvailabilitySetsUpdate200Response,
  AvailabilitySetsUpdate202Response,
  AvailabilitySetsUpdateDefaultResponse,
  AvailabilitySetsUpdateLogicalResponse,
  isUnexpected,
  ScVmmContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  AvailabilitySetsGetOptionalParams,
  AvailabilitySetsCreateOrUpdateOptionalParams,
  AvailabilitySetsUpdateOptionalParams,
  AvailabilitySetsDeleteOptionalParams,
  AvailabilitySetsListByResourceGroupOptionalParams,
  AvailabilitySetsListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  availabilitySetResourceName: string,
  options: AvailabilitySetsGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  AvailabilitySetsGet200Response | AvailabilitySetsGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets/{availabilitySetResourceName}",
      subscriptionId,
      resourceGroupName,
      availabilitySetResourceName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: AvailabilitySetsGet200Response | AvailabilitySetsGetDefaultResponse,
): Promise<AvailabilitySet> {
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
          availabilitySetName: result.body.properties?.["availabilitySetName"],
          vmmServerId: result.body.properties?.["vmmServerId"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Implements AvailabilitySet GET method. */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  availabilitySetResourceName: string,
  options: AvailabilitySetsGetOptionalParams = { requestOptions: {} },
): Promise<AvailabilitySet> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    availabilitySetResourceName,
    options,
  );
  return _getDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  availabilitySetResourceName: string,
  resource: AvailabilitySet,
  options: AvailabilitySetsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | AvailabilitySetsCreateOrUpdate200Response
  | AvailabilitySetsCreateOrUpdate201Response
  | AvailabilitySetsCreateOrUpdateDefaultResponse
  | AvailabilitySetsCreateOrUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets/{availabilitySetResourceName}",
      subscriptionId,
      resourceGroupName,
      availabilitySetResourceName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: resource["tags"],
        location: resource["location"],
        properties: !resource.properties
          ? undefined
          : {
              availabilitySetName: resource.properties?.["availabilitySetName"],
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
    | AvailabilitySetsCreateOrUpdate200Response
    | AvailabilitySetsCreateOrUpdate201Response
    | AvailabilitySetsCreateOrUpdateDefaultResponse
    | AvailabilitySetsCreateOrUpdateLogicalResponse,
): Promise<AvailabilitySet> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as AvailabilitySetsCreateOrUpdateLogicalResponse;
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
          availabilitySetName: result.body.properties?.["availabilitySetName"],
          vmmServerId: result.body.properties?.["vmmServerId"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Onboards the ScVmm availability set as an Azure resource. */
export function createOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  availabilitySetResourceName: string,
  resource: AvailabilitySet,
  options: AvailabilitySetsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<AvailabilitySet>, AvailabilitySet> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        subscriptionId,
        resourceGroupName,
        availabilitySetResourceName,
        resource,
        options,
      ),
  }) as PollerLike<OperationState<AvailabilitySet>, AvailabilitySet>;
}

export function _updateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  availabilitySetResourceName: string,
  properties: AvailabilitySetTagsUpdate,
  options: AvailabilitySetsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | AvailabilitySetsUpdate200Response
  | AvailabilitySetsUpdate202Response
  | AvailabilitySetsUpdateDefaultResponse
  | AvailabilitySetsUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets/{availabilitySetResourceName}",
      subscriptionId,
      resourceGroupName,
      availabilitySetResourceName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: { tags: properties["tags"] },
    });
}

export async function _updateDeserialize(
  result:
    | AvailabilitySetsUpdate200Response
    | AvailabilitySetsUpdate202Response
    | AvailabilitySetsUpdateDefaultResponse
    | AvailabilitySetsUpdateLogicalResponse,
): Promise<AvailabilitySet> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as AvailabilitySetsUpdateLogicalResponse;
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
          availabilitySetName: result.body.properties?.["availabilitySetName"],
          vmmServerId: result.body.properties?.["vmmServerId"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Updates the AvailabilitySets resource. */
export function update(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  availabilitySetResourceName: string,
  properties: AvailabilitySetTagsUpdate,
  options: AvailabilitySetsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<AvailabilitySet>, AvailabilitySet> {
  return getLongRunningPoller(context, _updateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(
        context,
        subscriptionId,
        resourceGroupName,
        availabilitySetResourceName,
        properties,
        options,
      ),
  }) as PollerLike<OperationState<AvailabilitySet>, AvailabilitySet>;
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  availabilitySetResourceName: string,
  options: AvailabilitySetsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | AvailabilitySetsDelete202Response
  | AvailabilitySetsDelete204Response
  | AvailabilitySetsDeleteDefaultResponse
  | AvailabilitySetsDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets/{availabilitySetResourceName}",
      subscriptionId,
      resourceGroupName,
      availabilitySetResourceName,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { force: options?.force },
    });
}

export async function _$deleteDeserialize(
  result:
    | AvailabilitySetsDelete202Response
    | AvailabilitySetsDelete204Response
    | AvailabilitySetsDeleteDefaultResponse
    | AvailabilitySetsDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as AvailabilitySetsDeleteLogicalResponse;
  return;
}

/** Deregisters the ScVmm availability set from Azure. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  availabilitySetResourceName: string,
  options: AvailabilitySetsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(
        context,
        subscriptionId,
        resourceGroupName,
        availabilitySetResourceName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}

export function _listByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: AvailabilitySetsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | AvailabilitySetsListByResourceGroup200Response
  | AvailabilitySetsListByResourceGroupDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByResourceGroupDeserialize(
  result:
    | AvailabilitySetsListByResourceGroup200Response
    | AvailabilitySetsListByResourceGroupDefaultResponse,
): Promise<AvailabilitySetListResult> {
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
            availabilitySetName: p.properties?.["availabilitySetName"],
            vmmServerId: p.properties?.["vmmServerId"],
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

/** List of AvailabilitySets in a resource group. */
export function listByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: AvailabilitySetsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AvailabilitySet> {
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
  options: AvailabilitySetsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | AvailabilitySetsListBySubscription200Response
  | AvailabilitySetsListBySubscriptionDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/availabilitySets",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listBySubscriptionDeserialize(
  result:
    | AvailabilitySetsListBySubscription200Response
    | AvailabilitySetsListBySubscriptionDefaultResponse,
): Promise<AvailabilitySetListResult> {
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
            availabilitySetName: p.properties?.["availabilitySetName"],
            vmmServerId: p.properties?.["vmmServerId"],
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

/** List of AvailabilitySets in a subscription. */
export function listBySubscription(
  context: Client,
  subscriptionId: string,
  options: AvailabilitySetsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AvailabilitySet> {
  return buildPagedAsyncIterator(
    context,
    () => _listBySubscriptionSend(context, subscriptionId, options),
    _listBySubscriptionDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
