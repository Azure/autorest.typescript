// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  MultivariateMultivariateDetectionResult,
  MultivariateMultivariateBatchDetectionOptions,
  MultivariateModelInfo,
  MultivariateAnomalyDetectionModel,
  MultivariateModelList,
  MultivariateMultivariateLastDetectionOptions,
  MultivariateMultivariateLastDetectionResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  AnomalyDetectorContext as Client,
  DeleteMultivariateModel204Response,
  DeleteMultivariateModelDefaultResponse,
  DetectMultivariateBatchAnomaly202Response,
  DetectMultivariateBatchAnomalyDefaultResponse,
  DetectMultivariateLastAnomaly200Response,
  DetectMultivariateLastAnomalyDefaultResponse,
  GetMultivariateBatchDetectionResult200Response,
  GetMultivariateBatchDetectionResultDefaultResponse,
  GetMultivariateModel200Response,
  GetMultivariateModelDefaultResponse,
  ListMultivariateModels200Response,
  ListMultivariateModelsDefaultResponse,
  TrainMultivariateModel201Response,
  TrainMultivariateModelDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  MultivariateGetMultivariateBatchDetectionResultOptions,
  MultivariateTrainMultivariateModelOptions,
  MultivariateListMultivariateModelsOptions,
  MultivariateDeleteMultivariateModelOptions,
  MultivariateGetMultivariateModelOptions,
  MultivariateDetectMultivariateBatchAnomalyOptions,
  MultivariateDetectMultivariateLastAnomalyOptions,
} from "../../models/options.js";

export function _getMultivariateBatchDetectionResultSend(
  context: Client,
  resultId: string,
  options: MultivariateGetMultivariateBatchDetectionResultOptions = {
    requestOptions: {},
  },
): StreamableMethod<
  | GetMultivariateBatchDetectionResult200Response
  | GetMultivariateBatchDetectionResultDefaultResponse
> {
  return context
    .path("/multivariate/detect-batch/{resultId}", resultId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getMultivariateBatchDetectionResultDeserialize(
  result:
    | GetMultivariateBatchDetectionResult200Response
    | GetMultivariateBatchDetectionResultDefaultResponse,
): Promise<MultivariateMultivariateDetectionResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    resultId: result.body["resultId"],
    summary: {
      status: result.body.summary["status"],
      errors:
        result.body.summary["errors"] === undefined
          ? result.body.summary["errors"]
          : result.body.summary["errors"].map((p) => ({
              code: p["code"],
              message: p["message"],
            })),
      variableStates:
        result.body.summary["variableStates"] === undefined
          ? result.body.summary["variableStates"]
          : result.body.summary["variableStates"].map((p) => ({
              variable: p["variable"],
              filledNARatio: p["filledNARatio"],
              effectiveCount: p["effectiveCount"],
              firstTimestamp:
                p["firstTimestamp"] !== undefined
                  ? new Date(p["firstTimestamp"])
                  : undefined,
              lastTimestamp:
                p["lastTimestamp"] !== undefined
                  ? new Date(p["lastTimestamp"])
                  : undefined,
            })),
      setupInfo: {
        dataSource: result.body.summary.setupInfo["dataSource"],
        topContributorCount:
          result.body.summary.setupInfo["topContributorCount"],
        startTime: new Date(result.body.summary.setupInfo["startTime"]),
        endTime: new Date(result.body.summary.setupInfo["endTime"]),
      },
    },
    results: result.body["results"].map((p) => ({
      timestamp: new Date(p["timestamp"]),
      value: !p.value
        ? undefined
        : {
            isAnomaly: p.value?.["isAnomaly"],
            severity: p.value?.["severity"],
            score: p.value?.["score"],
            interpretation:
              p.value?.["interpretation"] === undefined
                ? p.value?.["interpretation"]
                : p.value?.["interpretation"].map((p) => ({
                    variable: p["variable"],
                    contributionScore: p["contributionScore"],
                    correlationChanges: !p.correlationChanges
                      ? undefined
                      : {
                          changedVariables:
                            p.correlationChanges?.["changedVariables"],
                        },
                  })),
          },
      errors:
        p["errors"] === undefined
          ? p["errors"]
          : p["errors"].map((p) => ({
              code: p["code"],
              message: p["message"],
            })),
    })),
  };
}

/**
 * For asynchronous inference, get multivariate anomaly detection result based on
 * resultId returned by the BatchDetectAnomaly api.
 */
