// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  QueryMultiParameters,
  QuerySsvParameters,
  QueryTsvParameters,
  QueryPipesParameters,
  QueryCsvParameters,
  HeaderCsvParameters,
} from "./parameters.js";
import {
  QueryMulti204Response,
  QueryMultiDefaultResponse,
  QuerySsv204Response,
  QuerySsvDefaultResponse,
  QueryTsv204Response,
  QueryTsvDefaultResponse,
  QueryPipes204Response,
  QueryPipesDefaultResponse,
  QueryCsv204Response,
  QueryCsvDefaultResponse,
  HeaderCsv204Response,
  HeaderCsvDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface QueryMulti {
  get(
    options: QueryMultiParameters
  ): StreamableMethod<QueryMulti204Response | QueryMultiDefaultResponse>;
}

export interface QuerySsv {
  get(
    options: QuerySsvParameters
  ): StreamableMethod<QuerySsv204Response | QuerySsvDefaultResponse>;
}

export interface QueryTsv {
  get(
    options: QueryTsvParameters
  ): StreamableMethod<QueryTsv204Response | QueryTsvDefaultResponse>;
}

export interface QueryPipes {
  get(
    options: QueryPipesParameters
  ): StreamableMethod<QueryPipes204Response | QueryPipesDefaultResponse>;
}

export interface QueryCsv {
  get(
    options: QueryCsvParameters
  ): StreamableMethod<QueryCsv204Response | QueryCsvDefaultResponse>;
}

export interface HeaderCsv {
  get(
    options: HeaderCsvParameters
  ): StreamableMethod<HeaderCsv204Response | HeaderCsvDefaultResponse>;
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

export type CollectionFormatContext = Client & {
  path: Routes;
};
