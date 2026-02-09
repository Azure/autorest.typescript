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
} from "../../api/domainEventSubscriptions/operations.js";
import {
  DomainEventSubscriptionsGetFullUrlOptionalParams,
  DomainEventSubscriptionsGetDeliveryAttributesOptionalParams,
  DomainEventSubscriptionsListOptionalParams,
  DomainEventSubscriptionsDeleteOptionalParams,
  DomainEventSubscriptionsUpdateOptionalParams,
  DomainEventSubscriptionsCreateOrUpdateOptionalParams,
  DomainEventSubscriptionsGetOptionalParams,
} from "../../api/domainEventSubscriptions/options.js";
import {
  EventSubscriptionFullUrl,
  EventSubscription,
  DeliveryAttributeMappingUnion,
  EventSubscriptionUpdateParameters,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a DomainEventSubscriptions operations. */
export interface DomainEventSubscriptionsOperations {
  /** Get the full endpoint URL for an event subscription for domain. */
  getFullUrl: (
    resourceGroupName: string,
    domainName: string,
    eventSubscriptionName: string,
    options?: DomainEventSubscriptionsGetFullUrlOptionalParams,
  ) => Promise<EventSubscriptionFullUrl>;
  /** Get all delivery attributes for an event subscription for domain. */
  getDeliveryAttributes: (
    resourceGroupName: string,
    domainName: string,
    eventSubscriptionName: string,
    options?: DomainEventSubscriptionsGetDeliveryAttributesOptionalParams,
  ) => PagedAsyncIterableIterator<DeliveryAttributeMappingUnion>;
  /** List all event subscriptions that have been created for a specific topic. */
  list: (
    resourceGroupName: string,
    domainName: string,
    options?: DomainEventSubscriptionsListOptionalParams,
  ) => PagedAsyncIterableIterator<EventSubscription>;
  /** Delete an existing event subscription for a domain. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    domainName: string,
    eventSubscriptionName: string,
    options?: DomainEventSubscriptionsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update an existing event subscription for a topic. */
  update: (
    resourceGroupName: string,
    domainName: string,
    eventSubscriptionName: string,
    eventSubscriptionUpdateParameters: EventSubscriptionUpdateParameters,
    options?: DomainEventSubscriptionsUpdateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Asynchronously creates a new event subscription or updates an existing event subscription. */
  createOrUpdate: (
    resourceGroupName: string,
    domainName: string,
    eventSubscriptionName: string,
    eventSubscriptionInfo: EventSubscription,
    options?: DomainEventSubscriptionsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<EventSubscription>, EventSubscription>;
  /** Get properties of an event subscription of a domain. */
  get: (
    resourceGroupName: string,
    domainName: string,
    eventSubscriptionName: string,
    options?: DomainEventSubscriptionsGetOptionalParams,
  ) => Promise<EventSubscription>;
}

function _getDomainEventSubscriptions(context: EventGridContext) {
  return {
    getFullUrl: (
      resourceGroupName: string,
      domainName: string,
      eventSubscriptionName: string,
      options?: DomainEventSubscriptionsGetFullUrlOptionalParams,
    ) => getFullUrl(context, resourceGroupName, domainName, eventSubscriptionName, options),
    getDeliveryAttributes: (
      resourceGroupName: string,
      domainName: string,
      eventSubscriptionName: string,
      options?: DomainEventSubscriptionsGetDeliveryAttributesOptionalParams,
    ) =>
      getDeliveryAttributes(context, resourceGroupName, domainName, eventSubscriptionName, options),
    list: (
      resourceGroupName: string,
      domainName: string,
      options?: DomainEventSubscriptionsListOptionalParams,
    ) => list(context, resourceGroupName, domainName, options),
    delete: (
      resourceGroupName: string,
      domainName: string,
      eventSubscriptionName: string,
      options?: DomainEventSubscriptionsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, domainName, eventSubscriptionName, options),
    update: (
      resourceGroupName: string,
      domainName: string,
      eventSubscriptionName: string,
      eventSubscriptionUpdateParameters: EventSubscriptionUpdateParameters,
      options?: DomainEventSubscriptionsUpdateOptionalParams,
    ) =>
      update(
        context,
        resourceGroupName,
        domainName,
        eventSubscriptionName,
        eventSubscriptionUpdateParameters,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      domainName: string,
      eventSubscriptionName: string,
      eventSubscriptionInfo: EventSubscription,
      options?: DomainEventSubscriptionsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        domainName,
        eventSubscriptionName,
        eventSubscriptionInfo,
        options,
      ),
    get: (
      resourceGroupName: string,
      domainName: string,
      eventSubscriptionName: string,
      options?: DomainEventSubscriptionsGetOptionalParams,
    ) => get(context, resourceGroupName, domainName, eventSubscriptionName, options),
  };
}

export function _getDomainEventSubscriptionsOperations(
  context: EventGridContext,
): DomainEventSubscriptionsOperations {
  return {
    ..._getDomainEventSubscriptions(context),
  };
}
