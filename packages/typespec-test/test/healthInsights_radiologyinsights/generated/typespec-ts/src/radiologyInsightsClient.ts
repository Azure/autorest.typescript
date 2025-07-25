// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createRadiologyInsights,
  RadiologyInsightsContext,
  RadiologyInsightsClientOptionalParams,
} from "./api/index.js";
import { inferRadiologyInsights } from "./api/operations.js";
import { InferRadiologyInsightsOptionalParams } from "./api/options.js";
import {
  PatientRecord,
  RadiologyInsightsInferenceResult,
} from "./models/models.js";
import { KeyCredential } from "@azure/core-auth";
import { PollerLike, OperationState } from "@azure/core-lro";
import { Pipeline } from "@azure/core-rest-pipeline";

export { RadiologyInsightsClientOptionalParams } from "./api/radiologyInsightsContext.js";

export class RadiologyInsightsClient {
  private _client: RadiologyInsightsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: KeyCredential,
    options: RadiologyInsightsClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createRadiologyInsights(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Creates a Radiology Insights job with the given request body. */
  inferRadiologyInsights(
    patients: PatientRecord[],
    options: InferRadiologyInsightsOptionalParams = { requestOptions: {} },
  ): PollerLike<
    OperationState<RadiologyInsightsInferenceResult>,
    RadiologyInsightsInferenceResult
  > {
    return inferRadiologyInsights(this._client, patients, options);
  }
}
