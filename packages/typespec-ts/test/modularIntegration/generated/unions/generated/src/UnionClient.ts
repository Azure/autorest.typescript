// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  ModelWithSimpleUnionProperty,
  ModelWithNamedUnionProperty,
  ModelWithSimpleUnionPropertyInResponse,
  ModelWithNamedUnionPropertyInResponse,
} from "./models/models.js";
import {
  SendIntOptions,
  SendIntArrayOptions,
  SendFirstNamedUnionValueOptions,
  SendSecondNamedUnionValueOptions,
  ReceiveStringOptions,
  ReceiveIntArrayOptions,
  ReceiveFirstNamedUnionValueOptions,
  ReceiveSecondNamedUnionValueOptions,
} from "./models/options.js";
import {
  sendInt,
  sendIntArray,
  sendFirstNamedUnionValue,
  sendSecondNamedUnionValue,
  receiveString,
  receiveIntArray,
  receiveFirstNamedUnionValue,
  receiveSecondNamedUnionValue,
  createUnion,
  UnionClientOptions,
  UnionContext,
} from "./api/index.js";

export { UnionClientOptions } from "./api/UnionContext.js";

export class UnionClient {
  private _client: UnionContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Test for type of union. */
  constructor(options: UnionClientOptions = {}) {
    this._client = createUnion(options);
    this.pipeline = this._client.pipeline;
  }

  sendInt(
    input: ModelWithSimpleUnionProperty,
    options: SendIntOptions = { requestOptions: {} }
  ): Promise<void> {
    return sendInt(this._client, input, options);
  }

  sendIntArray(
    input: ModelWithSimpleUnionProperty,
    options: SendIntArrayOptions = { requestOptions: {} }
  ): Promise<void> {
    return sendIntArray(this._client, input, options);
  }

  sendFirstNamedUnionValue(
    input: ModelWithNamedUnionProperty,
    options: SendFirstNamedUnionValueOptions = { requestOptions: {} }
  ): Promise<void> {
    return sendFirstNamedUnionValue(this._client, input, options);
  }

  sendSecondNamedUnionValue(
    input: ModelWithNamedUnionProperty,
    options: SendSecondNamedUnionValueOptions = { requestOptions: {} }
  ): Promise<void> {
    return sendSecondNamedUnionValue(this._client, input, options);
  }

  receiveString(
    options: ReceiveStringOptions = { requestOptions: {} }
  ): Promise<ModelWithSimpleUnionPropertyInResponse> {
    return receiveString(this._client, options);
  }

  receiveIntArray(
    options: ReceiveIntArrayOptions = { requestOptions: {} }
  ): Promise<ModelWithSimpleUnionPropertyInResponse> {
    return receiveIntArray(this._client, options);
  }

  receiveFirstNamedUnionValue(
    options: ReceiveFirstNamedUnionValueOptions = { requestOptions: {} }
  ): Promise<ModelWithNamedUnionPropertyInResponse> {
    return receiveFirstNamedUnionValue(this._client, options);
  }

  receiveSecondNamedUnionValue(
    options: ReceiveSecondNamedUnionValueOptions = { requestOptions: {} }
  ): Promise<ModelWithNamedUnionPropertyInResponse> {
    return receiveSecondNamedUnionValue(this._client, options);
  }
}
