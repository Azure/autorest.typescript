// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getWidgetsOperations,
  WidgetsOperations,
} from "./classic/widgets/index.js";
import {
  createWidgetManager,
  WidgetManagerClientOptions,
  WidgetManagerContext,
} from "./api/index.js";

export { WidgetManagerClientOptions } from "./api/WidgetManagerContext.js";

export class WidgetManagerClient {
  private _client: WidgetManagerContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(endpoint: string, options: WidgetManagerClientOptions = {}) {
    this._client = createWidgetManager(endpoint, options);
    this.pipeline = this._client.pipeline;
    this.widgets = getWidgetsOperations(this._client);
  }

  /** The operation groups for Widgets */
  public readonly widgets: WidgetsOperations;
}
