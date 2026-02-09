// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EventGridContext } from "../../api/eventGridContext.js";
import { listByNamespace, $delete, createOrUpdate, get } from "../../api/clients/operations.js";
import {
  ClientsListByNamespaceOptionalParams,
  ClientsDeleteOptionalParams,
  ClientsCreateOrUpdateOptionalParams,
  ClientsGetOptionalParams,
} from "../../api/clients/options.js";
import { CustomClient } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Clients operations. */
export interface ClientsOperations {
  /** Get all the permission bindings under a namespace. */
  listByNamespace: (
    resourceGroupName: string,
    namespaceName: string,
    options?: ClientsListByNamespaceOptionalParams,
  ) => PagedAsyncIterableIterator<CustomClient>;
  /** Delete an existing client. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    namespaceName: string,
    clientName: string,
    options?: ClientsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create or update a client with the specified parameters. */
  createOrUpdate: (
    resourceGroupName: string,
    namespaceName: string,
    clientName: string,
    clientInfo: CustomClient,
    options?: ClientsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<CustomClient>, CustomClient>;
  /** Get properties of a client. */
  get: (
    resourceGroupName: string,
    namespaceName: string,
    clientName: string,
    options?: ClientsGetOptionalParams,
  ) => Promise<CustomClient>;
}

function _getClients(context: EventGridContext) {
  return {
    listByNamespace: (
      resourceGroupName: string,
      namespaceName: string,
      options?: ClientsListByNamespaceOptionalParams,
    ) => listByNamespace(context, resourceGroupName, namespaceName, options),
    delete: (
      resourceGroupName: string,
      namespaceName: string,
      clientName: string,
      options?: ClientsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, namespaceName, clientName, options),
    createOrUpdate: (
      resourceGroupName: string,
      namespaceName: string,
      clientName: string,
      clientInfo: CustomClient,
      options?: ClientsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, namespaceName, clientName, clientInfo, options),
    get: (
      resourceGroupName: string,
      namespaceName: string,
      clientName: string,
      options?: ClientsGetOptionalParams,
    ) => get(context, resourceGroupName, namespaceName, clientName, options),
  };
}

export function _getClientsOperations(context: EventGridContext): ClientsOperations {
  return {
    ..._getClients(context),
  };
}
