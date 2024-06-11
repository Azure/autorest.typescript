// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AVSContext } from "../../api/aVSContext.js";
import {
  WorkloadNetworkDnsZone,
  WorkloadNetworkDnsZoneUpdate,
} from "../../models/models.js";
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

export interface WorkloadNetworkDnsZonesOperations {
  listByWorkloadNetwork: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworkDnsZonesListByWorkloadNetworkOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkDnsZone>;
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    dnsZoneId: string,
    options?: WorkloadNetworkDnsZonesGetOptionalParams,
  ) => Promise<WorkloadNetworkDnsZone>;
  create: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    dnsZoneId: string,
    workloadNetworkDnsZone: WorkloadNetworkDnsZone,
    options?: WorkloadNetworkDnsZonesCreateOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkDnsZone>,
    WorkloadNetworkDnsZone
  >;
  update: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    dnsZoneId: string,
    workloadNetworkDnsZone: WorkloadNetworkDnsZoneUpdate,
    options?: WorkloadNetworkDnsZonesUpdateOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkDnsZone>,
    WorkloadNetworkDnsZone
  >;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    dnsZoneId: string,
    privateCloudName: string,
    options?: WorkloadNetworkDnsZonesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getWorkloadNetworkDnsZones(context: AVSContext) {
  return {
    listByWorkloadNetwork: (
      subscriptionId: string,
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
      subscriptionId: string,
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
      subscriptionId: string,
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
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      dnsZoneId: string,
      workloadNetworkDnsZone: WorkloadNetworkDnsZoneUpdate,
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
      subscriptionId: string,
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
): WorkloadNetworkDnsZonesOperations {
  return {
    ...getWorkloadNetworkDnsZones(context),
  };
}
