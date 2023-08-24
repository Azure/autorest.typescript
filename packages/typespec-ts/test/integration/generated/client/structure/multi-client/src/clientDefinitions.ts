// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  OneParameters,
  TwoParameters,
  ThreeParameters,
  FourParameters,
  FiveParameters,
  SixParameters,
} from "./parameters";
import {
  One204Response,
  OneDefaultResponse,
  Two204Response,
  TwoDefaultResponse,
  Three204Response,
  ThreeDefaultResponse,
  Four204Response,
  FourDefaultResponse,
  Five204Response,
  FiveDefaultResponse,
  Six204Response,
  SixDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface One {
  post(
    options?: OneParameters
  ): StreamableMethod<One204Response | OneDefaultResponse>;
}

export interface Two {
  post(
    options?: TwoParameters
  ): StreamableMethod<Two204Response | TwoDefaultResponse>;
}

export interface Three {
  post(
    options?: ThreeParameters
  ): StreamableMethod<Three204Response | ThreeDefaultResponse>;
}

export interface Four {
  post(
    options?: FourParameters
  ): StreamableMethod<Four204Response | FourDefaultResponse>;
}

export interface Five {
  post(
    options?: FiveParameters
  ): StreamableMethod<Five204Response | FiveDefaultResponse>;
}

export interface Six {
  post(
    options?: SixParameters
  ): StreamableMethod<Six204Response | SixDefaultResponse>;
}

export interface Routes {
  /** Resource for '/one' has methods for the following verbs: post */
  (path: "/one"): One;
  /** Resource for '/two' has methods for the following verbs: post */
  (path: "/two"): Two;
  /** Resource for '/three' has methods for the following verbs: post */
  (path: "/three"): Three;
  /** Resource for '/four' has methods for the following verbs: post */
  (path: "/four"): Four;
  /** Resource for '/five' has methods for the following verbs: post */
  (path: "/five"): Five;
  /** Resource for '/six' has methods for the following verbs: post */
  (path: "/six"): Six;
}

export type ServiceClient = Client & {
  path: Routes;
};
