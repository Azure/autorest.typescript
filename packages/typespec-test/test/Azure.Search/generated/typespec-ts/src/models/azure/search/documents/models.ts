// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { serializeRecord } from "../../../../static-helpers/serialization/serialize-record.js";

/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.). */
export interface AzureSearchDocumentsErrorResponse {
  /** The error object. */
  error?: AzureSearchDocumentsErrorDetail;
}

export function azureSearchDocumentsErrorResponseDeserializer(
  item: any,
): AzureSearchDocumentsErrorResponse {
  return {
    error: !item["error"]
      ? item["error"]
      : azureSearchDocumentsErrorDetailDeserializer(item["error"]),
  };
}

/** The error detail. */
export interface AzureSearchDocumentsErrorDetail {
  /** The error code. */
  code?: string;
  /** The error message. */
  message?: string;
  /** The error target. */
  target?: string;
  /** The error details. */
  details?: AzureSearchDocumentsErrorDetail[];
  /** The error additional info. */
  additionalInfo?: AzureSearchDocumentsErrorAdditionalInfo[];
}

export function azureSearchDocumentsErrorDetailDeserializer(
  item: any,
): AzureSearchDocumentsErrorDetail {
  return {
    code: item["code"],
    message: item["message"],
    target: item["target"],
    details: !item["details"]
      ? item["details"]
      : azureSearchDocumentsErrorDetailArrayDeserializer(item["details"]),
    additionalInfo: !item["additionalInfo"]
      ? item["additionalInfo"]
      : azureSearchDocumentsErrorAdditionalInfoArrayDeserializer(
          item["additionalInfo"],
        ),
  };
}

export function azureSearchDocumentsErrorDetailArrayDeserializer(
  result: Array<AzureSearchDocumentsErrorDetail>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsErrorDetailDeserializer(item);
  });
}

export function azureSearchDocumentsErrorAdditionalInfoArrayDeserializer(
  result: Array<AzureSearchDocumentsErrorAdditionalInfo>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsErrorAdditionalInfoDeserializer(item);
  });
}

/** The resource management error additional info. */
export interface AzureSearchDocumentsErrorAdditionalInfo {
  /** The additional info type. */
  type?: string;
  /** The additional info. */
  info?: Record<string, string>;
}

export function azureSearchDocumentsErrorAdditionalInfoDeserializer(
  item: any,
): AzureSearchDocumentsErrorAdditionalInfo {
  return {
    type: item["type"],
    info: item["info"],
  };
}

/** Response containing search results from an index. */
export interface AzureSearchDocumentsSearchDocumentsResult {
  /** The total count of results found by the search operation, or null if the count was not requested. If present, the count may be greater than the number of results in this response. This can happen if you use the $top or $skip parameters, or if the query can't return all the requested documents in a single response. */
  readonly count?: number;
  /** A value indicating the percentage of the index that was included in the query, or null if minimumCoverage was not specified in the request. */
  readonly coverage?: number;
  /** The facet query results for the search operation, organized as a collection of buckets for each faceted field; null if the query did not include any facet expressions. */
  readonly facets?: Record<string, AzureSearchDocumentsFacetResult[]>;
  /** The answers query results for the search operation; null if the answers query parameter was not specified or set to 'none'. */
  readonly answers?: AzureSearchDocumentsQueryAnswerResult[];
  /** Debug information that applies to the search results as a whole. */
  readonly debugInfo?: AzureSearchDocumentsDebugInfo;
  /** Continuation JSON payload returned when the query can't return all the requested results in a single response. You can use this JSON along with @odata.nextLink to formulate another POST Search request to get the next part of the search response. */
  readonly nextPageParameters?: AzureSearchDocumentsSearchRequest;
  /** The sequence of results returned by the query. */
  readonly results: AzureSearchDocumentsSearchResult[];
  /** Continuation URL returned when the query can't return all the requested results in a single response. You can use this URL to formulate another GET or POST Search request to get the next part of the search response. Make sure to use the same verb (GET or POST) as the request that produced this response. */
  readonly nextLink?: string;
  /** Reason that a partial response was returned for a semantic ranking request. */
  readonly semanticPartialResponseReason?: AzureSearchDocumentsSemanticErrorReason;
  /** Type of partial response that was returned for a semantic ranking request. */
  readonly semanticPartialResponseType?: AzureSearchDocumentsSemanticSearchResultsType;
  /** Type of query rewrite that was used to retrieve documents. */
  readonly semanticQueryRewritesResultType?: AzureSearchDocumentsSemanticQueryRewritesResultType;
}

export function azureSearchDocumentsSearchDocumentsResultSerializer(
  item: AzureSearchDocumentsSearchDocumentsResult,
): any {
  return item;
}

export function azureSearchDocumentsSearchDocumentsResultDeserializer(
  item: any,
): AzureSearchDocumentsSearchDocumentsResult {
  return {
    count: item["@odata.count"],
    coverage: item["@search.coverage"],
    facets: !item["@search.facets"]
      ? item["@search.facets"]
      : azureSearchDocumentsFacetResultArrayRecordDeserializer(
          item["@search.facets"],
        ),
    answers: !item["@search.answers"]
      ? item["@search.answers"]
      : azureSearchDocumentsQueryAnswerResultArrayDeserializer(
          item["@search.answers"],
        ),
    debugInfo: !item["@search.debug"]
      ? item["@search.debug"]
      : azureSearchDocumentsDebugInfoDeserializer(item["@search.debug"]),
    nextPageParameters: !item["@search.nextPageParameters"]
      ? item["@search.nextPageParameters"]
      : azureSearchDocumentsSearchRequestDeserializer(
          item["@search.nextPageParameters"],
        ),
    results: azureSearchDocumentsSearchResultArrayDeserializer(item["value"]),
    nextLink: item["@odata.nextLink"],
    semanticPartialResponseReason:
      item["@search.semanticPartialResponseReason"],
    semanticPartialResponseType: item["@search.semanticPartialResponseType"],
    semanticQueryRewritesResultType:
      item["@search.semanticQueryRewritesResultType"],
  };
}

export function azureSearchDocumentsFacetResultArrayRecordSerializer(
  item: Record<string, Array<AzureSearchDocumentsFacetResult>>,
): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : azureSearchDocumentsFacetResultArraySerializer(item[key]);
  });
  return result;
}

export function azureSearchDocumentsFacetResultArrayRecordDeserializer(
  item: Record<string, any>,
): Record<string, Array<AzureSearchDocumentsFacetResult>> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : azureSearchDocumentsFacetResultArrayDeserializer(item[key]);
  });
  return result;
}

export function azureSearchDocumentsFacetResultArraySerializer(
  result: Array<AzureSearchDocumentsFacetResult>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsFacetResultSerializer(item);
  });
}

export function azureSearchDocumentsFacetResultArrayDeserializer(
  result: Array<AzureSearchDocumentsFacetResult>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsFacetResultDeserializer(item);
  });
}

/** A single bucket of a facet query result. Reports the number of documents with a field value falling within a particular range or having a particular value or interval. */
export interface AzureSearchDocumentsFacetResult {
  /** The approximate count of documents falling within the bucket described by this facet. */
  count?: number;
  /** The nested facet query results for the search operation, organized as a collection of buckets for each faceted field; null if the query did not contain any nested facets. */
  readonly facets?: Record<string, AzureSearchDocumentsFacetResult[]>;
  /** The resulting total sum for the facet when a sum metric is requested. */
  readonly sum?: number;
  /** Additional properties */
  additionalProperties?: Record<string, any>;
}

export function azureSearchDocumentsFacetResultSerializer(
  item: AzureSearchDocumentsFacetResult,
): any {
  return {
    ...serializeRecord(item.additionalProperties ?? {}),
    count: item["count"],
  };
}

export function azureSearchDocumentsFacetResultDeserializer(
  item: any,
): AzureSearchDocumentsFacetResult {
  return {
    additionalProperties: serializeRecord(item, ["count", "facets", "sum"]),
    count: item["count"],
    facets: !item["@search.facets"]
      ? item["@search.facets"]
      : azureSearchDocumentsFacetResultArrayRecordDeserializer(
          item["@search.facets"],
        ),
    sum: item["sum"],
  };
}

export function azureSearchDocumentsQueryAnswerResultArraySerializer(
  result: Array<AzureSearchDocumentsQueryAnswerResult>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsQueryAnswerResultSerializer(item);
  });
}

export function azureSearchDocumentsQueryAnswerResultArrayDeserializer(
  result: Array<AzureSearchDocumentsQueryAnswerResult>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsQueryAnswerResultDeserializer(item);
  });
}

/** An answer is a text passage extracted from the contents of the most relevant documents that matched the query. Answers are extracted from the top search results. Answer candidates are scored and the top answers are selected. */
export interface AzureSearchDocumentsQueryAnswerResult {
  /** The score value represents how relevant the answer is to the query relative to other answers returned for the query. */
  score?: number;
  /** The key of the document the answer was extracted from. */
  key?: string;
  /** The text passage extracted from the document contents as the answer. */
  text?: string;
  /** Same text passage as in the Text property with highlighted text phrases most relevant to the query. */
  highlights?: string;
  /** Additional properties */
  additionalProperties?: Record<string, any>;
}

export function azureSearchDocumentsQueryAnswerResultSerializer(
  item: AzureSearchDocumentsQueryAnswerResult,
): any {
  return {
    ...serializeRecord(item.additionalProperties ?? {}),
    score: item["score"],
    key: item["key"],
    text: item["text"],
    highlights: item["highlights"],
  };
}

export function azureSearchDocumentsQueryAnswerResultDeserializer(
  item: any,
): AzureSearchDocumentsQueryAnswerResult {
  return {
    additionalProperties: serializeRecord(item, [
      "score",
      "key",
      "text",
      "highlights",
    ]),
    score: item["score"],
    key: item["key"],
    text: item["text"],
    highlights: item["highlights"],
  };
}

/** Contains debugging information that can be used to further explore your search results. */
export interface AzureSearchDocumentsDebugInfo {
  /** Contains debugging information specific to query rewrites. */
  readonly queryRewrites?: AzureSearchDocumentsQueryRewritesDebugInfo;
}

export function azureSearchDocumentsDebugInfoSerializer(
  item: AzureSearchDocumentsDebugInfo,
): any {
  return item;
}

export function azureSearchDocumentsDebugInfoDeserializer(
  item: any,
): AzureSearchDocumentsDebugInfo {
  return {
    queryRewrites: !item["queryRewrites"]
      ? item["queryRewrites"]
      : azureSearchDocumentsQueryRewritesDebugInfoDeserializer(
          item["queryRewrites"],
        ),
  };
}

/** Contains debugging information specific to query rewrites. */
export interface AzureSearchDocumentsQueryRewritesDebugInfo {
  /** List of query rewrites generated for the text query. */
  readonly text?: AzureSearchDocumentsQueryRewritesValuesDebugInfo;
  /** List of query rewrites generated for the vectorizable text queries. */
  readonly vectors?: AzureSearchDocumentsQueryRewritesValuesDebugInfo[];
}

export function azureSearchDocumentsQueryRewritesDebugInfoDeserializer(
  item: any,
): AzureSearchDocumentsQueryRewritesDebugInfo {
  return {
    text: !item["text"]
      ? item["text"]
      : azureSearchDocumentsQueryRewritesValuesDebugInfoDeserializer(
          item["text"],
        ),
    vectors: !item["vectors"]
      ? item["vectors"]
      : azureSearchDocumentsQueryRewritesValuesDebugInfoArrayDeserializer(
          item["vectors"],
        ),
  };
}

