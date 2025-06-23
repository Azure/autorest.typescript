// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MigrateContext } from "../../api/migrateContext.js";
import { EvaluatedMachine } from "../../models/models.js";
import {
  EvaluatedMachinesOperationsListByParentOptionalParams,
  EvaluatedMachinesOperationsGetOptionalParams,
} from "../../api/evaluatedMachinesOperations/options.js";
import {
  listByParent,
  get,
} from "../../api/evaluatedMachinesOperations/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a EvaluatedMachinesOperations operations. */
export interface EvaluatedMachinesOperationsOperations {
  /** List EvaluatedMachine resources by BusinessCase */
  listByParent: (
    resourceGroupName: string,
    projectName: string,
    businessCaseName: string,
    options?: EvaluatedMachinesOperationsListByParentOptionalParams,
  ) => PagedAsyncIterableIterator<EvaluatedMachine>;
  /** Get a EvaluatedMachine */
  get: (
    resourceGroupName: string,
    projectName: string,
    businessCaseName: string,
    evaluatedMachineName: string,
    options?: EvaluatedMachinesOperationsGetOptionalParams,
  ) => Promise<EvaluatedMachine>;
}

function _getEvaluatedMachinesOperations(context: MigrateContext) {
  return {
    listByParent: (
      resourceGroupName: string,
      projectName: string,
      businessCaseName: string,
      options?: EvaluatedMachinesOperationsListByParentOptionalParams,
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
      evaluatedMachineName: string,
      options?: EvaluatedMachinesOperationsGetOptionalParams,
    ) =>
      get(
        context,
        resourceGroupName,
        projectName,
        businessCaseName,
        evaluatedMachineName,
        options,
      ),
  };
}

export function _getEvaluatedMachinesOperationsOperations(
  context: MigrateContext,
): EvaluatedMachinesOperationsOperations {
  return {
    ..._getEvaluatedMachinesOperations(context),
  };
}
