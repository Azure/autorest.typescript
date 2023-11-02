// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  FileInfo,
  TestRun,
  TestRunAppComponents,
  TestRunServerMetricConfig,
  MetricDefinitionCollection,
  MetricNamespaceCollection,
  MetricRequestPayload,
  PagedTimeSeriesElement,
  PagedTestRun,
  PagedDimensionValueList,
} from "../models/models.js";
import {
  isUnexpected,
  AzureLoadTestingContext as Client,
  CreateOrUpdateAppComponents200Response,
  CreateOrUpdateAppComponents201Response,
  CreateOrUpdateAppComponentsDefaultResponse,
  CreateOrUpdateServerMetricsConfig200Response,
  CreateOrUpdateServerMetricsConfig201Response,
  CreateOrUpdateServerMetricsConfigDefaultResponse,
  CreateOrUpdateTestRun200Response,
  CreateOrUpdateTestRun201Response,
  CreateOrUpdateTestRunDefaultResponse,
  CreateOrUpdateTestRunLogicalResponse,
  DeleteTestRun204Response,
  DeleteTestRunDefaultResponse,
  GetAppComponents200Response,
  GetAppComponentsDefaultResponse,
  GetTestRun200Response,
  GetTestRunDefaultResponse,
  GetTestRunFile200Response,
  GetTestRunFileDefaultResponse,
  ListMetricDefinitions200Response,
  ListMetricDefinitionsDefaultResponse,
  ListMetricDimensionValues200Response,
  ListMetricDimensionValuesDefaultResponse,
  ListMetricNamespaces200Response,
  ListMetricNamespacesDefaultResponse,
  ListMetrics200Response,
  ListMetricsDefaultResponse,
  ListTestRuns200Response,
  ListTestRunsDefaultResponse,
  StopTestRun200Response,
  StopTestRunDefaultResponse,
  TestRunListServerMetricsConfig200Response,
  TestRunListServerMetricsConfigDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  TestRunOptions,
  CreateOrUpdateAppComponentsOptions,
  CreateOrUpdateServerMetricsConfigOptions,
  DeleteTestRunOptions,
  GetAppComponentsOptions,
  GetServerMetricsConfigOptions,
  GetTestRunOptions,
  GetTestRunFileOptions,
  ListMetricDimensionValuesOptions,
  ListMetricDefinitionsOptions,
  ListMetricNamespacesOptions,
  ListMetricsOptions,
  ListTestRunsOptions,
  StopTestRunOptions,
} from "../models/options.js";

export function _testRunSend(
  context: Client,
  testRunId: string,
  resource: TestRun,
  options: TestRunOptions = { requestOptions: {} }
): StreamableMethod<
  | CreateOrUpdateTestRun200Response
  | CreateOrUpdateTestRun201Response
  | CreateOrUpdateTestRunDefaultResponse
  | CreateOrUpdateTestRunLogicalResponse
> {
  return context
    .path("/test-runs/{testRunId}", testRunId)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      queryParameters: { oldTestRunId: options?.oldTestRunId },
      body: {
        passFailCriteria: !resource.passFailCriteria
          ? undefined
          : { passFailMetrics: resource.passFailCriteria?.["passFailMetrics"] },
        secrets: resource["secrets"],
        certificate: !resource.certificate
          ? undefined
          : {
              value: resource.certificate?.["value"],
              type: resource.certificate?.["type"],
              name: resource.certificate?.["name"],
            },
        environmentVariables: resource["environmentVariables"],
        loadTestConfiguration: !resource.loadTestConfiguration
          ? undefined
          : {
              engineInstances:
                resource.loadTestConfiguration?.["engineInstances"],
              splitAllCSVs: resource.loadTestConfiguration?.["splitAllCSVs"],
              quickStartTest:
                resource.loadTestConfiguration?.["quickStartTest"],
              optionalLoadTestConfig: !resource.loadTestConfiguration
                ?.optionalLoadTestConfig
                ? undefined
                : {
                    endpointUrl:
                      resource.loadTestConfiguration?.optionalLoadTestConfig?.[
                        "endpointUrl"
                      ],
                    virtualUsers:
                      resource.loadTestConfiguration?.optionalLoadTestConfig?.[
                        "virtualUsers"
                      ],
                    rampUpTime:
                      resource.loadTestConfiguration?.optionalLoadTestConfig?.[
                        "rampUpTime"
                      ],
                    duration:
                      resource.loadTestConfiguration?.optionalLoadTestConfig?.[
                        "duration"
                      ],
                  },
            },
        displayName: resource["displayName"],
        testId: resource["testId"],
        description: resource["description"],
      },
    });
}

