// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  Languages,
  Language as ModelerLanguage,
  Operation
} from "@autorest/codemodel";

export interface PaginationExtension {
  /**
   * The name of the field in the response that can be paged over.
   */
  itemName?: string;
  /**
   * Name of the field containing the nextLink value.
   * An empty object indicates a null value and that all results
   * are returned in a single page.
   */
  nextLinkName?: string | {};
  // 'nextLinkOperation', 'group', and 'member' are used together.
  /**
   * Reference to the operation to call to get the next page.
   */
  nextLinkOperation?: Operation;
  /**
   * The name of the operationGroup that nextLinkOperation resides in.
   */
  group?: string;
  /**
   * The name of the operation that nextLinkOperation references.
   */
  member?: string;
  /**
   * Indicates whether this operation is used by another operation to get pages.
   */
  isNextLinkMethod?: boolean;
}

export type Language = ModelerLanguage & { paging?: PaginationExtension };

export function getLanguageMetadata(languages: Languages): Language {
  return languages.typescript || languages.javascript || languages.default;
}
