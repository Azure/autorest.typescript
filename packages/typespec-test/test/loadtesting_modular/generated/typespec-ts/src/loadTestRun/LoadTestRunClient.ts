// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import {
  CreateOrUpdateAppComponentsOptions,
  CreateOrUpdateServerMetricsConfigOptions,
  GetAppComponentsOptions,
  GetServerMetricsConfigOptions,
} from "../models/index.js";
import {
  createLoadTestRun,
  LoadTestRunClientOptions,
  AzureLoadTestingContext,
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
} from "./api/index.js";
import {
  FileInfo,
  AppComponent,
  TestRun,
  TestRunAppComponents,
  TestRunServerMetricConfig,
  MetricDefinitionCollection,
  MetricNamespaceCollection,
  Metrics,
  TestRunsList,
  CustomPage,
} from "./models/models.js";
import {
  TestRunOptions,
  DeleteTestRunOptions,
  GetTestRunOptions,
  GetTestRunFileOptions,
  ListMetricDimensionValuesOptions,
  ListMetricDefinitionsOptions,
  ListMetricNamespacesOptions,
  ListMetricsOptions,
  ListTestRunsOptions,
  StopTestRunOptions,
} from "./models/options.js";

export class LoadTestRunClient {
  private _client: AzureLoadTestingContext;

  /** */
  constructor(
    endpoint: string,
    credential: TokenCredential,
    options: LoadTestRunClientOptions = {}
  ) {
    this._client = createLoadTestRun(endpoint, credential, options);
  }

  /** Create and start a new test run with the given name. */
  testRun(
    testRunId: string,
    options: TestRunOptions = { requestOptions: {} }
  ): Promise<TestRun> {
    return testRun(this._client, testRunId, options);
  }

  /** Associate an app component (collection of azure resources) to a test run */
  createOrUpdateAppComponents(
    components: Record<string, AppComponent>,
    testRunId: string,
    options: CreateOrUpdateAppComponentsOptions = { requestOptions: {} }
  ): Promise<TestRunAppComponents> {
    return createOrUpdateAppComponents(
      this._client,
      components,
      testRunId,
      options
    );
  }

  /** Configure server metrics for a test run */
  createOrUpdateServerMetricsConfig(
    testRunId: string,
    options: CreateOrUpdateServerMetricsConfigOptions = { requestOptions: {} }
  ): Promise<TestRunServerMetricConfig> {
    return createOrUpdateServerMetricsConfig(this._client, testRunId, options);
  }

  /** Delete a test run by its name. */
  deleteTestRun(
    testRunId: string,
    options: DeleteTestRunOptions = { requestOptions: {} }
  ): Promise<void> {
    return deleteTestRun(this._client, testRunId, options);
  }

  /**
   * Get associated app component (collection of azure resources) for the given test
   * run.
   */
  getAppComponents(
    testRunId: string,
    options: GetAppComponentsOptions = { requestOptions: {} }
  ): Promise<TestRunAppComponents> {
    return getAppComponents(this._client, testRunId, options);
  }

  /** List server metrics configuration for the given test run. */
  getServerMetricsConfig(
    testRunId: string,
    options: GetServerMetricsConfigOptions = { requestOptions: {} }
  ): Promise<TestRunServerMetricConfig> {
    return getServerMetricsConfig(this._client, testRunId, options);
  }

  /** Get test run details by name. */
  getTestRun(
    testRunId: string,
    options: GetTestRunOptions = { requestOptions: {} }
  ): Promise<TestRun> {
    return getTestRun(this._client, testRunId, options);
  }

  /** Get test run file by file name. */
  getTestRunFile(
    testRunId: string,
    fileName: string,
    options: GetTestRunFileOptions = { requestOptions: {} }
  ): Promise<FileInfo> {
    return getTestRunFile(this._client, testRunId, fileName, options);
  }

  /** List the dimension values for the given metric dimension name. */
  listMetricDimensionValues(
    testRunId: string,
    name: string,
    metricNamespace: string,
    options: ListMetricDimensionValuesOptions = { requestOptions: {} }
  ): Promise<CustomPage> {
    return listMetricDimensionValues(
      this._client,
      testRunId,
      name,
      metricNamespace,
      options
    );
  }

  /** List the metric definitions for a load test run. */
  listMetricDefinitions(
    testRunId: string,
    options: ListMetricDefinitionsOptions = { requestOptions: {} }
  ): Promise<MetricDefinitionCollection> {
    return listMetricDefinitions(this._client, testRunId, options);
  }

  /** List the metric namespaces for a load test run. */
  listMetricNamespaces(
    testRunId: string,
    options: ListMetricNamespacesOptions = { requestOptions: {} }
  ): Promise<MetricNamespaceCollection> {
    return listMetricNamespaces(this._client, testRunId, options);
  }

  /** List the metric values for a load test run. */
  listMetrics(
    testRunId: string,
    options: ListMetricsOptions = { requestOptions: {} }
  ): Promise<Metrics> {
    return listMetrics(this._client, testRunId, options);
  }

  /** Get all test runs with given filters */
  listTestRuns(
    options: ListTestRunsOptions = { requestOptions: {} }
  ): Promise<TestRunsList> {
    return listTestRuns(this._client, options);
  }

  /** Stop test run by name. */
  stopTestRun(
    testRunId: string,
    options: StopTestRunOptions = { requestOptions: {} }
  ): Promise<TestRun> {
    return stopTestRun(this._client, testRunId, options);
  }
}