export async function getMultivariateBatchDetectionResult(
  context: Client,
  resultId: string,
  options: MultivariateGetMultivariateBatchDetectionResultOptions = {
    requestOptions: {},
  },
): Promise<MultivariateMultivariateDetectionResult> {
  const result = await _getMultivariateBatchDetectionResultSend(
    context,
    resultId,
    options,
  );
  return _getMultivariateBatchDetectionResultDeserialize(result);
}

export function _trainMultivariateModelSend(
  context: Client,
  modelInfo: MultivariateModelInfo,
  options: MultivariateTrainMultivariateModelOptions = { requestOptions: {} },
): StreamableMethod<
  TrainMultivariateModel201Response | TrainMultivariateModelDefaultResponse
> {
  return context
    .path("/multivariate/models")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        dataSource: modelInfo["dataSource"],
        dataSchema: modelInfo["dataSchema"],
        startTime: modelInfo["startTime"].toISOString(),
        endTime: modelInfo["endTime"].toISOString(),
        displayName: modelInfo["displayName"],
        slidingWindow: modelInfo["slidingWindow"],
        alignPolicy: !modelInfo.alignPolicy
          ? undefined
          : {
              alignMode: modelInfo.alignPolicy?.["alignMode"],
              fillNAMethod: modelInfo.alignPolicy?.["fillNAMethod"],
              paddingValue: modelInfo.alignPolicy?.["paddingValue"],
            },
        status: modelInfo["status"],
        diagnosticsInfo: !modelInfo.diagnosticsInfo
          ? undefined
          : {
              modelState: !modelInfo.diagnosticsInfo?.modelState
                ? undefined
                : {
                    epochIds:
                      modelInfo.diagnosticsInfo?.modelState?.["epochIds"],
                    trainLosses:
                      modelInfo.diagnosticsInfo?.modelState?.["trainLosses"],
                    validationLosses:
                      modelInfo.diagnosticsInfo?.modelState?.[
                        "validationLosses"
                      ],
                    latenciesInSeconds:
                      modelInfo.diagnosticsInfo?.modelState?.[
                        "latenciesInSeconds"
                      ],
                  },
              variableStates:
                modelInfo.diagnosticsInfo?.["variableStates"] === undefined
                  ? modelInfo.diagnosticsInfo?.["variableStates"]
                  : modelInfo.diagnosticsInfo?.["variableStates"].map((p) => ({
                      variable: p["variable"],
                      filledNARatio: p["filledNARatio"],
                      effectiveCount: p["effectiveCount"],
                      firstTimestamp: p["firstTimestamp"]?.toISOString(),
                      lastTimestamp: p["lastTimestamp"]?.toISOString(),
                    })),
            },
      },
    });
}

export async function _trainMultivariateModelDeserialize(
  result:
    | TrainMultivariateModel201Response
    | TrainMultivariateModelDefaultResponse,
): Promise<MultivariateAnomalyDetectionModel> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    modelId: result.body["modelId"],
    createdTime: new Date(result.body["createdTime"]),
    lastUpdatedTime: new Date(result.body["lastUpdatedTime"]),
    modelInfo: !result.body.modelInfo
      ? undefined
      : {
          dataSource: result.body.modelInfo?.["dataSource"],
          dataSchema: result.body.modelInfo?.["dataSchema"],
          startTime: new Date(result.body.modelInfo?.["startTime"]),
          endTime: new Date(result.body.modelInfo?.["endTime"]),
          displayName: result.body.modelInfo?.["displayName"],
          slidingWindow: result.body.modelInfo?.["slidingWindow"],
          alignPolicy: !result.body.modelInfo?.alignPolicy
            ? undefined
            : {
                alignMode: result.body.modelInfo?.alignPolicy?.["alignMode"],
                fillNAMethod:
                  result.body.modelInfo?.alignPolicy?.["fillNAMethod"],
                paddingValue:
                  result.body.modelInfo?.alignPolicy?.["paddingValue"],
              },
          status: result.body.modelInfo?.["status"],
          errors:
            result.body.modelInfo?.["errors"] === undefined
              ? result.body.modelInfo?.["errors"]
              : result.body.modelInfo?.["errors"].map((p) => ({
                  code: p["code"],
                  message: p["message"],
                })),
          diagnosticsInfo: !result.body.modelInfo?.diagnosticsInfo
            ? undefined
            : {
                modelState: !result.body.modelInfo?.diagnosticsInfo?.modelState
                  ? undefined
                  : {
                      epochIds:
                        result.body.modelInfo?.diagnosticsInfo?.modelState?.[
                          "epochIds"
                        ],
                      trainLosses:
                        result.body.modelInfo?.diagnosticsInfo?.modelState?.[
                          "trainLosses"
                        ],
                      validationLosses:
                        result.body.modelInfo?.diagnosticsInfo?.modelState?.[
                          "validationLosses"
                        ],
                      latenciesInSeconds:
                        result.body.modelInfo?.diagnosticsInfo?.modelState?.[
                          "latenciesInSeconds"
                        ],
                    },
                variableStates:
                  result.body.modelInfo?.diagnosticsInfo?.["variableStates"] ===
                  undefined
                    ? result.body.modelInfo?.diagnosticsInfo?.["variableStates"]
                    : result.body.modelInfo?.diagnosticsInfo?.[
                        "variableStates"
                      ].map((p) => ({
                        variable: p["variable"],
                        filledNARatio: p["filledNARatio"],
                        effectiveCount: p["effectiveCount"],
                        firstTimestamp:
                          p["firstTimestamp"] !== undefined
                            ? new Date(p["firstTimestamp"])
                            : undefined,
                        lastTimestamp:
                          p["lastTimestamp"] !== undefined
                            ? new Date(p["lastTimestamp"])
                            : undefined,
                      })),
              },
        },
  };
}

