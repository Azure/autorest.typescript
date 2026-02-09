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
} from "../../api/domains/operations.js";
import {
  DomainsRegenerateKeyOptionalParams,
  DomainsListSharedAccessKeysOptionalParams,
  DomainsListBySubscriptionOptionalParams,
  DomainsListByResourceGroupOptionalParams,
  DomainsDeleteOptionalParams,
  DomainsUpdateOptionalParams,
  DomainsCreateOrUpdateOptionalParams,
  DomainsGetOptionalParams,
} from "../../api/domains/options.js";
import {
  Domain,
  DomainUpdateParameters,
  DomainSharedAccessKeys,
  DomainRegenerateKeyRequest,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Domains operations. */
export interface DomainsOperations {
  /** Regenerate a shared access key for a domain. */
  regenerateKey: (
    resourceGroupName: string,
    domainName: string,
    regenerateKeyRequest: DomainRegenerateKeyRequest,
    options?: DomainsRegenerateKeyOptionalParams,
  ) => Promise<DomainSharedAccessKeys>;
  /** List the two keys used to publish to a domain. */
  listSharedAccessKeys: (
    resourceGroupName: string,
    domainName: string,
    options?: DomainsListSharedAccessKeysOptionalParams,
  ) => Promise<DomainSharedAccessKeys>;
  /** List all the domains under an Azure subscription. */
  listBySubscription: (
    options?: DomainsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<Domain>;
  /** List all the domains under a resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: DomainsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Domain>;
  /** Delete existing domain. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    domainName: string,
    options?: DomainsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Asynchronously updates a domain with the specified parameters. */
  update: (
    resourceGroupName: string,
    domainName: string,
    domainUpdateParameters: DomainUpdateParameters,
    options?: DomainsUpdateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Asynchronously creates or updates a new domain with the specified parameters. */
  createOrUpdate: (
    resourceGroupName: string,
    domainName: string,
    domainInfo: Domain,
    options?: DomainsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Get properties of a domain. */
  get: (
    resourceGroupName: string,
    domainName: string,
    options?: DomainsGetOptionalParams,
  ) => Promise<Domain>;
}

function _getDomains(context: EventGridContext) {
  return {
    regenerateKey: (
      resourceGroupName: string,
      domainName: string,
      regenerateKeyRequest: DomainRegenerateKeyRequest,
      options?: DomainsRegenerateKeyOptionalParams,
    ) => regenerateKey(context, resourceGroupName, domainName, regenerateKeyRequest, options),
    listSharedAccessKeys: (
      resourceGroupName: string,
      domainName: string,
      options?: DomainsListSharedAccessKeysOptionalParams,
    ) => listSharedAccessKeys(context, resourceGroupName, domainName, options),
    listBySubscription: (options?: DomainsListBySubscriptionOptionalParams) =>
      listBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: DomainsListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      domainName: string,
      options?: DomainsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, domainName, options),
    update: (
      resourceGroupName: string,
      domainName: string,
      domainUpdateParameters: DomainUpdateParameters,
      options?: DomainsUpdateOptionalParams,
    ) => update(context, resourceGroupName, domainName, domainUpdateParameters, options),
    createOrUpdate: (
      resourceGroupName: string,
      domainName: string,
      domainInfo: Domain,
      options?: DomainsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, domainName, domainInfo, options),
    get: (resourceGroupName: string, domainName: string, options?: DomainsGetOptionalParams) =>
      get(context, resourceGroupName, domainName, options),
  };
}

export function _getDomainsOperations(context: EventGridContext): DomainsOperations {
  return {
    ..._getDomains(context),
  };
}
