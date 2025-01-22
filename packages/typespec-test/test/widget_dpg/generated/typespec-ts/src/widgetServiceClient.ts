// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  _getBudgetsOperations,
  BudgetsOperations,
} from "./classic/budgets/index.js";
import {
  _getWidgetsOperations,
  WidgetsOperations,
} from "./classic/widgets/index.js";
import {
  createWidgetService,
  WidgetServiceContext,
  WidgetServiceClientOptionalParams,
} from "./api/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { KeyCredential } from "@azure/core-auth";

export { WidgetServiceClientOptionalParams } from "./api/widgetServiceContext.js";

export class WidgetServiceClient {
  private _client: WidgetServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: KeyCredential,
    options: WidgetServiceClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createWidgetService(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.budgets = _getBudgetsOperations(this._client);
    this.widgets = _getWidgetsOperations(this._client);
  }

  /** The operation groups for budgets */
  public readonly budgets: BudgetsOperations;
  /** The operation groups for widgets */
  public readonly widgets: WidgetsOperations;
}
