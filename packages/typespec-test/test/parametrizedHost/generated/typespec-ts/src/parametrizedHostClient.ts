// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createParametrizedHost,
  ParametrizedHostContext,
  ParametrizedHostClientOptionalParams,
} from "./api/index.js";
import {
  ConfidentialLedgerOperations,
  _getConfidentialLedgerOperations,
} from "./classic/confidentialLedger/index.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { ParametrizedHostClientOptionalParams } from "./api/parametrizedHostContext.js";

export class ParametrizedHostClient {
  private _client: ParametrizedHostContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    credential: TokenCredential,
    apiVersion: string,
    options: ParametrizedHostClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createParametrizedHost(credential, apiVersion, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.confidentialLedger = _getConfidentialLedgerOperations(this._client);
  }

  /** The operation groups for confidentialLedger */
  public readonly confidentialLedger: ConfidentialLedgerOperations;
}
