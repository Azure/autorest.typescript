// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { serializeRecord } from "../../../../static-helpers/serialization/serialize-record.js";

/**
 * Common error response for all Azure Resource Manager APIs to return error
 * details for failed operations. (This also follows the OData error response
 * format.).
 */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

export function errorResponseDeserializer(item: any): ErrorResponse {
  return {
    error: !item["error"]
      ? item["error"]
      : errorDetailDeserializer(item["error"]),
  };
}

/** The error detail. */
export interface ErrorDetail {
  /** The error code. */
  code?: string;
  /** The error message. */
  message?: string;
  /** The error target. */
  target?: string;
  /** The error details. */
  details?: ErrorDetail[];
  /** The error additional info. */
  additionalInfo?: ErrorAdditionalInfo[];
}

export function errorDetailDeserializer(item: any): ErrorDetail {
  return {
    code: item["code"],
    message: item["message"],
    target: item["target"],
    details: !item["details"]
      ? item["details"]
      : errorDetailArrayDeserializer(item["details"]),
    additionalInfo: !item["additionalInfo"]
      ? item["additionalInfo"]
      : errorAdditionalInfoArrayDeserializer(item["additionalInfo"]),
  };
}

export function errorDetailArrayDeserializer(
  result: Array<ErrorDetail>,
): any[] {
  return result.map((item) => {
    return errorDetailDeserializer(item);
  });
}

export function errorAdditionalInfoArrayDeserializer(
  result: Array<ErrorAdditionalInfo>,
): any[] {
  return result.map((item) => {
    return errorAdditionalInfoDeserializer(item);
  });
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /** The additional info type. */
  type?: string;
  /** The additional info. */
  info?: Record<string, string>;
}

export function errorAdditionalInfoDeserializer(
  item: any,
): ErrorAdditionalInfo {
  return {
    type: item["type"],
    info: item["info"],
  };
}

/** Response containing search results from an index. */
export interface SearchDocumentsResult {
  /**
   * The total count of results found by the search operation, or null if the count
   * was not requested. If present, the count may be greater than the number of
   * results in this response. This can happen if you use the $top or $skip
   * parameters, or if the query can't return all the requested documents in a
   * single response.
   */
  count?: number;
  /**
   * A value indicating the percentage of the index that was included in the query,
   * or null if minimumCoverage was not specified in the request.
   */
  coverage?: number;
  /**
   * The facet query results for the search operation, organized as a collection of
   * buckets for each faceted field; null if the query did not include any facet
   * expressions.
   */
  facets?: Record<string, FacetResult[]>;
  /**
   * The answers query results for the search operation; null if the answers query
   * parameter was not specified or set to 'none'.
   */
  answers?: QueryAnswerResult[];
  /** Debug information that applies to the search results as a whole. */
  readonly debugInfo?: DebugInfo;
  /**
   * Continuation JSON payload returned when the query can't return all the
   * requested results in a single response. You can use this JSON along with
   */
  nextPageParameters?: SearchRequest;
  /** The sequence of results returned by the query. */
  results: SearchResult[];
  /**
   * Continuation URL returned when the query can't return all the requested results
   * in a single response. You can use this URL to formulate another GET or POST
   * Search request to get the next part of the search response. Make sure to use
   * the same verb (GET or POST) as the request that produced this response.
   */
  nextLink?: string;
  /** Reason that a partial response was returned for a semantic ranking request. */
  semanticPartialResponseReason?: SemanticErrorReason;
  /** Type of partial response that was returned for a semantic ranking request. */
  semanticPartialResponseType?: SemanticSearchResultsType;
  /** Type of query rewrite that was used to retrieve documents. */
  readonly semanticQueryRewritesResultType?: SemanticQueryRewritesResultType;
}

export function searchDocumentsResultDeserializer(
  item: any,
): SearchDocumentsResult {
  return {
    count: item["@odata.count"],
    coverage: item["@search.coverage"],
    facets: !item["@search.facets"]
      ? item["@search.facets"]
      : facetResultArrayRecordDeserializer(item["@search.facets"]),
    answers: !item["@search.answers"]
      ? item["@search.answers"]
      : queryAnswerResultArrayDeserializer(item["@search.answers"]),
    debugInfo: !item["@search.debug"]
      ? item["@search.debug"]
      : debugInfoDeserializer(item["@search.debug"]),
    nextPageParameters: !item["@search.nextPageParameters"]
      ? item["@search.nextPageParameters"]
      : searchRequestDeserializer(item["@search.nextPageParameters"]),
    results: searchResultArrayDeserializer(item["value"]),
    nextLink: item["@odata.nextLink"],
    semanticPartialResponseReason:
      item["@search.semanticPartialResponseReason"],
    semanticPartialResponseType: item["@search.semanticPartialResponseType"],
    semanticQueryRewritesResultType:
      item["@search.semanticQueryRewritesResultType"],
  };
}

export function facetResultArrayRecordDeserializer(
  item: Record<string, any>,
): Record<string, Array<FacetResult>> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : facetResultArrayDeserializer(item[key]);
  });
  return result;
}

export function facetResultArrayDeserializer(
  result: Array<FacetResult>,
): any[] {
  return result.map((item) => {
    return facetResultDeserializer(item);
  });
}

/**
 * A single bucket of a facet query result. Reports the number of documents with a
 * field value falling within a particular range or having a particular value or
 * interval.
 */
export interface FacetResult {
  /**
   * The approximate count of documents falling within the bucket described by this
   * facet.
   */
  count?: number;
  /**
   * The nested facet query results for the search operation, organized as a
   * collection of buckets for each faceted field; null if the query did not contain
   * any nested facets.
   */
  readonly facets?: Record<string, FacetResult[]>;
  /** The resulting total sum for the facet when a sum metric is requested. */
  readonly sum?: number;
  /** Additional properties */
  additionalProperties?: Record<string, any>;
}

export function facetResultDeserializer(item: any): FacetResult {
  return {
    additionalProperties: serializeRecord(item, ["count", "facets", "sum"]),
    count: item["count"],
    facets: !item["@search.facets"]
      ? item["@search.facets"]
      : facetResultArrayRecordDeserializer(item["@search.facets"]),
    sum: item["sum"],
  };
}

export function queryAnswerResultArrayDeserializer(
  result: Array<QueryAnswerResult>,
): any[] {
  return result.map((item) => {
    return queryAnswerResultDeserializer(item);
  });
}

/**
 * An answer is a text passage extracted from the contents of the most relevant
 * documents that matched the query. Answers are extracted from the top search
 * results. Answer candidates are scored and the top answers are selected.
 */
export interface QueryAnswerResult {
  /**
   * The score value represents how relevant the answer is to the query relative to
   * other answers returned for the query.
   */
  score?: number;
  /** The key of the document the answer was extracted from. */
  key?: string;
  /** The text passage extracted from the document contents as the answer. */
  text?: string;
  /**
   * Same text passage as in the Text property with highlighted text phrases most
   * relevant to the query.
   */
  highlights?: string;
  /** Additional properties */
  additionalProperties?: Record<string, any>;
}

