// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { Bird, Dinosaur } from "./models/models.js";
import {
  GetModelOptions,
  PutModelOptions,
  GetRecursiveModelOptions,
  PutRecursiveModelOptions,
  GetMissingDiscriminatorOptions,
  GetWrongDiscriminatorOptions,
  GetLegacyModelOptions,
} from "./models/options.js";
import {
  getModel,
  putModel,
  getRecursiveModel,
  putRecursiveModel,
  getMissingDiscriminator,
  getWrongDiscriminator,
  getLegacyModel,
  createSingleDiscriminator,
  SingleDiscriminatorClientOptions,
  SingleDiscriminatorContext,
} from "./api/index.js";

export { SingleDiscriminatorClientOptions } from "./api/SingleDiscriminatorContext.js";

export class SingleDiscriminatorClient {
  private _client: SingleDiscriminatorContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates inheritance with single discriminator. */
  constructor(options: SingleDiscriminatorClientOptions = {}) {
    this._client = createSingleDiscriminator(options);
    this.pipeline = this._client.pipeline;
  }

  getModel(options: GetModelOptions = { requestOptions: {} }): Promise<Bird> {
    return getModel(this._client, options);
  }

  putModel(
    input: Bird,
    options: PutModelOptions = { requestOptions: {} },
  ): Promise<void> {
    return putModel(this._client, input, options);
  }

  getRecursiveModel(
    options: GetRecursiveModelOptions = { requestOptions: {} },
  ): Promise<Bird> {
    return getRecursiveModel(this._client, options);
  }

  putRecursiveModel(
    input: Bird,
    options: PutRecursiveModelOptions = { requestOptions: {} },
  ): Promise<void> {
    return putRecursiveModel(this._client, input, options);
  }

  getMissingDiscriminator(
    options: GetMissingDiscriminatorOptions = { requestOptions: {} },
  ): Promise<Bird> {
    return getMissingDiscriminator(this._client, options);
  }

  getWrongDiscriminator(
    options: GetWrongDiscriminatorOptions = { requestOptions: {} },
  ): Promise<Bird> {
    return getWrongDiscriminator(this._client, options);
  }

  getLegacyModel(
    options: GetLegacyModelOptions = { requestOptions: {} },
  ): Promise<Dinosaur> {
    return getLegacyModel(this._client, options);
  }
}
