// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TestProfileRun } from "./models/models.js";
import {
  CreateOrUpdateTestProfileRunOptionalParams,
  DeleteTestProfileRunOptionalParams,
  GetTestProfileRunOptionalParams,
  ListTestProfileRunsOptionalParams,
  StopTestProfileRunOptionalParams,
} from "./models/options.js";
import {
  createOrUpdateTestProfileRun,
  deleteTestProfileRun,
  getTestProfileRun,
  listTestProfileRuns,
  stopTestProfileRun,
  createTestProfileRunOperations,
  TestProfileRunOperationsClientOptionalParams,
  LoadTestServiceContext,
} from "./api/index.js";
import { PagedAsyncIterableIterator } from "../static-helpers/pagingHelpers.js";

export { TestProfileRunOperationsClientOptionalParams } from "./api/testProfileRunOperationsContext.js";

export class TestProfileRunOperationsClient {
  private _client: LoadTestServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: TokenCredential,
    options: TestProfileRunOperationsClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createTestProfileRunOperations(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Create and start a new test profile run with the given test profile run Id. */
  createOrUpdateTestProfileRun(
    testProfileRunId: string,
    body: TestProfileRun,
    options: CreateOrUpdateTestProfileRunOptionalParams = {
      requestOptions: {},
    },
  ): Promise<TestProfileRun> {
    return createOrUpdateTestProfileRun(
      this._client,
      testProfileRunId,
      body,
      options,
    );
  }

  /** Delete an existing load test profile run by providing the test profile run Id. */
  deleteTestProfileRun(
    testProfileRunId: string,
    options: DeleteTestProfileRunOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return deleteTestProfileRun(this._client, testProfileRunId, options);
  }

  /** Get test profile run details by test profile run Id. */
  getTestProfileRun(
    testProfileRunId: string,
    options: GetTestProfileRunOptionalParams = { requestOptions: {} },
  ): Promise<TestProfileRun> {
    return getTestProfileRun(this._client, testProfileRunId, options);
  }

  /** Get all test profile runs for the given filters. */
  listTestProfileRuns(
    options: ListTestProfileRunsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<TestProfileRun> {
    return listTestProfileRuns(this._client, options);
  }

  /** Stop test profile run for the given test profile run Id. */
  stopTestProfileRun(
    testProfileRunId: string,
    options: StopTestProfileRunOptionalParams = { requestOptions: {} },
  ): Promise<TestProfileRun> {
    return stopTestProfileRun(this._client, testProfileRunId, options);
  }
}
