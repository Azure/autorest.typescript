// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SearchIndexContext } from "../../api/searchIndexContext.js";
import {
  SearchDocumentsResult,
  SearchRequest,
  LookupDocument,
  SuggestDocumentsResult,
  SuggestRequest,
  IndexBatch,
  IndexDocumentsResult,
  AutocompleteResult,
  AutocompleteRequest,
} from "../../../models/azure/search/documents/models.js";
import {
  DocumentsAutocompletePostOptionalParams,
  DocumentsAutocompleteGetOptionalParams,
  DocumentsIndexOptionalParams,
  DocumentsSuggestPostOptionalParams,
  DocumentsSuggestGetOptionalParams,
  DocumentsGetOptionalParams,
  DocumentsSearchPostOptionalParams,
  DocumentsSearchGetOptionalParams,
  DocumentsCountOptionalParams,
} from "../../api/documents/options.js";
import {
  autocompletePost,
  autocompleteGet,
  index,
  suggestPost,
  suggestGet,
  get,
  searchPost,
  searchGet,
  count,
} from "../../api/documents/operations.js";

/** Interface representing a Documents operations. */
export interface DocumentsOperations {
  /**
   * Autocompletes incomplete query terms based on input text and matching terms in
   * the index.
   */
  autocompletePost: (
    autocompleteRequest: AutocompleteRequest,
    indexName: string,
    options?: DocumentsAutocompletePostOptionalParams,
  ) => Promise<AutocompleteResult>;
  /**
   * Autocompletes incomplete query terms based on input text and matching terms in
   * the index.
   */
  autocompleteGet: (
    searchText: string,
    suggesterName: string,
    indexName: string,
    options?: DocumentsAutocompleteGetOptionalParams,
  ) => Promise<AutocompleteResult>;
  /** Sends a batch of document write actions to the index. */
  index: (
    batch: IndexBatch,
    indexName: string,
    options?: DocumentsIndexOptionalParams,
  ) => Promise<IndexDocumentsResult>;
  /** Suggests documents in the index that match the given partial query text. */
  suggestPost: (
    suggestRequest: SuggestRequest,
    indexName: string,
    options?: DocumentsSuggestPostOptionalParams,
  ) => Promise<SuggestDocumentsResult>;
  /** Suggests documents in the index that match the given partial query text. */
  suggestGet: (
    searchText: string,
    suggesterName: string,
    indexName: string,
    options?: DocumentsSuggestGetOptionalParams,
  ) => Promise<SuggestDocumentsResult>;
  /** Retrieves a document from the index. */
  get: (
    key: string,
    indexName: string,
    options?: DocumentsGetOptionalParams,
  ) => Promise<LookupDocument>;
  /** Searches for documents in the index. */
  searchPost: (
    searchRequest: SearchRequest,
    indexName: string,
    options?: DocumentsSearchPostOptionalParams,
  ) => Promise<SearchDocumentsResult>;
  /** Searches for documents in the index. */
  searchGet: (
    indexName: string,
    options?: DocumentsSearchGetOptionalParams,
  ) => Promise<SearchDocumentsResult>;
  /** Queries the number of documents in the index. */
  count: (
    indexName: string,
    options?: DocumentsCountOptionalParams,
  ) => Promise<number>;
}

function _getDocuments(context: SearchIndexContext) {
  return {
    autocompletePost: (
      autocompleteRequest: AutocompleteRequest,
      indexName: string,
      options?: DocumentsAutocompletePostOptionalParams,
    ) => autocompletePost(context, autocompleteRequest, indexName, options),
    autocompleteGet: (
      searchText: string,
      suggesterName: string,
      indexName: string,
      options?: DocumentsAutocompleteGetOptionalParams,
    ) =>
      autocompleteGet(context, searchText, suggesterName, indexName, options),
    index: (
      batch: IndexBatch,
      indexName: string,
      options?: DocumentsIndexOptionalParams,
    ) => index(context, batch, indexName, options),
    suggestPost: (
      suggestRequest: SuggestRequest,
      indexName: string,
      options?: DocumentsSuggestPostOptionalParams,
    ) => suggestPost(context, suggestRequest, indexName, options),
    suggestGet: (
      searchText: string,
      suggesterName: string,
      indexName: string,
      options?: DocumentsSuggestGetOptionalParams,
    ) => suggestGet(context, searchText, suggesterName, indexName, options),
    get: (
      key: string,
      indexName: string,
      options?: DocumentsGetOptionalParams,
    ) => get(context, key, indexName, options),
    searchPost: (
      searchRequest: SearchRequest,
      indexName: string,
      options?: DocumentsSearchPostOptionalParams,
    ) => searchPost(context, searchRequest, indexName, options),
    searchGet: (
      indexName: string,
      options?: DocumentsSearchGetOptionalParams,
    ) => searchGet(context, indexName, options),
    count: (indexName: string, options?: DocumentsCountOptionalParams) =>
      count(context, indexName, options),
  };
}

export function _getDocumentsOperations(
  context: SearchIndexContext,
): DocumentsOperations {
  return {
    ..._getDocuments(context),
  };
}
