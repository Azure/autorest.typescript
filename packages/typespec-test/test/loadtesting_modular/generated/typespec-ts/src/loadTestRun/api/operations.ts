// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { LoadTestRunContext as Client } from "./index.js";
import {
  TestRun,
  testRunSerializer,
  testRunDeserializer,
  TestRunFileInfo,
  testRunFileInfoDeserializer,
  TestRunAppComponents,
  testRunAppComponentsSerializer,
  testRunAppComponentsDeserializer,
  TestRunServerMetricConfig,
  testRunServerMetricConfigSerializer,
  testRunServerMetricConfigDeserializer,
  DimensionValueList,
  dimensionValueListDeserializer,
  MetricDefinitionCollection,
  metricDefinitionCollectionDeserializer,
  MetricNamespaceCollection,
  metricNamespaceCollectionDeserializer,
  metricRequestPayloadSerializer,
  _Metrics,
  _metricsDeserializer,
  TimeSeriesElement,
  _PagedTestRun,
  _pagedTestRunDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StopTestRunOptionalParams,
  ListTestRunsOptionalParams,
  ListMetricsOptionalParams,
  ListMetricNamespacesOptionalParams,
  ListMetricDefinitionsOptionalParams,
  ListMetricDimensionValuesOptionalParams,
  GetTestRunFileOptionalParams,
  GetTestRunOptionalParams,
  GetServerMetricsConfigOptionalParams,
  GetAppComponentsOptionalParams,
  DeleteTestRunOptionalParams,
  CreateOrUpdateServerMetricsConfigOptionalParams,
  CreateOrUpdateAppComponentsOptionalParams,
  CreateOrUpdateTestRunOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _stopTestRunSend(
  context: Client,
  testRunId: string,
  options: StopTestRunOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-runs/{testRunId}:stop{?api%2Dversion}",
    {
      testRunId: testRunId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _stopTestRunDeserialize(
  result: PathUncheckedResponse,
): Promise<TestRun> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testRunDeserializer(result.body);
}

/** Stop test run by test run Id. */
export async function stopTestRun(
  context: Client,
  testRunId: string,
  options: StopTestRunOptionalParams = { requestOptions: {} },
): Promise<TestRun> {
  const result = await _stopTestRunSend(context, testRunId, options);
  return _stopTestRunDeserialize(result);
}

export function _listTestRunsSend(
  context: Client,
  options: ListTestRunsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-runs{?api%2Dversion,orderby,search,testId,executionFrom,executionTo,status,maxpagesize}",
    {
      "api%2Dversion": context.apiVersion,
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
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listTestRunsDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedTestRun> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _pagedTestRunDeserializer(result.body);
}

/** Get all test runs for the given filters. */
export function listTestRuns(
  context: Client,
  options: ListTestRunsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<TestRun> {
  return buildPagedAsyncIterator(
    context,
    () => _listTestRunsSend(context, options),
    _listTestRunsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listMetricsSend(
  context: Client,
  testRunId: string,
  metricname: string,
  metricNamespace: string,
  timespan: string,
  options: ListMetricsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-runs/{testRunId}/metrics{?api%2Dversion,aggregation,metricname,interval,metricNamespace,timespan}",
    {
      testRunId: testRunId,
      "api%2Dversion": context.apiVersion,
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
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: !options["body"]
        ? options["body"]
        : metricRequestPayloadSerializer(options["body"]),
    });
}

export async function _listMetricsDeserialize(
  result: PathUncheckedResponse,
): Promise<_Metrics> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _metricsDeserializer(result.body);
}

/** List the metric values for a load test run. */
export function listMetrics(
  context: Client,
  testRunId: string,
  metricname: string,
  metricNamespace: string,
  timespan: string,
  options: ListMetricsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<TimeSeriesElement> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listMetricsSend(
        context,
        testRunId,
        metricname,
        metricNamespace,
        timespan,
        options,
      ),
    _listMetricsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listMetricNamespacesSend(
  context: Client,
  testRunId: string,
  options: ListMetricNamespacesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-runs/{testRunId}/metric-namespaces{?api%2Dversion}",
    {
      testRunId: testRunId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listMetricNamespacesDeserialize(
  result: PathUncheckedResponse,
): Promise<MetricNamespaceCollection> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return metricNamespaceCollectionDeserializer(result.body);
}

/** List the metric namespaces for a load test run. */
export async function listMetricNamespaces(
  context: Client,
  testRunId: string,
  options: ListMetricNamespacesOptionalParams = { requestOptions: {} },
): Promise<MetricNamespaceCollection> {
  const result = await _listMetricNamespacesSend(context, testRunId, options);
  return _listMetricNamespacesDeserialize(result);
}

export function _listMetricDefinitionsSend(
  context: Client,
  testRunId: string,
  metricNamespace: string,
  options: ListMetricDefinitionsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-runs/{testRunId}/metric-definitions{?api%2Dversion,metricNamespace}",
    {
      testRunId: testRunId,
      "api%2Dversion": context.apiVersion,
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
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listMetricDefinitionsDeserialize(
  result: PathUncheckedResponse,
): Promise<MetricDefinitionCollection> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return metricDefinitionCollectionDeserializer(result.body);
}

/** List the metric definitions for a load test run. */
export async function listMetricDefinitions(
  context: Client,
  testRunId: string,
  metricNamespace: string,
  options: ListMetricDefinitionsOptionalParams = { requestOptions: {} },
): Promise<MetricDefinitionCollection> {
  const result = await _listMetricDefinitionsSend(
    context,
    testRunId,
    metricNamespace,
    options,
  );
  return _listMetricDefinitionsDeserialize(result);
}

export function _listMetricDimensionValuesSend(
  context: Client,
  testRunId: string,
  name: string,
  metricname: string,
  metricNamespace: string,
  timespan: string,
  options: ListMetricDimensionValuesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-runs/{testRunId}/metric-dimensions/{name}/values{?api%2Dversion,metricname,interval,metricNamespace,timespan}",
    {
      testRunId: testRunId,
      name: name,
      "api%2Dversion": context.apiVersion,
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
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listMetricDimensionValuesDeserialize(
  result: PathUncheckedResponse,
): Promise<DimensionValueList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return dimensionValueListDeserializer(result.body);
}

/** List the dimension values for the given metric dimension name. */
export async function listMetricDimensionValues(
  context: Client,
  testRunId: string,
  name: string,
  metricname: string,
  metricNamespace: string,
  timespan: string,
  options: ListMetricDimensionValuesOptionalParams = { requestOptions: {} },
): Promise<DimensionValueList> {
  const result = await _listMetricDimensionValuesSend(
    context,
    testRunId,
    name,
    metricname,
    metricNamespace,
    timespan,
    options,
  );
  return _listMetricDimensionValuesDeserialize(result);
}

export function _getTestRunFileSend(
  context: Client,
  testRunId: string,
  fileName: string,
  options: GetTestRunFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-runs/{testRunId}/files/{fileName}{?api%2Dversion}",
    {
      testRunId: testRunId,
      fileName: fileName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getTestRunFileDeserialize(
  result: PathUncheckedResponse,
): Promise<TestRunFileInfo> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testRunFileInfoDeserializer(result.body);
}

/** Get test run file by file name. */
export async function getTestRunFile(
  context: Client,
  testRunId: string,
  fileName: string,
  options: GetTestRunFileOptionalParams = { requestOptions: {} },
): Promise<TestRunFileInfo> {
  const result = await _getTestRunFileSend(
    context,
    testRunId,
    fileName,
    options,
  );
  return _getTestRunFileDeserialize(result);
}

export function _getTestRunSend(
  context: Client,
  testRunId: string,
  options: GetTestRunOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-runs/{testRunId}{?api%2Dversion}",
    {
      testRunId: testRunId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getTestRunDeserialize(
  result: PathUncheckedResponse,
): Promise<TestRun> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testRunDeserializer(result.body);
}

/** Get test run details by test run Id. */
export async function getTestRun(
  context: Client,
  testRunId: string,
  options: GetTestRunOptionalParams = { requestOptions: {} },
): Promise<TestRun> {
  const result = await _getTestRunSend(context, testRunId, options);
  return _getTestRunDeserialize(result);
}

export function _getServerMetricsConfigSend(
  context: Client,
  testRunId: string,
  options: GetServerMetricsConfigOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-runs/{testRunId}/server-metrics-config{?api%2Dversion}",
    {
      testRunId: testRunId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getServerMetricsConfigDeserialize(
  result: PathUncheckedResponse,
): Promise<TestRunServerMetricConfig> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testRunServerMetricConfigDeserializer(result.body);
}

/** Get associated server metrics configuration for the given test run. */
export async function getServerMetricsConfig(
  context: Client,
  testRunId: string,
  options: GetServerMetricsConfigOptionalParams = { requestOptions: {} },
): Promise<TestRunServerMetricConfig> {
  const result = await _getServerMetricsConfigSend(context, testRunId, options);
  return _getServerMetricsConfigDeserialize(result);
}

export function _getAppComponentsSend(
  context: Client,
  testRunId: string,
  options: GetAppComponentsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-runs/{testRunId}/app-components{?api%2Dversion}",
    {
      testRunId: testRunId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getAppComponentsDeserialize(
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
export async function getAppComponents(
  context: Client,
  testRunId: string,
  options: GetAppComponentsOptionalParams = { requestOptions: {} },
): Promise<TestRunAppComponents> {
  const result = await _getAppComponentsSend(context, testRunId, options);
  return _getAppComponentsDeserialize(result);
}

export function _deleteTestRunSend(
  context: Client,
  testRunId: string,
  options: DeleteTestRunOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-runs/{testRunId}{?api%2Dversion}",
    {
      testRunId: testRunId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _deleteTestRunDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete an existing load test run by providing the testRunId. */
export async function deleteTestRun(
  context: Client,
  testRunId: string,
  options: DeleteTestRunOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteTestRunSend(context, testRunId, options);
  return _deleteTestRunDeserialize(result);
}

export function _createOrUpdateServerMetricsConfigSend(
  context: Client,
  testRunId: string,
  body: TestRunServerMetricConfig,
  options: CreateOrUpdateServerMetricsConfigOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-runs/{testRunId}/server-metrics-config{?api%2Dversion}",
    {
      testRunId: testRunId,
      "api%2Dversion": context.apiVersion,
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
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: testRunServerMetricConfigSerializer(body),
    });
}

export async function _createOrUpdateServerMetricsConfigDeserialize(
  result: PathUncheckedResponse,
): Promise<TestRunServerMetricConfig> {
  const expectedStatuses = ["201", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testRunServerMetricConfigDeserializer(result.body);
}

/** Configure server metrics for a test run */
export async function createOrUpdateServerMetricsConfig(
  context: Client,
  testRunId: string,
  body: TestRunServerMetricConfig,
  options: CreateOrUpdateServerMetricsConfigOptionalParams = {
    requestOptions: {},
  },
): Promise<TestRunServerMetricConfig> {
  const result = await _createOrUpdateServerMetricsConfigSend(
    context,
    testRunId,
    body,
    options,
  );
  return _createOrUpdateServerMetricsConfigDeserialize(result);
}

export function _createOrUpdateAppComponentsSend(
  context: Client,
  testRunId: string,
  body: TestRunAppComponents,
  options: CreateOrUpdateAppComponentsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-runs/{testRunId}/app-components{?api%2Dversion}",
    {
      testRunId: testRunId,
      "api%2Dversion": context.apiVersion,
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
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: testRunAppComponentsSerializer(body),
    });
}

export async function _createOrUpdateAppComponentsDeserialize(
  result: PathUncheckedResponse,
): Promise<TestRunAppComponents> {
  const expectedStatuses = ["201", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testRunAppComponentsDeserializer(result.body);
}

/** Add an app component to a test run by providing the resource Id, name and type. */
export async function createOrUpdateAppComponents(
  context: Client,
  testRunId: string,
  body: TestRunAppComponents,
  options: CreateOrUpdateAppComponentsOptionalParams = { requestOptions: {} },
): Promise<TestRunAppComponents> {
  const result = await _createOrUpdateAppComponentsSend(
    context,
    testRunId,
    body,
    options,
  );
  return _createOrUpdateAppComponentsDeserialize(result);
}

export function _createOrUpdateTestRunSend(
  context: Client,
  testRunId: string,
  body: TestRun,
  options: CreateOrUpdateTestRunOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/test-runs/{testRunId}{?api%2Dversion,oldTestRunId}",
    {
      testRunId: testRunId,
      "api%2Dversion": context.apiVersion,
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
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: testRunSerializer(body),
    });
}

export async function _createOrUpdateTestRunDeserialize(
  result: PathUncheckedResponse,
): Promise<TestRun> {
  const expectedStatuses = ["201", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testRunDeserializer(result.body);
}

/** Create and start a new test run with the given test run Id. */
export async function createOrUpdateTestRun(
  context: Client,
  testRunId: string,
  body: TestRun,
  options: CreateOrUpdateTestRunOptionalParams = { requestOptions: {} },
): Promise<TestRun> {
  const result = await _createOrUpdateTestRunSend(
    context,
    testRunId,
    body,
    options,
  );
  return _createOrUpdateTestRunDeserialize(result);
}
