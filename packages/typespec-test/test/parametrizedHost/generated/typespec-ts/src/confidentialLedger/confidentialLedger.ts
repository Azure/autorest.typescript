// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createConfidentialLedger,
  ConfidentialLedgerContext,
  ConfidentialLedgerOptionalParams,
} from "./api/index.js";
import { Collection } from "../models/models.js";
import { listCollections } from "./api/operations.js";
import { ListCollectionsOptionalParams } from "./api/options.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { ConfidentialLedgerOptionalParams } from "./api/confidentialLedgerContext.js";

export class ConfidentialLedger {
  private _client: ConfidentialLedgerContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(credential: TokenCredential, options: ConfidentialLedgerOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createConfidentialLedger(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Collection ids are user-created collections of ledger entries */
  listCollections(
    options: ListCollectionsOptionalParams = { requestOptions: {} },
  ): Promise<Collection[]> {
    return listCollections(this._client, options);
  }
}
