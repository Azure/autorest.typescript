// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { PollerLike, OperationState } from "@azure/core-lro";
import { KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  RadiologyInsightsData,
  RadiologyInsightsInferenceResult,
} from "./models/models.js";
import { InferRadiologyInsightsOptionalParams } from "./models/options.js";
import {
  inferRadiologyInsights,
  createRadiologyInsights,
  RadiologyInsightsClientOptions,
  AzureHealthInsightsContext,
} from "./api/index.js";

export { RadiologyInsightsClientOptions } from "./api/radiologyInsightsContext.js";

export class RadiologyInsightsClient {
  private _client: AzureHealthInsightsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: KeyCredential,
    options: RadiologyInsightsClientOptions = {},
  ) {
    this._client = createRadiologyInsights(endpointParam, credential, options);
    this.pipeline = this._client.pipeline;
  }

  /** Creates a Radiology Insights job with the given request body. */
  inferRadiologyInsights(
    body: RadiologyInsightsData,
    options: InferRadiologyInsightsOptionalParams = { requestOptions: {} },
  ): PollerLike<
    OperationState<RadiologyInsightsInferenceResult>,
    RadiologyInsightsInferenceResult
  > {
    return inferRadiologyInsights(this._client, body, options);
  }
}
