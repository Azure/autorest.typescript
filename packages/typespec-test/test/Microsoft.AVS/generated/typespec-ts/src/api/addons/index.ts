// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  addonPropertiesUnionSerializer,
  CreatedByType,
  Addon,
  AddonType,
  _AddonList,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  AVSContext as Client,
  AddonsCreateOrUpdate200Response,
  AddonsCreateOrUpdate201Response,
  AddonsCreateOrUpdateDefaultResponse,
  AddonsCreateOrUpdateLogicalResponse,
  AddonsDelete200Response,
  AddonsDelete202Response,
  AddonsDelete204Response,
  AddonsDeleteDefaultResponse,
  AddonsDeleteLogicalResponse,
  AddonsGet200Response,
  AddonsGetDefaultResponse,
  AddonsListByPrivateCloud200Response,
  AddonsListByPrivateCloudDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  AddonsListByPrivateCloudOptionalParams,
  AddonsGetOptionalParams,
  AddonsCreateOrUpdateOptionalParams,
  AddonsDeleteOptionalParams,
} from "../../models/options.js";

export function _listByPrivateCloudSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: AddonsListByPrivateCloudOptionalParams = { requestOptions: {} },
): StreamableMethod<
  AddonsListByPrivateCloud200Response | AddonsListByPrivateCloudDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByPrivateCloudDeserialize(
  result:
    | AddonsListByPrivateCloud200Response
    | AddonsListByPrivateCloudDefaultResponse,
): Promise<_AddonList> {
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
          ? undefined
          : {
              addonType: p.properties?.["addonType"] as AddonType,
              provisioningState: p.properties?.["provisioningState"] as any,
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List Addon resources by PrivateCloud */
export function listByPrivateCloud(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: AddonsListByPrivateCloudOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Addon> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByPrivateCloudSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _listByPrivateCloudDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  addonName: string,
  options: AddonsGetOptionalParams = { requestOptions: {} },
): StreamableMethod<AddonsGet200Response | AddonsGetDefaultResponse> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons/{addonName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      addonName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: AddonsGet200Response | AddonsGetDefaultResponse,
): Promise<Addon> {
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
      ? undefined
      : {
          addonType: result.body.properties?.["addonType"] as AddonType,
          provisioningState: result.body.properties?.[
            "provisioningState"
          ] as any,
        },
  };
}

/** Get a Addon */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  addonName: string,
  options: AddonsGetOptionalParams = { requestOptions: {} },
): Promise<Addon> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    addonName,
    options,
  );
  return _getDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  addonName: string,
  addon: Addon,
  options: AddonsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | AddonsCreateOrUpdate200Response
  | AddonsCreateOrUpdate201Response
  | AddonsCreateOrUpdateDefaultResponse
  | AddonsCreateOrUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons/{addonName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      addonName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !addon.properties
          ? addon.properties
          : addonPropertiesUnionSerializer(addon.properties),
      },
    });
}

export async function _createOrUpdateDeserialize(
  result:
    | AddonsCreateOrUpdate200Response
    | AddonsCreateOrUpdate201Response
    | AddonsCreateOrUpdateDefaultResponse
    | AddonsCreateOrUpdateLogicalResponse,
): Promise<Addon> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as AddonsCreateOrUpdateLogicalResponse;
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
      ? undefined
      : {
          addonType: result.body.properties?.["addonType"] as AddonType,
          provisioningState: result.body.properties?.[
            "provisioningState"
          ] as any,
        },
  };
}

/** Create a Addon */
export function createOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  addonName: string,
  addon: Addon,
  options: AddonsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Addon>, Addon> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        addonName,
        addon,
        options,
      ),
  }) as PollerLike<OperationState<Addon>, Addon>;
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  addonName: string,
  options: AddonsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | AddonsDelete200Response
  | AddonsDelete202Response
  | AddonsDelete204Response
  | AddonsDeleteDefaultResponse
  | AddonsDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons/{addonName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      addonName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | AddonsDelete200Response
    | AddonsDelete202Response
    | AddonsDelete204Response
    | AddonsDeleteDefaultResponse
    | AddonsDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as AddonsDeleteLogicalResponse;
  return;
}

/** Delete a Addon */
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
  addonName: string,
  options: AddonsDeleteOptionalParams = { requestOptions: {} },
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
        addonName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}
