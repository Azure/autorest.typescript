// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "./pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  Fleet,
  FleetUpdate,
  FleetListResult,
  VirtualMachineScaleSetListResult,
  PagedOperation,
  Operation,
} from "../models/models.js";
import { PagedAsyncIterableIterator } from "../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "./pagingHelpers.js";
import {
  isUnexpected,
  AzureFleetContext as Client,
  CreateOrUpdate200Response,
  CreateOrUpdate201Response,
  CreateOrUpdateDefaultResponse,
  CreateOrUpdateLogicalResponse,
  Delete202Response,
  Delete204Response,
  DeleteDefaultResponse,
  DeleteLogicalResponse,
  Get200Response,
  GetDefaultResponse,
  List200Response,
  ListByResourceGroup200Response,
  ListByResourceGroupDefaultResponse,
  ListBySubscription200Response,
  ListBySubscriptionDefaultResponse,
  ListDefaultResponse,
  ListVirtualMachineScaleSets200Response,
  ListVirtualMachineScaleSetsDefaultResponse,
  Update200Response,
  Update202Response,
  UpdateDefaultResponse,
  UpdateLogicalResponse,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  ListOptionalParams,
  GetOptionalParams,
  CreateOrUpdateOptionalParams,
  UpdateOptionalParams,
  DeleteOptionalParams,
  ListByResourceGroupOptionalParams,
  ListBySubscriptionOptionalParams,
  ListVirtualMachineScaleSetsOptionalParams,
} from "../models/options.js";

export function _listSend(
  context: Client,
  options: ListOptionalParams = { requestOptions: {} },
): StreamableMethod<List200Response | ListDefaultResponse> {
  return context
    .path("/providers/Microsoft.AzureFleet/operations")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listDeserialize(
  result: List200Response | ListDefaultResponse,
): Promise<PagedOperation> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      name: p["name"],
      isDataAction: p["isDataAction"],
      display: !p.display
        ? undefined
        : {
            provider: p.display?.["provider"],
            resource: p.display?.["resource"],
            operation: p.display?.["operation"],
            description: p.display?.["description"],
          },
      origin: p["origin"],
      actionType: p["actionType"],
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List the operations for the provider */
export function list(
  context: Client,
  options: ListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Operation> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, options),
    _listDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  options: GetOptionalParams = { requestOptions: {} },
): StreamableMethod<Get200Response | GetDefaultResponse> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureFleet/fleets/{fleetName}",
      subscriptionId,
      resourceGroupName,
      fleetName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: Get200Response | GetDefaultResponse,
): Promise<Fleet> {
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
          provisioningState: result.body.properties?.["provisioningState"],
          spotPriorityProfile: !result.body.properties?.spotPriorityProfile
            ? undefined
            : {
                capacity:
                  result.body.properties?.spotPriorityProfile?.["capacity"],
                minCapacity:
                  result.body.properties?.spotPriorityProfile?.["minCapacity"],
                maxPricePerVM:
                  result.body.properties?.spotPriorityProfile?.[
                    "maxPricePerVM"
                  ],
                evictionPolicy:
                  result.body.properties?.spotPriorityProfile?.[
                    "evictionPolicy"
                  ],
                allocationStrategy:
                  result.body.properties?.spotPriorityProfile?.[
                    "allocationStrategy"
                  ],
                maintain:
                  result.body.properties?.spotPriorityProfile?.["maintain"],
              },
          regularPriorityProfile: !result.body.properties
            ?.regularPriorityProfile
            ? undefined
            : {
                capacity:
                  result.body.properties?.regularPriorityProfile?.["capacity"],
                minCapacity:
                  result.body.properties?.regularPriorityProfile?.[
                    "minCapacity"
                  ],
                allocationStrategy:
                  result.body.properties?.regularPriorityProfile?.[
                    "allocationStrategy"
                  ],
              },
          vmSizesProfile: result.body.properties?.["vmSizesProfile"].map(
            (p) => ({ name: p["name"], rank: p["rank"] }),
          ),
          computeProfile: {
            baseVirtualMachineProfile: {},
            computeApiVersion:
              result.body.properties?.computeProfile["computeApiVersion"],
            platformFaultDomainCount:
              result.body.properties?.computeProfile[
                "platformFaultDomainCount"
              ],
          },
        },
    zones: result.body["zones"],
    identity: !result.body.identity
      ? undefined
      : {
          tenantId: result.body.identity?.["tenantId"],
          principalId: result.body.identity?.["principalId"],
          type: result.body.identity?.["type"],
          userAssignedIdentities:
            result.body.identity?.["userAssignedIdentities"],
        },
    plan: !result.body.plan
      ? undefined
      : {
          name: result.body.plan?.["name"],
          publisher: result.body.plan?.["publisher"],
          product: result.body.plan?.["product"],
          promotionCode: result.body.plan?.["promotionCode"],
          version: result.body.plan?.["version"],
        },
  };
}

