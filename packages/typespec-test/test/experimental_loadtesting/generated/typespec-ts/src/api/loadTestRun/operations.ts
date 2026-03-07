// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { LoadTestServiceContext as Client } from "../index.js";
import {
  TestRun,
  testRunSerializer,
  testRunDeserializer,
  TestRunFileInfo,
  testRunFileInfoDeserializer,
  _PagedTestRun,
  _pagedTestRunDeserializer,
  MetricNamespaceCollection,
  metricNamespaceCollectionDeserializer,
  MetricDefinitionCollection,
  metricDefinitionCollectionDeserializer,
  metricRequestPayloadSerializer,
  _Metrics,
  _metricsDeserializer,
  TimeSeriesElement,
  DimensionValueList,
  dimensionValueListDeserializer,
  TestRunAppComponents,
  testRunAppComponentsSerializer,
  testRunAppComponentsDeserializer,
  TestRunServerMetricConfig,
  testRunServerMetricConfigSerializer,
  testRunServerMetricConfigDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
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
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _loadTestRunGetServerMetricsConfigSend(
  context: Client,
  testRunId: string,
  options: LoadTestRunGetServerMetricsConfigOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-runs/{testRunId}/server-metrics-config{?api-version}",
    {
      testRunId: testRunId,
      "api-version": context.apiVersion ?? "2024-05-01-preview",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _loadTestRunGetServerMetricsConfigDeserialize(
  result: PathUncheckedResponse,
): Promise<TestRunServerMetricConfig> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testRunServerMetricConfigDeserializer(result.body);
}

/** Get associated server metrics configuration for the given test run. */
export async function loadTestRunGetServerMetricsConfig(
  context: Client,
  testRunId: string,
  options: LoadTestRunGetServerMetricsConfigOptionalParams = { requestOptions: {} },
): Promise<TestRunServerMetricConfig> {
  const result = await _loadTestRunGetServerMetricsConfigSend(context, testRunId, options);
  return _loadTestRunGetServerMetricsConfigDeserialize(result);
}

export function _loadTestRunCreateOrUpdateServerMetricsConfigSend(
  context: Client,
  testRunId: string,
  body: TestRunServerMetricConfig,
  options: LoadTestRunCreateOrUpdateServerMetricsConfigOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-runs/{testRunId}/server-metrics-config{?api-version}",
    {
      testRunId: testRunId,
      "api-version": context.apiVersion ?? "2024-05-01-preview",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/merge-patch+json",
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: testRunServerMetricConfigSerializer(body),
    });
}

export async function _loadTestRunCreateOrUpdateServerMetricsConfigDeserialize(
  result: PathUncheckedResponse,
): Promise<TestRunServerMetricConfig> {
  const expectedStatuses = ["201", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testRunServerMetricConfigDeserializer(result.body);
}

/** Configure server metrics for a test run */
export async function loadTestRunCreateOrUpdateServerMetricsConfig(
  context: Client,
  testRunId: string,
  body: TestRunServerMetricConfig,
  options: LoadTestRunCreateOrUpdateServerMetricsConfigOptionalParams = { requestOptions: {} },
): Promise<TestRunServerMetricConfig> {
  const result = await _loadTestRunCreateOrUpdateServerMetricsConfigSend(
    context,
    testRunId,
    body,
    options,
  );
  return _loadTestRunCreateOrUpdateServerMetricsConfigDeserialize(result);
}

export function _loadTestRunGetAppComponentsSend(
  context: Client,
  testRunId: string,
  options: LoadTestRunGetAppComponentsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-runs/{testRunId}/app-components{?api-version}",
    {
      testRunId: testRunId,
      "api-version": context.apiVersion ?? "2024-05-01-preview",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _loadTestRunGetAppComponentsDeserialize(
  result: PathUncheckedResponse,
): Promise<TestRunAppComponents> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testRunAppComponentsDeserializer(result.body);
}

/**
 * Get associated app component (collection of azure resources) for the given test
 * run.
 */
export async function loadTestRunGetAppComponents(
  context: Client,
  testRunId: string,
  options: LoadTestRunGetAppComponentsOptionalParams = { requestOptions: {} },
): Promise<TestRunAppComponents> {
  const result = await _loadTestRunGetAppComponentsSend(context, testRunId, options);
  return _loadTestRunGetAppComponentsDeserialize(result);
}

export function _loadTestRunCreateOrUpdateAppComponentsSend(
  context: Client,
  testRunId: string,
  body: TestRunAppComponents,
  options: LoadTestRunCreateOrUpdateAppComponentsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-runs/{testRunId}/app-components{?api-version}",
    {
      testRunId: testRunId,
      "api-version": context.apiVersion ?? "2024-05-01-preview",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/merge-patch+json",
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: testRunAppComponentsSerializer(body),
    });
}

export async function _loadTestRunCreateOrUpdateAppComponentsDeserialize(
  result: PathUncheckedResponse,
): Promise<TestRunAppComponents> {
  const expectedStatuses = ["201", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testRunAppComponentsDeserializer(result.body);
}

/** Add an app component to a test run by providing the resource Id, name and type. */
export async function loadTestRunCreateOrUpdateAppComponents(
  context: Client,
  testRunId: string,
  body: TestRunAppComponents,
  options: LoadTestRunCreateOrUpdateAppComponentsOptionalParams = { requestOptions: {} },
): Promise<TestRunAppComponents> {
  const result = await _loadTestRunCreateOrUpdateAppComponentsSend(
    context,
    testRunId,
    body,
    options,
  );
  return _loadTestRunCreateOrUpdateAppComponentsDeserialize(result);
}

export function _loadTestRunListMetricDimensionValuesSend(
  context: Client,
  testRunId: string,
  name: string,
  metricname: string,
  metricNamespace: string,
  timespan: string,
  options: LoadTestRunListMetricDimensionValuesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-runs/{testRunId}/metric-dimensions/{name}/values{?api-version,metricname,interval,metricNamespace,timespan}",
    {
      testRunId: testRunId,
      name: name,
      "api-version": context.apiVersion ?? "2024-05-01-preview",
      metricname: metricname,
      interval: options?.interval,
      metricNamespace: metricNamespace,
      timespan: timespan,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _loadTestRunListMetricDimensionValuesDeserialize(
  result: PathUncheckedResponse,
): Promise<DimensionValueList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return dimensionValueListDeserializer(result.body);
}

/** List the dimension values for the given metric dimension name. */
export async function loadTestRunListMetricDimensionValues(
  context: Client,
  testRunId: string,
  name: string,
  metricname: string,
  metricNamespace: string,
  timespan: string,
  options: LoadTestRunListMetricDimensionValuesOptionalParams = { requestOptions: {} },
): Promise<DimensionValueList> {
  const result = await _loadTestRunListMetricDimensionValuesSend(
    context,
    testRunId,
    name,
    metricname,
    metricNamespace,
    timespan,
    options,
  );
  return _loadTestRunListMetricDimensionValuesDeserialize(result);
}

export function _loadTestRunListMetricsSend(
  context: Client,
  testRunId: string,
  metricname: string,
  metricNamespace: string,
  timespan: string,
  options: LoadTestRunListMetricsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-runs/{testRunId}/metrics{?api-version,aggregation,metricname,interval,metricNamespace,timespan}",
    {
      testRunId: testRunId,
      "api-version": context.apiVersion ?? "2024-05-01-preview",
      aggregation: options?.aggregation,
      metricname: metricname,
      interval: options?.interval,
      metricNamespace: metricNamespace,
      timespan: timespan,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: !options["body"] ? options["body"] : metricRequestPayloadSerializer(options["body"]),
    });
}

export async function _loadTestRunListMetricsDeserialize(
  result: PathUncheckedResponse,
): Promise<_Metrics> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _metricsDeserializer(result.body);
}

/** List the metric values for a load test run. */
export function loadTestRunListMetrics(
  context: Client,
  testRunId: string,
  metricname: string,
  metricNamespace: string,
  timespan: string,
  options: LoadTestRunListMetricsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<TimeSeriesElement> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _loadTestRunListMetricsSend(
        context,
        testRunId,
        metricname,
        metricNamespace,
        timespan,
        options,
      ),
    _loadTestRunListMetricsDeserialize,
    ["200"],
    {
      itemName: "value",
      nextLinkName: "nextLink",
      apiVersion: context.apiVersion ?? "2024-05-01-preview",
    },
  );
}

export function _loadTestRunListMetricDefinitionsSend(
  context: Client,
  testRunId: string,
  metricNamespace: string,
  options: LoadTestRunListMetricDefinitionsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-runs/{testRunId}/metric-definitions{?api-version,metricNamespace}",
    {
      testRunId: testRunId,
      "api-version": context.apiVersion ?? "2024-05-01-preview",
      metricNamespace: metricNamespace,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _loadTestRunListMetricDefinitionsDeserialize(
  result: PathUncheckedResponse,
): Promise<MetricDefinitionCollection> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return metricDefinitionCollectionDeserializer(result.body);
}

/** List the metric definitions for a load test run. */
export async function loadTestRunListMetricDefinitions(
  context: Client,
  testRunId: string,
  metricNamespace: string,
  options: LoadTestRunListMetricDefinitionsOptionalParams = { requestOptions: {} },
): Promise<MetricDefinitionCollection> {
  const result = await _loadTestRunListMetricDefinitionsSend(
    context,
    testRunId,
    metricNamespace,
    options,
  );
  return _loadTestRunListMetricDefinitionsDeserialize(result);
}

export function _loadTestRunListMetricNamespacesSend(
  context: Client,
  testRunId: string,
  options: LoadTestRunListMetricNamespacesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-runs/{testRunId}/metric-namespaces{?api-version}",
    {
      testRunId: testRunId,
      "api-version": context.apiVersion ?? "2024-05-01-preview",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _loadTestRunListMetricNamespacesDeserialize(
  result: PathUncheckedResponse,
): Promise<MetricNamespaceCollection> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return metricNamespaceCollectionDeserializer(result.body);
}

/** List the metric namespaces for a load test run. */
export async function loadTestRunListMetricNamespaces(
  context: Client,
  testRunId: string,
  options: LoadTestRunListMetricNamespacesOptionalParams = { requestOptions: {} },
): Promise<MetricNamespaceCollection> {
  const result = await _loadTestRunListMetricNamespacesSend(context, testRunId, options);
  return _loadTestRunListMetricNamespacesDeserialize(result);
}

export function _loadTestRunStopSend(
  context: Client,
  testRunId: string,
  options: LoadTestRunStopOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-runs/{testRunId}:stop{?api-version}",
    {
      testRunId: testRunId,
      "api-version": context.apiVersion ?? "2024-05-01-preview",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _loadTestRunStopDeserialize(result: PathUncheckedResponse): Promise<TestRun> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testRunDeserializer(result.body);
}

/** Stop test run by test run Id. */
export async function loadTestRunStop(
  context: Client,
  testRunId: string,
  options: LoadTestRunStopOptionalParams = { requestOptions: {} },
): Promise<TestRun> {
  const result = await _loadTestRunStopSend(context, testRunId, options);
  return _loadTestRunStopDeserialize(result);
}

export function _loadTestRunGetTestRunFileSend(
  context: Client,
  testRunId: string,
  fileName: string,
  options: LoadTestRunGetTestRunFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-runs/{testRunId}/files/{fileName}{?api-version}",
    {
      testRunId: testRunId,
      fileName: fileName,
      "api-version": context.apiVersion ?? "2024-05-01-preview",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _loadTestRunGetTestRunFileDeserialize(
  result: PathUncheckedResponse,
): Promise<TestRunFileInfo> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testRunFileInfoDeserializer(result.body);
}

/** Get test run file by file name. */
export async function loadTestRunGetTestRunFile(
  context: Client,
  testRunId: string,
  fileName: string,
  options: LoadTestRunGetTestRunFileOptionalParams = { requestOptions: {} },
): Promise<TestRunFileInfo> {
  const result = await _loadTestRunGetTestRunFileSend(context, testRunId, fileName, options);
  return _loadTestRunGetTestRunFileDeserialize(result);
}

export function _loadTestRunListTestRunsSend(
  context: Client,
  options: LoadTestRunListTestRunsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-runs{?api-version,orderby,search,testId,executionFrom,executionTo,status,maxpagesize}",
    {
      "api-version": context.apiVersion ?? "2024-05-01-preview",
      orderby: options?.orderby,
      search: options?.search,
      testId: options?.testId,
      executionFrom: !options?.executionFrom
        ? options?.executionFrom
        : options?.executionFrom.toISOString(),
      executionTo: !options?.executionTo
        ? options?.executionTo
        : options?.executionTo.toISOString(),
      status: options?.status,
      maxpagesize: options?.maxpagesize,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _loadTestRunListTestRunsDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedTestRun> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _pagedTestRunDeserializer(result.body);
}

/** Get all test runs for the given filters. */
export function loadTestRunListTestRuns(
  context: Client,
  options: LoadTestRunListTestRunsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<TestRun> {
  return buildPagedAsyncIterator(
    context,
    () => _loadTestRunListTestRunsSend(context, options),
    _loadTestRunListTestRunsDeserialize,
    ["200"],
    {
      itemName: "value",
      nextLinkName: "nextLink",
      apiVersion: context.apiVersion ?? "2024-05-01-preview",
    },
  );
}

export function _loadTestRunDeleteTestRunSend(
  context: Client,
  testRunId: string,
  options: LoadTestRunDeleteTestRunOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-runs/{testRunId}{?api-version}",
    {
      testRunId: testRunId,
      "api-version": context.apiVersion ?? "2024-05-01-preview",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _loadTestRunDeleteTestRunDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete an existing load test run by providing the testRunId. */
export async function loadTestRunDeleteTestRun(
  context: Client,
  testRunId: string,
  options: LoadTestRunDeleteTestRunOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _loadTestRunDeleteTestRunSend(context, testRunId, options);
  return _loadTestRunDeleteTestRunDeserialize(result);
}

export function _loadTestRunCreateOrUpdateTestRunSend(
  context: Client,
  testRunId: string,
  body: TestRun,
  options: LoadTestRunCreateOrUpdateTestRunOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-runs/{testRunId}{?api-version,oldTestRunId}",
    {
      testRunId: testRunId,
      "api-version": context.apiVersion ?? "2024-05-01-preview",
      oldTestRunId: options?.oldTestRunId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/merge-patch+json",
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: testRunSerializer(body),
    });
}

export async function _loadTestRunCreateOrUpdateTestRunDeserialize(
  result: PathUncheckedResponse,
): Promise<TestRun> {
  const expectedStatuses = ["201", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testRunDeserializer(result.body);
}

/** Create and start a new test run with the given test run Id. */
export async function loadTestRunCreateOrUpdateTestRun(
  context: Client,
  testRunId: string,
  body: TestRun,
  options: LoadTestRunCreateOrUpdateTestRunOptionalParams = { requestOptions: {} },
): Promise<TestRun> {
  const result = await _loadTestRunCreateOrUpdateTestRunSend(context, testRunId, body, options);
  return _loadTestRunCreateOrUpdateTestRunDeserialize(result);
}

export function _loadTestRunGetTestRunSend(
  context: Client,
  testRunId: string,
  options: LoadTestRunGetTestRunOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-runs/{testRunId}{?api-version}",
    {
      testRunId: testRunId,
      "api-version": context.apiVersion ?? "2024-05-01-preview",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _loadTestRunGetTestRunDeserialize(
  result: PathUncheckedResponse,
): Promise<TestRun> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testRunDeserializer(result.body);
}

/** Get test run details by test run Id. */
export async function loadTestRunGetTestRun(
  context: Client,
  testRunId: string,
  options: LoadTestRunGetTestRunOptionalParams = { requestOptions: {} },
): Promise<TestRun> {
  const result = await _loadTestRunGetTestRunSend(context, testRunId, options);
  return _loadTestRunGetTestRunDeserialize(result);
}
