// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createSAPWidgetService,
  SAPWidgetServiceContext,
  SAPWidgetServiceClientOptionalParams,
} from "./api/index.js";
import {
  BudgetsOperations,
  _getBudgetsOperations,
} from "./classic/budgets/index.js";
import {
  SAPWidgetsOperations,
  _getSAPWidgetsOperations,
} from "./classic/sapWidgets/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { KeyCredential } from "@azure/core-auth";

export { SAPWidgetServiceClientOptionalParams } from "./api/sapWidgetServiceContext.js";

export class SAPWidgetServiceClient {
  private _client: SAPWidgetServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: KeyCredential,
    options: SAPWidgetServiceClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createSAPWidgetService(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.budgets = _getBudgetsOperations(this._client);
    this.sapWidgets = _getSAPWidgetsOperations(this._client);
  }

  /** The operation groups for budgets */
  public readonly budgets: BudgetsOperations;
  /** The operation groups for sapWidgets */
  public readonly sapWidgets: SAPWidgetsOperations;
}