/** Contains debugging information specific to query rewrites. */
export interface AzureSearchDocumentsQueryRewritesValuesDebugInfo {
  /** The input text to the generative query rewriting model. There may be cases where the user query and the input to the generative model are not identical. */
  readonly inputQuery?: string;
  /** List of query rewrites. */
  readonly rewrites?: string[];
}

export function azureSearchDocumentsQueryRewritesValuesDebugInfoDeserializer(
  item: any,
): AzureSearchDocumentsQueryRewritesValuesDebugInfo {
  return {
    inputQuery: item["inputQuery"],
    rewrites: !item["rewrites"]
      ? item["rewrites"]
      : item["rewrites"].map((p: any) => {
          return p;
        }),
  };
}

export function azureSearchDocumentsQueryRewritesValuesDebugInfoArrayDeserializer(
  result: Array<AzureSearchDocumentsQueryRewritesValuesDebugInfo>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsQueryRewritesValuesDebugInfoDeserializer(item);
  });
}

/** Parameters for filtering, sorting, faceting, paging, and other search query behaviors. */
export interface AzureSearchDocumentsSearchRequest {
  /** A value that specifies whether to fetch the total count of results. Default is false. Setting this value to true may have a performance impact. Note that the count returned is an approximation. */
  includeTotalCount?: boolean;
  /** The list of facet expressions to apply to the search query. Each facet expression contains a field name, optionally followed by a comma-separated list of name:value pairs. */
  facets?: string[];
  /** The OData $filter expression to apply to the search query. */
  filter?: string;
  /** The comma-separated list of field names to use for hit highlights. Only searchable fields can be used for hit highlighting. */
  highlightFields?: string;
  /** A string tag that is appended to hit highlights. Must be set with highlightPreTag. Default is &lt;/em&gt;. */
  highlightPostTag?: string;
  /** A string tag that is prepended to hit highlights. Must be set with highlightPostTag. Default is &lt;em&gt;. */
  highlightPreTag?: string;
  /** A number between 0 and 100 indicating the percentage of the index that must be covered by a search query in order for the query to be reported as a success. This parameter can be useful for ensuring search availability even for services with only one replica. The default is 100. */
  minimumCoverage?: number;
  /** The comma-separated list of OData $orderby expressions by which to sort the results. Each expression can be either a field name or a call to either the geo.distance() or the search.score() functions. Each expression can be followed by asc to indicate ascending, or desc to indicate descending. The default is ascending order. Ties will be broken by the match scores of documents. If no $orderby is specified, the default sort order is descending by document match score. There can be at most 32 $orderby clauses. */
  orderBy?: string;
  /** A value that specifies the syntax of the search query. The default is 'simple'. Use 'full' if your query uses the Lucene query syntax. */
  queryType?: AzureSearchDocumentsQueryType;
  /** A value that specifies whether we want to calculate scoring statistics (such as document frequency) globally for more consistent scoring, or locally, for lower latency. The default is 'local'. Use 'global' to aggregate scoring statistics globally before scoring. Using global scoring statistics can increase latency of search queries. */
  scoringStatistics?: AzureSearchDocumentsScoringStatistics;
  /** A value to be used to create a sticky session, which can help getting more consistent results. As long as the same sessionId is used, a best-effort attempt will be made to target the same replica set. Be wary that reusing the same sessionID values repeatedly can interfere with the load balancing of the requests across replicas and adversely affect the performance of the search service. The value used as sessionId cannot start with a '_' character. */
  sessionId?: string;
  /** The list of parameter values to be used in scoring functions (for example, referencePointParameter) using the format name-values. For example, if the scoring profile defines a function with a parameter called 'mylocation' the parameter string would be "mylocation--122.2,44.8" (without the quotes). */
  scoringParameters?: string[];
  /** The name of a scoring profile to evaluate match scores for matching documents in order to sort the results. */
  scoringProfile?: string;
  /** Enables a debugging tool that can be used to further explore your reranked results. */
  debug?: AzureSearchDocumentsQueryDebugMode;
  /** A full-text search query expression; Use "*" or omit this parameter to match all documents. */
  searchText?: string;
  /** The comma-separated list of field names to which to scope the full-text search. When using fielded search (fieldName:searchExpression) in a full Lucene query, the field names of each fielded search expression take precedence over any field names listed in this parameter. */
  searchFields?: string;
  /** A value that specifies whether any or all of the search terms must be matched in order to count the document as a match. */
  searchMode?: AzureSearchDocumentsSearchMode;
  /** A value that specifies the language of the search query. */
  queryLanguage?: AzureSearchDocumentsQueryLanguage;
  /** A value that specified the type of the speller to use to spell-correct individual search query terms. */
  querySpeller?: AzureSearchDocumentsQuerySpellerType;
  /** The comma-separated list of fields to retrieve. If unspecified, all fields marked as retrievable in the schema are included. */
  select?: string;
  /** The number of search results to skip. This value cannot be greater than 100,000. If you need to scan documents in sequence, but cannot use skip due to this limitation, consider using orderby on a totally-ordered key and filter with a range query instead. */
  skip?: number;
  /** The number of search results to retrieve. This can be used in conjunction with $skip to implement client-side paging of search results. If results are truncated due to server-side paging, the response will include a continuation token that can be used to issue another Search request for the next page of results. */
  top?: number;
  /** The name of a semantic configuration that will be used when processing documents for queries of type semantic. */
  semanticConfigurationName?: string;
  /** Allows the user to choose whether a semantic call should fail completely (default / current behavior), or to return partial results. */
  semanticErrorHandling?: AzureSearchDocumentsSemanticErrorMode;
  /** Allows the user to set an upper bound on the amount of time it takes for semantic enrichment to finish processing before the request fails. */
  semanticMaxWaitInMilliseconds?: number;
  /** Allows setting a separate search query that will be solely used for semantic reranking, semantic captions and semantic answers. Is useful for scenarios where there is a need to use different queries between the base retrieval and ranking phase, and the L2 semantic phase. */
  semanticQuery?: string;
  /** A value that specifies whether answers should be returned as part of the search response. */
  answers?: AzureSearchDocumentsQueryAnswerType;
  /** A value that specifies whether captions should be returned as part of the search response. */
  captions?: AzureSearchDocumentsQueryCaptionType;
  /** A value that specifies whether query rewrites should be generated to augment the search query. */
  queryRewrites?: AzureSearchDocumentsQueryRewritesType;
  /** The comma-separated list of field names used for semantic ranking. */
  semanticFields?: string;
  /** The query parameters for vector and hybrid search queries. */
  vectorQueries?: AzureSearchDocumentsVectorQueryUnion[];
  /** Determines whether or not filters are applied before or after the vector search is performed. Default is 'preFilter' for new indexes. */
  vectorFilterMode?: AzureSearchDocumentsVectorFilterMode;
  /** The query parameters to configure hybrid search behaviors. */
  hybridSearch?: AzureSearchDocumentsHybridSearch;
}

export function azureSearchDocumentsSearchRequestDeserializer(
  item: any,
): AzureSearchDocumentsSearchRequest {
  return {
    includeTotalCount: item["count"],
    facets: !item["facets"]
      ? item["facets"]
      : item["facets"].map((p: any) => {
          return p;
        }),
    filter: item["filter"],
    highlightFields: item["highlight"],
    highlightPostTag: item["highlightPostTag"],
    highlightPreTag: item["highlightPreTag"],
    minimumCoverage: item["minimumCoverage"],
    orderBy: item["orderby"],
    queryType: item["queryType"],
    scoringStatistics: item["scoringStatistics"],
    sessionId: item["sessionId"],
    scoringParameters: !item["scoringParameters"]
      ? item["scoringParameters"]
      : item["scoringParameters"].map((p: any) => {
          return p;
        }),
    scoringProfile: item["scoringProfile"],
    debug: item["debug"],
    searchText: item["search"],
    searchFields: item["searchFields"],
    searchMode: item["searchMode"],
    queryLanguage: item["queryLanguage"],
    querySpeller: item["speller"],
    select: item["select"],
    skip: item["skip"],
    top: item["top"],
    semanticConfigurationName: item["semanticConfiguration"],
    semanticErrorHandling: item["semanticErrorHandling"],
    semanticMaxWaitInMilliseconds: item["semanticMaxWaitInMilliseconds"],
    semanticQuery: item["semanticQuery"],
    answers: item["answers"],
    captions: item["captions"],
    queryRewrites: item["queryRewrites"],
    semanticFields: item["semanticFields"],
    vectorQueries: !item["vectorQueries"]
      ? item["vectorQueries"]
      : azureSearchDocumentsVectorQueryUnionArrayDeserializer(
          item["vectorQueries"],
        ),
    vectorFilterMode: item["vectorFilterMode"],
    hybridSearch: !item["hybridSearch"]
      ? item["hybridSearch"]
      : azureSearchDocumentsHybridSearchDeserializer(item["hybridSearch"]),
  };
}

/** Specifies the syntax of the search query. The default is 'simple'. Use 'full' if your query uses the Lucene query syntax and 'semantic' if query syntax is not needed. */
export enum KnownAzureSearchDocumentsQueryType {
  /** Uses the simple query syntax for searches. Search text is interpreted using a simple query language that allows for symbols such as +, * and "". Queries are evaluated across all searchable fields by default, unless the searchFields parameter is specified. */
  Simple = "simple",
  /** Uses the full Lucene query syntax for searches. Search text is interpreted using the Lucene query language which allows field-specific and weighted searches, as well as other advanced features. */
  Full = "full",
  /** Best suited for queries expressed in natural language as opposed to keywords. Improves precision of search results by re-ranking the top search results using a ranking model trained on the Web corpus. */
  Semantic = "semantic",
}

/**
 * Specifies the syntax of the search query. The default is 'simple'. Use 'full' if your query uses the Lucene query syntax and 'semantic' if query syntax is not needed. \
 * {@link KnownAzureSearchDocumentsQueryType} can be used interchangeably with AzureSearchDocumentsQueryType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **simple**: Uses the simple query syntax for searches. Search text is interpreted using a simple query language that allows for symbols such as +, * and "". Queries are evaluated across all searchable fields by default, unless the searchFields parameter is specified. \
 * **full**: Uses the full Lucene query syntax for searches. Search text is interpreted using the Lucene query language which allows field-specific and weighted searches, as well as other advanced features. \
 * **semantic**: Best suited for queries expressed in natural language as opposed to keywords. Improves precision of search results by re-ranking the top search results using a ranking model trained on the Web corpus.
 */
export type AzureSearchDocumentsQueryType = string;

/** A value that specifies whether we want to calculate scoring statistics (such as document frequency) globally for more consistent scoring, or locally, for lower latency. The default is 'local'. Use 'global' to aggregate scoring statistics globally before scoring. Using global scoring statistics can increase latency of search queries. */
export enum KnownAzureSearchDocumentsScoringStatistics {
  /** The scoring statistics will be calculated locally for lower latency. */
  Local = "local",
  /** The scoring statistics will be calculated globally for more consistent scoring. */
  Global = "global",
}

/**
 * A value that specifies whether we want to calculate scoring statistics (such as document frequency) globally for more consistent scoring, or locally, for lower latency. The default is 'local'. Use 'global' to aggregate scoring statistics globally before scoring. Using global scoring statistics can increase latency of search queries. \
 * {@link KnownAzureSearchDocumentsScoringStatistics} can be used interchangeably with AzureSearchDocumentsScoringStatistics,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **local**: The scoring statistics will be calculated locally for lower latency. \
 * **global**: The scoring statistics will be calculated globally for more consistent scoring.
 */
export type AzureSearchDocumentsScoringStatistics = string;

