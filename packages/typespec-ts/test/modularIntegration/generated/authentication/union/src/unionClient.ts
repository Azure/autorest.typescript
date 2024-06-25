// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  validKey,
  validToken,
  createUnion,
  UnionClientOptions,
  UnionContext,
} from "./api/index.js";
import {
  ValidKeyOptionalParams,
  ValidTokenOptionalParams,
} from "./models/options.js";

export { UnionClientOptions } from "./api/unionContext.js";

export class UnionClient {
  private _client: UnionContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates clients generated with ApiKey and OAuth2 authentication. */
  constructor(
    credential: KeyCredential | TokenCredential,
    options: UnionClientOptions = {},
  ) {
    this._client = createUnion(credential, {
      userAgentOptions: {
        userAgentPrefix:
          options?.userAgentOptions?.userAgentPrefix ??
          "azsdk-js-azure-auth-union-classic/1.0.0-beta.1",
      },
      ...options,
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
