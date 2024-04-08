// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetThingParameters,
  UploadParameters,
  ProcessParameters,
} from "./parameters.js";
import {
  GetThing200Response,
  Upload204Response,
  Process204Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetThing {
  /** Overload with same routes */
  post(options: GetThingParameters): StreamableMethod<GetThing200Response>;
}

export interface Upload {
  /** Overload with different routes */
  put(options: UploadParameters): StreamableMethod<Upload204Response>;
}

export interface Process {
  /** Overloads with different actions */
  put(options: ProcessParameters): StreamableMethod<Process204Response>;
}

export interface Routes {
  /** Resource for '/get' has methods for the following verbs: post */
  (path: "/get"): GetThing;
  /** Resource for '/changed-routes' has methods for the following verbs: put */
  (path: "/changed-routes"): Upload;
  /** Resource for '/changed-actions' has methods for the following verbs: put */
  (path: "/changed-actions"): Process;
}

export type OveralodClient = Client & {
  path: Routes;
};
