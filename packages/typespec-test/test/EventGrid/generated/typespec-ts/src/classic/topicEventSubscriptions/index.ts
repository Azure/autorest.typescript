// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EventGridContext } from "../../api/eventGridContext.js";
import {
  getFullUrl,
  getDeliveryAttributes,
  list,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/topicEventSubscriptions/operations.js";
import {
  TopicEventSubscriptionsGetFullUrlOptionalParams,
  TopicEventSubscriptionsGetDeliveryAttributesOptionalParams,
  TopicEventSubscriptionsListOptionalParams,
  TopicEventSubscriptionsDeleteOptionalParams,
  TopicEventSubscriptionsUpdateOptionalParams,
  TopicEventSubscriptionsCreateOrUpdateOptionalParams,
  TopicEventSubscriptionsGetOptionalParams,
} from "../../api/topicEventSubscriptions/options.js";
import {
  EventSubscriptionFullUrl,
  EventSubscription,
  DeliveryAttributeMappingUnion,
  EventSubscriptionUpdateParameters,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a TopicEventSubscriptions operations. */
export interface TopicEventSubscriptionsOperations {
  /** Get the full endpoint URL for an event subscription for topic. */
  getFullUrl: (
    resourceGroupName: string,
    topicName: string,
    eventSubscriptionName: string,
    options?: TopicEventSubscriptionsGetFullUrlOptionalParams,
  ) => Promise<EventSubscriptionFullUrl>;
  /** Get all delivery attributes for an event subscription for topic. */
  getDeliveryAttributes: (
    resourceGroupName: string,
    topicName: string,
    eventSubscriptionName: string,
    options?: TopicEventSubscriptionsGetDeliveryAttributesOptionalParams,
  ) => PagedAsyncIterableIterator<DeliveryAttributeMappingUnion>;
  /** List all event subscriptions that have been created for a specific topic. */
  list: (
    resourceGroupName: string,
    topicName: string,
    options?: TopicEventSubscriptionsListOptionalParams,
  ) => PagedAsyncIterableIterator<EventSubscription>;
  /** Delete an existing event subscription for a topic. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    topicName: string,
    eventSubscriptionName: string,
    options?: TopicEventSubscriptionsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update an existing event subscription for a topic. */
  update: (
    resourceGroupName: string,
    topicName: string,
    eventSubscriptionName: string,
    eventSubscriptionUpdateParameters: EventSubscriptionUpdateParameters,
    options?: TopicEventSubscriptionsUpdateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Asynchronously creates a new event subscription or updates an existing event subscription. */
  createOrUpdate: (
    resourceGroupName: string,
    topicName: string,
    eventSubscriptionName: string,
    eventSubscriptionInfo: EventSubscription,
    options?: TopicEventSubscriptionsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<EventSubscription>, EventSubscription>;
  /** Get properties of an event subscription of a topic. */
  get: (
    resourceGroupName: string,
    topicName: string,
    eventSubscriptionName: string,
    options?: TopicEventSubscriptionsGetOptionalParams,
  ) => Promise<EventSubscription>;
}

function _getTopicEventSubscriptions(context: EventGridContext) {
  return {
    getFullUrl: (
      resourceGroupName: string,
      topicName: string,
      eventSubscriptionName: string,
      options?: TopicEventSubscriptionsGetFullUrlOptionalParams,
    ) => getFullUrl(context, resourceGroupName, topicName, eventSubscriptionName, options),
    getDeliveryAttributes: (
      resourceGroupName: string,
      topicName: string,
      eventSubscriptionName: string,
      options?: TopicEventSubscriptionsGetDeliveryAttributesOptionalParams,
    ) =>
      getDeliveryAttributes(context, resourceGroupName, topicName, eventSubscriptionName, options),
    list: (
      resourceGroupName: string,
      topicName: string,
      options?: TopicEventSubscriptionsListOptionalParams,
    ) => list(context, resourceGroupName, topicName, options),
    delete: (
      resourceGroupName: string,
      topicName: string,
      eventSubscriptionName: string,
      options?: TopicEventSubscriptionsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, topicName, eventSubscriptionName, options),
    update: (
      resourceGroupName: string,
      topicName: string,
      eventSubscriptionName: string,
      eventSubscriptionUpdateParameters: EventSubscriptionUpdateParameters,
      options?: TopicEventSubscriptionsUpdateOptionalParams,
    ) =>
      update(
        context,
        resourceGroupName,
        topicName,
        eventSubscriptionName,
        eventSubscriptionUpdateParameters,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      topicName: string,
      eventSubscriptionName: string,
      eventSubscriptionInfo: EventSubscription,
      options?: TopicEventSubscriptionsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        topicName,
        eventSubscriptionName,
        eventSubscriptionInfo,
        options,
      ),
    get: (
      resourceGroupName: string,
      topicName: string,
      eventSubscriptionName: string,
      options?: TopicEventSubscriptionsGetOptionalParams,
    ) => get(context, resourceGroupName, topicName, eventSubscriptionName, options),
  };
}

export function _getTopicEventSubscriptionsOperations(
  context: EventGridContext,
): TopicEventSubscriptionsOperations {
  return {
    ..._getTopicEventSubscriptions(context),
  };
}
