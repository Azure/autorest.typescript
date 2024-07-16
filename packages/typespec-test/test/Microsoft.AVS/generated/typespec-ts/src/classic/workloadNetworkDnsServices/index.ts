// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AVSContext } from "../../api/aVSContext.js";
import { WorkloadNetworkDnsService } from "../../models/models.js";
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

/** Interface representing a WorkloadNetworkDnsServices operations. */
export interface WorkloadNetworkDnsServicesOperations {
  /** List WorkloadNetworkDnsService resources by WorkloadNetwork */
  listByWorkloadNetwork: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworkDnsServicesListByWorkloadNetworkOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkDnsService>;
  /** Get a WorkloadNetworkDnsService */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    dnsServiceId: string,
    options?: WorkloadNetworkDnsServicesGetOptionalParams,
  ) => Promise<WorkloadNetworkDnsService>;
  /** Create a WorkloadNetworkDnsService */
  create: (
    resourceGroupName: string,
    privateCloudName: string,
    dnsServiceId: string,
    workloadNetworkDnsService: WorkloadNetworkDnsService,
    options?: WorkloadNetworkDnsServicesCreateOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkDnsService>,
    WorkloadNetworkDnsService
  >;
  /** Update a WorkloadNetworkDnsService */
  update: (
    resourceGroupName: string,
    privateCloudName: string,
    dnsServiceId: string,
    workloadNetworkDnsService: WorkloadNetworkDnsService,
    options?: WorkloadNetworkDnsServicesUpdateOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkDnsService>,
    WorkloadNetworkDnsService
  >;
  /** Delete a WorkloadNetworkDnsService */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    dnsServiceId: string,
    privateCloudName: string,
    options?: WorkloadNetworkDnsServicesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getWorkloadNetworkDnsServices(
  context: AVSContext,
  subscriptionId: string,
) {
  return {
    listByWorkloadNetwork: (
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
      resourceGroupName: string,
      privateCloudName: string,
      dnsServiceId: string,
      workloadNetworkDnsService: WorkloadNetworkDnsService,
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
  subscriptionId: string,
): WorkloadNetworkDnsServicesOperations {
  return {
    ...getWorkloadNetworkDnsServices(context, subscriptionId),
  };
}
