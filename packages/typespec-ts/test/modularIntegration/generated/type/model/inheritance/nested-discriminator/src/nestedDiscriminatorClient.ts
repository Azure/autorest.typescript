// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { FishUnion } from "./models/models.js";
import {
  createNestedDiscriminator,
  NestedDiscriminatorClientOptionalParams,
  NestedDiscriminatorContext,
  getModel,
  putModel,
  getRecursiveModel,
  putRecursiveModel,
  getMissingDiscriminator,
  getWrongDiscriminator,
  GetModelOptionalParams,
  PutModelOptionalParams,
  GetRecursiveModelOptionalParams,
  PutRecursiveModelOptionalParams,
  GetMissingDiscriminatorOptionalParams,
  GetWrongDiscriminatorOptionalParams,
} from "./api/index.js";

export class NestedDiscriminatorClient {
  private _client: NestedDiscriminatorContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates multiple level inheritance with multiple discriminators. */
  constructor(options: NestedDiscriminatorClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createNestedDiscriminator({
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  getModel(
    options: GetModelOptionalParams = { requestOptions: {} },
  ): Promise<FishUnion> {
    return getModel(this._client, options);
  }

  putModel(
    input: FishUnion,
    options: PutModelOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return putModel(this._client, input, options);
  }

  getRecursiveModel(
    options: GetRecursiveModelOptionalParams = { requestOptions: {} },
  ): Promise<FishUnion> {
    return getRecursiveModel(this._client, options);
  }

  putRecursiveModel(
    input: FishUnion,
    options: PutRecursiveModelOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return putRecursiveModel(this._client, input, options);
  }

  getMissingDiscriminator(
    options: GetMissingDiscriminatorOptionalParams = { requestOptions: {} },
  ): Promise<FishUnion> {
    return getMissingDiscriminator(this._client, options);
  }

  getWrongDiscriminator(
    options: GetWrongDiscriminatorOptionalParams = { requestOptions: {} },
  ): Promise<FishUnion> {
    return getWrongDiscriminator(this._client, options);
  }
}
