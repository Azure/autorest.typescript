// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MigrateContext } from "../../api/migrateContext.js";
import { AvsSummary } from "../../models/models.js";
import {
  BusinessCaseAvsSummaryOperationsListByParentOptionalParams,
  BusinessCaseAvsSummaryOperationsGetOptionalParams,
} from "../../api/businessCaseAvsSummaryOperations/options.js";
import {
  listByParent,
  get,
} from "../../api/businessCaseAvsSummaryOperations/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a BusinessCaseAvsSummaryOperations operations. */
export interface BusinessCaseAvsSummaryOperationsOperations {
  /** List AvsSummary resources by BusinessCase */
  listByParent: (
    resourceGroupName: string,
    projectName: string,
    businessCaseName: string,
    options?: BusinessCaseAvsSummaryOperationsListByParentOptionalParams,
  ) => PagedAsyncIterableIterator<AvsSummary>;
  /** Get a AvsSummary */
  get: (
    resourceGroupName: string,
    projectName: string,
    businessCaseName: string,
    avsSummaryName: string,
    options?: BusinessCaseAvsSummaryOperationsGetOptionalParams,
  ) => Promise<AvsSummary>;
}

function _getBusinessCaseAvsSummaryOperations(context: MigrateContext) {
  return {
    listByParent: (
      resourceGroupName: string,
      projectName: string,
      businessCaseName: string,
      options?: BusinessCaseAvsSummaryOperationsListByParentOptionalParams,
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
      avsSummaryName: string,
      options?: BusinessCaseAvsSummaryOperationsGetOptionalParams,
    ) =>
      get(
        context,
        resourceGroupName,
        projectName,
        businessCaseName,
        avsSummaryName,
        options,
      ),
  };
}

export function _getBusinessCaseAvsSummaryOperationsOperations(
  context: MigrateContext,
): BusinessCaseAvsSummaryOperationsOperations {
  return {
    ..._getBusinessCaseAvsSummaryOperations(context),
  };
}
