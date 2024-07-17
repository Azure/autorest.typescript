// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { TestModel, Versions } from "./models/models.js";
import {
  createMadeOptional,
  MadeOptionalClientOptionalParams,
  MadeOptionalContext,
  test,
  TestOptionalParams,
} from "./api/index.js";

export class MadeOptionalClient {
  private _client: MadeOptionalContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Test for the `@madeOptional` decorator. */
  constructor(
    endpointParam: string,
    version: Versions,
    options: MadeOptionalClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createMadeOptional(endpointParam, version, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  test(
    body: TestModel,
    options: TestOptionalParams = { requestOptions: {} },
  ): Promise<TestModel> {
    return test(this._client, body, options);
  }
}
