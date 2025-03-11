// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  _ExpressRouteAuthorizationList,
  _expressRouteAuthorizationListDeserializer,
  ExpressRouteAuthorization,
  expressRouteAuthorizationSerializer,
  expressRouteAuthorizationDeserializer,
} from "../../models/models.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  AuthorizationsDeleteOptionalParams,
  AuthorizationsCreateOrUpdateOptionalParams,
  AuthorizationsGetOptionalParams,
  AuthorizationsListOptionalParams,
} from "./options.js";

export function _authorizationsDeleteSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  authorizationName: string,
  options: AuthorizationsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations/{authorizationName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      authorizationName: authorizationName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _authorizationsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a ExpressRouteAuthorization */
export function authorizationsDelete(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  authorizationName: string,
  options: AuthorizationsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _authorizationsDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _authorizationsDeleteSend(
          context,
          resourceGroupName,
          privateCloudName,
          authorizationName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _authorizationsCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  authorizationName: string,
  authorization: ExpressRouteAuthorization,
  options: AuthorizationsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations/{authorizationName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      authorizationName: authorizationName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: expressRouteAuthorizationSerializer(authorization),
    });
}

export async function _authorizationsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ExpressRouteAuthorization> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return expressRouteAuthorizationDeserializer(result.body);
}

/** Create a ExpressRouteAuthorization */
export function authorizationsCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  authorizationName: string,
  authorization: ExpressRouteAuthorization,
  options: AuthorizationsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<
  OperationState<ExpressRouteAuthorization>,
  ExpressRouteAuthorization
> {
  return getLongRunningPoller(
    context,
    _authorizationsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _authorizationsCreateOrUpdateSend(
          context,
          resourceGroupName,
          privateCloudName,
          authorizationName,
          authorization,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<
    OperationState<ExpressRouteAuthorization>,
    ExpressRouteAuthorization
  >;
}

export function _authorizationsGetSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  authorizationName: string,
  options: AuthorizationsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations/{authorizationName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      authorizationName: authorizationName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _authorizationsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<ExpressRouteAuthorization> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return expressRouteAuthorizationDeserializer(result.body);
}

/** Get a ExpressRouteAuthorization */
export async function authorizationsGet(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  authorizationName: string,
  options: AuthorizationsGetOptionalParams = { requestOptions: {} },
): Promise<ExpressRouteAuthorization> {
  const result = await _authorizationsGetSend(
    context,
    resourceGroupName,
    privateCloudName,
    authorizationName,
    options,
  );
  return _authorizationsGetDeserialize(result);
}

export function _authorizationsListSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: AuthorizationsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _authorizationsListDeserialize(
  result: PathUncheckedResponse,
): Promise<_ExpressRouteAuthorizationList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _expressRouteAuthorizationListDeserializer(result.body);
}

/** List ExpressRouteAuthorization resources by PrivateCloud */
export function authorizationsList(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: AuthorizationsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ExpressRouteAuthorization> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _authorizationsListSend(
        context,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _authorizationsListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
