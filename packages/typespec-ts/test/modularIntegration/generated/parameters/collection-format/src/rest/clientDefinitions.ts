// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  MultiParameters,
  SsvParameters,
  TsvParameters,
  PipesParameters,
  CsvParameters,
} from "./parameters.js";
import {
  Multi204Response,
  Ssv204Response,
  Tsv204Response,
  Pipes204Response,
  Csv204Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Multi {
  get(options: MultiParameters): StreamableMethod<Multi204Response>;
}

export interface Ssv {
  get(options: SsvParameters): StreamableMethod<Ssv204Response>;
}

export interface Tsv {
  get(options: TsvParameters): StreamableMethod<Tsv204Response>;
}

export interface Pipes {
  get(options: PipesParameters): StreamableMethod<Pipes204Response>;
}

export interface Csv {
  get(options: CsvParameters): StreamableMethod<Csv204Response>;
}

export interface Csv {
  get(options: CsvParameters): StreamableMethod<Csv204Response>;
}

export interface Routes {
  /** Resource for '/parameters/collection-format/query/multi' has methods for the following verbs: get */
  (path: "/parameters/collection-format/query/multi"): Multi;
  /** Resource for '/parameters/collection-format/query/ssv' has methods for the following verbs: get */
  (path: "/parameters/collection-format/query/ssv"): Ssv;
  /** Resource for '/parameters/collection-format/query/tsv' has methods for the following verbs: get */
  (path: "/parameters/collection-format/query/tsv"): Tsv;
  /** Resource for '/parameters/collection-format/query/pipes' has methods for the following verbs: get */
  (path: "/parameters/collection-format/query/pipes"): Pipes;
  /** Resource for '/parameters/collection-format/query/csv' has methods for the following verbs: get */
  (path: "/parameters/collection-format/query/csv"): Csv;
  /** Resource for '/parameters/collection-format/header/csv' has methods for the following verbs: get */
  (path: "/parameters/collection-format/header/csv"): Csv;
}

export type CollectionFormatContext = Client & {
  path: Routes;
};
