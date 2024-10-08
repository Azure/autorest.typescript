// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  passFailCriteriaSerializer,
  autoStopCriteriaSerializer,
  secretSerializer,
  certificateMetadataSerializer,
  loadTestConfigurationSerializer,
  appComponentSerializer,
  resourceMetricSerializer,
  dimensionFilterSerializer,
  TestRun,
  TestRunFileInfo,
  TestRunAppComponents,
  TestRunServerMetricConfig,
  DimensionValueList,
  MetricDefinitionCollection,
  MetricNamespaceCollection,
  MetricRequestPayload,
  TimeSeriesElement,
  _Metrics,
  _PagedTestRun,
} from "../models/models.js";
import { LoadTestServiceContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import {
  CreateOrUpdateTestRunOptionalParams,
  CreateOrUpdateAppComponentsOptionalParams,
  CreateOrUpdateServerMetricsConfigOptionalParams,
  DeleteTestRunOptionalParams,
  GetAppComponentsOptionalParams,
  GetServerMetricsConfigOptionalParams,
  GetTestRunOptionalParams,
  GetTestRunFileOptionalParams,
  ListMetricDimensionValuesOptionalParams,
  ListMetricDefinitionsOptionalParams,
  ListMetricNamespacesOptionalParams,
  ListMetricsOptionalParams,
  ListTestRunsOptionalParams,
  StopTestRunOptionalParams,
} from "../models/options.js";

export function _createOrUpdateTestRunSend(
  context: Client,
  testRunId: string,
  body: TestRun,
  options: CreateOrUpdateTestRunOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/test-runs/{testRunId}", testRunId)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      queryParameters: { oldTestRunId: options?.oldTestRunId },
      body: {
        passFailCriteria: !body.passFailCriteria
          ? body.passFailCriteria
          : passFailCriteriaSerializer(body.passFailCriteria),
        autoStopCriteria: !body.autoStopCriteria
          ? body.autoStopCriteria
          : autoStopCriteriaSerializer(body.autoStopCriteria),
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
        displayName: body["displayName"],
        testId: body["testId"],
        description: body["description"],
        requestDataLevel: body["requestDataLevel"],
        debugLogsEnabled: body["debugLogsEnabled"],
      },
    });
}

