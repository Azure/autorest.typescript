// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  TestMultiParameters,
  TestCsvParameters,
  TestDefaultParameters,
} from "./parameters";
import {
  TestMulti200Response,
  TestCsv200Response,
  TestDefault200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface TestMulti {
  get(options: TestMultiParameters): StreamableMethod<TestMulti200Response>;
}

export interface TestCsv {
  get(options: TestCsvParameters): StreamableMethod<TestCsv200Response>;
}

export interface TestDefault {
  get(options: TestDefaultParameters): StreamableMethod<TestDefault200Response>;
}

export interface Routes {
  /** Resource for '/collectionFormat/multi' has methods for the following verbs: get */
  (path: "/collectionFormat/multi"): TestMulti;
  /** Resource for '/collectionFormat/csv' has methods for the following verbs: get */
  (path: "/collectionFormat/csv"): TestCsv;
  /** Resource for '/collectionFormat/default' has methods for the following verbs: get */
  (path: "/collectionFormat/default"): TestDefault;
}

export type CollectionFormatClient = Client & {
  path: Routes;
};