/** Enables a debugging tool that can be used to further explore your search results. You can enable multiple debug modes simultaneously by separating them with a | character, for example: semantic|queryRewrites. */
export enum KnownAzureSearchDocumentsQueryDebugMode {
  /** No query debugging information will be returned. */
  Disabled = "disabled",
  /** Allows the user to further explore their reranked results. */
  Semantic = "semantic",
  /** Allows the user to further explore their hybrid and vector query results. */
  Vector = "vector",
  /** Allows the user to explore the list of query rewrites generated for their search request. */
  QueryRewrites = "queryRewrites",
  /** Allows the user to retrieve scoring information regarding vectors matched within a collection of complex types. */
  InnerHits = "innerHits",
  /** Turn on all debug options. */
  All = "all",
}

/**
 * Enables a debugging tool that can be used to further explore your search results. You can enable multiple debug modes simultaneously by separating them with a | character, for example: semantic|queryRewrites. \
 * {@link KnownAzureSearchDocumentsQueryDebugMode} can be used interchangeably with AzureSearchDocumentsQueryDebugMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **disabled**: No query debugging information will be returned. \
 * **semantic**: Allows the user to further explore their reranked results. \
 * **vector**: Allows the user to further explore their hybrid and vector query results. \
 * **queryRewrites**: Allows the user to explore the list of query rewrites generated for their search request. \
 * **innerHits**: Allows the user to retrieve scoring information regarding vectors matched within a collection of complex types. \
 * **all**: Turn on all debug options.
 */
export type AzureSearchDocumentsQueryDebugMode = string;

/** Specifies whether any or all of the search terms must be matched in order to count the document as a match. */
export enum KnownAzureSearchDocumentsSearchMode {
  /** Any of the search terms must be matched in order to count the document as a match. */
  Any = "any",
  /** All of the search terms must be matched in order to count the document as a match. */
  All = "all",
}

/**
 * Specifies whether any or all of the search terms must be matched in order to count the document as a match. \
 * {@link KnownAzureSearchDocumentsSearchMode} can be used interchangeably with AzureSearchDocumentsSearchMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **any**: Any of the search terms must be matched in order to count the document as a match. \
 * **all**: All of the search terms must be matched in order to count the document as a match.
 */
export type AzureSearchDocumentsSearchMode = string;

/** The language of the query. */
export enum KnownAzureSearchDocumentsQueryLanguage {
  /** Query language not specified. */
  None = "none",
  /** Query language value for English (United States). */
  EnUs = "en-us",
  /** Query language value for English (Great Britain). */
  EnGb = "en-gb",
  /** Query language value for English (India). */
  EnIn = "en-in",
  /** Query language value for English (Canada). */
  EnCa = "en-ca",
  /** Query language value for English (Australia). */
  EnAu = "en-au",
  /** Query language value for French (France). */
  FrFr = "fr-fr",
  /** Query language value for French (Canada). */
  FrCa = "fr-ca",
  /** Query language value for German (Germany). */
  DeDe = "de-de",
  /** Query language value for Spanish (Spain). */
  EsEs = "es-es",
  /** Query language value for Spanish (Mexico). */
  EsMx = "es-mx",
  /** Query language value for Chinese (China). */
  ZhCn = "zh-cn",
  /** Query language value for Chinese (Taiwan). */
  ZhTw = "zh-tw",
  /** Query language value for Portuguese (Brazil). */
  PtBr = "pt-br",
  /** Query language value for Portuguese (Portugal). */
  PtPt = "pt-pt",
  /** Query language value for Italian (Italy). */
  ItIt = "it-it",
  /** Query language value for Japanese (Japan). */
  JaJp = "ja-jp",
  /** Query language value for Korean (Korea). */
  KoKr = "ko-kr",
  /** Query language value for Russian (Russia). */
  RuRu = "ru-ru",
  /** Query language value for Czech (Czech Republic). */
  CsCz = "cs-cz",
  /** Query language value for Dutch (Belgium). */
  NlBe = "nl-be",
  /** Query language value for Dutch (Netherlands). */
  NlNl = "nl-nl",
  /** Query language value for Hungarian (Hungary). */
  HuHu = "hu-hu",
  /** Query language value for Polish (Poland). */
  PlPl = "pl-pl",
  /** Query language value for Swedish (Sweden). */
  SvSe = "sv-se",
  /** Query language value for Turkish (Turkey). */
  TrTr = "tr-tr",
  /** Query language value for Hindi (India). */
  HiIn = "hi-in",
  /** Query language value for Arabic (Saudi Arabia). */
  ArSa = "ar-sa",
  /** Query language value for Arabic (Egypt). */
  ArEg = "ar-eg",
  /** Query language value for Arabic (Morocco). */
  ArMa = "ar-ma",
  /** Query language value for Arabic (Kuwait). */
  ArKw = "ar-kw",
  /** Query language value for Arabic (Jordan). */
  ArJo = "ar-jo",
  /** Query language value for Danish (Denmark). */
  DaDk = "da-dk",
  /** Query language value for Norwegian (Norway). */
  NoNo = "no-no",
  /** Query language value for Bulgarian (Bulgaria). */
  BgBg = "bg-bg",
  /** Query language value for Croatian (Croatia). */
  HrHr = "hr-hr",
  /** Query language value for Croatian (Bosnia and Herzegovina). */
  HrBa = "hr-ba",
  /** Query language value for Malay (Malaysia). */
  MsMy = "ms-my",
  /** Query language value for Malay (Brunei Darussalam). */
  MsBn = "ms-bn",
  /** Query language value for Slovenian (Slovenia). */
  SlSl = "sl-sl",
  /** Query language value for Tamil (India). */
  TaIn = "ta-in",
  /** Query language value for Vietnamese (Viet Nam). */
  ViVn = "vi-vn",
  /** Query language value for Greek (Greece). */
  ElGr = "el-gr",
  /** Query language value for Romanian (Romania). */
  RoRo = "ro-ro",
  /** Query language value for Icelandic (Iceland). */
  IsIs = "is-is",
  /** Query language value for Indonesian (Indonesia). */
  IdId = "id-id",
  /** Query language value for Thai (Thailand). */
  ThTh = "th-th",
  /** Query language value for Lithuanian (Lithuania). */
  LtLt = "lt-lt",
  /** Query language value for Ukrainian (Ukraine). */
  UkUa = "uk-ua",
  /** Query language value for Latvian (Latvia). */
  LvLv = "lv-lv",
  /** Query language value for Estonian (Estonia). */
  EtEe = "et-ee",
  /** Query language value for Catalan. */
  CaEs = "ca-es",
  /** Query language value for Finnish (Finland). */
  FiFi = "fi-fi",
  /** Query language value for Serbian (Bosnia and Herzegovina). */
  SrBa = "sr-ba",
  /** Query language value for Serbian (Montenegro). */
  SrMe = "sr-me",
  /** Query language value for Serbian (Serbia). */
  SrRs = "sr-rs",
  /** Query language value for Slovak (Slovakia). */
  SkSk = "sk-sk",
  /** Query language value for Norwegian (Norway). */
  NbNo = "nb-no",
  /** Query language value for Armenian (Armenia). */
  HyAm = "hy-am",
  /** Query language value for Bengali (India). */
  BnIn = "bn-in",
  /** Query language value for Basque. */
  EuEs = "eu-es",
  /** Query language value for Galician. */
  GlEs = "gl-es",
  /** Query language value for Gujarati (India). */
  GuIn = "gu-in",
  /** Query language value for Hebrew (Israel). */
  HeIl = "he-il",
  /** Query language value for Irish (Ireland). */
  GaIe = "ga-ie",
  /** Query language value for Kannada (India). */
  KnIn = "kn-in",
  /** Query language value for Malayalam (India). */
  MlIn = "ml-in",
  /** Query language value for Marathi (India). */
  MrIn = "mr-in",
  /** Query language value for Persian (U.A.E.). */
  FaAe = "fa-ae",
  /** Query language value for Punjabi (India). */
  PaIn = "pa-in",
  /** Query language value for Telugu (India). */
  TeIn = "te-in",
  /** Query language value for Urdu (Pakistan). */
  UrPk = "ur-pk",
}

/**
 * The language of the query. \
 * {@link KnownAzureSearchDocumentsQueryLanguage} can be used interchangeably with AzureSearchDocumentsQueryLanguage,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **none**: Query language not specified. \
 * **en-us**: Query language value for English (United States). \
 * **en-gb**: Query language value for English (Great Britain). \
 * **en-in**: Query language value for English (India). \
 * **en-ca**: Query language value for English (Canada). \
 * **en-au**: Query language value for English (Australia). \
 * **fr-fr**: Query language value for French (France). \
 * **fr-ca**: Query language value for French (Canada). \
 * **de-de**: Query language value for German (Germany). \
 * **es-es**: Query language value for Spanish (Spain). \
 * **es-mx**: Query language value for Spanish (Mexico). \
 * **zh-cn**: Query language value for Chinese (China). \
 * **zh-tw**: Query language value for Chinese (Taiwan). \
 * **pt-br**: Query language value for Portuguese (Brazil). \
 * **pt-pt**: Query language value for Portuguese (Portugal). \
 * **it-it**: Query language value for Italian (Italy). \
 * **ja-jp**: Query language value for Japanese (Japan). \
 * **ko-kr**: Query language value for Korean (Korea). \
 * **ru-ru**: Query language value for Russian (Russia). \
 * **cs-cz**: Query language value for Czech (Czech Republic). \
 * **nl-be**: Query language value for Dutch (Belgium). \
 * **nl-nl**: Query language value for Dutch (Netherlands). \
 * **hu-hu**: Query language value for Hungarian (Hungary). \
 * **pl-pl**: Query language value for Polish (Poland). \
 * **sv-se**: Query language value for Swedish (Sweden). \
 * **tr-tr**: Query language value for Turkish (Turkey). \
 * **hi-in**: Query language value for Hindi (India). \
 * **ar-sa**: Query language value for Arabic (Saudi Arabia). \
 * **ar-eg**: Query language value for Arabic (Egypt). \
 * **ar-ma**: Query language value for Arabic (Morocco). \
 * **ar-kw**: Query language value for Arabic (Kuwait). \
 * **ar-jo**: Query language value for Arabic (Jordan). \
 * **da-dk**: Query language value for Danish (Denmark). \
 * **no-no**: Query language value for Norwegian (Norway). \
 * **bg-bg**: Query language value for Bulgarian (Bulgaria). \
 * **hr-hr**: Query language value for Croatian (Croatia). \
 * **hr-ba**: Query language value for Croatian (Bosnia and Herzegovina). \
 * **ms-my**: Query language value for Malay (Malaysia). \
 * **ms-bn**: Query language value for Malay (Brunei Darussalam). \
 * **sl-sl**: Query language value for Slovenian (Slovenia). \
 * **ta-in**: Query language value for Tamil (India). \
 * **vi-vn**: Query language value for Vietnamese (Viet Nam). \
 * **el-gr**: Query language value for Greek (Greece). \
 * **ro-ro**: Query language value for Romanian (Romania). \
 * **is-is**: Query language value for Icelandic (Iceland). \
 * **id-id**: Query language value for Indonesian (Indonesia). \
 * **th-th**: Query language value for Thai (Thailand). \
 * **lt-lt**: Query language value for Lithuanian (Lithuania). \
 * **uk-ua**: Query language value for Ukrainian (Ukraine). \
 * **lv-lv**: Query language value for Latvian (Latvia). \
 * **et-ee**: Query language value for Estonian (Estonia). \
 * **ca-es**: Query language value for Catalan. \
 * **fi-fi**: Query language value for Finnish (Finland). \
 * **sr-ba**: Query language value for Serbian (Bosnia and Herzegovina). \
 * **sr-me**: Query language value for Serbian (Montenegro). \
 * **sr-rs**: Query language value for Serbian (Serbia). \
 * **sk-sk**: Query language value for Slovak (Slovakia). \
 * **nb-no**: Query language value for Norwegian (Norway). \
 * **hy-am**: Query language value for Armenian (Armenia). \
 * **bn-in**: Query language value for Bengali (India). \
 * **eu-es**: Query language value for Basque. \
 * **gl-es**: Query language value for Galician. \
 * **gu-in**: Query language value for Gujarati (India). \
 * **he-il**: Query language value for Hebrew (Israel). \
 * **ga-ie**: Query language value for Irish (Ireland). \
 * **kn-in**: Query language value for Kannada (India). \
 * **ml-in**: Query language value for Malayalam (India). \
 * **mr-in**: Query language value for Marathi (India). \
 * **fa-ae**: Query language value for Persian (U.A.E.). \
 * **pa-in**: Query language value for Punjabi (India). \
 * **te-in**: Query language value for Telugu (India). \
 * **ur-pk**: Query language value for Urdu (Pakistan).
 */
