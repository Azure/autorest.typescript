// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetThingParameters,
  GetStringParameters,
  GetNumberParameters,
  UploadParameters,
  UploadBytesParameters,
  UploadStringParameters,
  ProcessParameters,
  ProcessBytesParameters,
  ProcessStringParameters,
} from "./parameters";
import {
  GetThing200Response,
  GetString200Response,
  GetNumber200Response,
  Upload204Response,
  UploadBytes204Response,
  UploadString204Response,
  Process204Response,
  ProcessBytes204Response,
  ProcessString204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetThing {
  post(options: GetThingParameters): StreamableMethod<GetThing200Response>;
  post(options: GetStringParameters): StreamableMethod<GetString200Response>;
  post(options: GetNumberParameters): StreamableMethod<GetNumber200Response>;
}

export interface Upload {
  put(options: UploadParameters): StreamableMethod<Upload204Response>;
  put(options: UploadBytesParameters): StreamableMethod<UploadBytes204Response>;
}

export interface UploadString {
  put(
    options: UploadStringParameters
  ): StreamableMethod<UploadString204Response>;
}

export interface Process {
  put(options: ProcessParameters): StreamableMethod<Process204Response>;
  put(
    options: ProcessBytesParameters
  ): StreamableMethod<ProcessBytes204Response>;
  post(
    options: ProcessStringParameters
  ): StreamableMethod<ProcessString204Response>;
}

export interface Routes {
  /** Resource for '/overload/get' has methods for the following verbs: post */
  (path: "/overload/get"): GetThing;
  /** Resource for '/overload/changed-routes' has methods for the following verbs: put */
  (path: "/overload/changed-routes"): Upload;
  /** Resource for '/overload/toString' has methods for the following verbs: put */
  (path: "/overload/toString"): UploadString;
  /** Resource for '/overload/changed-actions' has methods for the following verbs: put, post */
  (path: "/overload/changed-actions"): Process;
}

export type OverloadTestClient = Client & {
  path: Routes;
};
