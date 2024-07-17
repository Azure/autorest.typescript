// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { TestModel, Versions } from "./models/models.js";
import {
  test,
  TestOptionalParams,
  createTypeChangedFrom,
  TypeChangedFromClientOptionalParams,
  TypeChangedFromContext,
} from "./api/index.js";

export class TypeChangedFromClient {
  private _client: TypeChangedFromContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Test for the `@typeChangedFrom` decorator. */
  constructor(
    endpointParam: string,
    version: Versions,
    options: TypeChangedFromClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createTypeChangedFrom(endpointParam, version, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  test(
    param: string,
    body: TestModel,
    options: TestOptionalParams = { requestOptions: {} },
  ): Promise<TestModel> {
    return test(this._client, param, body, options);
  }
}
