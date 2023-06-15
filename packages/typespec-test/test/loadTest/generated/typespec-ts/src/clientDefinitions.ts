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
  LoadTestRunGetTestRunFileParameters,
  LoadTestRunListTestRunsParameters,
  LoadTestRunStopTestRunParameters,
  LoadTestRunListMetricNamespacesParameters,
  LoadTestRunListMetricDefinitionsParameters,
  LoadTestRunListMetricsParameters,
  LoadTestRunListMetricDimensionValuesParameters,
  LoadTestRunCreateOrUpdateAppComponentsParameters,
  LoadTestRunGetAppComponentsParameters,
  LoadTestRunCreateOrUpdateServerMetricsConfigParameters,
  LoadTestRunGetServerMetricsConfigParameters,
} from "./parameters";
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
  LoadTestRunGetTestRunFile200Response,
  LoadTestRunGetTestRunFileDefaultResponse,
  LoadTestRunListTestRuns200Response,
  LoadTestRunListTestRunsDefaultResponse,
  LoadTestRunStopTestRun200Response,
  LoadTestRunStopTestRunDefaultResponse,
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
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface CreateOrUpdateTest {
  /** Create a new test or update an existing test. */
  patch(
    options: LoadTestAdministrationCreateOrUpdateTestParameters
  ): StreamableMethod<
    | LoadTestAdministrationCreateOrUpdateTest200Response
    | LoadTestAdministrationCreateOrUpdateTest201Response
    | LoadTestAdministrationCreateOrUpdateTestDefaultResponse
  >;
  /** Delete a test by its name. */
  delete(
    options?: LoadTestAdministrationDeleteTestParameters
  ): StreamableMethod<
    | LoadTestAdministrationDeleteTest204Response
    | LoadTestAdministrationDeleteTestDefaultResponse
  >;
  /** Get load test details by test name */
  get(
    options?: LoadTestAdministrationGetTestParameters
  ): StreamableMethod<
    | LoadTestAdministrationGetTest200Response
    | LoadTestAdministrationGetTestDefaultResponse
  >;
}

export interface ListTests {
  /**
   * Get all load tests by the fully qualified resource Id e.g
   * subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.LoadTestService/loadtests/{resName}.
   */
  get(
    options?: LoadTestAdministrationListTestsParameters
  ): StreamableMethod<
    | LoadTestAdministrationListTests200Response
    | LoadTestAdministrationListTestsDefaultResponse
  >;
}

export interface UploadTestFile {
  /**
   * Upload input file for a given test name. File size can't be more than 50 MB.
   * Existing file with same name for the given test will be overwritten. File
   * should be provided in the request body as application/octet-stream.
   */
  put(
    options: LoadTestAdministrationUploadTestFileParameters
  ): StreamableMethod<
    | LoadTestAdministrationUploadTestFile201Response
    | LoadTestAdministrationUploadTestFileDefaultResponse
  >;
  /** Get test file by the file name. */
  get(
    options?: LoadTestAdministrationGetTestFileParameters
  ): StreamableMethod<
    | LoadTestAdministrationGetTestFile200Response
    | LoadTestAdministrationGetTestFileDefaultResponse
  >;
  /** Delete file by the file name for a test */
  delete(
    options?: LoadTestAdministrationDeleteTestFileParameters
  ): StreamableMethod<
    | LoadTestAdministrationDeleteTestFile204Response
    | LoadTestAdministrationDeleteTestFileDefaultResponse
  >;
}

export interface ListTestFiles {
  /** Get all test files. */
  get(
    options?: LoadTestAdministrationListTestFilesParameters
  ): StreamableMethod<
    | LoadTestAdministrationListTestFiles200Response
    | LoadTestAdministrationListTestFilesDefaultResponse
  >;
}

export interface CreateOrUpdateAppComponents {
  /** Associate an app component (collection of azure resources) to a test */
  patch(
    options: LoadTestAdministrationCreateOrUpdateAppComponentsParameters
  ): StreamableMethod<
    | LoadTestAdministrationCreateOrUpdateAppComponents200Response
    | LoadTestAdministrationCreateOrUpdateAppComponents201Response
    | LoadTestAdministrationCreateOrUpdateAppComponentsDefaultResponse
  >;
  /** Get associated app component (collection of azure resources) for the given test. */
  get(
    options?: LoadTestAdministrationGetAppComponentsParameters
  ): StreamableMethod<
    | LoadTestAdministrationGetAppComponents200Response
    | LoadTestAdministrationGetAppComponentsDefaultResponse
  >;
}

