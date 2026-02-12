// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createDemoService,
  DemoServiceContext,
  DemoServiceClientOptionalParams,
} from "./api/index.js";
import { AOperations, _getAOperations } from "./classic/a/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";

export { DemoServiceClientOptionalParams } from "./api/demoServiceContext.js";

export class DemoServiceClient {
  private _client: DemoServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

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
    this.a = _getAOperations(this._client);
  }

  /** The operation groups for a */
  public readonly a: AOperations;
}
