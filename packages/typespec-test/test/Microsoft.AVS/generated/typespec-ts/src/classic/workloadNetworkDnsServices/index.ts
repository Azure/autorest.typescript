// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AVSContext } from "../../api/aVSContext.js";
import {
  WorkloadNetworkDnsService,
  WorkloadNetworkDnsServiceUpdate,
} from "../../models/models.js";
import {
  listByWorkloadNetwork,
  get,
  create,
  update,
  $delete,
} from "../../api/workloadNetworkDnsServices/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  WorkloadNetworkDnsServicesListByWorkloadNetworkOptionalParams,
  WorkloadNetworkDnsServicesGetOptionalParams,
  WorkloadNetworkDnsServicesCreateOptionalParams,
  WorkloadNetworkDnsServicesUpdateOptionalParams,
  WorkloadNetworkDnsServicesDeleteOptionalParams,
} from "../../models/options.js";

export interface WorkloadNetworkDnsServicesOperations {
  listByWorkloadNetwork: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworkDnsServicesListByWorkloadNetworkOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkDnsService>;
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    dnsServiceId: string,
    options?: WorkloadNetworkDnsServicesGetOptionalParams,
  ) => Promise<WorkloadNetworkDnsService>;
  create: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    dnsServiceId: string,
    workloadNetworkDnsService: WorkloadNetworkDnsService,
    options?: WorkloadNetworkDnsServicesCreateOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkDnsService>,
    WorkloadNetworkDnsService
  >;
  update: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    dnsServiceId: string,
    workloadNetworkDnsService: WorkloadNetworkDnsServiceUpdate,
    options?: WorkloadNetworkDnsServicesUpdateOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkDnsService>,
    WorkloadNetworkDnsService
  >;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    dnsServiceId: string,
    privateCloudName: string,
    options?: WorkloadNetworkDnsServicesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getWorkloadNetworkDnsServices(context: AVSContext) {
  return {
    listByWorkloadNetwork: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworkDnsServicesListByWorkloadNetworkOptionalParams,
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
      dnsServiceId: string,
      options?: WorkloadNetworkDnsServicesGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        dnsServiceId,
        options,
      ),
    create: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      dnsServiceId: string,
      workloadNetworkDnsService: WorkloadNetworkDnsService,
      options?: WorkloadNetworkDnsServicesCreateOptionalParams,
    ) =>
      create(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        dnsServiceId,
        workloadNetworkDnsService,
        options,
      ),
    update: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      dnsServiceId: string,
      workloadNetworkDnsService: WorkloadNetworkDnsServiceUpdate,
      options?: WorkloadNetworkDnsServicesUpdateOptionalParams,
    ) =>
      update(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        dnsServiceId,
        workloadNetworkDnsService,
        options,
      ),
    delete: (
      subscriptionId: string,
      resourceGroupName: string,
      dnsServiceId: string,
      privateCloudName: string,
      options?: WorkloadNetworkDnsServicesDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        dnsServiceId,
        privateCloudName,
        options,
      ),
  };
}

export function getWorkloadNetworkDnsServicesOperations(
  context: AVSContext,
): WorkloadNetworkDnsServicesOperations {
  return {
    ...getWorkloadNetworkDnsServices(context),
  };
}