/** Get a Fleet */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  options: GetOptionalParams = { requestOptions: {} },
): Promise<Fleet> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    fleetName,
    options,
  );
  return _getDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  resource: Fleet,
  options: CreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | CreateOrUpdate200Response
  | CreateOrUpdate201Response
  | CreateOrUpdateDefaultResponse
  | CreateOrUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureFleet/fleets/{fleetName}",
      subscriptionId,
      resourceGroupName,
      fleetName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        location: resource["location"],
        tags: resource["tags"],
        properties: !resource.properties
          ? undefined
          : {
              spotPriorityProfile: !resource.properties?.spotPriorityProfile
                ? undefined
                : {
                    capacity:
                      resource.properties?.spotPriorityProfile?.["capacity"],
                    minCapacity:
                      resource.properties?.spotPriorityProfile?.["minCapacity"],
                    maxPricePerVM:
                      resource.properties?.spotPriorityProfile?.[
                        "maxPricePerVM"
                      ],
                    evictionPolicy:
                      resource.properties?.spotPriorityProfile?.[
                        "evictionPolicy"
                      ],
                    allocationStrategy:
                      resource.properties?.spotPriorityProfile?.[
                        "allocationStrategy"
                      ],
                    maintain:
                      resource.properties?.spotPriorityProfile?.["maintain"],
                  },
              regularPriorityProfile: !resource.properties
                ?.regularPriorityProfile
                ? undefined
                : {
                    capacity:
                      resource.properties?.regularPriorityProfile?.["capacity"],
                    minCapacity:
                      resource.properties?.regularPriorityProfile?.[
                        "minCapacity"
                      ],
                    allocationStrategy:
                      resource.properties?.regularPriorityProfile?.[
                        "allocationStrategy"
                      ],
                  },
              vmSizesProfile: resource.properties?.["vmSizesProfile"].map(
                (p) => ({ name: p["name"], rank: p["rank"] }),
              ),
              computeProfile: {
                baseVirtualMachineProfile: {},
                computeApiVersion:
                  resource.properties?.computeProfile["computeApiVersion"],
                platformFaultDomainCount:
                  resource.properties?.computeProfile[
                    "platformFaultDomainCount"
                  ],
              },
            },
        zones: resource["zones"],
        identity: !resource.identity
          ? undefined
          : {
              type: resource.identity?.["type"],
              userAssignedIdentities:
                resource.identity?.["userAssignedIdentities"],
            },
        plan: !resource.plan
          ? undefined
          : {
              name: resource.plan?.["name"],
              publisher: resource.plan?.["publisher"],
              product: resource.plan?.["product"],
              promotionCode: resource.plan?.["promotionCode"],
              version: resource.plan?.["version"],
            },
      },
    });
}

export async function _createOrUpdateDeserialize(
  result:
    | CreateOrUpdate200Response
    | CreateOrUpdate201Response
    | CreateOrUpdateDefaultResponse
    | CreateOrUpdateLogicalResponse,
): Promise<Fleet> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as CreateOrUpdateLogicalResponse;
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
          provisioningState: result.body.properties?.["provisioningState"],
          spotPriorityProfile: !result.body.properties?.spotPriorityProfile
            ? undefined
            : {
                capacity:
                  result.body.properties?.spotPriorityProfile?.["capacity"],
                minCapacity:
                  result.body.properties?.spotPriorityProfile?.["minCapacity"],
                maxPricePerVM:
                  result.body.properties?.spotPriorityProfile?.[
                    "maxPricePerVM"
                  ],
                evictionPolicy:
                  result.body.properties?.spotPriorityProfile?.[
                    "evictionPolicy"
                  ],
                allocationStrategy:
                  result.body.properties?.spotPriorityProfile?.[
                    "allocationStrategy"
                  ],
                maintain:
                  result.body.properties?.spotPriorityProfile?.["maintain"],
              },
          regularPriorityProfile: !result.body.properties
            ?.regularPriorityProfile
            ? undefined
            : {
                capacity:
                  result.body.properties?.regularPriorityProfile?.["capacity"],
                minCapacity:
                  result.body.properties?.regularPriorityProfile?.[
                    "minCapacity"
                  ],
                allocationStrategy:
                  result.body.properties?.regularPriorityProfile?.[
                    "allocationStrategy"
                  ],
              },
          vmSizesProfile: result.body.properties?.["vmSizesProfile"].map(
            (p) => ({ name: p["name"], rank: p["rank"] }),
          ),
          computeProfile: {
            baseVirtualMachineProfile: {},
            computeApiVersion:
              result.body.properties?.computeProfile["computeApiVersion"],
            platformFaultDomainCount:
              result.body.properties?.computeProfile[
                "platformFaultDomainCount"
              ],
          },
        },
    zones: result.body["zones"],
    identity: !result.body.identity
      ? undefined
      : {
          tenantId: result.body.identity?.["tenantId"],
          principalId: result.body.identity?.["principalId"],
          type: result.body.identity?.["type"],
          userAssignedIdentities:
            result.body.identity?.["userAssignedIdentities"],
        },
    plan: !result.body.plan
      ? undefined
      : {
          name: result.body.plan?.["name"],
          publisher: result.body.plan?.["publisher"],
          product: result.body.plan?.["product"],
          promotionCode: result.body.plan?.["promotionCode"],
          version: result.body.plan?.["version"],
        },
  };
}

