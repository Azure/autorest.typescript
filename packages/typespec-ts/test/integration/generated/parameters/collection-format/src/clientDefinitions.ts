// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  QueryMultiParameters,
  QueryCsvParameters,
  HeaderCsvParameters,
} from "./parameters";
import {
  QueryMulti204Response,
  QueryCsv204Response,
  HeaderCsv204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface QueryMulti {
  get(options: QueryMultiParameters): StreamableMethod<QueryMulti204Response>;
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
  /** Resource for '/parameters/collection-format/query/csv' has methods for the following verbs: get */
  (path: "/parameters/collection-format/query/csv"): QueryCsv;
  /** Resource for '/parameters/collection-format/header/csv' has methods for the following verbs: get */
  (path: "/parameters/collection-format/header/csv"): HeaderCsv;
}

export type CollectionFormatClient = Client & {
  path: Routes;
};
