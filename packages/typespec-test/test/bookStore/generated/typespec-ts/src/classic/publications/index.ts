// Licensed under the MIT License.

import { BookStoreContext } from "../../api/bookStoreContext.js";
import {
  PublicationsCreateOptionalParams,
  PublicationsGetOptionalParams,
  PublicationsListOptionalParams,
} from "../../api/options.js";
import { create, get, list } from "../../api/publications/index.js";
import { Publication } from "../../models/models.js";

/** Interface representing a Publications operations. */
export interface PublicationsOperations {
  /** Create a new publication */
  create: (
    publication: Publication,
    options?: PublicationsCreateOptionalParams,
  ) => Promise<Publication>;
  /** Get a specific publication by ID */
  get: (
    id: string,
    options?: PublicationsGetOptionalParams,
  ) => Promise<Publication>;
  /** List all publications */
  list: (options?: PublicationsListOptionalParams) => Promise<Publication[]>;
}

function _getPublications(context: BookStoreContext) {
  return {
    create: (
      publication: Publication,
      options?: PublicationsCreateOptionalParams,
    ) => create(context, publication, options),
    get: (id: string, options?: PublicationsGetOptionalParams) =>
      get(context, id, options),
    list: (options?: PublicationsListOptionalParams) => list(context, options),
  };
}

export function _getPublicationsOperations(
  context: BookStoreContext,
): PublicationsOperations {
  return {
    ..._getPublications(context),
  };
}
