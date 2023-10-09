// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { KeyCredential } from "@azure/core-auth";
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

  /** Illustrates clients generated with ApiKey authentication. */
  constructor(credential: KeyCredential, options: ApiKeyClientOptions = {}) {
    this._client = createApiKey(credential, options);
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
