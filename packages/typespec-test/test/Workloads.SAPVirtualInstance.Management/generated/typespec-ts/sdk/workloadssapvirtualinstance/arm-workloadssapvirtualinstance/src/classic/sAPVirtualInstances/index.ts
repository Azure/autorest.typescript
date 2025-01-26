// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsContext } from "../../api/workloadsContext.js";
import {
  getAvailabilityZoneDetails,
  getDiskConfigurations,
  getSapSupportedSku,
  getSizingRecommendations,
  stop,
  start,
  listBySubscription,
  listByResourceGroup,
  $delete,
  update,
  create,
  get,
} from "../../api/sAPVirtualInstances/index.js";
import {
  OperationStatusResult,
  SAPVirtualInstance,
  SAPSizingRecommendationResultUnion,
  SAPSupportedResourceSkusResult,
  SAPDiskConfigurationsResult,
  SAPAvailabilityZoneDetailsResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  SAPVirtualInstancesGetAvailabilityZoneDetailsOptionalParams,
  SAPVirtualInstancesGetDiskConfigurationsOptionalParams,
  SAPVirtualInstancesGetSapSupportedSkuOptionalParams,
  SAPVirtualInstancesGetSizingRecommendationsOptionalParams,
  SAPVirtualInstancesStopOptionalParams,
  SAPVirtualInstancesStartOptionalParams,
  SAPVirtualInstancesListBySubscriptionOptionalParams,
  SAPVirtualInstancesListByResourceGroupOptionalParams,
  SAPVirtualInstancesDeleteOptionalParams,
  SAPVirtualInstancesUpdateOptionalParams,
  SAPVirtualInstancesCreateOptionalParams,
  SAPVirtualInstancesGetOptionalParams,
} from "../../api/options.js";

/** Interface representing a SAPVirtualInstances operations. */
export interface SAPVirtualInstancesOperations {
  /** Get the recommended SAP Availability Zone Pair Details for your region. */
  getAvailabilityZoneDetails: (
    location: string,
    options?: SAPVirtualInstancesGetAvailabilityZoneDetailsOptionalParams,
  ) => Promise<SAPAvailabilityZoneDetailsResult>;
  /** Get the SAP Disk Configuration Layout prod/non-prod SAP System. */
  getDiskConfigurations: (
    location: string,
    options?: SAPVirtualInstancesGetDiskConfigurationsOptionalParams,
  ) => Promise<SAPDiskConfigurationsResult>;
  /** Get a list of SAP supported SKUs for ASCS, Application and Database tier. */
  getSapSupportedSku: (
    location: string,
    options?: SAPVirtualInstancesGetSapSupportedSkuOptionalParams,
  ) => Promise<SAPSupportedResourceSkusResult>;
  /** Gets the sizing recommendations. */
  getSizingRecommendations: (
    location: string,
    options?: SAPVirtualInstancesGetSizingRecommendationsOptionalParams,
  ) => Promise<SAPSizingRecommendationResultUnion>;
  /** Stops the SAP Application, that is the Application server instances and Central Services instance. */
  stop: (
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    options?: SAPVirtualInstancesStopOptionalParams,
  ) => PollerLike<OperationState<OperationStatusResult>, OperationStatusResult>;
  /** Starts the SAP application, that is the Central Services instance and Application server instances. */
  start: (
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    options?: SAPVirtualInstancesStartOptionalParams,
  ) => PollerLike<OperationState<OperationStatusResult>, OperationStatusResult>;
  /** Gets all Virtual Instances for SAP solutions resources in a Subscription. */
  listBySubscription: (
    options?: SAPVirtualInstancesListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<SAPVirtualInstance>;
  /** Gets all Virtual Instances for SAP solutions resources in a Resource Group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: SAPVirtualInstancesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<SAPVirtualInstance>;
  /** Deletes a Virtual Instance for SAP solutions resource and its child resources, that is the associated Central Services Instance, Application Server Instances and Database Instance. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    options?: SAPVirtualInstancesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Updates a Virtual Instance for SAP solutions resource */
  update: (
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    options?: SAPVirtualInstancesUpdateOptionalParams,
  ) => PollerLike<OperationState<SAPVirtualInstance>, SAPVirtualInstance>;
  /** Creates a Virtual Instance for SAP solutions (VIS) resource */
  create: (
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    options?: SAPVirtualInstancesCreateOptionalParams,
  ) => PollerLike<OperationState<SAPVirtualInstance>, SAPVirtualInstance>;
  /** Gets a Virtual Instance for SAP solutions resource */
  get: (
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    options?: SAPVirtualInstancesGetOptionalParams,
  ) => Promise<SAPVirtualInstance>;
}

function _getSAPVirtualInstances(context: WorkloadsContext) {
  return {
    getAvailabilityZoneDetails: (
      location: string,
      options?: SAPVirtualInstancesGetAvailabilityZoneDetailsOptionalParams,
    ) => getAvailabilityZoneDetails(context, location, options),
    getDiskConfigurations: (
      location: string,
      options?: SAPVirtualInstancesGetDiskConfigurationsOptionalParams,
    ) => getDiskConfigurations(context, location, options),
    getSapSupportedSku: (
      location: string,
      options?: SAPVirtualInstancesGetSapSupportedSkuOptionalParams,
    ) => getSapSupportedSku(context, location, options),
    getSizingRecommendations: (
      location: string,
      options?: SAPVirtualInstancesGetSizingRecommendationsOptionalParams,
    ) => getSizingRecommendations(context, location, options),
    stop: (
      resourceGroupName: string,
      sapVirtualInstanceName: string,
      options?: SAPVirtualInstancesStopOptionalParams,
    ) => stop(context, resourceGroupName, sapVirtualInstanceName, options),
    start: (
      resourceGroupName: string,
      sapVirtualInstanceName: string,
      options?: SAPVirtualInstancesStartOptionalParams,
    ) => start(context, resourceGroupName, sapVirtualInstanceName, options),
    listBySubscription: (
      options?: SAPVirtualInstancesListBySubscriptionOptionalParams,
    ) => listBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: SAPVirtualInstancesListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      sapVirtualInstanceName: string,
      options?: SAPVirtualInstancesDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, sapVirtualInstanceName, options),
    update: (
      resourceGroupName: string,
      sapVirtualInstanceName: string,
      options?: SAPVirtualInstancesUpdateOptionalParams,
    ) => update(context, resourceGroupName, sapVirtualInstanceName, options),
    create: (
      resourceGroupName: string,
      sapVirtualInstanceName: string,
      options?: SAPVirtualInstancesCreateOptionalParams,
    ) => create(context, resourceGroupName, sapVirtualInstanceName, options),
    get: (
      resourceGroupName: string,
      sapVirtualInstanceName: string,
      options?: SAPVirtualInstancesGetOptionalParams,
    ) => get(context, resourceGroupName, sapVirtualInstanceName, options),
  };
}

export function _getSAPVirtualInstancesOperations(
  context: WorkloadsContext,
): SAPVirtualInstancesOperations {
  return {
    ..._getSAPVirtualInstances(context),
  };
}
