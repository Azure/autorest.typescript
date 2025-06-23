// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MigrateContext } from "../../api/migrateContext.js";
import { PaasSummary } from "../../models/models.js";
import {
  BusinessCasePaasSummaryOperationsListByParentOptionalParams,
  BusinessCasePaasSummaryOperationsGetOptionalParams,
} from "../../api/businessCasePaasSummaryOperations/options.js";
import {
  listByParent,
  get,
} from "../../api/businessCasePaasSummaryOperations/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a BusinessCasePaasSummaryOperations operations. */
export interface BusinessCasePaasSummaryOperationsOperations {
  /** List PaasSummary resources by BusinessCase */
  listByParent: (
    resourceGroupName: string,
    projectName: string,
    businessCaseName: string,
    options?: BusinessCasePaasSummaryOperationsListByParentOptionalParams,
  ) => PagedAsyncIterableIterator<PaasSummary>;
  /** Get a PaasSummary */
  get: (
    resourceGroupName: string,
    projectName: string,
    businessCaseName: string,
    paasSummaryName: string,
    options?: BusinessCasePaasSummaryOperationsGetOptionalParams,
  ) => Promise<PaasSummary>;
}

function _getBusinessCasePaasSummaryOperations(context: MigrateContext) {
  return {
    listByParent: (
      resourceGroupName: string,
      projectName: string,
      businessCaseName: string,
      options?: BusinessCasePaasSummaryOperationsListByParentOptionalParams,
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
      paasSummaryName: string,
      options?: BusinessCasePaasSummaryOperationsGetOptionalParams,
    ) =>
      get(
        context,
        resourceGroupName,
        projectName,
        businessCaseName,
        paasSummaryName,
        options,
      ),
  };
}

export function _getBusinessCasePaasSummaryOperationsOperations(
  context: MigrateContext,
): BusinessCasePaasSummaryOperationsOperations {
  return {
    ..._getBusinessCasePaasSummaryOperations(context),
  };
}
