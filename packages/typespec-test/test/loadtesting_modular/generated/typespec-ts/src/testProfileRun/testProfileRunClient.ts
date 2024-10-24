// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createOrUpdateTestProfileRun,
  deleteTestProfileRun,
  getTestProfileRun,
  listTestProfileRuns,
  stopTestProfileRun,
  CreateOrUpdateTestProfileRunOptionalParams,
  DeleteTestProfileRunOptionalParams,
  GetTestProfileRunOptionalParams,
  ListTestProfileRunsOptionalParams,
  StopTestProfileRunOptionalParams,
  createTestProfileRun,
  TestProfileRunContext,
  TestProfileRunClientOptionalParams,
} from "./api/index.js";
import { TestProfileRun } from "../models/models.js";
import { PagedAsyncIterableIterator } from "../static-helpers/pagingHelpers.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { TestProfileRunClientOptionalParams } from "./api/testProfileRunContext.js";

export class TestProfileRunClient {
  private _client: TestProfileRunContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: TokenCredential,
    options: TestProfileRunClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createTestProfileRun(endpointParam, credential, {
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
