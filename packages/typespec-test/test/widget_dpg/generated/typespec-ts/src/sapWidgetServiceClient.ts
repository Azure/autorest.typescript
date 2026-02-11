// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SAPWidgets, SAPWidgetsOptionalParams } from "./sapWidgets/sapWidgets.js";
import { Budgets, BudgetsOptionalParams } from "./budgets/budgets.js";
import {
  createSAPWidgetService,
  SAPWidgetServiceContext,
  SAPWidgetServiceClientOptionalParams,
} from "./api/index.js";
import { KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { SAPWidgetServiceClientOptionalParams } from "./api/sapWidgetServiceContext.js";

export class SAPWidgetServiceClient {
  private _client: SAPWidgetServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;
  /** The parent client parameters that are used in the constructors. */
  private _clientParams: {
    endpointParam: string;
    credential: KeyCredential;
    options: SAPWidgetServiceClientOptionalParams;
  };

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
    this._clientParams = { endpointParam, credential, options };
  }

  getSAPWidgets(options: SAPWidgetsOptionalParams = {}): SAPWidgets {
    return new SAPWidgets(
      this._clientParams.endpointParam,
      this._clientParams.credential,

      { ...this._clientParams.options, ...options },
    );
  }

  getBudgets(options: BudgetsOptionalParams = {}): Budgets {
    return new Budgets(
      this._clientParams.endpointParam,
      this._clientParams.credential,

      { ...this._clientParams.options, ...options },
    );
  }
}
