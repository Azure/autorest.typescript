// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  FromNoneParameters,
  FromOneRequiredParameters,
  FromOneOptionalParameters,
} from "./parameters";
import {
  FromNone204Response,
  FromOneRequired204Response,
  FromOneOptional204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface FromNone {
  /** Test that currently accepts no parameters, will be updated in next spec to accept a new optional parameter as well */
  head(options?: FromNoneParameters): StreamableMethod<FromNone204Response>;
}

export interface FromOneRequired {
  /** Test that currently accepts one required parameter, will be updated in next spec to accept a new optional parameter as well */
  get(
    options: FromOneRequiredParameters
  ): StreamableMethod<FromOneRequired204Response>;
}

export interface FromOneOptional {
  /** Test that currently accepts one optional parameter, will be updated in next spec to accept a new optional parameter as well */
  get(
    options?: FromOneOptionalParameters
  ): StreamableMethod<FromOneOptional204Response>;
}

export interface Routes {
  /** Resource for '/add-optional-param/from-none' has methods for the following verbs: head */
  (path: "/add-optional-param/from-none"): FromNone;
  /** Resource for '/add-optional-param/from-one-required' has methods for the following verbs: get */
  (path: "/add-optional-param/from-one-required"): FromOneRequired;
  /** Resource for '/add-optional-param/from-one-optional' has methods for the following verbs: get */
  (path: "/add-optional-param/from-one-optional"): FromOneOptional;
}

export type ServiceDrivenOldClient = Client & {
  path: Routes;
};
