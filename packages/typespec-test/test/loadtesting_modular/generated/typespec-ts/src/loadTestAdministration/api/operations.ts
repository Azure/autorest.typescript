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
  options: CreateOrUpdateTestOptions = { requestOptions: {} },
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
    | LoadTestAdministrationCreateOrUpdateTestDefaultResponse,
): Promise<Test> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    passFailCriteria: !result.body.passFailCriteria
      ? undefined
      : { passFailMetrics: result.body.passFailCriteria?.["passFailMetrics"] },
    secrets: result.body["secrets"],
    certificate: !result.body.certificate
      ? undefined
      : {
          value: result.body.certificate?.["value"],
          type: result.body.certificate?.["type"],
          name: result.body.certificate?.["name"],
        },
    environmentVariables: result.body["environmentVariables"],
    loadTestConfiguration: !result.body.loadTestConfiguration
      ? undefined
      : {
          engineInstances:
            result.body.loadTestConfiguration?.["engineInstances"],
          splitAllCSVs: result.body.loadTestConfiguration?.["splitAllCSVs"],
          quickStartTest: result.body.loadTestConfiguration?.["quickStartTest"],
          optionalLoadTestConfig: !result.body.loadTestConfiguration
            ?.optionalLoadTestConfig
            ? undefined
            : {
                endpointUrl:
                  result.body.loadTestConfiguration?.optionalLoadTestConfig?.[
                    "endpointUrl"
                  ],
                virtualUsers:
                  result.body.loadTestConfiguration?.optionalLoadTestConfig?.[
                    "virtualUsers"
                  ],
                rampUpTime:
                  result.body.loadTestConfiguration?.optionalLoadTestConfig?.[
                    "rampUpTime"
                  ],
                duration:
                  result.body.loadTestConfiguration?.optionalLoadTestConfig?.[
                    "duration"
                  ],
              },
        },
    inputArtifacts: !result.body.inputArtifacts
      ? undefined
      : {
          configFileInfo: !result.body.inputArtifacts?.configFileInfo
            ? undefined
            : {
                url: result.body.inputArtifacts?.configFileInfo?.["url"],
                fileName:
                  result.body.inputArtifacts?.configFileInfo?.["fileName"],
                fileType:
                  result.body.inputArtifacts?.configFileInfo?.["fileType"],
                expireDateTime:
                  result.body.inputArtifacts?.configFileInfo?.[
                    "expireDateTime"
                  ],
                validationStatus:
                  result.body.inputArtifacts?.configFileInfo?.[
                    "validationStatus"
                  ],
                validationFailureDetails:
                  result.body.inputArtifacts?.configFileInfo?.[
                    "validationFailureDetails"
                  ],
              },
          testScriptFileInfo: !result.body.inputArtifacts?.testScriptFileInfo
            ? undefined
            : {
                url: result.body.inputArtifacts?.testScriptFileInfo?.["url"],
                fileName:
                  result.body.inputArtifacts?.testScriptFileInfo?.["fileName"],
                fileType:
                  result.body.inputArtifacts?.testScriptFileInfo?.["fileType"],
                expireDateTime:
                  result.body.inputArtifacts?.testScriptFileInfo?.[
                    "expireDateTime"
                  ],
                validationStatus:
                  result.body.inputArtifacts?.testScriptFileInfo?.[
                    "validationStatus"
                  ],
                validationFailureDetails:
                  result.body.inputArtifacts?.testScriptFileInfo?.[
                    "validationFailureDetails"
                  ],
              },
          userPropFileInfo: !result.body.inputArtifacts?.userPropFileInfo
            ? undefined
            : {
                url: result.body.inputArtifacts?.userPropFileInfo?.["url"],
                fileName:
                  result.body.inputArtifacts?.userPropFileInfo?.["fileName"],
                fileType:
                  result.body.inputArtifacts?.userPropFileInfo?.["fileType"],
                expireDateTime:
                  result.body.inputArtifacts?.userPropFileInfo?.[
                    "expireDateTime"
                  ],
                validationStatus:
                  result.body.inputArtifacts?.userPropFileInfo?.[
                    "validationStatus"
                  ],
                validationFailureDetails:
                  result.body.inputArtifacts?.userPropFileInfo?.[
                    "validationFailureDetails"
                  ],
              },
          inputArtifactsZipFileInfo: !result.body.inputArtifacts
            ?.inputArtifactsZipFileInfo
            ? undefined
            : {
                url: result.body.inputArtifacts?.inputArtifactsZipFileInfo?.[
                  "url"
                ],
                fileName:
                  result.body.inputArtifacts?.inputArtifactsZipFileInfo?.[
                    "fileName"
                  ],
                fileType:
                  result.body.inputArtifacts?.inputArtifactsZipFileInfo?.[
                    "fileType"
                  ],
                expireDateTime:
                  result.body.inputArtifacts?.inputArtifactsZipFileInfo?.[
                    "expireDateTime"
                  ],
                validationStatus:
                  result.body.inputArtifacts?.inputArtifactsZipFileInfo?.[
                    "validationStatus"
                  ],
                validationFailureDetails:
                  result.body.inputArtifacts?.inputArtifactsZipFileInfo?.[
                    "validationFailureDetails"
                  ],
              },
          additionalFileInfo: !result.body.inputArtifacts?.[
            "additionalFileInfo"
          ]
            ? result.body.inputArtifacts?.["additionalFileInfo"]
            : result.body.inputArtifacts?.["additionalFileInfo"].map((p) => ({
                url: p["url"],
                fileName: p["fileName"],
                fileType: p["fileType"],
                expireDateTime: p["expireDateTime"],
                validationStatus: p["validationStatus"],
                validationFailureDetails: p["validationFailureDetails"],
              })),
        },
    testId: result.body["testId"],
    description: result.body["description"],
    displayName: result.body["displayName"],
    subnetId: result.body["subnetId"],
    keyvaultReferenceIdentityType: result.body["keyvaultReferenceIdentityType"],
    keyvaultReferenceIdentityId: result.body["keyvaultReferenceIdentityId"],
    createdDateTime: result.body["createdDateTime"],
    createdBy: result.body["createdBy"],
    lastModifiedDateTime: result.body["lastModifiedDateTime"],
    lastModifiedBy: result.body["lastModifiedBy"],
  };
}

