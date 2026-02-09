// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EventGridContext } from "../../api/eventGridContext.js";
import {
  validateCustomDomainOwnership,
  regenerateKey,
  listSharedAccessKeys,
  listBySubscription,
  listByResourceGroup,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/namespaces/operations.js";
import {
  NamespacesValidateCustomDomainOwnershipOptionalParams,
  NamespacesRegenerateKeyOptionalParams,
  NamespacesListSharedAccessKeysOptionalParams,
  NamespacesListBySubscriptionOptionalParams,
  NamespacesListByResourceGroupOptionalParams,
  NamespacesDeleteOptionalParams,
  NamespacesUpdateOptionalParams,
  NamespacesCreateOrUpdateOptionalParams,
  NamespacesGetOptionalParams,
} from "../../api/namespaces/options.js";
import {
  Namespace,
  NamespaceUpdateParameters,
  NamespaceSharedAccessKeys,
  NamespaceRegenerateKeyRequest,
  CustomDomainOwnershipValidationResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Namespaces operations. */
export interface NamespacesOperations {
  /** Performs ownership validation via checking TXT records for all custom domains in a namespace. */
  validateCustomDomainOwnership: (
    resourceGroupName: string,
    namespaceName: string,
    options?: NamespacesValidateCustomDomainOwnershipOptionalParams,
  ) => PollerLike<
    OperationState<CustomDomainOwnershipValidationResult>,
    CustomDomainOwnershipValidationResult
  >;
  /** Regenerate a shared access key for a namespace. */
  regenerateKey: (
    resourceGroupName: string,
    namespaceName: string,
    regenerateKeyRequest: NamespaceRegenerateKeyRequest,
    options?: NamespacesRegenerateKeyOptionalParams,
  ) => PollerLike<OperationState<NamespaceSharedAccessKeys>, NamespaceSharedAccessKeys>;
  /** List the two keys used to publish to a namespace. */
  listSharedAccessKeys: (
    resourceGroupName: string,
    namespaceName: string,
    options?: NamespacesListSharedAccessKeysOptionalParams,
  ) => Promise<NamespaceSharedAccessKeys>;
  /** List all the namespaces under an Azure subscription. */
  listBySubscription: (
    options?: NamespacesListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<Namespace>;
  /** List all the namespaces under a resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: NamespacesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Namespace>;
  /** Delete existing namespace. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    namespaceName: string,
    options?: NamespacesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Asynchronously updates a namespace with the specified parameters. */
  update: (
    resourceGroupName: string,
    namespaceName: string,
    namespaceUpdateParameters: NamespaceUpdateParameters,
    options?: NamespacesUpdateOptionalParams,
  ) => PollerLike<OperationState<Namespace>, Namespace>;
  /** Asynchronously creates or updates a new namespace with the specified parameters. */
  createOrUpdate: (
    resourceGroupName: string,
    namespaceName: string,
    namespaceInfo: Namespace,
    options?: NamespacesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Namespace>, Namespace>;
  /** Get properties of a namespace. */
  get: (
    resourceGroupName: string,
    namespaceName: string,
    options?: NamespacesGetOptionalParams,
  ) => Promise<Namespace>;
}

function _getNamespaces(context: EventGridContext) {
  return {
    validateCustomDomainOwnership: (
      resourceGroupName: string,
      namespaceName: string,
      options?: NamespacesValidateCustomDomainOwnershipOptionalParams,
    ) => validateCustomDomainOwnership(context, resourceGroupName, namespaceName, options),
    regenerateKey: (
      resourceGroupName: string,
      namespaceName: string,
      regenerateKeyRequest: NamespaceRegenerateKeyRequest,
      options?: NamespacesRegenerateKeyOptionalParams,
    ) => regenerateKey(context, resourceGroupName, namespaceName, regenerateKeyRequest, options),
    listSharedAccessKeys: (
      resourceGroupName: string,
      namespaceName: string,
      options?: NamespacesListSharedAccessKeysOptionalParams,
    ) => listSharedAccessKeys(context, resourceGroupName, namespaceName, options),
    listBySubscription: (options?: NamespacesListBySubscriptionOptionalParams) =>
      listBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: NamespacesListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      namespaceName: string,
      options?: NamespacesDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, namespaceName, options),
    update: (
      resourceGroupName: string,
      namespaceName: string,
      namespaceUpdateParameters: NamespaceUpdateParameters,
      options?: NamespacesUpdateOptionalParams,
    ) => update(context, resourceGroupName, namespaceName, namespaceUpdateParameters, options),
    createOrUpdate: (
      resourceGroupName: string,
      namespaceName: string,
      namespaceInfo: Namespace,
      options?: NamespacesCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, namespaceName, namespaceInfo, options),
    get: (
      resourceGroupName: string,
      namespaceName: string,
      options?: NamespacesGetOptionalParams,
    ) => get(context, resourceGroupName, namespaceName, options),
  };
}

export function _getNamespacesOperations(context: EventGridContext): NamespacesOperations {
  return {
    ..._getNamespaces(context),
  };
}