export type AzureSearchDocumentsQueryLanguage = string;

/** Improve search recall by spell-correcting individual search query terms. */
export enum KnownAzureSearchDocumentsQuerySpellerType {
  /** Speller not enabled. */
  None = "none",
  /** Speller corrects individual query terms using a static lexicon for the language specified by the queryLanguage parameter. */
  Lexicon = "lexicon",
}

/**
 * Improve search recall by spell-correcting individual search query terms. \
 * {@link KnownAzureSearchDocumentsQuerySpellerType} can be used interchangeably with AzureSearchDocumentsQuerySpellerType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **none**: Speller not enabled. \
 * **lexicon**: Speller corrects individual query terms using a static lexicon for the language specified by the queryLanguage parameter.
 */
export type AzureSearchDocumentsQuerySpellerType = string;

/** Allows the user to choose whether a semantic call should fail completely, or to return partial results. */
export enum KnownAzureSearchDocumentsSemanticErrorMode {
  /** If the semantic processing fails, partial results still return. The definition of partial results depends on what semantic step failed and what was the reason for failure. */
  Partial = "partial",
  /** If there is an exception during the semantic processing step, the query will fail and return the appropriate HTTP code depending on the error. */
  Fail = "fail",
}

/**
 * Allows the user to choose whether a semantic call should fail completely, or to return partial results. \
 * {@link KnownAzureSearchDocumentsSemanticErrorMode} can be used interchangeably with AzureSearchDocumentsSemanticErrorMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **partial**: If the semantic processing fails, partial results still return. The definition of partial results depends on what semantic step failed and what was the reason for failure. \
 * **fail**: If there is an exception during the semantic processing step, the query will fail and return the appropriate HTTP code depending on the error.
 */
export type AzureSearchDocumentsSemanticErrorMode = string;

/** This parameter is only valid if the query type is `semantic`. If set, the query returns answers extracted from key passages in the highest ranked documents. The number of answers returned can be configured by appending the pipe character `|` followed by the `count-<number of answers>` option after the answers parameter value, such as `extractive|count-3`. Default count is 1. The confidence threshold can be configured by appending the pipe character `|` followed by the `threshold-<confidence threshold>` option after the answers parameter value, such as `extractive|threshold-0.9`. Default threshold is 0.7. The maximum character length of answers can be configured by appending the pipe character '|' followed by the 'count-<number of maximum character length>', such as 'extractive|maxcharlength-600'. */
export enum KnownAzureSearchDocumentsQueryAnswerType {
  /** Do not return answers for the query. */
  None = "none",
  /** Extracts answer candidates from the contents of the documents returned in response to a query expressed as a question in natural language. */
  Extractive = "extractive",
}

/**
 * This parameter is only valid if the query type is `semantic`. If set, the query returns answers extracted from key passages in the highest ranked documents. The number of answers returned can be configured by appending the pipe character `|` followed by the `count-<number of answers>` option after the answers parameter value, such as `extractive|count-3`. Default count is 1. The confidence threshold can be configured by appending the pipe character `|` followed by the `threshold-<confidence threshold>` option after the answers parameter value, such as `extractive|threshold-0.9`. Default threshold is 0.7. The maximum character length of answers can be configured by appending the pipe character '|' followed by the 'count-<number of maximum character length>', such as 'extractive|maxcharlength-600'. \
 * {@link KnownAzureSearchDocumentsQueryAnswerType} can be used interchangeably with AzureSearchDocumentsQueryAnswerType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **none**: Do not return answers for the query. \
 * **extractive**: Extracts answer candidates from the contents of the documents returned in response to a query expressed as a question in natural language.
 */
export type AzureSearchDocumentsQueryAnswerType = string;

/** This parameter is only valid if the query type is `semantic`. If set, the query returns captions extracted from key passages in the highest ranked documents. When Captions is set to `extractive`, highlighting is enabled by default, and can be configured by appending the pipe character `|` followed by the `highlight-<true/false>` option, such as `extractive|highlight-true`. Defaults to `None`. The maximum character length of captions can be configured by appending the pipe character '|' followed by the 'count-<number of maximum character length>', such as 'extractive|maxcharlength-600'. */
export enum KnownAzureSearchDocumentsQueryCaptionType {
  /** Do not return captions for the query. */
  None = "none",
  /** Extracts captions from the matching documents that contain passages relevant to the search query. */
  Extractive = "extractive",
}

/**
 * This parameter is only valid if the query type is `semantic`. If set, the query returns captions extracted from key passages in the highest ranked documents. When Captions is set to `extractive`, highlighting is enabled by default, and can be configured by appending the pipe character `|` followed by the `highlight-<true/false>` option, such as `extractive|highlight-true`. Defaults to `None`. The maximum character length of captions can be configured by appending the pipe character '|' followed by the 'count-<number of maximum character length>', such as 'extractive|maxcharlength-600'. \
 * {@link KnownAzureSearchDocumentsQueryCaptionType} can be used interchangeably with AzureSearchDocumentsQueryCaptionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **none**: Do not return captions for the query. \
 * **extractive**: Extracts captions from the matching documents that contain passages relevant to the search query.
 */
export type AzureSearchDocumentsQueryCaptionType = string;

/** This parameter is only valid if the query type is `semantic`. When QueryRewrites is set to `generative`, the query terms are sent to a generate model which will produce 10 (default) rewrites to help increase the recall of the request. The requested count can be configured by appending the pipe character `|` followed by the `count-<number of rewrites>` option, such as `generative|count-3`. Defaults to `None`. */
export enum KnownAzureSearchDocumentsQueryRewritesType {
  /** Do not generate additional query rewrites for this query. */
  None = "none",
  /** Generate alternative query terms to increase the recall of a search request. */
  Generative = "generative",
}

/**
 * This parameter is only valid if the query type is `semantic`. When QueryRewrites is set to `generative`, the query terms are sent to a generate model which will produce 10 (default) rewrites to help increase the recall of the request. The requested count can be configured by appending the pipe character `|` followed by the `count-<number of rewrites>` option, such as `generative|count-3`. Defaults to `None`. \
 * {@link KnownAzureSearchDocumentsQueryRewritesType} can be used interchangeably with AzureSearchDocumentsQueryRewritesType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **none**: Do not generate additional query rewrites for this query. \
 * **generative**: Generate alternative query terms to increase the recall of a search request.
 */
export type AzureSearchDocumentsQueryRewritesType = string;

export function azureSearchDocumentsVectorQueryUnionArraySerializer(
  result: Array<AzureSearchDocumentsVectorQueryUnion>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsVectorQueryUnionSerializer(item);
  });
}

export function azureSearchDocumentsVectorQueryUnionArrayDeserializer(
  result: Array<AzureSearchDocumentsVectorQueryUnion>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsVectorQueryUnionDeserializer(item);
  });
}

/** The query parameters for vector and hybrid search queries. */
export interface AzureSearchDocumentsVectorQuery {
  /** Number of nearest neighbors to return as top hits. */
  kNearestNeighbors?: number;
  /** Vector Fields of type Collection(Edm.Single) to be included in the vector searched. */
  fields?: string;
  /** When true, triggers an exhaustive k-nearest neighbor search across all vectors within the vector index. Useful for scenarios where exact matches are critical, such as determining ground truth values. */
  exhaustive?: boolean;
  /** Oversampling factor. Minimum value is 1. It overrides the 'defaultOversampling' parameter configured in the index definition. It can be set only when 'rerankWithOriginalVectors' is true. This parameter is only permitted when a compression method is used on the underlying vector field. */
  oversampling?: number;
  /** Relative weight of the vector query when compared to other vector query and/or the text query within the same search request. This value is used when combining the results of multiple ranking lists produced by the different vector queries and/or the results retrieved through the text query. The higher the weight, the higher the documents that matched that query will be in the final ranking. Default is 1.0 and the value needs to be a positive number larger than zero. */
  weight?: number;
  /** The threshold used for vector queries. Note this can only be set if all 'fields' use the same similarity metric. */
  threshold?: AzureSearchDocumentsVectorThresholdUnion;
  /** The OData filter expression to apply to this specific vector query. If no filter expression is defined at the vector level, the expression defined in the top level filter parameter is used instead. */
  filterOverride?: string;
  /** The OData filter expression to apply to this specific vector query. If no filter expression is defined at the vector level, the expression defined in the top level filter parameter is used instead. */
  perDocumentVectorLimit?: number;
  /** Type of query. */
  /** The discriminator possible values: vector, text, imageUrl, imageBinary */
  kind: AzureSearchDocumentsVectorQueryKind;
}

export function azureSearchDocumentsVectorQuerySerializer(
  item: AzureSearchDocumentsVectorQuery,
): any {
  return {
    k: item["kNearestNeighbors"],
    fields: item["fields"],
    exhaustive: item["exhaustive"],
    oversampling: item["oversampling"],
    weight: item["weight"],
    threshold: !item["threshold"]
      ? item["threshold"]
      : azureSearchDocumentsVectorThresholdUnionSerializer(item["threshold"]),
    filterOverride: item["filterOverride"],
    perDocumentVectorLimit: item["perDocumentVectorLimit"],
    kind: item["kind"],
  };
}

export function azureSearchDocumentsVectorQueryDeserializer(
  item: any,
): AzureSearchDocumentsVectorQuery {
  return {
    kNearestNeighbors: item["k"],
    fields: item["fields"],
    exhaustive: item["exhaustive"],
    oversampling: item["oversampling"],
    weight: item["weight"],
    threshold: !item["threshold"]
      ? item["threshold"]
      : azureSearchDocumentsVectorThresholdUnionDeserializer(item["threshold"]),
    filterOverride: item["filterOverride"],
    perDocumentVectorLimit: item["perDocumentVectorLimit"],
    kind: item["kind"],
  };
}

/** Alias for AzureSearchDocumentsVectorQueryUnion */
export type AzureSearchDocumentsVectorQueryUnion =
  | AzureSearchDocumentsVectorizedQuery
  | AzureSearchDocumentsVectorizableTextQuery
  | AzureSearchDocumentsVectorizableImageUrlQuery
  | AzureSearchDocumentsVectorizableImageBinaryQuery
  | AzureSearchDocumentsVectorQuery;

export function azureSearchDocumentsVectorQueryUnionSerializer(
  item: AzureSearchDocumentsVectorQueryUnion,
): any {
  switch (item.kind) {
    case "vector":
      return azureSearchDocumentsVectorizedQuerySerializer(
        item as AzureSearchDocumentsVectorizedQuery,
      );

    case "text":
      return azureSearchDocumentsVectorizableTextQuerySerializer(
        item as AzureSearchDocumentsVectorizableTextQuery,
      );

    case "imageUrl":
      return azureSearchDocumentsVectorizableImageUrlQuerySerializer(
        item as AzureSearchDocumentsVectorizableImageUrlQuery,
      );

    case "imageBinary":
      return azureSearchDocumentsVectorizableImageBinaryQuerySerializer(
        item as AzureSearchDocumentsVectorizableImageBinaryQuery,
      );

    default:
      return azureSearchDocumentsVectorQuerySerializer(item);
  }
}