export function queryAnswerResultDeserializer(item: any): QueryAnswerResult {
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

/**
 * Contains debugging information that can be used to further explore your search
 * results.
 */
export interface DebugInfo {
  /** Contains debugging information specific to query rewrites. */
  readonly queryRewrites?: QueryRewritesDebugInfo;
}

export function debugInfoDeserializer(item: any): DebugInfo {
  return {
    queryRewrites: !item["queryRewrites"]
      ? item["queryRewrites"]
      : queryRewritesDebugInfoDeserializer(item["queryRewrites"]),
  };
}

/** Contains debugging information specific to query rewrites. */
export interface QueryRewritesDebugInfo {
  /** List of query rewrites generated for the text query. */
  readonly text?: QueryRewritesValuesDebugInfo;
  /** List of query rewrites generated for the vectorizable text queries. */
  readonly vectors?: QueryRewritesValuesDebugInfo[];
}

export function queryRewritesDebugInfoDeserializer(
  item: any,
): QueryRewritesDebugInfo {
  return {
    text: !item["text"]
      ? item["text"]
      : queryRewritesValuesDebugInfoDeserializer(item["text"]),
    vectors: !item["vectors"]
      ? item["vectors"]
      : queryRewritesValuesDebugInfoArrayDeserializer(item["vectors"]),
  };
}

/** Contains debugging information specific to query rewrites. */
export interface QueryRewritesValuesDebugInfo {
  /**
   * The input text to the generative query rewriting model. There may be cases
   * where the user query and the input to the generative model are not identical.
   */
  readonly inputQuery?: string;
  /** List of query rewrites. */
  readonly rewrites?: string[];
}

export function queryRewritesValuesDebugInfoDeserializer(
  item: any,
): QueryRewritesValuesDebugInfo {
  return {
    inputQuery: item["inputQuery"],
    rewrites: !item["rewrites"]
      ? item["rewrites"]
      : item["rewrites"].map((p: any) => {
          return p;
        }),
  };
}

export function queryRewritesValuesDebugInfoArrayDeserializer(
  result: Array<QueryRewritesValuesDebugInfo>,
): any[] {
  return result.map((item) => {
    return queryRewritesValuesDebugInfoDeserializer(item);
  });
}

/**
 * Parameters for filtering, sorting, faceting, paging, and other search query
 * behaviors.
 */
export interface SearchRequest {
  /**
   * A value that specifies whether to fetch the total count of results. Default is
   * false. Setting this value to true may have a performance impact. Note that the
   * count returned is an approximation.
   */
  includeTotalResultCount?: boolean;
  /**
   * The list of facet expressions to apply to the search query. Each facet
   * expression contains a field name, optionally followed by a comma-separated list
   * of name:value pairs.
   */
  facets?: string[];
  /** The OData $filter expression to apply to the search query. */
  filter?: string;
  /**
   * The comma-separated list of field names to use for hit highlights. Only
   * searchable fields can be used for hit highlighting.
   */
  highlightFields?: string;
  /**
   * A string tag that is appended to hit highlights. Must be set with
   * highlightPreTag. Default is &lt;/em&gt;.
   */
  highlightPostTag?: string;
  /**
   * A string tag that is prepended to hit highlights. Must be set with
   * highlightPostTag. Default is &lt;em&gt;.
   */
  highlightPreTag?: string;
  /**
   * A number between 0 and 100 indicating the percentage of the index that must be
   * covered by a search query in order for the query to be reported as a success.
   * This parameter can be useful for ensuring search availability even for services
   * with only one replica. The default is 100.
   */
  minimumCoverage?: number;
  /**
   * The comma-separated list of OData $orderby expressions by which to sort the
   * results. Each expression can be either a field name or a call to either the
   * geo.distance() or the search.score() functions. Each expression can be followed
   * by asc to indicate ascending, or desc to indicate descending. The default is
   * ascending order. Ties will be broken by the match scores of documents. If no
   * $orderby is specified, the default sort order is descending by document match
   * score. There can be at most 32 $orderby clauses.
   */
  orderBy?: string;
  /**
   * A value that specifies the syntax of the search query. The default is 'simple'.
   * Use 'full' if your query uses the Lucene query syntax.
   */
  queryType?: QueryType;
  /**
   * A value that specifies whether we want to calculate scoring statistics (such as
   * document frequency) globally for more consistent scoring, or locally, for lower
   * latency. The default is 'local'. Use 'global' to aggregate scoring statistics
   * globally before scoring. Using global scoring statistics can increase latency
   * of search queries.
   */
  scoringStatistics?: ScoringStatistics;
  /**
   * A value to be used to create a sticky session, which can help getting more
   * consistent results. As long as the same sessionId is used, a best-effort
   * attempt will be made to target the same replica set. Be wary that reusing the
   * same sessionID values repeatedly can interfere with the load balancing of the
   * requests across replicas and adversely affect the performance of the search
   * service. The value used as sessionId cannot start with a '_' character.
   */
  sessionId?: string;
  /**
   * The list of parameter values to be used in scoring functions (for example,
   * referencePointParameter) using the format name-values. For example, if the
   * scoring profile defines a function with a parameter called 'mylocation' the
   * parameter string would be "mylocation--122.2,44.8" (without the quotes).
   */
  scoringParameters?: string[];
  /**
   * The name of a scoring profile to evaluate match scores for matching documents
   * in order to sort the results.
   */
  scoringProfile?: string;
  /**
   * Enables a debugging tool that can be used to further explore your reranked
   * results.
   */
  debug?: QueryDebugMode;
  /**
   * A full-text search query expression; Use "*" or omit this parameter to match
   * all documents.
   */
  searchText?: string;
  /**
   * The comma-separated list of field names to which to scope the full-text search.
   * When using fielded search (fieldName:searchExpression) in a full Lucene query,
   * the field names of each fielded search expression take precedence over any
   * field names listed in this parameter.
   */
  searchFields?: string;
  /**
   * A value that specifies whether any or all of the search terms must be matched
   * in order to count the document as a match.
   */
  searchMode?: SearchMode;
  /** A value that specifies the language of the search query. */
  queryLanguage?: QueryLanguage;
  /**
   * A value that specified the type of the speller to use to spell-correct
   * individual search query terms.
   */
  speller?: QuerySpellerType;
  /**
   * The comma-separated list of fields to retrieve. If unspecified, all fields
   * marked as retrievable in the schema are included.
   */
  select?: string;
  /**
   * The number of search results to skip. This value cannot be greater than
   * 100,000. If you need to scan documents in sequence, but cannot use skip due to
   * this limitation, consider using orderby on a totally-ordered key and filter
   * with a range query instead.
   */
  skip?: number;
  /**
   * The number of search results to retrieve. This can be used in conjunction with
   * $skip to implement client-side paging of search results. If results are
   * truncated due to server-side paging, the response will include a continuation
   * token that can be used to issue another Search request for the next page of
   * results.
   */
  top?: number;
  /**
   * The name of a semantic configuration that will be used when processing
   * documents for queries of type semantic.
   */
  semanticConfiguration?: string;
  /**
   * Allows the user to choose whether a semantic call should fail completely
   * (default / current behavior), or to return partial results.
   */
  semanticErrorHandling?: SemanticErrorMode;
  /**
   * Allows the user to set an upper bound on the amount of time it takes for
   * semantic enrichment to finish processing before the request fails.
   */
  semanticMaxWaitInMilliseconds?: number;
  /**
   * Allows setting a separate search query that will be solely used for semantic
   * reranking, semantic captions and semantic answers. Is useful for scenarios
   * where there is a need to use different queries between the base retrieval and
   * ranking phase, and the L2 semantic phase.
   */
  semanticQuery?: string;
  /**
   * A value that specifies whether answers should be returned as part of the search
   * response.
   */
  answers?: QueryAnswerType;
  /**
   * A value that specifies whether captions should be returned as part of the
   * search response.
   */
  captions?: QueryCaptionType;
  /**
   * A value that specifies whether query rewrites should be generated to augment
   * the search query.
   */
  queryRewrites?: QueryRewritesType;
  /** The comma-separated list of field names used for semantic ranking. */
  semanticFields?: string;
  /** The query parameters for vector and hybrid search queries. */
  vectorQueries?: VectorQueryUnion[];
  /**
   * Determines whether or not filters are applied before or after the vector search
   * is performed. Default is 'preFilter' for new indexes.
   */
  vectorFilterMode?: VectorFilterMode;
  /** The query parameters to configure hybrid search behaviors. */
  hybridSearch?: HybridSearch;
}

export function searchRequestSerializer(item: SearchRequest): any {
  return {
    count: item["includeTotalResultCount"],
    facets: !item["facets"]
      ? item["facets"]
      : item["facets"].map((p: any) => {
          return p;
        }),
    filter: item["filter"],
    highlight: item["highlightFields"],
    highlightPostTag: item["highlightPostTag"],
    highlightPreTag: item["highlightPreTag"],
    minimumCoverage: item["minimumCoverage"],
    orderby: item["orderBy"],
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
    search: item["searchText"],
    searchFields: item["searchFields"],
    searchMode: item["searchMode"],
    queryLanguage: item["queryLanguage"],
    speller: item["speller"],
    select: item["select"],
    skip: item["skip"],
    top: item["top"],
    semanticConfiguration: item["semanticConfiguration"],
    semanticErrorHandling: item["semanticErrorHandling"],
    semanticMaxWaitInMilliseconds: item["semanticMaxWaitInMilliseconds"],
    semanticQuery: item["semanticQuery"],
    answers: item["answers"],
    captions: item["captions"],
    queryRewrites: item["queryRewrites"],
    semanticFields: item["semanticFields"],
    vectorQueries: !item["vectorQueries"]
      ? item["vectorQueries"]
      : vectorQueryUnionArraySerializer(item["vectorQueries"]),
    vectorFilterMode: item["vectorFilterMode"],
    hybridSearch: !item["hybridSearch"]
      ? item["hybridSearch"]
      : hybridSearchSerializer(item["hybridSearch"]),
  };
}

export function searchRequestDeserializer(item: any): SearchRequest {
  return {
    includeTotalResultCount: item["count"],
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
    speller: item["speller"],
    select: item["select"],
    skip: item["skip"],
    top: item["top"],
    semanticConfiguration: item["semanticConfiguration"],
    semanticErrorHandling: item["semanticErrorHandling"],
    semanticMaxWaitInMilliseconds: item["semanticMaxWaitInMilliseconds"],
    semanticQuery: item["semanticQuery"],
    answers: item["answers"],
    captions: item["captions"],
    queryRewrites: item["queryRewrites"],
    semanticFields: item["semanticFields"],
    vectorQueries: !item["vectorQueries"]
      ? item["vectorQueries"]
      : vectorQueryUnionArrayDeserializer(item["vectorQueries"]),
    vectorFilterMode: item["vectorFilterMode"],
    hybridSearch: !item["hybridSearch"]
      ? item["hybridSearch"]
      : hybridSearchDeserializer(item["hybridSearch"]),
  };
}

/**
 * Specifies the syntax of the search query. The default is 'simple'. Use 'full'
 * if your query uses the Lucene query syntax and 'semantic' if query syntax is
 * not needed.
 */
export type QueryType = "simple" | "full" | "semantic";
/**
 * A value that specifies whether we want to calculate scoring statistics (such as
 * document frequency) globally for more consistent scoring, or locally, for lower
 * latency. The default is 'local'. Use 'global' to aggregate scoring statistics
 * globally before scoring. Using global scoring statistics can increase latency
 * of search queries.
 */
export type ScoringStatistics = "local" | "global";
/**
 * Enables a debugging tool that can be used to further explore your search
 * results. You can enable multiple debug modes simultaneously by separating them
 * with a | character, for example: semantic|queryRewrites.
 */
export type QueryDebugMode =
  | "disabled"
  | "semantic"
  | "vector"
  | "queryRewrites"
  | "all";
/**
 * Specifies whether any or all of the search terms must be matched in order to
 * count the document as a match.
 */
export type SearchMode = "any" | "all";
/** The language of the query. */
export type QueryLanguage =
  | "none"
  | "en-us"
  | "en-gb"
  | "en-in"
  | "en-ca"
  | "en-au"
  | "fr-fr"
  | "fr-ca"
  | "de-de"
  | "es-es"
  | "es-mx"
  | "zh-cn"
  | "zh-tw"
  | "pt-br"
  | "pt-pt"
  | "it-it"
  | "ja-jp"
  | "ko-kr"
  | "ru-ru"
  | "cs-cz"
  | "nl-be"
  | "nl-nl"
  | "hu-hu"
  | "pl-pl"
  | "sv-se"
  | "tr-tr"
  | "hi-in"
  | "ar-sa"
  | "ar-eg"
  | "ar-ma"
  | "ar-kw"
  | "ar-jo"
  | "da-dk"
  | "no-no"
  | "bg-bg"
  | "hr-hr"
  | "hr-ba"
  | "ms-my"
  | "ms-bn"
  | "sl-sl"
  | "ta-in"
  | "vi-vn"
  | "el-gr"
  | "ro-ro"
  | "is-is"
  | "id-id"
  | "th-th"
  | "lt-lt"
  | "uk-ua"
  | "lv-lv"
  | "et-ee"
  | "ca-es"
  | "fi-fi"
  | "sr-ba"
  | "sr-me"
  | "sr-rs"
  | "sk-sk"
  | "nb-no"
  | "hy-am"
  | "bn-in"
  | "eu-es"
  | "gl-es"
  | "gu-in"
  | "he-il"
  | "ga-ie"
  | "kn-in"
  | "ml-in"
  | "mr-in"
  | "fa-ae"
  | "pa-in"
  | "te-in"
  | "ur-pk";
/** Improve search recall by spell-correcting individual search query terms. */
export type QuerySpellerType = "none" | "lexicon";
/**
 * Allows the user to choose whether a semantic call should fail completely, or to
 * return partial results.
 */
export type SemanticErrorMode = "partial" | "fail";
/**
 * This parameter is only valid if the query type is `semantic`. If set, the query
 * returns answers extracted from key passages in the highest ranked documents.
 * The number of answers returned can be configured by appending the pipe
 * character `|` followed by the `count-<number of answers>` option after the
 * answers parameter value, such as `extractive|count-3`. Default count is 1. The
 * confidence threshold can be configured by appending the pipe character `|`
 * followed by the `threshold-<confidence threshold>` option after the answers
 * parameter value, such as `extractive|threshold-0.9`. Default threshold is 0.7.
 * The maximum character length of answers can be configured by appending the pipe
 * character '|' followed by the 'count-<number of maximum character length>',
 * such as 'extractive|maxcharlength-600'.
 */
export type QueryAnswerType = "none" | "extractive";
/**
 * This parameter is only valid if the query type is `semantic`. If set, the query
 * returns captions extracted from key passages in the highest ranked documents.
 * When Captions is set to `extractive`, highlighting is enabled by default, and
 * can be configured by appending the pipe character `|` followed by the
 * `highlight-<true/false>` option, such as `extractive|highlight-true`. Defaults
 * to `None`. The maximum character length of captions can be configured by
 * appending the pipe character '|' followed by the 'count-<number of maximum
 * character length>', such as 'extractive|maxcharlength-600'.
 */
export type QueryCaptionType = "none" | "extractive";
/**
 * This parameter is only valid if the query type is `semantic`. When
 * QueryRewrites is set to `generative`, the query terms are sent to a generate
 * model which will produce 10 (default) rewrites to help increase the recall of
 * the request. The requested count can be configured by appending the pipe
 * character `|` followed by the `count-<number of rewrites>` option, such as
 * `generative|count-3`. Defaults to `None`.
 */
export type QueryRewritesType = "none" | "generative";

export function vectorQueryUnionArraySerializer(
  result: Array<VectorQueryUnion>,
): any[] {
  return result.map((item) => {
    return vectorQueryUnionSerializer(item);
  });
}

export function vectorQueryUnionArrayDeserializer(
  result: Array<VectorQueryUnion>,
): any[] {
  return result.map((item) => {
    return vectorQueryUnionDeserializer(item);
  });
}

/** The query parameters for vector and hybrid search queries. */
export interface VectorQuery {
  /** Number of nearest neighbors to return as top hits. */
  kNearestNeighbors?: number;
  /**
   * Vector Fields of type Collection(Edm.Single) to be included in the vector
   * searched.
   */
  fields?: string;
  /**
   * When true, triggers an exhaustive k-nearest neighbor search across all vectors
   * within the vector index. Useful for scenarios where exact matches are critical,
   * such as determining ground truth values.
   */
  exhaustive?: boolean;
  /**
   * Oversampling factor. Minimum value is 1. It overrides the 'defaultOversampling'
   * parameter configured in the index definition. It can be set only when 'rerankWithOriginalVectors'
   * is true. This parameter is only permitted when a
   * compression method is used on the underlying vector field.
   */
  oversampling?: number;
  /**
   * Relative weight of the vector query when compared to other vector query and/or
   * the text query within the same search request. This value is used when
   * combining the results of multiple ranking lists produced by the different
   * vector queries and/or the results retrieved through the text query. The higher
   * the weight, the higher the documents that matched that query will be in the
   * final ranking. Default is 1.0 and the value needs to be a positive number
   * larger than zero.
   */
  weight?: number;
  /** The threshold used for vector queries. Note this can only be set if all 'fields' use the same similarity metric. */
  threshold?: VectorThresholdUnion;
  /**
   * The OData filter expression to apply to this specific vector query. If no
   * filter expression is defined at the vector level, the expression defined in the
   * top level filter parameter is used instead.
   */
  filterOverride?: string;
  /** Type of query. */
  /** The discriminator possible values: vector, text, imageUrl, imageBinary */
  kind: VectorQueryKind;
}

export function vectorQuerySerializer(item: VectorQuery): any {
  return {
    k: item["kNearestNeighbors"],
    fields: item["fields"],
    exhaustive: item["exhaustive"],
    oversampling: item["oversampling"],
    weight: item["weight"],
    threshold: !item["threshold"]
      ? item["threshold"]
      : vectorThresholdUnionSerializer(item["threshold"]),
    filterOverride: item["filterOverride"],
    kind: item["kind"],
  };
}

export function vectorQueryDeserializer(item: any): VectorQuery {
  return {
    kNearestNeighbors: item["k"],
    fields: item["fields"],
    exhaustive: item["exhaustive"],
    oversampling: item["oversampling"],
    weight: item["weight"],
    threshold: !item["threshold"]
      ? item["threshold"]
      : vectorThresholdUnionDeserializer(item["threshold"]),
    filterOverride: item["filterOverride"],
    kind: item["kind"],
  };
}

/** Alias for VectorQueryUnion */
export type VectorQueryUnion =
  | VectorizedQuery
  | VectorizableTextQuery
  | VectorizableImageUrlQuery
  | VectorizableImageBinaryQuery
  | VectorQuery;

export function vectorQueryUnionSerializer(item: VectorQueryUnion): any {
  switch (item.kind) {
    case "vector":
      return vectorizedQuerySerializer(item as VectorizedQuery);

    case "text":
      return vectorizableTextQuerySerializer(item as VectorizableTextQuery);

    case "imageUrl":
      return vectorizableImageUrlQuerySerializer(
        item as VectorizableImageUrlQuery,
      );

    case "imageBinary":
      return vectorizableImageBinaryQuerySerializer(
        item as VectorizableImageBinaryQuery,
      );

    default:
      return vectorQuerySerializer(item);
  }
}

export function vectorQueryUnionDeserializer(item: any): VectorQueryUnion {
  switch (item.kind) {
    case "vector":
      return vectorizedQueryDeserializer(item as VectorizedQuery);

    case "text":
      return vectorizableTextQueryDeserializer(item as VectorizableTextQuery);

    case "imageUrl":
      return vectorizableImageUrlQueryDeserializer(
        item as VectorizableImageUrlQuery,
      );

    case "imageBinary":
      return vectorizableImageBinaryQueryDeserializer(
        item as VectorizableImageBinaryQuery,
      );

    default:
      return vectorQueryDeserializer(item);
  }
}

/** The threshold used for vector queries. */
export interface VectorThreshold {
  /** Type of threshold. */
  /** The discriminator possible values: vectorSimilarity, searchScore */
  kind: VectorThresholdKind;
}

export function vectorThresholdSerializer(item: VectorThreshold): any {
  return { kind: item["kind"] };
}

export function vectorThresholdDeserializer(item: any): VectorThreshold {
  return {
    kind: item["kind"],
  };
}

/** Alias for VectorThresholdUnion */
export type VectorThresholdUnion =
  | VectorSimilarityThreshold
  | SearchScoreThreshold
  | VectorThreshold;

export function vectorThresholdUnionSerializer(
  item: VectorThresholdUnion,
): any {
  switch (item.kind) {
    case "vectorSimilarity":
      return vectorSimilarityThresholdSerializer(
        item as VectorSimilarityThreshold,
      );

    case "searchScore":
      return searchScoreThresholdSerializer(item as SearchScoreThreshold);

    default:
      return vectorThresholdSerializer(item);
  }
}

export function vectorThresholdUnionDeserializer(
  item: any,
): VectorThresholdUnion {
  switch (item.kind) {
    case "vectorSimilarity":
      return vectorSimilarityThresholdDeserializer(
        item as VectorSimilarityThreshold,
      );

    case "searchScore":
      return searchScoreThresholdDeserializer(item as SearchScoreThreshold);

    default:
      return vectorThresholdDeserializer(item);
  }
}

/** The kind of vector query being performed. */
export type VectorThresholdKind = "vectorSimilarity" | "searchScore";

/**
 * The results of the vector query will be filtered based on the vector similarity
 * metric. Note this is the canonical definition of similarity metric, not the 'distance'
 * version. The threshold direction (larger or smaller) will be chosen
 * automatically according to the metric used by the field.
 */
export interface VectorSimilarityThreshold extends VectorThreshold {
  /**
   * The threshold will filter based on the similarity metric value. Note this is
   * the canonical definition of similarity metric, not the 'distance' version. The
   * threshold direction (larger or smaller) will be chosen automatically according
   * to the metric used by the field.
   */
  value: number;
  /** The kind of threshold used to filter vector queries */
  kind: "vectorSimilarity";
}

export function vectorSimilarityThresholdSerializer(
  item: VectorSimilarityThreshold,
): any {
  return { kind: item["kind"], value: item["value"] };
}

export function vectorSimilarityThresholdDeserializer(
  item: any,
): VectorSimilarityThreshold {
  return {
    kind: item["kind"],
    value: item["value"],
  };
}

/**
 * The results of the vector query will filter based on the '@search.score' value.
 * Note this is the @search.score returned as part of the search response. The
 * threshold direction will be chosen for higher @search.score.
 */
export interface SearchScoreThreshold extends VectorThreshold {
  /**
   * The threshold will filter based on the '@search.score' value. Note this is the
   * @search.score returned as part of the search response. The threshold direction
   * will be chosen for higher @search.score.
   */
  value: number;
  /** The kind of threshold used to filter vector queries */
  kind: "searchScore";
}

export function searchScoreThresholdSerializer(
  item: SearchScoreThreshold,
): any {
  return { kind: item["kind"], value: item["value"] };
}

export function searchScoreThresholdDeserializer(
  item: any,
): SearchScoreThreshold {
  return {
    kind: item["kind"],
    value: item["value"],
  };
}

/** The kind of vector query being performed. */
export type VectorQueryKind = "vector" | "text" | "imageUrl" | "imageBinary";

/**
 * The query parameters to use for vector search when a raw vector value is
 * provided.
 */
export interface VectorizedQuery extends VectorQuery {
  /** The vector representation of a search query. */
  vector: number[];
  /** The kind of vector query being performed. */
  kind: "vector";
}

export function vectorizedQuerySerializer(item: VectorizedQuery): any {
  return {
    k: item["kNearestNeighbors"],
    fields: item["fields"],
    exhaustive: item["exhaustive"],
    oversampling: item["oversampling"],
    weight: item["weight"],
    threshold: !item["threshold"]
      ? item["threshold"]
      : vectorThresholdUnionSerializer(item["threshold"]),
    filterOverride: item["filterOverride"],
    kind: item["kind"],
    vector: item["vector"].map((p: any) => {
      return p;
    }),
  };
}

export function vectorizedQueryDeserializer(item: any): VectorizedQuery {
  return {
    kNearestNeighbors: item["k"],
    fields: item["fields"],
    exhaustive: item["exhaustive"],
    oversampling: item["oversampling"],
    weight: item["weight"],
    threshold: !item["threshold"]
      ? item["threshold"]
      : vectorThresholdUnionDeserializer(item["threshold"]),
    filterOverride: item["filterOverride"],
    kind: item["kind"],
    vector: item["vector"].map((p: any) => {
      return p;
    }),
  };
}

/**
 * The query parameters to use for vector search when a text value that needs to
 * be vectorized is provided.
 */
export interface VectorizableTextQuery extends VectorQuery {
  /** The text to be vectorized to perform a vector search query. */
  text: string;
  /**
   * Can be configured to let a generative model rewrite the query before sending it
   * to be vectorized.
   */
  queryRewrites?: QueryRewritesType;
  /** The kind of vector query being performed. */
  kind: "text";
}

export function vectorizableTextQuerySerializer(
  item: VectorizableTextQuery,
): any {
  return {
    k: item["kNearestNeighbors"],
    fields: item["fields"],
    exhaustive: item["exhaustive"],
    oversampling: item["oversampling"],
    weight: item["weight"],
    threshold: !item["threshold"]
      ? item["threshold"]
      : vectorThresholdUnionSerializer(item["threshold"]),
    filterOverride: item["filterOverride"],
    kind: item["kind"],
    text: item["text"],
    queryRewrites: item["queryRewrites"],
  };
}

export function vectorizableTextQueryDeserializer(
  item: any,
): VectorizableTextQuery {
  return {
    kNearestNeighbors: item["k"],
    fields: item["fields"],
    exhaustive: item["exhaustive"],
    oversampling: item["oversampling"],
    weight: item["weight"],
    threshold: !item["threshold"]
      ? item["threshold"]
      : vectorThresholdUnionDeserializer(item["threshold"]),
    filterOverride: item["filterOverride"],
    kind: item["kind"],
    text: item["text"],
    queryRewrites: item["queryRewrites"],
  };
}

/**
 * The query parameters to use for vector search when an url that represents an
 * image value that needs to be vectorized is provided.
 */
export interface VectorizableImageUrlQuery extends VectorQuery {
  /** The URL of an image to be vectorized to perform a vector search query. */
  url?: string;
  /** The kind of vector query being performed. */
  kind: "imageUrl";
}

export function vectorizableImageUrlQuerySerializer(
  item: VectorizableImageUrlQuery,
): any {
  return {
    k: item["kNearestNeighbors"],
    fields: item["fields"],
    exhaustive: item["exhaustive"],
    oversampling: item["oversampling"],
    weight: item["weight"],
    threshold: !item["threshold"]
      ? item["threshold"]
      : vectorThresholdUnionSerializer(item["threshold"]),
    filterOverride: item["filterOverride"],
    kind: item["kind"],
    url: item["url"],
  };
}

export function vectorizableImageUrlQueryDeserializer(
  item: any,
): VectorizableImageUrlQuery {
  return {
    kNearestNeighbors: item["k"],
    fields: item["fields"],
    exhaustive: item["exhaustive"],
    oversampling: item["oversampling"],
    weight: item["weight"],
    threshold: !item["threshold"]
      ? item["threshold"]
      : vectorThresholdUnionDeserializer(item["threshold"]),
    filterOverride: item["filterOverride"],
    kind: item["kind"],
    url: item["url"],
  };
}

/**
 * The query parameters to use for vector search when a base 64 encoded binary of
 * an image that needs to be vectorized is provided.
 */
export interface VectorizableImageBinaryQuery extends VectorQuery {
  /**
   * The base 64 encoded binary of an image to be vectorized to perform a vector
   * search query.
   */
  base64Image?: string;
  /** The kind of vector query being performed. */
  kind: "imageBinary";
}

export function vectorizableImageBinaryQuerySerializer(
  item: VectorizableImageBinaryQuery,
): any {
  return {
    k: item["kNearestNeighbors"],
    fields: item["fields"],
    exhaustive: item["exhaustive"],
    oversampling: item["oversampling"],
    weight: item["weight"],
    threshold: !item["threshold"]
      ? item["threshold"]
      : vectorThresholdUnionSerializer(item["threshold"]),
    filterOverride: item["filterOverride"],
    kind: item["kind"],
    base64Image: item["base64Image"],
  };
}

export function vectorizableImageBinaryQueryDeserializer(
  item: any,
): VectorizableImageBinaryQuery {
  return {
    kNearestNeighbors: item["k"],
    fields: item["fields"],
    exhaustive: item["exhaustive"],
    oversampling: item["oversampling"],
    weight: item["weight"],
    threshold: !item["threshold"]
      ? item["threshold"]
      : vectorThresholdUnionDeserializer(item["threshold"]),
    filterOverride: item["filterOverride"],
    kind: item["kind"],
    base64Image: item["base64Image"],
  };
}

/**
 * Determines whether or not filters are applied before or after the vector search
 * is performed.
 */
export type VectorFilterMode = "postFilter" | "preFilter";

/** TThe query parameters to configure hybrid search behaviors. */
export interface HybridSearch {
  /**
   * Determines the maximum number of documents to be retrieved by the text query
   * portion of a hybrid search request. Those documents will be combined with the
   * documents matching the vector queries to produce a single final list of
   * results. Choosing a larger maxTextRecallSize value will allow retrieving and
   * paging through more documents (using the top and skip parameters), at the cost
   * of higher resource utilization and higher latency. The value needs to be
   * between 1 and 10,000. Default is 1000.
   */
  maxTextRecallSize?: number;
  /**
   * Determines whether the count and facets should includes all documents that
   * matched the search query, or only the documents that are retrieved within the 'maxTextRecallSize' window.
   */
  countAndFacetMode?: HybridCountAndFacetMode;
}

export function hybridSearchSerializer(item: HybridSearch): any {
  return {
    maxTextRecallSize: item["maxTextRecallSize"],
    countAndFacetMode: item["countAndFacetMode"],
  };
}

export function hybridSearchDeserializer(item: any): HybridSearch {
  return {
    maxTextRecallSize: item["maxTextRecallSize"],
    countAndFacetMode: item["countAndFacetMode"],
  };
}

/**
 * Determines whether the count and facets should includes all documents that
 * matched the search query, or only the documents that are retrieved within the 'maxTextRecallSize'
 * window. The default value is 'countAllResults'.
 */
export type HybridCountAndFacetMode =
  | "countRetrievableResults"
  | "countAllResults";

export function searchResultArrayDeserializer(
  result: Array<SearchResult>,
): any[] {
  return result.map((item) => {
    return searchResultDeserializer(item);
  });
}

/** Contains a document found by a search query, plus associated metadata. */
export interface SearchResult {
  /**
   * The relevance score of the document compared to other documents returned by the
   * query.
   */
  score: number;
  /**
   * The relevance score computed by the semantic ranker for the top search results.
   * Search results are sorted by the RerankerScore first and then by the Score.
   * RerankerScore is only returned for queries of type 'semantic'.
   */
  rerankerScore?: number;
  /**
   * Text fragments from the document that indicate the matching search terms,
   * organized by each applicable field; null if hit highlighting was not enabled
   * for the query.
   */
  highlights?: Record<string, string[]>;
  /**
   * Captions are the most representative passages from the document relatively to
   * the search query. They are often used as document summary. Captions are only
   * returned for queries of type 'semantic'.
   */
  captions?: QueryCaptionResult[];
  /**
   * Contains debugging information that can be used to further explore your search
   * results.
   */
  readonly documentDebugInfo?: DocumentDebugInfo[];
  /** Additional properties */
  additionalProperties?: Record<string, any>;
}

export function searchResultDeserializer(item: any): SearchResult {
  return {
    additionalProperties: serializeRecord(item, [
      "score",
      "rerankerScore",
      "highlights",
      "captions",
      "documentDebugInfo",
    ]),
    score: item["@search.score"],
    rerankerScore: item["@search.rerankerScore"],
    highlights: item["@search.highlights"],
    captions: !item["@search.captions"]
      ? item["@search.captions"]
      : queryCaptionResultArrayDeserializer(item["@search.captions"]),
    documentDebugInfo: !item["@search.documentDebugInfo"]
      ? item["@search.documentDebugInfo"]
      : documentDebugInfoArrayDeserializer(item["@search.documentDebugInfo"]),
  };
}

export function queryCaptionResultArrayDeserializer(
  result: Array<QueryCaptionResult>,
): any[] {
  return result.map((item) => {
    return queryCaptionResultDeserializer(item);
  });
}

/**
 * Captions are the most representative passages from the document relatively to
 * the search query. They are often used as document summary. Captions are only
 * returned for queries of type `semantic`.
 */
export interface QueryCaptionResult {
  /**
   * A representative text passage extracted from the document most relevant to the
   * search query.
   */
  text?: string;
  /**
   * Same text passage as in the Text property with highlighted phrases most
   * relevant to the query.
   */
  highlights?: string;
  /** Additional properties */
  additionalProperties?: Record<string, any>;
}

export function queryCaptionResultDeserializer(item: any): QueryCaptionResult {
  return {
    additionalProperties: serializeRecord(item, ["text", "highlights"]),
    text: item["text"],
    highlights: item["highlights"],
  };
}

export function documentDebugInfoArrayDeserializer(
  result: Array<DocumentDebugInfo>,
): any[] {
  return result.map((item) => {
    return documentDebugInfoDeserializer(item);
  });
}

/**
 * Contains debugging information that can be used to further explore your search
 * results.
 */
export interface DocumentDebugInfo {
  /** Contains debugging information specific to semantic ranking requests. */
  readonly semantic?: SemanticDebugInfo;
  /** Contains debugging information specific to vector and hybrid search. */
  readonly vectors?: VectorsDebugInfo;
}

export function documentDebugInfoDeserializer(item: any): DocumentDebugInfo {
  return {
    semantic: !item["semantic"]
      ? item["semantic"]
      : semanticDebugInfoDeserializer(item["semantic"]),
    vectors: !item["vectors"]
      ? item["vectors"]
      : vectorsDebugInfoDeserializer(item["vectors"]),
  };
}

/** Contains debugging information specific to semantic ranking requests. */
export interface SemanticDebugInfo {
  /**
   * The title field that was sent to the semantic enrichment process, as well as
   * how it was used
   */
  readonly titleField?: QueryResultDocumentSemanticField;
  /**
   * The content fields that were sent to the semantic enrichment process, as well
   * as how they were used
   */
  readonly contentFields?: QueryResultDocumentSemanticField[];
  /**
   * The keyword fields that were sent to the semantic enrichment process, as well
   * as how they were used
   */
  readonly keywordFields?: QueryResultDocumentSemanticField[];
  /** The raw concatenated strings that were sent to the semantic enrichment process. */
  readonly rerankerInput?: QueryResultDocumentRerankerInput;
}

export function semanticDebugInfoDeserializer(item: any): SemanticDebugInfo {
  return {
    titleField: !item["titleField"]
      ? item["titleField"]
      : queryResultDocumentSemanticFieldDeserializer(item["titleField"]),
    contentFields: !item["contentFields"]
      ? item["contentFields"]
      : queryResultDocumentSemanticFieldArrayDeserializer(
          item["contentFields"],
        ),
    keywordFields: !item["keywordFields"]
      ? item["keywordFields"]
      : queryResultDocumentSemanticFieldArrayDeserializer(
          item["keywordFields"],
        ),
    rerankerInput: !item["rerankerInput"]
      ? item["rerankerInput"]
      : queryResultDocumentRerankerInputDeserializer(item["rerankerInput"]),
  };
}

/**
 * Description of fields that were sent to the semantic enrichment process, as
 * well as how they were used
 */
export interface QueryResultDocumentSemanticField {
  /** The name of the field that was sent to the semantic enrichment process */
  readonly name?: string;
  /**
   * The way the field was used for the semantic enrichment process (fully used,
   * partially used, or unused)
   */
  readonly state?: SemanticFieldState;
}

export function queryResultDocumentSemanticFieldDeserializer(
  item: any,
): QueryResultDocumentSemanticField {
  return {
    name: item["name"],
    state: item["state"],
  };
}

/** The way the field was used for the semantic enrichment process. */
export type SemanticFieldState = "used" | "unused" | "partial";

export function queryResultDocumentSemanticFieldArrayDeserializer(
  result: Array<QueryResultDocumentSemanticField>,
): any[] {
  return result.map((item) => {
    return queryResultDocumentSemanticFieldDeserializer(item);
  });
}

/** The raw concatenated strings that were sent to the semantic enrichment process. */
export interface QueryResultDocumentRerankerInput {
  /** The raw string for the title field that was used for semantic enrichment. */
  readonly title?: string;
  /**
   * The raw concatenated strings for the content fields that were used for semantic
   * enrichment.
   */
  readonly content?: string;
  /**
   * The raw concatenated strings for the keyword fields that were used for semantic
   * enrichment.
   */
  readonly keywords?: string;
}

export function queryResultDocumentRerankerInputDeserializer(
  item: any,
): QueryResultDocumentRerankerInput {
  return {
    title: item["title"],
    content: item["content"],
    keywords: item["keywords"],
  };
}

/** "Contains debugging information specific to vector and hybrid search.") */
export interface VectorsDebugInfo {
  /**
   * The breakdown of subscores of the document prior to the chosen result set
   * fusion/combination method such as RRF.
   */
  readonly subscores?: QueryResultDocumentSubscores;
}

export function vectorsDebugInfoDeserializer(item: any): VectorsDebugInfo {
  return {
    subscores: !item["subscores"]
      ? item["subscores"]
      : queryResultDocumentSubscoresDeserializer(item["subscores"]),
  };
}

/**
 * The breakdown of subscores between the text and vector query components of the
 * search query for this document. Each vector query is shown as a separate object
 * in the same order they were received.
 */
export interface QueryResultDocumentSubscores {
  /** The BM25 or Classic score for the text portion of the query. */
  readonly text?: TextResult;
  /** The vector similarity and @search.score values for each vector query. */
  readonly vectors?: Record<string, SingleVectorFieldResult>[];
  /** The BM25 or Classic score for the text portion of the query. */
  readonly documentBoost?: number;
}

export function queryResultDocumentSubscoresDeserializer(
  item: any,
): QueryResultDocumentSubscores {
  return {
    text: !item["text"] ? item["text"] : textResultDeserializer(item["text"]),
    vectors: !item["vectors"]
      ? item["vectors"]
      : singleVectorFieldResultRecordArrayDeserializer(item["vectors"]),
    documentBoost: item["documentBoost"],
  };
}

/** The BM25 or Classic score for the text portion of the query. */
export interface TextResult {
  /** The BM25 or Classic score for the text portion of the query. */
  readonly searchScore?: number;
}

export function textResultDeserializer(item: any): TextResult {
  return {
    searchScore: item["searchScore"],
  };
}

export function singleVectorFieldResultRecordArrayDeserializer(
  result: Array<Record<string, SingleVectorFieldResult>>,
): any[] {
  return result.map((item) => {
    return singleVectorFieldResultRecordDeserializer(item);
  });
}

export function singleVectorFieldResultRecordDeserializer(
  item: Record<string, any>,
): Record<string, SingleVectorFieldResult> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : singleVectorFieldResultDeserializer(item[key]);
  });
  return result;
}