/**
 * Create and train a multivariate anomaly detection model. The request must
 * include a source parameter to indicate an externally accessible Azure blob
 * storage URI.There are two types of data input: An URI pointed to an Azure blob
 * storage folder which contains multiple CSV files, and each CSV file contains
 * two columns, timestamp and variable. Another type of input is an URI pointed to
 * a CSV file in Azure blob storage, which contains all the variables and a
 * timestamp column.
 */
export async function trainMultivariateModel(
  context: Client,
  modelInfo: MultivariateModelInfo,
  options: MultivariateTrainMultivariateModelOptions = { requestOptions: {} },
): Promise<MultivariateAnomalyDetectionModel> {
  const result = await _trainMultivariateModelSend(context, modelInfo, options);
  return _trainMultivariateModelDeserialize(result);
}

export function _listMultivariateModelsSend(
  context: Client,
  options: MultivariateListMultivariateModelsOptions = { requestOptions: {} },
): StreamableMethod<
  ListMultivariateModels200Response | ListMultivariateModelsDefaultResponse
> {
  return context
    .path("/multivariate/models")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { skip: options?.skip, top: options?.top },
    });
}

export async function _listMultivariateModelsDeserialize(
  result:
    | ListMultivariateModels200Response
    | ListMultivariateModelsDefaultResponse,
): Promise<MultivariateModelList> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    models: result.body["models"].map((p) => ({
      modelId: p["modelId"],
      createdTime: new Date(p["createdTime"]),
      lastUpdatedTime: new Date(p["lastUpdatedTime"]),
      modelInfo: !p.modelInfo
        ? undefined
        : {
            dataSource: p.modelInfo?.["dataSource"],
            dataSchema: p.modelInfo?.["dataSchema"],
            startTime: new Date(p.modelInfo?.["startTime"]),
            endTime: new Date(p.modelInfo?.["endTime"]),
            displayName: p.modelInfo?.["displayName"],
            slidingWindow: p.modelInfo?.["slidingWindow"],
            alignPolicy: !p.modelInfo?.alignPolicy
              ? undefined
              : {
                  alignMode: p.modelInfo?.alignPolicy?.["alignMode"],
                  fillNAMethod: p.modelInfo?.alignPolicy?.["fillNAMethod"],
                  paddingValue: p.modelInfo?.alignPolicy?.["paddingValue"],
                },
            status: p.modelInfo?.["status"],
            errors:
              p.modelInfo?.["errors"] === undefined
                ? p.modelInfo?.["errors"]
                : p.modelInfo?.["errors"].map((p) => ({
                    code: p["code"],
                    message: p["message"],
                  })),
            diagnosticsInfo: !p.modelInfo?.diagnosticsInfo
              ? undefined
              : {
                  modelState: !p.modelInfo?.diagnosticsInfo?.modelState
                    ? undefined
                    : {
                        epochIds:
                          p.modelInfo?.diagnosticsInfo?.modelState?.[
                            "epochIds"
                          ],
                        trainLosses:
                          p.modelInfo?.diagnosticsInfo?.modelState?.[
                            "trainLosses"
                          ],
                        validationLosses:
                          p.modelInfo?.diagnosticsInfo?.modelState?.[
                            "validationLosses"
                          ],
                        latenciesInSeconds:
                          p.modelInfo?.diagnosticsInfo?.modelState?.[
                            "latenciesInSeconds"
                          ],
                      },
                  variableStates:
                    p.modelInfo?.diagnosticsInfo?.["variableStates"] ===
                    undefined
                      ? p.modelInfo?.diagnosticsInfo?.["variableStates"]
                      : p.modelInfo?.diagnosticsInfo?.["variableStates"].map(
                          (p) => ({
                            variable: p["variable"],
                            filledNARatio: p["filledNARatio"],
                            effectiveCount: p["effectiveCount"],
                            firstTimestamp:
                              p["firstTimestamp"] !== undefined
                                ? new Date(p["firstTimestamp"])
                                : undefined,
                            lastTimestamp:
                              p["lastTimestamp"] !== undefined
                                ? new Date(p["lastTimestamp"])
                                : undefined,
                          }),
                        ),
                },
          },
    })),
    currentCount: result.body["currentCount"],
    maxCount: result.body["maxCount"],
    nextLink: result.body["nextLink"],
  };
}

