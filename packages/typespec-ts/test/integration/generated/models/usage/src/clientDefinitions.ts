// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  InputParameters,
  OutputParameters,
  InputAndOutputParameters,
} from "./parameters";
import {
  Input204Response,
  InputDefaultResponse,
  Output200Response,
  OutputDefaultResponse,
  InputAndOutput200Response,
  InputAndOutputDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Input {
  post(
    options: InputParameters
  ): StreamableMethod<Input204Response | InputDefaultResponse>;
}

export interface Output {
  get(
    options?: OutputParameters
  ): StreamableMethod<Output200Response | OutputDefaultResponse>;
}

export interface InputAndOutput {
  post(
    options: InputAndOutputParameters
  ): StreamableMethod<
    InputAndOutput200Response | InputAndOutputDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/type/model/usage/input' has methods for the following verbs: post */
  (path: "/type/model/usage/input"): Input;
  /** Resource for '/type/model/usage/output' has methods for the following verbs: get */
  (path: "/type/model/usage/output"): Output;
  /** Resource for '/type/model/usage/input-output' has methods for the following verbs: post */
  (path: "/type/model/usage/input-output"): InputAndOutput;
}

export type UsageClient = Client & {
  path: Routes;
};