export async function _testRunDeserialize(
  result:
    | CreateOrUpdateTestRun200Response
    | CreateOrUpdateTestRun201Response
    | CreateOrUpdateTestRunDefaultResponse
    | CreateOrUpdateTestRunLogicalResponse
): Promise<TestRun> {
  if (isUnexpected(result)) {
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
  context: Client,
  testRunId: string,
  resource: TestRun,
  options: TestRunOptions = { requestOptions: {} }
): Promise<TestRun> {
  const result = await _testRunSend(context, testRunId, resource, options);
  return _testRunDeserialize(result);
}

export function _createOrUpdateAppComponentsSend(
  context: Client,
  testRunId: string,
  body: TestRunAppComponents,
  options: CreateOrUpdateAppComponentsOptions = { requestOptions: {} }
): StreamableMethod<
  | CreateOrUpdateAppComponents200Response
  | CreateOrUpdateAppComponents201Response
  | CreateOrUpdateAppComponentsDefaultResponse
> {
  return context
    .path("/test-runs/{testRunId}/app-components", testRunId)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: { components: body["components"] },
    });
}

export async function _createOrUpdateAppComponentsDeserialize(
  result:
    | CreateOrUpdateAppComponents200Response
    | CreateOrUpdateAppComponents201Response
    | CreateOrUpdateAppComponentsDefaultResponse
): Promise<TestRunAppComponents> {
  if (isUnexpected(result)) {
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
  context: Client,
  testRunId: string,
  body: TestRunAppComponents,
  options: CreateOrUpdateAppComponentsOptions = { requestOptions: {} }
): Promise<TestRunAppComponents> {
  const result = await _createOrUpdateAppComponentsSend(
    context,
    testRunId,
    body,
    options
  );
  return _createOrUpdateAppComponentsDeserialize(result);
}

export function _createOrUpdateServerMetricsConfigSend(
  context: Client,
  testRunId: string,
  body: TestRunServerMetricConfig,
  options: CreateOrUpdateServerMetricsConfigOptions = { requestOptions: {} }
): StreamableMethod<
  | CreateOrUpdateServerMetricsConfig200Response
  | CreateOrUpdateServerMetricsConfig201Response
  | CreateOrUpdateServerMetricsConfigDefaultResponse
> {
  return context
    .path("/test-runs/{testRunId}/server-metrics-config", testRunId)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: { metrics: body["metrics"] },
    });
}

