// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementContext } from "../../api/hybridNetworkManagementContext.js";
import {
  updateState,
  listByPublisher,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/configurationGroupSchemas/operations.js";
import {
  ConfigurationGroupSchemasUpdateStateOptionalParams,
  ConfigurationGroupSchemasListByPublisherOptionalParams,
  ConfigurationGroupSchemasDeleteOptionalParams,
  ConfigurationGroupSchemasUpdateOptionalParams,
  ConfigurationGroupSchemasCreateOrUpdateOptionalParams,
  ConfigurationGroupSchemasGetOptionalParams,
} from "../../api/configurationGroupSchemas/options.js";
import {
  ConfigurationGroupSchema,
  TagsObject,
  ConfigurationGroupSchemaVersionUpdateState,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { SimplePollerLike, getSimplePoller } from "../../static-helpers/simplePollerHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a ConfigurationGroupSchemas operations. */
export interface ConfigurationGroupSchemasOperations {
  /** Update configuration group schema state. */
  updateState: (
    resourceGroupName: string,
    publisherName: string,
    configurationGroupSchemaName: string,
    parameters: ConfigurationGroupSchemaVersionUpdateState,
    options?: ConfigurationGroupSchemasUpdateStateOptionalParams,
  ) => PollerLike<
    OperationState<ConfigurationGroupSchemaVersionUpdateState>,
    ConfigurationGroupSchemaVersionUpdateState
  >;
  /** @deprecated use updateState instead */
  beginUpdateState: (
    resourceGroupName: string,
    publisherName: string,
    configurationGroupSchemaName: string,
    parameters: ConfigurationGroupSchemaVersionUpdateState,
    options?: ConfigurationGroupSchemasUpdateStateOptionalParams,
  ) => Promise<
    SimplePollerLike<
      OperationState<ConfigurationGroupSchemaVersionUpdateState>,
      ConfigurationGroupSchemaVersionUpdateState
    >
  >;
  /** @deprecated use updateState instead */
  beginUpdateStateAndWait: (
    resourceGroupName: string,
    publisherName: string,
    configurationGroupSchemaName: string,
    parameters: ConfigurationGroupSchemaVersionUpdateState,
    options?: ConfigurationGroupSchemasUpdateStateOptionalParams,
  ) => Promise<ConfigurationGroupSchemaVersionUpdateState>;
  /** Gets information of the configuration group schemas under a publisher. */
  listByPublisher: (
    resourceGroupName: string,
    publisherName: string,
    options?: ConfigurationGroupSchemasListByPublisherOptionalParams,
  ) => PagedAsyncIterableIterator<ConfigurationGroupSchema>;
  /** Deletes a specified configuration group schema. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    publisherName: string,
    configurationGroupSchemaName: string,
    options?: ConfigurationGroupSchemasDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** @deprecated use delete instead */
  beginDelete: (
    resourceGroupName: string,
    publisherName: string,
    configurationGroupSchemaName: string,
    options?: ConfigurationGroupSchemasDeleteOptionalParams,
  ) => Promise<SimplePollerLike<OperationState<void>, void>>;
  /** @deprecated use delete instead */
  beginDeleteAndWait: (
    resourceGroupName: string,
    publisherName: string,
    configurationGroupSchemaName: string,
    options?: ConfigurationGroupSchemasDeleteOptionalParams,
  ) => Promise<void>;
  /** Updates a configuration group schema resource. */
  update: (
    resourceGroupName: string,
    publisherName: string,
    configurationGroupSchemaName: string,
    parameters: TagsObject,
    options?: ConfigurationGroupSchemasUpdateOptionalParams,
  ) => Promise<ConfigurationGroupSchema>;
  /** Creates or updates a configuration group schema. */
  createOrUpdate: (
    resourceGroupName: string,
    publisherName: string,
    configurationGroupSchemaName: string,
    parameters: ConfigurationGroupSchema,
    options?: ConfigurationGroupSchemasCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<ConfigurationGroupSchema>, ConfigurationGroupSchema>;
  /** @deprecated use createOrUpdate instead */
  beginCreateOrUpdate: (
    resourceGroupName: string,
    publisherName: string,
    configurationGroupSchemaName: string,
    parameters: ConfigurationGroupSchema,
    options?: ConfigurationGroupSchemasCreateOrUpdateOptionalParams,
  ) => Promise<
    SimplePollerLike<OperationState<ConfigurationGroupSchema>, ConfigurationGroupSchema>
  >;
  /** @deprecated use createOrUpdate instead */
  beginCreateOrUpdateAndWait: (
    resourceGroupName: string,
    publisherName: string,
    configurationGroupSchemaName: string,
    parameters: ConfigurationGroupSchema,
    options?: ConfigurationGroupSchemasCreateOrUpdateOptionalParams,
  ) => Promise<ConfigurationGroupSchema>;
  /** Gets information about the specified configuration group schema. */
  get: (
    resourceGroupName: string,
    publisherName: string,
    configurationGroupSchemaName: string,
    options?: ConfigurationGroupSchemasGetOptionalParams,
  ) => Promise<ConfigurationGroupSchema>;
}

function _getConfigurationGroupSchemas(context: HybridNetworkManagementContext) {
  return {
    updateState: (
      resourceGroupName: string,
      publisherName: string,
      configurationGroupSchemaName: string,
      parameters: ConfigurationGroupSchemaVersionUpdateState,
      options?: ConfigurationGroupSchemasUpdateStateOptionalParams,
    ) =>
      updateState(
        context,
        resourceGroupName,
        publisherName,
        configurationGroupSchemaName,
        parameters,
        options,
      ),
    beginUpdateState: async (
      resourceGroupName: string,
      publisherName: string,
      configurationGroupSchemaName: string,
      parameters: ConfigurationGroupSchemaVersionUpdateState,
      options?: ConfigurationGroupSchemasUpdateStateOptionalParams,
    ) => {
      const poller = updateState(
        context,
        resourceGroupName,
        publisherName,
        configurationGroupSchemaName,
        parameters,
        options,
      );
      await poller.submitted();
      return getSimplePoller(poller);
    },
    beginUpdateStateAndWait: async (
      resourceGroupName: string,
      publisherName: string,
      configurationGroupSchemaName: string,
      parameters: ConfigurationGroupSchemaVersionUpdateState,
      options?: ConfigurationGroupSchemasUpdateStateOptionalParams,
    ) => {
      return await updateState(
        context,
        resourceGroupName,
        publisherName,
        configurationGroupSchemaName,
        parameters,
        options,
      );
    },
    listByPublisher: (
      resourceGroupName: string,
      publisherName: string,
      options?: ConfigurationGroupSchemasListByPublisherOptionalParams,
    ) => listByPublisher(context, resourceGroupName, publisherName, options),
    delete: (
      resourceGroupName: string,
      publisherName: string,
      configurationGroupSchemaName: string,
      options?: ConfigurationGroupSchemasDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, publisherName, configurationGroupSchemaName, options),
    beginDelete: async (
      resourceGroupName: string,
      publisherName: string,
      configurationGroupSchemaName: string,
      options?: ConfigurationGroupSchemasDeleteOptionalParams,
    ) => {
      const poller = $delete(
        context,
        resourceGroupName,
        publisherName,
        configurationGroupSchemaName,
        options,
      );
      await poller.submitted();
      return getSimplePoller(poller);
    },
    beginDeleteAndWait: async (
      resourceGroupName: string,
      publisherName: string,
      configurationGroupSchemaName: string,
      options?: ConfigurationGroupSchemasDeleteOptionalParams,
    ) => {
      return await $delete(
        context,
        resourceGroupName,
        publisherName,
        configurationGroupSchemaName,
        options,
      );
    },
    update: (
      resourceGroupName: string,
      publisherName: string,
      configurationGroupSchemaName: string,
      parameters: TagsObject,
      options?: ConfigurationGroupSchemasUpdateOptionalParams,
    ) =>
      update(
        context,
        resourceGroupName,
        publisherName,
        configurationGroupSchemaName,
        parameters,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      publisherName: string,
      configurationGroupSchemaName: string,
      parameters: ConfigurationGroupSchema,
      options?: ConfigurationGroupSchemasCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        publisherName,
        configurationGroupSchemaName,
        parameters,
        options,
      ),
    beginCreateOrUpdate: async (
      resourceGroupName: string,
      publisherName: string,
      configurationGroupSchemaName: string,
      parameters: ConfigurationGroupSchema,
      options?: ConfigurationGroupSchemasCreateOrUpdateOptionalParams,
    ) => {
      const poller = createOrUpdate(
        context,
        resourceGroupName,
        publisherName,
        configurationGroupSchemaName,
        parameters,
        options,
      );
      await poller.submitted();
      return getSimplePoller(poller);
    },
    beginCreateOrUpdateAndWait: async (
      resourceGroupName: string,
      publisherName: string,
      configurationGroupSchemaName: string,
      parameters: ConfigurationGroupSchema,
      options?: ConfigurationGroupSchemasCreateOrUpdateOptionalParams,
    ) => {
      return await createOrUpdate(
        context,
        resourceGroupName,
        publisherName,
        configurationGroupSchemaName,
        parameters,
        options,
      );
    },
    get: (
      resourceGroupName: string,
      publisherName: string,
      configurationGroupSchemaName: string,
      options?: ConfigurationGroupSchemasGetOptionalParams,
    ) => get(context, resourceGroupName, publisherName, configurationGroupSchemaName, options),
  };
}

export function _getConfigurationGroupSchemasOperations(
  context: HybridNetworkManagementContext,
): ConfigurationGroupSchemasOperations {
  return {
    ..._getConfigurationGroupSchemas(context),
  };
}
