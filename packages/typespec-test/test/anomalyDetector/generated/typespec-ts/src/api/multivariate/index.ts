// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  multivariateAlignPolicySerializer,
  multivariateDiagnosticsInfoSerializer,
  multivariateVariableValuesSerializer,
  MultivariateMultivariateDetectionResult,
  MultivariateMultivariateBatchDetectionOptions,
  MultivariateModelInfo,
  MultivariateAnomalyDetectionModel,
  MultivariateMultivariateLastDetectionOptions,
  MultivariateMultivariateLastDetectionResult,
  _MultivariateModelList,
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
  MultivariateGetMultivariateBatchDetectionResultOptionalParams,
  MultivariateTrainMultivariateModelOptionalParams,
  MultivariateListMultivariateModelsOptionalParams,
  MultivariateDeleteMultivariateModelOptionalParams,
  MultivariateGetMultivariateModelOptionalParams,
  MultivariateDetectMultivariateBatchAnomalyOptionalParams,
  MultivariateDetectMultivariateLastAnomalyOptionalParams,
} from "../../models/options.js";

export function _getMultivariateBatchDetectionResultSend(
  context: Client,
  resultId: string,
  options: MultivariateGetMultivariateBatchDetectionResultOptionalParams = {
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

  const _result =
    result as unknown as GetMultivariateBatchDetectionResult200Response;
  return {
    resultId: _result.body["resultId"],
    summary: {
      status: _result.body.summary["status"],
      errors:
        _result.body.summary["errors"] === undefined
          ? _result.body.summary["errors"]
          : _result.body.summary["errors"].map((p) => {
              return { code: p["code"], message: p["message"] };
            }),
      variableStates:
        _result.body.summary["variableStates"] === undefined
          ? _result.body.summary["variableStates"]
          : _result.body.summary["variableStates"].map((p) => {
              return {
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
              };
            }),
      setupInfo: {
        dataSource: _result.body.summary.setupInfo["dataSource"],
        topContributorCount:
          _result.body.summary.setupInfo["topContributorCount"],
        startTime: new Date(_result.body.summary.setupInfo["startTime"]),
        endTime: new Date(_result.body.summary.setupInfo["endTime"]),
      },
    },
    results: _result.body["results"].map((p) => {
      return {
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
                  : p.value?.["interpretation"].map((p) => {
                      return {
                        variable: p["variable"],
                        contributionScore: p["contributionScore"],
                        correlationChanges: !p.correlationChanges
                          ? undefined
                          : {
                              changedVariables:
                                p.correlationChanges?.["changedVariables"],
                            },
                      };
                    }),
            },
        errors:
          p["errors"] === undefined
            ? p["errors"]
            : p["errors"].map((p) => {
                return { code: p["code"], message: p["message"] };
              }),
      };
    }),
  };
}

/**
 * For asynchronous inference, get multivariate anomaly detection result based on
 * resultId returned by the BatchDetectAnomaly api.
 */
