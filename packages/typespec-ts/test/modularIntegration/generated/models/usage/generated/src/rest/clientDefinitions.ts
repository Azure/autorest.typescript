// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  InputParameters,
  OutputParameters,
  InputAndOutputParameters,
} from "./parameters.js";
import {
  Input204Response,
  Output200Response,
  InputAndOutput200Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Input {
  post(options: InputParameters): StreamableMethod<Input204Response>;
}

export interface Output {
  get(options?: OutputParameters): StreamableMethod<Output200Response>;
}

export interface InputAndOutput {
  post(
    options: InputAndOutputParameters,
  ): StreamableMethod<InputAndOutput200Response>;
}

export interface Routes {
  /** Resource for '/type/model/usage/input' has methods for the following verbs: post */
  (path: "/type/model/usage/input"): Input;
  /** Resource for '/type/model/usage/output' has methods for the following verbs: get */
  (path: "/type/model/usage/output"): Output;
  /** Resource for '/type/model/usage/input-output' has methods for the following verbs: post */
  (path: "/type/model/usage/input-output"): InputAndOutput;
}

export type UsageContext = Client & {
  path: Routes;
};
