// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Test,
  FileInfo,
  TestAppComponents,
  TestServerMetricConfig,
  PagedFileInfo,
  PagedTest,
} from "../models/models.js";
import { PagedAsyncIterableIterator } from "../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "./pagingHelpers.js";
import {
  isUnexpected,
  AzureLoadTestingContext as Client,
  LoadTestAdministrationCreateOrUpdateAppComponents200Response,
  LoadTestAdministrationCreateOrUpdateAppComponents201Response,
  LoadTestAdministrationCreateOrUpdateAppComponentsDefaultResponse,
  LoadTestAdministrationCreateOrUpdateServerMetricsConfig200Response,
  LoadTestAdministrationCreateOrUpdateServerMetricsConfig201Response,
  LoadTestAdministrationCreateOrUpdateServerMetricsConfigDefaultResponse,
  LoadTestAdministrationCreateOrUpdateTest200Response,
  LoadTestAdministrationCreateOrUpdateTest201Response,
  LoadTestAdministrationCreateOrUpdateTestDefaultResponse,
  LoadTestAdministrationDeleteTest204Response,
  LoadTestAdministrationDeleteTestDefaultResponse,
  LoadTestAdministrationDeleteTestFile204Response,
  LoadTestAdministrationDeleteTestFileDefaultResponse,
  LoadTestAdministrationGetAppComponents200Response,
  LoadTestAdministrationGetAppComponentsDefaultResponse,
  LoadTestAdministrationGetServerMetricsConfig200Response,
  LoadTestAdministrationGetServerMetricsConfigDefaultResponse,
  LoadTestAdministrationGetTest200Response,
  LoadTestAdministrationGetTestDefaultResponse,
  LoadTestAdministrationGetTestFile200Response,
  LoadTestAdministrationGetTestFileDefaultResponse,
  LoadTestAdministrationListTestFiles200Response,
  LoadTestAdministrationListTestFilesDefaultResponse,
  LoadTestAdministrationListTests200Response,
  LoadTestAdministrationListTestsDefaultResponse,
  LoadTestAdministrationUploadTestFile201Response,
  LoadTestAdministrationUploadTestFileDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  CreateOrUpdateTestOptions,
  CreateOrUpdateAppComponentsOptions,
  CreateOrUpdateServerMetricsConfigOptions,
  GetAppComponentsOptions,
  GetServerMetricsConfigOptions,
  GetTestOptions,
  GetTestFileOptions,
  ListTestFilesOptions,
  ListTestsOptions,
  UploadTestFileOptions,
  DeleteTestFileOptions,
  DeleteTestOptions,
} from "../models/options.js";

export function _createOrUpdateTestSend(
  context: Client,
  testId: string,
  body: Test,
  options: CreateOrUpdateTestOptions = { requestOptions: {} }
): StreamableMethod<
  | LoadTestAdministrationCreateOrUpdateTest200Response
  | LoadTestAdministrationCreateOrUpdateTest201Response
  | LoadTestAdministrationCreateOrUpdateTestDefaultResponse
> {
  return context
    .path("/tests/{testId}", testId)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: {
        passFailCriteria: !body.passFailCriteria
          ? undefined
          : { passFailMetrics: body.passFailCriteria?.["passFailMetrics"] },
        secrets: body["secrets"],
        certificate: !body.certificate
          ? undefined
          : {
              value: body.certificate?.["value"],
              type: body.certificate?.["type"],
              name: body.certificate?.["name"],
            },
        environmentVariables: body["environmentVariables"],
        loadTestConfiguration: !body.loadTestConfiguration
          ? undefined
          : {
              engineInstances: body.loadTestConfiguration?.["engineInstances"],
              splitAllCSVs: body.loadTestConfiguration?.["splitAllCSVs"],
              quickStartTest: body.loadTestConfiguration?.["quickStartTest"],
              optionalLoadTestConfig: !body.loadTestConfiguration
                ?.optionalLoadTestConfig
                ? undefined
                : {
                    endpointUrl:
                      body.loadTestConfiguration?.optionalLoadTestConfig?.[
                        "endpointUrl"
                      ],
                    virtualUsers:
                      body.loadTestConfiguration?.optionalLoadTestConfig?.[
                        "virtualUsers"
                      ],
                    rampUpTime:
                      body.loadTestConfiguration?.optionalLoadTestConfig?.[
                        "rampUpTime"
                      ],
                    duration:
                      body.loadTestConfiguration?.optionalLoadTestConfig?.[
                        "duration"
                      ],
                  },
            },
        description: body["description"],
        displayName: body["displayName"],
        subnetId: body["subnetId"],
        keyvaultReferenceIdentityType: body["keyvaultReferenceIdentityType"],
        keyvaultReferenceIdentityId: body["keyvaultReferenceIdentityId"],
      },
    });
}

