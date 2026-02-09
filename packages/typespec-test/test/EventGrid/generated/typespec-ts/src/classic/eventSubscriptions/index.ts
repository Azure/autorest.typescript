// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EventGridContext } from "../../api/eventGridContext.js";
import {
  listRegionalByResourceGroupForTopicType,
  listRegionalBySubscriptionForTopicType,
  listRegionalByResourceGroup,
  listRegionalBySubscription,
  listGlobalByResourceGroupForTopicType,
  listGlobalBySubscriptionForTopicType,
  getFullUrl,
  getDeliveryAttributes,
  listByResource,
  listGlobalBySubscription,
  $delete,
  update,
  createOrUpdate,
  get,
  listByDomainTopic,
  listGlobalByResourceGroup,
} from "../../api/eventSubscriptions/operations.js";
import {
  EventSubscriptionsListRegionalByResourceGroupForTopicTypeOptionalParams,
  EventSubscriptionsListRegionalBySubscriptionForTopicTypeOptionalParams,
  EventSubscriptionsListRegionalByResourceGroupOptionalParams,
  EventSubscriptionsListRegionalBySubscriptionOptionalParams,
  EventSubscriptionsListGlobalByResourceGroupForTopicTypeOptionalParams,
  EventSubscriptionsListGlobalBySubscriptionForTopicTypeOptionalParams,
  EventSubscriptionsGetFullUrlOptionalParams,
  EventSubscriptionsGetDeliveryAttributesOptionalParams,
  EventSubscriptionsListByResourceOptionalParams,
  EventSubscriptionsListGlobalBySubscriptionOptionalParams,
  EventSubscriptionsDeleteOptionalParams,
  EventSubscriptionsUpdateOptionalParams,
  EventSubscriptionsCreateOrUpdateOptionalParams,
  EventSubscriptionsGetOptionalParams,
  EventSubscriptionsListByDomainTopicOptionalParams,
  EventSubscriptionsListGlobalByResourceGroupOptionalParams,
} from "../../api/eventSubscriptions/options.js";
import {
  EventSubscriptionFullUrl,
  EventSubscription,
  DeliveryAttributeMappingUnion,
  EventSubscriptionUpdateParameters,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a EventSubscriptions operations. */
export interface EventSubscriptionsOperations {
  /** List all event subscriptions from the given location under a specific Azure subscription and resource group and topic type. */
  listRegionalByResourceGroupForTopicType: (
    resourceGroupName: string,
    location: string,
    topicTypeName: string,
    options?: EventSubscriptionsListRegionalByResourceGroupForTopicTypeOptionalParams,
  ) => PagedAsyncIterableIterator<EventSubscription>;
  /** List all event subscriptions from the given location under a specific Azure subscription and topic type. */
  listRegionalBySubscriptionForTopicType: (
    location: string,
    topicTypeName: string,
    options?: EventSubscriptionsListRegionalBySubscriptionForTopicTypeOptionalParams,
  ) => PagedAsyncIterableIterator<EventSubscription>;
  /** List all event subscriptions from the given location under a specific Azure subscription and resource group. */
  listRegionalByResourceGroup: (
    resourceGroupName: string,
    location: string,
    options?: EventSubscriptionsListRegionalByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<EventSubscription>;
  /** List all event subscriptions from the given location under a specific Azure subscription. */
  listRegionalBySubscription: (
    location: string,
    options?: EventSubscriptionsListRegionalBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<EventSubscription>;
  /** List all global event subscriptions under a resource group for a specific topic type. */
  listGlobalByResourceGroupForTopicType: (
    resourceGroupName: string,
    topicTypeName: string,
    options?: EventSubscriptionsListGlobalByResourceGroupForTopicTypeOptionalParams,
  ) => PagedAsyncIterableIterator<EventSubscription>;
  /** List all global event subscriptions under an Azure subscription for a topic type. */
  listGlobalBySubscriptionForTopicType: (
    topicTypeName: string,
    options?: EventSubscriptionsListGlobalBySubscriptionForTopicTypeOptionalParams,
  ) => PagedAsyncIterableIterator<EventSubscription>;
  /** Get the full endpoint URL for an event subscription. */
  getFullUrl: (
    scope: string,
    eventSubscriptionName: string,
    options?: EventSubscriptionsGetFullUrlOptionalParams,
  ) => Promise<EventSubscriptionFullUrl>;
  /** Get all delivery attributes for an event subscription. */
  getDeliveryAttributes: (
    scope: string,
    eventSubscriptionName: string,
    options?: EventSubscriptionsGetDeliveryAttributesOptionalParams,
  ) => PagedAsyncIterableIterator<DeliveryAttributeMappingUnion>;
  /** List all event subscriptions that have been created for a specific resource. */
  listByResource: (
    resourceGroupName: string,
    providerNamespace: string,
    resourceTypeName: string,
    resourceName: string,
    options?: EventSubscriptionsListByResourceOptionalParams,
  ) => PagedAsyncIterableIterator<EventSubscription>;
  /** List all aggregated global event subscriptions under a specific Azure subscription. */
  listGlobalBySubscription: (
    options?: EventSubscriptionsListGlobalBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<EventSubscription>;
  /** Delete an existing event subscription. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    scope: string,
    eventSubscriptionName: string,
    options?: EventSubscriptionsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Asynchronously updates an existing event subscription. */
  update: (
    scope: string,
    eventSubscriptionName: string,
    eventSubscriptionUpdateParameters: EventSubscriptionUpdateParameters,
    options?: EventSubscriptionsUpdateOptionalParams,
  ) => PollerLike<OperationState<EventSubscription>, EventSubscription>;
  /** Asynchronously creates a new event subscription or updates an existing event subscription based on the specified scope. */
  createOrUpdate: (
    scope: string,
    eventSubscriptionName: string,
    eventSubscriptionInfo: EventSubscription,
    options?: EventSubscriptionsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Get properties of an event subscription. */
  get: (
    scope: string,
    eventSubscriptionName: string,
    options?: EventSubscriptionsGetOptionalParams,
  ) => Promise<EventSubscription>;
  /** List all event subscriptions that have been created for a specific domain topic. */
  listByDomainTopic: (
    resourceGroupName: string,
    domainName: string,
    topicName: string,
    options?: EventSubscriptionsListByDomainTopicOptionalParams,
  ) => PagedAsyncIterableIterator<EventSubscription>;
  /** List all global event subscriptions under a specific Azure subscription and resource group. */
  listGlobalByResourceGroup: (
    resourceGroupName: string,
    options?: EventSubscriptionsListGlobalByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<EventSubscription>;
}

function _getEventSubscriptions(context: EventGridContext) {
  return {
    listRegionalByResourceGroupForTopicType: (
      resourceGroupName: string,
      location: string,
      topicTypeName: string,
      options?: EventSubscriptionsListRegionalByResourceGroupForTopicTypeOptionalParams,
    ) =>
      listRegionalByResourceGroupForTopicType(
        context,
        resourceGroupName,
        location,
        topicTypeName,
        options,
      ),
    listRegionalBySubscriptionForTopicType: (
      location: string,
      topicTypeName: string,
      options?: EventSubscriptionsListRegionalBySubscriptionForTopicTypeOptionalParams,
    ) => listRegionalBySubscriptionForTopicType(context, location, topicTypeName, options),
    listRegionalByResourceGroup: (
      resourceGroupName: string,
      location: string,
      options?: EventSubscriptionsListRegionalByResourceGroupOptionalParams,
    ) => listRegionalByResourceGroup(context, resourceGroupName, location, options),
    listRegionalBySubscription: (
      location: string,
      options?: EventSubscriptionsListRegionalBySubscriptionOptionalParams,
    ) => listRegionalBySubscription(context, location, options),
    listGlobalByResourceGroupForTopicType: (
      resourceGroupName: string,
      topicTypeName: string,
      options?: EventSubscriptionsListGlobalByResourceGroupForTopicTypeOptionalParams,
    ) => listGlobalByResourceGroupForTopicType(context, resourceGroupName, topicTypeName, options),
    listGlobalBySubscriptionForTopicType: (
      topicTypeName: string,
      options?: EventSubscriptionsListGlobalBySubscriptionForTopicTypeOptionalParams,
    ) => listGlobalBySubscriptionForTopicType(context, topicTypeName, options),
    getFullUrl: (
      scope: string,
      eventSubscriptionName: string,
      options?: EventSubscriptionsGetFullUrlOptionalParams,
    ) => getFullUrl(context, scope, eventSubscriptionName, options),
    getDeliveryAttributes: (
      scope: string,
      eventSubscriptionName: string,
      options?: EventSubscriptionsGetDeliveryAttributesOptionalParams,
    ) => getDeliveryAttributes(context, scope, eventSubscriptionName, options),
    listByResource: (
      resourceGroupName: string,
      providerNamespace: string,
      resourceTypeName: string,
      resourceName: string,
      options?: EventSubscriptionsListByResourceOptionalParams,
    ) =>
      listByResource(
        context,
        resourceGroupName,
        providerNamespace,
        resourceTypeName,
        resourceName,
        options,
      ),
    listGlobalBySubscription: (
      options?: EventSubscriptionsListGlobalBySubscriptionOptionalParams,
    ) => listGlobalBySubscription(context, options),
    delete: (
      scope: string,
      eventSubscriptionName: string,
      options?: EventSubscriptionsDeleteOptionalParams,
    ) => $delete(context, scope, eventSubscriptionName, options),
    update: (
      scope: string,
      eventSubscriptionName: string,
      eventSubscriptionUpdateParameters: EventSubscriptionUpdateParameters,
      options?: EventSubscriptionsUpdateOptionalParams,
    ) => update(context, scope, eventSubscriptionName, eventSubscriptionUpdateParameters, options),
    createOrUpdate: (
      scope: string,
      eventSubscriptionName: string,
      eventSubscriptionInfo: EventSubscription,
      options?: EventSubscriptionsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, scope, eventSubscriptionName, eventSubscriptionInfo, options),
    get: (
      scope: string,
      eventSubscriptionName: string,
      options?: EventSubscriptionsGetOptionalParams,
    ) => get(context, scope, eventSubscriptionName, options),
    listByDomainTopic: (
      resourceGroupName: string,
      domainName: string,
      topicName: string,
      options?: EventSubscriptionsListByDomainTopicOptionalParams,
    ) => listByDomainTopic(context, resourceGroupName, domainName, topicName, options),
    listGlobalByResourceGroup: (
      resourceGroupName: string,
      options?: EventSubscriptionsListGlobalByResourceGroupOptionalParams,
    ) => listGlobalByResourceGroup(context, resourceGroupName, options),
  };
}

export function _getEventSubscriptionsOperations(
  context: EventGridContext,
): EventSubscriptionsOperations {
  return {
    ..._getEventSubscriptions(context),
  };
}
