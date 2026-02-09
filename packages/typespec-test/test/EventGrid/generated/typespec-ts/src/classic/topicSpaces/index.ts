// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EventGridContext } from "../../api/eventGridContext.js";
import { listByNamespace, $delete, createOrUpdate, get } from "../../api/topicSpaces/operations.js";
import {
  TopicSpacesListByNamespaceOptionalParams,
  TopicSpacesDeleteOptionalParams,
  TopicSpacesCreateOrUpdateOptionalParams,
  TopicSpacesGetOptionalParams,
} from "../../api/topicSpaces/options.js";
import { TopicSpace } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a TopicSpaces operations. */
export interface TopicSpacesOperations {
  /** Get all the topic spaces under a namespace. */
  listByNamespace: (
    resourceGroupName: string,
    namespaceName: string,
    options?: TopicSpacesListByNamespaceOptionalParams,
  ) => PagedAsyncIterableIterator<TopicSpace>;
  /** Delete an existing topic space. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    namespaceName: string,
    topicSpaceName: string,
    options?: TopicSpacesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create or update a topic space with the specified parameters. */
  createOrUpdate: (
    resourceGroupName: string,
    namespaceName: string,
    topicSpaceName: string,
    topicSpaceInfo: TopicSpace,
    options?: TopicSpacesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<TopicSpace>, TopicSpace>;
  /** Get properties of a topic space. */
  get: (
    resourceGroupName: string,
    namespaceName: string,
    topicSpaceName: string,
    options?: TopicSpacesGetOptionalParams,
  ) => Promise<TopicSpace>;
}

function _getTopicSpaces(context: EventGridContext) {
  return {
    listByNamespace: (
      resourceGroupName: string,
      namespaceName: string,
      options?: TopicSpacesListByNamespaceOptionalParams,
    ) => listByNamespace(context, resourceGroupName, namespaceName, options),
    delete: (
      resourceGroupName: string,
      namespaceName: string,
      topicSpaceName: string,
      options?: TopicSpacesDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, namespaceName, topicSpaceName, options),
    createOrUpdate: (
      resourceGroupName: string,
      namespaceName: string,
      topicSpaceName: string,
      topicSpaceInfo: TopicSpace,
      options?: TopicSpacesCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        namespaceName,
        topicSpaceName,
        topicSpaceInfo,
        options,
      ),
    get: (
      resourceGroupName: string,
      namespaceName: string,
      topicSpaceName: string,
      options?: TopicSpacesGetOptionalParams,
    ) => get(context, resourceGroupName, namespaceName, topicSpaceName, options),
  };
}

export function _getTopicSpacesOperations(context: EventGridContext): TopicSpacesOperations {
  return {
    ..._getTopicSpaces(context),
  };
}
