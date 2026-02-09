// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EventGridContext } from "../../api/eventGridContext.js";
import {
  getDeliveryAttributes,
  getFullUrl,
  listByPartnerTopic,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/partnerTopicEventSubscriptions/operations.js";
import {
  PartnerTopicEventSubscriptionsGetDeliveryAttributesOptionalParams,
  PartnerTopicEventSubscriptionsGetFullUrlOptionalParams,
  PartnerTopicEventSubscriptionsListByPartnerTopicOptionalParams,
  PartnerTopicEventSubscriptionsDeleteOptionalParams,
  PartnerTopicEventSubscriptionsUpdateOptionalParams,
  PartnerTopicEventSubscriptionsCreateOrUpdateOptionalParams,
  PartnerTopicEventSubscriptionsGetOptionalParams,
} from "../../api/partnerTopicEventSubscriptions/options.js";
import {
  EventSubscriptionFullUrl,
  EventSubscription,
  DeliveryAttributeMappingUnion,
  EventSubscriptionUpdateParameters,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a PartnerTopicEventSubscriptions operations. */
export interface PartnerTopicEventSubscriptionsOperations {
  /** Get all delivery attributes for an event subscription of a partner topic. */
  getDeliveryAttributes: (
    resourceGroupName: string,
    partnerTopicName: string,
    eventSubscriptionName: string,
    options?: PartnerTopicEventSubscriptionsGetDeliveryAttributesOptionalParams,
  ) => PagedAsyncIterableIterator<DeliveryAttributeMappingUnion>;
  /** Get the full endpoint URL for an event subscription of a partner topic. */
  getFullUrl: (
    resourceGroupName: string,
    partnerTopicName: string,
    eventSubscriptionName: string,
    options?: PartnerTopicEventSubscriptionsGetFullUrlOptionalParams,
  ) => Promise<EventSubscriptionFullUrl>;
  /** List event subscriptions that belong to a specific partner topic. */
  listByPartnerTopic: (
    resourceGroupName: string,
    partnerTopicName: string,
    options?: PartnerTopicEventSubscriptionsListByPartnerTopicOptionalParams,
  ) => PagedAsyncIterableIterator<EventSubscription>;
  /** Delete an existing event subscription of a partner topic. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    partnerTopicName: string,
    eventSubscriptionName: string,
    options?: PartnerTopicEventSubscriptionsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update an existing event subscription of a partner topic. */
  update: (
    resourceGroupName: string,
    partnerTopicName: string,
    eventSubscriptionName: string,
    eventSubscriptionUpdateParameters: EventSubscriptionUpdateParameters,
    options?: PartnerTopicEventSubscriptionsUpdateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Asynchronously creates or updates an event subscription of a partner topic with the specified parameters. Existing event subscriptions will be updated with this API. */
  createOrUpdate: (
    resourceGroupName: string,
    partnerTopicName: string,
    eventSubscriptionName: string,
    eventSubscriptionInfo: EventSubscription,
    options?: PartnerTopicEventSubscriptionsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<EventSubscription>, EventSubscription>;
  /** Get properties of an event subscription of a partner topic. */
  get: (
    resourceGroupName: string,
    partnerTopicName: string,
    eventSubscriptionName: string,
    options?: PartnerTopicEventSubscriptionsGetOptionalParams,
  ) => Promise<EventSubscription>;
}

function _getPartnerTopicEventSubscriptions(context: EventGridContext) {
  return {
    getDeliveryAttributes: (
      resourceGroupName: string,
      partnerTopicName: string,
      eventSubscriptionName: string,
      options?: PartnerTopicEventSubscriptionsGetDeliveryAttributesOptionalParams,
    ) =>
      getDeliveryAttributes(
        context,
        resourceGroupName,
        partnerTopicName,
        eventSubscriptionName,
        options,
      ),
    getFullUrl: (
      resourceGroupName: string,
      partnerTopicName: string,
      eventSubscriptionName: string,
      options?: PartnerTopicEventSubscriptionsGetFullUrlOptionalParams,
    ) => getFullUrl(context, resourceGroupName, partnerTopicName, eventSubscriptionName, options),
    listByPartnerTopic: (
      resourceGroupName: string,
      partnerTopicName: string,
      options?: PartnerTopicEventSubscriptionsListByPartnerTopicOptionalParams,
    ) => listByPartnerTopic(context, resourceGroupName, partnerTopicName, options),
    delete: (
      resourceGroupName: string,
      partnerTopicName: string,
      eventSubscriptionName: string,
      options?: PartnerTopicEventSubscriptionsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, partnerTopicName, eventSubscriptionName, options),
    update: (
      resourceGroupName: string,
      partnerTopicName: string,
      eventSubscriptionName: string,
      eventSubscriptionUpdateParameters: EventSubscriptionUpdateParameters,
      options?: PartnerTopicEventSubscriptionsUpdateOptionalParams,
    ) =>
      update(
        context,
        resourceGroupName,
        partnerTopicName,
        eventSubscriptionName,
        eventSubscriptionUpdateParameters,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      partnerTopicName: string,
      eventSubscriptionName: string,
      eventSubscriptionInfo: EventSubscription,
      options?: PartnerTopicEventSubscriptionsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        partnerTopicName,
        eventSubscriptionName,
        eventSubscriptionInfo,
        options,
      ),
    get: (
      resourceGroupName: string,
      partnerTopicName: string,
      eventSubscriptionName: string,
      options?: PartnerTopicEventSubscriptionsGetOptionalParams,
    ) => get(context, resourceGroupName, partnerTopicName, eventSubscriptionName, options),
  };
}

export function _getPartnerTopicEventSubscriptionsOperations(
  context: EventGridContext,
): PartnerTopicEventSubscriptionsOperations {
  return {
    ..._getPartnerTopicEventSubscriptions(context),
  };
}
