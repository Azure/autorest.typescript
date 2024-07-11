// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  createOAuth2,
  OAuth2ClientOptions,
  OAuth2Context,
  valid,
  invalid,
  ValidOptionalParams,
  InvalidOptionalParams,
} from "./api/index.js";

export class OAuth2Client {
  private _client: OAuth2Context;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates clients generated with OAuth2 authentication. */
  constructor(credential: TokenCredential, options: OAuth2ClientOptions = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createOAuth2(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Check whether client is authenticated */
  valid(options: ValidOptionalParams = { requestOptions: {} }): Promise<void> {
    return valid(this._client, options);
  }

  /** Check whether client is authenticated. Will return an invalid bearer error. */
  invalid(
    options: InvalidOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return invalid(this._client, options);
  }
}