export async function _createOrUpdateTestRunDeserialize(
  result: PathUncheckedResponse,
): Promise<TestRun> {
  const expectedStatuses = ["201", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    testRunId: result.body["testRunId"],
    passFailCriteria: !result.body.passFailCriteria
      ? undefined
      : { passFailMetrics: result.body.passFailCriteria?.["passFailMetrics"] },
    autoStopCriteria: !result.body.autoStopCriteria
      ? undefined
      : {
          autoStopDisabled: result.body.autoStopCriteria?.["autoStopDisabled"],
          errorRate: result.body.autoStopCriteria?.["errorRate"],
          errorRateTimeWindowInSeconds:
            result.body.autoStopCriteria?.["errorRateTimeWindowInSeconds"],
        },
    secrets: result.body["secrets"],
    certificate: !result.body.certificate
      ? undefined
      : {
          value: result.body.certificate?.["value"],
          type: result.body.certificate?.["type"],
          name: result.body.certificate?.["name"],
        },
    environmentVariables: result.body["environmentVariables"],
    errorDetails:
      result.body["errorDetails"] === undefined
        ? result.body["errorDetails"]
        : result.body["errorDetails"].map((p: any) => {
            return { message: p["message"] };
          }),
    testRunStatistics: result.body["testRunStatistics"],
    regionalStatistics: result.body["regionalStatistics"],
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
                requestsPerSecond:
                  result.body.loadTestConfiguration?.optionalLoadTestConfig?.[
                    "requestsPerSecond"
                  ],
                maxResponseTimeInMs:
                  result.body.loadTestConfiguration?.optionalLoadTestConfig?.[
                    "maxResponseTimeInMs"
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
          regionalLoadTestConfig:
            result.body.loadTestConfiguration?.["regionalLoadTestConfig"] ===
            undefined
              ? result.body.loadTestConfiguration?.["regionalLoadTestConfig"]
              : result.body.loadTestConfiguration?.[
                  "regionalLoadTestConfig"
                ].map((p: any) => {
                  return {
                    engineInstances: p["engineInstances"],
                    region: p["region"],
                  };
                }),
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
                      fileName:
                        result.body.testArtifacts?.inputArtifacts
                          ?.configFileInfo?.["fileName"],
                      url: result.body.testArtifacts?.inputArtifacts
                        ?.configFileInfo?.["url"],
                      fileType:
                        result.body.testArtifacts?.inputArtifacts
                          ?.configFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.inputArtifacts
                          ?.configFileInfo?.["expireDateTime"] !== undefined
                          ? new Date(
                              result.body.testArtifacts?.inputArtifacts
                                ?.configFileInfo?.["expireDateTime"],
                            )
                          : undefined,
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
                      fileName:
                        result.body.testArtifacts?.inputArtifacts
                          ?.testScriptFileInfo?.["fileName"],
                      url: result.body.testArtifacts?.inputArtifacts
                        ?.testScriptFileInfo?.["url"],
                      fileType:
                        result.body.testArtifacts?.inputArtifacts
                          ?.testScriptFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.inputArtifacts
                          ?.testScriptFileInfo?.["expireDateTime"] !== undefined
                          ? new Date(
                              result.body.testArtifacts?.inputArtifacts
                                ?.testScriptFileInfo?.["expireDateTime"],
                            )
                          : undefined,
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
                      fileName:
                        result.body.testArtifacts?.inputArtifacts
                          ?.userPropFileInfo?.["fileName"],
                      url: result.body.testArtifacts?.inputArtifacts
                        ?.userPropFileInfo?.["url"],
                      fileType:
                        result.body.testArtifacts?.inputArtifacts
                          ?.userPropFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.inputArtifacts
                          ?.userPropFileInfo?.["expireDateTime"] !== undefined
                          ? new Date(
                              result.body.testArtifacts?.inputArtifacts
                                ?.userPropFileInfo?.["expireDateTime"],
                            )
                          : undefined,
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
                      fileName:
                        result.body.testArtifacts?.inputArtifacts
                          ?.inputArtifactsZipFileInfo?.["fileName"],
                      url: result.body.testArtifacts?.inputArtifacts
                        ?.inputArtifactsZipFileInfo?.["url"],
                      fileType:
                        result.body.testArtifacts?.inputArtifacts
                          ?.inputArtifactsZipFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.inputArtifacts
                          ?.inputArtifactsZipFileInfo?.["expireDateTime"] !==
                        undefined
                          ? new Date(
                              result.body.testArtifacts?.inputArtifacts
                                ?.inputArtifactsZipFileInfo?.["expireDateTime"],
                            )
                          : undefined,
                      validationStatus:
                        result.body.testArtifacts?.inputArtifacts
                          ?.inputArtifactsZipFileInfo?.["validationStatus"],
                      validationFailureDetails:
                        result.body.testArtifacts?.inputArtifacts
                          ?.inputArtifactsZipFileInfo?.[
                          "validationFailureDetails"
                        ],
                    },
                urlTestConfigFileInfo: !result.body.testArtifacts
                  ?.inputArtifacts?.urlTestConfigFileInfo
                  ? undefined
                  : {
                      fileName:
                        result.body.testArtifacts?.inputArtifacts
                          ?.urlTestConfigFileInfo?.["fileName"],
                      url: result.body.testArtifacts?.inputArtifacts
                        ?.urlTestConfigFileInfo?.["url"],
                      fileType:
                        result.body.testArtifacts?.inputArtifacts
                          ?.urlTestConfigFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.inputArtifacts
                          ?.urlTestConfigFileInfo?.["expireDateTime"] !==
                        undefined
                          ? new Date(
                              result.body.testArtifacts?.inputArtifacts
                                ?.urlTestConfigFileInfo?.["expireDateTime"],
                            )
                          : undefined,
                      validationStatus:
                        result.body.testArtifacts?.inputArtifacts
                          ?.urlTestConfigFileInfo?.["validationStatus"],
                      validationFailureDetails:
                        result.body.testArtifacts?.inputArtifacts
                          ?.urlTestConfigFileInfo?.["validationFailureDetails"],
                    },
                additionalFileInfo:
                  result.body.testArtifacts?.inputArtifacts?.[
                    "additionalFileInfo"
                  ] === undefined
                    ? result.body.testArtifacts?.inputArtifacts?.[
                        "additionalFileInfo"
                      ]
                    : result.body.testArtifacts?.inputArtifacts?.[
                        "additionalFileInfo"
                      ].map((p: any) => {
                        return {
                          fileName: p["fileName"],
                          url: p["url"],
                          fileType: p["fileType"],
                          expireDateTime:
                            p["expireDateTime"] !== undefined
                              ? new Date(p["expireDateTime"])
                              : undefined,
                          validationStatus: p["validationStatus"],
                          validationFailureDetails:
                            p["validationFailureDetails"],
                        };
                      }),
              },
          outputArtifacts: !result.body.testArtifacts?.outputArtifacts
            ? undefined
            : {
                resultFileInfo: !result.body.testArtifacts?.outputArtifacts
                  ?.resultFileInfo
                  ? undefined
                  : {
                      fileName:
                        result.body.testArtifacts?.outputArtifacts
                          ?.resultFileInfo?.["fileName"],
                      url: result.body.testArtifacts?.outputArtifacts
                        ?.resultFileInfo?.["url"],
                      fileType:
                        result.body.testArtifacts?.outputArtifacts
                          ?.resultFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.outputArtifacts
                          ?.resultFileInfo?.["expireDateTime"] !== undefined
                          ? new Date(
                              result.body.testArtifacts?.outputArtifacts
                                ?.resultFileInfo?.["expireDateTime"],
                            )
                          : undefined,
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
                      fileName:
                        result.body.testArtifacts?.outputArtifacts
                          ?.logsFileInfo?.["fileName"],
                      url: result.body.testArtifacts?.outputArtifacts
                        ?.logsFileInfo?.["url"],
                      fileType:
                        result.body.testArtifacts?.outputArtifacts
                          ?.logsFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.outputArtifacts
                          ?.logsFileInfo?.["expireDateTime"] !== undefined
                          ? new Date(
                              result.body.testArtifacts?.outputArtifacts
                                ?.logsFileInfo?.["expireDateTime"],
                            )
                          : undefined,
                      validationStatus:
                        result.body.testArtifacts?.outputArtifacts
                          ?.logsFileInfo?.["validationStatus"],
                      validationFailureDetails:
                        result.body.testArtifacts?.outputArtifacts
                          ?.logsFileInfo?.["validationFailureDetails"],
                    },
                artifactsContainerInfo: !result.body.testArtifacts
                  ?.outputArtifacts?.artifactsContainerInfo
                  ? undefined
                  : {
                      url: result.body.testArtifacts?.outputArtifacts
                        ?.artifactsContainerInfo?.["url"],
                      expireDateTime:
                        result.body.testArtifacts?.outputArtifacts
                          ?.artifactsContainerInfo?.["expireDateTime"] !==
                        undefined
                          ? new Date(
                              result.body.testArtifacts?.outputArtifacts
                                ?.artifactsContainerInfo?.["expireDateTime"],
                            )
                          : undefined,
                    },
                reportFileInfo: !result.body.testArtifacts?.outputArtifacts
                  ?.reportFileInfo
                  ? undefined
                  : {
                      fileName:
                        result.body.testArtifacts?.outputArtifacts
                          ?.reportFileInfo?.["fileName"],
                      url: result.body.testArtifacts?.outputArtifacts
                        ?.reportFileInfo?.["url"],
                      fileType:
                        result.body.testArtifacts?.outputArtifacts
                          ?.reportFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.outputArtifacts
                          ?.reportFileInfo?.["expireDateTime"] !== undefined
                          ? new Date(
                              result.body.testArtifacts?.outputArtifacts
                                ?.reportFileInfo?.["expireDateTime"],
                            )
                          : undefined,
                      validationStatus:
                        result.body.testArtifacts?.outputArtifacts
                          ?.reportFileInfo?.["validationStatus"],
                      validationFailureDetails:
                        result.body.testArtifacts?.outputArtifacts
                          ?.reportFileInfo?.["validationFailureDetails"],
                    },
              },
        },
    testResult: result.body["testResult"],
    virtualUsers: result.body["virtualUsers"],
    displayName: result.body["displayName"],
    testId: result.body["testId"],
    description: result.body["description"],
    status: result.body["status"],
    startDateTime:
      result.body["startDateTime"] !== undefined
        ? new Date(result.body["startDateTime"])
        : undefined,
    endDateTime:
      result.body["endDateTime"] !== undefined
        ? new Date(result.body["endDateTime"])
        : undefined,
    executedDateTime:
      result.body["executedDateTime"] !== undefined
        ? new Date(result.body["executedDateTime"])
        : undefined,
    portalUrl: result.body["portalUrl"],
    duration: result.body["duration"],
    subnetId: result.body["subnetId"],
    kind: result.body["kind"],
    requestDataLevel: result.body["requestDataLevel"],
    debugLogsEnabled: result.body["debugLogsEnabled"],
    publicIPDisabled: result.body["publicIPDisabled"],
    createdDateTime:
      result.body["createdDateTime"] !== undefined
        ? new Date(result.body["createdDateTime"])
        : undefined,
    createdBy: result.body["createdBy"],
    lastModifiedDateTime:
      result.body["lastModifiedDateTime"] !== undefined
        ? new Date(result.body["lastModifiedDateTime"])
        : undefined,
    lastModifiedBy: result.body["lastModifiedBy"],
  };
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

