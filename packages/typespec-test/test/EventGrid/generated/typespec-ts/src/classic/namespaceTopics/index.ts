// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EventGridContext } from "../../api/eventGridContext.js";
import {
  regenerateKey,
  listSharedAccessKeys,
  listByNamespace,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/namespaceTopics/operations.js";
import {
  NamespaceTopicsRegenerateKeyOptionalParams,
  NamespaceTopicsListSharedAccessKeysOptionalParams,
  NamespaceTopicsListByNamespaceOptionalParams,
  NamespaceTopicsDeleteOptionalParams,
  NamespaceTopicsUpdateOptionalParams,
  NamespaceTopicsCreateOrUpdateOptionalParams,
  NamespaceTopicsGetOptionalParams,
} from "../../api/namespaceTopics/options.js";
import {
  NamespaceTopic,
  NamespaceTopicUpdateParameters,
  TopicSharedAccessKeys,
  TopicRegenerateKeyRequest,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a NamespaceTopics operations. */
export interface NamespaceTopicsOperations {
  /** Regenerate a shared access key for a namespace topic. */
  regenerateKey: (
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    regenerateKeyRequest: TopicRegenerateKeyRequest,
    options?: NamespaceTopicsRegenerateKeyOptionalParams,
  ) => PollerLike<OperationState<TopicSharedAccessKeys>, TopicSharedAccessKeys>;
  /** List the two keys used to publish to a namespace topic. */
  listSharedAccessKeys: (
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    options?: NamespaceTopicsListSharedAccessKeysOptionalParams,
  ) => Promise<TopicSharedAccessKeys>;
  /** List all the namespace topics under a namespace. */
  listByNamespace: (
    resourceGroupName: string,
    namespaceName: string,
    options?: NamespaceTopicsListByNamespaceOptionalParams,
  ) => PagedAsyncIterableIterator<NamespaceTopic>;
  /** Delete existing namespace topic. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    options?: NamespaceTopicsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Asynchronously updates a namespace topic with the specified parameters. */
  update: (
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    namespaceTopicUpdateParameters: NamespaceTopicUpdateParameters,
    options?: NamespaceTopicsUpdateOptionalParams,
  ) => PollerLike<OperationState<NamespaceTopic>, NamespaceTopic>;
  /** Asynchronously creates a new namespace topic with the specified parameters. */
  createOrUpdate: (
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    namespaceTopicInfo: NamespaceTopic,
    options?: NamespaceTopicsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<NamespaceTopic>, NamespaceTopic>;
  /** Get properties of a namespace topic. */
  get: (
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    options?: NamespaceTopicsGetOptionalParams,
  ) => Promise<NamespaceTopic>;
}

function _getNamespaceTopics(context: EventGridContext) {
  return {
    regenerateKey: (
      resourceGroupName: string,
      namespaceName: string,
      topicName: string,
      regenerateKeyRequest: TopicRegenerateKeyRequest,
      options?: NamespaceTopicsRegenerateKeyOptionalParams,
    ) =>
      regenerateKey(
        context,
        resourceGroupName,
        namespaceName,
        topicName,
        regenerateKeyRequest,
        options,
      ),
    listSharedAccessKeys: (
      resourceGroupName: string,
      namespaceName: string,
      topicName: string,
      options?: NamespaceTopicsListSharedAccessKeysOptionalParams,
    ) => listSharedAccessKeys(context, resourceGroupName, namespaceName, topicName, options),
    listByNamespace: (
      resourceGroupName: string,
      namespaceName: string,
      options?: NamespaceTopicsListByNamespaceOptionalParams,
    ) => listByNamespace(context, resourceGroupName, namespaceName, options),
    delete: (
      resourceGroupName: string,
      namespaceName: string,
      topicName: string,
      options?: NamespaceTopicsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, namespaceName, topicName, options),
    update: (
      resourceGroupName: string,
      namespaceName: string,
      topicName: string,
      namespaceTopicUpdateParameters: NamespaceTopicUpdateParameters,
      options?: NamespaceTopicsUpdateOptionalParams,
    ) =>
      update(
        context,
        resourceGroupName,
        namespaceName,
        topicName,
        namespaceTopicUpdateParameters,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      namespaceName: string,
      topicName: string,
      namespaceTopicInfo: NamespaceTopic,
      options?: NamespaceTopicsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        namespaceName,
        topicName,
        namespaceTopicInfo,
        options,
      ),
    get: (
      resourceGroupName: string,
      namespaceName: string,
      topicName: string,
      options?: NamespaceTopicsGetOptionalParams,
    ) => get(context, resourceGroupName, namespaceName, topicName, options),
  };
}

export function _getNamespaceTopicsOperations(
  context: EventGridContext,
): NamespaceTopicsOperations {
  return {
    ..._getNamespaceTopics(context),
  };
}
