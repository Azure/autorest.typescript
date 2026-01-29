// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementContext } from "../../api/hybridNetworkManagementContext.js";
import {
  listPrivateEndPoints,
  removePrivateEndPoints,
  approvePrivateEndPoints,
  listNetworkFabricControllerPrivateEndPoints,
  deleteNetworkFabricControllerEndPoints,
  addNetworkFabricControllerEndPoints,
  listByPublisher,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/artifactStores/operations.js";
import {
  ArtifactStoresListPrivateEndPointsOptionalParams,
  ArtifactStoresRemovePrivateEndPointsOptionalParams,
  ArtifactStoresApprovePrivateEndPointsOptionalParams,
  ArtifactStoresListNetworkFabricControllerPrivateEndPointsOptionalParams,
  ArtifactStoresDeleteNetworkFabricControllerEndPointsOptionalParams,
  ArtifactStoresAddNetworkFabricControllerEndPointsOptionalParams,
  ArtifactStoresListByPublisherOptionalParams,
  ArtifactStoresDeleteOptionalParams,
  ArtifactStoresUpdateOptionalParams,
  ArtifactStoresCreateOrUpdateOptionalParams,
  ArtifactStoresGetOptionalParams,
} from "../../api/artifactStores/options.js";
import {
  TagsObject,
  ArtifactStore,
  ArtifactStoreNetworkFabricControllerEndPoints,
  ArtifactStorePrivateEndPointsFormat,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { SimplePollerLike, getSimplePoller } from "../../static-helpers/simplePollerHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a ArtifactStores operations. */
export interface ArtifactStoresOperations {
  /** List manual private endpoints on artifact stores */
  listPrivateEndPoints: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    options?: ArtifactStoresListPrivateEndPointsOptionalParams,
  ) => PagedAsyncIterableIterator<ArtifactStorePrivateEndPointsFormat>;
  /** @deprecated use listPrivateEndPoints instead */
  beginListListPrivateEndPointsAndWait: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    options?: ArtifactStoresListPrivateEndPointsOptionalParams,
  ) => PagedAsyncIterableIterator<ArtifactStorePrivateEndPointsFormat>;
  /** Remove manual private endpoints on artifact stores */
  removePrivateEndPoints: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    parameters: ArtifactStorePrivateEndPointsFormat,
    options?: ArtifactStoresRemovePrivateEndPointsOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** @deprecated use removePrivateEndPoints instead */
  beginRemovePrivateEndPoints: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    parameters: ArtifactStorePrivateEndPointsFormat,
    options?: ArtifactStoresRemovePrivateEndPointsOptionalParams,
  ) => Promise<SimplePollerLike<OperationState<void>, void>>;
  /** @deprecated use removePrivateEndPoints instead */
  beginRemovePrivateEndPointsAndWait: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    parameters: ArtifactStorePrivateEndPointsFormat,
    options?: ArtifactStoresRemovePrivateEndPointsOptionalParams,
  ) => Promise<void>;
  /** Approve manual private endpoints on artifact stores */
  approvePrivateEndPoints: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    parameters: ArtifactStorePrivateEndPointsFormat,
    options?: ArtifactStoresApprovePrivateEndPointsOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** @deprecated use approvePrivateEndPoints instead */
  beginApprovePrivateEndPoints: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    parameters: ArtifactStorePrivateEndPointsFormat,
    options?: ArtifactStoresApprovePrivateEndPointsOptionalParams,
  ) => Promise<SimplePollerLike<OperationState<void>, void>>;
  /** @deprecated use approvePrivateEndPoints instead */
  beginApprovePrivateEndPointsAndWait: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    parameters: ArtifactStorePrivateEndPointsFormat,
    options?: ArtifactStoresApprovePrivateEndPointsOptionalParams,
  ) => Promise<void>;
  /** List network fabric controllers to artifact stores */
  listNetworkFabricControllerPrivateEndPoints: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    options?: ArtifactStoresListNetworkFabricControllerPrivateEndPointsOptionalParams,
  ) => PagedAsyncIterableIterator<ArtifactStoreNetworkFabricControllerEndPoints>;
  /** @deprecated use listNetworkFabricControllerPrivateEndPoints instead */
  beginListListNetworkFabricControllerPrivateEndPointsAndWait: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    options?: ArtifactStoresListNetworkFabricControllerPrivateEndPointsOptionalParams,
  ) => PagedAsyncIterableIterator<ArtifactStoreNetworkFabricControllerEndPoints>;
  /** Delete network fabric controllers on artifact stores */
  deleteNetworkFabricControllerEndPoints: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    parameters: ArtifactStoreNetworkFabricControllerEndPoints,
    options?: ArtifactStoresDeleteNetworkFabricControllerEndPointsOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** @deprecated use deleteNetworkFabricControllerEndPoints instead */
  beginDeleteNetworkFabricControllerEndPoints: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    parameters: ArtifactStoreNetworkFabricControllerEndPoints,
    options?: ArtifactStoresDeleteNetworkFabricControllerEndPointsOptionalParams,
  ) => Promise<SimplePollerLike<OperationState<void>, void>>;
  /** @deprecated use deleteNetworkFabricControllerEndPoints instead */
  beginDeleteNetworkFabricControllerEndPointsAndWait: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    parameters: ArtifactStoreNetworkFabricControllerEndPoints,
    options?: ArtifactStoresDeleteNetworkFabricControllerEndPointsOptionalParams,
  ) => Promise<void>;
  /** Add network fabric controllers to artifact stores */
  addNetworkFabricControllerEndPoints: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    parameters: ArtifactStoreNetworkFabricControllerEndPoints,
    options?: ArtifactStoresAddNetworkFabricControllerEndPointsOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** @deprecated use addNetworkFabricControllerEndPoints instead */
  beginAddNetworkFabricControllerEndPoints: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    parameters: ArtifactStoreNetworkFabricControllerEndPoints,
    options?: ArtifactStoresAddNetworkFabricControllerEndPointsOptionalParams,
  ) => Promise<SimplePollerLike<OperationState<void>, void>>;
  /** @deprecated use addNetworkFabricControllerEndPoints instead */
  beginAddNetworkFabricControllerEndPointsAndWait: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    parameters: ArtifactStoreNetworkFabricControllerEndPoints,
    options?: ArtifactStoresAddNetworkFabricControllerEndPointsOptionalParams,
  ) => Promise<void>;
  /** Gets information of the ArtifactStores under publisher. */
  listByPublisher: (
    resourceGroupName: string,
    publisherName: string,
    options?: ArtifactStoresListByPublisherOptionalParams,
  ) => PagedAsyncIterableIterator<ArtifactStore>;
  /** Deletes the specified artifact store. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    options?: ArtifactStoresDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** @deprecated use delete instead */
  beginDelete: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    options?: ArtifactStoresDeleteOptionalParams,
  ) => Promise<SimplePollerLike<OperationState<void>, void>>;
  /** @deprecated use delete instead */
  beginDeleteAndWait: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    options?: ArtifactStoresDeleteOptionalParams,
  ) => Promise<void>;
  /** Update artifact store resource. */
  update: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    parameters: TagsObject,
    options?: ArtifactStoresUpdateOptionalParams,
  ) => Promise<ArtifactStore>;
  /** Creates or updates a artifact store. */
  createOrUpdate: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    parameters: ArtifactStore,
    options?: ArtifactStoresCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<ArtifactStore>, ArtifactStore>;
  /** @deprecated use createOrUpdate instead */
  beginCreateOrUpdate: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    parameters: ArtifactStore,
    options?: ArtifactStoresCreateOrUpdateOptionalParams,
  ) => Promise<SimplePollerLike<OperationState<ArtifactStore>, ArtifactStore>>;
  /** @deprecated use createOrUpdate instead */
  beginCreateOrUpdateAndWait: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    parameters: ArtifactStore,
    options?: ArtifactStoresCreateOrUpdateOptionalParams,
  ) => Promise<ArtifactStore>;
  /** Gets information about the specified artifact store. */
  get: (
    resourceGroupName: string,
    publisherName: string,
    artifactStoreName: string,
    options?: ArtifactStoresGetOptionalParams,
  ) => Promise<ArtifactStore>;
}