export function azureSearchDocumentsVectorQueryUnionDeserializer(
  item: any,
): AzureSearchDocumentsVectorQueryUnion {
  switch (item.kind) {
    case "vector":
      return azureSearchDocumentsVectorizedQueryDeserializer(
        item as AzureSearchDocumentsVectorizedQuery,
      );

    case "text":
      return azureSearchDocumentsVectorizableTextQueryDeserializer(
        item as AzureSearchDocumentsVectorizableTextQuery,
      );

    case "imageUrl":
      return azureSearchDocumentsVectorizableImageUrlQueryDeserializer(
        item as AzureSearchDocumentsVectorizableImageUrlQuery,
      );

    case "imageBinary":
      return azureSearchDocumentsVectorizableImageBinaryQueryDeserializer(
        item as AzureSearchDocumentsVectorizableImageBinaryQuery,
      );

    default:
      return azureSearchDocumentsVectorQueryDeserializer(item);
  }
}

/** The threshold used for vector queries. */
export interface AzureSearchDocumentsVectorThreshold {
  /** Type of threshold. */
  /** The discriminator possible values: vectorSimilarity, searchScore */
  kind: AzureSearchDocumentsVectorThresholdKind;
}

export function azureSearchDocumentsVectorThresholdSerializer(
  item: AzureSearchDocumentsVectorThreshold,
): any {
  return { kind: item["kind"] };
}

export function azureSearchDocumentsVectorThresholdDeserializer(
  item: any,
): AzureSearchDocumentsVectorThreshold {
  return {
    kind: item["kind"],
  };
}

/** Alias for AzureSearchDocumentsVectorThresholdUnion */
export type AzureSearchDocumentsVectorThresholdUnion =
  | AzureSearchDocumentsVectorSimilarityThreshold
  | AzureSearchDocumentsSearchScoreThreshold
  | AzureSearchDocumentsVectorThreshold;

export function azureSearchDocumentsVectorThresholdUnionSerializer(
  item: AzureSearchDocumentsVectorThresholdUnion,
): any {
  switch (item.kind) {
    case "vectorSimilarity":
      return azureSearchDocumentsVectorSimilarityThresholdSerializer(
        item as AzureSearchDocumentsVectorSimilarityThreshold,
      );

    case "searchScore":
      return azureSearchDocumentsSearchScoreThresholdSerializer(
        item as AzureSearchDocumentsSearchScoreThreshold,
      );

    default:
      return azureSearchDocumentsVectorThresholdSerializer(item);
  }
}

export function azureSearchDocumentsVectorThresholdUnionDeserializer(
  item: any,
): AzureSearchDocumentsVectorThresholdUnion {
  switch (item.kind) {
    case "vectorSimilarity":
      return azureSearchDocumentsVectorSimilarityThresholdDeserializer(
        item as AzureSearchDocumentsVectorSimilarityThreshold,
      );

    case "searchScore":
      return azureSearchDocumentsSearchScoreThresholdDeserializer(
        item as AzureSearchDocumentsSearchScoreThreshold,
      );

    default:
      return azureSearchDocumentsVectorThresholdDeserializer(item);
  }
}

/** The kind of vector query being performed. */
export enum KnownAzureSearchDocumentsVectorThresholdKind {
  /** The results of the vector query will be filtered based on the vector similarity metric. Note this is the canonical definition of similarity metric, not the 'distance' version. The threshold direction (larger or smaller) will be chosen automatically according to the metric used by the field. */
  VectorSimilarity = "vectorSimilarity",
  /** The results of the vector query will filter based on the '@search.score' value. Note this is the @search.score returned as part of the search response. The threshold direction will be chosen for higher @search.score. */
  SearchScore = "searchScore",
}

/**
 * The kind of vector query being performed. \
 * {@link KnownAzureSearchDocumentsVectorThresholdKind} can be used interchangeably with AzureSearchDocumentsVectorThresholdKind,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **vectorSimilarity**: The results of the vector query will be filtered based on the vector similarity metric. Note this is the canonical definition of similarity metric, not the 'distance' version. The threshold direction (larger or smaller) will be chosen automatically according to the metric used by the field. \
 * **searchScore**: The results of the vector query will filter based on the '@search.score' value. Note this is the @search.score returned as part of the search response. The threshold direction will be chosen for higher @search.score.
 */
export type AzureSearchDocumentsVectorThresholdKind = string;

/** The results of the vector query will be filtered based on the vector similarity metric. Note this is the canonical definition of similarity metric, not the 'distance' version. The threshold direction (larger or smaller) will be chosen automatically according to the metric used by the field. */
export interface AzureSearchDocumentsVectorSimilarityThreshold
  extends AzureSearchDocumentsVectorThreshold {
  /** The threshold will filter based on the similarity metric value. Note this is the canonical definition of similarity metric, not the 'distance' version. The threshold direction (larger or smaller) will be chosen automatically according to the metric used by the field. */
  value: number;
  /** The kind of threshold used to filter vector queries */
  kind: "vectorSimilarity";
}

export function azureSearchDocumentsVectorSimilarityThresholdSerializer(
  item: AzureSearchDocumentsVectorSimilarityThreshold,
): any {
  return { kind: item["kind"], value: item["value"] };
}

export function azureSearchDocumentsVectorSimilarityThresholdDeserializer(
  item: any,
): AzureSearchDocumentsVectorSimilarityThreshold {
  return {
    kind: item["kind"],
    value: item["value"],
  };
}

/** The results of the vector query will filter based on the '@search.score' value. Note this is the @search.score returned as part of the search response. The threshold direction will be chosen for higher @search.score. */
export interface AzureSearchDocumentsSearchScoreThreshold
  extends AzureSearchDocumentsVectorThreshold {
  /** The threshold will filter based on the '@search.score' value. Note this is the @search.score returned as part of the search response. The threshold direction will be chosen for higher @search.score. */
  value: number;
  /** The kind of threshold used to filter vector queries */
  kind: "searchScore";
}

export function azureSearchDocumentsSearchScoreThresholdSerializer(
  item: AzureSearchDocumentsSearchScoreThreshold,
): any {
  return { kind: item["kind"], value: item["value"] };
}

export function azureSearchDocumentsSearchScoreThresholdDeserializer(
  item: any,
): AzureSearchDocumentsSearchScoreThreshold {
  return {
    kind: item["kind"],
    value: item["value"],
  };
}

/** The kind of vector query being performed. */
export enum KnownAzureSearchDocumentsVectorQueryKind {
  /** Vector query where a raw vector value is provided. */
  Vector = "vector",
  /** Vector query where a text value that needs to be vectorized is provided. */
  Text = "text",
  /** Vector query where an url that represents an image value that needs to be vectorized is provided. */
  ImageUrl = "imageUrl",
  /** Vector query where a base 64 encoded binary of an image that needs to be vectorized is provided. */
  ImageBinary = "imageBinary",
}

/**
 * The kind of vector query being performed. \
 * {@link KnownAzureSearchDocumentsVectorQueryKind} can be used interchangeably with AzureSearchDocumentsVectorQueryKind,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **vector**: Vector query where a raw vector value is provided. \
 * **text**: Vector query where a text value that needs to be vectorized is provided. \
 * **imageUrl**: Vector query where an url that represents an image value that needs to be vectorized is provided. \
 * **imageBinary**: Vector query where a base 64 encoded binary of an image that needs to be vectorized is provided.
 */
export type AzureSearchDocumentsVectorQueryKind = string;

/** The query parameters to use for vector search when a raw vector value is provided. */
export interface AzureSearchDocumentsVectorizedQuery
  extends AzureSearchDocumentsVectorQuery {
  /** The vector representation of a search query. */
  vector: number[];
  /** The kind of vector query being performed. */
  kind: "vector";
}

export function azureSearchDocumentsVectorizedQuerySerializer(
  item: AzureSearchDocumentsVectorizedQuery,
): any {
  return {
    k: item["kNearestNeighbors"],
    fields: item["fields"],
    exhaustive: item["exhaustive"],
    oversampling: item["oversampling"],
    weight: item["weight"],
    threshold: !item["threshold"]
      ? item["threshold"]
      : azureSearchDocumentsVectorThresholdUnionSerializer(item["threshold"]),
    filterOverride: item["filterOverride"],
    perDocumentVectorLimit: item["perDocumentVectorLimit"],
    kind: item["kind"],
    vector: item["vector"].map((p: any) => {
      return p;
    }),
  };
}

export function azureSearchDocumentsVectorizedQueryDeserializer(
  item: any,
): AzureSearchDocumentsVectorizedQuery {
  return {
    kNearestNeighbors: item["k"],
    fields: item["fields"],
    exhaustive: item["exhaustive"],
    oversampling: item["oversampling"],
    weight: item["weight"],
    threshold: !item["threshold"]
      ? item["threshold"]
      : azureSearchDocumentsVectorThresholdUnionDeserializer(item["threshold"]),
    filterOverride: item["filterOverride"],
    perDocumentVectorLimit: item["perDocumentVectorLimit"],
    kind: item["kind"],
    vector: item["vector"].map((p: any) => {
      return p;
    }),
  };
}

/** The query parameters to use for vector search when a text value that needs to be vectorized is provided. */
export interface AzureSearchDocumentsVectorizableTextQuery
  extends AzureSearchDocumentsVectorQuery {
  /** The text to be vectorized to perform a vector search query. */
  text: string;
  /** Can be configured to let a generative model rewrite the query before sending it to be vectorized. */
  queryRewrites?: AzureSearchDocumentsQueryRewritesType;
  /** The kind of vector query being performed. */
  kind: "text";
}

export function azureSearchDocumentsVectorizableTextQuerySerializer(
  item: AzureSearchDocumentsVectorizableTextQuery,
): any {
  return {
    k: item["kNearestNeighbors"],
    fields: item["fields"],
    exhaustive: item["exhaustive"],
    oversampling: item["oversampling"],
    weight: item["weight"],
    threshold: !item["threshold"]
      ? item["threshold"]
      : azureSearchDocumentsVectorThresholdUnionSerializer(item["threshold"]),
    filterOverride: item["filterOverride"],
    perDocumentVectorLimit: item["perDocumentVectorLimit"],
    kind: item["kind"],
    text: item["text"],
    queryRewrites: item["queryRewrites"],
  };
}

export function azureSearchDocumentsVectorizableTextQueryDeserializer(
  item: any,
): AzureSearchDocumentsVectorizableTextQuery {
  return {
    kNearestNeighbors: item["k"],
    fields: item["fields"],
    exhaustive: item["exhaustive"],
    oversampling: item["oversampling"],
    weight: item["weight"],
    threshold: !item["threshold"]
      ? item["threshold"]
      : azureSearchDocumentsVectorThresholdUnionDeserializer(item["threshold"]),
    filterOverride: item["filterOverride"],
    perDocumentVectorLimit: item["perDocumentVectorLimit"],
    kind: item["kind"],
    text: item["text"],
    queryRewrites: item["queryRewrites"],
  };
}

/** The query parameters to use for vector search when an url that represents an image value that needs to be vectorized is provided. */
export interface AzureSearchDocumentsVectorizableImageUrlQuery
  extends AzureSearchDocumentsVectorQuery {
  /** The URL of an image to be vectorized to perform a vector search query. */
  url?: string;
  /** The kind of vector query being performed. */
  kind: "imageUrl";
}

