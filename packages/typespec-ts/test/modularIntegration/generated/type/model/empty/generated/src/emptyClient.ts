// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { EmptyInput, EmptyOutput, EmptyInputOutput } from "./models/models.js";
import {
  PutEmptyOptionalParams,
  GetEmptyOptionalParams,
  PostRoundTripEmptyOptionalParams,
} from "./models/options.js";
import {
  createEmpty,
  EmptyClientOptions,
  EmptyContext,
  putEmpty,
  getEmpty,
  postRoundTripEmpty,
} from "./api/index.js";

export { EmptyClientOptions } from "./api/emptyContext.js";

export class EmptyClient {
  private _client: EmptyContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates usage of empty model used in operation's parameters and responses. */
  constructor(options: EmptyClientOptions = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createEmpty({
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  putEmpty(
    input: EmptyInput,
    options: PutEmptyOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return putEmpty(this._client, input, options);
  }

  getEmpty(
    options: GetEmptyOptionalParams = { requestOptions: {} },
  ): Promise<EmptyOutput> {
    return getEmpty(this._client, options);
  }

  postRoundTripEmpty(
    body: EmptyInputOutput,
    options: PostRoundTripEmptyOptionalParams = { requestOptions: {} },
  ): Promise<EmptyInputOutput> {
    return postRoundTripEmpty(this._client, body, options);
  }
}
