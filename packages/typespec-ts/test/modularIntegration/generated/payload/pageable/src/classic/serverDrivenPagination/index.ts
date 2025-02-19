// Licensed under the MIT License.

import { PageableContext } from "../../api/pageableContext.js";
import { link } from "../../api/serverDrivenPagination/index.js";
import { Pet } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { ServerDrivenPaginationLinkOptionalParams } from "../../api/options.js";

/** Interface representing a ServerDrivenPagination operations. */
export interface ServerDrivenPaginationOperations {
  link: (
    options?: ServerDrivenPaginationLinkOptionalParams,
  ) => PagedAsyncIterableIterator<Pet>;
}

function _getServerDrivenPagination(context: PageableContext) {
  return {
    link: (options?: ServerDrivenPaginationLinkOptionalParams) =>
      link(context, options),
  };
}

export function _getServerDrivenPaginationOperations(
  context: PageableContext,
): ServerDrivenPaginationOperations {
  return {
    ..._getServerDrivenPagination(context),
  };
}
