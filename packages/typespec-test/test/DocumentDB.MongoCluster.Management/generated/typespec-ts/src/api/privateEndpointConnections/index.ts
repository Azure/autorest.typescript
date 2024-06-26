// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  PrivateEndpointConnectionResourceListResult,
  PrivateEndpointConnectionResource,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  DocumentDBContext as Client,
  PrivateEndpointConnectionsCreate200Response,
  PrivateEndpointConnectionsCreate201Response,
  PrivateEndpointConnectionsCreate202Response,
  PrivateEndpointConnectionsCreateDefaultResponse,
  PrivateEndpointConnectionsCreateLogicalResponse,
  PrivateEndpointConnectionsDelete202Response,
  PrivateEndpointConnectionsDelete204Response,
  PrivateEndpointConnectionsDeleteDefaultResponse,
  PrivateEndpointConnectionsDeleteLogicalResponse,
  PrivateEndpointConnectionsGet200Response,
  PrivateEndpointConnectionsGetDefaultResponse,
  PrivateEndpointConnectionsListByMongoCluster200Response,
  PrivateEndpointConnectionsListByMongoClusterDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  PrivateEndpointConnectionsListByMongoClusterOptionalParams,
  PrivateEndpointConnectionsGetOptionalParams,
  PrivateEndpointConnectionsCreateOptionalParams,
  PrivateEndpointConnectionsDeleteOptionalParams,
} from "../../models/options.js";

export function _privateEndpointConnectionsListByMongoClusterSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  mongoClusterName: string,
  options: PrivateEndpointConnectionsListByMongoClusterOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | PrivateEndpointConnectionsListByMongoCluster200Response
  | PrivateEndpointConnectionsListByMongoClusterDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/privateEndpointConnections",
      subscriptionId,
      resourceGroupName,
      mongoClusterName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _privateEndpointConnectionsListByMongoClusterDeserialize(
  result:
    | PrivateEndpointConnectionsListByMongoCluster200Response
    | PrivateEndpointConnectionsListByMongoClusterDefaultResponse,
): Promise<PrivateEndpointConnectionResourceListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
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
            groupIds: p.properties?.["groupIds"],
            privateEndpoint: !p.properties?.privateEndpoint
              ? undefined
              : { id: p.properties?.privateEndpoint?.["id"] },
            privateLinkServiceConnectionState: {
              status: p.properties?.privateLinkServiceConnectionState["status"],
              description:
                p.properties?.privateLinkServiceConnectionState["description"],
              actionsRequired:
                p.properties?.privateLinkServiceConnectionState[
                  "actionsRequired"
                ],
            },
            provisioningState: p.properties?.["provisioningState"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List existing private connections */
export function privateEndpointConnectionsListByMongoCluster(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  mongoClusterName: string,
  options: PrivateEndpointConnectionsListByMongoClusterOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<PrivateEndpointConnectionResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _privateEndpointConnectionsListByMongoClusterSend(
        context,
        subscriptionId,
        resourceGroupName,
        mongoClusterName,
        options,
      ),
    _privateEndpointConnectionsListByMongoClusterDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _privateEndpointConnectionsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  mongoClusterName: string,
  privateEndpointConnectionName: string,
  options: PrivateEndpointConnectionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | PrivateEndpointConnectionsGet200Response
  | PrivateEndpointConnectionsGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/privateEndpointConnections/{privateEndpointConnectionName}",
      subscriptionId,
      resourceGroupName,
      mongoClusterName,
      privateEndpointConnectionName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _privateEndpointConnectionsGetDeserialize(
  result:
    | PrivateEndpointConnectionsGet200Response
    | PrivateEndpointConnectionsGetDefaultResponse,
): Promise<PrivateEndpointConnectionResource> {
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
          groupIds: result.body.properties?.["groupIds"],
          privateEndpoint: !result.body.properties?.privateEndpoint
            ? undefined
            : { id: result.body.properties?.privateEndpoint?.["id"] },
          privateLinkServiceConnectionState: {
            status:
              result.body.properties?.privateLinkServiceConnectionState[
                "status"
              ],
            description:
              result.body.properties?.privateLinkServiceConnectionState[
                "description"
              ],
            actionsRequired:
              result.body.properties?.privateLinkServiceConnectionState[
                "actionsRequired"
              ],
          },
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a specific private connection */
export async function privateEndpointConnectionsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  mongoClusterName: string,
  privateEndpointConnectionName: string,
  options: PrivateEndpointConnectionsGetOptionalParams = { requestOptions: {} },
): Promise<PrivateEndpointConnectionResource> {
  const result = await _privateEndpointConnectionsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    mongoClusterName,
    privateEndpointConnectionName,
    options,
  );
  return _privateEndpointConnectionsGetDeserialize(result);
}

export function _privateEndpointConnectionsCreateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  mongoClusterName: string,
  privateEndpointConnectionName: string,
  resource: PrivateEndpointConnectionResource,
  options: PrivateEndpointConnectionsCreateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | PrivateEndpointConnectionsCreate200Response
  | PrivateEndpointConnectionsCreate201Response
  | PrivateEndpointConnectionsCreate202Response
  | PrivateEndpointConnectionsCreateDefaultResponse
  | PrivateEndpointConnectionsCreateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/privateEndpointConnections/{privateEndpointConnectionName}",
      subscriptionId,
      resourceGroupName,
      mongoClusterName,
      privateEndpointConnectionName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? undefined
          : {
              privateEndpoint: !resource.properties?.privateEndpoint
                ? undefined
                : { id: resource.properties?.privateEndpoint?.["id"] },
              privateLinkServiceConnectionState: {
                status:
                  resource.properties?.privateLinkServiceConnectionState[
                    "status"
                  ],
                description:
                  resource.properties?.privateLinkServiceConnectionState[
                    "description"
                  ],
                actionsRequired:
                  resource.properties?.privateLinkServiceConnectionState[
                    "actionsRequired"
                  ],
              },
              provisioningState: resource.properties?.["provisioningState"],
            },
      },
    });
}

