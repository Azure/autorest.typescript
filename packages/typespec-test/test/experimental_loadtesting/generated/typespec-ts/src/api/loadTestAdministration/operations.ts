// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { LoadTestServiceContext as Client } from "../index.js";
import {
  Test,
  testSerializer,
  testDeserializer,
  TestFileInfo,
  testFileInfoDeserializer,
  _PagedTest,
  _pagedTestDeserializer,
  _PagedTestFileInfo,
  _pagedTestFileInfoDeserializer,
  TestAppComponents,
  testAppComponentsSerializer,
  testAppComponentsDeserializer,
  TestServerMetricConfig,
  testServerMetricConfigSerializer,
  testServerMetricConfigDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  LoadTestAdministrationGetServerMetricsConfigOptionalParams,
  LoadTestAdministrationCreateOrUpdateServerMetricsConfigOptionalParams,
  LoadTestAdministrationGetAppComponentsOptionalParams,
  LoadTestAdministrationCreateOrUpdateAppComponentsOptionalParams,
  LoadTestAdministrationListTestFilesOptionalParams,
  LoadTestAdministrationDeleteTestFileOptionalParams,
  LoadTestAdministrationGetTestFileOptionalParams,
  LoadTestAdministrationUploadTestFileOptionalParams,
  LoadTestAdministrationListTestsOptionalParams,
  LoadTestAdministrationGetTestOptionalParams,
  LoadTestAdministrationDeleteTestOptionalParams,
  LoadTestAdministrationCreateOrUpdateTestOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _loadTestAdministrationGetServerMetricsConfigSend(
  context: Client,
  testId: string,
  options: LoadTestAdministrationGetServerMetricsConfigOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/tests/{testId}/server-metrics-config{?api-version}",
    {
      testId: testId,
      "api-version": context.apiVersion ?? "2022-11-01",
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

export async function _loadTestAdministrationGetServerMetricsConfigDeserialize(
  result: PathUncheckedResponse,
): Promise<TestServerMetricConfig> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testServerMetricConfigDeserializer(result.body);
}

/** List server metrics configuration for the given test. */
export async function loadTestAdministrationGetServerMetricsConfig(
  context: Client,
  testId: string,
  options: LoadTestAdministrationGetServerMetricsConfigOptionalParams = { requestOptions: {} },
): Promise<TestServerMetricConfig> {
  const result = await _loadTestAdministrationGetServerMetricsConfigSend(context, testId, options);
  return _loadTestAdministrationGetServerMetricsConfigDeserialize(result);
}

export function _loadTestAdministrationCreateOrUpdateServerMetricsConfigSend(
  context: Client,
  testId: string,
  body: TestServerMetricConfig,
  options: LoadTestAdministrationCreateOrUpdateServerMetricsConfigOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/tests/{testId}/server-metrics-config{?api-version}",
    {
      testId: testId,
      "api-version": context.apiVersion ?? "2022-11-01",
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
      body: testServerMetricConfigSerializer(body),
    });
}

export async function _loadTestAdministrationCreateOrUpdateServerMetricsConfigDeserialize(
  result: PathUncheckedResponse,
): Promise<TestServerMetricConfig> {
  const expectedStatuses = ["201", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testServerMetricConfigDeserializer(result.body);
}

/** Configure server metrics for a test */
export async function loadTestAdministrationCreateOrUpdateServerMetricsConfig(
  context: Client,
  testId: string,
  body: TestServerMetricConfig,
  options: LoadTestAdministrationCreateOrUpdateServerMetricsConfigOptionalParams = {
    requestOptions: {},
  },
): Promise<TestServerMetricConfig> {
  const result = await _loadTestAdministrationCreateOrUpdateServerMetricsConfigSend(
    context,
    testId,
    body,
    options,
  );
  return _loadTestAdministrationCreateOrUpdateServerMetricsConfigDeserialize(result);
}

export function _loadTestAdministrationGetAppComponentsSend(
  context: Client,
  testId: string,
  options: LoadTestAdministrationGetAppComponentsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/tests/{testId}/app-components{?api-version}",
    {
      testId: testId,
      "api-version": context.apiVersion ?? "2022-11-01",
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

export async function _loadTestAdministrationGetAppComponentsDeserialize(
  result: PathUncheckedResponse,
): Promise<TestAppComponents> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testAppComponentsDeserializer(result.body);
}

/** Get associated app component (collection of azure resources) for the given test. */
export async function loadTestAdministrationGetAppComponents(
  context: Client,
  testId: string,
  options: LoadTestAdministrationGetAppComponentsOptionalParams = { requestOptions: {} },
): Promise<TestAppComponents> {
  const result = await _loadTestAdministrationGetAppComponentsSend(context, testId, options);
  return _loadTestAdministrationGetAppComponentsDeserialize(result);
}

export function _loadTestAdministrationCreateOrUpdateAppComponentsSend(
  context: Client,
  testId: string,
  body: TestAppComponents,
  options: LoadTestAdministrationCreateOrUpdateAppComponentsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/tests/{testId}/app-components{?api-version}",
    {
      testId: testId,
      "api-version": context.apiVersion ?? "2022-11-01",
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
      body: testAppComponentsSerializer(body),
    });
}

export async function _loadTestAdministrationCreateOrUpdateAppComponentsDeserialize(
  result: PathUncheckedResponse,
): Promise<TestAppComponents> {
  const expectedStatuses = ["201", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testAppComponentsDeserializer(result.body);
}

/** Add an app component to a test by providing the resource Id, name and type. */
export async function loadTestAdministrationCreateOrUpdateAppComponents(
  context: Client,
  testId: string,
  body: TestAppComponents,
  options: LoadTestAdministrationCreateOrUpdateAppComponentsOptionalParams = { requestOptions: {} },
): Promise<TestAppComponents> {
  const result = await _loadTestAdministrationCreateOrUpdateAppComponentsSend(
    context,
    testId,
    body,
    options,
  );
  return _loadTestAdministrationCreateOrUpdateAppComponentsDeserialize(result);
}

export function _loadTestAdministrationListTestFilesSend(
  context: Client,
  testId: string,
  options: LoadTestAdministrationListTestFilesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/tests/{testId}/files{?api-version}",
    {
      testId: testId,
      "api-version": context.apiVersion ?? "2022-11-01",
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

export async function _loadTestAdministrationListTestFilesDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedTestFileInfo> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _pagedTestFileInfoDeserializer(result.body);
}

/** Get all test files. */
export function loadTestAdministrationListTestFiles(
  context: Client,
  testId: string,
  options: LoadTestAdministrationListTestFilesOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<TestFileInfo> {
  return buildPagedAsyncIterator(
    context,
    () => _loadTestAdministrationListTestFilesSend(context, testId, options),
    _loadTestAdministrationListTestFilesDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink", apiVersion: context.apiVersion ?? "2022-11-01" },
  );
}

export function _loadTestAdministrationDeleteTestFileSend(
  context: Client,
  testId: string,
  fileName: string,
  options: LoadTestAdministrationDeleteTestFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/tests/{testId}/files/{fileName}{?api-version}",
    {
      testId: testId,
      fileName: fileName,
      "api-version": context.apiVersion ?? "2022-11-01",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _loadTestAdministrationDeleteTestFileDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete file by the file name for a test */
export async function loadTestAdministrationDeleteTestFile(
  context: Client,
  testId: string,
  fileName: string,
  options: LoadTestAdministrationDeleteTestFileOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _loadTestAdministrationDeleteTestFileSend(
    context,
    testId,
    fileName,
    options,
  );
  return _loadTestAdministrationDeleteTestFileDeserialize(result);
}

export function _loadTestAdministrationGetTestFileSend(
  context: Client,
  testId: string,
  fileName: string,
  options: LoadTestAdministrationGetTestFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/tests/{testId}/files/{fileName}{?api-version}",
    {
      testId: testId,
      fileName: fileName,
      "api-version": context.apiVersion ?? "2022-11-01",
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

export async function _loadTestAdministrationGetTestFileDeserialize(
  result: PathUncheckedResponse,
): Promise<TestFileInfo> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testFileInfoDeserializer(result.body);
}

/** Get all the files that are associated with a test. */
export async function loadTestAdministrationGetTestFile(
  context: Client,
  testId: string,
  fileName: string,
  options: LoadTestAdministrationGetTestFileOptionalParams = { requestOptions: {} },
): Promise<TestFileInfo> {
  const result = await _loadTestAdministrationGetTestFileSend(context, testId, fileName, options);
  return _loadTestAdministrationGetTestFileDeserialize(result);
}

export function _loadTestAdministrationUploadTestFileSend(
  context: Client,
  testId: string,
  fileName: string,
  body: Uint8Array,
  options: LoadTestAdministrationUploadTestFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/tests/{testId}/files/{fileName}{?api-version,fileType}",
    {
      testId: testId,
      fileName: fileName,
      "api-version": context.apiVersion ?? "2022-11-01",
      fileType: options?.fileType,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/octet-stream",
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: body,
    });
}

export async function _loadTestAdministrationUploadTestFileDeserialize(
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
export async function loadTestAdministrationUploadTestFile(
  context: Client,
  testId: string,
  fileName: string,
  body: Uint8Array,
  options: LoadTestAdministrationUploadTestFileOptionalParams = { requestOptions: {} },
): Promise<TestFileInfo> {
  const result = await _loadTestAdministrationUploadTestFileSend(
    context,
    testId,
    fileName,
    body,
    options,
  );
  return _loadTestAdministrationUploadTestFileDeserialize(result);
}

export function _loadTestAdministrationListTestsSend(
  context: Client,
  options: LoadTestAdministrationListTestsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/tests{?api-version,orderby,search,lastModifiedStartTime,lastModifiedEndTime,maxpagesize}",
    {
      "api-version": context.apiVersion ?? "2022-11-01",
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

export async function _loadTestAdministrationListTestsDeserialize(
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
export function loadTestAdministrationListTests(
  context: Client,
  options: LoadTestAdministrationListTestsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Test> {
  return buildPagedAsyncIterator(
    context,
    () => _loadTestAdministrationListTestsSend(context, options),
    _loadTestAdministrationListTestsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink", apiVersion: context.apiVersion ?? "2022-11-01" },
  );
}

export function _loadTestAdministrationGetTestSend(
  context: Client,
  testId: string,
  options: LoadTestAdministrationGetTestOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/tests/{testId}{?api-version}",
    {
      testId: testId,
      "api-version": context.apiVersion ?? "2022-11-01",
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

export async function _loadTestAdministrationGetTestDeserialize(
  result: PathUncheckedResponse,
): Promise<Test> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testDeserializer(result.body);
}

/** Get load test details by test Id */
export async function loadTestAdministrationGetTest(
  context: Client,
  testId: string,
  options: LoadTestAdministrationGetTestOptionalParams = { requestOptions: {} },
): Promise<Test> {
  const result = await _loadTestAdministrationGetTestSend(context, testId, options);
  return _loadTestAdministrationGetTestDeserialize(result);
}

export function _loadTestAdministrationDeleteTestSend(
  context: Client,
  testId: string,
  options: LoadTestAdministrationDeleteTestOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/tests/{testId}{?api-version}",
    {
      testId: testId,
      "api-version": context.apiVersion ?? "2022-11-01",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _loadTestAdministrationDeleteTestDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a test by its test Id. */
export async function loadTestAdministrationDeleteTest(
  context: Client,
  testId: string,
  options: LoadTestAdministrationDeleteTestOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _loadTestAdministrationDeleteTestSend(context, testId, options);
  return _loadTestAdministrationDeleteTestDeserialize(result);
}

export function _loadTestAdministrationCreateOrUpdateTestSend(
  context: Client,
  testId: string,
  body: Test,
  options: LoadTestAdministrationCreateOrUpdateTestOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/tests/{testId}{?api-version}",
    {
      testId: testId,
      "api-version": context.apiVersion ?? "2022-11-01",
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
      body: testSerializer(body),
    });
}

export async function _loadTestAdministrationCreateOrUpdateTestDeserialize(
  result: PathUncheckedResponse,
): Promise<Test> {
  const expectedStatuses = ["201", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testDeserializer(result.body);
}

/** Create a new test or update an existing test by providing the test Id. */
export async function loadTestAdministrationCreateOrUpdateTest(
  context: Client,
  testId: string,
  body: Test,
  options: LoadTestAdministrationCreateOrUpdateTestOptionalParams = { requestOptions: {} },
): Promise<Test> {
  const result = await _loadTestAdministrationCreateOrUpdateTestSend(
    context,
    testId,
    body,
    options,
  );
  return _loadTestAdministrationCreateOrUpdateTestDeserialize(result);
}
