// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  InputToInputOutputParameters,
  OutputToInputOutputParameters,
} from "./parameters";
import {
  InputToInputOutput204Response,
  OutputToInputOutput200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface InputToInputOutput {
  /**
   * Expected body parameter:
   * ```json
   * {
   *   "name": <any string>
   * }
   * ```
   */
  post(
    options: InputToInputOutputParameters
  ): StreamableMethod<InputToInputOutput204Response>;
}

export interface OutputToInputOutput {
  /**
   * Expected response body:
   * ```json
   * {
   *   "name": <any string>
   * }
   * ```
   */
  get(
    options?: OutputToInputOutputParameters
  ): StreamableMethod<OutputToInputOutput200Response>;
}

export interface Routes {
  /** Resource for '/azure/client-generator-core/usage/inputToInputOutput' has methods for the following verbs: post */
  (
    path: "/azure/client-generator-core/usage/inputToInputOutput"
  ): InputToInputOutput;
  /** Resource for '/azure/client-generator-core/usage/outputToInputOutput' has methods for the following verbs: get */
  (
    path: "/azure/client-generator-core/usage/outputToInputOutput"
  ): OutputToInputOutput;
}

export type UsageClient = Client & {
  path: Routes;
};
