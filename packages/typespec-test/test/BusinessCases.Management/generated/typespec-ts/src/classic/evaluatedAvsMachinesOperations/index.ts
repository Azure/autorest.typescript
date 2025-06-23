// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MigrateContext } from "../../api/migrateContext.js";
import { EvaluatedAvsMachine } from "../../models/models.js";
import {
  EvaluatedAvsMachinesOperationsListByParentOptionalParams,
  EvaluatedAvsMachinesOperationsGetOptionalParams,
} from "../../api/evaluatedAvsMachinesOperations/options.js";
import {
  listByParent,
  get,
} from "../../api/evaluatedAvsMachinesOperations/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a EvaluatedAvsMachinesOperations operations. */
export interface EvaluatedAvsMachinesOperationsOperations {
  /** List EvaluatedAvsMachine resources by BusinessCase */
  listByParent: (
    resourceGroupName: string,
    projectName: string,
    businessCaseName: string,
    options?: EvaluatedAvsMachinesOperationsListByParentOptionalParams,
  ) => PagedAsyncIterableIterator<EvaluatedAvsMachine>;
  /** Get a EvaluatedAvsMachine */
  get: (
    resourceGroupName: string,
    projectName: string,
    businessCaseName: string,
    evaluatedAvsMachineName: string,
    options?: EvaluatedAvsMachinesOperationsGetOptionalParams,
  ) => Promise<EvaluatedAvsMachine>;
}

function _getEvaluatedAvsMachinesOperations(context: MigrateContext) {
  return {
    listByParent: (
      resourceGroupName: string,
      projectName: string,
      businessCaseName: string,
      options?: EvaluatedAvsMachinesOperationsListByParentOptionalParams,
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
      evaluatedAvsMachineName: string,
      options?: EvaluatedAvsMachinesOperationsGetOptionalParams,
    ) =>
      get(
        context,
        resourceGroupName,
        projectName,
        businessCaseName,
        evaluatedAvsMachineName,
        options,
      ),
  };
}

export function _getEvaluatedAvsMachinesOperationsOperations(
  context: MigrateContext,
): EvaluatedAvsMachinesOperationsOperations {
  return {
    ..._getEvaluatedAvsMachinesOperations(context),
  };
}
