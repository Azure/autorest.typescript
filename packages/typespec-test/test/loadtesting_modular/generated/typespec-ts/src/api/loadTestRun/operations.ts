// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Client, UnexpectedHelper } from "../../rest/loadTestRun/index.js";
import { StreamableMethod } from "@azure-rest/core-client";
import {
  PassFailCriteria,
  Secret,
  CertificateMetadata,
  LoadTestConfiguration,
  FileInfo,
  AppComponent,
  ResourceMetric,
  TestRun,
  ErrorDetails,
  TestRunStatistics,
  TestRunArtifacts,
  PFTestResult,
  Status,
  TestRunAppComponents,
  TestRunServerMetricConfig,
  MetricDefinitionCollection,
  MetricNamespaceCollection,
  DimensionFilter,
  Metrics,
  TestRunsList,
  Interval,
  CustomPage,
} from "./models.js";
import { RequestOptions } from "../../common/interfaces.js";

export interface TestRunOptions extends RequestOptions {
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
  /** Error details if there is any failure in load test run */
  errorDetails?: ErrorDetails[];
  /** Test run statistics. */
  testRunStatistics?: Record<string, TestRunStatistics>;
  /** The load test configuration. */
  loadTestConfiguration?: LoadTestConfiguration;
  /** Collection of test run artifacts */
  testArtifacts?: TestRunArtifacts;
  /** Test result for pass/Fail criteria used during the test run. */
  testResult?: PFTestResult;
  /** Number of virtual users, for which test has been run. */
  virtualUsers?: number;
  /** Display name of a testRun. */
  displayName?: string;
  /** Associated test Id. */
  testId?: string;
  /** The test run description. */
  description?: string;
  /** The test run status. */
  status?: Status;
  /** The test run start DateTime(ISO 8601 literal format). */
  startDateTime?: any;
  /** The test run end DateTime(ISO 8601 literal format). */
  endDateTime?: any;
  /** Test run initiated time. */
  executedDateTime?: any;
  /** Portal url. */
  portalUrl?: string;
  /** Test run duration in milliseconds. */
  duration?: number;
  /** Subnet ID on which the load test instances should run. */
  subnetId?: string;
  /** The creation datetime(ISO 8601 literal format). */
  createdDateTime?: any;
  /** The user that created. */
  createdBy?: string;
  /** The last Modified datetime(ISO 8601 literal format). */
  lastModifiedDateTime?: any;
  /** The user that last modified. */
  lastModifiedBy?: string;
  /** This request has a JSON Merge Patch body. */
  contentType?: string;
  /**
   * Existing test run identifier that should be rerun, if this is provided, the
   * test will run with the JMX file, configuration and app components from the
   * existing test run. You can override the configuration values for new test run
   * in the request body.
   */
  oldTestRunId?: string;
}

export function _testRunSend(
  context: Client.LoadTestRunContext,
  testRunId: string,
  options: TestRunOptions = { requestOptions: {} }
): StreamableMethod<
  TestRun200Response | TestRun201Response | TestRunDefaultResponse
> {
  return context
    .path("/test-runs/{testRunId}", testRunId)
    .patch({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      headers: { ...options.requestOptions?.headers },
      queryParameters: { oldTestRunId: options?.oldTestRunId },
      body: {
        passFailCriteria: options?.passFailCriteria,
        secrets: options?.secrets,
        certificate: options?.certificate,
        environmentVariables: options?.environmentVariables,
        loadTestConfiguration: options?.loadTestConfiguration,
        displayName: options?.displayName,
        testId: options?.testId,
        description: options?.description,
      },
    });
}

