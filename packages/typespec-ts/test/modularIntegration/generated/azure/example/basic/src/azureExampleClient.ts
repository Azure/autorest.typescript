// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { ActionRequest, ActionResponse } from "./models/models.js";
import { BasicActionOptionalParams } from "./models/options.js";
import {
  createAzureExample,
  BasicContext,
  AzureExampleClientOptionalParams,
  basicAction,
} from "./api/index.js";

export { AzureExampleClientOptionalParams } from "./api/azureExampleContext.js";

export class AzureExampleClient {
  private _client: BasicContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(options: AzureExampleClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createAzureExample({
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  basicAction(
    queryParam: string,
    headerParam: string,
    body: ActionRequest,
    options: BasicActionOptionalParams = { requestOptions: {} },
  ): Promise<ActionResponse> {
    return basicAction(this._client, queryParam, headerParam, body, options);
  }
}
