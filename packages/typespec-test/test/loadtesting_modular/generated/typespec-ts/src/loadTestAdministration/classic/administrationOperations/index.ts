// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AzureLoadTestingContext } from "../../api/LoadTestAdministrationContext.js";
import {
  Test,
  FileInfo,
  TestAppComponents,
  TestServerMetricConfig,
  PagedFileInfo,
  PagedTest,
} from "../../models/models.js";
import {
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
} from "../../api/administrationOperations/index.js";
import {
  AdministrationOperationsCreateOrUpdateTestOptions,
  AdministrationOperationsCreateOrUpdateAppComponentsOptions,
  AdministrationOperationsCreateOrUpdateServerMetricsConfigOptions,
  AdministrationOperationsGetAppComponentsOptions,
  AdministrationOperationsGetServerMetricsConfigOptions,
  AdministrationOperationsGetTestOptions,
  AdministrationOperationsGetTestFileOptions,
  AdministrationOperationsListTestFilesOptions,
  AdministrationOperationsListTestsOptions,
  AdministrationOperationsUploadTestFileOptions,
  AdministrationOperationsDeleteTestFileOptions,
  AdministrationOperationsDeleteTestOptions,
} from "../../models/options.js";

export interface AdministrationOperationsOperations {
  createOrUpdateTest: (
    testId: string,
    body: Test,
    options?: AdministrationOperationsCreateOrUpdateTestOptions
  ) => Promise<Test>;
  createOrUpdateAppComponents: (
    testId: string,
    body: TestAppComponents,
    options?: AdministrationOperationsCreateOrUpdateAppComponentsOptions
  ) => Promise<TestAppComponents>;
  createOrUpdateServerMetricsConfig: (
    testId: string,
    body: TestServerMetricConfig,
    options?: AdministrationOperationsCreateOrUpdateServerMetricsConfigOptions
  ) => Promise<TestServerMetricConfig>;
  getAppComponents: (
    testId: string,
    options?: AdministrationOperationsGetAppComponentsOptions
  ) => Promise<TestAppComponents>;
  getServerMetricsConfig: (
    testId: string,
    options?: AdministrationOperationsGetServerMetricsConfigOptions
  ) => Promise<TestServerMetricConfig>;
  getTest: (
    testId: string,
    options?: AdministrationOperationsGetTestOptions
  ) => Promise<Test>;
  getTestFile: (
    testId: string,
    fileName: string,
    options?: AdministrationOperationsGetTestFileOptions
  ) => Promise<FileInfo>;
  listTestFiles: (
    testId: string,
    options?: AdministrationOperationsListTestFilesOptions
  ) => Promise<PagedFileInfo>;
  listTests: (
    options?: AdministrationOperationsListTestsOptions
  ) => Promise<PagedTest>;
  uploadTestFile: (
    testId: string,
    fileName: string,
    body: Uint8Array,
    options?: AdministrationOperationsUploadTestFileOptions
  ) => Promise<FileInfo>;
  deleteTestFile: (
    testId: string,
    fileName: string,
    options?: AdministrationOperationsDeleteTestFileOptions
  ) => Promise<void>;
  deleteTest: (
    testId: string,
    options?: AdministrationOperationsDeleteTestOptions
  ) => Promise<void>;
}

export function getAdministrationOperations(context: AzureLoadTestingContext) {
  return {
    createOrUpdateTest: (
      testId: string,
      body: Test,
      options?: AdministrationOperationsCreateOrUpdateTestOptions
    ) => createOrUpdateTest(context, testId, body, options),
    createOrUpdateAppComponents: (
      testId: string,
      body: TestAppComponents,
      options?: AdministrationOperationsCreateOrUpdateAppComponentsOptions
    ) => createOrUpdateAppComponents(context, testId, body, options),
    createOrUpdateServerMetricsConfig: (
      testId: string,
      body: TestServerMetricConfig,
      options?: AdministrationOperationsCreateOrUpdateServerMetricsConfigOptions
    ) => createOrUpdateServerMetricsConfig(context, testId, body, options),
    getAppComponents: (
      testId: string,
      options?: AdministrationOperationsGetAppComponentsOptions
    ) => getAppComponents(context, testId, options),
    getServerMetricsConfig: (
      testId: string,
      options?: AdministrationOperationsGetServerMetricsConfigOptions
    ) => getServerMetricsConfig(context, testId, options),
    getTest: (
      testId: string,
      options?: AdministrationOperationsGetTestOptions
    ) => getTest(context, testId, options),
    getTestFile: (
      testId: string,
      fileName: string,
      options?: AdministrationOperationsGetTestFileOptions
    ) => getTestFile(context, testId, fileName, options),
    listTestFiles: (
      testId: string,
      options?: AdministrationOperationsListTestFilesOptions
    ) => listTestFiles(context, testId, options),
    listTests: (options?: AdministrationOperationsListTestsOptions) =>
      listTests(context, options),
    uploadTestFile: (
      testId: string,
      fileName: string,
      body: Uint8Array,
      options?: AdministrationOperationsUploadTestFileOptions
    ) => uploadTestFile(context, testId, fileName, body, options),
    deleteTestFile: (
      testId: string,
      fileName: string,
      options?: AdministrationOperationsDeleteTestFileOptions
    ) => deleteTestFile(context, testId, fileName, options),
    deleteTest: (
      testId: string,
      options?: AdministrationOperationsDeleteTestOptions
    ) => deleteTest(context, testId, options),
  };
}

export function getAdministrationOperationsOperations(
  context: AzureLoadTestingContext
): AdministrationOperationsOperations {
  return {
    ...getAdministrationOperations(context),
  };
}
