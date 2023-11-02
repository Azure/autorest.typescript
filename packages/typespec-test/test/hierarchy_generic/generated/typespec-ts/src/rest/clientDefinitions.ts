// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Op1Parameters,
  BOp1Parameters,
  COp1Parameters,
  DOp1Parameters,
} from "./parameters.js";
import {
  Op1204Response,
  BOp1204Response,
  COp1204Response,
  DOp1204Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Op1 {
  post(options: Op1Parameters): StreamableMethod<Op1204Response>;
}

export interface BOp1 {
  post(options: BOp1Parameters): StreamableMethod<BOp1204Response>;
}

export interface COp1 {
  post(options: COp1Parameters): StreamableMethod<COp1204Response>;
}

export interface COp1 {
  post(options: COp1Parameters): StreamableMethod<COp1204Response>;
}

export interface DOp1 {
  post(options: DOp1Parameters): StreamableMethod<DOp1204Response>;
}

export interface Routes {
  /** Resource for '/' has methods for the following verbs: post */
  (path: "/"): Op1;
  /** Resource for '/b' has methods for the following verbs: post */
  (path: "/b"): BOp1;
  /** Resource for '/b/e' has methods for the following verbs: post */
  (path: "/b/e"): COp1;
  /** Resource for '/b/c' has methods for the following verbs: post */
  (path: "/b/c"): COp1;
  /** Resource for '/d' has methods for the following verbs: post */
  (path: "/d"): DOp1;
}

export type FooContext = Client & {
  path: Routes;
};
