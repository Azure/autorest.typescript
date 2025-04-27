// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SearchIndexContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  SearchDocumentsResult,
  searchDocumentsResultDeserializer,
  SearchRequest,
  searchRequestSerializer,
  LookupDocument,
  lookupDocumentDeserializer,
  SuggestDocumentsResult,
  suggestDocumentsResultDeserializer,
  SuggestRequest,
  suggestRequestSerializer,
  IndexBatch,
  indexBatchSerializer,
  IndexDocumentsResult,
  indexDocumentsResultDeserializer,
  AutocompleteResult,
  autocompleteResultDeserializer,
  AutocompleteRequest,
  autocompleteRequestSerializer,
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
} from "./options.js";
import { expandUrlTemplate } from "../../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _autocompletePostSend(
  context: Client,
  autocompleteRequest: AutocompleteRequest,
  indexName: string,
  options: DocumentsAutocompletePostOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/docs/search.post.autocomplete/{indexName}{?api%2Dversion}",
    {
      indexName: indexName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "x-ms-client-request-id": options?.clientRequestId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: autocompleteRequestSerializer(autocompleteRequest),
    });
}

export async function _autocompletePostDeserialize(
  result: PathUncheckedResponse,
): Promise<AutocompleteResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return autocompleteResultDeserializer(result.body);
}

/**
 * Autocompletes incomplete query terms based on input text and matching terms in
 * the index.
 */
export async function autocompletePost(
  context: Client,
  autocompleteRequest: AutocompleteRequest,
  indexName: string,
  options: DocumentsAutocompletePostOptionalParams = { requestOptions: {} },
): Promise<AutocompleteResult> {
  const result = await _autocompletePostSend(
    context,
    autocompleteRequest,
    indexName,
    options,
  );
  return _autocompletePostDeserialize(result);
}

export function _autocompleteGetSend(
  context: Client,
  searchText: string,
  suggesterName: string,
  indexName: string,
  options: DocumentsAutocompleteGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/docs/search.autocomplete/{indexName}{?api%2Dversion,search,suggesterName,autocompleteMode,%24filter,fuzzy,highlightPostTag,highlightPreTag,minimumCoverage,searchFields,%24top}",
    {
      indexName: indexName,
      "api%2Dversion": context.apiVersion,
      search: searchText,
      suggesterName: suggesterName,
      autocompleteMode: options?.autocompleteMode,
      "%24filter": options?.filter,
      fuzzy: options?.useFuzzyMatching,
      highlightPostTag: options?.highlightPostTag,
      highlightPreTag: options?.highlightPreTag,
      minimumCoverage: options?.minimumCoverage,
      searchFields: !options?.searchFields
        ? options?.searchFields
        : options?.searchFields.map((p: any) => {
            return p;
          }),
      "%24top": options?.top,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "x-ms-client-request-id": options?.clientRequestId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _autocompleteGetDeserialize(
  result: PathUncheckedResponse,
): Promise<AutocompleteResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return autocompleteResultDeserializer(result.body);
}

/**
 * Autocompletes incomplete query terms based on input text and matching terms in
 * the index.
 */
export async function autocompleteGet(
  context: Client,
  searchText: string,
  suggesterName: string,
  indexName: string,
  options: DocumentsAutocompleteGetOptionalParams = { requestOptions: {} },
): Promise<AutocompleteResult> {
  const result = await _autocompleteGetSend(
    context,
    searchText,
    suggesterName,
    indexName,
    options,
  );
  return _autocompleteGetDeserialize(result);
}

export function _indexSend(
  context: Client,
  batch: IndexBatch,
  indexName: string,
  options: DocumentsIndexOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/docs/search.index/{indexName}{?api%2Dversion}",
    {
      indexName: indexName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "x-ms-client-request-id": options?.clientRequestId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: indexBatchSerializer(batch),
    });
}

