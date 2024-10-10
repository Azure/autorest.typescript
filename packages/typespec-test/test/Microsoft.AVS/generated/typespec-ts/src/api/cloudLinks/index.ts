// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  cloudLinkPropertiesSerializer,
  CreatedByType,
  CloudLink,
  CloudLinkStatus,
  _CloudLinkList,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  AVSContext as Client,
  CloudLinksCreateOrUpdate200Response,
  CloudLinksCreateOrUpdate201Response,
  CloudLinksCreateOrUpdateDefaultResponse,
  CloudLinksCreateOrUpdateLogicalResponse,
  CloudLinksDelete200Response,
  CloudLinksDelete202Response,
  CloudLinksDelete204Response,
  CloudLinksDeleteDefaultResponse,
  CloudLinksDeleteLogicalResponse,
  CloudLinksGet200Response,
  CloudLinksGetDefaultResponse,
  CloudLinksListByPrivateCloud200Response,
  CloudLinksListByPrivateCloudDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  CloudLinksListByPrivateCloudOptionalParams,
  CloudLinksGetOptionalParams,
  CloudLinksCreateOrUpdateOptionalParams,
  CloudLinksDeleteOptionalParams,
} from "../../models/options.js";

export function _listByPrivateCloudSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: CloudLinksListByPrivateCloudOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | CloudLinksListByPrivateCloud200Response
  | CloudLinksListByPrivateCloudDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByPrivateCloudDeserialize(
  result:
    | CloudLinksListByPrivateCloud200Response
    | CloudLinksListByPrivateCloudDefaultResponse,
): Promise<_CloudLinkList> {
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
              provisioningState: p.properties?.["provisioningState"] as any,
              status: p.properties?.["status"] as CloudLinkStatus,
              linkedCloud: p.properties?.["linkedCloud"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List CloudLink resources by PrivateCloud */
export function listByPrivateCloud(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: CloudLinksListByPrivateCloudOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<CloudLink> {
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
  cloudLinkName: string,
  options: CloudLinksGetOptionalParams = { requestOptions: {} },
): StreamableMethod<CloudLinksGet200Response | CloudLinksGetDefaultResponse> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks/{cloudLinkName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      cloudLinkName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: CloudLinksGet200Response | CloudLinksGetDefaultResponse,
): Promise<CloudLink> {
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
          provisioningState: result.body.properties?.[
            "provisioningState"
          ] as any,
          status: result.body.properties?.["status"] as CloudLinkStatus,
          linkedCloud: result.body.properties?.["linkedCloud"],
        },
  };
}

/** Get a CloudLink */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  cloudLinkName: string,
  options: CloudLinksGetOptionalParams = { requestOptions: {} },
): Promise<CloudLink> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    cloudLinkName,
    options,
  );
  return _getDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  cloudLinkName: string,
  cloudLink: CloudLink,
  options: CloudLinksCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | CloudLinksCreateOrUpdate200Response
  | CloudLinksCreateOrUpdate201Response
  | CloudLinksCreateOrUpdateDefaultResponse
  | CloudLinksCreateOrUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks/{cloudLinkName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      cloudLinkName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !cloudLink.properties
          ? cloudLink.properties
          : cloudLinkPropertiesSerializer(cloudLink.properties),
      },
    });
}

export async function _createOrUpdateDeserialize(
  result:
    | CloudLinksCreateOrUpdate200Response
    | CloudLinksCreateOrUpdate201Response
    | CloudLinksCreateOrUpdateDefaultResponse
    | CloudLinksCreateOrUpdateLogicalResponse,
): Promise<CloudLink> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as CloudLinksCreateOrUpdateLogicalResponse;
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
          provisioningState: result.body.properties?.[
            "provisioningState"
          ] as any,
          status: result.body.properties?.["status"] as CloudLinkStatus,
          linkedCloud: result.body.properties?.["linkedCloud"],
        },
  };
}

/** Create a CloudLink */
export function createOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  cloudLinkName: string,
  cloudLink: CloudLink,
  options: CloudLinksCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<CloudLink>, CloudLink> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        cloudLinkName,
        cloudLink,
        options,
      ),
  }) as PollerLike<OperationState<CloudLink>, CloudLink>;
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  cloudLinkName: string,
  options: CloudLinksDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | CloudLinksDelete200Response
  | CloudLinksDelete202Response
  | CloudLinksDelete204Response
  | CloudLinksDeleteDefaultResponse
  | CloudLinksDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks/{cloudLinkName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      cloudLinkName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | CloudLinksDelete200Response
    | CloudLinksDelete202Response
    | CloudLinksDelete204Response
    | CloudLinksDeleteDefaultResponse
    | CloudLinksDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as CloudLinksDeleteLogicalResponse;
  return;
}

/** Delete a CloudLink */
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
  cloudLinkName: string,
  options: CloudLinksDeleteOptionalParams = { requestOptions: {} },
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
        cloudLinkName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}
