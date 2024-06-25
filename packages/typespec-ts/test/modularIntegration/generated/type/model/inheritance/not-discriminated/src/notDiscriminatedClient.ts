// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { Siamese } from "./models/models.js";
import {
  PostValidOptionalParams,
  GetValidOptionalParams,
  PutValidOptionalParams,
} from "./models/options.js";
import {
  createNotDiscriminated,
  NotDiscriminatedClientOptions,
  NotDiscriminatedContext,
  postValid,
  getValid,
  putValid,
} from "./api/index.js";

export { NotDiscriminatedClientOptions } from "./api/notDiscriminatedContext.js";

export class NotDiscriminatedClient {
  private _client: NotDiscriminatedContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates not-discriminated inheritance model. */
  constructor(options: NotDiscriminatedClientOptions = {}) {
    this._client = createNotDiscriminated({
      userAgentOptions: {
        userAgentPrefix:
          options?.userAgentOptions?.userAgentPrefix ??
          "azsdk-js-model-inheritance-not-discriminated-classic/1.0.0",
      },
      ...options,
    });
    this.pipeline = this._client.pipeline;
  }

  postValid(
    input: Siamese,
    options: PostValidOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return postValid(this._client, input, options);
  }

  getValid(
    options: GetValidOptionalParams = { requestOptions: {} },
  ): Promise<Siamese> {
    return getValid(this._client, options);
  }

  putValid(
    input: Siamese,
    options: PutValidOptionalParams = { requestOptions: {} },
  ): Promise<Siamese> {
    return putValid(this._client, input, options);
  }
}
