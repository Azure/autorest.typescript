// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsContext } from "../../api/workloadsContext.js";
import {
  sapDatabaseInstancesStop,
  sapDatabaseInstancesStart,
  sapDatabaseInstancesList,
  sapDatabaseInstancesDelete,
  sapDatabaseInstancesUpdate,
  sapDatabaseInstancesCreate,
  sapDatabaseInstancesGet,
  SAPDatabaseInstancesStopOptionalParams,
  SAPDatabaseInstancesStartOptionalParams,
  SAPDatabaseInstancesListOptionalParams,
  SAPDatabaseInstancesDeleteOptionalParams,
  SAPDatabaseInstancesUpdateOptionalParams,
  SAPDatabaseInstancesCreateOptionalParams,
  SAPDatabaseInstancesGetOptionalParams,
} from "../../api/sapDatabaseInstances/index.js";
import {
  OperationStatusResult,
  SAPDatabaseInstance,
  UpdateSAPDatabaseInstanceRequest,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a SAPDatabaseInstances operations. */
export interface SAPDatabaseInstancesOperations {
  /** Stops the database instance of the SAP system. */
  stop: (
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    databaseInstanceName: string,
    options?: SAPDatabaseInstancesStopOptionalParams,
  ) => PollerLike<OperationState<OperationStatusResult>, OperationStatusResult>;
  /** Starts the database instance of the SAP system. */
  start: (
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    databaseInstanceName: string,
    options?: SAPDatabaseInstancesStartOptionalParams,
  ) => PollerLike<OperationState<OperationStatusResult>, OperationStatusResult>;
  /** Lists the Database resources associated with a Virtual Instance for SAP solutions resource. */
  list: (
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    options?: SAPDatabaseInstancesListOptionalParams,
  ) => PagedAsyncIterableIterator<SAPDatabaseInstance>;
  /** Deletes the Database resource corresponding to a Virtual Instance for SAP solutions resource. &lt;br&gt;&lt;br&gt;This will be used by service only. Delete by end user will return a Bad Request error. */
  delete: (
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    databaseInstanceName: string,
    options?: SAPDatabaseInstancesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Updates the Database resource. */
  update: (
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    databaseInstanceName: string,
    properties: UpdateSAPDatabaseInstanceRequest,
    options?: SAPDatabaseInstancesUpdateOptionalParams,
  ) => Promise<SAPDatabaseInstance>;
  /** Creates the Database resource corresponding to the Virtual Instance for SAP solutions resource. &lt;br&gt;&lt;br&gt;This will be used by service only. PUT by end user will return a Bad Request error. */
  create: (
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    databaseInstanceName: string,
    resource: SAPDatabaseInstance,
    options?: SAPDatabaseInstancesCreateOptionalParams,
  ) => PollerLike<OperationState<SAPDatabaseInstance>, SAPDatabaseInstance>;
  /** Gets the SAP Database Instance resource. */
  get: (
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    databaseInstanceName: string,
    options?: SAPDatabaseInstancesGetOptionalParams,
  ) => Promise<SAPDatabaseInstance>;
}

function _getSAPDatabaseInstances(context: WorkloadsContext) {
  return {
    stop: (
      resourceGroupName: string,
      sapVirtualInstanceName: string,
      databaseInstanceName: string,
      options?: SAPDatabaseInstancesStopOptionalParams,
    ) =>
      sapDatabaseInstancesStop(
        context,
        resourceGroupName,
        sapVirtualInstanceName,
        databaseInstanceName,
        options,
      ),
    start: (
      resourceGroupName: string,
      sapVirtualInstanceName: string,
      databaseInstanceName: string,
      options?: SAPDatabaseInstancesStartOptionalParams,
    ) =>
      sapDatabaseInstancesStart(
        context,
        resourceGroupName,
        sapVirtualInstanceName,
        databaseInstanceName,
        options,
      ),
    list: (
      resourceGroupName: string,
      sapVirtualInstanceName: string,
      options?: SAPDatabaseInstancesListOptionalParams,
    ) =>
      sapDatabaseInstancesList(
        context,
        resourceGroupName,
        sapVirtualInstanceName,
        options,
      ),
    delete: (
      resourceGroupName: string,
      sapVirtualInstanceName: string,
      databaseInstanceName: string,
      options?: SAPDatabaseInstancesDeleteOptionalParams,
    ) =>
      sapDatabaseInstancesDelete(
        context,
        resourceGroupName,
        sapVirtualInstanceName,
        databaseInstanceName,
        options,
      ),
    update: (
      resourceGroupName: string,
      sapVirtualInstanceName: string,
      databaseInstanceName: string,
      properties: UpdateSAPDatabaseInstanceRequest,
      options?: SAPDatabaseInstancesUpdateOptionalParams,
    ) =>
      sapDatabaseInstancesUpdate(
        context,
        resourceGroupName,
        sapVirtualInstanceName,
        databaseInstanceName,
        properties,
        options,
      ),
    create: (
      resourceGroupName: string,
      sapVirtualInstanceName: string,
      databaseInstanceName: string,
      resource: SAPDatabaseInstance,
      options?: SAPDatabaseInstancesCreateOptionalParams,
    ) =>
      sapDatabaseInstancesCreate(
        context,
        resourceGroupName,
        sapVirtualInstanceName,
        databaseInstanceName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      sapVirtualInstanceName: string,
      databaseInstanceName: string,
      options?: SAPDatabaseInstancesGetOptionalParams,
    ) =>
      sapDatabaseInstancesGet(
        context,
        resourceGroupName,
        sapVirtualInstanceName,
        databaseInstanceName,
        options,
      ),
  };
}

export function _getSAPDatabaseInstancesOperations(
  context: WorkloadsContext,
): SAPDatabaseInstancesOperations {
  return {
    ..._getSAPDatabaseInstances(context),
  };
}
