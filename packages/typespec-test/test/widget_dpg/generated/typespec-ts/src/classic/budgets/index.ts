// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SAPWidgetServiceContext } from "../../api/sapWidgetServiceContext.js";
import { SAPUser, Widget } from "../../models/models.js";
import {
  BudgetsGetBudgetsOptionalParams,
  BudgetsCreateOrReplaceOptionalParams,
} from "../../api/budgets/options.js";
import { getBudgets, createOrReplace } from "../../api/budgets/operations.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Budgets operations. */
export interface BudgetsOperations {
  getBudgets: (
    name: string,
    options?: BudgetsGetBudgetsOptionalParams,
  ) => Promise<Widget[]>;
  /** Long-running resource create or replace operation template. */
  createOrReplace: (
    name: string,
    resource: SAPUser,
    options?: BudgetsCreateOrReplaceOptionalParams,
  ) => PollerLike<OperationState<SAPUser>, SAPUser>;
}

function _getBudgets(context: SAPWidgetServiceContext) {
  return {
    getBudgets: (name: string, options?: BudgetsGetBudgetsOptionalParams) =>
      getBudgets(context, name, options),
    createOrReplace: (
      name: string,
      resource: SAPUser,
      options?: BudgetsCreateOrReplaceOptionalParams,
    ) => createOrReplace(context, name, resource, options),
  };
}

export function _getBudgetsOperations(
  context: SAPWidgetServiceContext,
): BudgetsOperations {
  return {
    ..._getBudgets(context),
  };
}