export async function _createOrUpdateTestDeserialize(
  result:
    | LoadTestAdministrationCreateOrUpdateTest200Response
    | LoadTestAdministrationCreateOrUpdateTest201Response
    | LoadTestAdministrationCreateOrUpdateTestDefaultResponse
): Promise<Test> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  let deserializedResponse: unknown = result.body;
  return deserializedResponse as Test;
}

/** Create a new test or update an existing test. */
export async function createOrUpdateTest(
  context: Client,
  testId: string,
  body: Test,
  options: CreateOrUpdateTestOptions = { requestOptions: {} }
): Promise<Test> {
  const result = await _createOrUpdateTestSend(context, testId, body, options);
  return _createOrUpdateTestDeserialize(result);
}

export function _createOrUpdateAppComponentsSend(
  context: Client,
  testId: string,
  body: TestAppComponents,
  options: CreateOrUpdateAppComponentsOptions = { requestOptions: {} }
): StreamableMethod<
  | LoadTestAdministrationCreateOrUpdateAppComponents200Response
  | LoadTestAdministrationCreateOrUpdateAppComponents201Response
  | LoadTestAdministrationCreateOrUpdateAppComponentsDefaultResponse
> {
  return context
    .path("/tests/{testId}/app-components", testId)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: { components: body["components"] },
    });
}

export async function _createOrUpdateAppComponentsDeserialize(
  result:
    | LoadTestAdministrationCreateOrUpdateAppComponents200Response
    | LoadTestAdministrationCreateOrUpdateAppComponents201Response
    | LoadTestAdministrationCreateOrUpdateAppComponentsDefaultResponse
): Promise<TestAppComponents> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  let deserializedResponse: unknown = result.body;
  return deserializedResponse as TestAppComponents;
}

/** Associate an app component (collection of azure resources) to a test */
export async function createOrUpdateAppComponents(
  context: Client,
  testId: string,
  body: TestAppComponents,
  options: CreateOrUpdateAppComponentsOptions = { requestOptions: {} }
): Promise<TestAppComponents> {
  const result = await _createOrUpdateAppComponentsSend(
    context,
    testId,
    body,
    options
  );
  return _createOrUpdateAppComponentsDeserialize(result);
}

export function _createOrUpdateServerMetricsConfigSend(
  context: Client,
  testId: string,
  body: TestServerMetricConfig,
  options: CreateOrUpdateServerMetricsConfigOptions = { requestOptions: {} }
): StreamableMethod<
  | LoadTestAdministrationCreateOrUpdateServerMetricsConfig200Response
  | LoadTestAdministrationCreateOrUpdateServerMetricsConfig201Response
  | LoadTestAdministrationCreateOrUpdateServerMetricsConfigDefaultResponse
> {
  return context
    .path("/tests/{testId}/server-metrics-config", testId)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: { metrics: body["metrics"] },
    });
}

export async function _createOrUpdateServerMetricsConfigDeserialize(
  result:
    | LoadTestAdministrationCreateOrUpdateServerMetricsConfig200Response
    | LoadTestAdministrationCreateOrUpdateServerMetricsConfig201Response
    | LoadTestAdministrationCreateOrUpdateServerMetricsConfigDefaultResponse
): Promise<TestServerMetricConfig> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  let deserializedResponse: unknown = result.body;
  return deserializedResponse as TestServerMetricConfig;
}

/** Configure server metrics for a test */
export async function createOrUpdateServerMetricsConfig(
  context: Client,
  testId: string,
  body: TestServerMetricConfig,
  options: CreateOrUpdateServerMetricsConfigOptions = { requestOptions: {} }
): Promise<TestServerMetricConfig> {
  const result = await _createOrUpdateServerMetricsConfigSend(
    context,
    testId,
    body,
    options
  );
  return _createOrUpdateServerMetricsConfigDeserialize(result);
}

export function _getAppComponentsSend(
  context: Client,
  testId: string,
  options: GetAppComponentsOptions = { requestOptions: {} }
): StreamableMethod<
  | LoadTestAdministrationGetAppComponents200Response
  | LoadTestAdministrationGetAppComponentsDefaultResponse
