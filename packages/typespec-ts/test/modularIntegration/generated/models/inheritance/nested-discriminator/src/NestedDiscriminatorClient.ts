// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { FishUnion } from "./models/models.js";
import {
  GetModelOptions,
  PutModelOptions,
  GetRecursiveModelOptions,
  PutRecursiveModelOptions,
  GetMissingDiscriminatorOptions,
  GetWrongDiscriminatorOptions,
} from "./models/options.js";
import {
  createNestedDiscriminator,
  NestedDiscriminatorClientOptions,
  NestedDiscriminatorContext,
  getModel,
  putModel,
  getRecursiveModel,
  putRecursiveModel,
  getMissingDiscriminator,
  getWrongDiscriminator,
} from "./api/index.js";

export { NestedDiscriminatorClientOptions } from "./api/NestedDiscriminatorContext.js";

export class NestedDiscriminatorClient {
  private _client: NestedDiscriminatorContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates multiple level inheritance with multiple discriminators. */
  constructor(options: NestedDiscriminatorClientOptions = {}) {
    this._client = createNestedDiscriminator(options);
    this.pipeline = this._client.pipeline;
  }

  getModel(
    options: GetModelOptions = { requestOptions: {} },
  ): Promise<FishUnion> {
    return getModel(this._client, options);
  }

  putModel(
    input: FishUnion,
    options: PutModelOptions = { requestOptions: {} },
  ): Promise<void> {
    return putModel(this._client, input, options);
  }

  getRecursiveModel(
    options: GetRecursiveModelOptions = { requestOptions: {} },
  ): Promise<FishUnion> {
    return getRecursiveModel(this._client, options);
  }

  putRecursiveModel(
    input: FishUnion,
    options: PutRecursiveModelOptions = { requestOptions: {} },
  ): Promise<void> {
    return putRecursiveModel(this._client, input, options);
  }

  getMissingDiscriminator(
    options: GetMissingDiscriminatorOptions = { requestOptions: {} },
  ): Promise<FishUnion> {
    return getMissingDiscriminator(this._client, options);
  }

  getWrongDiscriminator(
    options: GetWrongDiscriminatorOptions = { requestOptions: {} },
  ): Promise<FishUnion> {
    return getWrongDiscriminator(this._client, options);
  }
}
