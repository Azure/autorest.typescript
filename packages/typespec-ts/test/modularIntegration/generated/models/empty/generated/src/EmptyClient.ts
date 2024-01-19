// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { EmptyInput, EmptyOutput, EmptyInputOutput } from "./models/models.js";
import {
  PutEmptyOptions,
  GetEmptyOptions,
  PostRoundTripEmptyOptions,
} from "./models/options.js";
import {
  createEmpty,
  EmptyClientOptions,
  EmptyContext,
  putEmpty,
  getEmpty,
  postRoundTripEmpty,
} from "./api/index.js";

export { EmptyClientOptions } from "./api/EmptyContext.js";

export class EmptyClient {
  private _client: EmptyContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates usage of empty model used in operation's parameters and responses. */
  constructor(options: EmptyClientOptions = {}) {
    this._client = createEmpty(options);
    this.pipeline = this._client.pipeline;
  }

  putEmpty(
    input: EmptyInput,
    options: PutEmptyOptions = { requestOptions: {} },
  ): Promise<void> {
    return putEmpty(this._client, input, options);
  }

  getEmpty(
    options: GetEmptyOptions = { requestOptions: {} },
  ): Promise<EmptyOutput> {
    return getEmpty(this._client, options);
  }

  postRoundTripEmpty(
    body: EmptyInputOutput,
    options: PostRoundTripEmptyOptions = { requestOptions: {} },
  ): Promise<EmptyInputOutput> {
    return postRoundTripEmpty(this._client, body, options);
  }
}
