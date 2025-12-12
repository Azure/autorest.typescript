// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createMixedParams,
  MixedParamsContext,
  MixedParamsClientOptionalParams,
} from "./api/index.js";
import { withBody, withQuery } from "./api/operations.js";
import { WithBodyOptionalParams, WithQueryOptionalParams } from "./api/options.js";
import { Pipeline } from "@azure/core-rest-pipeline";

export { MixedParamsClientOptionalParams } from "./api/mixedParamsContext.js";

export class MixedParamsClient {
  private _client: MixedParamsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(name: string, options: MixedParamsClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createMixedParams(name, { ...options, userAgentOptions: { userAgentPrefix } });
    this.pipeline = this._client.pipeline;
  }

  withBody(
    region: string,
    body: {
      name: string;
    },
    options: WithBodyOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return withBody(this._client, region, body, options);
  }

  withQuery(
    region: string,
    id: string,
    options: WithQueryOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return withQuery(this._client, region, id, options);
  }
}
