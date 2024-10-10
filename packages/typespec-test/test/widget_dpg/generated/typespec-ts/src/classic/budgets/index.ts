// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WidgetServiceContext } from "../../api/widgetServiceContext.js";
import { createOrReplace } from "../../api/budgets/index.js";
import { User } from "../../models/models.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { BudgetsCreateOrReplaceOptionalParams } from "../../api/options.js";

/** Interface representing a Budgets operations. */
export interface BudgetsOperations {
  /** Long-running resource create or replace operation template. */
  createOrReplace: (
    name: string,
    resource: User,
    options?: BudgetsCreateOrReplaceOptionalParams,
  ) => PollerLike<OperationState<User>, User>;
}

export function getBudgets(context: WidgetServiceContext) {
  return {
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
    ...getBudgets(context),
  };
}
