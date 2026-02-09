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
} from "../../api/domainTopicEventSubscriptions/operations.js";
import {
  DomainTopicEventSubscriptionsGetFullUrlOptionalParams,
  DomainTopicEventSubscriptionsGetDeliveryAttributesOptionalParams,
  DomainTopicEventSubscriptionsListOptionalParams,
  DomainTopicEventSubscriptionsDeleteOptionalParams,
  DomainTopicEventSubscriptionsUpdateOptionalParams,
  DomainTopicEventSubscriptionsCreateOrUpdateOptionalParams,
  DomainTopicEventSubscriptionsGetOptionalParams,
} from "../../api/domainTopicEventSubscriptions/options.js";
import {
  EventSubscriptionFullUrl,
  EventSubscription,
  DeliveryAttributeMappingUnion,
  EventSubscriptionUpdateParameters,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a DomainTopicEventSubscriptions operations. */
export interface DomainTopicEventSubscriptionsOperations {
  /** Get the full endpoint URL for a nested event subscription for domain topic. */
  getFullUrl: (
    resourceGroupName: string,
    domainName: string,
    topicName: string,
    eventSubscriptionName: string,
    options?: DomainTopicEventSubscriptionsGetFullUrlOptionalParams,
  ) => Promise<EventSubscriptionFullUrl>;
  /** Get all delivery attributes for an event subscription for domain topic. */
  getDeliveryAttributes: (
    resourceGroupName: string,
    domainName: string,
    topicName: string,
    eventSubscriptionName: string,
    options?: DomainTopicEventSubscriptionsGetDeliveryAttributesOptionalParams,
  ) => PagedAsyncIterableIterator<DeliveryAttributeMappingUnion>;
  /** List all event subscriptions that have been created for a specific domain topic. */
  list: (
    resourceGroupName: string,
    domainName: string,
    topicName: string,
    options?: DomainTopicEventSubscriptionsListOptionalParams,
  ) => PagedAsyncIterableIterator<EventSubscription>;
  /** Delete a nested existing event subscription for a domain topic. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    domainName: string,
    topicName: string,
    eventSubscriptionName: string,
    options?: DomainTopicEventSubscriptionsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update an existing event subscription for a domain topic. */
  update: (
    resourceGroupName: string,
    domainName: string,
    topicName: string,
    eventSubscriptionName: string,
    eventSubscriptionUpdateParameters: EventSubscriptionUpdateParameters,
    options?: DomainTopicEventSubscriptionsUpdateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Asynchronously creates a new event subscription or updates an existing event subscription. */
  createOrUpdate: (
    resourceGroupName: string,
    domainName: string,
    topicName: string,
    eventSubscriptionName: string,
    eventSubscriptionInfo: EventSubscription,
    options?: DomainTopicEventSubscriptionsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<EventSubscription>, EventSubscription>;
  /** Get properties of a nested event subscription for a domain topic. */
  get: (
    resourceGroupName: string,
    domainName: string,
    topicName: string,
    eventSubscriptionName: string,
    options?: DomainTopicEventSubscriptionsGetOptionalParams,
  ) => Promise<EventSubscription>;
}

function _getDomainTopicEventSubscriptions(context: EventGridContext) {
  return {
    getFullUrl: (
      resourceGroupName: string,
      domainName: string,
      topicName: string,
      eventSubscriptionName: string,
      options?: DomainTopicEventSubscriptionsGetFullUrlOptionalParams,
    ) =>
      getFullUrl(context, resourceGroupName, domainName, topicName, eventSubscriptionName, options),
    getDeliveryAttributes: (
      resourceGroupName: string,
      domainName: string,
      topicName: string,
      eventSubscriptionName: string,
      options?: DomainTopicEventSubscriptionsGetDeliveryAttributesOptionalParams,
    ) =>
      getDeliveryAttributes(
        context,
        resourceGroupName,
        domainName,
        topicName,
        eventSubscriptionName,
        options,
      ),
    list: (
      resourceGroupName: string,
      domainName: string,
      topicName: string,
      options?: DomainTopicEventSubscriptionsListOptionalParams,
    ) => list(context, resourceGroupName, domainName, topicName, options),
    delete: (
      resourceGroupName: string,
      domainName: string,
      topicName: string,
      eventSubscriptionName: string,
      options?: DomainTopicEventSubscriptionsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, domainName, topicName, eventSubscriptionName, options),
    update: (
      resourceGroupName: string,
      domainName: string,
      topicName: string,
      eventSubscriptionName: string,
      eventSubscriptionUpdateParameters: EventSubscriptionUpdateParameters,
      options?: DomainTopicEventSubscriptionsUpdateOptionalParams,
    ) =>
      update(
        context,
        resourceGroupName,
        domainName,
        topicName,
        eventSubscriptionName,
        eventSubscriptionUpdateParameters,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      domainName: string,
      topicName: string,
      eventSubscriptionName: string,
      eventSubscriptionInfo: EventSubscription,
      options?: DomainTopicEventSubscriptionsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        domainName,
        topicName,
        eventSubscriptionName,
        eventSubscriptionInfo,
        options,
      ),
    get: (
      resourceGroupName: string,
      domainName: string,
      topicName: string,
      eventSubscriptionName: string,
      options?: DomainTopicEventSubscriptionsGetOptionalParams,
    ) => get(context, resourceGroupName, domainName, topicName, eventSubscriptionName, options),
  };
}

export function _getDomainTopicEventSubscriptionsOperations(
  context: EventGridContext,
): DomainTopicEventSubscriptionsOperations {
  return {
    ..._getDomainTopicEventSubscriptions(context),
  };
}
