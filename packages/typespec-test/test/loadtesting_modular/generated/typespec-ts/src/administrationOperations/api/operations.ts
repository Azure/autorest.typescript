// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  passFailCriteriaSerializer,
  secretSerializer,
  certificateMetadataSerializer,
  loadTestConfigurationSerializer,
  appComponentSerializer,
  resourceMetricSerializer,
  Test,
  FileInfo,
  TestAppComponents,
  TestServerMetricConfig,
  _PagedFileInfo,
  _PagedTest,
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
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  CreateOrUpdateTestOptionalParams,
  CreateOrUpdateAppComponentsOptionalParams,
  CreateOrUpdateServerMetricsConfigOptionalParams,
  GetAppComponentsOptionalParams,
  GetServerMetricsConfigOptionalParams,
  GetTestOptionalParams,
  GetTestFileOptionalParams,
  ListTestFilesOptionalParams,
  ListTestsOptionalParams,
  UploadTestFileOptionalParams,
  DeleteTestFileOptionalParams,
  DeleteTestOptionalParams,
} from "../models/options.js";

export function _createOrUpdateTestSend(
  context: Client,
  testId: string,
  body: Test,
  options: CreateOrUpdateTestOptionalParams = { requestOptions: {} },
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
          ? body.passFailCriteria
          : passFailCriteriaSerializer(body.passFailCriteria),
        secrets: !body.secrets
          ? body.secrets
          : (serializeRecord(body.secrets as any, secretSerializer) as any),
        certificate: !body.certificate
          ? body.certificate
          : certificateMetadataSerializer(body.certificate),
        environmentVariables: !body.environmentVariables
          ? body.environmentVariables
          : (serializeRecord(body.environmentVariables as any) as any),
        loadTestConfiguration: !body.loadTestConfiguration
          ? body.loadTestConfiguration
          : loadTestConfigurationSerializer(body.loadTestConfiguration),
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

  const _result =
    result as unknown as LoadTestAdministrationCreateOrUpdateTest201Response;
  return {
    passFailCriteria: !_result.body.passFailCriteria
      ? undefined
      : { passFailMetrics: _result.body.passFailCriteria?.["passFailMetrics"] },
    secrets: _result.body["secrets"],
    certificate: !_result.body.certificate
      ? undefined
      : {
          value: _result.body.certificate?.["value"],
          type: _result.body.certificate?.["type"],
          name: _result.body.certificate?.["name"],
        },
    environmentVariables: _result.body["environmentVariables"],
    loadTestConfiguration: !_result.body.loadTestConfiguration
      ? undefined
      : {
          engineInstances:
            _result.body.loadTestConfiguration?.["engineInstances"],
          splitAllCSVs: _result.body.loadTestConfiguration?.["splitAllCSVs"],
          quickStartTest:
            _result.body.loadTestConfiguration?.["quickStartTest"],
          optionalLoadTestConfig: !_result.body.loadTestConfiguration
            ?.optionalLoadTestConfig
            ? undefined
            : {
                endpointUrl:
                  _result.body.loadTestConfiguration?.optionalLoadTestConfig?.[
                    "endpointUrl"
                  ],
                virtualUsers:
                  _result.body.loadTestConfiguration?.optionalLoadTestConfig?.[
                    "virtualUsers"
                  ],
                rampUpTime:
                  _result.body.loadTestConfiguration?.optionalLoadTestConfig?.[
                    "rampUpTime"
                  ],
                duration:
                  _result.body.loadTestConfiguration?.optionalLoadTestConfig?.[
                    "duration"
                  ],
              },
        },
    inputArtifacts: !_result.body.inputArtifacts
      ? undefined
      : {
          configFileInfo: !_result.body.inputArtifacts?.configFileInfo
            ? undefined
            : {
                url: _result.body.inputArtifacts?.configFileInfo?.["url"],
                fileName:
                  _result.body.inputArtifacts?.configFileInfo?.["fileName"],
                fileType:
                  _result.body.inputArtifacts?.configFileInfo?.["fileType"],
                expireDateTime:
                  _result.body.inputArtifacts?.configFileInfo?.[
                    "expireDateTime"
                  ],
                validationStatus:
                  _result.body.inputArtifacts?.configFileInfo?.[
                    "validationStatus"
                  ],
                validationFailureDetails:
                  _result.body.inputArtifacts?.configFileInfo?.[
                    "validationFailureDetails"
                  ],
              },
          testScriptFileInfo: !_result.body.inputArtifacts?.testScriptFileInfo
            ? undefined
            : {
                url: _result.body.inputArtifacts?.testScriptFileInfo?.["url"],
                fileName:
                  _result.body.inputArtifacts?.testScriptFileInfo?.["fileName"],
                fileType:
                  _result.body.inputArtifacts?.testScriptFileInfo?.["fileType"],
                expireDateTime:
                  _result.body.inputArtifacts?.testScriptFileInfo?.[
                    "expireDateTime"
                  ],
                validationStatus:
                  _result.body.inputArtifacts?.testScriptFileInfo?.[
                    "validationStatus"
                  ],
                validationFailureDetails:
                  _result.body.inputArtifacts?.testScriptFileInfo?.[
                    "validationFailureDetails"
                  ],
              },
          userPropFileInfo: !_result.body.inputArtifacts?.userPropFileInfo
            ? undefined
            : {
                url: _result.body.inputArtifacts?.userPropFileInfo?.["url"],
                fileName:
                  _result.body.inputArtifacts?.userPropFileInfo?.["fileName"],
                fileType:
                  _result.body.inputArtifacts?.userPropFileInfo?.["fileType"],
                expireDateTime:
                  _result.body.inputArtifacts?.userPropFileInfo?.[
                    "expireDateTime"
                  ],
                validationStatus:
                  _result.body.inputArtifacts?.userPropFileInfo?.[
                    "validationStatus"
                  ],
                validationFailureDetails:
                  _result.body.inputArtifacts?.userPropFileInfo?.[
                    "validationFailureDetails"
                  ],
              },
          inputArtifactsZipFileInfo: !_result.body.inputArtifacts
            ?.inputArtifactsZipFileInfo
            ? undefined
            : {
                url: _result.body.inputArtifacts?.inputArtifactsZipFileInfo?.[
                  "url"
                ],
                fileName:
                  _result.body.inputArtifacts?.inputArtifactsZipFileInfo?.[
                    "fileName"
                  ],
                fileType:
                  _result.body.inputArtifacts?.inputArtifactsZipFileInfo?.[
                    "fileType"
                  ],
                expireDateTime:
                  _result.body.inputArtifacts?.inputArtifactsZipFileInfo?.[
                    "expireDateTime"
                  ],
                validationStatus:
                  _result.body.inputArtifacts?.inputArtifactsZipFileInfo?.[
                    "validationStatus"
                  ],
                validationFailureDetails:
                  _result.body.inputArtifacts?.inputArtifactsZipFileInfo?.[
                    "validationFailureDetails"
                  ],
              },
          additionalFileInfo:
            _result.body.inputArtifacts?.["additionalFileInfo"] === undefined
              ? _result.body.inputArtifacts?.["additionalFileInfo"]
              : _result.body.inputArtifacts?.["additionalFileInfo"].map((p) => {
                  return {
                    url: p["url"],
                    fileName: p["fileName"],
                    fileType: p["fileType"],
                    expireDateTime: p["expireDateTime"],
                    validationStatus: p["validationStatus"],
                    validationFailureDetails: p["validationFailureDetails"],
                  };
                }),
        },
    testId: _result.body["testId"],
    description: _result.body["description"],
    displayName: _result.body["displayName"],
    subnetId: _result.body["subnetId"],
    keyvaultReferenceIdentityType:
      _result.body["keyvaultReferenceIdentityType"],
    keyvaultReferenceIdentityId: _result.body["keyvaultReferenceIdentityId"],
    createdDateTime: _result.body["createdDateTime"],
    createdBy: _result.body["createdBy"],
    lastModifiedDateTime: _result.body["lastModifiedDateTime"],
    lastModifiedBy: _result.body["lastModifiedBy"],
  };
}

