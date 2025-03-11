// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext } from "../../api/azureVMwareSolutionAPIContext.js";
import {
  WorkloadNetworkDnsServicesDeleteOptionalParams,
  WorkloadNetworkDnsServicesUpdateOptionalParams,
  WorkloadNetworkDnsServicesCreateOptionalParams,
  WorkloadNetworkDnsServicesGetOptionalParams,
  WorkloadNetworkDnsServicesListOptionalParams,
} from "../../api/options.js";
import {
  workloadNetworkDnsServicesDelete,
  workloadNetworkDnsServicesUpdate,
  workloadNetworkDnsServicesCreate,
  workloadNetworkDnsServicesGet,
  workloadNetworkDnsServicesList,
} from "../../api/workloadNetworkDnsServices/index.js";
import { WorkloadNetworkDnsService } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a WorkloadNetworkDnsServices operations. */
export interface WorkloadNetworkDnsServicesOperations {
  /** Delete a WorkloadNetworkDnsService */
  delete: (
    resourceGroupName: string,
    dnsServiceId: string,
    privateCloudName: string,
    options?: WorkloadNetworkDnsServicesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
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
  /** Get a WorkloadNetworkDnsService */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    dnsServiceId: string,
    options?: WorkloadNetworkDnsServicesGetOptionalParams,
  ) => Promise<WorkloadNetworkDnsService>;
  /** List WorkloadNetworkDnsService resources by WorkloadNetwork */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworkDnsServicesListOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkDnsService>;
}

function _getWorkloadNetworkDnsServices(
  context: AzureVMwareSolutionAPIContext,
) {
  return {
    delete: (
      resourceGroupName: string,
      dnsServiceId: string,
      privateCloudName: string,
      options?: WorkloadNetworkDnsServicesDeleteOptionalParams,
    ) =>
      workloadNetworkDnsServicesDelete(
        context,
        resourceGroupName,
        dnsServiceId,
        privateCloudName,
        options,
      ),
    update: (
      resourceGroupName: string,
      privateCloudName: string,
      dnsServiceId: string,
      workloadNetworkDnsService: WorkloadNetworkDnsService,
      options?: WorkloadNetworkDnsServicesUpdateOptionalParams,
    ) =>
      workloadNetworkDnsServicesUpdate(
        context,
        resourceGroupName,
        privateCloudName,
        dnsServiceId,
        workloadNetworkDnsService,
        options,
      ),
    create: (
      resourceGroupName: string,
      privateCloudName: string,
      dnsServiceId: string,
      workloadNetworkDnsService: WorkloadNetworkDnsService,
      options?: WorkloadNetworkDnsServicesCreateOptionalParams,
    ) =>
      workloadNetworkDnsServicesCreate(
        context,
        resourceGroupName,
        privateCloudName,
        dnsServiceId,
        workloadNetworkDnsService,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      dnsServiceId: string,
      options?: WorkloadNetworkDnsServicesGetOptionalParams,
    ) =>
      workloadNetworkDnsServicesGet(
        context,
        resourceGroupName,
        privateCloudName,
        dnsServiceId,
        options,
      ),
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworkDnsServicesListOptionalParams,
    ) =>
      workloadNetworkDnsServicesList(
        context,
        resourceGroupName,
        privateCloudName,
        options,
      ),
  };
}

export function _getWorkloadNetworkDnsServicesOperations(
  context: AzureVMwareSolutionAPIContext,
): WorkloadNetworkDnsServicesOperations {
  return {
    ..._getWorkloadNetworkDnsServices(context),
  };
}
