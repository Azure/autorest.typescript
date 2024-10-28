// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AnomalyDetectorContext as Client,
  MultivariateDeleteMultivariateModelOptionalParams,
  MultivariateDetectMultivariateBatchAnomalyOptionalParams,
  MultivariateDetectMultivariateLastAnomalyOptionalParams,
  MultivariateGetMultivariateBatchDetectionResultOptionalParams,
  MultivariateGetMultivariateModelOptionalParams,
  MultivariateListMultivariateModelsOptionalParams,
  MultivariateTrainMultivariateModelOptionalParams,
} from "../index.js";
import {
  MultivariateMultivariateDetectionResult,
  multivariateMultivariateDetectionResultDeserializer,
  MultivariateMultivariateBatchDetectionOptions,
  multivariateMultivariateBatchDetectionOptionsSerializer,
  MultivariateModelInfo,
  multivariateModelInfoSerializer,
  MultivariateAnomalyDetectionModel,
  multivariateAnomalyDetectionModelDeserializer,
  _MultivariateModelList,
  _multivariateModelListDeserializer,
  MultivariateMultivariateLastDetectionOptions,
  multivariateMultivariateLastDetectionOptionsSerializer,
  MultivariateMultivariateLastDetectionResult,
  multivariateMultivariateLastDetectionResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { parseTemplate } from "../../static-helpers/uriTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getMultivariateBatchDetectionResultSend(
  context: Client,
  resultId: string,
  options: MultivariateGetMultivariateBatchDetectionResultOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const pathParser = parseTemplate("/multivariate/detect-batch/{resultId}");
  const path = pathParser.expand({
    resultId: resultId,
  });
  return context
    .path(path)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getMultivariateBatchDetectionResultDeserialize(
  result: PathUncheckedResponse,
): Promise<MultivariateMultivariateDetectionResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return multivariateMultivariateDetectionResultDeserializer(result.body);
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
): StreamableMethod {
  const path = "/multivariate/models";
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: multivariateModelInfoSerializer(modelInfo),
    });
}

export async function _trainMultivariateModelDeserialize(
  result: PathUncheckedResponse,
): Promise<MultivariateAnomalyDetectionModel> {
  const expectedStatuses = ["201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return multivariateAnomalyDetectionModelDeserializer(result.body);
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
): StreamableMethod {
  const pathParser = parseTemplate("/multivariate/models{?skip,top}");
  const path = pathParser.expand({
    skip: options?.skip,
    top: options?.top,
  });
  return context
    .path(path)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listMultivariateModelsDeserialize(
  result: PathUncheckedResponse,
): Promise<_MultivariateModelList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _multivariateModelListDeserializer(result.body);
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
    ["200"],
    { itemName: "models", nextLinkName: "nextLink" },
  );
}

export function _deleteMultivariateModelSend(
  context: Client,
  modelId: string,
  options: MultivariateDeleteMultivariateModelOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const pathParser = parseTemplate("/multivariate/models/{modelId}");
  const path = pathParser.expand({
    modelId: modelId,
  });
  return context
    .path(path)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteMultivariateModelDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  const pathParser = parseTemplate("/multivariate/models/{modelId}");
  const path = pathParser.expand({
    modelId: modelId,
  });
  return context
    .path(path)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getMultivariateModelDeserialize(
  result: PathUncheckedResponse,
): Promise<MultivariateAnomalyDetectionModel> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return multivariateAnomalyDetectionModelDeserializer(result.body);
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
): StreamableMethod {
  const pathParser = parseTemplate(
    "/multivariate/models/{modelId}:detect-batch",
  );
  const path = pathParser.expand({
    modelId: modelId,
  });
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(optionalParams),
      body: multivariateMultivariateBatchDetectionOptionsSerializer(options),
    });
}

export async function _detectMultivariateBatchAnomalyDeserialize(
  result: PathUncheckedResponse,
): Promise<MultivariateMultivariateDetectionResult> {
  const expectedStatuses = ["202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return multivariateMultivariateDetectionResultDeserializer(result.body);
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
): StreamableMethod {
  const pathParser = parseTemplate(
    "/multivariate/models/{modelId}:detect-last",
  );
  const path = pathParser.expand({
    modelId: modelId,
  });
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(optionalParams),
      body: multivariateMultivariateLastDetectionOptionsSerializer(options),
    });
}

export async function _detectMultivariateLastAnomalyDeserialize(
  result: PathUncheckedResponse,
): Promise<MultivariateMultivariateLastDetectionResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return multivariateMultivariateLastDetectionResultDeserializer(result.body);
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