/**
 * A single vector field result. Both @search.score and vector similarity values
 * are returned. Vector similarity is related to @search.score by an equation.
 */
export interface SingleVectorFieldResult {
  /**
   * The @search.score value that is calculated from the vector similarity score.
   * This is the score that's visible in a pure single-field single-vector query.
   */
  readonly searchScore?: number;
  /**
   * The vector similarity score for this document. Note this is the canonical
   * definition of similarity metric, not the 'distance' version. For example,
   * cosine similarity instead of cosine distance.
   */
  readonly vectorSimilarity?: number;
}

export function singleVectorFieldResultDeserializer(
  item: any,
): SingleVectorFieldResult {
  return {
    searchScore: item["searchScore"],
    vectorSimilarity: item["vectorSimilarity"],
  };
}

/** Reason that a partial response was returned for a semantic ranking request. */
export type SemanticErrorReason =
  | "maxWaitExceeded"
  | "capacityOverloaded"
  | "transient";
/** Type of partial response that was returned for a semantic ranking request. */
export type SemanticSearchResultsType = "baseResults" | "rerankedResults";
/** Type of query rewrite that was used for this request. */
export type SemanticQueryRewritesResultType = "originalQueryOnly";

/** A document retrieved via a document lookup operation. */
export interface LookupDocument {
  /** Additional properties */
  additionalProperties?: Record<string, any>;
}

