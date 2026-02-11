// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createTelemetry, TelemetryContext, TelemetryOptionalParams } from "./api/index.js";
import { GetAppInsightsResponse } from "../models/models.js";
import { getAppInsights } from "./api/operations.js";
import { GetAppInsightsOptionalParams } from "./api/options.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { TelemetryOptionalParams } from "./api/telemetryContext.js";

export class Telemetry {
  private _client: TelemetryContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    subscriptionId: string,
    resourceGroupName: string,
    projectName: string,
    credential: TokenCredential,
    options: TelemetryOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createTelemetry(
      endpointParam,
      subscriptionId,
      resourceGroupName,
      projectName,
      credential,
      { ...options, userAgentOptions: { userAgentPrefix } },
    );
    this.pipeline = this._client.pipeline;
  }

  /** Gets the properties of the specified Application Insights resource */
  getAppInsights(
    appInsightsResourceUrl: string,
    options: GetAppInsightsOptionalParams = { requestOptions: {} },
  ): Promise<GetAppInsightsResponse> {
    return getAppInsights(this._client, appInsightsResourceUrl, options);
  }
}