/** Create a Fleet */
export function createOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  resource: Fleet,
  options: CreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Fleet>, Fleet> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        resource,
        options,
      ),
  }) as PollerLike<OperationState<Fleet>, Fleet>;
}

export function _updateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  properties: FleetUpdate,
  options: UpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | Update200Response
  | Update202Response
  | UpdateDefaultResponse
  | UpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureFleet/fleets/{fleetName}",
      subscriptionId,
      resourceGroupName,
      fleetName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: properties["tags"],
        identity: !properties.identity
          ? undefined
          : {
              type: properties.identity?.["type"],
              userAssignedIdentities:
                properties.identity?.["userAssignedIdentities"],
            },
        plan: !properties.plan
          ? undefined
          : {
              name: properties.plan?.["name"],
              publisher: properties.plan?.["publisher"],
              product: properties.plan?.["product"],
              promotionCode: properties.plan?.["promotionCode"],
              version: properties.plan?.["version"],
            },
        properties: !properties.properties
          ? undefined
          : {
              spotPriorityProfile: !properties.properties?.spotPriorityProfile
                ? undefined
                : {
                    capacity:
                      properties.properties?.spotPriorityProfile?.["capacity"],
                    minCapacity:
                      properties.properties?.spotPriorityProfile?.[
                        "minCapacity"
                      ],
                    maxPricePerVM:
                      properties.properties?.spotPriorityProfile?.[
                        "maxPricePerVM"
                      ],
                    evictionPolicy:
                      properties.properties?.spotPriorityProfile?.[
                        "evictionPolicy"
                      ],
                    allocationStrategy:
                      properties.properties?.spotPriorityProfile?.[
                        "allocationStrategy"
                      ],
                    maintain:
                      properties.properties?.spotPriorityProfile?.["maintain"],
                  },
              regularPriorityProfile: !properties.properties
                ?.regularPriorityProfile
                ? undefined
                : {
                    capacity:
                      properties.properties?.regularPriorityProfile?.[
                        "capacity"
                      ],
                    minCapacity:
                      properties.properties?.regularPriorityProfile?.[
                        "minCapacity"
                      ],
                    allocationStrategy:
                      properties.properties?.regularPriorityProfile?.[
                        "allocationStrategy"
                      ],
                  },
              vmSizesProfile: properties.properties?.["vmSizesProfile"].map(
                (p) => ({ name: p["name"], rank: p["rank"] }),
              ),
              computeProfile: {
                baseVirtualMachineProfile: {},
                computeApiVersion:
                  properties.properties?.computeProfile["computeApiVersion"],
                platformFaultDomainCount:
                  properties.properties?.computeProfile[
                    "platformFaultDomainCount"
                  ],
              },
            },
      },
    });
}

