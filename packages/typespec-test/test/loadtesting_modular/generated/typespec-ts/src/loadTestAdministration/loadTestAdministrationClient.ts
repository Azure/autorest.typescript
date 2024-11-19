// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createLoadTestAdministration,
  LoadTestAdministrationContext,
  LoadTestAdministrationClientOptionalParams,
  createOrUpdateTest,
  createOrUpdateAppComponents,
  createOrUpdateServerMetricsConfig,
  getAppComponents,
  getServerMetricsConfig,
  getTest,
  getTestFile,
  listTestFiles,
  listTests,
  uploadTestFile,
  deleteTestFile,
  deleteTest,
  CreateOrUpdateTestOptionalParams,
  CreateOrUpdateAppComponentsOptionalParams,
  CreateOrUpdateServerMetricsConfigOptionalParams,
  GetAppComponentsOptionalParams,
  GetServerMetricsConfigOptionalParams,
  GetTestOptionalParams,
  GetTestFileOptionalParams,
  ListTestFilesOptionalParams,
  ListTestsOptionalParams,
  UploadTestFileOptionalParams,
  DeleteTestFileOptionalParams,
  DeleteTestOptionalParams,
} from "./api/index.js";
import {
  Test,
  TestFileInfo,
  TestAppComponents,
  TestServerMetricConfig,
} from "../models/models.js";
import { PagedAsyncIterableIterator } from "../static-helpers/pagingHelpers.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { LoadTestAdministrationClientOptionalParams } from "./api/loadTestAdministrationContext.js";

export class LoadTestAdministrationClient {
  private _client: LoadTestAdministrationContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: TokenCredential,
    options: LoadTestAdministrationClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createLoadTestAdministration(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Create a new test or update an existing test by providing the test Id. */
  createOrUpdateTest(
    testId: string,
    body: Test,
    options: CreateOrUpdateTestOptionalParams = { requestOptions: {} },
  ): Promise<Test> {
    return createOrUpdateTest(this._client, testId, body, options);
  }

  /** Add an app component to a test by providing the resource Id, name and type. */
  createOrUpdateAppComponents(
    testId: string,
    body: TestAppComponents,
    options: CreateOrUpdateAppComponentsOptionalParams = { requestOptions: {} },
  ): Promise<TestAppComponents> {
    return createOrUpdateAppComponents(this._client, testId, body, options);
  }

  /** Configure server metrics for a test */
  createOrUpdateServerMetricsConfig(
    testId: string,
    body: TestServerMetricConfig,
    options: CreateOrUpdateServerMetricsConfigOptionalParams = {
      requestOptions: {},
    },
  ): Promise<TestServerMetricConfig> {
    return createOrUpdateServerMetricsConfig(
      this._client,
      testId,
      body,
      options,
    );
  }

  /** Get associated app component (collection of azure resources) for the given test. */
  getAppComponents(
    testId: string,
    options: GetAppComponentsOptionalParams = { requestOptions: {} },
  ): Promise<TestAppComponents> {
    return getAppComponents(this._client, testId, options);
  }

  /** List server metrics configuration for the given test. */
  getServerMetricsConfig(
    testId: string,
    options: GetServerMetricsConfigOptionalParams = { requestOptions: {} },
  ): Promise<TestServerMetricConfig> {
    return getServerMetricsConfig(this._client, testId, options);
  }

  /** Get load test details by test Id */
  getTest(
    testId: string,
    options: GetTestOptionalParams = { requestOptions: {} },
  ): Promise<Test> {
    return getTest(this._client, testId, options);
  }

  /** Get all the files that are associated with a test. */
  getTestFile(
    testId: string,
    fileName: string,
    options: GetTestFileOptionalParams = { requestOptions: {} },
  ): Promise<TestFileInfo> {
    return getTestFile(this._client, testId, fileName, options);
  }

  /** Get all test files. */
  listTestFiles(
    testId: string,
    options: ListTestFilesOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<TestFileInfo> {
    return listTestFiles(this._client, testId, options);
  }

  /**
   * Get all load tests by the fully qualified resource Id e.g
   * subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.LoadTestService/loadtests/{resName}.
   */
  listTests(
    options: ListTestsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<Test> {
    return listTests(this._client, options);
  }

  /**
   * Upload input file for a given test Id. File size can't be more than 50 MB.
   * Existing file with same name for the given test will be overwritten. File
   * should be provided in the request body as application/octet-stream.
   */
  uploadTestFile(
    testId: string,
    fileName: string,
    body: Uint8Array,
    options: UploadTestFileOptionalParams = { requestOptions: {} },
  ): Promise<TestFileInfo> {
    return uploadTestFile(this._client, testId, fileName, body, options);
  }

  /** Delete file by the file name for a test */
  deleteTestFile(
    testId: string,
    fileName: string,
    options: DeleteTestFileOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return deleteTestFile(this._client, testId, fileName, options);
  }

  /** Delete a test by its test Id. */
  deleteTest(
    testId: string,
    options: DeleteTestOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return deleteTest(this._client, testId, options);
  }
}
