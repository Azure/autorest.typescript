// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { InputModel, OutputModel } from "./models/models.js";
import {
  InputToInputOutputOptions,
  OutputToInputOutputOptions,
} from "./models/options.js";
import {
  inputToInputOutput,
  outputToInputOutput,
  createUsage,
  UsageClientOptions,
  UsageContext,
} from "./api/index.js";

export { UsageClientOptions } from "./api/UsageContext.js";

export class UsageClient {
  private _client: UsageContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Test for internal decorator. */
  constructor(options: UsageClientOptions = {}) {
    this._client = createUsage(options);
    this.pipeline = this._client.pipeline;
  }

  /**
   * Expected body parameter:
   * ```json
   * {
   *   "name": <any string>
   * }
   * ```
   */
  inputToInputOutput(
    body: InputModel,
    options: InputToInputOutputOptions = { requestOptions: {} },
  ): Promise<void> {
    return inputToInputOutput(this._client, body, options);
  }

  /**
   * Expected response body:
   * ```json
   * {
   *   "name": <any string>
   * }
   * ```
   */
  outputToInputOutput(
    options: OutputToInputOutputOptions = { requestOptions: {} },
  ): Promise<OutputModel> {
    return outputToInputOutput(this._client, options);
  }
}