export async function _createOrUpdateServerMetricsConfigDeserialize(
  result:
    | CreateOrUpdateServerMetricsConfig200Response
    | CreateOrUpdateServerMetricsConfig201Response
    | CreateOrUpdateServerMetricsConfigDefaultResponse
): Promise<TestRunServerMetricConfig> {
  if (isUnexpected(result)) {
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
  context: Client,
  testRunId: string,
  body: TestRunServerMetricConfig,
  options: CreateOrUpdateServerMetricsConfigOptions = { requestOptions: {} }
): Promise<TestRunServerMetricConfig> {
  const result = await _createOrUpdateServerMetricsConfigSend(
    context,
    testRunId,
    body,
    options
  );
  return _createOrUpdateServerMetricsConfigDeserialize(result);
}

export function _deleteTestRunSend(
  context: Client,
  testRunId: string,
  options: DeleteTestRunOptions = { requestOptions: {} }
): StreamableMethod<DeleteTestRun204Response | DeleteTestRunDefaultResponse> {
  return context
    .path("/test-runs/{testRunId}", testRunId)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteTestRunDeserialize(
  result: DeleteTestRun204Response | DeleteTestRunDefaultResponse
): Promise<void> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return;
}

/** Delete a test run by its name. */
export async function deleteTestRun(
  context: Client,
  testRunId: string,
  options: DeleteTestRunOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _deleteTestRunSend(context, testRunId, options);
  return _deleteTestRunDeserialize(result);
}

export function _getAppComponentsSend(
  context: Client,
  testRunId: string,
  options: GetAppComponentsOptions = { requestOptions: {} }
): StreamableMethod<
  GetAppComponents200Response | GetAppComponentsDefaultResponse
> {
  return context
    .path("/test-runs/{testRunId}/app-components", testRunId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getAppComponentsDeserialize(
  result: GetAppComponents200Response | GetAppComponentsDefaultResponse
): Promise<TestRunAppComponents> {
  if (isUnexpected(result)) {
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
  context: Client,
  testRunId: string,
  options: GetAppComponentsOptions = { requestOptions: {} }
): Promise<TestRunAppComponents> {
  const result = await _getAppComponentsSend(context, testRunId, options);
  return _getAppComponentsDeserialize(result);
}

export function _getServerMetricsConfigSend(
  context: Client,
  testRunId: string,
  options: GetServerMetricsConfigOptions = { requestOptions: {} }
): StreamableMethod<
  | TestRunListServerMetricsConfig200Response
  | TestRunListServerMetricsConfigDefaultResponse
> {
  return context
    .path("/test-runs/{testRunId}/server-metrics-config", testRunId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getServerMetricsConfigDeserialize(
  result:
    | TestRunListServerMetricsConfig200Response
    | TestRunListServerMetricsConfigDefaultResponse
): Promise<TestRunServerMetricConfig> {
  if (isUnexpected(result)) {
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
  context: Client,
  testRunId: string,
  options: GetServerMetricsConfigOptions = { requestOptions: {} }
): Promise<TestRunServerMetricConfig> {
  const result = await _getServerMetricsConfigSend(context, testRunId, options);
  return _getServerMetricsConfigDeserialize(result);
}

export function _getTestRunSend(
  context: Client,
  testRunId: string,
  options: GetTestRunOptions = { requestOptions: {} }
): StreamableMethod<GetTestRun200Response | GetTestRunDefaultResponse> {
  return context
    .path("/test-runs/{testRunId}", testRunId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getTestRunDeserialize(
  result: GetTestRun200Response | GetTestRunDefaultResponse
): Promise<TestRun> {
  if (isUnexpected(result)) {
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
  context: Client,
  testRunId: string,
  options: GetTestRunOptions = { requestOptions: {} }
): Promise<TestRun> {
  const result = await _getTestRunSend(context, testRunId, options);
  return _getTestRunDeserialize(result);
}

export function _getTestRunFileSend(
  context: Client,
  testRunId: string,
  fileName: string,
  options: GetTestRunFileOptions = { requestOptions: {} }
): StreamableMethod<GetTestRunFile200Response | GetTestRunFileDefaultResponse> {
  return context
    .path("/test-runs/{testRunId}/files/{fileName}", testRunId, fileName)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getTestRunFileDeserialize(
  result: GetTestRunFile200Response | GetTestRunFileDefaultResponse
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

/** Get test run file by file name. */
export async function getTestRunFile(
  context: Client,
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

export function _listMetricDimensionValuesSend(
  context: Client,
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
      ...operationOptionsToRequestParameters(options),
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
): Promise<PagedDimensionValueList> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    value: (result.body["value"] ?? []).map((p) => ({ value: p["value"] })),
    nextLink: result.body["nextLink"],
  };
}

/** List the dimension values for the given metric dimension name. */
export async function listMetricDimensionValues(
  context: Client,
  testRunId: string,
  name: string,
  metricNamespace: string,
  options: ListMetricDimensionValuesOptions = { requestOptions: {} }
): Promise<PagedDimensionValueList> {
  const result = await _listMetricDimensionValuesSend(
    context,
    testRunId,
    name,
    metricNamespace,
    options
  );
  return _listMetricDimensionValuesDeserialize(result);
}

export function _listMetricDefinitionsSend(
  context: Client,
  testRunId: string,
  options: ListMetricDefinitionsOptions = { requestOptions: {} }
): StreamableMethod<
  ListMetricDefinitions200Response | ListMetricDefinitionsDefaultResponse
> {
  return context
    .path("/test-runs/{testRunId}/metric-definitions", testRunId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { metricNamespace: options?.metricNamespace },
    });
}

export async function _listMetricDefinitionsDeserialize(
  result:
    | ListMetricDefinitions200Response
    | ListMetricDefinitionsDefaultResponse
): Promise<MetricDefinitionCollection> {
  if (isUnexpected(result)) {
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
  context: Client,
  testRunId: string,
  options: ListMetricDefinitionsOptions = { requestOptions: {} }
): Promise<MetricDefinitionCollection> {
  const result = await _listMetricDefinitionsSend(context, testRunId, options);
  return _listMetricDefinitionsDeserialize(result);
}

export function _listMetricNamespacesSend(
  context: Client,
  testRunId: string,
  options: ListMetricNamespacesOptions = { requestOptions: {} }
): StreamableMethod<
  ListMetricNamespaces200Response | ListMetricNamespacesDefaultResponse
> {
  return context
    .path("/test-runs/{testRunId}/metric-namespaces", testRunId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listMetricNamespacesDeserialize(
  result: ListMetricNamespaces200Response | ListMetricNamespacesDefaultResponse
): Promise<MetricNamespaceCollection> {
  if (isUnexpected(result)) {
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
  context: Client,
  testRunId: string,
  options: ListMetricNamespacesOptions = { requestOptions: {} }
): Promise<MetricNamespaceCollection> {
  const result = await _listMetricNamespacesSend(context, testRunId, options);
  return _listMetricNamespacesDeserialize(result);
}

export function _listMetricsSend(
  context: Client,
  testRunId: string,
  body: MetricRequestPayload,
  options: ListMetricsOptions = { requestOptions: {} }
): StreamableMethod<ListMetrics200Response | ListMetricsDefaultResponse> {
  return context
    .path("/test-runs/{testRunId}/metrics", testRunId)
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        aggregation: options?.aggregation,
        interval: options?.interval,
        metricName: options?.metricName,
        metricNamespace: options?.metricNamespace,
        timespan: options?.timespan,
      },
      body: {
        filters: (body["filters"] ?? []).map((p) => ({
          name: p["name"],
          values: p["values"],
        })),
      },
    });
}

export async function _listMetricsDeserialize(
  result: ListMetrics200Response | ListMetricsDefaultResponse
): Promise<PagedTimeSeriesElement> {
  if (isUnexpected(result)) {
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
  context: Client,
  testRunId: string,
  body: MetricRequestPayload,
  options: ListMetricsOptions = { requestOptions: {} }
): Promise<PagedTimeSeriesElement> {
  const result = await _listMetricsSend(context, testRunId, body, options);
  return _listMetricsDeserialize(result);
}

export function _listTestRunsSend(
  context: Client,
  options: ListTestRunsOptions = { requestOptions: {} }
): StreamableMethod<ListTestRuns200Response | ListTestRunsDefaultResponse> {
  return context
    .path("/test-runs")
    .get({
      ...operationOptionsToRequestParameters(options),
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
): Promise<PagedTestRun> {
  if (isUnexpected(result)) {
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
  context: Client,
  options: ListTestRunsOptions = { requestOptions: {} }
): Promise<PagedTestRun> {
  const result = await _listTestRunsSend(context, options);
  return _listTestRunsDeserialize(result);
}

export function _stopTestRunSend(
  context: Client,
  testRunId: string,
  options: StopTestRunOptions = { requestOptions: {} }
): StreamableMethod<StopTestRun200Response | StopTestRunDefaultResponse> {
  return context
    .path("/test-runs/{testRunId}:stop", testRunId)
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _stopTestRunDeserialize(
  result: StopTestRun200Response | StopTestRunDefaultResponse
): Promise<TestRun> {
  if (isUnexpected(result)) {
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
  context: Client,
  testRunId: string,
  options: StopTestRunOptions = { requestOptions: {} }
): Promise<TestRun> {
  const result = await _stopTestRunSend(context, testRunId, options);
  return _stopTestRunDeserialize(result);
}
