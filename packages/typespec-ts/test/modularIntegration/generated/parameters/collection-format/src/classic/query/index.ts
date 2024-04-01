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
  MultiOptions,
  SsvOptions,
  TsvOptions,
  PipesOptions,
  CsvOptions,
} from "../../models/options.js";

export interface QueryOperations {
  multi: (colors: string[], options?: MultiOptions) => Promise<void>;
  ssv: (colors: string[], options?: SsvOptions) => Promise<void>;
  tsv: (colors: string[], options?: TsvOptions) => Promise<void>;
  pipes: (colors: string[], options?: PipesOptions) => Promise<void>;
  csv: (colors: string[], options?: CsvOptions) => Promise<void>;
}

export function getQuery(context: CollectionFormatContext) {
  return {
    multi: (colors: string[], options?: MultiOptions) =>
      queryMulti(context, colors, options),
    ssv: (colors: string[], options?: SsvOptions) =>
      querySsv(context, colors, options),
    tsv: (colors: string[], options?: TsvOptions) =>
      queryTsv(context, colors, options),
    pipes: (colors: string[], options?: PipesOptions) =>
      queryPipes(context, colors, options),
    csv: (colors: string[], options?: CsvOptions) =>
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