export function lookupDocumentDeserializer(item: any): LookupDocument {
  return {
    additionalProperties: serializeRecord(item, []),
  };
}

/** Response containing suggestion query results from an index. */
export interface SuggestDocumentsResult {
  /** The sequence of results returned by the query. */
  results: SuggestResult[];
  /**
   * A value indicating the percentage of the index that was included in the query,
   * or null if minimumCoverage was not set in the request.
   */
  coverage?: number;
}

export function suggestDocumentsResultDeserializer(
  item: any,
): SuggestDocumentsResult {
  return {
    results: suggestResultArrayDeserializer(item["value"]),
    coverage: item["@search.coverage"],
  };
}

export function suggestResultArrayDeserializer(
  result: Array<SuggestResult>,
): any[] {
  return result.map((item) => {
    return suggestResultDeserializer(item);
  });
}

/**
 * A result containing a document found by a suggestion query, plus associated
 * metadata.
 */
export interface SuggestResult {
  /** The text of the suggestion result. */
  text: string;
  /** Additional properties */
  additionalProperties?: Record<string, any>;
}

export function suggestResultDeserializer(item: any): SuggestResult {
  return {
    additionalProperties: serializeRecord(item, ["text"]),
    text: item["@search.text"],
  };
}

/**
 * Parameters for filtering, sorting, fuzzy matching, and other suggestions query
 * behaviors.
 */
