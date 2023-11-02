// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  OneParameters,
  TwoParameters,
  FooThreeParameters,
  FooFourParameters,
  BarFiveParameters,
  BarSixParameters,
} from "./parameters.js";
import {
  One204Response,
  Two204Response,
  FooThree204Response,
  FooFour204Response,
  BarFive204Response,
  BarSix204Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface One {
  post(options?: OneParameters): StreamableMethod<One204Response>;
}

export interface Two {
  post(options?: TwoParameters): StreamableMethod<Two204Response>;
}

export interface FooThree {
  post(options?: FooThreeParameters): StreamableMethod<FooThree204Response>;
}

export interface FooFour {
  post(options?: FooFourParameters): StreamableMethod<FooFour204Response>;
}

export interface BarFive {
  post(options?: BarFiveParameters): StreamableMethod<BarFive204Response>;
}

export interface BarSix {
  post(options?: BarSixParameters): StreamableMethod<BarSix204Response>;
}

export interface Routes {
  /** Resource for '/one' has methods for the following verbs: post */
  (path: "/one"): One;
  /** Resource for '/two' has methods for the following verbs: post */
  (path: "/two"): Two;
  /** Resource for '/three' has methods for the following verbs: post */
  (path: "/three"): FooThree;
  /** Resource for '/four' has methods for the following verbs: post */
  (path: "/four"): FooFour;
  /** Resource for '/five' has methods for the following verbs: post */
  (path: "/five"): BarFive;
  /** Resource for '/six' has methods for the following verbs: post */
  (path: "/six"): BarSix;
}

export type ServiceContext = Client & {
  path: Routes;
};
