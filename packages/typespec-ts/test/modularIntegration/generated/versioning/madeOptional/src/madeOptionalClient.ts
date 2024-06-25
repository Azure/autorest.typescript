// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { TestModel, Versions } from "./models/models.js";
import { TestOptionalParams } from "./models/options.js";
import {
  createMadeOptional,
  MadeOptionalClientOptions,
  MadeOptionalContext,
  test,
} from "./api/index.js";

export { MadeOptionalClientOptions } from "./api/madeOptionalContext.js";

export class MadeOptionalClient {
  private _client: MadeOptionalContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Test for the `@madeOptional` decorator. */
  constructor(
    endpointParam: string,
    version: Versions,
    options: MadeOptionalClientOptions = {},
  ) {
    this._client = createMadeOptional(endpointParam, version, {
      userAgentOptions: {
        userAgentPrefix:
          options?.userAgentOptions?.userAgentPrefix ??
          "azsdk-js-versionning-madeOptional-classic/1.0.0-beta.1",
      },
      ...options,
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
