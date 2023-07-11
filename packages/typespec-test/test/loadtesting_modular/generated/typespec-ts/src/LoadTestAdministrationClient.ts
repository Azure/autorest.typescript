// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import {
  createLoadTestAdministration,
  LoadTestAdministrationClientOptions,
  AzureLoadTestingContext,
  Test,
  FileInfo,
  TestAppComponents,
  AppComponent,
  TestServerMetricConfig,
  FileInfoList,
  TestsList,
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
} from "./api/loadTestAdministration/index.js";

export class LoadTestAdministrationClient {
  private _client: AzureLoadTestingContext;

  /** */
  constructor(
    endpoint: string,
    credential: TokenCredential,
    options: LoadTestAdministrationClientOptions = {}
  ) {
    this._client = createLoadTestAdministration(endpoint, credential, options);
  }

  /** Create a new test or update an existing test. */
  createOrUpdateTest(
    testId: string,
    options: CreateOrUpdateTestOptions = { requestOptions: {} }
  ): Promise<Test> {
    return createOrUpdateTest(this._client, testId, options);
  }

  /** Associate an app component (collection of azure resources) to a test */
  createOrUpdateAppComponents(
    components: Record<string, AppComponent>,
    testId: string,
    options: CreateOrUpdateAppComponentsOptions = { requestOptions: {} }
  ): Promise<TestAppComponents> {
    return createOrUpdateAppComponents(
      this._client,
      components,
      testId,
      options
    );
  }

  /** Configure server metrics for a test */
  createOrUpdateServerMetricsConfig(
    testId: string,
    options: CreateOrUpdateServerMetricsConfigOptions = { requestOptions: {} }
  ): Promise<TestServerMetricConfig> {
    return createOrUpdateServerMetricsConfig(this._client, testId, options);
  }

  /** Get associated app component (collection of azure resources) for the given test. */
  getAppComponents(
    testId: string,
    options: GetAppComponentsOptions = { requestOptions: {} }
  ): Promise<TestAppComponents> {
    return getAppComponents(this._client, testId, options);
  }

  /** List server metrics configuration for the given test. */
  getServerMetricsConfig(
    testId: string,
    options: GetServerMetricsConfigOptions = { requestOptions: {} }
  ): Promise<TestServerMetricConfig> {
    return getServerMetricsConfig(this._client, testId, options);
  }

  /** Get load test details by test name */
  getTest(
    testId: string,
    options: GetTestOptions = { requestOptions: {} }
  ): Promise<Test> {
    return getTest(this._client, testId, options);
  }

  /** Get test file by the file name. */
  getTestFile(
    testId: string,
    fileName: string,
    options: GetTestFileOptions = { requestOptions: {} }
  ): Promise<FileInfo> {
    return getTestFile(this._client, testId, fileName, options);
  }

  /** Get all test files. */
  listTestFiles(
    testId: string,
    options: ListTestFilesOptions = { requestOptions: {} }
  ): Promise<FileInfoList> {
    return listTestFiles(this._client, testId, options);
  }

  /**
   * Get all load tests by the fully qualified resource Id e.g
   * subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.LoadTestService/loadtests/{resName}.
   */
  listTests(
    options: ListTestsOptions = { requestOptions: {} }
  ): Promise<TestsList> {
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
    options: UploadTestFileOptions = { requestOptions: {} }
  ): Promise<FileInfo> {
    return uploadTestFile(this._client, testId, fileName, options);
  }

  /** Delete file by the file name for a test */
  deleteTestFile(
    testId: string,
    fileName: string,
    options: DeleteTestFileOptions = { requestOptions: {} }
  ): Promise<void> {
    return deleteTestFile(this._client, testId, fileName, options);
  }

  /** Delete a test by its name. */
  deleteTest(
    testId: string,
    options: DeleteTestOptions = { requestOptions: {} }
  ): Promise<void> {
    return deleteTest(this._client, testId, options);
  }
}