export interface SuggestRequest {
  /** An OData expression that filters the documents considered for suggestions. */
  filter?: string;
  /**
   * A value indicating whether to use fuzzy matching for the suggestion query.
   * Default is false. When set to true, the query will find suggestions even if
   * there's a substituted or missing character in the search text. While this
   * provides a better experience in some scenarios, it comes at a performance cost
   * as fuzzy suggestion searches are slower and consume more resources.
   */
  useFuzzyMatching?: boolean;
  /**
   * A string tag that is appended to hit highlights. Must be set with
   * highlightPreTag. If omitted, hit highlighting of suggestions is disabled.
   */
  highlightPostTag?: string;
  /**
   * A string tag that is prepended to hit highlights. Must be set with
   * highlightPostTag. If omitted, hit highlighting of suggestions is disabled.
   */
  highlightPreTag?: string;
  /**
   * A number between 0 and 100 indicating the percentage of the index that must be
   * covered by a suggestion query in order for the query to be reported as a
   * success. This parameter can be useful for ensuring search availability even for
   * services with only one replica. The default is 80.
   */
  minimumCoverage?: number;
  /**
   * The comma-separated list of OData $orderby expressions by which to sort the
   * results. Each expression can be either a field name or a call to either the
   * geo.distance() or the search.score() functions. Each expression can be followed
   * by asc to indicate ascending, or desc to indicate descending. The default is
   * ascending order. Ties will be broken by the match scores of documents. If no
   * $orderby is specified, the default sort order is descending by document match
   * score. There can be at most 32 $orderby clauses.
   */
  orderBy?: string;
  /**
   * The search text to use to suggest documents. Must be at least 1 character, and
   * no more than 100 characters.
   */
  searchText: string;
  /**
   * The comma-separated list of field names to search for the specified search
   * text. Target fields must be included in the specified suggester.
   */
  searchFields?: string;
  /**
   * The comma-separated list of fields to retrieve. If unspecified, only the key
   * field will be included in the results.
   */
  select?: string;
  /**
   * The name of the suggester as specified in the suggesters collection that's part
   * of the index definition.
   */
  suggesterName: string;
  /**
   * The number of suggestions to retrieve. This must be a value between 1 and 100.
   * The default is 5.
   */
  top?: number;
}