/** List models of a resource. */
export function listMultivariateModels(
  context: Client,
  options: MultivariateListMultivariateModelsOptions = { requestOptions: {} },
): PagedAsyncIterableIterator<MultivariateAnomalyDetectionModel> {
  return buildPagedAsyncIterator(
    context,
    () => _listMultivariateModelsSend(context, options),
    _listMultivariateModelsDeserialize,
    { itemName: "models", nextLinkName: "nextLink" },
  );
}

export function _deleteMultivariateModelSend(
  context: Client,
  modelId: string,
  options: MultivariateDeleteMultivariateModelOptions = { requestOptions: {} },
): StreamableMethod<
  DeleteMultivariateModel204Response | DeleteMultivariateModelDefaultResponse
> {
  return context
    .path("/multivariate/models/{modelId}", modelId)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteMultivariateModelDeserialize(
  result:
    | DeleteMultivariateModel204Response
    | DeleteMultivariateModelDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Delete an existing multivariate model according to the modelId */
export async function deleteMultivariateModel(
  context: Client,
  modelId: string,
  options: MultivariateDeleteMultivariateModelOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteMultivariateModelSend(context, modelId, options);
  return _deleteMultivariateModelDeserialize(result);
}

export function _getMultivariateModelSend(
  context: Client,
  modelId: string,
  options: MultivariateGetMultivariateModelOptions = { requestOptions: {} },
): StreamableMethod<
  GetMultivariateModel200Response | GetMultivariateModelDefaultResponse
> {
  return context
    .path("/multivariate/models/{modelId}", modelId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getMultivariateModelDeserialize(
  result: GetMultivariateModel200Response | GetMultivariateModelDefaultResponse,
): Promise<MultivariateAnomalyDetectionModel> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    modelId: result.body["modelId"],
    createdTime: new Date(result.body["createdTime"]),
    lastUpdatedTime: new Date(result.body["lastUpdatedTime"]),
    modelInfo: !result.body.modelInfo
      ? undefined
      : {
          dataSource: result.body.modelInfo?.["dataSource"],
          dataSchema: result.body.modelInfo?.["dataSchema"],
          startTime: new Date(result.body.modelInfo?.["startTime"]),
          endTime: new Date(result.body.modelInfo?.["endTime"]),
          displayName: result.body.modelInfo?.["displayName"],
          slidingWindow: result.body.modelInfo?.["slidingWindow"],
          alignPolicy: !result.body.modelInfo?.alignPolicy
            ? undefined
            : {
                alignMode: result.body.modelInfo?.alignPolicy?.["alignMode"],
                fillNAMethod:
                  result.body.modelInfo?.alignPolicy?.["fillNAMethod"],
                paddingValue:
                  result.body.modelInfo?.alignPolicy?.["paddingValue"],
              },
          status: result.body.modelInfo?.["status"],
          errors:
            result.body.modelInfo?.["errors"] === undefined
              ? result.body.modelInfo?.["errors"]
              : result.body.modelInfo?.["errors"].map((p) => ({
                  code: p["code"],
                  message: p["message"],
                })),
          diagnosticsInfo: !result.body.modelInfo?.diagnosticsInfo
            ? undefined
            : {
                modelState: !result.body.modelInfo?.diagnosticsInfo?.modelState
                  ? undefined
                  : {
                      epochIds:
                        result.body.modelInfo?.diagnosticsInfo?.modelState?.[
                          "epochIds"
                        ],
                      trainLosses:
                        result.body.modelInfo?.diagnosticsInfo?.modelState?.[
                          "trainLosses"
                        ],
                      validationLosses:
                        result.body.modelInfo?.diagnosticsInfo?.modelState?.[
                          "validationLosses"
                        ],
                      latenciesInSeconds:
                        result.body.modelInfo?.diagnosticsInfo?.modelState?.[
                          "latenciesInSeconds"
                        ],
                    },
                variableStates:
                  result.body.modelInfo?.diagnosticsInfo?.["variableStates"] ===
                  undefined
                    ? result.body.modelInfo?.diagnosticsInfo?.["variableStates"]
                    : result.body.modelInfo?.diagnosticsInfo?.[
                        "variableStates"
                      ].map((p) => ({
                        variable: p["variable"],
                        filledNARatio: p["filledNARatio"],
                        effectiveCount: p["effectiveCount"],
                        firstTimestamp:
                          p["firstTimestamp"] !== undefined
                            ? new Date(p["firstTimestamp"])
                            : undefined,
                        lastTimestamp:
                          p["lastTimestamp"] !== undefined
                            ? new Date(p["lastTimestamp"])
                            : undefined,
                      })),
              },
        },
  };
}

/**
 * Get detailed information of multivariate model, including the training status
 * and variables used in the model.
 */
export async function getMultivariateModel(
  context: Client,
  modelId: string,
  options: MultivariateGetMultivariateModelOptions = { requestOptions: {} },
): Promise<MultivariateAnomalyDetectionModel> {
  const result = await _getMultivariateModelSend(context, modelId, options);
  return _getMultivariateModelDeserialize(result);
}

export function _detectMultivariateBatchAnomalySend(
  context: Client,
  modelId: string,
  options: MultivariateMultivariateBatchDetectionOptions,
  options: MultivariateDetectMultivariateBatchAnomalyOptions = {
    requestOptions: {},
  },
): StreamableMethod<
  | DetectMultivariateBatchAnomaly202Response
  | DetectMultivariateBatchAnomalyDefaultResponse
> {
  return context
    .path("/multivariate/models/{modelId}:detect-batch", modelId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        dataSource: options["dataSource"],
        topContributorCount: options["topContributorCount"],
        startTime: options["startTime"].toISOString(),
        endTime: options["endTime"].toISOString(),
      },
    });
}

