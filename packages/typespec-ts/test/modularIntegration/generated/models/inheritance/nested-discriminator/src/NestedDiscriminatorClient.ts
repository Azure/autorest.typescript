// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Fish } from "./models/models.js";
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

  /** Illustrates multiple level inheritance with multiple discriminators. */
  constructor(options: NestedDiscriminatorClientOptions = {}) {
    this._client = createNestedDiscriminator(options);
  }

  getModel(options: GetModelOptions = { requestOptions: {} }): Promise<Fish> {
    return getModel(this._client, options);
  }

  putModel(
    age: number,
    kind: undefined,
    options: PutModelOptions = { requestOptions: {} }
  ): Promise<void> {
    return putModel(this._client, age, kind, options);
  }

  getRecursiveModel(
    options: GetRecursiveModelOptions = { requestOptions: {} }
  ): Promise<Fish> {
    return getRecursiveModel(this._client, options);
  }

  putRecursiveModel(
    age: number,
    kind: undefined,
    options: PutRecursiveModelOptions = { requestOptions: {} }
  ): Promise<void> {
    return putRecursiveModel(this._client, age, kind, options);
  }

  getMissingDiscriminator(
    options: GetMissingDiscriminatorOptions = { requestOptions: {} }
  ): Promise<Fish> {
    return getMissingDiscriminator(this._client, options);
  }

  getWrongDiscriminator(
    options: GetWrongDiscriminatorOptions = { requestOptions: {} }
  ): Promise<Fish> {
    return getWrongDiscriminator(this._client, options);
  }
}
