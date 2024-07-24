// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BasicParameters } from "./parameters.js";
import { Basic200Response } from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Basic {
  post(options: BasicParameters): StreamableMethod<Basic200Response>;
}

export interface Routes {
  /** Resource for '/azure/example/basic/azure/example/basic/basic' has methods for the following verbs: post */
  (path: "/azure/example/basic/azure/example/basic/basic"): Basic;
}

export type BasicContext = Client & {
  path: Routes;
};