> {
  return context
    .path("/tests/{testId}/app-components", testId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getAppComponentsDeserialize(
  result:
    | LoadTestAdministrationGetAppComponents200Response
    | LoadTestAdministrationGetAppComponentsDefaultResponse
): Promise<TestAppComponents> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  let deserializedResponse: unknown = result.body;
  return deserializedResponse as TestAppComponents;
}

/** Get associated app component (collection of azure resources) for the given test. */
export async function getAppComponents(
  context: Client,
  testId: string,
  options: GetAppComponentsOptions = { requestOptions: {} }
): Promise<TestAppComponents> {
  const result = await _getAppComponentsSend(context, testId, options);
  return _getAppComponentsDeserialize(result);
}

export function _getServerMetricsConfigSend(
  context: Client,
  testId: string,
  options: GetServerMetricsConfigOptions = { requestOptions: {} }
): StreamableMethod<
  | LoadTestAdministrationGetServerMetricsConfig200Response
  | LoadTestAdministrationGetServerMetricsConfigDefaultResponse
> {
  return context
    .path("/tests/{testId}/server-metrics-config", testId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getServerMetricsConfigDeserialize(
  result:
    | LoadTestAdministrationGetServerMetricsConfig200Response
    | LoadTestAdministrationGetServerMetricsConfigDefaultResponse
): Promise<TestServerMetricConfig> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  let deserializedResponse: unknown = result.body;
  return deserializedResponse as TestServerMetricConfig;
}

/** List server metrics configuration for the given test. */
export async function getServerMetricsConfig(
  context: Client,
  testId: string,
  options: GetServerMetricsConfigOptions = { requestOptions: {} }
): Promise<TestServerMetricConfig> {
  const result = await _getServerMetricsConfigSend(context, testId, options);
  return _getServerMetricsConfigDeserialize(result);
}

export function _getTestSend(
  context: Client,
  testId: string,
  options: GetTestOptions = { requestOptions: {} }
): StreamableMethod<
  | LoadTestAdministrationGetTest200Response
  | LoadTestAdministrationGetTestDefaultResponse
> {
  return context
    .path("/tests/{testId}", testId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getTestDeserialize(
  result:
    | LoadTestAdministrationGetTest200Response
    | LoadTestAdministrationGetTestDefaultResponse
): Promise<Test> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  let deserializedResponse: unknown = result.body;
  return deserializedResponse as Test;
}

/** Get load test details by test name */
export async function getTest(
  context: Client,
  testId: string,
  options: GetTestOptions = { requestOptions: {} }
): Promise<Test> {
  const result = await _getTestSend(context, testId, options);
  return _getTestDeserialize(result);
}

export function _getTestFileSend(
  context: Client,
  testId: string,
  fileName: string,
  options: GetTestFileOptions = { requestOptions: {} }
): StreamableMethod<
  | LoadTestAdministrationGetTestFile200Response
  | LoadTestAdministrationGetTestFileDefaultResponse
> {
  return context
    .path("/tests/{testId}/files/{fileName}", testId, fileName)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getTestFileDeserialize(
  result:
    | LoadTestAdministrationGetTestFile200Response
    | LoadTestAdministrationGetTestFileDefaultResponse
): Promise<FileInfo> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  let deserializedResponse: unknown = result.body;
  return deserializedResponse as FileInfo;
}

/** Get test file by the file name. */
export async function getTestFile(
  context: Client,
  testId: string,
  fileName: string,
  options: GetTestFileOptions = { requestOptions: {} }
): Promise<FileInfo> {
  const result = await _getTestFileSend(context, testId, fileName, options);
  return _getTestFileDeserialize(result);
}

export function _listTestFilesSend(
  context: Client,
  testId: string,
  options: ListTestFilesOptions = { requestOptions: {} }
): StreamableMethod<
  | LoadTestAdministrationListTestFiles200Response
  | LoadTestAdministrationListTestFilesDefaultResponse
> {
  return context
    .path("/tests/{testId}/files", testId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listTestFilesDeserialize(
  result:
    | LoadTestAdministrationListTestFiles200Response
    | LoadTestAdministrationListTestFilesDefaultResponse
): Promise<PagedFileInfo> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  let deserializedResponse: unknown = result.body;
  return deserializedResponse as PagedFileInfo;
}

/** Get all test files. */
export function listTestFiles(
  context: Client,
  testId: string,
  options: ListTestFilesOptions = { requestOptions: {} }
): PagedAsyncIterableIterator<FileInfo> {
  return buildPagedAsyncIterator(
    context,
    () => _listTestFilesSend(context, testId, options),
    _listTestFilesDeserialize,
    { itemName: "value", nextLinkName: "nextLink" }
  );
}

export function _listTestsSend(
  context: Client,
  options: ListTestsOptions = { requestOptions: {} }
): StreamableMethod<
  | LoadTestAdministrationListTests200Response
  | LoadTestAdministrationListTestsDefaultResponse
> {
  return context
    .path("/tests")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        orderby: options?.orderby,
        search: options?.search,
        lastModifiedStartTime: options?.lastModifiedStartTime,
        lastModifiedEndTime: options?.lastModifiedEndTime,
        maxpagesize: options?.maxpagesize,
      },
    });
}

export async function _listTestsDeserialize(
  result:
    | LoadTestAdministrationListTests200Response
    | LoadTestAdministrationListTestsDefaultResponse
): Promise<PagedTest> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  let deserializedResponse: unknown = result.body;
  return deserializedResponse as PagedTest;
}

