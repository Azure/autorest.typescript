// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DataMapContext } from "../../api/dataMapContext.js";
import {
  autoComplete,
  suggest,
  query,
} from "../../api/discovery/operations.js";
import {
  DiscoveryAutoCompleteOptionalParams,
  DiscoverySuggestOptionalParams,
  DiscoveryQueryOptionalParams,
} from "../../api/discovery/options.js";
import {
  QueryOptions,
  QueryResult,
  SuggestOptions,
  SuggestResult,
  AutoCompleteOptions,
  AutoCompleteResult,
} from "../../models/models.js";

/** Interface representing a Discovery operations. */
export interface DiscoveryOperations {
  /** Get auto complete options. */
  autoComplete: (
    body: AutoCompleteOptions,
    options?: DiscoveryAutoCompleteOptionalParams,
  ) => Promise<AutoCompleteResult>;
  /** Get search suggestions by query criteria. */
  suggest: (
    body: SuggestOptions,
    options?: DiscoverySuggestOptionalParams,
  ) => Promise<SuggestResult>;
  /** Get data using search. */
  query: (
    body: QueryOptions,
    options?: DiscoveryQueryOptionalParams,
  ) => Promise<QueryResult>;
}

function _getDiscovery(context: DataMapContext) {
  return {
    autoComplete: (
      body: AutoCompleteOptions,
      options?: DiscoveryAutoCompleteOptionalParams,
    ) => autoComplete(context, body, options),
    suggest: (body: SuggestOptions, options?: DiscoverySuggestOptionalParams) =>
      suggest(context, body, options),
    query: (body: QueryOptions, options?: DiscoveryQueryOptionalParams) =>
      query(context, body, options),
  };
}

export function _getDiscoveryOperations(
  context: DataMapContext,
): DiscoveryOperations {
  return {
    ..._getDiscovery(context),
  };
}
