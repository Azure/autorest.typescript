// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsContext } from "../../api/workloadsContext.js";
import {
  sAPVirtualInstancesGetAvailabilityZoneDetails,
  sAPVirtualInstancesGetDiskConfigurations,
  sAPVirtualInstancesGetSapSupportedSku,
  sAPVirtualInstancesGetSizingRecommendations,
  sAPVirtualInstancesStop,
  sAPVirtualInstancesStart,
  sAPVirtualInstancesListBySubscription,
  sAPVirtualInstancesListByResourceGroup,
  sAPVirtualInstancesDelete,
  sAPVirtualInstancesUpdate,
  sAPVirtualInstancesCreate,
  sAPVirtualInstancesGet,
} from "../../api/sAPVirtualInstances/index.js";
import {
  StartRequest,
  OperationStatusResult,
  StopRequest,
  SAPVirtualInstance,
  UpdateSAPVirtualInstanceRequest,
  SAPSizingRecommendationRequest,
  SAPSizingRecommendationResultUnion,
  SAPSupportedSkusRequest,
  SAPSupportedResourceSkusResult,
  SAPDiskConfigurationsRequest,
  SAPDiskConfigurationsResult,
  SAPAvailabilityZoneDetailsRequest,
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
    body: SAPAvailabilityZoneDetailsRequest,
    options?: SAPVirtualInstancesGetAvailabilityZoneDetailsOptionalParams,
  ) => Promise<SAPAvailabilityZoneDetailsResult>;
  /** Get the SAP Disk Configuration Layout prod/non-prod SAP System. */
  getDiskConfigurations: (
    location: string,
    body: SAPDiskConfigurationsRequest,
    options?: SAPVirtualInstancesGetDiskConfigurationsOptionalParams,
  ) => Promise<SAPDiskConfigurationsResult>;
  /** Get a list of SAP supported SKUs for ASCS, Application and Database tier. */
  getSapSupportedSku: (
    location: string,
    body: SAPSupportedSkusRequest,
    options?: SAPVirtualInstancesGetSapSupportedSkuOptionalParams,
  ) => Promise<SAPSupportedResourceSkusResult>;
  /** Gets the sizing recommendations. */
  getSizingRecommendations: (
    location: string,
    body: SAPSizingRecommendationRequest,
    options?: SAPVirtualInstancesGetSizingRecommendationsOptionalParams,
  ) => Promise<SAPSizingRecommendationResultUnion>;
  /** Stops the SAP Application, that is the Application server instances and Central Services instance. */
  stop: (
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    body: StopRequest,
    options?: SAPVirtualInstancesStopOptionalParams,
  ) => PollerLike<OperationState<OperationStatusResult>, OperationStatusResult>;
  /** Starts the SAP application, that is the Central Services instance and Application server instances. */
  start: (
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    body: StartRequest,
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
  delete: (
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    options?: SAPVirtualInstancesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Updates a Virtual Instance for SAP solutions resource */
  update: (
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    properties: UpdateSAPVirtualInstanceRequest,
    options?: SAPVirtualInstancesUpdateOptionalParams,
  ) => PollerLike<OperationState<SAPVirtualInstance>, SAPVirtualInstance>;
  /** Creates a Virtual Instance for SAP solutions (VIS) resource */
  create: (
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    resource: SAPVirtualInstance,
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
      body: SAPAvailabilityZoneDetailsRequest,
      options?: SAPVirtualInstancesGetAvailabilityZoneDetailsOptionalParams,
    ) =>
      sAPVirtualInstancesGetAvailabilityZoneDetails(
        context,
        location,
        body,
        options,
      ),
    getDiskConfigurations: (
      location: string,
      body: SAPDiskConfigurationsRequest,
      options?: SAPVirtualInstancesGetDiskConfigurationsOptionalParams,
    ) =>
      sAPVirtualInstancesGetDiskConfigurations(
        context,
        location,
        body,
        options,
      ),
    getSapSupportedSku: (
      location: string,
      body: SAPSupportedSkusRequest,
      options?: SAPVirtualInstancesGetSapSupportedSkuOptionalParams,
    ) =>
      sAPVirtualInstancesGetSapSupportedSku(context, location, body, options),
    getSizingRecommendations: (
      location: string,
      body: SAPSizingRecommendationRequest,
      options?: SAPVirtualInstancesGetSizingRecommendationsOptionalParams,
    ) =>
      sAPVirtualInstancesGetSizingRecommendations(
        context,
        location,
        body,
        options,
      ),
    stop: (
      resourceGroupName: string,
      sapVirtualInstanceName: string,
      body: StopRequest,
      options?: SAPVirtualInstancesStopOptionalParams,
    ) =>
      sAPVirtualInstancesStop(
        context,
        resourceGroupName,
        sapVirtualInstanceName,
        body,
        options,
      ),
    start: (
      resourceGroupName: string,
      sapVirtualInstanceName: string,
      body: StartRequest,
      options?: SAPVirtualInstancesStartOptionalParams,
    ) =>
      sAPVirtualInstancesStart(
        context,
        resourceGroupName,
        sapVirtualInstanceName,
        body,
        options,
      ),
    listBySubscription: (
      options?: SAPVirtualInstancesListBySubscriptionOptionalParams,
    ) => sAPVirtualInstancesListBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: SAPVirtualInstancesListByResourceGroupOptionalParams,
    ) =>
      sAPVirtualInstancesListByResourceGroup(
        context,
        resourceGroupName,
        options,
      ),
    delete: (
      resourceGroupName: string,
      sapVirtualInstanceName: string,
      options?: SAPVirtualInstancesDeleteOptionalParams,
    ) =>
      sAPVirtualInstancesDelete(
        context,
        resourceGroupName,
        sapVirtualInstanceName,
        options,
      ),
    update: (
      resourceGroupName: string,
      sapVirtualInstanceName: string,
      properties: UpdateSAPVirtualInstanceRequest,
      options?: SAPVirtualInstancesUpdateOptionalParams,
    ) =>
      sAPVirtualInstancesUpdate(
        context,
        resourceGroupName,
        sapVirtualInstanceName,
        properties,
        options,
      ),
    create: (
      resourceGroupName: string,
      sapVirtualInstanceName: string,
      resource: SAPVirtualInstance,
      options?: SAPVirtualInstancesCreateOptionalParams,
    ) =>
      sAPVirtualInstancesCreate(
        context,
        resourceGroupName,
        sapVirtualInstanceName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      sapVirtualInstanceName: string,
      options?: SAPVirtualInstancesGetOptionalParams,
    ) =>
      sAPVirtualInstancesGet(
        context,
        resourceGroupName,
        sapVirtualInstanceName,
        options,
      ),
  };
}

export function _getSAPVirtualInstancesOperations(
  context: WorkloadsContext,
): SAPVirtualInstancesOperations {
  return {
    ..._getSAPVirtualInstances(context),
  };
}