export async function getMultivariateBatchDetectionResult(
  context: Client,
  resultId: string,
  options: MultivariateGetMultivariateBatchDetectionResultOptionalParams = {
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
  options: MultivariateTrainMultivariateModelOptionalParams = {
    requestOptions: {},
  },
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
          ? modelInfo.alignPolicy
          : multivariateAlignPolicySerializer(modelInfo.alignPolicy),
        status: modelInfo["status"],
        diagnosticsInfo: !modelInfo.diagnosticsInfo
          ? modelInfo.diagnosticsInfo
          : multivariateDiagnosticsInfoSerializer(modelInfo.diagnosticsInfo),
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

  const _result = result as unknown as TrainMultivariateModel201Response;
  return {
    modelId: _result.body["modelId"],
    createdTime: new Date(_result.body["createdTime"]),
    lastUpdatedTime: new Date(_result.body["lastUpdatedTime"]),
    modelInfo: !_result.body.modelInfo
      ? undefined
      : {
          dataSource: _result.body.modelInfo?.["dataSource"],
          dataSchema: _result.body.modelInfo?.["dataSchema"],
          startTime: new Date(_result.body.modelInfo?.["startTime"]),
          endTime: new Date(_result.body.modelInfo?.["endTime"]),
          displayName: _result.body.modelInfo?.["displayName"],
          slidingWindow: _result.body.modelInfo?.["slidingWindow"],
          alignPolicy: !_result.body.modelInfo?.alignPolicy
            ? undefined
            : {
                alignMode: _result.body.modelInfo?.alignPolicy?.["alignMode"],
                fillNAMethod:
                  _result.body.modelInfo?.alignPolicy?.["fillNAMethod"],
                paddingValue:
                  _result.body.modelInfo?.alignPolicy?.["paddingValue"],
              },
          status: _result.body.modelInfo?.["status"],
          errors:
            _result.body.modelInfo?.["errors"] === undefined
              ? _result.body.modelInfo?.["errors"]
              : _result.body.modelInfo?.["errors"].map((p) => {
                  return { code: p["code"], message: p["message"] };
                }),
          diagnosticsInfo: !_result.body.modelInfo?.diagnosticsInfo
            ? undefined
            : {
                modelState: !_result.body.modelInfo?.diagnosticsInfo?.modelState
                  ? undefined
                  : {
                      epochIds:
                        _result.body.modelInfo?.diagnosticsInfo?.modelState?.[
                          "epochIds"
                        ],
                      trainLosses:
                        _result.body.modelInfo?.diagnosticsInfo?.modelState?.[
                          "trainLosses"
                        ],
                      validationLosses:
                        _result.body.modelInfo?.diagnosticsInfo?.modelState?.[
                          "validationLosses"
                        ],
                      latenciesInSeconds:
                        _result.body.modelInfo?.diagnosticsInfo?.modelState?.[
                          "latenciesInSeconds"
                        ],
                    },
                variableStates:
                  _result.body.modelInfo?.diagnosticsInfo?.[
                    "variableStates"
                  ] === undefined
                    ? _result.body.modelInfo?.diagnosticsInfo?.[
                        "variableStates"
                      ]
                    : _result.body.modelInfo?.diagnosticsInfo?.[
                        "variableStates"
                      ].map((p) => {
                        return {
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
                        };
                      }),
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
  options: MultivariateTrainMultivariateModelOptionalParams = {
    requestOptions: {},
  },
): Promise<MultivariateAnomalyDetectionModel> {
  const result = await _trainMultivariateModelSend(context, modelInfo, options);
  return _trainMultivariateModelDeserialize(result);
}

export function _listMultivariateModelsSend(
  context: Client,
  options: MultivariateListMultivariateModelsOptionalParams = {
    requestOptions: {},
  },
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
): Promise<_MultivariateModelList> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const _result = result as unknown as ListMultivariateModels200Response;
  return {
    models: _result.body["models"].map((p) => {
      return {
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
                  : p.modelInfo?.["errors"].map((p) => {
                      return { code: p["code"], message: p["message"] };
                    }),
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
                            (p) => {
                              return {
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
                              };
                            },
                          ),
                  },
            },
      };
    }),
    currentCount: _result.body["currentCount"],
    maxCount: _result.body["maxCount"],
    nextLink: _result.body["nextLink"],
  };
}

/** List models of a resource. */
export function listMultivariateModels(
  context: Client,
  options: MultivariateListMultivariateModelsOptionalParams = {
    requestOptions: {},
  },
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
  options: MultivariateDeleteMultivariateModelOptionalParams = {
    requestOptions: {},
  },
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
  options: MultivariateDeleteMultivariateModelOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _deleteMultivariateModelSend(context, modelId, options);
  return _deleteMultivariateModelDeserialize(result);
}

