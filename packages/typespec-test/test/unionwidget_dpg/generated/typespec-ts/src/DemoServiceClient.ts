// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getWidgetServiceOperations,
  WidgetServiceOperations,
} from "./classic/widgetService/index.js";
import {
  createDemoService,
  DemoServiceClientOptions,
  DemoServiceContext,
} from "./api/index.js";

export { DemoServiceClientOptions } from "./api/DemoServiceContext.js";

export class DemoServiceClient {
  private _client: DemoServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(endpoint: string, options: DemoServiceClientOptions = {}) {
    this._client = createDemoService(endpoint, options);
    this.pipeline = this._client.pipeline;
    this.widgetService = getWidgetServiceOperations(this._client);
  }

  /** The operation groups for WidgetService */
  public readonly widgetService: WidgetServiceOperations;
}
