// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  OneParameters,
  TwoParameters,
  SevenParameters,
  EightParameters,
  NineParameters,
  ThreeParameters,
  FourParameters,
  FiveParameters,
  SixParameters,
} from "./parameters";
import {
  One204Response,
  Two204Response,
  Seven204Response,
  Eight204Response,
  Nine204Response,
  Three204Response,
  Four204Response,
  Five204Response,
  Six204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface One {
  post(options?: OneParameters): StreamableMethod<One204Response>;
}

export interface Two {
  post(options?: TwoParameters): StreamableMethod<Two204Response>;
}

export interface Seven {
  post(options?: SevenParameters): StreamableMethod<Seven204Response>;
}

export interface Eight {
  post(options?: EightParameters): StreamableMethod<Eight204Response>;
}

export interface Nine {
  post(options?: NineParameters): StreamableMethod<Nine204Response>;
}

export interface Three {
  post(options?: ThreeParameters): StreamableMethod<Three204Response>;
}

export interface Four {
  post(options?: FourParameters): StreamableMethod<Four204Response>;
}

export interface Five {
  post(options?: FiveParameters): StreamableMethod<Five204Response>;
}

export interface Six {
  post(options?: SixParameters): StreamableMethod<Six204Response>;
}

export interface Routes {
  /** Resource for '/one' has methods for the following verbs: post */
  (path: "/one"): One;
  /** Resource for '/two' has methods for the following verbs: post */
  (path: "/two"): Two;
  /** Resource for '/seven' has methods for the following verbs: post */
  (path: "/seven"): Seven;
  /** Resource for '/eight' has methods for the following verbs: post */
  (path: "/eight"): Eight;
  /** Resource for '/nine' has methods for the following verbs: post */
  (path: "/nine"): Nine;
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
