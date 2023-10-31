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
  multi: (colors: string[], options?: QueryQueryMultiOptions) => Promise<void>;
  ssv: (colors: string[], options?: QueryQuerySsvOptions) => Promise<void>;
  tsv: (colors: string[], options?: QueryQueryTsvOptions) => Promise<void>;
  pipes: (colors: string[], options?: QueryQueryPipesOptions) => Promise<void>;
  csv: (colors: string[], options?: QueryQueryCsvOptions) => Promise<void>;
}

export function getQuery(context: CollectionFormatContext) {
  return {
    multi: (colors: string[], options?: QueryQueryMultiOptions) =>
      queryMulti(context, colors, options),
    ssv: (colors: string[], options?: QueryQuerySsvOptions) =>
      querySsv(context, colors, options),
    tsv: (colors: string[], options?: QueryQueryTsvOptions) =>
      queryTsv(context, colors, options),
    pipes: (colors: string[], options?: QueryQueryPipesOptions) =>
      queryPipes(context, colors, options),
    csv: (colors: string[], options?: QueryQueryCsvOptions) =>
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
