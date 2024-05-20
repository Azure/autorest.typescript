// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  StandbyVirtualMachinePoolResource,
  StandbyVirtualMachinePoolResourceUpdate,
  StandbyVirtualMachinePoolResourceListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  StandbyPoolContext as Client,
  StandbyVirtualMachinePoolsCreateOrUpdate200Response,
  StandbyVirtualMachinePoolsCreateOrUpdate201Response,
  StandbyVirtualMachinePoolsCreateOrUpdateDefaultResponse,
  StandbyVirtualMachinePoolsCreateOrUpdateLogicalResponse,
  StandbyVirtualMachinePoolsDelete202Response,
  StandbyVirtualMachinePoolsDelete204Response,
  StandbyVirtualMachinePoolsDeleteDefaultResponse,
  StandbyVirtualMachinePoolsDeleteLogicalResponse,
  StandbyVirtualMachinePoolsGet200Response,
  StandbyVirtualMachinePoolsGetDefaultResponse,
  StandbyVirtualMachinePoolsListByResourceGroup200Response,
  StandbyVirtualMachinePoolsListByResourceGroupDefaultResponse,
  StandbyVirtualMachinePoolsListBySubscription200Response,
  StandbyVirtualMachinePoolsListBySubscriptionDefaultResponse,
  StandbyVirtualMachinePoolsUpdate200Response,
  StandbyVirtualMachinePoolsUpdateDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  StandbyVirtualMachinePoolsGetOptionalParams,
  StandbyVirtualMachinePoolsCreateOrUpdateOptionalParams,
  StandbyVirtualMachinePoolsDeleteOptionalParams,
  StandbyVirtualMachinePoolsUpdateOptionalParams,
  StandbyVirtualMachinePoolsListByResourceGroupOptionalParams,
  StandbyVirtualMachinePoolsListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  options: StandbyVirtualMachinePoolsGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | StandbyVirtualMachinePoolsGet200Response
  | StandbyVirtualMachinePoolsGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}",
      subscriptionId,
      resourceGroupName,
      standbyVirtualMachinePoolName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result:
    | StandbyVirtualMachinePoolsGet200Response
    | StandbyVirtualMachinePoolsGetDefaultResponse,
): Promise<StandbyVirtualMachinePoolResource> {
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
          elasticityProfile: !result.body.properties?.elasticityProfile
            ? undefined
            : {
                maxReadyCapacity:
                  result.body.properties?.elasticityProfile?.[
                    "maxReadyCapacity"
                  ],
              },
          virtualMachineState: result.body.properties?.["virtualMachineState"],
          attachedVirtualMachineScaleSetId:
            result.body.properties?.["attachedVirtualMachineScaleSetId"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a StandbyVirtualMachinePoolResource */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  options: StandbyVirtualMachinePoolsGetOptionalParams = { requestOptions: {} },
): Promise<StandbyVirtualMachinePoolResource> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    standbyVirtualMachinePoolName,
    options,
  );
  return _getDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  resource: StandbyVirtualMachinePoolResource,
  options: StandbyVirtualMachinePoolsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | StandbyVirtualMachinePoolsCreateOrUpdate200Response
  | StandbyVirtualMachinePoolsCreateOrUpdate201Response
  | StandbyVirtualMachinePoolsCreateOrUpdateDefaultResponse
  | StandbyVirtualMachinePoolsCreateOrUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}",
      subscriptionId,
      resourceGroupName,
      standbyVirtualMachinePoolName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        location: resource["location"],
        tags: resource["tags"],
        properties: !resource.properties
          ? undefined
          : {
              elasticityProfile: !resource.properties?.elasticityProfile
                ? undefined
                : {
                    maxReadyCapacity:
                      resource.properties?.elasticityProfile?.[
                        "maxReadyCapacity"
                      ],
                  },
              virtualMachineState: resource.properties?.["virtualMachineState"],
              attachedVirtualMachineScaleSetId:
                resource.properties?.["attachedVirtualMachineScaleSetId"],
            },
      },
    });
}

export async function _createOrUpdateDeserialize(
  result:
    | StandbyVirtualMachinePoolsCreateOrUpdate200Response
    | StandbyVirtualMachinePoolsCreateOrUpdate201Response
    | StandbyVirtualMachinePoolsCreateOrUpdateDefaultResponse
    | StandbyVirtualMachinePoolsCreateOrUpdateLogicalResponse,
): Promise<StandbyVirtualMachinePoolResource> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as StandbyVirtualMachinePoolsCreateOrUpdateLogicalResponse;
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
          elasticityProfile: !result.body.properties?.elasticityProfile
            ? undefined
            : {
                maxReadyCapacity:
                  result.body.properties?.elasticityProfile?.[
                    "maxReadyCapacity"
                  ],
              },
          virtualMachineState: result.body.properties?.["virtualMachineState"],
          attachedVirtualMachineScaleSetId:
            result.body.properties?.["attachedVirtualMachineScaleSetId"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Create a StandbyVirtualMachinePoolResource */
export function createOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  resource: StandbyVirtualMachinePoolResource,
  options: StandbyVirtualMachinePoolsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<StandbyVirtualMachinePoolResource>,
  StandbyVirtualMachinePoolResource
> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        subscriptionId,
        resourceGroupName,
        standbyVirtualMachinePoolName,
        resource,
        options,
      ),
  }) as PollerLike<
    OperationState<StandbyVirtualMachinePoolResource>,
    StandbyVirtualMachinePoolResource
  >;
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  options: StandbyVirtualMachinePoolsDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | StandbyVirtualMachinePoolsDelete202Response
  | StandbyVirtualMachinePoolsDelete204Response
  | StandbyVirtualMachinePoolsDeleteDefaultResponse
  | StandbyVirtualMachinePoolsDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}",
      subscriptionId,
      resourceGroupName,
      standbyVirtualMachinePoolName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | StandbyVirtualMachinePoolsDelete202Response
    | StandbyVirtualMachinePoolsDelete204Response
    | StandbyVirtualMachinePoolsDeleteDefaultResponse
    | StandbyVirtualMachinePoolsDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as StandbyVirtualMachinePoolsDeleteLogicalResponse;
  return;
}

