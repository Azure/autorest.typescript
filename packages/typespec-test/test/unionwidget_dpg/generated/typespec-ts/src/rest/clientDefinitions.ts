// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { CustomGet1Parameters } from "./parameters.js";
import { CustomGet1204Response } from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface CustomGet1 {
  get(options: CustomGet1Parameters): StreamableMethod<CustomGet1204Response>;
}

export interface Routes {
  /** Resource for '/customGet1' has methods for the following verbs: get */
  (path: "/customGet1"): CustomGet1;
}

export type DemoServiceContext = Client & {
  path: Routes;
};
