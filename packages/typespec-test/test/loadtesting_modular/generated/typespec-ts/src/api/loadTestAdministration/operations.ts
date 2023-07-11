// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  isUnexpected,
  AzureLoadTestingContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  OperationOptions,
} from "@azure-rest/core-client";
import {
  Test,
  PassFailCriteria,
  Secret,
  CertificateMetadata,
  LoadTestConfiguration,
  TestInputArtifacts,
  FileInfo,
  FileType,
  TestAppComponents,
  AppComponent,
  TestServerMetricConfig,
  ResourceMetric,
  FileInfoList,
  TestsList,
} from "./models.js";

export interface CreateOrUpdateTestOptions extends OperationOptions {
  /** Pass fail criteria for a test. */
  passFailCriteria?: PassFailCriteria;
  /**
   * Secrets can be stored in an Azure Key Vault or any other secret store. If the
   * secret is stored in an Azure Key Vault, the value should be the secret
   * identifier and the type should be AKV_SECRET_URI. If the secret is stored
   * elsewhere, the secret value should be provided directly and the type should be
   * SECRET_VALUE.
   */
  secrets?: Record<string, Secret>;
  /** Certificates metadata */
  certificate?: CertificateMetadata;
  /** Environment variables which are defined as a set of <name,value> pairs. */
  environmentVariables?: Record<string, string>;
  /** The load test configuration. */
  loadTestConfiguration?: LoadTestConfiguration;
  /** The input artifacts for the test. */
  inputArtifacts?: TestInputArtifacts;
  /** Unique test name as identifier. */
  testId?: string;
  /** The test description. */
  description?: string;
  /** Display name of a test. */
  displayName?: string;
  /** Subnet ID on which the load test instances should run. */
  subnetId?: string;
  /** Type of the managed identity referencing the Key vault. */
  keyvaultReferenceIdentityType?: string;
  /** Resource Id of the managed identity referencing the Key vault. */
  keyvaultReferenceIdentityId?: string;
  /** The creation datetime(ISO 8601 literal format). */
  createdDateTime?: any;
  /** The user that created. */
  createdBy?: string;
  /** The last Modified datetime(ISO 8601 literal format). */
  lastModifiedDateTime?: any;
  /** The user that last modified. */
  lastModifiedBy?: string;
  /** */
  contentType?: string;
}

export function _createOrUpdateTestSend(
  context: Client,
  testId: string,
  options: CreateOrUpdateTestOptions = { requestOptions: {} }
): StreamableMethod<
  | CreateOrUpdateTest200Response
  | CreateOrUpdateTest201Response
  | CreateOrUpdateTestDefaultResponse
> {
  return context
    .path("/tests/{testId}", testId)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: {
        passFailCriteria: options?.passFailCriteria,
        secrets: options?.secrets,
        certificate: options?.certificate,
        environmentVariables: options?.environmentVariables,
        loadTestConfiguration: options?.loadTestConfiguration,
        description: options?.description,
        displayName: options?.displayName,
        subnetId: options?.subnetId,
        keyvaultReferenceIdentityType: options?.keyvaultReferenceIdentityType,
        keyvaultReferenceIdentityId: options?.keyvaultReferenceIdentityId,
      },
    });
}