/** Delete a StandbyVirtualMachinePoolResource */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  options: StandbyVirtualMachinePoolsDeleteOptionalParams = {
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
        standbyVirtualMachinePoolName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}

export function _updateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  properties: StandbyVirtualMachinePoolResourceUpdate,
  options: StandbyVirtualMachinePoolsUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | StandbyVirtualMachinePoolsUpdate200Response
  | StandbyVirtualMachinePoolsUpdateDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}",
      subscriptionId,
      resourceGroupName,
      standbyVirtualMachinePoolName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: properties["tags"],
        properties: !properties.properties
          ? undefined
          : {
              elasticityProfile: !properties.properties?.elasticityProfile
                ? undefined
                : {
                    maxReadyCapacity:
                      properties.properties?.elasticityProfile?.[
                        "maxReadyCapacity"
                      ],
                  },
              virtualMachineState:
                properties.properties?.["virtualMachineState"],
              attachedVirtualMachineScaleSetId:
                properties.properties?.["attachedVirtualMachineScaleSetId"],
            },
      },
    });
}

export async function _updateDeserialize(
  result:
    | StandbyVirtualMachinePoolsUpdate200Response
    | StandbyVirtualMachinePoolsUpdateDefaultResponse,
): Promise<StandbyVirtualMachinePoolResource> {
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
          elasticityProfile: !result.body.properties?.elasticityProfile
            ? undefined
            : {
                maxReadyCapacity:
                  result.body.properties?.elasticityProfile?.[
                    "maxReadyCapacity"
                  ],
              },
          virtualMachineState: result.body.properties?.["virtualMachineState"],
          attachedVirtualMachineScaleSetId:
            result.body.properties?.["attachedVirtualMachineScaleSetId"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Update a StandbyVirtualMachinePoolResource */
export async function update(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  properties: StandbyVirtualMachinePoolResourceUpdate,
  options: StandbyVirtualMachinePoolsUpdateOptionalParams = {
    requestOptions: {},
  },
): Promise<StandbyVirtualMachinePoolResource> {
  const result = await _updateSend(
    context,
    subscriptionId,
    resourceGroupName,
    standbyVirtualMachinePoolName,
    properties,
    options,
  );
  return _updateDeserialize(result);
}

export function _listByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: StandbyVirtualMachinePoolsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | StandbyVirtualMachinePoolsListByResourceGroup200Response
  | StandbyVirtualMachinePoolsListByResourceGroupDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByResourceGroupDeserialize(
  result:
    | StandbyVirtualMachinePoolsListByResourceGroup200Response
    | StandbyVirtualMachinePoolsListByResourceGroupDefaultResponse,
): Promise<StandbyVirtualMachinePoolResourceListResult> {
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
            elasticityProfile: !p.properties?.elasticityProfile
              ? undefined
              : {
                  maxReadyCapacity:
                    p.properties?.elasticityProfile?.["maxReadyCapacity"],
                },
            virtualMachineState: p.properties?.["virtualMachineState"],
            attachedVirtualMachineScaleSetId:
              p.properties?.["attachedVirtualMachineScaleSetId"],
            provisioningState: p.properties?.["provisioningState"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List StandbyVirtualMachinePoolResource resources by resource group */
export function listByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: StandbyVirtualMachinePoolsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<StandbyVirtualMachinePoolResource> {
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
  options: StandbyVirtualMachinePoolsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | StandbyVirtualMachinePoolsListBySubscription200Response
  | StandbyVirtualMachinePoolsListBySubscriptionDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listBySubscriptionDeserialize(
  result:
    | StandbyVirtualMachinePoolsListBySubscription200Response
    | StandbyVirtualMachinePoolsListBySubscriptionDefaultResponse,
): Promise<StandbyVirtualMachinePoolResourceListResult> {
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
            elasticityProfile: !p.properties?.elasticityProfile
              ? undefined
              : {
                  maxReadyCapacity:
                    p.properties?.elasticityProfile?.["maxReadyCapacity"],
                },
            virtualMachineState: p.properties?.["virtualMachineState"],
            attachedVirtualMachineScaleSetId:
              p.properties?.["attachedVirtualMachineScaleSetId"],
            provisioningState: p.properties?.["provisioningState"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List StandbyVirtualMachinePoolResource resources by subscription ID */
export function listBySubscription(
  context: Client,
  subscriptionId: string,
  options: StandbyVirtualMachinePoolsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<StandbyVirtualMachinePoolResource> {
  return buildPagedAsyncIterator(
    context,
    () => _listBySubscriptionSend(context, subscriptionId, options),
    _listBySubscriptionDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