export async function _updateDeserialize(
  result:
    | Update200Response
    | Update202Response
    | UpdateDefaultResponse
    | UpdateLogicalResponse,
): Promise<Fleet> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as UpdateLogicalResponse;
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
          provisioningState: result.body.properties?.["provisioningState"],
          spotPriorityProfile: !result.body.properties?.spotPriorityProfile
            ? undefined
            : {
                capacity:
                  result.body.properties?.spotPriorityProfile?.["capacity"],
                minCapacity:
                  result.body.properties?.spotPriorityProfile?.["minCapacity"],
                maxPricePerVM:
                  result.body.properties?.spotPriorityProfile?.[
                    "maxPricePerVM"
                  ],
                evictionPolicy:
                  result.body.properties?.spotPriorityProfile?.[
                    "evictionPolicy"
                  ],
                allocationStrategy:
                  result.body.properties?.spotPriorityProfile?.[
                    "allocationStrategy"
                  ],
                maintain:
                  result.body.properties?.spotPriorityProfile?.["maintain"],
              },
          regularPriorityProfile: !result.body.properties
            ?.regularPriorityProfile
            ? undefined
            : {
                capacity:
                  result.body.properties?.regularPriorityProfile?.["capacity"],
                minCapacity:
                  result.body.properties?.regularPriorityProfile?.[
                    "minCapacity"
                  ],
                allocationStrategy:
                  result.body.properties?.regularPriorityProfile?.[
                    "allocationStrategy"
                  ],
              },
          vmSizesProfile: result.body.properties?.["vmSizesProfile"].map(
            (p) => ({ name: p["name"], rank: p["rank"] }),
          ),
          computeProfile: {
            baseVirtualMachineProfile: {},
            computeApiVersion:
              result.body.properties?.computeProfile["computeApiVersion"],
            platformFaultDomainCount:
              result.body.properties?.computeProfile[
                "platformFaultDomainCount"
              ],
          },
        },
    zones: result.body["zones"],
    identity: !result.body.identity
      ? undefined
      : {
          tenantId: result.body.identity?.["tenantId"],
          principalId: result.body.identity?.["principalId"],
          type: result.body.identity?.["type"],
          userAssignedIdentities:
            result.body.identity?.["userAssignedIdentities"],
        },
    plan: !result.body.plan
      ? undefined
      : {
          name: result.body.plan?.["name"],
          publisher: result.body.plan?.["publisher"],
          product: result.body.plan?.["product"],
          promotionCode: result.body.plan?.["promotionCode"],
          version: result.body.plan?.["version"],
        },
  };
}

/** Update a Fleet */
export function update(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  properties: FleetUpdate,
  options: UpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Fleet>, Fleet> {
  return getLongRunningPoller(context, _updateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        properties,
        options,
      ),
  }) as PollerLike<OperationState<Fleet>, Fleet>;
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  options: DeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | Delete202Response
  | Delete204Response
  | DeleteDefaultResponse
  | DeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureFleet/fleets/{fleetName}",
      subscriptionId,
      resourceGroupName,
      fleetName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | Delete202Response
    | Delete204Response
    | DeleteDefaultResponse
    | DeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as DeleteLogicalResponse;
  return;
}

/** Delete a Fleet */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  options: DeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}