/** Create a new test or update an existing test. */
export async function createOrUpdateTest(
  context: Client,
  testId: string,
  body: Test,
  options: CreateOrUpdateTestOptions = { requestOptions: {} },
): Promise<Test> {
  const result = await _createOrUpdateTestSend(context, testId, body, options);
  return _createOrUpdateTestDeserialize(result);
}

export function _createOrUpdateAppComponentsSend(
  context: Client,
  testId: string,
  body: TestAppComponents,
  options: CreateOrUpdateAppComponentsOptions = { requestOptions: {} },
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
    | LoadTestAdministrationCreateOrUpdateAppComponentsDefaultResponse,
): Promise<TestAppComponents> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    components: result.body["components"],
    testId: result.body["testId"],
    createdDateTime: result.body["createdDateTime"],
    createdBy: result.body["createdBy"],
    lastModifiedDateTime: result.body["lastModifiedDateTime"],
    lastModifiedBy: result.body["lastModifiedBy"],
  };
}

/** Associate an app component (collection of azure resources) to a test */
export async function createOrUpdateAppComponents(
  context: Client,
  testId: string,
  body: TestAppComponents,
  options: CreateOrUpdateAppComponentsOptions = { requestOptions: {} },
): Promise<TestAppComponents> {
  const result = await _createOrUpdateAppComponentsSend(
    context,
    testId,
    body,
    options,
  );
  return _createOrUpdateAppComponentsDeserialize(result);
}

export function _createOrUpdateServerMetricsConfigSend(
  context: Client,
  testId: string,
  body: TestServerMetricConfig,
  options: CreateOrUpdateServerMetricsConfigOptions = { requestOptions: {} },
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
    | LoadTestAdministrationCreateOrUpdateServerMetricsConfigDefaultResponse,
): Promise<TestServerMetricConfig> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    testId: result.body["testId"],
    metrics: result.body["metrics"],
    createdDateTime: result.body["createdDateTime"],
    createdBy: result.body["createdBy"],
    lastModifiedDateTime: result.body["lastModifiedDateTime"],
    lastModifiedBy: result.body["lastModifiedBy"],
  };
}

/** Configure server metrics for a test */
export async function createOrUpdateServerMetricsConfig(
  context: Client,
  testId: string,
  body: TestServerMetricConfig,
  options: CreateOrUpdateServerMetricsConfigOptions = { requestOptions: {} },
): Promise<TestServerMetricConfig> {
  const result = await _createOrUpdateServerMetricsConfigSend(
    context,
    testId,
    body,
    options,
  );
  return _createOrUpdateServerMetricsConfigDeserialize(result);
}

