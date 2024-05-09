// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValidParameters } from "./parameters.js";
import { Valid200Response } from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Valid {
  head(options?: ValidParameters): StreamableMethod<Valid200Response>;
}

export interface Routes {
  /** Resource for '/server/endpoint/not-defined/valid' has methods for the following verbs: head */
  (path: "/server/endpoint/not-defined/valid"): Valid;
}

export type NotDefinedContext = Client & {
  path: Routes;
};
