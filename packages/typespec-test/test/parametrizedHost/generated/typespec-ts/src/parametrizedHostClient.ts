// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getConfidentialLedgerOperations,
  ConfidentialLedgerOperations,
} from "./classic/confidentialLedger/index.js";
import {
  createParametrizedHost,
  ParametrizedHostClientOptions,
  ParametrizedHostContext,
} from "./api/index.js";

export { ParametrizedHostClientOptions } from "./api/parametrizedHostContext.js";

export class ParametrizedHostClient {
  private _client: ParametrizedHostContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    credential: TokenCredential,
    options: ParametrizedHostClientOptions = {},
  ) {
    this._client = createParametrizedHost(credential, {
      userAgentOptions: {
        userAgentPrefix:
          options?.userAgentOptions?.userAgentPrefix ??
          "azsdk-js-parametrized-host-classic/1.0.0-beta.1",
      },
      ...options,
    });
    this.pipeline = this._client.pipeline;
    this.confidentialLedger = getConfidentialLedgerOperations(this._client);
  }

  /** The operation groups for ConfidentialLedger */
  public readonly confidentialLedger: ConfidentialLedgerOperations;
}
