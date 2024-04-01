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
  QueryMultiOptions,
  QuerySsvOptions,
  QueryTsvOptions,
  QueryPipesOptions,
  QueryCsvOptions,
} from "../../models/options.js";

export interface QueryOperations {
  multi: (colors: string[], options?: QueryMultiOptions) => Promise<void>;
  ssv: (colors: string[], options?: QuerySsvOptions) => Promise<void>;
  tsv: (colors: string[], options?: QueryTsvOptions) => Promise<void>;
  pipes: (colors: string[], options?: QueryPipesOptions) => Promise<void>;
  csv: (colors: string[], options?: QueryCsvOptions) => Promise<void>;
}

export function getQuery(context: CollectionFormatContext) {
  return {
    multi: (colors: string[], options?: QueryMultiOptions) =>
      queryMulti(context, colors, options),
    ssv: (colors: string[], options?: QuerySsvOptions) =>
      querySsv(context, colors, options),
    tsv: (colors: string[], options?: QueryTsvOptions) =>
      queryTsv(context, colors, options),
    pipes: (colors: string[], options?: QueryPipesOptions) =>
      queryPipes(context, colors, options),
    csv: (colors: string[], options?: QueryCsvOptions) =>
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