/**
 * Get all load tests by the fully qualified resource Id e.g
 * subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.LoadTestService/loadtests/{resName}.
 */
export function listTests(
  context: Client,
  options: ListTestsOptions = { requestOptions: {} }
): PagedAsyncIterableIterator<Test> {
  return buildPagedAsyncIterator(
    context,
    () => _listTestsSend(context, options),
    _listTestsDeserialize,
    { itemName: "value", nextLinkName: "nextLink" }
  );
}

export function _uploadTestFileSend(
  context: Client,
  testId: string,
  fileName: string,
  body: Uint8Array,
  options: UploadTestFileOptions = { requestOptions: {} }
): StreamableMethod<
  | LoadTestAdministrationUploadTestFile201Response
  | LoadTestAdministrationUploadTestFileDefaultResponse
> {
  return context
    .path("/tests/{testId}/files/{fileName}", testId, fileName)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "application/octet-stream",
      queryParameters: { fileType: options?.fileType },
      body: body,
    });
}

export async function _uploadTestFileDeserialize(
  result:
    | LoadTestAdministrationUploadTestFile201Response
    | LoadTestAdministrationUploadTestFileDefaultResponse
): Promise<FileInfo> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  let deserializedResponse: unknown = result.body;
  return deserializedResponse as FileInfo;
}

/**
 * Upload input file for a given test name. File size can't be more than 50 MB.
 * Existing file with same name for the given test will be overwritten. File
 * should be provided in the request body as application/octet-stream.
 */
export async function uploadTestFile(
  context: Client,
  testId: string,
  fileName: string,
  body: Uint8Array,
  options: UploadTestFileOptions = { requestOptions: {} }
): Promise<FileInfo> {
  const result = await _uploadTestFileSend(
    context,
    testId,
    fileName,
    body,
    options
  );
  return _uploadTestFileDeserialize(result);
}

export function _deleteTestFileSend(
  context: Client,
  testId: string,
  fileName: string,
  options: DeleteTestFileOptions = { requestOptions: {} }
): StreamableMethod<
  | LoadTestAdministrationDeleteTestFile204Response
  | LoadTestAdministrationDeleteTestFileDefaultResponse
> {
  return context
    .path("/tests/{testId}/files/{fileName}", testId, fileName)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteTestFileDeserialize(
  result:
    | LoadTestAdministrationDeleteTestFile204Response
    | LoadTestAdministrationDeleteTestFileDefaultResponse
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Delete file by the file name for a test */
export async function deleteTestFile(
  context: Client,
  testId: string,
  fileName: string,
  options: DeleteTestFileOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _deleteTestFileSend(context, testId, fileName, options);
  return _deleteTestFileDeserialize(result);
}

export function _deleteTestSend(
  context: Client,
  testId: string,
  options: DeleteTestOptions = { requestOptions: {} }
): StreamableMethod<
  | LoadTestAdministrationDeleteTest204Response
  | LoadTestAdministrationDeleteTestDefaultResponse
> {
  return context
    .path("/tests/{testId}", testId)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteTestDeserialize(
  result:
    | LoadTestAdministrationDeleteTest204Response
    | LoadTestAdministrationDeleteTestDefaultResponse
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a test by its name. */
export async function deleteTest(
  context: Client,
  testId: string,
  options: DeleteTestOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _deleteTestSend(context, testId, options);
  return _deleteTestDeserialize(result);
}
