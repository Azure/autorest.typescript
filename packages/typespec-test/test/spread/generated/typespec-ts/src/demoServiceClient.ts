// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { A, AOptionalParams } from "./a/a.js";
import {
  createDemoService,
  DemoServiceContext,
  DemoServiceClientOptionalParams,
} from "./api/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";

export { DemoServiceClientOptionalParams } from "./api/demoServiceContext.js";

export class DemoServiceClient {
  private _client: DemoServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;
  /** The parent client parameters that are used in the constructors. */
  private _clientParams: { endpointParam: string; options: DemoServiceClientOptionalParams };

  constructor(endpointParam: string, options: DemoServiceClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createDemoService(endpointParam, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this._clientParams = { endpointParam, options };
  }

  getA(options: AOptionalParams = {}): A {
    return new A(
      this._clientParams.endpointParam,

      { ...this._clientParams.options, ...options },
    );
  }
}
