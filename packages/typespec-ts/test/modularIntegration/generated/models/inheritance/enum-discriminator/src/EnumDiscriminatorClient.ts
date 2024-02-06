// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { DogUnion, SnakeUnion } from "./models/models.js";
import {
  GetExtensibleModelOptions,
  PutExtensibleModelOptions,
  GetExtensibleModelMissingDiscriminatorOptions,
  GetExtensibleModelWrongDiscriminatorOptions,
  GetFixedModelOptions,
  PutFixedModelOptions,
  GetFixedModelMissingDiscriminatorOptions,
  GetFixedModelWrongDiscriminatorOptions,
} from "./models/options.js";
import {
  createEnumDiscriminator,
  EnumDiscriminatorClientOptions,
  EnumDiscriminatorContext,
  getExtensibleModel,
  putExtensibleModel,
  getExtensibleModelMissingDiscriminator,
  getExtensibleModelWrongDiscriminator,
  getFixedModel,
  putFixedModel,
  getFixedModelMissingDiscriminator,
  getFixedModelWrongDiscriminator,
} from "./api/index.js";

export { EnumDiscriminatorClientOptions } from "./api/EnumDiscriminatorContext.js";

export class EnumDiscriminatorClient {
  private _client: EnumDiscriminatorContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates inheritance with enum discriminator. */
  constructor(options: EnumDiscriminatorClientOptions = {}) {
    this._client = createEnumDiscriminator(options);
    this.pipeline = this._client.pipeline;
  }

  /** Receive model with extensible enum discriminator type. */
  getExtensibleModel(
    options: GetExtensibleModelOptions = { requestOptions: {} },
  ): Promise<DogUnion> {
    return getExtensibleModel(this._client, options);
  }

  /** Send model with extensible enum discriminator type. */
  putExtensibleModel(
    input: DogUnion,
    options: PutExtensibleModelOptions = { requestOptions: {} },
  ): Promise<void> {
    return putExtensibleModel(this._client, input, options);
  }

  /** Get a model omitting the discriminator. */
  getExtensibleModelMissingDiscriminator(
    options: GetExtensibleModelMissingDiscriminatorOptions = {
      requestOptions: {},
    },
  ): Promise<DogUnion> {
    return getExtensibleModelMissingDiscriminator(this._client, options);
  }

  /** Get a model containing discriminator value never defined. */
  getExtensibleModelWrongDiscriminator(
    options: GetExtensibleModelWrongDiscriminatorOptions = {
      requestOptions: {},
    },
  ): Promise<DogUnion> {
    return getExtensibleModelWrongDiscriminator(this._client, options);
  }

  /** Receive model with fixed enum discriminator type. */
  getFixedModel(
    options: GetFixedModelOptions = { requestOptions: {} },
  ): Promise<SnakeUnion> {
    return getFixedModel(this._client, options);
  }

  /** Send model with fixed enum discriminator type. */
  putFixedModel(
    input: SnakeUnion,
    options: PutFixedModelOptions = { requestOptions: {} },
  ): Promise<void> {
    return putFixedModel(this._client, input, options);
  }

  /** Get a model omitting the discriminator. */
  getFixedModelMissingDiscriminator(
    options: GetFixedModelMissingDiscriminatorOptions = { requestOptions: {} },
  ): Promise<SnakeUnion> {
    return getFixedModelMissingDiscriminator(this._client, options);
  }

  /** Get a model containing discriminator value never defined. */
  getFixedModelWrongDiscriminator(
    options: GetFixedModelWrongDiscriminatorOptions = { requestOptions: {} },
  ): Promise<SnakeUnion> {
    return getFixedModelWrongDiscriminator(this._client, options);
  }
}
