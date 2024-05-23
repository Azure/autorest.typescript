// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TestParameters } from "./parameters.js";
import { Test200Response } from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Test {
  post(options: TestParameters): StreamableMethod<Test200Response>;
}

export interface Routes {
  /** Resource for '/test' has methods for the following verbs: post */
  (path: "/test"): Test;
}

export type ReturnTypeChangedFromContext = Client & {
  path: Routes;
};
