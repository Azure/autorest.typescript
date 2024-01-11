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
import { ValidKeyOptions, ValidTokenOptions } from "./models/options.js";

export { UnionClientOptions } from "./api/UnionContext.js";

export class UnionClient {
  private _client: UnionContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates clients generated with ApiKey and OAuth2 authentication. */
  constructor(
    credential: KeyCredential | TokenCredential,
    options: UnionClientOptions = {},
  ) {
    this._client = createUnion(credential, options);
    this.pipeline = this._client.pipeline;
  }

  /** Check whether client is authenticated */
  validKey(options: ValidKeyOptions = { requestOptions: {} }): Promise<void> {
    return validKey(this._client, options);
  }

  /** Check whether client is authenticated */
  validToken(
    options: ValidTokenOptions = { requestOptions: {} },
  ): Promise<void> {
    return validToken(this._client, options);
  }
}
