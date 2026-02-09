// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EventGridContext } from "../../api/eventGridContext.js";
import {
  regenerateKey,
  listSharedAccessKeys,
  listBySubscription,
  listByResourceGroup,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/partnerNamespaces/operations.js";
import {
  PartnerNamespacesRegenerateKeyOptionalParams,
  PartnerNamespacesListSharedAccessKeysOptionalParams,
  PartnerNamespacesListBySubscriptionOptionalParams,
  PartnerNamespacesListByResourceGroupOptionalParams,
  PartnerNamespacesDeleteOptionalParams,
  PartnerNamespacesUpdateOptionalParams,
  PartnerNamespacesCreateOrUpdateOptionalParams,
  PartnerNamespacesGetOptionalParams,
} from "../../api/partnerNamespaces/options.js";
import {
  PartnerNamespace,
  PartnerNamespaceUpdateParameters,
  PartnerNamespaceSharedAccessKeys,
  PartnerNamespaceRegenerateKeyRequest,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a PartnerNamespaces operations. */
export interface PartnerNamespacesOperations {
  /** Regenerate a shared access key for a partner namespace. */
  regenerateKey: (
    resourceGroupName: string,
    partnerNamespaceName: string,
    regenerateKeyRequest: PartnerNamespaceRegenerateKeyRequest,
    options?: PartnerNamespacesRegenerateKeyOptionalParams,
  ) => Promise<PartnerNamespaceSharedAccessKeys>;
  /** List the two keys used to publish to a partner namespace. */
  listSharedAccessKeys: (
    resourceGroupName: string,
    partnerNamespaceName: string,
    options?: PartnerNamespacesListSharedAccessKeysOptionalParams,
  ) => Promise<PartnerNamespaceSharedAccessKeys>;
  /** List all the partner namespaces under an Azure subscription. */
  listBySubscription: (
    options?: PartnerNamespacesListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<PartnerNamespace>;
  /** List all the partner namespaces under a resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: PartnerNamespacesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<PartnerNamespace>;
  /** Delete existing partner namespace. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    partnerNamespaceName: string,
    options?: PartnerNamespacesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Asynchronously updates a partner namespace with the specified parameters. */
  update: (
    resourceGroupName: string,
    partnerNamespaceName: string,
    partnerNamespaceUpdateParameters: PartnerNamespaceUpdateParameters,
    options?: PartnerNamespacesUpdateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Asynchronously creates a new partner namespace with the specified parameters. */
  createOrUpdate: (
    resourceGroupName: string,
    partnerNamespaceName: string,
    partnerNamespaceInfo: PartnerNamespace,
    options?: PartnerNamespacesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Get properties of a partner namespace. */
  get: (
    resourceGroupName: string,
    partnerNamespaceName: string,
    options?: PartnerNamespacesGetOptionalParams,
  ) => Promise<PartnerNamespace>;
}

function _getPartnerNamespaces(context: EventGridContext) {
  return {
    regenerateKey: (
      resourceGroupName: string,
      partnerNamespaceName: string,
      regenerateKeyRequest: PartnerNamespaceRegenerateKeyRequest,
      options?: PartnerNamespacesRegenerateKeyOptionalParams,
    ) =>
      regenerateKey(
        context,
        resourceGroupName,
        partnerNamespaceName,
        regenerateKeyRequest,
        options,
      ),
    listSharedAccessKeys: (
      resourceGroupName: string,
      partnerNamespaceName: string,
      options?: PartnerNamespacesListSharedAccessKeysOptionalParams,
    ) => listSharedAccessKeys(context, resourceGroupName, partnerNamespaceName, options),
    listBySubscription: (options?: PartnerNamespacesListBySubscriptionOptionalParams) =>
      listBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: PartnerNamespacesListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      partnerNamespaceName: string,
      options?: PartnerNamespacesDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, partnerNamespaceName, options),
    update: (
      resourceGroupName: string,
      partnerNamespaceName: string,
      partnerNamespaceUpdateParameters: PartnerNamespaceUpdateParameters,
      options?: PartnerNamespacesUpdateOptionalParams,
    ) =>
      update(
        context,
        resourceGroupName,
        partnerNamespaceName,
        partnerNamespaceUpdateParameters,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      partnerNamespaceName: string,
      partnerNamespaceInfo: PartnerNamespace,
      options?: PartnerNamespacesCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        partnerNamespaceName,
        partnerNamespaceInfo,
        options,
      ),
    get: (
      resourceGroupName: string,
      partnerNamespaceName: string,
      options?: PartnerNamespacesGetOptionalParams,
    ) => get(context, resourceGroupName, partnerNamespaceName, options),
  };
}

export function _getPartnerNamespacesOperations(
  context: EventGridContext,
): PartnerNamespacesOperations {
  return {
    ..._getPartnerNamespaces(context),
  };
}
