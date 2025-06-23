// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MigrateContext } from "../../api/migrateContext.js";
import { EvaluatedSqlEntity } from "../../models/models.js";
import {
  EvaluatedSqlEntitiesOperationsListByParentOptionalParams,
  EvaluatedSqlEntitiesOperationsGetOptionalParams,
} from "../../api/evaluatedSqlEntitiesOperations/options.js";
import {
  listByParent,
  get,
} from "../../api/evaluatedSqlEntitiesOperations/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a EvaluatedSqlEntitiesOperations operations. */
export interface EvaluatedSqlEntitiesOperationsOperations {
  /** List EvaluatedSqlEntity resources by BusinessCase */
  listByParent: (
    resourceGroupName: string,
    projectName: string,
    businessCaseName: string,
    options?: EvaluatedSqlEntitiesOperationsListByParentOptionalParams,
  ) => PagedAsyncIterableIterator<EvaluatedSqlEntity>;
  /** Get a EvaluatedSqlEntity */
  get: (
    resourceGroupName: string,
    projectName: string,
    businessCaseName: string,
    evaluatedSqlEntityName: string,
    options?: EvaluatedSqlEntitiesOperationsGetOptionalParams,
  ) => Promise<EvaluatedSqlEntity>;
}

function _getEvaluatedSqlEntitiesOperations(context: MigrateContext) {
  return {
    listByParent: (
      resourceGroupName: string,
      projectName: string,
      businessCaseName: string,
      options?: EvaluatedSqlEntitiesOperationsListByParentOptionalParams,
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
      evaluatedSqlEntityName: string,
      options?: EvaluatedSqlEntitiesOperationsGetOptionalParams,
    ) =>
      get(
        context,
        resourceGroupName,
        projectName,
        businessCaseName,
        evaluatedSqlEntityName,
        options,
      ),
  };
}

export function _getEvaluatedSqlEntitiesOperationsOperations(
  context: MigrateContext,
): EvaluatedSqlEntitiesOperationsOperations {
  return {
    ..._getEvaluatedSqlEntitiesOperations(context),
  };
}
