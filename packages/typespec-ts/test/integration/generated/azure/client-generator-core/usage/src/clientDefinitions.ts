// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  InputToInputOutputParameters,
  OutputToInputOutputParameters,
  ModelInReadOnlyPropertyParameters,
} from "./parameters.js";
import {
  InputToInputOutput204Response,
  OutputToInputOutput200Response,
  ModelInReadOnlyProperty200Response,
} from "./responses.js";
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
    options: InputToInputOutputParameters,
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
    options?: OutputToInputOutputParameters,
  ): StreamableMethod<OutputToInputOutput200Response>;
}

export interface ModelInReadOnlyProperty {
  /**
   * "ResultModel" should be usage=output, as it is read-only and does not exist in request body.
   *
   * Expected body parameter:
   * ```json
   * {
   * }
   * ```
   *
   * Expected response body:
   * ```json
   * {
   *   "result": {
   *     "name": <any string>
   *   }
   * }
   * ```
   */
  put(
    options: ModelInReadOnlyPropertyParameters,
  ): StreamableMethod<ModelInReadOnlyProperty200Response>;
}

export interface Routes {
  /** Resource for '/azure/client-generator-core/usage/inputToInputOutput' has methods for the following verbs: post */
  (
    path: "/azure/client-generator-core/usage/inputToInputOutput",
  ): InputToInputOutput;
  /** Resource for '/azure/client-generator-core/usage/outputToInputOutput' has methods for the following verbs: get */
  (
    path: "/azure/client-generator-core/usage/outputToInputOutput",
  ): OutputToInputOutput;
  /** Resource for '/azure/client-generator-core/usage/modelInReadOnlyProperty' has methods for the following verbs: put */
  (
    path: "/azure/client-generator-core/usage/modelInReadOnlyProperty",
  ): ModelInReadOnlyProperty;
}

export type UsageClient = Client & {
  path: Routes;
};
