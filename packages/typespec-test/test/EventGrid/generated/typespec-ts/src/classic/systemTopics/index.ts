// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EventGridContext } from "../../api/eventGridContext.js";
import {
  listBySubscription,
  listByResourceGroup,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/systemTopics/operations.js";
import {
  SystemTopicsListBySubscriptionOptionalParams,
  SystemTopicsListByResourceGroupOptionalParams,
  SystemTopicsDeleteOptionalParams,
  SystemTopicsUpdateOptionalParams,
  SystemTopicsCreateOrUpdateOptionalParams,
  SystemTopicsGetOptionalParams,
} from "../../api/systemTopics/options.js";
import { SystemTopic, SystemTopicUpdateParameters } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a SystemTopics operations. */
export interface SystemTopicsOperations {
  /** List all the system topics under an Azure subscription. */
  listBySubscription: (
    options?: SystemTopicsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<SystemTopic>;
  /** List all the system topics under a resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: SystemTopicsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<SystemTopic>;
  /** Delete existing system topic. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    systemTopicName: string,
    options?: SystemTopicsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Asynchronously updates a system topic with the specified parameters. */
  update: (
    resourceGroupName: string,
    systemTopicName: string,
    systemTopicUpdateParameters: SystemTopicUpdateParameters,
    options?: SystemTopicsUpdateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Asynchronously creates a new system topic with the specified parameters. */
  createOrUpdate: (
    resourceGroupName: string,
    systemTopicName: string,
    systemTopicInfo: SystemTopic,
    options?: SystemTopicsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<SystemTopic>, SystemTopic>;
  /** Get properties of a system topic. */
  get: (
    resourceGroupName: string,
    systemTopicName: string,
    options?: SystemTopicsGetOptionalParams,
  ) => Promise<SystemTopic>;
}

function _getSystemTopics(context: EventGridContext) {
  return {
    listBySubscription: (options?: SystemTopicsListBySubscriptionOptionalParams) =>
      listBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: SystemTopicsListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      systemTopicName: string,
      options?: SystemTopicsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, systemTopicName, options),
    update: (
      resourceGroupName: string,
      systemTopicName: string,
      systemTopicUpdateParameters: SystemTopicUpdateParameters,
      options?: SystemTopicsUpdateOptionalParams,
    ) => update(context, resourceGroupName, systemTopicName, systemTopicUpdateParameters, options),
    createOrUpdate: (
      resourceGroupName: string,
      systemTopicName: string,
      systemTopicInfo: SystemTopic,
      options?: SystemTopicsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, systemTopicName, systemTopicInfo, options),
    get: (
      resourceGroupName: string,
      systemTopicName: string,
      options?: SystemTopicsGetOptionalParams,
    ) => get(context, resourceGroupName, systemTopicName, options),
  };
}

export function _getSystemTopicsOperations(context: EventGridContext): SystemTopicsOperations {
  return {
    ..._getSystemTopics(context),
  };
}
