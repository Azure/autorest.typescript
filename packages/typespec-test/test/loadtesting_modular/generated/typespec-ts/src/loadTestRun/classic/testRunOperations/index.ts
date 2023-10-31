// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AzureLoadTestingContext } from "../../api/LoadTestRunContext.js";
import {
  FileInfo,
  TestRun,
  TestRunAppComponents,
  TestRunServerMetricConfig,
  MetricDefinitionCollection,
  MetricNamespaceCollection,
  MetricRequestPayload,
  PagedTimeSeriesElement,
  PagedTestRun,
  PagedDimensionValueList,
} from "../../models/models.js";
import {
  testRun,
  createOrUpdateAppComponents,
  createOrUpdateServerMetricsConfig,
  deleteTestRun,
  getAppComponents,
  getServerMetricsConfig,
  getTestRun,
  getTestRunFile,
  listMetricDimensionValues,
  listMetricDefinitions,
  listMetricNamespaces,
  listMetrics,
  listTestRuns,
  stopTestRun,
} from "../../api/testRunOperations/index.js";
import {
  TestRunOperationsTestRunOptions,
  TestRunOperationsCreateOrUpdateAppComponentsOptions,
  TestRunOperationsCreateOrUpdateServerMetricsConfigOptions,
  TestRunOperationsDeleteTestRunOptions,
  TestRunOperationsGetAppComponentsOptions,
  TestRunOperationsGetServerMetricsConfigOptions,
  TestRunOperationsGetTestRunOptions,
  TestRunOperationsGetTestRunFileOptions,
  TestRunOperationsListMetricDimensionValuesOptions,
  TestRunOperationsListMetricDefinitionsOptions,
  TestRunOperationsListMetricNamespacesOptions,
  TestRunOperationsListMetricsOptions,
  TestRunOperationsListTestRunsOptions,
  TestRunOperationsStopTestRunOptions,
} from "../../models/options.js";

export interface TestRunOperationsOperations {
  testRun: (
    testRunId: string,
    resource: TestRun,
    options?: TestRunOperationsTestRunOptions
  ) => Promise<TestRun>;
  createOrUpdateAppComponents: (
    testRunId: string,
    body: TestRunAppComponents,
    options?: TestRunOperationsCreateOrUpdateAppComponentsOptions
  ) => Promise<TestRunAppComponents>;
  createOrUpdateServerMetricsConfig: (
    testRunId: string,
    body: TestRunServerMetricConfig,
    options?: TestRunOperationsCreateOrUpdateServerMetricsConfigOptions
  ) => Promise<TestRunServerMetricConfig>;
  deleteTestRun: (
    testRunId: string,
    options?: TestRunOperationsDeleteTestRunOptions
  ) => Promise<void>;
  getAppComponents: (
    testRunId: string,
    options?: TestRunOperationsGetAppComponentsOptions
  ) => Promise<TestRunAppComponents>;
  getServerMetricsConfig: (
    testRunId: string,
    options?: TestRunOperationsGetServerMetricsConfigOptions
  ) => Promise<TestRunServerMetricConfig>;
  getTestRun: (
    testRunId: string,
    options?: TestRunOperationsGetTestRunOptions
  ) => Promise<TestRun>;
  getTestRunFile: (
    testRunId: string,
    fileName: string,
    options?: TestRunOperationsGetTestRunFileOptions
  ) => Promise<FileInfo>;
  listMetricDimensionValues: (
    testRunId: string,
    name: string,
    metricNamespace: string,
    options?: TestRunOperationsListMetricDimensionValuesOptions
  ) => Promise<PagedDimensionValueList>;
  listMetricDefinitions: (
    testRunId: string,
    options?: TestRunOperationsListMetricDefinitionsOptions
  ) => Promise<MetricDefinitionCollection>;
  listMetricNamespaces: (
    testRunId: string,
    options?: TestRunOperationsListMetricNamespacesOptions
  ) => Promise<MetricNamespaceCollection>;
  listMetrics: (
    testRunId: string,
    body: MetricRequestPayload,
    options?: TestRunOperationsListMetricsOptions
  ) => Promise<PagedTimeSeriesElement>;
  listTestRuns: (
    options?: TestRunOperationsListTestRunsOptions
  ) => Promise<PagedTestRun>;
  stopTestRun: (
    testRunId: string,
    options?: TestRunOperationsStopTestRunOptions
  ) => Promise<TestRun>;
}

export function getTestRunOperations(context: AzureLoadTestingContext) {
  return {
    testRun: (
      testRunId: string,
      resource: TestRun,
      options?: TestRunOperationsTestRunOptions
    ) => testRun(context, testRunId, resource, options),
    createOrUpdateAppComponents: (
      testRunId: string,
      body: TestRunAppComponents,
      options?: TestRunOperationsCreateOrUpdateAppComponentsOptions
    ) => createOrUpdateAppComponents(context, testRunId, body, options),
    createOrUpdateServerMetricsConfig: (
      testRunId: string,
      body: TestRunServerMetricConfig,
      options?: TestRunOperationsCreateOrUpdateServerMetricsConfigOptions
    ) => createOrUpdateServerMetricsConfig(context, testRunId, body, options),
    deleteTestRun: (
      testRunId: string,
      options?: TestRunOperationsDeleteTestRunOptions
    ) => deleteTestRun(context, testRunId, options),
    getAppComponents: (
      testRunId: string,
      options?: TestRunOperationsGetAppComponentsOptions
    ) => getAppComponents(context, testRunId, options),
    getServerMetricsConfig: (
      testRunId: string,
      options?: TestRunOperationsGetServerMetricsConfigOptions
    ) => getServerMetricsConfig(context, testRunId, options),
    getTestRun: (
      testRunId: string,
      options?: TestRunOperationsGetTestRunOptions
    ) => getTestRun(context, testRunId, options),
    getTestRunFile: (
      testRunId: string,
      fileName: string,
      options?: TestRunOperationsGetTestRunFileOptions
    ) => getTestRunFile(context, testRunId, fileName, options),
    listMetricDimensionValues: (
      testRunId: string,
      name: string,
      metricNamespace: string,
      options?: TestRunOperationsListMetricDimensionValuesOptions
    ) =>
      listMetricDimensionValues(
        context,
        testRunId,
        name,
        metricNamespace,
        options
      ),
    listMetricDefinitions: (
      testRunId: string,
      options?: TestRunOperationsListMetricDefinitionsOptions
    ) => listMetricDefinitions(context, testRunId, options),
    listMetricNamespaces: (
      testRunId: string,
      options?: TestRunOperationsListMetricNamespacesOptions
    ) => listMetricNamespaces(context, testRunId, options),
    listMetrics: (
      testRunId: string,
      body: MetricRequestPayload,
      options?: TestRunOperationsListMetricsOptions
    ) => listMetrics(context, testRunId, body, options),
    listTestRuns: (options?: TestRunOperationsListTestRunsOptions) =>
      listTestRuns(context, options),
    stopTestRun: (
      testRunId: string,
      options?: TestRunOperationsStopTestRunOptions
    ) => stopTestRun(context, testRunId, options),
  };
}

export function getTestRunOperationsOperations(
  context: AzureLoadTestingContext
): TestRunOperationsOperations {
  return {
    ...getTestRunOperations(context),
  };
}
