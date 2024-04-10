// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { BirdUnion, DinosaurUnion } from "./models/models.js";
import {
  GetModelOptionalParams,
  PutModelOptionalParams,
  GetRecursiveModelOptionalParams,
  PutRecursiveModelOptionalParams,
  GetMissingDiscriminatorOptionalParams,
  GetWrongDiscriminatorOptionalParams,
  GetLegacyModelOptionalParams,
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

  getModel(
    options: GetModelOptionalParams = { requestOptions: {} },
  ): Promise<BirdUnion> {
    return getModel(this._client, options);
  }

  putModel(
    input: BirdUnion,
    options: PutModelOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return putModel(this._client, input, options);
  }

  getRecursiveModel(
    options: GetRecursiveModelOptionalParams = { requestOptions: {} },
  ): Promise<BirdUnion> {
    return getRecursiveModel(this._client, options);
  }

  putRecursiveModel(
    input: BirdUnion,
    options: PutRecursiveModelOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return putRecursiveModel(this._client, input, options);
  }

  getMissingDiscriminator(
    options: GetMissingDiscriminatorOptionalParams = { requestOptions: {} },
  ): Promise<BirdUnion> {
    return getMissingDiscriminator(this._client, options);
  }

  getWrongDiscriminator(
    options: GetWrongDiscriminatorOptionalParams = { requestOptions: {} },
  ): Promise<BirdUnion> {
    return getWrongDiscriminator(this._client, options);
  }

  getLegacyModel(
    options: GetLegacyModelOptionalParams = { requestOptions: {} },
  ): Promise<DinosaurUnion> {
    return getLegacyModel(this._client, options);
  }
}
