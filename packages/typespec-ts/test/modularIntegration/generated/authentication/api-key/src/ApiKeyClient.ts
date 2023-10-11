// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import { ValidOptions, InvalidOptions } from "./models/options.js";
import {
  createApiKey,
  ApiKeyClientOptions,
  ApiKeyContext,
  valid,
  invalid,
} from "./api/index.js";

export { ApiKeyClientOptions } from "./api/ApiKeyContext.js";

export class ApiKeyClient {
  private _client: ApiKeyContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates clients generated with ApiKey authentication. */
  constructor(credential: KeyCredential, options: ApiKeyClientOptions = {}) {
    this._client = createApiKey(credential, options);
    this.pipeline = this._client.pipeline;
  }

  /** Check whether client is authenticated */
  valid(options: ValidOptions = { requestOptions: {} }): Promise<void> {
    return valid(this._client, options);
  }

  /** Check whether client is authenticated. */
  invalid(options: InvalidOptions = { requestOptions: {} }): Promise<void> {
    return invalid(this._client, options);
  }
}
