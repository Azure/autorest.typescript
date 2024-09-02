// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getConfidentialLedgerOperations,
  ConfidentialLedgerOperations,
} from "./classic/confidentialLedger/index.js";
import {
  createParametrizedHost,
  ParametrizedHostContext,
  ParametrizedHostClientOptionalParams,
} from "./api/index.js";

export { ParametrizedHostClientOptionalParams } from "./api/parametrizedHostContext.js";

export class ParametrizedHostClient {
  private _client: ParametrizedHostContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    credential: TokenCredential,
    options: ParametrizedHostClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createParametrizedHost(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.confidentialLedger = getConfidentialLedgerOperations(this._client);
  }

  /** The operation groups for ConfidentialLedger */
  public readonly confidentialLedger: ConfidentialLedgerOperations;
}