export function azureSearchDocumentsVectorizableImageUrlQuerySerializer(
  item: AzureSearchDocumentsVectorizableImageUrlQuery,
): any {
  return {
    k: item["kNearestNeighbors"],
    fields: item["fields"],
    exhaustive: item["exhaustive"],
    oversampling: item["oversampling"],
    weight: item["weight"],
    threshold: !item["threshold"]
      ? item["threshold"]
      : azureSearchDocumentsVectorThresholdUnionSerializer(item["threshold"]),
    filterOverride: item["filterOverride"],
    perDocumentVectorLimit: item["perDocumentVectorLimit"],
    kind: item["kind"],
    url: item["url"],
  };
}

export function azureSearchDocumentsVectorizableImageUrlQueryDeserializer(
  item: any,
): AzureSearchDocumentsVectorizableImageUrlQuery {
  return {
    kNearestNeighbors: item["k"],
    fields: item["fields"],
    exhaustive: item["exhaustive"],
    oversampling: item["oversampling"],
    weight: item["weight"],
    threshold: !item["threshold"]
      ? item["threshold"]
      : azureSearchDocumentsVectorThresholdUnionDeserializer(item["threshold"]),
    filterOverride: item["filterOverride"],
    perDocumentVectorLimit: item["perDocumentVectorLimit"],
    kind: item["kind"],
    url: item["url"],
  };
}

/** The query parameters to use for vector search when a base 64 encoded binary of an image that needs to be vectorized is provided. */
export interface AzureSearchDocumentsVectorizableImageBinaryQuery
  extends AzureSearchDocumentsVectorQuery {
  /** The base 64 encoded binary of an image to be vectorized to perform a vector search query. */
  base64Image?: string;
  /** The kind of vector query being performed. */
  kind: "imageBinary";
}

export function azureSearchDocumentsVectorizableImageBinaryQuerySerializer(
  item: AzureSearchDocumentsVectorizableImageBinaryQuery,
): any {
  return {
    k: item["kNearestNeighbors"],
    fields: item["fields"],
    exhaustive: item["exhaustive"],
    oversampling: item["oversampling"],
    weight: item["weight"],
    threshold: !item["threshold"]
      ? item["threshold"]
      : azureSearchDocumentsVectorThresholdUnionSerializer(item["threshold"]),
    filterOverride: item["filterOverride"],
    perDocumentVectorLimit: item["perDocumentVectorLimit"],
    kind: item["kind"],
    base64Image: item["base64Image"],
  };
}

export function azureSearchDocumentsVectorizableImageBinaryQueryDeserializer(
  item: any,
): AzureSearchDocumentsVectorizableImageBinaryQuery {
  return {
    kNearestNeighbors: item["k"],
    fields: item["fields"],
    exhaustive: item["exhaustive"],
    oversampling: item["oversampling"],
    weight: item["weight"],
    threshold: !item["threshold"]
      ? item["threshold"]
      : azureSearchDocumentsVectorThresholdUnionDeserializer(item["threshold"]),
    filterOverride: item["filterOverride"],
    perDocumentVectorLimit: item["perDocumentVectorLimit"],
    kind: item["kind"],
    base64Image: item["base64Image"],
  };
}

/** Determines whether or not filters are applied before or after the vector search is performed. */
export enum KnownAzureSearchDocumentsVectorFilterMode {
  /** The filter will be applied after the candidate set of vector results is returned. Depending on the filter selectivity, this can result in fewer results than requested by the parameter 'k'. */
  PostFilter = "postFilter",
  /** The filter will be applied before the search query. */
  PreFilter = "preFilter",
  /** The filter will be applied after the global top-k candidate set of vector results is returned. */
  StrictPostFilter = "strictPostFilter",
}

/**
 * Determines whether or not filters are applied before or after the vector search is performed. \
 * {@link KnownAzureSearchDocumentsVectorFilterMode} can be used interchangeably with AzureSearchDocumentsVectorFilterMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **postFilter**: The filter will be applied after the candidate set of vector results is returned. Depending on the filter selectivity, this can result in fewer results than requested by the parameter 'k'. \
 * **preFilter**: The filter will be applied before the search query. \
 * **strictPostFilter**: The filter will be applied after the global top-k candidate set of vector results is returned.
 */
export type AzureSearchDocumentsVectorFilterMode = string;

/** TThe query parameters to configure hybrid search behaviors. */
export interface AzureSearchDocumentsHybridSearch {
  /** Determines the maximum number of documents to be retrieved by the text query portion of a hybrid search request. Those documents will be combined with the documents matching the vector queries to produce a single final list of results. Choosing a larger maxTextRecallSize value will allow retrieving and paging through more documents (using the top and skip parameters), at the cost of higher resource utilization and higher latency. The value needs to be between 1 and 10,000. Default is 1000. */
  maxTextRecallSize?: number;
  /** Determines whether the count and facets should includes all documents that matched the search query, or only the documents that are retrieved within the 'maxTextRecallSize' window. */
  countAndFacetMode?: AzureSearchDocumentsHybridCountAndFacetMode;
}

export function azureSearchDocumentsHybridSearchSerializer(
  item: AzureSearchDocumentsHybridSearch,
): any {
  return {
    maxTextRecallSize: item["maxTextRecallSize"],
    countAndFacetMode: item["countAndFacetMode"],
  };
}

export function azureSearchDocumentsHybridSearchDeserializer(
  item: any,
): AzureSearchDocumentsHybridSearch {
  return {
    maxTextRecallSize: item["maxTextRecallSize"],
    countAndFacetMode: item["countAndFacetMode"],
  };
}

/** Determines whether the count and facets should includes all documents that matched the search query, or only the documents that are retrieved within the 'maxTextRecallSize' window. The default value is 'countAllResults'. */
export enum KnownAzureSearchDocumentsHybridCountAndFacetMode {
  /** Only include documents that were matched within the 'maxTextRecallSize' retrieval window when computing 'count' and 'facets'. */
  CountRetrievableResults = "countRetrievableResults",
  /** Include all documents that were matched by the search query when computing 'count' and 'facets', regardless of whether or not those documents are within the 'maxTextRecallSize' retrieval window. */
  CountAllResults = "countAllResults",
}

/**
 * Determines whether the count and facets should includes all documents that matched the search query, or only the documents that are retrieved within the 'maxTextRecallSize' window. The default value is 'countAllResults'. \
 * {@link KnownAzureSearchDocumentsHybridCountAndFacetMode} can be used interchangeably with AzureSearchDocumentsHybridCountAndFacetMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **countRetrievableResults**: Only include documents that were matched within the 'maxTextRecallSize' retrieval window when computing 'count' and 'facets'. \
 * **countAllResults**: Include all documents that were matched by the search query when computing 'count' and 'facets', regardless of whether or not those documents are within the 'maxTextRecallSize' retrieval window.
 */
export type AzureSearchDocumentsHybridCountAndFacetMode = string;

export function azureSearchDocumentsSearchResultArraySerializer(
  result: Array<AzureSearchDocumentsSearchResult>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsSearchResultSerializer(item);
  });
}

export function azureSearchDocumentsSearchResultArrayDeserializer(
  result: Array<AzureSearchDocumentsSearchResult>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsSearchResultDeserializer(item);
  });
}

/** Contains a document found by a search query, plus associated metadata. */
export interface AzureSearchDocumentsSearchResult {
  /** The relevance score of the document compared to other documents returned by the query. */
  score: number;
  /** The relevance score computed by the semantic ranker for the top search results. Search results are sorted by the RerankerScore first and then by the Score. RerankerScore is only returned for queries of type 'semantic'. */
  rerankerScore?: number;
  /** The relevance score computed by boosting the Reranker Score. Search results are sorted by the RerankerScore/RerankerBoostedScore based on useScoringProfileBoostedRanking in the Semantic Config. RerankerBoostedScore is only returned for queries of type 'semantic'. */
  rerankerBoostedScore?: number;
  /** Text fragments from the document that indicate the matching search terms, organized by each applicable field; null if hit highlighting was not enabled for the query. */
  highlights?: Record<string, string[]>;
  /** Captions are the most representative passages from the document relatively to the search query. They are often used as document summary. Captions are only returned for queries of type 'semantic'. */
  captions?: AzureSearchDocumentsQueryCaptionResult[];
  /** Contains debugging information that can be used to further explore your search results. */
  readonly documentDebugInfo?: AzureSearchDocumentsDocumentDebugInfo[];
  /** Additional properties */
  additionalProperties?: Record<string, any>;
}

export function azureSearchDocumentsSearchResultSerializer(
  item: AzureSearchDocumentsSearchResult,
): any {
  return {
    ...serializeRecord(item.additionalProperties ?? {}),
    "@search.score": item["score"],
    "@search.rerankerScore": item["rerankerScore"],
    "@search.rerankerBoostedScore": item["rerankerBoostedScore"],
    "@search.highlights": item["highlights"],
    "@search.captions": !item["captions"]
      ? item["captions"]
      : azureSearchDocumentsQueryCaptionResultArraySerializer(item["captions"]),
  };
}

export function azureSearchDocumentsSearchResultDeserializer(
  item: any,
): AzureSearchDocumentsSearchResult {
  return {
    additionalProperties: serializeRecord(item, [
      "score",
      "rerankerScore",
      "rerankerBoostedScore",
      "highlights",
      "captions",
      "documentDebugInfo",
    ]),
    score: item["@search.score"],
    rerankerScore: item["@search.rerankerScore"],
    rerankerBoostedScore: item["@search.rerankerBoostedScore"],
    highlights: item["@search.highlights"],
    captions: !item["@search.captions"]
      ? item["@search.captions"]
      : azureSearchDocumentsQueryCaptionResultArrayDeserializer(
          item["@search.captions"],
        ),
    documentDebugInfo: !item["@search.documentDebugInfo"]
      ? item["@search.documentDebugInfo"]
      : azureSearchDocumentsDocumentDebugInfoArrayDeserializer(
          item["@search.documentDebugInfo"],
        ),
  };
}

export function azureSearchDocumentsQueryCaptionResultArraySerializer(
  result: Array<AzureSearchDocumentsQueryCaptionResult>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsQueryCaptionResultSerializer(item);
  });
}

export function azureSearchDocumentsQueryCaptionResultArrayDeserializer(
  result: Array<AzureSearchDocumentsQueryCaptionResult>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsQueryCaptionResultDeserializer(item);
  });
}

/** Captions are the most representative passages from the document relatively to the search query. They are often used as document summary. Captions are only returned for queries of type `semantic`. */
export interface AzureSearchDocumentsQueryCaptionResult {
  /** A representative text passage extracted from the document most relevant to the search query. */
  text?: string;
  /** Same text passage as in the Text property with highlighted phrases most relevant to the query. */
  highlights?: string;
  /** Additional properties */
  additionalProperties?: Record<string, any>;
}

export function azureSearchDocumentsQueryCaptionResultSerializer(
  item: AzureSearchDocumentsQueryCaptionResult,
): any {
  return {
    ...serializeRecord(item.additionalProperties ?? {}),
    text: item["text"],
    highlights: item["highlights"],
  };
}

export function azureSearchDocumentsQueryCaptionResultDeserializer(
  item: any,
): AzureSearchDocumentsQueryCaptionResult {
  return {
    additionalProperties: serializeRecord(item, ["text", "highlights"]),
    text: item["text"],
    highlights: item["highlights"],
  };
}

export function azureSearchDocumentsDocumentDebugInfoArrayDeserializer(
  result: Array<AzureSearchDocumentsDocumentDebugInfo>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsDocumentDebugInfoDeserializer(item);
  });
}

