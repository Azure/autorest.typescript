// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EventGridContext } from "../../api/eventGridContext.js";
import {
  activate,
  listBySubscription,
  listByResourceGroup,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/partnerDestinations/operations.js";
import {
  PartnerDestinationsActivateOptionalParams,
  PartnerDestinationsListBySubscriptionOptionalParams,
  PartnerDestinationsListByResourceGroupOptionalParams,
  PartnerDestinationsDeleteOptionalParams,
  PartnerDestinationsUpdateOptionalParams,
  PartnerDestinationsCreateOrUpdateOptionalParams,
  PartnerDestinationsGetOptionalParams,
} from "../../api/partnerDestinations/options.js";
import { PartnerDestination, PartnerDestinationUpdateParameters } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a PartnerDestinations operations. */
export interface PartnerDestinationsOperations {
  /** Activate a newly created partner destination. */
  activate: (
    resourceGroupName: string,
    partnerDestinationName: string,
    options?: PartnerDestinationsActivateOptionalParams,
  ) => Promise<PartnerDestination>;
  /** List all the partner destinations under an Azure subscription. */
  listBySubscription: (
    options?: PartnerDestinationsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<PartnerDestination>;
  /** List all the partner destinations under a resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: PartnerDestinationsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<PartnerDestination>;
  /** Delete existing partner destination. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    partnerDestinationName: string,
    options?: PartnerDestinationsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Asynchronously updates a partner destination with the specified parameters. */
  update: (
    resourceGroupName: string,
    partnerDestinationName: string,
    partnerDestinationUpdateParameters: PartnerDestinationUpdateParameters,
    options?: PartnerDestinationsUpdateOptionalParams,
  ) => PollerLike<OperationState<PartnerDestination>, PartnerDestination>;
  /** Asynchronously creates a new partner destination with the specified parameters. */
  createOrUpdate: (
    resourceGroupName: string,
    partnerDestinationName: string,
    partnerDestination: PartnerDestination,
    options?: PartnerDestinationsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<PartnerDestination>, PartnerDestination>;
  /** Get properties of a partner destination. */
  get: (
    resourceGroupName: string,
    partnerDestinationName: string,
    options?: PartnerDestinationsGetOptionalParams,
  ) => Promise<PartnerDestination>;
}

function _getPartnerDestinations(context: EventGridContext) {
  return {
    activate: (
      resourceGroupName: string,
      partnerDestinationName: string,
      options?: PartnerDestinationsActivateOptionalParams,
    ) => activate(context, resourceGroupName, partnerDestinationName, options),
    listBySubscription: (options?: PartnerDestinationsListBySubscriptionOptionalParams) =>
      listBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: PartnerDestinationsListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      partnerDestinationName: string,
      options?: PartnerDestinationsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, partnerDestinationName, options),
    update: (
      resourceGroupName: string,
      partnerDestinationName: string,
      partnerDestinationUpdateParameters: PartnerDestinationUpdateParameters,
      options?: PartnerDestinationsUpdateOptionalParams,
    ) =>
      update(
        context,
        resourceGroupName,
        partnerDestinationName,
        partnerDestinationUpdateParameters,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      partnerDestinationName: string,
      partnerDestination: PartnerDestination,
      options?: PartnerDestinationsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        partnerDestinationName,
        partnerDestination,
        options,
      ),
    get: (
      resourceGroupName: string,
      partnerDestinationName: string,
      options?: PartnerDestinationsGetOptionalParams,
    ) => get(context, resourceGroupName, partnerDestinationName, options),
  };
}

export function _getPartnerDestinationsOperations(
  context: EventGridContext,
): PartnerDestinationsOperations {
  return {
    ..._getPartnerDestinations(context),
  };
}
