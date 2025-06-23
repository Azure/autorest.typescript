// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MigrateContext } from "../../api/migrateContext.js";
import { IaasSummary } from "../../models/models.js";
import {
  BusinessCaseIaasSummaryOperationsListByParentOptionalParams,
  BusinessCaseIaasSummaryOperationsGetOptionalParams,
} from "../../api/businessCaseIaasSummaryOperations/options.js";
import {
  listByParent,
  get,
} from "../../api/businessCaseIaasSummaryOperations/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a BusinessCaseIaasSummaryOperations operations. */
export interface BusinessCaseIaasSummaryOperationsOperations {
  /** List IaasSummary resources by BusinessCase */
  listByParent: (
    resourceGroupName: string,
    projectName: string,
    businessCaseName: string,
    options?: BusinessCaseIaasSummaryOperationsListByParentOptionalParams,
  ) => PagedAsyncIterableIterator<IaasSummary>;
  /** Get a IaasSummary */
  get: (
    resourceGroupName: string,
    projectName: string,
    businessCaseName: string,
    iaasSummaryName: string,
    options?: BusinessCaseIaasSummaryOperationsGetOptionalParams,
  ) => Promise<IaasSummary>;
}

function _getBusinessCaseIaasSummaryOperations(context: MigrateContext) {
  return {
    listByParent: (
      resourceGroupName: string,
      projectName: string,
      businessCaseName: string,
      options?: BusinessCaseIaasSummaryOperationsListByParentOptionalParams,
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
      iaasSummaryName: string,
      options?: BusinessCaseIaasSummaryOperationsGetOptionalParams,
    ) =>
      get(
        context,
        resourceGroupName,
        projectName,
        businessCaseName,
        iaasSummaryName,
        options,
      ),
  };
}

export function _getBusinessCaseIaasSummaryOperationsOperations(
  context: MigrateContext,
): BusinessCaseIaasSummaryOperationsOperations {
  return {
    ..._getBusinessCaseIaasSummaryOperations(context),
  };
}
