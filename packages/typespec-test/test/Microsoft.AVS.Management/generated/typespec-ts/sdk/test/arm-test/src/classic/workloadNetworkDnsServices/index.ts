// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext } from "../../api/azureVMwareSolutionAPIContext.js";
import { WorkloadNetworkDnsService } from "../../models/models.js";
import {
  WorkloadNetworkDnsServicesDeleteOptionalParams,
  WorkloadNetworkDnsServicesUpdateOptionalParams,
  WorkloadNetworkDnsServicesCreateOptionalParams,
  WorkloadNetworkDnsServicesGetOptionalParams,
  WorkloadNetworkDnsServicesListOptionalParams,
} from "../../api/workloadNetworkDnsServices/options.js";
import {
  $delete,
  update,
  create,
  get,
  list,
} from "../../api/workloadNetworkDnsServices/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a WorkloadNetworkDnsServices operations. */
export interface WorkloadNetworkDnsServicesOperations {
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
      $delete(
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
      update(
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
      create(
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
      get(context, resourceGroupName, privateCloudName, dnsServiceId, options),
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworkDnsServicesListOptionalParams,
    ) => list(context, resourceGroupName, privateCloudName, options),
  };
}

export function _getWorkloadNetworkDnsServicesOperations(
  context: AzureVMwareSolutionAPIContext,
): WorkloadNetworkDnsServicesOperations {
  return {
    ..._getWorkloadNetworkDnsServices(context),
  };
}
