// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { CollectionFormatContext } from "../../api/CollectionFormatContext.js";
import {
  queryMulti,
  querySsv,
  queryTsv,
  queryPipes,
  queryCsv,
} from "../../api/query/index.js";
import {
  QueryMultiOptionalParams,
  QuerySsvOptionalParams,
  QueryTsvOptionalParams,
  QueryPipesOptionalParams,
  QueryCsvOptionalParams,
} from "../../models/options.js";

export interface QueryOperations {
  multi: (
    colors: string[],
    options?: QueryMultiOptionalParams,
  ) => Promise<void>;
  ssv: (colors: string[], options?: QuerySsvOptionalParams) => Promise<void>;
  tsv: (colors: string[], options?: QueryTsvOptionalParams) => Promise<void>;
  pipes: (
    colors: string[],
    options?: QueryPipesOptionalParams,
  ) => Promise<void>;
  csv: (colors: string[], options?: QueryCsvOptionalParams) => Promise<void>;
}

export function getQuery(context: CollectionFormatContext) {
  return {
    multi: (colors: string[], options?: QueryMultiOptionalParams) =>
      queryMulti(context, colors, options),
    ssv: (colors: string[], options?: QuerySsvOptionalParams) =>
      querySsv(context, colors, options),
    tsv: (colors: string[], options?: QueryTsvOptionalParams) =>
      queryTsv(context, colors, options),
    pipes: (colors: string[], options?: QueryPipesOptionalParams) =>
      queryPipes(context, colors, options),
    csv: (colors: string[], options?: QueryCsvOptionalParams) =>
      queryCsv(context, colors, options),
  };
}

export function getQueryOperations(
  context: CollectionFormatContext,
): QueryOperations {
  return {
    ...getQuery(context),
  };
}
