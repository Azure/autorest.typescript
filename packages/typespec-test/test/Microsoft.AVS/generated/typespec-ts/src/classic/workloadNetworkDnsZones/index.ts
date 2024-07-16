// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AVSContext } from "../../api/aVSContext.js";
import { WorkloadNetworkDnsZone } from "../../models/models.js";
import {
  listByWorkloadNetwork,
  get,
  create,
  update,
  $delete,
} from "../../api/workloadNetworkDnsZones/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  WorkloadNetworkDnsZonesListByWorkloadNetworkOptionalParams,
  WorkloadNetworkDnsZonesGetOptionalParams,
  WorkloadNetworkDnsZonesCreateOptionalParams,
  WorkloadNetworkDnsZonesUpdateOptionalParams,
  WorkloadNetworkDnsZonesDeleteOptionalParams,
} from "../../models/options.js";

/** Interface representing a WorkloadNetworkDnsZones operations. */
export interface WorkloadNetworkDnsZonesOperations {
  /** List WorkloadNetworkDnsZone resources by WorkloadNetwork */
  listByWorkloadNetwork: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworkDnsZonesListByWorkloadNetworkOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkDnsZone>;
  /** Get a WorkloadNetworkDnsZone */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    dnsZoneId: string,
    options?: WorkloadNetworkDnsZonesGetOptionalParams,
  ) => Promise<WorkloadNetworkDnsZone>;
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
}

export function getWorkloadNetworkDnsZones(
  context: AVSContext,
  subscriptionId: string,
) {
  return {
    listByWorkloadNetwork: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworkDnsZonesListByWorkloadNetworkOptionalParams,
    ) =>
      listByWorkloadNetwork(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      dnsZoneId: string,
      options?: WorkloadNetworkDnsZonesGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        dnsZoneId,
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
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        dnsZoneId,
        workloadNetworkDnsZone,
        options,
      ),
    update: (
      resourceGroupName: string,
      privateCloudName: string,
      dnsZoneId: string,
      workloadNetworkDnsZone: WorkloadNetworkDnsZone,
      options?: WorkloadNetworkDnsZonesUpdateOptionalParams,
    ) =>
      update(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        dnsZoneId,
        workloadNetworkDnsZone,
        options,
      ),
    delete: (
      resourceGroupName: string,
      dnsZoneId: string,
      privateCloudName: string,
      options?: WorkloadNetworkDnsZonesDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        dnsZoneId,
        privateCloudName,
        options,
      ),
  };
}

export function getWorkloadNetworkDnsZonesOperations(
  context: AVSContext,
  subscriptionId: string,
): WorkloadNetworkDnsZonesOperations {
  return {
    ...getWorkloadNetworkDnsZones(context, subscriptionId),
  };
}