export async function _testRunDeserialize(
  result: TestRun200Response | TestRun201Response | TestRunDefaultResponse
): Promise<TestRun> {
  if (UnexpectedHelper.isUnexpected(result)) {
    throw result.body;
  }

  return {
    testRunId: result.body["testRunId"],
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
    errorDetails: (result.body["errorDetails"] ?? []).map((p) => ({
      message: p["message"],
    })),
    testRunStatistics: result.body["testRunStatistics"],
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
    testArtifacts: !result.body.testArtifacts
      ? undefined
      : {
          inputArtifacts: !result.body.testArtifacts?.inputArtifacts
            ? undefined
            : {
                configFileInfo: !result.body.testArtifacts?.inputArtifacts
                  ?.configFileInfo
                  ? undefined
                  : {
                      url: result.body.testArtifacts?.inputArtifacts
                        ?.configFileInfo?.["url"],
                      fileName:
                        result.body.testArtifacts?.inputArtifacts
                          ?.configFileInfo?.["fileName"],
                      fileType:
                        result.body.testArtifacts?.inputArtifacts
                          ?.configFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.inputArtifacts
                          ?.configFileInfo?.["expireDateTime"],
                      validationStatus:
                        result.body.testArtifacts?.inputArtifacts
                          ?.configFileInfo?.["validationStatus"],
                      validationFailureDetails:
                        result.body.testArtifacts?.inputArtifacts
                          ?.configFileInfo?.["validationFailureDetails"],
                    },
                testScriptFileInfo: !result.body.testArtifacts?.inputArtifacts
                  ?.testScriptFileInfo
                  ? undefined
                  : {
                      url: result.body.testArtifacts?.inputArtifacts
                        ?.testScriptFileInfo?.["url"],
                      fileName:
                        result.body.testArtifacts?.inputArtifacts
                          ?.testScriptFileInfo?.["fileName"],
                      fileType:
                        result.body.testArtifacts?.inputArtifacts
                          ?.testScriptFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.inputArtifacts
                          ?.testScriptFileInfo?.["expireDateTime"],
                      validationStatus:
                        result.body.testArtifacts?.inputArtifacts
                          ?.testScriptFileInfo?.["validationStatus"],
                      validationFailureDetails:
                        result.body.testArtifacts?.inputArtifacts
                          ?.testScriptFileInfo?.["validationFailureDetails"],
                    },
                userPropFileInfo: !result.body.testArtifacts?.inputArtifacts
                  ?.userPropFileInfo
                  ? undefined
                  : {
                      url: result.body.testArtifacts?.inputArtifacts
                        ?.userPropFileInfo?.["url"],
                      fileName:
                        result.body.testArtifacts?.inputArtifacts
                          ?.userPropFileInfo?.["fileName"],
                      fileType:
                        result.body.testArtifacts?.inputArtifacts
                          ?.userPropFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.inputArtifacts
                          ?.userPropFileInfo?.["expireDateTime"],
                      validationStatus:
                        result.body.testArtifacts?.inputArtifacts
                          ?.userPropFileInfo?.["validationStatus"],
                      validationFailureDetails:
                        result.body.testArtifacts?.inputArtifacts
                          ?.userPropFileInfo?.["validationFailureDetails"],
                    },
                inputArtifactsZipFileInfo: !result.body.testArtifacts
                  ?.inputArtifacts?.inputArtifactsZipFileInfo
                  ? undefined
                  : {
                      url: result.body.testArtifacts?.inputArtifacts
                        ?.inputArtifactsZipFileInfo?.["url"],
                      fileName:
                        result.body.testArtifacts?.inputArtifacts
                          ?.inputArtifactsZipFileInfo?.["fileName"],
                      fileType:
                        result.body.testArtifacts?.inputArtifacts
                          ?.inputArtifactsZipFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.inputArtifacts
                          ?.inputArtifactsZipFileInfo?.["expireDateTime"],
                      validationStatus:
                        result.body.testArtifacts?.inputArtifacts
                          ?.inputArtifactsZipFileInfo?.["validationStatus"],
                      validationFailureDetails:
                        result.body.testArtifacts?.inputArtifacts
                          ?.inputArtifactsZipFileInfo?.[
                          "validationFailureDetails"
                        ],
                    },
                additionalFileInfo: (
                  result.body.testArtifacts?.inputArtifacts?.[
                    "additionalFileInfo"
                  ] ?? []
                ).map((p) => ({
                  url: p["url"],
                  fileName: p["fileName"],
                  fileType: p["fileType"],
                  expireDateTime: p["expireDateTime"],
                  validationStatus: p["validationStatus"],
                  validationFailureDetails: p["validationFailureDetails"],
                })),
              },
          outputArtifacts: !result.body.testArtifacts?.outputArtifacts
            ? undefined
            : {
                resultFileInfo: !result.body.testArtifacts?.outputArtifacts
                  ?.resultFileInfo
                  ? undefined
                  : {
                      url: result.body.testArtifacts?.outputArtifacts
                        ?.resultFileInfo?.["url"],
                      fileName:
                        result.body.testArtifacts?.outputArtifacts
                          ?.resultFileInfo?.["fileName"],
                      fileType:
                        result.body.testArtifacts?.outputArtifacts
                          ?.resultFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.outputArtifacts
                          ?.resultFileInfo?.["expireDateTime"],
                      validationStatus:
                        result.body.testArtifacts?.outputArtifacts
                          ?.resultFileInfo?.["validationStatus"],
                      validationFailureDetails:
                        result.body.testArtifacts?.outputArtifacts
                          ?.resultFileInfo?.["validationFailureDetails"],
                    },
                logsFileInfo: !result.body.testArtifacts?.outputArtifacts
                  ?.logsFileInfo
                  ? undefined
                  : {
                      url: result.body.testArtifacts?.outputArtifacts
                        ?.logsFileInfo?.["url"],
                      fileName:
                        result.body.testArtifacts?.outputArtifacts
                          ?.logsFileInfo?.["fileName"],
                      fileType:
                        result.body.testArtifacts?.outputArtifacts
                          ?.logsFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.outputArtifacts
                          ?.logsFileInfo?.["expireDateTime"],
                      validationStatus:
                        result.body.testArtifacts?.outputArtifacts
                          ?.logsFileInfo?.["validationStatus"],
                      validationFailureDetails:
                        result.body.testArtifacts?.outputArtifacts
                          ?.logsFileInfo?.["validationFailureDetails"],
                    },
              },
        },
    testResult: result.body["testResult"],
    virtualUsers: result.body["virtualUsers"],
    displayName: result.body["displayName"],
    testId: result.body["testId"],
    description: result.body["description"],
    status: result.body["status"],
    startDateTime: result.body["startDateTime"],
    endDateTime: result.body["endDateTime"],
    executedDateTime: result.body["executedDateTime"],
    portalUrl: result.body["portalUrl"],
    duration: result.body["duration"],
    subnetId: result.body["subnetId"],
    createdDateTime: result.body["createdDateTime"],
    createdBy: result.body["createdBy"],
    lastModifiedDateTime: result.body["lastModifiedDateTime"],
    lastModifiedBy: result.body["lastModifiedBy"],
  };
}

/** Create and start a new test run with the given name. */
export async function testRun(
  context: Client.LoadTestRunContext,
  testRunId: string,
  options: TestRunOptions = { requestOptions: {} }
): Promise<TestRun> {
  const result = await _testRunSend(context, testRunId, options);
  return _testRunDeserialize(result);
}

export interface CreateOrUpdateAppComponentsOptions extends RequestOptions {
  /** Test run identifier */
  testRunId?: string;
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
  context: Client.LoadTestRunContext,
  components: Record<string, AppComponent>,
  testRunId: string,
  options: CreateOrUpdateAppComponentsOptions = { requestOptions: {} }
): StreamableMethod<
  | CreateOrUpdateAppComponents200Response
  | CreateOrUpdateAppComponents201Response
  | CreateOrUpdateAppComponentsDefaultResponse
> {
  return context
    .path("/test-runs/{testRunId}/app-components", testRunId)
    .patch({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      headers: { ...options.requestOptions?.headers },
      body: { components: components },
    });
}

export async function _createOrUpdateAppComponentsDeserialize(
  result:
    | CreateOrUpdateAppComponents200Response
    | CreateOrUpdateAppComponents201Response
    | CreateOrUpdateAppComponentsDefaultResponse
): Promise<TestRunAppComponents> {
  if (UnexpectedHelper.isUnexpected(result)) {
    throw result.body;
  }

  return {
    components: result.body["components"],
    testRunId: result.body["testRunId"],
    createdDateTime: result.body["createdDateTime"],
    createdBy: result.body["createdBy"],
    lastModifiedDateTime: result.body["lastModifiedDateTime"],
    lastModifiedBy: result.body["lastModifiedBy"],
  };
}

/** Associate an app component (collection of azure resources) to a test run */
export async function createOrUpdateAppComponents(
  context: Client.LoadTestRunContext,
  components: Record<string, AppComponent>,
  testRunId: string,
  options: CreateOrUpdateAppComponentsOptions = { requestOptions: {} }
): Promise<TestRunAppComponents> {
  const result = await _createOrUpdateAppComponentsSend(
    context,
    components,
    testRunId,
    options
  );
  return _createOrUpdateAppComponentsDeserialize(result);
}

export interface CreateOrUpdateServerMetricsConfigOptions
  extends RequestOptions {
  /** Test run identifier */
  testRunId?: string;
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
  context: Client.LoadTestRunContext,
  testRunId: string,
  options: CreateOrUpdateServerMetricsConfigOptions = { requestOptions: {} }
): StreamableMethod<
  | CreateOrUpdateServerMetricsConfig200Response
  | CreateOrUpdateServerMetricsConfig201Response
  | CreateOrUpdateServerMetricsConfigDefaultResponse
