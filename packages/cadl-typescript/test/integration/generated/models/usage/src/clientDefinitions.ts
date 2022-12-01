// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  InputParameters,
  OutputParameters,
  InputAndOutputParameters,
} from "./parameters";
import {
  Input204Response,
  Output200Response,
  InputAndOutput200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Input {
  post(options: InputParameters): StreamableMethod<Input204Response>;
}

export interface Output {
  get(options?: OutputParameters): StreamableMethod<Output200Response>;
}

export interface InputAndOutput {
  post(
    options: InputAndOutputParameters
  ): StreamableMethod<InputAndOutput200Response>;
}

export interface Routes {
  /** Resource for '/models/usage/input' has methods for the following verbs: post */
  (path: "/models/usage/input"): Input;
  /** Resource for '/models/usage/output' has methods for the following verbs: get */
  (path: "/models/usage/output"): Output;
  /** Resource for '/models/usage/input-output' has methods for the following verbs: post */
  (path: "/models/usage/input-output"): InputAndOutput;
}

export type ModelsUsageClient = Client & {
  path: Routes;
};
