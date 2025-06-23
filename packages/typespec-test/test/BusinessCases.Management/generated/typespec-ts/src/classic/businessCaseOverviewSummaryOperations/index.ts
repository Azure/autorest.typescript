// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MigrateContext } from "../../api/migrateContext.js";
import { OverviewSummary } from "../../models/models.js";
import {
  BusinessCaseOverviewSummaryOperationsListByParentOptionalParams,
  BusinessCaseOverviewSummaryOperationsGetOptionalParams,
} from "../../api/businessCaseOverviewSummaryOperations/options.js";
import {
  listByParent,
  get,
} from "../../api/businessCaseOverviewSummaryOperations/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a BusinessCaseOverviewSummaryOperations operations. */
export interface BusinessCaseOverviewSummaryOperationsOperations {
  /** List OverviewSummary resources by BusinessCase */
  listByParent: (
    resourceGroupName: string,
    projectName: string,
    businessCaseName: string,
    options?: BusinessCaseOverviewSummaryOperationsListByParentOptionalParams,
  ) => PagedAsyncIterableIterator<OverviewSummary>;
  /** Get a OverviewSummary */
  get: (
    resourceGroupName: string,
    projectName: string,
    businessCaseName: string,
    overviewSummaryName: string,
    options?: BusinessCaseOverviewSummaryOperationsGetOptionalParams,
  ) => Promise<OverviewSummary>;
}

function _getBusinessCaseOverviewSummaryOperations(context: MigrateContext) {
  return {
    listByParent: (
      resourceGroupName: string,
      projectName: string,
      businessCaseName: string,
      options?: BusinessCaseOverviewSummaryOperationsListByParentOptionalParams,
    ) =>
      listByParent(
        context,
        resourceGroupName,
        projectName,
        businessCaseName,
        options,
      ),
    get: (
      resourceGroupName: string,
      projectName: string,
      businessCaseName: string,
      overviewSummaryName: string,
      options?: BusinessCaseOverviewSummaryOperationsGetOptionalParams,
    ) =>
      get(
        context,
        resourceGroupName,
        projectName,
        businessCaseName,
        overviewSummaryName,
        options,
      ),
  };
}

export function _getBusinessCaseOverviewSummaryOperationsOperations(
  context: MigrateContext,
): BusinessCaseOverviewSummaryOperationsOperations {
  return {
    ..._getBusinessCaseOverviewSummaryOperations(context),
  };
}
