// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { WidgetServiceContext } from "../../api/widgetServiceContext.js";
import { User } from "../../models/models.js";
import { createOrReplace, createOrUpdate } from "../../api/budgets/index.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  BudgetsCreateOrReplaceOptionalParams,
  BudgetsCreateOrUpdateOptionalParams,
} from "../../models/options.js";

/** Interface representing a Budgets operations. */
export interface BudgetsOperations {
  /** Long-running resource create or replace operation template. */
  createOrReplace: (
    name: string,
    resource: User,
    options?: BudgetsCreateOrReplaceOptionalParams,
  ) => PollerLike<OperationState<User>, User>;
  /** Long-running resource create or update operation template. */
  createOrUpdate: (
    name: string,
    resource: User,
    options?: BudgetsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<User>, User>;
}

export function getBudgets(context: WidgetServiceContext) {
  return {
    createOrReplace: (
      name: string,
      resource: User,
      options?: BudgetsCreateOrReplaceOptionalParams,
    ) => createOrReplace(context, name, resource, options),
    createOrUpdate: (
      name: string,
      resource: User,
      options?: BudgetsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, name, resource, options),
  };
}

export function getBudgetsOperations(
  context: WidgetServiceContext,
): BudgetsOperations {
  return {
    ...getBudgets(context),
  };
}
