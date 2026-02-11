// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ConfidentialLedger,
  ConfidentialLedgerOptionalParams,
} from "./confidentialLedger/confidentialLedger.js";
import {
  createParametrizedHost,
  ParametrizedHostContext,
  ParametrizedHostClientOptionalParams,
} from "./api/index.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { ParametrizedHostClientOptionalParams } from "./api/parametrizedHostContext.js";

export class ParametrizedHostClient {
  private _client: ParametrizedHostContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;
  /** The parent client parameters that are used in the constructors. */
  private _clientParams: {
    credential: TokenCredential;
    options: ParametrizedHostClientOptionalParams;
  };

  constructor(credential: TokenCredential, options: ParametrizedHostClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createParametrizedHost(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this._clientParams = { credential, options };
  }

  getConfidentialLedger(options: ConfidentialLedgerOptionalParams = {}): ConfidentialLedger {
    return new ConfidentialLedger(
      this._clientParams.credential,

      { ...this._clientParams.options, ...options },
    );
  }
}
