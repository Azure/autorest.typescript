// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { TestModel, Versions } from "./models/models.js";
import { TestOptionalParams } from "./models/options.js";
import {
  test,
  createTypeChangedFrom,
  TypeChangedFromClientOptions,
  TypeChangedFromContext,
} from "./api/index.js";

export { TypeChangedFromClientOptions } from "./api/typeChangedFromContext.js";

export class TypeChangedFromClient {
  private _client: TypeChangedFromContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Test for the `@typeChangedFrom` decorator. */
  constructor(
    endpointParam: string,
    version: Versions,
    options: TypeChangedFromClientOptions = {},
  ) {
    this._client = createTypeChangedFrom(endpointParam, version, {
      userAgentOptions: {
        userAgentPrefix:
          options?.userAgentOptions?.userAgentPrefix ??
          "azsdk-js-versionning-typeChangedFrom-classic/1.0.0-beta.1",
      },
      ...options,
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
