// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MigrateContext } from "../../api/migrateContext.js";
import { EvaluatedWebApp } from "../../models/models.js";
import {
  EvaluatedWebAppsOperationsListByParentOptionalParams,
  EvaluatedWebAppsOperationsGetOptionalParams,
} from "../../api/evaluatedWebAppsOperations/options.js";
import {
  listByParent,
  get,
} from "../../api/evaluatedWebAppsOperations/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a EvaluatedWebAppsOperations operations. */
export interface EvaluatedWebAppsOperationsOperations {
  /** List EvaluatedWebApp resources by BusinessCase */
  listByParent: (
    resourceGroupName: string,
    projectName: string,
    businessCaseName: string,
    options?: EvaluatedWebAppsOperationsListByParentOptionalParams,
  ) => PagedAsyncIterableIterator<EvaluatedWebApp>;
  /** Get a EvaluatedWebApp */
  get: (
    resourceGroupName: string,
    projectName: string,
    businessCaseName: string,
    evaluatedWebAppName: string,
    options?: EvaluatedWebAppsOperationsGetOptionalParams,
  ) => Promise<EvaluatedWebApp>;
}

function _getEvaluatedWebAppsOperations(context: MigrateContext) {
  return {
    listByParent: (
      resourceGroupName: string,
      projectName: string,
      businessCaseName: string,
      options?: EvaluatedWebAppsOperationsListByParentOptionalParams,
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
      evaluatedWebAppName: string,
      options?: EvaluatedWebAppsOperationsGetOptionalParams,
    ) =>
      get(
        context,
        resourceGroupName,
        projectName,
        businessCaseName,
        evaluatedWebAppName,
        options,
      ),
  };
}

export function _getEvaluatedWebAppsOperationsOperations(
  context: MigrateContext,
): EvaluatedWebAppsOperationsOperations {
  return {
    ..._getEvaluatedWebAppsOperations(context),
  };
}