export interface CreateOrUpdateServerMetricsConfig {
  /** Configure server metrics for a test */
  patch(
    options: LoadTestAdministrationCreateOrUpdateServerMetricsConfigParameters
  ): StreamableMethod<
    | LoadTestAdministrationCreateOrUpdateServerMetricsConfig200Response
    | LoadTestAdministrationCreateOrUpdateServerMetricsConfig201Response
    | LoadTestAdministrationCreateOrUpdateServerMetricsConfigDefaultResponse
  >;
  /** List server metrics configuration for the given test. */
  get(
    options?: LoadTestAdministrationGetServerMetricsConfigParameters
  ): StreamableMethod<
    | LoadTestAdministrationGetServerMetricsConfig200Response
    | LoadTestAdministrationGetServerMetricsConfigDefaultResponse
  >;
}

export interface GetTestRun {
  /** Get test run details by name. */
  get(
    options?: LoadTestRunGetTestRunParameters
  ): StreamableMethod<
    LoadTestRunGetTestRun200Response | LoadTestRunGetTestRunDefaultResponse
  >;
  /** Create and start a new test run with the given name. */
  patch(
    options: LoadTestRunCreateOrUpdateTestRunParameters
  ): StreamableMethod<
    | LoadTestRunCreateOrUpdateTestRun200Response
    | LoadTestRunCreateOrUpdateTestRun201Response
    | LoadTestRunCreateOrUpdateTestRunDefaultResponse
  >;
  /** Delete a test run by its name. */
  delete(
    options?: LoadTestRunDeleteTestRunParameters
  ): StreamableMethod<
    | LoadTestRunDeleteTestRun204Response
    | LoadTestRunDeleteTestRunDefaultResponse
  >;
}

export interface GetTestRunFile {
  /** Get test run file by file name. */
  get(
    options?: LoadTestRunGetTestRunFileParameters
  ): StreamableMethod<
    | LoadTestRunGetTestRunFile200Response
    | LoadTestRunGetTestRunFileDefaultResponse
  >;
}

export interface ListTestRuns {
  /** Get all test runs with given filters */
  get(
    options?: LoadTestRunListTestRunsParameters
  ): StreamableMethod<
    LoadTestRunListTestRuns200Response | LoadTestRunListTestRunsDefaultResponse
  >;
}

export interface StopTestRun {
  /** Stop test run by name. */
  post(
    options?: LoadTestRunStopTestRunParameters
  ): StreamableMethod<
    LoadTestRunStopTestRun200Response | LoadTestRunStopTestRunDefaultResponse
  >;
}

export interface ListMetricNamespaces {
  /** List the metric namespaces for a load test run. */
  get(
    options?: LoadTestRunListMetricNamespacesParameters
  ): StreamableMethod<
    | LoadTestRunListMetricNamespaces200Response
    | LoadTestRunListMetricNamespacesDefaultResponse
  >;
}

export interface ListMetricDefinitions {
  /** List the metric definitions for a load test run. */
  get(
    options?: LoadTestRunListMetricDefinitionsParameters
  ): StreamableMethod<
    | LoadTestRunListMetricDefinitions200Response
    | LoadTestRunListMetricDefinitionsDefaultResponse
  >;
}

export interface ListMetrics {
  /** List the metric values for a load test run. */
  post(
    options: LoadTestRunListMetricsParameters
  ): StreamableMethod<
    LoadTestRunListMetrics200Response | LoadTestRunListMetricsDefaultResponse
  >;
}

export interface ListMetricDimensionValues {
  /** List the dimension values for the given metric dimension name. */
  get(
    options: LoadTestRunListMetricDimensionValuesParameters
  ): StreamableMethod<
    | LoadTestRunListMetricDimensionValues200Response
    | LoadTestRunListMetricDimensionValuesDefaultResponse
  >;
}

export interface CreateOrUpdateAppComponents {
  /** Associate an app component (collection of azure resources) to a test run */
  patch(
    options: LoadTestRunCreateOrUpdateAppComponentsParameters
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
    options?: LoadTestRunGetAppComponentsParameters
  ): StreamableMethod<
    | LoadTestRunGetAppComponents200Response
    | LoadTestRunGetAppComponentsDefaultResponse
  >;
}