export async function _indexDeserialize(
  result: PathUncheckedResponse,
): Promise<IndexDocumentsResult> {
  const expectedStatuses = ["200", "207"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return indexDocumentsResultDeserializer(result.body);
}

/** Sends a batch of document write actions to the index. */
export async function index(
  context: Client,
  batch: IndexBatch,
  indexName: string,
  options: DocumentsIndexOptionalParams = { requestOptions: {} },
): Promise<IndexDocumentsResult> {
  const result = await _indexSend(context, batch, indexName, options);
  return _indexDeserialize(result);
}

export function _suggestPostSend(
  context: Client,
  suggestRequest: SuggestRequest,
  indexName: string,
  options: DocumentsSuggestPostOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/docs/search.post.suggest/{indexName}{?api%2Dversion}",
    {
      indexName: indexName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "x-ms-client-request-id": options?.clientRequestId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: suggestRequestSerializer(suggestRequest),
    });
}

export async function _suggestPostDeserialize(
  result: PathUncheckedResponse,
): Promise<SuggestDocumentsResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return suggestDocumentsResultDeserializer(result.body);
}

/** Suggests documents in the index that match the given partial query text. */
export async function suggestPost(
  context: Client,
  suggestRequest: SuggestRequest,
  indexName: string,
  options: DocumentsSuggestPostOptionalParams = { requestOptions: {} },
): Promise<SuggestDocumentsResult> {
  const result = await _suggestPostSend(
    context,
    suggestRequest,
    indexName,
    options,
  );
  return _suggestPostDeserialize(result);
}

export function _suggestGetSend(
  context: Client,
  searchText: string,
  suggesterName: string,
  indexName: string,
  options: DocumentsSuggestGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/docs/search.suggest/{indexName}{?api%2Dversion,search,suggesterName,%24filter,fuzzy,highlightPostTag,highlightPreTag,minimumCoverage,%24orderby,searchFields,%24select,%24top}",
    {
      indexName: indexName,
      "api%2Dversion": context.apiVersion,
      search: searchText,
      suggesterName: suggesterName,
      "%24filter": options?.filter,
      fuzzy: options?.useFuzzyMatching,
      highlightPostTag: options?.highlightPostTag,
      highlightPreTag: options?.highlightPreTag,
      minimumCoverage: options?.minimumCoverage,
      "%24orderby": !options?.orderBy
        ? options?.orderBy
        : options?.orderBy.map((p: any) => {
            return p;
          }),
      searchFields: !options?.searchFields
        ? options?.searchFields
        : options?.searchFields.map((p: any) => {
            return p;
          }),
      "%24select": !options?.select
        ? options?.select
        : options?.select.map((p: any) => {
            return p;
          }),
      "%24top": options?.top,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "x-ms-client-request-id": options?.clientRequestId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _suggestGetDeserialize(
  result: PathUncheckedResponse,
): Promise<SuggestDocumentsResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return suggestDocumentsResultDeserializer(result.body);
}

/** Suggests documents in the index that match the given partial query text. */
export async function suggestGet(
  context: Client,
  searchText: string,
  suggesterName: string,
  indexName: string,
  options: DocumentsSuggestGetOptionalParams = { requestOptions: {} },
): Promise<SuggestDocumentsResult> {
  const result = await _suggestGetSend(
    context,
    searchText,
    suggesterName,
    indexName,
    options,
  );
  return _suggestGetDeserialize(result);
}

export function _getSend(
  context: Client,
  key: string,
  indexName: string,
  options: DocumentsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/docs('{key}')/{indexName}{?api%2Dversion,%24select}",
    {
      key: key,
      indexName: indexName,
      "api%2Dversion": context.apiVersion,
      "%24select": !options?.selectedFields
        ? options?.selectedFields
        : options?.selectedFields.map((p: any) => {
            return p;
          }),
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "x-ms-client-request-id": options?.clientRequestId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<LookupDocument> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return lookupDocumentDeserializer(result.body);
}

/** Retrieves a document from the index. */
export async function get(
  context: Client,
  key: string,
  indexName: string,
  options: DocumentsGetOptionalParams = { requestOptions: {} },
): Promise<LookupDocument> {
  const result = await _getSend(context, key, indexName, options);
  return _getDeserialize(result);
}

export function _searchPostSend(
  context: Client,
  searchRequest: SearchRequest,
  indexName: string,
  options: DocumentsSearchPostOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/docs/search.post.search/{indexName}{?api%2Dversion}",
    {
      indexName: indexName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "x-ms-client-request-id": options?.clientRequestId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: searchRequestSerializer(searchRequest),
    });
}

export async function _searchPostDeserialize(
  result: PathUncheckedResponse,
): Promise<SearchDocumentsResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return searchDocumentsResultDeserializer(result.body);
}

