// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementContext } from "../../api/hybridNetworkManagementContext.js";
import {
  listBySubscription,
  listByResourceGroup,
  $delete,
  updateTags,
  createOrUpdate,
  get,
} from "../../api/configurationGroupValues/operations.js";
import {
  ConfigurationGroupValuesListBySubscriptionOptionalParams,
  ConfigurationGroupValuesListByResourceGroupOptionalParams,
  ConfigurationGroupValuesDeleteOptionalParams,
  ConfigurationGroupValuesUpdateTagsOptionalParams,
  ConfigurationGroupValuesCreateOrUpdateOptionalParams,
  ConfigurationGroupValuesGetOptionalParams,
} from "../../api/configurationGroupValues/options.js";
import { TagsObject, ConfigurationGroupValue } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { SimplePollerLike, getSimplePoller } from "../../static-helpers/simplePollerHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a ConfigurationGroupValues operations. */
export interface ConfigurationGroupValuesOperations {
  /** Lists all sites in the configuration group value in a subscription. */
  listBySubscription: (
    options?: ConfigurationGroupValuesListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<ConfigurationGroupValue>;
  /** Lists all the hybrid network configurationGroupValues in a resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: ConfigurationGroupValuesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<ConfigurationGroupValue>;
  /** Deletes the specified hybrid configuration group value. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    configurationGroupValueName: string,
    options?: ConfigurationGroupValuesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** @deprecated use delete instead */
  beginDelete: (
    resourceGroupName: string,
    configurationGroupValueName: string,
    options?: ConfigurationGroupValuesDeleteOptionalParams,
  ) => Promise<SimplePollerLike<OperationState<void>, void>>;
  /** @deprecated use delete instead */
  beginDeleteAndWait: (
    resourceGroupName: string,
    configurationGroupValueName: string,
    options?: ConfigurationGroupValuesDeleteOptionalParams,
  ) => Promise<void>;
  /** Updates a hybrid configuration group tags. */
  updateTags: (
    resourceGroupName: string,
    configurationGroupValueName: string,
    parameters: TagsObject,
    options?: ConfigurationGroupValuesUpdateTagsOptionalParams,
  ) => Promise<ConfigurationGroupValue>;
  /** Creates or updates a hybrid configuration group value. */
  createOrUpdate: (
    resourceGroupName: string,
    configurationGroupValueName: string,
    parameters: ConfigurationGroupValue,
    options?: ConfigurationGroupValuesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<ConfigurationGroupValue>, ConfigurationGroupValue>;
  /** @deprecated use createOrUpdate instead */
  beginCreateOrUpdate: (
    resourceGroupName: string,
    configurationGroupValueName: string,
    parameters: ConfigurationGroupValue,
    options?: ConfigurationGroupValuesCreateOrUpdateOptionalParams,
  ) => Promise<SimplePollerLike<OperationState<ConfigurationGroupValue>, ConfigurationGroupValue>>;
  /** @deprecated use createOrUpdate instead */
  beginCreateOrUpdateAndWait: (
    resourceGroupName: string,
    configurationGroupValueName: string,
    parameters: ConfigurationGroupValue,
    options?: ConfigurationGroupValuesCreateOrUpdateOptionalParams,
  ) => Promise<ConfigurationGroupValue>;
  /** Gets information about the specified hybrid configuration group values. */
  get: (
    resourceGroupName: string,
    configurationGroupValueName: string,
    options?: ConfigurationGroupValuesGetOptionalParams,
  ) => Promise<ConfigurationGroupValue>;
}

function _getConfigurationGroupValues(context: HybridNetworkManagementContext) {
  return {
    listBySubscription: (options?: ConfigurationGroupValuesListBySubscriptionOptionalParams) =>
      listBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: ConfigurationGroupValuesListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      configurationGroupValueName: string,
      options?: ConfigurationGroupValuesDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, configurationGroupValueName, options),
    beginDelete: async (
      resourceGroupName: string,
      configurationGroupValueName: string,
      options?: ConfigurationGroupValuesDeleteOptionalParams,
    ) => {
      const poller = $delete(context, resourceGroupName, configurationGroupValueName, options);
      await poller.submitted();
      return getSimplePoller(poller);
    },
    beginDeleteAndWait: async (
      resourceGroupName: string,
      configurationGroupValueName: string,
      options?: ConfigurationGroupValuesDeleteOptionalParams,
    ) => {
      return await $delete(context, resourceGroupName, configurationGroupValueName, options);
    },
    updateTags: (
      resourceGroupName: string,
      configurationGroupValueName: string,
      parameters: TagsObject,
      options?: ConfigurationGroupValuesUpdateTagsOptionalParams,
    ) => updateTags(context, resourceGroupName, configurationGroupValueName, parameters, options),
    createOrUpdate: (
      resourceGroupName: string,
      configurationGroupValueName: string,
      parameters: ConfigurationGroupValue,
      options?: ConfigurationGroupValuesCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(context, resourceGroupName, configurationGroupValueName, parameters, options),
    beginCreateOrUpdate: async (
      resourceGroupName: string,
      configurationGroupValueName: string,
      parameters: ConfigurationGroupValue,
      options?: ConfigurationGroupValuesCreateOrUpdateOptionalParams,
    ) => {
      const poller = createOrUpdate(
        context,
        resourceGroupName,
        configurationGroupValueName,
        parameters,
        options,
      );
      await poller.submitted();
      return getSimplePoller(poller);
    },
    beginCreateOrUpdateAndWait: async (
      resourceGroupName: string,
      configurationGroupValueName: string,
      parameters: ConfigurationGroupValue,
      options?: ConfigurationGroupValuesCreateOrUpdateOptionalParams,
    ) => {
      return await createOrUpdate(
        context,
        resourceGroupName,
        configurationGroupValueName,
        parameters,
        options,
      );
    },
    get: (
      resourceGroupName: string,
      configurationGroupValueName: string,
      options?: ConfigurationGroupValuesGetOptionalParams,
    ) => get(context, resourceGroupName, configurationGroupValueName, options),
  };
}

export function _getConfigurationGroupValuesOperations(
  context: HybridNetworkManagementContext,
): ConfigurationGroupValuesOperations {
  return {
    ..._getConfigurationGroupValues(context),
  };
}
