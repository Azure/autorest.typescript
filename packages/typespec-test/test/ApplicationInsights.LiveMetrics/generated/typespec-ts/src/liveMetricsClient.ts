// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createLiveMetrics,
  LiveMetricsContext,
  LiveMetricsClientOptionalParams,
} from "./api/index.js";
import { publish, isSubscribed } from "./api/operations.js";
import {
  PublishOptionalParams,
  IsSubscribedOptionalParams,
} from "./api/options.js";
import { CollectionConfigurationInfo } from "./models/models.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { LiveMetricsClientOptionalParams } from "./api/liveMetricsContext.js";

export class LiveMetricsClient {
  private _client: LiveMetricsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Live Metrics REST APIs. */
  constructor(
    credential: TokenCredential,
    options: LiveMetricsClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createLiveMetrics(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Publish live metrics to the Live Metrics service when there is an active subscription to the metrics. */
  publish(
    ikey: string,
    options: PublishOptionalParams = { requestOptions: {} },
  ): Promise<CollectionConfigurationInfo> {
    return publish(this._client, ikey, options);
  }

  /** Determine whether there is any subscription to the metrics and documents. */
  isSubscribed(
    ikey: string,
    options: IsSubscribedOptionalParams = { requestOptions: {} },
  ): Promise<CollectionConfigurationInfo> {
    return isSubscribed(this._client, ikey, options);
  }
}