export function suggestRequestSerializer(item: SuggestRequest): any {
  return {
    filter: item["filter"],
    fuzzy: item["useFuzzyMatching"],
    highlightPostTag: item["highlightPostTag"],
    highlightPreTag: item["highlightPreTag"],
    minimumCoverage: item["minimumCoverage"],
    orderby: item["orderBy"],
    search: item["searchText"],
    searchFields: item["searchFields"],
    select: item["select"],
    suggesterName: item["suggesterName"],
    top: item["top"],
  };
}

/** Contains a batch of document write actions to send to the index. */
export interface IndexBatch {
  /** The actions in the batch. */
  actions: IndexAction[];
}

export function indexBatchSerializer(item: IndexBatch): any {
  return { value: indexActionArraySerializer(item["actions"]) };
}

export function indexActionArraySerializer(result: Array<IndexAction>): any[] {
  return result.map((item) => {
    return indexActionSerializer(item);
  });
}

/** Represents an index action that operates on a document. */
export interface IndexAction {
  /** The operation to perform on a document in an indexing batch. */
  actionType?: IndexActionType;
  /** Additional properties */
  additionalProperties?: Record<string, any>;
}

export function indexActionSerializer(item: IndexAction): any {
  return {
    ...serializeRecord(item.additionalProperties),
    "@search.action": item["actionType"],
  };
}

