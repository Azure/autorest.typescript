// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ManagementContext } from "../../api/managementContext.js";
import { list } from "../../api/entities/operations.js";
import { EntitiesListOptionalParams } from "../../api/entities/options.js";
import { EntityInfo } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a Entities operations. */
export interface EntitiesOperations {
  /** List all entities (Management Groups, Subscriptions, etc.) for the authenticated user. */
  list: (
    options?: EntitiesListOptionalParams,
  ) => PagedAsyncIterableIterator<EntityInfo>;
}

function _getEntities(context: ManagementContext) {
  return {
    list: (options?: EntitiesListOptionalParams) => list(context, options),
  };
}

export function _getEntitiesOperations(
  context: ManagementContext,
): EntitiesOperations {
  return {
    ..._getEntities(context),
  };
}
