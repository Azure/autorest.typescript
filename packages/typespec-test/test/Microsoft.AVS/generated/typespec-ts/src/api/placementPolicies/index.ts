// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  placementPolicyPropertiesUnionSerializer,
  placementPolicyUpdatePropertiesSerializer,
  CreatedByType,
  PlacementPolicy,
  PlacementPolicyUpdate,
  _PlacementPoliciesList,
} from "../../models/models.js";
import { deserializePlacementPolicyPropertiesUnion } from "../../utils/deserializeUtil.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  AVSContext as Client,
  PlacementPoliciesCreateOrUpdate200Response,
  PlacementPoliciesCreateOrUpdate201Response,
  PlacementPoliciesCreateOrUpdateDefaultResponse,
  PlacementPoliciesCreateOrUpdateLogicalResponse,
  PlacementPoliciesDelete200Response,
  PlacementPoliciesDelete202Response,
  PlacementPoliciesDelete204Response,
  PlacementPoliciesDeleteDefaultResponse,
  PlacementPoliciesDeleteLogicalResponse,
  PlacementPoliciesGet200Response,
  PlacementPoliciesGetDefaultResponse,
  PlacementPoliciesListByCluster200Response,
  PlacementPoliciesListByClusterDefaultResponse,
  PlacementPoliciesUpdate200Response,
  PlacementPoliciesUpdate202Response,
  PlacementPoliciesUpdateDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  PlacementPoliciesListByClusterOptionalParams,
  PlacementPoliciesGetOptionalParams,
  PlacementPoliciesCreateOrUpdateOptionalParams,
  PlacementPoliciesUpdateOptionalParams,
  PlacementPoliciesDeleteOptionalParams,
} from "../../models/options.js";

export function _listByClusterSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  options: PlacementPoliciesListByClusterOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | PlacementPoliciesListByCluster200Response
  | PlacementPoliciesListByClusterDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByClusterDeserialize(
  result:
    | PlacementPoliciesListByCluster200Response
    | PlacementPoliciesListByClusterDefaultResponse,
): Promise<_PlacementPoliciesList> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => {
      return {
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
          ? p.properties
          : deserializePlacementPolicyPropertiesUnion(p.properties),
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List PlacementPolicy resources by Cluster */
export function listByCluster(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  options: PlacementPoliciesListByClusterOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<PlacementPolicy> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByClusterSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        options,
      ),
    _listByClusterDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  placementPolicyName: string,
  options: PlacementPoliciesGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  PlacementPoliciesGet200Response | PlacementPoliciesGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
      placementPolicyName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: PlacementPoliciesGet200Response | PlacementPoliciesGetDefaultResponse,
): Promise<PlacementPolicy> {
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
      ? result.body.properties
      : deserializePlacementPolicyPropertiesUnion(result.body.properties),
  };
}

/** Get a PlacementPolicy */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  placementPolicyName: string,
  options: PlacementPoliciesGetOptionalParams = { requestOptions: {} },
): Promise<PlacementPolicy> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    clusterName,
    placementPolicyName,
    options,
  );
  return _getDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  placementPolicyName: string,
  placementPolicy: PlacementPolicy,
  options: PlacementPoliciesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | PlacementPoliciesCreateOrUpdate200Response
  | PlacementPoliciesCreateOrUpdate201Response
  | PlacementPoliciesCreateOrUpdateDefaultResponse
  | PlacementPoliciesCreateOrUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
      placementPolicyName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !placementPolicy.properties
          ? placementPolicy.properties
          : placementPolicyPropertiesUnionSerializer(
              placementPolicy.properties,
            ),
      },
    });
}

export async function _createOrUpdateDeserialize(
  result:
    | PlacementPoliciesCreateOrUpdate200Response
    | PlacementPoliciesCreateOrUpdate201Response
    | PlacementPoliciesCreateOrUpdateDefaultResponse
    | PlacementPoliciesCreateOrUpdateLogicalResponse,
): Promise<PlacementPolicy> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as PlacementPoliciesCreateOrUpdateLogicalResponse;
  return {
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
      ? result.body.properties
      : deserializePlacementPolicyPropertiesUnion(result.body.properties),
  };
}

/** Create a PlacementPolicy */
export function createOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  placementPolicyName: string,
  placementPolicy: PlacementPolicy,
  options: PlacementPoliciesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<PlacementPolicy>, PlacementPolicy> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        placementPolicyName,
        placementPolicy,
        options,
      ),
  }) as PollerLike<OperationState<PlacementPolicy>, PlacementPolicy>;
}

export function _updateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  placementPolicyName: string,
  placementPolicyUpdate: PlacementPolicyUpdate,
  options: PlacementPoliciesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | PlacementPoliciesUpdate200Response
  | PlacementPoliciesUpdate202Response
  | PlacementPoliciesUpdateDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
      placementPolicyName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !placementPolicyUpdate.properties
          ? placementPolicyUpdate.properties
          : placementPolicyUpdatePropertiesSerializer(
              placementPolicyUpdate.properties,
            ),
      },
    });
}

export async function _updateDeserialize(
  result:
    | PlacementPoliciesUpdate200Response
    | PlacementPoliciesUpdate202Response
    | PlacementPoliciesUpdateDefaultResponse,
): Promise<PlacementPolicy> {
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
      ? result.body.properties
      : deserializePlacementPolicyPropertiesUnion(result.body.properties),
  };
}

/** Update a PlacementPolicy */
export async function update(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  placementPolicyName: string,
  placementPolicyUpdate: PlacementPolicyUpdate,
  options: PlacementPoliciesUpdateOptionalParams = { requestOptions: {} },
): Promise<PlacementPolicy> {
  const result = await _updateSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    clusterName,
    placementPolicyName,
    placementPolicyUpdate,
    options,
  );
  return _updateDeserialize(result);
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  placementPolicyName: string,
  options: PlacementPoliciesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | PlacementPoliciesDelete200Response
  | PlacementPoliciesDelete202Response
  | PlacementPoliciesDelete204Response
  | PlacementPoliciesDeleteDefaultResponse
  | PlacementPoliciesDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
      placementPolicyName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | PlacementPoliciesDelete200Response
    | PlacementPoliciesDelete202Response
    | PlacementPoliciesDelete204Response
    | PlacementPoliciesDeleteDefaultResponse
    | PlacementPoliciesDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as PlacementPoliciesDeleteLogicalResponse;
  return;
}

/** Delete a PlacementPolicy */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  placementPolicyName: string,
  options: PlacementPoliciesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        placementPolicyName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}
