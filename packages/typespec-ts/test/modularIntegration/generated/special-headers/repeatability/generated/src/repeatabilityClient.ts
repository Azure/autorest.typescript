// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  immediateSuccess,
  createRepeatability,
  RepeatabilityClientOptions,
  RepeatabilityContext,
} from "./api/index.js";
import { ImmediateSuccessOptionalParams } from "./models/options.js";

export { RepeatabilityClientOptions } from "./api/repeatabilityContext.js";

export class RepeatabilityClient {
  private _client: RepeatabilityContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates OASIS repeatability headers */
  constructor(options: RepeatabilityClientOptions = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createRepeatability({
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Check we recognize Repeatability-Request-ID and Repeatability-First-Sent. */
  immediateSuccess(
    repeatabilityRequestID: string,
    repeatabilityFirstSent: Date,
    options: ImmediateSuccessOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return immediateSuccess(
      this._client,
      repeatabilityRequestID,
      repeatabilityFirstSent,
      options,
    );
  }
}
