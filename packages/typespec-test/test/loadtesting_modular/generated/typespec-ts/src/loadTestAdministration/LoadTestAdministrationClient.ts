// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  Test,
  FileInfo,
  TestAppComponents,
  TestServerMetricConfig,
} from "./models/models.js";
import {
  CreateOrUpdateTestOptions,
  CreateOrUpdateAppComponentsOptions,
  CreateOrUpdateServerMetricsConfigOptions,
  GetAppComponentsOptions,
  GetServerMetricsConfigOptions,
  GetTestOptions,
  GetTestFileOptions,
  ListTestFilesOptions,
  ListTestsOptions,
  UploadTestFileOptions,
  DeleteTestFileOptions,
  DeleteTestOptions,
} from "./models/options.js";
import { PagedAsyncIterableIterator } from "./models/pagingTypes.js";
import {
  createLoadTestAdministration,
  LoadTestAdministrationClientOptions,
  AzureLoadTestingContext,
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
} from "./api/index.js";

export { LoadTestAdministrationClientOptions } from "./api/LoadTestAdministrationContext.js";

export class LoadTestAdministrationClient {
  private _client: AzureLoadTestingContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpoint: string,
    credential: TokenCredential,
    options: LoadTestAdministrationClientOptions = {},
  ) {
    this._client = createLoadTestAdministration(endpoint, credential, options);
    this.pipeline = this._client.pipeline;
  }

  /** Create a new test or update an existing test. */
  createOrUpdateTest(
    testId: string,
    body: Test,
    options: CreateOrUpdateTestOptions = { requestOptions: {} },
  ): Promise<Test> {
    return createOrUpdateTest(this._client, testId, body, options);
  }

  /** Associate an app component (collection of azure resources) to a test */
  createOrUpdateAppComponents(
    testId: string,
    body: TestAppComponents,
    options: CreateOrUpdateAppComponentsOptions = { requestOptions: {} },
  ): Promise<TestAppComponents> {
    return createOrUpdateAppComponents(this._client, testId, body, options);
  }

  /** Configure server metrics for a test */
  createOrUpdateServerMetricsConfig(
    testId: string,
    body: TestServerMetricConfig,
    options: CreateOrUpdateServerMetricsConfigOptions = { requestOptions: {} },
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
    options: GetAppComponentsOptions = { requestOptions: {} },
  ): Promise<TestAppComponents> {
    return getAppComponents(this._client, testId, options);
  }

  /** List server metrics configuration for the given test. */
  getServerMetricsConfig(
    testId: string,
    options: GetServerMetricsConfigOptions = { requestOptions: {} },
  ): Promise<TestServerMetricConfig> {
    return getServerMetricsConfig(this._client, testId, options);
  }

  /** Get load test details by test name */
  getTest(
    testId: string,
    options: GetTestOptions = { requestOptions: {} },
  ): Promise<Test> {
    return getTest(this._client, testId, options);
  }

  /** Get test file by the file name. */
  getTestFile(
    testId: string,
    fileName: string,
    options: GetTestFileOptions = { requestOptions: {} },
  ): Promise<FileInfo> {
    return getTestFile(this._client, testId, fileName, options);
  }

  /** Get all test files. */
  listTestFiles(
    testId: string,
    options: ListTestFilesOptions = { requestOptions: {} },
  ): PagedAsyncIterableIterator<FileInfo> {
    return listTestFiles(this._client, testId, options);
  }

  /**
   * Get all load tests by the fully qualified resource Id e.g
   * subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.LoadTestService/loadtests/{resName}.
   */
  listTests(
    options: ListTestsOptions = { requestOptions: {} },
  ): PagedAsyncIterableIterator<Test> {
    return listTests(this._client, options);
  }

  /**
   * Upload input file for a given test name. File size can't be more than 50 MB.
   * Existing file with same name for the given test will be overwritten. File
   * should be provided in the request body as application/octet-stream.
   */
  uploadTestFile(
    testId: string,
    fileName: string,
    body: Uint8Array,
    options: UploadTestFileOptions = { requestOptions: {} },
  ): Promise<FileInfo> {
    return uploadTestFile(this._client, testId, fileName, body, options);
  }

  /** Delete file by the file name for a test */
  deleteTestFile(
    testId: string,
    fileName: string,
    options: DeleteTestFileOptions = { requestOptions: {} },
  ): Promise<void> {
    return deleteTestFile(this._client, testId, fileName, options);
  }

  /** Delete a test by its name. */
  deleteTest(
    testId: string,
    options: DeleteTestOptions = { requestOptions: {} },
  ): Promise<void> {
    return deleteTest(this._client, testId, options);
  }
}