> {
  return context
    .path("/test-runs/{testRunId}/server-metrics-config", testRunId)
    .patch({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      headers: { ...options.requestOptions?.headers },
      body: { metrics: options?.metrics },
    });
}

export async function _createOrUpdateServerMetricsConfigDeserialize(
  result:
    | CreateOrUpdateServerMetricsConfig200Response
    | CreateOrUpdateServerMetricsConfig201Response
    | CreateOrUpdateServerMetricsConfigDefaultResponse
): Promise<TestRunServerMetricConfig> {
  if (UnexpectedHelper.isUnexpected(result)) {
    throw result.body;
  }

  return {
    testRunId: result.body["testRunId"],
    metrics: result.body["metrics"],
    createdDateTime: result.body["createdDateTime"],
    createdBy: result.body["createdBy"],
    lastModifiedDateTime: result.body["lastModifiedDateTime"],
    lastModifiedBy: result.body["lastModifiedBy"],
  };
}

/** Configure server metrics for a test run */
export async function createOrUpdateServerMetricsConfig(
  context: Client.LoadTestRunContext,
  testRunId: string,
  options: CreateOrUpdateServerMetricsConfigOptions = { requestOptions: {} }
): Promise<TestRunServerMetricConfig> {
  const result = await _createOrUpdateServerMetricsConfigSend(
    context,
    testRunId,
    options
  );
  return _createOrUpdateServerMetricsConfigDeserialize(result);
}

export interface DeleteTestRunOptions extends RequestOptions {}

export function _deleteTestRunSend(
  context: Client.LoadTestRunContext,
  testRunId: string,
  options: DeleteTestRunOptions = { requestOptions: {} }
): StreamableMethod<DeleteTestRun204Response | DeleteTestRunDefaultResponse> {
  return context
    .path("/test-runs/{testRunId}", testRunId)
    .delete({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
      headers: { ...options.requestOptions?.headers },
    });
}

export async function _deleteTestRunDeserialize(
  result: DeleteTestRun204Response | DeleteTestRunDefaultResponse
): Promise<void> {
  if (UnexpectedHelper.isUnexpected(result)) {
    throw result.body;
  }

  return;
}

/** Delete a test run by its name. */
export async function deleteTestRun(
  context: Client.LoadTestRunContext,
  testRunId: string,
  options: DeleteTestRunOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _deleteTestRunSend(context, testRunId, options);
  return _deleteTestRunDeserialize(result);
}

export interface GetAppComponentsOptions extends RequestOptions {}

export function _getAppComponentsSend(
  context: Client.LoadTestRunContext,
  testRunId: string,
  options: GetAppComponentsOptions = { requestOptions: {} }
): StreamableMethod<
  GetAppComponents200Response | GetAppComponentsDefaultResponse
> {
  return context
    .path("/test-runs/{testRunId}/app-components", testRunId)
    .get({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
      headers: { ...options.requestOptions?.headers },
    });
}

export async function _getAppComponentsDeserialize(
  result: GetAppComponents200Response | GetAppComponentsDefaultResponse
): Promise<TestRunAppComponents> {
  if (UnexpectedHelper.isUnexpected(result)) {
    throw result.body;
  }

  return {
    components: result.body["components"],
    testRunId: result.body["testRunId"],
    createdDateTime: result.body["createdDateTime"],
    createdBy: result.body["createdBy"],
    lastModifiedDateTime: result.body["lastModifiedDateTime"],
    lastModifiedBy: result.body["lastModifiedBy"],
  };
}

/**
 * Get associated app component (collection of azure resources) for the given test
 * run.
 */
export async function getAppComponents(
  context: Client.LoadTestRunContext,
  testRunId: string,
  options: GetAppComponentsOptions = { requestOptions: {} }
): Promise<TestRunAppComponents> {
  const result = await _getAppComponentsSend(context, testRunId, options);
  return _getAppComponentsDeserialize(result);
}

export interface GetServerMetricsConfigOptions extends RequestOptions {}

export function _getServerMetricsConfigSend(
  context: Client.LoadTestRunContext,
  testRunId: string,
  options: GetServerMetricsConfigOptions = { requestOptions: {} }
): StreamableMethod<
  GetServerMetricsConfig200Response | GetServerMetricsConfigDefaultResponse
> {
  return context
    .path("/test-runs/{testRunId}/server-metrics-config", testRunId)
    .get({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
      headers: { ...options.requestOptions?.headers },
    });
}

export async function _getServerMetricsConfigDeserialize(
  result:
    | GetServerMetricsConfig200Response
    | GetServerMetricsConfigDefaultResponse
): Promise<TestRunServerMetricConfig> {
  if (UnexpectedHelper.isUnexpected(result)) {
    throw result.body;
  }

  return {
    testRunId: result.body["testRunId"],
    metrics: result.body["metrics"],
    createdDateTime: result.body["createdDateTime"],
    createdBy: result.body["createdBy"],
    lastModifiedDateTime: result.body["lastModifiedDateTime"],
    lastModifiedBy: result.body["lastModifiedBy"],
  };
}

/** List server metrics configuration for the given test run. */
export async function getServerMetricsConfig(
  context: Client.LoadTestRunContext,
  testRunId: string,
  options: GetServerMetricsConfigOptions = { requestOptions: {} }
): Promise<TestRunServerMetricConfig> {
  const result = await _getServerMetricsConfigSend(context, testRunId, options);
  return _getServerMetricsConfigDeserialize(result);
}

export interface GetTestRunOptions extends RequestOptions {}

export function _getTestRunSend(
  context: Client.LoadTestRunContext,
  testRunId: string,
  options: GetTestRunOptions = { requestOptions: {} }
): StreamableMethod<GetTestRun200Response | GetTestRunDefaultResponse> {
  return context
    .path("/test-runs/{testRunId}", testRunId)
    .get({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
      headers: { ...options.requestOptions?.headers },
    });
}

