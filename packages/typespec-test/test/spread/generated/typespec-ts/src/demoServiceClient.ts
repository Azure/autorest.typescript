// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Pipeline } from "@azure/core-rest-pipeline";
import { getAOperations, AOperations } from "./classic/a/index.js";
import {
  createDemoService,
  DemoServiceContext,
  DemoServiceClientOptionalParams,
} from "./api/index.js";

export { DemoServiceClientOptionalParams } from "./api/demoServiceContext.js";

export class DemoServiceClient {
  private _client: DemoServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(endpoint: string, options: DemoServiceClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createDemoService(endpoint, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.a = getAOperations(this._client);
  }

  /** The operation groups for A */
  public readonly a: AOperations;
}