export async function _detectMultivariateBatchAnomalyDeserialize(
  result:
    | DetectMultivariateBatchAnomaly202Response
    | DetectMultivariateBatchAnomalyDefaultResponse,
): Promise<MultivariateMultivariateDetectionResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    resultId: result.body["resultId"],
    summary: {
      status: result.body.summary["status"],
      errors:
        result.body.summary["errors"] === undefined
          ? result.body.summary["errors"]
          : result.body.summary["errors"].map((p) => ({
              code: p["code"],
              message: p["message"],
            })),
      variableStates:
        result.body.summary["variableStates"] === undefined
          ? result.body.summary["variableStates"]
          : result.body.summary["variableStates"].map((p) => ({
              variable: p["variable"],
              filledNARatio: p["filledNARatio"],
              effectiveCount: p["effectiveCount"],
              firstTimestamp:
                p["firstTimestamp"] !== undefined
                  ? new Date(p["firstTimestamp"])
                  : undefined,
              lastTimestamp:
                p["lastTimestamp"] !== undefined
                  ? new Date(p["lastTimestamp"])
                  : undefined,
            })),
      setupInfo: {
        dataSource: result.body.summary.setupInfo["dataSource"],
        topContributorCount:
          result.body.summary.setupInfo["topContributorCount"],
        startTime: new Date(result.body.summary.setupInfo["startTime"]),
        endTime: new Date(result.body.summary.setupInfo["endTime"]),
      },
    },
    results: result.body["results"].map((p) => ({
      timestamp: new Date(p["timestamp"]),
      value: !p.value
        ? undefined
        : {
            isAnomaly: p.value?.["isAnomaly"],
            severity: p.value?.["severity"],
            score: p.value?.["score"],
            interpretation:
              p.value?.["interpretation"] === undefined
                ? p.value?.["interpretation"]
                : p.value?.["interpretation"].map((p) => ({
                    variable: p["variable"],
                    contributionScore: p["contributionScore"],
                    correlationChanges: !p.correlationChanges
                      ? undefined
                      : {
                          changedVariables:
                            p.correlationChanges?.["changedVariables"],
                        },
                  })),
          },
      errors:
        p["errors"] === undefined
          ? p["errors"]
          : p["errors"].map((p) => ({
              code: p["code"],
              message: p["message"],
            })),
    })),
  };
}

