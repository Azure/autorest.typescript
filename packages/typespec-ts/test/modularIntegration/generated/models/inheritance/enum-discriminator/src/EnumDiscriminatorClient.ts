// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Dog, Snake } from "./models/models.js";
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

  /** Illustrates inheritance with enum discriminator. */
  constructor(options: EnumDiscriminatorClientOptions = {}) {
    this._client = createEnumDiscriminator(options);
  }

  /** Receive model with extensible enum discriminator type. */
  getExtensibleModel(
    options: GetExtensibleModelOptions = { requestOptions: {} }
  ): Promise<Dog> {
    return getExtensibleModel(this._client, options);
  }

  /** Send model with extensible enum discriminator type. */
  putExtensibleModel(
    kind: string,
    weight: number,
    options: PutExtensibleModelOptions = { requestOptions: {} }
  ): Promise<void> {
    return putExtensibleModel(this._client, kind, weight, options);
  }

  /** Get a model omitting the discriminator. */
  getExtensibleModelMissingDiscriminator(
    options: GetExtensibleModelMissingDiscriminatorOptions = {
      requestOptions: {},
    }
  ): Promise<Dog> {
    return getExtensibleModelMissingDiscriminator(this._client, options);
  }

  /** Get a model containing discriminator value never defined. */
  getExtensibleModelWrongDiscriminator(
    options: GetExtensibleModelWrongDiscriminatorOptions = {
      requestOptions: {},
    }
  ): Promise<Dog> {
    return getExtensibleModelWrongDiscriminator(this._client, options);
  }

  /** Receive model with fixed enum discriminator type. */
  getFixedModel(
    options: GetFixedModelOptions = { requestOptions: {} }
  ): Promise<Snake> {
    return getFixedModel(this._client, options);
  }

  /** Send model with fixed enum discriminator type. */
  putFixedModel(
    kind: string,
    length: number,
    options: PutFixedModelOptions = { requestOptions: {} }
  ): Promise<void> {
    return putFixedModel(this._client, kind, length, options);
  }

  /** Get a model omitting the discriminator. */
  getFixedModelMissingDiscriminator(
    options: GetFixedModelMissingDiscriminatorOptions = { requestOptions: {} }
  ): Promise<Snake> {
    return getFixedModelMissingDiscriminator(this._client, options);
  }

  /** Get a model containing discriminator value never defined. */
  getFixedModelWrongDiscriminator(
    options: GetFixedModelWrongDiscriminatorOptions = { requestOptions: {} }
  ): Promise<Snake> {
    return getFixedModelWrongDiscriminator(this._client, options);
  }
}
