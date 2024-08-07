// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  validKey,
  validToken,
  createUnion,
  UnionContext,
  UnionClientOptionalParams,
} from "./api/index.js";
import {
  ValidKeyOptionalParams,
  ValidTokenOptionalParams,
} from "./models/options.js";

export { UnionClientOptionalParams } from "./api/unionContext.js";

export class UnionClient {
  private _client: UnionContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates clients generated with ApiKey and OAuth2 authentication. */
  constructor(
    credential: KeyCredential | TokenCredential,
    options: UnionClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createUnion(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Check whether client is authenticated */
  validKey(
    options: ValidKeyOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return validKey(this._client, options);
  }

  /** Check whether client is authenticated */
  validToken(
    options: ValidTokenOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return validToken(this._client, options);
  }
}
