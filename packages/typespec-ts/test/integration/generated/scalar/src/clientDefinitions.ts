// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  StringModelGetParameters,
  StringModelPutParameters,
  BooleanModelGetParameters,
  BooleanModelPutParameters,
  UnknownGetParameters,
  UnknownPutParameters,
} from "./parameters";
import {
  StringModelGet200Response,
  StringModelPut204Response,
  BooleanModelGet200Response,
  BooleanModelPut204Response,
  UnknownGet200Response,
  UnknownPut204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface StringModelGet {
  /** get string value */
  get(
    options?: StringModelGetParameters
  ): StreamableMethod<StringModelGet200Response>;
  /** put string value */
  put(
    options: StringModelPutParameters
  ): StreamableMethod<StringModelPut204Response>;
}

export interface BooleanModelGet {
  /** get boolean value */
  get(
    options?: BooleanModelGetParameters
  ): StreamableMethod<BooleanModelGet200Response>;
  /** put boolean value */
  put(
    options: BooleanModelPutParameters
  ): StreamableMethod<BooleanModelPut204Response>;
}

export interface UnknownGet {
  /** get unknown value */
  get(options?: UnknownGetParameters): StreamableMethod<UnknownGet200Response>;
  /** put unknown value */
  put(options: UnknownPutParameters): StreamableMethod<UnknownPut204Response>;
}

export interface Routes {
  /** Resource for '/type/scalar/string' has methods for the following verbs: get, put */
  (path: "/type/scalar/string"): StringModelGet;
  /** Resource for '/type/scalar/boolean' has methods for the following verbs: get, put */
  (path: "/type/scalar/boolean"): BooleanModelGet;
  /** Resource for '/type/scalar/unknown' has methods for the following verbs: get, put */
  (path: "/type/scalar/unknown"): UnknownGet;
}

export type ScalarClient = Client & {
  path: Routes;
};
