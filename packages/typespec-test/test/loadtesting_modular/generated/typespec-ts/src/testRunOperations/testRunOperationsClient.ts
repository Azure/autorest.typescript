// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { PollerLike, OperationState } from "@azure/core-lro";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  FileInfo,
  TestRun,
  TestRunAppComponents,
  TestRunServerMetricConfig,
  DimensionValueList,
  MetricDefinitionCollection,
  MetricNamespaceCollection,
  MetricRequestPayload,
  TimeSeriesElement,
} from "./../models/models.js";
import {
  TestRunOptionalParams,
  CreateOrUpdateAppComponentsOptionalParams,
  CreateOrUpdateServerMetricsConfigOptionalParams,
  DeleteTestRunOptionalParams,
  GetAppComponentsOptionalParams,
  GetServerMetricsConfigOptionalParams,
  GetTestRunOptionalParams,
  GetTestRunFileOptionalParams,
  ListMetricDimensionValuesOptionalParams,
  ListMetricDefinitionsOptionalParams,
  ListMetricNamespacesOptionalParams,
  ListMetricsOptionalParams,
  ListTestRunsOptionalParams,
  StopTestRunOptionalParams,
} from "./models/options.js";
import { PagedAsyncIterableIterator } from "./models/pagingTypes.js";
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
  createTestRunOperations,
  TestRunOperationsClientOptions,
  AzureLoadTestingContext,
} from "./api/index.js";

export { TestRunOperationsClientOptions } from "./api/testRunOperationsContext.js";

export class TestRunOperationsClient {
  private _client: AzureLoadTestingContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: TokenCredential,
    options: TestRunOperationsClientOptions = {},
  ) {
    this._client = createTestRunOperations(endpointParam, credential, options);
    this.pipeline = this._client.pipeline;
  }

  /** Create and start a new test run with the given name. */
  testRun(
    testRunId: string,
    resource: TestRun,
    options: TestRunOptionalParams = { requestOptions: {} },
  ): PollerLike<OperationState<TestRun>, TestRun> {
    return testRun(this._client, testRunId, resource, options);
  }

  /** Associate an app component (collection of azure resources) to a test run */
  createOrUpdateAppComponents(
    testRunId: string,
    body: TestRunAppComponents,
    options: CreateOrUpdateAppComponentsOptionalParams = { requestOptions: {} },
  ): Promise<TestRunAppComponents> {
    return createOrUpdateAppComponents(this._client, testRunId, body, options);
  }

  /** Configure server metrics for a test run */
  createOrUpdateServerMetricsConfig(
    testRunId: string,
    body: TestRunServerMetricConfig,
    options: CreateOrUpdateServerMetricsConfigOptionalParams = {
      requestOptions: {},
    },
  ): Promise<TestRunServerMetricConfig> {
    return createOrUpdateServerMetricsConfig(
      this._client,
      testRunId,
      body,
      options,
    );
  }

  /** Delete a test run by its name. */
  deleteTestRun(
    testRunId: string,
    options: DeleteTestRunOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return deleteTestRun(this._client, testRunId, options);
  }

  /**
   * Get associated app component (collection of azure resources) for the given test
   * run.
   */
  getAppComponents(
    testRunId: string,
    options: GetAppComponentsOptionalParams = { requestOptions: {} },
  ): Promise<TestRunAppComponents> {
    return getAppComponents(this._client, testRunId, options);
  }

  /** List server metrics configuration for the given test run. */
  getServerMetricsConfig(
    testRunId: string,
    options: GetServerMetricsConfigOptionalParams = { requestOptions: {} },
  ): Promise<TestRunServerMetricConfig> {
    return getServerMetricsConfig(this._client, testRunId, options);
  }

  /** Get test run details by name. */
  getTestRun(
    testRunId: string,
    options: GetTestRunOptionalParams = { requestOptions: {} },
  ): Promise<TestRun> {
    return getTestRun(this._client, testRunId, options);
  }

  /** Get test run file by file name. */
  getTestRunFile(
    testRunId: string,
    fileName: string,
    options: GetTestRunFileOptionalParams = { requestOptions: {} },
  ): Promise<FileInfo> {
    return getTestRunFile(this._client, testRunId, fileName, options);
  }

  /** List the dimension values for the given metric dimension name. */
  listMetricDimensionValues(
    testRunId: string,
    name: string,
    metricNamespace: string,
    options: ListMetricDimensionValuesOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<DimensionValueList> {
    return listMetricDimensionValues(
      this._client,
      testRunId,
      name,
      metricNamespace,
      options,
    );
  }

  /** List the metric definitions for a load test run. */
  listMetricDefinitions(
    testRunId: string,
    options: ListMetricDefinitionsOptionalParams = { requestOptions: {} },
  ): Promise<MetricDefinitionCollection> {
    return listMetricDefinitions(this._client, testRunId, options);
  }

  /** List the metric namespaces for a load test run. */
  listMetricNamespaces(
    testRunId: string,
    options: ListMetricNamespacesOptionalParams = { requestOptions: {} },
  ): Promise<MetricNamespaceCollection> {
    return listMetricNamespaces(this._client, testRunId, options);
  }

  /** List the metric values for a load test run. */
  listMetrics(
    testRunId: string,
    body: MetricRequestPayload,
    options: ListMetricsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<TimeSeriesElement> {
    return listMetrics(this._client, testRunId, body, options);
  }

  /** Get all test runs with given filters */
  listTestRuns(
    options: ListTestRunsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<TestRun> {
    return listTestRuns(this._client, options);
  }

  /** Stop test run by name. */
  stopTestRun(
    testRunId: string,
    options: StopTestRunOptionalParams = { requestOptions: {} },
  ): Promise<TestRun> {
    return stopTestRun(this._client, testRunId, options);
  }
}