export interface CreateOrUpdateServerMetricsConfig {
  /** Configure server metrics for a test run */
  patch(
    options: LoadTestRunCreateOrUpdateServerMetricsConfigParameters
  ): StreamableMethod<
    | LoadTestRunCreateOrUpdateServerMetricsConfig200Response
    | LoadTestRunCreateOrUpdateServerMetricsConfig201Response
    | LoadTestRunCreateOrUpdateServerMetricsConfigDefaultResponse
  >;
  /** List server metrics configuration for the given test run. */
  get(
    options?: LoadTestRunGetServerMetricsConfigParameters
  ): StreamableMethod<
    | LoadTestRunGetServerMetricsConfig200Response
    | LoadTestRunGetServerMetricsConfigDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/tests/\{testId\}' has methods for the following verbs: patch, delete, get */
  (path: "/tests/{testId}", testId: string): CreateOrUpdateTest;
  /** Resource for '/tests' has methods for the following verbs: get */
  (path: "/tests"): ListTests;
  /** Resource for '/tests/\{testId\}/files/\{fileName\}' has methods for the following verbs: put, get, delete */
  (
    path: "/tests/{testId}/files/{fileName}",
    testId: string,
    fileName: string
  ): UploadTestFile;
  /** Resource for '/tests/\{testId\}/files' has methods for the following verbs: get */
  (path: "/tests/{testId}/files", testId: string): ListTestFiles;
  /** Resource for '/tests/\{testId\}/app-components' has methods for the following verbs: patch, get */
  (
    path: "/tests/{testId}/app-components",
    testId: string
  ): CreateOrUpdateAppComponents;
  /** Resource for '/tests/\{testId\}/server-metrics-config' has methods for the following verbs: patch, get */
  (
    path: "/tests/{testId}/server-metrics-config",
    testId: string
  ): CreateOrUpdateServerMetricsConfig;
  /** Resource for '/test-runs/\{testRunId\}' has methods for the following verbs: get, patch, delete */
  (path: "/test-runs/{testRunId}", testRunId: string): GetTestRun;
  /** Resource for '/test-runs/\{testRunId\}/files/\{fileName\}' has methods for the following verbs: get */
  (
    path: "/test-runs/{testRunId}/files/{fileName}",
    testRunId: string,
    fileName: string
  ): GetTestRunFile;
  /** Resource for '/test-runs' has methods for the following verbs: get */
  (path: "/test-runs"): ListTestRuns;
  /** Resource for '/test-runs/\{testRunId\}:stop' has methods for the following verbs: post */
  (path: "/test-runs/{testRunId}:stop", testRunId: string): StopTestRun;
  /** Resource for '/test-runs/\{testRunId\}/metric-namespaces' has methods for the following verbs: get */
  (
    path: "/test-runs/{testRunId}/metric-namespaces",
    testRunId: string
  ): ListMetricNamespaces;
  /** Resource for '/test-runs/\{testRunId\}/metric-definitions' has methods for the following verbs: get */
  (
    path: "/test-runs/{testRunId}/metric-definitions",
    testRunId: string
  ): ListMetricDefinitions;
  /** Resource for '/test-runs/\{testRunId\}/metrics' has methods for the following verbs: post */
  (path: "/test-runs/{testRunId}/metrics", testRunId: string): ListMetrics;
  /** Resource for '/test-runs/\{testRunId\}/metric-dimensions/\{name\}/values' has methods for the following verbs: get */
  (
    path: "/test-runs/{testRunId}/metric-dimensions/{name}/values",
    testRunId: string,
    name: string
  ): ListMetricDimensionValues;
  /** Resource for '/test-runs/\{testRunId\}/app-components' has methods for the following verbs: patch, get */
  (
    path: "/test-runs/{testRunId}/app-components",
    testRunId: string
  ): CreateOrUpdateAppComponents;
  /** Resource for '/test-runs/\{testRunId\}/server-metrics-config' has methods for the following verbs: patch, get */
  (
    path: "/test-runs/{testRunId}/server-metrics-config",
    testRunId: string
  ): CreateOrUpdateServerMetricsConfig;
}

export type AzureLoadTestingClient = Client & {
  path: Routes;
};