export function _createOrUpdateAppComponentsSend(
  context: Client,
  testRunId: string,
  body: TestRunAppComponents,
  options: CreateOrUpdateAppComponentsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/test-runs/{testRunId}/app-components", testRunId)
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
  result: PathUncheckedResponse,
): Promise<TestRunAppComponents> {
  const expectedStatuses = ["201", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    components: result.body["components"],
    testRunId: result.body["testRunId"],
    createdDateTime:
      result.body["createdDateTime"] !== undefined
        ? new Date(result.body["createdDateTime"])
        : undefined,
    createdBy: result.body["createdBy"],
    lastModifiedDateTime:
      result.body["lastModifiedDateTime"] !== undefined
        ? new Date(result.body["lastModifiedDateTime"])
        : undefined,
    lastModifiedBy: result.body["lastModifiedBy"],
  };
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

export function _createOrUpdateServerMetricsConfigSend(
  context: Client,
  testRunId: string,
  body: TestRunServerMetricConfig,
  options: CreateOrUpdateServerMetricsConfigOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/test-runs/{testRunId}/server-metrics-config", testRunId)
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
  result: PathUncheckedResponse,
): Promise<TestRunServerMetricConfig> {
  const expectedStatuses = ["201", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    testRunId: result.body["testRunId"],
    metrics: result.body["metrics"],
    createdDateTime:
      result.body["createdDateTime"] !== undefined
        ? new Date(result.body["createdDateTime"])
        : undefined,
    createdBy: result.body["createdBy"],
    lastModifiedDateTime:
      result.body["lastModifiedDateTime"] !== undefined
        ? new Date(result.body["lastModifiedDateTime"])
        : undefined,
    lastModifiedBy: result.body["lastModifiedBy"],
  };
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

export function _deleteTestRunSend(
  context: Client,
  testRunId: string,
  options: DeleteTestRunOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/test-runs/{testRunId}", testRunId)
    .delete({ ...operationOptionsToRequestParameters(options) });
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

export function _getAppComponentsSend(
  context: Client,
  testRunId: string,
  options: GetAppComponentsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/test-runs/{testRunId}/app-components", testRunId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getAppComponentsDeserialize(
  result: PathUncheckedResponse,
): Promise<TestRunAppComponents> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    components: result.body["components"],
    testRunId: result.body["testRunId"],
    createdDateTime:
      result.body["createdDateTime"] !== undefined
        ? new Date(result.body["createdDateTime"])
        : undefined,
    createdBy: result.body["createdBy"],
    lastModifiedDateTime:
      result.body["lastModifiedDateTime"] !== undefined
        ? new Date(result.body["lastModifiedDateTime"])
        : undefined,
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
  options: GetAppComponentsOptionalParams = { requestOptions: {} },
): Promise<TestRunAppComponents> {
  const result = await _getAppComponentsSend(context, testRunId, options);
  return _getAppComponentsDeserialize(result);
}

export function _getServerMetricsConfigSend(
  context: Client,
  testRunId: string,
  options: GetServerMetricsConfigOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/test-runs/{testRunId}/server-metrics-config", testRunId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getServerMetricsConfigDeserialize(
  result: PathUncheckedResponse,
): Promise<TestRunServerMetricConfig> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    testRunId: result.body["testRunId"],
    metrics: result.body["metrics"],
    createdDateTime:
      result.body["createdDateTime"] !== undefined
        ? new Date(result.body["createdDateTime"])
        : undefined,
    createdBy: result.body["createdBy"],
    lastModifiedDateTime:
      result.body["lastModifiedDateTime"] !== undefined
        ? new Date(result.body["lastModifiedDateTime"])
        : undefined,
    lastModifiedBy: result.body["lastModifiedBy"],
  };
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

export function _getTestRunSend(
  context: Client,
  testRunId: string,
  options: GetTestRunOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/test-runs/{testRunId}", testRunId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getTestRunDeserialize(
  result: PathUncheckedResponse,
): Promise<TestRun> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    testRunId: result.body["testRunId"],
    passFailCriteria: !result.body.passFailCriteria
      ? undefined
      : { passFailMetrics: result.body.passFailCriteria?.["passFailMetrics"] },
    autoStopCriteria: !result.body.autoStopCriteria
      ? undefined
      : {
          autoStopDisabled: result.body.autoStopCriteria?.["autoStopDisabled"],
          errorRate: result.body.autoStopCriteria?.["errorRate"],
          errorRateTimeWindowInSeconds:
            result.body.autoStopCriteria?.["errorRateTimeWindowInSeconds"],
        },
    secrets: result.body["secrets"],
    certificate: !result.body.certificate
      ? undefined
      : {
          value: result.body.certificate?.["value"],
          type: result.body.certificate?.["type"],
          name: result.body.certificate?.["name"],
        },
    environmentVariables: result.body["environmentVariables"],
    errorDetails:
      result.body["errorDetails"] === undefined
        ? result.body["errorDetails"]
        : result.body["errorDetails"].map((p: any) => {
            return { message: p["message"] };
          }),
    testRunStatistics: result.body["testRunStatistics"],
    regionalStatistics: result.body["regionalStatistics"],
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
                requestsPerSecond:
                  result.body.loadTestConfiguration?.optionalLoadTestConfig?.[
                    "requestsPerSecond"
                  ],
                maxResponseTimeInMs:
                  result.body.loadTestConfiguration?.optionalLoadTestConfig?.[
                    "maxResponseTimeInMs"
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
          regionalLoadTestConfig:
            result.body.loadTestConfiguration?.["regionalLoadTestConfig"] ===
            undefined
              ? result.body.loadTestConfiguration?.["regionalLoadTestConfig"]
              : result.body.loadTestConfiguration?.[
                  "regionalLoadTestConfig"
                ].map((p: any) => {
                  return {
                    engineInstances: p["engineInstances"],
                    region: p["region"],
                  };
                }),
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
                      fileName:
                        result.body.testArtifacts?.inputArtifacts
                          ?.configFileInfo?.["fileName"],
                      url: result.body.testArtifacts?.inputArtifacts
                        ?.configFileInfo?.["url"],
                      fileType:
                        result.body.testArtifacts?.inputArtifacts
                          ?.configFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.inputArtifacts
                          ?.configFileInfo?.["expireDateTime"] !== undefined
                          ? new Date(
                              result.body.testArtifacts?.inputArtifacts
                                ?.configFileInfo?.["expireDateTime"],
                            )
                          : undefined,
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
                      fileName:
                        result.body.testArtifacts?.inputArtifacts
                          ?.testScriptFileInfo?.["fileName"],
                      url: result.body.testArtifacts?.inputArtifacts
                        ?.testScriptFileInfo?.["url"],
                      fileType:
                        result.body.testArtifacts?.inputArtifacts
                          ?.testScriptFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.inputArtifacts
                          ?.testScriptFileInfo?.["expireDateTime"] !== undefined
                          ? new Date(
                              result.body.testArtifacts?.inputArtifacts
                                ?.testScriptFileInfo?.["expireDateTime"],
                            )
                          : undefined,
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
                      fileName:
                        result.body.testArtifacts?.inputArtifacts
                          ?.userPropFileInfo?.["fileName"],
                      url: result.body.testArtifacts?.inputArtifacts
                        ?.userPropFileInfo?.["url"],
                      fileType:
                        result.body.testArtifacts?.inputArtifacts
                          ?.userPropFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.inputArtifacts
                          ?.userPropFileInfo?.["expireDateTime"] !== undefined
                          ? new Date(
                              result.body.testArtifacts?.inputArtifacts
                                ?.userPropFileInfo?.["expireDateTime"],
                            )
                          : undefined,
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
                      fileName:
                        result.body.testArtifacts?.inputArtifacts
                          ?.inputArtifactsZipFileInfo?.["fileName"],
                      url: result.body.testArtifacts?.inputArtifacts
                        ?.inputArtifactsZipFileInfo?.["url"],
                      fileType:
                        result.body.testArtifacts?.inputArtifacts
                          ?.inputArtifactsZipFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.inputArtifacts
                          ?.inputArtifactsZipFileInfo?.["expireDateTime"] !==
                        undefined
                          ? new Date(
                              result.body.testArtifacts?.inputArtifacts
                                ?.inputArtifactsZipFileInfo?.["expireDateTime"],
                            )
                          : undefined,
                      validationStatus:
                        result.body.testArtifacts?.inputArtifacts
                          ?.inputArtifactsZipFileInfo?.["validationStatus"],
                      validationFailureDetails:
                        result.body.testArtifacts?.inputArtifacts
                          ?.inputArtifactsZipFileInfo?.[
                          "validationFailureDetails"
                        ],
                    },
                urlTestConfigFileInfo: !result.body.testArtifacts
                  ?.inputArtifacts?.urlTestConfigFileInfo
                  ? undefined
                  : {
                      fileName:
                        result.body.testArtifacts?.inputArtifacts
                          ?.urlTestConfigFileInfo?.["fileName"],
                      url: result.body.testArtifacts?.inputArtifacts
                        ?.urlTestConfigFileInfo?.["url"],
                      fileType:
                        result.body.testArtifacts?.inputArtifacts
                          ?.urlTestConfigFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.inputArtifacts
                          ?.urlTestConfigFileInfo?.["expireDateTime"] !==
                        undefined
                          ? new Date(
                              result.body.testArtifacts?.inputArtifacts
                                ?.urlTestConfigFileInfo?.["expireDateTime"],
                            )
                          : undefined,
                      validationStatus:
                        result.body.testArtifacts?.inputArtifacts
                          ?.urlTestConfigFileInfo?.["validationStatus"],
                      validationFailureDetails:
                        result.body.testArtifacts?.inputArtifacts
                          ?.urlTestConfigFileInfo?.["validationFailureDetails"],
                    },
                additionalFileInfo:
                  result.body.testArtifacts?.inputArtifacts?.[
                    "additionalFileInfo"
                  ] === undefined
                    ? result.body.testArtifacts?.inputArtifacts?.[
                        "additionalFileInfo"
                      ]
                    : result.body.testArtifacts?.inputArtifacts?.[
                        "additionalFileInfo"
                      ].map((p: any) => {
                        return {
                          fileName: p["fileName"],
                          url: p["url"],
                          fileType: p["fileType"],
                          expireDateTime:
                            p["expireDateTime"] !== undefined
                              ? new Date(p["expireDateTime"])
                              : undefined,
                          validationStatus: p["validationStatus"],
                          validationFailureDetails:
                            p["validationFailureDetails"],
                        };
                      }),
              },
          outputArtifacts: !result.body.testArtifacts?.outputArtifacts
            ? undefined
            : {
                resultFileInfo: !result.body.testArtifacts?.outputArtifacts
                  ?.resultFileInfo
                  ? undefined
                  : {
                      fileName:
                        result.body.testArtifacts?.outputArtifacts
                          ?.resultFileInfo?.["fileName"],
                      url: result.body.testArtifacts?.outputArtifacts
                        ?.resultFileInfo?.["url"],
                      fileType:
                        result.body.testArtifacts?.outputArtifacts
                          ?.resultFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.outputArtifacts
                          ?.resultFileInfo?.["expireDateTime"] !== undefined
                          ? new Date(
                              result.body.testArtifacts?.outputArtifacts
                                ?.resultFileInfo?.["expireDateTime"],
                            )
                          : undefined,
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
                      fileName:
                        result.body.testArtifacts?.outputArtifacts
                          ?.logsFileInfo?.["fileName"],
                      url: result.body.testArtifacts?.outputArtifacts
                        ?.logsFileInfo?.["url"],
                      fileType:
                        result.body.testArtifacts?.outputArtifacts
                          ?.logsFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.outputArtifacts
                          ?.logsFileInfo?.["expireDateTime"] !== undefined
                          ? new Date(
                              result.body.testArtifacts?.outputArtifacts
                                ?.logsFileInfo?.["expireDateTime"],
                            )
                          : undefined,
                      validationStatus:
                        result.body.testArtifacts?.outputArtifacts
                          ?.logsFileInfo?.["validationStatus"],
                      validationFailureDetails:
                        result.body.testArtifacts?.outputArtifacts
                          ?.logsFileInfo?.["validationFailureDetails"],
                    },
                artifactsContainerInfo: !result.body.testArtifacts
                  ?.outputArtifacts?.artifactsContainerInfo
                  ? undefined
                  : {
                      url: result.body.testArtifacts?.outputArtifacts
                        ?.artifactsContainerInfo?.["url"],
                      expireDateTime:
                        result.body.testArtifacts?.outputArtifacts
                          ?.artifactsContainerInfo?.["expireDateTime"] !==
                        undefined
                          ? new Date(
                              result.body.testArtifacts?.outputArtifacts
                                ?.artifactsContainerInfo?.["expireDateTime"],
                            )
                          : undefined,
                    },
                reportFileInfo: !result.body.testArtifacts?.outputArtifacts
                  ?.reportFileInfo
                  ? undefined
                  : {
                      fileName:
                        result.body.testArtifacts?.outputArtifacts
                          ?.reportFileInfo?.["fileName"],
                      url: result.body.testArtifacts?.outputArtifacts
                        ?.reportFileInfo?.["url"],
                      fileType:
                        result.body.testArtifacts?.outputArtifacts
                          ?.reportFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.outputArtifacts
                          ?.reportFileInfo?.["expireDateTime"] !== undefined
                          ? new Date(
                              result.body.testArtifacts?.outputArtifacts
                                ?.reportFileInfo?.["expireDateTime"],
                            )
                          : undefined,
                      validationStatus:
                        result.body.testArtifacts?.outputArtifacts
                          ?.reportFileInfo?.["validationStatus"],
                      validationFailureDetails:
                        result.body.testArtifacts?.outputArtifacts
                          ?.reportFileInfo?.["validationFailureDetails"],
                    },
              },
        },
    testResult: result.body["testResult"],
    virtualUsers: result.body["virtualUsers"],
    displayName: result.body["displayName"],
    testId: result.body["testId"],
    description: result.body["description"],
    status: result.body["status"],
    startDateTime:
      result.body["startDateTime"] !== undefined
        ? new Date(result.body["startDateTime"])
        : undefined,
    endDateTime:
      result.body["endDateTime"] !== undefined
        ? new Date(result.body["endDateTime"])
        : undefined,
    executedDateTime:
      result.body["executedDateTime"] !== undefined
        ? new Date(result.body["executedDateTime"])
        : undefined,
    portalUrl: result.body["portalUrl"],
    duration: result.body["duration"],
    subnetId: result.body["subnetId"],
    kind: result.body["kind"],
    requestDataLevel: result.body["requestDataLevel"],
    debugLogsEnabled: result.body["debugLogsEnabled"],
    publicIPDisabled: result.body["publicIPDisabled"],
    createdDateTime:
      result.body["createdDateTime"] !== undefined
        ? new Date(result.body["createdDateTime"])
        : undefined,
    createdBy: result.body["createdBy"],
    lastModifiedDateTime:
      result.body["lastModifiedDateTime"] !== undefined
        ? new Date(result.body["lastModifiedDateTime"])
        : undefined,
    lastModifiedBy: result.body["lastModifiedBy"],
  };
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

