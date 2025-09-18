// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createKeyVault,
  KeyVaultContext,
  KeyVaultClientOptionalParams,
} from "./api/index.js";
import { getSecret } from "./api/operations.js";
import { GetSecretOptionalParams } from "./api/options.js";
import { Pipeline } from "@azure/core-rest-pipeline";

export { KeyVaultClientOptionalParams } from "./api/keyVaultContext.js";

export class KeyVaultClient {
  private _client: KeyVaultContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    apiVersion: string,
    options: KeyVaultClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createKeyVault(endpointParam, apiVersion, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** The most basic operation. */
  getSecret(
    secretName: string,
    options: GetSecretOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return getSecret(this._client, secretName, options);
  }
}
