// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  StandbyContainerGroupPoolResource,
  StandbyContainerGroupPoolResourceUpdate,
  StandbyContainerGroupPoolResourceListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  StandbyContainerGroupPoolsCreateOrUpdate200Response,
  StandbyContainerGroupPoolsCreateOrUpdate201Response,
  StandbyContainerGroupPoolsCreateOrUpdateDefaultResponse,
  StandbyContainerGroupPoolsCreateOrUpdateLogicalResponse,
  StandbyContainerGroupPoolsDelete202Response,
  StandbyContainerGroupPoolsDelete204Response,
  StandbyContainerGroupPoolsDeleteDefaultResponse,
  StandbyContainerGroupPoolsDeleteLogicalResponse,
  StandbyContainerGroupPoolsGet200Response,
  StandbyContainerGroupPoolsGetDefaultResponse,
  StandbyContainerGroupPoolsListByResourceGroup200Response,
  StandbyContainerGroupPoolsListByResourceGroupDefaultResponse,
  StandbyContainerGroupPoolsListBySubscription200Response,
  StandbyContainerGroupPoolsListBySubscriptionDefaultResponse,
  StandbyContainerGroupPoolsUpdate200Response,
  StandbyContainerGroupPoolsUpdateDefaultResponse,
  StandbyPoolContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  StandbyContainerGroupPoolsGetOptionalParams,
  StandbyContainerGroupPoolsCreateOrUpdateOptionalParams,
  StandbyContainerGroupPoolsDeleteOptionalParams,
  StandbyContainerGroupPoolsUpdateOptionalParams,
  StandbyContainerGroupPoolsListByResourceGroupOptionalParams,
  StandbyContainerGroupPoolsListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyContainerGroupPoolName: string,
  options: StandbyContainerGroupPoolsGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | StandbyContainerGroupPoolsGet200Response
  | StandbyContainerGroupPoolsGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools/{standbyContainerGroupPoolName}",
      subscriptionId,
      resourceGroupName,
      standbyContainerGroupPoolName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result:
    | StandbyContainerGroupPoolsGet200Response
    | StandbyContainerGroupPoolsGetDefaultResponse,
): Promise<StandbyContainerGroupPoolResource> {
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
          elasticityProfile: {
            maxReadyCapacity:
              result.body.properties?.elasticityProfile["maxReadyCapacity"],
            refillPolicy:
              result.body.properties?.elasticityProfile["refillPolicy"],
          },
          containerGroupProperties: {
            containerGroupProfile: {
              id: result.body.properties?.containerGroupProperties
                .containerGroupProfile["id"],
              revision:
                result.body.properties?.containerGroupProperties
                  .containerGroupProfile["revision"],
            },
            subnetIds:
              result.body.properties?.containerGroupProperties["subnetIds"] ===
              undefined
                ? result.body.properties?.containerGroupProperties["subnetIds"]
                : result.body.properties?.containerGroupProperties[
                    "subnetIds"
                  ].map((p) => ({ id: p["id"] })),
          },
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a StandbyContainerGroupPoolResource */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyContainerGroupPoolName: string,
  options: StandbyContainerGroupPoolsGetOptionalParams = { requestOptions: {} },
): Promise<StandbyContainerGroupPoolResource> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    standbyContainerGroupPoolName,
    options,
  );
  return _getDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyContainerGroupPoolName: string,
  resource: StandbyContainerGroupPoolResource,
  options: StandbyContainerGroupPoolsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | StandbyContainerGroupPoolsCreateOrUpdate200Response
  | StandbyContainerGroupPoolsCreateOrUpdate201Response
  | StandbyContainerGroupPoolsCreateOrUpdateDefaultResponse
  | StandbyContainerGroupPoolsCreateOrUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools/{standbyContainerGroupPoolName}",
      subscriptionId,
      resourceGroupName,
      standbyContainerGroupPoolName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        location: resource["location"],
        tags: resource["tags"],
        properties: !resource.properties
          ? undefined
          : {
              elasticityProfile: {
                maxReadyCapacity:
                  resource.properties?.elasticityProfile["maxReadyCapacity"],
                refillPolicy:
                  resource.properties?.elasticityProfile["refillPolicy"],
              },
              containerGroupProperties: {
                containerGroupProfile: {
                  id: resource.properties?.containerGroupProperties
                    .containerGroupProfile["id"],
                  revision:
                    resource.properties?.containerGroupProperties
                      .containerGroupProfile["revision"],
                },
                subnetIds:
                  resource.properties?.containerGroupProperties["subnetIds"] ===
                  undefined
                    ? resource.properties?.containerGroupProperties["subnetIds"]
                    : resource.properties?.containerGroupProperties[
                        "subnetIds"
                      ].map((p) => ({ id: p["id"] })),
              },
            },
      },
    });
}

