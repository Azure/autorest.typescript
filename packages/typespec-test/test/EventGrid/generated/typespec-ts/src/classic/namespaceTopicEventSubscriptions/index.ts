// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EventGridContext } from "../../api/eventGridContext.js";
import {
  getFullUrl,
  getDeliveryAttributes,
  listByNamespaceTopic,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/namespaceTopicEventSubscriptions/operations.js";
import {
  NamespaceTopicEventSubscriptionsGetFullUrlOptionalParams,
  NamespaceTopicEventSubscriptionsGetDeliveryAttributesOptionalParams,
  NamespaceTopicEventSubscriptionsListByNamespaceTopicOptionalParams,
  NamespaceTopicEventSubscriptionsDeleteOptionalParams,
  NamespaceTopicEventSubscriptionsUpdateOptionalParams,
  NamespaceTopicEventSubscriptionsCreateOrUpdateOptionalParams,
  NamespaceTopicEventSubscriptionsGetOptionalParams,
} from "../../api/namespaceTopicEventSubscriptions/options.js";
import {
  DeliveryAttributeMappingUnion,
  Subscription,
  SubscriptionUpdateParameters,
  SubscriptionFullUrl,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a NamespaceTopicEventSubscriptions operations. */
export interface NamespaceTopicEventSubscriptionsOperations {
  /** Get the full endpoint URL for an event subscription of a namespace topic. */
  getFullUrl: (
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    eventSubscriptionName: string,
    options?: NamespaceTopicEventSubscriptionsGetFullUrlOptionalParams,
  ) => Promise<SubscriptionFullUrl>;
  /** Get all delivery attributes for an event subscription of a namespace topic. */
  getDeliveryAttributes: (
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    eventSubscriptionName: string,
    options?: NamespaceTopicEventSubscriptionsGetDeliveryAttributesOptionalParams,
  ) => PagedAsyncIterableIterator<DeliveryAttributeMappingUnion>;
  /** List event subscriptions that belong to a specific namespace topic. */
  listByNamespaceTopic: (
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    options?: NamespaceTopicEventSubscriptionsListByNamespaceTopicOptionalParams,
  ) => PagedAsyncIterableIterator<Subscription>;
  /** Delete an existing event subscription of a namespace topic. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    eventSubscriptionName: string,
    options?: NamespaceTopicEventSubscriptionsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update an existing event subscription of a namespace topic. */
  update: (
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    eventSubscriptionName: string,
    eventSubscriptionUpdateParameters: SubscriptionUpdateParameters,
    options?: NamespaceTopicEventSubscriptionsUpdateOptionalParams,
  ) => PollerLike<OperationState<Subscription>, Subscription>;
  /** Asynchronously creates or updates an event subscription of a namespace topic with the specified parameters. Existing event subscriptions will be updated with this API. */
  createOrUpdate: (
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    eventSubscriptionName: string,
    eventSubscriptionInfo: Subscription,
    options?: NamespaceTopicEventSubscriptionsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Subscription>, Subscription>;
  /** Get properties of an event subscription of a namespace topic. */
  get: (
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    eventSubscriptionName: string,
    options?: NamespaceTopicEventSubscriptionsGetOptionalParams,
  ) => Promise<Subscription>;
}

function _getNamespaceTopicEventSubscriptions(context: EventGridContext) {
  return {
    getFullUrl: (
      resourceGroupName: string,
      namespaceName: string,
      topicName: string,
      eventSubscriptionName: string,
      options?: NamespaceTopicEventSubscriptionsGetFullUrlOptionalParams,
    ) =>
      getFullUrl(
        context,
        resourceGroupName,
        namespaceName,
        topicName,
        eventSubscriptionName,
        options,
      ),
    getDeliveryAttributes: (
      resourceGroupName: string,
      namespaceName: string,
      topicName: string,
      eventSubscriptionName: string,
      options?: NamespaceTopicEventSubscriptionsGetDeliveryAttributesOptionalParams,
    ) =>
      getDeliveryAttributes(
        context,
        resourceGroupName,
        namespaceName,
        topicName,
        eventSubscriptionName,
        options,
      ),
    listByNamespaceTopic: (
      resourceGroupName: string,
      namespaceName: string,
      topicName: string,
      options?: NamespaceTopicEventSubscriptionsListByNamespaceTopicOptionalParams,
    ) => listByNamespaceTopic(context, resourceGroupName, namespaceName, topicName, options),
    delete: (
      resourceGroupName: string,
      namespaceName: string,
      topicName: string,
      eventSubscriptionName: string,
      options?: NamespaceTopicEventSubscriptionsDeleteOptionalParams,
    ) =>
      $delete(context, resourceGroupName, namespaceName, topicName, eventSubscriptionName, options),
    update: (
      resourceGroupName: string,
      namespaceName: string,
      topicName: string,
      eventSubscriptionName: string,
      eventSubscriptionUpdateParameters: SubscriptionUpdateParameters,
      options?: NamespaceTopicEventSubscriptionsUpdateOptionalParams,
    ) =>
      update(
        context,
        resourceGroupName,
        namespaceName,
        topicName,
        eventSubscriptionName,
        eventSubscriptionUpdateParameters,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      namespaceName: string,
      topicName: string,
      eventSubscriptionName: string,
      eventSubscriptionInfo: Subscription,
      options?: NamespaceTopicEventSubscriptionsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        namespaceName,
        topicName,
        eventSubscriptionName,
        eventSubscriptionInfo,
        options,
      ),
    get: (
      resourceGroupName: string,
      namespaceName: string,
      topicName: string,
      eventSubscriptionName: string,
      options?: NamespaceTopicEventSubscriptionsGetOptionalParams,
    ) => get(context, resourceGroupName, namespaceName, topicName, eventSubscriptionName, options),
  };
}

export function _getNamespaceTopicEventSubscriptionsOperations(
  context: EventGridContext,
): NamespaceTopicEventSubscriptionsOperations {
  return {
    ..._getNamespaceTopicEventSubscriptions(context),
  };
}