/**
 * Submit multivariate anomaly detection task with the modelId of trained model
 * and inference data, the input schema should be the same with the training
 * request. The request will complete asynchronously and return a resultId to
 * query the detection result.The request should be a source link to indicate an
 * externally accessible Azure storage Uri, either pointed to an Azure blob
 * storage folder, or pointed to a CSV file in Azure blob storage.
 */
export async function detectMultivariateBatchAnomaly(
  context: Client,
  modelId: string,
  options: MultivariateMultivariateBatchDetectionOptions,
  options: MultivariateDetectMultivariateBatchAnomalyOptions = {
    requestOptions: {},
  },
): Promise<MultivariateMultivariateDetectionResult> {
  const result = await _detectMultivariateBatchAnomalySend(
    context,
    modelId,
    options,
    options,
  );
  return _detectMultivariateBatchAnomalyDeserialize(result);
}

export function _detectMultivariateLastAnomalySend(
  context: Client,
  modelId: string,
  options: MultivariateMultivariateLastDetectionOptions,
  options: MultivariateDetectMultivariateLastAnomalyOptions = {
    requestOptions: {},
  },
): StreamableMethod<
  | DetectMultivariateLastAnomaly200Response
  | DetectMultivariateLastAnomalyDefaultResponse
> {
  return context
    .path("/multivariate/models/{modelId}:detect-last", modelId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        variables: options["variables"].map((p) => ({
          variable: p["variable"],
          timestamps: p["timestamps"],
          values: p["values"],
        })),
        topContributorCount: options["topContributorCount"],
      },
    });
}

export async function _detectMultivariateLastAnomalyDeserialize(
  result:
    | DetectMultivariateLastAnomaly200Response
    | DetectMultivariateLastAnomalyDefaultResponse,
): Promise<MultivariateMultivariateLastDetectionResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    variableStates:
      result.body["variableStates"] === undefined
        ? result.body["variableStates"]
        : result.body["variableStates"].map((p) => ({
            variable: p["variable"],
            filledNARatio: p["filledNARatio"],
            effectiveCount: p["effectiveCount"],
            firstTimestamp:
              p["firstTimestamp"] !== undefined
                ? new Date(p["firstTimestamp"])
                : undefined,
            lastTimestamp:
              p["lastTimestamp"] !== undefined
                ? new Date(p["lastTimestamp"])
                : undefined,
          })),
    results:
      result.body["results"] === undefined
        ? result.body["results"]
        : result.body["results"].map((p) => ({
            timestamp: new Date(p["timestamp"]),
            value: !p.value
              ? undefined
              : {
                  isAnomaly: p.value?.["isAnomaly"],
                  severity: p.value?.["severity"],
                  score: p.value?.["score"],
                  interpretation:
                    p.value?.["interpretation"] === undefined
                      ? p.value?.["interpretation"]
                      : p.value?.["interpretation"].map((p) => ({
                          variable: p["variable"],
                          contributionScore: p["contributionScore"],
                          correlationChanges: !p.correlationChanges
                            ? undefined
                            : {
                                changedVariables:
                                  p.correlationChanges?.["changedVariables"],
                              },
                        })),
                },
            errors:
              p["errors"] === undefined
                ? p["errors"]
                : p["errors"].map((p) => ({
                    code: p["code"],
                    message: p["message"],
                  })),
          })),
  };
}

/**
 * Submit multivariate anomaly detection task with the modelId of trained model
 * and inference data, and the inference data should be put into request body in a
 * JSON format. The request will complete synchronously and return the detection
 * immediately in the response body.
 */
export async function detectMultivariateLastAnomaly(
  context: Client,
  modelId: string,
  options: MultivariateMultivariateLastDetectionOptions,
  options: MultivariateDetectMultivariateLastAnomalyOptions = {
    requestOptions: {},
  },
): Promise<MultivariateMultivariateLastDetectionResult> {
  const result = await _detectMultivariateLastAnomalySend(
    context,
    modelId,
    options,
    options,
  );
  return _detectMultivariateLastAnomalyDeserialize(result);
}