/** The operation to perform on a document in an indexing batch. */
export type IndexActionType = "upload" | "merge" | "mergeOrUpload" | "delete";

/**
 * Response containing the status of operations for all documents in the indexing
 * request.
 */
export interface IndexDocumentsResult {
  /** The list of status information for each document in the indexing request. */
  results: IndexingResult[];
}

export function indexDocumentsResultDeserializer(
  item: any,
): IndexDocumentsResult {
  return {
    results: indexingResultArrayDeserializer(item["value"]),
  };
}

export function indexingResultArrayDeserializer(
  result: Array<IndexingResult>,
): any[] {
  return result.map((item) => {
    return indexingResultDeserializer(item);
  });
}

/** Status of an indexing operation for a single document. */
export interface IndexingResult {
  /** The key of a document that was in the indexing request. */
  key: string;
  /**
   * The error message explaining why the indexing operation failed for the document
   * identified by the key; null if indexing succeeded.
   */
  errorMessage?: string;
  /**
   * A value indicating whether the indexing operation succeeded for the document
   * identified by the key.
   */
  succeeded: boolean;
  /**
   * The status code of the indexing operation. Possible values include: 200 for a
   * successful update or delete, 201 for successful document creation, 400 for a
   * malformed input document, 404 for document not found, 409 for a version
   * conflict, 422 when the index is temporarily unavailable, or 503 for when the
   * service is too busy.
   */
  statusCode: number;
}

