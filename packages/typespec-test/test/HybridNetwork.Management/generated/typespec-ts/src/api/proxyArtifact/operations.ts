// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  _ProxyArtifactOverviewListResult,
  _proxyArtifactOverviewListResultDeserializer,
  ProxyArtifactListOverview,
  _ProxyArtifactVersionsOverviewListResult,
  _proxyArtifactVersionsOverviewListResultDeserializer,
  ProxyArtifactVersionsListOverview,
  proxyArtifactVersionsListOverviewDeserializer,
  ArtifactChangeState,
  artifactChangeStateSerializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  ProxyArtifactUpdateStateOptionalParams,
  ProxyArtifactGetOptionalParams,
  ProxyArtifactListOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _updateStateSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  artifactName: string,
  artifactVersionName: string,
  parameters: ArtifactChangeState,
  options: ProxyArtifactUpdateStateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/artifactVersions/{artifactVersionName}{?api%2Dversion,artifactName}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      artifactStoreName: artifactStoreName,
      artifactVersionName: artifactVersionName,
      "api%2Dversion": context.apiVersion,
      artifactName: artifactName,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: artifactChangeStateSerializer(parameters),
    });
}

export async function _updateStateDeserialize(
  result: PathUncheckedResponse,
): Promise<ProxyArtifactVersionsListOverview> {
  const expectedStatuses = ["200", "202", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return proxyArtifactVersionsListOverviewDeserializer(result.body);
}

/** Change artifact state defined in artifact store. */
export function updateState(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  artifactName: string,
  artifactVersionName: string,
  parameters: ArtifactChangeState,
  options: ProxyArtifactUpdateStateOptionalParams = { requestOptions: {} },
): PollerLike<
  OperationState<ProxyArtifactVersionsListOverview>,
  ProxyArtifactVersionsListOverview
> {
  return getLongRunningPoller(context, _updateStateDeserialize, ["200", "202", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateStateSend(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        artifactName,
        artifactVersionName,
        parameters,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<
    OperationState<ProxyArtifactVersionsListOverview>,
    ProxyArtifactVersionsListOverview
  >;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  artifactName: string,
  options: ProxyArtifactGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/artifactVersions{?api%2Dversion,artifactName}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      artifactStoreName: artifactStoreName,
      "api%2Dversion": context.apiVersion,
      artifactName: artifactName,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<_ProxyArtifactVersionsOverviewListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _proxyArtifactVersionsOverviewListResultDeserializer(result.body);
}

/** Get a Artifact overview information. */
export function get(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  artifactName: string,
  options: ProxyArtifactGetOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ProxyArtifactVersionsListOverview> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _getSend(context, resourceGroupName, publisherName, artifactStoreName, artifactName, options),
    _getDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  options: ProxyArtifactListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/artifacts{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      artifactStoreName: artifactStoreName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<_ProxyArtifactOverviewListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _proxyArtifactOverviewListResultDeserializer(result.body);
}

/** Lists all the available artifacts in the parent Artifact Store. */
export function list(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  options: ProxyArtifactListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ProxyArtifactListOverview> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, resourceGroupName, publisherName, artifactStoreName, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
