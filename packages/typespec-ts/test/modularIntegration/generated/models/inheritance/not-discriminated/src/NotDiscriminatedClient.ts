// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { Siamese } from "./models/models.js";
import {
  PostValidOptions,
  GetValidOptions,
  PutValidOptions,
} from "./models/options.js";
import {
  createNotDiscriminated,
  NotDiscriminatedClientOptions,
  NotDiscriminatedContext,
  postValid,
  getValid,
  putValid,
} from "./api/index.js";

export { NotDiscriminatedClientOptions } from "./api/NotDiscriminatedContext.js";

export class NotDiscriminatedClient {
  private _client: NotDiscriminatedContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates not-discriminated inheritance model. */
  constructor(options: NotDiscriminatedClientOptions = {}) {
    this._client = createNotDiscriminated(options);
    this.pipeline = this._client.pipeline;
  }

  postValid(
    input: Siamese,
    options: PostValidOptions = { requestOptions: {} },
  ): Promise<void> {
    return postValid(this._client, input, options);
  }

  getValid(
    options: GetValidOptions = { requestOptions: {} },
  ): Promise<Siamese> {
    return getValid(this._client, options);
  }

  putValid(
    input: Siamese,
    options: PutValidOptions = { requestOptions: {} },
  ): Promise<Siamese> {
    return putValid(this._client, input, options);
  }
}