export function indexingResultDeserializer(item: any): IndexingResult {
  return {
    key: item["key"],
    errorMessage: item["errorMessage"],
    succeeded: item["status"],
    statusCode: item["statusCode"],
  };
}

/** The result of Autocomplete query. */
export interface AutocompleteResult {
  /**
   * A value indicating the percentage of the index that was considered by the
   * autocomplete request, or null if minimumCoverage was not specified in the
   * request.
   */
  coverage?: number;
  /** The list of returned Autocompleted items. */
  results: AutocompleteItem[];
}

export function autocompleteResultDeserializer(item: any): AutocompleteResult {
  return {
    coverage: item["@search.coverage"],
    results: autocompleteItemArrayDeserializer(item["value"]),
  };
}

export function autocompleteItemArrayDeserializer(
  result: Array<AutocompleteItem>,
): any[] {
  return result.map((item) => {
    return autocompleteItemDeserializer(item);
  });
}

/** The result of Autocomplete requests. */
export interface AutocompleteItem {
  /** The completed term. */
  text: string;
  /** The query along with the completed term. */
  queryPlusText: string;
}

export function autocompleteItemDeserializer(item: any): AutocompleteItem {
  return {
    text: item["text"],
    queryPlusText: item["queryPlusText"],
  };
}

/** Parameters for fuzzy matching, and other autocomplete query behaviors. */
export interface AutocompleteRequest {
  /** The search text on which to base autocomplete results. */
  searchText: string;
  /**
   * Specifies the mode for Autocomplete. The default is 'oneTerm'. Use 'twoTerms'
   * to get shingles and 'oneTermWithContext' to use the current context while
   * producing auto-completed terms.
   */
  autocompleteMode?: AutocompleteMode;
  /**
   * An OData expression that filters the documents used to produce completed terms
   * for the Autocomplete result.
   */
  filter?: string;
  /**
   * A value indicating whether to use fuzzy matching for the autocomplete query.
   * Default is false. When set to true, the query will autocomplete terms even if
   * there's a substituted or missing character in the search text. While this
   * provides a better experience in some scenarios, it comes at a performance cost
   * as fuzzy autocomplete queries are slower and consume more resources.
   */
  useFuzzyMatching?: boolean;
  /**
   * A string tag that is appended to hit highlights. Must be set with
   * highlightPreTag. If omitted, hit highlighting is disabled.
   */
  highlightPostTag?: string;
  /**
   * A string tag that is prepended to hit highlights. Must be set with
   * highlightPostTag. If omitted, hit highlighting is disabled.
   */
  highlightPreTag?: string;
  /**
   * A number between 0 and 100 indicating the percentage of the index that must be
   * covered by an autocomplete query in order for the query to be reported as a
   * success. This parameter can be useful for ensuring search availability even for
   * services with only one replica. The default is 80.
   */
  minimumCoverage?: number;
  /**
   * The comma-separated list of field names to consider when querying for
   * auto-completed terms. Target fields must be included in the specified
   * suggester.
   */
  searchFields?: string;
  /**
   * The name of the suggester as specified in the suggesters collection that's part
   * of the index definition.
   */
  suggesterName: string;
  /**
   * The number of auto-completed terms to retrieve. This must be a value between 1
   * and 100. The default is 5.
   */
  top?: number;
}

export function autocompleteRequestSerializer(item: AutocompleteRequest): any {
  return {
    search: item["searchText"],
    autocompleteMode: item["autocompleteMode"],
    filter: item["filter"],
    fuzzy: item["useFuzzyMatching"],
    highlightPostTag: item["highlightPostTag"],
    highlightPreTag: item["highlightPreTag"],
    minimumCoverage: item["minimumCoverage"],
    searchFields: item["searchFields"],
    suggesterName: item["suggesterName"],
    top: item["top"],
  };
}

/**
 * Specifies the mode for Autocomplete. The default is 'oneTerm'. Use 'twoTerms'
 * to get shingles and 'oneTermWithContext' to use the current context in
 * producing autocomplete terms.
 */
export type AutocompleteMode = "oneTerm" | "twoTerms" | "oneTermWithContext";
