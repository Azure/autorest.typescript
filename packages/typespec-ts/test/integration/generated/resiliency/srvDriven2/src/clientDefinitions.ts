// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  AddOperationParameters,
  FromNoneParameters,
  FromOneRequiredParameters,
  FromOneOptionalParameters,
} from "./parameters";
import {
  AddOperation204Response,
  FromNone204Response,
  FromOneRequired204Response,
  FromOneOptional204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface AddOperation {
  /** Added operation */
  delete(
    options?: AddOperationParameters
  ): StreamableMethod<AddOperation204Response>;
}

export interface FromNone {
  /** Test that grew up from accepting no parameters to an optional input parameter */
  head(options?: FromNoneParameters): StreamableMethod<FromNone204Response>;
}

export interface FromOneRequired {
  /** Operation that grew up from accepting one required parameter to accepting a required parameter and an optional parameter. */
  get(
    options: FromOneRequiredParameters
  ): StreamableMethod<FromOneRequired204Response>;
}

export interface FromOneOptional {
  /** Tests that we can grow up an operation from accepting one optional parameter to accepting two optional parameters. */
  get(
    options?: FromOneOptionalParameters
  ): StreamableMethod<FromOneOptional204Response>;
}

export interface Routes {
  /** Resource for '/add-operation' has methods for the following verbs: delete */
  (path: "/add-operation"): AddOperation;
  /** Resource for '/add-optional-param/from-none' has methods for the following verbs: head */
  (path: "/add-optional-param/from-none"): FromNone;
  /** Resource for '/add-optional-param/from-one-required' has methods for the following verbs: get */
  (path: "/add-optional-param/from-one-required"): FromOneRequired;
  /** Resource for '/add-optional-param/from-one-optional' has methods for the following verbs: get */
  (path: "/add-optional-param/from-one-optional"): FromOneOptional;
}

export type ServiceDrivenNewClient = Client & {
  path: Routes;
};