export async function _createOrUpdateDeserialize(
  result:
    | StandbyContainerGroupPoolsCreateOrUpdate200Response
    | StandbyContainerGroupPoolsCreateOrUpdate201Response
    | StandbyContainerGroupPoolsCreateOrUpdateDefaultResponse
    | StandbyContainerGroupPoolsCreateOrUpdateLogicalResponse,
): Promise<StandbyContainerGroupPoolResource> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as StandbyContainerGroupPoolsCreateOrUpdateLogicalResponse;
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
          elasticityProfile: {
            maxReadyCapacity:
              result.body.properties?.elasticityProfile["maxReadyCapacity"],
            refillPolicy:
              result.body.properties?.elasticityProfile["refillPolicy"],
          },
          containerGroupProperties: {
            containerGroupProfile: {
              id: result.body.properties?.containerGroupProperties
                .containerGroupProfile["id"],
              revision:
                result.body.properties?.containerGroupProperties
                  .containerGroupProfile["revision"],
            },
            subnetIds:
              result.body.properties?.containerGroupProperties["subnetIds"] ===
              undefined
                ? result.body.properties?.containerGroupProperties["subnetIds"]
                : result.body.properties?.containerGroupProperties[
                    "subnetIds"
                  ].map((p) => ({ id: p["id"] })),
          },
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Create a StandbyContainerGroupPoolResource */
export function createOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyContainerGroupPoolName: string,
  resource: StandbyContainerGroupPoolResource,
  options: StandbyContainerGroupPoolsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<StandbyContainerGroupPoolResource>,
  StandbyContainerGroupPoolResource
> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        subscriptionId,
        resourceGroupName,
        standbyContainerGroupPoolName,
        resource,
        options,
      ),
  }) as PollerLike<
    OperationState<StandbyContainerGroupPoolResource>,
    StandbyContainerGroupPoolResource
  >;
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyContainerGroupPoolName: string,
  options: StandbyContainerGroupPoolsDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | StandbyContainerGroupPoolsDelete202Response
  | StandbyContainerGroupPoolsDelete204Response
  | StandbyContainerGroupPoolsDeleteDefaultResponse
  | StandbyContainerGroupPoolsDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools/{standbyContainerGroupPoolName}",
      subscriptionId,
      resourceGroupName,
      standbyContainerGroupPoolName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | StandbyContainerGroupPoolsDelete202Response
    | StandbyContainerGroupPoolsDelete204Response
    | StandbyContainerGroupPoolsDeleteDefaultResponse
    | StandbyContainerGroupPoolsDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as StandbyContainerGroupPoolsDeleteLogicalResponse;
  return;
}

/** Delete a StandbyContainerGroupPoolResource */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyContainerGroupPoolName: string,
  options: StandbyContainerGroupPoolsDeleteOptionalParams = {
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
        standbyContainerGroupPoolName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}

export function _updateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyContainerGroupPoolName: string,
  properties: StandbyContainerGroupPoolResourceUpdate,
  options: StandbyContainerGroupPoolsUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | StandbyContainerGroupPoolsUpdate200Response
  | StandbyContainerGroupPoolsUpdateDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools/{standbyContainerGroupPoolName}",
      subscriptionId,
      resourceGroupName,
      standbyContainerGroupPoolName,
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
                    refillPolicy:
                      properties.properties?.elasticityProfile?.[
                        "refillPolicy"
                      ],
                  },
              containerGroupProperties: !properties.properties
                ?.containerGroupProperties
                ? undefined
                : {
                    containerGroupProfile: {
                      id: properties.properties?.containerGroupProperties
                        ?.containerGroupProfile["id"],
                      revision:
                        properties.properties?.containerGroupProperties
                          ?.containerGroupProfile["revision"],
                    },
                    subnetIds:
                      properties.properties?.containerGroupProperties?.[
                        "subnetIds"
                      ] === undefined
                        ? properties.properties?.containerGroupProperties?.[
                            "subnetIds"
                          ]
                        : properties.properties?.containerGroupProperties?.[
                            "subnetIds"
                          ].map((p) => ({ id: p["id"] })),
                  },
            },
      },
    });
}

