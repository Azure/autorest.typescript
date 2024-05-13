// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  NewOpParameters,
  NewOpInNewInterfaceParameters,
} from "./parameters.js";
import {
  NewOp200Response,
  NewOpInNewInterface200Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface NewOp {
  post(options: NewOpParameters): StreamableMethod<NewOp200Response>;
}

export interface NewOpInNewInterface {
  post(
    options: NewOpInNewInterfaceParameters,
  ): StreamableMethod<NewOpInNewInterface200Response>;
}

export interface Routes {
  /** Resource for '/test' has methods for the following verbs: post */
  (path: "/test"): NewOp;
  /** Resource for '/interface/test' has methods for the following verbs: post */
  (path: "/interface/test"): NewOpInNewInterface;
}

export type RenamedFromContext = Client & {
  path: Routes;
};