export function _getMultivariateModelSend(
  context: Client,
  modelId: string,
  options: MultivariateGetMultivariateModelOptionalParams = {
    requestOptions: {},
  },
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

  const _result = result as unknown as GetMultivariateModel200Response;
  return {
    modelId: _result.body["modelId"],
    createdTime: new Date(_result.body["createdTime"]),
    lastUpdatedTime: new Date(_result.body["lastUpdatedTime"]),
    modelInfo: !_result.body.modelInfo
      ? undefined
      : {
          dataSource: _result.body.modelInfo?.["dataSource"],
          dataSchema: _result.body.modelInfo?.["dataSchema"],
          startTime: new Date(_result.body.modelInfo?.["startTime"]),
          endTime: new Date(_result.body.modelInfo?.["endTime"]),
          displayName: _result.body.modelInfo?.["displayName"],
          slidingWindow: _result.body.modelInfo?.["slidingWindow"],
          alignPolicy: !_result.body.modelInfo?.alignPolicy
            ? undefined
            : {
                alignMode: _result.body.modelInfo?.alignPolicy?.["alignMode"],
                fillNAMethod:
                  _result.body.modelInfo?.alignPolicy?.["fillNAMethod"],
                paddingValue:
                  _result.body.modelInfo?.alignPolicy?.["paddingValue"],
              },
          status: _result.body.modelInfo?.["status"],
          errors:
            _result.body.modelInfo?.["errors"] === undefined
              ? _result.body.modelInfo?.["errors"]
              : _result.body.modelInfo?.["errors"].map((p) => {
                  return { code: p["code"], message: p["message"] };
                }),
          diagnosticsInfo: !_result.body.modelInfo?.diagnosticsInfo
            ? undefined
            : {
                modelState: !_result.body.modelInfo?.diagnosticsInfo?.modelState
                  ? undefined
                  : {
                      epochIds:
                        _result.body.modelInfo?.diagnosticsInfo?.modelState?.[
                          "epochIds"
                        ],
                      trainLosses:
                        _result.body.modelInfo?.diagnosticsInfo?.modelState?.[
                          "trainLosses"
                        ],
                      validationLosses:
                        _result.body.modelInfo?.diagnosticsInfo?.modelState?.[
                          "validationLosses"
                        ],
                      latenciesInSeconds:
                        _result.body.modelInfo?.diagnosticsInfo?.modelState?.[
                          "latenciesInSeconds"
                        ],
                    },
                variableStates:
                  _result.body.modelInfo?.diagnosticsInfo?.[
                    "variableStates"
                  ] === undefined
                    ? _result.body.modelInfo?.diagnosticsInfo?.[
                        "variableStates"
                      ]
                    : _result.body.modelInfo?.diagnosticsInfo?.[
                        "variableStates"
                      ].map((p) => {
                        return {
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
                        };
                      }),
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
  options: MultivariateGetMultivariateModelOptionalParams = {
    requestOptions: {},
  },
): Promise<MultivariateAnomalyDetectionModel> {
  const result = await _getMultivariateModelSend(context, modelId, options);
  return _getMultivariateModelDeserialize(result);
}

export function _detectMultivariateBatchAnomalySend(
  context: Client,
  modelId: string,
  options: MultivariateMultivariateBatchDetectionOptions,
  optionalParams: MultivariateDetectMultivariateBatchAnomalyOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | DetectMultivariateBatchAnomaly202Response
  | DetectMultivariateBatchAnomalyDefaultResponse
> {
  return context
    .path("/multivariate/models/{modelId}:detect-batch", modelId)
    .post({
      ...operationOptionsToRequestParameters(optionalParams),
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

  const _result =
    result as unknown as DetectMultivariateBatchAnomaly202Response;
  return {
    resultId: _result.body["resultId"],
    summary: {
      status: _result.body.summary["status"],
      errors:
        _result.body.summary["errors"] === undefined
          ? _result.body.summary["errors"]
          : _result.body.summary["errors"].map((p) => {
              return { code: p["code"], message: p["message"] };
            }),
      variableStates:
        _result.body.summary["variableStates"] === undefined
          ? _result.body.summary["variableStates"]
          : _result.body.summary["variableStates"].map((p) => {
              return {
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
              };
            }),
      setupInfo: {
        dataSource: _result.body.summary.setupInfo["dataSource"],
        topContributorCount:
          _result.body.summary.setupInfo["topContributorCount"],
        startTime: new Date(_result.body.summary.setupInfo["startTime"]),
        endTime: new Date(_result.body.summary.setupInfo["endTime"]),
      },
    },
    results: _result.body["results"].map((p) => {
      return {
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
                  : p.value?.["interpretation"].map((p) => {
                      return {
                        variable: p["variable"],
                        contributionScore: p["contributionScore"],
                        correlationChanges: !p.correlationChanges
                          ? undefined
                          : {
                              changedVariables:
                                p.correlationChanges?.["changedVariables"],
                            },
                      };
                    }),
            },
        errors:
          p["errors"] === undefined
            ? p["errors"]
            : p["errors"].map((p) => {
                return { code: p["code"], message: p["message"] };
              }),
      };
    }),
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
  optionalParams: MultivariateDetectMultivariateBatchAnomalyOptionalParams = {
    requestOptions: {},
  },
): Promise<MultivariateMultivariateDetectionResult> {
  const result = await _detectMultivariateBatchAnomalySend(
    context,
    modelId,
    options,
    optionalParams,
  );
  return _detectMultivariateBatchAnomalyDeserialize(result);
}

export function _detectMultivariateLastAnomalySend(
  context: Client,
  modelId: string,
  options: MultivariateMultivariateLastDetectionOptions,
  optionalParams: MultivariateDetectMultivariateLastAnomalyOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | DetectMultivariateLastAnomaly200Response
  | DetectMultivariateLastAnomalyDefaultResponse
> {
  return context
    .path("/multivariate/models/{modelId}:detect-last", modelId)
    .post({
      ...operationOptionsToRequestParameters(optionalParams),
      body: {
        variables: options["variables"].map(
          multivariateVariableValuesSerializer,
        ),
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

  const _result = result as unknown as DetectMultivariateLastAnomaly200Response;
  return {
    variableStates:
      _result.body["variableStates"] === undefined
        ? _result.body["variableStates"]
        : _result.body["variableStates"].map((p) => {
            return {
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
            };
          }),
    results:
      _result.body["results"] === undefined
        ? _result.body["results"]
        : _result.body["results"].map((p) => {
            return {
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
                        : p.value?.["interpretation"].map((p) => {
                            return {
                              variable: p["variable"],
                              contributionScore: p["contributionScore"],
                              correlationChanges: !p.correlationChanges
                                ? undefined
                                : {
                                    changedVariables:
                                      p.correlationChanges?.[
                                        "changedVariables"
                                      ],
                                  },
                            };
                          }),
                  },
              errors:
                p["errors"] === undefined
                  ? p["errors"]
                  : p["errors"].map((p) => {
                      return { code: p["code"], message: p["message"] };
                    }),
            };
          }),
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
  optionalParams: MultivariateDetectMultivariateLastAnomalyOptionalParams = {
    requestOptions: {},
  },
): Promise<MultivariateMultivariateLastDetectionResult> {
  const result = await _detectMultivariateLastAnomalySend(
    context,
    modelId,
    options,
    optionalParams,
  );
  return _detectMultivariateLastAnomalyDeserialize(result);
}
