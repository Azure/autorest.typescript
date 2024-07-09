// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { getAOperations, AOperations } from "./classic/a/index.js";
import {
  createDemoService,
  DemoServiceClientOptions,
  DemoServiceContext,
} from "./api/index.js";

export { DemoServiceClientOptions } from "./api/demoServiceContext.js";

export class DemoServiceClient {
  private _client: DemoServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(endpoint: string, options: DemoServiceClientOptions = {}) {
    this._client = createDemoService(endpoint, options);
    this.pipeline = this._client.pipeline;
    this.a = getAOperations(this._client);
  }

  /** The operation groups for A */
  public readonly a: AOperations;
}
