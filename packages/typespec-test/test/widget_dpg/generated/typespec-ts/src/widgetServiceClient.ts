// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { KeyCredential } from "@azure/core-auth";
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
  WidgetServiceContext,
  WidgetServiceClientOptionalParams,
} from "./api/index.js";

export { WidgetServiceClientOptionalParams } from "./api/widgetServiceContext.js";

export class WidgetServiceClient {
  private _client: WidgetServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpoint: string,
    credential: KeyCredential,
    options: WidgetServiceClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createWidgetService(endpoint, credential, {
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
