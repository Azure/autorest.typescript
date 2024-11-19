import * as coreClient from "@azure/core-client";

/** Captions are the most representative passages from the document relatively to the search query. They are often used as document summary. Captions are only returned for queries of type 'semantic'.. */
export interface CaptionResult {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /**
   * A representative text passage extracted from the document most relevant to the search query.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly text?: string;
  /**
   * Same text passage as in the Text property with highlighted phrases most relevant to the query.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly highlights?: string;
}

/** Parameter group */
export interface SearchOptions {
  /** A value that specifies whether to fetch the total count of results. Default is false. Setting this value to true may have a performance impact. Note that the count returned is an approximation. */
  includeTotalResultCount?: boolean;
}

/** Known values of {@link Enum0} that the service accepts. */
export enum KnownEnum0 {
  /** One */
  One = "one",
  /** Two */
  Two = "two",
}

/**
 * Defines values for Enum0. \
 * {@link KnownEnum0} can be used interchangeably with Enum0,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **one** \
 * **two**
 */
export type Enum0 = string;

/** Optional parameters. */
export interface DocumentsSearchGetOptionalParams
  extends coreClient.OperationOptions {
  /** Parameter group */
  searchOptions?: SearchOptions;
  /** A full-text search query expression; Use "*" or omit this parameter to match all documents. */
  searchText?: string;
}

/** Optional parameters. */
export interface OptionalNullClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Overrides client endpoint. */
  endpoint?: string;
}
