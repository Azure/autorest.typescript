// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Test1Parameters,
  Test2Parameters,
  Test3Parameters,
  Test4Parameters,
} from "./parameters.js";
import {
  Test1204Response,
  Test2204Response,
  Test3204Response,
  Test4204Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Test1 {
  post(options?: Test1Parameters): StreamableMethod<Test1204Response>;
}

export interface Test2 {
  post(options?: Test2Parameters): StreamableMethod<Test2204Response>;
}

export interface Test3 {
  post(options: Test3Parameters): StreamableMethod<Test3204Response>;
}

export interface Test4 {
  post(options: Test4Parameters): StreamableMethod<Test4204Response>;
}

export interface Routes {
  /** Resource for '/test1' has methods for the following verbs: post */
  (path: "/test1"): Test1;
  /** Resource for '/test2' has methods for the following verbs: post */
  (path: "/test2"): Test2;
  /** Resource for '/test3' has methods for the following verbs: post */
  (path: "/test3"): Test3;
  /** Resource for '/test4' has methods for the following verbs: post */
  (path: "/test4"): Test4;
}

export type DemoServiceContext = Client & {
  path: Routes;
};
