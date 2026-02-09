// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EventGridContext } from "../../api/eventGridContext.js";
import {
  listBySubscription,
  listByResourceGroup,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/partnerRegistrations/operations.js";
import {
  PartnerRegistrationsListBySubscriptionOptionalParams,
  PartnerRegistrationsListByResourceGroupOptionalParams,
  PartnerRegistrationsDeleteOptionalParams,
  PartnerRegistrationsUpdateOptionalParams,
  PartnerRegistrationsCreateOrUpdateOptionalParams,
  PartnerRegistrationsGetOptionalParams,
} from "../../api/partnerRegistrations/options.js";
import { PartnerRegistration, PartnerRegistrationUpdateParameters } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a PartnerRegistrations operations. */
export interface PartnerRegistrationsOperations {
  /** List all the partner registrations under an Azure subscription. */
  listBySubscription: (
    options?: PartnerRegistrationsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<PartnerRegistration>;
  /** List all the partner registrations under a resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: PartnerRegistrationsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<PartnerRegistration>;
  /** Deletes a partner registration with the specified parameters. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    partnerRegistrationName: string,
    options?: PartnerRegistrationsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Updates a partner registration with the specified parameters. */
  update: (
    resourceGroupName: string,
    partnerRegistrationName: string,
    partnerRegistrationUpdateParameters: PartnerRegistrationUpdateParameters,
    options?: PartnerRegistrationsUpdateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Creates a new partner registration with the specified parameters. */
  createOrUpdate: (
    resourceGroupName: string,
    partnerRegistrationName: string,
    partnerRegistrationInfo: PartnerRegistration,
    options?: PartnerRegistrationsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Gets a partner registration with the specified parameters. */
  get: (
    resourceGroupName: string,
    partnerRegistrationName: string,
    options?: PartnerRegistrationsGetOptionalParams,
  ) => Promise<PartnerRegistration>;
}

function _getPartnerRegistrations(context: EventGridContext) {
  return {
    listBySubscription: (options?: PartnerRegistrationsListBySubscriptionOptionalParams) =>
      listBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: PartnerRegistrationsListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      partnerRegistrationName: string,
      options?: PartnerRegistrationsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, partnerRegistrationName, options),
    update: (
      resourceGroupName: string,
      partnerRegistrationName: string,
      partnerRegistrationUpdateParameters: PartnerRegistrationUpdateParameters,
      options?: PartnerRegistrationsUpdateOptionalParams,
    ) =>
      update(
        context,
        resourceGroupName,
        partnerRegistrationName,
        partnerRegistrationUpdateParameters,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      partnerRegistrationName: string,
      partnerRegistrationInfo: PartnerRegistration,
      options?: PartnerRegistrationsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        partnerRegistrationName,
        partnerRegistrationInfo,
        options,
      ),
    get: (
      resourceGroupName: string,
      partnerRegistrationName: string,
      options?: PartnerRegistrationsGetOptionalParams,
    ) => get(context, resourceGroupName, partnerRegistrationName, options),
  };
}

export function _getPartnerRegistrationsOperations(
  context: EventGridContext,
): PartnerRegistrationsOperations {
  return {
    ..._getPartnerRegistrations(context),
  };
}