function _getArtifactStores(context: HybridNetworkManagementContext) {
  return {
    listPrivateEndPoints: (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      options?: ArtifactStoresListPrivateEndPointsOptionalParams,
    ) =>
      listPrivateEndPoints(context, resourceGroupName, publisherName, artifactStoreName, options),
    beginListListPrivateEndPointsAndWait: (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      options?: ArtifactStoresListPrivateEndPointsOptionalParams,
    ) => {
      return listPrivateEndPoints(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        options,
      );
    },
    removePrivateEndPoints: (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      parameters: ArtifactStorePrivateEndPointsFormat,
      options?: ArtifactStoresRemovePrivateEndPointsOptionalParams,
    ) =>
      removePrivateEndPoints(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        parameters,
        options,
      ),
    beginRemovePrivateEndPoints: async (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      parameters: ArtifactStorePrivateEndPointsFormat,
      options?: ArtifactStoresRemovePrivateEndPointsOptionalParams,
    ) => {
      const poller = removePrivateEndPoints(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        parameters,
        options,
      );
      await poller.submitted();
      return getSimplePoller(poller);
    },
    beginRemovePrivateEndPointsAndWait: async (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      parameters: ArtifactStorePrivateEndPointsFormat,
      options?: ArtifactStoresRemovePrivateEndPointsOptionalParams,
    ) => {
      return await removePrivateEndPoints(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        parameters,
        options,
      );
    },
    approvePrivateEndPoints: (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      parameters: ArtifactStorePrivateEndPointsFormat,
      options?: ArtifactStoresApprovePrivateEndPointsOptionalParams,
    ) =>
      approvePrivateEndPoints(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        parameters,
        options,
      ),
    beginApprovePrivateEndPoints: async (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      parameters: ArtifactStorePrivateEndPointsFormat,
      options?: ArtifactStoresApprovePrivateEndPointsOptionalParams,
    ) => {
      const poller = approvePrivateEndPoints(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        parameters,
        options,
      );
      await poller.submitted();
      return getSimplePoller(poller);
    },
    beginApprovePrivateEndPointsAndWait: async (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      parameters: ArtifactStorePrivateEndPointsFormat,
      options?: ArtifactStoresApprovePrivateEndPointsOptionalParams,
    ) => {
      return await approvePrivateEndPoints(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        parameters,
        options,
      );
    },
    listNetworkFabricControllerPrivateEndPoints: (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      options?: ArtifactStoresListNetworkFabricControllerPrivateEndPointsOptionalParams,
    ) =>
      listNetworkFabricControllerPrivateEndPoints(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        options,
      ),
    beginListListNetworkFabricControllerPrivateEndPointsAndWait: (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      options?: ArtifactStoresListNetworkFabricControllerPrivateEndPointsOptionalParams,
    ) => {
      return listNetworkFabricControllerPrivateEndPoints(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        options,
      );
    },
    deleteNetworkFabricControllerEndPoints: (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      parameters: ArtifactStoreNetworkFabricControllerEndPoints,
      options?: ArtifactStoresDeleteNetworkFabricControllerEndPointsOptionalParams,
    ) =>
      deleteNetworkFabricControllerEndPoints(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        parameters,
        options,
      ),
    beginDeleteNetworkFabricControllerEndPoints: async (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      parameters: ArtifactStoreNetworkFabricControllerEndPoints,
      options?: ArtifactStoresDeleteNetworkFabricControllerEndPointsOptionalParams,
    ) => {
      const poller = deleteNetworkFabricControllerEndPoints(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        parameters,
        options,
      );
      await poller.submitted();
      return getSimplePoller(poller);
    },
    beginDeleteNetworkFabricControllerEndPointsAndWait: async (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      parameters: ArtifactStoreNetworkFabricControllerEndPoints,
      options?: ArtifactStoresDeleteNetworkFabricControllerEndPointsOptionalParams,
    ) => {
      return await deleteNetworkFabricControllerEndPoints(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        parameters,
        options,
      );
    },
    addNetworkFabricControllerEndPoints: (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      parameters: ArtifactStoreNetworkFabricControllerEndPoints,
      options?: ArtifactStoresAddNetworkFabricControllerEndPointsOptionalParams,
    ) =>
      addNetworkFabricControllerEndPoints(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        parameters,
        options,
      ),
    beginAddNetworkFabricControllerEndPoints: async (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      parameters: ArtifactStoreNetworkFabricControllerEndPoints,
      options?: ArtifactStoresAddNetworkFabricControllerEndPointsOptionalParams,
    ) => {
      const poller = addNetworkFabricControllerEndPoints(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        parameters,
        options,
      );
      await poller.submitted();
      return getSimplePoller(poller);
    },
    beginAddNetworkFabricControllerEndPointsAndWait: async (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      parameters: ArtifactStoreNetworkFabricControllerEndPoints,
      options?: ArtifactStoresAddNetworkFabricControllerEndPointsOptionalParams,
    ) => {
      return await addNetworkFabricControllerEndPoints(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        parameters,
        options,
      );
    },
    listByPublisher: (
      resourceGroupName: string,
      publisherName: string,
      options?: ArtifactStoresListByPublisherOptionalParams,
    ) => listByPublisher(context, resourceGroupName, publisherName, options),
    delete: (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      options?: ArtifactStoresDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, publisherName, artifactStoreName, options),
    beginDelete: async (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      options?: ArtifactStoresDeleteOptionalParams,
    ) => {
      const poller = $delete(context, resourceGroupName, publisherName, artifactStoreName, options);
      await poller.submitted();
      return getSimplePoller(poller);
    },
    beginDeleteAndWait: async (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      options?: ArtifactStoresDeleteOptionalParams,
    ) => {
      return await $delete(context, resourceGroupName, publisherName, artifactStoreName, options);
    },
    update: (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      parameters: TagsObject,
      options?: ArtifactStoresUpdateOptionalParams,
    ) => update(context, resourceGroupName, publisherName, artifactStoreName, parameters, options),
    createOrUpdate: (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      parameters: ArtifactStore,
      options?: ArtifactStoresCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        parameters,
        options,
      ),
    beginCreateOrUpdate: async (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      parameters: ArtifactStore,
      options?: ArtifactStoresCreateOrUpdateOptionalParams,
    ) => {
      const poller = createOrUpdate(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
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
      parameters: ArtifactStore,
      options?: ArtifactStoresCreateOrUpdateOptionalParams,
    ) => {
      return await createOrUpdate(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        parameters,
        options,
      );
    },
    get: (
      resourceGroupName: string,
      publisherName: string,
      artifactStoreName: string,
      options?: ArtifactStoresGetOptionalParams,
    ) => get(context, resourceGroupName, publisherName, artifactStoreName, options),
  };
}

export function _getArtifactStoresOperations(
  context: HybridNetworkManagementContext,
): ArtifactStoresOperations {
  return {
    ..._getArtifactStores(context),
  };
}
