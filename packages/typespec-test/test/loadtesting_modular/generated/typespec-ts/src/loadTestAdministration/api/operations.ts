// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  LoadTestAdministrationContext as Client,
  CreateOrUpdateAppComponentsOptionalParams,
  CreateOrUpdateServerMetricsConfigOptionalParams,
  CreateOrUpdateTestOptionalParams,
  DeleteTestFileOptionalParams,
  DeleteTestOptionalParams,
  GetAppComponentsOptionalParams,
  GetServerMetricsConfigOptionalParams,
  GetTestFileOptionalParams,
  GetTestOptionalParams,
  ListTestFilesOptionalParams,
  ListTestsOptionalParams,
  UploadTestFileOptionalParams,
} from "./index.js";
import {
  Test,
  testSerializer,
  testDeserializer,
  TestFileInfo,
  testFileInfoDeserializer,
  TestAppComponents,
  testAppComponentsSerializer,
  testAppComponentsDeserializer,
  TestServerMetricConfig,
  testServerMetricConfigSerializer,
  testServerMetricConfigDeserializer,
  _PagedTestFileInfo,
  _pagedTestFileInfoDeserializer,
  _PagedTest,
  _pagedTestDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _deleteTestSend(
  context: Client,
  testId: string,
  options: DeleteTestOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/tests/{testId}", testId)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _deleteTestDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a test by its test Id. */
export async function deleteTest(
  context: Client,
  testId: string,
  options: DeleteTestOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteTestSend(context, testId, options);
  return _deleteTestDeserialize(result);
}

export function _deleteTestFileSend(
  context: Client,
  testId: string,
  fileName: string,
  options: DeleteTestFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/tests/{testId}/files/{fileName}", testId, fileName)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _deleteTestFileDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete file by the file name for a test */
export async function deleteTestFile(
  context: Client,
  testId: string,
  fileName: string,
  options: DeleteTestFileOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteTestFileSend(context, testId, fileName, options);
  return _deleteTestFileDeserialize(result);
}

export function _uploadTestFileSend(
  context: Client,
  testId: string,
  fileName: string,
  body: Uint8Array,
  options: UploadTestFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/tests/{testId}/files/{fileName}", testId, fileName)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/octet-stream",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: {
        "api-version": context.apiVersion,
        fileType: options?.fileType,
      },
      body: body,
    });
}

export async function _uploadTestFileDeserialize(
  result: PathUncheckedResponse,
): Promise<TestFileInfo> {
  const expectedStatuses = ["201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testFileInfoDeserializer(result.body);
}

/**
 * Upload input file for a given test Id. File size can't be more than 50 MB.
 * Existing file with same name for the given test will be overwritten. File
 * should be provided in the request body as application/octet-stream.
 */
export async function uploadTestFile(
  context: Client,
  testId: string,
  fileName: string,
  body: Uint8Array,
  options: UploadTestFileOptionalParams = { requestOptions: {} },
): Promise<TestFileInfo> {
  const result = await _uploadTestFileSend(
    context,
    testId,
    fileName,
    body,
    options,
  );
  return _uploadTestFileDeserialize(result);
}

export function _listTestsSend(
  context: Client,
  options: ListTestsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/tests")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: {
        "api-version": context.apiVersion,
        orderby: options?.orderby,
        search: options?.search,
        lastModifiedStartTime: !options?.lastModifiedStartTime
          ? options?.lastModifiedStartTime
          : options?.lastModifiedStartTime.toISOString(),
        lastModifiedEndTime: !options?.lastModifiedEndTime
          ? options?.lastModifiedEndTime
          : options?.lastModifiedEndTime.toISOString(),
        maxpagesize: options?.maxpagesize,
      },
    });
}

export async function _listTestsDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedTest> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _pagedTestDeserializer(result.body);
}

/**
 * Get all load tests by the fully qualified resource Id e.g
 * subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.LoadTestService/loadtests/{resName}.
 */
