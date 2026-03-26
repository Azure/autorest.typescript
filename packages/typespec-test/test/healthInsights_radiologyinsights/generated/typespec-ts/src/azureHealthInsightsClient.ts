// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AzureHealthInsightsContext,
  AzureHealthInsightsClientOptionalParams,
  createAzureHealthInsights,
} from "./api/index.js";
import {
  RadiologyInsightsOperations,
  _getRadiologyInsightsOperations,
} from "./classic/radiologyInsights/index.js";
import { KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { AzureHealthInsightsClientOptionalParams } from "./api/azureHealthInsightsContext.js";

export class AzureHealthInsightsClient {
  private _client: AzureHealthInsightsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Azure AI Health Insights provides an API that serves insight models, specific for Health & Life Sciences, that perform analysis and provide inferences to be used by a human. */
  constructor(
    endpointParam: string,
    credential: KeyCredential,
    options: AzureHealthInsightsClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createAzureHealthInsights(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.radiologyInsights = _getRadiologyInsightsOperations(this._client);
  }

  /** The operation groups for radiologyInsights */
  public readonly radiologyInsights: RadiologyInsightsOperations;
}