/** Contains debugging information that can be used to further explore your search results. */
export interface AzureSearchDocumentsDocumentDebugInfo {
  /** Contains debugging information specific to semantic ranking requests. */
  readonly semantic?: AzureSearchDocumentsSemanticDebugInfo;
  /** Contains debugging information specific to vector and hybrid search. */
  readonly vectors?: AzureSearchDocumentsVectorsDebugInfo;
  /** Contains debugging information specific to vectors matched within a collection of complex types. */
  readonly innerHits?: Record<
    string,
    AzureSearchDocumentsQueryResultDocumentInnerHit[]
  >;
}

export function azureSearchDocumentsDocumentDebugInfoDeserializer(
  item: any,
): AzureSearchDocumentsDocumentDebugInfo {
  return {
    semantic: !item["semantic"]
      ? item["semantic"]
      : azureSearchDocumentsSemanticDebugInfoDeserializer(item["semantic"]),
    vectors: !item["vectors"]
      ? item["vectors"]
      : azureSearchDocumentsVectorsDebugInfoDeserializer(item["vectors"]),
    innerHits: !item["innerHits"]
      ? item["innerHits"]
      : azureSearchDocumentsQueryResultDocumentInnerHitArrayRecordDeserializer(
          item["innerHits"],
        ),
  };
}

/** Contains debugging information specific to semantic ranking requests. */
export interface AzureSearchDocumentsSemanticDebugInfo {
  /** The title field that was sent to the semantic enrichment process, as well as how it was used */
  readonly titleField?: AzureSearchDocumentsQueryResultDocumentSemanticField;
  /** The content fields that were sent to the semantic enrichment process, as well as how they were used */
  readonly contentFields?: AzureSearchDocumentsQueryResultDocumentSemanticField[];
  /** The keyword fields that were sent to the semantic enrichment process, as well as how they were used */
  readonly keywordFields?: AzureSearchDocumentsQueryResultDocumentSemanticField[];
  /** The raw concatenated strings that were sent to the semantic enrichment process. */
  readonly rerankerInput?: AzureSearchDocumentsQueryResultDocumentRerankerInput;
}

export function azureSearchDocumentsSemanticDebugInfoDeserializer(
  item: any,
): AzureSearchDocumentsSemanticDebugInfo {
  return {
    titleField: !item["titleField"]
      ? item["titleField"]
      : azureSearchDocumentsQueryResultDocumentSemanticFieldDeserializer(
          item["titleField"],
        ),
    contentFields: !item["contentFields"]
      ? item["contentFields"]
      : azureSearchDocumentsQueryResultDocumentSemanticFieldArrayDeserializer(
          item["contentFields"],
        ),
    keywordFields: !item["keywordFields"]
      ? item["keywordFields"]
      : azureSearchDocumentsQueryResultDocumentSemanticFieldArrayDeserializer(
          item["keywordFields"],
        ),
    rerankerInput: !item["rerankerInput"]
      ? item["rerankerInput"]
      : azureSearchDocumentsQueryResultDocumentRerankerInputDeserializer(
          item["rerankerInput"],
        ),
  };
}

/** Description of fields that were sent to the semantic enrichment process, as well as how they were used */
export interface AzureSearchDocumentsQueryResultDocumentSemanticField {
  /** The name of the field that was sent to the semantic enrichment process */
  readonly name?: string;
  /** The way the field was used for the semantic enrichment process (fully used, partially used, or unused) */
  readonly state?: AzureSearchDocumentsSemanticFieldState;
}

export function azureSearchDocumentsQueryResultDocumentSemanticFieldDeserializer(
  item: any,
): AzureSearchDocumentsQueryResultDocumentSemanticField {
  return {
    name: item["name"],
    state: item["state"],
  };
}

/** The way the field was used for the semantic enrichment process. */
export enum KnownAzureSearchDocumentsSemanticFieldState {
  /** The field was fully used for semantic enrichment. */
  Used = "used",
  /** The field was not used for semantic enrichment. */
  Unused = "unused",
  /** The field was partially used for semantic enrichment. */
  Partial = "partial",
}

/**
 * The way the field was used for the semantic enrichment process. \
 * {@link KnownAzureSearchDocumentsSemanticFieldState} can be used interchangeably with AzureSearchDocumentsSemanticFieldState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **used**: The field was fully used for semantic enrichment. \
 * **unused**: The field was not used for semantic enrichment. \
 * **partial**: The field was partially used for semantic enrichment.
 */
export type AzureSearchDocumentsSemanticFieldState = string;

export function azureSearchDocumentsQueryResultDocumentSemanticFieldArrayDeserializer(
  result: Array<AzureSearchDocumentsQueryResultDocumentSemanticField>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsQueryResultDocumentSemanticFieldDeserializer(
      item,
    );
  });
}

/** The raw concatenated strings that were sent to the semantic enrichment process. */
export interface AzureSearchDocumentsQueryResultDocumentRerankerInput {
  /** The raw string for the title field that was used for semantic enrichment. */
  readonly title?: string;
  /** The raw concatenated strings for the content fields that were used for semantic enrichment. */
  readonly content?: string;
  /** The raw concatenated strings for the keyword fields that were used for semantic enrichment. */
  readonly keywords?: string;
}

export function azureSearchDocumentsQueryResultDocumentRerankerInputDeserializer(
  item: any,
): AzureSearchDocumentsQueryResultDocumentRerankerInput {
  return {
    title: item["title"],
    content: item["content"],
    keywords: item["keywords"],
  };
}

/** "Contains debugging information specific to vector and hybrid search.") */
export interface AzureSearchDocumentsVectorsDebugInfo {
  /** The breakdown of subscores of the document prior to the chosen result set fusion/combination method such as RRF. */
  readonly subscores?: AzureSearchDocumentsQueryResultDocumentSubscores;
}

export function azureSearchDocumentsVectorsDebugInfoDeserializer(
  item: any,
): AzureSearchDocumentsVectorsDebugInfo {
  return {
    subscores: !item["subscores"]
      ? item["subscores"]
      : azureSearchDocumentsQueryResultDocumentSubscoresDeserializer(
          item["subscores"],
        ),
  };
}

/** The breakdown of subscores between the text and vector query components of the search query for this document. Each vector query is shown as a separate object in the same order they were received. */
export interface AzureSearchDocumentsQueryResultDocumentSubscores {
  /** The BM25 or Classic score for the text portion of the query. */
  readonly text?: AzureSearchDocumentsTextResult;
  /** The vector similarity and @search.score values for each vector query. */
  readonly vectors?: Record<
    string,
    AzureSearchDocumentsSingleVectorFieldResult
  >[];
  /** The BM25 or Classic score for the text portion of the query. */
  readonly documentBoost?: number;
}

export function azureSearchDocumentsQueryResultDocumentSubscoresDeserializer(
  item: any,
): AzureSearchDocumentsQueryResultDocumentSubscores {
  return {
    text: !item["text"]
      ? item["text"]
      : azureSearchDocumentsTextResultDeserializer(item["text"]),
    vectors: !item["vectors"]
      ? item["vectors"]
      : azureSearchDocumentsSingleVectorFieldResultRecordArrayDeserializer(
          item["vectors"],
        ),
    documentBoost: item["documentBoost"],
  };
}

/** The BM25 or Classic score for the text portion of the query. */
export interface AzureSearchDocumentsTextResult {
  /** The BM25 or Classic score for the text portion of the query. */
  readonly searchScore?: number;
}

export function azureSearchDocumentsTextResultDeserializer(
  item: any,
): AzureSearchDocumentsTextResult {
  return {
    searchScore: item["searchScore"],
  };
}

export function azureSearchDocumentsSingleVectorFieldResultRecordArrayDeserializer(
  result: Array<Record<string, AzureSearchDocumentsSingleVectorFieldResult>>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsSingleVectorFieldResultRecordDeserializer(item);
  });
}

export function azureSearchDocumentsSingleVectorFieldResultRecordDeserializer(
  item: Record<string, any>,
): Record<string, AzureSearchDocumentsSingleVectorFieldResult> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : azureSearchDocumentsSingleVectorFieldResultDeserializer(item[key]);
  });
  return result;
}

/** A single vector field result. Both @search.score and vector similarity values are returned. Vector similarity is related to @search.score by an equation. */
export interface AzureSearchDocumentsSingleVectorFieldResult {
  /** The @search.score value that is calculated from the vector similarity score. This is the score that's visible in a pure single-field single-vector query. */
  readonly searchScore?: number;
  /** The vector similarity score for this document. Note this is the canonical definition of similarity metric, not the 'distance' version. For example, cosine similarity instead of cosine distance. */
  readonly vectorSimilarity?: number;
}

export function azureSearchDocumentsSingleVectorFieldResultDeserializer(
  item: any,
): AzureSearchDocumentsSingleVectorFieldResult {
  return {
    searchScore: item["searchScore"],
    vectorSimilarity: item["vectorSimilarity"],
  };
}

export function azureSearchDocumentsQueryResultDocumentInnerHitArrayRecordDeserializer(
  item: Record<string, any>,
): Record<string, Array<AzureSearchDocumentsQueryResultDocumentInnerHit>> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : azureSearchDocumentsQueryResultDocumentInnerHitArrayDeserializer(
          item[key],
        );
  });
  return result;
}

export function azureSearchDocumentsQueryResultDocumentInnerHitArrayDeserializer(
  result: Array<AzureSearchDocumentsQueryResultDocumentInnerHit>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsQueryResultDocumentInnerHitDeserializer(item);
  });
}

/** Detailed scoring information for an individual element of a complex collection. */
export interface AzureSearchDocumentsQueryResultDocumentInnerHit {
  /** Position of this specific matching element within it's original collection. Position starts at 0. */
  readonly ordinal?: number;
  /** Detailed scoring information for an individual element of a complex collection that matched a vector query. */
  readonly vectors?: Record<
    string,
    AzureSearchDocumentsSingleVectorFieldResult
  >[];
}

export function azureSearchDocumentsQueryResultDocumentInnerHitDeserializer(
  item: any,
): AzureSearchDocumentsQueryResultDocumentInnerHit {
  return {
    ordinal: item["ordinal"],
    vectors: !item["vectors"]
      ? item["vectors"]
      : azureSearchDocumentsSingleVectorFieldResultRecordArrayDeserializer(
          item["vectors"],
        ),
  };
}

/** Reason that a partial response was returned for a semantic ranking request. */
export enum KnownAzureSearchDocumentsSemanticErrorReason {
  /** If `semanticMaxWaitInMilliseconds` was set and the semantic processing duration exceeded that value. Only the base results were returned. */
  MaxWaitExceeded = "maxWaitExceeded",
  /** The request was throttled. Only the base results were returned. */
  CapacityOverloaded = "capacityOverloaded",
  /** At least one step of the semantic process failed. */
  Transient = "transient",
}

/**
 * Reason that a partial response was returned for a semantic ranking request. \
 * {@link KnownAzureSearchDocumentsSemanticErrorReason} can be used interchangeably with AzureSearchDocumentsSemanticErrorReason,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **maxWaitExceeded**: If `semanticMaxWaitInMilliseconds` was set and the semantic processing duration exceeded that value. Only the base results were returned. \
 * **capacityOverloaded**: The request was throttled. Only the base results were returned. \
 * **transient**: At least one step of the semantic process failed.
 */
export type AzureSearchDocumentsSemanticErrorReason = string;

/** Type of partial response that was returned for a semantic ranking request. */
export enum KnownAzureSearchDocumentsSemanticSearchResultsType {
  /** Results without any semantic enrichment or reranking. */
  BaseResults = "baseResults",
  /** Results have been reranked with the reranker model and will include semantic captions. They will not include any answers, answers highlights or caption highlights. */
  RerankedResults = "rerankedResults",
}