export async function _getTestRunDeserialize(
  result: GetTestRun200Response | GetTestRunDefaultResponse
): Promise<TestRun> {
  if (UnexpectedHelper.isUnexpected(result)) {
    throw result.body;
  }

  return {
    testRunId: result.body["testRunId"],
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
    errorDetails: (result.body["errorDetails"] ?? []).map((p) => ({
      message: p["message"],
    })),
    testRunStatistics: result.body["testRunStatistics"],
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
    testArtifacts: !result.body.testArtifacts
      ? undefined
      : {
          inputArtifacts: !result.body.testArtifacts?.inputArtifacts
            ? undefined
            : {
                configFileInfo: !result.body.testArtifacts?.inputArtifacts
                  ?.configFileInfo
                  ? undefined
                  : {
                      url: result.body.testArtifacts?.inputArtifacts
                        ?.configFileInfo?.["url"],
                      fileName:
                        result.body.testArtifacts?.inputArtifacts
                          ?.configFileInfo?.["fileName"],
                      fileType:
                        result.body.testArtifacts?.inputArtifacts
                          ?.configFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.inputArtifacts
                          ?.configFileInfo?.["expireDateTime"],
                      validationStatus:
                        result.body.testArtifacts?.inputArtifacts
                          ?.configFileInfo?.["validationStatus"],
                      validationFailureDetails:
                        result.body.testArtifacts?.inputArtifacts
                          ?.configFileInfo?.["validationFailureDetails"],
                    },
                testScriptFileInfo: !result.body.testArtifacts?.inputArtifacts
                  ?.testScriptFileInfo
                  ? undefined
                  : {
                      url: result.body.testArtifacts?.inputArtifacts
                        ?.testScriptFileInfo?.["url"],
                      fileName:
                        result.body.testArtifacts?.inputArtifacts
                          ?.testScriptFileInfo?.["fileName"],
                      fileType:
                        result.body.testArtifacts?.inputArtifacts
                          ?.testScriptFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.inputArtifacts
                          ?.testScriptFileInfo?.["expireDateTime"],
                      validationStatus:
                        result.body.testArtifacts?.inputArtifacts
                          ?.testScriptFileInfo?.["validationStatus"],
                      validationFailureDetails:
                        result.body.testArtifacts?.inputArtifacts
                          ?.testScriptFileInfo?.["validationFailureDetails"],
                    },
                userPropFileInfo: !result.body.testArtifacts?.inputArtifacts
                  ?.userPropFileInfo
                  ? undefined
                  : {
                      url: result.body.testArtifacts?.inputArtifacts
                        ?.userPropFileInfo?.["url"],
                      fileName:
                        result.body.testArtifacts?.inputArtifacts
                          ?.userPropFileInfo?.["fileName"],
                      fileType:
                        result.body.testArtifacts?.inputArtifacts
                          ?.userPropFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.inputArtifacts
                          ?.userPropFileInfo?.["expireDateTime"],
                      validationStatus:
                        result.body.testArtifacts?.inputArtifacts
                          ?.userPropFileInfo?.["validationStatus"],
                      validationFailureDetails:
                        result.body.testArtifacts?.inputArtifacts
                          ?.userPropFileInfo?.["validationFailureDetails"],
                    },
                inputArtifactsZipFileInfo: !result.body.testArtifacts
                  ?.inputArtifacts?.inputArtifactsZipFileInfo
                  ? undefined
                  : {
                      url: result.body.testArtifacts?.inputArtifacts
                        ?.inputArtifactsZipFileInfo?.["url"],
                      fileName:
                        result.body.testArtifacts?.inputArtifacts
                          ?.inputArtifactsZipFileInfo?.["fileName"],
                      fileType:
                        result.body.testArtifacts?.inputArtifacts
                          ?.inputArtifactsZipFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.inputArtifacts
                          ?.inputArtifactsZipFileInfo?.["expireDateTime"],
                      validationStatus:
                        result.body.testArtifacts?.inputArtifacts
                          ?.inputArtifactsZipFileInfo?.["validationStatus"],
                      validationFailureDetails:
                        result.body.testArtifacts?.inputArtifacts
                          ?.inputArtifactsZipFileInfo?.[
                          "validationFailureDetails"
                        ],
                    },
                additionalFileInfo: (
                  result.body.testArtifacts?.inputArtifacts?.[
                    "additionalFileInfo"
                  ] ?? []
                ).map((p) => ({
                  url: p["url"],
                  fileName: p["fileName"],
                  fileType: p["fileType"],
                  expireDateTime: p["expireDateTime"],
                  validationStatus: p["validationStatus"],
                  validationFailureDetails: p["validationFailureDetails"],
                })),
              },
          outputArtifacts: !result.body.testArtifacts?.outputArtifacts
            ? undefined
            : {
                resultFileInfo: !result.body.testArtifacts?.outputArtifacts
                  ?.resultFileInfo
                  ? undefined
                  : {
                      url: result.body.testArtifacts?.outputArtifacts
                        ?.resultFileInfo?.["url"],
                      fileName:
                        result.body.testArtifacts?.outputArtifacts
                          ?.resultFileInfo?.["fileName"],
                      fileType:
                        result.body.testArtifacts?.outputArtifacts
                          ?.resultFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.outputArtifacts
                          ?.resultFileInfo?.["expireDateTime"],
                      validationStatus:
                        result.body.testArtifacts?.outputArtifacts
                          ?.resultFileInfo?.["validationStatus"],
                      validationFailureDetails:
                        result.body.testArtifacts?.outputArtifacts
                          ?.resultFileInfo?.["validationFailureDetails"],
                    },
                logsFileInfo: !result.body.testArtifacts?.outputArtifacts
                  ?.logsFileInfo
                  ? undefined
                  : {
                      url: result.body.testArtifacts?.outputArtifacts
                        ?.logsFileInfo?.["url"],
                      fileName:
                        result.body.testArtifacts?.outputArtifacts
                          ?.logsFileInfo?.["fileName"],
                      fileType:
                        result.body.testArtifacts?.outputArtifacts
                          ?.logsFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.outputArtifacts
                          ?.logsFileInfo?.["expireDateTime"],
                      validationStatus:
                        result.body.testArtifacts?.outputArtifacts
                          ?.logsFileInfo?.["validationStatus"],
                      validationFailureDetails:
                        result.body.testArtifacts?.outputArtifacts
                          ?.logsFileInfo?.["validationFailureDetails"],
                    },
              },
        },
    testResult: result.body["testResult"],
    virtualUsers: result.body["virtualUsers"],
    displayName: result.body["displayName"],
    testId: result.body["testId"],
    description: result.body["description"],
    status: result.body["status"],
    startDateTime: result.body["startDateTime"],
    endDateTime: result.body["endDateTime"],
    executedDateTime: result.body["executedDateTime"],
    portalUrl: result.body["portalUrl"],
    duration: result.body["duration"],
    subnetId: result.body["subnetId"],
    createdDateTime: result.body["createdDateTime"],
    createdBy: result.body["createdBy"],
    lastModifiedDateTime: result.body["lastModifiedDateTime"],
    lastModifiedBy: result.body["lastModifiedBy"],
  };
}

