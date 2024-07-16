// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  expressRouteAuthorizationPropertiesSerializer,
  CreatedByType,
  ExpressRouteAuthorization,
  _ExpressRouteAuthorizationList,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  AVSContext as Client,
  AuthorizationsCreateOrUpdate200Response,
  AuthorizationsCreateOrUpdate201Response,
  AuthorizationsCreateOrUpdateDefaultResponse,
  AuthorizationsCreateOrUpdateLogicalResponse,
  AuthorizationsDelete200Response,
  AuthorizationsDelete202Response,
  AuthorizationsDelete204Response,
  AuthorizationsDeleteDefaultResponse,
  AuthorizationsDeleteLogicalResponse,
  AuthorizationsGet200Response,
  AuthorizationsGetDefaultResponse,
  AuthorizationsListByPrivateCloud200Response,
  AuthorizationsListByPrivateCloudDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  AuthorizationsListByPrivateCloudOptionalParams,
  AuthorizationsGetOptionalParams,
  AuthorizationsCreateOrUpdateOptionalParams,
  AuthorizationsDeleteOptionalParams,
} from "../../models/options.js";

export function _listByPrivateCloudSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: AuthorizationsListByPrivateCloudOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | AuthorizationsListByPrivateCloud200Response
  | AuthorizationsListByPrivateCloudDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByPrivateCloudDeserialize(
  result:
    | AuthorizationsListByPrivateCloud200Response
    | AuthorizationsListByPrivateCloudDefaultResponse,
): Promise<_ExpressRouteAuthorizationList> {
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
              expressRouteAuthorizationId:
                p.properties?.["expressRouteAuthorizationId"],
              expressRouteAuthorizationKey:
                p.properties?.["expressRouteAuthorizationKey"],
              expressRouteId: p.properties?.["expressRouteId"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List ExpressRouteAuthorization resources by PrivateCloud */
export function listByPrivateCloud(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: AuthorizationsListByPrivateCloudOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<ExpressRouteAuthorization> {
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
  authorizationName: string,
  options: AuthorizationsGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  AuthorizationsGet200Response | AuthorizationsGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations/{authorizationName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      authorizationName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: AuthorizationsGet200Response | AuthorizationsGetDefaultResponse,
): Promise<ExpressRouteAuthorization> {
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
          expressRouteAuthorizationId:
            result.body.properties?.["expressRouteAuthorizationId"],
          expressRouteAuthorizationKey:
            result.body.properties?.["expressRouteAuthorizationKey"],
          expressRouteId: result.body.properties?.["expressRouteId"],
        },
  };
}

/** Get a ExpressRouteAuthorization */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  authorizationName: string,
  options: AuthorizationsGetOptionalParams = { requestOptions: {} },
): Promise<ExpressRouteAuthorization> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    authorizationName,
    options,
  );
  return _getDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  authorizationName: string,
  authorization: ExpressRouteAuthorization,
  options: AuthorizationsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | AuthorizationsCreateOrUpdate200Response
  | AuthorizationsCreateOrUpdate201Response
  | AuthorizationsCreateOrUpdateDefaultResponse
  | AuthorizationsCreateOrUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations/{authorizationName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      authorizationName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !authorization.properties
          ? authorization.properties
          : expressRouteAuthorizationPropertiesSerializer(
              authorization.properties,
            ),
      },
    });
}

export async function _createOrUpdateDeserialize(
  result:
    | AuthorizationsCreateOrUpdate200Response
    | AuthorizationsCreateOrUpdate201Response
    | AuthorizationsCreateOrUpdateDefaultResponse
    | AuthorizationsCreateOrUpdateLogicalResponse,
): Promise<ExpressRouteAuthorization> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as AuthorizationsCreateOrUpdateLogicalResponse;
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
          expressRouteAuthorizationId:
            result.body.properties?.["expressRouteAuthorizationId"],
          expressRouteAuthorizationKey:
            result.body.properties?.["expressRouteAuthorizationKey"],
          expressRouteId: result.body.properties?.["expressRouteId"],
        },
  };
}

/** Create a ExpressRouteAuthorization */
export function createOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  authorizationName: string,
  authorization: ExpressRouteAuthorization,
  options: AuthorizationsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<
  OperationState<ExpressRouteAuthorization>,
  ExpressRouteAuthorization
> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        authorizationName,
        authorization,
        options,
      ),
  }) as PollerLike<
    OperationState<ExpressRouteAuthorization>,
    ExpressRouteAuthorization
  >;
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  authorizationName: string,
  options: AuthorizationsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | AuthorizationsDelete200Response
  | AuthorizationsDelete202Response
  | AuthorizationsDelete204Response
  | AuthorizationsDeleteDefaultResponse
  | AuthorizationsDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations/{authorizationName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      authorizationName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | AuthorizationsDelete200Response
    | AuthorizationsDelete202Response
    | AuthorizationsDelete204Response
    | AuthorizationsDeleteDefaultResponse
    | AuthorizationsDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as AuthorizationsDeleteLogicalResponse;
  return;
}

/** Delete a ExpressRouteAuthorization */
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
  authorizationName: string,
  options: AuthorizationsDeleteOptionalParams = { requestOptions: {} },
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
        authorizationName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}