export function _getAppComponentsSend(
  context: Client,
  testId: string,
  options: GetAppComponentsOptions = { requestOptions: {} },
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
    | LoadTestAdministrationGetAppComponentsDefaultResponse,
): Promise<TestAppComponents> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    components: result.body["components"],
    testId: result.body["testId"],
    createdDateTime: result.body["createdDateTime"],
    createdBy: result.body["createdBy"],
    lastModifiedDateTime: result.body["lastModifiedDateTime"],
    lastModifiedBy: result.body["lastModifiedBy"],
  };
}

/** Get associated app component (collection of azure resources) for the given test. */
export async function getAppComponents(
  context: Client,
  testId: string,
  options: GetAppComponentsOptions = { requestOptions: {} },
): Promise<TestAppComponents> {
  const result = await _getAppComponentsSend(context, testId, options);
  return _getAppComponentsDeserialize(result);
}

export function _getServerMetricsConfigSend(
  context: Client,
  testId: string,
  options: GetServerMetricsConfigOptions = { requestOptions: {} },
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
    | LoadTestAdministrationGetServerMetricsConfigDefaultResponse,
): Promise<TestServerMetricConfig> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    testId: result.body["testId"],
    metrics: result.body["metrics"],
    createdDateTime: result.body["createdDateTime"],
    createdBy: result.body["createdBy"],
    lastModifiedDateTime: result.body["lastModifiedDateTime"],
    lastModifiedBy: result.body["lastModifiedBy"],
  };
}

/** List server metrics configuration for the given test. */
export async function getServerMetricsConfig(
  context: Client,
  testId: string,
  options: GetServerMetricsConfigOptions = { requestOptions: {} },
): Promise<TestServerMetricConfig> {
  const result = await _getServerMetricsConfigSend(context, testId, options);
  return _getServerMetricsConfigDeserialize(result);
}

