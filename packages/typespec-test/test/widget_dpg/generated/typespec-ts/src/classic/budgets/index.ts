// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SAPWidgetServiceContext } from "../../api/sapWidgetServiceContext.js";
import { $continue, getBudgets, createOrReplace } from "../../api/budgets/operations.js";
import {
  BudgetsContinueOptionalParams,
  BudgetsGetBudgetsOptionalParams,
  BudgetsCreateOrReplaceOptionalParams,
} from "../../api/budgets/options.js";
import { Widget, SAPUser } from "../../models/models.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Budgets operations. */
export interface BudgetsOperations {
  /**
   *  @fixme continue is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  continue: (options?: BudgetsContinueOptionalParams) => Promise<void>;
  getBudgets: (name: string, options?: BudgetsGetBudgetsOptionalParams) => Promise<Widget[]>;
  /** Long-running resource create or replace operation template. */
  createOrReplace: (
    name: string,
    resource: SAPUser,
    options?: BudgetsCreateOrReplaceOptionalParams,
  ) => PollerLike<OperationState<SAPUser>, SAPUser>;
}

function _getBudgets(context: SAPWidgetServiceContext) {
  return {
    continue: (options?: BudgetsContinueOptionalParams) => $continue(context, options),
    getBudgets: (name: string, options?: BudgetsGetBudgetsOptionalParams) =>
      getBudgets(context, name, options),
    createOrReplace: (
      name: string,
      resource: SAPUser,
      options?: BudgetsCreateOrReplaceOptionalParams,
    ) => createOrReplace(context, name, resource, options),
  };
}

export function _getBudgetsOperations(context: SAPWidgetServiceContext): BudgetsOperations {
  return {
    ..._getBudgets(context),
  };
}
