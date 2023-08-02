// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  OneParameters,
  TwoParameters,
  ThreeParameters,
  FourParameters,
  FiveParameters,
  SixParameters,
} from "./parameters.js";
import {
  One204Response,
  Two204Response,
  Three204Response,
  Four204Response,
  Five204Response,
  Six204Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface One {
  get(options?: OneParameters): StreamableMethod<One204Response>;
}

export interface Two {
  get(options?: TwoParameters): StreamableMethod<Two204Response>;
}

export interface Three {
  get(options?: ThreeParameters): StreamableMethod<Three204Response>;
}

export interface Four {
  get(options?: FourParameters): StreamableMethod<Four204Response>;
}

export interface Five {
  get(options?: FiveParameters): StreamableMethod<Five204Response>;
}

export interface Six {
  get(options?: SixParameters): StreamableMethod<Six204Response>;
}

export interface Routes {
  /** Resource for '/one' has methods for the following verbs: get */
  (path: "/one"): One;
  /** Resource for '/two' has methods for the following verbs: get */
  (path: "/two"): Two;
  /** Resource for '/three' has methods for the following verbs: get */
  (path: "/three"): Three;
  /** Resource for '/four' has methods for the following verbs: get */
  (path: "/four"): Four;
  /** Resource for '/five' has methods for the following verbs: get */
  (path: "/five"): Five;
  /** Resource for '/six' has methods for the following verbs: get */
  (path: "/six"): Six;
}

export type ServiceContext = Client & {
  path: Routes;
};