export function _getTestRunFileSend(
  context: Client,
  testRunId: string,
  fileName: string,
  options: GetTestRunFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/test-runs/{testRunId}/files/{fileName}", testRunId, fileName)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getTestRunFileDeserialize(
  result: PathUncheckedResponse,
): Promise<TestRunFileInfo> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    fileName: result.body["fileName"],
    url: result.body["url"],
    fileType: result.body["fileType"],
    expireDateTime:
      result.body["expireDateTime"] !== undefined
        ? new Date(result.body["expireDateTime"])
        : undefined,
    validationStatus: result.body["validationStatus"],
    validationFailureDetails: result.body["validationFailureDetails"],
  };
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

export function _listMetricDimensionValuesSend(
  context: Client,
  testRunId: string,
  name: string,
  metricname: string,
  metricNamespace: string,
  timespan: string,
  options: ListMetricDimensionValuesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/test-runs/{testRunId}/metric-dimensions/{name}/values",
      testRunId,
      name,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        metricname: metricname,
        interval: options?.interval,
        metricNamespace: metricNamespace,
        timespan: timespan,
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

  return {
    name: result.body["name"],
    value: result.body["value"],
    nextLink: result.body["nextLink"],
  };
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

export function _listMetricDefinitionsSend(
  context: Client,
  testRunId: string,
  metricNamespace: string,
  options: ListMetricDefinitionsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/test-runs/{testRunId}/metric-definitions", testRunId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { metricNamespace: metricNamespace },
    });
}

