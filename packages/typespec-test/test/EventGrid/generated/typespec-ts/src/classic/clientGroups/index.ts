// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EventGridContext } from "../../api/eventGridContext.js";
import {
  listByNamespace,
  $delete,
  createOrUpdate,
  get,
} from "../../api/clientGroups/operations.js";
import {
  ClientGroupsListByNamespaceOptionalParams,
  ClientGroupsDeleteOptionalParams,
  ClientGroupsCreateOrUpdateOptionalParams,
  ClientGroupsGetOptionalParams,
} from "../../api/clientGroups/options.js";
import { ClientGroup } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a ClientGroups operations. */
export interface ClientGroupsOperations {
  /** Get all the client groups under a namespace. */
  listByNamespace: (
    resourceGroupName: string,
    namespaceName: string,
    options?: ClientGroupsListByNamespaceOptionalParams,
  ) => PagedAsyncIterableIterator<ClientGroup>;
  /** Delete an existing client group. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    namespaceName: string,
    clientGroupName: string,
    options?: ClientGroupsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create or update a client group with the specified parameters. */
  createOrUpdate: (
    resourceGroupName: string,
    namespaceName: string,
    clientGroupName: string,
    clientGroupInfo: ClientGroup,
    options?: ClientGroupsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<ClientGroup>, ClientGroup>;
  /** Get properties of a client group. */
  get: (
    resourceGroupName: string,
    namespaceName: string,
    clientGroupName: string,
    options?: ClientGroupsGetOptionalParams,
  ) => Promise<ClientGroup>;
}

function _getClientGroups(context: EventGridContext) {
  return {
    listByNamespace: (
      resourceGroupName: string,
      namespaceName: string,
      options?: ClientGroupsListByNamespaceOptionalParams,
    ) => listByNamespace(context, resourceGroupName, namespaceName, options),
    delete: (
      resourceGroupName: string,
      namespaceName: string,
      clientGroupName: string,
      options?: ClientGroupsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, namespaceName, clientGroupName, options),
    createOrUpdate: (
      resourceGroupName: string,
      namespaceName: string,
      clientGroupName: string,
      clientGroupInfo: ClientGroup,
      options?: ClientGroupsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        namespaceName,
        clientGroupName,
        clientGroupInfo,
        options,
      ),
    get: (
      resourceGroupName: string,
      namespaceName: string,
      clientGroupName: string,
      options?: ClientGroupsGetOptionalParams,
    ) => get(context, resourceGroupName, namespaceName, clientGroupName, options),
  };
}

export function _getClientGroupsOperations(context: EventGridContext): ClientGroupsOperations {
  return {
    ..._getClientGroups(context),
  };
}
