// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getWidgetsOperations,
  WidgetsOperations,
} from "./classic/widgets/index.js";
import {
  createWidgetService,
  WidgetServiceClientOptions,
  WidgetServiceContext,
} from "./api/index.js";

export { WidgetServiceClientOptions } from "./api/WidgetServiceContext.js";

export class WidgetServiceClient {
  private _client: WidgetServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(endpoint: string, options: WidgetServiceClientOptions = {}) {
    this._client = createWidgetService(endpoint, options);
    this.pipeline = this._client.pipeline;
    this.widgets = getWidgetsOperations(this._client);
  }

  /** The operation groups for Widgets */
  public readonly widgets: WidgetsOperations;
}