export async function _listMetricDefinitionsDeserialize(
  result: PathUncheckedResponse,
): Promise<MetricDefinitionCollection> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        dimensions:
          p["dimensions"] === undefined
            ? p["dimensions"]
            : p["dimensions"].map((p: any) => {
                return { description: p["description"], name: p["name"] };
              }),
        description: p["description"],
        name: p["name"],
        namespace: p["namespace"],
        primaryAggregationType: p["primaryAggregationType"],
        supportedAggregationTypes: p["supportedAggregationTypes"],
        unit: p["unit"],
        metricAvailabilities:
          p["metricAvailabilities"] === undefined
            ? p["metricAvailabilities"]
            : p["metricAvailabilities"].map((p: any) => {
                return { timeGrain: p["timeGrain"] };
              }),
      };
    }),
  };
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

export function _listMetricNamespacesSend(
  context: Client,
  testRunId: string,
  options: ListMetricNamespacesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/test-runs/{testRunId}/metric-namespaces", testRunId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listMetricNamespacesDeserialize(
  result: PathUncheckedResponse,
): Promise<MetricNamespaceCollection> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return { description: p["description"], name: p["name"] };
    }),
  };
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

export function _listMetricsSend(
  context: Client,
  testRunId: string,
  metricname: string,
  metricNamespace: string,
  timespan: string,
  body?: MetricRequestPayload,
  options: ListMetricsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/test-runs/{testRunId}/metrics", testRunId)
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        aggregation: options?.aggregation,
        metricname: metricname,
        interval: options?.interval,
        metricNamespace: metricNamespace,
        timespan: timespan,
      },
      body:
        body === undefined
          ? body
          : {
              filters:
                body["filters"] === undefined
                  ? body["filters"]
                  : body["filters"].map(dimensionFilterSerializer),
            },
    });
}