/** Get test run details by name. */
export async function getTestRun(
  context: Client.LoadTestRunContext,
  testRunId: string,
  options: GetTestRunOptions = { requestOptions: {} }
): Promise<TestRun> {
  const result = await _getTestRunSend(context, testRunId, options);
  return _getTestRunDeserialize(result);
}

export interface GetTestRunFileOptions extends RequestOptions {}

export function _getTestRunFileSend(
  context: Client.LoadTestRunContext,
  testRunId: string,
  fileName: string,
  options: GetTestRunFileOptions = { requestOptions: {} }
): StreamableMethod<GetTestRunFile200Response | GetTestRunFileDefaultResponse> {
  return context
    .path("/test-runs/{testRunId}/files/{fileName}", testRunId, fileName)
    .get({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
      headers: { ...options.requestOptions?.headers },
    });
}

export async function _getTestRunFileDeserialize(
  result: GetTestRunFile200Response | GetTestRunFileDefaultResponse
): Promise<FileInfo> {
  if (UnexpectedHelper.isUnexpected(result)) {
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

/** Get test run file by file name. */
export async function getTestRunFile(
  context: Client.LoadTestRunContext,
  testRunId: string,
  fileName: string,
  options: GetTestRunFileOptions = { requestOptions: {} }
): Promise<FileInfo> {
  const result = await _getTestRunFileSend(
    context,
    testRunId,
    fileName,
    options
  );
  return _getTestRunFileDeserialize(result);
}

export interface ListMetricDimensionValuesOptions extends RequestOptions {
  /** The interval (i.e. timegrain) of the query. */
  interval?: Interval;
  /** Metric name */
  metricName?: string;
  /**
   * The timespan of the query. It is a string with the following format
   * 'startDateTime_ISO/endDateTime_ISO'.
   */
  timespan?: string;
}

export function _listMetricDimensionValuesSend(
  context: Client.LoadTestRunContext,
  testRunId: string,
  name: string,
  metricNamespace: string,
  options: ListMetricDimensionValuesOptions = { requestOptions: {} }
): StreamableMethod<
  | ListMetricDimensionValues200Response
  | ListMetricDimensionValuesDefaultResponse
> {
  return context
    .path(
      "/test-runs/{testRunId}/metric-dimensions/{name}/values",
      testRunId,
      name
    )
    .get({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
      headers: { ...options.requestOptions?.headers },
      queryParameters: {
        interval: options?.interval,
        metricName: options?.metricName,
        metricNamespace: metricNamespace,
        timespan: options?.timespan,
      },
    });
}

export async function _listMetricDimensionValuesDeserialize(
  result:
    | ListMetricDimensionValues200Response
    | ListMetricDimensionValuesDefaultResponse
): Promise<CustomPage> {
  if (UnexpectedHelper.isUnexpected(result)) {
    throw result.body;
  }

  return {
    value: (result.body["value"] ?? []).map((p) => ({ value: p["value"] })),
    nextLink: result.body["nextLink"],
  };
}

/** List the dimension values for the given metric dimension name. */
export async function listMetricDimensionValues(
  context: Client.LoadTestRunContext,
  testRunId: string,
  name: string,
  metricNamespace: string,
  options: ListMetricDimensionValuesOptions = { requestOptions: {} }
): Promise<CustomPage> {
  const result = await _listMetricDimensionValuesSend(
    context,
    testRunId,
    name,
    metricNamespace,
    options
  );
  return _listMetricDimensionValuesDeserialize(result);
}

export interface ListMetricDefinitionsOptions extends RequestOptions {
  /** Metric namespace to query metric definitions for. */
  metricNamespace?: string;
}

export function _listMetricDefinitionsSend(
  context: Client.LoadTestRunContext,
  testRunId: string,
  options: ListMetricDefinitionsOptions = { requestOptions: {} }
): StreamableMethod<
  ListMetricDefinitions200Response | ListMetricDefinitionsDefaultResponse
> {
  return context
    .path("/test-runs/{testRunId}/metric-definitions", testRunId)
    .get({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
      headers: { ...options.requestOptions?.headers },
      queryParameters: { metricNamespace: options?.metricNamespace },
    });
}

export async function _listMetricDefinitionsDeserialize(
  result:
    | ListMetricDefinitions200Response
    | ListMetricDefinitionsDefaultResponse
): Promise<MetricDefinitionCollection> {
  if (UnexpectedHelper.isUnexpected(result)) {
    throw result.body;
  }

  return {
    value: (result.body["value"] ?? []).map((p) => ({
      dimensions: (p["dimensions"] ?? []).map((p) => ({
        description: p["description"],
        name: p["name"],
      })),
      description: p["description"],
      name: p["name"],
      namespace: p["namespace"],
      primaryAggregationType: p["primaryAggregationType"],
      supportedAggregationTypes: p["supportedAggregationTypes"],
      unit: p["unit"],
      metricAvailabilities: (p["metricAvailabilities"] ?? []).map((p) => ({
        timeGrain: p["timeGrain"],
      })),
    })),
  };
}

/** List the metric definitions for a load test run. */
export async function listMetricDefinitions(
  context: Client.LoadTestRunContext,
  testRunId: string,
  options: ListMetricDefinitionsOptions = { requestOptions: {} }
): Promise<MetricDefinitionCollection> {
  const result = await _listMetricDefinitionsSend(context, testRunId, options);
  return _listMetricDefinitionsDeserialize(result);
}

export interface ListMetricNamespacesOptions extends RequestOptions {}

export function _listMetricNamespacesSend(
  context: Client.LoadTestRunContext,
  testRunId: string,
  options: ListMetricNamespacesOptions = { requestOptions: {} }
): StreamableMethod<
  ListMetricNamespaces200Response | ListMetricNamespacesDefaultResponse
> {
  return context
    .path("/test-runs/{testRunId}/metric-namespaces", testRunId)
    .get({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
      headers: { ...options.requestOptions?.headers },
    });
}

export async function _listMetricNamespacesDeserialize(
  result: ListMetricNamespaces200Response | ListMetricNamespacesDefaultResponse
): Promise<MetricNamespaceCollection> {
  if (UnexpectedHelper.isUnexpected(result)) {
    throw result.body;
  }

  return {
    value: (result.body["value"] ?? []).map((p) => ({
      description: p["description"],
      name: p["name"],
    })),
  };
}

/** List the metric namespaces for a load test run. */
export async function listMetricNamespaces(
  context: Client.LoadTestRunContext,
  testRunId: string,
  options: ListMetricNamespacesOptions = { requestOptions: {} }
): Promise<MetricNamespaceCollection> {
  const result = await _listMetricNamespacesSend(context, testRunId, options);
  return _listMetricNamespacesDeserialize(result);
}

export interface ListMetricsOptions extends RequestOptions {
  /**
   * Get metrics for specific dimension values. Example: Metric contains dimension
   * like SamplerName, Error. To retrieve all the time series data where SamplerName
   * is equals to HTTPRequest1 or HTTPRequest2, the DimensionFilter value will be
   * {"SamplerName", ["HTTPRequest1", "HTTPRequest2"}
   */
  filters?: DimensionFilter[];
  /** The aggregation */
  aggregation?: string;
  /** The interval (i.e. timegrain) of the query. */
  interval?: Interval;
  /** Metric name */
  metricName?: string;
  /** Metric namespace to query metric definitions for. */
  metricNamespace?: string;
  /**
   * The timespan of the query. It is a string with the following format
   * 'startDateTime_ISO/endDateTime_ISO'.
   */
  timespan?: string;
}

export function _listMetricsSend(
  context: Client.LoadTestRunContext,
  testRunId: string,
  options: ListMetricsOptions = { requestOptions: {} }
): StreamableMethod<ListMetrics200Response | ListMetricsDefaultResponse> {
  return context
    .path("/test-runs/{testRunId}/metrics", testRunId)
    .post({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
      headers: { ...options.requestOptions?.headers },
      queryParameters: {
        aggregation: options?.aggregation,
        interval: options?.interval,
        metricName: options?.metricName,
        metricNamespace: options?.metricNamespace,
        timespan: options?.timespan,
      },
      body: { filters: options?.filters },
    });
}

export async function _listMetricsDeserialize(
  result: ListMetrics200Response | ListMetricsDefaultResponse
): Promise<Metrics> {
  if (UnexpectedHelper.isUnexpected(result)) {
    throw result.body;
  }

  return {
    value: (result.body["value"] ?? []).map((p) => ({
      data: (p["data"] ?? []).map((p) => ({
        timestamp: p["timestamp"],
        value: p["value"],
      })),
      dimensionValues: (p["dimensionValues"] ?? []).map((p) => ({
        name: p["name"],
        value: p["value"],
      })),
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List the metric values for a load test run. */
export async function listMetrics(
  context: Client.LoadTestRunContext,
  testRunId: string,
  options: ListMetricsOptions = { requestOptions: {} }
): Promise<Metrics> {
  const result = await _listMetricsSend(context, testRunId, options);
  return _listMetricsDeserialize(result);
}

export interface ListTestRunsOptions extends RequestOptions {
  /**
   * Sort on the supported fields in (field asc/desc) format. eg: executedDateTime
   * asc. Supported fields - executedDateTime
   */
  orderby?: string;
  /**
   * Prefix based, case sensitive search on searchable fields - description,
   * executedUser. For example, to search for a test run, with description 500 VUs,
   * the search parameter can be 500.
   */
  search?: string;
  /** Unique name of an existing load test. */
  testId?: string;
  /** Start DateTime(ISO 8601 literal format) of test-run execution time filter range. */
  executionFrom?: any;
  /** End DateTime(ISO 8601 literal format) of test-run execution time filter range. */
  executionTo?: any;
  /** Comma separated list of test run status. */
  status?: string;
  /** Number of results in response. */
  maxpagesize?: number;
}

export function _listTestRunsSend(
  context: Client.LoadTestRunContext,
  options: ListTestRunsOptions = { requestOptions: {} }
): StreamableMethod<ListTestRuns200Response | ListTestRunsDefaultResponse> {
  return context
    .path("/test-runs")
    .get({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
      headers: { ...options.requestOptions?.headers },
      queryParameters: {
        orderby: options?.orderby,
        search: options?.search,
        testId: options?.testId,
        executionFrom: options?.executionFrom,
        executionTo: options?.executionTo,
        status: options?.status,
        maxpagesize: options?.maxpagesize,
      },
    });
}

export async function _listTestRunsDeserialize(
  result: ListTestRuns200Response | ListTestRunsDefaultResponse
): Promise<TestRunsList> {
  if (UnexpectedHelper.isUnexpected(result)) {
    throw result.body;
  }

  return {
    value: (result.body["value"] ?? []).map((p) => ({
      testRunId: p["testRunId"],
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
      errorDetails: (p["errorDetails"] ?? []).map((p) => ({
        message: p["message"],
      })),
      testRunStatistics: p["testRunStatistics"],
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
      testArtifacts: !p.testArtifacts
        ? undefined
        : {
            inputArtifacts: !p.testArtifacts?.inputArtifacts
              ? undefined
              : {
                  configFileInfo: !p.testArtifacts?.inputArtifacts
                    ?.configFileInfo
                    ? undefined
                    : {
                        url: p.testArtifacts?.inputArtifacts?.configFileInfo?.[
                          "url"
                        ],
                        fileName:
                          p.testArtifacts?.inputArtifacts?.configFileInfo?.[
                            "fileName"
                          ],
                        fileType:
                          p.testArtifacts?.inputArtifacts?.configFileInfo?.[
                            "fileType"
                          ],
                        expireDateTime:
                          p.testArtifacts?.inputArtifacts?.configFileInfo?.[
                            "expireDateTime"
                          ],
                        validationStatus:
                          p.testArtifacts?.inputArtifacts?.configFileInfo?.[
                            "validationStatus"
                          ],
                        validationFailureDetails:
                          p.testArtifacts?.inputArtifacts?.configFileInfo?.[
                            "validationFailureDetails"
                          ],
                      },
                  testScriptFileInfo: !p.testArtifacts?.inputArtifacts
                    ?.testScriptFileInfo
                    ? undefined
                    : {
                        url: p.testArtifacts?.inputArtifacts
                          ?.testScriptFileInfo?.["url"],
                        fileName:
                          p.testArtifacts?.inputArtifacts?.testScriptFileInfo?.[
                            "fileName"
                          ],
                        fileType:
                          p.testArtifacts?.inputArtifacts?.testScriptFileInfo?.[
                            "fileType"
                          ],
                        expireDateTime:
                          p.testArtifacts?.inputArtifacts?.testScriptFileInfo?.[
                            "expireDateTime"
                          ],
                        validationStatus:
                          p.testArtifacts?.inputArtifacts?.testScriptFileInfo?.[
                            "validationStatus"
                          ],
                        validationFailureDetails:
                          p.testArtifacts?.inputArtifacts?.testScriptFileInfo?.[
                            "validationFailureDetails"
                          ],
                      },
                  userPropFileInfo: !p.testArtifacts?.inputArtifacts
                    ?.userPropFileInfo
                    ? undefined
                    : {
                        url: p.testArtifacts?.inputArtifacts
                          ?.userPropFileInfo?.["url"],
                        fileName:
                          p.testArtifacts?.inputArtifacts?.userPropFileInfo?.[
                            "fileName"
                          ],
                        fileType:
                          p.testArtifacts?.inputArtifacts?.userPropFileInfo?.[
                            "fileType"
                          ],
                        expireDateTime:
                          p.testArtifacts?.inputArtifacts?.userPropFileInfo?.[
                            "expireDateTime"
                          ],
                        validationStatus:
                          p.testArtifacts?.inputArtifacts?.userPropFileInfo?.[
                            "validationStatus"
                          ],
                        validationFailureDetails:
                          p.testArtifacts?.inputArtifacts?.userPropFileInfo?.[
                            "validationFailureDetails"
                          ],
                      },
                  inputArtifactsZipFileInfo: !p.testArtifacts?.inputArtifacts
                    ?.inputArtifactsZipFileInfo
                    ? undefined
                    : {
                        url: p.testArtifacts?.inputArtifacts
                          ?.inputArtifactsZipFileInfo?.["url"],
                        fileName:
                          p.testArtifacts?.inputArtifacts
                            ?.inputArtifactsZipFileInfo?.["fileName"],
                        fileType:
                          p.testArtifacts?.inputArtifacts
                            ?.inputArtifactsZipFileInfo?.["fileType"],
                        expireDateTime:
                          p.testArtifacts?.inputArtifacts
                            ?.inputArtifactsZipFileInfo?.["expireDateTime"],
                        validationStatus:
                          p.testArtifacts?.inputArtifacts
                            ?.inputArtifactsZipFileInfo?.["validationStatus"],
                        validationFailureDetails:
                          p.testArtifacts?.inputArtifacts
                            ?.inputArtifactsZipFileInfo?.[
                            "validationFailureDetails"
                          ],
                      },
                  additionalFileInfo: (
                    p.testArtifacts?.inputArtifacts?.["additionalFileInfo"] ??
                    []
                  ).map((p) => ({
                    url: p["url"],
                    fileName: p["fileName"],
                    fileType: p["fileType"],
                    expireDateTime: p["expireDateTime"],
                    validationStatus: p["validationStatus"],
                    validationFailureDetails: p["validationFailureDetails"],
                  })),
                },
            outputArtifacts: !p.testArtifacts?.outputArtifacts
              ? undefined
              : {
                  resultFileInfo: !p.testArtifacts?.outputArtifacts
                    ?.resultFileInfo
                    ? undefined
                    : {
                        url: p.testArtifacts?.outputArtifacts?.resultFileInfo?.[
                          "url"
                        ],
                        fileName:
                          p.testArtifacts?.outputArtifacts?.resultFileInfo?.[
                            "fileName"
                          ],
                        fileType:
                          p.testArtifacts?.outputArtifacts?.resultFileInfo?.[
                            "fileType"
                          ],
                        expireDateTime:
                          p.testArtifacts?.outputArtifacts?.resultFileInfo?.[
                            "expireDateTime"
                          ],
                        validationStatus:
                          p.testArtifacts?.outputArtifacts?.resultFileInfo?.[
                            "validationStatus"
                          ],
                        validationFailureDetails:
                          p.testArtifacts?.outputArtifacts?.resultFileInfo?.[
                            "validationFailureDetails"
                          ],
                      },
                  logsFileInfo: !p.testArtifacts?.outputArtifacts?.logsFileInfo
                    ? undefined
                    : {
                        url: p.testArtifacts?.outputArtifacts?.logsFileInfo?.[
                          "url"
                        ],
                        fileName:
                          p.testArtifacts?.outputArtifacts?.logsFileInfo?.[
                            "fileName"
                          ],
                        fileType:
                          p.testArtifacts?.outputArtifacts?.logsFileInfo?.[
                            "fileType"
                          ],
                        expireDateTime:
                          p.testArtifacts?.outputArtifacts?.logsFileInfo?.[
                            "expireDateTime"
                          ],
                        validationStatus:
                          p.testArtifacts?.outputArtifacts?.logsFileInfo?.[
                            "validationStatus"
                          ],
                        validationFailureDetails:
                          p.testArtifacts?.outputArtifacts?.logsFileInfo?.[
                            "validationFailureDetails"
                          ],
                      },
                },
          },
      testResult: p["testResult"],
      virtualUsers: p["virtualUsers"],
      displayName: p["displayName"],
      testId: p["testId"],
      description: p["description"],
      status: p["status"],
      startDateTime: p["startDateTime"],
      endDateTime: p["endDateTime"],
      executedDateTime: p["executedDateTime"],
      portalUrl: p["portalUrl"],
      duration: p["duration"],
      subnetId: p["subnetId"],
      createdDateTime: p["createdDateTime"],
      createdBy: p["createdBy"],
      lastModifiedDateTime: p["lastModifiedDateTime"],
      lastModifiedBy: p["lastModifiedBy"],
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Get all test runs with given filters */
export async function listTestRuns(
  context: Client.LoadTestRunContext,
  options: ListTestRunsOptions = { requestOptions: {} }
): Promise<TestRunsList> {
  const result = await _listTestRunsSend(context, options);
  return _listTestRunsDeserialize(result);
}

export interface StopTestRunOptions extends RequestOptions {}

export function _stopTestRunSend(
  context: Client.LoadTestRunContext,
  testRunId: string,
  options: StopTestRunOptions = { requestOptions: {} }
): StreamableMethod<StopTestRun200Response | StopTestRunDefaultResponse> {
  return context
    .path("/test-runs/{testRunId}:stop", testRunId)
    .post({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
      headers: { ...options.requestOptions?.headers },
    });
}

export async function _stopTestRunDeserialize(
  result: StopTestRun200Response | StopTestRunDefaultResponse
): Promise<TestRun> {
  if (UnexpectedHelper.isUnexpected(result)) {
    throw result.body;
  }

  return {
    testRunId: result.body["testRunId"],
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
    errorDetails: (result.body["errorDetails"] ?? []).map((p) => ({
      message: p["message"],
    })),
    testRunStatistics: result.body["testRunStatistics"],
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
    testArtifacts: !result.body.testArtifacts
      ? undefined
      : {
          inputArtifacts: !result.body.testArtifacts?.inputArtifacts
            ? undefined
            : {
                configFileInfo: !result.body.testArtifacts?.inputArtifacts
                  ?.configFileInfo
                  ? undefined
                  : {
                      url: result.body.testArtifacts?.inputArtifacts
                        ?.configFileInfo?.["url"],
                      fileName:
                        result.body.testArtifacts?.inputArtifacts
                          ?.configFileInfo?.["fileName"],
                      fileType:
                        result.body.testArtifacts?.inputArtifacts
                          ?.configFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.inputArtifacts
                          ?.configFileInfo?.["expireDateTime"],
                      validationStatus:
                        result.body.testArtifacts?.inputArtifacts
                          ?.configFileInfo?.["validationStatus"],
                      validationFailureDetails:
                        result.body.testArtifacts?.inputArtifacts
                          ?.configFileInfo?.["validationFailureDetails"],
                    },
                testScriptFileInfo: !result.body.testArtifacts?.inputArtifacts
                  ?.testScriptFileInfo
                  ? undefined
                  : {
                      url: result.body.testArtifacts?.inputArtifacts
                        ?.testScriptFileInfo?.["url"],
                      fileName:
                        result.body.testArtifacts?.inputArtifacts
                          ?.testScriptFileInfo?.["fileName"],
                      fileType:
                        result.body.testArtifacts?.inputArtifacts
                          ?.testScriptFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.inputArtifacts
                          ?.testScriptFileInfo?.["expireDateTime"],
                      validationStatus:
                        result.body.testArtifacts?.inputArtifacts
                          ?.testScriptFileInfo?.["validationStatus"],
                      validationFailureDetails:
                        result.body.testArtifacts?.inputArtifacts
                          ?.testScriptFileInfo?.["validationFailureDetails"],
                    },
                userPropFileInfo: !result.body.testArtifacts?.inputArtifacts
                  ?.userPropFileInfo
                  ? undefined
                  : {
                      url: result.body.testArtifacts?.inputArtifacts
                        ?.userPropFileInfo?.["url"],
                      fileName:
                        result.body.testArtifacts?.inputArtifacts
                          ?.userPropFileInfo?.["fileName"],
                      fileType:
                        result.body.testArtifacts?.inputArtifacts
                          ?.userPropFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.inputArtifacts
                          ?.userPropFileInfo?.["expireDateTime"],
                      validationStatus:
                        result.body.testArtifacts?.inputArtifacts
                          ?.userPropFileInfo?.["validationStatus"],
                      validationFailureDetails:
                        result.body.testArtifacts?.inputArtifacts
                          ?.userPropFileInfo?.["validationFailureDetails"],
                    },
                inputArtifactsZipFileInfo: !result.body.testArtifacts
                  ?.inputArtifacts?.inputArtifactsZipFileInfo
                  ? undefined
                  : {
                      url: result.body.testArtifacts?.inputArtifacts
                        ?.inputArtifactsZipFileInfo?.["url"],
                      fileName:
                        result.body.testArtifacts?.inputArtifacts
                          ?.inputArtifactsZipFileInfo?.["fileName"],
                      fileType:
                        result.body.testArtifacts?.inputArtifacts
                          ?.inputArtifactsZipFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.inputArtifacts
                          ?.inputArtifactsZipFileInfo?.["expireDateTime"],
                      validationStatus:
                        result.body.testArtifacts?.inputArtifacts
                          ?.inputArtifactsZipFileInfo?.["validationStatus"],
                      validationFailureDetails:
                        result.body.testArtifacts?.inputArtifacts
                          ?.inputArtifactsZipFileInfo?.[
                          "validationFailureDetails"
                        ],
                    },
                additionalFileInfo: (
                  result.body.testArtifacts?.inputArtifacts?.[
                    "additionalFileInfo"
                  ] ?? []
                ).map((p) => ({
                  url: p["url"],
                  fileName: p["fileName"],
                  fileType: p["fileType"],
                  expireDateTime: p["expireDateTime"],
                  validationStatus: p["validationStatus"],
                  validationFailureDetails: p["validationFailureDetails"],
                })),
              },
          outputArtifacts: !result.body.testArtifacts?.outputArtifacts
            ? undefined
            : {
                resultFileInfo: !result.body.testArtifacts?.outputArtifacts
                  ?.resultFileInfo
                  ? undefined
                  : {
                      url: result.body.testArtifacts?.outputArtifacts
                        ?.resultFileInfo?.["url"],
                      fileName:
                        result.body.testArtifacts?.outputArtifacts
                          ?.resultFileInfo?.["fileName"],
                      fileType:
                        result.body.testArtifacts?.outputArtifacts
                          ?.resultFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.outputArtifacts
                          ?.resultFileInfo?.["expireDateTime"],
                      validationStatus:
                        result.body.testArtifacts?.outputArtifacts
                          ?.resultFileInfo?.["validationStatus"],
                      validationFailureDetails:
                        result.body.testArtifacts?.outputArtifacts
                          ?.resultFileInfo?.["validationFailureDetails"],
                    },
                logsFileInfo: !result.body.testArtifacts?.outputArtifacts
                  ?.logsFileInfo
                  ? undefined
                  : {
                      url: result.body.testArtifacts?.outputArtifacts
                        ?.logsFileInfo?.["url"],
                      fileName:
                        result.body.testArtifacts?.outputArtifacts
                          ?.logsFileInfo?.["fileName"],
                      fileType:
                        result.body.testArtifacts?.outputArtifacts
                          ?.logsFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.outputArtifacts
                          ?.logsFileInfo?.["expireDateTime"],
                      validationStatus:
                        result.body.testArtifacts?.outputArtifacts
                          ?.logsFileInfo?.["validationStatus"],
                      validationFailureDetails:
                        result.body.testArtifacts?.outputArtifacts
                          ?.logsFileInfo?.["validationFailureDetails"],
                    },
              },
        },
    testResult: result.body["testResult"],
    virtualUsers: result.body["virtualUsers"],
    displayName: result.body["displayName"],
    testId: result.body["testId"],
    description: result.body["description"],
    status: result.body["status"],
    startDateTime: result.body["startDateTime"],
    endDateTime: result.body["endDateTime"],
    executedDateTime: result.body["executedDateTime"],
    portalUrl: result.body["portalUrl"],
    duration: result.body["duration"],
    subnetId: result.body["subnetId"],
    createdDateTime: result.body["createdDateTime"],
    createdBy: result.body["createdBy"],
    lastModifiedDateTime: result.body["lastModifiedDateTime"],
    lastModifiedBy: result.body["lastModifiedBy"],
  };
}

/** Stop test run by name. */
export async function stopTestRun(
  context: Client.LoadTestRunContext,
  testRunId: string,
  options: StopTestRunOptions = { requestOptions: {} }
): Promise<TestRun> {
  const result = await _stopTestRunSend(context, testRunId, options);
  return _stopTestRunDeserialize(result);
}