/** Create a new test or update an existing test. */
export async function createOrUpdateTest(
  context: Client,
  testId: string,
  body: Test,
  options: CreateOrUpdateTestOptionalParams = { requestOptions: {} },
): Promise<Test> {
  const result = await _createOrUpdateTestSend(context, testId, body, options);
  return _createOrUpdateTestDeserialize(result);
}

export function _createOrUpdateAppComponentsSend(
  context: Client,
  testId: string,
  body: TestAppComponents,
  options: CreateOrUpdateAppComponentsOptionalParams = { requestOptions: {} },
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
      body: {
        components: serializeRecord(
          body.components as any,
          appComponentSerializer,
        ) as any,
      },
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

  const _result =
    result as unknown as LoadTestAdministrationCreateOrUpdateAppComponents201Response;
  return {
    components: _result.body["components"],
    testId: _result.body["testId"],
    createdDateTime: _result.body["createdDateTime"],
    createdBy: _result.body["createdBy"],
    lastModifiedDateTime: _result.body["lastModifiedDateTime"],
    lastModifiedBy: _result.body["lastModifiedBy"],
  };
}

/** Associate an app component (collection of azure resources) to a test */
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

export function _createOrUpdateServerMetricsConfigSend(
  context: Client,
  testId: string,
  body: TestServerMetricConfig,
  options: CreateOrUpdateServerMetricsConfigOptionalParams = {
    requestOptions: {},
  },
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
      body: {
        metrics: !body.metrics
          ? body.metrics
          : (serializeRecord(
              body.metrics as any,
              resourceMetricSerializer,
            ) as any),
      },
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

  const _result =
    result as unknown as LoadTestAdministrationCreateOrUpdateServerMetricsConfig201Response;
  return {
    testId: _result.body["testId"],
    metrics: _result.body["metrics"],
    createdDateTime: _result.body["createdDateTime"],
    createdBy: _result.body["createdBy"],
    lastModifiedDateTime: _result.body["lastModifiedDateTime"],
    lastModifiedBy: _result.body["lastModifiedBy"],
  };
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

export function _getAppComponentsSend(
  context: Client,
  testId: string,
  options: GetAppComponentsOptionalParams = { requestOptions: {} },
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

  const _result =
    result as unknown as LoadTestAdministrationGetAppComponents200Response;
  return {
    components: _result.body["components"],
    testId: _result.body["testId"],
    createdDateTime: _result.body["createdDateTime"],
    createdBy: _result.body["createdBy"],
    lastModifiedDateTime: _result.body["lastModifiedDateTime"],
    lastModifiedBy: _result.body["lastModifiedBy"],
  };
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

export function _getServerMetricsConfigSend(
  context: Client,
  testId: string,
  options: GetServerMetricsConfigOptionalParams = { requestOptions: {} },
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

  const _result =
    result as unknown as LoadTestAdministrationGetServerMetricsConfig200Response;
  return {
    testId: _result.body["testId"],
    metrics: _result.body["metrics"],
    createdDateTime: _result.body["createdDateTime"],
    createdBy: _result.body["createdBy"],
    lastModifiedDateTime: _result.body["lastModifiedDateTime"],
    lastModifiedBy: _result.body["lastModifiedBy"],
  };
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

export function _getTestSend(
  context: Client,
  testId: string,
  options: GetTestOptionalParams = { requestOptions: {} },
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

  const _result = result as unknown as LoadTestAdministrationGetTest200Response;
  return {
    passFailCriteria: !_result.body.passFailCriteria
      ? undefined
      : { passFailMetrics: _result.body.passFailCriteria?.["passFailMetrics"] },
    secrets: _result.body["secrets"],
    certificate: !_result.body.certificate
      ? undefined
      : {
          value: _result.body.certificate?.["value"],
          type: _result.body.certificate?.["type"],
          name: _result.body.certificate?.["name"],
        },
    environmentVariables: _result.body["environmentVariables"],
    loadTestConfiguration: !_result.body.loadTestConfiguration
      ? undefined
      : {
          engineInstances:
            _result.body.loadTestConfiguration?.["engineInstances"],
          splitAllCSVs: _result.body.loadTestConfiguration?.["splitAllCSVs"],
          quickStartTest:
            _result.body.loadTestConfiguration?.["quickStartTest"],
          optionalLoadTestConfig: !_result.body.loadTestConfiguration
            ?.optionalLoadTestConfig
            ? undefined
            : {
                endpointUrl:
                  _result.body.loadTestConfiguration?.optionalLoadTestConfig?.[
                    "endpointUrl"
                  ],
                virtualUsers:
                  _result.body.loadTestConfiguration?.optionalLoadTestConfig?.[
                    "virtualUsers"
                  ],
                rampUpTime:
                  _result.body.loadTestConfiguration?.optionalLoadTestConfig?.[
                    "rampUpTime"
                  ],
                duration:
                  _result.body.loadTestConfiguration?.optionalLoadTestConfig?.[
                    "duration"
                  ],
              },
        },
    inputArtifacts: !_result.body.inputArtifacts
      ? undefined
      : {
          configFileInfo: !_result.body.inputArtifacts?.configFileInfo
            ? undefined
            : {
                url: _result.body.inputArtifacts?.configFileInfo?.["url"],
                fileName:
                  _result.body.inputArtifacts?.configFileInfo?.["fileName"],
                fileType:
                  _result.body.inputArtifacts?.configFileInfo?.["fileType"],
                expireDateTime:
                  _result.body.inputArtifacts?.configFileInfo?.[
                    "expireDateTime"
                  ],
                validationStatus:
                  _result.body.inputArtifacts?.configFileInfo?.[
                    "validationStatus"
                  ],
                validationFailureDetails:
                  _result.body.inputArtifacts?.configFileInfo?.[
                    "validationFailureDetails"
                  ],
              },
          testScriptFileInfo: !_result.body.inputArtifacts?.testScriptFileInfo
            ? undefined
            : {
                url: _result.body.inputArtifacts?.testScriptFileInfo?.["url"],
                fileName:
                  _result.body.inputArtifacts?.testScriptFileInfo?.["fileName"],
                fileType:
                  _result.body.inputArtifacts?.testScriptFileInfo?.["fileType"],
                expireDateTime:
                  _result.body.inputArtifacts?.testScriptFileInfo?.[
                    "expireDateTime"
                  ],
                validationStatus:
                  _result.body.inputArtifacts?.testScriptFileInfo?.[
                    "validationStatus"
                  ],
                validationFailureDetails:
                  _result.body.inputArtifacts?.testScriptFileInfo?.[
                    "validationFailureDetails"
                  ],
              },
          userPropFileInfo: !_result.body.inputArtifacts?.userPropFileInfo
            ? undefined
            : {
                url: _result.body.inputArtifacts?.userPropFileInfo?.["url"],
                fileName:
                  _result.body.inputArtifacts?.userPropFileInfo?.["fileName"],
                fileType:
                  _result.body.inputArtifacts?.userPropFileInfo?.["fileType"],
                expireDateTime:
                  _result.body.inputArtifacts?.userPropFileInfo?.[
                    "expireDateTime"
                  ],
                validationStatus:
                  _result.body.inputArtifacts?.userPropFileInfo?.[
                    "validationStatus"
                  ],
                validationFailureDetails:
                  _result.body.inputArtifacts?.userPropFileInfo?.[
                    "validationFailureDetails"
                  ],
              },
          inputArtifactsZipFileInfo: !_result.body.inputArtifacts
            ?.inputArtifactsZipFileInfo
            ? undefined
            : {
                url: _result.body.inputArtifacts?.inputArtifactsZipFileInfo?.[
                  "url"
                ],
                fileName:
                  _result.body.inputArtifacts?.inputArtifactsZipFileInfo?.[
                    "fileName"
                  ],
                fileType:
                  _result.body.inputArtifacts?.inputArtifactsZipFileInfo?.[
                    "fileType"
                  ],
                expireDateTime:
                  _result.body.inputArtifacts?.inputArtifactsZipFileInfo?.[
                    "expireDateTime"
                  ],
                validationStatus:
                  _result.body.inputArtifacts?.inputArtifactsZipFileInfo?.[
                    "validationStatus"
                  ],
                validationFailureDetails:
                  _result.body.inputArtifacts?.inputArtifactsZipFileInfo?.[
                    "validationFailureDetails"
                  ],
              },
          additionalFileInfo:
            _result.body.inputArtifacts?.["additionalFileInfo"] === undefined
              ? _result.body.inputArtifacts?.["additionalFileInfo"]
              : _result.body.inputArtifacts?.["additionalFileInfo"].map((p) => {
                  return {
                    url: p["url"],
                    fileName: p["fileName"],
                    fileType: p["fileType"],
                    expireDateTime: p["expireDateTime"],
                    validationStatus: p["validationStatus"],
                    validationFailureDetails: p["validationFailureDetails"],
                  };
                }),
        },
    testId: _result.body["testId"],
    description: _result.body["description"],
    displayName: _result.body["displayName"],
    subnetId: _result.body["subnetId"],
    keyvaultReferenceIdentityType:
      _result.body["keyvaultReferenceIdentityType"],
    keyvaultReferenceIdentityId: _result.body["keyvaultReferenceIdentityId"],
    createdDateTime: _result.body["createdDateTime"],
    createdBy: _result.body["createdBy"],
    lastModifiedDateTime: _result.body["lastModifiedDateTime"],
    lastModifiedBy: _result.body["lastModifiedBy"],
  };
}

/** Get load test details by test name */
export async function getTest(
  context: Client,
  testId: string,
  options: GetTestOptionalParams = { requestOptions: {} },
): Promise<Test> {
  const result = await _getTestSend(context, testId, options);
  return _getTestDeserialize(result);
}

export function _getTestFileSend(
  context: Client,
  testId: string,
  fileName: string,
  options: GetTestFileOptionalParams = { requestOptions: {} },
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

  const _result =
    result as unknown as LoadTestAdministrationGetTestFile200Response;
  return {
    url: _result.body["url"],
    fileName: _result.body["fileName"],
    fileType: _result.body["fileType"],
    expireDateTime: _result.body["expireDateTime"],
    validationStatus: _result.body["validationStatus"],
    validationFailureDetails: _result.body["validationFailureDetails"],
  };
}

/** Get test file by the file name. */
export async function getTestFile(
  context: Client,
  testId: string,
  fileName: string,
  options: GetTestFileOptionalParams = { requestOptions: {} },
): Promise<FileInfo> {
  const result = await _getTestFileSend(context, testId, fileName, options);
  return _getTestFileDeserialize(result);
}

export function _listTestFilesSend(
  context: Client,
  testId: string,
  options: ListTestFilesOptionalParams = { requestOptions: {} },
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
): Promise<_PagedFileInfo> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const _result =
    result as unknown as LoadTestAdministrationListTestFiles200Response;
  return {
    value: _result.body["value"].map((p) => {
      return {
        url: p["url"],
        fileName: p["fileName"],
        fileType: p["fileType"],
        expireDateTime: p["expireDateTime"],
        validationStatus: p["validationStatus"],
        validationFailureDetails: p["validationFailureDetails"],
      };
    }),
    nextLink: _result.body["nextLink"],
  };
}

/** Get all test files. */
export function listTestFiles(
  context: Client,
  testId: string,
  options: ListTestFilesOptionalParams = { requestOptions: {} },
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
  options: ListTestsOptionalParams = { requestOptions: {} },
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
): Promise<_PagedTest> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const _result =
    result as unknown as LoadTestAdministrationListTests200Response;
  return {
    value: _result.body["value"].map((p) => {
      return {
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
                    fileName:
                      p.inputArtifacts?.testScriptFileInfo?.["fileName"],
                    fileType:
                      p.inputArtifacts?.testScriptFileInfo?.["fileType"],
                    expireDateTime:
                      p.inputArtifacts?.testScriptFileInfo?.["expireDateTime"],
                    validationStatus:
                      p.inputArtifacts?.testScriptFileInfo?.[
                        "validationStatus"
                      ],
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
              additionalFileInfo:
                p.inputArtifacts?.["additionalFileInfo"] === undefined
                  ? p.inputArtifacts?.["additionalFileInfo"]
                  : p.inputArtifacts?.["additionalFileInfo"].map((p) => {
                      return {
                        url: p["url"],
                        fileName: p["fileName"],
                        fileType: p["fileType"],
                        expireDateTime: p["expireDateTime"],
                        validationStatus: p["validationStatus"],
                        validationFailureDetails: p["validationFailureDetails"],
                      };
                    }),
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
      };
    }),
    nextLink: _result.body["nextLink"],
  };
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
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _uploadTestFileSend(
  context: Client,
  testId: string,
  fileName: string,
  body: Uint8Array,
  options: UploadTestFileOptionalParams = { requestOptions: {} },
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

  const _result =
    result as unknown as LoadTestAdministrationUploadTestFile201Response;
  return {
    url: _result.body["url"],
    fileName: _result.body["fileName"],
    fileType: _result.body["fileType"],
    expireDateTime: _result.body["expireDateTime"],
    validationStatus: _result.body["validationStatus"],
    validationFailureDetails: _result.body["validationFailureDetails"],
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
  options: UploadTestFileOptionalParams = { requestOptions: {} },
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
  options: DeleteTestFileOptionalParams = { requestOptions: {} },
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
  options: DeleteTestFileOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteTestFileSend(context, testId, fileName, options);
  return _deleteTestFileDeserialize(result);
}

export function _deleteTestSend(
  context: Client,
  testId: string,
  options: DeleteTestOptionalParams = { requestOptions: {} },
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
  options: DeleteTestOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteTestSend(context, testId, options);
  return _deleteTestDeserialize(result);
}
