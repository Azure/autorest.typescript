// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { TestOperations, TestOperationsOptionalParams } from "./testOperations/testOperations.js";
import { createY, YContext, YOptionalParams } from "./api/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";

export { YOptionalParams } from "./api/yContext.js";

export class Y {
  private _client: YContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;
  /** The parent client parameters that are used in the constructors. */
  private _clientParams: { endpointParam: string; options: YOptionalParams };

  constructor(endpointParam: string, options: YOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createY(endpointParam, { ...options, userAgentOptions: { userAgentPrefix } });
    this.pipeline = this._client.pipeline;
    this._clientParams = { endpointParam, options };
  }

  getTestOperations(options: TestOperationsOptionalParams = {}): TestOperations {
    return new TestOperations(
      this._clientParams.endpointParam,

      { ...this._clientParams.options, ...options },
    );
  }
}
