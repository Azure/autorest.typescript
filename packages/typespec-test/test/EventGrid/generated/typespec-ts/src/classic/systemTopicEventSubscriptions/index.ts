// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EventGridContext } from "../../api/eventGridContext.js";
import {
  getFullUrl,
  getDeliveryAttributes,
  listBySystemTopic,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/systemTopicEventSubscriptions/operations.js";
import {
  SystemTopicEventSubscriptionsGetFullUrlOptionalParams,
  SystemTopicEventSubscriptionsGetDeliveryAttributesOptionalParams,
  SystemTopicEventSubscriptionsListBySystemTopicOptionalParams,
  SystemTopicEventSubscriptionsDeleteOptionalParams,
  SystemTopicEventSubscriptionsUpdateOptionalParams,
  SystemTopicEventSubscriptionsCreateOrUpdateOptionalParams,
  SystemTopicEventSubscriptionsGetOptionalParams,
} from "../../api/systemTopicEventSubscriptions/options.js";
import {
  EventSubscriptionFullUrl,
  EventSubscription,
  DeliveryAttributeMappingUnion,
  EventSubscriptionUpdateParameters,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a SystemTopicEventSubscriptions operations. */
export interface SystemTopicEventSubscriptionsOperations {
  /** Get the full endpoint URL for an event subscription of a system topic. */
  getFullUrl: (
    resourceGroupName: string,
    systemTopicName: string,
    eventSubscriptionName: string,
    options?: SystemTopicEventSubscriptionsGetFullUrlOptionalParams,
  ) => Promise<EventSubscriptionFullUrl>;
  /** Get all delivery attributes for an event subscription. */
  getDeliveryAttributes: (
    resourceGroupName: string,
    systemTopicName: string,
    eventSubscriptionName: string,
    options?: SystemTopicEventSubscriptionsGetDeliveryAttributesOptionalParams,
  ) => PagedAsyncIterableIterator<DeliveryAttributeMappingUnion>;
  /** List event subscriptions that belong to a specific system topic. */
  listBySystemTopic: (
    resourceGroupName: string,
    systemTopicName: string,
    options?: SystemTopicEventSubscriptionsListBySystemTopicOptionalParams,
  ) => PagedAsyncIterableIterator<EventSubscription>;
  /** Delete an existing event subscription of a system topic. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    systemTopicName: string,
    eventSubscriptionName: string,
    options?: SystemTopicEventSubscriptionsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update an existing event subscription of a system topic. */
  update: (
    resourceGroupName: string,
    systemTopicName: string,
    eventSubscriptionName: string,
    eventSubscriptionUpdateParameters: EventSubscriptionUpdateParameters,
    options?: SystemTopicEventSubscriptionsUpdateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Asynchronously creates or updates an event subscription with the specified parameters. Existing event subscriptions will be updated with this API. */
  createOrUpdate: (
    resourceGroupName: string,
    systemTopicName: string,
    eventSubscriptionName: string,
    eventSubscriptionInfo: EventSubscription,
    options?: SystemTopicEventSubscriptionsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Get an event subscription. */
  get: (
    resourceGroupName: string,
    systemTopicName: string,
    eventSubscriptionName: string,
    options?: SystemTopicEventSubscriptionsGetOptionalParams,
  ) => Promise<EventSubscription>;
}

function _getSystemTopicEventSubscriptions(context: EventGridContext) {
  return {
    getFullUrl: (
      resourceGroupName: string,
      systemTopicName: string,
      eventSubscriptionName: string,
      options?: SystemTopicEventSubscriptionsGetFullUrlOptionalParams,
    ) => getFullUrl(context, resourceGroupName, systemTopicName, eventSubscriptionName, options),
    getDeliveryAttributes: (
      resourceGroupName: string,
      systemTopicName: string,
      eventSubscriptionName: string,
      options?: SystemTopicEventSubscriptionsGetDeliveryAttributesOptionalParams,
    ) =>
      getDeliveryAttributes(
        context,
        resourceGroupName,
        systemTopicName,
        eventSubscriptionName,
        options,
      ),
    listBySystemTopic: (
      resourceGroupName: string,
      systemTopicName: string,
      options?: SystemTopicEventSubscriptionsListBySystemTopicOptionalParams,
    ) => listBySystemTopic(context, resourceGroupName, systemTopicName, options),
    delete: (
      resourceGroupName: string,
      systemTopicName: string,
      eventSubscriptionName: string,
      options?: SystemTopicEventSubscriptionsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, systemTopicName, eventSubscriptionName, options),
    update: (
      resourceGroupName: string,
      systemTopicName: string,
      eventSubscriptionName: string,
      eventSubscriptionUpdateParameters: EventSubscriptionUpdateParameters,
      options?: SystemTopicEventSubscriptionsUpdateOptionalParams,
    ) =>
      update(
        context,
        resourceGroupName,
        systemTopicName,
        eventSubscriptionName,
        eventSubscriptionUpdateParameters,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      systemTopicName: string,
      eventSubscriptionName: string,
      eventSubscriptionInfo: EventSubscription,
      options?: SystemTopicEventSubscriptionsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        systemTopicName,
        eventSubscriptionName,
        eventSubscriptionInfo,
        options,
      ),
    get: (
      resourceGroupName: string,
      systemTopicName: string,
      eventSubscriptionName: string,
      options?: SystemTopicEventSubscriptionsGetOptionalParams,
    ) => get(context, resourceGroupName, systemTopicName, eventSubscriptionName, options),
  };
}

export function _getSystemTopicEventSubscriptionsOperations(
  context: EventGridContext,
): SystemTopicEventSubscriptionsOperations {
  return {
    ..._getSystemTopicEventSubscriptions(context),
  };
}
