// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getWidgetsOperations,
  WidgetsOperations,
} from "./classic/widgets/index.js";
import {
  getBudgetsOperations,
  BudgetsOperations,
} from "./classic/budgets/index.js";
import {
  createWidgetService,
  WidgetServiceClientOptions,
  WidgetServiceContext,
} from "./api/index.js";

export { WidgetServiceClientOptions } from "./api/widgetServiceContext.js";

export class WidgetServiceClient {
  private _client: WidgetServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(endpoint: string, options: WidgetServiceClientOptions = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-modular-classic`
      : "azsdk-js-modular-classic";

    this._client = createWidgetService(endpoint, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.widgets = getWidgetsOperations(this._client);
    this.budgets = getBudgetsOperations(this._client);
  }

  /** The operation groups for Widgets */
  public readonly widgets: WidgetsOperations;
  /** The operation groups for Budgets */
  public readonly budgets: BudgetsOperations;
}
