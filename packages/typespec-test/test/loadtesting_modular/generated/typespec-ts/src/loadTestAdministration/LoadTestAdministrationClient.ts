// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getAdministrationOperationsOperations,
  AdministrationOperationsOperations,
} from "./classic/administrationOperations/index.js";
import {
  createLoadTestAdministration,
  LoadTestAdministrationClientOptions,
  AzureLoadTestingContext,
} from "./api/index.js";

export { LoadTestAdministrationClientOptions } from "./api/LoadTestAdministrationContext.js";

export class LoadTestAdministrationClient {
  private _client: AzureLoadTestingContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpoint: string,
    credential: TokenCredential,
    options: LoadTestAdministrationClientOptions = {}
  ) {
    this._client = createLoadTestAdministration(endpoint, credential, options);
    this.pipeline = this._client.pipeline;
    this.administrationOperations = getAdministrationOperationsOperations(
      this._client
    );
  }

  /** The operation groups for AdministrationOperations */
  public readonly administrationOperations: AdministrationOperationsOperations;
}