export function _getTestSend(
  context: Client,
  testId: string,
  options: GetTestOptions = { requestOptions: {} },
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
    | LoadTestAdministrationGetTestDefaultResponse,
): Promise<Test> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    passFailCriteria: !result.body.passFailCriteria
      ? undefined
      : { passFailMetrics: result.body.passFailCriteria?.["passFailMetrics"] },
    secrets: result.body["secrets"],
    certificate: !result.body.certificate
      ? undefined
      : {
          value: result.body.certificate?.["value"],
          type: result.body.certificate?.["type"],
          name: result.body.certificate?.["name"],
        },
    environmentVariables: result.body["environmentVariables"],
    loadTestConfiguration: !result.body.loadTestConfiguration
      ? undefined
      : {
          engineInstances:
            result.body.loadTestConfiguration?.["engineInstances"],
          splitAllCSVs: result.body.loadTestConfiguration?.["splitAllCSVs"],
          quickStartTest: result.body.loadTestConfiguration?.["quickStartTest"],
          optionalLoadTestConfig: !result.body.loadTestConfiguration
            ?.optionalLoadTestConfig
            ? undefined
            : {
                endpointUrl:
                  result.body.loadTestConfiguration?.optionalLoadTestConfig?.[
                    "endpointUrl"
                  ],
                virtualUsers:
                  result.body.loadTestConfiguration?.optionalLoadTestConfig?.[
                    "virtualUsers"
                  ],
                rampUpTime:
                  result.body.loadTestConfiguration?.optionalLoadTestConfig?.[
                    "rampUpTime"
                  ],
                duration:
                  result.body.loadTestConfiguration?.optionalLoadTestConfig?.[
                    "duration"
                  ],
              },
        },
    inputArtifacts: !result.body.inputArtifacts
      ? undefined
      : {
          configFileInfo: !result.body.inputArtifacts?.configFileInfo
            ? undefined
            : {
                url: result.body.inputArtifacts?.configFileInfo?.["url"],
                fileName:
                  result.body.inputArtifacts?.configFileInfo?.["fileName"],
                fileType:
                  result.body.inputArtifacts?.configFileInfo?.["fileType"],
                expireDateTime:
                  result.body.inputArtifacts?.configFileInfo?.[
                    "expireDateTime"
                  ],
                validationStatus:
                  result.body.inputArtifacts?.configFileInfo?.[
                    "validationStatus"
                  ],
                validationFailureDetails:
                  result.body.inputArtifacts?.configFileInfo?.[
                    "validationFailureDetails"
                  ],
              },
          testScriptFileInfo: !result.body.inputArtifacts?.testScriptFileInfo
            ? undefined
            : {
                url: result.body.inputArtifacts?.testScriptFileInfo?.["url"],
                fileName:
                  result.body.inputArtifacts?.testScriptFileInfo?.["fileName"],
                fileType:
                  result.body.inputArtifacts?.testScriptFileInfo?.["fileType"],
                expireDateTime:
                  result.body.inputArtifacts?.testScriptFileInfo?.[
                    "expireDateTime"
                  ],
                validationStatus:
                  result.body.inputArtifacts?.testScriptFileInfo?.[
                    "validationStatus"
                  ],
                validationFailureDetails:
                  result.body.inputArtifacts?.testScriptFileInfo?.[
                    "validationFailureDetails"
                  ],
              },
          userPropFileInfo: !result.body.inputArtifacts?.userPropFileInfo
            ? undefined
            : {
                url: result.body.inputArtifacts?.userPropFileInfo?.["url"],
                fileName:
                  result.body.inputArtifacts?.userPropFileInfo?.["fileName"],
                fileType:
                  result.body.inputArtifacts?.userPropFileInfo?.["fileType"],
                expireDateTime:
                  result.body.inputArtifacts?.userPropFileInfo?.[
                    "expireDateTime"
                  ],
                validationStatus:
                  result.body.inputArtifacts?.userPropFileInfo?.[
                    "validationStatus"
                  ],
                validationFailureDetails:
                  result.body.inputArtifacts?.userPropFileInfo?.[
                    "validationFailureDetails"
                  ],
              },
          inputArtifactsZipFileInfo: !result.body.inputArtifacts
            ?.inputArtifactsZipFileInfo
            ? undefined
            : {
                url: result.body.inputArtifacts?.inputArtifactsZipFileInfo?.[
                  "url"
                ],
                fileName:
                  result.body.inputArtifacts?.inputArtifactsZipFileInfo?.[
                    "fileName"
                  ],
                fileType:
                  result.body.inputArtifacts?.inputArtifactsZipFileInfo?.[
                    "fileType"
                  ],
                expireDateTime:
                  result.body.inputArtifacts?.inputArtifactsZipFileInfo?.[
                    "expireDateTime"
                  ],
                validationStatus:
                  result.body.inputArtifacts?.inputArtifactsZipFileInfo?.[
                    "validationStatus"
                  ],
                validationFailureDetails:
                  result.body.inputArtifacts?.inputArtifactsZipFileInfo?.[
                    "validationFailureDetails"
                  ],
              },
          additionalFileInfo: !result.body.inputArtifacts?.[
            "additionalFileInfo"
          ]
            ? result.body.inputArtifacts?.["additionalFileInfo"]
            : result.body.inputArtifacts?.["additionalFileInfo"].map((p) => ({
                url: p["url"],
                fileName: p["fileName"],
                fileType: p["fileType"],
                expireDateTime: p["expireDateTime"],
                validationStatus: p["validationStatus"],
                validationFailureDetails: p["validationFailureDetails"],
              })),
        },
    testId: result.body["testId"],
    description: result.body["description"],
    displayName: result.body["displayName"],
    subnetId: result.body["subnetId"],
    keyvaultReferenceIdentityType: result.body["keyvaultReferenceIdentityType"],
    keyvaultReferenceIdentityId: result.body["keyvaultReferenceIdentityId"],
    createdDateTime: result.body["createdDateTime"],
    createdBy: result.body["createdBy"],
    lastModifiedDateTime: result.body["lastModifiedDateTime"],
    lastModifiedBy: result.body["lastModifiedBy"],
  };
}

/** Get load test details by test name */
export async function getTest(
  context: Client,
  testId: string,
  options: GetTestOptions = { requestOptions: {} },
): Promise<Test> {
  const result = await _getTestSend(context, testId, options);
  return _getTestDeserialize(result);
}

export function _getTestFileSend(
  context: Client,
  testId: string,
  fileName: string,
  options: GetTestFileOptions = { requestOptions: {} },
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
    | LoadTestAdministrationGetTestFileDefaultResponse,
): Promise<FileInfo> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    url: result.body["url"],
    fileName: result.body["fileName"],
    fileType: result.body["fileType"],
    expireDateTime: result.body["expireDateTime"],
    validationStatus: result.body["validationStatus"],
    validationFailureDetails: result.body["validationFailureDetails"],
  };
}

