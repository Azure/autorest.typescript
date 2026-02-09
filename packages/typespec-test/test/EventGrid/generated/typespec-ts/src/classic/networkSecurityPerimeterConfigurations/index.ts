// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EventGridContext } from "../../api/eventGridContext.js";
import {
  reconcile,
  list,
  get,
} from "../../api/networkSecurityPerimeterConfigurations/operations.js";
import {
  NetworkSecurityPerimeterConfigurationsReconcileOptionalParams,
  NetworkSecurityPerimeterConfigurationsListOptionalParams,
  NetworkSecurityPerimeterConfigurationsGetOptionalParams,
} from "../../api/networkSecurityPerimeterConfigurations/options.js";
import {
  NetworkSecurityPerimeterConfiguration,
  NetworkSecurityPerimeterResourceType,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a NetworkSecurityPerimeterConfigurations operations. */
export interface NetworkSecurityPerimeterConfigurationsOperations {
  /** Reconcile a specific network security perimeter configuration for a given network security perimeter association with a topic or domain. */
  reconcile: (
    resourceGroupName: string,
    resourceType: NetworkSecurityPerimeterResourceType,
    resourceName: string,
    perimeterGuid: string,
    associationName: string,
    options?: NetworkSecurityPerimeterConfigurationsReconcileOptionalParams,
  ) => PollerLike<
    OperationState<NetworkSecurityPerimeterConfiguration>,
    NetworkSecurityPerimeterConfiguration
  >;
  /** Get all network security perimeter configurations associated with a topic or domain. */
  list: (
    resourceGroupName: string,
    resourceType: NetworkSecurityPerimeterResourceType,
    resourceName: string,
    options?: NetworkSecurityPerimeterConfigurationsListOptionalParams,
  ) => PagedAsyncIterableIterator<NetworkSecurityPerimeterConfiguration>;
  /** Get a specific network security perimeter configuration with a topic or domain. */
  get: (
    resourceGroupName: string,
    resourceType: NetworkSecurityPerimeterResourceType,
    resourceName: string,
    perimeterGuid: string,
    associationName: string,
    options?: NetworkSecurityPerimeterConfigurationsGetOptionalParams,
  ) => Promise<NetworkSecurityPerimeterConfiguration>;
}

function _getNetworkSecurityPerimeterConfigurations(context: EventGridContext) {
  return {
    reconcile: (
      resourceGroupName: string,
      resourceType: NetworkSecurityPerimeterResourceType,
      resourceName: string,
      perimeterGuid: string,
      associationName: string,
      options?: NetworkSecurityPerimeterConfigurationsReconcileOptionalParams,
    ) =>
      reconcile(
        context,
        resourceGroupName,
        resourceType,
        resourceName,
        perimeterGuid,
        associationName,
        options,
      ),
    list: (
      resourceGroupName: string,
      resourceType: NetworkSecurityPerimeterResourceType,
      resourceName: string,
      options?: NetworkSecurityPerimeterConfigurationsListOptionalParams,
    ) => list(context, resourceGroupName, resourceType, resourceName, options),
    get: (
      resourceGroupName: string,
      resourceType: NetworkSecurityPerimeterResourceType,
      resourceName: string,
      perimeterGuid: string,
      associationName: string,
      options?: NetworkSecurityPerimeterConfigurationsGetOptionalParams,
    ) =>
      get(
        context,
        resourceGroupName,
        resourceType,
        resourceName,
        perimeterGuid,
        associationName,
        options,
      ),
  };
}

export function _getNetworkSecurityPerimeterConfigurationsOperations(
  context: EventGridContext,
): NetworkSecurityPerimeterConfigurationsOperations {
  return {
    ..._getNetworkSecurityPerimeterConfigurations(context),
  };
}
