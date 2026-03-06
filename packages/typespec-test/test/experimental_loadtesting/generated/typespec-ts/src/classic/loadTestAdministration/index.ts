// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { LoadTestServiceContext } from "../../api/loadTestServiceContext.js";
import {
  loadTestAdministrationGetServerMetricsConfig,
  loadTestAdministrationCreateOrUpdateServerMetricsConfig,
  loadTestAdministrationGetAppComponents,
  loadTestAdministrationCreateOrUpdateAppComponents,
  loadTestAdministrationListTestFiles,
  loadTestAdministrationDeleteTestFile,
  loadTestAdministrationGetTestFile,
  loadTestAdministrationUploadTestFile,
  loadTestAdministrationListTests,
  loadTestAdministrationGetTest,
  loadTestAdministrationDeleteTest,
  loadTestAdministrationCreateOrUpdateTest,
} from "../../api/loadTestAdministration/operations.js";
import {
  LoadTestAdministrationGetServerMetricsConfigOptionalParams,
  LoadTestAdministrationCreateOrUpdateServerMetricsConfigOptionalParams,
  LoadTestAdministrationGetAppComponentsOptionalParams,
  LoadTestAdministrationCreateOrUpdateAppComponentsOptionalParams,
  LoadTestAdministrationListTestFilesOptionalParams,
  LoadTestAdministrationDeleteTestFileOptionalParams,
  LoadTestAdministrationGetTestFileOptionalParams,
  LoadTestAdministrationUploadTestFileOptionalParams,
  LoadTestAdministrationListTestsOptionalParams,
  LoadTestAdministrationGetTestOptionalParams,
  LoadTestAdministrationDeleteTestOptionalParams,
  LoadTestAdministrationCreateOrUpdateTestOptionalParams,
} from "../../api/loadTestAdministration/options.js";
import {
  Test,
  TestFileInfo,
  TestAppComponents,
  TestServerMetricConfig,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a LoadTestAdministration operations. */
export interface LoadTestAdministrationOperations {
  /** List server metrics configuration for the given test. */
  getServerMetricsConfig: (
    testId: string,
    options?: LoadTestAdministrationGetServerMetricsConfigOptionalParams,
  ) => Promise<TestServerMetricConfig>;
  /** Configure server metrics for a test */
  createOrUpdateServerMetricsConfig: (
    testId: string,
    body: TestServerMetricConfig,
    options?: LoadTestAdministrationCreateOrUpdateServerMetricsConfigOptionalParams,
  ) => Promise<TestServerMetricConfig>;
  /** Get associated app component (collection of azure resources) for the given test. */
  getAppComponents: (
    testId: string,
    options?: LoadTestAdministrationGetAppComponentsOptionalParams,
  ) => Promise<TestAppComponents>;
  /** Add an app component to a test by providing the resource Id, name and type. */
  createOrUpdateAppComponents: (
    testId: string,
    body: TestAppComponents,
    options?: LoadTestAdministrationCreateOrUpdateAppComponentsOptionalParams,
  ) => Promise<TestAppComponents>;
  /** Get all test files. */
  listTestFiles: (
    testId: string,
    options?: LoadTestAdministrationListTestFilesOptionalParams,
  ) => PagedAsyncIterableIterator<TestFileInfo>;
  /** Delete file by the file name for a test */
  deleteTestFile: (
    testId: string,
    fileName: string,
    options?: LoadTestAdministrationDeleteTestFileOptionalParams,
  ) => Promise<void>;
  /** Get all the files that are associated with a test. */
  getTestFile: (
    testId: string,
    fileName: string,
    options?: LoadTestAdministrationGetTestFileOptionalParams,
  ) => Promise<TestFileInfo>;
  /**
   * Upload input file for a given test Id. File size can't be more than 50 MB.
   * Existing file with same name for the given test will be overwritten. File
   * should be provided in the request body as application/octet-stream.
   */
  uploadTestFile: (
    testId: string,
    fileName: string,
    body: Uint8Array,
    options?: LoadTestAdministrationUploadTestFileOptionalParams,
  ) => Promise<TestFileInfo>;
  /**
   * Get all load tests by the fully qualified resource Id e.g
   * subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.LoadTestService/loadtests/{resName}.
   */
  listTests: (
    options?: LoadTestAdministrationListTestsOptionalParams,
  ) => PagedAsyncIterableIterator<Test>;
  /** Get load test details by test Id */
  getTest: (testId: string, options?: LoadTestAdministrationGetTestOptionalParams) => Promise<Test>;
  /** Delete a test by its test Id. */
  deleteTest: (
    testId: string,
    options?: LoadTestAdministrationDeleteTestOptionalParams,
  ) => Promise<void>;
  /** Create a new test or update an existing test by providing the test Id. */
  createOrUpdateTest: (
    testId: string,
    body: Test,
    options?: LoadTestAdministrationCreateOrUpdateTestOptionalParams,
  ) => Promise<Test>;
}

function _getLoadTestAdministration(context: LoadTestServiceContext) {
  return {
    getServerMetricsConfig: (
      testId: string,
      options?: LoadTestAdministrationGetServerMetricsConfigOptionalParams,
    ) => loadTestAdministrationGetServerMetricsConfig(context, testId, options),
    createOrUpdateServerMetricsConfig: (
      testId: string,
      body: TestServerMetricConfig,
      options?: LoadTestAdministrationCreateOrUpdateServerMetricsConfigOptionalParams,
    ) => loadTestAdministrationCreateOrUpdateServerMetricsConfig(context, testId, body, options),
    getAppComponents: (
      testId: string,
      options?: LoadTestAdministrationGetAppComponentsOptionalParams,
    ) => loadTestAdministrationGetAppComponents(context, testId, options),
    createOrUpdateAppComponents: (
      testId: string,
      body: TestAppComponents,
      options?: LoadTestAdministrationCreateOrUpdateAppComponentsOptionalParams,
    ) => loadTestAdministrationCreateOrUpdateAppComponents(context, testId, body, options),
    listTestFiles: (testId: string, options?: LoadTestAdministrationListTestFilesOptionalParams) =>
      loadTestAdministrationListTestFiles(context, testId, options),
    deleteTestFile: (
      testId: string,
      fileName: string,
      options?: LoadTestAdministrationDeleteTestFileOptionalParams,
    ) => loadTestAdministrationDeleteTestFile(context, testId, fileName, options),
    getTestFile: (
      testId: string,
      fileName: string,
      options?: LoadTestAdministrationGetTestFileOptionalParams,
    ) => loadTestAdministrationGetTestFile(context, testId, fileName, options),
    uploadTestFile: (
      testId: string,
      fileName: string,
      body: Uint8Array,
      options?: LoadTestAdministrationUploadTestFileOptionalParams,
    ) => loadTestAdministrationUploadTestFile(context, testId, fileName, body, options),
    listTests: (options?: LoadTestAdministrationListTestsOptionalParams) =>
      loadTestAdministrationListTests(context, options),
    getTest: (testId: string, options?: LoadTestAdministrationGetTestOptionalParams) =>
      loadTestAdministrationGetTest(context, testId, options),
    deleteTest: (testId: string, options?: LoadTestAdministrationDeleteTestOptionalParams) =>
      loadTestAdministrationDeleteTest(context, testId, options),
    createOrUpdateTest: (
      testId: string,
      body: Test,
      options?: LoadTestAdministrationCreateOrUpdateTestOptionalParams,
    ) => loadTestAdministrationCreateOrUpdateTest(context, testId, body, options),
  };
}

export function _getLoadTestAdministrationOperations(
  context: LoadTestServiceContext,
): LoadTestAdministrationOperations {
  return {
    ..._getLoadTestAdministration(context),
  };
}