export function _listByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: ListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod<
  ListByResourceGroup200Response | ListByResourceGroupDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureFleet/fleets",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByResourceGroupDeserialize(
  result: ListByResourceGroup200Response | ListByResourceGroupDefaultResponse,
): Promise<FleetListResult> {
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
            provisioningState: p.properties?.["provisioningState"],
            spotPriorityProfile: !p.properties?.spotPriorityProfile
              ? undefined
              : {
                  capacity: p.properties?.spotPriorityProfile?.["capacity"],
                  minCapacity:
                    p.properties?.spotPriorityProfile?.["minCapacity"],
                  maxPricePerVM:
                    p.properties?.spotPriorityProfile?.["maxPricePerVM"],
                  evictionPolicy:
                    p.properties?.spotPriorityProfile?.["evictionPolicy"],
                  allocationStrategy:
                    p.properties?.spotPriorityProfile?.["allocationStrategy"],
                  maintain: p.properties?.spotPriorityProfile?.["maintain"],
                },
            regularPriorityProfile: !p.properties?.regularPriorityProfile
              ? undefined
              : {
                  capacity: p.properties?.regularPriorityProfile?.["capacity"],
                  minCapacity:
                    p.properties?.regularPriorityProfile?.["minCapacity"],
                  allocationStrategy:
                    p.properties?.regularPriorityProfile?.[
                      "allocationStrategy"
                    ],
                },
            vmSizesProfile: p.properties?.["vmSizesProfile"].map((p) => ({
              name: p["name"],
              rank: p["rank"],
            })),
            computeProfile: {
              baseVirtualMachineProfile: {},
              computeApiVersion:
                p.properties?.computeProfile["computeApiVersion"],
              platformFaultDomainCount:
                p.properties?.computeProfile["platformFaultDomainCount"],
            },
          },
      zones: p["zones"],
      identity: !p.identity
        ? undefined
        : {
            tenantId: p.identity?.["tenantId"],
            principalId: p.identity?.["principalId"],
            type: p.identity?.["type"],
            userAssignedIdentities: p.identity?.["userAssignedIdentities"],
          },
      plan: !p.plan
        ? undefined
        : {
            name: p.plan?.["name"],
            publisher: p.plan?.["publisher"],
            product: p.plan?.["product"],
            promotionCode: p.plan?.["promotionCode"],
            version: p.plan?.["version"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List Fleet resources by resource group */
export function listByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: ListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Fleet> {
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
  options: ListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod<
  ListBySubscription200Response | ListBySubscriptionDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.AzureFleet/fleets",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listBySubscriptionDeserialize(
  result: ListBySubscription200Response | ListBySubscriptionDefaultResponse,
): Promise<FleetListResult> {
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
            provisioningState: p.properties?.["provisioningState"],
            spotPriorityProfile: !p.properties?.spotPriorityProfile
              ? undefined
              : {
                  capacity: p.properties?.spotPriorityProfile?.["capacity"],
                  minCapacity:
                    p.properties?.spotPriorityProfile?.["minCapacity"],
                  maxPricePerVM:
                    p.properties?.spotPriorityProfile?.["maxPricePerVM"],
                  evictionPolicy:
                    p.properties?.spotPriorityProfile?.["evictionPolicy"],
                  allocationStrategy:
                    p.properties?.spotPriorityProfile?.["allocationStrategy"],
                  maintain: p.properties?.spotPriorityProfile?.["maintain"],
                },
            regularPriorityProfile: !p.properties?.regularPriorityProfile
              ? undefined
              : {
                  capacity: p.properties?.regularPriorityProfile?.["capacity"],
                  minCapacity:
                    p.properties?.regularPriorityProfile?.["minCapacity"],
                  allocationStrategy:
                    p.properties?.regularPriorityProfile?.[
                      "allocationStrategy"
                    ],
                },
            vmSizesProfile: p.properties?.["vmSizesProfile"].map((p) => ({
              name: p["name"],
              rank: p["rank"],
            })),
            computeProfile: {
              baseVirtualMachineProfile: {},
              computeApiVersion:
                p.properties?.computeProfile["computeApiVersion"],
              platformFaultDomainCount:
                p.properties?.computeProfile["platformFaultDomainCount"],
            },
          },
      zones: p["zones"],
      identity: !p.identity
        ? undefined
        : {
            tenantId: p.identity?.["tenantId"],
            principalId: p.identity?.["principalId"],
            type: p.identity?.["type"],
            userAssignedIdentities: p.identity?.["userAssignedIdentities"],
          },
      plan: !p.plan
        ? undefined
        : {
            name: p.plan?.["name"],
            publisher: p.plan?.["publisher"],
            product: p.plan?.["product"],
            promotionCode: p.plan?.["promotionCode"],
            version: p.plan?.["version"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List Fleet resources by subscription ID */
export function listBySubscription(
  context: Client,
  subscriptionId: string,
  options: ListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Fleet> {
  return buildPagedAsyncIterator(
    context,
    () => _listBySubscriptionSend(context, subscriptionId, options),
    _listBySubscriptionDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listVirtualMachineScaleSetsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  name: string,
  options: ListVirtualMachineScaleSetsOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | ListVirtualMachineScaleSets200Response
  | ListVirtualMachineScaleSetsDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureFleet/fleets/{name}/virtualMachineScaleSets",
      subscriptionId,
      resourceGroupName,
      name,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listVirtualMachineScaleSetsDeserialize(
  result:
    | ListVirtualMachineScaleSets200Response
    | ListVirtualMachineScaleSetsDefaultResponse,
): Promise<VirtualMachineScaleSetListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      id: p["id"],
      type: p["type"],
      operationStatus: p["operationStatus"],
      error: !p.error ? undefined : {},
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List VirtualMachineScaleSet resources by Fleet */
export async function listVirtualMachineScaleSets(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  name: string,
  options: ListVirtualMachineScaleSetsOptionalParams = { requestOptions: {} },
): Promise<VirtualMachineScaleSetListResult> {
  const result = await _listVirtualMachineScaleSetsSend(
    context,
    subscriptionId,
    resourceGroupName,
    name,
    options,
  );
  return _listVirtualMachineScaleSetsDeserialize(result);
}