export async function _createOrUpdateTestDeserialize(
  result:
    | CreateOrUpdateTest200Response
    | CreateOrUpdateTest201Response
    | CreateOrUpdateTestDefaultResponse
): Promise<Test> {
  if (isUnexpected(result)) {
    throw result.body;
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
          additionalFileInfo: (
            result.body.inputArtifacts?.["additionalFileInfo"] ?? []
          ).map((p) => ({
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
  options: CreateOrUpdateTestOptions = { requestOptions: {} }
): Promise<Test> {
  const result = await _createOrUpdateTestSend(context, testId, options);
  return _createOrUpdateTestDeserialize(result);
}

export interface CreateOrUpdateAppComponentsOptions extends OperationOptions {
  /** Test identifier */
  testId?: string;
  /** The creation datetime(ISO 8601 literal format). */
  createdDateTime?: any;
  /** The user that created. */
  createdBy?: string;
  /** The last Modified datetime(ISO 8601 literal format). */
  lastModifiedDateTime?: any;
  /** The user that last modified. */
  lastModifiedBy?: string;
  /** */
  contentType?: string;
}

export function _createOrUpdateAppComponentsSend(
  context: Client,
  components: Record<string, AppComponent>,
  testId: string,
  options: CreateOrUpdateAppComponentsOptions = { requestOptions: {} }
): StreamableMethod<
  | CreateOrUpdateAppComponents200Response
  | CreateOrUpdateAppComponents201Response
  | CreateOrUpdateAppComponentsDefaultResponse
> {
  return context
    .path("/tests/{testId}/app-components", testId)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: { components: components },
    });
}

export async function _createOrUpdateAppComponentsDeserialize(
  result:
    | CreateOrUpdateAppComponents200Response
    | CreateOrUpdateAppComponents201Response
    | CreateOrUpdateAppComponentsDefaultResponse
): Promise<TestAppComponents> {
  if (isUnexpected(result)) {
    throw result.body;
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
  components: Record<string, AppComponent>,
  testId: string,
  options: CreateOrUpdateAppComponentsOptions = { requestOptions: {} }
): Promise<TestAppComponents> {
  const result = await _createOrUpdateAppComponentsSend(
    context,
    components,
    testId,
    options
  );
  return _createOrUpdateAppComponentsDeserialize(result);
}

export interface CreateOrUpdateServerMetricsConfigOptions
  extends OperationOptions {
  /** Test identifier */
  testId?: string;
  /**
   * Azure resource metrics collection {metric id : metrics object} (Refer :
   * https://docs.microsoft.com/en-us/rest/api/monitor/metric-definitions/list#metricdefinition
   * for metric id).
   */
  metrics?: Record<string, ResourceMetric>;
  /** The creation datetime(ISO 8601 literal format). */
  createdDateTime?: any;
  /** The user that created. */
  createdBy?: string;
  /** The last Modified datetime(ISO 8601 literal format). */
  lastModifiedDateTime?: any;
  /** The user that last modified. */
  lastModifiedBy?: string;
  /** */
  contentType?: string;
}

export function _createOrUpdateServerMetricsConfigSend(
  context: Client,
  testId: string,
  options: CreateOrUpdateServerMetricsConfigOptions = { requestOptions: {} }
): StreamableMethod<
  | CreateOrUpdateServerMetricsConfig200Response
  | CreateOrUpdateServerMetricsConfig201Response
  | CreateOrUpdateServerMetricsConfigDefaultResponse
> {
  return context
    .path("/tests/{testId}/server-metrics-config", testId)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: { metrics: options?.metrics },
    });
}

export async function _createOrUpdateServerMetricsConfigDeserialize(
  result:
    | CreateOrUpdateServerMetricsConfig200Response
    | CreateOrUpdateServerMetricsConfig201Response
    | CreateOrUpdateServerMetricsConfigDefaultResponse
): Promise<TestServerMetricConfig> {
  if (isUnexpected(result)) {
    throw result.body;
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
  options: CreateOrUpdateServerMetricsConfigOptions = { requestOptions: {} }
): Promise<TestServerMetricConfig> {
  const result = await _createOrUpdateServerMetricsConfigSend(
    context,
    testId,
    options
  );
  return _createOrUpdateServerMetricsConfigDeserialize(result);
}

export interface GetAppComponentsOptions extends OperationOptions {}

export function _getAppComponentsSend(
  context: Client,
  testId: string,
  options: GetAppComponentsOptions = { requestOptions: {} }
): StreamableMethod<
  GetAppComponents200Response | GetAppComponentsDefaultResponse
> {
  return context
    .path("/tests/{testId}/app-components", testId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getAppComponentsDeserialize(
  result: GetAppComponents200Response | GetAppComponentsDefaultResponse
): Promise<TestAppComponents> {
  if (isUnexpected(result)) {
    throw result.body;
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
  options: GetAppComponentsOptions = { requestOptions: {} }
): Promise<TestAppComponents> {
  const result = await _getAppComponentsSend(context, testId, options);
  return _getAppComponentsDeserialize(result);
}

export interface GetServerMetricsConfigOptions extends OperationOptions {}

export function _getServerMetricsConfigSend(
  context: Client,
  testId: string,
  options: GetServerMetricsConfigOptions = { requestOptions: {} }
): StreamableMethod<
  GetServerMetricsConfig200Response | GetServerMetricsConfigDefaultResponse
> {
  return context
    .path("/tests/{testId}/server-metrics-config", testId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getServerMetricsConfigDeserialize(
  result:
    | GetServerMetricsConfig200Response
    | GetServerMetricsConfigDefaultResponse
): Promise<TestServerMetricConfig> {
  if (isUnexpected(result)) {
    throw result.body;
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
  options: GetServerMetricsConfigOptions = { requestOptions: {} }
): Promise<TestServerMetricConfig> {
  const result = await _getServerMetricsConfigSend(context, testId, options);
  return _getServerMetricsConfigDeserialize(result);
}

export interface GetTestOptions extends OperationOptions {}

export function _getTestSend(
  context: Client,
  testId: string,
  options: GetTestOptions = { requestOptions: {} }
): StreamableMethod<GetTest200Response | GetTestDefaultResponse> {
  return context
    .path("/tests/{testId}", testId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getTestDeserialize(
  result: GetTest200Response | GetTestDefaultResponse
): Promise<Test> {
  if (isUnexpected(result)) {
    throw result.body;
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
          additionalFileInfo: (
            result.body.inputArtifacts?.["additionalFileInfo"] ?? []
          ).map((p) => ({
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
  options: GetTestOptions = { requestOptions: {} }
): Promise<Test> {
  const result = await _getTestSend(context, testId, options);
  return _getTestDeserialize(result);
}

export interface GetTestFileOptions extends OperationOptions {}

export function _getTestFileSend(
  context: Client,
  testId: string,
  fileName: string,
  options: GetTestFileOptions = { requestOptions: {} }
): StreamableMethod<GetTestFile200Response | GetTestFileDefaultResponse> {
  return context
    .path("/tests/{testId}/files/{fileName}", testId, fileName)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getTestFileDeserialize(
  result: GetTestFile200Response | GetTestFileDefaultResponse
): Promise<FileInfo> {
  if (isUnexpected(result)) {
    throw result.body;
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
  options: GetTestFileOptions = { requestOptions: {} }
): Promise<FileInfo> {
  const result = await _getTestFileSend(context, testId, fileName, options);
  return _getTestFileDeserialize(result);
}

export interface ListTestFilesOptions extends OperationOptions {}

export function _listTestFilesSend(
  context: Client,
  testId: string,
  options: ListTestFilesOptions = { requestOptions: {} }
): StreamableMethod<ListTestFiles200Response | ListTestFilesDefaultResponse> {
  return context
    .path("/tests/{testId}/files", testId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listTestFilesDeserialize(
  result: ListTestFiles200Response | ListTestFilesDefaultResponse
): Promise<FileInfoList> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    value: (result.body["value"] ?? []).map((p) => ({
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
export async function listTestFiles(
  context: Client,
  testId: string,
  options: ListTestFilesOptions = { requestOptions: {} }
): Promise<FileInfoList> {
  const result = await _listTestFilesSend(context, testId, options);
  return _listTestFilesDeserialize(result);
}

export interface ListTestsOptions extends OperationOptions {
  /**
   * Sort on the supported fields in (field asc/desc) format. eg:
   * lastModifiedDateTime asc. Supported fields - lastModifiedDateTime
   */
  orderby?: string;
  /**
   * Prefix based, case sensitive search on searchable fields - displayName,
   * createdBy. For example, to search for a test, with display name is Login Test,
   * the search parameter can be Login.
   */
  search?: string;
  /**
   * Start DateTime(ISO 8601 literal format) of the last updated time range to
   * filter tests.
   */
  lastModifiedStartTime?: any;
  /**
   * End DateTime(ISO 8601 literal format) of the last updated time range to filter
   * tests.
   */
  lastModifiedEndTime?: any;
  /** Number of results in response. */
  maxpagesize?: number;
}

export function _listTestsSend(
  context: Client,
  options: ListTestsOptions = { requestOptions: {} }
): StreamableMethod<ListTests200Response | ListTestsDefaultResponse> {
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
  result: ListTests200Response | ListTestsDefaultResponse
): Promise<TestsList> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    value: (result.body["value"] ?? []).map((p) => ({
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
            additionalFileInfo: (
              p.inputArtifacts?.["additionalFileInfo"] ?? []
            ).map((p) => ({
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
export async function listTests(
  context: Client,
  options: ListTestsOptions = { requestOptions: {} }
): Promise<TestsList> {
  const result = await _listTestsSend(context, options);
  return _listTestsDeserialize(result);
}

export interface UploadTestFileOptions extends OperationOptions {
  /** */
  contentType?: string;
  /** File type */
  fileType?: FileType;
}

export function _uploadTestFileSend(
  context: Client,
  testId: string,
  fileName: string,
  options: UploadTestFileOptions = { requestOptions: {} }
): StreamableMethod<UploadTestFile201Response | UploadTestFileDefaultResponse> {
  return context
    .path("/tests/{testId}/files/{fileName}", testId, fileName)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "application/octet-stream",
      queryParameters: { fileType: options?.fileType },
    });
}

export async function _uploadTestFileDeserialize(
  result: UploadTestFile201Response | UploadTestFileDefaultResponse
): Promise<FileInfo> {
  if (isUnexpected(result)) {
    throw result.body;
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
  options: UploadTestFileOptions = { requestOptions: {} }
): Promise<FileInfo> {
  const result = await _uploadTestFileSend(context, testId, fileName, options);
  return _uploadTestFileDeserialize(result);
}

export interface DeleteTestFileOptions extends OperationOptions {}

export function _deleteTestFileSend(
  context: Client,
  testId: string,
  fileName: string,
  options: DeleteTestFileOptions = { requestOptions: {} }
): StreamableMethod<DeleteTestFile204Response | DeleteTestFileDefaultResponse> {
  return context
    .path("/tests/{testId}/files/{fileName}", testId, fileName)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteTestFileDeserialize(
  result: DeleteTestFile204Response | DeleteTestFileDefaultResponse
): Promise<void> {
  if (isUnexpected(result)) {
    throw result.body;
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

export interface DeleteTestOptions extends OperationOptions {}

export function _deleteTestSend(
  context: Client,
  testId: string,
  options: DeleteTestOptions = { requestOptions: {} }
): StreamableMethod<DeleteTest204Response | DeleteTestDefaultResponse> {
  return context
    .path("/tests/{testId}", testId)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteTestDeserialize(
  result: DeleteTest204Response | DeleteTestDefaultResponse
): Promise<void> {
  if (isUnexpected(result)) {
    throw result.body;
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
