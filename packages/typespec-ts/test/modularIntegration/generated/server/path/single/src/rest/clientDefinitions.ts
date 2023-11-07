// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { MyOpParameters } from "./parameters.js";
import { MyOp200Response } from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface MyOp {
  head(options?: MyOpParameters): StreamableMethod<MyOp200Response>;
}

export interface Routes {
  /** Resource for '/server/path/single/myOp' has methods for the following verbs: head */
  (path: "/server/path/single/myOp"): MyOp;
}

export type SingleContext = Client & {
  path: Routes;
};
