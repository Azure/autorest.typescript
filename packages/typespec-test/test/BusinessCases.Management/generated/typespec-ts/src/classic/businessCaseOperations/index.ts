// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MigrateContext } from "../../api/migrateContext.js";
import {
  BusinessCase,
  CompareSummary,
  ReportDownloadUrl,
} from "../../models/models.js";
import {
  BusinessCaseOperationsGetReportDownloadUrlOptionalParams,
  BusinessCaseOperationsCompareSummaryOptionalParams,
  BusinessCaseOperationsDeleteOptionalParams,
  BusinessCaseOperationsCreateOptionalParams,
  BusinessCaseOperationsListByParentOptionalParams,
  BusinessCaseOperationsGetOptionalParams,
} from "../../api/businessCaseOperations/options.js";
import {
  getReportDownloadUrl,
  compareSummary,
  $delete,
  create,
  listByParent,
  get,
} from "../../api/businessCaseOperations/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a BusinessCaseOperations operations. */
export interface BusinessCaseOperationsOperations {
  /** Get the URL for downloading the business case in a report format. */
  getReportDownloadUrl: (
    resourceGroupName: string,
    projectName: string,
    businessCaseName: string,
    body: Record<string, any>,
    options?: BusinessCaseOperationsGetReportDownloadUrlOptionalParams,
  ) => PollerLike<OperationState<ReportDownloadUrl>, ReportDownloadUrl>;
  /** A long-running resource action. */
  compareSummary: (
    resourceGroupName: string,
    projectName: string,
    businessCaseName: string,
    body: Record<string, any>,
    options?: BusinessCaseOperationsCompareSummaryOptionalParams,
  ) => PollerLike<OperationState<CompareSummary>, CompareSummary>;
  /** Delete a BusinessCase */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    projectName: string,
    businessCaseName: string,
    options?: BusinessCaseOperationsDeleteOptionalParams,
  ) => Promise<void>;
  /** Create a BusinessCase */
  create: (
    resourceGroupName: string,
    projectName: string,
    businessCaseName: string,
    resource: BusinessCase,
    options?: BusinessCaseOperationsCreateOptionalParams,
  ) => PollerLike<OperationState<BusinessCase>, BusinessCase>;
  /** List BusinessCase resources by AssessmentProject */
  listByParent: (
    resourceGroupName: string,
    projectName: string,
    options?: BusinessCaseOperationsListByParentOptionalParams,
  ) => PagedAsyncIterableIterator<BusinessCase>;
  /** Get a BusinessCase */
  get: (
    resourceGroupName: string,
    projectName: string,
    businessCaseName: string,
    options?: BusinessCaseOperationsGetOptionalParams,
  ) => Promise<BusinessCase>;
}

function _getBusinessCaseOperations(context: MigrateContext) {
  return {
    getReportDownloadUrl: (
      resourceGroupName: string,
      projectName: string,
      businessCaseName: string,
      body: Record<string, any>,
      options?: BusinessCaseOperationsGetReportDownloadUrlOptionalParams,
    ) =>
      getReportDownloadUrl(
        context,
        resourceGroupName,
        projectName,
        businessCaseName,
        body,
        options,
      ),
    compareSummary: (
      resourceGroupName: string,
      projectName: string,
      businessCaseName: string,
      body: Record<string, any>,
      options?: BusinessCaseOperationsCompareSummaryOptionalParams,
    ) =>
      compareSummary(
        context,
        resourceGroupName,
        projectName,
        businessCaseName,
        body,
        options,
      ),
    delete: (
      resourceGroupName: string,
      projectName: string,
      businessCaseName: string,
      options?: BusinessCaseOperationsDeleteOptionalParams,
    ) =>
      $delete(
        context,
        resourceGroupName,
        projectName,
        businessCaseName,
        options,
      ),
    create: (
      resourceGroupName: string,
      projectName: string,
      businessCaseName: string,
      resource: BusinessCase,
      options?: BusinessCaseOperationsCreateOptionalParams,
    ) =>
      create(
        context,
        resourceGroupName,
        projectName,
        businessCaseName,
        resource,
        options,
      ),
    listByParent: (
      resourceGroupName: string,
      projectName: string,
      options?: BusinessCaseOperationsListByParentOptionalParams,
    ) => listByParent(context, resourceGroupName, projectName, options),
    get: (
      resourceGroupName: string,
      projectName: string,
      businessCaseName: string,
      options?: BusinessCaseOperationsGetOptionalParams,
    ) =>
      get(context, resourceGroupName, projectName, businessCaseName, options),
  };
}

export function _getBusinessCaseOperationsOperations(
  context: MigrateContext,
): BusinessCaseOperationsOperations {
  return {
    ..._getBusinessCaseOperations(context),
  };
}
