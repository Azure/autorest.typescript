// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  LoadTestAdministrationCreateOrUpdateTestParameters,
  LoadTestAdministrationDeleteTestParameters,
  LoadTestAdministrationGetTestParameters,
  LoadTestAdministrationListTestsParameters,
  LoadTestAdministrationUploadTestFileParameters,
  LoadTestAdministrationGetTestFileParameters,
  LoadTestAdministrationDeleteTestFileParameters,
  LoadTestAdministrationListTestFilesParameters,
  LoadTestAdministrationCreateOrUpdateAppComponentsParameters,
  LoadTestAdministrationGetAppComponentsParameters,
  LoadTestAdministrationCreateOrUpdateServerMetricsConfigParameters,
  LoadTestAdministrationGetServerMetricsConfigParameters,
  LoadTestRunGetTestRunParameters,
  LoadTestRunCreateOrUpdateTestRunParameters,
  LoadTestRunDeleteTestRunParameters,
  LoadTestRunListTestRunsParameters,
  LoadTestRunGetTestRunFileParameters,
  LoadTestRunStopParameters,
  LoadTestRunListMetricNamespacesParameters,
  LoadTestRunListMetricDefinitionsParameters,
  LoadTestRunListMetricsParameters,
  LoadTestRunListMetricDimensionValuesParameters,
  LoadTestRunCreateOrUpdateAppComponentsParameters,
  LoadTestRunGetAppComponentsParameters,
  LoadTestRunCreateOrUpdateServerMetricsConfigParameters,
  LoadTestRunGetServerMetricsConfigParameters,
} from "./parameters.js";
import {
  LoadTestAdministrationCreateOrUpdateTest200Response,
  LoadTestAdministrationCreateOrUpdateTest201Response,
  LoadTestAdministrationCreateOrUpdateTestDefaultResponse,
  LoadTestAdministrationDeleteTest204Response,
  LoadTestAdministrationDeleteTestDefaultResponse,
  LoadTestAdministrationGetTest200Response,
  LoadTestAdministrationGetTestDefaultResponse,
  LoadTestAdministrationListTests200Response,
  LoadTestAdministrationListTestsDefaultResponse,
  LoadTestAdministrationUploadTestFile201Response,
  LoadTestAdministrationUploadTestFileDefaultResponse,
  LoadTestAdministrationGetTestFile200Response,
  LoadTestAdministrationGetTestFileDefaultResponse,
  LoadTestAdministrationDeleteTestFile204Response,
  LoadTestAdministrationDeleteTestFileDefaultResponse,
  LoadTestAdministrationListTestFiles200Response,
  LoadTestAdministrationListTestFilesDefaultResponse,
  LoadTestAdministrationCreateOrUpdateAppComponents200Response,
  LoadTestAdministrationCreateOrUpdateAppComponents201Response,
  LoadTestAdministrationCreateOrUpdateAppComponentsDefaultResponse,
  LoadTestAdministrationGetAppComponents200Response,
  LoadTestAdministrationGetAppComponentsDefaultResponse,
  LoadTestAdministrationCreateOrUpdateServerMetricsConfig200Response,
  LoadTestAdministrationCreateOrUpdateServerMetricsConfig201Response,
  LoadTestAdministrationCreateOrUpdateServerMetricsConfigDefaultResponse,
  LoadTestAdministrationGetServerMetricsConfig200Response,
  LoadTestAdministrationGetServerMetricsConfigDefaultResponse,
  LoadTestRunGetTestRun200Response,
  LoadTestRunGetTestRunDefaultResponse,
  LoadTestRunCreateOrUpdateTestRun200Response,
  LoadTestRunCreateOrUpdateTestRun201Response,
  LoadTestRunCreateOrUpdateTestRunDefaultResponse,
  LoadTestRunDeleteTestRun204Response,
  LoadTestRunDeleteTestRunDefaultResponse,
  LoadTestRunListTestRuns200Response,
  LoadTestRunListTestRunsDefaultResponse,
  LoadTestRunGetTestRunFile200Response,
  LoadTestRunGetTestRunFileDefaultResponse,
  LoadTestRunStop200Response,
  LoadTestRunStopDefaultResponse,
  LoadTestRunListMetricNamespaces200Response,
  LoadTestRunListMetricNamespacesDefaultResponse,
  LoadTestRunListMetricDefinitions200Response,
  LoadTestRunListMetricDefinitionsDefaultResponse,
  LoadTestRunListMetrics200Response,
  LoadTestRunListMetricsDefaultResponse,
  LoadTestRunListMetricDimensionValues200Response,
  LoadTestRunListMetricDimensionValuesDefaultResponse,
  LoadTestRunCreateOrUpdateAppComponents200Response,
  LoadTestRunCreateOrUpdateAppComponents201Response,
  LoadTestRunCreateOrUpdateAppComponentsDefaultResponse,
  LoadTestRunGetAppComponents200Response,
  LoadTestRunGetAppComponentsDefaultResponse,
  LoadTestRunCreateOrUpdateServerMetricsConfig200Response,
  LoadTestRunCreateOrUpdateServerMetricsConfig201Response,
  LoadTestRunCreateOrUpdateServerMetricsConfigDefaultResponse,
  LoadTestRunGetServerMetricsConfig200Response,
  LoadTestRunGetServerMetricsConfigDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface LoadTestAdministrationCreateOrUpdateTest {
  /** Create a new test or update an existing test by providing the test Id. */
  patch(
    options: LoadTestAdministrationCreateOrUpdateTestParameters,
  ): StreamableMethod<
    | LoadTestAdministrationCreateOrUpdateTest200Response
    | LoadTestAdministrationCreateOrUpdateTest201Response
    | LoadTestAdministrationCreateOrUpdateTestDefaultResponse
  >;
  /** Delete a test by its test Id. */
  delete(
    options?: LoadTestAdministrationDeleteTestParameters,
  ): StreamableMethod<
    | LoadTestAdministrationDeleteTest204Response
    | LoadTestAdministrationDeleteTestDefaultResponse
  >;
  /** Get load test details by test Id */
  get(
    options?: LoadTestAdministrationGetTestParameters,
  ): StreamableMethod<
    | LoadTestAdministrationGetTest200Response
    | LoadTestAdministrationGetTestDefaultResponse
  >;
}

export interface LoadTestAdministrationListTests {
  /**
   * Get all load tests by the fully qualified resource Id e.g
   * subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.LoadTestService/loadtests/{resName}.
   */
  get(
    options?: LoadTestAdministrationListTestsParameters,
  ): StreamableMethod<
    | LoadTestAdministrationListTests200Response
    | LoadTestAdministrationListTestsDefaultResponse
  >;
}

export interface LoadTestAdministrationUploadTestFile {
  /**
   * Upload input file for a given test Id. File size can't be more than 50 MB.
   * Existing file with same name for the given test will be overwritten. File
   * should be provided in the request body as application/octet-stream.
   */
  put(
    options: LoadTestAdministrationUploadTestFileParameters,
  ): StreamableMethod<
    | LoadTestAdministrationUploadTestFile201Response
    | LoadTestAdministrationUploadTestFileDefaultResponse
  >;
  /** Get all the files that are associated with a test. */
  get(
    options?: LoadTestAdministrationGetTestFileParameters,
  ): StreamableMethod<
    | LoadTestAdministrationGetTestFile200Response
    | LoadTestAdministrationGetTestFileDefaultResponse
  >;
  /** Delete file by the file name for a test */
  delete(
    options?: LoadTestAdministrationDeleteTestFileParameters,
  ): StreamableMethod<
    | LoadTestAdministrationDeleteTestFile204Response
    | LoadTestAdministrationDeleteTestFileDefaultResponse
  >;
}

export interface LoadTestAdministrationListTestFiles {
  /** Get all test files. */
  get(
    options?: LoadTestAdministrationListTestFilesParameters,
  ): StreamableMethod<
    | LoadTestAdministrationListTestFiles200Response
    | LoadTestAdministrationListTestFilesDefaultResponse
  >;
}

export interface LoadTestAdministrationCreateOrUpdateAppComponents {
  /** Add an app component to a test by providing the resource Id, name and type. */
  patch(
    options: LoadTestAdministrationCreateOrUpdateAppComponentsParameters,
  ): StreamableMethod<
    | LoadTestAdministrationCreateOrUpdateAppComponents200Response
    | LoadTestAdministrationCreateOrUpdateAppComponents201Response
    | LoadTestAdministrationCreateOrUpdateAppComponentsDefaultResponse
  >;
  /** Get associated app component (collection of azure resources) for the given test. */
  get(
    options?: LoadTestAdministrationGetAppComponentsParameters,
  ): StreamableMethod<
    | LoadTestAdministrationGetAppComponents200Response
    | LoadTestAdministrationGetAppComponentsDefaultResponse
  >;
}

export interface LoadTestAdministrationCreateOrUpdateServerMetricsConfig {
  /** Configure server metrics for a test */
  patch(
    options: LoadTestAdministrationCreateOrUpdateServerMetricsConfigParameters,
  ): StreamableMethod<
    | LoadTestAdministrationCreateOrUpdateServerMetricsConfig200Response
    | LoadTestAdministrationCreateOrUpdateServerMetricsConfig201Response
    | LoadTestAdministrationCreateOrUpdateServerMetricsConfigDefaultResponse
  >;
  /** List server metrics configuration for the given test. */
  get(
    options?: LoadTestAdministrationGetServerMetricsConfigParameters,
  ): StreamableMethod<
    | LoadTestAdministrationGetServerMetricsConfig200Response
    | LoadTestAdministrationGetServerMetricsConfigDefaultResponse
  >;
}

export interface LoadTestRunGetTestRun {
  /** Get test run details by test run Id. */
  get(
    options?: LoadTestRunGetTestRunParameters,
  ): StreamableMethod<
    LoadTestRunGetTestRun200Response | LoadTestRunGetTestRunDefaultResponse
  >;
  /** Create and start a new test run with the given test run Id. */
  patch(
    options: LoadTestRunCreateOrUpdateTestRunParameters,
  ): StreamableMethod<
    | LoadTestRunCreateOrUpdateTestRun200Response
    | LoadTestRunCreateOrUpdateTestRun201Response
    | LoadTestRunCreateOrUpdateTestRunDefaultResponse
  >;
  /** Delete an existing load test run by providing the testRunId. */
  delete(
    options?: LoadTestRunDeleteTestRunParameters,
  ): StreamableMethod<
    | LoadTestRunDeleteTestRun204Response
    | LoadTestRunDeleteTestRunDefaultResponse
  >;
}

export interface LoadTestRunListTestRuns {
  /** Get all test runs for the given filters. */
  get(
    options?: LoadTestRunListTestRunsParameters,
  ): StreamableMethod<
    LoadTestRunListTestRuns200Response | LoadTestRunListTestRunsDefaultResponse
  >;
}

export interface LoadTestRunGetTestRunFile {
  /** Get test run file by file name. */
  get(
    options?: LoadTestRunGetTestRunFileParameters,
  ): StreamableMethod<
    | LoadTestRunGetTestRunFile200Response
    | LoadTestRunGetTestRunFileDefaultResponse
  >;
}

export interface LoadTestRunStop {
  /** Stop test run by test run Id. */
  post(
    options?: LoadTestRunStopParameters,
  ): StreamableMethod<
    LoadTestRunStop200Response | LoadTestRunStopDefaultResponse
  >;
}

export interface LoadTestRunListMetricNamespaces {
  /** List the metric namespaces for a load test run. */
  get(
    options?: LoadTestRunListMetricNamespacesParameters,
  ): StreamableMethod<
    | LoadTestRunListMetricNamespaces200Response
    | LoadTestRunListMetricNamespacesDefaultResponse
  >;
}

export interface LoadTestRunListMetricDefinitions {
  /** List the metric definitions for a load test run. */
  get(
    options: LoadTestRunListMetricDefinitionsParameters,
  ): StreamableMethod<
    | LoadTestRunListMetricDefinitions200Response
    | LoadTestRunListMetricDefinitionsDefaultResponse
  >;
}

export interface LoadTestRunListMetrics {
  /** List the metric values for a load test run. */
  post(
    options: LoadTestRunListMetricsParameters,
  ): StreamableMethod<
    LoadTestRunListMetrics200Response | LoadTestRunListMetricsDefaultResponse
  >;
}

export interface LoadTestRunListMetricDimensionValues {
  /** List the dimension values for the given metric dimension name. */
  get(
    options: LoadTestRunListMetricDimensionValuesParameters,
  ): StreamableMethod<
    | LoadTestRunListMetricDimensionValues200Response
    | LoadTestRunListMetricDimensionValuesDefaultResponse
  >;
}

export interface LoadTestRunCreateOrUpdateAppComponents {
  /** Add an app component to a test run by providing the resource Id, name and type. */
  patch(
    options: LoadTestRunCreateOrUpdateAppComponentsParameters,
  ): StreamableMethod<
    | LoadTestRunCreateOrUpdateAppComponents200Response
    | LoadTestRunCreateOrUpdateAppComponents201Response
    | LoadTestRunCreateOrUpdateAppComponentsDefaultResponse
  >;
  /**
   * Get associated app component (collection of azure resources) for the given test
   * run.
   */
  get(
    options?: LoadTestRunGetAppComponentsParameters,
  ): StreamableMethod<
    | LoadTestRunGetAppComponents200Response
    | LoadTestRunGetAppComponentsDefaultResponse
  >;
}

export interface LoadTestRunCreateOrUpdateServerMetricsConfig {
  /** Configure server metrics for a test run */
  patch(
    options: LoadTestRunCreateOrUpdateServerMetricsConfigParameters,
  ): StreamableMethod<
    | LoadTestRunCreateOrUpdateServerMetricsConfig200Response
    | LoadTestRunCreateOrUpdateServerMetricsConfig201Response
    | LoadTestRunCreateOrUpdateServerMetricsConfigDefaultResponse
  >;
  /** Get associated server metrics configuration for the given test run. */
  get(
    options?: LoadTestRunGetServerMetricsConfigParameters,
  ): StreamableMethod<
    | LoadTestRunGetServerMetricsConfig200Response
    | LoadTestRunGetServerMetricsConfigDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/tests/\{testId\}' has methods for the following verbs: patch, delete, get */
  (
    path: "/tests/{testId}",
    testId: string,
  ): LoadTestAdministrationCreateOrUpdateTest;
  /** Resource for '/tests' has methods for the following verbs: get */
  (path: "/tests"): LoadTestAdministrationListTests;
  /** Resource for '/tests/\{testId\}/files/\{fileName\}' has methods for the following verbs: put, get, delete */
  (
    path: "/tests/{testId}/files/{fileName}",
    testId: string,
    fileName: string,
  ): LoadTestAdministrationUploadTestFile;
  /** Resource for '/tests/\{testId\}/files' has methods for the following verbs: get */
  (
    path: "/tests/{testId}/files",
    testId: string,
  ): LoadTestAdministrationListTestFiles;
  /** Resource for '/tests/\{testId\}/app-components' has methods for the following verbs: patch, get */
  (
    path: "/tests/{testId}/app-components",
    testId: string,
  ): LoadTestAdministrationCreateOrUpdateAppComponents;
  /** Resource for '/tests/\{testId\}/server-metrics-config' has methods for the following verbs: patch, get */
  (
    path: "/tests/{testId}/server-metrics-config",
    testId: string,
  ): LoadTestAdministrationCreateOrUpdateServerMetricsConfig;
  /** Resource for '/test-runs/\{testRunId\}' has methods for the following verbs: get, patch, delete */
  (path: "/test-runs/{testRunId}", testRunId: string): LoadTestRunGetTestRun;
  /** Resource for '/test-runs' has methods for the following verbs: get */
  (path: "/test-runs"): LoadTestRunListTestRuns;
  /** Resource for '/test-runs/\{testRunId\}/files/\{fileName\}' has methods for the following verbs: get */
  (
    path: "/test-runs/{testRunId}/files/{fileName}",
    testRunId: string,
    fileName: string,
  ): LoadTestRunGetTestRunFile;
  /** Resource for '/test-runs/\{testRunId\}:stop' has methods for the following verbs: post */
  (path: "/test-runs/{testRunId}:stop", testRunId: string): LoadTestRunStop;
  /** Resource for '/test-runs/\{testRunId\}/metric-namespaces' has methods for the following verbs: get */
  (
    path: "/test-runs/{testRunId}/metric-namespaces",
    testRunId: string,
  ): LoadTestRunListMetricNamespaces;
  /** Resource for '/test-runs/\{testRunId\}/metric-definitions' has methods for the following verbs: get */
  (
    path: "/test-runs/{testRunId}/metric-definitions",
    testRunId: string,
  ): LoadTestRunListMetricDefinitions;
  /** Resource for '/test-runs/\{testRunId\}/metrics' has methods for the following verbs: post */
  (
    path: "/test-runs/{testRunId}/metrics",
    testRunId: string,
  ): LoadTestRunListMetrics;
  /** Resource for '/test-runs/\{testRunId\}/metric-dimensions/\{name\}/values' has methods for the following verbs: get */
  (
    path: "/test-runs/{testRunId}/metric-dimensions/{name}/values",
    testRunId: string,
    name: string,
  ): LoadTestRunListMetricDimensionValues;
  /** Resource for '/test-runs/\{testRunId\}/app-components' has methods for the following verbs: patch, get */
  (
    path: "/test-runs/{testRunId}/app-components",
    testRunId: string,
  ): LoadTestRunCreateOrUpdateAppComponents;
  /** Resource for '/test-runs/\{testRunId\}/server-metrics-config' has methods for the following verbs: patch, get */
  (
    path: "/test-runs/{testRunId}/server-metrics-config",
    testRunId: string,
  ): LoadTestRunCreateOrUpdateServerMetricsConfig;
}

export type LoadTestServiceContext = Client & {
  path: Routes;
};
