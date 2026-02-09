// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EventGridContext } from "../../api/eventGridContext.js";
import {
  deactivate,
  activate,
  listBySubscription,
  listByResourceGroup,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/partnerTopics/operations.js";
import {
  PartnerTopicsDeactivateOptionalParams,
  PartnerTopicsActivateOptionalParams,
  PartnerTopicsListBySubscriptionOptionalParams,
  PartnerTopicsListByResourceGroupOptionalParams,
  PartnerTopicsDeleteOptionalParams,
  PartnerTopicsUpdateOptionalParams,
  PartnerTopicsCreateOrUpdateOptionalParams,
  PartnerTopicsGetOptionalParams,
} from "../../api/partnerTopics/options.js";
import { PartnerTopic, PartnerTopicUpdateParameters } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a PartnerTopics operations. */
export interface PartnerTopicsOperations {
  /** Deactivate specific partner topic. */
  deactivate: (
    resourceGroupName: string,
    partnerTopicName: string,
    options?: PartnerTopicsDeactivateOptionalParams,
  ) => Promise<PartnerTopic>;
  /** Activate a newly created partner topic. */
  activate: (
    resourceGroupName: string,
    partnerTopicName: string,
    options?: PartnerTopicsActivateOptionalParams,
  ) => Promise<PartnerTopic>;
  /** List all the partner topics under an Azure subscription. */
  listBySubscription: (
    options?: PartnerTopicsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<PartnerTopic>;
  /** List all the partner topics under a resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: PartnerTopicsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<PartnerTopic>;
  /** Delete existing partner topic. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    partnerTopicName: string,
    options?: PartnerTopicsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Asynchronously updates a partner topic with the specified parameters. */
  update: (
    resourceGroupName: string,
    partnerTopicName: string,
    partnerTopicUpdateParameters: PartnerTopicUpdateParameters,
    options?: PartnerTopicsUpdateOptionalParams,
  ) => Promise<PartnerTopic>;
  /** Asynchronously creates a new partner topic with the specified parameters. */
  createOrUpdate: (
    resourceGroupName: string,
    partnerTopicName: string,
    partnerTopicInfo: PartnerTopic,
    options?: PartnerTopicsCreateOrUpdateOptionalParams,
  ) => Promise<PartnerTopic>;
  /** Get properties of a partner topic. */
  get: (
    resourceGroupName: string,
    partnerTopicName: string,
    options?: PartnerTopicsGetOptionalParams,
  ) => Promise<PartnerTopic>;
}

function _getPartnerTopics(context: EventGridContext) {
  return {
    deactivate: (
      resourceGroupName: string,
      partnerTopicName: string,
      options?: PartnerTopicsDeactivateOptionalParams,
    ) => deactivate(context, resourceGroupName, partnerTopicName, options),
    activate: (
      resourceGroupName: string,
      partnerTopicName: string,
      options?: PartnerTopicsActivateOptionalParams,
    ) => activate(context, resourceGroupName, partnerTopicName, options),
    listBySubscription: (options?: PartnerTopicsListBySubscriptionOptionalParams) =>
      listBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: PartnerTopicsListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      partnerTopicName: string,
      options?: PartnerTopicsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, partnerTopicName, options),
    update: (
      resourceGroupName: string,
      partnerTopicName: string,
      partnerTopicUpdateParameters: PartnerTopicUpdateParameters,
      options?: PartnerTopicsUpdateOptionalParams,
    ) =>
      update(context, resourceGroupName, partnerTopicName, partnerTopicUpdateParameters, options),
    createOrUpdate: (
      resourceGroupName: string,
      partnerTopicName: string,
      partnerTopicInfo: PartnerTopic,
      options?: PartnerTopicsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, partnerTopicName, partnerTopicInfo, options),
    get: (
      resourceGroupName: string,
      partnerTopicName: string,
      options?: PartnerTopicsGetOptionalParams,
    ) => get(context, resourceGroupName, partnerTopicName, options),
  };
}

export function _getPartnerTopicsOperations(context: EventGridContext): PartnerTopicsOperations {
  return {
    ..._getPartnerTopics(context),
  };
}
