// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementContext } from "../../api/hybridNetworkManagementContext.js";
import {
  updateState,
  listCredential,
  listByArtifactStore,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/artifactManifests/operations.js";
import {
  ArtifactManifestsUpdateStateOptionalParams,
  ArtifactManifestsListCredentialOptionalParams,
  ArtifactManifestsListByArtifactStoreOptionalParams,
  ArtifactManifestsDeleteOptionalParams,
  ArtifactManifestsUpdateOptionalParams,
  ArtifactManifestsCreateOrUpdateOptionalParams,
  ArtifactManifestsGetOptionalParams,
} from "../../api/artifactManifests/options.js";
import {
  TagsObject,
  ArtifactManifest,
  ArtifactAccessCredentialUnion,
  ArtifactManifestUpdateState,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { SimplePollerLike, getSimplePoller } from "../../static-helpers/simplePollerHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a ArtifactManifests operations. */
export interface ArtifactManifestsOperations {
  /** Update state for artifact manifest. */
  updateState: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    artifactManifestName: string,
    parameters: ArtifactManifestUpdateState,
    options?: ArtifactManifestsUpdateStateOptionalParams,
  ) => PollerLike<OperationState<ArtifactManifestUpdateState>, ArtifactManifestUpdateState>;
  /** @deprecated use updateState instead */
  beginUpdateState: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    artifactManifestName: string,
    parameters: ArtifactManifestUpdateState,
    options?: ArtifactManifestsUpdateStateOptionalParams,
  ) => Promise<
    SimplePollerLike<OperationState<ArtifactManifestUpdateState>, ArtifactManifestUpdateState>
  >;
  /** @deprecated use updateState instead */
  beginUpdateStateAndWait: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    artifactManifestName: string,
    parameters: ArtifactManifestUpdateState,
    options?: ArtifactManifestsUpdateStateOptionalParams,
  ) => Promise<ArtifactManifestUpdateState>;
  /** List credential for publishing artifacts defined in artifact manifest. */
  listCredential: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    artifactManifestName: string,
    options?: ArtifactManifestsListCredentialOptionalParams,
  ) => Promise<ArtifactAccessCredentialUnion>;
  /** Gets information about the artifact manifest. */
  listByArtifactStore: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    options?: ArtifactManifestsListByArtifactStoreOptionalParams,
  ) => PagedAsyncIterableIterator<ArtifactManifest>;
  /** Deletes the specified artifact manifest. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    artifactManifestName: string,
    options?: ArtifactManifestsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** @deprecated use delete instead */
  beginDelete: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    artifactManifestName: string,
    options?: ArtifactManifestsDeleteOptionalParams,
  ) => Promise<SimplePollerLike<OperationState<void>, void>>;
  /** @deprecated use delete instead */
  beginDeleteAndWait: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    artifactManifestName: string,
    options?: ArtifactManifestsDeleteOptionalParams,
  ) => Promise<void>;
  /** Updates a artifact manifest resource. */
  update: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    artifactManifestName: string,
    parameters: TagsObject,
    options?: ArtifactManifestsUpdateOptionalParams,
  ) => Promise<ArtifactManifest>;
  /** Creates or updates a artifact manifest. */
  createOrUpdate: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    artifactManifestName: string,
    parameters: ArtifactManifest,
    options?: ArtifactManifestsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<ArtifactManifest>, ArtifactManifest>;
  /** @deprecated use createOrUpdate instead */
  beginCreateOrUpdate: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    artifactManifestName: string,
    parameters: ArtifactManifest,
    options?: ArtifactManifestsCreateOrUpdateOptionalParams,
  ) => Promise<SimplePollerLike<OperationState<ArtifactManifest>, ArtifactManifest>>;
  /** @deprecated use createOrUpdate instead */
  beginCreateOrUpdateAndWait: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    artifactManifestName: string,
    parameters: ArtifactManifest,
    options?: ArtifactManifestsCreateOrUpdateOptionalParams,
  ) => Promise<ArtifactManifest>;
  /** Gets information about a artifact manifest resource. */
  get: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    artifactManifestName: string,
    options?: ArtifactManifestsGetOptionalParams,
  ) => Promise<ArtifactManifest>;
}

function _getArtifactManifests(context: HybridNetworkManagementContext) {
  return {
    updateState: (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      artifactManifestName: string,
      parameters: ArtifactManifestUpdateState,
      options?: ArtifactManifestsUpdateStateOptionalParams,
    ) =>
      updateState(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        artifactManifestName,
        parameters,
        options,
      ),
    beginUpdateState: async (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      artifactManifestName: string,
      parameters: ArtifactManifestUpdateState,
      options?: ArtifactManifestsUpdateStateOptionalParams,
    ) => {
      const poller = updateState(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        artifactManifestName,
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
      artifactManifestName: string,
      parameters: ArtifactManifestUpdateState,
      options?: ArtifactManifestsUpdateStateOptionalParams,
    ) => {
      return await updateState(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        artifactManifestName,
        parameters,
        options,
      );
    },
    listCredential: (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      artifactManifestName: string,
      options?: ArtifactManifestsListCredentialOptionalParams,
    ) =>
      listCredential(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        artifactManifestName,
        options,
      ),
    listByArtifactStore: (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      options?: ArtifactManifestsListByArtifactStoreOptionalParams,
    ) => listByArtifactStore(context, resourceGroupName, publisherName, artifactStoreName, options),
    delete: (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      artifactManifestName: string,
      options?: ArtifactManifestsDeleteOptionalParams,
    ) =>
      $delete(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        artifactManifestName,
        options,
      ),
    beginDelete: async (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      artifactManifestName: string,
      options?: ArtifactManifestsDeleteOptionalParams,
    ) => {
      const poller = $delete(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        artifactManifestName,
        options,
      );
      await poller.submitted();
      return getSimplePoller(poller);
    },
    beginDeleteAndWait: async (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      artifactManifestName: string,
      options?: ArtifactManifestsDeleteOptionalParams,
    ) => {
      return await $delete(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        artifactManifestName,
        options,
      );
    },
    update: (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      artifactManifestName: string,
      parameters: TagsObject,
      options?: ArtifactManifestsUpdateOptionalParams,
    ) =>
      update(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        artifactManifestName,
        parameters,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      artifactManifestName: string,
      parameters: ArtifactManifest,
      options?: ArtifactManifestsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        artifactManifestName,
        parameters,
        options,
      ),
    beginCreateOrUpdate: async (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      artifactManifestName: string,
      parameters: ArtifactManifest,
      options?: ArtifactManifestsCreateOrUpdateOptionalParams,
    ) => {
      const poller = createOrUpdate(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        artifactManifestName,
        parameters,
        options,
      );
      await poller.submitted();
      return getSimplePoller(poller);
    },
    beginCreateOrUpdateAndWait: async (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      artifactManifestName: string,
      parameters: ArtifactManifest,
      options?: ArtifactManifestsCreateOrUpdateOptionalParams,
    ) => {
      return await createOrUpdate(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        artifactManifestName,
        parameters,
        options,
      );
    },
    get: (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      artifactManifestName: string,
      options?: ArtifactManifestsGetOptionalParams,
    ) =>
      get(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        artifactManifestName,
        options,
      ),
  };
}

export function _getArtifactManifestsOperations(
  context: HybridNetworkManagementContext,
): ArtifactManifestsOperations {
  return {
    ..._getArtifactManifests(context),
  };
}