export async function _privateEndpointConnectionsCreateDeserialize(
  result:
    | PrivateEndpointConnectionsCreate200Response
    | PrivateEndpointConnectionsCreate201Response
    | PrivateEndpointConnectionsCreate202Response
    | PrivateEndpointConnectionsCreateDefaultResponse
    | PrivateEndpointConnectionsCreateLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as PrivateEndpointConnectionsCreateLogicalResponse;
  return;
}

/** Create a Private endpoint connection */
export function privateEndpointConnectionsCreate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  mongoClusterName: string,
  privateEndpointConnectionName: string,
  resource: PrivateEndpointConnectionResource,
  options: PrivateEndpointConnectionsCreateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _privateEndpointConnectionsCreateDeserialize,
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _privateEndpointConnectionsCreateSend(
          context,
          subscriptionId,
          resourceGroupName,
          mongoClusterName,
          privateEndpointConnectionName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _privateEndpointConnectionsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  mongoClusterName: string,
  privateEndpointConnectionName: string,
  options: PrivateEndpointConnectionsDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | PrivateEndpointConnectionsDelete202Response
  | PrivateEndpointConnectionsDelete204Response
  | PrivateEndpointConnectionsDeleteDefaultResponse
  | PrivateEndpointConnectionsDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/privateEndpointConnections/{privateEndpointConnectionName}",
      subscriptionId,
      resourceGroupName,
      mongoClusterName,
      privateEndpointConnectionName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _privateEndpointConnectionsDeleteDeserialize(
  result:
    | PrivateEndpointConnectionsDelete202Response
    | PrivateEndpointConnectionsDelete204Response
    | PrivateEndpointConnectionsDeleteDefaultResponse
    | PrivateEndpointConnectionsDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as PrivateEndpointConnectionsDeleteLogicalResponse;
  return;
}

/** Delete the private endpoint connection */
export function privateEndpointConnectionsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  mongoClusterName: string,
  privateEndpointConnectionName: string,
  options: PrivateEndpointConnectionsDeleteOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _privateEndpointConnectionsDeleteDeserialize,
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _privateEndpointConnectionsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          mongoClusterName,
          privateEndpointConnectionName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}