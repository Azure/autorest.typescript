// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createWeb, WebContext, WebClientOptionalParams } from "./api/index.js";
import { SitesOperations, _getSitesOperations } from "./classic/sites/index.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { WebClientOptionalParams } from "./api/webContext.js";

export class WebClient {
  private _client: WebContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: WebClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createWeb(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.sites = _getSitesOperations(this._client);
  }

  /** The operation groups for sites */
  public readonly sites: SitesOperations;
}
