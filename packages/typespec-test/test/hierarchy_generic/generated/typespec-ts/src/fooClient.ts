// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Pipeline } from "@azure/core-rest-pipeline";
import { A, BEA } from "./models/models.js";
import {
  OpTopLevelOptionalParams,
  FooOptionalParams,
  OpBECOptionalParams,
  OpDOptionalParams,
} from "./models/options.js";
import {
  createFoo,
  FooContext,
  FooClientOptionalParams,
  opTopLevel,
  foo,
  opBEC,
  opD,
} from "./api/index.js";

export { FooClientOptionalParams } from "./api/fooContext.js";

export class FooClient {
  private _client: FooContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(endpoint: string, options: FooClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createFoo(endpoint, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** show example opTopLevel */
  opTopLevel(
    body: A,
    options: OpTopLevelOptionalParams = { requestOptions: {} },
  ): Promise<Record<string, any>> {
    return opTopLevel(this._client, body, options);
  }

  foo(
    body: A,
    options: FooOptionalParams = { requestOptions: {} },
  ): Promise<Record<string, any>> {
    return foo(this._client, body, options);
  }

  foo(
    body: BEA,
    options: FooOptionalParams = { requestOptions: {} },
  ): Promise<Record<string, any>> {
    return foo(this._client, body, options);
  }

  opBEC(
    body: BEA,
    options: OpBECOptionalParams = { requestOptions: {} },
  ): Promise<Record<string, any>> {
    return opBEC(this._client, body, options);
  }

  /** show example opD */
  opD(
    body: A,
    options: OpDOptionalParams = { requestOptions: {} },
  ): Promise<Record<string, any>> {
    return opD(this._client, body, options);
  }
}