export async function _updateDeserialize(
  result:
    | StandbyContainerGroupPoolsUpdate200Response
    | StandbyContainerGroupPoolsUpdateDefaultResponse,
): Promise<StandbyContainerGroupPoolResource> {
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
          elasticityProfile: {
            maxReadyCapacity:
              result.body.properties?.elasticityProfile["maxReadyCapacity"],
            refillPolicy:
              result.body.properties?.elasticityProfile["refillPolicy"],
          },
          containerGroupProperties: {
            containerGroupProfile: {
              id: result.body.properties?.containerGroupProperties
                .containerGroupProfile["id"],
              revision:
                result.body.properties?.containerGroupProperties
                  .containerGroupProfile["revision"],
            },
            subnetIds:
              result.body.properties?.containerGroupProperties["subnetIds"] ===
              undefined
                ? result.body.properties?.containerGroupProperties["subnetIds"]
                : result.body.properties?.containerGroupProperties[
                    "subnetIds"
                  ].map((p) => ({ id: p["id"] })),
          },
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Update a StandbyContainerGroupPoolResource */
export async function update(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyContainerGroupPoolName: string,
  properties: StandbyContainerGroupPoolResourceUpdate,
  options: StandbyContainerGroupPoolsUpdateOptionalParams = {
    requestOptions: {},
  },
): Promise<StandbyContainerGroupPoolResource> {
  const result = await _updateSend(
    context,
    subscriptionId,
    resourceGroupName,
    standbyContainerGroupPoolName,
    properties,
    options,
  );
  return _updateDeserialize(result);
}

export function _listByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: StandbyContainerGroupPoolsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | StandbyContainerGroupPoolsListByResourceGroup200Response
  | StandbyContainerGroupPoolsListByResourceGroupDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByResourceGroupDeserialize(
  result:
    | StandbyContainerGroupPoolsListByResourceGroup200Response
    | StandbyContainerGroupPoolsListByResourceGroupDefaultResponse,
): Promise<StandbyContainerGroupPoolResourceListResult> {
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
            elasticityProfile: {
              maxReadyCapacity:
                p.properties?.elasticityProfile["maxReadyCapacity"],
              refillPolicy: p.properties?.elasticityProfile["refillPolicy"],
            },
            containerGroupProperties: {
              containerGroupProfile: {
                id: p.properties?.containerGroupProperties
                  .containerGroupProfile["id"],
                revision:
                  p.properties?.containerGroupProperties.containerGroupProfile[
                    "revision"
                  ],
              },
              subnetIds:
                p.properties?.containerGroupProperties["subnetIds"] ===
                undefined
                  ? p.properties?.containerGroupProperties["subnetIds"]
                  : p.properties?.containerGroupProperties["subnetIds"].map(
                      (p) => ({ id: p["id"] }),
                    ),
            },
            provisioningState: p.properties?.["provisioningState"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List StandbyContainerGroupPoolResource resources by resource group */
export function listByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: StandbyContainerGroupPoolsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<StandbyContainerGroupPoolResource> {
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
  options: StandbyContainerGroupPoolsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | StandbyContainerGroupPoolsListBySubscription200Response
  | StandbyContainerGroupPoolsListBySubscriptionDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.StandbyPool/standbyContainerGroupPools",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listBySubscriptionDeserialize(
  result:
    | StandbyContainerGroupPoolsListBySubscription200Response
    | StandbyContainerGroupPoolsListBySubscriptionDefaultResponse,
): Promise<StandbyContainerGroupPoolResourceListResult> {
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
            elasticityProfile: {
              maxReadyCapacity:
                p.properties?.elasticityProfile["maxReadyCapacity"],
              refillPolicy: p.properties?.elasticityProfile["refillPolicy"],
            },
            containerGroupProperties: {
              containerGroupProfile: {
                id: p.properties?.containerGroupProperties
                  .containerGroupProfile["id"],
                revision:
                  p.properties?.containerGroupProperties.containerGroupProfile[
                    "revision"
                  ],
              },
              subnetIds:
                p.properties?.containerGroupProperties["subnetIds"] ===
                undefined
                  ? p.properties?.containerGroupProperties["subnetIds"]
                  : p.properties?.containerGroupProperties["subnetIds"].map(
                      (p) => ({ id: p["id"] }),
                    ),
            },
            provisioningState: p.properties?.["provisioningState"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List StandbyContainerGroupPoolResource resources by subscription ID */
export function listBySubscription(
  context: Client,
  subscriptionId: string,
  options: StandbyContainerGroupPoolsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<StandbyContainerGroupPoolResource> {
  return buildPagedAsyncIterator(
    context,
    () => _listBySubscriptionSend(context, subscriptionId, options),
    _listBySubscriptionDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
