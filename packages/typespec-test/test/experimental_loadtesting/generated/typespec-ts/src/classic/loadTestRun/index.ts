// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { LoadTestServiceContext } from "../../api/loadTestServiceContext.js";
import {
  loadTestRunGetServerMetricsConfig,
  loadTestRunCreateOrUpdateServerMetricsConfig,
  loadTestRunGetAppComponents,
  loadTestRunCreateOrUpdateAppComponents,
  loadTestRunListMetricDimensionValues,
  loadTestRunListMetrics,
  loadTestRunListMetricDefinitions,
  loadTestRunListMetricNamespaces,
  loadTestRunStop,
  loadTestRunGetTestRunFile,
  loadTestRunListTestRuns,
  loadTestRunDeleteTestRun,
  loadTestRunCreateOrUpdateTestRun,
  loadTestRunGetTestRun,
} from "../../api/loadTestRun/operations.js";
import {
  LoadTestRunGetServerMetricsConfigOptionalParams,
  LoadTestRunCreateOrUpdateServerMetricsConfigOptionalParams,
  LoadTestRunGetAppComponentsOptionalParams,
  LoadTestRunCreateOrUpdateAppComponentsOptionalParams,
  LoadTestRunListMetricDimensionValuesOptionalParams,
  LoadTestRunListMetricsOptionalParams,
  LoadTestRunListMetricDefinitionsOptionalParams,
  LoadTestRunListMetricNamespacesOptionalParams,
  LoadTestRunStopOptionalParams,
  LoadTestRunGetTestRunFileOptionalParams,
  LoadTestRunListTestRunsOptionalParams,
  LoadTestRunDeleteTestRunOptionalParams,
  LoadTestRunCreateOrUpdateTestRunOptionalParams,
  LoadTestRunGetTestRunOptionalParams,
} from "../../api/loadTestRun/options.js";
import {
  TestRun,
  TestRunFileInfo,
  MetricNamespaceCollection,
  MetricDefinitionCollection,
  TimeSeriesElement,
  DimensionValueList,
  TestRunAppComponents,
  TestRunServerMetricConfig,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a LoadTestRun operations. */
export interface LoadTestRunOperations {
  /** Get associated server metrics configuration for the given test run. */
  getServerMetricsConfig: (
    testRunId: string,
    options?: LoadTestRunGetServerMetricsConfigOptionalParams,
  ) => Promise<TestRunServerMetricConfig>;
  /** Configure server metrics for a test run */
  createOrUpdateServerMetricsConfig: (
    testRunId: string,
    body: TestRunServerMetricConfig,
    options?: LoadTestRunCreateOrUpdateServerMetricsConfigOptionalParams,
  ) => Promise<TestRunServerMetricConfig>;
  /**
   * Get associated app component (collection of azure resources) for the given test
   * run.
   */
  getAppComponents: (
    testRunId: string,
    options?: LoadTestRunGetAppComponentsOptionalParams,
  ) => Promise<TestRunAppComponents>;
  /** Add an app component to a test run by providing the resource Id, name and type. */
  createOrUpdateAppComponents: (
    testRunId: string,
    body: TestRunAppComponents,
    options?: LoadTestRunCreateOrUpdateAppComponentsOptionalParams,
  ) => Promise<TestRunAppComponents>;
  /** List the dimension values for the given metric dimension name. */
  listMetricDimensionValues: (
    testRunId: string,
    name: string,
    metricname: string,
    metricNamespace: string,
    timespan: string,
    options?: LoadTestRunListMetricDimensionValuesOptionalParams,
  ) => Promise<DimensionValueList>;
  /** List the metric values for a load test run. */
  listMetrics: (
    testRunId: string,
    metricname: string,
    metricNamespace: string,
    timespan: string,
    options?: LoadTestRunListMetricsOptionalParams,
  ) => PagedAsyncIterableIterator<TimeSeriesElement>;
  /** List the metric definitions for a load test run. */
  listMetricDefinitions: (
    testRunId: string,
    metricNamespace: string,
    options?: LoadTestRunListMetricDefinitionsOptionalParams,
  ) => Promise<MetricDefinitionCollection>;
  /** List the metric namespaces for a load test run. */
  listMetricNamespaces: (
    testRunId: string,
    options?: LoadTestRunListMetricNamespacesOptionalParams,
  ) => Promise<MetricNamespaceCollection>;
  /** Stop test run by test run Id. */
  stop: (testRunId: string, options?: LoadTestRunStopOptionalParams) => Promise<TestRun>;
  /** Get test run file by file name. */
  getTestRunFile: (
    testRunId: string,
    fileName: string,
    options?: LoadTestRunGetTestRunFileOptionalParams,
  ) => Promise<TestRunFileInfo>;
  /** Get all test runs for the given filters. */
  listTestRuns: (
    options?: LoadTestRunListTestRunsOptionalParams,
  ) => PagedAsyncIterableIterator<TestRun>;
  /** Delete an existing load test run by providing the testRunId. */
  deleteTestRun: (
    testRunId: string,
    options?: LoadTestRunDeleteTestRunOptionalParams,
  ) => Promise<void>;
  /** Create and start a new test run with the given test run Id. */
  createOrUpdateTestRun: (
    testRunId: string,
    body: TestRun,
    options?: LoadTestRunCreateOrUpdateTestRunOptionalParams,
  ) => Promise<TestRun>;
  /** Get test run details by test run Id. */
  getTestRun: (
    testRunId: string,
    options?: LoadTestRunGetTestRunOptionalParams,
  ) => Promise<TestRun>;
}

function _getLoadTestRun(context: LoadTestServiceContext) {
  return {
    getServerMetricsConfig: (
      testRunId: string,
      options?: LoadTestRunGetServerMetricsConfigOptionalParams,
    ) => loadTestRunGetServerMetricsConfig(context, testRunId, options),
    createOrUpdateServerMetricsConfig: (
      testRunId: string,
      body: TestRunServerMetricConfig,
      options?: LoadTestRunCreateOrUpdateServerMetricsConfigOptionalParams,
    ) => loadTestRunCreateOrUpdateServerMetricsConfig(context, testRunId, body, options),
    getAppComponents: (testRunId: string, options?: LoadTestRunGetAppComponentsOptionalParams) =>
      loadTestRunGetAppComponents(context, testRunId, options),
    createOrUpdateAppComponents: (
      testRunId: string,
      body: TestRunAppComponents,
      options?: LoadTestRunCreateOrUpdateAppComponentsOptionalParams,
    ) => loadTestRunCreateOrUpdateAppComponents(context, testRunId, body, options),
    listMetricDimensionValues: (
      testRunId: string,
      name: string,
      metricname: string,
      metricNamespace: string,
      timespan: string,
      options?: LoadTestRunListMetricDimensionValuesOptionalParams,
    ) =>
      loadTestRunListMetricDimensionValues(
        context,
        testRunId,
        name,
        metricname,
        metricNamespace,
        timespan,
        options,
      ),
    listMetrics: (
      testRunId: string,
      metricname: string,
      metricNamespace: string,
      timespan: string,
      options?: LoadTestRunListMetricsOptionalParams,
    ) => loadTestRunListMetrics(context, testRunId, metricname, metricNamespace, timespan, options),
    listMetricDefinitions: (
      testRunId: string,
      metricNamespace: string,
      options?: LoadTestRunListMetricDefinitionsOptionalParams,
    ) => loadTestRunListMetricDefinitions(context, testRunId, metricNamespace, options),
    listMetricNamespaces: (
      testRunId: string,
      options?: LoadTestRunListMetricNamespacesOptionalParams,
    ) => loadTestRunListMetricNamespaces(context, testRunId, options),
    stop: (testRunId: string, options?: LoadTestRunStopOptionalParams) =>
      loadTestRunStop(context, testRunId, options),
    getTestRunFile: (
      testRunId: string,
      fileName: string,
      options?: LoadTestRunGetTestRunFileOptionalParams,
    ) => loadTestRunGetTestRunFile(context, testRunId, fileName, options),
    listTestRuns: (options?: LoadTestRunListTestRunsOptionalParams) =>
      loadTestRunListTestRuns(context, options),
    deleteTestRun: (testRunId: string, options?: LoadTestRunDeleteTestRunOptionalParams) =>
      loadTestRunDeleteTestRun(context, testRunId, options),
    createOrUpdateTestRun: (
      testRunId: string,
      body: TestRun,
      options?: LoadTestRunCreateOrUpdateTestRunOptionalParams,
    ) => loadTestRunCreateOrUpdateTestRun(context, testRunId, body, options),
    getTestRun: (testRunId: string, options?: LoadTestRunGetTestRunOptionalParams) =>
      loadTestRunGetTestRun(context, testRunId, options),
  };
}

export function _getLoadTestRunOperations(context: LoadTestServiceContext): LoadTestRunOperations {
  return {
    ..._getLoadTestRun(context),
  };
}