/** Searches for documents in the index. */
export async function searchPost(
  context: Client,
  searchRequest: SearchRequest,
  indexName: string,
  options: DocumentsSearchPostOptionalParams = { requestOptions: {} },
): Promise<SearchDocumentsResult> {
  const result = await _searchPostSend(
    context,
    searchRequest,
    indexName,
    options,
  );
  return _searchPostDeserialize(result);
}

export function _searchGetSend(
  context: Client,
  indexName: string,
  options: DocumentsSearchGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/docs/{indexName}{?api%2Dversion,search,%24count,facet*,%24filter,highlight,highlightPostTag,highlightPreTag,minimumCoverage,%24orderby,queryType,scoringParameter*,scoringProfile,searchFields,searchMode,scoringStatistics,sessionId,%24select,%24skip,%24top,semanticConfiguration,semanticErrorHandling,semanticMaxWaitInMilliseconds,answers,captions,semanticQuery,queryRewrites,debug,queryLanguage,speller,semanticFields}",
    {
      indexName: indexName,
      "api%2Dversion": context.apiVersion,
      search: options?.searchText,
      "%24count": options?.includeTotalResultCount,
      facet: !options?.facets
        ? options?.facets
        : options?.facets.map((p: any) => {
            return p;
          }),
      "%24filter": options?.filter,
      highlight: !options?.highlightFields
        ? options?.highlightFields
        : options?.highlightFields.map((p: any) => {
            return p;
          }),
      highlightPostTag: options?.highlightPostTag,
      highlightPreTag: options?.highlightPreTag,
      minimumCoverage: options?.minimumCoverage,
      "%24orderby": !options?.orderBy
        ? options?.orderBy
        : options?.orderBy.map((p: any) => {
            return p;
          }),
      queryType: options?.queryType,
      scoringParameter: !options?.scoringParameters
        ? options?.scoringParameters
        : options?.scoringParameters.map((p: any) => {
            return p;
          }),
      scoringProfile: options?.scoringProfile,
      searchFields: !options?.searchFields
        ? options?.searchFields
        : options?.searchFields.map((p: any) => {
            return p;
          }),
      searchMode: options?.searchMode,
      scoringStatistics: options?.scoringStatistics,
      sessionId: options?.sessionId,
      "%24select": !options?.select
        ? options?.select
        : options?.select.map((p: any) => {
            return p;
          }),
      "%24skip": options?.skip,
      "%24top": options?.top,
      semanticConfiguration: options?.semanticConfiguration,
      semanticErrorHandling: options?.semanticErrorHandling,
      semanticMaxWaitInMilliseconds: options?.semanticMaxWaitInMilliseconds,
      answers: options?.answers,
      captions: options?.captions,
      semanticQuery: options?.semanticQuery,
      queryRewrites: options?.queryRewrites,
      debug: options?.debug,
      queryLanguage: options?.queryLanguage,
      speller: options?.speller,
      semanticFields: !options?.semanticFields
        ? options?.semanticFields
        : options?.semanticFields.map((p: any) => {
            return p;
          }),
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "x-ms-client-request-id": options?.clientRequestId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _searchGetDeserialize(
  result: PathUncheckedResponse,
): Promise<SearchDocumentsResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return searchDocumentsResultDeserializer(result.body);
}

/** Searches for documents in the index. */
export async function searchGet(
  context: Client,
  indexName: string,
  options: DocumentsSearchGetOptionalParams = { requestOptions: {} },
): Promise<SearchDocumentsResult> {
  const result = await _searchGetSend(context, indexName, options);
  return _searchGetDeserialize(result);
}

export function _countSend(
  context: Client,
  indexName: string,
  options: DocumentsCountOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/docs/$count/{indexName}{?api%2Dversion}",
    {
      indexName: indexName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "x-ms-client-request-id": options?.clientRequestId }
          : {}),
        accept: "text/plain",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _countDeserialize(
  result: PathUncheckedResponse,
): Promise<number> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return result.body;
}

/** Queries the number of documents in the index. */
export async function count(
  context: Client,
  indexName: string,
  options: DocumentsCountOptionalParams = { requestOptions: {} },
): Promise<number> {
  const result = await _countSend(context, indexName, options);
  return _countDeserialize(result);
}
