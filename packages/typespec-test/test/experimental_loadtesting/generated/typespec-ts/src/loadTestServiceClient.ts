// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  LoadTestServiceContext,
  LoadTestServiceClientOptionalParams,
  createLoadTestService,
} from "./api/index.js";
import {
  LoadTestAdministrationOperations,
  _getLoadTestAdministrationOperations,
} from "./classic/loadTestAdministration/index.js";
import { LoadTestRunOperations, _getLoadTestRunOperations } from "./classic/loadTestRun/index.js";
import {
  TestProfileAdministrationOperations,
  _getTestProfileAdministrationOperations,
} from "./experimental/classic/testProfileAdministration/index.js";
import {
  TestProfileRunAdministrationOperations,
  _getTestProfileRunAdministrationOperations,
} from "./experimental/classic/testProfileRunAdministration/index.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { LoadTestServiceClientOptionalParams } from "./api/loadTestServiceContext.js";

export class LoadTestServiceClient {
  private _client: LoadTestServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** These APIs allow end users to create, view and run load tests using Azure Load Test Service. */
  constructor(
    endpointParam: string,
    credential: TokenCredential,
    options: LoadTestServiceClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createLoadTestService(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.testProfileRunAdministration = _getTestProfileRunAdministrationOperations(this._client);
    this.testProfileAdministration = _getTestProfileAdministrationOperations(this._client);
    this.loadTestRun = _getLoadTestRunOperations(this._client);
    this.loadTestAdministration = _getLoadTestAdministrationOperations(this._client);
  }

  /** The operation groups for testProfileRunAdministration */
  public readonly testProfileRunAdministration: TestProfileRunAdministrationOperations;
  /** The operation groups for testProfileAdministration */
  public readonly testProfileAdministration: TestProfileAdministrationOperations;
  /** The operation groups for loadTestRun */
  public readonly loadTestRun: LoadTestRunOperations;
  /** The operation groups for loadTestAdministration */
  public readonly loadTestAdministration: LoadTestAdministrationOperations;
}