/**
 * Type of partial response that was returned for a semantic ranking request. \
 * {@link KnownAzureSearchDocumentsSemanticSearchResultsType} can be used interchangeably with AzureSearchDocumentsSemanticSearchResultsType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **baseResults**: Results without any semantic enrichment or reranking. \
 * **rerankedResults**: Results have been reranked with the reranker model and will include semantic captions. They will not include any answers, answers highlights or caption highlights.
 */
export type AzureSearchDocumentsSemanticSearchResultsType = string;

/** Type of query rewrite that was used for this request. */
export enum KnownAzureSearchDocumentsSemanticQueryRewritesResultType {
  /** Query rewrites were not successfully generated for this request. Only the original query was used to retrieve the results. */
  OriginalQueryOnly = "originalQueryOnly",
}

/**
 * Type of query rewrite that was used for this request. \
 * {@link KnownAzureSearchDocumentsSemanticQueryRewritesResultType} can be used interchangeably with AzureSearchDocumentsSemanticQueryRewritesResultType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **originalQueryOnly**: Query rewrites were not successfully generated for this request. Only the original query was used to retrieve the results.
 */
export type AzureSearchDocumentsSemanticQueryRewritesResultType = string;

/** A document retrieved via a document lookup operation. */
export interface AzureSearchDocumentsLookupDocument {
  /** Additional properties */
  additionalProperties?: Record<string, any>;
}

export function azureSearchDocumentsLookupDocumentDeserializer(
  item: any,
): AzureSearchDocumentsLookupDocument {
  return {
    additionalProperties: serializeRecord(item, []),
  };
}

/** Response containing suggestion query results from an index. */
export interface AzureSearchDocumentsSuggestDocumentsResult {
  /** The sequence of results returned by the query. */
  results: AzureSearchDocumentsSuggestResult[];
  /** A value indicating the percentage of the index that was included in the query, or null if minimumCoverage was not set in the request. */
  coverage?: number;
}

export function azureSearchDocumentsSuggestDocumentsResultDeserializer(
  item: any,
): AzureSearchDocumentsSuggestDocumentsResult {
  return {
    results: azureSearchDocumentsSuggestResultArrayDeserializer(item["value"]),
    coverage: item["@search.coverage"],
  };
}

export function azureSearchDocumentsSuggestResultArraySerializer(
  result: Array<AzureSearchDocumentsSuggestResult>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsSuggestResultSerializer(item);
  });
}

export function azureSearchDocumentsSuggestResultArrayDeserializer(
  result: Array<AzureSearchDocumentsSuggestResult>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsSuggestResultDeserializer(item);
  });
}

/** A result containing a document found by a suggestion query, plus associated metadata. */
export interface AzureSearchDocumentsSuggestResult {
  /** The text of the suggestion result. */
  text: string;
  /** Additional properties */
  additionalProperties?: Record<string, any>;
}

export function azureSearchDocumentsSuggestResultSerializer(
  item: AzureSearchDocumentsSuggestResult,
): any {
  return {
    ...serializeRecord(item.additionalProperties ?? {}),
    "@search.text": item["text"],
  };
}

export function azureSearchDocumentsSuggestResultDeserializer(
  item: any,
): AzureSearchDocumentsSuggestResult {
  return {
    additionalProperties: serializeRecord(item, ["text"]),
    text: item["@search.text"],
  };
}

/** Contains a batch of document write actions to send to the index. */
export interface AzureSearchDocumentsIndexDocumentsBatch {
  /** The actions in the batch. */
  actions: AzureSearchDocumentsIndexAction[];
}

export function azureSearchDocumentsIndexDocumentsBatchSerializer(
  item: AzureSearchDocumentsIndexDocumentsBatch,
): any {
  return {
    value: azureSearchDocumentsIndexActionArraySerializer(item["actions"]),
  };
}

export function azureSearchDocumentsIndexActionArraySerializer(
  result: Array<AzureSearchDocumentsIndexAction>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexActionSerializer(item);
  });
}

/** Represents an index action that operates on a document. */
export interface AzureSearchDocumentsIndexAction {
  /** The operation to perform on a document in an indexing batch. */
  actionType?: AzureSearchDocumentsIndexActionType;
  /** Additional properties */
  additionalProperties?: Record<string, any>;
}

export function azureSearchDocumentsIndexActionSerializer(
  item: AzureSearchDocumentsIndexAction,
): any {
  return {
    ...serializeRecord(item.additionalProperties ?? {}),
    "@search.action": item["actionType"],
  };
}

/** The operation to perform on a document in an indexing batch. */
export enum KnownAzureSearchDocumentsIndexActionType {
  /** Inserts the document into the index if it is new and updates it if it exists. All fields are replaced in the update case. */
  Upload = "upload",
  /** Merges the specified field values with an existing document. If the document does not exist, the merge will fail. Any field you specify in a merge will replace the existing field in the document. This also applies to collections of primitive and complex types. */
  Merge = "merge",
  /** Behaves like merge if a document with the given key already exists in the index. If the document does not exist, it behaves like upload with a new document. */
  MergeOrUpload = "mergeOrUpload",
  /** Removes the specified document from the index. Any field you specify in a delete operation other than the key field will be ignored. If you want to remove an individual field from a document, use merge instead and set the field explicitly to null. */
  Delete = "delete",
}

/**
 * The operation to perform on a document in an indexing batch. \
 * {@link KnownAzureSearchDocumentsIndexActionType} can be used interchangeably with AzureSearchDocumentsIndexActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **upload**: Inserts the document into the index if it is new and updates it if it exists. All fields are replaced in the update case. \
 * **merge**: Merges the specified field values with an existing document. If the document does not exist, the merge will fail. Any field you specify in a merge will replace the existing field in the document. This also applies to collections of primitive and complex types. \
 * **mergeOrUpload**: Behaves like merge if a document with the given key already exists in the index. If the document does not exist, it behaves like upload with a new document. \
 * **delete**: Removes the specified document from the index. Any field you specify in a delete operation other than the key field will be ignored. If you want to remove an individual field from a document, use merge instead and set the field explicitly to null.
 */
export type AzureSearchDocumentsIndexActionType = string;

/** Response containing the status of operations for all documents in the indexing request. */
export interface AzureSearchDocumentsIndexDocumentsResult {
  /** The list of status information for each document in the indexing request. */
  results: AzureSearchDocumentsIndexingResult[];
}

export function azureSearchDocumentsIndexDocumentsResultDeserializer(
  item: any,
): AzureSearchDocumentsIndexDocumentsResult {
  return {
    results: azureSearchDocumentsIndexingResultArrayDeserializer(item["value"]),
  };
}

export function azureSearchDocumentsIndexingResultArraySerializer(
  result: Array<AzureSearchDocumentsIndexingResult>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexingResultSerializer(item);
  });
}

export function azureSearchDocumentsIndexingResultArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexingResult>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexingResultDeserializer(item);
  });
}

/** Status of an indexing operation for a single document. */
export interface AzureSearchDocumentsIndexingResult {
  /** The key of a document that was in the indexing request. */
  key: string;
  /** The error message explaining why the indexing operation failed for the document identified by the key; null if indexing succeeded. */
  errorMessage?: string;
  /** A value indicating whether the indexing operation succeeded for the document identified by the key. */
  succeeded: boolean;
  /** The status code of the indexing operation. Possible values include: 200 for a successful update or delete, 201 for successful document creation, 400 for a malformed input document, 404 for document not found, 409 for a version conflict, 422 when the index is temporarily unavailable, or 503 for when the service is too busy. */
  statusCode: number;
}

export function azureSearchDocumentsIndexingResultSerializer(
  item: AzureSearchDocumentsIndexingResult,
): any {
  return {
    key: item["key"],
    errorMessage: item["errorMessage"],
    status: item["succeeded"],
    statusCode: item["statusCode"],
  };
}

export function azureSearchDocumentsIndexingResultDeserializer(
  item: any,
): AzureSearchDocumentsIndexingResult {
  return {
    key: item["key"],
    errorMessage: item["errorMessage"],
    succeeded: item["status"],
    statusCode: item["statusCode"],
  };
}

/** The result of Autocomplete query. */
export interface AzureSearchDocumentsAutocompleteResult {
  /** A value indicating the percentage of the index that was considered by the autocomplete request, or null if minimumCoverage was not specified in the request. */
  coverage?: number;
  /** The list of returned Autocompleted items. */
  results: AzureSearchDocumentsAutocompleteItem[];
}

export function azureSearchDocumentsAutocompleteResultDeserializer(
  item: any,
): AzureSearchDocumentsAutocompleteResult {
  return {
    coverage: item["@search.coverage"],
    results: azureSearchDocumentsAutocompleteItemArrayDeserializer(
      item["value"],
    ),
  };
}

export function azureSearchDocumentsAutocompleteItemArraySerializer(
  result: Array<AzureSearchDocumentsAutocompleteItem>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsAutocompleteItemSerializer(item);
  });
}

export function azureSearchDocumentsAutocompleteItemArrayDeserializer(
  result: Array<AzureSearchDocumentsAutocompleteItem>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsAutocompleteItemDeserializer(item);
  });
}

/** The result of Autocomplete requests. */
export interface AzureSearchDocumentsAutocompleteItem {
  /** The completed term. */
  text: string;
  /** The query along with the completed term. */
  queryPlusText: string;
}

export function azureSearchDocumentsAutocompleteItemSerializer(
  item: AzureSearchDocumentsAutocompleteItem,
): any {
  return { text: item["text"], queryPlusText: item["queryPlusText"] };
}

export function azureSearchDocumentsAutocompleteItemDeserializer(
  item: any,
): AzureSearchDocumentsAutocompleteItem {
  return {
    text: item["text"],
    queryPlusText: item["queryPlusText"],
  };
}

/** Specifies the mode for Autocomplete. The default is 'oneTerm'. Use 'twoTerms' to get shingles and 'oneTermWithContext' to use the current context in producing autocomplete terms. */
export enum KnownAzureSearchDocumentsAutocompleteMode {
  /** Only one term is suggested. If the query has two terms, only the last term is completed. For example, if the input is 'washington medic', the suggested terms could include 'medicaid', 'medicare', and 'medicine'. */
  OneTerm = "oneTerm",
  /** Matching two-term phrases in the index will be suggested. For example, if the input is 'medic', the suggested terms could include 'medicare coverage' and 'medical assistant'. */
  TwoTerms = "twoTerms",
  /** Completes the last term in a query with two or more terms, where the last two terms are a phrase that exists in the index. For example, if the input is 'washington medic', the suggested terms could include 'washington medicaid' and 'washington medical'. */
  OneTermWithContext = "oneTermWithContext",
}

/**
 * Specifies the mode for Autocomplete. The default is 'oneTerm'. Use 'twoTerms' to get shingles and 'oneTermWithContext' to use the current context in producing autocomplete terms. \
 * {@link KnownAzureSearchDocumentsAutocompleteMode} can be used interchangeably with AzureSearchDocumentsAutocompleteMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **oneTerm**: Only one term is suggested. If the query has two terms, only the last term is completed. For example, if the input is 'washington medic', the suggested terms could include 'medicaid', 'medicare', and 'medicine'. \
 * **twoTerms**: Matching two-term phrases in the index will be suggested. For example, if the input is 'medic', the suggested terms could include 'medicare coverage' and 'medical assistant'. \
 * **oneTermWithContext**: Completes the last term in a query with two or more terms, where the last two terms are a phrase that exists in the index. For example, if the input is 'washington medic', the suggested terms could include 'washington medicaid' and 'washington medical'.
 */
export type AzureSearchDocumentsAutocompleteMode = string;
