// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { WidgetServiceContext } from "../../api/WidgetServiceContext.js";
import { User } from "../../models/models.js";
import { createOrReplace } from "../../api/budgets/index.js";
import { BudgetsCreateOrReplaceOptions } from "../../models/options.js";

export interface BudgetsOperations {
  createOrReplace: (
    name: string,
    resource: User,
    options?: BudgetsCreateOrReplaceOptions,
  ) => Next.PollerLike<Next.OperationState<User>, User>;
}

export function getBudgets(context: WidgetServiceContext) {
  return {
    createOrReplace: (
      name: string,
      resource: User,
      options?: BudgetsCreateOrReplaceOptions,
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
