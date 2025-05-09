// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SearchServiceContext } from "../../api/searchServiceContext.js";
import { SearchAlias } from "../../../models/azure/search/documents/indexes/models.js";
import {
  AliasesCreateOptionalParams,
  AliasesListOptionalParams,
  AliasesGetOptionalParams,
  AliasesDeleteOptionalParams,
  AliasesCreateOrUpdateOptionalParams,
} from "../../api/aliases/options.js";
import {
  create,
  list,
  get,
  $delete,
  createOrUpdate,
} from "../../api/aliases/operations.js";
import { PagedAsyncIterableIterator } from "../../../static-helpers/pagingHelpers.js";

/** Interface representing a Aliases operations. */
export interface AliasesOperations {
  /** Creates a new search alias. */
  create: (
    alias: SearchAlias,
    options?: AliasesCreateOptionalParams,
  ) => Promise<SearchAlias>;
  /** Lists all aliases available for a search service. */
  list: (
    options?: AliasesListOptionalParams,
  ) => PagedAsyncIterableIterator<SearchAlias>;
  /** Retrieves an alias definition. */
  get: (
    aliasName: string,
    options?: AliasesGetOptionalParams,
  ) => Promise<SearchAlias>;
  /**
   * Deletes a search alias and its associated mapping to an index. This operation
   * is permanent, with no recovery option. The mapped index is untouched by this
   * operation.
   */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    aliasName: string,
    options?: AliasesDeleteOptionalParams,
  ) => Promise<void>;
  /** Creates a new search alias or updates an alias if it already exists. */
  createOrUpdate: (
    alias: SearchAlias,
    aliasName: string,
    options?: AliasesCreateOrUpdateOptionalParams,
  ) => Promise<SearchAlias>;
}

function _getAliases(context: SearchServiceContext) {
  return {
    create: (alias: SearchAlias, options?: AliasesCreateOptionalParams) =>
      create(context, alias, options),
    list: (options?: AliasesListOptionalParams) => list(context, options),
    get: (aliasName: string, options?: AliasesGetOptionalParams) =>
      get(context, aliasName, options),
    delete: (aliasName: string, options?: AliasesDeleteOptionalParams) =>
      $delete(context, aliasName, options),
    createOrUpdate: (
      alias: SearchAlias,
      aliasName: string,
      options?: AliasesCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, alias, aliasName, options),
  };
}

export function _getAliasesOperations(
  context: SearchServiceContext,
): AliasesOperations {
  return {
    ..._getAliases(context),
  };
}
