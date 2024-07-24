// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  nestedProxyResourcePropertiesSerializer,
  NestedProxyResource,
  _NestedProxyResourceListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  NestedProxyResourcesCreateOrReplace200Response,
  NestedProxyResourcesCreateOrReplace201Response,
  NestedProxyResourcesCreateOrReplaceDefaultResponse,
  NestedProxyResourcesCreateOrReplaceLogicalResponse,
  NestedProxyResourcesDelete202Response,
  NestedProxyResourcesDelete204Response,
  NestedProxyResourcesDeleteDefaultResponse,
  NestedProxyResourcesDeleteLogicalResponse,
  NestedProxyResourcesGet200Response,
  NestedProxyResourcesGetDefaultResponse,
  NestedProxyResourcesListByTopLevelTrackedResource200Response,
  NestedProxyResourcesListByTopLevelTrackedResourceDefaultResponse,
  NestedProxyResourcesUpdate200Response,
  NestedProxyResourcesUpdate202Response,
  NestedProxyResourcesUpdateDefaultResponse,
  NestedProxyResourcesUpdateLogicalResponse,
  ResourcesContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  NestedProxyResourcesGetOptionalParams,
  NestedProxyResourcesCreateOrReplaceOptionalParams,
  NestedProxyResourcesUpdateOptionalParams,
  NestedProxyResourcesDeleteOptionalParams,
  NestedProxyResourcesListByTopLevelTrackedResourceOptionalParams,
} from "../../models/options.js";

export function _nestedProxyResourcesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  topLevelTrackedResourceName: string,
  nextedProxyResourceName: string,
  options: NestedProxyResourcesGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  NestedProxyResourcesGet200Response | NestedProxyResourcesGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/nestedProxyResources/{nextedProxyResourceName}",
      subscriptionId,
      resourceGroupName,
      topLevelTrackedResourceName,
      nextedProxyResourceName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _nestedProxyResourcesGetDeserialize(
  result:
    | NestedProxyResourcesGet200Response
    | NestedProxyResourcesGetDefaultResponse,
): Promise<NestedProxyResource> {
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
          provisioningState: result.body.properties?.["provisioningState"],
          description: result.body.properties?.["description"],
        },
  };
}

/** Get a NestedProxyResource */
export async function nestedProxyResourcesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  topLevelTrackedResourceName: string,
  nextedProxyResourceName: string,
  options: NestedProxyResourcesGetOptionalParams = { requestOptions: {} },
): Promise<NestedProxyResource> {
  const result = await _nestedProxyResourcesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    topLevelTrackedResourceName,
    nextedProxyResourceName,
    options,
  );
  return _nestedProxyResourcesGetDeserialize(result);
}

export function _nestedProxyResourcesCreateOrReplaceSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  topLevelTrackedResourceName: string,
  nextedProxyResourceName: string,
  resource: NestedProxyResource,
  options: NestedProxyResourcesCreateOrReplaceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | NestedProxyResourcesCreateOrReplace200Response
  | NestedProxyResourcesCreateOrReplace201Response
  | NestedProxyResourcesCreateOrReplaceDefaultResponse
  | NestedProxyResourcesCreateOrReplaceLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/nestedProxyResources/{nextedProxyResourceName}",
      subscriptionId,
      resourceGroupName,
      topLevelTrackedResourceName,
      nextedProxyResourceName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? resource.properties
          : nestedProxyResourcePropertiesSerializer(resource.properties),
      },
    });
}

