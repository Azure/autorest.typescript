// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Next } from "@marygao/core-lro";
import { KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TrialMatcherData, TrialMatcherResults } from "./models/models.js";
import { MatchTrialsOptions } from "./models/options.js";
import {
  createClinicalMatching,
  ClinicalMatchingClientOptions,
  AzureHealthInsightsContext,
  matchTrials,
} from "./api/index.js";

export { ClinicalMatchingClientOptions } from "./api/ClinicalMatchingContext.js";

export class ClinicalMatchingClient {
  private _client: AzureHealthInsightsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpoint: string,
    credential: KeyCredential,
    options: ClinicalMatchingClientOptions = {},
  ) {
    this._client = createClinicalMatching(endpoint, credential, options);
    this.pipeline = this._client.pipeline;
  }

  /** Creates a Trial Matcher job with the given request body. */
  matchTrials(
    body: TrialMatcherData,
    options: MatchTrialsOptions = { requestOptions: {} },
  ): Next.PollerLike<
    Next.OperationState<TrialMatcherResults>,
    TrialMatcherResults
  > {
    return matchTrials(this._client, body, options);
  }
}
