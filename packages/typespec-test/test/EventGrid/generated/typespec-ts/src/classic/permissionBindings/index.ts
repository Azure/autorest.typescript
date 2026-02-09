// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EventGridContext } from "../../api/eventGridContext.js";
import {
  listByNamespace,
  $delete,
  createOrUpdate,
  get,
} from "../../api/permissionBindings/operations.js";
import {
  PermissionBindingsListByNamespaceOptionalParams,
  PermissionBindingsDeleteOptionalParams,
  PermissionBindingsCreateOrUpdateOptionalParams,
  PermissionBindingsGetOptionalParams,
} from "../../api/permissionBindings/options.js";
import { PermissionBinding } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a PermissionBindings operations. */
export interface PermissionBindingsOperations {
  /** Get all the permission bindings under a namespace. */
  listByNamespace: (
    resourceGroupName: string,
    namespaceName: string,
    options?: PermissionBindingsListByNamespaceOptionalParams,
  ) => PagedAsyncIterableIterator<PermissionBinding>;
  /** Delete an existing permission binding. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    namespaceName: string,
    permissionBindingName: string,
    options?: PermissionBindingsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create or update a permission binding with the specified parameters. */
  createOrUpdate: (
    resourceGroupName: string,
    namespaceName: string,
    permissionBindingName: string,
    permissionBindingInfo: PermissionBinding,
    options?: PermissionBindingsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<PermissionBinding>, PermissionBinding>;
  /** Get properties of a permission binding. */
  get: (
    resourceGroupName: string,
    namespaceName: string,
    permissionBindingName: string,
    options?: PermissionBindingsGetOptionalParams,
  ) => Promise<PermissionBinding>;
}

function _getPermissionBindings(context: EventGridContext) {
  return {
    listByNamespace: (
      resourceGroupName: string,
      namespaceName: string,
      options?: PermissionBindingsListByNamespaceOptionalParams,
    ) => listByNamespace(context, resourceGroupName, namespaceName, options),
    delete: (
      resourceGroupName: string,
      namespaceName: string,
      permissionBindingName: string,
      options?: PermissionBindingsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, namespaceName, permissionBindingName, options),
    createOrUpdate: (
      resourceGroupName: string,
      namespaceName: string,
      permissionBindingName: string,
      permissionBindingInfo: PermissionBinding,
      options?: PermissionBindingsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        namespaceName,
        permissionBindingName,
        permissionBindingInfo,
        options,
      ),
    get: (
      resourceGroupName: string,
      namespaceName: string,
      permissionBindingName: string,
      options?: PermissionBindingsGetOptionalParams,
    ) => get(context, resourceGroupName, namespaceName, permissionBindingName, options),
  };
}

export function _getPermissionBindingsOperations(
  context: EventGridContext,
): PermissionBindingsOperations {
  return {
    ..._getPermissionBindings(context),
  };
}
