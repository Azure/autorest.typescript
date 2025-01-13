// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WidgetServiceContext } from "../../api/widgetServiceContext.js";
import { getBudgets, createOrReplace } from "../../api/budgets/index.js";
import { User, Widget } from "../../models/models.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  BudgetsGetBudgetsOptionalParams,
  BudgetsCreateOrReplaceOptionalParams,
} from "../../api/options.js";

/** Interface representing a Budgets operations. */
export interface BudgetsOperations {
  getBudgets: (
    name: string,
    options?: BudgetsGetBudgetsOptionalParams,
  ) => Promise<Widget[]>;
  /** Long-running resource create or replace operation template. */
  createOrReplace: (
    name: string,
    resource: User,
    options?: BudgetsCreateOrReplaceOptionalParams,
  ) => PollerLike<OperationState<User>, User>;
}

function _getBudgets(context: WidgetServiceContext) {
  return {
    getBudgets: (name: string, options?: BudgetsGetBudgetsOptionalParams) =>
      getBudgets(context, name, options),
    createOrReplace: (
      name: string,
      resource: User,
      options?: BudgetsCreateOrReplaceOptionalParams,
    ) => createOrReplace(context, name, resource, options),
  };
}

export function getBudgetsOperations(
  context: WidgetServiceContext,
): BudgetsOperations {
  return {
    ..._getBudgets(context),
  };
}
