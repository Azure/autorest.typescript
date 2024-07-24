// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { InputModel, OutputModel, RoundTripModel } from "./models/models.js";
import {
  InputToInputOutputOptionalParams,
  OutputToInputOutputOptionalParams,
  ModelInReadOnlyPropertyOptionalParams,
} from "./models/options.js";
import {
  inputToInputOutput,
  outputToInputOutput,
  modelInReadOnlyProperty,
  createUsage,
  UsageClientOptionalParams,
  UsageContext,
} from "./api/index.js";

export { UsageClientOptionalParams } from "./api/usageContext.js";

export class UsageClient {
  private _client: UsageContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Test for internal decorator. */
  constructor(options: UsageClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createUsage({
      ...options,
      userAgentOptions: { userAgentPrefix },
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
  modelInReadOnlyProperty(
    body: RoundTripModel,
    options: ModelInReadOnlyPropertyOptionalParams = { requestOptions: {} },
  ): Promise<RoundTripModel> {
    return modelInReadOnlyProperty(this._client, body, options);
  }
}