/** Get test file by the file name. */
export async function getTestFile(
  context: Client,
  testId: string,
  fileName: string,
  options: GetTestFileOptions = { requestOptions: {} },
): Promise<FileInfo> {
  const result = await _getTestFileSend(context, testId, fileName, options);
  return _getTestFileDeserialize(result);
}

export function _listTestFilesSend(
  context: Client,
  testId: string,
  options: ListTestFilesOptions = { requestOptions: {} },
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
    | LoadTestAdministrationListTestFilesDefaultResponse,
): Promise<PagedFileInfo> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      url: p["url"],
      fileName: p["fileName"],
      fileType: p["fileType"],
      expireDateTime: p["expireDateTime"],
      validationStatus: p["validationStatus"],
      validationFailureDetails: p["validationFailureDetails"],
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Get all test files. */
export function listTestFiles(
  context: Client,
  testId: string,
  options: ListTestFilesOptions = { requestOptions: {} },
): PagedAsyncIterableIterator<FileInfo> {
  return buildPagedAsyncIterator(
    context,
    () => _listTestFilesSend(context, testId, options),
    _listTestFilesDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listTestsSend(
  context: Client,
  options: ListTestsOptions = { requestOptions: {} },
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
    | LoadTestAdministrationListTestsDefaultResponse,
): Promise<PagedTest> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      passFailCriteria: !p.passFailCriteria
        ? undefined
        : { passFailMetrics: p.passFailCriteria?.["passFailMetrics"] },
      secrets: p["secrets"],
      certificate: !p.certificate
        ? undefined
        : {
            value: p.certificate?.["value"],
            type: p.certificate?.["type"],
            name: p.certificate?.["name"],
          },
      environmentVariables: p["environmentVariables"],
      loadTestConfiguration: !p.loadTestConfiguration
        ? undefined
        : {
            engineInstances: p.loadTestConfiguration?.["engineInstances"],
            splitAllCSVs: p.loadTestConfiguration?.["splitAllCSVs"],
            quickStartTest: p.loadTestConfiguration?.["quickStartTest"],
            optionalLoadTestConfig: !p.loadTestConfiguration
              ?.optionalLoadTestConfig
              ? undefined
              : {
                  endpointUrl:
                    p.loadTestConfiguration?.optionalLoadTestConfig?.[
                      "endpointUrl"
                    ],
                  virtualUsers:
                    p.loadTestConfiguration?.optionalLoadTestConfig?.[
                      "virtualUsers"
                    ],
                  rampUpTime:
                    p.loadTestConfiguration?.optionalLoadTestConfig?.[
                      "rampUpTime"
                    ],
                  duration:
                    p.loadTestConfiguration?.optionalLoadTestConfig?.[
                      "duration"
                    ],
                },
          },
      inputArtifacts: !p.inputArtifacts
        ? undefined
        : {
            configFileInfo: !p.inputArtifacts?.configFileInfo
              ? undefined
              : {
                  url: p.inputArtifacts?.configFileInfo?.["url"],
                  fileName: p.inputArtifacts?.configFileInfo?.["fileName"],
                  fileType: p.inputArtifacts?.configFileInfo?.["fileType"],
                  expireDateTime:
                    p.inputArtifacts?.configFileInfo?.["expireDateTime"],
                  validationStatus:
                    p.inputArtifacts?.configFileInfo?.["validationStatus"],
                  validationFailureDetails:
                    p.inputArtifacts?.configFileInfo?.[
                      "validationFailureDetails"
                    ],
                },
            testScriptFileInfo: !p.inputArtifacts?.testScriptFileInfo
              ? undefined
              : {
                  url: p.inputArtifacts?.testScriptFileInfo?.["url"],
                  fileName: p.inputArtifacts?.testScriptFileInfo?.["fileName"],
                  fileType: p.inputArtifacts?.testScriptFileInfo?.["fileType"],
                  expireDateTime:
                    p.inputArtifacts?.testScriptFileInfo?.["expireDateTime"],
                  validationStatus:
                    p.inputArtifacts?.testScriptFileInfo?.["validationStatus"],
                  validationFailureDetails:
                    p.inputArtifacts?.testScriptFileInfo?.[
                      "validationFailureDetails"
                    ],
                },
            userPropFileInfo: !p.inputArtifacts?.userPropFileInfo
              ? undefined
              : {
                  url: p.inputArtifacts?.userPropFileInfo?.["url"],
                  fileName: p.inputArtifacts?.userPropFileInfo?.["fileName"],
                  fileType: p.inputArtifacts?.userPropFileInfo?.["fileType"],
                  expireDateTime:
                    p.inputArtifacts?.userPropFileInfo?.["expireDateTime"],
                  validationStatus:
                    p.inputArtifacts?.userPropFileInfo?.["validationStatus"],
                  validationFailureDetails:
                    p.inputArtifacts?.userPropFileInfo?.[
                      "validationFailureDetails"
                    ],
                },
            inputArtifactsZipFileInfo: !p.inputArtifacts
              ?.inputArtifactsZipFileInfo
              ? undefined
              : {
                  url: p.inputArtifacts?.inputArtifactsZipFileInfo?.["url"],
                  fileName:
                    p.inputArtifacts?.inputArtifactsZipFileInfo?.["fileName"],
                  fileType:
                    p.inputArtifacts?.inputArtifactsZipFileInfo?.["fileType"],
                  expireDateTime:
                    p.inputArtifacts?.inputArtifactsZipFileInfo?.[
                      "expireDateTime"
                    ],
                  validationStatus:
                    p.inputArtifacts?.inputArtifactsZipFileInfo?.[
                      "validationStatus"
                    ],
                  validationFailureDetails:
                    p.inputArtifacts?.inputArtifactsZipFileInfo?.[
                      "validationFailureDetails"
                    ],
                },
            additionalFileInfo: !p.inputArtifacts?.["additionalFileInfo"]
              ? p.inputArtifacts?.["additionalFileInfo"]
              : p.inputArtifacts?.["additionalFileInfo"].map((p) => ({
                  url: p["url"],
                  fileName: p["fileName"],
                  fileType: p["fileType"],
                  expireDateTime: p["expireDateTime"],
                  validationStatus: p["validationStatus"],
                  validationFailureDetails: p["validationFailureDetails"],
                })),
          },
      testId: p["testId"],
      description: p["description"],
      displayName: p["displayName"],
      subnetId: p["subnetId"],
      keyvaultReferenceIdentityType: p["keyvaultReferenceIdentityType"],
      keyvaultReferenceIdentityId: p["keyvaultReferenceIdentityId"],
      createdDateTime: p["createdDateTime"],
      createdBy: p["createdBy"],
      lastModifiedDateTime: p["lastModifiedDateTime"],
      lastModifiedBy: p["lastModifiedBy"],
    })),
    nextLink: result.body["nextLink"],
  };
}

