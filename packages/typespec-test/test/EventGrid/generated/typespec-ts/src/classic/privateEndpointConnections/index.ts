// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EventGridContext } from "../../api/eventGridContext.js";
import {
  listByResource,
  $delete,
  update,
  get,
} from "../../api/privateEndpointConnections/operations.js";
import {
  PrivateEndpointConnectionsListByResourceOptionalParams,
  PrivateEndpointConnectionsDeleteOptionalParams,
  PrivateEndpointConnectionsUpdateOptionalParams,
  PrivateEndpointConnectionsGetOptionalParams,
} from "../../api/privateEndpointConnections/options.js";
import {
  PrivateEndpointConnection,
  PrivateEndpointConnectionsParentType,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a PrivateEndpointConnections operations. */
export interface PrivateEndpointConnectionsOperations {
  /** Get all private endpoint connections under a topic, domain, or partner namespace or namespace. */
  listByResource: (
    resourceGroupName: string,
    parentType: PrivateEndpointConnectionsParentType,
    parentName: string,
    options?: PrivateEndpointConnectionsListByResourceOptionalParams,
  ) => PagedAsyncIterableIterator<PrivateEndpointConnection>;
  /** Delete a specific private endpoint connection under a topic, domain, or partner namespace or namespace. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    parentType: PrivateEndpointConnectionsParentType,
    parentName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsDeleteOptionalParams,
  ) => PollerLike<OperationState<PrivateEndpointConnection>, PrivateEndpointConnection>;
  /** Update a specific private endpoint connection under a topic, domain or partner namespace. */
  update: (
    resourceGroupName: string,
    parentType: PrivateEndpointConnectionsParentType,
    parentName: string,
    privateEndpointConnectionName: string,
    privateEndpointConnection: PrivateEndpointConnection,
    options?: PrivateEndpointConnectionsUpdateOptionalParams,
  ) => PollerLike<OperationState<PrivateEndpointConnection>, PrivateEndpointConnection>;
  /** Get a specific private endpoint connection under a topic, domain, or partner namespace or namespace. */
  get: (
    resourceGroupName: string,
    parentType: PrivateEndpointConnectionsParentType,
    parentName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsGetOptionalParams,
  ) => Promise<PrivateEndpointConnection>;
}

function _getPrivateEndpointConnections(context: EventGridContext) {
  return {
    listByResource: (
      resourceGroupName: string,
      parentType: PrivateEndpointConnectionsParentType,
      parentName: string,
      options?: PrivateEndpointConnectionsListByResourceOptionalParams,
    ) => listByResource(context, resourceGroupName, parentType, parentName, options),
    delete: (
      resourceGroupName: string,
      parentType: PrivateEndpointConnectionsParentType,
      parentName: string,
      privateEndpointConnectionName: string,
      options?: PrivateEndpointConnectionsDeleteOptionalParams,
    ) =>
      $delete(
        context,
        resourceGroupName,
        parentType,
        parentName,
        privateEndpointConnectionName,
        options,
      ),
    update: (
      resourceGroupName: string,
      parentType: PrivateEndpointConnectionsParentType,
      parentName: string,
      privateEndpointConnectionName: string,
      privateEndpointConnection: PrivateEndpointConnection,
      options?: PrivateEndpointConnectionsUpdateOptionalParams,
    ) =>
      update(
        context,
        resourceGroupName,
        parentType,
        parentName,
        privateEndpointConnectionName,
        privateEndpointConnection,
        options,
      ),
    get: (
      resourceGroupName: string,
      parentType: PrivateEndpointConnectionsParentType,
      parentName: string,
      privateEndpointConnectionName: string,
      options?: PrivateEndpointConnectionsGetOptionalParams,
    ) =>
      get(
        context,
        resourceGroupName,
        parentType,
        parentName,
        privateEndpointConnectionName,
        options,
      ),
  };
}

export function _getPrivateEndpointConnectionsOperations(
  context: EventGridContext,
): PrivateEndpointConnectionsOperations {
  return {
    ..._getPrivateEndpointConnections(context),
  };
}
