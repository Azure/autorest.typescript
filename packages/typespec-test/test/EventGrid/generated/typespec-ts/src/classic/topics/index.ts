// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EventGridContext } from "../../api/eventGridContext.js";
import {
  listEventTypes,
  regenerateKey,
  listSharedAccessKeys,
  listBySubscription,
  listByResourceGroup,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/topics/operations.js";
import {
  TopicsListEventTypesOptionalParams,
  TopicsRegenerateKeyOptionalParams,
  TopicsListSharedAccessKeysOptionalParams,
  TopicsListBySubscriptionOptionalParams,
  TopicsListByResourceGroupOptionalParams,
  TopicsDeleteOptionalParams,
  TopicsUpdateOptionalParams,
  TopicsCreateOrUpdateOptionalParams,
  TopicsGetOptionalParams,
} from "../../api/topics/options.js";
import {
  TopicSharedAccessKeys,
  TopicRegenerateKeyRequest,
  Topic,
  TopicUpdateParameters,
  EventType,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Topics operations. */
export interface TopicsOperations {
  /** List event types for a topic. */
  listEventTypes: (
    resourceGroupName: string,
    providerNamespace: string,
    resourceTypeName: string,
    resourceName: string,
    options?: TopicsListEventTypesOptionalParams,
  ) => PagedAsyncIterableIterator<EventType>;
  /** Regenerate a shared access key for a topic. */
  regenerateKey: (
    resourceGroupName: string,
    topicName: string,
    regenerateKeyRequest: TopicRegenerateKeyRequest,
    options?: TopicsRegenerateKeyOptionalParams,
  ) => PollerLike<OperationState<TopicSharedAccessKeys>, TopicSharedAccessKeys>;
  /** List the two keys used to publish to a topic. */
  listSharedAccessKeys: (
    resourceGroupName: string,
    topicName: string,
    options?: TopicsListSharedAccessKeysOptionalParams,
  ) => Promise<TopicSharedAccessKeys>;
  /** List all the topics under an Azure subscription. */
  listBySubscription: (
    options?: TopicsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<Topic>;
  /** List all the topics under a resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: TopicsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Topic>;
  /** Delete existing topic. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    topicName: string,
    options?: TopicsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Asynchronously updates a topic with the specified parameters. */
  update: (
    resourceGroupName: string,
    topicName: string,
    topicUpdateParameters: TopicUpdateParameters,
    options?: TopicsUpdateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Asynchronously creates a new topic with the specified parameters. */
  createOrUpdate: (
    resourceGroupName: string,
    topicName: string,
    topicInfo: Topic,
    options?: TopicsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Get properties of a topic. */
  get: (
    resourceGroupName: string,
    topicName: string,
    options?: TopicsGetOptionalParams,
  ) => Promise<Topic>;
}

function _getTopics(context: EventGridContext) {
  return {
    listEventTypes: (
      resourceGroupName: string,
      providerNamespace: string,
      resourceTypeName: string,
      resourceName: string,
      options?: TopicsListEventTypesOptionalParams,
    ) =>
      listEventTypes(
        context,
        resourceGroupName,
        providerNamespace,
        resourceTypeName,
        resourceName,
        options,
      ),
    regenerateKey: (
      resourceGroupName: string,
      topicName: string,
      regenerateKeyRequest: TopicRegenerateKeyRequest,
      options?: TopicsRegenerateKeyOptionalParams,
    ) => regenerateKey(context, resourceGroupName, topicName, regenerateKeyRequest, options),
    listSharedAccessKeys: (
      resourceGroupName: string,
      topicName: string,
      options?: TopicsListSharedAccessKeysOptionalParams,
    ) => listSharedAccessKeys(context, resourceGroupName, topicName, options),
    listBySubscription: (options?: TopicsListBySubscriptionOptionalParams) =>
      listBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: TopicsListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (resourceGroupName: string, topicName: string, options?: TopicsDeleteOptionalParams) =>
      $delete(context, resourceGroupName, topicName, options),
    update: (
      resourceGroupName: string,
      topicName: string,
      topicUpdateParameters: TopicUpdateParameters,
      options?: TopicsUpdateOptionalParams,
    ) => update(context, resourceGroupName, topicName, topicUpdateParameters, options),
    createOrUpdate: (
      resourceGroupName: string,
      topicName: string,
      topicInfo: Topic,
      options?: TopicsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, topicName, topicInfo, options),
    get: (resourceGroupName: string, topicName: string, options?: TopicsGetOptionalParams) =>
      get(context, resourceGroupName, topicName, options),
  };
}

export function _getTopicsOperations(context: EventGridContext): TopicsOperations {
  return {
    ..._getTopics(context),
  };
}
