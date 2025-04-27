// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DocumentKeysOrIds } from "../../../models/azure/search/documents/indexes/models.js";
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface IndexersGetStatusOptionalParams extends OperationOptions {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  clientRequestId?: string;
}

/** Optional parameters. */
export interface IndexersCreateOptionalParams extends OperationOptions {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  clientRequestId?: string;
}

/** Optional parameters. */
export interface IndexersListOptionalParams extends OperationOptions {
  /**
   * Selects which top-level properties to retrieve.
   * Specified as a comma-separated list of JSON property names,
   * or '*' for all properties. The default is all properties.
   */
  select?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  clientRequestId?: string;
}

/** Optional parameters. */
export interface IndexersGetOptionalParams extends OperationOptions {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  clientRequestId?: string;
}

/** Optional parameters. */
export interface IndexersDeleteOptionalParams extends OperationOptions {
  /** Defines the If-Match condition. The operation will be performed only if the ETag on the server matches this value. */
  ifMatch?: string;
  /** Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value. */
  ifNoneMatch?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  clientRequestId?: string;
}

/** Optional parameters. */
export interface IndexersCreateOrUpdateOptionalParams extends OperationOptions {
  /** Defines the If-Match condition. The operation will be performed only if the ETag on the server matches this value. */
  ifMatch?: string;
  /** Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value. */
  ifNoneMatch?: string;
  /** Ignores cache reset requirements. */
  skipIndexerResetRequirementForCache?: boolean;
  /** Disables cache reprocessing change detection. */
  disableCacheReprocessingChangeDetection?: boolean;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  clientRequestId?: string;
}

/** Optional parameters. */
export interface IndexersRunOptionalParams extends OperationOptions {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  clientRequestId?: string;
}

/** Optional parameters. */
export interface IndexersResetDocsOptionalParams extends OperationOptions {
  /**
   * If false, keys or ids will be appended to existing ones. If true, only the keys
   * or ids in this payload will be queued to be re-ingested.
   */
  overwrite?: boolean;
  /**
   * The keys or ids of the documents to be re-ingested. If keys are provided, the
   * document key field must be specified in the indexer configuration. If ids are
   * provided, the document key field is ignored.
   */
  keysOrIds?: DocumentKeysOrIds;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  clientRequestId?: string;
}

/** Optional parameters. */
export interface IndexersResetOptionalParams extends OperationOptions {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  clientRequestId?: string;
}