/**
 * Get all load tests by the fully qualified resource Id e.g
 * subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.LoadTestService/loadtests/{resName}.
 */
export function listTests(
  context: Client,
  options: ListTestsOptions = { requestOptions: {} },
): PagedAsyncIterableIterator<Test> {
  return buildPagedAsyncIterator(
    context,
    () => _listTestsSend(context, options),
    _listTestsDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _uploadTestFileSend(
  context: Client,
  testId: string,
  fileName: string,
  body: Uint8Array,
  options: UploadTestFileOptions = { requestOptions: {} },
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
    | LoadTestAdministrationUploadTestFileDefaultResponse,
): Promise<FileInfo> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    url: result.body["url"],
    fileName: result.body["fileName"],
    fileType: result.body["fileType"],
    expireDateTime: result.body["expireDateTime"],
    validationStatus: result.body["validationStatus"],
    validationFailureDetails: result.body["validationFailureDetails"],
  };
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
  options: UploadTestFileOptions = { requestOptions: {} },
): Promise<FileInfo> {
  const result = await _uploadTestFileSend(
    context,
    testId,
    fileName,
    body,
    options,
  );
  return _uploadTestFileDeserialize(result);
}

export function _deleteTestFileSend(
  context: Client,
  testId: string,
  fileName: string,
  options: DeleteTestFileOptions = { requestOptions: {} },
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
    | LoadTestAdministrationDeleteTestFileDefaultResponse,
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
  options: DeleteTestFileOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteTestFileSend(context, testId, fileName, options);
  return _deleteTestFileDeserialize(result);
}

export function _deleteTestSend(
  context: Client,
  testId: string,
  options: DeleteTestOptions = { requestOptions: {} },
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
    | LoadTestAdministrationDeleteTestDefaultResponse,
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
  options: DeleteTestOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteTestSend(context, testId, options);
  return _deleteTestDeserialize(result);
}
