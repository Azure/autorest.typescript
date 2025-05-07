// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext } from "../../api/azureVMwareSolutionAPIContext.js";
import { WorkloadNetworkDnsZone } from "../../models/models.js";
import {
  WorkloadNetworkDnsZonesDeleteOptionalParams,
  WorkloadNetworkDnsZonesUpdateOptionalParams,
  WorkloadNetworkDnsZonesCreateOptionalParams,
  WorkloadNetworkDnsZonesGetOptionalParams,
  WorkloadNetworkDnsZonesListOptionalParams,
} from "../../api/workloadNetworkDnsZones/options.js";
import {
  $delete,
  update,
  create,
  get,
  list,
} from "../../api/workloadNetworkDnsZones/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a WorkloadNetworkDnsZones operations. */
export interface WorkloadNetworkDnsZonesOperations {
  /** Delete a WorkloadNetworkDnsZone */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    dnsZoneId: string,
    privateCloudName: string,
    options?: WorkloadNetworkDnsZonesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a WorkloadNetworkDnsZone */
  update: (
    resourceGroupName: string,
    privateCloudName: string,
    dnsZoneId: string,
    workloadNetworkDnsZone: WorkloadNetworkDnsZone,
    options?: WorkloadNetworkDnsZonesUpdateOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkDnsZone>,
    WorkloadNetworkDnsZone
  >;
  /** Create a WorkloadNetworkDnsZone */
  create: (
    resourceGroupName: string,
    privateCloudName: string,
    dnsZoneId: string,
    workloadNetworkDnsZone: WorkloadNetworkDnsZone,
    options?: WorkloadNetworkDnsZonesCreateOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkDnsZone>,
    WorkloadNetworkDnsZone
  >;
  /** Get a WorkloadNetworkDnsZone */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    dnsZoneId: string,
    options?: WorkloadNetworkDnsZonesGetOptionalParams,
  ) => Promise<WorkloadNetworkDnsZone>;
  /** List WorkloadNetworkDnsZone resources by WorkloadNetwork */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworkDnsZonesListOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkDnsZone>;
}

function _getWorkloadNetworkDnsZones(context: AzureVMwareSolutionAPIContext) {
  return {
    delete: (
      resourceGroupName: string,
      dnsZoneId: string,
      privateCloudName: string,
      options?: WorkloadNetworkDnsZonesDeleteOptionalParams,
    ) =>
      $delete(context, resourceGroupName, dnsZoneId, privateCloudName, options),
    update: (
      resourceGroupName: string,
      privateCloudName: string,
      dnsZoneId: string,
      workloadNetworkDnsZone: WorkloadNetworkDnsZone,
      options?: WorkloadNetworkDnsZonesUpdateOptionalParams,
    ) =>
      update(
        context,
        resourceGroupName,
        privateCloudName,
        dnsZoneId,
        workloadNetworkDnsZone,
        options,
      ),
    create: (
      resourceGroupName: string,
      privateCloudName: string,
      dnsZoneId: string,
      workloadNetworkDnsZone: WorkloadNetworkDnsZone,
      options?: WorkloadNetworkDnsZonesCreateOptionalParams,
    ) =>
      create(
        context,
        resourceGroupName,
        privateCloudName,
        dnsZoneId,
        workloadNetworkDnsZone,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      dnsZoneId: string,
      options?: WorkloadNetworkDnsZonesGetOptionalParams,
    ) => get(context, resourceGroupName, privateCloudName, dnsZoneId, options),
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworkDnsZonesListOptionalParams,
    ) => list(context, resourceGroupName, privateCloudName, options),
  };
}

export function _getWorkloadNetworkDnsZonesOperations(
  context: AzureVMwareSolutionAPIContext,
): WorkloadNetworkDnsZonesOperations {
  return {
    ..._getWorkloadNetworkDnsZones(context),
  };
}
