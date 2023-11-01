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
  QueryQueryMultiOptions,
  QueryQuerySsvOptions,
  QueryQueryTsvOptions,
  QueryQueryPipesOptions,
  QueryQueryCsvOptions,
} from "../../models/options.js";

export interface QueryOperations {
  queryMulti: (
    colors: string[],
    options?: QueryQueryMultiOptions
  ) => Promise<void>;
  querySsv: (colors: string[], options?: QueryQuerySsvOptions) => Promise<void>;
  queryTsv: (colors: string[], options?: QueryQueryTsvOptions) => Promise<void>;
  queryPipes: (
    colors: string[],
    options?: QueryQueryPipesOptions
  ) => Promise<void>;
  queryCsv: (colors: string[], options?: QueryQueryCsvOptions) => Promise<void>;
}

export function getQuery(context: CollectionFormatContext) {
  return {
    queryMulti: (colors: string[], options?: QueryQueryMultiOptions) =>
      queryMulti(context, colors, options),
    querySsv: (colors: string[], options?: QueryQuerySsvOptions) =>
      querySsv(context, colors, options),
    queryTsv: (colors: string[], options?: QueryQueryTsvOptions) =>
      queryTsv(context, colors, options),
    queryPipes: (colors: string[], options?: QueryQueryPipesOptions) =>
      queryPipes(context, colors, options),
    queryCsv: (colors: string[], options?: QueryQueryCsvOptions) =>
      queryCsv(context, colors, options),
  };
}

export function getQueryOperations(
  context: CollectionFormatContext
): QueryOperations {
  return {
    ...getQuery(context),
  };
}