export async function _listMetricsDeserialize(
  result: PathUncheckedResponse,
): Promise<_Metrics> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        data:
          p["data"] === undefined
            ? p["data"]
            : p["data"].map((p: any) => {
                return {
                  timestamp:
                    p["timestamp"] !== undefined
                      ? new Date(p["timestamp"])
                      : undefined,
                  value: p["value"],
                };
              }),
        dimensionValues:
          p["dimensionValues"] === undefined
            ? p["dimensionValues"]
            : p["dimensionValues"].map((p: any) => {
                return { name: p["name"], value: p["value"] };
              }),
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List the metric values for a load test run. */
export function listMetrics(
  context: Client,
  testRunId: string,
  metricname: string,
  metricNamespace: string,
  timespan: string,
  body?: MetricRequestPayload,
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
        body,
        options,
      ),
    _listMetricsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listTestRunsSend(
  context: Client,
  options: ListTestRunsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/test-runs")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        orderby: options?.orderby,
        search: options?.search,
        testId: options?.testId,
        executionFrom: options?.executionFrom?.toISOString(),
        executionTo: options?.executionTo?.toISOString(),
        status: options?.status,
        maxpagesize: options?.maxpagesize,
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

  return {
    value: result.body["value"].map((p: any) => {
      return {
        testRunId: p["testRunId"],
        passFailCriteria: !p.passFailCriteria
          ? undefined
          : { passFailMetrics: p.passFailCriteria?.["passFailMetrics"] },
        autoStopCriteria: !p.autoStopCriteria
          ? undefined
          : {
              autoStopDisabled: p.autoStopCriteria?.["autoStopDisabled"],
              errorRate: p.autoStopCriteria?.["errorRate"],
              errorRateTimeWindowInSeconds:
                p.autoStopCriteria?.["errorRateTimeWindowInSeconds"],
            },
        secrets: p["secrets"],
        certificate: !p.certificate
          ? undefined
          : {
              value: p.certificate?.["value"],
              type: p.certificate?.["type"],
              name: p.certificate?.["name"],
            },
        environmentVariables: p["environmentVariables"],
        errorDetails:
          p["errorDetails"] === undefined
            ? p["errorDetails"]
            : p["errorDetails"].map((p: any) => {
                return { message: p["message"] };
              }),
        testRunStatistics: p["testRunStatistics"],
        regionalStatistics: p["regionalStatistics"],
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
                    requestsPerSecond:
                      p.loadTestConfiguration?.optionalLoadTestConfig?.[
                        "requestsPerSecond"
                      ],
                    maxResponseTimeInMs:
                      p.loadTestConfiguration?.optionalLoadTestConfig?.[
                        "maxResponseTimeInMs"
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
              regionalLoadTestConfig:
                p.loadTestConfiguration?.["regionalLoadTestConfig"] ===
                undefined
                  ? p.loadTestConfiguration?.["regionalLoadTestConfig"]
                  : p.loadTestConfiguration?.["regionalLoadTestConfig"].map(
                      (p: any) => {
                        return {
                          engineInstances: p["engineInstances"],
                          region: p["region"],
                        };
                      },
                    ),
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
                          fileName:
                            p.testArtifacts?.inputArtifacts?.configFileInfo?.[
                              "fileName"
                            ],
                          url: p.testArtifacts?.inputArtifacts
                            ?.configFileInfo?.["url"],
                          fileType:
                            p.testArtifacts?.inputArtifacts?.configFileInfo?.[
                              "fileType"
                            ],
                          expireDateTime:
                            p.testArtifacts?.inputArtifacts?.configFileInfo?.[
                              "expireDateTime"
                            ] !== undefined
                              ? new Date(
                                  p.testArtifacts?.inputArtifacts
                                    ?.configFileInfo?.["expireDateTime"],
                                )
                              : undefined,
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
                          fileName:
                            p.testArtifacts?.inputArtifacts
                              ?.testScriptFileInfo?.["fileName"],
                          url: p.testArtifacts?.inputArtifacts
                            ?.testScriptFileInfo?.["url"],
                          fileType:
                            p.testArtifacts?.inputArtifacts
                              ?.testScriptFileInfo?.["fileType"],
                          expireDateTime:
                            p.testArtifacts?.inputArtifacts
                              ?.testScriptFileInfo?.["expireDateTime"] !==
                            undefined
                              ? new Date(
                                  p.testArtifacts?.inputArtifacts
                                    ?.testScriptFileInfo?.["expireDateTime"],
                                )
                              : undefined,
                          validationStatus:
                            p.testArtifacts?.inputArtifacts
                              ?.testScriptFileInfo?.["validationStatus"],
                          validationFailureDetails:
                            p.testArtifacts?.inputArtifacts
                              ?.testScriptFileInfo?.[
                              "validationFailureDetails"
                            ],
                        },
                    userPropFileInfo: !p.testArtifacts?.inputArtifacts
                      ?.userPropFileInfo
                      ? undefined
                      : {
                          fileName:
                            p.testArtifacts?.inputArtifacts?.userPropFileInfo?.[
                              "fileName"
                            ],
                          url: p.testArtifacts?.inputArtifacts
                            ?.userPropFileInfo?.["url"],
                          fileType:
                            p.testArtifacts?.inputArtifacts?.userPropFileInfo?.[
                              "fileType"
                            ],
                          expireDateTime:
                            p.testArtifacts?.inputArtifacts?.userPropFileInfo?.[
                              "expireDateTime"
                            ] !== undefined
                              ? new Date(
                                  p.testArtifacts?.inputArtifacts
                                    ?.userPropFileInfo?.["expireDateTime"],
                                )
                              : undefined,
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
                          fileName:
                            p.testArtifacts?.inputArtifacts
                              ?.inputArtifactsZipFileInfo?.["fileName"],
                          url: p.testArtifacts?.inputArtifacts
                            ?.inputArtifactsZipFileInfo?.["url"],
                          fileType:
                            p.testArtifacts?.inputArtifacts
                              ?.inputArtifactsZipFileInfo?.["fileType"],
                          expireDateTime:
                            p.testArtifacts?.inputArtifacts
                              ?.inputArtifactsZipFileInfo?.[
                              "expireDateTime"
                            ] !== undefined
                              ? new Date(
                                  p.testArtifacts?.inputArtifacts
                                    ?.inputArtifactsZipFileInfo?.[
                                    "expireDateTime"
                                  ],
                                )
                              : undefined,
                          validationStatus:
                            p.testArtifacts?.inputArtifacts
                              ?.inputArtifactsZipFileInfo?.["validationStatus"],
                          validationFailureDetails:
                            p.testArtifacts?.inputArtifacts
                              ?.inputArtifactsZipFileInfo?.[
                              "validationFailureDetails"
                            ],
                        },
                    urlTestConfigFileInfo: !p.testArtifacts?.inputArtifacts
                      ?.urlTestConfigFileInfo
                      ? undefined
                      : {
                          fileName:
                            p.testArtifacts?.inputArtifacts
                              ?.urlTestConfigFileInfo?.["fileName"],
                          url: p.testArtifacts?.inputArtifacts
                            ?.urlTestConfigFileInfo?.["url"],
                          fileType:
                            p.testArtifacts?.inputArtifacts
                              ?.urlTestConfigFileInfo?.["fileType"],
                          expireDateTime:
                            p.testArtifacts?.inputArtifacts
                              ?.urlTestConfigFileInfo?.["expireDateTime"] !==
                            undefined
                              ? new Date(
                                  p.testArtifacts?.inputArtifacts
                                    ?.urlTestConfigFileInfo?.["expireDateTime"],
                                )
                              : undefined,
                          validationStatus:
                            p.testArtifacts?.inputArtifacts
                              ?.urlTestConfigFileInfo?.["validationStatus"],
                          validationFailureDetails:
                            p.testArtifacts?.inputArtifacts
                              ?.urlTestConfigFileInfo?.[
                              "validationFailureDetails"
                            ],
                        },
                    additionalFileInfo:
                      p.testArtifacts?.inputArtifacts?.[
                        "additionalFileInfo"
                      ] === undefined
                        ? p.testArtifacts?.inputArtifacts?.[
                            "additionalFileInfo"
                          ]
                        : p.testArtifacts?.inputArtifacts?.[
                            "additionalFileInfo"
                          ].map((p: any) => {
                            return {
                              fileName: p["fileName"],
                              url: p["url"],
                              fileType: p["fileType"],
                              expireDateTime:
                                p["expireDateTime"] !== undefined
                                  ? new Date(p["expireDateTime"])
                                  : undefined,
                              validationStatus: p["validationStatus"],
                              validationFailureDetails:
                                p["validationFailureDetails"],
                            };
                          }),
                  },
              outputArtifacts: !p.testArtifacts?.outputArtifacts
                ? undefined
                : {
                    resultFileInfo: !p.testArtifacts?.outputArtifacts
                      ?.resultFileInfo
                      ? undefined
                      : {
                          fileName:
                            p.testArtifacts?.outputArtifacts?.resultFileInfo?.[
                              "fileName"
                            ],
                          url: p.testArtifacts?.outputArtifacts
                            ?.resultFileInfo?.["url"],
                          fileType:
                            p.testArtifacts?.outputArtifacts?.resultFileInfo?.[
                              "fileType"
                            ],
                          expireDateTime:
                            p.testArtifacts?.outputArtifacts?.resultFileInfo?.[
                              "expireDateTime"
                            ] !== undefined
                              ? new Date(
                                  p.testArtifacts?.outputArtifacts
                                    ?.resultFileInfo?.["expireDateTime"],
                                )
                              : undefined,
                          validationStatus:
                            p.testArtifacts?.outputArtifacts?.resultFileInfo?.[
                              "validationStatus"
                            ],
                          validationFailureDetails:
                            p.testArtifacts?.outputArtifacts?.resultFileInfo?.[
                              "validationFailureDetails"
                            ],
                        },
                    logsFileInfo: !p.testArtifacts?.outputArtifacts
                      ?.logsFileInfo
                      ? undefined
                      : {
                          fileName:
                            p.testArtifacts?.outputArtifacts?.logsFileInfo?.[
                              "fileName"
                            ],
                          url: p.testArtifacts?.outputArtifacts?.logsFileInfo?.[
                            "url"
                          ],
                          fileType:
                            p.testArtifacts?.outputArtifacts?.logsFileInfo?.[
                              "fileType"
                            ],
                          expireDateTime:
                            p.testArtifacts?.outputArtifacts?.logsFileInfo?.[
                              "expireDateTime"
                            ] !== undefined
                              ? new Date(
                                  p.testArtifacts?.outputArtifacts
                                    ?.logsFileInfo?.["expireDateTime"],
                                )
                              : undefined,
                          validationStatus:
                            p.testArtifacts?.outputArtifacts?.logsFileInfo?.[
                              "validationStatus"
                            ],
                          validationFailureDetails:
                            p.testArtifacts?.outputArtifacts?.logsFileInfo?.[
                              "validationFailureDetails"
                            ],
                        },
                    artifactsContainerInfo: !p.testArtifacts?.outputArtifacts
                      ?.artifactsContainerInfo
                      ? undefined
                      : {
                          url: p.testArtifacts?.outputArtifacts
                            ?.artifactsContainerInfo?.["url"],
                          expireDateTime:
                            p.testArtifacts?.outputArtifacts
                              ?.artifactsContainerInfo?.["expireDateTime"] !==
                            undefined
                              ? new Date(
                                  p.testArtifacts?.outputArtifacts
                                    ?.artifactsContainerInfo?.[
                                    "expireDateTime"
                                  ],
                                )
                              : undefined,
                        },
                    reportFileInfo: !p.testArtifacts?.outputArtifacts
                      ?.reportFileInfo
                      ? undefined
                      : {
                          fileName:
                            p.testArtifacts?.outputArtifacts?.reportFileInfo?.[
                              "fileName"
                            ],
                          url: p.testArtifacts?.outputArtifacts
                            ?.reportFileInfo?.["url"],
                          fileType:
                            p.testArtifacts?.outputArtifacts?.reportFileInfo?.[
                              "fileType"
                            ],
                          expireDateTime:
                            p.testArtifacts?.outputArtifacts?.reportFileInfo?.[
                              "expireDateTime"
                            ] !== undefined
                              ? new Date(
                                  p.testArtifacts?.outputArtifacts
                                    ?.reportFileInfo?.["expireDateTime"],
                                )
                              : undefined,
                          validationStatus:
                            p.testArtifacts?.outputArtifacts?.reportFileInfo?.[
                              "validationStatus"
                            ],
                          validationFailureDetails:
                            p.testArtifacts?.outputArtifacts?.reportFileInfo?.[
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
        startDateTime:
          p["startDateTime"] !== undefined
            ? new Date(p["startDateTime"])
            : undefined,
        endDateTime:
          p["endDateTime"] !== undefined
            ? new Date(p["endDateTime"])
            : undefined,
        executedDateTime:
          p["executedDateTime"] !== undefined
            ? new Date(p["executedDateTime"])
            : undefined,
        portalUrl: p["portalUrl"],
        duration: p["duration"],
        subnetId: p["subnetId"],
        kind: p["kind"],
        requestDataLevel: p["requestDataLevel"],
        debugLogsEnabled: p["debugLogsEnabled"],
        publicIPDisabled: p["publicIPDisabled"],
        createdDateTime:
          p["createdDateTime"] !== undefined
            ? new Date(p["createdDateTime"])
            : undefined,
        createdBy: p["createdBy"],
        lastModifiedDateTime:
          p["lastModifiedDateTime"] !== undefined
            ? new Date(p["lastModifiedDateTime"])
            : undefined,
        lastModifiedBy: p["lastModifiedBy"],
      };
    }),
    nextLink: result.body["nextLink"],
  };
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

export function _stopTestRunSend(
  context: Client,
  testRunId: string,
  options: StopTestRunOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/test-runs/{testRunId}:stop", testRunId)
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _stopTestRunDeserialize(
  result: PathUncheckedResponse,
): Promise<TestRun> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    testRunId: result.body["testRunId"],
    passFailCriteria: !result.body.passFailCriteria
      ? undefined
      : { passFailMetrics: result.body.passFailCriteria?.["passFailMetrics"] },
    autoStopCriteria: !result.body.autoStopCriteria
      ? undefined
      : {
          autoStopDisabled: result.body.autoStopCriteria?.["autoStopDisabled"],
          errorRate: result.body.autoStopCriteria?.["errorRate"],
          errorRateTimeWindowInSeconds:
            result.body.autoStopCriteria?.["errorRateTimeWindowInSeconds"],
        },
    secrets: result.body["secrets"],
    certificate: !result.body.certificate
      ? undefined
      : {
          value: result.body.certificate?.["value"],
          type: result.body.certificate?.["type"],
          name: result.body.certificate?.["name"],
        },
    environmentVariables: result.body["environmentVariables"],
    errorDetails:
      result.body["errorDetails"] === undefined
        ? result.body["errorDetails"]
        : result.body["errorDetails"].map((p: any) => {
            return { message: p["message"] };
          }),
    testRunStatistics: result.body["testRunStatistics"],
    regionalStatistics: result.body["regionalStatistics"],
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
                requestsPerSecond:
                  result.body.loadTestConfiguration?.optionalLoadTestConfig?.[
                    "requestsPerSecond"
                  ],
                maxResponseTimeInMs:
                  result.body.loadTestConfiguration?.optionalLoadTestConfig?.[
                    "maxResponseTimeInMs"
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
          regionalLoadTestConfig:
            result.body.loadTestConfiguration?.["regionalLoadTestConfig"] ===
            undefined
              ? result.body.loadTestConfiguration?.["regionalLoadTestConfig"]
              : result.body.loadTestConfiguration?.[
                  "regionalLoadTestConfig"
                ].map((p: any) => {
                  return {
                    engineInstances: p["engineInstances"],
                    region: p["region"],
                  };
                }),
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
                      fileName:
                        result.body.testArtifacts?.inputArtifacts
                          ?.configFileInfo?.["fileName"],
                      url: result.body.testArtifacts?.inputArtifacts
                        ?.configFileInfo?.["url"],
                      fileType:
                        result.body.testArtifacts?.inputArtifacts
                          ?.configFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.inputArtifacts
                          ?.configFileInfo?.["expireDateTime"] !== undefined
                          ? new Date(
                              result.body.testArtifacts?.inputArtifacts
                                ?.configFileInfo?.["expireDateTime"],
                            )
                          : undefined,
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
                      fileName:
                        result.body.testArtifacts?.inputArtifacts
                          ?.testScriptFileInfo?.["fileName"],
                      url: result.body.testArtifacts?.inputArtifacts
                        ?.testScriptFileInfo?.["url"],
                      fileType:
                        result.body.testArtifacts?.inputArtifacts
                          ?.testScriptFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.inputArtifacts
                          ?.testScriptFileInfo?.["expireDateTime"] !== undefined
                          ? new Date(
                              result.body.testArtifacts?.inputArtifacts
                                ?.testScriptFileInfo?.["expireDateTime"],
                            )
                          : undefined,
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
                      fileName:
                        result.body.testArtifacts?.inputArtifacts
                          ?.userPropFileInfo?.["fileName"],
                      url: result.body.testArtifacts?.inputArtifacts
                        ?.userPropFileInfo?.["url"],
                      fileType:
                        result.body.testArtifacts?.inputArtifacts
                          ?.userPropFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.inputArtifacts
                          ?.userPropFileInfo?.["expireDateTime"] !== undefined
                          ? new Date(
                              result.body.testArtifacts?.inputArtifacts
                                ?.userPropFileInfo?.["expireDateTime"],
                            )
                          : undefined,
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
                      fileName:
                        result.body.testArtifacts?.inputArtifacts
                          ?.inputArtifactsZipFileInfo?.["fileName"],
                      url: result.body.testArtifacts?.inputArtifacts
                        ?.inputArtifactsZipFileInfo?.["url"],
                      fileType:
                        result.body.testArtifacts?.inputArtifacts
                          ?.inputArtifactsZipFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.inputArtifacts
                          ?.inputArtifactsZipFileInfo?.["expireDateTime"] !==
                        undefined
                          ? new Date(
                              result.body.testArtifacts?.inputArtifacts
                                ?.inputArtifactsZipFileInfo?.["expireDateTime"],
                            )
                          : undefined,
                      validationStatus:
                        result.body.testArtifacts?.inputArtifacts
                          ?.inputArtifactsZipFileInfo?.["validationStatus"],
                      validationFailureDetails:
                        result.body.testArtifacts?.inputArtifacts
                          ?.inputArtifactsZipFileInfo?.[
                          "validationFailureDetails"
                        ],
                    },
                urlTestConfigFileInfo: !result.body.testArtifacts
                  ?.inputArtifacts?.urlTestConfigFileInfo
                  ? undefined
                  : {
                      fileName:
                        result.body.testArtifacts?.inputArtifacts
                          ?.urlTestConfigFileInfo?.["fileName"],
                      url: result.body.testArtifacts?.inputArtifacts
                        ?.urlTestConfigFileInfo?.["url"],
                      fileType:
                        result.body.testArtifacts?.inputArtifacts
                          ?.urlTestConfigFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.inputArtifacts
                          ?.urlTestConfigFileInfo?.["expireDateTime"] !==
                        undefined
                          ? new Date(
                              result.body.testArtifacts?.inputArtifacts
                                ?.urlTestConfigFileInfo?.["expireDateTime"],
                            )
                          : undefined,
                      validationStatus:
                        result.body.testArtifacts?.inputArtifacts
                          ?.urlTestConfigFileInfo?.["validationStatus"],
                      validationFailureDetails:
                        result.body.testArtifacts?.inputArtifacts
                          ?.urlTestConfigFileInfo?.["validationFailureDetails"],
                    },
                additionalFileInfo:
                  result.body.testArtifacts?.inputArtifacts?.[
                    "additionalFileInfo"
                  ] === undefined
                    ? result.body.testArtifacts?.inputArtifacts?.[
                        "additionalFileInfo"
                      ]
                    : result.body.testArtifacts?.inputArtifacts?.[
                        "additionalFileInfo"
                      ].map((p: any) => {
                        return {
                          fileName: p["fileName"],
                          url: p["url"],
                          fileType: p["fileType"],
                          expireDateTime:
                            p["expireDateTime"] !== undefined
                              ? new Date(p["expireDateTime"])
                              : undefined,
                          validationStatus: p["validationStatus"],
                          validationFailureDetails:
                            p["validationFailureDetails"],
                        };
                      }),
              },
          outputArtifacts: !result.body.testArtifacts?.outputArtifacts
            ? undefined
            : {
                resultFileInfo: !result.body.testArtifacts?.outputArtifacts
                  ?.resultFileInfo
                  ? undefined
                  : {
                      fileName:
                        result.body.testArtifacts?.outputArtifacts
                          ?.resultFileInfo?.["fileName"],
                      url: result.body.testArtifacts?.outputArtifacts
                        ?.resultFileInfo?.["url"],
                      fileType:
                        result.body.testArtifacts?.outputArtifacts
                          ?.resultFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.outputArtifacts
                          ?.resultFileInfo?.["expireDateTime"] !== undefined
                          ? new Date(
                              result.body.testArtifacts?.outputArtifacts
                                ?.resultFileInfo?.["expireDateTime"],
                            )
                          : undefined,
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
                      fileName:
                        result.body.testArtifacts?.outputArtifacts
                          ?.logsFileInfo?.["fileName"],
                      url: result.body.testArtifacts?.outputArtifacts
                        ?.logsFileInfo?.["url"],
                      fileType:
                        result.body.testArtifacts?.outputArtifacts
                          ?.logsFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.outputArtifacts
                          ?.logsFileInfo?.["expireDateTime"] !== undefined
                          ? new Date(
                              result.body.testArtifacts?.outputArtifacts
                                ?.logsFileInfo?.["expireDateTime"],
                            )
                          : undefined,
                      validationStatus:
                        result.body.testArtifacts?.outputArtifacts
                          ?.logsFileInfo?.["validationStatus"],
                      validationFailureDetails:
                        result.body.testArtifacts?.outputArtifacts
                          ?.logsFileInfo?.["validationFailureDetails"],
                    },
                artifactsContainerInfo: !result.body.testArtifacts
                  ?.outputArtifacts?.artifactsContainerInfo
                  ? undefined
                  : {
                      url: result.body.testArtifacts?.outputArtifacts
                        ?.artifactsContainerInfo?.["url"],
                      expireDateTime:
                        result.body.testArtifacts?.outputArtifacts
                          ?.artifactsContainerInfo?.["expireDateTime"] !==
                        undefined
                          ? new Date(
                              result.body.testArtifacts?.outputArtifacts
                                ?.artifactsContainerInfo?.["expireDateTime"],
                            )
                          : undefined,
                    },
                reportFileInfo: !result.body.testArtifacts?.outputArtifacts
                  ?.reportFileInfo
                  ? undefined
                  : {
                      fileName:
                        result.body.testArtifacts?.outputArtifacts
                          ?.reportFileInfo?.["fileName"],
                      url: result.body.testArtifacts?.outputArtifacts
                        ?.reportFileInfo?.["url"],
                      fileType:
                        result.body.testArtifacts?.outputArtifacts
                          ?.reportFileInfo?.["fileType"],
                      expireDateTime:
                        result.body.testArtifacts?.outputArtifacts
                          ?.reportFileInfo?.["expireDateTime"] !== undefined
                          ? new Date(
                              result.body.testArtifacts?.outputArtifacts
                                ?.reportFileInfo?.["expireDateTime"],
                            )
                          : undefined,
                      validationStatus:
                        result.body.testArtifacts?.outputArtifacts
                          ?.reportFileInfo?.["validationStatus"],
                      validationFailureDetails:
                        result.body.testArtifacts?.outputArtifacts
                          ?.reportFileInfo?.["validationFailureDetails"],
                    },
              },
        },
    testResult: result.body["testResult"],
    virtualUsers: result.body["virtualUsers"],
    displayName: result.body["displayName"],
    testId: result.body["testId"],
    description: result.body["description"],
    status: result.body["status"],
    startDateTime:
      result.body["startDateTime"] !== undefined
        ? new Date(result.body["startDateTime"])
        : undefined,
    endDateTime:
      result.body["endDateTime"] !== undefined
        ? new Date(result.body["endDateTime"])
        : undefined,
    executedDateTime:
      result.body["executedDateTime"] !== undefined
        ? new Date(result.body["executedDateTime"])
        : undefined,
    portalUrl: result.body["portalUrl"],
    duration: result.body["duration"],
    subnetId: result.body["subnetId"],
    kind: result.body["kind"],
    requestDataLevel: result.body["requestDataLevel"],
    debugLogsEnabled: result.body["debugLogsEnabled"],
    publicIPDisabled: result.body["publicIPDisabled"],
    createdDateTime:
      result.body["createdDateTime"] !== undefined
        ? new Date(result.body["createdDateTime"])
        : undefined,
    createdBy: result.body["createdBy"],
    lastModifiedDateTime:
      result.body["lastModifiedDateTime"] !== undefined
        ? new Date(result.body["lastModifiedDateTime"])
        : undefined,
    lastModifiedBy: result.body["lastModifiedBy"],
  };
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
