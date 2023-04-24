// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  QueryMultiParameters,
  QuerySsvParameters,
  QueryTsvParameters,
  QueryPipesParameters,
  QueryCsvParameters,
  HeaderCsvParameters,
} from "./parameters";
import {
  QueryMulti204Response,
  QuerySsv204Response,
  QueryTsv204Response,
  QueryPipes204Response,
  QueryCsv204Response,
  HeaderCsv204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface QueryMulti {
  get(options: QueryMultiParameters): StreamableMethod<QueryMulti204Response>;
}

export interface QuerySsv {
  get(options: QuerySsvParameters): StreamableMethod<QuerySsv204Response>;
}

export interface QueryTsv {
  get(options: QueryTsvParameters): StreamableMethod<QueryTsv204Response>;
}

export interface QueryPipes {
  get(options: QueryPipesParameters): StreamableMethod<QueryPipes204Response>;
}

export interface QueryCsv {
  get(options: QueryCsvParameters): StreamableMethod<QueryCsv204Response>;
}

export interface HeaderCsv {
  get(options: HeaderCsvParameters): StreamableMethod<HeaderCsv204Response>;
}

export interface Routes {
  /** Resource for '/parameters/collection-format/query/multi' has methods for the following verbs: get */
  (path: "/parameters/collection-format/query/multi"): QueryMulti;
  /** Resource for '/parameters/collection-format/query/ssv' has methods for the following verbs: get */
  (path: "/parameters/collection-format/query/ssv"): QuerySsv;
  /** Resource for '/parameters/collection-format/query/tsv' has methods for the following verbs: get */
  (path: "/parameters/collection-format/query/tsv"): QueryTsv;
  /** Resource for '/parameters/collection-format/query/pipes' has methods for the following verbs: get */
  (path: "/parameters/collection-format/query/pipes"): QueryPipes;
  /** Resource for '/parameters/collection-format/query/csv' has methods for the following verbs: get */
  (path: "/parameters/collection-format/query/csv"): QueryCsv;
  /** Resource for '/parameters/collection-format/header/csv' has methods for the following verbs: get */
  (path: "/parameters/collection-format/header/csv"): HeaderCsv;
}

export type CollectionFormatClient = Client & {
  path: Routes;
};
