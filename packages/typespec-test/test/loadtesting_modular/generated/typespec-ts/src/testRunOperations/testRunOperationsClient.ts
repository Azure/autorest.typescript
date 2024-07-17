// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  TestRun,
  TestRunFileInfo,
  TestRunAppComponents,
  TestRunServerMetricConfig,
  DimensionValueList,
  MetricDefinitionCollection,
  MetricNamespaceCollection,
  MetricRequestPayload,
  TimeSeriesElement,
} from "./models/models.js";
import {
  CreateOrUpdateTestRunOptionalParams,
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
  StopOptionalParams,
} from "./models/options.js";
import { PagedAsyncIterableIterator } from "./models/pagingTypes.js";
import {
  createOrUpdateTestRun,
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
  stop,
  createTestRunOperations,
  TestRunOperationsClientOptionalParams,
  LoadTestServiceContext,
} from "./api/index.js";

export { TestRunOperationsClientOptionalParams } from "./api/testRunOperationsContext.js";

export class TestRunOperationsClient {
  private _client: LoadTestServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: TokenCredential,
    options: TestRunOperationsClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createTestRunOperations(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Create and start a new test run with the given test run Id. */
  createOrUpdateTestRun(
    testRunId: string,
    body: TestRun,
    options: CreateOrUpdateTestRunOptionalParams = { requestOptions: {} },
  ): Promise<TestRun> {
    return createOrUpdateTestRun(this._client, testRunId, body, options);
  }

  /** Add an app component to a test run by providing the resource Id, name and type. */
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

  /** Delete an existing load test run by providing the testRunId. */
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

  /** Get associated server metrics configuration for the given test run. */
  getServerMetricsConfig(
    testRunId: string,
    options: GetServerMetricsConfigOptionalParams = { requestOptions: {} },
  ): Promise<TestRunServerMetricConfig> {
    return getServerMetricsConfig(this._client, testRunId, options);
  }

  /** Get test run details by test run Id. */
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
  ): Promise<TestRunFileInfo> {
    return getTestRunFile(this._client, testRunId, fileName, options);
  }

  /** List the dimension values for the given metric dimension name. */
  listMetricDimensionValues(
    testRunId: string,
    name: string,
    metricname: string,
    metricNamespace: string,
    timespan: string,
    options: ListMetricDimensionValuesOptionalParams = { requestOptions: {} },
  ): Promise<DimensionValueList> {
    return listMetricDimensionValues(
      this._client,
      testRunId,
      name,
      metricname,
      metricNamespace,
      timespan,
      options,
    );
  }

  /** List the metric definitions for a load test run. */
  listMetricDefinitions(
    testRunId: string,
    metricNamespace: string,
    options: ListMetricDefinitionsOptionalParams = { requestOptions: {} },
  ): Promise<MetricDefinitionCollection> {
    return listMetricDefinitions(
      this._client,
      testRunId,
      metricNamespace,
      options,
    );
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
    metricname: string,
    metricNamespace: string,
    timespan: string,
    body?: MetricRequestPayload,
    options: ListMetricsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<TimeSeriesElement> {
    return listMetrics(
      this._client,
      testRunId,
      metricname,
      metricNamespace,
      timespan,
      body,
      options,
    );
  }

  /** Get all test runs for the given filters. */
  listTestRuns(
    options: ListTestRunsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<TestRun> {
    return listTestRuns(this._client, options);
  }

  /** Stop test run by test run Id. */
  stop(
    testRunId: string,
    options: StopOptionalParams = { requestOptions: {} },
  ): Promise<TestRun> {
    return stop(this._client, testRunId, options);
  }
}