export function listTests(
  context: Client,
  options: ListTestsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Test> {
  return buildPagedAsyncIterator(
    context,
    () => _listTestsSend(context, options),
    _listTestsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listTestFilesSend(
  context: Client,
  testId: string,
  options: ListTestFilesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/tests/{testId}/files", testId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _listTestFilesDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedTestFileInfo> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _pagedTestFileInfoDeserializer(result.body);
}

/** Get all test files. */
export function listTestFiles(
  context: Client,
  testId: string,
  options: ListTestFilesOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<TestFileInfo> {
  return buildPagedAsyncIterator(
    context,
    () => _listTestFilesSend(context, testId, options),
    _listTestFilesDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getTestFileSend(
  context: Client,
  testId: string,
  fileName: string,
  options: GetTestFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/tests/{testId}/files/{fileName}", testId, fileName)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _getTestFileDeserialize(
  result: PathUncheckedResponse,
): Promise<TestFileInfo> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testFileInfoDeserializer(result.body);
}

/** Get all the files that are associated with a test. */
export async function getTestFile(
  context: Client,
  testId: string,
  fileName: string,
  options: GetTestFileOptionalParams = { requestOptions: {} },
): Promise<TestFileInfo> {
  const result = await _getTestFileSend(context, testId, fileName, options);
  return _getTestFileDeserialize(result);
}

export function _getTestSend(
  context: Client,
  testId: string,
  options: GetTestOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/tests/{testId}", testId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _getTestDeserialize(
  result: PathUncheckedResponse,
): Promise<Test> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testDeserializer(result.body);
}

/** Get load test details by test Id */
export async function getTest(
  context: Client,
  testId: string,
  options: GetTestOptionalParams = { requestOptions: {} },
): Promise<Test> {
  const result = await _getTestSend(context, testId, options);
  return _getTestDeserialize(result);
}

export function _getServerMetricsConfigSend(
  context: Client,
  testId: string,
  options: GetServerMetricsConfigOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/tests/{testId}/server-metrics-config", testId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _getServerMetricsConfigDeserialize(
  result: PathUncheckedResponse,
): Promise<TestServerMetricConfig> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testServerMetricConfigDeserializer(result.body);
}

/** List server metrics configuration for the given test. */
export async function getServerMetricsConfig(
  context: Client,
  testId: string,
  options: GetServerMetricsConfigOptionalParams = { requestOptions: {} },
): Promise<TestServerMetricConfig> {
  const result = await _getServerMetricsConfigSend(context, testId, options);
  return _getServerMetricsConfigDeserialize(result);
}

export function _getAppComponentsSend(
  context: Client,
  testId: string,
  options: GetAppComponentsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/tests/{testId}/app-components", testId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _getAppComponentsDeserialize(
  result: PathUncheckedResponse,
): Promise<TestAppComponents> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testAppComponentsDeserializer(result.body);
}

/** Get associated app component (collection of azure resources) for the given test. */
export async function getAppComponents(
  context: Client,
  testId: string,
  options: GetAppComponentsOptionalParams = { requestOptions: {} },
): Promise<TestAppComponents> {
  const result = await _getAppComponentsSend(context, testId, options);
  return _getAppComponentsDeserialize(result);
}

export function _createOrUpdateServerMetricsConfigSend(
  context: Client,
  testId: string,
  body: TestServerMetricConfig,
  options: CreateOrUpdateServerMetricsConfigOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/tests/{testId}/server-metrics-config", testId)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/merge-patch+json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: testServerMetricConfigSerializer(body),
    });
}

export async function _createOrUpdateServerMetricsConfigDeserialize(
  result: PathUncheckedResponse,
): Promise<TestServerMetricConfig> {
  const expectedStatuses = ["201", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testServerMetricConfigDeserializer(result.body);
}

/** Configure server metrics for a test */
export async function createOrUpdateServerMetricsConfig(
  context: Client,
  testId: string,
  body: TestServerMetricConfig,
  options: CreateOrUpdateServerMetricsConfigOptionalParams = {
    requestOptions: {},
  },
): Promise<TestServerMetricConfig> {
  const result = await _createOrUpdateServerMetricsConfigSend(
    context,
    testId,
    body,
    options,
  );
  return _createOrUpdateServerMetricsConfigDeserialize(result);
}

export function _createOrUpdateAppComponentsSend(
  context: Client,
  testId: string,
  body: TestAppComponents,
  options: CreateOrUpdateAppComponentsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/tests/{testId}/app-components", testId)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/merge-patch+json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: testAppComponentsSerializer(body),
    });
}

export async function _createOrUpdateAppComponentsDeserialize(
  result: PathUncheckedResponse,
): Promise<TestAppComponents> {
  const expectedStatuses = ["201", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testAppComponentsDeserializer(result.body);
}

/** Add an app component to a test by providing the resource Id, name and type. */
export async function createOrUpdateAppComponents(
  context: Client,
  testId: string,
  body: TestAppComponents,
  options: CreateOrUpdateAppComponentsOptionalParams = { requestOptions: {} },
): Promise<TestAppComponents> {
  const result = await _createOrUpdateAppComponentsSend(
    context,
    testId,
    body,
    options,
  );
  return _createOrUpdateAppComponentsDeserialize(result);
}

export function _createOrUpdateTestSend(
  context: Client,
  testId: string,
  body: Test,
  options: CreateOrUpdateTestOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/tests/{testId}", testId)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/merge-patch+json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: testSerializer(body),
    });
}

export async function _createOrUpdateTestDeserialize(
  result: PathUncheckedResponse,
): Promise<Test> {
  const expectedStatuses = ["201", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testDeserializer(result.body);
}

/** Create a new test or update an existing test by providing the test Id. */
export async function createOrUpdateTest(
  context: Client,
  testId: string,
  body: Test,
  options: CreateOrUpdateTestOptionalParams = { requestOptions: {} },
): Promise<Test> {
  const result = await _createOrUpdateTestSend(context, testId, body, options);
  return _createOrUpdateTestDeserialize(result);
}
