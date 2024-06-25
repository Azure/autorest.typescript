// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { InputModel, OutputModel } from "./models/models.js";
import {
  InputToInputOutputOptionalParams,
  OutputToInputOutputOptionalParams,
} from "./models/options.js";
import {
  inputToInputOutput,
  outputToInputOutput,
  createUsage,
  UsageClientOptions,
  UsageContext,
} from "./api/index.js";

export { UsageClientOptions } from "./api/usageContext.js";

export class UsageClient {
  private _client: UsageContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Test for internal decorator. */
  constructor(options: UsageClientOptions = {}) {
    this._client = createUsage({
      userAgentOptions: {
        userAgentPrefix:
          options?.userAgentOptions?.userAgentPrefix ??
          "azsdk-js-clientGeneratorCore-usage-classic/1.0.0-beta.1",
      },
      ...options,
    });
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
    options: InputToInputOutputOptionalParams = { requestOptions: {} },
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
    options: OutputToInputOutputOptionalParams = { requestOptions: {} },
  ): Promise<OutputModel> {
    return outputToInputOutput(this._client, options);
  }
}
