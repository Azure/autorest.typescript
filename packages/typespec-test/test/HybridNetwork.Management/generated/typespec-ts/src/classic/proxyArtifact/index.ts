// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementContext } from "../../api/hybridNetworkManagementContext.js";
import { updateState, get, list } from "../../api/proxyArtifact/operations.js";
import {
  ProxyArtifactUpdateStateOptionalParams,
  ProxyArtifactGetOptionalParams,
  ProxyArtifactListOptionalParams,
} from "../../api/proxyArtifact/options.js";
import {
  ProxyArtifactListOverview,
  ProxyArtifactVersionsListOverview,
  ArtifactChangeState,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { SimplePollerLike, getSimplePoller } from "../../static-helpers/simplePollerHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a ProxyArtifact operations. */
export interface ProxyArtifactOperations {
  /** Change artifact state defined in artifact store. */
  updateState: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    artifactName: string,
    artifactVersionName: string,
    parameters: ArtifactChangeState,
    options?: ProxyArtifactUpdateStateOptionalParams,
  ) => PollerLike<
    OperationState<ProxyArtifactVersionsListOverview>,
    ProxyArtifactVersionsListOverview
  >;
  /** @deprecated use updateState instead */
  beginUpdateState: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    artifactName: string,
    artifactVersionName: string,
    parameters: ArtifactChangeState,
    options?: ProxyArtifactUpdateStateOptionalParams,
  ) => Promise<
    SimplePollerLike<
      OperationState<ProxyArtifactVersionsListOverview>,
      ProxyArtifactVersionsListOverview
    >
  >;
  /** @deprecated use updateState instead */
  beginUpdateStateAndWait: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    artifactName: string,
    artifactVersionName: string,
    parameters: ArtifactChangeState,
    options?: ProxyArtifactUpdateStateOptionalParams,
  ) => Promise<ProxyArtifactVersionsListOverview>;
  /** Get a Artifact overview information. */
  get: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    artifactName: string,
    options?: ProxyArtifactGetOptionalParams,
  ) => PagedAsyncIterableIterator<ProxyArtifactVersionsListOverview>;
  /** Lists all the available artifacts in the parent Artifact Store. */
  list: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    options?: ProxyArtifactListOptionalParams,
  ) => PagedAsyncIterableIterator<ProxyArtifactListOverview>;
}

function _getProxyArtifact(context: HybridNetworkManagementContext) {
  return {
    updateState: (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      artifactName: string,
      artifactVersionName: string,
      parameters: ArtifactChangeState,
      options?: ProxyArtifactUpdateStateOptionalParams,
    ) =>
      updateState(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        artifactName,
        artifactVersionName,
        parameters,
        options,
      ),
    beginUpdateState: async (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      artifactName: string,
      artifactVersionName: string,
      parameters: ArtifactChangeState,
      options?: ProxyArtifactUpdateStateOptionalParams,
    ) => {
      const poller = updateState(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        artifactName,
        artifactVersionName,
        parameters,
        options,
      );
      await poller.submitted();
      return getSimplePoller(poller);
    },
    beginUpdateStateAndWait: async (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      artifactName: string,
      artifactVersionName: string,
      parameters: ArtifactChangeState,
      options?: ProxyArtifactUpdateStateOptionalParams,
    ) => {
      return await updateState(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        artifactName,
        artifactVersionName,
        parameters,
        options,
      );
    },
    get: (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      artifactName: string,
      options?: ProxyArtifactGetOptionalParams,
    ) => get(context, resourceGroupName, publisherName, artifactStoreName, artifactName, options),
    list: (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      options?: ProxyArtifactListOptionalParams,
    ) => list(context, resourceGroupName, publisherName, artifactStoreName, options),
  };
}

export function _getProxyArtifactOperations(
  context: HybridNetworkManagementContext,
): ProxyArtifactOperations {
  return {
    ..._getProxyArtifact(context),
  };
}