export async function _nestedProxyResourcesCreateOrReplaceDeserialize(
  result:
    | NestedProxyResourcesCreateOrReplace200Response
    | NestedProxyResourcesCreateOrReplace201Response
    | NestedProxyResourcesCreateOrReplaceDefaultResponse
    | NestedProxyResourcesCreateOrReplaceLogicalResponse,
): Promise<NestedProxyResource> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const res =
    result as unknown as NestedProxyResourcesCreateOrReplaceLogicalResponse;
  return {
    id: res.body["id"],
    name: res.body["name"],
    type: res.body["type"],
    systemData: !res.body.systemData
      ? undefined
      : {
          createdBy: res.body.systemData?.["createdBy"],
          createdByType: res.body.systemData?.["createdByType"],
          createdAt:
            res.body.systemData?.["createdAt"] !== undefined
              ? new Date(res.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: res.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: res.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            res.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(res.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !res.body.properties
      ? undefined
      : {
          provisioningState: res.body.properties?.["provisioningState"],
          description: res.body.properties?.["description"],
        },
  };
}

/** Create a NestedProxyResource */
export function nestedProxyResourcesCreateOrReplace(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  topLevelTrackedResourceName: string,
  nextedProxyResourceName: string,
  resource: NestedProxyResource,
  options: NestedProxyResourcesCreateOrReplaceOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<NestedProxyResource>, NestedProxyResource> {
  return getLongRunningPoller(
    context,
    _nestedProxyResourcesCreateOrReplaceDeserialize,
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _nestedProxyResourcesCreateOrReplaceSend(
          context,
          subscriptionId,
          resourceGroupName,
          topLevelTrackedResourceName,
          nextedProxyResourceName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<NestedProxyResource>, NestedProxyResource>;
}

export function _nestedProxyResourcesUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  topLevelTrackedResourceName: string,
  nextedProxyResourceName: string,
  properties: NestedProxyResource,
  options: NestedProxyResourcesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | NestedProxyResourcesUpdate200Response
  | NestedProxyResourcesUpdate202Response
  | NestedProxyResourcesUpdateDefaultResponse
  | NestedProxyResourcesUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/nestedProxyResources/{nextedProxyResourceName}",
      subscriptionId,
      resourceGroupName,
      topLevelTrackedResourceName,
      nextedProxyResourceName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !properties.properties
          ? properties.properties
          : nestedProxyResourcePropertiesSerializer(properties.properties),
      },
    });
}

export async function _nestedProxyResourcesUpdateDeserialize(
  result:
    | NestedProxyResourcesUpdate200Response
    | NestedProxyResourcesUpdate202Response
    | NestedProxyResourcesUpdateDefaultResponse
    | NestedProxyResourcesUpdateLogicalResponse,
): Promise<NestedProxyResource> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const res = result as unknown as NestedProxyResourcesUpdateLogicalResponse;
  return {
    id: res.body["id"],
    name: res.body["name"],
    type: res.body["type"],
    systemData: !res.body.systemData
      ? undefined
      : {
          createdBy: res.body.systemData?.["createdBy"],
          createdByType: res.body.systemData?.["createdByType"],
          createdAt:
            res.body.systemData?.["createdAt"] !== undefined
              ? new Date(res.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: res.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: res.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            res.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(res.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !res.body.properties
      ? undefined
      : {
          provisioningState: res.body.properties?.["provisioningState"],
          description: res.body.properties?.["description"],
        },
  };
}

/** Update a NestedProxyResource */
export function nestedProxyResourcesUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  topLevelTrackedResourceName: string,
  nextedProxyResourceName: string,
  properties: NestedProxyResource,
  options: NestedProxyResourcesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<NestedProxyResource>, NestedProxyResource> {
  return getLongRunningPoller(context, _nestedProxyResourcesUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _nestedProxyResourcesUpdateSend(
        context,
        subscriptionId,
        resourceGroupName,
        topLevelTrackedResourceName,
        nextedProxyResourceName,
        properties,
        options,
      ),
  }) as PollerLike<OperationState<NestedProxyResource>, NestedProxyResource>;
}

export function _nestedProxyResourcesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  topLevelTrackedResourceName: string,
  nextedProxyResourceName: string,
  options: NestedProxyResourcesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | NestedProxyResourcesDelete202Response
  | NestedProxyResourcesDelete204Response
  | NestedProxyResourcesDeleteDefaultResponse
  | NestedProxyResourcesDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/nestedProxyResources/{nextedProxyResourceName}",
      subscriptionId,
      resourceGroupName,
      topLevelTrackedResourceName,
      nextedProxyResourceName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _nestedProxyResourcesDeleteDeserialize(
  result:
    | NestedProxyResourcesDelete202Response
    | NestedProxyResourcesDelete204Response
    | NestedProxyResourcesDeleteDefaultResponse
    | NestedProxyResourcesDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a NestedProxyResource */
export function nestedProxyResourcesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  topLevelTrackedResourceName: string,
  nextedProxyResourceName: string,
  options: NestedProxyResourcesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _nestedProxyResourcesDeleteDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _nestedProxyResourcesDeleteSend(
        context,
        subscriptionId,
        resourceGroupName,
        topLevelTrackedResourceName,
        nextedProxyResourceName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}

export function _nestedProxyResourcesListByTopLevelTrackedResourceSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  topLevelTrackedResourceName: string,
  options: NestedProxyResourcesListByTopLevelTrackedResourceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | NestedProxyResourcesListByTopLevelTrackedResource200Response
  | NestedProxyResourcesListByTopLevelTrackedResourceDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/nestedProxyResources",
      subscriptionId,
      resourceGroupName,
      topLevelTrackedResourceName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _nestedProxyResourcesListByTopLevelTrackedResourceDeserialize(
  result:
    | NestedProxyResourcesListByTopLevelTrackedResource200Response
    | NestedProxyResourcesListByTopLevelTrackedResourceDefaultResponse,
): Promise<_NestedProxyResourceListResult> {
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
              description: p.properties?.["description"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List NestedProxyResource resources by TopLevelTrackedResource */
export function nestedProxyResourcesListByTopLevelTrackedResource(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  topLevelTrackedResourceName: string,
  options: NestedProxyResourcesListByTopLevelTrackedResourceOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<NestedProxyResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _nestedProxyResourcesListByTopLevelTrackedResourceSend(
        context,
        subscriptionId,
        resourceGroupName,
        topLevelTrackedResourceName,
        options,
      ),
    _nestedProxyResourcesListByTopLevelTrackedResourceDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
