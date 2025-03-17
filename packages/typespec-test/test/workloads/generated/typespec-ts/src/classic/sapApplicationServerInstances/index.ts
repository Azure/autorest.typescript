// Licensed under the MIT License.

import { WorkloadsContext } from "../../api/workloadsContext.js";
import {
  sAPApplicationServerInstancesStop,
  sAPApplicationServerInstancesStart,
  sAPApplicationServerInstancesList,
  sAPApplicationServerInstancesDelete,
  sAPApplicationServerInstancesUpdate,
  sAPApplicationServerInstancesCreate,
  sAPApplicationServerInstancesGet,
  SAPApplicationServerInstancesStopOptionalParams,
  SAPApplicationServerInstancesStartOptionalParams,
  SAPApplicationServerInstancesListOptionalParams,
  SAPApplicationServerInstancesDeleteOptionalParams,
  SAPApplicationServerInstancesUpdateOptionalParams,
  SAPApplicationServerInstancesCreateOptionalParams,
  SAPApplicationServerInstancesGetOptionalParams,
} from "../../api/sapApplicationServerInstances/index.js";
import {
  SAPApplicationServerInstance,
  UpdateSAPApplicationInstanceRequest,
  OperationStatusResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a SAPApplicationServerInstances operations. */
export interface SAPApplicationServerInstancesOperations {
  /** Stops the SAP Application Server Instance. */
  stop: (
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    applicationInstanceName: string,
    options?: SAPApplicationServerInstancesStopOptionalParams,
  ) => __PLACEHOLDER_o169__<
    __PLACEHOLDER_o170__<OperationStatusResult>,
    OperationStatusResult
  >;
  /** Starts the SAP Application Server Instance. */
  start: (
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    applicationInstanceName: string,
    options?: SAPApplicationServerInstancesStartOptionalParams,
  ) => __PLACEHOLDER_o169__<
    __PLACEHOLDER_o170__<OperationStatusResult>,
    OperationStatusResult
  >;
  /** Lists the SAP Application Server Instance resources for a given Virtual Instance for SAP solutions resource. */
  list: (
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    options?: SAPApplicationServerInstancesListOptionalParams,
  ) => PagedAsyncIterableIterator<SAPApplicationServerInstance>;
  /** Deletes the SAP Application Server Instance resource. &lt;br&gt;&lt;br&gt;This operation will be used by service only. Delete by end user will return a Bad Request error. */
  delete: (
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    applicationInstanceName: string,
    options?: SAPApplicationServerInstancesDeleteOptionalParams,
  ) => __PLACEHOLDER_o169__<__PLACEHOLDER_o170__<void>, void>;
  /** Puts the SAP Application Server Instance resource. */
  update: (
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    applicationInstanceName: string,
    properties: UpdateSAPApplicationInstanceRequest,
    options?: SAPApplicationServerInstancesUpdateOptionalParams,
  ) => Promise<SAPApplicationServerInstance>;
  /** Puts the SAP Application Server Instance resource. &lt;br&gt;&lt;br&gt;This will be used by service only. PUT by end user will return a Bad Request error. */
  create: (
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    applicationInstanceName: string,
    resource: SAPApplicationServerInstance,
    options?: SAPApplicationServerInstancesCreateOptionalParams,
  ) => __PLACEHOLDER_o169__<
    __PLACEHOLDER_o170__<SAPApplicationServerInstance>,
    SAPApplicationServerInstance
  >;
  /** Gets the SAP Application Server Instance corresponding to the Virtual Instance for SAP solutions resource. */
  get: (
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    applicationInstanceName: string,
    options?: SAPApplicationServerInstancesGetOptionalParams,
  ) => Promise<SAPApplicationServerInstance>;
}

function _getSAPApplicationServerInstances(context: WorkloadsContext) {
  return {
    stop: (
      resourceGroupName: string,
      sapVirtualInstanceName: string,
      applicationInstanceName: string,
      options?: SAPApplicationServerInstancesStopOptionalParams,
    ) =>
      sAPApplicationServerInstancesStop(
        context,
        resourceGroupName,
        sapVirtualInstanceName,
        applicationInstanceName,
        options,
      ),
    start: (
      resourceGroupName: string,
      sapVirtualInstanceName: string,
      applicationInstanceName: string,
      options?: SAPApplicationServerInstancesStartOptionalParams,
    ) =>
      sAPApplicationServerInstancesStart(
        context,
        resourceGroupName,
        sapVirtualInstanceName,
        applicationInstanceName,
        options,
      ),
    list: (
      resourceGroupName: string,
      sapVirtualInstanceName: string,
      options?: SAPApplicationServerInstancesListOptionalParams,
    ) =>
      sAPApplicationServerInstancesList(
        context,
        resourceGroupName,
        sapVirtualInstanceName,
        options,
      ),
    delete: (
      resourceGroupName: string,
      sapVirtualInstanceName: string,
      applicationInstanceName: string,
      options?: SAPApplicationServerInstancesDeleteOptionalParams,
    ) =>
      sAPApplicationServerInstancesDelete(
        context,
        resourceGroupName,
        sapVirtualInstanceName,
        applicationInstanceName,
        options,
      ),
    update: (
      resourceGroupName: string,
      sapVirtualInstanceName: string,
      applicationInstanceName: string,
      properties: UpdateSAPApplicationInstanceRequest,
      options?: SAPApplicationServerInstancesUpdateOptionalParams,
    ) =>
      sAPApplicationServerInstancesUpdate(
        context,
        resourceGroupName,
        sapVirtualInstanceName,
        applicationInstanceName,
        properties,
        options,
      ),
    create: (
      resourceGroupName: string,
      sapVirtualInstanceName: string,
      applicationInstanceName: string,
      resource: SAPApplicationServerInstance,
      options?: SAPApplicationServerInstancesCreateOptionalParams,
    ) =>
      sAPApplicationServerInstancesCreate(
        context,
        resourceGroupName,
        sapVirtualInstanceName,
        applicationInstanceName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      sapVirtualInstanceName: string,
      applicationInstanceName: string,
      options?: SAPApplicationServerInstancesGetOptionalParams,
    ) =>
      sAPApplicationServerInstancesGet(
        context,
        resourceGroupName,
        sapVirtualInstanceName,
        applicationInstanceName,
        options,
      ),
  };
}

export function _getSAPApplicationServerInstancesOperations(
  context: WorkloadsContext,
): SAPApplicationServerInstancesOperations {
  return {
    ..._getSAPApplicationServerInstances(context),
  };
}
