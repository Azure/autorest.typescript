// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createHeaderParam,
  HeaderParamContext,
  HeaderParamClientOptionalParams,
} from "./api/index.js";
import { Input } from "../models/models.js";
import { withBody, withQuery } from "./api/operations.js";
import {
  WithBodyOptionalParams,
  WithQueryOptionalParams,
} from "./api/options.js";
import { Pipeline } from "@azure/core-rest-pipeline";

export { HeaderParamClientOptionalParams } from "./api/headerParamContext.js";

export class HeaderParamClient {
  private _client: HeaderParamContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Client for testing header parameter moved to client level. */
  constructor(name: string, options: HeaderParamClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createHeaderParam(name, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  withBody(
    body: Input,
    options: WithBodyOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return withBody(this._client, body, options);
  }

  withQuery(
    id: string,
    options: WithQueryOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return withQuery(this._client, id, options);
  }
}
