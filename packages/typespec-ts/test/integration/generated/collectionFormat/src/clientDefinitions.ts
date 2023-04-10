// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  TestMultiParameters,
  TestCsvParameters,
  TestCsvHeaderParameters,
  TestDefaultHeaderParameters,
} from "./parameters";
import {
  TestMulti200Response,
  TestCsv200Response,
  TestCsvHeader200Response,
  TestDefaultHeader200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface TestMulti {
  get(options: TestMultiParameters): StreamableMethod<TestMulti200Response>;
}

export interface TestCsv {
  get(options: TestCsvParameters): StreamableMethod<TestCsv200Response>;
}

export interface TestCsvHeader {
  get(
    options: TestCsvHeaderParameters
  ): StreamableMethod<TestCsvHeader200Response>;
}

export interface TestDefaultHeader {
  get(
    options: TestDefaultHeaderParameters
  ): StreamableMethod<TestDefaultHeader200Response>;
}

export interface Routes {
  /** Resource for '/collectionFormat/multi' has methods for the following verbs: get */
  (path: "/collectionFormat/multi"): TestMulti;
  /** Resource for '/collectionFormat/csv' has methods for the following verbs: get */
  (path: "/collectionFormat/csv"): TestCsv;
  /** Resource for '/collectionFormat/csvHeader' has methods for the following verbs: get */
  (path: "/collectionFormat/csvHeader"): TestCsvHeader;
  /** Resource for '/collectionFormat/defaultHeader' has methods for the following verbs: get */
  (path: "/collectionFormat/defaultHeader"): TestDefaultHeader;
}

export type CollectionFormatClient = Client & {
  path: Routes;
};
