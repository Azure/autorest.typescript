// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ExplicitBodySimpleParameters,
  ImplicitBodySimpleParameters,
} from "./parameters.js";
import {
  ExplicitBodySimple204Response,
  ImplicitBodySimple204Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface ExplicitBodySimple {
  put(
    options: ExplicitBodySimpleParameters,
  ): StreamableMethod<ExplicitBodySimple204Response>;
}

export interface ImplicitBodySimple {
  put(
    options: ImplicitBodySimpleParameters,
  ): StreamableMethod<ImplicitBodySimple204Response>;
}

export interface Routes {
  /** Resource for '/parameters/basic/explicit-body/simple' has methods for the following verbs: put */
  (path: "/parameters/basic/explicit-body/simple"): ExplicitBodySimple;
  /** Resource for '/parameters/basic/implicit-body/simple' has methods for the following verbs: put */
  (path: "/parameters/basic/implicit-body/simple"): ImplicitBodySimple;
}

export type BasicClient = Client & {
  path: Routes;
};
